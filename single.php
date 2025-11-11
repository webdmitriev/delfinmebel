<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package webdmitriev
 */

get_header('page');
?>

<div class="block-21">
  <div class="container">
    <h1 class="h2"><?php the_title(); ?></h1>
    <div class="block-content df-fs-fs w-100p">
      <?php the_content(); ?>
    </div>
  </div>
</div>

<?php
get_footer();
