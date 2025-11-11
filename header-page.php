<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package webdmitriev
 */

$url = get_template_directory_uri();

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
	<link rel="shortcut icon" href="<?= esc_url($url); ?>/favicon.ico" type="image/x-icon">

	<?php wp_head(); ?>
</head>

<body <?php body_class('with-animation-active'); ?>>

	<div id="app">

		<div class="marquee-container">
			<div class="marquee-content" data-repeat="10" data-speed="80">
				<div class="marquee-item">Оказываем помощь комитету поддержки семей участников СВО</div>
			</div>
		</div>

    <header class="header header-page marquee-added">
      <div class="container df-sp-ce">
        <a href="<?php echo get_home_url( null, '/' ); ?>" class="logotype df-sp-ce w-100p">
          <img src="<?= $url; ?>/assets/img/header/logotype.png" alt="alto" />
          <span class="logotype-text">Новые парты и&nbsp;стулья от&nbsp;российского <br/>производителя по&nbsp;приемлемым ценам</span>
        </a>

        <div class="header-menus df-fe-st w-100p">
          <?php
            wp_nav_menu( [
              'theme_location'  => 'header-menu',
              'menu'            => '',
              'container'       => '',
              'container_class' => '',
              'container_id'    => '',
              'menu_class'      => 'header-menu df-fe-ce w-100p',
              'menu_id'         => '',
              'echo'            => true,
              'fallback_cb'     => 'wp_page_menu',
              'before'          => '',
              'after'           => '',
              'link_before'     => '',
              'link_after'      => '',
              'items_wrap'      => '<ul id="%1$s" class="%2$s">%3$s</ul>',
              'depth'           => 0,
              'walker'          => '',
            ] );
          ?>

          <a href="<?php echo get_home_url( null, '/favorite' ); ?>" target="_blank" rel="noopener noreferrer" class="header-social df-ce-ce">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5765ae">
							<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
						</svg>
					</a>

					<a href="/basket" class="basket-link" data-icon="🛒">
						<span class="basket-counter" style="display: none;">0</span>
					</a>

          <button class="burger"><span></span></button>
        </div>
      </div>
    </header>

		<div class="header-mobile">
			<div class="header-mobile__content d-block w-100p scroll-line-none">
				<div class="header-mobile__content-top df-sp-ce w-100p">
					<a href="<?php echo get_home_url(null, '/'); ?>" class="logotype"><img src="<?= $url; ?>/assets/img/header/logotype.png" alt="alto" /></a>
					<button class="close-menu"><span></span></button>
				</div>

				<?php
					wp_nav_menu( [
						'theme_location'  => 'header-menu',
						'menu'            => '',
						'container'       => '',
						'container_class' => '',
						'container_id'    => '',
						'menu_class'      => 'header-menu',
						'menu_id'         => '',
						'echo'            => true,
						'fallback_cb'     => 'wp_page_menu',
						'before'          => '',
						'after'           => '',
						'link_before'     => '',
						'link_after'      => '',
						'items_wrap'      => '<ul id="%1$s" class="%2$s">%3$s</ul>',
						'depth'           => 0,
						'walker'          => '',
					] );
				?>

			</div>
		</div>

		<?php echo do_shortcode('[breadcrumbs]'); ?>