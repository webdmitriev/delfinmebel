<?php
// admin/theme-settings/shortcodes.php
defined('ABSPATH') || exit;

// Шорткод для вывода социальных сетей с иконками
function theme_social_shortcode($atts) {
  $atts = shortcode_atts(array(
    'class' => 'theme-social-links',
  ), $atts);

  $socials = get_theme_social();
  if (empty($socials)) return '';

  $output = '<div class="' . esc_attr($atts['class']) . '">';
  foreach ($socials as $social) {
    if (!empty($social['icon']) && !empty($social['link'])) {
      $icon_class = 'social-icon social-icon-' . esc_attr($social['icon']);
      $output .= '<a href="' . esc_url($social['link']) . '" class="' . $icon_class . '" target="_blank" rel="noopener noreferrer"></a>';
    }
  }
  $output .= '</div>';

  return $output;
}
add_shortcode('theme_social', 'theme_social_shortcode');

// Дополнительная функция для вывода в шаблоне
function display_theme_social($class = 'theme-social-links') {
  echo theme_social_shortcode(array('class' => $class));
}
