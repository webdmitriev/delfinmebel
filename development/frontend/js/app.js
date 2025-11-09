document.addEventListener('DOMContentLoaded', function () {
  console.log('start');

  // ******
  // header
  $(".header").on("click", ".burger", function () {
    $(this).toggleClass("active")
  })

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
})
