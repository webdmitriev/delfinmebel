<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package webdmitriev
 */

$articulate = get_post_meta(get_the_ID(), 'articulate', true);
$price_new = get_post_meta(get_the_ID(), 'price_new', true);
$price_old = get_post_meta(get_the_ID(), 'price_old', true);
$custom_excerpt = get_post_meta(get_the_ID(), 'custom_excerpt', true);
$gallery = get_post_meta(get_the_ID(), 'gallery', true);

get_header('page');
?>

  <div class="block-17" data-product-id="product-<?= get_the_ID(); ?>">
    <div class="container df-sp-fs">
      <div class="block-thumbnail">
        <?php if (has_post_thumbnail()):
          echo get_the_post_thumbnail(get_the_ID(), 'medium', array(
            'class' => 'block-thumbnail__main',
            'loading' => 'lazy',
            'alt' => get_the_title()
          ));
        endif; ?>
        <div class="block-thumbnail__wrapper">
          <?php if($gallery): foreach ($gallery as $key => $value) { ?><img src="<?= $value; ?>" alt="alto" /><?php } endif; ?>
        </div>
      </div>
      <div class="block-content">
        <h1 class="h2"><?php the_title(); ?></h1>
        <?php if($articulate): ?><div class="product-articulate">Артикул: <?php echo esc_html($articulate); ?></div><?php endif; ?>
        <div class="product-price df-fs-ce w-100p">
          <?php if($price_new): ?><span class="price-new"><?php echo esc_html(number_format_i18n($price_new, 0)); ?></span><?php endif; ?>
          <?php if($price_old): ?><span class="price-old"><?php echo esc_html(number_format_i18n($price_old, 0)); ?></span><?php endif; ?>
        </div>
        <?php if($custom_excerpt): ?><div class="product-excerpt"><?php echo esc_html($custom_excerpt); ?></div><?php endif; ?>
        <div class="product-buttons df-fs-st w-100p" style="gap: 16px">
          <button class="product-order product-popup-show">Запросить детали</button>
          <button class="product-order add-to-basket">Добавить в корзину</button>
        </div>
      </div>
    </div>
  </div>

<?php
the_content();
get_footer();
