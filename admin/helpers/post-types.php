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
