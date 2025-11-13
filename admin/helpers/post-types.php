<?php

defined('ABSPATH') || exit;

// /wp-json/wp/v2/store_categories
// === Регистрируем Custom Post Type "Товары" ===
function register_store_post_type() {

  $labels = array(
    'name'               => 'Товары',
    'singular_name'      => 'Товары',
    'menu_name'          => 'Товары',
    'name_admin_bar'     => 'Товары',
    'add_new'            => 'Добавить товар',
    'add_new_item'       => 'Добавить товар',
    'new_item'           => 'Новый товар',
    'edit_item'          => 'Редактировать товар',
    'view_item'          => 'Просмотр товара',
    'all_items'          => 'Все товары',
    'search_items'       => 'Поиск товароы',
    'parent_item_colon'  => 'Родитель товара:',
    'not_found'          => 'Товары не найдены.',
    'not_found_in_trash' => 'В корзине товаров нет.',
  );

  $args = array(
    'labels'             => $labels,
    'public'             => true,
    'show_in_rest'       => true, // Включаем поддержку Gutenberg / API
    'publicly_queryable' => true,
    'show_ui'            => true,
    'show_in_menu'       => true,
    'query_var'          => true,
    'rewrite'            => array('slug' => 'store'),
    'capability_type'    => 'post',
    'has_archive'        => true,
    'hierarchical'       => false,
    'menu_position'      => 5,
    'menu_icon'          => 'dashicons-id', // Иконка меню в админке
    'supports'           => array('title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'),
    'template_lock'      => false,
  );

  register_post_type('store', $args);
}
add_action('init', 'register_store_post_type');


// === Регистрируем таксономии ===
function register_store_categories_taxonomy() {
  $labels = array(
    'name'              => 'Категории',
    'singular_name'     => 'Категория',
    'search_items'      => 'Найти категорию',
    'all_items'         => 'Все категории',
    'edit_item'         => 'Редактировать категорию',
    'update_item'       => 'Обновить категорию',
    'add_new_item'      => 'Добавить новую категорию',
    'new_item_name'     => 'Название новой категории',
    'menu_name'         => 'Категории',
  );

  register_taxonomy('store_categories', array('store'), array(
    'hierarchical'      => true,
    'labels'            => $labels,
    'show_ui'           => true,
    'show_admin_column' => true,
    'query_var'         => true,
    'rewrite'           => array('slug' => 'store-categories'),
    'show_in_rest'      => true,
  ));
}
add_action('init', 'register_store_categories_taxonomy');


// === Добавляем поле "Изображение категории" в таксономию ===
function store_add_category_image_field($taxonomy) {
    ?>
    <div class="form-field term-group">
        <label for="store_category_image"><?php _e('Изображение категории', 'theme'); ?></label>
        <input type="hidden" id="store_category_image" name="store_category_image" value="">
        <div id="store_category_image_preview" style="margin-top:10px;"></div>
        <button type="button" class="button upload_image_button"><?php _e('Загрузить изображение', 'theme'); ?></button>
    </div>
    <?php
}
add_action('store_categories_add_form_fields', 'store_add_category_image_field', 10, 2);


// === Редактирование существующих категорий ===
function store_edit_category_image_field($term, $taxonomy) {
    $image_id = get_term_meta($term->term_id, 'store_category_image', true);
    $image_url = $image_id ? wp_get_attachment_url($image_id) : '';
    ?>
    <tr class="form-field term-group-wrap">
        <th scope="row"><label for="store_category_image"><?php _e('Изображение категории', 'theme'); ?></label></th>
        <td>
            <input type="hidden" id="store_category_image" name="store_category_image" value="<?php echo esc_attr($image_id); ?>">
            <div id="store_category_image_preview" style="margin-bottom:10px;">
                <?php if ($image_url): ?>
                    <img src="<?php echo esc_url($image_url); ?>" style="max-width:150px;height:auto;" />
                <?php endif; ?>
            </div>
            <button type="button" class="button upload_image_button"><?php _e('Загрузить / Заменить', 'theme'); ?></button>
        </td>
    </tr>
    <?php
}
add_action('store_categories_edit_form_fields', 'store_edit_category_image_field', 10, 2);


// === Сохраняем изображение при добавлении/редактировании категории ===
function store_save_category_image($term_id) {
    if (isset($_POST['store_category_image']) && '' !== $_POST['store_category_image']) {
        update_term_meta($term_id, 'store_category_image', absint($_POST['store_category_image']));
    } else {
        delete_term_meta($term_id, 'store_category_image');
    }
}
add_action('created_store_categories', 'store_save_category_image', 10, 2);
add_action('edited_store_categories', 'store_save_category_image', 10, 2);


    // === Добавляем изображение в REST API ===
function store_add_image_to_rest($response, $term, $request) {
    $image_id = get_term_meta($term->term_id, 'store_category_image', true);
    if ($image_id) {
        $response->data['image'] = [
            'id' => (int)$image_id,
            'url' => wp_get_attachment_url($image_id),
        ];
    } else {
        $response->data['image'] = null;
    }
    return $response;
}
add_filter('rest_prepare_store_categories', 'store_add_image_to_rest', 10, 3);


// === Подключаем JS для медиазагрузчика ===
function store_category_admin_scripts($hook) {
    $screen = get_current_screen();
    if (!$screen) return;

    if ($screen->taxonomy === 'store_categories') {
        wp_enqueue_media(); // обязательно подключаем wp.media
        wp_enqueue_script(
            'store-category-image',
            get_template_directory_uri() . '/admin/assets/css-js/store-category-image.js', // путь к твоему файлу
            array('jquery'),
            false,
            true
        );
    }
}
add_action('admin_enqueue_scripts', 'store_category_admin_scripts');


// === Регистрируем метаполя для store ===
function register_store_meta_fields() {
    register_post_meta('store', 'articulate', [
        'type' => 'string',
        'single' => true,
        'sanitize_callback' => 'sanitize_text_field',
        'show_in_rest' => false, // <-- отключаем REST
    ]);

    register_post_meta('store', 'price_new', [
        'type' => 'number',
        'single' => true,
        'sanitize_callback' => 'floatval',
        'show_in_rest' => false,
    ]);

    register_post_meta('store', 'price_old', [
        'type' => 'number',
        'single' => true,
        'sanitize_callback' => 'floatval',
        'show_in_rest' => false,
    ]);

    register_post_meta('store', 'custom_excerpt', [
        'type' => 'string',
        'single' => true,
        'sanitize_callback' => 'sanitize_textarea_field',
        'show_in_rest' => false,
    ]);

    register_post_meta('store', 'is_popular', [
        'type' => 'boolean',
        'single' => true,
        'sanitize_callback' => 'rest_sanitize_boolean',
        'show_in_rest' => false,
    ]);
}


// === Добавляем метабокс для редактирования полей ===
function add_store_meta_boxes() {
    add_meta_box(
        'store_fields',
        'Дополнительные поля товара',
        'render_store_meta_box',
        'store',
        'normal',
        'high'
    );
}
add_action('add_meta_boxes', 'add_store_meta_boxes');

function render_store_meta_box($post) {
    wp_nonce_field('store_meta_nonce', 'store_meta_nonce_field');

    $articulate = get_post_meta($post->ID, 'articulate', true);
    $price_new  = get_post_meta($post->ID, 'price_new', true);
    $price_old  = get_post_meta($post->ID, 'price_old', true);
    $excerpt    = get_post_meta($post->ID, 'custom_excerpt', true);
    $is_popular = get_post_meta($post->ID, 'is_popular', true);
    ?>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;">
        <div>
            <p>
                <label for="articulate"><strong>Артикул:</strong></label><br>
                <input type="text" name="articulate" id="articulate" value="<?php echo esc_attr($articulate); ?>" style="width:100%;">
            </p>
            <p>
                <label for="price_new"><strong>Новая цена:</strong></label><br>
                <input type="number" name="price_new" id="price_new" min="0" step="0.01" value="<?php echo esc_attr($price_new); ?>" style="width:100%;">
            </p>
            <p>
                <label for="price_old"><strong>Старая цена:</strong></label><br>
                <input type="number" name="price_old" id="price_old" min="0" step="0.01" value="<?php echo esc_attr($price_old); ?>" style="width:100%;">
            </p>
            <p>
                <label>
                    <input type="checkbox" name="is_popular" value="1" <?php checked($is_popular, 1); ?>>
                    <strong>Популярный товар</strong>
                </label>
            </p>
        </div>
        <div>
            <p>
                <label for="custom_excerpt"><strong>Краткое описание:</strong></label><br>
                <textarea name="custom_excerpt" id="custom_excerpt" rows="4" style="width:100%;"><?php echo esc_textarea($excerpt); ?></textarea>
            </p>
        </div>
    </div>
    <?php
}

// === Сохраняем метаполя ===
function save_store_meta_fields($post_id) {
    // Проверяем nonce
    if (!isset($_POST['store_meta_nonce_field']) || !wp_verify_nonce($_POST['store_meta_nonce_field'], 'store_meta_nonce')) {
        return;
    }

    // Проверяем автосохранение
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) return;

    // Проверяем права пользователя
    if (!current_user_can('edit_post', $post_id)) return;

    // Артикул
    if (isset($_POST['articulate'])) {
        update_post_meta($post_id, 'articulate', sanitize_text_field($_POST['articulate']));
    }

    // Новая цена
    if (isset($_POST['price_new'])) {
        update_post_meta($post_id, 'price_new', floatval($_POST['price_new']));
    }

    // Старая цена
    if (isset($_POST['price_old'])) {
        update_post_meta($post_id, 'price_old', floatval($_POST['price_old']));
    }

    // Краткое описание
    if (isset($_POST['custom_excerpt'])) {
        update_post_meta($post_id, 'custom_excerpt', sanitize_textarea_field($_POST['custom_excerpt']));
    }

    $is_popular = isset($_POST['is_popular']) ? 1 : 0;
    update_post_meta($post_id, 'is_popular', $is_popular);
}
// Привязываем к save_post
add_action('save_post', 'save_store_meta_fields');

// === Добавляем колонку "Популярный" в список товаров ===
function store_add_popular_column($columns) {
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
add_filter('manage_store_posts_columns', 'store_add_popular_column');

// === Заполняем колонку значением ===
function store_render_popular_column($column, $post_id) {
    if ($column === 'is_popular') {
        $is_popular = get_post_meta($post_id, 'is_popular', true);
        if ($is_popular) {
            echo '<span style="color:green;font-weight:bold;">✔</span>';
        } else {
            echo '<span style="color:#aaa;">—</span>';
        }
    }
}
add_action('manage_store_posts_custom_column', 'store_render_popular_column', 10, 2);

// === Делаем колонку сортируемой ===
function store_make_popular_sortable($columns) {
    $columns['is_popular'] = 'is_popular';
    return $columns;
}
add_filter('manage_edit-store_sortable_columns', 'store_make_popular_sortable');

// === Реализуем сортировку по колонке ===
function store_popular_orderby($query) {
    if (!is_admin() || !$query->is_main_query()) return;

    $orderby = $query->get('orderby');
    if ('is_popular' === $orderby) {
        $query->set('meta_key', 'is_popular');
        $query->set('orderby', 'meta_value_num');
    }
}
add_action('pre_get_posts', 'store_popular_orderby');
