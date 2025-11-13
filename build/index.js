/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./admin/assets/img/blocks/block-01.jpg":
/*!**********************************************!*\
  !*** ./admin/assets/img/blocks/block-01.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/block-01.7ff2de7b.jpg";

/***/ }),

/***/ "./admin/assets/img/blocks/block-03.jpg":
/*!**********************************************!*\
  !*** ./admin/assets/img/blocks/block-03.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/block-03.b7c1841b.jpg";

/***/ }),

/***/ "./admin/assets/img/blocks/block-04.jpg":
/*!**********************************************!*\
  !*** ./admin/assets/img/blocks/block-04.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/block-04.ecc65301.jpg";

/***/ }),

/***/ "./admin/assets/img/blocks/block-05.jpg":
/*!**********************************************!*\
  !*** ./admin/assets/img/blocks/block-05.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/block-05.4f32e82e.jpg";

/***/ }),

/***/ "./development/gutenberg/blocks/block-01/attributes.js":
/*!*************************************************************!*\
  !*** ./development/gutenberg/blocks/block-01/attributes.js ***!
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
  titleColor: {
    type: 'string',
    default: ''
  },
  items: {
    type: 'array',
    default: [{
      content: ''
    }]
  },
  params: {
    type: 'array',
    default: [{
      imageURL: '',
      imageID: 0,
      content: ''
    }]
  },
  videoMP4: {
    type: 'object',
    default: {
      id: 0,
      url: '',
      title: ''
    }
  },
  videoWEBM: {
    type: 'object',
    default: {
      id: 0,
      url: '',
      title: ''
    }
  },
  videoPoster: {
    type: 'object',
    default: {
      id: 0,
      url: '',
      alt: ''
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);

/***/ }),

/***/ "./development/gutenberg/blocks/block-01/controls/ContentPanel.js":
/*!************************************************************************!*\
  !*** ./development/gutenberg/blocks/block-01/controls/ContentPanel.js ***!
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
    titleColor,
    items,
    params
  } = attributes;

  // Подключаем общий хук
  const {
    typographField,
    typographAllFields
  } = (0,_utils_useTypograf__WEBPACK_IMPORTED_MODULE_3__.useTypograf)(attributes, setAttributes, ['title', 'titleColor', 'items[].content', 'params[].content']);
  const hasTextToTypograph = title || titleColor || items.some(item => item.content && item.content.trim() !== '') || params.some(item => item.content && item.content.trim() !== '');
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

/***/ "./development/gutenberg/blocks/block-01/controls/VideoHelpPanel.js":
/*!**************************************************************************!*\
  !*** ./development/gutenberg/blocks/block-01/controls/VideoHelpPanel.js ***!
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

/***/ "./development/gutenberg/blocks/block-01/edit.js":
/*!*******************************************************!*\
  !*** ./development/gutenberg/blocks/block-01/edit.js ***!
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
/* harmony import */ var _hooks_useAttributeList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useAttributeList */ "./development/gutenberg/hooks/useAttributeList.js");
/* harmony import */ var _admin_assets_img_blocks_block_01_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../admin/assets/img/blocks/block-01.jpg */ "./admin/assets/img/blocks/block-01.jpg");
/* harmony import */ var _controls_VideoHelpPanel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./controls/VideoHelpPanel */ "./development/gutenberg/blocks/block-01/controls/VideoHelpPanel.js");
/* harmony import */ var _controls_ContentPanel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./controls/ContentPanel */ "./development/gutenberg/blocks/block-01/controls/ContentPanel.js");









const Edit = ({
  attributes,
  setAttributes
}) => {
  const {
    title,
    titleColor,
    items,
    params,
    videoMP4,
    videoWEBM,
    videoPoster
  } = attributes;
  const [viewMode, setViewMode] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)('edit'); // 'preview' | 'edit'

  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: 'development block-01'
  });

  // Используем хук для items
  const itemsList = (0,_hooks_useAttributeList__WEBPACK_IMPORTED_MODULE_5__.useAttributeList)(attributes, setAttributes, 'items');
  // и для params
  const paramsList = (0,_hooks_useAttributeList__WEBPACK_IMPORTED_MODULE_5__.useAttributeList)(attributes, setAttributes, 'params');
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_VideoHelpPanel__WEBPACK_IMPORTED_MODULE_7__["default"], null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_ContentPanel__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
  }, "\uD83C\uDFA8 \u0413\u043B\u0430\u0432\u043D\u044B\u0439 \u0431\u043B\u043E\u043A"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RadioControl, {
    selected: viewMode,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Preview ✍️', 'theme'),
      value: 'preview'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Редактирование ☺️', 'theme'),
      value: 'edit'
    }],
    onChange: value => setViewMode(value)
  })), viewMode === 'preview' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: _admin_assets_img_blocks_block_01_jpg__WEBPACK_IMPORTED_MODULE_6__,
    className: "preview-image",
    alt: "",
    style: {
      borderRadius: '8px'
    }
  }), viewMode === 'edit' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "advanced-block-content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "rich-text",
    style: {
      'marginBottom': '16px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "block-label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Заголовок', 'theme')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "h1",
    value: title,
    onChange: value => setAttributes({
      title: value
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Заголовок...', 'theme'),
    allowedFormats: ['core/bold']
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "div",
    value: titleColor,
    onChange: value => setAttributes({
      titleColor: value
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Текст для окрашивания', 'theme'),
    allowedFormats: []
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "repeater-items"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "block-label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Текстовой блок', 'theme')), items.map((item, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: index,
    className: "repeater-item"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "items-control"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "items-control__buttons"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    onClick: () => itemsList.moveUp(index),
    disabled: index === 0
  }, "\u2B05\uFE0F"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    onClick: () => itemsList.moveDown(index),
    disabled: index === items.length - 1
  }, "\u27A1\uFE0F")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    isDestructive: true,
    onClick: () => itemsList.remove(index)
  }, "\u274C")), itemsList.renderTextControl(item, index, 'content'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    onClick: () => itemsList.add({
      content: ''
    }),
    className: "add-repeater-item"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('+ Добавить элемент', 'theme'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "repeater-items"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "block-label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Блоки', 'theme')), params.map((param, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: index,
    className: "repeater-item"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "items-control"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "items-control__buttons"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    onClick: () => paramsList.moveUp(index),
    disabled: index === 0
  }, "\u2B05\uFE0F"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    onClick: () => paramsList.moveDown(index),
    disabled: index === items.length - 1
  }, "\u27A1\uFE0F")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    isDestructive: true,
    onClick: () => paramsList.remove(index)
  }, "\u274C")), paramsList.renderImageControl(param, index), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "div",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Введите текст...', 'theme'),
    value: param.content,
    onChange: value => paramsList.update(index, 'content', value),
    className: "repeater-content"
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    onClick: () => paramsList.add({
      image: {
        id: 0,
        url: '',
        alt: ''
      },
      content: ''
    }),
    className: "add-repeater-item"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('+ Добавить элемент', 'theme'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "video-section"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "block-label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Видео фон', 'theme')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "video-controls"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: media => setAttributes({
      videoMP4: {
        id: media.id,
        url: media.url,
        title: media.title
      }
    }),
    allowedTypes: ['video'],
    value: videoMP4?.id,
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "video-upload"
    }, videoMP4?.url ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("video", {
      src: videoMP4.url,
      controls: true,
      style: {
        width: '100%',
        maxHeight: '180px',
        borderRadius: '8px',
        objectFit: 'cover'
      }
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "video-actions"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: open
    }, "\u270F\uFE0F ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Заменить MP4', 'theme')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      isDestructive: true,
      onClick: () => setAttributes({
        videoMP4: {
          id: 0,
          url: '',
          title: ''
        }
      })
    }, "\u274C ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Удалить', 'theme')))) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: open,
      variant: "primary"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Загрузить MP4', 'theme')))
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: media => setAttributes({
      videoWEBM: {
        id: media.id,
        url: media.url,
        title: media.title
      }
    }),
    allowedTypes: ['video'],
    value: videoWEBM?.id,
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "video-upload"
    }, videoWEBM?.url ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("video", {
      src: videoWEBM.url,
      controls: true,
      style: {
        width: '100%',
        maxHeight: '180px',
        borderRadius: '8px',
        objectFit: 'cover'
      }
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "video-actions"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: open
    }, "\u270F\uFE0F ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Заменить WEBM', 'theme')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      isDestructive: true,
      onClick: () => setAttributes({
        videoWEBM: {
          id: 0,
          url: '',
          title: ''
        }
      })
    }, "\u274C ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Удалить', 'theme')))) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: open,
      variant: "secondary"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Загрузить WEBM', 'theme')))
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: media => setAttributes({
      videoPoster: {
        id: media.id,
        url: media.url,
        alt: media.alt
      }
    }),
    allowedTypes: ['image'],
    value: videoPoster?.id,
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "video-poster"
    }, videoPoster?.url ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: videoPoster.url,
      alt: videoPoster.alt || '',
      style: {
        width: '100%',
        maxHeight: '180px',
        borderRadius: '8px',
        objectFit: 'cover'
      }
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "video-actions"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: open
    }, "\u270F\uFE0F ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Заменить постер', 'theme')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      isDestructive: true,
      onClick: () => setAttributes({
        videoPoster: {
          id: 0,
          url: '',
          alt: ''
        }
      })
    }, "\u274C ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Удалить', 'theme')))) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: open,
      variant: "secondary"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Добавить постер', 'theme')))
  })))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./development/gutenberg/blocks/block-01/index.js":
/*!********************************************************!*\
  !*** ./development/gutenberg/blocks/block-01/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./development/gutenberg/blocks/block-01/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./development/gutenberg/blocks/block-01/save.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attributes */ "./development/gutenberg/blocks/block-01/attributes.js");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('theme/block-01', {
  title: 'Заглавный блок',
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

/***/ "./development/gutenberg/blocks/block-01/save.js":
/*!*******************************************************!*\
  !*** ./development/gutenberg/blocks/block-01/save.js ***!
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


const Save = ({
  attributes
}) => {
  const {
    title,
    titleColor,
    items,
    params,
    videoMP4,
    videoWEBM,
    videoPoster
  } = attributes;
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    className: `block-01`
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("main", {
    ...blockProps
  }, videoMP4 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "block-01-video df-fe-fe"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("video", {
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    preload: "metadata",
    poster: videoPoster.url,
    "aria-hidden": "true"
  }, videoWEBM && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
    src: videoWEBM.url,
    type: "video/webm"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
    src: videoMP4.url,
    type: "video/mp4"
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container"
  }, title && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "h1",
    value: title,
    className: "h1",
    "data-color": titleColor
  }), items.length > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "block-items df-fs-st w-100p"
  }, items.map((item, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    key: index,
    tagName: "div",
    value: item.content,
    className: "block-item"
  })))), params.length > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "data-items df-sp-fs"
  }, params.map((item, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: index,
    className: "data-item"
  }, item.image?.url && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: item.image.url,
    alt: item.image.alt || ''
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "span",
    value: item.content,
    className: "advantages-item__content"
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./development/gutenberg/blocks/block-03/attributes.js":
/*!*************************************************************!*\
  !*** ./development/gutenberg/blocks/block-03/attributes.js ***!
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
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);

/***/ }),

/***/ "./development/gutenberg/blocks/block-03/controls/ContentPanel.js":
/*!************************************************************************!*\
  !*** ./development/gutenberg/blocks/block-03/controls/ContentPanel.js ***!
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
    title
  } = attributes;

  // Подключаем общий хук
  const {
    typographField,
    typographAllFields
  } = (0,_utils_useTypograf__WEBPACK_IMPORTED_MODULE_3__.useTypograf)(attributes, setAttributes, ['title']);
  const hasTextToTypograph = title;
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

/***/ "./development/gutenberg/blocks/block-03/controls/VideoHelpPanel.js":
/*!**************************************************************************!*\
  !*** ./development/gutenberg/blocks/block-03/controls/VideoHelpPanel.js ***!
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

/***/ "./development/gutenberg/blocks/block-03/edit.js":
/*!*******************************************************!*\
  !*** ./development/gutenberg/blocks/block-03/edit.js ***!
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
/* harmony import */ var _admin_assets_img_blocks_block_03_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../admin/assets/img/blocks/block-03.jpg */ "./admin/assets/img/blocks/block-03.jpg");
/* harmony import */ var _controls_VideoHelpPanel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./controls/VideoHelpPanel */ "./development/gutenberg/blocks/block-03/controls/VideoHelpPanel.js");
/* harmony import */ var _controls_ContentPanel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./controls/ContentPanel */ "./development/gutenberg/blocks/block-03/controls/ContentPanel.js");








const Edit = ({
  attributes,
  setAttributes
}) => {
  const {
    title
  } = attributes;
  const [viewMode, setViewMode] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)('edit'); // 'preview' | 'edit'

  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: 'development block-03'
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_VideoHelpPanel__WEBPACK_IMPORTED_MODULE_6__["default"], null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_ContentPanel__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attributes: attributes,
    setAttributes: setAttributes
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "advanced-block"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "block-info"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "block-info-title"
  }, "\uD83C\uDFA8 \u0411\u043B\u043E\u043A: \u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RadioControl, {
    selected: viewMode,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Preview ✍️', 'theme'),
      value: 'preview'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Редактирование ☺️', 'theme'),
      value: 'edit'
    }],
    onChange: value => setViewMode(value)
  })), viewMode === 'preview' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: _admin_assets_img_blocks_block_03_jpg__WEBPACK_IMPORTED_MODULE_5__,
    className: "preview-image",
    alt: "",
    style: {
      borderRadius: '8px'
    }
  }), viewMode === 'edit' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "advanced-block-content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "rich-text",
    style: {
      'marginBottom': '16px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "block-label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Заголовок', 'theme')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "div",
    value: title,
    onChange: value => setAttributes({
      title: value
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Заголовок...', 'theme'),
    allowedFormats: []
  }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./development/gutenberg/blocks/block-03/index.js":
/*!********************************************************!*\
  !*** ./development/gutenberg/blocks/block-03/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./development/gutenberg/blocks/block-03/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./development/gutenberg/blocks/block-03/save.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attributes */ "./development/gutenberg/blocks/block-03/attributes.js");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('theme/block-03', {
  title: 'Блок: Заголовок',
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
console.log('✅ block-03');

/***/ }),

/***/ "./development/gutenberg/blocks/block-03/save.js":
/*!*******************************************************!*\
  !*** ./development/gutenberg/blocks/block-03/save.js ***!
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


const Save = ({
  attributes
}) => {
  const {
    title
  } = attributes;
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    className: `block-03`
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "container"
  }, title && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "h2",
    value: title,
    className: "h2"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./development/gutenberg/blocks/block-04/attributes.js":
/*!*************************************************************!*\
  !*** ./development/gutenberg/blocks/block-04/attributes.js ***!
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
  selectedCategories: {
    type: 'array',
    default: [],
    items: {
      type: 'object'
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);

/***/ }),

/***/ "./development/gutenberg/blocks/block-04/controls/VideoHelpPanel.js":
/*!**************************************************************************!*\
  !*** ./development/gutenberg/blocks/block-04/controls/VideoHelpPanel.js ***!
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

/***/ "./development/gutenberg/blocks/block-04/edit.js":
/*!*******************************************************!*\
  !*** ./development/gutenberg/blocks/block-04/edit.js ***!
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
/* harmony import */ var _admin_assets_img_blocks_block_04_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../admin/assets/img/blocks/block-04.jpg */ "./admin/assets/img/blocks/block-04.jpg");
/* harmony import */ var _controls_VideoHelpPanel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./controls/VideoHelpPanel */ "./development/gutenberg/blocks/block-04/controls/VideoHelpPanel.js");







const Edit = ({
  attributes,
  setAttributes
}) => {
  const {
    selectedCategories = []
  } = attributes;
  const [viewMode, setViewMode] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)('edit');
  const [categories, setCategories] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [isLoading, setIsLoading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(true);

  // --- Загрузка категорий ---
  const loadAllCategories = async () => {
    setIsLoading(true);
    try {
      let allCategories = [];
      let page = 1;
      let hasMore = true;
      while (hasMore) {
        const response = await fetch(`${window.wpApiSettings.root}wp/v2/store_categories?per_page=100&page=${page}`);
        const data = await response.json();
        allCategories = [...allCategories, ...data];
        const totalPages = parseInt(response.headers.get('X-WP-TotalPages')) || 1;
        hasMore = page < totalPages;
        page++;
      }
      setCategories(allCategories);
    } catch (error) {
      console.error('Error loading categories:', error);
    } finally {
      setIsLoading(false);
    }
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    loadAllCategories();
  }, []);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!isLoading && categories.length > 0 && selectedCategories.length > 0) {
      const existingIds = categories.map(cat => cat.id);
      const validSelected = selectedCategories.filter(cat => existingIds.includes(cat.id));
      if (validSelected.length !== selectedCategories.length) {
        console.log('🧹 Очистка: удалено', selectedCategories.length - validSelected.length, 'категорий');
        setAttributes({
          selectedCategories: validSelected
        });
      }
    }
  }, [isLoading, categories]);

  // --- Выбор / снятие категории ---
  const toggleCategory = catId => {
    const cat = categories.find(c => c.id === catId);
    if (!cat) return;
    const exists = selectedCategories.some(c => c.id === cat.id);
    if (exists) {
      setAttributes({
        selectedCategories: selectedCategories.filter(c => c.id !== cat.id)
      });
    } else {
      const catData = {
        id: cat.id,
        name: cat.name,
        description: cat.description,
        image: cat.image ? {
          url: cat.image.url
        } : null,
        link: cat.link || (cat.slug ? `/store/${cat.slug}` : '')
      };
      setAttributes({
        selectedCategories: [...selectedCategories, catData]
      });
    }
  };
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: 'development block-04'
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_VideoHelpPanel__WEBPACK_IMPORTED_MODULE_6__["default"], null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Категории магазина', 'theme'),
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      maxHeight: '400px',
      overflowY: 'auto'
    }
  }, isLoading ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      textAlign: 'center'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Spinner, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Загрузка категорий...', 'theme'))) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, categories.map(cat => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CheckboxControl, {
    key: cat.id,
    label: cat.name,
    checked: selectedCategories.some(c => c.id === cat.id),
    onChange: () => toggleCategory(cat.id)
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      marginTop: '16px',
      fontSize: '12px',
      color: '#666'
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Выбрано категорий:', 'theme'), " ", selectedCategories.length))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "advanced-block"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "block-info"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "block-info-title"
  }, "\uD83C\uDFA8 \u0411\u043B\u043E\u043A \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0439"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RadioControl, {
    selected: viewMode,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Preview ✍️', 'theme'),
      value: 'preview'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Редактирование ☺️', 'theme'),
      value: 'edit'
    }],
    onChange: value => setViewMode(value)
  })), viewMode === 'preview' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: _admin_assets_img_blocks_block_04_jpg__WEBPACK_IMPORTED_MODULE_5__,
    className: "preview-image",
    alt: "",
    style: {
      borderRadius: '8px'
    }
  }), viewMode === 'edit' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "selected-categories"
  }, selectedCategories.length > 0 ? selectedCategories.map(cat => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: cat.id,
    className: "selected-category"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "category-name"
  }, cat.name), cat.description && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "category-description"
  }, cat.description), cat.image?.url && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: cat.image.url,
    alt: cat.name,
    style: {
      width: '80px',
      height: '80px',
      objectFit: 'cover',
      marginTop: '8px',
      borderRadius: '4px'
    }
  }))) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: {
      color: '#888'
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Нет выбранных категорий', 'theme'))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./development/gutenberg/blocks/block-04/index.js":
/*!********************************************************!*\
  !*** ./development/gutenberg/blocks/block-04/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./development/gutenberg/blocks/block-04/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./development/gutenberg/blocks/block-04/save.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attributes */ "./development/gutenberg/blocks/block-04/attributes.js");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('theme/block-04', {
  title: 'Блок категорий',
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
console.log('✅ block-04 open');

/***/ }),

/***/ "./development/gutenberg/blocks/block-04/save.js":
/*!*******************************************************!*\
  !*** ./development/gutenberg/blocks/block-04/save.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


function save({
  attributes
}) {
  const {
    selectedCategories
  } = attributes;
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    className: `block-04`
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, selectedCategories && selectedCategories.length > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "container"
  }, selectedCategories.map((cat, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    key: index,
    href: cat.link,
    class: "block-category"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    class: "block-category__name"
  }, cat.name), cat.description && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    class: "block-category__descr"
  }, cat.description), cat.image?.url ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: cat.image.url,
    alt: cat.name,
    className: "block-category__image"
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: "data:image/gif;base64,R0lGODlhBwAFAIAAAP///wAAACH5BAEAAAEALAAAAAAHAAUAAAIFjI+puwUAOw==",
    alt: cat.name,
    className: "block-category__image"
  })))));
}

/***/ }),

/***/ "./development/gutenberg/blocks/block-05/attributes.js":
/*!*************************************************************!*\
  !*** ./development/gutenberg/blocks/block-05/attributes.js ***!
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
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);

/***/ }),

/***/ "./development/gutenberg/blocks/block-05/controls/ContentPanel.js":
/*!************************************************************************!*\
  !*** ./development/gutenberg/blocks/block-05/controls/ContentPanel.js ***!
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
    title
  } = attributes;

  // Подключаем общий хук
  const {
    typographField,
    typographAllFields
  } = (0,_utils_useTypograf__WEBPACK_IMPORTED_MODULE_3__.useTypograf)(attributes, setAttributes, ['title']);
  const hasTextToTypograph = title;
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

/***/ "./development/gutenberg/blocks/block-05/controls/VideoHelpPanel.js":
/*!**************************************************************************!*\
  !*** ./development/gutenberg/blocks/block-05/controls/VideoHelpPanel.js ***!
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

/***/ "./development/gutenberg/blocks/block-05/edit.js":
/*!*******************************************************!*\
  !*** ./development/gutenberg/blocks/block-05/edit.js ***!
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
/* harmony import */ var _admin_assets_img_blocks_block_05_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../admin/assets/img/blocks/block-05.jpg */ "./admin/assets/img/blocks/block-05.jpg");
/* harmony import */ var _controls_VideoHelpPanel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./controls/VideoHelpPanel */ "./development/gutenberg/blocks/block-05/controls/VideoHelpPanel.js");
/* harmony import */ var _controls_ContentPanel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./controls/ContentPanel */ "./development/gutenberg/blocks/block-05/controls/ContentPanel.js");








const Edit = ({
  attributes,
  setAttributes
}) => {
  const {
    title
  } = attributes;
  const [viewMode, setViewMode] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)('edit'); // 'preview' | 'edit'

  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: 'development block-05'
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_VideoHelpPanel__WEBPACK_IMPORTED_MODULE_6__["default"], null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_ContentPanel__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attributes: attributes,
    setAttributes: setAttributes
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "advanced-block"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "block-info"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "block-info-title"
  }, "\uD83C\uDFA8 \u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0442\u043E\u0432\u0430\u0440\u044B"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RadioControl, {
    selected: viewMode,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Preview ✍️', 'theme'),
      value: 'preview'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Редактирование ☺️', 'theme'),
      value: 'edit'
    }],
    onChange: value => setViewMode(value)
  })), viewMode === 'preview' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: _admin_assets_img_blocks_block_05_jpg__WEBPACK_IMPORTED_MODULE_5__,
    className: "preview-image",
    alt: "",
    style: {
      borderRadius: '8px'
    }
  }), viewMode === 'edit' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "advanced-block-content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "rich-text",
    style: {
      'marginBottom': '16px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "block-label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Заголовок', 'theme')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "div",
    value: title,
    onChange: value => setAttributes({
      title: value
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Заголовок...', 'theme'),
    allowedFormats: []
  }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./development/gutenberg/blocks/block-05/index.js":
/*!********************************************************!*\
  !*** ./development/gutenberg/blocks/block-05/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./development/gutenberg/blocks/block-05/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./development/gutenberg/blocks/block-05/save.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attributes */ "./development/gutenberg/blocks/block-05/attributes.js");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('theme/block-05', {
  title: 'Популярные товары',
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
console.log('✅ block-05');

/***/ }),

/***/ "./development/gutenberg/blocks/block-05/save.js":
/*!*******************************************************!*\
  !*** ./development/gutenberg/blocks/block-05/save.js ***!
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


const Save = ({
  attributes
}) => {
  const {
    title
  } = attributes;
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    className: `block-05`
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "container"
  }, title && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "h2",
    value: title,
    className: "h2"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

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

/***/ "./development/gutenberg/hooks/useAttributeList.js":
/*!*********************************************************!*\
  !*** ./development/gutenberg/hooks/useAttributeList.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useAttributeList: () => (/* binding */ useAttributeList)
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





function useAttributeList(attributes, setAttributes, key) {
  const list = attributes[key] || [];
  const setList = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(newList => setAttributes({
    [key]: newList
  }), [key, setAttributes]);
  const add = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)((itemTemplate = {}) => setList([...list, {
    ...itemTemplate
  }]), [list, setList]);
  const remove = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(index => setList(list.filter((_, i) => i !== index)), [list, setList]);
  const update = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)((index, field, value) => setList(list.map((item, i) => i === index ? {
    ...item,
    [field]: value
  } : item)), [list, setList]);
  const moveUp = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(index => {
    if (index === 0) return;
    const newList = [...list];
    [newList[index - 1], newList[index]] = [newList[index], newList[index - 1]];
    setList(newList);
  }, [list, setList]);
  const moveDown = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(index => {
    if (index === list.length - 1) return;
    const newList = [...list];
    [newList[index], newList[index + 1]] = [newList[index + 1], newList[index]];
    setList(newList);
  }, [list, setList]);

  // --------------------------
  // 🧠 Новый метод: MediaUpload renderer
  // --------------------------
  const renderImageControl = (param, index, field = 'image') => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: media => update(index, field, {
      id: media.id,
      url: media.url,
      alt: media.alt || ''
    }),
    allowedTypes: ['image'],
    value: param[field]?.id,
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "repeater-image"
    }, param[field]?.url ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "repeater-image-preview"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: param[field].url,
      alt: param[field].alt || '',
      style: {
        width: '84px',
        height: '84px',
        marginBottom: '8px',
        objectFit: 'contain',
        borderRadius: '6px',
        border: '1px solid #ddd'
      }
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "repeater-image-controls"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: open,
      variant: "secondary",
      size: "small"
    }, "\u270D\uFE0F ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Заменить', 'theme')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      isDestructive: true,
      onClick: () => update(index, field, {
        id: 0,
        url: '',
        alt: ''
      }),
      variant: "secondary",
      size: "small"
    }, "\u274C ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Удалить', 'theme')))) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: open,
      variant: "primary",
      size: "small"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Добавить изображение', 'theme')))
  });

  // --------------------------
  // ✍️ Рендер для текста (RichText)
  // --------------------------
  const renderTextControl = (item, index, field = 'content', options = {}) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: options.tagName || 'div',
    placeholder: options.placeholder || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Введите текст...', 'theme'),
    value: item[field],
    onChange: value => update(index, field, value),
    className: options.className || 'repeater-content'
  });
  return {
    list,
    add,
    remove,
    update,
    moveUp,
    moveDown,
    setList,
    renderImageControl,
    renderTextControl
  };
}

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
  const postType = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => select('core/editor').getCurrentPostType(), []);

  // Проверяем, поддерживается ли текущий post_type
  const supportedPostTypes = ['post', 'page', 'store'];
  if (!supportedPostTypes.includes(postType)) {
    return null;
  }
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
    target: "seo-sidebar",
    icon: "admin-site"
  }, "SEO \u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.PluginSidebar, {
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
    label: "Canonical URL",
    value: meta._seo_canonical_url || '',
    onChange: value => updateMeta('_seo_canonical_url', value),
    help: "\u041A\u0430\u043D\u043E\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0439 URL (\u0435\u0441\u043B\u0438 \u043E\u0442\u043B\u0438\u0447\u0430\u0435\u0442\u0441\u044F \u043E\u0442 \u0442\u0435\u043A\u0443\u0449\u0435\u0433\u043E)"
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
/* harmony import */ var _blocks_block_01_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/block-01/index.js */ "./development/gutenberg/blocks/block-01/index.js");
/* harmony import */ var _blocks_block_03_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/block-03/index.js */ "./development/gutenberg/blocks/block-03/index.js");
/* harmony import */ var _blocks_block_04_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks/block-04/index.js */ "./development/gutenberg/blocks/block-04/index.js");
/* harmony import */ var _blocks_block_05_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blocks/block-05/index.js */ "./development/gutenberg/blocks/block-05/index.js");
// add CEO


// ext blocks


// add components


// add blocks




})();

/******/ })()
;
//# sourceMappingURL=index.js.map