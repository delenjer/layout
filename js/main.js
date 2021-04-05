/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/common.js":
/*!**********************!*\
  !*** ./js/common.js ***!
  \**********************/
/***/ (() => {

"use strict";


const toggleButtons = document.querySelectorAll('.highlight__btn');
const highlightWrap = document.querySelectorAll('.highlight__wrap');
const highlightBtnIcon = document.querySelectorAll('.highlight__btn--icon');
highlightWrap.forEach(item => item.style.height = '0');
toggleButtons.forEach(button => {
  button.addEventListener('click', event => {
    event.preventDefault();
    const targetEl = event.target;

    if (targetEl) {
      button.nextElementSibling.classList.toggle('show-wrap');

      if (button.nextElementSibling.classList.contains('show-wrap')) {
        showWrap(button.nextElementSibling);
        targetEl.firstElementChild.style = `transform: translate(0, -50%) rotate(90deg);`;
      } else {
        button.nextElementSibling.style = 'height: 0';
        targetEl.firstElementChild.style = `transform: translate(0, -50%) rotate(0deg);`;
      }
    }
  }, false);
});

function showWrap(wrapEl) {
  wrapEl.style.height = wrapEl.scrollHeight + 'px';
}

/***/ }),

/***/ "./js/example-code-display.js":
/*!************************************!*\
  !*** ./js/example-code-display.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _example_code_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./example-code-template */ "./js/example-code-template.js");

"use strict";

const html_BtnGroup = document.querySelectorAll('.html-btn-group');
const html_BtnPrimary = document.querySelectorAll('.html-btn-primary');
const style_BtnPrimary = document.querySelectorAll('.style-btn-primary');
const style_BtnLg = document.querySelectorAll('.style-btn-lg');
html_BtnPrimary.forEach(item => item.innerHTML = _example_code_template__WEBPACK_IMPORTED_MODULE_0__.htmlBtn);
html_BtnGroup.forEach(item => item.innerHTML = _example_code_template__WEBPACK_IMPORTED_MODULE_0__.htmlBtnGroup);
style_BtnPrimary.forEach(item => item.innerHTML = _example_code_template__WEBPACK_IMPORTED_MODULE_0__.styleBtnPrimary);
style_BtnLg.forEach(item => item.innerHTML = _example_code_template__WEBPACK_IMPORTED_MODULE_0__.styleBtnLg);

/***/ }),

/***/ "./js/example-code-template.js":
/*!*************************************!*\
  !*** ./js/example-code-template.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "htmlBtn": () => (/* binding */ htmlBtn),
/* harmony export */   "styleBtnPrimary": () => (/* binding */ styleBtnPrimary),
/* harmony export */   "htmlBtnGroup": () => (/* binding */ htmlBtnGroup),
/* harmony export */   "styleBtnLg": () => (/* binding */ styleBtnLg)
/* harmony export */ });
const htmlBtn = `<button class="btn" type="button">Button</button>`;
const styleBtnPrimary = `
.btn {
  display: block;
  color: #fff;
  border-radius: 5px;
  background-color: #0d6efd;
  border: 1px solid #0d6efd;
  padding: 0.5rem 1rem;
  cursor: pointer;
  outline: none;
  transition: all 0.3s;

  &:hover {
    color: #ccc;
  }

  &:focus {
    box-shadow: 0 0 1px 4px rgba(13,110,253,0.29);
  }
}
`;
const htmlBtnGroup = `
<div class="btn-group-wrap">
  <button class="btn btn-lg" type="button">Button</button>
  <button class="btn btn-lg" type="button">Button</button>
</div>
`;
const styleBtnLg = `
.btn-lg {
  width: 100%;
  padding: 1rem;
  font-size: 2rem;

  &:not(:last-of-type) {
    margin-bottom: 1rem;
  }
}
`;

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((module) => {

// Module
var code = "<!doctype html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\"\n        content=\"width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <title>Document</title>\n</head>\n<body>\n\n  <section class=\"container\">\n  <h1>Button</h1>\n  <button class=\"btn\" type=\"button\">Button</button>\n\n  <article class=\"highlight\">\n    <button class=\"highlight__btn\">\n      Example code\n      <span class=\"icon-play3 highlight__btn--icon\"></span>\n    </button>\n\n    <div class=\"highlight__wrap\">\n      <div class=\"highlight__col\">\n        <h2 class=\"highlight__title\">html:</h2>\n        <xmp class=\"html-btn-primary\"></xmp>\n      </div>\n      <div class=\"highlight__col\">\n        <h2 class=\"highlight__title\">css:</h2>\n\n        <xmp class=\"style-btn-primary\"></xmp>\n      </div>\n    </div>\n  </article>\n\n  <section class=\"example-2\">\n    <h1>Button group</h1>\n\n    <div class=\"btn-group-wrap\">\n      <button class=\"btn btn-lg\" type=\"button\">Button</button>\n      <button class=\"btn btn-lg\" type=\"button\">Button</button>\n    </div>\n\n    <article class=\"highlight\">\n      <button class=\"highlight__btn\">\n        Example code\n        <span class=\"icon-play3 highlight__btn--icon\"></span>\n      </button>\n\n      <div class=\"highlight__wrap\">\n        <div class=\"highlight__col\">\n          <h2 class=\"highlight__title\">html:</h2>\n\n          <xmp class=\"html-btn-group\"></xmp>\n        </div>\n        <div class=\"highlight__col\">\n          <h2 class=\"highlight__title\">css:</h2>\n\n          <xmp class=\"style-btn-lg\"></xmp>\n        </div>\n      </div>\n    </article>\n  </section>\n</section>\n</body>\n</html>\n";
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
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common */ "./js/common.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _example_code_display__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./example-code-display */ "./js/example-code-display.js");




})();

/******/ })()
;
//# sourceMappingURL=main.js.map