<?php

defined('ABSPATH') || exit;

// === Регистрируем Custom Post Type "Отзывы" ===
function register_review_post_type() {

    $labels = array(
        'name'               => 'Отзывы',
        'singular_name'      => 'Отзыв',
        'menu_name'          => 'Отзывы',
        'name_admin_bar'     => 'Отзыв',
        'add_new'            => 'Добавить отзыв',
        'add_new_item'       => 'Добавить новый отзыв',
        'new_item'           => 'Новый отзыв',
        'edit_item'          => 'Редактировать отзыв',
        'view_item'          => 'Просмотр отзыва',
        'all_items'          => 'Все отзывы',
        'search_items'       => 'Поиск отзывов',
        'parent_item_colon'  => 'Родительский отзыв:',
        'not_found'          => 'Отзывы не найдены.',
        'not_found_in_trash' => 'В корзине отзывов нет.',
    );

    $args = array(
        'labels'             => $labels,
        'public'             => true,
        'show_in_rest'       => true, // Включаем поддержку Gutenberg / API
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite'            => array('slug' => 'review'),
        'capability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => false,
        'menu_position'      => 5,
        'menu_icon'          => 'dashicons-id', // Иконка меню в админке
        'supports'           => array('title', 'editor', 'thumbnail'),
    );

    register_post_type('review', $args);
}
add_action('init', 'register_review_post_type');
