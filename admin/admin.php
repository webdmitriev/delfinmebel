<?php

defined('ABSPATH') || exit;

/*
 * Remove admin bar (front page)
 */
add_filter('show_admin_bar', '__return_false');

/**
 * Post types
 */
require get_template_directory() . '/admin/helpers/post-post.php';
require get_template_directory() . '/admin/helpers/post-types.php';
require get_template_directory() . '/admin/helpers/post-types-works.php';
require get_template_directory() . '/admin/helpers/post-types-ldsp.php';

/**
 * Add for head something
 */
require_once get_template_directory() . '/admin/helpers/add-to-head.php';


/**
 * Shortcode cf7
 */
require_once get_template_directory() . '/admin/helpers/cf7.php';


/**
 * Breadcrumbs
 */
require_once get_template_directory() . '/admin/helpers/breadcrumbs.php';


/**
 * SEO
 */
require get_template_directory() . '/admin/helpers/seo-meta.php';


/**
 * Sitemap
 */
require get_template_directory() . '/admin/helpers/sitemap.php';


/**
 * Remove uncategorized category
 */
require get_template_directory() . '/admin/helpers/remove-uncategorized-category.php';


/**
 * Advanced Auto Linking
 */
// require_once get_template_directory() . '/admin/helpers/AdvancedAutoLinking.php';


/**
 * Convert webp
 */
require_once get_template_directory() . '/admin/helpers/convert-webp.php';


/**
 * Register categories for Gutenberg blocks
 */
require_once get_template_directory() . '/admin/helpers/register-block-categories.php';


/**
 * Register Gutenberg blocks and assets
 */
require_once get_template_directory() . '/admin/helpers/include-custom-gutenberg-blocks.php';
