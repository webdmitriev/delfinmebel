<?php
// admin/theme-settings/helpers.php
defined('ABSPATH') || exit;

// Получение данных социальных сетей из опций
function get_theme_social() {
  $settings = get_option('theme_settings', []);
  return $settings['social'] ?? [];
}
