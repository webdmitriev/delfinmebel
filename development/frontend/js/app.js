document.addEventListener('DOMContentLoaded', function () {
  console.log('start');

  // ******
  // header
  $(".header").on("click", ".burger", function () {
    $(this).toggleClass("active")
    $(".header-mobile").toggleClass("active")
  })
  $(".header-mobile").on("click", ".close-menu", function () {
    $(".header .burger").removeClass("active")
    $(".header-mobile").removeClass("active")
  })

  // *********
  // Scroll on
  $("body").on('click', ".ancLinks a", function () {
    let elementClick = $(this).attr("href");
    let destination = Math.round($(elementClick).offset().top);

    $(".header-mobile").removeClass("active")
    $(".header .burger-menu").removeClass("active")

    $("html,body").animate({ scrollTop: destination - 5 }, 1100);
    return false;
  });

  // **********
  // AutoSlider
  new AutoSlider('.slider-products', {
    loop: true,
    autoScrollDelay: 3000, // 3 секунды
    slideWidth: 310,       // ширина слайда
    gap: 16,               // отступ между слайдами
    pauseOnHover: true     // не останавливать при наведении
  });

  // ************
  // GalleryPopup
  new GalleryPopup();

  // const customGallery = new GalleryPopup({
  //   triggerSelector: '.my-gallery-trigger', // Кастомный класс триггера
  //   imageSelector: '.gallery-img',          // Кастомный селектор картинок
  //   parentSelector: '.gallery-container',   // Конкретный родитель (опционально)
  //   popupClass: 'my-custom-popup'          // Кастомный класс popup
  // });

  // ***
  // faq
  $(".panel-heading").click(function (e) {
    $(this)
      .toggleClass("in")
      .next()
      .slideToggle();
    $(".panel-heading")
      .not(this)
      .removeClass("in")
      .next()
      .slideUp();
    e.preventDefault();
  });

  // ******
  // footer
  const scrollToTopBtn = document.querySelector('a.link-to-top');
  if (scrollToTopBtn) {
    // Показываем/скрываем кнопку при скролле
    window.addEventListener('scroll', function () {
      if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('visible');
      } else {
        scrollToTopBtn.classList.remove('visible');
      }
    });

    // Плавный скролл при клике
    scrollToTopBtn.addEventListener('click', function (e) {
      e.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  $(".popup").on('click', '.popup-close', function () {
    $(".popup").hide()
  })

  $('.block-23').on('click', '.basket-submit', function () {
    openOrderPopup()
  })

  // Функция для открытия попапа с формой
  function openOrderPopup() {
    // Заполняем поле корзины перед открытием попапа
    if (window.basketManager) {
      window.basketManager.fillBasketFormField();
    }

    // Ваш код открытия попапа
    document.querySelector('.popup-basket').style.display = 'block';
  }

  // Обновляем данные при клике на кнопку оформления заказа
  document.addEventListener('click', function (e) {
    if (e.target.closest('.basket-submit')) {

      if (window.basketManager) {
        window.basketManager.fillBasketFormField();
      }
    }
  });

  // ***********
  // updateSpeed
  updateSpeed()
  function updateSpeed() {
    const marqueeContainer = $('.marquee-container')
    if (marqueeContainer) {
      marqueeContainer.each((idx, el) => {
        const marqueeItems = el.querySelector('.marquee-content')
        const marqueeItem = el.querySelector('.marquee-item')
        const marqueeSpeed = marqueeItems.getAttribute('data-speed')
        const marqueeRepeat = marqueeItems.getAttribute('data-repeat')

        for (let index = 1; index < marqueeRepeat; index++) {
          const item = marqueeItem.cloneNode(true)
          marqueeItems.append(item)
        }

        marqueeItems.style.animationDuration = marqueeSpeed + "s";
      })
    }
  }

  // ***********
  // Product
  new ImageGallery('.block-thumbnail');

  // Для нескольких галерей на странице
  // const galleries = document.querySelectorAll('.block-thumbnail');
  // galleries.forEach(container => {
  //   new ImageGallery(container);
  // });

})
