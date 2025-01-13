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

/***/ "./src/Createtask.js":
/*!***************************!*\
  !*** ./src/Createtask.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Createtask: () => (/* binding */ Createtask)\n/* harmony export */ });\nclass Createtask {\r\n    constructor(taskid, title, description, close_button, is_done){\r\n        this.id = id;\r\n        this.title = title;\r\n        this.description = description;\r\n        this.close_button = close_button;\r\n        this.is_done = is_done;\r\n    };\r\n}\n\n//# sourceURL=webpack://to-do-app/./src/Createtask.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Createtask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Createtask */ \"./src/Createtask.js\");\n\r\n\r\nwindow.onload = function() {\r\n    document.querySelector('.addTask').addEventListener('click', () => {\r\n        const taskContainer = createTask();\r\n        if (taskContainer) { // Faqat `null` bo'lmagan qiymat bilan ishlaydi\r\n            let rightContainer = document.querySelector('.right__container');\r\n            if (rightContainer.children.length > 0 && rightContainer.children[0].classList.contains('empty__list')) {\r\n                rightContainer.children[0].remove();\r\n            }\r\n            addTaskToList(taskContainer);\r\n            clearValueOfInput();\r\n        }\r\n    });\r\n\r\n\r\n    document.addEventListener('click', (event) => {\r\n        if(event.target.className === \"close__btn\"){\r\n            const parent = event.target.parentElement;\r\n            if(parent.parentElement.children.length === 1){\r\n                parent.remove();\r\n                CreateEmptyContainerText();\r\n            }else{\r\n                event.target.parentElement.remove();\r\n            }\r\n        }\r\n    });\r\n}\r\n\r\nconst createTask = () => {\r\n    let titleValue = document.querySelector('.task_title').value;\r\n    let descriptionValue = document.querySelector('.task_description').value;\r\n\r\n    if(titleValue && descriptionValue){\r\n        let close_button = document.createElement('span');\r\n        close_button.className = \"close__btn\";\r\n        let taskId = 0;\r\n        let title = document.createElement('h3');\r\n            title.className = 'title';\r\n            title.innerHTML = titleValue;\r\n\r\n        let description = document.createElement('p');\r\n            description.className = 'description';\r\n            description.innerHTML = descriptionValue;\r\n\r\n        let taskContainer = document.createElement('div');\r\n        taskContainer.className = 'task__container';\r\n        taskContainer.prepend(title, close_button, description);\r\n\r\n        return taskContainer;\r\n    } else {\r\n        alert(`Ma'lumotlar to'ldiring !`);\r\n        return null;\r\n    }\r\n}\r\nconst addTaskToList = (taskContainer) => {\r\n    document.querySelector('.right__container').prepend(taskContainer);\r\n}\r\nconst clearValueOfInput = () => {\r\n    document.querySelector('.task_title').value = \"\";\r\n    document.querySelector('.task_description').value = \"\";\r\n}\r\nconst CreateEmptyContainerText = () => {\r\n    let empty = document.createElement('span');\r\n    empty.className = 'empty__list';\r\n    empty.innerHTML = 'Add some Tasks for yourself';\r\n    let rightContainer = document.querySelector('.right__container');\r\n    console.log(`CreateEmptyContainerText funksiyani ichidan log ${empty}`);\r\n    rightContainer.prepend(empty);\r\n}\r\n\n\n//# sourceURL=webpack://to-do-app/./src/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;