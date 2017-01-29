/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _floatMenu = __webpack_require__(1);

	var _floatMenu2 = _interopRequireDefault(_floatMenu);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	new _floatMenu2.default().mobileClicker(document.querySelector('.burger'), document.querySelector('.mobile_menu'));

	new _floatMenu2.default().init(document.querySelector('#fix_menu'));

	$('.sl').slick({
	  dots: true,
	  infinite: true,
	  adaptiveHeight: true
	});

	$('.sl_menu').slick({
	  dots: true,
	  infinite: true,
	  adaptiveHeight: true
	});

	$('.sl_stocks').slick({
	  dots: true,
	  infinite: true,
	  adaptiveHeight: true
	});

	ymaps.ready(init);
	var myMap, myPlacemark;

	function init() {
	  myMap = new ymaps.Map("map", {
	    center: [51.129067, 71.406420],
	    zoom: 17
	  });

	  myMap.behaviors.disable(['drag', 'scrollZoom']);

	  myPlacemark = new ymaps.Placemark([51.129067, 71.406420], {
	    hintContent: 'Москва!',
	    balloonContent: 'Столица России'
	  });

	  myMap.geoObjects.add(myPlacemark);
	}

	// fancybox
	$(".fancybox").click(function () {
	  $(".fancybox").fancybox({
	    openEffect: 'fade',
	    closeEffect: 'elastic'
	  });
	});

	$(document).on('click', 'a.anchor', function () {
	  $('html, body').animate({ scrollTop: $('a[name="' + this.hash.slice(1) + '"]').offset().top - 152 }, 1000);
	  return false;
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// Принимает объект с настройками для меню
	var FloatMenu = function () {
	  function FloatMenu() {
	    _classCallCheck(this, FloatMenu);
	  }

	  _createClass(FloatMenu, [{
	    key: 'init',
	    value: function init(_elem) {
	      if (window.pageYOffset < 200) {
	        _elem.classList.remove('opened');
	      }

	      window.addEventListener('scroll', function () {
	        if (window.pageYOffset > 200 && !_elem.classList.contains('opened')) {
	          _elem.classList.add('opened');
	        } else if (window.pageYOffset < 200 && _elem.classList.contains('opened')) {
	          _elem.classList.remove('opened');
	        }
	      });
	    }
	  }, {
	    key: 'mobileClicker',
	    value: function mobileClicker(elem, menu) {
	      elem.addEventListener('click', function (e) {
	        return menu.classList.toggle('open');
	      });

	      [].concat(_toConsumableArray(document.querySelectorAll('.mobile_menu .anchor'))).forEach(function (el) {
	        el.addEventListener('click', function (e) {
	          if (menu.classList.contains('open')) {
	            menu.classList.remove('open');
	          }
	        });
	      });
	    }
	  }]);

	  return FloatMenu;
	}();

	exports.default = FloatMenu;

/***/ }
/******/ ]);