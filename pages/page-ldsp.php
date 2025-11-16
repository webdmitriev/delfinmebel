<?php
/*
 * Template Name: LDSP
*/


get_header('page');

$url = get_template_directory_uri();
$image_base64 = 'data:image/gif;base64,R0lGODlhBwAFAIAAAP///wAAACH5BAEAAAEALAAAAAAHAAUAAAIFjI+puwUAOw==';
?>

  <div class="block-18" style="padding-top: 10px">
    <div class="container">
      <h2 class="h2">Вы можете выбрать ЛДСП любого цвета и фактуры</h2>
      <div class="descr">Реальные цвета ЛДСП могут несколько отличаться от представленных в нашем каталоге из-за особенностей цветопередачи монитора, <br/>поэтому окончательный выбор лучше делать, увидев образцы «вживую». По индивидуальному запросу мы отправим вам интересующие вас фото материалов.</div>
      <div class="products-color df-fs-fs w-100p">
        <?php

					$args = array(
						'post_type'      => 'ldsp',
						'posts_per_page' => -1,
					);

          $ldsp_query = new WP_Query($args);
					if ($ldsp_query->have_posts()): while ($ldsp_query->have_posts()): $ldsp_query->the_post();
						$articulate = get_post_meta(get_the_ID(), 'articulate', true);
					?>
            <div class="product-color">
              <?php
                echo get_the_post_thumbnail(get_the_ID(), 'medium', array(
                  'class' => 'product-color__image',
                  'loading' => 'lazy',
                  'alt' => get_the_title()
                ));
              ?>
              <div class="product-color__label"><?php the_title(); ?></div>
              <?php if($articulate): ?><div class="product-color__articulate">Артикул: <?php echo esc_html($articulate); ?></div><?php endif; ?>
            </div>
				<?php endwhile; wp_reset_postdata(); else : ?>
					<p>ЛДСП не наполнены.</p>
				<?php endif; ?>
      </div>
    </div>
  </div>

<?php
the_content();
get_footer();