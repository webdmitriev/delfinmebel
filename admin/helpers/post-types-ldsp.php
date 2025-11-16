<?php

defined('ABSPATH') || exit;


// === Регистрируем Custom Post Type "ЛДСП" ===
function register_ldsp_post_type() {

  $labels = array(
    'name'               => 'ЛДСП',
    'singular_name'      => 'ЛДСП',
    'menu_name'          => 'ЛДСП',
    'name_admin_bar'     => 'ЛДСП',
    'add_new'            => 'Добавить',
    'add_new_item'       => 'Добавить',
    'new_item'           => 'Добавить',
    'edit_item'          => 'Редактировать',
    'view_item'          => 'Просмотр',
    'all_items'          => 'Все лдсп',
    'search_items'       => 'Поиск лдсп',
    'parent_item_colon'  => 'Родитель лдсп:',
    'not_found'          => 'ЛДСП не найдены.',
    'not_found_in_trash' => 'В корзине лдсп нет.',
  );

  $args = array(
    'labels'             => $labels,
    'public'             => true,
    'show_in_rest'       => true, // Включаем поддержку Gutenberg / API
    'publicly_queryable' => true,
    'show_ui'            => true,
    'show_in_menu'       => true,
    'query_var'          => true,
    'rewrite'            => array('slug' => 'ldsp'),
    'capability_type'    => 'post',
    'has_archive'        => true,
    'hierarchical'       => false,
    'menu_position'      => 5,
    'menu_icon'          => 'dashicons-id', // Иконка меню в админке
    'supports'           => array('title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'),
    'template_lock'      => false,
  );

  register_post_type('ldsp', $args);
}
add_action('init', 'register_ldsp_post_type');


// === Регистрируем метаполя для ldsp ===
function register_ldsp_meta_fields() {
  register_post_meta('ldsp', 'articulate', [
    'type' => 'string',
    'single' => true,
    'sanitize_callback' => 'sanitize_text_field',
    'show_in_rest' => true,
  ]);
  register_post_meta('ldsp', 'is_popular', [
    'type' => 'boolean',
    'single' => true,
    'sanitize_callback' => 'rest_sanitize_boolean',
    'show_in_rest' => true,
  ]);
}
add_action('init', 'register_ldsp_meta_fields');

// === Добавляем метабокс для редактирования полей ===
add_action('add_meta_boxes', function() {
  remove_meta_box('ldsp_fields', 'ldsp', 'normal');
}, 11);

function render_ldsp_meta_box($post) {
  wp_nonce_field('ldsp_meta_nonce', 'ldsp_meta_nonce_field');

  $is_popular = get_post_meta($post->ID, 'is_popular', true);
  $articulate = get_post_meta($post->ID, 'articulate', true);
  ?>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;">
    <div>
      <p>
        <label>
          <input type="checkbox" name="is_popular" value="1" <?php checked($is_popular, 1); ?>>
          <strong>Популярная работа</strong>
        </label>
      </p>
      <p>
        <label for="articulate"><strong>Артикул:</strong></label><br>
        <input type="text" name="articulate" id="articulate" value="<?php echo esc_attr($articulate); ?>" style="width:100%;" />
      </p>
    </div>
  </div>
  <?php
}

// === Сохраняем метаполя ===
function save_ldsp_meta_fields($post_id) {
  // Проверяем nonce
  if (!isset($_POST['ldsp_meta_nonce_field']) || !wp_verify_nonce($_POST['ldsp_meta_nonce_field'], 'ldsp_meta_nonce')) {
    return;
  }

  // Проверяем автосохранение
  if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) return;

  // Проверяем права пользователя
  if (!current_user_can('edit_post', $post_id)) return;

  if (isset($_POST['articulate'])) {
    update_post_meta($post_id, 'articulate', sanitize_text_field($_POST['articulate']));
  }

  $is_popular = isset($_POST['is_popular']) ? 1 : 0;
  update_post_meta($post_id, 'is_popular', $is_popular);
}
// Привязываем к save_post
add_action('save_post', 'save_ldsp_meta_fields');

// === Добавляем колонку "Популярный" в список товаров ===
function ldsp_add_popular_column($columns) {
  // Вставляем новую колонку после заголовка
  $new_columns = [];
  foreach ($columns as $key => $label) {
    $new_columns[$key] = $label;
    if ($key === 'title') {
      $new_columns['is_popular'] = 'Популярный';
    }
  }
  return $new_columns;
}
add_filter('manage_ldsp_posts_columns', 'ldsp_add_popular_column');

// === Заполняем колонку значением ===
function ldsp_render_popular_column($column, $post_id) {
  if ($column === 'is_popular') {
    $is_popular = get_post_meta($post_id, 'is_popular', true);
    if ($is_popular) {
      echo '<span style="color:green;font-weight:bold;">✔</span>';
    } else {
      echo '<span style="color:#aaa;">—</span>';
    }
  }
}
add_action('manage_ldsp_posts_custom_column', 'ldsp_render_popular_column', 10, 2);

// === Делаем колонку сортируемой ===
function ldsp_make_popular_sortable($columns) {
  $columns['is_popular'] = 'is_popular';
  return $columns;
}
add_filter('manage_edit-ldsp_sortable_columns', 'ldsp_make_popular_sortable');

// === Реализуем сортировку по колонке ===
function ldsp_popular_orderby($query) {
  if (!is_admin() || !$query->is_main_query()) return;

  $orderby = $query->get('orderby');
  if ('is_popular' === $orderby) {
    $query->set('meta_key', 'is_popular');
    $query->set('orderby', 'meta_value_num');
  }
}
add_action('pre_get_posts', 'ldsp_popular_orderby');


// Обработка вывода блока на фронтенде
function render_popular_ldsp_block($attributes, $content) {
  $title = $attributes['title'] ?? '';
  $subTitle = $attributes['subTitle'] ?? '';

  // Получаем популярные товары
  $args = array(
    'post_type' => 'ldsp',
    'posts_per_page' => 10,
    'meta_query' => array(
      array(
        'key' => 'is_popular',
        'value' => '1',
        'compare' => '='
      )
    )
  );

  $popular_ldsp = new WP_Query($args);

  ob_start();
  ?>

  <div class="block-18">
    <div class="container">
      <?php if ($title) : ?><h2 class="h2"><?php echo esc_html($title); ?></h2><?php endif; ?>
      <?php if ($subTitle) : ?><div class="descr"><?php echo esc_html($subTitle); ?></div><?php endif; ?>

      <?php if ($popular_ldsp->have_posts()) : ?>
        <div class="products-color df-fs-fs w-100p">
          <?php while ($popular_ldsp->have_posts()) : $popular_ldsp->the_post();
            $product_id = get_the_ID();
            $articulate = get_post_meta($product_id, 'articulate', true);
          ?>
            <div class="product-color">
              <?php if (has_post_thumbnail()) : ?>
                <?php the_post_thumbnail('medium', [ 'class' => 'product-color__image', 'alt' => get_the_title(), 'loading' => 'lazy' ]); ?>
              <?php endif; ?>
              <div class="product-color__label"><?php the_title(); ?></div>
              <div class="product-color__articulate">Артикул: <?php echo esc_html($articulate); ?></div>
            </div>
          <?php endwhile; ?>
          <?php wp_reset_postdata(); ?>
        </div>
      <?php else : ?>
        <p class="no-products"><?php esc_html_e('Популярные ЛДСП появятся скоро!', 'theme'); ?></p>
      <?php endif; ?>

      <a href="/all-ldsp" class="block-link">Все варианты</a>
    </div>
  </div>

  <?php
  return ob_get_clean();
}

// Регистрируем рендер блока
function register_popular_ldsp_block() {
  register_block_type('theme/block-18', array(
    'render_callback' => 'render_popular_ldsp_block'
  ));
}
add_action('init', 'register_popular_ldsp_block');