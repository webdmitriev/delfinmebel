<?php
/*
 * Template Name: Ourworks
*/


get_header('page');

$url = get_template_directory_uri();
$image_base64 = 'data:image/gif;base64,R0lGODlhBwAFAIAAAP///wAAACH5BAEAAAEALAAAAAAHAAUAAAIFjI+puwUAOw==';
?>

  <div class="block-19">
    <div class="container df-fs-fs">
      <h1 class="h1">Мы гордимся нашими работами:</h1>
      <?php

        $args = array(
          'post_type'      => 'works',
          'posts_per_page' => -1,
        );

        $works_query = new WP_Query($args);
        if ($works_query->have_posts()): while ($works_query->have_posts()): $works_query->the_post();
          $director = get_post_meta(get_the_ID(), 'director', true);
          $city = get_post_meta(get_the_ID(), 'city', true);
          $gallery = get_post_meta(get_the_ID(), 'gallery', true);
        ?>
          <div class="block-item df-sp-st w-100p">
            <div class="block-item__content">
              <h2 class="h2"><?php the_title(); ?></h2>
              <div class="block-wrap">
                <div class="block-wrap__label icon-user">Директор</div>
                <?php if($director): ?><div class="block-wrap__descr"><?php echo esc_html($director); ?></div><?php endif; ?>
              </div>
              <div class="block-wrap">
                <div class="block-wrap__label icon-location">Город</div>
                <?php if($city): ?><div class="block-wrap__descr"><?php echo esc_html($city); ?></div><?php endif; ?>
              </div>
            </div>
            <div class="block-item__gallery">
              <?php if($gallery): foreach ($gallery as $key => $value) { ?>
                <img src="<?= $value; ?>" alt="alto" class="slide show-popup-gallery" />
              <?php } endif; ?>
            </div>
          </div>
        <?php endwhile; wp_reset_postdata(); else : ?>
          <p>Наши работы не наполнены.</p>
        <?php endif; ?>
    </div>
  </div>

<?php
the_content();
get_footer();