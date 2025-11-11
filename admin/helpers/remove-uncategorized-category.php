<?php

function remove_uncategorized_category() {
  $uncategorized = get_category_by_slug('uncategorized');

  if ($uncategorized) {
    // Переназначаем посты на другую категорию (если нужно)
    $default_category = get_category_by_slug('blog'); // Ваша основная категория

    if ($default_category) {
      // Обновляем все посты из "Без рубрики" в основную категорию
      $posts_in_uncategorized = get_posts(array(
        'category' => $uncategorized->term_id,
        'numberposts' => -1
      ));

      foreach ($posts_in_uncategorized as $post) {
        wp_set_post_categories($post->ID, array($default_category->term_id), false);
      }
    }

    // Удаляем категорию "Без рубрики"
    wp_delete_category($uncategorized->term_id);
  }
}

// Запускаем при активации темы
function theme_activation_actions() {
  remove_uncategorized_category();
}
add_action('after_switch_theme', 'theme_activation_actions');