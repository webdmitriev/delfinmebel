document.addEventListener('DOMContentLoaded', function () {
  if (document.querySelector('.block-07')) {
    const showMoreBtn = document.getElementById('showMoreVideos');
    const hiddenVideos = document.querySelectorAll('.hidden-video');
    let itemsToShow = 3; // Сколько видео показывать за один раз

    // Скрываем кнопку, если все видео видны
    if (hiddenVideos.length === 0) {
      showMoreBtn.style.display = 'none';
    }

    showMoreBtn.addEventListener('click', function () {
      let shownCount = 0;

      for (let i = 0; i < hiddenVideos.length && shownCount < itemsToShow; i++) {
        if (hiddenVideos[i].classList.contains('hidden-video')) {
          hiddenVideos[i].classList.remove('hidden-video');
          shownCount++;
        }
      }

      // Скрываем кнопку, если больше нет скрытых видео
      const remainingHidden = document.querySelectorAll('.hidden-video').length;
      if (remainingHidden === 0) {
        showMoreBtn.style.display = 'none';
      }
    });
  }
});