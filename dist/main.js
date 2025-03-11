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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  font-family: \"Open Sans\", sans-serif;\n}\n\n/* Universal Style */\nbutton {\n  background-color: transparent;\n  background-repeat: no-repeat;\n  border: none;\n  cursor: pointer;\n  overflow: hidden;\n  outline: none;\n  width: 100%;\n}\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: beige;\n  padding: 5px 10px;\n}\n\nmain {\n  flex: 1;\n  display: grid;\n  grid-template-columns: 1fr 7fr;\n}\n\n#sidebar {\n  background-color: blue;\n}\n\n.title {\n  background-color: orange;\n  padding: 10px;\n}\n\n.viewProjectContainer {\n  display: grid;\n  grid-template-columns: 3fr 1fr;\n  position: relative;\n}\n\n.viewProjectContainer:hover {\n  background-color: gray;\n}\n\n.navigationBtn,\n.viewProjectBtn {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 20px;\n  cursor: pointer;\n  font-size: 1.2rem;\n}\n\n.navigationBtn:hover,\n.viewProjectBtn:hover {\n  background-color: gray;\n}\n\n#addProjectBtn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 0;\n  width: 100%;\n  font-size: 1.2rem;\n}\n\n#addProjectBtn:hover {\n  background-color: gray;\n}\n\n.showAddProjectInput,\n.showRenameProjectInput {\n  display: grid;\n  grid-template-rows: auto auto;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n  padding: 10px;\n}\n\n#addProjectInput,\n.renameProjectInput {\n  grid-column: span 2;\n  padding: 5px;\n  border: 1px solid black;\n}\n\n#cancelAddProjectBtn,\n.cancelRenameProjectBtn {\n  background-color: #d22b2b;\n}\n\n#confirmAddProjectBtn,\n.confirmRenameProjectBtn {\n  background-color: #228b22;\n}\n\n#cancelAddProjectBtn,\n.cancelRenameProjectBtn,\n#confirmAddProjectBtn,\n.confirmRenameProjectBtn {\n  padding: 5px;\n  border-radius: 10px;\n  border: 1px solid black;\n}\n\n.hideProjectActionContainer {\n  display: none;\n}\n\n.showProjectActionContainer {\n  background-color: aliceblue;\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  left: 240px;\n  bottom: 45px;\n}\n\n.projectActionBtn:hover {\n  background-color: darkgray;\n}\n\n.renameProjectBtn,\n.deleteProjectBtn {\n  padding: 5px 15px;\n  border: 1px solid black;\n}\n\n.renameProjectBtn:hover,\n.deleteProjectBtn:hover {\n  background-color: gray;\n}\n\n#content {\n  background-color: blueviolet;\n  padding: 30px;\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n}\n\n#contentTitle {\n  background-color: aqua;\n  padding: 20px;\n}\n\n#taskSection {\n  font-size: 1.1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.task {\n  background-color: brown;\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border: 1px solid black;\n}\n\n.taskLeft,\n.taskRight {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n}\n\nfooter {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  background-color: aquamarine;\n  padding: 5px 10px;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://doyoursheet/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://doyoursheet/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://doyoursheet/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://doyoursheet/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://doyoursheet/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://doyoursheet/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://doyoursheet/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://doyoursheet/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://doyoursheet/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/assets/add-completed.svg":
/*!**************************************!*\
  !*** ./src/assets/add-completed.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/add-completed.svg\";\n\n//# sourceURL=webpack://doyoursheet/./src/assets/add-completed.svg?");

/***/ }),

/***/ "./src/assets/add-important.svg":
/*!**************************************!*\
  !*** ./src/assets/add-important.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/add-important.svg\";\n\n//# sourceURL=webpack://doyoursheet/./src/assets/add-important.svg?");

/***/ }),

/***/ "./src/assets/add.svg":
/*!****************************!*\
  !*** ./src/assets/add.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/add.svg\";\n\n//# sourceURL=webpack://doyoursheet/./src/assets/add.svg?");

/***/ }),

/***/ "./src/assets/completed.svg":
/*!**********************************!*\
  !*** ./src/assets/completed.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/completed.svg\";\n\n//# sourceURL=webpack://doyoursheet/./src/assets/completed.svg?");

/***/ }),

/***/ "./src/assets/dark.svg":
/*!*****************************!*\
  !*** ./src/assets/dark.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/dark.svg\";\n\n//# sourceURL=webpack://doyoursheet/./src/assets/dark.svg?");

/***/ }),

/***/ "./src/assets/delete-task.svg":
/*!************************************!*\
  !*** ./src/assets/delete-task.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/delete-task.svg\";\n\n//# sourceURL=webpack://doyoursheet/./src/assets/delete-task.svg?");

/***/ }),

/***/ "./src/assets/due.svg":
/*!****************************!*\
  !*** ./src/assets/due.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/due.svg\";\n\n//# sourceURL=webpack://doyoursheet/./src/assets/due.svg?");

/***/ }),

/***/ "./src/assets/edit-task.svg":
/*!**********************************!*\
  !*** ./src/assets/edit-task.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/edit-task.svg\";\n\n//# sourceURL=webpack://doyoursheet/./src/assets/edit-task.svg?");

/***/ }),

/***/ "./src/assets/gitHub.svg":
/*!*******************************!*\
  !*** ./src/assets/gitHub.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/gitHub.svg\";\n\n//# sourceURL=webpack://doyoursheet/./src/assets/gitHub.svg?");

/***/ }),

/***/ "./src/assets/important.svg":
/*!**********************************!*\
  !*** ./src/assets/important.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/important.svg\";\n\n//# sourceURL=webpack://doyoursheet/./src/assets/important.svg?");

/***/ }),

/***/ "./src/assets/menu.svg":
/*!*****************************!*\
  !*** ./src/assets/menu.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/menu.svg\";\n\n//# sourceURL=webpack://doyoursheet/./src/assets/menu.svg?");

/***/ }),

/***/ "./src/assets/project-action.svg":
/*!***************************************!*\
  !*** ./src/assets/project-action.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/project-action.svg\";\n\n//# sourceURL=webpack://doyoursheet/./src/assets/project-action.svg?");

/***/ }),

/***/ "./src/assets/project.svg":
/*!********************************!*\
  !*** ./src/assets/project.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/project.svg\";\n\n//# sourceURL=webpack://doyoursheet/./src/assets/project.svg?");

/***/ }),

/***/ "./src/assets/task.svg":
/*!*****************************!*\
  !*** ./src/assets/task.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/task.svg\";\n\n//# sourceURL=webpack://doyoursheet/./src/assets/task.svg?");

/***/ }),

/***/ "./src/assets/view-task.svg":
/*!**********************************!*\
  !*** ./src/assets/view-task.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/view-task.svg\";\n\n//# sourceURL=webpack://doyoursheet/./src/assets/view-task.svg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Projects.js */ \"./src/modules/Projects.js\");\n/* harmony import */ var _modules_Tasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Tasks.js */ \"./src/modules/Tasks.js\");\n/* harmony import */ var _modules_UI_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/UI.js */ \"./src/modules/UI.js\");\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const ui = new _modules_UI_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n  ui.loadLandingPage();\n  if (!localStorage.getItem(\"projects\")) {\n    console.log(\"Constructing new local storage project...\");\n    _modules_Projects_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].construct();\n  }\n\n  if (!localStorage.getItem(\"tasks\")) {\n    console.log(\"Constructing new local storage task...\");\n    _modules_Tasks_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].construct();\n  }\n});\n\n\n//# sourceURL=webpack://doyoursheet/./src/index.js?");

/***/ }),

/***/ "./src/modules/Project.js":
/*!********************************!*\
  !*** ./src/modules/Project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Projects */ \"./src/modules/Projects.js\");\n\n\nclass Project {\n  constructor(id, name) {\n    this.id = id;\n    this.name = name;\n  }\n\n  getId() {\n    return this.id;\n  }\n\n  getName() {\n    return this.name;\n  }\n\n  setName(name) {\n    this.name = name;\n  }\n}\n\n\n//# sourceURL=webpack://doyoursheet/./src/modules/Project.js?");

/***/ }),

/***/ "./src/modules/Projects.js":
/*!*********************************!*\
  !*** ./src/modules/Projects.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Projects)\n/* harmony export */ });\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ \"./src/modules/Project.js\");\n\n\nclass Projects {\n  static #array = [];\n\n  static construct() {\n    localStorage.setItem(\"projects\", JSON.stringify(Projects.#array));\n  }\n\n  static add(project) {\n    Projects.#array = JSON.parse(localStorage.getItem(\"projects\"));\n    Projects.#array.push(project);\n    localStorage.setItem(\"projects\", JSON.stringify(Projects.#array));\n  }\n\n  static rename(id, name) {\n    Projects.#array = JSON.parse(localStorage.getItem(\"projects\"));\n    console.log(Projects.#array);\n    // When localStorage stores the objects, they lose their methods and private fields.\n    // Only public fields are persistant.\n    // Hence, we have to convert the objects back to Project instances.\n    Projects.#array = Projects.#array.map(\n      (object) => new _Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](object.id, object.name)\n    );\n    console.log(Projects.#array);\n    id = Number(id);\n    const project = Projects.#array.find((p) => p.getId() === id);\n    project.setName(name);\n    localStorage.setItem(\"projects\", JSON.stringify(Projects.#array));\n  }\n\n  static remove(id) {\n    Projects.#array = JSON.parse(localStorage.getItem(\"projects\"));\n\n    // When localStorage stores the objects, they lose their methods and private fields.\n    // Only public fields are persistant.\n    // Hence, we have to convert the objects back to Project instances.\n    Projects.#array = Projects.#array.map(\n      (object) => new _Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](object.id, object.name)\n    );\n\n    id = Number(id);\n    const project = Projects.#array.find((p) => p.getId() === id);\n    const index = Projects.#array.indexOf(project);\n\n    Projects.#array.splice(index, 1);\n    for (let newId = 1; newId <= Projects.#array.length; newId++) {\n      Projects.#array[newId - 1].id = newId;\n    }\n    localStorage.setItem(\"projects\", JSON.stringify(Projects.#array));\n  }\n\n  static getAll() {\n    Projects.#array = JSON.parse(localStorage.getItem(\"projects\"));\n    return Projects.#array;\n  }\n\n  static size() {\n    Projects.#array = JSON.parse(localStorage.getItem(\"projects\"));\n    return Projects.#array.length;\n  }\n}\n\n\n//# sourceURL=webpack://doyoursheet/./src/modules/Projects.js?");

/***/ }),

/***/ "./src/modules/Tasks.js":
/*!******************************!*\
  !*** ./src/modules/Tasks.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tasks)\n/* harmony export */ });\n// This class contains all tasks\nclass Tasks {\n  // Containing all tasks\n  static #array = [];\n\n  static construct() {\n    localStorage.setItem(\"tasks\", JSON.stringify(Tasks.#array));\n  }\n\n  // In the new task form,\n  // Users can fill in the task:\n  // name, due date and description\n  static add(task) {\n    Tasks.#array = JSON.parse(localStorage.getItem(\"tasks\"));\n    Tasks.#array.push(task);\n    localStorage.setItem(\"tasks\", JSON.stringify(Tasks.#array));\n  }\n\n  // Only the task's name, due date, important status,\n  // completed status can be edited\n  static rename(id, name) {\n    id = Number(id);\n  }\n\n  // Delete a task\n  static remove(id) {\n    id = Number(id);\n  }\n\n  // Get single task\n  // For viewing each task\n  static get(id) {\n    id = Number(id);\n  }\n\n  // Get all tasks\n  static getAll() {\n    Tasks.#array = JSON.parse(localStorage.getItem(\"tasks\"));\n    return Tasks.#array;\n  }\n\n  // Size of tasks array\n  static size() {\n    Tasks.#array = JSON.parse(localStorage.getItem(\"tasks\"));\n    return Tasks.#array.length;\n  }\n\n  static updateDueDate(id, dueDate) {\n    id = Number(id);\n  }\n\n  static updateImportant(id, important) {\n    id = Number(id);\n  }\n\n  static updateCompleted(id, completed) {\n    id = Number(id);\n  }\n}\n\n\n//# sourceURL=webpack://doyoursheet/./src/modules/Tasks.js?");

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles.css */ \"./src/styles.css\");\n/* harmony import */ var _assets_menu_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/menu.svg */ \"./src/assets/menu.svg\");\n/* harmony import */ var _assets_dark_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/dark.svg */ \"./src/assets/dark.svg\");\n/* harmony import */ var _assets_task_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/task.svg */ \"./src/assets/task.svg\");\n/* harmony import */ var _assets_due_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/due.svg */ \"./src/assets/due.svg\");\n/* harmony import */ var _assets_important_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/important.svg */ \"./src/assets/important.svg\");\n/* harmony import */ var _assets_completed_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/completed.svg */ \"./src/assets/completed.svg\");\n/* harmony import */ var _assets_gitHub_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/gitHub.svg */ \"./src/assets/gitHub.svg\");\n/* harmony import */ var _assets_project_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/project.svg */ \"./src/assets/project.svg\");\n/* harmony import */ var _assets_add_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/add.svg */ \"./src/assets/add.svg\");\n/* harmony import */ var _assets_add_completed_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/add-completed.svg */ \"./src/assets/add-completed.svg\");\n/* harmony import */ var _assets_add_important_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/add-important.svg */ \"./src/assets/add-important.svg\");\n/* harmony import */ var _assets_edit_task_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/edit-task.svg */ \"./src/assets/edit-task.svg\");\n/* harmony import */ var _assets_delete_task_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/delete-task.svg */ \"./src/assets/delete-task.svg\");\n/* harmony import */ var _assets_view_task_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../assets/view-task.svg */ \"./src/assets/view-task.svg\");\n/* harmony import */ var _assets_project_action_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../assets/project-action.svg */ \"./src/assets/project-action.svg\");\n/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Projects */ \"./src/modules/Projects.js\");\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Project */ \"./src/modules/Project.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst homeSectionImg = [_assets_task_svg__WEBPACK_IMPORTED_MODULE_3__, _assets_due_svg__WEBPACK_IMPORTED_MODULE_4__, _assets_important_svg__WEBPACK_IMPORTED_MODULE_5__, _assets_completed_svg__WEBPACK_IMPORTED_MODULE_6__];\n\nclass UI {\n  loadLandingPage() {\n    this.loadTemplate();\n    this.loadHeader();\n    this.loadMain();\n    this.loadFooter();\n    // this.loadSidebar();\n    // this.loadContent();\n    // this.loadFooter();\n  }\n\n  loadTemplate() {\n    const header = document.createElement(\"header\");\n    const main = document.createElement(\"main\");\n    const footer = document.createElement(\"footer\");\n    document.body.appendChild(header);\n    document.body.appendChild(main);\n    document.body.appendChild(footer);\n  }\n\n  loadHeader() {\n    const header = document.querySelector(\"header\");\n\n    // Menu Button\n    const menuBtn = document.createElement(\"img\");\n    menuBtn.id = \"menuBtn\";\n    menuBtn.src = _assets_menu_svg__WEBPACK_IMPORTED_MODULE_1__;\n    menuBtn.height = \"32\";\n    menuBtn.width = \"32\";\n\n    // Logo Header\n    const h1 = document.createElement(\"h1\");\n    h1.textContent = \"DoYourSheet\";\n\n    // Appearance Button\n    const appearanceBtn = document.createElement(\"div\");\n    appearanceBtn.id = \"appearanceBtn\";\n    const object = document.createElement(\"object\");\n    object.type = \"image/svg+xml\";\n    object.data = _assets_dark_svg__WEBPACK_IMPORTED_MODULE_2__;\n    object.height = \"32\";\n    object.width = \"32\";\n    appearanceBtn.appendChild(object);\n\n    header.append(menuBtn, h1, appearanceBtn);\n  }\n\n  loadMain() {\n    const main = document.querySelector(\"main\");\n\n    const sidebar = document.createElement(\"aside\");\n    sidebar.id = \"sidebar\";\n\n    const content = document.createElement(\"div\");\n    content.id = \"content\";\n\n    main.append(sidebar, content);\n\n    this.loadSidebar();\n    this.loadContent();\n  }\n\n  loadSidebar() {\n    const sidebar = document.querySelector(\"#sidebar\");\n\n    const homeSection = document.createElement(\"section\");\n    homeSection.id = \"homeSection\";\n\n    const projectSection = document.createElement(\"section\");\n    projectSection.id = \"projectSection\";\n\n    sidebar.append(homeSection, projectSection);\n\n    this.loadHomeSection();\n    this.loadProjectSection();\n  }\n\n  loadHomeSection() {\n    const homeSection = document.querySelector(\"#homeSection\");\n\n    const h2 = document.createElement(\"h2\");\n    h2.textContent = \"Home\";\n    h2.className = \"title\";\n\n    const ul = document.createElement(\"ul\");\n\n    // The event listener should be on li element\n    for (let i = 0; i < homeSectionImg.length; i++) {\n      const li = document.createElement(\"li\");\n      const buttonImg = document.createElement(\"img\");\n      buttonImg.src = homeSectionImg[i];\n      buttonImg.height = \"24\";\n      buttonImg.width = \"24\";\n      const button = document.createElement(\"button\");\n      button.className = \"navigationBtn\";\n      const p = document.createElement(\"p\");\n      if (i == 0) {\n        button.id = \"allTaskBtn\";\n        p.textContent = \"All Tasks\";\n      } else if (i == 1) {\n        button.id = \"dueSoonBtn\";\n        p.textContent = \"Due Soon\";\n      } else if (i == 2) {\n        button.id = \"importantBtn\";\n        p.textContent = \"Important\";\n      } else {\n        button.id = \"completedBtn\";\n        p.textContent = \"Completed\";\n      }\n      button.append(buttonImg, p);\n      li.appendChild(button);\n      ul.appendChild(li);\n    }\n\n    homeSection.append(h2, ul);\n  }\n\n  loadProjectSection() {\n    const projectSection = document.querySelector(\"#projectSection\");\n    this.clearChildren(projectSection);\n    const h2 = document.createElement(\"h2\");\n    h2.className = \"title\";\n    h2.textContent = \"Projects\";\n\n    const projects = _Projects__WEBPACK_IMPORTED_MODULE_16__[\"default\"].getAll();\n\n    const projectSectionContainer = document.createElement(\"ul\");\n    projectSectionContainer.id = \"projectSectionContainer\";\n\n    projectSection.append(h2, projectSectionContainer);\n\n    this.loadAllProjects(projects);\n\n    const addProjectContainer = document.createElement(\"li\");\n    addProjectContainer.id = \"addProjectContainer\";\n    projectSectionContainer.appendChild(addProjectContainer);\n\n    this.loadAddProjectBtn();\n  }\n\n  loadAllProjects(projects) {\n    const projectSectionContainer = document.querySelector(\n      \"#projectSectionContainer\"\n    );\n    projects.forEach((project) => {\n      const viewProjectContainer = document.createElement(\"li\");\n      viewProjectContainer.id = project.id;\n      viewProjectContainer.className = \"viewProjectContainer\";\n      viewProjectContainer.classList.add(`project-${project.id}`);\n\n      // Project Action Button contains rename and delete button\n      // For now just a mockup, will create a load function later on\n      //   const projectActionContainer = document.createElement(\"div\");\n      //   projectActionContainer.id = \"projectActionContainer\";\n      //   const renameProjectBtn = document.createElement(\"button\");\n      //   renameProjectBtn.textContent = \"Rename\";\n      //   renameProjectBtn.className = \"renameProjectBtn\";\n      //   const deleteProjectBtn = document.createElement(\"button\");\n      //   deleteProjectBtn.textContent = \"Delete\";\n      //   deleteProjectBtn.className = \"deleteProjectBtn\";\n      //   projectActionContainer.append(renameProjectBtn, deleteProjectBtn);\n      //   viewProjectContainer.appendChild(projectActionContainer);\n\n      projectSectionContainer.appendChild(viewProjectContainer);\n      this.loadViewProjectBtn(project.id, project);\n      this.loadProjectActionBtn(project.id);\n      this.loadProjectActionContainer(project.id);\n    });\n\n    this.projectActionBtnEvent();\n    this.deleteProjectBtnEvent();\n    this.renameProjectBtnEvent();\n  }\n\n  loadViewProjectBtn(id, project) {\n    const viewProjectContainer = document.querySelector(\n      `.viewProjectContainer.project-${id}`\n    );\n    const viewProjectBtn = document.createElement(\"button\");\n    viewProjectBtn.className = \"viewProjectBtn\";\n    const viewProjectImg = document.createElement(\"img\");\n    viewProjectImg.src = _assets_project_svg__WEBPACK_IMPORTED_MODULE_8__;\n    viewProjectImg.height = \"24\";\n    viewProjectImg.width = \"24\";\n    const viewProjectText = document.createElement(\"p\");\n    viewProjectText.textContent = project.name;\n    viewProjectBtn.append(viewProjectImg, viewProjectText);\n    viewProjectContainer.appendChild(viewProjectBtn);\n  }\n\n  loadProjectActionBtn(id) {\n    const viewProjectContainer = document.querySelector(\n      `.viewProjectContainer.project-${id}`\n    );\n    const projectActionBtn = document.createElement(\"button\");\n    projectActionBtn.className = \"projectActionBtn\";\n    const projectActionImg = document.createElement(\"img\");\n    projectActionImg.src = _assets_project_action_svg__WEBPACK_IMPORTED_MODULE_15__;\n    projectActionImg.height = \"24\";\n    projectActionImg.width = \"24\";\n    // Add project action container which has rename and delete buttons\n    // Make sure only one container can show up at a time.\n    projectActionBtn.appendChild(projectActionImg);\n    viewProjectContainer.appendChild(projectActionBtn);\n  }\n\n  loadProjectActionContainer(id) {\n    const viewProjectContainer = document.querySelector(\n      `.viewProjectContainer.project-${id}`\n    );\n    const projectActionContainer = document.createElement(\"div\");\n    projectActionContainer.className = \"projectActionContainer\";\n    projectActionContainer.classList.add(`project-${id}`);\n\n    const renameProjectBtn = document.createElement(\"button\");\n    renameProjectBtn.textContent = \"Rename\";\n    renameProjectBtn.className = \"renameProjectBtn\";\n    const deleteProjectBtn = document.createElement(\"button\");\n    deleteProjectBtn.textContent = \"Delete\";\n    deleteProjectBtn.className = \"deleteProjectBtn\";\n    projectActionContainer.append(renameProjectBtn, deleteProjectBtn);\n    projectActionContainer.classList.add(\"hideProjectActionContainer\"); // Display when showProjectActionContaienr class has been added\n    viewProjectContainer.appendChild(projectActionContainer);\n  }\n\n  projectActionBtnEvent() {\n    const allProjectActionBtn = document.querySelectorAll(\".projectActionBtn\");\n\n    allProjectActionBtn.forEach((projectActionBtn) => {\n      projectActionBtn.addEventListener(\"click\", (e) => {\n        // Get the clicked button (whether it's an image or button)\n        const clickedButton = e.target.closest(\".projectActionBtn\");\n        const viewProjectContainer = clickedButton.closest(\n          \".viewProjectContainer\"\n        );\n        const projectActionContainer = viewProjectContainer.querySelector(\n          \".projectActionContainer\"\n        );\n\n        // Hide all other action containers before toggling the clicked one\n        document\n          .querySelectorAll(\".showProjectActionContainer\")\n          .forEach((container) => {\n            if (container !== projectActionContainer) {\n              container.classList.remove(\"showProjectActionContainer\");\n              container.classList.add(\"hideProjectActionContainer\");\n            }\n          });\n\n        // Toggle the clicked one\n        if (\n          projectActionContainer.classList.contains(\n            \"hideProjectActionContainer\"\n          )\n        ) {\n          projectActionContainer.classList.remove(\"hideProjectActionContainer\");\n          projectActionContainer.classList.add(\"showProjectActionContainer\");\n        } else {\n          projectActionContainer.classList.remove(\"showProjectActionContainer\");\n          projectActionContainer.classList.add(\"hideProjectActionContainer\");\n        }\n      });\n    });\n  }\n\n  deleteProjectBtnEvent() {\n    const allDeleteProjectBtn = document.querySelectorAll(\".deleteProjectBtn\");\n    allDeleteProjectBtn.forEach((deleteProjectBtn) => {\n      deleteProjectBtn.addEventListener(\"click\", (e) => {\n        const viewProjectContainer = e.target.closest(\".viewProjectContainer\");\n        const id = viewProjectContainer.id;\n        _Projects__WEBPACK_IMPORTED_MODULE_16__[\"default\"].remove(id);\n        this.loadProjectSection();\n      });\n    });\n  }\n\n  renameProjectBtnEvent() {\n    const allRenameProjectBtn = document.querySelectorAll(\".renameProjectBtn\");\n    allRenameProjectBtn.forEach((renameProjectBtn) => {\n      renameProjectBtn.addEventListener(\"click\", (e) => {\n        const viewProjectContainer = e.target.closest(\".viewProjectContainer\");\n        const id = viewProjectContainer.id;\n        console.log(id);\n        this.loadRenameProjectInput(viewProjectContainer);\n\n        const cancelRenameProjectBtn = viewProjectContainer.querySelector(\n          \".cancelRenameProjectBtn\"\n        );\n        const confirmRenameProjectBtn = viewProjectContainer.querySelector(\n          \".confirmRenameProjectBtn\"\n        );\n\n        const renameProjectInput = viewProjectContainer.querySelector(\n          \".renameProjectInput\"\n        );\n        cancelRenameProjectBtn.addEventListener(\"click\", () => {\n          viewProjectContainer.classList.remove(\"showRenameProjectInput\");\n          this.loadProjectSection();\n        });\n\n        confirmRenameProjectBtn.addEventListener(\"click\", () => {\n          if (!this.validateInput(renameProjectInput.value)) {\n            alert(\"Project Name Can't Be Empty, Please Name It\");\n            renameProjectInput.focus();\n          } else {\n            _Projects__WEBPACK_IMPORTED_MODULE_16__[\"default\"].rename(id, renameProjectInput.value);\n            console.log(\"Rename Successfully!\");\n            this.loadProjectSection();\n          }\n        });\n      });\n    });\n  }\n\n  loadRenameProjectInput(viewProjectContainer) {\n    this.clearChildren(viewProjectContainer);\n    viewProjectContainer.classList.add(\"showRenameProjectInput\");\n\n    const renameProjectInput = document.createElement(\"input\");\n    renameProjectInput.setAttribute(\"required\", \"true\");\n    renameProjectInput.className = \"renameProjectInput\";\n    renameProjectInput.type = \"text\";\n    renameProjectInput.focus();\n    // When the cancel button is clicked,\n    // remove the showAddProjectInput class from the container\n    const cancelRenameProjectBtn = document.createElement(\"button\");\n    cancelRenameProjectBtn.className = \"cancelRenameProjectBtn\";\n    cancelRenameProjectBtn.textContent = \"Cancel\";\n    const confirmRenameProjectBtn = document.createElement(\"button\");\n    confirmRenameProjectBtn.className = \"confirmRenameProjectBtn\";\n    confirmRenameProjectBtn.textContent = \"Confirm\";\n    viewProjectContainer.append(\n      renameProjectInput,\n      cancelRenameProjectBtn,\n      confirmRenameProjectBtn\n    );\n  }\n\n  loadAddProjectBtn() {\n    // Display the add project button after displaying all the projects\n    const addProjectContainer = document.querySelector(\"#addProjectContainer\");\n    this.clearChildren(addProjectContainer);\n    const addProjectBtn = document.createElement(\"button\");\n    addProjectBtn.id = \"addProjectBtn\";\n    const addProjectImg = document.createElement(\"img\");\n    addProjectImg.src = _assets_add_svg__WEBPACK_IMPORTED_MODULE_9__;\n    addProjectImg.height = \"24\";\n    addProjectImg.width = \"24\";\n    const addProjectText = document.createElement(\"p\");\n    addProjectText.textContent = \"Add New Project\";\n    addProjectBtn.append(addProjectImg, addProjectText);\n    addProjectContainer.appendChild(addProjectBtn);\n\n    this.addProjectBtnEvent();\n  }\n\n  loadAddProjectInput() {\n    const addProjectContainer = document.querySelector(\"#addProjectContainer\");\n    this.clearChildren(addProjectContainer);\n    addProjectContainer.classList.add(\"showAddProjectInput\");\n    const addProjectInput = document.createElement(\"input\");\n    addProjectInput.setAttribute(\"required\", \"true\");\n    addProjectInput.id = \"addProjectInput\";\n    addProjectInput.type = \"text\";\n    addProjectInput.focus();\n    // When the cancel button is clicked,\n    // remove the showAddProjectInput class from the container\n    const cancelAddProjectBtn = document.createElement(\"button\");\n    cancelAddProjectBtn.id = \"cancelAddProjectBtn\";\n    cancelAddProjectBtn.textContent = \"Cancel\";\n    const confirmAddProjectBtn = document.createElement(\"button\");\n    confirmAddProjectBtn.id = \"confirmAddProjectBtn\";\n    confirmAddProjectBtn.textContent = \"Confirm\";\n    addProjectContainer.append(\n      addProjectInput,\n      cancelAddProjectBtn,\n      confirmAddProjectBtn\n    );\n  }\n\n  addProjectBtnEvent() {\n    const addProjectContainer = document.querySelector(\"#addProjectContainer\");\n    const addProjectBtn = document.querySelector(\"#addProjectBtn\");\n    addProjectBtn.addEventListener(\"click\", () => {\n      this.loadAddProjectInput();\n      const cancelAddProjectBtn = document.querySelector(\n        \"#cancelAddProjectBtn\"\n      );\n      const confirmAddProjectBtn = document.querySelector(\n        \"#confirmAddProjectBtn\"\n      );\n      const addProjectInput = document.querySelector(\"#addProjectInput\");\n      cancelAddProjectBtn.addEventListener(\"click\", () => {\n        addProjectContainer.classList.remove(\"showAddProjectInput\");\n        this.loadAddProjectBtn();\n      });\n\n      confirmAddProjectBtn.addEventListener(\"click\", () => {\n        if (!this.validateInput(addProjectInput.value)) {\n          alert(\"Project Name Can't Be Empty, Please Name It\");\n          addProjectInput.focus();\n        } else {\n          const project = new _Project__WEBPACK_IMPORTED_MODULE_17__[\"default\"](\n            _Projects__WEBPACK_IMPORTED_MODULE_16__[\"default\"].size() + 1,\n            addProjectInput.value\n          );\n          alert(`Project ${project.name} has been added`);\n          _Projects__WEBPACK_IMPORTED_MODULE_16__[\"default\"].add(project);\n          this.loadProjectSection();\n        }\n      });\n    });\n  }\n\n  clearChildren(element) {\n    while (element.firstChild) {\n      element.removeChild(element.firstChild);\n    }\n  }\n\n  validateInput(value) {\n    if (value == null || value.trim() === \"\") {\n      return false;\n    }\n    return true;\n  }\n\n  loadContent() {\n    const content = document.querySelector(\"#content\");\n    const h1 = document.createElement(\"h1\");\n    h1.id = \"contentTitle\";\n    const taskSection = document.createElement(\"section\");\n    taskSection.id = \"taskSection\";\n    content.append(h1, taskSection);\n\n    // Add event delegation to navigationBtn\n    this.loadAllTasks();\n  }\n\n  loadAllTasks() {\n    const contentTitle = document.querySelector(\"#contentTitle\");\n    contentTitle.textContent = \"All Tasks\";\n    const taskSection = document.querySelector(\"#taskSection\");\n\n    for (let i = 0; i < 2; i++) {\n      // Display all the tasks\n      // This is just a mockup\n      const taskMockUp = document.createElement(\"div\");\n      taskMockUp.className = \"task\";\n      const left = document.createElement(\"div\");\n      left.className = \"taskLeft\";\n      const addCompletedBtn = document.createElement(\"img\");\n      addCompletedBtn.src = _assets_add_completed_svg__WEBPACK_IMPORTED_MODULE_10__;\n      addCompletedBtn.width = \"24\";\n      addCompletedBtn.height = \"24\";\n      const taskTitle = document.createElement(\"p\");\n      taskTitle.textContent = \"Learn React\";\n      left.append(addCompletedBtn, taskTitle);\n\n      const right = document.createElement(\"div\");\n      right.className = \"taskRight\";\n      const addImportantBtn = document.createElement(\"img\");\n      addImportantBtn.src = _assets_add_important_svg__WEBPACK_IMPORTED_MODULE_11__;\n      addImportantBtn.width = \"24\";\n      addImportantBtn.height = \"24\";\n      const viewTaskBtn = document.createElement(\"img\");\n      viewTaskBtn.src = _assets_view_task_svg__WEBPACK_IMPORTED_MODULE_14__;\n      viewTaskBtn.width = \"24\";\n      viewTaskBtn.height = \"24\";\n      const editTaskBtn = document.createElement(\"img\");\n      editTaskBtn.src = _assets_edit_task_svg__WEBPACK_IMPORTED_MODULE_12__;\n      editTaskBtn.width = \"24\";\n      editTaskBtn.height = \"24\";\n      const deleteTaskBtn = document.createElement(\"img\");\n      deleteTaskBtn.src = _assets_delete_task_svg__WEBPACK_IMPORTED_MODULE_13__;\n      deleteTaskBtn.width = \"24\";\n      deleteTaskBtn.height = \"24\";\n      right.append(addImportantBtn, viewTaskBtn, editTaskBtn, deleteTaskBtn);\n      taskMockUp.append(left, right);\n      taskSection.append(taskMockUp);\n    }\n\n    // const task2MockUp = document.createElement(\"div\");\n    // taskMockUp.className = \"task\";\n    // task2MockUp.append(left, right);\n  }\n\n  loadDueSoon() {}\n\n  loadImportant() {}\n\n  loadCompleted() {}\n\n  loadFooter() {\n    const footer = document.querySelector(\"footer\");\n\n    const line1 = document.createElement(\"span\");\n    line1.textContent = \"|\";\n\n    const line2 = document.createElement(\"span\");\n    line2.textContent = \"|\";\n\n    const icons = document.createElement(\"span\");\n    icons.textContent = \"Icons by \";\n    icons.innerHTML += `<a href=\"https://www.svgrepo.com/\">SVG Repo</a>`;\n\n    const gitHub = document.createElement(\"img\");\n    gitHub.src = _assets_gitHub_svg__WEBPACK_IMPORTED_MODULE_7__;\n    gitHub.height = \"16\";\n    gitHub.width = \"16\";\n\n    const owner = document.createElement(\"p\");\n    owner.textContent = \"Choun Chan Nirak\";\n\n    footer.append(icons, line1, gitHub, line2, owner);\n  }\n}\n\n\n//# sourceURL=webpack://doyoursheet/./src/modules/UI.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://doyoursheet/./src/styles.css?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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