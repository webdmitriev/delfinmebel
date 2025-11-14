<?php

defined('ABSPATH') || exit;


// === Регистрируем Custom Post Type "Наши работы" ===
function register_works_post_type() {

  $labels = array(
    'name'               => 'Работы',
    'singular_name'      => 'Работы',
    'menu_name'          => 'Работы',
    'name_admin_bar'     => 'Работы',
    'add_new'            => 'Добавить',
    'add_new_item'       => 'Добавить',
    'new_item'           => 'Добавить',
    'edit_item'          => 'Редактировать',
    'view_item'          => 'Просмотр',
    'all_items'          => 'Все работы',
    'search_items'       => 'Поиск работы',
    'parent_item_colon'  => 'Родитель работы:',
    'not_found'          => 'Работы не найдены.',
    'not_found_in_trash' => 'В корзине работ нет.',
  );

  $args = array(
    'labels'             => $labels,
    'public'             => true,
    'show_in_rest'       => true, // Включаем поддержку Gutenberg / API
    'publicly_queryable' => true,
    'show_ui'            => true,
    'show_in_menu'       => true,
    'query_var'          => true,
    'rewrite'            => array('slug' => 'works'),
    'capability_type'    => 'post',
    'has_archive'        => true,
    'hierarchical'       => false,
    'menu_position'      => 5,
    'menu_icon'          => 'dashicons-id', // Иконка меню в админке
    'supports'           => array('title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'),
    'template_lock'      => false,
  );

  register_post_type('works', $args);
}
add_action('init', 'register_works_post_type');


// === Регистрируем метаполя для works ===
function register_works_meta_fields() {
  register_post_meta('works', 'director', [
    'type' => 'string',
    'single' => true,
    'sanitize_callback' => 'sanitize_text_field',
    'show_in_rest' => true,
  ]);
  register_post_meta('works', 'city', [
    'type' => 'string',
    'single' => true,
    'sanitize_callback' => 'sanitize_text_field',
    'show_in_rest' => true,
  ]);
  register_post_meta('works', 'description', [
    'type' => 'string',
    'single' => true,
    'sanitize_callback' => 'sanitize_text_field',
    'show_in_rest' => true,
  ]);
  register_post_meta('works', 'is_popular', [
    'type' => 'boolean',
    'single' => true,
    'sanitize_callback' => 'rest_sanitize_boolean',
    'show_in_rest' => true,
  ]);
  register_post_meta('works', 'gallery', [
    'type'              => 'array',
    'single'            => true,
    'sanitize_callback' => 'works_sanitize_gallery',
    'show_in_rest'      => [
      'schema' => [
        'type'  => 'array',
        'items' => [
          'type' => 'string',
        ],
      ],
    ],
  ]);

}
add_action('init', 'register_works_meta_fields');


function works_sanitize_gallery($value) {
  if (!is_array($value)) return [];
  return array_map('esc_url_raw', $value);
}

// === Добавляем метабокс для редактирования полей ===
add_action('add_meta_boxes', function() {
  remove_meta_box('works_fields', 'works', 'normal');
}, 11);

function render_works_meta_box($post) {
  wp_nonce_field('works_meta_nonce', 'works_meta_nonce_field');

  $director     = get_post_meta($post->ID, 'director', true);
  $city         = get_post_meta($post->ID, 'city', true);
  $description  = get_post_meta($post->ID, 'description', true);
  $is_popular   = get_post_meta($post->ID, 'is_popular', true);
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
        <label for="director"><strong>Директор:</strong></label><br>
        <input type="text" name="director" id="director" value="<?php echo esc_attr($director); ?>" style="width:100%;" />
      </p>
      <p>
        <label for="city"><strong>Город:</strong></label><br>
        <input type="text" name="city" id="city" value="<?php echo esc_attr($city); ?>" style="width:100%;" />
      </p>
      <p>
        <label for="description"><strong>Краткое описание:</strong></label><br>
        <input type="text" name="description" id="description" value="<?php echo esc_attr($description); ?>" style="width:100%;" />
      </p>
    </div>
    <?php
      $gallery = get_post_meta($post->ID, 'gallery', true);
      if (!is_array($gallery)) $gallery = [];
    ?>
    <div style="margin-top: 20px;">
      <label><strong>Галерея изображений:</strong></label>

      <div id="works-gallery-container" style="display:flex;flex-wrap:wrap;gap:10px;margin:10px 0;">
        <?php foreach ($gallery as $image_url) : ?>
          <div class="works-gallery-item" style="position:relative;display:inline-block;">
            <img src="<?php echo esc_url($image_url); ?>" style="width:80px;height:80px;object-fit:cover;border:1px solid #ccc;border-radius:4px;">
            <button type="button" class="works-remove-image" 
                    style="position:absolute;top:-6px;right:-6px;background:#f44336;color:#fff;border:none;border-radius:50%;width:18px;height:18px;line-height:14px;cursor:pointer;">×</button>
          </div>
        <?php endforeach; ?>
      </div>

      <input type="hidden" name="gallery" id="works-gallery-field" value="<?php echo esc_attr(json_encode($gallery)); ?>" />

      <button type="button" class="button" id="works-add-gallery">Добавить изображения</button>
    </div>

    <script>
      jQuery(document).ready(function($){
        let frame;
        const container = $('#works-gallery-container');
        const hiddenField = $('#works-gallery-field');

        // === Добавление изображений ===
        $('#works-add-gallery').on('click', function(e){
          e.preventDefault();

          if (frame) {
            frame.open();
            return;
          }

          frame = wp.media({
            title: 'Выбрать изображения',
            button: { text: 'Добавить в галерею' },
            multiple: true
          });

          frame.on('select', function(){
            const selection = frame.state().get('selection');
            let current = [];

            try {
              current = JSON.parse(hiddenField.val()) || [];
            } catch(e) {
              current = [];
            }

            selection.map(function(attachment){
              attachment = attachment.toJSON();
              current.push(attachment.url);
            });

            updateGalleryUI(current);
          });

          frame.open();
        });

        // === Удаление изображения ===
        container.on('click', '.works-remove-image', function(){
          const index = $(this).parent().index();
          let current = JSON.parse(hiddenField.val()) || [];
          current.splice(index, 1);
          updateGalleryUI(current);
        });

        // === Обновление UI и hidden поля ===
        function updateGalleryUI(urls) {
          hiddenField.val(JSON.stringify(urls));

          container.empty();
          urls.forEach(function(url){
            container.append(`
              <div class="works-gallery-item" style="position:relative;display:inline-block;">
                <img src="${url}" style="width:80px;height:80px;object-fit:cover;border:1px solid #ccc;border-radius:4px;">
                <button type="button" class="works-remove-image"
                  style="position:absolute;top:-6px;right:-6px;background:#f44336;color:#fff;border:none;border-radius:50%;width:18px;height:18px;line-height:14px;cursor:pointer;">×</button>
              </div>
            `);
          });
        }
      });
    </script>
  </div>
  <?php
}

// === Сохраняем метаполя ===
function save_works_meta_fields($post_id) {
  // Проверяем nonce
  if (!isset($_POST['works_meta_nonce_field']) || !wp_verify_nonce($_POST['works_meta_nonce_field'], 'works_meta_nonce')) {
    return;
  }

  // Проверяем автосохранение
  if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) return;

  // Проверяем права пользователя
  if (!current_user_can('edit_post', $post_id)) return;

  if (isset($_POST['director'])) {
    update_post_meta($post_id, 'director', sanitize_text_field($_POST['director']));
  }
  if (isset($_POST['city'])) {
    update_post_meta($post_id, 'city', sanitize_text_field($_POST['city']));
  }
  if (isset($_POST['description'])) {
    update_post_meta($post_id, 'description', sanitize_text_field($_POST['description']));
  }

  $is_popular = isset($_POST['is_popular']) ? 1 : 0;
  update_post_meta($post_id, 'is_popular', $is_popular);

  if (isset($_POST['gallery'])) {
    $gallery = json_decode(stripslashes($_POST['gallery']), true);
    if (is_array($gallery)) {
      update_post_meta($post_id, 'gallery', array_map('esc_url_raw', $gallery));
    } else {
      delete_post_meta($post_id, 'gallery');
    }
  }
}
// Привязываем к save_post
add_action('save_post', 'save_works_meta_fields');

// === Добавляем колонку "Популярный" в список товаров ===
function works_add_popular_column($columns) {
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
add_filter('manage_works_posts_columns', 'works_add_popular_column');

// === Заполняем колонку значением ===
function works_render_popular_column($column, $post_id) {
  if ($column === 'is_popular') {
    $is_popular = get_post_meta($post_id, 'is_popular', true);
    if ($is_popular) {
      echo '<span style="color:green;font-weight:bold;">✔</span>';
    } else {
      echo '<span style="color:#aaa;">—</span>';
    }
  }
}
add_action('manage_works_posts_custom_column', 'works_render_popular_column', 10, 2);

// === Делаем колонку сортируемой ===
function works_make_popular_sortable($columns) {
  $columns['is_popular'] = 'is_popular';
  return $columns;
}
add_filter('manage_edit-works_sortable_columns', 'works_make_popular_sortable');

// === Реализуем сортировку по колонке ===
function works_popular_orderby($query) {
  if (!is_admin() || !$query->is_main_query()) return;

  $orderby = $query->get('orderby');
  if ('is_popular' === $orderby) {
    $query->set('meta_key', 'is_popular');
    $query->set('orderby', 'meta_value_num');
  }
}
add_action('pre_get_posts', 'works_popular_orderby');


// Обработка вывода блока на фронтенде
function render_popular_works_block($attributes, $content) {
  $title = $attributes['title'] ?? '';
  $subTitle = $attributes['subTitle'] ?? '';

  // Получаем популярные товары
  $args = array(
    'post_type' => 'works',
    'posts_per_page' => 20,
    'meta_query' => array(
      array(
        'key' => 'is_popular',
        'value' => '1',
        'compare' => '='
      )
    )
  );

  $popular_works = new WP_Query($args);
  $count_posts = wp_count_posts('works')->publish;

  ob_start();
  ?>

  <div class="block-08">
    <div class="container">
      <?php if ($title) : ?><h2 class="h2"><?php echo esc_html($title); ?></h2><?php endif; ?>
      <?php if ($subTitle) : ?><p class="sub_title"><?php echo esc_html($subTitle); ?></p><?php endif; ?>

      <?php if ($popular_works->have_posts()) : ?>
        <div class="block-pictures df-fs-st">
          <?php while ($popular_works->have_posts()) : $popular_works->the_post();
            $product_id = get_the_ID();
            $director = get_post_meta($product_id, 'director', true);
            $city = get_post_meta($product_id, 'city', true);
            $description = get_post_meta($product_id, 'description', true);
            $gallery = get_post_meta($product_id, 'gallery', true);
            if (!is_array($gallery)) $gallery = [];
          ?>
            <div class="block-picture">
              <div class="block-picture__gallery">
                <?php if (!empty($gallery)) : ?>
                  <?php foreach ($gallery as $image_url) : ?>
                    <img src="<?php echo esc_url($image_url); ?>" alt="<?php the_title_attribute(); ?>" class="slide show-popup-gallery" />
                  <?php endforeach; ?>
                <?php else : ?>
                  <img src="<?php echo get_template_directory_uri(); ?>/assets/img/placeholder.png" alt="placeholder" class="slide" />
                <?php endif; ?>
              </div>
              <p class="block-picture__title"><?php the_title(); ?></p>
              <?php if ($description): ?><p class="block-picture__descr"><?php echo esc_html($description); ?></p><?php endif; ?>
            </div>
          <?php endwhile; ?>
          <?php wp_reset_postdata(); ?>
        </div>
      <?php else : ?>
        <p class="no-products"><?php esc_html_e('Популярные товары появятся скоро!', 'theme'); ?></p>
      <?php endif; ?>

      <a href="/our-works" class="our-works" data-count="<?= $count_posts; ?>">Смотреть все работы</a>
    </div>
  </div>

  <?php
  return ob_get_clean();
}

// Регистрируем рендер блока
function register_popular_works_block() {
  register_block_type('theme/block-08', array(
    'render_callback' => 'render_popular_works_block'
  ));
}
add_action('init', 'register_popular_works_block');