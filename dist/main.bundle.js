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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-color: hsl(0, 0%, 7%);\r\n  height: 100%;\r\n  position: relative;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-repeat: repeat;\r\n}\r\n\r\n.search input {\r\n  padding: 10px;\r\n  border-radius: 8px;\r\n  background-color: hsl(0, 0%, 7%);\r\n  font-family: 'Poppins', sans-serif;\r\n  font-weight: 500;\r\n  border: 2px solid hsl(0, 0%, 7%);\r\n  color: white;\r\n}\r\n\r\n.comment-section .form input {\r\n  color: #1e2c36;\r\n  font-size: large;\r\n  padding: 1%;\r\n  border-radius: 5px;\r\n}\r\n\r\n.comment-section .form input:focus {\r\n  outline: 1px solid hsl(54, 100%, 50%);\r\n  border: 1px solid hsl(54, 100%, 50%);\r\n}\r\n\r\nheader {\r\n  height: 65px;\r\n  background-color: hsl(0, 0%, 0%);\r\n  margin-bottom: 25px;\r\n  top: 0;\r\n  z-index: 99;\r\n  width: 100%;\r\n}\r\n\r\n.navbar {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding-left: 100px;\r\n  padding-right: 100px;\r\n}\r\n\r\n#logo {\r\n  height: 55px;\r\n  width: 100px;\r\n  display: flex;\r\n}\r\n\r\n.logo {\r\n  display: flex;\r\n  gap: 2px;\r\n}\r\n\r\n.logo-title {\r\n  color: white;\r\n  font-family: 'Poppins', sans-serif;\r\n  font-weight: 700;\r\n  cursor: pointer;\r\n  user-select: none;\r\n}\r\n\r\n.logo-title span {\r\n  color: hsl(54, 100%, 50%);\r\n  font-family: 'Dancing Script', cursive;\r\n  font-weight: 700;\r\n  font-size: 35px;\r\n}\r\n\r\nheader .navbar .logo .logo-link {\r\n  text-decoration: none;\r\n  height: 100%;\r\n}\r\n\r\nheader .navbar .nav-list {\r\n  list-style: none;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n  width: 500px;\r\n  height: auto;\r\n}\r\n\r\n.movie-result span {\r\n  color: white;\r\n}\r\n\r\n.nav-item-link {\r\n  font-size: 16px;\r\n  padding-top: 50px;\r\n  cursor: pointer;\r\n  color: white;\r\n  font-family: 'Poppins', sans-serif;\r\n  font-weight: 700;\r\n  text-decoration: none;\r\n  position: relative;\r\n  transition: 0.3s;\r\n  user-select: none;\r\n}\r\n\r\n.nav-item-link:hover {\r\n  color: hsl(54, 100%, 50%);\r\n}\r\n\r\n.nav-item-link::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  bottom: 0;\r\n  height: 2px;\r\n  background-color: hsl(54, 100%, 50%);\r\n  width: 0;\r\n  transition: width 0.3s ease-in-out;\r\n}\r\n\r\n.nav-item-link:hover::before {\r\n  width: 100%;\r\n}\r\n\r\n.search input::placeholder {\r\n  color: white;\r\n}\r\n\r\nheader .container .navbar .search input:focus-visible {\r\n  border: 1px solid hsl(54, 100%, 50%);\r\n  outline: 1px solid hsl(54, 100%, 50%);\r\n}\r\n\r\n/* main style start */\r\n\r\nmain {\r\n  width: 100%;\r\n  height: auto;\r\n  padding: 100px 0;\r\n}\r\n\r\n.movie-container {\r\n  height: 100%;\r\n  width: 100%;\r\n  padding: 30px;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 10px;\r\n  justify-content: center;\r\n}\r\n\r\n.card {\r\n  height: 400px;\r\n  width: 220px;\r\n  background-color: white;\r\n  cursor: pointer;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  border-radius: 5px;\r\n  transition: 0.3s;\r\n}\r\n\r\n.card:hover {\r\n  box-shadow: rgba(250, 253, 47, 0.35) 5px 20px 30px;\r\n}\r\n\r\n#play {\r\n  height: 40px;\r\n  width: 40px;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  display: none;\r\n}\r\n\r\n.card-image-container {\r\n  height: 70%;\r\n  width: 100%;\r\n  position: relative;\r\n}\r\n\r\n.card-image {\r\n  height: 100%;\r\n  width: 100%;\r\n  background-size: 100% 100%;\r\n  background-position: center;\r\n  border-top-right-radius: 5px;\r\n  border-top-left-radius: 5px;\r\n  transition: 0.3s;\r\n}\r\n\r\n.card-image-container:hover #play {\r\n  display: block;\r\n}\r\n\r\n.card-image:hover {\r\n  opacity: 0.4;\r\n}\r\n\r\n.card-content {\r\n  height: 20%;\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 0 3px;\r\n  background-color: hsl(0, 0%, 7%);\r\n  border: 0.1px solid #2b2a27;\r\n}\r\n\r\n.card-button {\r\n  height: 10%;\r\n  width: 100%;\r\n  background-color: hsl(54, 100%, 50%);\r\n  border: none;\r\n  outline: none;\r\n  font-family: 'Poppins', sans-serif;\r\n  font-weight: 500;\r\n  color: black;\r\n  cursor: pointer;\r\n  font-size: 17px;\r\n  border-bottom-right-radius: 5px;\r\n  border-bottom-left-radius: 5px;\r\n}\r\n\r\n.card-button:hover {\r\n  color: black;\r\n  background-color: white;\r\n  border: 0.4px solid hsl(54, 100%, 50%);\r\n}\r\n\r\n.movie-title {\r\n  font-family: 'Poppins', sans-serif;\r\n  font-weight: 500;\r\n  transition: 0.3s;\r\n  color: white;\r\n  width: 50%;\r\n}\r\n\r\n.movie-title:hover {\r\n  color: hsl(54, 100%, 50%);\r\n}\r\n\r\n.like-stat {\r\n  font-family: 'Poppins', sans-serif;\r\n  font-weight: 500;\r\n  transition: 0.3s;\r\n  color: white;\r\n}\r\n\r\n.like-stat:hover {\r\n  color: hsl(54, 100%, 50%);\r\n}\r\n\r\n.heart-btn {\r\n  background-color: white;\r\n  border: none;\r\n  cursor: pointer;\r\n  padding: 7px;\r\n  border-radius: 50%;\r\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\r\n  transition: background-color 0.3s ease-in-out;\r\n}\r\n\r\n.heart-btn:hover {\r\n  background-color: hsl(54, 100%, 50%);\r\n}\r\n\r\n.fa-heart {\r\n  color: red;\r\n}\r\n\r\n/* Popup */\r\n.popUp {\r\n  display: none;\r\n}\r\n\r\n.popup-blur {\r\n  position: fixed;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 15;\r\n  padding: 2rem 2rem;\r\n  overflow-y: auto;\r\n  color: #fff;\r\n  opacity: 1;\r\n  background-color: rgba(0, 0, 0, 0.93);\r\n}\r\n\r\n.popup-countainer {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 0 5%;\r\n  gap: 4px;\r\n  background: #22323d;\r\n}\r\n\r\n.img-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-bottom: 5px;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.comment-img {\r\n  margin: 1% 0;\r\n  height: 300px;\r\n  width: 400px;\r\n}\r\n\r\n.fa-close {\r\n  font-size: 30px;\r\n  align-self: flex-end;\r\n  margin: 5px 20px 0 0;\r\n  cursor: pointer;\r\n}\r\n\r\n.detail {\r\n  margin: 2px 0;\r\n  gap: 2px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.summary {\r\n  padding: 0 3%;\r\n  text-align: justify;\r\n}\r\n\r\n.comment-section {\r\n  display: flex;\r\n  width: 50%;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 5px;\r\n}\r\n\r\n.form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  width: 90%;\r\n  margin: 2%;\r\n}\r\n\r\n.form button {\r\n  height: 40px;\r\n  color: black;\r\n  border: 1px solid hsl(54, 100%, 50%);\r\n  outline: 1px solid hsl(54, 100%, 50%);\r\n  font-family: 'Poppins', sans-serif;\r\n  font-weight: 700;\r\n  font-size: 17px;\r\n  cursor: pointer;\r\n  border-radius: 5px;\r\n}\r\n\r\n.form button:hover {\r\n  background-color: hsl(54, 100%, 50%);\r\n  outline: none;\r\n  border: none;\r\n}\r\n\r\n#submit {\r\n  width: 100%;\r\n  margin-bottom: 10px;\r\n}\r\n\r\ntextarea {\r\n  color: #1e2c36;\r\n  font-size: large;\r\n  padding: 1%;\r\n  border-radius: 5px;\r\n}\r\n\r\ntextarea:focus {\r\n  outline: 1px solid hsl(54, 100%, 50%);\r\n  border: 1px solid hsl(54, 100%, 50%);\r\n}\r\n\r\n.popup-countainer .title {\r\n  color: hsl(54, 100%, 50%);\r\n  font-family: 'Poppins', sans-serif;\r\n  font-weight: 700;\r\n  font-size: 25px;\r\n}\r\n\r\n.detail .language {\r\n  font-family: 'Poppins', sans-serif;\r\n  font-weight: 300;\r\n  font-size: 15px;\r\n}\r\n\r\n.summary h4 {\r\n  color: hsl(54, 100%, 50%);\r\n  font-family: 'Poppins', sans-serif;\r\n  font-weight: 500;\r\n  font-size: 20px;\r\n}\r\n\r\n.summary p {\r\n  font-family: 'Poppins', sans-serif;\r\n  font-weight: 500;\r\n  font-size: 15px;\r\n}\r\n\r\n.comment-section h3 {\r\n  font-family: 'Poppins', sans-serif;\r\n  font-weight: 500;\r\n  font-size: 20px;\r\n}\r\n\r\n.comment-section h3 span {\r\n  color: hsl(54, 100%, 50%);\r\n}\r\n\r\n.commentList li {\r\n  font-family: 'Poppins', sans-serif;\r\n  font-weight: 500;\r\n  font-size: 15px;\r\n}\r\n\r\n.comment-section h4 {\r\n  color: hsl(54, 100%, 50%);\r\n  font-family: 'Poppins', sans-serif;\r\n  font-weight: 700;\r\n  font-size: 20px;\r\n}\r\n\r\n/* end popup */\r\n\r\n/* start footer style */\r\n\r\nfooter {\r\n  position: fixed;\r\n  bottom: 0;\r\n  width: 100%;\r\n  height: 50px;\r\n  border-top: 2px solid black;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  background-color: hsl(0, 0%, 0%);\r\n  padding: 40px 100px;\r\n}\r\n\r\n#logo-footer {\r\n  height: 60px;\r\n  width: 120px;\r\n}\r\n\r\n.foot-desc {\r\n  color: white;\r\n  font-family: 'Poppins', sans-serif;\r\n  font-size: 18px;\r\n  font-weight: 500;\r\n  cursor: pointer;\r\n  transition: 0.3s;\r\n  user-select: none;\r\n}\r\n\r\n.foot-desc:hover {\r\n  color: hsl(54, 100%, 50%);\r\n}\r\n\r\n/* footer style end */\r\n\r\n/* movie counter start */\r\n\r\n.movie-counter {\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: start;\r\n  justify-content: start;\r\n  padding-left: 100px;\r\n}\r\n\r\n.movie-result {\r\n  color: hsl(54, 100%, 50%);\r\n  font-family: 'Poppins', sans-serif;\r\n  font-weight: 500;\r\n  font-size: 30px;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Poppins:wght@100;300;400;500;600;700;800;900&display=swap');\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-color: hsl(0, 0%, 7%);\r\n  height: 100%;\r\n  position: relative;\r\n  background-image: url('./pattern_bg.png');\r\n  background-repeat: repeat;\r\n}\r\n\r\n.search input {\r\n  padding: 10px;\r\n  border-radius: 8px;\r\n  background-color: hsl(0, 0%, 7%);\r\n  font-family: 'Poppins', sans-serif;\r\n  font-weight: 500;\r\n  border: 2px solid hsl(0, 0%, 7%);\r\n  color: white;\r\n}\r\n\r\n.comment-section .form input {\r\n  color: #1e2c36;\r\n  font-size: large;\r\n  padding: 1%;\r\n  border-radius: 5px;\r\n}\r\n\r\n.comment-section .form input:focus {\r\n  outline: 1px solid hsl(54, 100%, 50%);\r\n  border: 1px solid hsl(54, 100%, 50%);\r\n}\r\n\r\nheader {\r\n  height: 65px;\r\n  background-color: hsl(0, 0%, 0%);\r\n  margin-bottom: 25px;\r\n  top: 0;\r\n  z-index: 99;\r\n  width: 100%;\r\n}\r\n\r\n.navbar {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding-left: 100px;\r\n  padding-right: 100px;\r\n}\r\n\r\n#logo {\r\n  height: 55px;\r\n  width: 100px;\r\n  display: flex;\r\n}\r\n\r\n.logo {\r\n  display: flex;\r\n  gap: 2px;\r\n}\r\n\r\n.logo-title {\r\n  color: white;\r\n  font-family: 'Poppins', sans-serif;\r\n  font-weight: 700;\r\n  cursor: pointer;\r\n  user-select: none;\r\n}\r\n\r\n.logo-title span {\r\n  color: hsl(54, 100%, 50%);\r\n  font-family: 'Dancing Script', cursive;\r\n  font-weight: 700;\r\n  font-size: 35px;\r\n}\r\n\r\nheader .navbar .logo .logo-link {\r\n  text-decoration: none;\r\n  height: 100%;\r\n}\r\n\r\nheader .navbar .nav-list {\r\n  list-style: none;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n  width: 500px;\r\n  height: auto;\r\n}\r\n\r\n.movie-result span {\r\n  color: white;\r\n}\r\n\r\n.nav-item-link {\r\n  font-size: 16px;\r\n  padding-top: 50px;\r\n  cursor: pointer;\r\n  color: white;\r\n  font-family: 'Poppins', sans-serif;\r\n  font-weight: 700;\r\n  text-decoration: none;\r\n  position: relative;\r\n  transition: 0.3s;\r\n  user-select: none;\r\n}\r\n\r\n.nav-item-link:hover {\r\n  color: hsl(54, 100%, 50%);\r\n}\r\n\r\n.nav-item-link::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  bottom: 0;\r\n  height: 2px;\r\n  background-color: hsl(54, 100%, 50%);\r\n  width: 0;\r\n  transition: width 0.3s ease-in-out;\r\n}\r\n\r\n.nav-item-link:hover::before {\r\n  width: 100%;\r\n}\r\n\r\n.search input::placeholder {\r\n  color: white;\r\n}\r\n\r\nheader .container .navbar .search input:focus-visible {\r\n  border: 1px solid hsl(54, 100%, 50%);\r\n  outline: 1px solid hsl(54, 100%, 50%);\r\n}\r\n\r\n/* main style start */\r\n\r\nmain {\r\n  width: 100%;\r\n  height: auto;\r\n  padding: 100px 0;\r\n}\r\n\r\n.movie-container {\r\n  height: 100%;\r\n  width: 100%;\r\n  padding: 30px;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 10px;\r\n  justify-content: center;\r\n}\r\n\r\n.card {\r\n  height: 400px;\r\n  width: 220px;\r\n  background-color: white;\r\n  cursor: pointer;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  border-radius: 5px;\r\n  transition: 0.3s;\r\n}\r\n\r\n.card:hover {\r\n  box-shadow: rgba(250, 253, 47, 0.35) 5px 20px 30px;\r\n}\r\n\r\n#play {\r\n  height: 40px;\r\n  width: 40px;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  display: none;\r\n}\r\n\r\n.card-image-container {\r\n  height: 70%;\r\n  width: 100%;\r\n  position: relative;\r\n}\r\n\r\n.card-image {\r\n  height: 100%;\r\n  width: 100%;\r\n  background-size: 100% 100%;\r\n  background-position: center;\r\n  border-top-right-radius: 5px;\r\n  border-top-left-radius: 5px;\r\n  transition: 0.3s;\r\n}\r\n\r\n.card-image-container:hover #play {\r\n  display: block;\r\n}\r\n\r\n.card-image:hover {\r\n  opacity: 0.4;\r\n}\r\n\r\n.card-content {\r\n  height: 20%;\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 0 3px;\r\n  background-color: hsl(0, 0%, 7%);\r\n  border: 0.1px solid #2b2a27;\r\n}\r\n\r\n.card-button {\r\n  height: 10%;\r\n  width: 100%;\r\n  background-color: hsl(54, 100%, 50%);\r\n  border: none;\r\n  outline: none;\r\n  font-family: 'Poppins', sans-serif;\r\n  font-weight: 500;\r\n  color: black;\r\n  cursor: pointer;\r\n  font-size: 17px;\r\n  border-bottom-right-radius: 5px;\r\n  border-bottom-left-radius: 5px;\r\n}\r\n\r\n.card-button:hover {\r\n  color: black;\r\n  background-color: white;\r\n  border: 0.4px solid hsl(54, 100%, 50%);\r\n}\r\n\r\n.movie-title {\r\n  font-family: 'Poppins', sans-serif;\r\n  font-weight: 500;\r\n  transition: 0.3s;\r\n  color: white;\r\n  width: 50%;\r\n}\r\n\r\n.movie-title:hover {\r\n  color: hsl(54, 100%, 50%);\r\n}\r\n\r\n.like-stat {\r\n  font-family: 'Poppins', sans-serif;\r\n  font-weight: 500;\r\n  transition: 0.3s;\r\n  color: white;\r\n}\r\n\r\n.like-stat:hover {\r\n  color: hsl(54, 100%, 50%);\r\n}\r\n\r\n.heart-btn {\r\n  background-color: white;\r\n  border: none;\r\n  cursor: pointer;\r\n  padding: 7px;\r\n  border-radius: 50%;\r\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\r\n  transition: background-color 0.3s ease-in-out;\r\n}\r\n\r\n.heart-btn:hover {\r\n  background-color: hsl(54, 100%, 50%);\r\n}\r\n\r\n.fa-heart {\r\n  color: red;\r\n}\r\n\r\n/* Popup */\r\n.popUp {\r\n  display: none;\r\n}\r\n\r\n.popup-blur {\r\n  position: fixed;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 15;\r\n  padding: 2rem 2rem;\r\n  overflow-y: auto;\r\n  color: #fff;\r\n  opacity: 1;\r\n  background-color: rgba(0, 0, 0, 0.93);\r\n}\r\n\r\n.popup-countainer {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 0 5%;\r\n  gap: 4px;\r\n  background: #22323d;\r\n}\r\n\r\n.img-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-bottom: 5px;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.comment-img {\r\n  margin: 1% 0;\r\n  height: 300px;\r\n  width: 400px;\r\n}\r\n\r\n.fa-close {\r\n  font-size: 30px;\r\n  align-self: flex-end;\r\n  margin: 5px 20px 0 0;\r\n  cursor: pointer;\r\n}\r\n\r\n.detail {\r\n  margin: 2px 0;\r\n  gap: 2px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.summary {\r\n  padding: 0 3%;\r\n  text-align: justify;\r\n}\r\n\r\n.comment-section {\r\n  display: flex;\r\n  width: 50%;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 5px;\r\n}\r\n\r\n.form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  width: 90%;\r\n  margin: 2%;\r\n}\r\n\r\n.form button {\r\n  height: 40px;\r\n  color: black;\r\n  border: 1px solid hsl(54, 100%, 50%);\r\n  outline: 1px solid hsl(54, 100%, 50%);\r\n  font-family: 'Poppins', sans-serif;\r\n  font-weight: 700;\r\n  font-size: 17px;\r\n  cursor: pointer;\r\n  border-radius: 5px;\r\n}\r\n\r\n.form button:hover {\r\n  background-color: hsl(54, 100%, 50%);\r\n  outline: none;\r\n  border: none;\r\n}\r\n\r\n#submit {\r\n  width: 100%;\r\n  margin-bottom: 10px;\r\n}\r\n\r\ntextarea {\r\n  color: #1e2c36;\r\n  font-size: large;\r\n  padding: 1%;\r\n  border-radius: 5px;\r\n}\r\n\r\ntextarea:focus {\r\n  outline: 1px solid hsl(54, 100%, 50%);\r\n  border: 1px solid hsl(54, 100%, 50%);\r\n}\r\n\r\n.popup-countainer .title {\r\n  color: hsl(54, 100%, 50%);\r\n  font-family: 'Poppins', sans-serif;\r\n  font-weight: 700;\r\n  font-size: 25px;\r\n}\r\n\r\n.detail .language {\r\n  font-family: 'Poppins', sans-serif;\r\n  font-weight: 300;\r\n  font-size: 15px;\r\n}\r\n\r\n.summary h4 {\r\n  color: hsl(54, 100%, 50%);\r\n  font-family: 'Poppins', sans-serif;\r\n  font-weight: 500;\r\n  font-size: 20px;\r\n}\r\n\r\n.summary p {\r\n  font-family: 'Poppins', sans-serif;\r\n  font-weight: 500;\r\n  font-size: 15px;\r\n}\r\n\r\n.comment-section h3 {\r\n  font-family: 'Poppins', sans-serif;\r\n  font-weight: 500;\r\n  font-size: 20px;\r\n}\r\n\r\n.comment-section h3 span {\r\n  color: hsl(54, 100%, 50%);\r\n}\r\n\r\n.commentList li {\r\n  font-family: 'Poppins', sans-serif;\r\n  font-weight: 500;\r\n  font-size: 15px;\r\n}\r\n\r\n.comment-section h4 {\r\n  color: hsl(54, 100%, 50%);\r\n  font-family: 'Poppins', sans-serif;\r\n  font-weight: 700;\r\n  font-size: 20px;\r\n}\r\n\r\n/* end popup */\r\n\r\n/* start footer style */\r\n\r\nfooter {\r\n  position: fixed;\r\n  bottom: 0;\r\n  width: 100%;\r\n  height: 50px;\r\n  border-top: 2px solid black;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  background-color: hsl(0, 0%, 0%);\r\n  padding: 40px 100px;\r\n}\r\n\r\n#logo-footer {\r\n  height: 60px;\r\n  width: 120px;\r\n}\r\n\r\n.foot-desc {\r\n  color: white;\r\n  font-family: 'Poppins', sans-serif;\r\n  font-size: 18px;\r\n  font-weight: 500;\r\n  cursor: pointer;\r\n  transition: 0.3s;\r\n  user-select: none;\r\n}\r\n\r\n.foot-desc:hover {\r\n  color: hsl(54, 100%, 50%);\r\n}\r\n\r\n/* footer style end */\r\n\r\n/* movie counter start */\r\n\r\n.movie-counter {\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: start;\r\n  justify-content: start;\r\n  padding-left: 100px;\r\n}\r\n\r\n.movie-result {\r\n  color: hsl(54, 100%, 50%);\r\n  font-family: 'Poppins', sans-serif;\r\n  font-weight: 500;\r\n  font-size: 30px;\r\n}\r\n"],"sourceRoot":""}]);
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
  const items = allData.slice(0, 15);
  const likeFiltered = allLike.filter((like) => items.find((item) => like.item_id === item.id));
  const sortedLike = await likeFiltered.sort((a, b) => a.item_id - b.item_id);
  const movieResult = document.querySelector('.movie-counter');
  movieResult.innerHTML = `<h2 class="movie-result">Movies Total: <span>${items.length}</span></h2>`;
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

window.onload = () => update();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDZHQUFtQztBQUMvRSw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLCtJQUErSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxrQkFBa0I7QUFDekwseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBLDZDQUE2QyxnQkFBZ0IsaUJBQWlCLDZCQUE2QixLQUFLLGNBQWMsdUNBQXVDLG1CQUFtQix5QkFBeUIsd0VBQXdFLGdDQUFnQyxLQUFLLHVCQUF1QixvQkFBb0IseUJBQXlCLHVDQUF1Qyx5Q0FBeUMsdUJBQXVCLHVDQUF1QyxtQkFBbUIsS0FBSyxzQ0FBc0MscUJBQXFCLHVCQUF1QixrQkFBa0IseUJBQXlCLEtBQUssNENBQTRDLDRDQUE0QywyQ0FBMkMsS0FBSyxnQkFBZ0IsbUJBQW1CLHVDQUF1QywwQkFBMEIsYUFBYSxrQkFBa0Isa0JBQWtCLEtBQUssaUJBQWlCLGtCQUFrQixtQkFBbUIsb0JBQW9CLDBCQUEwQixxQ0FBcUMsMEJBQTBCLDBCQUEwQiwyQkFBMkIsS0FBSyxlQUFlLG1CQUFtQixtQkFBbUIsb0JBQW9CLEtBQUssZUFBZSxvQkFBb0IsZUFBZSxLQUFLLHFCQUFxQixtQkFBbUIseUNBQXlDLHVCQUF1QixzQkFBc0Isd0JBQXdCLEtBQUssMEJBQTBCLGdDQUFnQyw2Q0FBNkMsdUJBQXVCLHNCQUFzQixLQUFLLHlDQUF5Qyw0QkFBNEIsbUJBQW1CLEtBQUssa0NBQWtDLHVCQUF1QixvQkFBb0IsMEJBQTBCLG9DQUFvQywwQkFBMEIsbUJBQW1CLG1CQUFtQixLQUFLLDRCQUE0QixtQkFBbUIsS0FBSyx3QkFBd0Isc0JBQXNCLHdCQUF3QixzQkFBc0IsbUJBQW1CLHlDQUF5Qyx1QkFBdUIsNEJBQTRCLHlCQUF5Qix1QkFBdUIsd0JBQXdCLEtBQUssOEJBQThCLGdDQUFnQyxLQUFLLGdDQUFnQyxvQkFBb0IseUJBQXlCLGdCQUFnQixrQkFBa0IsMkNBQTJDLGVBQWUseUNBQXlDLEtBQUssc0NBQXNDLGtCQUFrQixLQUFLLG9DQUFvQyxtQkFBbUIsS0FBSywrREFBK0QsMkNBQTJDLDRDQUE0QyxLQUFLLDRDQUE0QyxrQkFBa0IsbUJBQW1CLHVCQUF1QixLQUFLLDBCQUEwQixtQkFBbUIsa0JBQWtCLG9CQUFvQixvQkFBb0Isc0JBQXNCLGdCQUFnQiw4QkFBOEIsS0FBSyxlQUFlLG9CQUFvQixtQkFBbUIsOEJBQThCLHNCQUFzQixvQkFBb0IsNkJBQTZCLHFDQUFxQyx5QkFBeUIsdUJBQXVCLEtBQUsscUJBQXFCLHlEQUF5RCxLQUFLLGVBQWUsbUJBQW1CLGtCQUFrQix5QkFBeUIsZUFBZSxnQkFBZ0IsdUNBQXVDLG9CQUFvQixLQUFLLCtCQUErQixrQkFBa0Isa0JBQWtCLHlCQUF5QixLQUFLLHFCQUFxQixtQkFBbUIsa0JBQWtCLGlDQUFpQyxrQ0FBa0MsbUNBQW1DLGtDQUFrQyx1QkFBdUIsS0FBSywyQ0FBMkMscUJBQXFCLEtBQUssMkJBQTJCLG1CQUFtQixLQUFLLHVCQUF1QixrQkFBa0Isa0JBQWtCLG9CQUFvQiwwQkFBMEIscUNBQXFDLHFCQUFxQix1Q0FBdUMsa0NBQWtDLEtBQUssc0JBQXNCLGtCQUFrQixrQkFBa0IsMkNBQTJDLG1CQUFtQixvQkFBb0IseUNBQXlDLHVCQUF1QixtQkFBbUIsc0JBQXNCLHNCQUFzQixzQ0FBc0MscUNBQXFDLEtBQUssNEJBQTRCLG1CQUFtQiw4QkFBOEIsNkNBQTZDLEtBQUssc0JBQXNCLHlDQUF5Qyx1QkFBdUIsdUJBQXVCLG1CQUFtQixpQkFBaUIsS0FBSyw0QkFBNEIsZ0NBQWdDLEtBQUssb0JBQW9CLHlDQUF5Qyx1QkFBdUIsdUJBQXVCLG1CQUFtQixLQUFLLDBCQUEwQixnQ0FBZ0MsS0FBSyxvQkFBb0IsOEJBQThCLG1CQUFtQixzQkFBc0IsbUJBQW1CLHlCQUF5Qiw2Q0FBNkMsb0RBQW9ELEtBQUssMEJBQTBCLDJDQUEyQyxLQUFLLG1CQUFtQixpQkFBaUIsS0FBSywrQkFBK0Isb0JBQW9CLEtBQUsscUJBQXFCLHNCQUFzQixhQUFhLGtCQUFrQixtQkFBbUIsa0JBQWtCLHlCQUF5Qix1QkFBdUIsa0JBQWtCLGlCQUFpQiw0Q0FBNEMsS0FBSywyQkFBMkIsb0JBQW9CLDZCQUE2Qiw4QkFBOEIsMEJBQTBCLG1CQUFtQixlQUFlLDBCQUEwQixLQUFLLHdCQUF3QixvQkFBb0IsOEJBQThCLHlCQUF5QixrQkFBa0IsbUJBQW1CLEtBQUssc0JBQXNCLG1CQUFtQixvQkFBb0IsbUJBQW1CLEtBQUssbUJBQW1CLHNCQUFzQiwyQkFBMkIsMkJBQTJCLHNCQUFzQixLQUFLLGlCQUFpQixvQkFBb0IsZUFBZSxvQkFBb0IsNkJBQTZCLDhCQUE4QiwwQkFBMEIsS0FBSyxrQkFBa0Isb0JBQW9CLDBCQUEwQixLQUFLLDBCQUEwQixvQkFBb0IsaUJBQWlCLDZCQUE2QiwwQkFBMEIsZUFBZSxLQUFLLGVBQWUsb0JBQW9CLDZCQUE2QixnQkFBZ0IsaUJBQWlCLGlCQUFpQixLQUFLLHNCQUFzQixtQkFBbUIsbUJBQW1CLDJDQUEyQyw0Q0FBNEMseUNBQXlDLHVCQUF1QixzQkFBc0Isc0JBQXNCLHlCQUF5QixLQUFLLDRCQUE0QiwyQ0FBMkMsb0JBQW9CLG1CQUFtQixLQUFLLGlCQUFpQixrQkFBa0IsMEJBQTBCLEtBQUssa0JBQWtCLHFCQUFxQix1QkFBdUIsa0JBQWtCLHlCQUF5QixLQUFLLHdCQUF3Qiw0Q0FBNEMsMkNBQTJDLEtBQUssa0NBQWtDLGdDQUFnQyx5Q0FBeUMsdUJBQXVCLHNCQUFzQixLQUFLLDJCQUEyQix5Q0FBeUMsdUJBQXVCLHNCQUFzQixLQUFLLHFCQUFxQixnQ0FBZ0MseUNBQXlDLHVCQUF1QixzQkFBc0IsS0FBSyxvQkFBb0IseUNBQXlDLHVCQUF1QixzQkFBc0IsS0FBSyw2QkFBNkIseUNBQXlDLHVCQUF1QixzQkFBc0IsS0FBSyxrQ0FBa0MsZ0NBQWdDLEtBQUsseUJBQXlCLHlDQUF5Qyx1QkFBdUIsc0JBQXNCLEtBQUssNkJBQTZCLGdDQUFnQyx5Q0FBeUMsdUJBQXVCLHNCQUFzQixLQUFLLHVFQUF1RSxzQkFBc0IsZ0JBQWdCLGtCQUFrQixtQkFBbUIsa0NBQWtDLG9CQUFvQiwwQkFBMEIscUNBQXFDLHVDQUF1QywwQkFBMEIsS0FBSyxzQkFBc0IsbUJBQW1CLG1CQUFtQixLQUFLLG9CQUFvQixtQkFBbUIseUNBQXlDLHNCQUFzQix1QkFBdUIsc0JBQXNCLHVCQUF1Qix3QkFBd0IsS0FBSywwQkFBMEIsZ0NBQWdDLEtBQUssdUZBQXVGLGtCQUFrQixvQkFBb0IseUJBQXlCLDZCQUE2QiwwQkFBMEIsS0FBSyx1QkFBdUIsZ0NBQWdDLHlDQUF5Qyx1QkFBdUIsc0JBQXNCLEtBQUssV0FBVyxnRkFBZ0YsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxVQUFVLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtB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QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsMkRBQTJELHdEQUFlO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGlFQUFlLFlBQVk7Ozs7Ozs7Ozs7Ozs7O0FDM0UzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb3ZpZXMtZmluYWwtY2Fwc3RvbmUtbWljcm92ZXJzZS1qYXZhc2NyaXB0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9tb3ZpZXMtZmluYWwtY2Fwc3RvbmUtbWljcm92ZXJzZS1qYXZhc2NyaXB0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9tb3ZpZXMtZmluYWwtY2Fwc3RvbmUtbWljcm92ZXJzZS1qYXZhc2NyaXB0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9tb3ZpZXMtZmluYWwtY2Fwc3RvbmUtbWljcm92ZXJzZS1qYXZhc2NyaXB0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbW92aWVzLWZpbmFsLWNhcHN0b25lLW1pY3JvdmVyc2UtamF2YXNjcmlwdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9tb3ZpZXMtZmluYWwtY2Fwc3RvbmUtbWljcm92ZXJzZS1qYXZhc2NyaXB0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL21vdmllcy1maW5hbC1jYXBzdG9uZS1taWNyb3ZlcnNlLWphdmFzY3JpcHQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL21vdmllcy1maW5hbC1jYXBzdG9uZS1taWNyb3ZlcnNlLWphdmFzY3JpcHQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbW92aWVzLWZpbmFsLWNhcHN0b25lLW1pY3JvdmVyc2UtamF2YXNjcmlwdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9tb3ZpZXMtZmluYWwtY2Fwc3RvbmUtbWljcm92ZXJzZS1qYXZhc2NyaXB0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbW92aWVzLWZpbmFsLWNhcHN0b25lLW1pY3JvdmVyc2UtamF2YXNjcmlwdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL21vdmllcy1maW5hbC1jYXBzdG9uZS1taWNyb3ZlcnNlLWphdmFzY3JpcHQvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbW92aWVzLWZpbmFsLWNhcHN0b25lLW1pY3JvdmVyc2UtamF2YXNjcmlwdC8uL3NyYy9tb2R1bGVzL2FwaS5qcyIsIndlYnBhY2s6Ly9tb3ZpZXMtZmluYWwtY2Fwc3RvbmUtbWljcm92ZXJzZS1qYXZhc2NyaXB0Ly4vc3JjL21vZHVsZXMvY29tbWVudC5qcyIsIndlYnBhY2s6Ly9tb3ZpZXMtZmluYWwtY2Fwc3RvbmUtbWljcm92ZXJzZS1qYXZhc2NyaXB0Ly4vc3JjL21vZHVsZXMvY291bnRlcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vcGF0dGVybl9iZy5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURhbmNpbmcrU2NyaXB0OndnaHRANzAwJmZhbWlseT1Qb3BwaW5zOndnaHRAMTAwOzMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwOzkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDclKTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoIGlucHV0IHtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDclKTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgaHNsKDAsIDAlLCA3JSk7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LXNlY3Rpb24gLmZvcm0gaW5wdXQge1xcclxcbiAgY29sb3I6ICMxZTJjMzY7XFxyXFxuICBmb250LXNpemU6IGxhcmdlO1xcclxcbiAgcGFkZGluZzogMSU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LXNlY3Rpb24gLmZvcm0gaW5wdXQ6Zm9jdXMge1xcclxcbiAgb3V0bGluZTogMXB4IHNvbGlkIGhzbCg1NCwgMTAwJSwgNTAlKTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGhzbCg1NCwgMTAwJSwgNTAlKTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIGhlaWdodDogNjVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgMCUpO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHotaW5kZXg6IDk5O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xcclxcbiAgcGFkZGluZy1yaWdodDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbiNsb2dvIHtcXHJcXG4gIGhlaWdodDogNTVweDtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28tdGl0bGUge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28tdGl0bGUgc3BhbiB7XFxyXFxuICBjb2xvcjogaHNsKDU0LCAxMDAlLCA1MCUpO1xcclxcbiAgZm9udC1mYW1pbHk6ICdEYW5jaW5nIFNjcmlwdCcsIGN1cnNpdmU7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgZm9udC1zaXplOiAzNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgLm5hdmJhciAubG9nbyAubG9nby1saW5rIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIC5uYXZiYXIgLm5hdi1saXN0IHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiA1MDBweDtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLXJlc3VsdCBzcGFuIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1pdGVtLWxpbmsge1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgcGFkZGluZy10b3A6IDUwcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1pdGVtLWxpbms6aG92ZXIge1xcclxcbiAgY29sb3I6IGhzbCg1NCwgMTAwJSwgNTAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1pdGVtLWxpbms6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGhlaWdodDogMnB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDU0LCAxMDAlLCA1MCUpO1xcclxcbiAgd2lkdGg6IDA7XFxyXFxuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWl0ZW0tbGluazpob3Zlcjo6YmVmb3JlIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoIGlucHV0OjpwbGFjZWhvbGRlciB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciAuY29udGFpbmVyIC5uYXZiYXIgLnNlYXJjaCBpbnB1dDpmb2N1cy12aXNpYmxlIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGhzbCg1NCwgMTAwJSwgNTAlKTtcXHJcXG4gIG91dGxpbmU6IDFweCBzb2xpZCBoc2woNTQsIDEwMCUsIDUwJSk7XFxyXFxufVxcclxcblxcclxcbi8qIG1haW4gc3R5bGUgc3RhcnQgKi9cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgcGFkZGluZzogMTAwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLWNvbnRhaW5lciB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDMwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIHtcXHJcXG4gIGhlaWdodDogNDAwcHg7XFxyXFxuICB3aWR0aDogMjIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQ6aG92ZXIge1xcclxcbiAgYm94LXNoYWRvdzogcmdiYSgyNTAsIDI1MywgNDcsIDAuMzUpIDVweCAyMHB4IDMwcHg7XFxyXFxufVxcclxcblxcclxcbiNwbGF5IHtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIHdpZHRoOiA0MHB4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWltYWdlLWNvbnRhaW5lciB7XFxyXFxuICBoZWlnaHQ6IDcwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1pbWFnZSB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcXHJcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcXHJcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWltYWdlLWNvbnRhaW5lcjpob3ZlciAjcGxheSB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtaW1hZ2U6aG92ZXIge1xcclxcbiAgb3BhY2l0eTogMC40O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1jb250ZW50IHtcXHJcXG4gIGhlaWdodDogMjAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHBhZGRpbmc6IDAgM3B4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA3JSk7XFxyXFxuICBib3JkZXI6IDAuMXB4IHNvbGlkICMyYjJhMjc7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWJ1dHRvbiB7XFxyXFxuICBoZWlnaHQ6IDEwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDU0LCAxMDAlLCA1MCUpO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZm9udC1zaXplOiAxN3B4O1xcclxcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcXHJcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiAwLjRweCBzb2xpZCBoc2woNTQsIDEwMCUsIDUwJSk7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS10aXRsZSB7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtdGl0bGU6aG92ZXIge1xcclxcbiAgY29sb3I6IGhzbCg1NCwgMTAwJSwgNTAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2Utc3RhdCB7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5saWtlLXN0YXQ6aG92ZXIge1xcclxcbiAgY29sb3I6IGhzbCg1NCwgMTAwJSwgNTAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYXJ0LWJ0biB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDdweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhcnQtYnRuOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCg1NCwgMTAwJSwgNTAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWhlYXJ0IHtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbi8qIFBvcHVwICovXFxyXFxuLnBvcFVwIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1ibHVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgei1pbmRleDogMTU7XFxyXFxuICBwYWRkaW5nOiAycmVtIDJyZW07XFxyXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkzKTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWNvdW50YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDAgNSU7XFxyXFxuICBnYXA6IDRweDtcXHJcXG4gIGJhY2tncm91bmQ6ICMyMjMyM2Q7XFxyXFxufVxcclxcblxcclxcbi5pbWctY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1pbWcge1xcclxcbiAgbWFyZ2luOiAxJSAwO1xcclxcbiAgaGVpZ2h0OiAzMDBweDtcXHJcXG4gIHdpZHRoOiA0MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWNsb3NlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgbWFyZ2luOiA1cHggMjBweCAwIDA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWwge1xcclxcbiAgbWFyZ2luOiAycHggMDtcXHJcXG4gIGdhcDogMnB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zdW1tYXJ5IHtcXHJcXG4gIHBhZGRpbmc6IDAgMyU7XFxyXFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1zZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgbWFyZ2luOiAyJTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0gYnV0dG9uIHtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGhzbCg1NCwgMTAwJSwgNTAlKTtcXHJcXG4gIG91dGxpbmU6IDFweCBzb2xpZCBoc2woNTQsIDEwMCUsIDUwJSk7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTdweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0gYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCg1NCwgMTAwJSwgNTAlKTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNzdWJtaXQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG50ZXh0YXJlYSB7XFxyXFxuICBjb2xvcjogIzFlMmMzNjtcXHJcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxuICBwYWRkaW5nOiAxJTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxudGV4dGFyZWE6Zm9jdXMge1xcclxcbiAgb3V0bGluZTogMXB4IHNvbGlkIGhzbCg1NCwgMTAwJSwgNTAlKTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGhzbCg1NCwgMTAwJSwgNTAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWNvdW50YWluZXIgLnRpdGxlIHtcXHJcXG4gIGNvbG9yOiBoc2woNTQsIDEwMCUsIDUwJSk7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbCAubGFuZ3VhZ2Uge1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5zdW1tYXJ5IGg0IHtcXHJcXG4gIGNvbG9yOiBoc2woNTQsIDEwMCUsIDUwJSk7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnN1bW1hcnkgcCB7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtc2VjdGlvbiBoMyB7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtc2VjdGlvbiBoMyBzcGFuIHtcXHJcXG4gIGNvbG9yOiBoc2woNTQsIDEwMCUsIDUwJSk7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50TGlzdCBsaSB7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtc2VjdGlvbiBoNCB7XFxyXFxuICBjb2xvcjogaHNsKDU0LCAxMDAlLCA1MCUpO1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIGVuZCBwb3B1cCAqL1xcclxcblxcclxcbi8qIHN0YXJ0IGZvb3RlciBzdHlsZSAqL1xcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCAwJSk7XFxyXFxuICBwYWRkaW5nOiA0MHB4IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbG9nby1mb290ZXIge1xcclxcbiAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgd2lkdGg6IDEyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdC1kZXNjIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdC1kZXNjOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiBoc2woNTQsIDEwMCUsIDUwJSk7XFxyXFxufVxcclxcblxcclxcbi8qIGZvb3RlciBzdHlsZSBlbmQgKi9cXHJcXG5cXHJcXG4vKiBtb3ZpZSBjb3VudGVyIHN0YXJ0ICovXFxyXFxuXFxyXFxuLm1vdmllLWNvdW50ZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXHJcXG4gIHBhZGRpbmctbGVmdDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1yZXN1bHQge1xcclxcbiAgY29sb3I6IGhzbCg1NCwgMTAwJSwgNTAlKTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgZm9udC1zaXplOiAzMHB4O1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5REFBeUM7RUFDekMseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixnQ0FBZ0M7RUFDaEMsa0NBQWtDO0VBQ2xDLGdCQUFnQjtFQUNoQixnQ0FBZ0M7RUFDaEMsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtF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WixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0NBQWtDO0VBQ2xDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUEscUJBQXFCOztBQUVyQix3QkFBd0I7O0FBRXhCO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQ0FBa0M7RUFDbEMsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQ6d2dodEA3MDAmZmFtaWx5PVBvcHBpbnM6d2dodEAxMDA7MzAwOzQwMDs1MDA7NjAwOzcwMDs4MDA7OTAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA3JSk7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vcGF0dGVybl9iZy5wbmcnKTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2ggaW5wdXQge1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgNyUpO1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBoc2woMCwgMCUsIDclKTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtc2VjdGlvbiAuZm9ybSBpbnB1dCB7XFxyXFxuICBjb2xvcjogIzFlMmMzNjtcXHJcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxuICBwYWRkaW5nOiAxJTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtc2VjdGlvbiAuZm9ybSBpbnB1dDpmb2N1cyB7XFxyXFxuICBvdXRsaW5lOiAxcHggc29saWQgaHNsKDU0LCAxMDAlLCA1MCUpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgaHNsKDU0LCAxMDAlLCA1MCUpO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgaGVpZ2h0OiA2NXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCAwJSk7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xcclxcbiAgdG9wOiAwO1xcclxcbiAgei1pbmRleDogOTk7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmctbGVmdDogMTAwcHg7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2xvZ28ge1xcclxcbiAgaGVpZ2h0OiA1NXB4O1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nby10aXRsZSB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nby10aXRsZSBzcGFuIHtcXHJcXG4gIGNvbG9yOiBoc2woNTQsIDEwMCUsIDUwJSk7XFxyXFxuICBmb250LWZhbWlseTogJ0RhbmNpbmcgU2NyaXB0JywgY3Vyc2l2ZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBmb250LXNpemU6IDM1cHg7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciAubmF2YmFyIC5sb2dvIC5sb2dvLWxpbmsge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgLm5hdmJhciAubmF2LWxpc3Qge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDUwMHB4O1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtcmVzdWx0IHNwYW4ge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWl0ZW0tbGluayB7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBwYWRkaW5nLXRvcDogNTBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWl0ZW0tbGluazpob3ZlciB7XFxyXFxuICBjb2xvcjogaHNsKDU0LCAxMDAlLCA1MCUpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWl0ZW0tbGluazo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgaGVpZ2h0OiAycHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woNTQsIDEwMCUsIDUwJSk7XFxyXFxuICB3aWR0aDogMDtcXHJcXG4gIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5uYXYtaXRlbS1saW5rOmhvdmVyOjpiZWZvcmUge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2ggaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIC5jb250YWluZXIgLm5hdmJhciAuc2VhcmNoIGlucHV0OmZvY3VzLXZpc2libGUge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgaHNsKDU0LCAxMDAlLCA1MCUpO1xcclxcbiAgb3V0bGluZTogMXB4IHNvbGlkIGhzbCg1NCwgMTAwJSwgNTAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogbWFpbiBzdHlsZSBzdGFydCAqL1xcclxcblxcclxcbm1haW4ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBwYWRkaW5nOiAxMDBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtY29udGFpbmVyIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMzBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQge1xcclxcbiAgaGVpZ2h0OiA0MDBweDtcXHJcXG4gIHdpZHRoOiAyMjBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZDpob3ZlciB7XFxyXFxuICBib3gtc2hhZG93OiByZ2JhKDI1MCwgMjUzLCA0NywgMC4zNSkgNXB4IDIwcHggMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuI3BsYXkge1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtaW1hZ2UtY29udGFpbmVyIHtcXHJcXG4gIGhlaWdodDogNzAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWltYWdlIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xcclxcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtaW1hZ2UtY29udGFpbmVyOmhvdmVyICNwbGF5IHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1pbWFnZTpob3ZlciB7XFxyXFxuICBvcGFjaXR5OiAwLjQ7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWNvbnRlbnQge1xcclxcbiAgaGVpZ2h0OiAyMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgcGFkZGluZzogMCAzcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDclKTtcXHJcXG4gIGJvcmRlcjogMC4xcHggc29saWQgIzJiMmEyNztcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtYnV0dG9uIHtcXHJcXG4gIGhlaWdodDogMTAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woNTQsIDEwMCUsIDUwJSk7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LXNpemU6IDE3cHg7XFxyXFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xcclxcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1idXR0b246aG92ZXIge1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXI6IDAuNHB4IHNvbGlkIGhzbCg1NCwgMTAwJSwgNTAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLXRpdGxlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS10aXRsZTpob3ZlciB7XFxyXFxuICBjb2xvcjogaHNsKDU0LCAxMDAlLCA1MCUpO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZS1zdGF0IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2Utc3RhdDpob3ZlciB7XFxyXFxuICBjb2xvcjogaHNsKDU0LCAxMDAlLCA1MCUpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhcnQtYnRuIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgcGFkZGluZzogN3B4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5oZWFydC1idG46aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDU0LCAxMDAlLCA1MCUpO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtaGVhcnQge1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLyogUG9wdXAgKi9cXHJcXG4ucG9wVXAge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWJsdXIge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB6LWluZGV4OiAxNTtcXHJcXG4gIHBhZGRpbmc6IDJyZW0gMnJlbTtcXHJcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOTMpO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY291bnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMCA1JTtcXHJcXG4gIGdhcDogNHB4O1xcclxcbiAgYmFja2dyb3VuZDogIzIyMzIzZDtcXHJcXG59XFxyXFxuXFxyXFxuLmltZy1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWltZyB7XFxyXFxuICBtYXJnaW46IDElIDA7XFxyXFxuICBoZWlnaHQ6IDMwMHB4O1xcclxcbiAgd2lkdGg6IDQwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtY2xvc2Uge1xcclxcbiAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxuICBtYXJnaW46IDVweCAyMHB4IDAgMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbCB7XFxyXFxuICBtYXJnaW46IDJweCAwO1xcclxcbiAgZ2FwOiAycHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnN1bW1hcnkge1xcclxcbiAgcGFkZGluZzogMCAzJTtcXHJcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LXNlY3Rpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBtYXJnaW46IDIlO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybSBidXR0b24ge1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgaHNsKDU0LCAxMDAlLCA1MCUpO1xcclxcbiAgb3V0bGluZTogMXB4IHNvbGlkIGhzbCg1NCwgMTAwJSwgNTAlKTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgZm9udC1zaXplOiAxN3B4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybSBidXR0b246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDU0LCAxMDAlLCA1MCUpO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI3N1Ym1pdCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxufVxcclxcblxcclxcbnRleHRhcmVhIHtcXHJcXG4gIGNvbG9yOiAjMWUyYzM2O1xcclxcbiAgZm9udC1zaXplOiBsYXJnZTtcXHJcXG4gIHBhZGRpbmc6IDElO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG50ZXh0YXJlYTpmb2N1cyB7XFxyXFxuICBvdXRsaW5lOiAxcHggc29saWQgaHNsKDU0LCAxMDAlLCA1MCUpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgaHNsKDU0LCAxMDAlLCA1MCUpO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY291bnRhaW5lciAudGl0bGUge1xcclxcbiAgY29sb3I6IGhzbCg1NCwgMTAwJSwgNTAlKTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlsIC5sYW5ndWFnZSB7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnN1bW1hcnkgaDQge1xcclxcbiAgY29sb3I6IGhzbCg1NCwgMTAwJSwgNTAlKTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc3VtbWFyeSBwIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1zZWN0aW9uIGgzIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1zZWN0aW9uIGgzIHNwYW4ge1xcclxcbiAgY29sb3I6IGhzbCg1NCwgMTAwJSwgNTAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRMaXN0IGxpIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1zZWN0aW9uIGg0IHtcXHJcXG4gIGNvbG9yOiBoc2woNTQsIDEwMCUsIDUwJSk7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogZW5kIHBvcHVwICovXFxyXFxuXFxyXFxuLyogc3RhcnQgZm9vdGVyIHN0eWxlICovXFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDAlKTtcXHJcXG4gIHBhZGRpbmc6IDQwcHggMTAwcHg7XFxyXFxufVxcclxcblxcclxcbiNsb2dvLWZvb3RlciB7XFxyXFxuICBoZWlnaHQ6IDYwcHg7XFxyXFxuICB3aWR0aDogMTIwcHg7XFxyXFxufVxcclxcblxcclxcbi5mb290LWRlc2Mge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5mb290LWRlc2M6aG92ZXIge1xcclxcbiAgY29sb3I6IGhzbCg1NCwgMTAwJSwgNTAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogZm9vdGVyIHN0eWxlIGVuZCAqL1xcclxcblxcclxcbi8qIG1vdmllIGNvdW50ZXIgc3RhcnQgKi9cXHJcXG5cXHJcXG4ubW92aWUtY291bnRlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLXJlc3VsdCB7XFxyXFxuICBjb2xvcjogaHNsKDU0LCAxMDAlLCA1MCUpO1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBmb250LXNpemU6IDMwcHg7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBkaXNwbGF5UG9wVXAgZnJvbSAnLi9tb2R1bGVzL2NvbW1lbnQuanMnO1xyXG5pbXBvcnQgJy4vbG9nby5wbmcnO1xyXG5pbXBvcnQgJy4vcGxheS5wbmcnO1xyXG5pbXBvcnQgJy4vbGlrZS5wbmcnO1xyXG5pbXBvcnQgTW92aWVzIGZyb20gJy4vbW9kdWxlcy9hcGkuanMnO1xyXG5cclxuY29uc3QgbW92aWUgPSBuZXcgTW92aWVzKCk7XHJcblxyXG5jb25zdCB1cGRhdGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgbW92aWVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW92aWUtY29udGFpbmVyJyk7XHJcbiAgY29uc3QgYWxsTGlrZSA9IGF3YWl0IG1vdmllLmdldExpa2UoKTtcclxuICBjb25zdCBhbGxEYXRhID0gYXdhaXQgbW92aWUuZ2V0TW92aWVzKCk7XHJcbiAgY29uc3QgaXRlbXMgPSBhbGxEYXRhLnNsaWNlKDAsIDE1KTtcclxuICBjb25zdCBsaWtlRmlsdGVyZWQgPSBhbGxMaWtlLmZpbHRlcigobGlrZSkgPT4gaXRlbXMuZmluZCgoaXRlbSkgPT4gbGlrZS5pdGVtX2lkID09PSBpdGVtLmlkKSk7XHJcbiAgY29uc3Qgc29ydGVkTGlrZSA9IGF3YWl0IGxpa2VGaWx0ZXJlZC5zb3J0KChhLCBiKSA9PiBhLml0ZW1faWQgLSBiLml0ZW1faWQpO1xyXG4gIGNvbnN0IG1vdmllUmVzdWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vdmllLWNvdW50ZXInKTtcclxuICBtb3ZpZVJlc3VsdC5pbm5lckhUTUwgPSBgPGgyIGNsYXNzPVwibW92aWUtcmVzdWx0XCI+TW92aWVzIFRvdGFsOiA8c3Bhbj4ke2l0ZW1zLmxlbmd0aH08L3NwYW4+PC9oMj5gO1xyXG4gIGxldCBodG1sID0gJyc7XHJcbiAgaXRlbXMuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNhcmQuY2xhc3NOYW1lID0gJ2NhcmQnO1xyXG4gICAgY2FyZC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBpbmRleCk7XHJcbiAgICBodG1sID0gYFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaW1hZ2UtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImNhcmQtaW1hZ2VcIiBzcmM9XCIke2VsZW1lbnQuaW1hZ2UubWVkaXVtfVwiIGFsdD1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9wbGF5LnBuZ1wiIGFsdD1cIlwiIGlkPVwicGxheVwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtb3ZpZS10aXRsZVwiPiR7ZWxlbWVudC5uYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiaGVhcnQtYnRuXCIgaWQ9XCIke2VsZW1lbnQuaWR9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1oZWFydFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibGlrZS1zdGF0XCI+JHtzb3J0ZWRMaWtlW2luZGV4XS5saWtlc30gbGlrZXM8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjYXJkLWJ1dHRvblwiIGlkPVwiJHtlbGVtZW50LmlkfVwiIHR5cGU9XCJzdWJtaXRcIj5Db21tZW50czwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIGA7XHJcbiAgICBjYXJkLmlubmVySFRNTCA9IGh0bWw7XHJcbiAgICBtb3ZpZUNvbnRhaW5lci5hcHBlbmQoY2FyZCk7XHJcbiAgICBjb25zdCBjb21tZW50QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNhcmRbZGF0YS1pbmRleD1cIiR7aW5kZXh9XCJdIC5jYXJkLWJ1dHRvbmApO1xyXG4gICAgY29tbWVudEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcclxuICAgICAgZGlzcGxheVBvcFVwKGVsZW1lbnQsIGluZGV4KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGxpa2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY2FyZFtkYXRhLWluZGV4PVwiJHtpbmRleH1cIl0gLmhlYXJ0LWJ0bmApO1xyXG4gICAgbGlrZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgYnRuSWQgPSBsaWtlQnRuLmdldEF0dHJpYnV0ZSgnaWQnKTtcclxuICAgICAgY29uc3QgbGlrZUlkID0gcGFyc2VJbnQoYnRuSWQsIDEwKTtcclxuICAgICAgYXdhaXQgbW92aWUucG9zdExpa2UobGlrZUlkKTtcclxuICAgICAgY29uc3QgY3VycmVudExpa2UgPSBhd2FpdCBtb3ZpZS5nZXRMaWtlKCk7XHJcbiAgICAgIGNvbnN0IGxpa2VDaGFuZ2UgPSBjdXJyZW50TGlrZS5maW5kKChsaWtlKSA9PiBsaWtlLml0ZW1faWQgPT09IGxpa2VJZCk7XHJcbiAgICAgIGNvbnN0IGxpa2VDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNhcmRbZGF0YS1pbmRleD1cIiR7aW5kZXh9XCJdIC5saWtlLXN0YXRgKTtcclxuICAgICAgbGlrZUNvbnRlbnQudGV4dENvbnRlbnQgPSBgJHtsaWtlQ2hhbmdlLmxpa2VzfSBsaWtlc2A7XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuXHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB1cGRhdGUoKTsiLCJjb25zdCBpbnZvbHZlbWVudElkID0gJ1ZkVWFKWmpKaFVqbHBtMzg0M0pNJztcclxuY29uc3QgY29tbWVudFVybCA9IGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8ke2ludm9sdmVtZW50SWR9L2NvbW1lbnRzYDtcclxuY29uc3QgbGlrZVVybCA9IGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8ke2ludm9sdmVtZW50SWR9L2xpa2VzL2A7XHJcblxyXG4vLyBBUEkgZm9yIHBvc3QgQ29tbWVudFxyXG5cclxuY2xhc3MgTW92aWVzIHtcclxuICBwb3N0TGlrZSA9IGFzeW5jIChsaWtlSWQpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGl0ZW1faWQ6IHBhcnNlSW50KGxpa2VJZCwgMTApLFxyXG4gICAgfTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIGxpa2VVcmwsXHJcbiAgICAgIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gIH07XHJcblxyXG4gIGdldE1vdmllcyA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2hvd3MnKTtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICByZXR1cm4gZXJyb3I7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRMaWtlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChsaWtlVXJsKTtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICByZXR1cm4gZXJyb3I7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwb3N0Q29tbWVudCA9IGFzeW5jIChpbmRleCwgdXNlcm5hbWUsIGNvbW1lbnQpID0+IHtcclxuICAgIGF3YWl0IGZldGNoKGNvbW1lbnRVcmwsIHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBpdGVtX2lkOiBpbmRleCxcclxuICAgICAgICB1c2VybmFtZSxcclxuICAgICAgICBjb21tZW50LFxyXG4gICAgICB9KSxcclxuICAgICAgaGVhZGVyczogeyAnY29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnIH0sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldENvbW1lbnQgPSBhc3luYyAoaW5kZXgpID0+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7Y29tbWVudFVybH0/aXRlbV9pZD0ke2luZGV4fWApO1xyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHJldHVybiB1c2VyO1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vdmllcztcclxuIiwiaW1wb3J0IGdldENvbW1lbnRDb3VudCBmcm9tICcuL2NvdW50ZXJzLmpzJztcclxuaW1wb3J0IE1vdmllcyBmcm9tICcuL2FwaS5qcyc7XHJcblxyXG5jb25zdCBtb3ZpZSA9IG5ldyBNb3ZpZXMoKTtcclxuY29uc3QgYXBwZW5kQ29tbWVudCA9IChjb21tZW50KSA9PiB7XHJcbiAgY29uc3QgY29tbWVudExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gIGNvbW1lbnRMaXN0LmlubmVySFRNTCA9IGAgPHNwYW4gY2xhc3MgPVwiZGF0ZVwiPiR7Y29tbWVudC5jcmVhdGlvbl9kYXRlfSA8L3NwYW4+XHJcbiAgIDxzcGFuIGNsYXNzPVwibmFtZVwiPiR7Y29tbWVudC51c2VybmFtZX0gPC9zcGFuPjxzcGFuIGNsYXNzPVwiY29tbWVudFwiPiR7Y29tbWVudC5jb21tZW50fTwvc3Bhbj5gO1xyXG4gIHJldHVybiBjb21tZW50TGlzdDtcclxufTtcclxuXHJcbmNvbnN0IGRpc3BsYXlQb3BVcCA9IGFzeW5jIChlbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gIGxldCBpbm5lckhUTUwgPSAnJztcclxuICBpbm5lckhUTUwgKz0gYDxkaXYgaWQgPSBcIiR7ZWxlbWVudC5pZH1cIiBjbGFzcz1cInBvcHVwLWJsdXJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInBvcHVwLWNvdW50YWluZXJcIj5cclxuICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jbG9zZVwiPjwvaT5cclxuICAgICAgICAgIDxkaXYgY2xhc3MgPVwiaW1nLWNvbnRhaW5lclwiPjxpbWcgY2xhc3M9XCJjb21tZW50LWltZ1wiIHNyYz1cIiR7ZWxlbWVudC5pbWFnZS5tZWRpdW19XCIgYWx0PVwiXCI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxoMiBjbGFzcz1cInRpdGxlXCI+JHtlbGVtZW50Lm5hbWV9PC9oMj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXRhaWxcIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzcz1cImxhbmdhdWdlXCI+TGFuZ3VhZ2U6ICR7ZWxlbWVudC5sYW5ndWFnZX08L3A+IFxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwicnVudGltZVwiPlJ1bnRpbWU6ICR7ZWxlbWVudC5ydW50aW1lfSBtaW5zPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzID1cInN1bW1hcnlcIj4gXHJcbiAgICAgICAgICAgIDxoND5TdW1tcnk6PC9oND5cclxuICAgICAgICAgICAgJHtlbGVtZW50LnN1bW1hcnl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50LXNlY3Rpb25cIj5cclxuICAgICAgICAgIDxoMz5Db21tZW50cyg8c3BhbiBpZD1cImNvbW1lbnQtY291bnRcIj4wPC9zcGFuPik8L2gzPlxyXG4gICAgICAgICAgPHVsIGNsYXNzPVwiY29tbWVudExpc3RcIj48L3VsPlxyXG4gICAgICAgICAgPGg0PkFkZCBhIGNvbW1lbnQ8L2g0PlxyXG4gICAgICAgICAgPGZvcm0gY2xhc3M9XCJmb3JtXCIgYWN0aW9uPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0IGlkID0gXCJuYW1lXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIllvdXIgbmFtZVwiPlxyXG4gICAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwiY29tbWVudC10ZXh0XCIgaWQ9XCJ0ZXh0XCIgY29scz1cIjIwXCIgcm93cz1cIjVcIiBwbGFjZWhvbGRlcj1cIllvdXIgaW5zaWdodFwiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInN1Ym1pdFwiIHR5cGU9XCJzdWJtaXRcIj5Db21tZW50PC9idXR0b24+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICA8L2Rpdj5gO1xyXG4gIGNvbnN0IHBvcFVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcFVwJyk7XHJcbiAgcG9wVXAuaW5uZXJIVE1MID0gaW5uZXJIVE1MO1xyXG4gIHBvcFVwLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhLWNsb3NlJyk7XHJcbiAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBwb3BVcC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBjb21tZW50TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50TGlzdCcpO1xyXG4gIGNvbnN0IGNvbW1lbnRzID0gYXdhaXQgbW92aWUuZ2V0Q29tbWVudChpbmRleCk7XHJcbiAgaWYgKGNvbW1lbnRzLmxlbmd0aCA+PSAxKSB7XHJcbiAgICBjb21tZW50cy5mb3JFYWNoKChjb21tZW50KSA9PiB7XHJcbiAgICAgIGNvbW1lbnRMaXN0LmFwcGVuZENoaWxkKGFwcGVuZENvbW1lbnQoY29tbWVudCkpO1xyXG4gICAgfSk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29tbWVudC1jb3VudCcpLnRleHRDb250ZW50ID0gZ2V0Q29tbWVudENvdW50KGNvbW1lbnRzKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybScpO1xyXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUnKTtcclxuICAgIGNvbnN0IHRleHRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZXh0Jyk7XHJcbiAgICBpZiAobmFtZUlucHV0ICE9PSAnJyAmJiB0ZXh0SW5wdXQgIT09ICcnKSB7XHJcbiAgICAgIGF3YWl0IG1vdmllLnBvc3RDb21tZW50KGluZGV4LCBuYW1lSW5wdXQudmFsdWUsIHRleHRJbnB1dC52YWx1ZSk7XHJcbiAgICAgIGNvbnN0IGNvbW1lbnRMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnRMaXN0Jyk7XHJcbiAgICAgIGNvbW1lbnRMaXN0LmlubmVySFRNTCA9ICcnO1xyXG4gICAgICBuYW1lSW5wdXQudmFsdWUgPSAnJztcclxuICAgICAgdGV4dElucHV0LnZhbHVlID0gJyc7XHJcbiAgICAgIGNvbnN0IGNvbW1lbnRzID0gYXdhaXQgbW92aWUuZ2V0Q29tbWVudChpbmRleCk7XHJcbiAgICAgIGNvbW1lbnRzLmZvckVhY2goKGNvbW1lbnQpID0+IHtcclxuICAgICAgICBjb21tZW50TGlzdC5hcHBlbmRDaGlsZChhcHBlbmRDb21tZW50KGNvbW1lbnQpKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb21tZW50LWNvdW50JykudGV4dENvbnRlbnQgPSBjb21tZW50cy5sZW5ndGg7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5UG9wVXA7IiwiY29uc3QgZ2V0Q29tbWVudENvdW50ID0gKGNvbW1lbnRzKSA9PiB7XHJcbiAgY29uc3QgcmVzID0gY29tbWVudHMubGVuZ3RoO1xyXG4gIHJldHVybiByZXM7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGdldENvbW1lbnRDb3VudDsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=