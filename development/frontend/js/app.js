document.addEventListener('DOMContentLoaded', function () {
  console.log('start');

  // ******
  // header
  $(".header").on("click", ".burger", function () {
    $(this).toggleClass("active")
  })

  // ******
  // header
  new AutoSlider('.slider-products', {
    loop: true,
    autoScrollDelay: 3000, // 3 секунды
    slideWidth: 310,       // ширина слайда
    gap: 16,               // отступ между слайдами
    pauseOnHover: true     // не останавливать при наведении
  });
})
