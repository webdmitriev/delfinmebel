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
        <h2 class="h2"><?php single_cat_title(); ?></h2>
      </div>
      <div class="block-products">
        <div class="product">
          <div class="product-label">Новинка</div>
          <button class="favorite-btn" data-favorite-btn data-product-id="product-01" aria-label="Добавить в избранное">
            <svg class="favorite-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </button>
          <a href="#"><img src="<?= $url; ?>/assets/img/block-04/image-01.png" alt="alto" class="product-thumbnail" /></a>
          <a href="#" class="product-title line-clamp line-clamp-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, fugit.</a>
          <div class="product-descr line-clamp line-clamp-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nostrum doloribus tempore dolores consequatur vero quibusdam soluta placeat commodi voluptatibus, sapiente expedita perspiciatis, beatae esse! Quibusdam voluptates alias nemo rem.</div>
          <div class="product-price df-fs-ce w-100p">
            <span class="price-new">1 000</span>
            <span class="price-old">1 200</span>
          </div>
          <a href="#" class="product-link">О товаре</a>
        </div>
        <div class="product">
          <div class="product-label">Новинка</div>
          <button class="favorite-btn" data-favorite-btn data-product-id="product-01" aria-label="Добавить в избранное">
            <svg class="favorite-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </button>
          <a href="#"><img src="<?= $url; ?>/assets/img/block-04/image-01.png" alt="alto" class="product-thumbnail" /></a>
          <a href="#" class="product-title line-clamp line-clamp-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, fugit.</a>
          <div class="product-descr line-clamp line-clamp-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nostrum doloribus tempore dolores consequatur vero quibusdam soluta placeat commodi voluptatibus, sapiente expedita perspiciatis, beatae esse! Quibusdam voluptates alias nemo rem.</div>
          <div class="product-price df-fs-ce w-100p">
            <span class="price-new">1 000</span>
            <span class="price-old">1 200</span>
          </div>
          <a href="#" class="product-link">О товаре</a>
        </div>
        <div class="product">
          <div class="product-label">Новинка</div>
          <button class="favorite-btn" data-favorite-btn data-product-id="product-01" aria-label="Добавить в избранное">
            <svg class="favorite-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </button>
          <a href="#"><img src="<?= $url; ?>/assets/img/block-04/image-01.png" alt="alto" class="product-thumbnail" /></a>
          <a href="#" class="product-title line-clamp line-clamp-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, fugit.</a>
          <div class="product-descr line-clamp line-clamp-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nostrum doloribus tempore dolores consequatur vero quibusdam soluta placeat commodi voluptatibus, sapiente expedita perspiciatis, beatae esse! Quibusdam voluptates alias nemo rem.</div>
          <div class="product-price df-fs-ce w-100p">
            <span class="price-new">1 000</span>
            <span class="price-old">1 200</span>
          </div>
          <a href="#" class="product-link">О товаре</a>
        </div>
        <div class="product">
          <div class="product-label">Новинка</div>
          <button class="favorite-btn" data-favorite-btn data-product-id="product-01" aria-label="Добавить в избранное">
            <svg class="favorite-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </button>
          <a href="#"><img src="<?= $url; ?>/assets/img/block-04/image-01.png" alt="alto" class="product-thumbnail" /></a>
          <a href="#" class="product-title line-clamp line-clamp-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, fugit.</a>
          <div class="product-descr line-clamp line-clamp-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nostrum doloribus tempore dolores consequatur vero quibusdam soluta placeat commodi voluptatibus, sapiente expedita perspiciatis, beatae esse! Quibusdam voluptates alias nemo rem.</div>
          <div class="product-price df-fs-ce w-100p">
            <span class="price-new">1 000</span>
            <span class="price-old">1 200</span>
          </div>
          <a href="#" class="product-link">О товаре</a>
        </div>
        <div class="product">
          <div class="product-label">Новинка</div>
          <button class="favorite-btn" data-favorite-btn data-product-id="product-01" aria-label="Добавить в избранное">
            <svg class="favorite-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </button>
          <a href="#"><img src="<?= $url; ?>/assets/img/block-04/image-01.png" alt="alto" class="product-thumbnail" /></a>
          <a href="#" class="product-title line-clamp line-clamp-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, fugit.</a>
          <div class="product-descr line-clamp line-clamp-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nostrum doloribus tempore dolores consequatur vero quibusdam soluta placeat commodi voluptatibus, sapiente expedita perspiciatis, beatae esse! Quibusdam voluptates alias nemo rem.</div>
          <div class="product-price df-fs-ce w-100p">
            <span class="price-new">1 000</span>
            <span class="price-old">1 200</span>
          </div>
          <a href="#" class="product-link">О товаре</a>
        </div>
        <div class="product">
          <div class="product-label">Новинка</div>
          <button class="favorite-btn" data-favorite-btn data-product-id="product-01" aria-label="Добавить в избранное">
            <svg class="favorite-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </button>
          <a href="#"><img src="<?= $url; ?>/assets/img/block-04/image-01.png" alt="alto" class="product-thumbnail" /></a>
          <a href="#" class="product-title line-clamp line-clamp-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, fugit.</a>
          <div class="product-descr line-clamp line-clamp-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nostrum doloribus tempore dolores consequatur vero quibusdam soluta placeat commodi voluptatibus, sapiente expedita perspiciatis, beatae esse! Quibusdam voluptates alias nemo rem.</div>
          <div class="product-price df-fs-ce w-100p">
            <span class="price-new">1 000</span>
            <span class="price-old">1 200</span>
          </div>
          <a href="#" class="product-link">О товаре</a>
        </div>
      </div>
    </div>
  </div>

<?php
get_footer();
