<?php
/*
 * Template Name: Blog
*/


get_header('page');

$url = get_template_directory_uri();
$image_base64 = 'data:image/gif;base64,R0lGODlhBwAFAIAAAP///wAAACH5BAEAAAEALAAAAAAHAAUAAAIFjI+puwUAOw==';
?>

  <div class="block-20">
    <div class="container df-fs-fs">
      <h1 class="h1">Наши статьи:</h1>
      <div class="blog-items">
        <?php

        $args = array(
          'post_type'      => 'post',
          'posts_per_page' => -1,
        );

        $works_query = new WP_Query($args);
        if ($works_query->have_posts()): while ($works_query->have_posts()): $works_query->the_post();
          $label = get_post_meta(get_the_ID(), 'label', true);
          $excerpt = get_the_excerpt();
        ?>
          <a href="<?php the_permalink(); ?>" class="blog-item">
            <?php if (!empty($label)): ?><div class="blog-item__badge"><?php echo esc_html($label); ?></div><?php endif; ?>
            <?php
            if (has_post_thumbnail()) {
              echo get_the_post_thumbnail(get_the_ID(), 'medium', array(
                'class' => 'blog-item__image',
                'loading' => 'lazy',
                'alt' => get_the_title()
              ));
            } else {
              echo '<img src="'.$image_base64.'"
                class="blog-item__image"
                loading="lazy"
                alt="' . get_the_title() . '">';
            }
            ?>
            <div class="blog-item__content">
              <div class="blog-item__title"><?php the_title(); ?></div>
              <div class="blog-item__descr"><?php if (!empty($excerpt)) { $limited_excerpt = wp_trim_words($excerpt, 15, '...');echo esc_html($limited_excerpt); } ?></div>
              <div class="blog-item__link">Читать статью →</div>
            </div>
          </a>
        <?php endwhile; wp_reset_postdata(); else : ?>
          <p>Наши работы не наполнены.</p>
        <?php endif; ?>
      </div>
    </div>
  </div>

<?php
the_content();
get_footer();