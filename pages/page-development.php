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

  <div class="block-06" style="display: none;">
    <div class="container">
      <h2 class="h2">Видеообзоры наших проектов</h2>
      <div class="block-video">
        <iframe src="https://vk.com/video_ext.php?oid=-219320320&id=456239049" width="853" height="480" style="background-color: #000" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>
        <p class="block-descr">Оснастили учебной мебелью 2 кабинета в школе №1 г.Немана в рамках проекта "РосАтомКлас"</p>
      </div>
    </div>
  </div>

  <div class="block-07">
    <div class="container">
      <h2 class="h2">Заголовок</h2>
      <div class="items-video">
        <div class="item-video">
          <iframe src="https://vk.com/video_ext.php?oid=-219320320&id=456239049" width="853" height="480" style="background-color: #000" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>
          <p class="item-descr">Калининградский бизнес-колледж</p>
        </div>
        <div class="item-video">
          <iframe src="https://vk.com/video_ext.php?oid=-219320320&id=456239049" width="853" height="480" style="background-color: #000" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>
          <p class="item-descr">Калининградский бизнес-колледж</p>
        </div>
        <div class="item-video">
          <iframe src="https://vk.com/video_ext.php?oid=-219320320&id=456239049" width="853" height="480" style="background-color: #000" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>
          <p class="item-descr">Калининградский бизнес-колледж</p>
        </div>
        <div class="item-video hidden-video">
          <iframe src="https://vk.com/video_ext.php?oid=-219320320&id=456239049" width="853" height="480" style="background-color: #000" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>
          <p class="item-descr">Калининградский бизнес-колледж</p>
        </div>
        <div class="item-video hidden-video">
          <iframe src="https://vk.com/video_ext.php?oid=-219320320&id=456239049" width="853" height="480" style="background-color: #000" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>
          <p class="item-descr">Калининградский бизнес-колледж</p>
        </div>
        <div class="item-video hidden-video">
          <iframe src="https://vk.com/video_ext.php?oid=-219320320&id=456239049" width="853" height="480" style="background-color: #000" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>
          <p class="item-descr">Калининградский бизнес-колледж</p>
        </div>
        <div class="item-video hidden-video">
          <iframe src="https://vk.com/video_ext.php?oid=-219320320&id=456239049" width="853" height="480" style="background-color: #000" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>
          <p class="item-descr">Калининградский бизнес-колледж</p>
        </div>
      </div>
      <div class="show-more-container">
        <button class="show-more-btn" id="showMoreVideos">Показать ещё</button>
      </div>
    </div>
  </div>

  <div class="block-08">
    <div class="container">
      <h2 class="h2">Выполненные работы</h2>
      <p class="sub_title">Мы гордимся нашими работами</p>
      <div class="block-pictures df-fs-st">
        <div class="block-picture">
          <div class="block-picture__gallery">
            <img src="<?= $url; ?>/assets/img/block-08/image-01.png" alt="alto" class="slide show-popup-gallery" />
            <img src="<?= $url; ?>/assets/img/block-08/image-02.jpeg" alt="alto" class="slide show-popup-gallery" />
            <img src="<?= $url; ?>/assets/img/block-08/image-03.jpeg" alt="alto" class="slide show-popup-gallery" />
          </div>
          <p class="block-picture__title">Экспозиционные витрины для музея</p>
          <p class="block-picture__descr">Техникум-интернат г.Советск</p>
        </div>
        <div class="block-picture">
          <div class="block-picture__gallery">
            <img src="<?= $url; ?>/assets/img/block-08/image-01.png" alt="alto" class="slide show-popup-gallery" />
            <img src="<?= $url; ?>/assets/img/block-08/image-01.png" alt="alto" class="slide show-popup-gallery" />
            <img src="<?= $url; ?>/assets/img/block-08/image-01.png" alt="alto" class="slide show-popup-gallery" />
          </div>
          <p class="block-picture__title">title</p>
          <p class="block-picture__descr">descr</p>
        </div>
        <div class="block-picture">
          <div class="block-picture__gallery">
            <img src="<?= $url; ?>/assets/img/block-08/image-01.png" alt="alto" class="slide show-popup-gallery" />
            <img src="<?= $url; ?>/assets/img/block-08/image-01.png" alt="alto" class="slide show-popup-gallery" />
            <img src="<?= $url; ?>/assets/img/block-08/image-01.png" alt="alto" class="slide show-popup-gallery" />
          </div>
          <p class="block-picture__title">title</p>
          <p class="block-picture__descr">descr</p>
        </div>
        <div class="block-picture">
          <div class="block-picture__gallery">
            <img src="<?= $url; ?>/assets/img/block-08/image-01.png" alt="alto" class="slide show-popup-gallery" />
            <img src="<?= $url; ?>/assets/img/block-08/image-01.png" alt="alto" class="slide show-popup-gallery" />
            <img src="<?= $url; ?>/assets/img/block-08/image-01.png" alt="alto" class="slide show-popup-gallery" />
          </div>
          <p class="block-picture__title">Экспозиционные витрины для музея</p>
          <p class="block-picture__descr">Техникум-интернат г.Советск</p>
        </div>
        <div class="block-picture">
          <div class="block-picture__gallery">
            <img src="<?= $url; ?>/assets/img/block-08/image-01.png" alt="alto" class="slide show-popup-gallery" />
            <img src="<?= $url; ?>/assets/img/block-08/image-01.png" alt="alto" class="slide show-popup-gallery" />
            <img src="<?= $url; ?>/assets/img/block-08/image-01.png" alt="alto" class="slide show-popup-gallery" />
          </div>
          <p class="block-picture__title">title</p>
          <p class="block-picture__descr">descr</p>
        </div>
        <div class="block-picture">
          <div class="block-picture__gallery">
            <img src="<?= $url; ?>/assets/img/block-08/image-01.png" alt="alto" class="slide show-popup-gallery" />
            <img src="<?= $url; ?>/assets/img/block-08/image-01.png" alt="alto" class="slide show-popup-gallery" />
            <img src="<?= $url; ?>/assets/img/block-08/image-01.png" alt="alto" class="slide show-popup-gallery" />
          </div>
          <p class="block-picture__title">title</p>
          <p class="block-picture__descr">descr</p>
        </div>
      </div>
      <a href="#" class="our-works" data-count="563">Смотреть все работы</a>
    </div>
  </div>

  <div class="block-09">
    <div class="container">
      <div class="block-title">
        <h2 class="h2">Часто задаваемые вопросы</h2>
        <p class="sub_title">Остались вопросы? Посмотрите ответы</p>
      </div>
      <div class="block-faq-block">
        <p class="descr descr-title">Как выбрать ростовую группу для школьной мебели, чтобы избежать проблем с Роспотребнадзором?</p>
        <p class="descr descr-popup"><span>Посмотреть таблицу ростовых групп</span></p>
        <iframe src="https://vk.com/video_ext.php?oid=-219320320&id=456239049" width="853" height="480" style="background-color: #000" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>
      </div>

      <div class="faq-accordion">
        <div class="panel">
          <div class="panel-heading ">Как выбрать правильную высоту парты для ученика? <div class="heading-button"></div></div>
          <div class="panel-collapse">
            <div class="panel-body">Высота парты должна соответствовать росту ребенка и СанПиНам. Мы предлагаем регулируемые модели, которые подходят детям разных возрастов. Позвоните нам и мы вас проконсультируем по подбору правильных ростовых групп, чтобы не было проблем с РосПотребНадзором.</div>
          </div>
        </div>
        <div class="panel">
          <div class="panel-heading ">Какая мебель лучше всего подходит для библиотеки? <div class="heading-button"></div></div>
          <div class="panel-collapse">
            <div class="panel-body">Для библиотек рекомендуем использовать прочные стеллажи с антикоррозийным покрытием и удобные читальные столы с мягкими стульями.</div>
          </div>
        </div>
        <div class="panel">
          <div class="panel-heading ">Можно ли заказать мебель нестандартных размеров? <div class="heading-button"></div></div>
          <div class="panel-collapse">
            <div class="panel-body">Мы принимаем заказы на изготовление мебели по индивидуальным размерам. Свяжитесь с нашими менеджерами для обсуждения деталей. Выезд и консультация бесплатно.</div>
          </div>
        </div>
        <div class="panel">
          <div class="panel-heading ">Какие документы нужны для покупки мебели юридическим лицом? <div class="heading-button"></div></div>
          <div class="panel-collapse">
            <div class="panel-body">Для оформления заказа потребуются реквизиты вашей организации, договор поставки и счет на оплату мы сделаем сами. При необходимости окажем содействие в получении коммерческих предложений от разных организаций.</div>
          </div>
        </div>
        <div class="panel">
          <div class="panel-heading ">Есть ли скидки для школ и образовательных учреждений на покупку мебели? <div class="heading-button"></div></div>
          <div class="panel-collapse">
            <div class="panel-body">Да, мы предоставляем специальные условия для государственных и частных образовательных организаций. А также у нас есть много акций. Уточните детали у нашего менеджера.</div>
          </div>
        </div>
        <div class="panel">
          <div class="panel-heading ">Можно ли получить образцы материалов перед покупкой? <div class="heading-button"></div></div>
          <div class="panel-collapse">
            <div class="panel-body">Конечно! Мы можем предоставить образцы материалов для ознакомления.</div>
          </div>
        </div>
        <div class="panel">
          <div class="panel-heading ">Какой опыт работы у вашей компании? <div class="heading-button"></div></div>
          <div class="panel-collapse">
            <div class="panel-body">Компания Дельфин работает на рынке производства мебели для учебных заведений более 5 лет. Мы имеем большой опыт и успешно реализовали множество проектов различной сложности.</div>
          </div>
        </div>
        <div class="panel">
          <div class="panel-heading ">Какие гарантии вы предоставляете на свою продукцию? <div class="heading-button"></div></div>
          <div class="panel-collapse">
            <div class="panel-body">На всю нашу мебель предоставляется гарантия сроком 12 месяцев. В случае возникновения каких-либо проблем, мы осуществляем гарантийный ремонт или замену продукции. И даже по истечении гарантийных обязательств, мы поможем вам, так как стараемся выстраивать долгосрочные отношения с нашими партнерами.</div>
          </div>
        </div>
        <div class="panel">
          <div class="panel-heading ">Из каких материалов изготавливается ваша мебель? <div class="heading-button"></div></div>
          <div class="panel-collapse">
            <div class="panel-body">Мы используем только высококачественные и экологически чистые материалы, такие как ЛДСП, массив дерева, металл и пластик. Все материалы имеют необходимые сертификаты соответствия.</div>
          </div>
        </div>
        <div class="panel">
          <div class="panel-heading ">Какие требования предъявляются к мебели для учебных заведений? <div class="heading-button"></div></div>
          <div class="panel-collapse">
            <div class="panel-body">Мебель для учебных заведений должна соответствовать определенным стандартам безопасности и эргономики. Наша компания строго следит за соблюдением всех требований ГОСТов и СанПиНов.</div>
          </div>
        </div>
        <div class="panel">
          <div class="panel-heading ">Какие способы оплаты мебели вы принимаете? <div class="heading-button"></div></div>
          <div class="panel-collapse">
            <div class="panel-body">Мы принимаем оплату наличными, банковскими картами и безналичным расчетом.</div>
          </div>
        </div>
        <div class="panel">
          <div class="panel-heading ">Где можно посмотреть образцы вашей мебели? <div class="heading-button"></div></div>
          <div class="panel-collapse">
            <div class="panel-body">Вы можете посетить наш офис или запросить выезд менеджера с образцами материалов.</div>
          </div>
        </div>
      </div>

    </div>
  </div>

  <div class="block-10">
    <div class="container">
      <h2 class="h2">Акции</h2>
      <div class="block-ozon">
        <img src="<?= $url; ?>/assets/img/block-10/image-01.png" alt="alto" class="block-ozon__image" />
        <div class="block-ozon__suptitle">Специальное предложение для наших клиентов</div>
        <div class="block-ozon__wrap">
          <div class="block-ozon__title">Привезем вам любой товар с без наценки</div>
          <div class="block-ozon__name">ozon</div>
        </div>
        <div class="descr">Мы стали официальным партнером маркетплейса ОЗОН и можем очень выгодно доставлять вам товары. <br/><br/>Вы просто выбираете нужные вам позиции, сбрасываете нам ссылки на них, а мы вам потом присылаем QR-код на получение в ближайшем от вашей школы пункте выдачи. <br/>Вместе с тем мы готовим полный пакет документов для вашей бухгалтерии.</div>
      </div>
    </div>
  </div>

  <div class="block-11">
    <div class="container">
      <h2 class="h2">Условия сотрудничества</h2>
      <div class="block-items df-ce-ce">
        <div class="block-item block-item-01 df-fs-ce">
          <img src="<?= $url; ?>/assets/img/block-11/icon-01.svg" alt="alto" class="block-item__icon" />
          <div class="block-item__label">Доставка и сборка</div>
          <div class="block-item__descr">Доставка и сборка по Калининграду и области бесплатно!</div>
        </div>
        <div class="block-item block-item-02 df-fs-ce">
          <img src="<?= $url; ?>/assets/img/block-11/icon-02.svg" alt="alto" class="block-item__icon" />
          <div class="block-item__label">Возможны разные варианты оплаты</div>
          <div class="block-item__descr">Оплата по факту доставки с предоплатой 0% <br/>Оплата по договору 30% / 70% , 50% / 50% и т.д.</div>
        </div>
        <div class="block-item block-item-03 df-fs-ce">
          <img src="<?= $url; ?>/assets/img/block-11/icon-03.svg" alt="alto" class="block-item__icon" />
          <div class="block-item__label">Индивидуальный подход</div>
          <div class="block-item__descr">Для постоянных партнеров действует гибкая система скидок</div>
        </div>
      </div>
    </div>
  </div>

  <div class="block-12">
    <div class="container df-fe-ce">
      <img src="<?= $url; ?>/assets/img/block-12/bg-image-01.png" alt="alto" class="block-bg" />
      <div class="block-wrap">
        <h2 class="h2">Наша мебель <br/>сделана по ГОСТу!</h2>
        <p class="descr">Мебель сертифицирована. <br/>Производство РФ.</p>
        <img src="<?= $url; ?>/assets/img/block-12/image-01.svg" alt="alto" class="image-block" />
      </div>
    </div>
  </div>

  <div class="block-13">
    <div class="block-lines">
      <div class="block-line block-line-01"></div>
      <div class="block-line block-line-02"></div>
      <div class="block-line block-line-03"></div>
      <div class="block-line block-line-04"></div>
      <div class="block-line block-line-05"></div>
      <div class="block-line block-line-06"></div>
      <div class="block-line block-line-07"></div>
      <div class="block-line block-line-08"></div>
      <div class="block-line block-line-09"></div>
      <div class="block-line block-line-10"></div>
      <div class="block-line block-line-11"></div>
      <div class="block-line block-line-12"></div>
      <div class="block-line block-line-13"></div>
      <div class="block-line block-line-14"></div>
      <div class="block-line block-line-15"></div>
      <div class="block-line block-line-16"></div>
      <div class="block-line block-line-17"></div>
      <div class="block-line block-line-18"></div>
      <div class="block-line block-line-19"></div>
      <div class="block-line block-line-20"></div>
      <div class="block-line block-line-21"></div>
      <div class="block-line block-line-22"></div>
      <div class="block-line block-line-23"></div>
      <div class="block-line block-line-24"></div>
    </div>
    <div class="container df-sp-fe">
      <div class="block-content">
        <h2 class="h2">Помогаем с подготовкой <br/>конкурсной документации</h2>
        <div class="block-item df-fs-fs w-100p">
          <img src="<?= $url; ?>/assets/img/block-13/icon-block-01.svg" alt="alto" class="block-item__icon" />
          <div class="descr">Разработка точного технического задания</div>
        </div>
        <div class="block-item df-fs-fs w-100p">
          <img src="<?= $url; ?>/assets/img/block-13/icon-block-02.svg" alt="alto" class="block-item__icon" />
          <div class="descr">Содействие в получении коммерческих предложений от разных фирм</div>
        </div>
      </div>
      <div class="block-policy df-sp-fs w-100p">
        <div class="block-item">
          <img src="<?= $url; ?>/assets/img/block-13/icon-block-03.webp" alt="alto" class="block-item__icon" />
          <div class="descr">Федеральный закон "О закупках товаров, работ, услуг отдельными видами юридических лиц" от 18.07.2011 N 223-ФЗ</div>
        </div>
        <div class="block-item">
          <img src="<?= $url; ?>/assets/img/block-13/icon-block-03.webp" alt="alto" class="block-item__icon" />
          <div class="descr">Федеральный закон "О контрактной системе в сфере закупок товаров, работ, услуг для обеспечения государственных и муниципальных нужд" от 05.04.2013 N 44-ФЗ</div>
        </div>
      </div>
    </div>
  </div>

<?php
get_footer();