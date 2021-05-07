/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ \"./styles/style.scss\");\n/* harmony import */ var _assets_img_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/img/logo.svg */ \"./assets/img/logo.svg\");\n/* harmony import */ var _assets_img_Anniversary_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/img/Anniversary.png */ \"./assets/img/Anniversary.png\");\n/* harmony import */ var _assets_img_Birthday_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/img/Birthday.png */ \"./assets/img/Birthday.png\");\n/* harmony import */ var _assets_img_blog_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/img/blog.png */ \"./assets/img/blog.png\");\n/* harmony import */ var _assets_img_home_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/img/home.png */ \"./assets/img/home.png\");\n/* harmony import */ var _assets_img_LogoFooter_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/img/LogoFooter.png */ \"./assets/img/LogoFooter.png\");\n/* harmony import */ var _assets_img_Thanks_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/img/Thanks.png */ \"./assets/img/Thanks.png\");\n/* harmony import */ var _assets_img_Valentine_s_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/img/Valentine's.png */ \"./assets/img/Valentine's.png\");\n/* harmony import */ var _assets_img_Christmas_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/img/Christmas.png */ \"./assets/img/Christmas.png\");\n/* harmony import */ var _js_burger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./js/burger */ \"./js/burger.js\");\n/* harmony import */ var _js_blog_accordion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./js/blog-accordion */ \"./js/blog-accordion.js\");\n/* harmony import */ var _js_blog_cart__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./js/blog-cart */ \"./js/blog-cart.js\");\n/* harmony import */ var _js_scroll__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./js/scroll */ \"./js/scroll.js\");\n/* harmony import */ var _js_not_working__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./js/not-working */ \"./js/not-working.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction start() {\n  (0,_js_burger__WEBPACK_IMPORTED_MODULE_10__.default)();\n  (0,_js_blog_accordion__WEBPACK_IMPORTED_MODULE_11__.default)();\n  (0,_js_blog_cart__WEBPACK_IMPORTED_MODULE_12__.default)();\n  (0,_js_scroll__WEBPACK_IMPORTED_MODULE_13__.default)();\n  (0,_js_not_working__WEBPACK_IMPORTED_MODULE_14__.default)();\n}\n\nstart();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./js/blog-accordion.js":
/*!******************************!*\
  !*** ./js/blog-accordion.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar blogAccordion = function blogAccordion() {\n  document.querySelector('.accordion__main-link').addEventListener('click', function () {\n    var mainAccordion = document.querySelector('.blog-accordion__main');\n    mainAccordion.classList.toggle('accordion__main-active');\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (blogAccordion);\n\n//# sourceURL=webpack:///./js/blog-accordion.js?");

/***/ }),

/***/ "./js/blog-cart.js":
/*!*************************!*\
  !*** ./js/blog-cart.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar blogCart = function blogCart() {\n  document.querySelectorAll('.blog__card-link').forEach(function (item) {\n    return item.addEventListener('click', function (e) {\n      var prevElement = e.target.previousElementSibling;\n\n      if (prevElement.textContent.length <= 112) {\n        prevElement.textContent = prevElement.getAttribute('data-text');\n        return;\n      }\n\n      prevElement.textContent = prevElement.textContent.substring(0, 109) + '...';\n      return;\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (blogCart);\n\n//# sourceURL=webpack:///./js/blog-cart.js?");

/***/ }),

/***/ "./js/burger.js":
/*!**********************!*\
  !*** ./js/burger.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar burger = function burger() {\n  document.querySelector('.burger-inner').addEventListener('click', function () {\n    var header = document.querySelector('header');\n    header.classList.toggle('header-active');\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (burger);\n\n//# sourceURL=webpack:///./js/burger.js?");

/***/ }),

/***/ "./js/not-working.js":
/*!***************************!*\
  !*** ./js/not-working.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar notWorking = function notWorking() {\n  document.querySelectorAll('.fab').forEach(function (item) {\n    return item.addEventListener('click', function () {\n      alert('We are working on it).');\n    });\n  });\n  document.querySelectorAll('button').forEach(function (item) {\n    return item.addEventListener('click', function () {\n      alert('We are working on it).');\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (notWorking);\n\n//# sourceURL=webpack:///./js/not-working.js?");

/***/ }),

/***/ "./js/scroll.js":
/*!**********************!*\
  !*** ./js/scroll.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar scroll = function scroll() {\n  document.querySelectorAll('.scroll-to-home').forEach(function (item) {\n    return item.addEventListener('click', function () {\n      document.querySelector('#home').scrollIntoView({\n        behavior: 'smooth'\n      });\n    });\n  });\n  document.querySelectorAll('.scroll-to-about-us').forEach(function (item) {\n    return item.addEventListener('click', function () {\n      document.querySelector('#about-us').scrollIntoView({\n        behavior: 'smooth'\n      });\n    });\n  });\n  document.querySelectorAll('.scroll-to-services').forEach(function (item) {\n    return item.addEventListener('click', function () {\n      document.querySelector('#services').scrollIntoView({\n        behavior: 'smooth'\n      });\n    });\n  });\n  document.querySelectorAll('.scroll-to-blog').forEach(function (item) {\n    return item.addEventListener('click', function () {\n      document.querySelector('#blog').scrollIntoView({\n        behavior: 'smooth'\n      });\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\n\n//# sourceURL=webpack:///./js/scroll.js?");

/***/ }),

/***/ "./assets/img/Anniversary.png":
/*!************************************!*\
  !*** ./assets/img/Anniversary.png ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"assets/img/Anniversary.png\");\n\n//# sourceURL=webpack:///./assets/img/Anniversary.png?");

/***/ }),

/***/ "./assets/img/Birthday.png":
/*!*********************************!*\
  !*** ./assets/img/Birthday.png ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"assets/img/Birthday.png\");\n\n//# sourceURL=webpack:///./assets/img/Birthday.png?");

/***/ }),

/***/ "./assets/img/Christmas.png":
/*!**********************************!*\
  !*** ./assets/img/Christmas.png ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"assets/img/Christmas.png\");\n\n//# sourceURL=webpack:///./assets/img/Christmas.png?");

/***/ }),

/***/ "./assets/img/LogoFooter.png":
/*!***********************************!*\
  !*** ./assets/img/LogoFooter.png ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"assets/img/LogoFooter.png\");\n\n//# sourceURL=webpack:///./assets/img/LogoFooter.png?");

/***/ }),

/***/ "./assets/img/Thanks.png":
/*!*******************************!*\
  !*** ./assets/img/Thanks.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"assets/img/Thanks.png\");\n\n//# sourceURL=webpack:///./assets/img/Thanks.png?");

/***/ }),

/***/ "./assets/img/Valentine's.png":
/*!************************************!*\
  !*** ./assets/img/Valentine's.png ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"assets/img/Valentine's.png\");\n\n//# sourceURL=webpack:///./assets/img/Valentine's.png?");

/***/ }),

/***/ "./assets/img/blog.png":
/*!*****************************!*\
  !*** ./assets/img/blog.png ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"assets/img/blog.png\");\n\n//# sourceURL=webpack:///./assets/img/blog.png?");

/***/ }),

/***/ "./assets/img/home.png":
/*!*****************************!*\
  !*** ./assets/img/home.png ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"assets/img/home.png\");\n\n//# sourceURL=webpack:///./assets/img/home.png?");

/***/ }),

/***/ "./assets/img/logo.svg":
/*!*****************************!*\
  !*** ./assets/img/logo.svg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"assets/img/logo.svg\");\n\n//# sourceURL=webpack:///./assets/img/logo.svg?");

/***/ }),

/***/ "./styles/style.scss":
/*!***************************!*\
  !*** ./styles/style.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./styles/style.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;