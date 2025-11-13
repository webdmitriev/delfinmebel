<?php

// === Кастомные категории ===
add_filter( 'block_categories_all', 'theme_register_block_categories', 10, 2 );
function theme_register_block_categories( $categories, $context ) {
  // не дублируем, если уже добавлены
  $has_custom = wp_list_filter( $categories, [ 'slug' => 'webdmitriev' ] );
  if ( ! empty( $has_custom ) ) {
    return $categories;
  }

  return array_merge(
    $categories,
    [
      [
        'slug'  => 'webdmitriev',
        'title' => __( 'Webdmitriev Blocks', 'theme' ),
        'icon'  => 'star-filled',
      ],
      [
        'slug'  => 'landing',
        'title' => __( 'Landing Blocks', 'theme' ),
        'icon'  => 'layout',
      ],
    ]
  );
}

// === Разрешаем только нужные блоки ===
add_filter( 'allowed_block_types_all', 'theme_allowed_blocks', 10, 2 );
function theme_allowed_blocks( $allowed_blocks, $editor_context ) {
  // Получаем текущий тип записи
  $current_post_type = get_current_screen()->post_type ?? '';

  // Для типа записи 'store' разрешаем только один блок
  if ( $current_post_type === 'store' ) {
    return [
      'theme/block-01'
    ];
  }

  // Для всех остальных типов записей - полный список блоков
  return [
    // твои блоки
    'theme/block-01',
    'theme/block-03',
    'theme/block-04',
    'theme/block-05',

    // стандартные блоки
    'core/paragraph',
    'core/html',
    'core/video',
    'core/list',
    'core/list-item',
    'core/quote',
    'core/table',
    'core/code',
    'core/spacer',
    'core/image',
    'core/column',
    'core/columns',
  ];
}