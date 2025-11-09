
/* animations.js */
jQuery(document).ready(function ($) {

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => entry.isIntersecting ? entry.target.classList.add('with-animation-active') : entry.target.classList.remove('www'))
  }, { rootMargin: "-5px 0px -100px 0px" })

  // *******************
  // changeColorAnimated
  if (document.querySelector('.block-01')) {
    changeColorAnimated("от производителя", ".block-01 .h1", "#5765ae");
  }

  function changeColorAnimated(text, className, color) {
    const elements = document.querySelectorAll(className);
    if (!elements.length) return;

    // Уникальный идентификатор для каждого слова
    const uniqueId = 'anim-' + Math.random().toString(36).substr(2, 9);

    elements.forEach(el => {
      const regex = new RegExp(`(${escapeRegExp(text)})`, 'gi');
      el.innerHTML = el.innerHTML.replace(regex, match => {
        return match
          .split('')
          .map((char, index) => {
            if (char === ' ') return '&nbsp;';
            return `<span class="${uniqueId}" data-delay="${index * 0.1}s">${char}</span>`;
          })
          .join('');
      });
    });

    // Добавляем стили для каждого слова отдельно
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes ${uniqueId}-anim {
        0% { color: inherit; }
        50% { color: ${color}; }
        100% { color: ${color}; }
      }
      .${uniqueId} {
        display: inline-block;
        color: inherit;
      }
      .${uniqueId}.animate {
        animation: ${uniqueId}-anim 1s ease forwards;
      }
    `;
    document.head.appendChild(style);

    // Наблюдаем за элементами и запускаем анимацию при появлении
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const spans = entry.target.querySelectorAll(`.${uniqueId}`);
          spans.forEach(span => {
            const delay = span.getAttribute('data-delay');
            span.style.animationDelay = delay;
            span.classList.add('animate');
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "-5px 0px -100px 0px" });

    elements.forEach(el => observer.observe(el));
  }

  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }




  // Expose functions to global scope if needed
  // window.changeColorAnimated = changeColorAnimated;
  // window.escapeRegExp = escapeRegExp;
});

/* app.js */
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


/* autoSlider.js */
class AutoSlider {
  constructor(containerSelector, options = {}) {
    this.container = document.querySelector(containerSelector);
    if (!this.container) {
      console.warn(`Slider container ${containerSelector} not found`);
      return;
    }

    // Настройки по умолчанию
    this.settings = {
      slideSelector: '.slide',
      autoScrollDelay: 3000,
      slideWidth: 310,
      gap: 16,
      pauseOnHover: true,
      loop: true,
      ...options
    };

    this.slides = this.container.querySelectorAll(this.settings.slideSelector);
    this.currentIndex = 0;
    this.isScrolling = true;
    this.scrollInterval = null;
    this.slideWidth = this.settings.slideWidth + this.settings.gap;

    this.init();
  }

  init() {
    if (this.slides.length <= 1) return;

    this.startAutoScroll();
    this.setupEventListeners();
  }

  setupEventListeners() {
    if (this.settings.pauseOnHover) {
      this.container.addEventListener('mouseenter', () => this.stopAutoScroll());
      this.container.addEventListener('mouseleave', () => this.startAutoScroll());
      this.container.addEventListener('touchstart', () => this.stopAutoScroll());
      this.container.addEventListener('touchend', () => this.startAutoScroll());
    }

    this.container.addEventListener('scroll', () => {
      this.handleManualScroll();
    });
  }

  handleManualScroll() {
    const scrollLeft = this.container.scrollLeft;
    this.currentIndex = Math.round(scrollLeft / this.slideWidth);

    // Если зацикливание отключено, останавливаемся в конце
    if (!this.settings.loop && this.currentIndex >= this.slides.length - 1) {
      this.stopAutoScroll();
    }
  }

  scrollToSlide(index) {
    let targetIndex;

    if (this.settings.loop) {
      // Зацикленный режим
      targetIndex = index % this.slides.length;
      if (targetIndex < 0) {
        targetIndex = this.slides.length + targetIndex;
      }
    } else {
      // Режим без зацикливания - ограничиваем индексы
      targetIndex = Math.max(0, Math.min(index, this.slides.length - 1));
    }

    this.currentIndex = targetIndex;

    this.container.scrollTo({
      left: targetIndex * this.slideWidth,
      behavior: 'smooth'
    });

    // Если достигли конца и зацикливание отключено - останавливаем автопрокрутку
    if (!this.settings.loop && targetIndex >= this.slides.length - 1) {
      this.stopAutoScroll();
    }
  }

  nextSlide() {
    const nextIndex = this.currentIndex + 1;

    // Проверяем, достигли ли мы конца при отключенном зацикливании
    if (!this.settings.loop && nextIndex >= this.slides.length) {
      return false; // Не можем двигаться дальше
    }

    this.scrollToSlide(nextIndex);
    return true;
  }

  prevSlide() {
    const prevIndex = this.currentIndex - 1;

    // Проверяем, достигли ли мы начала при отключенном зацикливании
    if (!this.settings.loop && prevIndex < 0) {
      return false; // Не можем двигаться назад
    }

    this.scrollToSlide(prevIndex);
    return true;
  }

  startAutoScroll() {
    // Если зацикливание отключено и мы в конце - не запускаем автопрокрутку
    if (!this.settings.loop && this.currentIndex >= this.slides.length - 1) {
      return;
    }

    this.stopAutoScroll();
    this.isScrolling = true;

    this.scrollInterval = setInterval(() => {
      if (this.isScrolling) {
        const canScroll = this.nextSlide();

        // Если не можем прокрутить дальше (конец без зацикливания) - останавливаем
        if (!canScroll && !this.settings.loop) {
          this.stopAutoScroll();
        }
      }
    }, this.settings.autoScrollDelay);
  }

  stopAutoScroll() {
    this.isScrolling = false;
    if (this.scrollInterval) {
      clearInterval(this.scrollInterval);
      this.scrollInterval = null;
    }
  }

  // Публичные методы
  play() {
    this.startAutoScroll();
  }

  pause() {
    this.stopAutoScroll();
  }

  goTo(index) {
    this.scrollToSlide(index);
  }

  // Новый метод для изменения настроек на лету
  updateSettings(newSettings) {
    this.settings = { ...this.settings, ...newSettings };

    // Перезапускаем автопрокрутку если нужно
    if (this.scrollInterval) {
      this.startAutoScroll();
    }
  }

  destroy() {
    this.stopAutoScroll();
  }
}

/* galleryPopup.js */
class GalleryPopup {
  constructor(options = {}) {
    this.settings = {
      triggerSelector: '.show-popup-gallery', // Кликабельные элементы
      imageSelector: 'img',                   // Селектор картинок внутри родителя
      parentSelector: null,                   // Автоматическое определение родителя
      popupClass: 'gallery-popup',
      ...options
    };

    this.popup = null;
    this.currentGallery = [];
    this.currentIndex = 0;

    this.init();
  }

  init() {
    this.createPopup();
    this.setupEventListeners();
  }

  createPopup() {
    // Создаем popup элемент (остается таким же)
    this.popup = document.createElement('div');
    this.popup.className = this.settings.popupClass;
    this.popup.innerHTML = `
      <div class="gallery-overlay"></div>
      <div class="gallery-container">
        <button class="gallery-close">&times;</button>
        <button class="gallery-prev">‹</button>
        <div class="gallery-content">
          <img class="gallery-image" src="" alt="">
          <div class="gallery-loader">
            <div class="loader-spinner"></div>
          </div>
        </div>
        <button class="gallery-next">›</button>
        <div class="gallery-thumbnails"></div>
        <div class="gallery-counter">
          <span class="current-index">1</span> / <span class="total-count">0</span>
        </div>
      </div>
    `;

    document.body.appendChild(this.popup);

    // Назначаем обработчики для popup
    this.popup.querySelector('.gallery-overlay').addEventListener('click', () => this.close());
    this.popup.querySelector('.gallery-close').addEventListener('click', () => this.close());
    this.popup.querySelector('.gallery-prev').addEventListener('click', () => this.prev());
    this.popup.querySelector('.gallery-next').addEventListener('click', () => this.next());

    // Закрытие по ESC и управление стрелками
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.close();
      if (e.key === 'ArrowLeft') this.prev();
      if (e.key === 'ArrowRight') this.next();
    });
  }

  setupEventListeners() {
    // Обработчик клика на триггерные элементы
    document.addEventListener('click', (e) => {
      const target = e.target.closest(this.settings.triggerSelector);
      if (target) {
        e.preventDefault();
        this.openFromTrigger(target);
      }
    });
  }

  openFromTrigger(triggerElement) {
    // Находим родительский контейнер
    let parent;

    if (this.settings.parentSelector) {
      // Если указан конкретный родитель
      parent = triggerElement.closest(this.settings.parentSelector);
    } else {
      // Автоматически ищем общего родителя для всех картинок
      parent = this.findCommonParent(triggerElement);
    }

    if (!parent) {
      console.warn('Parent container not found');
      return;
    }

    // Находим все картинки внутри родителя
    const images = parent.querySelectorAll(this.settings.imageSelector);

    if (images.length === 0) {
      console.warn('No images found in parent container');
      return;
    }

    // Преобразуем в массив и находим индекс кликнутой картинки
    const imagesArray = Array.from(images);
    const clickedImage = triggerElement.matches('img') ?
      triggerElement :
      triggerElement.querySelector('img');

    const clickedIndex = clickedImage ?
      imagesArray.indexOf(clickedImage) :
      0;

    // Открываем галерею
    this.openGallery(imagesArray, Math.max(0, clickedIndex));
  }

  findCommonParent(triggerElement) {
    // Ищем родительский контейнер, который содержит все картинки с таким же триггером
    let currentParent = triggerElement.parentElement;

    while (currentParent && currentParent !== document.body) {
      // Проверяем, содержит ли этот родитель другие триггеры
      const otherTriggers = currentParent.querySelectorAll(this.settings.triggerSelector);
      if (otherTriggers.length > 1) {
        return currentParent;
      }
      currentParent = currentParent.parentElement;
    }

    // Если не нашли общего родителя, используем непосредственного родителя
    return triggerElement.parentElement;
  }

  openGallery(images, startIndex = 0) {
    this.currentGallery = images;
    this.currentIndex = startIndex;

    this.updatePopupContent();
    this.showPopup();
  }

  updatePopupContent() {
    const imageElement = this.popup.querySelector('.gallery-image');
    const thumbnailsContainer = this.popup.querySelector('.gallery-thumbnails');
    const counterElement = this.popup.querySelector('.gallery-counter');
    const currentIndexElement = this.popup.querySelector('.current-index');
    const totalCountElement = this.popup.querySelector('.total-count');
    const loader = this.popup.querySelector('.gallery-loader');

    // Показываем лоадер
    loader.classList.add('active');
    imageElement.classList.remove('loaded');

    // Обновляем основное изображение
    const currentImage = this.currentGallery[this.currentIndex];

    const img = new Image();
    img.onload = () => {
      imageElement.src = currentImage.src;
      imageElement.alt = currentImage.alt || '';
      imageElement.classList.add('loaded');
      loader.classList.remove('active');
    };
    img.onerror = () => {
      imageElement.alt = 'Image failed to load';
      loader.classList.remove('active');
    };
    img.src = currentImage.src;

    // Обновляем счетчик
    currentIndexElement.textContent = this.currentIndex + 1;
    totalCountElement.textContent = this.currentGallery.length;

    // Обновляем миниатюры
    thumbnailsContainer.innerHTML = '';
    this.currentGallery.forEach((image, index) => {
      const thumb = document.createElement('img');
      thumb.src = image.src;
      thumb.alt = image.alt || '';
      thumb.className = `gallery-thumb ${index === this.currentIndex ? 'active' : ''}`;
      thumb.addEventListener('click', () => this.goTo(index));
      thumbnailsContainer.appendChild(thumb);
    });

    // Показываем/скрываем кнопки навигации
    this.updateNavigation();
  }

  updateNavigation() {
    const prevBtn = this.popup.querySelector('.gallery-prev');
    const nextBtn = this.popup.querySelector('.gallery-next');

    if (this.currentGallery.length <= 1) {
      prevBtn.style.display = 'none';
      nextBtn.style.display = 'none';
    } else {
      prevBtn.style.display = 'block';
      nextBtn.style.display = 'block';
    }
  }

  next() {
    if (this.currentGallery.length <= 1) return;

    this.currentIndex = (this.currentIndex + 1) % this.currentGallery.length;
    this.updatePopupContent();
  }

  prev() {
    if (this.currentGallery.length <= 1) return;

    this.currentIndex = (this.currentIndex - 1 + this.currentGallery.length) % this.currentGallery.length;
    this.updatePopupContent();
  }

  goTo(index) {
    if (index >= 0 && index < this.currentGallery.length) {
      this.currentIndex = index;
      this.updatePopupContent();
    }
  }

  showPopup() {
    this.popup.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.popup.classList.remove('active');
    document.body.style.overflow = '';

    setTimeout(() => {
      this.currentGallery = [];
      this.currentIndex = 0;
    }, 300);
  }

  destroy() {
    if (this.popup) {
      this.popup.remove();
    }
  }
}
