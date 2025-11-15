<?php
/**
 * The template for displaying archive pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package webdmitriev
 */

get_header('page');
?>

  <div class="block-16">
    <div class="container">
      <div class="block-top">
        <h1 class="h1">Каталог</h1>
        <h2 class="h2"><?php echo single_term_title(); ?></h2>
      </div>
      <div class="block-products">
				<?php
					// Аргументы для запроса товаров текущей категории
					$paged = max(1, get_query_var('paged'));

					$args = array(
						'post_type' => 'store',
						'posts_per_page' => 12,
						'paged' => $paged,
					);

					$store_query = new WP_Query($args);


					if ( have_posts() ) : while ( have_posts() ) : the_post();
						$label = get_post_meta(get_the_ID(), 'label', true);
						$articulate = get_post_meta(get_the_ID(), 'articulate', true);
						$price_new = get_post_meta(get_the_ID(), 'price_new', true);
						$price_old = get_post_meta(get_the_ID(), 'price_old', true);
						$custom_excerpt = get_post_meta(get_the_ID(), 'custom_excerpt', true);
						$is_popular = get_post_meta(get_the_ID(), 'is_popular', true);
						$gallery = get_post_meta(get_the_ID(), 'gallery', true);
					?>
						<div class="product">
							<?php if($label): ?><div class="product-label"><?php echo esc_html($label); ?></div><?php endif; ?>
							<button class="favorite-btn" data-favorite-btn data-product-id="product-<?= get_the_ID(); ?>" aria-label="Добавить в избранное">
								<svg class="favorite-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
									<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
								</svg>
							</button>
							<?php if (has_post_thumbnail()) : ?>
								<a href="<?php the_permalink(); ?>">
									<?php
										echo get_the_post_thumbnail(get_the_ID(), 'medium', array(
											'class' => 'product-thumbnail',
											'loading' => 'lazy',
											'alt' => get_the_title()
									));
									?>
								</a>
							<?php endif; ?>
							<a href="<?php the_permalink(); ?>" class="product-title line-clamp line-clamp-2"><?php the_title(); ?></a>
							<?php if($custom_excerpt): ?><div class="product-descr line-clamp line-clamp-3"><?php echo esc_html($custom_excerpt); ?></div><?php endif; ?>
							<div class="product-price df-fs-ce w-100p">
								<?php if($price_new): ?><span class="price-new"><?php echo esc_html($price_new); ?></span><?php endif; ?>
								<?php if($price_old): ?><span class="price-old"><?php echo esc_html($price_old); ?></span><?php endif; ?>
							</div>
							<a href="<?php the_permalink(); ?>" class="product-link">О товаре</a>
						</div>
				<?php endwhile; wp_reset_postdata(); else : ?>
					<p>В этой категории пока нет товаров.</p>
				<?php endif; ?>

				<?php the_posts_pagination(); ?>
      </div>
    </div>
  </div>

<?php
get_footer();
