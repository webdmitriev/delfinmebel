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
  }

  // Инициализация
  init() {
    this.bindEvents();
    this.updateBasketCounter();

    // Если мы на странице корзины, рендерим товары
    if (this.isBasketPage()) {
      this.renderBasketPage();
    }
  }

  // Проверяем, находимся ли на странице корзины
  isBasketPage() {
    return window.location.pathname.includes('/basket') ||
      document.querySelector('.block-23') !== null;
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
                <a href="/catalog" class="btn btn-primary">Перейти в каталог</a>
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
                <a href="/" class="btn btn-secondary">На главную</a>
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

        this.addToBasket(productId, productData);
      }
    });

    // Инициализация страницы корзины
    if (this.isBasketPage()) {
      this.renderBasketPage();
    }
  }
}

// Инициализация
document.addEventListener('DOMContentLoaded', function () {
  window.basketManager = new BasketManager();
});