<?php
defined('ABSPATH') || exit;

// Меню и подменю
function theme_settings_menu() {
  add_menu_page(
    'Theme Settings',
    'Theme Settings',
    'manage_options',
    'theme-settings',
    'theme_settings_page_content',
    'dashicons-admin-tools',
    80
  );

  add_submenu_page(
    'theme-settings',
    'Theme Settings',
    'Settings',
    'manage_options',
    'theme-settings',
    'theme_settings_page_content'
  );

  add_submenu_page(
    'theme-settings',
    'Add to head',
    'Head',
    'manage_options',
    'theme-head',
    'theme_head_page_content'
  );

  add_submenu_page(
    'theme-settings',
    'Video Instructions',
    'Video Instructions',
    'manage_options',
    'theme-instructions',
    'theme_instructions_page_content'
  );

  // add_submenu_page(
  //   'theme-settings',
  //   'Color Settings',
  //   'Color Settings',
  //   'manage_options',
  //   'theme-color-settings',
  //   'theme_color_settings_page_content'
  // );
}
add_action('admin_menu', 'theme_settings_menu');


// template for color-settings page
// function theme_color_settings_page_content() {
//   $template = get_template_directory() . '/admin/theme-settings/render-color/color-settings.php';
//   if (file_exists($template)) {
//     include $template;
//   } else {
//     echo '<div class="notice notice-error"><p>Template not found: ' . esc_html($template) . '</p></div>';
//   }
// }