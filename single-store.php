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

  <div class="block-17" data-product-id="product-<?= get_the_ID() || 0; ?>">
    <div class="container df-sp-fs">
      <div class="block-thumbnail">
        <img src="<?= $url; ?>/assets/img/block-04/image-01.png" alt="alto" class="block-thumbnail__main" />
        <div class="block-thumbnail__wrapper">
          <img src="<?= $url; ?>/assets/img/block-04/image-01.png" alt="alto" />
          <img src="<?= $url; ?>/assets/img/block-04/image-02.png" alt="alto" />
          <img src="<?= $url; ?>/assets/img/block-04/image-03.png" alt="alto" />
          <img src="<?= $url; ?>/assets/img/block-04/image-04.png" alt="alto" />
          <img src="<?= $url; ?>/assets/img/block-04/image-05.png" alt="alto" />
          <img src="<?= $url; ?>/assets/img/block-04/image-06.png" alt="alto" />
          <img src="<?= $url; ?>/assets/img/block-04/image-07.png" alt="alto" />
          <img src="<?= $url; ?>/assets/img/block-04/image-08.png" alt="alto" />
        </div>
      </div>
      <div class="block-content">
        <h1 class="h2"><?php the_title(); ?></h1>
        <div class="product-articulate">Артикул: 002</div>
        <div class="product-price df-fs-ce w-100p">
          <span class="price-new">1 000</span>
          <span class="price-old">1 200</span>
        </div>
        <div class="product-excerpt">Каркас дугообразный регулируемый/нерегулируемый. Ростовые группы-2,3,4,5,6.,пластиковые заглушки на концах труб, столешница ЛДСП 16 мм, закругленные края (по выбору),противоударная кромка ПВХ 2 мм,эргономические выемки (по выбору), сиденья и спинки натуральная гнутоклееная фанера, покрытая бесцветным лаком. Вы можете выбрать любой цвет каркаса металла (опоры стола и стульев), столешницы, кромки ПВХ.</div>
        <div class="product-buttons df-fs-st w-100p" style="gap: 16px">
          <button class="product-order product-popup-show">Запросить детали</button>
          <button class="product-order add-to-basket">Добавить в корзину</button>
        </div>
      </div>
    </div>
  </div>

<?php
get_footer();
