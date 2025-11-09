/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./admin/assets/img/blocks/mgu-advantages.png":
/*!****************************************************!*\
  !*** ./admin/assets/img/blocks/mgu-advantages.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/mgu-advantages.29f6558e.png";

/***/ }),

/***/ "./admin/assets/img/blocks/mgu-main.png":
/*!**********************************************!*\
  !*** ./admin/assets/img/blocks/mgu-main.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/mgu-main.67f84f9d.png";

/***/ }),

/***/ "./development/gutenberg/blocks/mgu-advantages/attributes.js":
/*!*******************************************************************!*\
  !*** ./development/gutenberg/blocks/mgu-advantages/attributes.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const attributes = {
  title: {
    type: 'string',
    default: ''
  },
  underlineColor: {
    type: 'string',
    default: ''
  },
  bgc: {
    type: 'string',
    default: ''
  },
  items: {
    type: 'array',
    default: [{
      imageURL: '',
      imageID: 0,
      content: ''
    }]
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);

/***/ }),

/***/ "./development/gutenberg/blocks/mgu-advantages/controls/ColorPanel.js":
/*!****************************************************************************!*\
  !*** ./development/gutenberg/blocks/mgu-advantages/controls/ColorPanel.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_default_colors_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/default-colors.js */ "./development/gutenberg/utils/default-colors.js");






const ColorPanel = ({
  attributes,
  setAttributes
}) => {
  const {
    underlineColor,
    bgc
  } = attributes;
  const [activePicker, setActivePicker] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(null);
  const ColorControl = ({
    label,
    colorValue,
    colorKey,
    defaultLabel
  }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      fontSize: '13px',
      fontWeight: '500',
      marginBottom: '5px'
    }
  }, label), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Flex, {
    align: "center",
    gap: "8px"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "secondary",
    onClick: () => setActivePicker(activePicker === colorKey ? null : colorKey),
    style: {
      width: '100%',
      height: '26px',
      backgroundColor: colorValue || '#ffffff',
      border: '1px solid #ccc',
      borderRadius: '3px',
      position: 'relative',
      backgroundImage: !colorValue ? 'linear-gradient(45deg, #f0f0f0 25%, transparent 25%), linear-gradient(-45deg, #f0f0f0 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #f0f0f0 75%), linear-gradient(-45deg, transparent 75%, #f0f0f0 75%)' : 'none',
      backgroundSize: '6px 6px',
      backgroundPosition: '0 0, 0 3px, 3px -3px, -3px 0px'
    },
    title: colorValue || defaultLabel
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Flex, {
    gap: "3px",
    wrap: true
  }, _utils_default_colors_js__WEBPACK_IMPORTED_MODULE_5__["default"].slice(0, 8).map((color, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    key: index,
    onClick: () => setAttributes({
      [colorKey]: color
    }),
    style: {
      width: '18px',
      height: '18px',
      backgroundColor: color,
      border: colorValue === color ? '2px solid #007cba' : '1px solid #ddd',
      borderRadius: '2px',
      minWidth: '18px',
      padding: 0
    }
  }))), colorValue && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "tertiary",
    onClick: () => setAttributes({
      [colorKey]: ''
    }),
    style: {
      width: '18px',
      height: '18px',
      minWidth: '18px',
      padding: 0,
      fontSize: '10px'
    },
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Сбросить', 'theme')
  }, "\xD7")), activePicker === colorKey && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Popover, {
    position: "bottom left",
    onClose: () => setActivePicker(null)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      padding: '10px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPicker, {
    color: colorValue,
    onChange: value => setAttributes({
      [colorKey]: value
    })
  }))));
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Цвета', 'theme'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Flex, {
    direction: "column",
    gap: "12px"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Подчеркивание заголовка', 'theme'),
    colorSettings: [{
      value: underlineColor,
      onChange: color => setAttributes({
        underlineColor: color
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Background Color', 'theme'),
      colors: _utils_default_colors_js__WEBPACK_IMPORTED_MODULE_5__["default"]
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Фон', 'theme'),
    colorSettings: [{
      value: bgc,
      onChange: color => setAttributes({
        bgc: color
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Background Color', 'theme'),
      colors: _utils_default_colors_js__WEBPACK_IMPORTED_MODULE_5__["default"]
    }]
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ColorPanel);

/***/ }),

/***/ "./development/gutenberg/blocks/mgu-advantages/controls/ContentPanel.js":
/*!******************************************************************************!*\
  !*** ./development/gutenberg/blocks/mgu-advantages/controls/ContentPanel.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_useTypograf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/useTypograf */ "./development/gutenberg/utils/useTypograf.js");




const ContentPanel = ({
  attributes,
  setAttributes
}) => {
  const {
    title,
    items
  } = attributes;

  // Подключаем общий хук с указанием полей для типографирования
  const {
    typographField,
    typographAllFields
  } = (0,_utils_useTypograf__WEBPACK_IMPORTED_MODULE_3__.useTypograf)(attributes, setAttributes, ['title', 'items[].content' // Указываем, что нужно типографировать поле content в каждом item
  ]);

  // Проверяем наличие текста для типографирования
  const hasTextToTypograph = title || items.some(item => item.content && item.content.trim() !== '');
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Типограф', 'theme'),
    initialOpen: false
  }, hasTextToTypograph && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      marginBottom: '20px',
      padding: '10px',
      background: '#f6f7f7',
      borderRadius: '4px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Flex, {
    direction: "column",
    gap: "10px"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "primary",
    onClick: typographAllFields,
    style: {
      display: 'block',
      width: '100%',
      textAlign: 'center'
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Типографировать все поля', 'theme')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      fontSize: '12px',
      color: '#757575',
      textAlign: 'center'
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Расставит кавычки, тире и неразрывные пробелы', 'theme')))), !hasTextToTypograph && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      padding: '10px',
      textAlign: 'center',
      color: '#757575'
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Нет текста для типографирования', 'theme')));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentPanel);

/***/ }),

/***/ "./development/gutenberg/blocks/mgu-advantages/controls/VideoHelpPanel.js":
/*!********************************************************************************!*\
  !*** ./development/gutenberg/blocks/mgu-advantages/controls/VideoHelpPanel.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);




const VideoHelpPanel = () => {
  const [isVideoOpen, setIsVideoOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const videoPath = `${themeData.uploadUrl}/main.mov`;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Инструкции', 'theme'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "primary",
    onClick: () => setIsVideoOpen(true),
    icon: "video-alt3"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Смотреть видео', 'theme'))), isVideoOpen && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Modal, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Видео инструкция к блоку', 'theme'),
    onRequestClose: () => setIsVideoOpen(false),
    className: "help-video-modal"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      position: 'relative',
      paddingBottom: '56.25%',
      height: 0
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("video", {
    src: videoPath,
    controls: true,
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '8px'
    }
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VideoHelpPanel);

/***/ }),

/***/ "./development/gutenberg/blocks/mgu-advantages/edit.js":
/*!*************************************************************!*\
  !*** ./development/gutenberg/blocks/mgu-advantages/edit.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _admin_assets_img_blocks_mgu_advantages_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../admin/assets/img/blocks/mgu-advantages.png */ "./admin/assets/img/blocks/mgu-advantages.png");
/* harmony import */ var _utils_useAutoLinking__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/useAutoLinking */ "./development/gutenberg/utils/useAutoLinking.js");
/* harmony import */ var _utils_AutoLinkingPanel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/AutoLinkingPanel */ "./development/gutenberg/utils/AutoLinkingPanel.js");
/* harmony import */ var _controls_VideoHelpPanel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./controls/VideoHelpPanel */ "./development/gutenberg/blocks/mgu-advantages/controls/VideoHelpPanel.js");
/* harmony import */ var _controls_ContentPanel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./controls/ContentPanel */ "./development/gutenberg/blocks/mgu-advantages/controls/ContentPanel.js");
/* harmony import */ var _controls_ColorPanel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./controls/ColorPanel */ "./development/gutenberg/blocks/mgu-advantages/controls/ColorPanel.js");











const Edit = ({
  attributes,
  setAttributes
}) => {
  const {
    title,
    underlineColor,
    bgc,
    items
  } = attributes;
  const [viewMode, setViewMode] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)('preview'); // 'preview' | 'edit' | 'production'

  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    style: {
      backgroundColor: bgc
    },
    className: 'development mgu-advantages'
  });

  // Используем хук авто-линкинга
  const {
    autoLinkContent,
    postsCount
  } = (0,_utils_useAutoLinking__WEBPACK_IMPORTED_MODULE_6__.useAutoLinking)();

  // Обработчик авто-линкинга
  const handleAutoLink = () => {
    autoLinkContent(attributes, setAttributes, ['title']);
  };

  // Добавить новый элемент
  const addItem = () => {
    const newItems = [...items, {
      imageURL: '',
      imageID: 0,
      content: ''
    }];
    setAttributes({
      items: newItems
    });
  };

  // Удалить элемент
  const removeItem = index => {
    const newItems = items.filter((_, i) => i !== index);
    setAttributes({
      items: newItems
    });
  };

  // Обновить элемент
  const updateItem = (index, key, value) => {
    const newItems = items.map((item, i) => i === index ? {
      ...item,
      [key]: value
    } : item);
    setAttributes({
      items: newItems
    });
  };

  // Переместить элемент вверх
  const moveItemUp = index => {
    if (index === 0) return;
    const newItems = [...items];
    [newItems[index - 1], newItems[index]] = [newItems[index], newItems[index - 1]];
    setAttributes({
      items: newItems
    });
  };

  // Переместить элемент вниз
  const moveItemDown = index => {
    if (index === items.length - 1) return;
    const newItems = [...items];
    [newItems[index], newItems[index + 1]] = [newItems[index + 1], newItems[index]];
    setAttributes({
      items: newItems
    });
  };

  // Обработчик выбора изображения
  const onSelectImage = (media, index) => {
    const newItems = items.map((item, i) => i === index ? {
      ...item,
      imageURL: media.url,
      imageID: media.id
    } : item);
    setAttributes({
      items: newItems
    });
  };

  // Обработчик удаления изображения
  const onRemoveImage = index => {
    const newItems = items.map((item, i) => i === index ? {
      ...item,
      imageURL: '',
      imageID: 0
    } : item);
    setAttributes({
      items: newItems
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_VideoHelpPanel__WEBPACK_IMPORTED_MODULE_8__["default"], null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_ContentPanel__WEBPACK_IMPORTED_MODULE_9__["default"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_AutoLinkingPanel__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onAutoLink: handleAutoLink,
    postsCount: postsCount,
    disabled: postsCount === 0
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_ColorPanel__WEBPACK_IMPORTED_MODULE_10__["default"], {
    attributes: attributes,
    setAttributes: setAttributes
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "advanced-block"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "block-info",
    style: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "block-info-title"
  }, "\uD83C\uDFA8 \u041F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430 \u0431\u043B\u043E\u043A"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RadioControl, {
    selected: viewMode,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Pveview ✍️', 'theme'),
      value: 'preview'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Редактирование ☺️', 'theme'),
      value: 'edit'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Результат 🖼️', 'theme'),
      value: 'production'
    }],
    onChange: value => setViewMode(value)
  })), viewMode === 'preview' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: _admin_assets_img_blocks_mgu_advantages_png__WEBPACK_IMPORTED_MODULE_5__,
    className: "preview-image",
    alt: "",
    style: {
      borderRadius: '8px'
    }
  }), viewMode === 'edit' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "advanced-block-content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "rich-text"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Заголовок', 'theme')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "h1",
    value: title,
    onChange: value => setAttributes({
      title: value
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Заголовок...', 'theme'),
    allowedFormats: ['core/bold']
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "repeater-items"
  }, items.map((item, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: index,
    className: "repeater-item"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "repeater-item-controls"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    isSmall: true,
    onClick: () => moveItemUp(index),
    disabled: index === 0,
    className: "controls-arrow"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('⬅️', 'theme')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    isSmall: true,
    onClick: () => moveItemDown(index),
    disabled: index === items.length - 1,
    className: "controls-arrow"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('➡️', 'theme')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    isSmall: true,
    isDestructive: true,
    onClick: () => removeItem(index)
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Удалить блок', 'theme'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: media => onSelectImage(media, index),
    allowedTypes: ['image'],
    value: item.imageID,
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "repeater-image"
    }, item.imageURL ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: item.imageURL,
      alt: "",
      style: {
        maxWidth: '64px',
        height: '64px',
        objectFit: 'contain'
      }
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: open,
      className: "edit-icon"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('✍️', 'theme')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      isDestructive: true,
      isSmall: true,
      onClick: () => onRemoveImage(index),
      className: "delete-icon"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('❌', 'theme'))) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: open,
      className: "add-icon"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Добавить иконку', 'theme')))
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "div",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Введите текст...', 'theme'),
    value: item.content,
    onChange: value => updateItem(index, 'content', value),
    className: "repeater-content"
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    isPrimary: true,
    onClick: addItem,
    className: "add-repeater-item"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('+ Добавить элемент', 'theme'))), viewMode === 'production' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "block-title"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "h2",
    style: {
      backgroundImage: `linear-gradient(180deg, ${underlineColor}, ${underlineColor})`
    }
  }, title)), items.map((item, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: index,
    className: "advantages-item"
  }, item.imageURL && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "advantages-item__icon",
    src: item.imageURL,
    alt: "alto"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "div",
    value: item.content,
    className: "advantages-item__content"
  })))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./development/gutenberg/blocks/mgu-advantages/index.js":
/*!**************************************************************!*\
  !*** ./development/gutenberg/blocks/mgu-advantages/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./development/gutenberg/blocks/mgu-advantages/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./development/gutenberg/blocks/mgu-advantages/save.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./attributes */ "./development/gutenberg/blocks/mgu-advantages/attributes.js");





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('theme/mgu-advantages', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Преимущества', 'theme'),
  category: 'landing',
  icon: 'admin-customizer',
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Блок с повторяющимися элементами', 'theme'),
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_4__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"],
  example: {
    attributes: {
      title: 'Преимущества',
      subTitleOne: 'Преимущества'
    }
  }
});
console.log('✅ Advantages block');

/***/ }),

/***/ "./development/gutenberg/blocks/mgu-advantages/save.js":
/*!*************************************************************!*\
  !*** ./development/gutenberg/blocks/mgu-advantages/save.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


const Save = ({
  attributes
}) => {
  const {
    title,
    bgc,
    underlineColor,
    items
  } = attributes;
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    style: {
      backgroundColor: bgc
    },
    className: `mgu-advantages`
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "block-title"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "h2",
    value: title,
    className: "h2",
    style: {
      backgroundImage: `linear-gradient(180deg, ${underlineColor}, ${underlineColor})`
    }
  })), items.map((item, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: index,
    className: "advantages-item"
  }, item.imageURL && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "advantages-item__icon",
    src: item.imageURL,
    alt: "alto"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "div",
    value: item.content,
    className: "advantages-item__content"
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./development/gutenberg/blocks/mgu-main/attributes.js":
/*!*************************************************************!*\
  !*** ./development/gutenberg/blocks/mgu-main/attributes.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const attributes = {
  title: {
    type: 'string',
    default: ''
  },
  subTitleOne: {
    type: 'string',
    default: ''
  },
  subTitleTwo: {
    type: 'string',
    default: ''
  },
  descr: {
    type: 'string',
    default: ''
  },
  divider: {
    type: 'boolean',
    default: false
  },
  // cf7: { type: 'string', default: '' },
  cf7FormId: {
    type: "string",
    default: ""
  },
  cf7Shortcode: {
    type: "string",
    default: ""
  },
  imageId: {
    type: 'number',
    default: 0
  },
  imageUrl: {
    type: 'string',
    default: ''
  },
  imageWebp: {
    type: 'string',
    default: ''
  },
  imageAlt: {
    type: 'string',
    default: ''
  },
  responsive: {
    type: "object",
    default: {
      webp: "",
      jpg: "",
      default: "",
      alt: ""
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);

/***/ }),

/***/ "./development/gutenberg/blocks/mgu-main/controls/ContentPanel.js":
/*!************************************************************************!*\
  !*** ./development/gutenberg/blocks/mgu-main/controls/ContentPanel.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_useTypograf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/useTypograf */ "./development/gutenberg/utils/useTypograf.js");




const ContentPanel = ({
  attributes,
  setAttributes
}) => {
  const {
    title,
    subTitleOne,
    subTitleTwo,
    descr
  } = attributes;

  // Подключаем общий хук
  const {
    typographField,
    typographAllFields
  } = (0,_utils_useTypograf__WEBPACK_IMPORTED_MODULE_3__.useTypograf)(attributes, setAttributes, ['title', 'subTitleOne', 'subTitleTwo', 'descr']);
  const hasTextToTypograph = title || subTitleOne || subTitleTwo || descr;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Типограф', 'theme'),
    initialOpen: false
  }, hasTextToTypograph && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      marginBottom: '20px',
      padding: '10px',
      background: '#f6f7f7',
      borderRadius: '4px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Flex, {
    direction: "column",
    gap: "10px"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "primary",
    onClick: typographAllFields,
    style: {
      display: 'block',
      width: '100%',
      textAlign: 'center'
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Типографировать все поля', 'theme')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      fontSize: '12px',
      color: '#757575',
      textAlign: 'center'
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Расставит кавычки, тире и неразрывные пробелы', 'theme')))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentPanel);

/***/ }),

/***/ "./development/gutenberg/blocks/mgu-main/controls/VideoHelpPanel.js":
/*!**************************************************************************!*\
  !*** ./development/gutenberg/blocks/mgu-main/controls/VideoHelpPanel.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);




const VideoHelpPanel = () => {
  const [isVideoOpen, setIsVideoOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const videoPath = `${themeData.uploadUrl}/main.mov`;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Инструкции', 'theme'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "primary",
    onClick: () => setIsVideoOpen(true),
    icon: "video-alt3"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Смотреть видео', 'theme'))), isVideoOpen && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Modal, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Видео инструкция к блоку', 'theme'),
    onRequestClose: () => setIsVideoOpen(false),
    className: "help-video-modal"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      position: 'relative',
      paddingBottom: '56.25%',
      height: 0
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("video", {
    src: videoPath,
    controls: true,
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '8px'
    }
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VideoHelpPanel);

/***/ }),

/***/ "./development/gutenberg/blocks/mgu-main/edit.js":
/*!*******************************************************!*\
  !*** ./development/gutenberg/blocks/mgu-main/edit.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_useOptimizedMedia__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/useOptimizedMedia */ "./development/gutenberg/utils/useOptimizedMedia.js");
/* harmony import */ var _components_CF7FormSelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/CF7FormSelector */ "./development/gutenberg/components/CF7FormSelector.js");
/* harmony import */ var _admin_assets_img_blocks_mgu_main_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../admin/assets/img/blocks/mgu-main.png */ "./admin/assets/img/blocks/mgu-main.png");
/* harmony import */ var _utils_useAutoLinking__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/useAutoLinking */ "./development/gutenberg/utils/useAutoLinking.js");
/* harmony import */ var _utils_AutoLinkingPanel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/AutoLinkingPanel */ "./development/gutenberg/utils/AutoLinkingPanel.js");
/* harmony import */ var _controls_VideoHelpPanel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./controls/VideoHelpPanel */ "./development/gutenberg/blocks/mgu-main/controls/VideoHelpPanel.js");
/* harmony import */ var _controls_ContentPanel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./controls/ContentPanel */ "./development/gutenberg/blocks/mgu-main/controls/ContentPanel.js");












const Edit = ({
  attributes,
  setAttributes
}) => {
  const {
    title,
    subTitleOne,
    subTitleTwo,
    divider,
    descr,
    imageUrl,
    imageWebp,
    imageId,
    cf7FormId,
    cf7Shortcode
  } = attributes;
  const [viewMode, setViewMode] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)('preview'); // 'preview' | 'edit' | 'production'

  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: 'development mgu-main'
  });

  // Используем хук авто-линкинга
  const {
    autoLinkContent,
    postsCount
  } = (0,_utils_useAutoLinking__WEBPACK_IMPORTED_MODULE_8__.useAutoLinking)();

  // Обработчик авто-линкинга
  const handleAutoLink = () => {
    autoLinkContent(attributes, setAttributes, ['subTitleOne', 'subTitleTwo', 'descr']);
  };

  // Handlers image
  const {
    onSelectImage
  } = (0,_utils_useOptimizedMedia__WEBPACK_IMPORTED_MODULE_5__.useOptimizedMedia)(setAttributes);
  const onRemoveImage = () => setAttributes({
    imageUrl: '',
    imageWebp: '',
    imageId: 0
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_VideoHelpPanel__WEBPACK_IMPORTED_MODULE_10__["default"], null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_ContentPanel__WEBPACK_IMPORTED_MODULE_11__["default"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_AutoLinkingPanel__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onAutoLink: handleAutoLink,
    postsCount: postsCount,
    disabled: postsCount === 0
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "advanced-block"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "block-info",
    style: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "block-info-title"
  }, "\uD83C\uDFA8 \u0413\u043B\u0430\u0432\u043D\u044B\u0439 \u0431\u043B\u043E\u043A"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RadioControl, {
    selected: viewMode,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Pveview ✍️', 'theme'),
      value: 'preview'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Редактирование ☺️', 'theme'),
      value: 'edit'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Результат 🖼️', 'theme'),
      value: 'production'
    }],
    onChange: value => setViewMode(value)
  })), viewMode === 'preview' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: _admin_assets_img_blocks_mgu_main_png__WEBPACK_IMPORTED_MODULE_7__,
    className: "preview-image",
    alt: "",
    style: {
      borderRadius: '8px'
    }
  }), viewMode === 'edit' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "advanced-block-content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "rich-text"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Заголовок', 'theme')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "h1",
    value: title,
    onChange: value => setAttributes({
      title: value
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Заголовок...', 'theme'),
    allowedFormats: ['core/bold']
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "rich-text"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Подзаголовок', 'theme')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "p",
    value: subTitleOne,
    onChange: value => setAttributes({
      subTitleOne: value
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Подзаголовок...', 'theme'),
    allowedFormats: ['core/bold', 'core/italic', 'core/link']
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: divider ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Убрать линию ❌', 'theme') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Добавить линию ✅', 'theme'),
    checked: divider,
    onChange: value => setAttributes({
      divider: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "rich-text"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Подзаголовок', 'theme')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "p",
    value: subTitleTwo,
    onChange: value => setAttributes({
      subTitleTwo: value
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Подзаголовок...', 'theme'),
    allowedFormats: ['core/bold', 'core/italic', 'core/link']
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      width: '100%',
      marginBottom: '16px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "advanced-block-images",
    style: {
      display: 'block',
      width: '100%',
      maxWidth: '32%'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: onSelectImage,
    allowedTypes: ['image'],
    value: imageId,
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "advanced-block-image"
    }, imageUrl ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: imageUrl,
      alt: "",
      style: {
        borderRadius: '8px'
      }
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        display: 'flex',
        gap: '6px',
        marginTop: '4px'
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: open,
      variant: "secondary",
      size: "small"
    }, "\u270F\uFE0F ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Заменить', 'theme')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: onRemoveImage,
      variant: "tertiary",
      size: "small",
      isDestructive: true
    }, "\uD83D\uDDD1 ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Удалить', 'theme')))) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: open,
      variant: "primary",
      style: {
        overflow: 'hidden'
      }
    }, "\uD83D\uDCF7 ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Фоновая картинка', 'theme')))
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "rich-text",
    style: {
      display: 'block',
      width: '100%',
      maxWidth: '66%'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Описание', 'theme')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "p",
    value: descr,
    onChange: value => setAttributes({
      descr: value
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Описание...', 'theme'),
    allowedFormats: ['core/bold', 'core/italic', 'core/link', 'core/underline', 'core/text-color']
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "rich-text"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_CF7FormSelector__WEBPACK_IMPORTED_MODULE_6__["default"], {
    attributes: attributes,
    setAttributes: setAttributes
  }))), viewMode === 'production' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "advanced-block-preview"
  }, imageUrl && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("picture", null, imageWebp && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
    srcSet: imageWebp,
    type: "image/webp"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: imageUrl,
    alt: "",
    className: "mgu-main__bg",
    style: {
      borderRadius: '8px'
    },
    loading: "lazy",
    decoding: "async"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "preview-content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "h1",
    value: title,
    className: "h1"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "p",
    value: subTitleOne,
    className: "sub_title"
  }), divider && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "divider"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "p",
    value: subTitleTwo,
    className: "sub_title"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "p",
    value: descr,
    className: "descr"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpcf7",
    dangerouslySetInnerHTML: {
      __html: cf7Shortcode
    }
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./development/gutenberg/blocks/mgu-main/index.js":
/*!********************************************************!*\
  !*** ./development/gutenberg/blocks/mgu-main/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./development/gutenberg/blocks/mgu-main/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./development/gutenberg/blocks/mgu-main/save.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attributes */ "./development/gutenberg/blocks/mgu-main/attributes.js");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('theme/main-block', {
  title: 'Main block',
  category: 'landing',
  icon: 'admin-customizer',
  description: ' ',
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_3__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"],
  example: {
    attributes: {
      title: 'Превью заголовка',
      subTitleOne: 'Превью подзаголовка'
    }
  }
});
console.log('✅ Main block');

/***/ }),

/***/ "./development/gutenberg/blocks/mgu-main/save.js":
/*!*******************************************************!*\
  !*** ./development/gutenberg/blocks/mgu-main/save.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);



const Save = ({
  attributes
}) => {
  const {
    title,
    subTitleOne,
    subTitleTwo,
    descr,
    divider,
    imageUrl,
    imageAlt,
    responsive,
    cf7Shortcode
  } = attributes;
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    className: `mgu-main`
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("main", {
    ...blockProps
  }, imageUrl && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("picture", null, responsive?.webp && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
    srcSet: responsive.webp,
    type: "image/webp"
  }), responsive?.jpg && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
    srcSet: responsive.jpg,
    type: "image/jpeg"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: responsive?.default || imageUrl,
    alt: responsive?.alt || imageAlt || title || 'MGU',
    className: "mgu-main__bg",
    loading: "lazy",
    decoding: "async"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container df-sp-ce"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mgu-main__content"
  }, title && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "h1",
    value: title,
    className: "h1"
  }), subTitleOne && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "p",
    value: subTitleOne,
    className: "sub_title"
  }), divider && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "divider"
  }), subTitleTwo && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "p",
    value: subTitleTwo,
    className: "sub_title"
  }), descr && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "p",
    className: "descr",
    value: descr
  })), cf7Shortcode && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.RawHTML, null, cf7Shortcode)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./development/gutenberg/components/CF7FormSelector.js":
/*!*************************************************************!*\
  !*** ./development/gutenberg/components/CF7FormSelector.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);




const CF7FormSelector = ({
  attributes,
  setAttributes
}) => {
  const {
    cf7FormId
  } = attributes;
  const {
    forms,
    isLoading
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    const formsData = select('core').getEntityRecords('postType', 'wpcf7_contact_form', {
      per_page: -1,
      status: 'publish'
    });
    return {
      forms: formsData,
      isLoading: !formsData
    };
  }, []);

  // Формируем опции
  const formOptions = forms ? forms.map(form => ({
    label: form.title.rendered,
    value: form.id
  })) : [];
  formOptions.unshift({
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('-- Выберите форму --', 'theme'),
    value: ''
  });
  if (isLoading) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        marginBottom: '8px'
      }
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Загрузка форм...', 'theme')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, null));
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Контактная форма CF7', 'theme'),
    value: cf7FormId,
    options: formOptions,
    onChange: formId => {
      const selectedForm = forms.find(form => form.id === parseInt(formId));
      const shortcode = selectedForm ? `[contact-form-7 id="${selectedForm.id}" title="${selectedForm.title.rendered}"]` : '';
      setAttributes({
        cf7FormId: formId,
        cf7Shortcode: shortcode
      });
    },
    help: cf7FormId ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Форма выбрана', 'theme') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Выберите форму из списка', 'theme')
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CF7FormSelector);

/***/ }),

/***/ "./development/gutenberg/extends/spacer-bg.js":
/*!****************************************************!*\
  !*** ./development/gutenberg/extends/spacer-bg.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_default_colors_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/default-colors.js */ "./development/gutenberg/utils/default-colors.js");







// === 1. Добавляем новое свойство в блок ===
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addFilter)('blocks.registerBlockType', 'theme/extend-spacer-bg', (settings, name) => {
  if (name !== 'core/spacer') {
    return settings;
  }

  // добавляем атрибут backgroundColor
  return {
    ...settings,
    attributes: {
      ...settings.attributes,
      backgroundColor: {
        type: 'string',
        default: ''
      }
    }
  };
});

// === 2. Добавляем панель выбора цвета ===
const withBackgroundColorControl = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.createHigherOrderComponent)(BlockEdit => {
  return props => {
    if (props.name !== 'core/spacer') return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, {
      ...props
    });
    const {
      attributes,
      setAttributes,
      className
    } = props;
    const {
      backgroundColor
    } = attributes;

    // новый стиль для визуализации цвета прямо в редакторе
    const blockStyle = backgroundColor ? {
      backgroundColor
    } : {};
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background Color', 'theme'),
      colorSettings: [{
        value: backgroundColor,
        onChange: color => setAttributes({
          backgroundColor: color
        }),
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background Color', 'theme'),
        colors: _utils_default_colors_js__WEBPACK_IMPORTED_MODULE_5__["default"]
      }]
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: className,
      style: blockStyle
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, {
      ...props
    })));
  };
}, 'withBackgroundColorControl');
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addFilter)('editor.BlockEdit', 'theme/with-background-color-control', withBackgroundColorControl);

// === 3. Добавляем inline-стиль при сохранении ===
const addBackgroundColorExtraProps = (saveElementProps, blockType, attributes) => {
  if (blockType.name === 'core/spacer' && attributes.backgroundColor) {
    saveElementProps.style = {
      ...saveElementProps.style,
      backgroundColor: attributes.backgroundColor
    };
  }
  return saveElementProps;
};
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addFilter)('blocks.getSaveContent.extraProps', 'theme/add-background-color-extra-props', addBackgroundColorExtraProps);

/***/ }),

/***/ "./development/gutenberg/formats/li-format.js":
/*!****************************************************!*\
  !*** ./development/gutenberg/formats/li-format.js ***!
  \****************************************************/
/***/ (() => {

const {
  registerFormatType,
  toggleFormat
} = wp.richText;
const {
  RichTextToolbarButton
} = wp.blockEditor;
const {
  createElement
} = wp.element;
registerFormatType('theme/li-format', {
  title: 'Custom List Item',
  tagName: 'span',
  className: 'custom-list',
  edit({
    isActive,
    value,
    onChange
  }) {
    return createElement(RichTextToolbarButton, {
      icon: 'editor-ul',
      // или свой svg
      title: 'Псевдо-элемент списка',
      onClick: () => {
        onChange(toggleFormat(value, {
          type: 'theme/li-format'
        }));
      },
      isActive
    });
  }
});

/***/ }),

/***/ "./development/gutenberg/seo-panel.js":
/*!********************************************!*\
  !*** ./development/gutenberg/seo-panel.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);







const SeoTab = () => {
  const meta = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => select('core/editor').getEditedPostAttribute('meta'), []);
  const {
    editPost
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)('core/editor');
  const updateMeta = (field, value) => {
    editPost({
      meta: {
        ...meta,
        [field]: value
      }
    });
  };
  const onSelectImage = field => image => {
    updateMeta(field, image.url);
  };
  const onRemoveImage = field => () => {
    updateMeta(field, '');
  };
  const ImageControl = ({
    label,
    value,
    help,
    field
  }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
    label: label,
    help: help
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      marginBottom: '8px'
    }
  }, value && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      marginBottom: '8px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: value,
    alt: "Preview",
    style: {
      maxWidth: '100%',
      height: 'auto',
      maxHeight: '150px',
      display: 'block'
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.MediaUpload, {
    onSelect: onSelectImage(field),
    allowedTypes: ['image'],
    value: value,
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      variant: "secondary",
      onClick: open,
      style: {
        marginRight: '8px'
      }
    }, value ? 'Заменить изображение' : 'Выбрать изображение'), value && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      variant: "tertiary",
      isDestructive: true,
      onClick: onRemoveImage(field)
    }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C"))
  }))));
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.PluginSidebarMoreMenuItem, {
    target: "seo-sidebar"
  }, "\u0421\u0415\u041E"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.PluginSidebar, {
    name: "seo-sidebar",
    title: "SEO \u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",
    icon: "admin-site"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextareaControl, {
    label: "SEO Description",
    value: meta._seo_description || '',
    onChange: value => updateMeta('_seo_description', value),
    help: "\u041A\u0440\u0430\u0442\u043A\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0434\u043B\u044F \u043F\u043E\u0438\u0441\u043A\u043E\u0432\u044B\u0445 \u0441\u0438\u0441\u0442\u0435\u043C"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "SEO Keywords",
    value: meta._seo_keywords || '',
    onChange: value => updateMeta('_seo_keywords', value),
    help: "\u041A\u043B\u044E\u0447\u0435\u0432\u044B\u0435 \u0441\u043B\u043E\u0432\u0430 \u0447\u0435\u0440\u0435\u0437 \u0437\u0430\u043F\u044F\u0442\u0443\u044E"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "OG Title",
    value: meta._og_title || '',
    onChange: value => updateMeta('_og_title', value),
    help: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0434\u043B\u044F Facebook \u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u0441\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0445 \u0441\u0435\u0442\u0435\u0439"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextareaControl, {
    label: "OG Description",
    value: meta._og_description || '',
    onChange: value => updateMeta('_og_description', value),
    help: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0434\u043B\u044F \u0441\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0445 \u0441\u0435\u0442\u0435\u0439"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ImageControl, {
    label: "OG Image",
    value: meta._og_image || '',
    help: "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u0441\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0445 \u0441\u0435\u0442\u0435\u0439",
    field: "_og_image"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Twitter Title",
    value: meta._twitter_title || '',
    onChange: value => updateMeta('_twitter_title', value),
    help: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0434\u043B\u044F Twitter"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextareaControl, {
    label: "Twitter Description",
    value: meta._twitter_description || '',
    onChange: value => updateMeta('_twitter_description', value),
    help: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0434\u043B\u044F Twitter"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ImageControl, {
    label: "Twitter Image",
    value: meta._twitter_image || '',
    help: "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0434\u043B\u044F Twitter",
    field: "_twitter_image"
  }))));
};
(0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__.registerPlugin)('seo-tab', {
  render: SeoTab,
  icon: 'admin-site'
});

/***/ }),

/***/ "./development/gutenberg/utils/AutoLinkingPanel.js":
/*!*********************************************************!*\
  !*** ./development/gutenberg/utils/AutoLinkingPanel.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);




/**
 * Компонент панели авто-линкинга для InspectorControls
 * @param {Object} props - Свойства компонента
 * @param {Function} props.onAutoLink - Функция вызываемая при клике
 * @param {number} props.postsCount - Количество доступных постов
 * @param {boolean} props.disabled - Отключена ли кнопка
 */
const AutoLinkingPanel = ({
  onAutoLink,
  postsCount,
  disabled = false
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Auto Linking', 'theme'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      width: '100%'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: {
      fontSize: '12px',
      marginBottom: '12px'
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Automatically link post titles found in content to their respective posts.', 'theme')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "secondary",
    onClick: onAutoLink,
    disabled: disabled,
    style: {
      width: '100%',
      justifyContent: 'center'
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('🔗 Auto Link Posts', 'theme')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: {
      fontSize: '11px',
      marginTop: '8px',
      color: '#757575'
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Available posts:', 'theme'), " ", postsCount))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AutoLinkingPanel);

/***/ }),

/***/ "./development/gutenberg/utils/default-colors.js":
/*!*******************************************************!*\
  !*** ./development/gutenberg/utils/default-colors.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const colors = [{
  name: 'Blue',
  color: '#26A3D1'
}, {
  name: 'Blue Light',
  color: '#EAF1F4'
}, {
  name: 'Blue Dark',
  color: '#003760'
}, {
  name: 'Orange',
  color: '#ff762f'
}, {
  name: 'Green',
  color: '#01A781'
}, {
  name: 'Green Dark',
  color: '#002b2a'
}, {
  name: 'Red Dark',
  color: '#6D0916'
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (colors);

/***/ }),

/***/ "./development/gutenberg/utils/useAutoLinking.js":
/*!*******************************************************!*\
  !*** ./development/gutenberg/utils/useAutoLinking.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useAutoLinking: () => (/* binding */ useAutoLinking)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);



/**
 * Хук для автоматического связывания текста с постами
 * @returns {Object} Объект с функциями и данными для авто-линкинга
 */
const useAutoLinking = () => {
  // Получаем все посты
  const allPosts = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => {
    return select('core').getEntityRecords('postType', 'post', {
      per_page: -1,
      status: 'publish'
    });
  }, []);

  /**
   * Функция для замены текста на ссылки
   * @param {string} text - Исходный текст
   * @returns {string} - Текст с ссылками
   */
  const replaceTextWithLinks = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(text => {
    if (!text || !allPosts || allPosts.length === 0) return text;
    let updatedText = text;

    // Сортируем посты по длине заголовка (сначала длинные)
    const sortedPosts = [...allPosts].sort((a, b) => b.title.rendered.length - a.title.rendered.length);
    sortedPosts.forEach(post => {
      const postTitle = post.title.rendered.replace(/&nbsp;/g, ' ').trim();
      if (postTitle.length < 3) return; // Пропускаем короткие заголовки

      // Экранируем специальные символы для regex
      const escapedTitle = postTitle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

      // Улучшенное регулярное выражение для кириллицы и любых символов
      // Ищем границы слов для любых символов (включая кириллицу)
      const regex = new RegExp(`(^|[^\\p{L}\\d])${escapedTitle}(?![\\p{L}\\d])`, 'gui' // g - global, u - unicode, i - case insensitive
      );

      // Альтернативный вариант если не поддерживается unicode
      // const regex = new RegExp(
      //   `(^|[^a-zA-Zа-яА-ЯёЁ0-9])${escapedTitle}(?![a-zA-Zа-яА-ЯёЁ0-9])`, 
      //   'gi'
      // );

      // Проверяем, не находится ли уже в ссылке
      const linkRegex = new RegExp(`<a[^>]*>${escapedTitle}<\\/a>`, 'gi');
      if (!linkRegex.test(updatedText)) {
        const link = `<a href="${post.link}" class="auto-linked" data-post-id="${post.id}">${postTitle}</a>`;
        updatedText = updatedText.replace(regex, `$1${link}`);
      }
    });
    return updatedText;
  }, [allPosts]);

  /**
   * Альтернативная функция для сложных случаев с кириллицей
   */
  const replaceTextWithLinksAdvanced = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(text => {
    if (!text || !allPosts || allPosts.length === 0) return text;
    let updatedText = text;
    const sortedPosts = [...allPosts].sort((a, b) => b.title.rendered.length - a.title.rendered.length);
    sortedPosts.forEach(post => {
      const postTitle = post.title.rendered.replace(/&nbsp;/g, ' ').trim();
      if (postTitle.length < 3) return;

      // Простая замена без сложных границ - работает для кириллицы
      const regex = new RegExp(`\\b${postTitle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');

      // Более надежная проверка на существующие ссылки
      const existingLinkPattern = `<a[^>]*>.*?${postTitle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}.*?<\\/a>`;
      const linkRegex = new RegExp(existingLinkPattern, 'gi');
      if (!linkRegex.test(updatedText)) {
        const link = `<a href="${post.link}" class="auto-linked" data-post-id="${post.id}">${postTitle}</a>`;
        updatedText = updatedText.replace(regex, link);
      }
    });
    return updatedText;
  }, [allPosts]);

  /**
   * Улучшенная функция с ручной проверкой границ для кириллицы
   */
  const replaceTextWithLinksUnicode = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(text => {
    if (!text || !allPosts || allPosts.length === 0) return text;
    let updatedText = text;
    const sortedPosts = [...allPosts].sort((a, b) => b.title.rendered.length - a.title.rendered.length);

    // Функция для проверки границ слова
    const isWordBoundary = char => {
      if (!char) return true; // Начало или конец строки
      const code = char.charCodeAt(0);
      // Проверяем на буквы (латиница, кириллица), цифры
      return !(code >= 65 && code <= 90 ||
      // A-Z
      code >= 97 && code <= 122 ||
      // a-z
      code >= 1040 && code <= 1103 ||
      // Кириллица
      code === 1105 || code === 1025 ||
      // ёЁ
      code >= 48 && code <= 57 // 0-9
      );
    };
    sortedPosts.forEach(post => {
      const postTitle = post.title.rendered.replace(/&nbsp;/g, ' ').trim();
      if (postTitle.length < 3) return;

      // Экранируем для regex
      const escapedTitle = postTitle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(escapedTitle, 'gi');

      // Проверяем существующие ссылки
      const linkRegex = new RegExp(`<a[^>]*>${escapedTitle}<\\/a>`, 'gi');
      if (linkRegex.test(updatedText)) return;

      // Заменяем с ручной проверкой границ
      updatedText = updatedText.replace(regex, (match, offset, original) => {
        // Проверяем границы перед и после совпадения
        const before = original[offset - 1];
        const after = original[offset + match.length];
        if (isWordBoundary(before) && isWordBoundary(after)) {
          return `<a href="${post.link}" class="auto-linked" data-post-id="${post.id}">${match}</a>`;
        }
        return match; // Оставляем без изменений если не границы слова
      });
    });
    return updatedText;
  }, [allPosts]);

  /**
   * Основная функция авто-линкинга
   * @param {Object} attributes - Атрибуты блока
   * @param {Function} setAttributes - Функция установки атрибутов
   * @param {Array} fields - Массив полей для обработки
   */
  const autoLinkContent = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)((attributes, setAttributes, fields = ['title', 'subTitle', 'items']) => {
    if (!allPosts || allPosts.length === 0) return;
    const updates = {};

    // Обрабатываем простые текстовые поля
    const textFields = fields.filter(field => field !== 'items');
    textFields.forEach(field => {
      if (attributes[field]) {
        // Используем улучшенную функцию для кириллицы
        const updatedText = replaceTextWithLinksUnicode(attributes[field]);
        if (updatedText !== attributes[field]) {
          updates[field] = updatedText;
        }
      }
    });

    // Обрабатываем элементы (items)
    if (fields.includes('items') && attributes.items && attributes.items.length > 0) {
      const updatedItems = attributes.items.map(item => {
        if (item.content) {
          const updatedContent = replaceTextWithLinksUnicode(item.content);
          return {
            ...item,
            content: updatedContent !== item.content ? updatedContent : item.content
          };
        }
        return item;
      });

      // Проверяем, есть ли изменения
      const hasChanges = updatedItems.some((item, index) => item.content !== attributes.items[index].content);
      if (hasChanges) {
        updates.items = updatedItems;
      }
    }

    // Применяем обновления, если они есть
    if (Object.keys(updates).length > 0) {
      setAttributes(updates);
    }
  }, [allPosts, replaceTextWithLinksUnicode]);
  return {
    allPosts,
    autoLinkContent,
    replaceTextWithLinks: replaceTextWithLinksUnicode,
    // Экспортируем улучшенную версию
    postsCount: allPosts ? allPosts.length : 0
  };
};

/***/ }),

/***/ "./development/gutenberg/utils/useOptimizedMedia.js":
/*!**********************************************************!*\
  !*** ./development/gutenberg/utils/useOptimizedMedia.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useOptimizedMedia: () => (/* binding */ useOptimizedMedia)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Хук для выбора изображения и сохранения всех атрибутов,
 * включая adaptive/responsive версии, с WebP.
 */
const useOptimizedMedia = setAttributes => {
  const onSelectImage = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(media => {
    if (!media || !media.id) return;

    // Берём responsive из REST API, который вернул PHP
    const responsive = media.responsive || {
      webp: '',
      jpg: '',
      default: media.url || ''
    };
    setAttributes({
      imageUrl: media.url || '',
      imageId: media.id,
      imageAlt: media.alt || '',
      responsive: responsive
    });
  }, [setAttributes]);
  return {
    onSelectImage
  };
};

/***/ }),

/***/ "./development/gutenberg/utils/useTypograf.js":
/*!****************************************************!*\
  !*** ./development/gutenberg/utils/useTypograf.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   typographText: () => (/* binding */ typographText),
/* harmony export */   useTypograf: () => (/* binding */ useTypograf)
/* harmony export */ });
// src/utils/useTypograf.js
const typographText = text => {
  if (!text || typeof text !== 'string') return text;
  let result = text.replace(/\u00A0/g, ' ');

  // Кавычки (не стоит использовать тк ломает ссылки и атрибуты)
  // result = result.replace(/"([^"]+)"/g, '«$1»');

  // Тире между словами
  result = result.replace(/(\s)-(\s)/g, '$1—$2');

  // Короткое тире между числами
  result = result.replace(/(\d)\s*-\s*(\d)/g, '$1–$2');

  // Неразрывные пробелы после коротких слов
  const shortWords = ['в', 'и', 'к', 'с', 'у', 'о', 'а', 'я', 'он', 'но', 'за', 'из', 'от', 'до', 'по', 'не', 'на', 'из', 'без'];
  shortWords.forEach(word => {
    const regex = new RegExp(`(^|\\s)${word}(\\s|$|[.,!?])`, 'gi');
    result = result.replace(regex, `$1${word}\u00A0`);
  });

  // Неразрывные пробелы перед единицами измерения
  result = result.replace(/(\d+)\s*(руб|р|USD|\$|EUR|€|кг|г|см|м|км|ч|мин|сек)/gi, '$1\u00A0$2');
  return result;
};

// Вспомогательная функция для обработки вложенных полей
const processNestedField = (attributes, fieldPath) => {
  // Проверяем, является ли поле вложенным массивом (формат: 'items[].content')
  if (fieldPath.includes('[].')) {
    const [arrayField, nestedField] = fieldPath.split('[].');
    const array = attributes[arrayField];
    if (Array.isArray(array)) {
      return array.map(item => ({
        ...item,
        [nestedField]: typographText(item[nestedField])
      }));
    }
    return array;
  }

  // Обычное поле
  return typographText(attributes[fieldPath]);
};

// Универсальный хук для подключения к любому блоку
const useTypograf = (attributes, setAttributes, fields) => {
  const typographField = fieldName => {
    const processedValue = processNestedField(attributes, fieldName);
    if (fieldName.includes('[].')) {
      const [arrayField] = fieldName.split('[].');
      setAttributes({
        [arrayField]: processedValue
      });
    } else {
      setAttributes({
        [fieldName]: processedValue
      });
    }
  };
  const typographAllFields = () => {
    const newAttributes = {};
    fields.forEach(field => {
      const processedValue = processNestedField(attributes, field);
      if (field.includes('[].')) {
        const [arrayField] = field.split('[].');
        newAttributes[arrayField] = processedValue;
      } else {
        newAttributes[field] = processedValue;
      }
    });
    setAttributes(newAttributes);
  };
  return {
    typographField,
    typographAllFields
  };
};

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/editor":
/*!********************************!*\
  !*** external ["wp","editor"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["editor"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/plugins":
/*!*********************************!*\
  !*** external ["wp","plugins"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["plugins"];

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!****************************************!*\
  !*** ./development/gutenberg/index.js ***!
  \****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _seo_panel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./seo-panel.js */ "./development/gutenberg/seo-panel.js");
/* harmony import */ var _extends_spacer_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extends/spacer-bg.js */ "./development/gutenberg/extends/spacer-bg.js");
/* harmony import */ var _formats_li_format_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formats/li-format.js */ "./development/gutenberg/formats/li-format.js");
/* harmony import */ var _formats_li_format_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_formats_li_format_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _blocks_mgu_main_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/mgu-main/index.js */ "./development/gutenberg/blocks/mgu-main/index.js");
/* harmony import */ var _blocks_mgu_advantages_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/mgu-advantages/index.js */ "./development/gutenberg/blocks/mgu-advantages/index.js");
// add CEO


// ext blocks


// add components


// add blocks


})();

/******/ })()
;
//# sourceMappingURL=index.js.map