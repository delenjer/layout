/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((module) => {

// Module
var code = "<!doctype html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\"\n        content=\"width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <title>Document</title>\n</head>\n<body>\n\n  <section class=\"container\">\n  <h1>Button</h1>\n  <button class=\"btn\" type=\"button\">Button</button>\n\n  <article class=\"highlight\">\n    <div class=\"highlight__col\">\n      <h2 class=\"highlight__title\">html:</h2>\n      <xmp><button class=\"btn\" type=\"button\">Button</button></xmp>\n    </div>\n\n    <div class=\"highlight__col\">\n      <h2 class=\"highlight__title\">css:</h2>\n\n      <xmp>.btn {\n  display: block;\n  color: #fff;\n  border-radius: 5px;\n  background-color: #0d6efd;\n  border: 1px solid #0d6efd;\n  padding: 0.5rem 1rem;\n  cursor: pointer;\n  outline: none;\n  transition: all 0.3s;\n\n  &:hover {\n    color: #ccc;\n  }\n\n  &:focus {\n    box-shadow: 0 0 1px 4px rgba(13,110,253,0.29);\n  }\n}\n      </xmp>\n    </div>\n  </article>\n\n  <section class=\"example-2\">\n    <div class=\"btn-group-wrap\">\n      <button class=\"btn btn-lg\" type=\"button\">Button</button>\n\n      <button class=\"btn btn-lg\" type=\"button\">Button</button>\n    </div>\n\n    <article class=\"highlight\">\n      <div class=\"highlight__col\">\n        <h2 class=\"highlight__title\">html:</h2>\n\n        <xmp class=\"code-box\">\n<div class=\"btn-group-wrap\">\n  <button class=\"btn btn-lg\" type=\"button\">Button</button>\n  <button class=\"btn btn-lg\" type=\"button\">Button</button>\n</div>\n        </xmp>\n      </div>\n\n      <div class=\"highlight__col\">\n        <h2 class=\"highlight__title\">css:</h2>\n\n        <xmp class=\"code-box\">\n.btn-lg {\n  width: 100%;\n  padding: 1rem;\n  font-size: 2rem;\n\n  &:not(:last-of-type) {\n    margin-bottom: 1rem;\n  }\n}\n        </xmp>\n      </div>\n    </article>\n  </section>\n</section>\n</body>\n</html>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ "./scss/main.scss");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.html */ "./index.html");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_html__WEBPACK_IMPORTED_MODULE_1__);




console.log('Hello world');
})();

/******/ })()
;
//# sourceMappingURL=main.js.map