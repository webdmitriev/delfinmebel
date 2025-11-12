
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
  if (document.querySelector('.block-10')) {
    changeColorAnimated("ozon", ".block-10 .block-ozon__name", "#345cfa");
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

/* basketManager.js */
class BasketManager {
  constructor() {
    this.storageKey = 'user_basket';
    this.basket = this.getBasket();
    this.init();
  }

  // Получаем корзину из localStorage
  getBasket() {
    const stored = localStorage.getItem(this.storageKey);
    return stored ? JSON.parse(stored) : [];
  }

  // Сохраняем корзину в localStorage
  saveBasket() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.basket));
    this.updateBasketCounter();
    this.updateProductPageButton(); // Обновляем кнопку на странице товара
  }

  // Инициализация
  init() {
    this.bindEvents();
    this.updateBasketCounter();
    this.updateProductPageButton(); // Инициализируем состояние кнопки

    // Если мы на странице корзины, рендерим товары
    if (this.isBasketPage()) {
      this.renderBasketPage();
    }
  }

  // Проверяем, находимся ли на странице товара
  isProductPage() {
    return document.querySelector('.block-17') !== null;
  }

  // Проверяем, находимся ли на странице корзины
  isBasketPage() {
    return window.location.pathname.includes('/basket') ||
      document.querySelector('.block-23') !== null;
  }

  // Обновляем кнопку на странице товара
  updateProductPageButton() {
    if (!this.isProductPage()) return;

    const productId = this.getProductId();
    const addToBasketBtn = document.querySelector('.add-to-basket');

    if (addToBasketBtn && productId) {
      const isInBasket = this.isInBasket(productId);

      if (isInBasket) {
        addToBasketBtn.classList.add('in-basket');
        addToBasketBtn.innerHTML = `
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 8px;">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    В корзине
                `;
        addToBasketBtn.setAttribute('title', 'Товар уже в корзине');
      } else {
        addToBasketBtn.classList.remove('in-basket');
        addToBasketBtn.innerHTML = `
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" style="margin-right: 8px;">
                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18m-5 4a4 4 0 1 1-8 0"/>
                    </svg>
                    Добавить в корзину
                `;
        addToBasketBtn.setAttribute('title', 'Добавить товар в корзину');
      }
    }
  }

  // Проверяем, есть ли товар в корзине
  isInBasket(productId) {
    return this.basket.some(item => item.id === productId);
  }

  // Добавляем товар в корзину
  addToBasket(productId, productData = null) {
    // Проверяем, есть ли уже такой товар в корзине
    const existingItemIndex = this.basket.findIndex(item => item.id === productId);

    if (existingItemIndex !== -1) {
      // Товар уже в корзине - увеличиваем количество
      this.basket[existingItemIndex].quantity += 1;
      this.showNotification('Товар уже в корзине. Количество увеличено.');
    } else {
      // Добавляем новый товар
      const basketItem = {
        id: productId,
        quantity: 1,
        addedAt: new Date().toISOString(),
        ...productData
      };

      this.basket.push(basketItem);
      this.showNotification('Товар добавлен в корзину');
    }

    this.saveBasket();
  }

  // Удаляем товар из корзины
  removeFromBasket(productId) {
    this.basket = this.basket.filter(item => item.id !== productId);
    this.saveBasket();
    this.showNotification('Товар удален из корзины');

    // Если мы на странице корзины, перерисовываем
    if (this.isBasketPage()) {
      this.renderBasketPage();
    }
  }

  // Получаем все товары в корзине
  getBasketItems() {
    return this.basket;
  }

  // Получаем общее количество товаров
  getTotalQuantity() {
    return this.basket.reduce((total, item) => total + item.quantity, 0);
  }

  // Получаем общую сумму
  getTotalPrice() {
    return this.basket.reduce((total, item) => {
      const price = this.parsePrice(item.price);
      return total + (price * item.quantity);
    }, 0);
  }

  // Парсим цену из строки
  parsePrice(priceString) {
    if (!priceString) return 0;
    return parseInt(priceString.replace(/\s/g, '')) || 0;
  }

  // Форматируем цену
  formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }

  // Обновляем счетчик корзины в шапке
  updateBasketCounter() {
    const counterElements = document.querySelectorAll('.basket-counter');
    const totalQuantity = this.getTotalQuantity();

    counterElements.forEach(element => {
      element.textContent = totalQuantity;
      element.style.display = totalQuantity > 0 ? 'flex' : 'none';
    });
  }

  // Собираем данные товара со страницы товара
  getProductData() {
    const productBlock = document.querySelector('.block-17');
    return {
      title: document.querySelector('.block-content h1, .block-content h2')?.textContent?.trim() || '',
      articulate: document.querySelector('.product-articulate')?.textContent?.trim() || '',
      price: document.querySelector('.price-new')?.textContent?.trim() || '',
      oldPrice: document.querySelector('.price-old')?.textContent?.trim() || '',
      description: document.querySelector('.product-excerpt')?.textContent?.trim() || '',
      thumbnail: document.querySelector('.block-thumbnail__main')?.src || '',
      link: window.location.href
    };
  }

  // Получаем ID товара
  getProductId() {
    const productBlock = document.querySelector('.block-17');
    if (productBlock && productBlock.dataset.productId) {
      return productBlock.dataset.productId;
    }

    // Fallback - создаем ID на основе артикула или заголовка
    const articulate = document.querySelector('.product-articulate');
    if (articulate) {
      const match = articulate.textContent.match(/[A-Za-z0-9]+$/);
      if (match) return `product-${match[0]}`;
    }

    const title = document.querySelector('.block-content h1, .block-content h2');
    if (title) {
      return `product-${this.stringToSlug(title.textContent)}`;
    }

    return `product-${Date.now()}`;
  }

  // Вспомогательная функция для создания slug
  stringToSlug(str) {
    return str
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  }

  // Рендерим страницу корзины
  renderBasketPage() {
    const container = document.querySelector('.block-23 .block-wrapper');
    if (!container) return;

    const basketItems = this.getBasketItems();

    if (basketItems.length === 0) {
      container.innerHTML = this.getEmptyBasketHTML();
      return;
    }

    container.innerHTML = this.getBasketItemsHTML(basketItems);
    this.bindBasketEvents();
  }

  // HTML для пустой корзины
  getEmptyBasketHTML() {
    return `
            <div class="empty-basket">
                <div class="empty-basket__icon">🛒</div>
                <h3>Корзина пуста</h3>
                <p>Добавьте товары, чтобы сделать заказ</p>
                <a href="/" class="btn btn-primary">Перейти в каталог</a>
            </div>
        `;
  }

  // HTML для товаров в корзине
  getBasketItemsHTML(items) {
    const totalPrice = this.getTotalPrice();

    return `
            <div class="basket-items">
                ${items.map(item => `
                    <div class="basket-item" data-product-id="${item.id}">
                        <div class="basket-item__image">
                            <img src="${item.thumbnail}" alt="${item.title}" />
                        </div>
                        <div class="basket-item__content">
                            <h3 class="basket-item__title">${item.title}</h3>
                            <div class="basket-item__articulate">${item.articulate}</div>
                            <div class="basket-item__price">${this.formatPrice(this.parsePrice(item.price))} ₽</div>
                            <div class="basket-item__quantity">Количество: ${item.quantity}</div>
                        </div>
                        <button class="basket-item__remove" data-remove-from-basket="${item.id}" title="Удалить из корзины">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M18 6L6 18M6 6l12 12"/>
                            </svg>
                        </button>
                    </div>
                `).join('')}
            </div>
            <div class="basket-total">
                <div class="basket-total__label">Итого:</div>
                <div class="basket-total__price">${this.formatPrice(totalPrice)} ₽</div>
            </div>
            <div class="basket-actions">
                <button class="btn btn-primary basket-submit" data-basket-submit>Оформить заказ</button>
                <a href="/" class="btn btn-secondary">Продолжить покупки</a>
            </div>
        `;
  }

  // Привязываем события для корзины
  bindBasketEvents() {
    // Удаление товаров из корзины
    document.querySelectorAll('[data-remove-from-basket]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const productId = e.target.closest('[data-remove-from-basket]').getAttribute('data-remove-from-basket');
        this.removeFromBasket(productId);
      });
    });

    // Кнопка оформления заказа
    const submitBtn = document.querySelector('[data-basket-submit]');
    if (submitBtn) {
      submitBtn.addEventListener('click', () => {
        this.submitOrder();
      });
    }
  }

  // Оформление заказа (будет интегрировано с CF7)
  submitOrder() {
    const basketItems = this.getBasketItems();

    if (basketItems.length === 0) {
      this.showNotification('Корзина пуста');
      return;
    }

    // Здесь будет вызов вашего CF7 попапа
    this.showNotification('Открываю форму заказа...');

    // Пример данных для передачи в форму
    const orderData = {
      items: basketItems,
      total: this.getTotalPrice(),
      totalQuantity: this.getTotalQuantity()
    };

    console.log('Данные для заказа:', orderData);

    // Вызов вашего попапа CF7
    // window.openOrderPopup(orderData);
  }

  // Показываем уведомление
  showNotification(message) {
    // Удаляем предыдущее уведомление
    const existingNotification = document.querySelector('.basket-notification');
    if (existingNotification) {
      existingNotification.remove();
    }

    // Создаем новое уведомление
    const notification = document.createElement('div');
    notification.className = 'basket-notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    // Показываем
    setTimeout(() => notification.classList.add('show'), 100);

    // Скрываем через 3 секунды
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }

  // Привязываем события
  bindEvents() {
    // Обработчик кликов на кнопки добавления в корзину
    document.addEventListener('click', (e) => {
      const addToBasketBtn = e.target.closest('.add-to-basket');
      if (addToBasketBtn) {
        e.preventDefault();

        const productId = this.getProductId();
        const productData = this.getProductData();

        if (this.isInBasket(productId)) {
          // Если товар уже в корзине, удаляем его
          this.removeFromBasket(productId);
        } else {
          // Если товара нет в корзине, добавляем
          this.addToBasket(productId, productData);
        }
      }
    });

    // Инициализация страницы корзины
    if (this.isBasketPage()) {
      this.renderBasketPage();
    }
  }

  // Собираем данные корзины для формы
  getBasketDataForForm() {
    const basketItems = this.getBasketItems();

    if (basketItems.length === 0) {
      return 'Корзина пуста';
    }

    const itemsText = basketItems.map(item => {
      return `${item.title} (Артикул: ${item.articulate}) - ${item.quantity} шт. - ${item.price} ₽`;
    }).join('\n');

    const totalPrice = this.getTotalPrice();
    const totalText = `\n\nИтого: ${this.formatPrice(totalPrice)} ₽`;

    return itemsText + totalText;
  }

  // Заполняем скрытое поле в форме
  fillBasketFormField() {
    const basketField = document.querySelector('input[name="your-basket"], textarea[name="your-basket"]');

    if (basketField) {
      basketField.value = this.getBasketDataForForm();
    }
  }

  // Инициализация для форм
  initForms() {
    // Заполняем поле при загрузке
    this.fillBasketFormField();

    // Обновляем поле при изменении корзины
    this.observeBasketChanges();

    // Обновляем поле перед отправкой формы (на всякий случай)
    this.bindFormSubmit();
  }

  // Наблюдаем за изменениями корзины
  observeBasketChanges() {
    // Перехватываем методы изменения корзины
    const originalAdd = this.addToBasket;
    const originalRemove = this.removeFromBasket;

    this.addToBasket = (productId, productData) => {
      originalAdd.call(this, productId, productData);
      this.fillBasketFormField();
    };

    this.removeFromBasket = (productId) => {
      originalRemove.call(this, productId);
      this.fillBasketFormField();
    };
  }

  // Привязываемся к отправке формы
  bindFormSubmit() {
    document.addEventListener('wpcf7submit', () => {
      // Очищаем корзину после успешной отправки
      this.clearBasket();
    });

    // Для обычных форм
    document.addEventListener('submit', (e) => {
      if (e.target.querySelector('[name="your-basket"]')) {
        this.fillBasketFormField();
      }
    });
  }

  // Очищаем корзину после отправки
  clearBasket() {
    this.basket = [];
    this.saveBasket();
    this.showNotification('Заказ отправлен! Корзина очищена.');
  }
}

// Инициализация
document.addEventListener('DOMContentLoaded', function () {
  window.basketManager = new BasketManager();

  // Инициализируем работу с формами
  setTimeout(() => {
    window.basketManager.initForms();
  }, 1000);
});

/* block-07.js */
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

/* favoriteManager.js */
class FavoritesManager {
  constructor() {
    this.storageKey = 'user_favorites';
    this.favorites = this.getFavorites();
    this.init();
  }

  // Получаем избранное из localStorage
  getFavorites() {
    const stored = localStorage.getItem(this.storageKey);
    return stored ? JSON.parse(stored) : [];
  }

  // Сохраняем в localStorage
  saveFavorites() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.favorites));
  }

  // Инициализация
  init() {
    this.updateAllButtons();
    this.bindEvents();
    this.initProductPage(); // Инициализация для страницы товара
  }

  // Инициализация для страницы отдельного товара
  initProductPage() {
    if (this.isProductPage()) {
      this.createProductPageButton();
      this.updateProductPageButton();
    }
  }

  // Проверяем, находимся ли на странице товара
  isProductPage() {
    return document.querySelector('.block-17 .block-content') !== null;
  }

  // Создаем кнопку избранного для страницы товара
  createProductPageButton() {
    const blockContent = document.querySelector('.block-17 .block-content');
    if (!blockContent) return;

    // Проверяем, есть ли уже кнопка
    if (!blockContent.querySelector('.product-favorite-btn')) {
      const productId = this.getProductPageId();
      const favoriteBtn = document.createElement('button');
      favoriteBtn.className = 'product-favorite-btn';
      favoriteBtn.setAttribute('data-favorite-btn', '');
      favoriteBtn.setAttribute('data-product-id', productId);
      favoriteBtn.innerHTML = `
        <svg class="favorite-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
        <span class="favorite-text">Добавить в избранное</span>
      `;

      // Вставляем кнопку после цены
      const priceElement = blockContent.querySelector('.product-price');
      if (priceElement) {
        priceElement.parentNode.insertBefore(favoriteBtn, priceElement.nextSibling);
      } else {
        // Если цены нет, вставляем перед кнопкой заказа
        const orderBtn = blockContent.querySelector('.product-order');
        if (orderBtn) {
          blockContent.insertBefore(favoriteBtn, orderBtn);
        } else {
          blockContent.appendChild(favoriteBtn);
        }
      }

      this.updateProductPageButton();
    }
  }

  // Обновляем состояние кнопки на странице товара
  updateProductPageButton() {
    if (!this.isProductPage()) return;

    const productId = this.getProductPageId();
    const favoriteBtn = document.querySelector('.product-favorite-btn');

    if (favoriteBtn) {
      const isFavorite = this.isInFavorites(productId);

      if (isFavorite) {
        favoriteBtn.classList.add('favorite-active');
        favoriteBtn.querySelector('.favorite-icon').classList.add('active');
        favoriteBtn.querySelector('.favorite-text').textContent = 'В избранном';
        favoriteBtn.setAttribute('title', 'Удалить из избранного');
      } else {
        favoriteBtn.classList.remove('favorite-active');
        favoriteBtn.querySelector('.favorite-icon').classList.remove('active');
        favoriteBtn.querySelector('.favorite-text').textContent = 'Добавить в избранное';
        favoriteBtn.setAttribute('title', 'Добавить в избранное');
      }
    }
  }

  // Получаем ID товара на странице товара
  getProductPageId() {
    // Пытаемся получить ID из URL или других элементов
    const urlParams = new URLSearchParams(window.location.search);
    const productIdFromUrl = urlParams.get('product_id') || urlParams.get('id');

    if (productIdFromUrl) {
      return productIdFromUrl;
    }

    // Из артикула
    const articulateElement = document.querySelector('.block-17');
    if (articulateElement) {
      const articulateText = articulateElement.getAttribute('data-product-id');
      const match = articulateText.match(/[A-Za-z0-9]+$/);
      if (match) {
        return `product-${match[0]}`;
      }
    }

    // Из заголовка (создаем ID на основе текста)
    const titleElement = document.querySelector('.block-content h1, .block-content h2');
    if (titleElement) {
      return `product-${this.stringToSlug(titleElement.textContent)}`;
    }

    // Fallback - используем текущий URL
    return `product-${this.stringToSlug(window.location.pathname)}`;
  }

  // Вспомогательная функция для создания slug
  stringToSlug(str) {
    return str
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  }

  // Собираем данные товара со страницы товара
  getProductPageData() {
    return {
      title: document.querySelector('.block-content h1, .block-content h2')?.textContent?.trim() || '',
      description: document.querySelector('.product-excerpt')?.textContent?.trim() || '',
      thumbnail: document.querySelector('.block-thumbnail__main')?.src || '',
      price: document.querySelector('.price-new')?.textContent?.trim() || '',
      oldPrice: document.querySelector('.price-old')?.textContent?.trim() || '',
      link: window.location.href,
      articulate: document.querySelector('.product-articulate')?.textContent?.trim() || ''
    };
  }

  // Добавляем товар в избранное
  addToFavorites(productId, productData = null) {
    if (!this.isInFavorites(productId)) {
      // Если данные не переданы, пытаемся собрать их со страницы
      const finalProductData = productData || this.getProductPageData();

      const favoriteItem = {
        id: productId,
        addedAt: new Date().toISOString(),
        ...finalProductData
      };

      this.favorites.push(favoriteItem);
      this.saveFavorites();
      this.updateButtonState(productId, true);
      this.updateProductPageButton(); // Обновляем кнопку на странице товара

      // Показываем уведомление
      this.showNotification('Товар добавлен в избранное');
    }
  }

  // Удаляем товар из избранного
  removeFromFavorites(productId) {
    this.favorites = this.favorites.filter(item => item.id !== productId);
    this.saveFavorites();
    this.updateButtonState(productId, false);
    this.updateProductPageButton(); // Обновляем кнопку на странице товара

    // Если мы на странице избранного, удаляем карточку
    if (window.location.pathname.includes('/favorite')) {
      this.removeProductCard(productId);
    }

    this.showNotification('Товар удален из избранного');
  }

  // Проверяем, есть ли товар в избранном
  isInFavorites(productId) {
    return this.favorites.some(item => item.id === productId);
  }

  // Переключаем состояние избранного
  toggleFavorite(productId, productData = null) {
    if (this.isInFavorites(productId)) {
      this.removeFromFavorites(productId);
    } else {
      this.addToFavorites(productId, productData);
    }
  }

  // Получаем все избранные товары
  getAllFavorites() {
    return this.favorites;
  }

  // Обновляем состояние всех кнопок на странице
  updateAllButtons() {
    document.querySelectorAll('[data-favorite-btn]').forEach(btn => {
      const productId = btn.getAttribute('data-product-id');
      if (productId) {
        this.updateButtonState(productId, this.isInFavorites(productId));
      }
    });

    // Обновляем кнопку на странице товара
    this.updateProductPageButton();
  }

  // Обновляем состояние конкретной кнопки
  updateButtonState(productId, isFavorite) {
    const buttons = document.querySelectorAll(`[data-product-id="${productId}"]`);

    buttons.forEach(btn => {
      if (isFavorite) {
        btn.classList.add('favorite-active');
        btn.querySelector('.favorite-icon')?.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
        btn.setAttribute('title', 'Удалить из избранного');

        // Обновляем текст если есть
        const textElement = btn.querySelector('.favorite-text');
        if (textElement) {
          textElement.textContent = 'В избранном';
        }
      } else {
        btn.classList.remove('favorite-active');
        btn.querySelector('.favorite-icon')?.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
        btn.setAttribute('title', 'Добавить в избранное');

        // Обновляем текст если есть
        const textElement = btn.querySelector('.favorite-text');
        if (textElement) {
          textElement.textContent = 'Добавить в избранное';
        }
      }
    });
  }

  // Удаляем карточку товара со страницы избранного
  removeProductCard(productId) {
    const productCard = document.querySelector(`[data-product-id="${productId}"]`)?.closest('.product');
    if (productCard) {
      productCard.style.opacity = '0';
      productCard.style.transform = 'translateX(100px)';

      setTimeout(() => {
        productCard.remove();

        // Если товаров не осталось, показываем сообщение
        if (!document.querySelector('.product')) {
          this.showEmptyState();
        }
      }, 300);
    }
  }

  // Показываем состояние пустого избранного
  showEmptyState() {
    const container = document.querySelector('.favorites-container') || document.querySelector('.products-grid');
    if (container && !container.querySelector('.empty-favorites')) {
      container.innerHTML = `
        <div class="empty-favorites">
          <div class="empty-favorites__icon">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5765ae">
							<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
						</svg>
          </div>
          <h3>В избранном пока ничего нет</h3>
          <p>Добавляйте товары, которые понравились, чтобы не потерять</p>
          <a href="/" class="btn btn-primary">Перейти на главную</a>
        </div>
      `;
    }
  }

  // Показываем уведомление
  showNotification(message) {
    // Удаляем предыдущее уведомление
    const existingNotification = document.querySelector('.favorite-notification');
    if (existingNotification) {
      existingNotification.remove();
    }

    // Создаем новое уведомление
    const notification = document.createElement('div');
    notification.className = 'favorite-notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    // Показываем
    setTimeout(() => notification.classList.add('show'), 100);

    // Скрываем через 3 секунды
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }

  // Привязываем события
  bindEvents() {
    // Обработчик кликов на кнопки избранного
    document.addEventListener('click', (e) => {
      const favoriteBtn = e.target.closest('[data-favorite-btn]');
      if (favoriteBtn) {
        e.preventDefault();
        const productId = favoriteBtn.getAttribute('data-product-id');

        // Собираем данные о товаре
        let productData = null;

        if (this.isProductPage()) {
          // На странице товара - собираем данные со страницы
          productData = this.getProductPageData();
        } else {
          // В каталоге - собираем данные из карточки
          const productCard = favoriteBtn.closest('.product');
          productData = {
            title: productCard?.querySelector('.product-title')?.textContent || '',
            description: productCard?.querySelector('.product-descr')?.textContent || '',
            thumbnail: productCard?.querySelector('.product-thumbnail')?.src || '',
            price: productCard?.querySelector('.price-new')?.textContent || '',
            oldPrice: productCard?.querySelector('.price-old')?.textContent || '',
            link: productCard?.querySelector('.product-link')?.href || '',
            label: productCard?.querySelector('.product-label')?.textContent || ''
          };
        }

        this.toggleFavorite(productId, productData);
      }
    });

    // Инициализация страницы избранного
    if (window.location.pathname.includes('/favorite')) {
      this.renderFavoritesPage();
    }
  }

  // Рендерим страницу избранного
  renderFavoritesPage() {
    const container = document.querySelector('.favorites-container') || document.querySelector('.products-grid');
    if (!container) return;

    const favorites = this.getAllFavorites();

    if (favorites.length === 0) {
      this.showEmptyState();
      return;
    }

    container.innerHTML = favorites.map(product => `
      <div class="product" data-product-id="${product.id}">
        ${product.label ? `<div class="product-label">${product.label}</div>` : ''}
        <button class="favorite-remove-btn" data-favorite-btn data-product-id="${product.id}" title="Удалить из избранного">
          <svg class="favorite-icon active" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </button>
        <a href="${product.link || '#'}">
          <img src="${product.thumbnail}" alt="${product.title}" class="product-thumbnail" />
        </a>
        <a href="${product.link || '#'}" class="product-title line-clamp line-clamp-2">${product.title}</a>
        <div class="product-descr line-clamp line-clamp-3">${product.description || ''}</div>
        <div class="product-price df-fs-ce w-100p">
          <span class="price-new">${product.price}</span>
          ${product.oldPrice ? `<span class="price-old">${product.oldPrice}</span>` : ''}
        </div>
        <a href="${product.link || '#'}" class="product-link">О товаре</a>
      </div>
    `).join('');
  }
}

// Инициализация
document.addEventListener('DOMContentLoaded', function () {
  window.favoritesManager = new FavoritesManager();
});

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

/* imageGallery.js */
class ImageGallery {
  constructor(containerSelector) {
    this.container = document.querySelector(containerSelector);
    if (!this.container) return;

    this.mainImage = this.container.querySelector('.block-thumbnail__main');
    this.thumbnailsWrapper = this.container.querySelector('.block-thumbnail__wrapper');
    this.thumbnails = this.container.querySelectorAll('.block-thumbnail__wrapper img');

    this.images = [];
    this.currentIndex = 0;
    this.isPopupOpen = false;

    this.init();
  }

  init() {
    // Собираем все изображения
    this.thumbnails.forEach((thumb, index) => {
      this.images.push({
        src: thumb.src,
        alt: thumb.alt
      });

      // Добавляем обработчик клика на миниатюры
      thumb.addEventListener('click', () => {
        this.changeMainImage(index);
      });
    });

    // Добавляем обработчик для открытия попапа по клику на основное изображение
    this.mainImage.addEventListener('click', () => {
      this.openPopup(this.currentIndex); // Передаем текущий индекс
    });

    // Создаем попап
    this.createPopup();

    // Устанавливаем активную миниатюру по умолчанию
    this.updateActiveThumbnail();
  }

  changeMainImage(index) {
    this.currentIndex = index;
    this.mainImage.src = this.images[index].src;
    this.mainImage.alt = this.images[index].alt;

    // Обновляем активную миниатюру
    this.updateActiveThumbnail();
  }

  updateActiveThumbnail() {
    this.thumbnails.forEach((thumb, index) => {
      if (index === this.currentIndex) {
        thumb.style.border = '2px solid #007cba';
        thumb.style.opacity = '1';
      } else {
        thumb.style.border = '1px solid var(--accent-color)';
        thumb.style.opacity = '0.7';
      }
    });
  }

  createPopup() {
    // Создаем элемент попапа
    this.popup = document.createElement('div');
    this.popup.className = 'gallery-popup';
    this.popup.innerHTML = `
            <div class="gallery-popup__overlay"></div>
            <div class="gallery-popup__content">
                <button class="gallery-popup__close">&times;</button>
                <button class="gallery-popup__nav gallery-popup__prev">‹</button>
                <div class="gallery-popup__image-container">
                    <img src="" alt="" class="gallery-popup__image" />
                </div>
                <button class="gallery-popup__nav gallery-popup__next">›</button>
                <div class="gallery-popup__counter"></div>
                <div class="gallery-popup__thumbnails"></div>
            </div>
        `;

    document.body.appendChild(this.popup);

    // Получаем элементы попапа
    this.popupImage = this.popup.querySelector('.gallery-popup__image');
    this.popupCounter = this.popup.querySelector('.gallery-popup__counter');
    this.popupThumbnails = this.popup.querySelector('.gallery-popup__thumbnails');
    this.closeBtn = this.popup.querySelector('.gallery-popup__close');
    this.prevBtn = this.popup.querySelector('.gallery-popup__prev');
    this.nextBtn = this.popup.querySelector('.gallery-popup__next');
    this.overlay = this.popup.querySelector('.gallery-popup__overlay');

    // Создаем миниатюры для попапа
    this.createPopupThumbnails();

    // Добавляем обработчики событий
    this.bindPopupEvents();
  }

  createPopupThumbnails() {
    this.images.forEach((image, index) => {
      const thumb = document.createElement('img');
      thumb.src = image.src;
      thumb.alt = image.alt;
      thumb.className = 'gallery-popup__thumb';

      thumb.addEventListener('click', () => {
        this.currentIndex = index;
        this.updatePopupImage();
        this.updatePopupThumbnails();
      });

      this.popupThumbnails.appendChild(thumb);
    });
  }

  bindPopupEvents() {
    // Закрытие попапа
    this.closeBtn.addEventListener('click', () => this.closePopup());
    this.overlay.addEventListener('click', () => this.closePopup());

    // Навигация
    this.prevBtn.addEventListener('click', () => this.navigate(-1));
    this.nextBtn.addEventListener('click', () => this.navigate(1));

    // Клавиатура
    document.addEventListener('keydown', (e) => this.handleKeyboard(e));

    // Запрещаем закрытие при клике на контент
    this.popup.querySelector('.gallery-popup__content').addEventListener('click', (e) => {
      e.stopPropagation();
    });
  }

  openPopup(startIndex = null) {
    // Если индекс не передан, используем текущий выбранный
    this.currentIndex = startIndex !== null ? startIndex : this.currentIndex;
    this.isPopupOpen = true;

    this.updatePopupImage();
    this.updatePopupThumbnails();
    this.popup.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  closePopup() {
    this.isPopupOpen = false;
    this.popup.classList.remove('active');
    document.body.style.overflow = '';

    // Небольшая задержка перед обновлением основного изображения
    setTimeout(() => {
      this.updateMainImageFromPopup();
    }, 300);
  }

  updateMainImageFromPopup() {
    // Обновляем основное изображение после закрытия попапа
    this.mainImage.src = this.images[this.currentIndex].src;
    this.mainImage.alt = this.images[this.currentIndex].alt;
    this.updateActiveThumbnail();
  }

  navigate(direction) {
    this.currentIndex += direction;

    // Зацикливание
    if (this.currentIndex < 0) {
      this.currentIndex = this.images.length - 1;
    } else if (this.currentIndex >= this.images.length) {
      this.currentIndex = 0;
    }

    this.updatePopupImage();
    this.updatePopupThumbnails();
  }

  updatePopupImage() {
    this.popupImage.src = this.images[this.currentIndex].src;
    this.popupImage.alt = this.images[this.currentIndex].alt;
    this.popupCounter.textContent = `${this.currentIndex + 1} / ${this.images.length}`;
  }

  updatePopupThumbnails() {
    const thumbs = this.popupThumbnails.querySelectorAll('.gallery-popup__thumb');
    thumbs.forEach((thumb, index) => {
      if (index === this.currentIndex) {
        thumb.classList.add('active');
      } else {
        thumb.classList.remove('active');
      }
    });
  }

  handleKeyboard(e) {
    if (!this.isPopupOpen) return;

    switch (e.key) {
      case 'Escape':
        this.closePopup();
        break;
      case 'ArrowLeft':
        this.navigate(-1);
        break;
      case 'ArrowRight':
        this.navigate(1);
        break;
    }
  }

  // Метод для обновления галереи (если контент динамический)
  updateGallery() {
    this.thumbnails = this.container.querySelectorAll('.block-thumbnail__wrapper img');
    this.images = [];
    this.thumbnails.forEach(thumb => {
      this.images.push({
        src: thumb.src,
        alt: thumb.alt
      });
    });

    // Обновляем миниатюры в попапе
    if (this.popupThumbnails) {
      this.popupThumbnails.innerHTML = '';
      this.createPopupThumbnails();
    }
  }

  // Метод для уничтожения галереи (cleanup)
  destroy() {
    if (this.popup && this.popup.parentNode) {
      this.popup.parentNode.removeChild(this.popup);
    }

    document.removeEventListener('keydown', this.handleKeyboard);
  }
}
