<?php

defined('ABSPATH') || exit;

// Регистрируем метаполе label для записей
function register_post_label_meta() {
  register_post_meta('post', 'label', [
    'type' => 'string',
    'single' => true,
    'sanitize_callback' => 'sanitize_text_field',
    'show_in_rest' => true,
    'auth_callback' => function() {
      return current_user_can('edit_posts');
    }
  ]);
}
add_action('init', 'register_post_label_meta');


// Добавляем метабокс для поля label
function add_label_meta_box() {
    add_meta_box(
        'label_meta_box',
        'Метка (Label)',
        'render_label_meta_box',
        'post',
        'side',
        'high'
    );
}
add_action('add_meta_boxes', 'add_label_meta_box');

// Функция отображения метабокса
function render_label_meta_box($post) {
    // Добавляем nonce для безопасности
    wp_nonce_field('label_meta_box', 'label_meta_box_nonce');
    
    // Получаем текущее значение
    $label_value = get_post_meta($post->ID, 'label', true);
    
    // Выводим поле
    echo '<label for="label_field">Текст метки:</label>';
    echo '<input type="text" id="label_field" name="label_field" value="' . esc_attr($label_value) . '" style="width:100%; margin-top:5px;" placeholder="Например: Новинка">';
}

// Сохраняем данные метаполя
function save_label_meta($post_id) {
    // Проверяем nonce
    if (!isset($_POST['label_meta_box_nonce']) || !wp_verify_nonce($_POST['label_meta_box_nonce'], 'label_meta_box')) {
        return;
    }
    
    // Проверяем права пользователя
    if (!current_user_can('edit_post', $post_id)) {
        return;
    }
    
    // Проверяем автосохранение
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }
    
    // Сохраняем значение
    if (isset($_POST['label_field'])) {
        update_post_meta($post_id, 'label', sanitize_text_field($_POST['label_field']));
    }
}
add_action('save_post', 'save_label_meta');