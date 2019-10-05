module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./admin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../resources/icons.json":
/*!*******************************!*\
  !*** ../resources/icons.json ***!
  \*******************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"elementPath\":\"li.item-tags>a>i\",\"originalIcon\":\"fas fa-th-large\",\"modifiedIcon\":\"fas fa-hashtag\",\"isActive\":1},{\"elementPath\":\"li.item-following>a>i\",\"originalIcon\":\"fas fa-star\",\"modifiedIcon\":\"far fa-star\",\"isActive\":1},{\"elementPath\":\"li.item-allDiscussions>a>i\",\"originalIcon\":\"far fa-comments\",\"modifiedIcon\":\"far fa-comments\",\"isActive\":1},{\"elementPath\":\"li.item-flags>div>button>i\",\"originalIcon\":\"fas fa-flag\",\"modifiedIcon\":\"far fa-flag\",\"isActive\":1},{\"elementPath\":\"li.item-notifications>div>button>i\",\"originalIcon\":\"fas fa-bell\",\"modifiedIcon\":\"far fa-bell\",\"isActive\":1},{\"elementPath\":\"li.item-profile>a>i\",\"originalIcon\":\"fas fa-user\",\"modifiedIcon\":\"far fa-id-card\",\"isActive\":1},{\"elementPath\":\"li.item-settings>a>i\",\"originalIcon\":\"fas fa-cog\",\"modifiedIcon\":\"fas fa-user-cog\",\"isActive\":1},{\"elementPath\":\"li.item-administration>a>i\",\"originalIcon\":\"fas fa-wrench\",\"modifiedIcon\":\"fas fa-lock\",\"isActive\":1},{\"elementPath\":\"li.item-logOut>a>i\",\"originalIcon\":\"fas fa-sign-out-alt\",\"modifiedIcon\":\"fas fa-sign-out-alt\",\"isActive\":1},{\"elementPath\":\"li.item-posts>a>i\",\"originalIcon\":\"far fa-comment\",\"modifiedIcon\":\"far fa-comment\",\"isActive\":1},{\"elementPath\":\"li.item-discussions>a>i\",\"originalIcon\":\"fas fa-bars\",\"modifiedIcon\":\"far fa-comment-alt\",\"isActive\":1},{\"elementPath\":\"li.item-mentions>a>i\",\"originalIcon\":\"fas fa-at\",\"modifiedIcon\":\"fas fa-quote-right\",\"isActive\":1}]");

/***/ }),

/***/ "./admin.js":
/*!******************!*\
  !*** ./admin.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/common */ "./src/common/index.js");
/* harmony import */ var _src_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _src_common__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _src_common__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _src_admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/admin */ "./src/admin/index.js");
/* empty/unused harmony star reexport */


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./src/admin/addIconsPane.js":
/*!***********************************!*\
  !*** ./src/admin/addIconsPane.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_AdminNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/AdminNav */ "flarum/components/AdminNav");
/* harmony import */ var flarum_components_AdminNav__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_AdminNav__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_AdminLinkButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/AdminLinkButton */ "flarum/components/AdminLinkButton");
/* harmony import */ var flarum_components_AdminLinkButton__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_AdminLinkButton__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_IconsPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/IconsPage */ "./src/admin/components/IconsPage.js");




/* harmony default export */ __webpack_exports__["default"] = (function () {
  app.routes.icons = {
    path: '/icons',
    component: _components_IconsPage__WEBPACK_IMPORTED_MODULE_3__["default"].component()
  };

  app.extensionSettings['fajuu-icons'] = function () {
    return m.route(app.route('icons'));
  };

  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_AdminNav__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'items', function (items) {
    items.add('icons', flarum_components_AdminLinkButton__WEBPACK_IMPORTED_MODULE_2___default.a.component({
      href: app.route('icons'),
      icon: 'fas fa-icons',
      children: app.translator.trans('fajuu-icons.admin.nav.icons_button'),
      description: app.translator.trans('fajuu-icons.admin.nav.icons_text')
    }));
  });
});

/***/ }),

/***/ "./src/admin/compat.js":
/*!*****************************!*\
  !*** ./src/admin/compat.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _common_compat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/compat */ "./src/common/compat.js");
/* harmony import */ var _components_IconCreate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/IconCreate */ "./src/admin/components/IconCreate.js");
/* harmony import */ var _components_IconItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/IconItem */ "./src/admin/components/IconItem.js");
/* harmony import */ var _components_IconSettingsModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/IconSettingsModal */ "./src/admin/components/IconSettingsModal.js");
/* harmony import */ var _components_IconsExportModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/IconsExportModal */ "./src/admin/components/IconsExportModal.js");
/* harmony import */ var _components_IconsImportModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/IconsImportModal */ "./src/admin/components/IconsImportModal.js");
/* harmony import */ var _components_IconsPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/IconsPage */ "./src/admin/components/IconsPage.js");
/* harmony import */ var _helpers_IconDemo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./helpers/IconDemo */ "./src/admin/helpers/IconDemo.js");
/* harmony import */ var _addIconsPane__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./addIconsPane */ "./src/admin/addIconsPane.js");










/* harmony default export */ __webpack_exports__["default"] = (Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(_common_compat__WEBPACK_IMPORTED_MODULE_1__["default"], {
  'icons/components/IconCreate': _components_IconCreate__WEBPACK_IMPORTED_MODULE_2__["default"],
  'icons/components/IconItem': _components_IconItem__WEBPACK_IMPORTED_MODULE_3__["default"],
  'icons/components/IconSettingsModal': _components_IconSettingsModal__WEBPACK_IMPORTED_MODULE_4__["default"],
  'icons/components/IconsExportModal': _components_IconsExportModal__WEBPACK_IMPORTED_MODULE_5__["default"],
  'icons/components/IconsImportModal': _components_IconsImportModal__WEBPACK_IMPORTED_MODULE_6__["default"],
  'icons/components/IconsPage': _components_IconsPage__WEBPACK_IMPORTED_MODULE_7__["default"],
  'icons/helpers/IconDemo': _helpers_IconDemo__WEBPACK_IMPORTED_MODULE_8__["default"],
  'icons/addIconsPane': _addIconsPane__WEBPACK_IMPORTED_MODULE_9__["default"]
}));

/***/ }),

/***/ "./src/admin/components/IconCreate.js":
/*!********************************************!*\
  !*** ./src/admin/components/IconCreate.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IconCreate; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_IconDemo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/IconDemo */ "./src/admin/helpers/IconDemo.js");





var IconCreate =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(IconCreate, _Component);

  function IconCreate() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = IconCreate.prototype;

  _proto.init = function init() {
    _Component.prototype.init.call(this);

    this.icon = app.store.createRecord('icons');
    this.id = m.prop(0);
    this.elementPath = m.prop('');
    this.originalIcon = m.prop('fas fa-baby');
    this.modifiedIcon = m.prop('fas fa-child');
  };

  _proto.view = function view() {
    return m('form', [m('input.FormControl.Icons-elementPath', {
      type: 'text',
      value: this.elementPath(),
      oninput: m.withAttr('value', this.elementPath),
      placeholder: app.translator.trans('fajuu-icons.admin.edit_icon.elementPath')
    }), flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a.component({
      type: 'button',
      className: 'Button Button--warning Icons-button',
      children: app.translator.trans('fajuu-icons.admin.edit_icon.create'),
      icon: 'fas fa-plus',
      loading: this.loading,
      onclick: this.create.bind(this)
    }), m('input.FormControl.Icons-originalIcon', {
      type: 'text',
      value: this.originalIcon(),
      oninput: m.withAttr('value', this.originalIcon, Object(_helpers_IconDemo__WEBPACK_IMPORTED_MODULE_3__["default"])('o', this)),
      placeholder: app.translator.trans('fajuu-icons.admin.edit_icon.originalIcon')
    }), m('input.FormControl.Icons-modifiedIcon', {
      type: 'text',
      value: this.modifiedIcon(),
      oninput: m.withAttr('value', this.modifiedIcon, Object(_helpers_IconDemo__WEBPACK_IMPORTED_MODULE_3__["default"])('m', this)),
      placeholder: app.translator.trans('fajuu-icons.admin.edit_icon.modifiedIcon')
    }), m('span', {
      style: 'margin-left: 10px;'
    }), m('icon#o' + this.id(), [m('i.Icons-demo.' + this.originalIcon())]), m('icon#r' + this.id(), [m('i.Icons-random.fas.fa-random')]), m('icon#m' + this.id(), [m('i.Icons-demo.' + this.modifiedIcon())])]);
  };

  _proto.create = function create() {
    var _this = this;

    this.loading = true;
    this.icon.save({
      elementPath: this.elementPath(),
      originalIcon: this.originalIcon(),
      modifiedIcon: this.modifiedIcon()
    }).then(function () {
      _this.loading = false;

      _this.id(0);

      _this.elementPath(null);

      _this.originalIcon('fas fa-baby');

      _this.modifiedIcon('fas fa-child');

      m.redraw();
    })["catch"](function () {
      _this.loading = false;
      m.redraw();
    });
  };

  return IconCreate;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/admin/components/IconItem.js":
/*!******************************************!*\
  !*** ./src/admin/components/IconItem.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IconItem; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Switch */ "flarum/components/Switch");
/* harmony import */ var flarum_components_Switch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Switch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_IconDemo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/IconDemo */ "./src/admin/helpers/IconDemo.js");






var IconItem =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(IconItem, _Component);

  function IconItem() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = IconItem.prototype;

  _proto.init = function init() {
    _Component.prototype.init.call(this);

    this.icon = this.props.icon;
    this.id = m.prop(this.icon.id());
    this.elementPath = m.prop(this.icon.elementPath());
    this.originalIcon = m.prop(this.icon.originalIcon());
    this.modifiedIcon = m.prop(this.icon.modifiedIcon());
    this.isActive = m.prop(this.icon.isActive());
  };

  _proto.view = function view() {
    return m('form', [flarum_components_Switch__WEBPACK_IMPORTED_MODULE_3___default.a.component({
      className: 'Icons-isActive',
      state: this.isActive() > 0,
      onchange: this.update('isActive')
    }), m('input.FormControl.Icons-elementPath', {
      type: 'text',
      value: this.elementPath(),
      oninput: m.withAttr('value', this.update('elementPath')),
      placeholder: app.translator.trans('fajuu-icons.admin.edit_icon.elementPath')
    }), m('input.FormControl.Icons-originalIcon', {
      type: 'text',
      value: this.originalIcon(),
      oninput: m.withAttr('value', this.update('originalIcon'), Object(_helpers_IconDemo__WEBPACK_IMPORTED_MODULE_4__["default"])('o', this)),
      placeholder: app.translator.trans('fajuu-icons.admin.edit_icon.originalIcon')
    }), m('input.FormControl.Icons-modifiedIcon', {
      type: 'text',
      value: this.modifiedIcon(),
      oninput: m.withAttr('value', this.update('modifiedIcon'), Object(_helpers_IconDemo__WEBPACK_IMPORTED_MODULE_4__["default"])('m', this)),
      placeholder: app.translator.trans('fajuu-icons.admin.edit_icon.modifiedIcon')
    }), flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a.component({
      type: 'button',
      className: 'Button Button--warning Icons-button',
      children: app.translator.trans('fajuu-icons.admin.edit_icon.delete'),
      loading: this.loading,
      icon: 'far fa-trash-alt',
      onclick: this["delete"].bind(this)
    }), m('span', {
      style: 'margin-left: 10px;'
    }), m('icon#o' + this.id(), [m('i.Icons-demo.' + this.originalIcon())]), m('icon#r' + this.id(), [m('i.Icons-random.fas.fa-random')]), m('icon#m' + this.id(), [m('i.Icons-demo.' + this.modifiedIcon())])]);
  };

  _proto.update = function update(field) {
    var _this = this;

    return function (value) {
      var _this$icon$save;

      _this[field](value);

      return _this.icon.save((_this$icon$save = {}, _this$icon$save[field] = value, _this$icon$save)).then(function () {
        m.lazyRedraw();
      });
    };
  };

  _proto["delete"] = function _delete() {
    var _this2 = this;

    this.loading = true;
    this.icon["delete"]().then(function () {
      _this2.loading = false;
      m.lazyRedraw();
    });
  };

  return IconItem;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/admin/components/IconSettingsModal.js":
/*!***************************************************!*\
  !*** ./src/admin/components/IconSettingsModal.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IconSettingsModal; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_SettingsModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/SettingsModal */ "flarum/components/SettingsModal");
/* harmony import */ var flarum_components_SettingsModal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_SettingsModal__WEBPACK_IMPORTED_MODULE_1__);



var IconSettingsModal =
/*#__PURE__*/
function (_SettingsModal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(IconSettingsModal, _SettingsModal);

  function IconSettingsModal() {
    return _SettingsModal.apply(this, arguments) || this;
  }

  var _proto = IconSettingsModal.prototype;

  _proto.isDismissible = function isDismissible() {
    return false;
  };

  _proto.onhide = function onhide() {
    window.location.reload(true);
  };

  _proto.className = function className() {
    return 'IconSettingsModal Modal--small';
  };

  _proto.title = function title() {
    return app.translator.trans('fajuu-icons.admin.icon_settings.title');
  };

  _proto.form = function form() {
    return m('.Modal-body', [m('.Form-group', [m('label', app.translator.trans('fajuu-icons.admin.icon_settings.key_heading')), m('.helpText', app.translator.trans('fajuu-icons.admin.icon_settings.key_text', {
      a: m("a", {
        href: "https://fontawesome.com/start",
        target: "_blank"
      })
    })), m('input.FormControl', {
      required: true,
      type: 'text',
      minlength: '10',
      maxlength: '10',
      bidi: this.setting('fajuu-icons.key')
    })])]);
  };

  return IconSettingsModal;
}(flarum_components_SettingsModal__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/admin/components/IconsExportModal.js":
/*!**************************************************!*\
  !*** ./src/admin/components/IconsExportModal.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IconsExportModal; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Modal */ "flarum/components/Modal");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_Alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/Alert */ "flarum/components/Alert");
/* harmony import */ var flarum_components_Alert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Alert__WEBPACK_IMPORTED_MODULE_4__);






var IconsExportModal =
/*#__PURE__*/
function (_Modal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(IconsExportModal, _Modal);

  function IconsExportModal() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = IconsExportModal.prototype;

  _proto.isDismissible = function isDismissible() {
    return false;
  };

  _proto.title = function title() {
    return flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('fajuu-icons.admin.icon_export.title');
  };

  _proto.content = function content() {
    var _this = this;

    return m('.Modal-body', [m('.Form-group', [m('textarea.FormControl#iconExport', {
      readonly: true,
      rows: 15,
      value: JSON.stringify(flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.store.all('icons').map(function (icon) {
        return icon.data.attributes;
      }))
    })]), m('.Form-group', [flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a.component({
      className: 'Button Button--primary',
      children: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('fajuu-icons.admin.icon_export.close_button'),
      loading: this.loading,
      onclick: function onclick() {
        return _this.hide();
      }
    }), flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a.component({
      className: 'Button',
      style: 'float: right;',
      children: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('fajuu-icons.admin.icon_export.copy_button'),
      icon: 'fas fa-copy',
      onclick: function onclick() {
        _this.loading = true;
        var copyTextarea = document.querySelector('textarea#iconExport');
        copyTextarea.focus();
        copyTextarea.select();

        try {
          document.execCommand('copy');
          _this.loading = false;
          _this.alert = flarum_components_Alert__WEBPACK_IMPORTED_MODULE_4___default.a.component({
            type: 'success',
            children: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('fajuu-icons.admin.icon_export.copy_success')
          });
        } catch (err) {
          _this.loading = false;
          _this.alert = flarum_components_Alert__WEBPACK_IMPORTED_MODULE_4___default.a.component({
            type: 'error',
            children: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('fajuu-icons.admin.icon_export.copy_error')
          });
        }
      }
    })])]);
  };

  return IconsExportModal;
}(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_2___default.a);



/***/ }),

/***/ "./src/admin/components/IconsImportModal.js":
/*!**************************************************!*\
  !*** ./src/admin/components/IconsImportModal.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IconsImportModal; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Modal */ "flarum/components/Modal");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_Alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/Alert */ "flarum/components/Alert");
/* harmony import */ var flarum_components_Alert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Alert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _resources_icons_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../resources/icons.json */ "../resources/icons.json");
var _resources_icons_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../../resources/icons.json */ "../resources/icons.json", 1);







var IconsImportModal =
/*#__PURE__*/
function (_Modal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(IconsImportModal, _Modal);

  var _proto = IconsImportModal.prototype;

  _proto["import"] = function _import(i) {
    var _this2 = this;

    this.loading = true;

    if (!flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.store.all('icons')[0]) {
      i.map(function (icon) {
        flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.store.createRecord('icons').save(icon).then(function () {
          return m.redraw();
        });
      });
      this.loading = false;
      this.hide();
    }

    flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.store.all('icons').map(function (icon) {
      icon["delete"]().then(function () {
        m.redraw();

        if (!flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.store.all('icons')[0]) {
          i.map(function (icon) {
            flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.store.createRecord('icons').save(icon).then(function () {
              return m.redraw();
            });
          });
          _this2.loading = false;

          _this2.hide();
        }
      });
    });
  };

  function IconsImportModal() {
    var _this;

    _this = _Modal.call(this) || this;
    _this.icons = m.prop(null);
    _this.alert = flarum_components_Alert__WEBPACK_IMPORTED_MODULE_4___default.a.component({
      type: 'info',
      children: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('fajuu-icons.admin.icon_import.about')
    });
    return _this;
  }

  _proto.title = function title() {
    return flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('fajuu-icons.admin.icon_import.title');
  };

  _proto.content = function content() {
    var _this3 = this;

    return m('.Modal-body', [m('.Form-group', [m('textarea.FormControl', {
      required: true,
      type: 'text',
      rows: 15,
      oninput: m.withAttr('value', this.icons)
    })]), m('.Form-group', [flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a.component({
      loading: this.loading,
      className: 'Button Button--primary',
      children: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('fajuu-icons.admin.icon_import.import_button'),
      onclick: function onclick() {
        function isJson(text) {
          try {
            if (typeof text !== 'string') {
              return false;
            } else {
              JSON.parse(text);
              return true;
            }
          } catch (error) {
            return false;
          }
        }

        if (isJson(_this3.icons())) _this3["import"](JSON.parse(_this3.icons()));else _this3.alert = flarum_components_Alert__WEBPACK_IMPORTED_MODULE_4___default.a.component({
          type: 'error',
          children: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('fajuu-icons.admin.icon_import.not_json')
        });
      }
    }), flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a.component({
      className: 'Button',
      style: 'float: right;',
      icon: 'fas fa-trash-restore',
      children: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('fajuu-icons.admin.icon_import.restore_button'),
      onclick: function onclick() {
        return _this3["import"](_resources_icons_json__WEBPACK_IMPORTED_MODULE_5__);
      }
    })])]);
  };

  return IconsImportModal;
}(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_2___default.a);



/***/ }),

/***/ "./src/admin/components/IconsPage.js":
/*!*******************************************!*\
  !*** ./src/admin/components/IconsPage.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IconsPage; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Page */ "flarum/components/Page");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _IconCreate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IconCreate */ "./src/admin/components/IconCreate.js");
/* harmony import */ var _IconItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./IconItem */ "./src/admin/components/IconItem.js");
/* harmony import */ var _IconSettingsModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./IconSettingsModal */ "./src/admin/components/IconSettingsModal.js");
/* harmony import */ var _IconsExportModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./IconsExportModal */ "./src/admin/components/IconsExportModal.js");
/* harmony import */ var _IconsImportModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./IconsImportModal */ "./src/admin/components/IconsImportModal.js");









var IconsPage =
/*#__PURE__*/
function (_Page) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(IconsPage, _Page);

  function IconsPage() {
    return _Page.apply(this, arguments) || this;
  }

  var _proto = IconsPage.prototype;

  _proto.config = function config() {
    if (!window.FontAwesomeKitConfig) setTimeout(function () {
      return app.modal.show(new _IconSettingsModal__WEBPACK_IMPORTED_MODULE_5__["default"]());
    }, 500);
  };

  _proto.view = function view() {
    return m('.IconsPage', [m('.IconsPage-header', [m('.container', [m('p', app.translator.trans('fajuu-icons.admin.icons.about_icons_text', {
      a: m("a", {
        href: "https://fontawesome.com",
        target: "_blank"
      })
    })), flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a.component({
      className: 'Button Button--primary',
      icon: 'fas fa-list-ul',
      children: app.translator.trans('fajuu-icons.admin.icons.list_icons_button'),
      onclick: function onclick() {
        return window.open("https://fontawesome.com/icons", '_blank');
      }
    }), flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a.component({
      className: 'Button',
      icon: 'fas fa-upload',
      children: app.translator.trans('fajuu-icons.admin.icons.import_icons_button'),
      onclick: function onclick() {
        return app.modal.show(new _IconsImportModal__WEBPACK_IMPORTED_MODULE_7__["default"]());
      }
    }), flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a.component({
      className: 'Button',
      icon: 'fas fa-download',
      children: app.translator.trans('fajuu-icons.admin.icons.export_icons_button'),
      onclick: function onclick() {
        return app.modal.show(new _IconsExportModal__WEBPACK_IMPORTED_MODULE_6__["default"]());
      }
    })])]), m('.IconsPage-main', [m('.container', [m('.IconCreate', _IconCreate__WEBPACK_IMPORTED_MODULE_3__["default"].component()), m('.IconList', app.store.all('icons').map(function (icon) {
      return m(".IconItem", {
        key: icon.id(),
        'data-id': icon.id()
      }, _IconItem__WEBPACK_IMPORTED_MODULE_4__["default"].component({
        icon: icon
      }));
    }))])])]);
  };

  return IconsPage;
}(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/admin/helpers/IconDemo.js":
/*!***************************************!*\
  !*** ./src/admin/helpers/IconDemo.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IconDemo; });
function IconDemo(type, icon) {
  // a mess, I advise you to skip
  var o = icon.originalIcon();
  if (type == "o") var i = o;
  var m = icon.modifiedIcon();
  if (type == "m") var i = m;
  var e = document.querySelector("icon#" + type + icon.id());

  if (e) {
    var c = e.lastElementChild;

    if (c) {
      while (c) {
        e.removeChild(c);
        c = e.lastElementChild;
      }
    }

    var n = document.createElement("i");
    n.setAttribute("class", i + " Icons-demo");
    e.appendChild(n);
  }

  var r = document.querySelector("icon#r" + icon.id());

  if (r) {
    var cr = r.lastElementChild;

    if (o && m) {
      if (!cr) {
        var nr = document.createElement("i");
        nr.setAttribute("class", "fas fa-random Icons-random");
        r.appendChild(nr);
      }
    } else {
      if (r.lastElementChild) {
        while (cr) {
          r.removeChild(cr);
          cr = r.lastElementChild;
        }
      }
    }
  }
}

/***/ }),

/***/ "./src/admin/index.js":
/*!****************************!*\
  !*** ./src/admin/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _common_models_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/models/Icon */ "./src/common/models/Icon.js");
/* harmony import */ var _addIconsPane__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addIconsPane */ "./src/admin/addIconsPane.js");
/* harmony import */ var _compat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./compat */ "./src/admin/compat.js");
/* harmony import */ var _flarum_core_admin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @flarum/core/admin */ "@flarum/core/admin");
/* harmony import */ var _flarum_core_admin__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_flarum_core_admin__WEBPACK_IMPORTED_MODULE_4__);



app.initializers.add('fajuu-icons', function (app) {
  app.store.models.icons = _common_models_Icon__WEBPACK_IMPORTED_MODULE_1__["default"];
  Object(_addIconsPane__WEBPACK_IMPORTED_MODULE_2__["default"])();
}); // Expose compat API




Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(_flarum_core_admin__WEBPACK_IMPORTED_MODULE_4__["compat"], _compat__WEBPACK_IMPORTED_MODULE_3__["default"]);

/***/ }),

/***/ "./src/common/compat.js":
/*!******************************!*\
  !*** ./src/common/compat.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_Icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/Icon */ "./src/common/models/Icon.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  'icons/models/Icon': _models_Icon__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "./src/common/index.js":
/*!*****************************!*\
  !*** ./src/common/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/common/models/Icon.js":
/*!***********************************!*\
  !*** ./src/common/models/Icon.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Icon; });
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_3__);





var Icon =
/*#__PURE__*/
function (_Model) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Icon, _Model);

  function Icon() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Model.call.apply(_Model, [this].concat(args)) || this;

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "elementPath", flarum_Model__WEBPACK_IMPORTED_MODULE_3___default.a.attribute('elementPath'));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "originalIcon", flarum_Model__WEBPACK_IMPORTED_MODULE_3___default.a.attribute('originalIcon'));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "modifiedIcon", flarum_Model__WEBPACK_IMPORTED_MODULE_3___default.a.attribute('modifiedIcon'));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "isActive", flarum_Model__WEBPACK_IMPORTED_MODULE_3___default.a.attribute('isActive', Boolean));

    return _this;
  }

  return Icon;
}(flarum_Model__WEBPACK_IMPORTED_MODULE_3___default.a);



/***/ }),

/***/ "@flarum/core/admin":
/*!******************************!*\
  !*** external "flarum.core" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core;

/***/ }),

/***/ "flarum/Component":
/*!**************************************************!*\
  !*** external "flarum.core.compat['Component']" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['Component'];

/***/ }),

/***/ "flarum/Model":
/*!**********************************************!*\
  !*** external "flarum.core.compat['Model']" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['Model'];

/***/ }),

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['app'];

/***/ }),

/***/ "flarum/components/AdminLinkButton":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['components/AdminLinkButton']" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/AdminLinkButton'];

/***/ }),

/***/ "flarum/components/AdminNav":
/*!************************************************************!*\
  !*** external "flarum.core.compat['components/AdminNav']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/AdminNav'];

/***/ }),

/***/ "flarum/components/Alert":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['components/Alert']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Alert'];

/***/ }),

/***/ "flarum/components/Button":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Button']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Button'];

/***/ }),

/***/ "flarum/components/Modal":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['components/Modal']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Modal'];

/***/ }),

/***/ "flarum/components/Page":
/*!********************************************************!*\
  !*** external "flarum.core.compat['components/Page']" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Page'];

/***/ }),

/***/ "flarum/components/SettingsModal":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['components/SettingsModal']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/SettingsModal'];

/***/ }),

/***/ "flarum/components/Switch":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Switch']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Switch'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extend'];

/***/ })

/******/ });
//# sourceMappingURL=admin.js.map