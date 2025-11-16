<?php
/*
 * Template Name: Basket
*/


get_header('page');

$url = get_template_directory_uri();
$image_base64 = 'data:image/gif;base64,R0lGODlhBwAFAIAAAP///wAAACH5BAEAAAEALAAAAAAHAAUAAAIFjI+puwUAOw==';
?>

  <div class="block-23">
    <div class="container">
      <h1 class="h1">Корзина</h1>
      <div class="block-wrapper">
        <!-- Товары -->
      </div>
    </div>
  </div>

  <!-- basket-submit -->
  <div class="popup popup-basket" style="display: none;">
    <div class="popup-bg"></div>
    <div class="popup-close">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 7L17 17M7 17L17 7" stroke="#5765AE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <div class="popup-content scroll-line-none">
      <?php echo do_shortcode('[contact-form-7 id="bca56c8" title="Basket"]'); ?>
    </div>
  </div>

<?php
the_content();
get_footer();