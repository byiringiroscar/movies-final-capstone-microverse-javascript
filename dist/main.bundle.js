"use strict";
(self["webpackChunkmovies_final_capstone_microverse_javascript"] = self["webpackChunkmovies_final_capstone_microverse_javascript"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./pattern_bg.png */ "./src/pattern_bg.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Poppins:wght@100;300;400;500;600;700;800;900&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\nbody{\r\n  background-color: #111111;\r\n  height: 100%;\r\n  position: relative;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-repeat: repeat;\r\n}\r\nheader {\r\n  height: 65px; \r\n  background-color: #000; \r\n  margin-bottom: 25px; \r\n  top: 0;\r\n  z-index: 99;\r\n  width: 100%;\r\n}\r\n\r\n.navbar {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding-left: 100px;\r\n  padding-right: 100px;\r\n}\r\n\r\n#logo{\r\n  height: 55px;\r\n  width: 100px;\r\n  display: flex;\r\n}\r\n.logo{\r\n  display: flex;\r\n  gap: 2px;\r\n}\r\n.logo-title{\r\n  color: white;\r\n  font-family: 'Poppins', sans-serif;\r\n  font-family: 700;\r\n  cursor: pointer;\r\n  user-select: none;\r\n}\r\n.logo-title span{\r\n  color: #FFE400;\r\n  font-family: 'Dancing Script', cursive;\r\n  font-weight: 700;\r\n  font-size: 35px;\r\n}\r\n\r\nheader .navbar .logo .logo-link {\r\n  text-decoration: none;\r\n  height: 100%;\r\n}\r\n\r\nheader .navbar .nav-list {\r\n  list-style: none;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n  width: 500px;\r\n  height: auto;\r\n}\r\n\r\n.nav-item-link{\r\n  font-size: 16px;\r\n  padding-top: 50px;\r\n  cursor: pointer;\r\n  color: white;\r\n  font-family: 'Poppins', sans-serif;\r\n  font-weight: 700;\r\n  text-decoration: none;\r\n  position: relative;\r\n  transition: 0.3;\r\n  user-select: none;\r\n  \r\n}\r\n.nav-item-link:hover{\r\n  color: #FFE400;\r\n}\r\n.nav-item-link::before{\r\n  content: \"\";\r\n  position: absolute;\r\n  bottom: 0;\r\n  height: 2px;\r\n  background-color: #FFE400;\r\n  width: 0;\r\n  transition: width 0.3s ease-in-out;\r\n\r\n}\r\n.nav-item-link:hover::before {\r\n  width: 100%;\r\n  \r\n}\r\n\r\n.search input {\r\n  padding: 10px;\r\n  border-radius: 8px;\r\n  background-color: #111111;\r\n  font-family: 'Poppins', sans-serif;\r\n  font-weight: 500;\r\n  border: 2px solid #111111;\r\n  color: white;\r\n}\r\n.search input::placeholder{\r\n  color: white;\r\n}\r\n\r\nheader .container .navbar .search input:focus-visible {\r\n  border: 1px solid #FFE400;\r\n  outline: 1px solid #FFE400;;\r\n}\r\n/* main style start */\r\n\r\nmain{\r\n  width: 100%;\r\n  height: auto;\r\n  padding: 100px 0;\r\n}\r\n.movie-container{\r\n  height: 100%;\r\n  width: 100%;\r\n  padding: 30px;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 10px;\r\n  justify-content: center;\r\n}\r\n.card{\r\n  height: 400px;\r\n  width: 220px;\r\n  background-color: white;\r\n  cursor: pointer;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  border-radius: 5px;\r\n  transition: 0.3s;\r\n  \r\n}\r\n.card:hover{\r\n  box-shadow: rgba(250, 253, 47, 0.35) 5px 20px 30px;\r\n  \r\n}\r\n#play{\r\n  height: 40px;\r\n  width: 40px;\r\n  position: absolute;\r\n  top: 50%; \r\n  left: 50%; \r\n  transform: translate(-50%, -50%);\r\n  display: none;\r\n}\r\n\r\n.card-image-container{\r\n  height: 70%;\r\n  width: 100%;\r\n  position: relative;\r\n}\r\n\r\n.card-image{\r\n  height: 100%;\r\n  width: 100%;\r\n  background-size: 100% 100%;\r\n  background-position: center;\r\n  border-top-right-radius: 5px;\r\n  border-top-left-radius: 5px;\r\n  transition: 0.3;\r\n}\r\n.card-image-container:hover #play{\r\n  display: block;\r\n}\r\n.card-image:hover{\r\n  opacity: 0.4;\r\n}\r\n\r\n.card-content{\r\n  height: 20%;\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 0 3px;\r\n  background-color: #111111;\r\n  border: 0.1px solid #2b2a27;\r\n}\r\n.card-button{\r\n  height: 10%;\r\n  width: 100%;\r\n  background-color: #FFE400;\r\n  border: none;\r\n  outline: none;\r\n  font-family: 'Poppins', sans-serif;\r\n  font-weight: 500;\r\n  color: black;\r\n  cursor: pointer;\r\n  font-size: 17px;\r\n  border-bottom-right-radius: 5px;\r\n  border-bottom-left-radius: 5px;\r\n}\r\n.card-button:hover{\r\n  color: black;\r\n  background-color: white;\r\n  border: 0.4px solid #FFE400;\r\n  \r\n}\r\n.movie-title{\r\n  font-family: 'Poppins', sans-serif;\r\n  font-weight: 500;\r\n  transition: 0.3s;\r\n  color: white;\r\n  width: 50%;\r\n}\r\n.movie-title:hover{\r\n  color: #FFE400;\r\n}\r\n.like-stat{\r\n  font-family: 'Poppins', sans-serif;\r\n  font-weight: 500;\r\n  transition: 0.3s;\r\n  color: white;\r\n}\r\n.like-stat:hover{\r\n  color: #FFE400;\r\n}\r\n.heart-btn {\r\n  background-color: white;\r\n  border: none;\r\n  cursor: pointer;\r\n  padding: 7px;\r\n  border-radius: 50%;\r\n  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);\r\n  transition: background-color 0.3s ease-in-out;\r\n}\r\n\r\n.heart-btn:hover {\r\n  background-color: #FFE400;\r\n}\r\n\r\n.fa-heart {\r\n  color: red;\r\n}\r\n\r\n/* Popup */\r\n.popUp {\r\n  display: none;\r\n}\r\n\r\n.popup-blur {\r\n  position: fixed;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 15;\r\n  padding: 1rem 1rem;\r\n  overflow-y: auto;\r\n  color: #fff;\r\n  opacity: 1;\r\n  background-color: rgba(0, 0, 0, 0.93);\r\n}\r\n\r\n.popup-countainer {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 0 5%;\r\n  gap: 15px;\r\n  background: #22323d;\r\n}\r\n\r\n.img-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.comment-img {\r\n  margin: 1% 0;\r\n  height: 300px;\r\n}\r\n\r\n.fa-close {\r\n  font-size: 30px;\r\n  align-self: flex-end;\r\n  margin: 5px 20px 0 0;\r\n}\r\n\r\n.detail {\r\n  margin: 2px 0;\r\n  gap: 2px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.summary {\r\n  padding: 0 3%;\r\n  text-align: justify;\r\n}\r\n\r\n.comment-section {\r\n  display: flex;\r\n  width: 50%;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 5px;\r\n}\r\n\r\n.form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  width: 90%;\r\n  margin: 2%;\r\n}\r\n\r\n#submit {\r\n  width: 100%;\r\n  margin-bottom: 10px;\r\n}\r\n\r\ninput {\r\n  color: #1e2c36;\r\n  font-size: large;\r\n  padding: 1%;\r\n}\r\n\r\ntextarea {\r\n  color: #1e2c36;\r\n  font-size: large;\r\n  padding: 1%;\r\n}\r\n/* end popup */\r\n\r\n\r\n/* start footer style */\r\n\r\nfooter{\r\n  position: fixed;\r\n  bottom: 0;\r\n  width: 100%;\r\n  height: 50px;\r\n  width: 100%;\r\n  border-top: 2px solid black;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 0 100px;\r\n  background-color: #000000;\r\n  padding: 40px 100px;\r\n  \r\n}\r\n\r\n#logo-footer{\r\n  height: 60px;\r\n  width: 120px;\r\n}\r\n.foot-desc{\r\n  color: white;\r\n  font-family: 'Poppins', sans-serif;\r\n  font-size: 18px;\r\n  font-weight: 500;\r\n  cursor: pointer;\r\n  transition: 0.3;\r\n  user-select: none;\r\n}\r\n.foot-desc:hover{\r\n  color: #FFE400;\r\n}\r\n/* footer style end */\r\n\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Poppins:wght@100;300;400;500;600;700;800;900&display=swap');\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\nbody{\r\n  background-color: #111111;\r\n  height: 100%;\r\n  position: relative;\r\n  background-image: url('./pattern_bg.png');\r\n  background-repeat: repeat;\r\n}\r\nheader {\r\n  height: 65px; \r\n  background-color: #000; \r\n  margin-bottom: 25px; \r\n  top: 0;\r\n  z-index: 99;\r\n  width: 100%;\r\n}\r\n\r\n.navbar {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding-left: 100px;\r\n  padding-right: 100px;\r\n}\r\n\r\n#logo{\r\n  height: 55px;\r\n  width: 100px;\r\n  display: flex;\r\n}\r\n.logo{\r\n  display: flex;\r\n  gap: 2px;\r\n}\r\n.logo-title{\r\n  color: white;\r\n  font-family: 'Poppins', sans-serif;\r\n  font-family: 700;\r\n  cursor: pointer;\r\n  user-select: none;\r\n}\r\n.logo-title span{\r\n  color: #FFE400;\r\n  font-family: 'Dancing Script', cursive;\r\n  font-weight: 700;\r\n  font-size: 35px;\r\n}\r\n\r\nheader .navbar .logo .logo-link {\r\n  text-decoration: none;\r\n  height: 100%;\r\n}\r\n\r\nheader .navbar .nav-list {\r\n  list-style: none;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n  width: 500px;\r\n  height: auto;\r\n}\r\n\r\n.nav-item-link{\r\n  font-size: 16px;\r\n  padding-top: 50px;\r\n  cursor: pointer;\r\n  color: white;\r\n  font-family: 'Poppins', sans-serif;\r\n  font-weight: 700;\r\n  text-decoration: none;\r\n  position: relative;\r\n  transition: 0.3;\r\n  user-select: none;\r\n  \r\n}\r\n.nav-item-link:hover{\r\n  color: #FFE400;\r\n}\r\n.nav-item-link::before{\r\n  content: \"\";\r\n  position: absolute;\r\n  bottom: 0;\r\n  height: 2px;\r\n  background-color: #FFE400;\r\n  width: 0;\r\n  transition: width 0.3s ease-in-out;\r\n\r\n}\r\n.nav-item-link:hover::before {\r\n  width: 100%;\r\n  \r\n}\r\n\r\n.search input {\r\n  padding: 10px;\r\n  border-radius: 8px;\r\n  background-color: #111111;\r\n  font-family: 'Poppins', sans-serif;\r\n  font-weight: 500;\r\n  border: 2px solid #111111;\r\n  color: white;\r\n}\r\n.search input::placeholder{\r\n  color: white;\r\n}\r\n\r\nheader .container .navbar .search input:focus-visible {\r\n  border: 1px solid #FFE400;\r\n  outline: 1px solid #FFE400;;\r\n}\r\n/* main style start */\r\n\r\nmain{\r\n  width: 100%;\r\n  height: auto;\r\n  padding: 100px 0;\r\n}\r\n.movie-container{\r\n  height: 100%;\r\n  width: 100%;\r\n  padding: 30px;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 10px;\r\n  justify-content: center;\r\n}\r\n.card{\r\n  height: 400px;\r\n  width: 220px;\r\n  background-color: white;\r\n  cursor: pointer;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  border-radius: 5px;\r\n  transition: 0.3s;\r\n  \r\n}\r\n.card:hover{\r\n  box-shadow: rgba(250, 253, 47, 0.35) 5px 20px 30px;\r\n  \r\n}\r\n#play{\r\n  height: 40px;\r\n  width: 40px;\r\n  position: absolute;\r\n  top: 50%; \r\n  left: 50%; \r\n  transform: translate(-50%, -50%);\r\n  display: none;\r\n}\r\n\r\n.card-image-container{\r\n  height: 70%;\r\n  width: 100%;\r\n  position: relative;\r\n}\r\n\r\n.card-image{\r\n  height: 100%;\r\n  width: 100%;\r\n  background-size: 100% 100%;\r\n  background-position: center;\r\n  border-top-right-radius: 5px;\r\n  border-top-left-radius: 5px;\r\n  transition: 0.3;\r\n}\r\n.card-image-container:hover #play{\r\n  display: block;\r\n}\r\n.card-image:hover{\r\n  opacity: 0.4;\r\n}\r\n\r\n.card-content{\r\n  height: 20%;\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 0 3px;\r\n  background-color: #111111;\r\n  border: 0.1px solid #2b2a27;\r\n}\r\n.card-button{\r\n  height: 10%;\r\n  width: 100%;\r\n  background-color: #FFE400;\r\n  border: none;\r\n  outline: none;\r\n  font-family: 'Poppins', sans-serif;\r\n  font-weight: 500;\r\n  color: black;\r\n  cursor: pointer;\r\n  font-size: 17px;\r\n  border-bottom-right-radius: 5px;\r\n  border-bottom-left-radius: 5px;\r\n}\r\n.card-button:hover{\r\n  color: black;\r\n  background-color: white;\r\n  border: 0.4px solid #FFE400;\r\n  \r\n}\r\n.movie-title{\r\n  font-family: 'Poppins', sans-serif;\r\n  font-weight: 500;\r\n  transition: 0.3s;\r\n  color: white;\r\n  width: 50%;\r\n}\r\n.movie-title:hover{\r\n  color: #FFE400;\r\n}\r\n.like-stat{\r\n  font-family: 'Poppins', sans-serif;\r\n  font-weight: 500;\r\n  transition: 0.3s;\r\n  color: white;\r\n}\r\n.like-stat:hover{\r\n  color: #FFE400;\r\n}\r\n.heart-btn {\r\n  background-color: white;\r\n  border: none;\r\n  cursor: pointer;\r\n  padding: 7px;\r\n  border-radius: 50%;\r\n  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);\r\n  transition: background-color 0.3s ease-in-out;\r\n}\r\n\r\n.heart-btn:hover {\r\n  background-color: #FFE400;\r\n}\r\n\r\n.fa-heart {\r\n  color: red;\r\n}\r\n\r\n/* Popup */\r\n.popUp {\r\n  display: none;\r\n}\r\n\r\n.popup-blur {\r\n  position: fixed;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 15;\r\n  padding: 1rem 1rem;\r\n  overflow-y: auto;\r\n  color: #fff;\r\n  opacity: 1;\r\n  background-color: rgba(0, 0, 0, 0.93);\r\n}\r\n\r\n.popup-countainer {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 0 5%;\r\n  gap: 15px;\r\n  background: #22323d;\r\n}\r\n\r\n.img-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.comment-img {\r\n  margin: 1% 0;\r\n  height: 300px;\r\n}\r\n\r\n.fa-close {\r\n  font-size: 30px;\r\n  align-self: flex-end;\r\n  margin: 5px 20px 0 0;\r\n}\r\n\r\n.detail {\r\n  margin: 2px 0;\r\n  gap: 2px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.summary {\r\n  padding: 0 3%;\r\n  text-align: justify;\r\n}\r\n\r\n.comment-section {\r\n  display: flex;\r\n  width: 50%;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 5px;\r\n}\r\n\r\n.form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  width: 90%;\r\n  margin: 2%;\r\n}\r\n\r\n#submit {\r\n  width: 100%;\r\n  margin-bottom: 10px;\r\n}\r\n\r\ninput {\r\n  color: #1e2c36;\r\n  font-size: large;\r\n  padding: 1%;\r\n}\r\n\r\ntextarea {\r\n  color: #1e2c36;\r\n  font-size: large;\r\n  padding: 1%;\r\n}\r\n/* end popup */\r\n\r\n\r\n/* start footer style */\r\n\r\nfooter{\r\n  position: fixed;\r\n  bottom: 0;\r\n  width: 100%;\r\n  height: 50px;\r\n  width: 100%;\r\n  border-top: 2px solid black;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 0 100px;\r\n  background-color: #000000;\r\n  padding: 40px 100px;\r\n  \r\n}\r\n\r\n#logo-footer{\r\n  height: 60px;\r\n  width: 120px;\r\n}\r\n.foot-desc{\r\n  color: white;\r\n  font-family: 'Poppins', sans-serif;\r\n  font-size: 18px;\r\n  font-weight: 500;\r\n  cursor: pointer;\r\n  transition: 0.3;\r\n  user-select: none;\r\n}\r\n.foot-desc:hover{\r\n  color: #FFE400;\r\n}\r\n/* footer style end */\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_comment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/comment.js */ "./src/modules/comment.js");
/* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logo.png */ "./src/logo.png");
/* harmony import */ var _play_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./play.png */ "./src/play.png");
/* harmony import */ var _like_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./like.png */ "./src/like.png");
/* harmony import */ var _modules_api_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/api.js */ "./src/modules/api.js");







const movie = new _modules_api_js__WEBPACK_IMPORTED_MODULE_5__["default"]();

const update = async () => {
  const movieContainer = document.querySelector('.movie-container');
  const allLike = await movie.getLike();
  const allData = await movie.getMovies();
  const items = allData.slice(0, 9);
  const likeFiltered = allLike.filter((like) => items.find((item) => like.item_id === item.id));
  const sortedLike = likeFiltered.sort((a, b) => a.item_id - b.item_id);
  let html = '';
  items.forEach((element, index) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.setAttribute('data-index', index);
    html = `
                <div class="card-image-container">
                    <img class="card-image" src="${element.image.medium}" alt="">
                    <img src="./play.png" alt="" id="play">
                </div>
                <div class="card-content">
                    <p class="movie-title">${element.name}</p>
                    <button class="heart-btn" id="${element.id}">
                      <i class="fas fa-heart"></i>
                    </button>

                  
                    <p class="like-stat">${sortedLike[index].likes} likes</p>
                </div>
                <button class="card-button" id="${element.id}" type="submit">Comments</button>
              `;
    card.innerHTML = html;
    movieContainer.append(card);
    const commentButton = document.querySelector(`.card[data-index="${index}"] .card-button`);
    commentButton.addEventListener('click', async () => {
      (0,_modules_comment_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element, index);
    });

    const likeBtn = document.querySelector(`.card[data-index="${index}"] .heart-btn`);
    likeBtn.addEventListener('click', async () => {
      const btnId = likeBtn.getAttribute('id');
      const likeId = parseInt(btnId, 10);
      await movie.postLike(likeId);
      const currentLike = await movie.getLike();
      const likeChange = currentLike.find((like) => like.item_id === likeId);
      const likeContent = document.querySelector(`.card[data-index="${index}"] .like-stat`);
      likeContent.textContent = `${likeChange.likes} likes`;
    });
  });
};
window.onload = update();

/***/ }),

/***/ "./src/modules/api.js":
/*!****************************!*\
  !*** ./src/modules/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const involvementId = 'VdUaJZjJhUjlpm3843JM';
const commentUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${involvementId}/comments`;
const likeUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${involvementId}/likes/`;

// API for post Comment

class Movies {
  postLike = async (likeId) => {
    const data = {
      item_id: parseInt(likeId, 10),
    };
    const response = await fetch(
      likeUrl,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      },
    );
    return response;
  };

  getMovies = async () => {
    try {
      const response = await fetch('https://api.tvmaze.com/shows');
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  }

  getLike = async () => {
    try {
      const response = await fetch(likeUrl);
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  }

  postComment = async (index, username, comment) => {
    await fetch(commentUrl, {
      method: 'POST',
      body: JSON.stringify({
        item_id: index,
        username,
        comment,
      }),
      headers: { 'content-Type': 'application/json; charset=UTF-8' },
    });
  }

  getComment = async (index) => {
    const response = await fetch(`${commentUrl}?item_id=${index}`);
    const user = await response.json();
    return user;
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Movies);


/***/ }),

/***/ "./src/modules/comment.js":
/*!********************************!*\
  !*** ./src/modules/comment.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _counters_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./counters.js */ "./src/modules/counters.js");
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.js */ "./src/modules/api.js");



const movie = new _api_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
const appendComment = (comment) => {
  const commentList = document.createElement('li');
  commentList.innerHTML = ` <span class ="date">${comment.creation_date} </span>
   <span class="name">${comment.username} </span><span class="comment">${comment.comment}</span>`;
  return commentList;
};

const displayPopUp = async (element, index) => {
  let innerHTML = '';
  innerHTML += `<div id = "${element.id}" class="popup-blur">
      <div class="popup-countainer">
      <i class="fa fa-close"></i>
          <div class ="img-container"><img class="comment-img" src="${element.image.medium}" alt="">
          </div>
          <h2 class="title">${element.name}</h2>
          <div class="detail">
              <p class="langauge">Language: ${element.language}</p> 
              <p class="runtime">Runtime: ${element.runtime} mins</p>
          </div>
          <div class ="summary"> 
            <h4>Summry:</h4>
            ${element.summary}
          </div>
          <div class="comment-section">
          <h3>Comments(<span id="comment-count">0</span>)</h3>
          <ul class="commentList"></ul>
          <h4>Add a comment</h4>
          <form class="form" action="submit">
              <input id = "name" type="text" placeholder="Your name">
              <textarea name="comment-text" id="text" cols="20" rows="5" placeholder="Your insight"></textarea>
              <button id="submit" type="submit">Comment</button>
          </form>
          </div>
  </div>`;
  const popUp = document.querySelector('.popUp');
  popUp.innerHTML = innerHTML;
  popUp.style.display = 'block';
  const close = document.querySelector('.fa-close');
  close.addEventListener('click', () => {
    popUp.style.display = 'none';
  });

  const commentList = document.querySelector('.commentList');
  const comments = await movie.getComment(index);
  if (comments.length >= 1) {
    comments.forEach((comment) => {
      commentList.appendChild(appendComment(comment));
    });
    document.querySelector('#comment-count').textContent = (0,_counters_js__WEBPACK_IMPORTED_MODULE_0__["default"])(comments);
  }

  const form = document.querySelector('.form');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const nameInput = document.querySelector('#name');
    const textInput = document.querySelector('#text');
    if (nameInput !== '' && textInput !== '') {
      await movie.postComment(index, nameInput.value, textInput.value);
      const commentList = document.querySelector('.commentList');
      commentList.innerHTML = '';
      nameInput.value = '';
      textInput.value = '';
      const comments = await movie.getComment(index);
      comments.forEach((comment) => {
        commentList.appendChild(appendComment(comment));
      });
      document.querySelector('#comment-count').textContent = comments.length;
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayPopUp);

/***/ }),

/***/ "./src/modules/counters.js":
/*!*********************************!*\
  !*** ./src/modules/counters.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getCommentCount = (comments) => {
  const res = comments.length;
  return res;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCommentCount);

/***/ }),

/***/ "./src/like.png":
/*!**********************!*\
  !*** ./src/like.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "092f57e46fa576326721.png";

/***/ }),

/***/ "./src/logo.png":
/*!**********************!*\
  !*** ./src/logo.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "40422730fb09ec2b5aa5.png";

/***/ }),

/***/ "./src/pattern_bg.png":
/*!****************************!*\
  !*** ./src/pattern_bg.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "84aaee6e1c547c11d322.png";

/***/ }),

/***/ "./src/play.png":
/*!**********************!*\
  !*** ./src/play.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "07818c77d476c6d6479a.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLGFBQWEsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLGFBQWEsTUFBTSxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGNBQWMsTUFBTSxLQUFLLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksY0FBYyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sVUFBVSxLQUFL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QzNDO0FBQ0EsOENBQThDLGlCQUFpQjtBQUMvRCw0Q0FBNEMsaUJBQWlCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsMkRBQTJELHdEQUFlO0FBQzFFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxpRUFBZSxZQUFZOzs7Ozs7Ozs7Ozs7OztBQzNFM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxlQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW92aWVzLWZpbmFsLWNhcHN0b25lLW1pY3JvdmVyc2UtamF2YXNjcmlwdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbW92aWVzLWZpbmFsLWNhcHN0b25lLW1pY3JvdmVyc2UtamF2YXNjcmlwdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbW92aWVzLWZpbmFsLWNhcHN0b25lLW1pY3JvdmVyc2UtamF2YXNjcmlwdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vbW92aWVzLWZpbmFsLWNhcHN0b25lLW1pY3JvdmVyc2UtamF2YXNjcmlwdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL21vdmllcy1maW5hbC1jYXBzdG9uZS1taWNyb3ZlcnNlLWphdmFzY3JpcHQvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vbW92aWVzLWZpbmFsLWNhcHN0b25lLW1pY3JvdmVyc2UtamF2YXNjcmlwdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9tb3ZpZXMtZmluYWwtY2Fwc3RvbmUtbWljcm92ZXJzZS1qYXZhc2NyaXB0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9tb3ZpZXMtZmluYWwtY2Fwc3RvbmUtbWljcm92ZXJzZS1qYXZhc2NyaXB0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL21vdmllcy1maW5hbC1jYXBzdG9uZS1taWNyb3ZlcnNlLWphdmFzY3JpcHQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbW92aWVzLWZpbmFsLWNhcHN0b25lLW1pY3JvdmVyc2UtamF2YXNjcmlwdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL21vdmllcy1maW5hbC1jYXBzdG9uZS1taWNyb3ZlcnNlLWphdmFzY3JpcHQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9tb3ZpZXMtZmluYWwtY2Fwc3RvbmUtbWljcm92ZXJzZS1qYXZhc2NyaXB0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL21vdmllcy1maW5hbC1jYXBzdG9uZS1taWNyb3ZlcnNlLWphdmFzY3JpcHQvLi9zcmMvbW9kdWxlcy9hcGkuanMiLCJ3ZWJwYWNrOi8vbW92aWVzLWZpbmFsLWNhcHN0b25lLW1pY3JvdmVyc2UtamF2YXNjcmlwdC8uL3NyYy9tb2R1bGVzL2NvbW1lbnQuanMiLCJ3ZWJwYWNrOi8vbW92aWVzLWZpbmFsLWNhcHN0b25lLW1pY3JvdmVyc2UtamF2YXNjcmlwdC8uL3NyYy9tb2R1bGVzL2NvdW50ZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL3BhdHRlcm5fYmcucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdDp3Z2h0QDcwMCZmYW1pbHk9UG9wcGluczp3Z2h0QDEwMDszMDA7NDAwOzUwMDs2MDA7NzAwOzgwMDs5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbmJvZHl7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExMTExO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XFxyXFxufVxcclxcbmhlYWRlciB7XFxyXFxuICBoZWlnaHQ6IDY1cHg7IFxcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDsgXFxyXFxuICBtYXJnaW4tYm90dG9tOiAyNXB4OyBcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHotaW5kZXg6IDk5O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xcclxcbiAgcGFkZGluZy1yaWdodDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbiNsb2dve1xcclxcbiAgaGVpZ2h0OiA1NXB4O1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuLmxvZ297XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAycHg7XFxyXFxufVxcclxcbi5sb2dvLXRpdGxle1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtZmFtaWx5OiA3MDA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuLmxvZ28tdGl0bGUgc3BhbntcXHJcXG4gIGNvbG9yOiAjRkZFNDAwO1xcclxcbiAgZm9udC1mYW1pbHk6ICdEYW5jaW5nIFNjcmlwdCcsIGN1cnNpdmU7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgZm9udC1zaXplOiAzNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgLm5hdmJhciAubG9nbyAubG9nby1saW5rIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIC5uYXZiYXIgLm5hdi1saXN0IHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiA1MDBweDtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1pdGVtLWxpbmt7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBwYWRkaW5nLXRvcDogNTBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICBcXHJcXG59XFxyXFxuLm5hdi1pdGVtLWxpbms6aG92ZXJ7XFxyXFxuICBjb2xvcjogI0ZGRTQwMDtcXHJcXG59XFxyXFxuLm5hdi1pdGVtLWxpbms6OmJlZm9yZXtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgaGVpZ2h0OiAycHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZFNDAwO1xcclxcbiAgd2lkdGg6IDA7XFxyXFxuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2UtaW4tb3V0O1xcclxcblxcclxcbn1cXHJcXG4ubmF2LWl0ZW0tbGluazpob3Zlcjo6YmVmb3JlIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgXFxyXFxufVxcclxcblxcclxcbi5zZWFyY2ggaW5wdXQge1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTExMTE7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMxMTExMTE7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcbi5zZWFyY2ggaW5wdXQ6OnBsYWNlaG9sZGVye1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgLmNvbnRhaW5lciAubmF2YmFyIC5zZWFyY2ggaW5wdXQ6Zm9jdXMtdmlzaWJsZSB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjRkZFNDAwO1xcclxcbiAgb3V0bGluZTogMXB4IHNvbGlkICNGRkU0MDA7O1xcclxcbn1cXHJcXG4vKiBtYWluIHN0eWxlIHN0YXJ0ICovXFxyXFxuXFxyXFxubWFpbntcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgcGFkZGluZzogMTAwcHggMDtcXHJcXG59XFxyXFxuLm1vdmllLWNvbnRhaW5lcntcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMzBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmNhcmR7XFxyXFxuICBoZWlnaHQ6IDQwMHB4O1xcclxcbiAgd2lkdGg6IDIyMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxyXFxuICBcXHJcXG59XFxyXFxuLmNhcmQ6aG92ZXJ7XFxyXFxuICBib3gtc2hhZG93OiByZ2JhKDI1MCwgMjUzLCA0NywgMC4zNSkgNXB4IDIwcHggMzBweDtcXHJcXG4gIFxcclxcbn1cXHJcXG4jcGxheXtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIHdpZHRoOiA0MHB4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA1MCU7IFxcclxcbiAgbGVmdDogNTAlOyBcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtaW1hZ2UtY29udGFpbmVye1xcclxcbiAgaGVpZ2h0OiA3MCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtaW1hZ2V7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcXHJcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcXHJcXG4gIHRyYW5zaXRpb246IDAuMztcXHJcXG59XFxyXFxuLmNhcmQtaW1hZ2UtY29udGFpbmVyOmhvdmVyICNwbGF5e1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcbi5jYXJkLWltYWdlOmhvdmVye1xcclxcbiAgb3BhY2l0eTogMC40O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1jb250ZW50e1xcclxcbiAgaGVpZ2h0OiAyMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgcGFkZGluZzogMCAzcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExMTExO1xcclxcbiAgYm9yZGVyOiAwLjFweCBzb2xpZCAjMmIyYTI3O1xcclxcbn1cXHJcXG4uY2FyZC1idXR0b257XFxyXFxuICBoZWlnaHQ6IDEwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRTQwMDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMTdweDtcXHJcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XFxyXFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcbi5jYXJkLWJ1dHRvbjpob3ZlcntcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiAwLjRweCBzb2xpZCAjRkZFNDAwO1xcclxcbiAgXFxyXFxufVxcclxcbi5tb3ZpZS10aXRsZXtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxufVxcclxcbi5tb3ZpZS10aXRsZTpob3ZlcntcXHJcXG4gIGNvbG9yOiAjRkZFNDAwO1xcclxcbn1cXHJcXG4ubGlrZS1zdGF0e1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG4ubGlrZS1zdGF0OmhvdmVye1xcclxcbiAgY29sb3I6ICNGRkU0MDA7XFxyXFxufVxcclxcbi5oZWFydC1idG4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBwYWRkaW5nOiA3cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5oZWFydC1idG46aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRTQwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWhlYXJ0IHtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbi8qIFBvcHVwICovXFxyXFxuLnBvcFVwIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1ibHVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgei1pbmRleDogMTU7XFxyXFxuICBwYWRkaW5nOiAxcmVtIDFyZW07XFxyXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkzKTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWNvdW50YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDAgNSU7XFxyXFxuICBnYXA6IDE1cHg7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMjIzMjNkO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1pbWcge1xcclxcbiAgbWFyZ2luOiAxJSAwO1xcclxcbiAgaGVpZ2h0OiAzMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWNsb3NlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgbWFyZ2luOiA1cHggMjBweCAwIDA7XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWwge1xcclxcbiAgbWFyZ2luOiAycHggMDtcXHJcXG4gIGdhcDogMnB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zdW1tYXJ5IHtcXHJcXG4gIHBhZGRpbmc6IDAgMyU7XFxyXFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1zZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgbWFyZ2luOiAyJTtcXHJcXG59XFxyXFxuXFxyXFxuI3N1Ym1pdCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxufVxcclxcblxcclxcbmlucHV0IHtcXHJcXG4gIGNvbG9yOiAjMWUyYzM2O1xcclxcbiAgZm9udC1zaXplOiBsYXJnZTtcXHJcXG4gIHBhZGRpbmc6IDElO1xcclxcbn1cXHJcXG5cXHJcXG50ZXh0YXJlYSB7XFxyXFxuICBjb2xvcjogIzFlMmMzNjtcXHJcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxuICBwYWRkaW5nOiAxJTtcXHJcXG59XFxyXFxuLyogZW5kIHBvcHVwICovXFxyXFxuXFxyXFxuXFxyXFxuLyogc3RhcnQgZm9vdGVyIHN0eWxlICovXFxyXFxuXFxyXFxuZm9vdGVye1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgcGFkZGluZzogMCAxMDBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxyXFxuICBwYWRkaW5nOiA0MHB4IDEwMHB4O1xcclxcbiAgXFxyXFxufVxcclxcblxcclxcbiNsb2dvLWZvb3RlcntcXHJcXG4gIGhlaWdodDogNjBweDtcXHJcXG4gIHdpZHRoOiAxMjBweDtcXHJcXG59XFxyXFxuLmZvb3QtZGVzY3tcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcbi5mb290LWRlc2M6aG92ZXJ7XFxyXFxuICBjb2xvcjogI0ZGRTQwMDtcXHJcXG59XFxyXFxuLyogZm9vdGVyIHN0eWxlIGVuZCAqL1xcclxcblxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFD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QixtQkFBbUI7RUFDbkIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsVUFBVTtFQUNWLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiO0FBQ0EsY0FBYzs7O0FBR2QsdUJBQXVCOztBQUV2QjtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsbUJBQW1COztBQUVyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7RUFDWixrQ0FBa0M7RUFDbEMsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBLHFCQUFxQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdDp3Z2h0QDcwMCZmYW1pbHk9UG9wcGluczp3Z2h0QDEwMDszMDA7NDAwOzUwMDs2MDA7NzAwOzgwMDs5MDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuYm9keXtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTExMTE7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vcGF0dGVybl9iZy5wbmcnKTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XFxyXFxufVxcclxcbmhlYWRlciB7XFxyXFxuICBoZWlnaHQ6IDY1cHg7IFxcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDsgXFxyXFxuICBtYXJnaW4tYm90dG9tOiAyNXB4OyBcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHotaW5kZXg6IDk5O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xcclxcbiAgcGFkZGluZy1yaWdodDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbiNsb2dve1xcclxcbiAgaGVpZ2h0OiA1NXB4O1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuLmxvZ297XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAycHg7XFxyXFxufVxcclxcbi5sb2dvLXRpdGxle1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtZmFtaWx5OiA3MDA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuLmxvZ28tdGl0bGUgc3BhbntcXHJcXG4gIGNvbG9yOiAjRkZFNDAwO1xcclxcbiAgZm9udC1mYW1pbHk6ICdEYW5jaW5nIFNjcmlwdCcsIGN1cnNpdmU7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgZm9udC1zaXplOiAzNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgLm5hdmJhciAubG9nbyAubG9nby1saW5rIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIC5uYXZiYXIgLm5hdi1saXN0IHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiA1MDBweDtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1pdGVtLWxpbmt7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBwYWRkaW5nLXRvcDogNTBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICBcXHJcXG59XFxyXFxuLm5hdi1pdGVtLWxpbms6aG92ZXJ7XFxyXFxuICBjb2xvcjogI0ZGRTQwMDtcXHJcXG59XFxyXFxuLm5hdi1pdGVtLWxpbms6OmJlZm9yZXtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgaGVpZ2h0OiAycHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZFNDAwO1xcclxcbiAgd2lkdGg6IDA7XFxyXFxuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2UtaW4tb3V0O1xcclxcblxcclxcbn1cXHJcXG4ubmF2LWl0ZW0tbGluazpob3Zlcjo6YmVmb3JlIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgXFxyXFxufVxcclxcblxcclxcbi5zZWFyY2ggaW5wdXQge1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTExMTE7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMxMTExMTE7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcbi5zZWFyY2ggaW5wdXQ6OnBsYWNlaG9sZGVye1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgLmNvbnRhaW5lciAubmF2YmFyIC5zZWFyY2ggaW5wdXQ6Zm9jdXMtdmlzaWJsZSB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjRkZFNDAwO1xcclxcbiAgb3V0bGluZTogMXB4IHNvbGlkICNGRkU0MDA7O1xcclxcbn1cXHJcXG4vKiBtYWluIHN0eWxlIHN0YXJ0ICovXFxyXFxuXFxyXFxubWFpbntcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgcGFkZGluZzogMTAwcHggMDtcXHJcXG59XFxyXFxuLm1vdmllLWNvbnRhaW5lcntcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMzBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmNhcmR7XFxyXFxuICBoZWlnaHQ6IDQwMHB4O1xcclxcbiAgd2lkdGg6IDIyMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxyXFxuICBcXHJcXG59XFxyXFxuLmNhcmQ6aG92ZXJ7XFxyXFxuICBib3gtc2hhZG93OiByZ2JhKDI1MCwgMjUzLCA0NywgMC4zNSkgNXB4IDIwcHggMzBweDtcXHJcXG4gIFxcclxcbn1cXHJcXG4jcGxheXtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIHdpZHRoOiA0MHB4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA1MCU7IFxcclxcbiAgbGVmdDogNTAlOyBcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtaW1hZ2UtY29udGFpbmVye1xcclxcbiAgaGVpZ2h0OiA3MCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtaW1hZ2V7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcXHJcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcXHJcXG4gIHRyYW5zaXRpb246IDAuMztcXHJcXG59XFxyXFxuLmNhcmQtaW1hZ2UtY29udGFpbmVyOmhvdmVyICNwbGF5e1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcbi5jYXJkLWltYWdlOmhvdmVye1xcclxcbiAgb3BhY2l0eTogMC40O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1jb250ZW50e1xcclxcbiAgaGVpZ2h0OiAyMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgcGFkZGluZzogMCAzcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExMTExO1xcclxcbiAgYm9yZGVyOiAwLjFweCBzb2xpZCAjMmIyYTI3O1xcclxcbn1cXHJcXG4uY2FyZC1idXR0b257XFxyXFxuICBoZWlnaHQ6IDEwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRTQwMDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMTdweDtcXHJcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XFxyXFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcbi5jYXJkLWJ1dHRvbjpob3ZlcntcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiAwLjRweCBzb2xpZCAjRkZFNDAwO1xcclxcbiAgXFxyXFxufVxcclxcbi5tb3ZpZS10aXRsZXtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxufVxcclxcbi5tb3ZpZS10aXRsZTpob3ZlcntcXHJcXG4gIGNvbG9yOiAjRkZFNDAwO1xcclxcbn1cXHJcXG4ubGlrZS1zdGF0e1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG4ubGlrZS1zdGF0OmhvdmVye1xcclxcbiAgY29sb3I6ICNGRkU0MDA7XFxyXFxufVxcclxcbi5oZWFydC1idG4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBwYWRkaW5nOiA3cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5oZWFydC1idG46aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRTQwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWhlYXJ0IHtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbi8qIFBvcHVwICovXFxyXFxuLnBvcFVwIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1ibHVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgei1pbmRleDogMTU7XFxyXFxuICBwYWRkaW5nOiAxcmVtIDFyZW07XFxyXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkzKTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWNvdW50YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDAgNSU7XFxyXFxuICBnYXA6IDE1cHg7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMjIzMjNkO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1pbWcge1xcclxcbiAgbWFyZ2luOiAxJSAwO1xcclxcbiAgaGVpZ2h0OiAzMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWNsb3NlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgbWFyZ2luOiA1cHggMjBweCAwIDA7XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWwge1xcclxcbiAgbWFyZ2luOiAycHggMDtcXHJcXG4gIGdhcDogMnB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zdW1tYXJ5IHtcXHJcXG4gIHBhZGRpbmc6IDAgMyU7XFxyXFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1zZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgbWFyZ2luOiAyJTtcXHJcXG59XFxyXFxuXFxyXFxuI3N1Ym1pdCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxufVxcclxcblxcclxcbmlucHV0IHtcXHJcXG4gIGNvbG9yOiAjMWUyYzM2O1xcclxcbiAgZm9udC1zaXplOiBsYXJnZTtcXHJcXG4gIHBhZGRpbmc6IDElO1xcclxcbn1cXHJcXG5cXHJcXG50ZXh0YXJlYSB7XFxyXFxuICBjb2xvcjogIzFlMmMzNjtcXHJcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxuICBwYWRkaW5nOiAxJTtcXHJcXG59XFxyXFxuLyogZW5kIHBvcHVwICovXFxyXFxuXFxyXFxuXFxyXFxuLyogc3RhcnQgZm9vdGVyIHN0eWxlICovXFxyXFxuXFxyXFxuZm9vdGVye1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgcGFkZGluZzogMCAxMDBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxyXFxuICBwYWRkaW5nOiA0MHB4IDEwMHB4O1xcclxcbiAgXFxyXFxufVxcclxcblxcclxcbiNsb2dvLWZvb3RlcntcXHJcXG4gIGhlaWdodDogNjBweDtcXHJcXG4gIHdpZHRoOiAxMjBweDtcXHJcXG59XFxyXFxuLmZvb3QtZGVzY3tcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcbi5mb290LWRlc2M6aG92ZXJ7XFxyXFxuICBjb2xvcjogI0ZGRTQwMDtcXHJcXG59XFxyXFxuLyogZm9vdGVyIHN0eWxlIGVuZCAqL1xcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgZGlzcGxheVBvcFVwIGZyb20gJy4vbW9kdWxlcy9jb21tZW50LmpzJztcbmltcG9ydCAnLi9sb2dvLnBuZyc7XG5pbXBvcnQgJy4vcGxheS5wbmcnO1xuaW1wb3J0ICcuL2xpa2UucG5nJztcbmltcG9ydCBNb3ZpZXMgZnJvbSAnLi9tb2R1bGVzL2FwaS5qcyc7XG5cbmNvbnN0IG1vdmllID0gbmV3IE1vdmllcygpO1xuXG5jb25zdCB1cGRhdGUgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IG1vdmllQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vdmllLWNvbnRhaW5lcicpO1xuICBjb25zdCBhbGxMaWtlID0gYXdhaXQgbW92aWUuZ2V0TGlrZSgpO1xuICBjb25zdCBhbGxEYXRhID0gYXdhaXQgbW92aWUuZ2V0TW92aWVzKCk7XG4gIGNvbnN0IGl0ZW1zID0gYWxsRGF0YS5zbGljZSgwLCA5KTtcbiAgY29uc3QgbGlrZUZpbHRlcmVkID0gYWxsTGlrZS5maWx0ZXIoKGxpa2UpID0+IGl0ZW1zLmZpbmQoKGl0ZW0pID0+IGxpa2UuaXRlbV9pZCA9PT0gaXRlbS5pZCkpO1xuICBjb25zdCBzb3J0ZWRMaWtlID0gbGlrZUZpbHRlcmVkLnNvcnQoKGEsIGIpID0+IGEuaXRlbV9pZCAtIGIuaXRlbV9pZCk7XG4gIGxldCBodG1sID0gJyc7XG4gIGl0ZW1zLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmQuY2xhc3NOYW1lID0gJ2NhcmQnO1xuICAgIGNhcmQuc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgaW5kZXgpO1xuICAgIGh0bWwgPSBgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaW1hZ2UtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJjYXJkLWltYWdlXCIgc3JjPVwiJHtlbGVtZW50LmltYWdlLm1lZGl1bX1cIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL3BsYXkucG5nXCIgYWx0PVwiXCIgaWQ9XCJwbGF5XCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm1vdmllLXRpdGxlXCI+JHtlbGVtZW50Lm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiaGVhcnQtYnRuXCIgaWQ9XCIke2VsZW1lbnQuaWR9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtaGVhcnRcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJsaWtlLXN0YXRcIj4ke3NvcnRlZExpa2VbaW5kZXhdLmxpa2VzfSBsaWtlczwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2FyZC1idXR0b25cIiBpZD1cIiR7ZWxlbWVudC5pZH1cIiB0eXBlPVwic3VibWl0XCI+Q29tbWVudHM8L2J1dHRvbj5cbiAgICAgICAgICAgICAgYDtcbiAgICBjYXJkLmlubmVySFRNTCA9IGh0bWw7XG4gICAgbW92aWVDb250YWluZXIuYXBwZW5kKGNhcmQpO1xuICAgIGNvbnN0IGNvbW1lbnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY2FyZFtkYXRhLWluZGV4PVwiJHtpbmRleH1cIl0gLmNhcmQtYnV0dG9uYCk7XG4gICAgY29tbWVudEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICAgIGRpc3BsYXlQb3BVcChlbGVtZW50LCBpbmRleCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBsaWtlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNhcmRbZGF0YS1pbmRleD1cIiR7aW5kZXh9XCJdIC5oZWFydC1idG5gKTtcbiAgICBsaWtlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgYnRuSWQgPSBsaWtlQnRuLmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgIGNvbnN0IGxpa2VJZCA9IHBhcnNlSW50KGJ0bklkLCAxMCk7XG4gICAgICBhd2FpdCBtb3ZpZS5wb3N0TGlrZShsaWtlSWQpO1xuICAgICAgY29uc3QgY3VycmVudExpa2UgPSBhd2FpdCBtb3ZpZS5nZXRMaWtlKCk7XG4gICAgICBjb25zdCBsaWtlQ2hhbmdlID0gY3VycmVudExpa2UuZmluZCgobGlrZSkgPT4gbGlrZS5pdGVtX2lkID09PSBsaWtlSWQpO1xuICAgICAgY29uc3QgbGlrZUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY2FyZFtkYXRhLWluZGV4PVwiJHtpbmRleH1cIl0gLmxpa2Utc3RhdGApO1xuICAgICAgbGlrZUNvbnRlbnQudGV4dENvbnRlbnQgPSBgJHtsaWtlQ2hhbmdlLmxpa2VzfSBsaWtlc2A7XG4gICAgfSk7XG4gIH0pO1xufTtcbndpbmRvdy5vbmxvYWQgPSB1cGRhdGUoKTsiLCJjb25zdCBpbnZvbHZlbWVudElkID0gJ1ZkVWFKWmpKaFVqbHBtMzg0M0pNJztcbmNvbnN0IGNvbW1lbnRVcmwgPSBgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvJHtpbnZvbHZlbWVudElkfS9jb21tZW50c2A7XG5jb25zdCBsaWtlVXJsID0gYGh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLyR7aW52b2x2ZW1lbnRJZH0vbGlrZXMvYDtcblxuLy8gQVBJIGZvciBwb3N0IENvbW1lbnRcblxuY2xhc3MgTW92aWVzIHtcbiAgcG9zdExpa2UgPSBhc3luYyAobGlrZUlkKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIGl0ZW1faWQ6IHBhcnNlSW50KGxpa2VJZCwgMTApLFxuICAgIH07XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGxpa2VVcmwsXG4gICAgICB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICB9LFxuICAgICk7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9O1xuXG4gIGdldE1vdmllcyA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zaG93cycpO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gZXJyb3I7XG4gICAgfVxuICB9XG5cbiAgZ2V0TGlrZSA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChsaWtlVXJsKTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIGVycm9yO1xuICAgIH1cbiAgfVxuXG4gIHBvc3RDb21tZW50ID0gYXN5bmMgKGluZGV4LCB1c2VybmFtZSwgY29tbWVudCkgPT4ge1xuICAgIGF3YWl0IGZldGNoKGNvbW1lbnRVcmwsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBpdGVtX2lkOiBpbmRleCxcbiAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgIGNvbW1lbnQsXG4gICAgICB9KSxcbiAgICAgIGhlYWRlcnM6IHsgJ2NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyB9LFxuICAgIH0pO1xuICB9XG5cbiAgZ2V0Q29tbWVudCA9IGFzeW5jIChpbmRleCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7Y29tbWVudFVybH0/aXRlbV9pZD0ke2luZGV4fWApO1xuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIHVzZXI7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vdmllcztcbiIsImltcG9ydCBnZXRDb21tZW50Q291bnQgZnJvbSAnLi9jb3VudGVycy5qcyc7XG5pbXBvcnQgTW92aWVzIGZyb20gJy4vYXBpLmpzJztcblxuY29uc3QgbW92aWUgPSBuZXcgTW92aWVzKCk7XG5jb25zdCBhcHBlbmRDb21tZW50ID0gKGNvbW1lbnQpID0+IHtcbiAgY29uc3QgY29tbWVudExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb21tZW50TGlzdC5pbm5lckhUTUwgPSBgIDxzcGFuIGNsYXNzID1cImRhdGVcIj4ke2NvbW1lbnQuY3JlYXRpb25fZGF0ZX0gPC9zcGFuPlxuICAgPHNwYW4gY2xhc3M9XCJuYW1lXCI+JHtjb21tZW50LnVzZXJuYW1lfSA8L3NwYW4+PHNwYW4gY2xhc3M9XCJjb21tZW50XCI+JHtjb21tZW50LmNvbW1lbnR9PC9zcGFuPmA7XG4gIHJldHVybiBjb21tZW50TGlzdDtcbn07XG5cbmNvbnN0IGRpc3BsYXlQb3BVcCA9IGFzeW5jIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICBsZXQgaW5uZXJIVE1MID0gJyc7XG4gIGlubmVySFRNTCArPSBgPGRpdiBpZCA9IFwiJHtlbGVtZW50LmlkfVwiIGNsYXNzPVwicG9wdXAtYmx1clwiPlxuICAgICAgPGRpdiBjbGFzcz1cInBvcHVwLWNvdW50YWluZXJcIj5cbiAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2xvc2VcIj48L2k+XG4gICAgICAgICAgPGRpdiBjbGFzcyA9XCJpbWctY29udGFpbmVyXCI+PGltZyBjbGFzcz1cImNvbW1lbnQtaW1nXCIgc3JjPVwiJHtlbGVtZW50LmltYWdlLm1lZGl1bX1cIiBhbHQ9XCJcIj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aDIgY2xhc3M9XCJ0aXRsZVwiPiR7ZWxlbWVudC5uYW1lfTwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImRldGFpbFwiPlxuICAgICAgICAgICAgICA8cCBjbGFzcz1cImxhbmdhdWdlXCI+TGFuZ3VhZ2U6ICR7ZWxlbWVudC5sYW5ndWFnZX08L3A+IFxuICAgICAgICAgICAgICA8cCBjbGFzcz1cInJ1bnRpbWVcIj5SdW50aW1lOiAke2VsZW1lbnQucnVudGltZX0gbWluczwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzID1cInN1bW1hcnlcIj4gXG4gICAgICAgICAgICA8aDQ+U3VtbXJ5OjwvaDQ+XG4gICAgICAgICAgICAke2VsZW1lbnQuc3VtbWFyeX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudC1zZWN0aW9uXCI+XG4gICAgICAgICAgPGgzPkNvbW1lbnRzKDxzcGFuIGlkPVwiY29tbWVudC1jb3VudFwiPjA8L3NwYW4+KTwvaDM+XG4gICAgICAgICAgPHVsIGNsYXNzPVwiY29tbWVudExpc3RcIj48L3VsPlxuICAgICAgICAgIDxoND5BZGQgYSBjb21tZW50PC9oND5cbiAgICAgICAgICA8Zm9ybSBjbGFzcz1cImZvcm1cIiBhY3Rpb249XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgPGlucHV0IGlkID0gXCJuYW1lXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIllvdXIgbmFtZVwiPlxuICAgICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cImNvbW1lbnQtdGV4dFwiIGlkPVwidGV4dFwiIGNvbHM9XCIyMFwiIHJvd3M9XCI1XCIgcGxhY2Vob2xkZXI9XCJZb3VyIGluc2lnaHRcIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwic3VibWl0XCIgdHlwZT1cInN1Ym1pdFwiPkNvbW1lbnQ8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gIDwvZGl2PmA7XG4gIGNvbnN0IHBvcFVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcFVwJyk7XG4gIHBvcFVwLmlubmVySFRNTCA9IGlubmVySFRNTDtcbiAgcG9wVXAuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhLWNsb3NlJyk7XG4gIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHBvcFVwLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH0pO1xuXG4gIGNvbnN0IGNvbW1lbnRMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnRMaXN0Jyk7XG4gIGNvbnN0IGNvbW1lbnRzID0gYXdhaXQgbW92aWUuZ2V0Q29tbWVudChpbmRleCk7XG4gIGlmIChjb21tZW50cy5sZW5ndGggPj0gMSkge1xuICAgIGNvbW1lbnRzLmZvckVhY2goKGNvbW1lbnQpID0+IHtcbiAgICAgIGNvbW1lbnRMaXN0LmFwcGVuZENoaWxkKGFwcGVuZENvbW1lbnQoY29tbWVudCkpO1xuICAgIH0pO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb21tZW50LWNvdW50JykudGV4dENvbnRlbnQgPSBnZXRDb21tZW50Q291bnQoY29tbWVudHMpO1xuICB9XG5cbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtJyk7XG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZScpO1xuICAgIGNvbnN0IHRleHRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZXh0Jyk7XG4gICAgaWYgKG5hbWVJbnB1dCAhPT0gJycgJiYgdGV4dElucHV0ICE9PSAnJykge1xuICAgICAgYXdhaXQgbW92aWUucG9zdENvbW1lbnQoaW5kZXgsIG5hbWVJbnB1dC52YWx1ZSwgdGV4dElucHV0LnZhbHVlKTtcbiAgICAgIGNvbnN0IGNvbW1lbnRMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnRMaXN0Jyk7XG4gICAgICBjb21tZW50TGlzdC5pbm5lckhUTUwgPSAnJztcbiAgICAgIG5hbWVJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgdGV4dElucHV0LnZhbHVlID0gJyc7XG4gICAgICBjb25zdCBjb21tZW50cyA9IGF3YWl0IG1vdmllLmdldENvbW1lbnQoaW5kZXgpO1xuICAgICAgY29tbWVudHMuZm9yRWFjaCgoY29tbWVudCkgPT4ge1xuICAgICAgICBjb21tZW50TGlzdC5hcHBlbmRDaGlsZChhcHBlbmRDb21tZW50KGNvbW1lbnQpKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbW1lbnQtY291bnQnKS50ZXh0Q29udGVudCA9IGNvbW1lbnRzLmxlbmd0aDtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheVBvcFVwOyIsImNvbnN0IGdldENvbW1lbnRDb3VudCA9IChjb21tZW50cykgPT4ge1xuICBjb25zdCByZXMgPSBjb21tZW50cy5sZW5ndGg7XG4gIHJldHVybiByZXM7XG59O1xuZXhwb3J0IGRlZmF1bHQgZ2V0Q29tbWVudENvdW50OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==