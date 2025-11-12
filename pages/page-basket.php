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

  <div class="block-14">
    <div class="container">
      <img src="<?= $url; ?>/assets/img/block-14/bg-image-01.webp" alt="alto" class="block-bg-01" />
      <img src="<?= $url; ?>/assets/img/block-14/bg-image-02.svg" alt="alto" class="block-bg-02" />
      <div class="block-wrap">
        <h2 class="h2">Подписывайтесь на наше сообщество ВКонтакте и узнавайте все новости первыми</h2>
        <div class="descr">Здесь мы выкладываем наши работы в образовательных учреждениях Калининграда и области</div>
        <a href="#" target="_blank" rel="noopener noreferrer" class="link-vk">/school_mebel39</a>
      </div>
    </div>
  </div>

  <div class="block-15">
    <div class="container df-sp-st">
      <h2 class="h2">Контакты</h2>
      <div class="block-item df-sp-ce w-100p">
        <div class="block-item__icon df-ce-ce"><img src="<?= $url; ?>/assets/img/block-15/icon-01.svg" alt="alto" /></div>
        <div class="block-item__content">
          <div class="block-item__label">label</div>
          <div class="block-item__descr">descr</div>
        </div>
      </div>
      <div class="block-item df-sp-ce w-100p">
        <div class="block-item__icon df-ce-ce"><img src="<?= $url; ?>/assets/img/block-15/icon-02.svg" alt="alto" /></div>
        <div class="block-item__content">
          <div class="block-item__label">label</div>
          <div class="block-item__descr">descr</div>
        </div>
      </div>
      <div class="block-item df-sp-ce w-100p">
        <div class="block-item__icon df-ce-ce"><img src="<?= $url; ?>/assets/img/block-15/icon-03.svg" alt="alto" /></div>
        <div class="block-item__content">
          <div class="block-item__label">label</div>
          <div class="block-item__descr">descr</div>
        </div>
      </div>
      <div class="block-item df-sp-ce w-100p">
        <div class="block-item__icon df-ce-ce"><img src="<?= $url; ?>/assets/img/block-15/icon-04.svg" alt="alto" /></div>
        <div class="block-item__content">
          <div class="block-item__label">label</div>
          <div class="block-item__descr">descr</div>
        </div>
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
get_footer();