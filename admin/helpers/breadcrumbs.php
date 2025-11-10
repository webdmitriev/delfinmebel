<?php

// trim words
function trim_sentence($text, $length = 90) {
  if (strlen($text) <= $length) {
    return $text;
  }

  $trimmed = substr($text, 0, $length);
  // Обрезаем до последнего пробела, чтобы не обрывать слова
  $trimmed = substr($trimmed, 0, strrpos($trimmed, ' '));

  return $trimmed . '...';
}

// Функция breadcrumbs с полным путем вложенности
function custom_breadcrumbs($atts = []) {
  $atts = shortcode_atts([
    'page_id' => 0, // по умолчанию нет страницы
  ], $atts, 'breadcrumbs');

  $separator = ' &raquo; ';
  $home_title = 'Главная';
  $posts_page_id = intval($atts['page_id']);

  if (is_front_page()) {
    return ''; // Не показываем на главной
  }

  ob_start();
  echo '<nav class="breadcrumbs" aria-label="Хлебные крошки"><div class="container df-fs-ce">';

  // Главная
  echo '<a href="' . home_url() . '">' . $home_title . '</a>' . $separator;

  if (is_single()) {
    // Для записей
    $post_type = get_post_type();

    // Страница со всеми постами (если указана)
    if ($posts_page_id) {
      echo '<a href="' . get_permalink($posts_page_id) . '">' . get_the_title($posts_page_id) . '</a>' . $separator;
    } elseif ($post_type !== 'post') {
      // Для кастомных типов записей
      $post_type_object = get_post_type_object($post_type);
      $post_type_archive_link = get_post_type_archive_link($post_type);
      if ($post_type_archive_link) {
        echo '<a href="' . $post_type_archive_link . '">' . $post_type_object->labels->name . '</a>' . $separator;
      }
    }

    // Рубрики/категории
    $categories = get_the_category();
    if (!empty($categories)) {
      $category = $categories[0];
      $category_parents = get_ancestors($category->term_id, 'category');
      $category_parents = array_reverse($category_parents);

      foreach ($category_parents as $parent_id) {
        $parent_category = get_category($parent_id);
        echo '<a href="' . get_category_link($parent_id) . '">' . $parent_category->name . '</a>' . $separator;
      }

      echo '<a href="' . get_category_link($category->term_id) . '">' . $category->name . '</a>' . $separator;
    }

    // Текущий пост
    echo '<span>' . trim_sentence(get_the_title(), 58) . '</span>';

  } elseif (is_page()) {
    // Для страниц - показываем всю иерархию
    global $post;
    $page_ancestors = get_post_ancestors($post);

    if (!empty($page_ancestors)) {
      $page_ancestors = array_reverse($page_ancestors);
      foreach ($page_ancestors as $ancestor_id) {
        echo '<a href="' . get_permalink($ancestor_id) . '">' . get_the_title($ancestor_id) . '</a>' . $separator;
      }
    }

    // Текущая страница
    echo '<span>' . trim_sentence(get_the_title(), 58) . '</span>';

  } elseif (is_category()) {
    // Для категорий
    $current_category = get_queried_object();
    $category_parents = get_ancestors($current_category->term_id, 'category');
    $category_parents = array_reverse($category_parents);

    foreach ($category_parents as $parent_id) {
      $parent_category = get_category($parent_id);
      echo '<a href="' . get_category_link($parent_id) . '">' . $parent_category->name . '</a>' . $separator;
    }

    echo '<span>' . $current_category->name . '</span>';

  } elseif (is_tag()) {
    // Для меток
    echo '<span>Метка: ' . single_tag_title('', false) . '</span>';
  } elseif (is_author()) {
    // Для авторов
    echo '<span>Автор: ' . get_the_author() . '</span>';
  } elseif (is_search()) {
    // Для поиска
    echo '<span>Результаты поиска: "' . get_search_query() . '"</span>';
  } elseif (is_archive()) {
    // Для архивов
    if (is_date()) {
      if (is_year()) {
        echo '<span>Архив за ' . get_the_date('Y') . '</span>';
      } elseif (is_month()) {
        echo '<span>Архив за ' . get_the_date('F Y') . '</span>';
      } elseif (is_day()) {
        echo '<span>Архив за ' . get_the_date('j F Y') . '</span>';
      }
    } else {
      echo '<span>' . post_type_archive_title('', false) . '</span>';
    }
  } elseif (is_404()) {
    // Для 404 страницы
    echo '<span>Страница не найдена</span>';
  }

  echo '</div></nav>';

  return ob_get_clean();
}

// Регистрируем шорткод
add_shortcode('breadcrumbs', 'custom_breadcrumbs');

// Дополнительная функция для прямого вывода в шаблоне
function display_breadcrumbs($posts_page_id = 0) {
  echo custom_breadcrumbs(['page_id' => $posts_page_id]);
}