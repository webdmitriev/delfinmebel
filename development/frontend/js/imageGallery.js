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