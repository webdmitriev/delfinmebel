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