<?php
/*
 * Template Name: Catalog
*/


get_header('page');

$url = get_template_directory_uri();
$image_base64 = 'data:image/gif;base64,R0lGODlhBwAFAIAAAP///wAAACH5BAEAAAEALAAAAAAHAAUAAAIFjI+puwUAOw==';
?>

  <div class="block-16">
    <div class="container">
      <div class="block-top">
        <h1 class="h1">Каталог</h1>
        <h2 class="h2">Парты и стулья</h2>
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
          <button class="favorite-btn" data-favorite-btn data-product-id="product-02" aria-label="Добавить в избранное">
            <svg class="favorite-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </button>
          <a href="#"><img src="<?= $url; ?>/assets/img/block-04/image-02.png" alt="alto" class="product-thumbnail" /></a>
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
          <button class="favorite-btn" data-favorite-btn data-product-id="product-03" aria-label="Добавить в избранное">
            <svg class="favorite-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </button>
          <a href="#"><img src="<?= $url; ?>/assets/img/block-04/image-03.png" alt="alto" class="product-thumbnail" /></a>
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
          <button class="favorite-btn" data-favorite-btn data-product-id="product-04" aria-label="Добавить в избранное">
            <svg class="favorite-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </button>
          <a href="#"><img src="<?= $url; ?>/assets/img/block-04/image-04.png" alt="alto" class="product-thumbnail" /></a>
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
          <button class="favorite-btn" data-favorite-btn data-product-id="product-05" aria-label="Добавить в избранное">
            <svg class="favorite-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </button>
          <a href="#"><img src="<?= $url; ?>/assets/img/block-04/image-05.png" alt="alto" class="product-thumbnail" /></a>
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
          <button class="favorite-btn" data-favorite-btn data-product-id="product-06" aria-label="Добавить в избранное">
            <svg class="favorite-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </button>
          <a href="#"><img src="<?= $url; ?>/assets/img/product/product-01.png" alt="alto" class="product-thumbnail" /></a>
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
          <button class="favorite-btn" data-favorite-btn data-product-id="product-07" aria-label="Добавить в избранное">
            <svg class="favorite-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </button>
          <a href="#"><img src="<?= $url; ?>/assets/img/product/product-01.png" alt="alto" class="product-thumbnail" /></a>
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
          <button class="favorite-btn" data-favorite-btn data-product-id="product-08" aria-label="Добавить в избранное">
            <svg class="favorite-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </button>
          <a href="#"><img src="<?= $url; ?>/assets/img/product/product-01.png" alt="alto" class="product-thumbnail" /></a>
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
          <button class="favorite-btn" data-favorite-btn data-product-id="product-09" aria-label="Добавить в избранное">
            <svg class="favorite-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </button>
          <a href="#"><img src="<?= $url; ?>/assets/img/product/product-01.png" alt="alto" class="product-thumbnail" /></a>
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
          <button class="favorite-btn" data-favorite-btn data-product-id="product-10" aria-label="Добавить в избранное">
            <svg class="favorite-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </button>
          <a href="#"><img src="<?= $url; ?>/assets/img/product/product-01.png" alt="alto" class="product-thumbnail" /></a>
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
          <button class="favorite-btn" data-favorite-btn data-product-id="product-11" aria-label="Добавить в избранное">
            <svg class="favorite-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </button>
          <a href="#"><img src="<?= $url; ?>/assets/img/product/product-01.png" alt="alto" class="product-thumbnail" /></a>
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
          <button class="favorite-btn" data-favorite-btn data-product-id="product-12" aria-label="Добавить в избранное">
            <svg class="favorite-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </button>
          <a href="#"><img src="<?= $url; ?>/assets/img/product/product-01.png" alt="alto" class="product-thumbnail" /></a>
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
          <button class="favorite-btn" data-favorite-btn data-product-id="product-13" aria-label="Добавить в избранное">
            <svg class="favorite-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </button>
          <a href="#"><img src="<?= $url; ?>/assets/img/product/product-01.png" alt="alto" class="product-thumbnail" /></a>
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
          <button class="favorite-btn" data-favorite-btn data-product-id="product-14" aria-label="Добавить в избранное">
            <svg class="favorite-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </button>
          <a href="#"><img src="<?= $url; ?>/assets/img/product/product-01.png" alt="alto" class="product-thumbnail" /></a>
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
          <button class="favorite-btn" data-favorite-btn data-product-id="product-15" aria-label="Добавить в избранное">
            <svg class="favorite-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </button>
          <a href="#"><img src="<?= $url; ?>/assets/img/product/product-01.png" alt="alto" class="product-thumbnail" /></a>
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
          <button class="favorite-btn" data-favorite-btn data-product-id="product-16" aria-label="Добавить в избранное">
            <svg class="favorite-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </button>
          <a href="#"><img src="<?= $url; ?>/assets/img/product/product-01.png" alt="alto" class="product-thumbnail" /></a>
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
          <button class="favorite-btn" data-favorite-btn data-product-id="product-17" aria-label="Добавить в избранное">
            <svg class="favorite-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </button>
          <a href="#"><img src="<?= $url; ?>/assets/img/product/product-01.png" alt="alto" class="product-thumbnail" /></a>
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
          <button class="favorite-btn" data-favorite-btn data-product-id="product-18" aria-label="Добавить в избранное">
            <svg class="favorite-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </button>
          <a href="#"><img src="<?= $url; ?>/assets/img/product/product-01.png" alt="alto" class="product-thumbnail" /></a>
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
          <button class="favorite-btn" data-favorite-btn data-product-id="product-19" aria-label="Добавить в избранное">
            <svg class="favorite-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </button>
          <a href="#"><img src="<?= $url; ?>/assets/img/product/product-01.png" alt="alto" class="product-thumbnail" /></a>
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
          <button class="favorite-btn" data-favorite-btn data-product-id="product-20" aria-label="Добавить в избранное">
            <svg class="favorite-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </button>
          <a href="#"><img src="<?= $url; ?>/assets/img/product/product-01.png" alt="alto" class="product-thumbnail" /></a>
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

<?php
get_footer();