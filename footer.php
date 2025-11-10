<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package webdmitriev
 */

	$url = get_template_directory_uri();

?>

		<footer class="footer" style="display: block;">
			<div class="container">
				<div class="footer-top df-sp-ce w-100p">
					<a href="<?php echo get_home_url( null, '/' ); ?>" class="logotype"><img src="<?= $url; ?>/assets/img/header/logotype.png" alt="alto" /></a>
					<a href="#" class="link-to-top"><img src="<?= $url; ?>/assets/img/icons/icon-top.svg" alt="alto" /></a>
				</div>
				<div class="footer-content df-sp-st w-100p">
					<div class="footer-block">
						<div class="descr"><?php echo esc_html(get_footer_description()); ?></div>
						<div class="descr"><?php echo get_inn_html(); ?></div>
					</div>

					<div class="footer-navigation">
						<div class="footer-navigation__title">НАВИГАЦИЯ</div>
						<?php
							wp_nav_menu( [
								'theme_location'  => 'header-menu',
								'menu'            => '',
								'container'       => '',
								'container_class' => '',
								'container_id'    => '',
								'menu_class'      => 'footer-menu',
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

					<div class="footer-navigation footer-navigation-parts">
						<div class="footer-navigation__title">РАЗДЕЛЫ</div>
						<?php
							wp_nav_menu( [
								'theme_location'  => 'footer-menu',
								'menu'            => '',
								'container'       => '',
								'container_class' => '',
								'container_id'    => '',
								'menu_class'      => 'footer-menu',
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

				<div class="footer-bottom df-sp-ce w-100p">
					<div class="descr">© <?php echo date('Y'); ?> Delfinmebel39</div>

					<?php if (function_exists('display_theme_social')) : ?>
						<?php display_theme_social(); ?>
					<?php endif; ?>
				</div>
			</div>
		</footer>

	</div><!-- #app -->

<?php wp_footer(); ?>

</body>
</html>
