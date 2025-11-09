<?php
/*
 * Template Name: Development
*/


get_header();

$url = get_template_directory_uri();
$image_base64 = 'data:image/gif;base64,R0lGODlhBwAFAIAAAP///wAAACH5BAEAAAEALAAAAAAHAAUAAAIFjI+puwUAOw==';
?>

  <main class="block-01">
    <header class="header">
      <div class="container df-sp-ce">
        <a href="<?php echo get_home_url( null, '/' ); ?>" class="logotype df-sp-ce w-100p">
          <img src="<?= $url; ?>/assets/img/header/logotype.png" alt="alto" />
          <span class="logotype-text">Новые парты и&nbsp;стулья от&nbsp;российского <br/>производителя по&nbsp;приемлемым ценам</span>
        </a>

        <div class="header-menus df-fe-st w-100p">
          <?php
            wp_nav_menu( [
              'theme_location'  => 'header-menu',
              'menu'            => '',
              'container'       => '',
              'container_class' => '',
              'container_id'    => '',
              'menu_class'      => 'header-menu df-fe-ce w-100p',
              'menu_id'         => '',
              'echo'            => true,
              'fallback_cb'     => 'wp_page_menu',
              'before'          => '',
              'after'           => '',
              'link_before'     => '',
              'link_after'      => '',
              'items_wrap'      => '<ul id="%1$s" class="%2$s">%3$s</ul>',
              'depth'           => 0,
              'walker'          => '',
            ] );
          ?>

          <a href="#" target="_blank" rel="noopener noreferrer" class="header-social df-ce-ce"><img src="<?= $url; ?>/assets/img/icons/icon-vk.svg" alt="alto" /></a>

          <button class="burger"><span></span></button>
        </div>
      </div>
    </header>

    <div class="block-01-video df-fe-fe">
      <!-- <video src="<?= $url ?>/assets/img/block-01/video.mp4" autoplay loop muted></video> -->
    </div>

    <div class="container">
      <h1 class="h1">Мебель для образовательных <br/>учреждений от производителя <br/>в&nbsp;Калининграде</h1>
      <div class="block-items df-fs-st w-100p">
        <div class="block-item">Качественно</div>
        <div class="block-item">Бюджетно</div>
        <div class="block-item">Стильно</div>
      </div>
    </div>

    <div class="data-items df-sp-fs">
      <div class="data-item">
        <img src="<?= $url; ?>/assets/img/block-01/icon-01.svg" alt="alto" />
        <span>Доставка и сборка мебели по Калининградской области осуществляется бесплатно</span>
      </div>
      <div class="data-item">
        <img src="<?= $url; ?>/assets/img/block-01/icon-02.svg" alt="alto" />
        <span>Выезд и консультация замерщика бесплатно</span>
      </div>
      <div class="data-item">
        <img src="<?= $url; ?>/assets/img/block-01/icon-03.svg" alt="alto" />
        <span>Дизайнер расставит и подберет мебель</span>
      </div>
      <div class="data-item">
        <img src="<?= $url; ?>/assets/img/block-01/icon-04.svg" alt="alto" />
        <span>Воплотим в жизнь ваши самые смелые проекты</span>
      </div>
    </div>
  </main>

  <div class="block-02">
    <div class="container df-ce-ce">
      <a href="#" class="btn btn-standard">Школьная мебель</a>
      <a href="#" class="btn btn-standard">Комплекты классной мебели</a>
      <a href="#" class="btn btn-standard">Столы</a>
      <a href="#" class="btn btn-standard">Системы хранения</a>
      <a href="#" class="btn btn-standard">Мягкая школьная мебель</a>
      <a href="#" class="btn btn-standard">Библиотечная мебель</a>
      <a href="#" class="btn btn-standard">Музейная мебель</a>
      <a href="#" class="btn btn-standard">Гардеробные системы</a>
      <a href="#" class="btn btn-standard">Лабораторная мебель</a>
      <a href="#" class="btn btn-standard">Мебель для столовых</a>
      <a href="#" class="btn btn-standard">Мебель лофт</a>
      <a href="#" class="btn btn-standard">Многоместные секции</a>
      <a href="#" class="btn btn-standard">Оборудование для образовательного процесса</a>
      <a href="#" class="btn btn-standard">Школьные доски и рельсовые системы</a>
      <a href="#" class="btn btn-standard">Кресла и стулья</a>
    </div>
  </div>

  <div class="block-03">
    <div class="container">
      <h2 class="h2">Каталог мебели</h2>
    </div>
  </div>

  <div class="block-04">
    <div class="container">
      <a href="#" class="block-category">
        <p class="block-category__name">Парты и стулья</p>
        <p class="block-category__descr">рабочие столы, коворкинг</p>
        <img src="<?= $url; ?>/assets/img/block-04/image-01.png" alt="alto" class="block-category__image" />
      </a>
      <a href="#" class="block-category">
        <p class="block-category__name">Столы</p>
        <p class="block-category__descr">для учителя, руководителя, персонала</p>
        <img src="<?= $url; ?>/assets/img/block-04/image-02.png" alt="alto" class="block-category__image" />
      </a>
      <a href="#" class="block-category">
        <p class="block-category__name">Системы хранения</p>
        <p class="block-category__descr">шкафы, стеллажи</p>
        <img src="<?= $url; ?>/assets/img/block-04/image-03.png" alt="alto" class="block-category__image" />
      </a>
      <a href="#" class="block-category">
        <p class="block-category__name">Демонстрационные столы, вытяжные шкафы</p>
        <p class="block-category__descr">лаборантская, химия, физика</p>
        <img src="<?= $url; ?>/assets/img/block-04/image-04.png" alt="alto" class="block-category__image" />
      </a>
      <a href="#" class="block-category">
        <p class="block-category__name">Мебель для учебного процесса</p>
        <p class="block-category__descr">плакатницы, тумбы, тележки и прочее</p>
        <img src="<?= $url; ?>/assets/img/block-04/image-05.png" alt="alto" class="block-category__image" />
      </a>
      <a href="#" class="block-category">
        <p class="block-category__name">Мягкая мебель</p>
        <p class="block-category__descr">диваны, банкетки, лавки для фойе</p>
        <img src="<?= $url; ?>/assets/img/block-04/image-06.png" alt="alto" class="block-category__image" />
      </a>
      <a href="#" class="block-category">
        <p class="block-category__name">Мебель для библиотеки</p>
        <img src="<?= $url; ?>/assets/img/block-04/image-07.png" alt="alto" class="block-category__image" />
      </a>
      <a href="#" class="block-category">
        <p class="block-category__name">Мебель для музеев</p>
        <img src="<?= $url; ?>/assets/img/block-04/image-08.png" alt="alto" class="block-category__image" />
      </a>
      <a href="#" class="block-category">
        <p class="block-category__name">Мебель для столовой</p>
        <img src="<?= $url; ?>/assets/img/block-04/image-09.png" alt="alto" class="block-category__image" />
      </a>
      <a href="#" class="block-category">
        <p class="block-category__name">Гардеробные системы</p>
        <img src="<?= $url; ?>/assets/img/block-04/image-10.png" alt="alto" class="block-category__image" />
      </a>
      <a href="#" class="block-category">
        <p class="block-category__name">Мебель лофт</p>
        <img src="<?= $url; ?>/assets/img/block-04/image-11.png" alt="alto" class="block-category__image" />
      </a>
      <a href="#" class="block-category">
        <p class="block-category__name">Кресла и стулья</p>
        <p class="block-category__descr">компьютерные, офисные, для учителя</p>
        <img src="<?= $url; ?>/assets/img/block-04/image-12.png" alt="alto" class="block-category__image" />
      </a>
      <a href="#" class="block-category">
        <p class="block-category__name">Кресла и стулья</p>
        <p class="block-category__descr">компьютерные, офисные, для учителя</p>
        <img src="<?= $url; ?>/assets/img/block-04/image-13.png" alt="alto" class="block-category__image" />
      </a>
      <a href="#" class="block-category">
        <p class="block-category__name">Многоместные секции</p>
        <img src="<?= $url; ?>/assets/img/block-04/image-14.png" alt="alto" class="block-category__image" />
      </a>
      <a href="#" class="block-category">
        <p class="block-category__name">Оборудование для образовательного процесса</p>
        <img src="<?= $url; ?>/assets/img/block-04/image-15.png" alt="alto" class="block-category__image" />
      </a>
    </div>
  </div>

  <div class="block-05">
    <div class="container">
      <h2 class="h2">Популярные товары</h2>
      <div class="slider-products">
        <a href="#" class="slider-product slide">
          <img src="<?= $url; ?>/assets/img/block-04/image-04.png" alt="alto" class="slider-product__image" />
          <p class="slider-product__title">title</p>
          <p class="slider-product__descr">descr</p>
          <div class="slider-product__price df-fs-fe w-100p">
            <span class="price-new">13 600</span>
            <span class="price-old">17 000</span>
          </div>
        </a>
        <a href="#" class="slider-product slide">
          <img src="<?= $url; ?>/assets/img/block-04/image-04.png" alt="alto" class="slider-product__image" />
          <p class="slider-product__title">title</p>
          <p class="slider-product__descr">descr</p>
          <div class="slider-product__price df-fs-fe w-100p">
            <span class="price-new">13 600</span>
            <span class="price-old">17 000</span>
          </div>
        </a>
        <a href="#" class="slider-product slide">
          <img src="<?= $url; ?>/assets/img/block-04/image-04.png" alt="alto" class="slider-product__image" />
          <p class="slider-product__title">title</p>
          <p class="slider-product__descr">descr</p>
          <div class="slider-product__price df-fs-fe w-100p">
            <span class="price-new">13 600</span>
            <span class="price-old">17 000</span>
          </div>
        </a>
        <a href="#" class="slider-product slide">
          <img src="<?= $url; ?>/assets/img/block-04/image-04.png" alt="alto" class="slider-product__image" />
          <p class="slider-product__title">title</p>
          <p class="slider-product__descr">descr</p>
          <div class="slider-product__price df-fs-fe w-100p">
            <span class="price-new">13 600</span>
            <span class="price-old">17 000</span>
          </div>
        </a>
        <a href="#" class="slider-product slide">
          <img src="<?= $url; ?>/assets/img/block-04/image-04.png" alt="alto" class="slider-product__image" />
          <p class="slider-product__title">title</p>
          <p class="slider-product__descr">descr</p>
          <div class="slider-product__price df-fs-fe w-100p">
            <span class="price-new">13 600</span>
            <span class="price-old">17 000</span>
          </div>
        </a>
        <a href="#" class="slider-product slide">
          <img src="<?= $url; ?>/assets/img/block-04/image-04.png" alt="alto" class="slider-product__image" />
          <p class="slider-product__title">title</p>
          <p class="slider-product__descr">descr</p>
          <div class="slider-product__price df-fs-fe w-100p">
            <span class="price-new">13 600</span>
            <span class="price-old">17 000</span>
          </div>
        </a>
        <a href="#" class="slider-product slide">
          <img src="<?= $url; ?>/assets/img/block-04/image-04.png" alt="alto" class="slider-product__image" />
          <p class="slider-product__title">title</p>
          <p class="slider-product__descr">descr</p>
          <div class="slider-product__price df-fs-fe w-100p">
            <span class="price-new">13 600</span>
            <span class="price-old">17 000</span>
          </div>
        </a>
        <a href="#" class="slider-product slide">
          <img src="<?= $url; ?>/assets/img/block-04/image-04.png" alt="alto" class="slider-product__image" />
          <p class="slider-product__title">title</p>
          <p class="slider-product__descr">descr</p>
          <div class="slider-product__price df-fs-fe w-100p">
            <span class="price-new">13 600</span>
            <span class="price-old">17 000</span>
          </div>
        </a>
        <a href="#" class="slider-product slide">
          <img src="<?= $url; ?>/assets/img/block-04/image-04.png" alt="alto" class="slider-product__image" />
          <p class="slider-product__title">title</p>
          <p class="slider-product__descr">descr</p>
          <div class="slider-product__price df-fs-fe w-100p">
            <span class="price-new">13 600</span>
            <span class="price-old">17 000</span>
          </div>
        </a>
      </div>
    </div>
  </div>

  <div class="block-06">
    <div class="container">
      <h2 class="h2">Видеообзоры наших проектов</h2>
      <div class="block-video">
        <iframe src="https://vk.com/video_ext.php?oid=-219320320&id=456239049&autoplay=1" width="853" height="480" style="background-color: #000" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>
        <p class="block-descr">Оснастили учебной мебелью 2 кабинета в школе №1 г.Немана в рамках проекта "РосАтомКлас"</p>
      </div>
    </div>
  </div>

<?php
get_footer();