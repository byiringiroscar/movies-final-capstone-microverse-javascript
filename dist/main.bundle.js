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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Poppins:wght@100;300;400;500;600;700;800;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\nbody{\r\n  background-color: #111111;\r\n  height: 100%;\r\n  position: relative;\r\n}\r\nheader {\r\n  height: 65px; \r\n  background-color: #000; \r\n  margin-bottom: 25px; \r\n  top: 0;\r\n  z-index: 99;\r\n  width: 100%;\r\n}\r\n\r\n.navbar {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding-left: 100px;\r\n  padding-right: 100px;\r\n}\r\n\r\n#logo{\r\n  height: 55px;\r\n  width: 100px;\r\n  display: flex;\r\n}\r\n.logo{\r\n  display: flex;\r\n  gap: 2px;\r\n}\r\n.logo-title{\r\n  color: white;\r\n  font-family: 'Poppins', sans-serif;\r\n  font-family: 700;\r\n  cursor: pointer;\r\n  user-select: none;\r\n}\r\n.logo-title span{\r\n  color: #FFE400;\r\n  font-family: 'Dancing Script', cursive;\r\n  font-weight: 700;\r\n  font-size: 35px;\r\n}\r\n\r\nheader .navbar .logo .logo-link {\r\n  text-decoration: none;\r\n  height: 100%;\r\n}\r\n\r\nheader .navbar .nav-list {\r\n  list-style: none;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n  width: 500px;\r\n  height: auto;\r\n}\r\n\r\n.nav-item-link{\r\n  font-size: 16px;\r\n  padding-top: 50px;\r\n  cursor: pointer;\r\n  color: white;\r\n  font-family: 'Poppins', sans-serif;\r\n  font-weight: 700;\r\n  text-decoration: none;\r\n  position: relative;\r\n  transition: 0.3;\r\n  \r\n}\r\n.nav-item-link:hover{\r\n  color: #FFE400;\r\n}\r\n.nav-item-link::before{\r\n  content: \"\";\r\n  position: absolute;\r\n  bottom: 0;\r\n  height: 2px;\r\n  background-color: #FFE400;\r\n  width: 0;\r\n  transition: width 0.3s ease-in-out;\r\n\r\n}\r\n.nav-item-link:hover::before {\r\n  width: 100%;\r\n  \r\n}\r\n\r\n.search input {\r\n  padding: 10px;\r\n  border-radius: 8px;\r\n  background-color: #111111;\r\n  font-family: 'Poppins', sans-serif;\r\n  font-weight: 500;\r\n  border: 2px solid #111111;\r\n  color: white;\r\n}\r\n.search input::placeholder{\r\n  color: white;\r\n}\r\n\r\nheader .container .navbar .search input:focus-visible {\r\n  border: 1px solid #FFE400;\r\n  outline: 1px solid #FFE400;;\r\n}\r\n/* main style start */\r\n\r\nmain{\r\n  width: 100%;\r\n  height: auto;\r\n  padding: 100px 0;\r\n}\r\n.movie-container{\r\n  height: 100%;\r\n  width: 100%;\r\n  padding: 30px;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 10px;\r\n  justify-content: center;\r\n}\r\n.card{\r\n  height: 400px;\r\n  width: 220px;\r\n  background-color: white;\r\n  cursor: pointer;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  border-radius: 5px;\r\n  transition: 0.3s;\r\n  \r\n}\r\n.card:hover{\r\n  box-shadow: rgba(250, 253, 47, 0.35) 5px 20px 30px;\r\n  \r\n}\r\n#play{\r\n  height: 40px;\r\n  width: 40px;\r\n  position: absolute;\r\n  top: 50%; \r\n  left: 50%; \r\n  transform: translate(-50%, -50%);\r\n  display: none;\r\n}\r\n\r\n.card-image-container{\r\n  height: 70%;\r\n  width: 100%;\r\n  position: relative;\r\n}\r\n\r\n.card-image{\r\n  height: 100%;\r\n  width: 100%;\r\n  background-size: 100% 100%;\r\n  background-position: center;\r\n  border-top-right-radius: 5px;\r\n  border-top-left-radius: 5px;\r\n  transition: 0.3;\r\n}\r\n.card-image-container:hover #play{\r\n  display: block;\r\n}\r\n.card-image:hover{\r\n  opacity: 0.4;\r\n}\r\n\r\n.card-content{\r\n  height: 20%;\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 0 3px;\r\n  background-color: #111111;\r\n  border: 0.1px solid #2b2a27;\r\n}\r\n.card-button{\r\n  height: 10%;\r\n  width: 100%;\r\n  background-color: #FFE400;\r\n  border: none;\r\n  outline: none;\r\n  font-family: 'Poppins', sans-serif;\r\n  font-weight: 500;\r\n  color: black;\r\n  cursor: pointer;\r\n  font-size: 17px;\r\n  border-bottom-right-radius: 5px;\r\n  border-bottom-left-radius: 5px;\r\n}\r\n.card-button:hover{\r\n  color: black;\r\n  background-color: white;\r\n  border: 0.4px solid #FFE400;\r\n  \r\n}\r\n.movie-title{\r\n  font-family: 'Poppins', sans-serif;\r\n  font-weight: 500;\r\n  transition: 0.3s;\r\n  color: white;\r\n}\r\n.movie-title:hover{\r\n  color: #FFE400;\r\n}\r\n.like-stat{\r\n  font-family: 'Poppins', sans-serif;\r\n  font-weight: 500;\r\n  transition: 0.3s;\r\n  color: white;\r\n}\r\n.like-stat:hover{\r\n  color: #FFE400;\r\n}\r\n#like{\r\n  height: 17px;\r\n  width: 17px;\r\n}\r\n\r\n/* Popup */\r\n.popUp {\r\n  display: none;\r\n}\r\n\r\n.popup-blur {\r\n  position: fixed;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 15;\r\n  padding: 1rem 1rem;\r\n  overflow-y: auto;\r\n  color: #fff;\r\n  opacity: 1;\r\n  background-color: rgba(0, 0, 0, 0.93);\r\n}\r\n\r\n.popup-countainer {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 0 5%;\r\n  gap: 15px;\r\n  background: #22323d;\r\n}\r\n\r\n.img-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.comment-img {\r\n  margin: 1% 0;\r\n  height: 300px;\r\n}\r\n\r\n.fa-close {\r\n  font-size: 30px;\r\n  align-self: flex-end;\r\n  margin: 5px 20px 0 0;\r\n}\r\n\r\n.detail {\r\n  margin: 2px 0;\r\n  gap: 2px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.summary {\r\n  padding: 0 3%;\r\n  text-align: justify;\r\n}\r\n\r\n.comment-section {\r\n  display: flex;\r\n  width: 50%;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 5px;\r\n}\r\n\r\n.form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  width: 90%;\r\n  margin: 2%;\r\n}\r\n\r\n#submit {\r\n  width: 100%;\r\n  margin-bottom: 10px;\r\n}\r\n\r\ninput {\r\n  color: #1e2c36;\r\n  font-size: large;\r\n  padding: 1%;\r\n}\r\n\r\ntextarea {\r\n  color: #1e2c36;\r\n  font-size: large;\r\n  padding: 1%;\r\n}\r\n/* end popup */\r\n\r\n\r\n/* start footer style */\r\n\r\nfooter{\r\n  position: fixed;\r\n  bottom: 0;\r\n  width: 100%;\r\n  height: 50px;\r\n  width: 100%;\r\n  border-top: 2px solid black;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 0 100px;\r\n  background-color: #000000;\r\n  padding: 40px 100px;\r\n  \r\n}\r\n\r\n#logo-footer{\r\n  height: 60px;\r\n  width: 120px;\r\n}\r\n.foot-desc{\r\n  color: white;\r\n  font-family: 'Poppins', sans-serif;\r\n  font-size: 18px;\r\n  font-weight: 500;\r\n  cursor: pointer;\r\n  transition: 0.3;\r\n}\r\n.foot-desc:hover{\r\n  color: #FFE400;\r\n}\r\n/* footer style end */", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Poppins:wght@100;300;400;500;600;700;800;900&display=swap');\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\nbody{\r\n  background-color: #111111;\r\n  height: 100%;\r\n  position: relative;\r\n}\r\nheader {\r\n  height: 65px; \r\n  background-color: #000; \r\n  margin-bottom: 25px; \r\n  top: 0;\r\n  z-index: 99;\r\n  width: 100%;\r\n}\r\n\r\n.navbar {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding-left: 100px;\r\n  padding-right: 100px;\r\n}\r\n\r\n#logo{\r\n  height: 55px;\r\n  width: 100px;\r\n  display: flex;\r\n}\r\n.logo{\r\n  display: flex;\r\n  gap: 2px;\r\n}\r\n.logo-title{\r\n  color: white;\r\n  font-family: 'Poppins', sans-serif;\r\n  font-family: 700;\r\n  cursor: pointer;\r\n  user-select: none;\r\n}\r\n.logo-title span{\r\n  color: #FFE400;\r\n  font-family: 'Dancing Script', cursive;\r\n  font-weight: 700;\r\n  font-size: 35px;\r\n}\r\n\r\nheader .navbar .logo .logo-link {\r\n  text-decoration: none;\r\n  height: 100%;\r\n}\r\n\r\nheader .navbar .nav-list {\r\n  list-style: none;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n  width: 500px;\r\n  height: auto;\r\n}\r\n\r\n.nav-item-link{\r\n  font-size: 16px;\r\n  padding-top: 50px;\r\n  cursor: pointer;\r\n  color: white;\r\n  font-family: 'Poppins', sans-serif;\r\n  font-weight: 700;\r\n  text-decoration: none;\r\n  position: relative;\r\n  transition: 0.3;\r\n  \r\n}\r\n.nav-item-link:hover{\r\n  color: #FFE400;\r\n}\r\n.nav-item-link::before{\r\n  content: \"\";\r\n  position: absolute;\r\n  bottom: 0;\r\n  height: 2px;\r\n  background-color: #FFE400;\r\n  width: 0;\r\n  transition: width 0.3s ease-in-out;\r\n\r\n}\r\n.nav-item-link:hover::before {\r\n  width: 100%;\r\n  \r\n}\r\n\r\n.search input {\r\n  padding: 10px;\r\n  border-radius: 8px;\r\n  background-color: #111111;\r\n  font-family: 'Poppins', sans-serif;\r\n  font-weight: 500;\r\n  border: 2px solid #111111;\r\n  color: white;\r\n}\r\n.search input::placeholder{\r\n  color: white;\r\n}\r\n\r\nheader .container .navbar .search input:focus-visible {\r\n  border: 1px solid #FFE400;\r\n  outline: 1px solid #FFE400;;\r\n}\r\n/* main style start */\r\n\r\nmain{\r\n  width: 100%;\r\n  height: auto;\r\n  padding: 100px 0;\r\n}\r\n.movie-container{\r\n  height: 100%;\r\n  width: 100%;\r\n  padding: 30px;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 10px;\r\n  justify-content: center;\r\n}\r\n.card{\r\n  height: 400px;\r\n  width: 220px;\r\n  background-color: white;\r\n  cursor: pointer;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  border-radius: 5px;\r\n  transition: 0.3s;\r\n  \r\n}\r\n.card:hover{\r\n  box-shadow: rgba(250, 253, 47, 0.35) 5px 20px 30px;\r\n  \r\n}\r\n#play{\r\n  height: 40px;\r\n  width: 40px;\r\n  position: absolute;\r\n  top: 50%; \r\n  left: 50%; \r\n  transform: translate(-50%, -50%);\r\n  display: none;\r\n}\r\n\r\n.card-image-container{\r\n  height: 70%;\r\n  width: 100%;\r\n  position: relative;\r\n}\r\n\r\n.card-image{\r\n  height: 100%;\r\n  width: 100%;\r\n  background-size: 100% 100%;\r\n  background-position: center;\r\n  border-top-right-radius: 5px;\r\n  border-top-left-radius: 5px;\r\n  transition: 0.3;\r\n}\r\n.card-image-container:hover #play{\r\n  display: block;\r\n}\r\n.card-image:hover{\r\n  opacity: 0.4;\r\n}\r\n\r\n.card-content{\r\n  height: 20%;\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 0 3px;\r\n  background-color: #111111;\r\n  border: 0.1px solid #2b2a27;\r\n}\r\n.card-button{\r\n  height: 10%;\r\n  width: 100%;\r\n  background-color: #FFE400;\r\n  border: none;\r\n  outline: none;\r\n  font-family: 'Poppins', sans-serif;\r\n  font-weight: 500;\r\n  color: black;\r\n  cursor: pointer;\r\n  font-size: 17px;\r\n  border-bottom-right-radius: 5px;\r\n  border-bottom-left-radius: 5px;\r\n}\r\n.card-button:hover{\r\n  color: black;\r\n  background-color: white;\r\n  border: 0.4px solid #FFE400;\r\n  \r\n}\r\n.movie-title{\r\n  font-family: 'Poppins', sans-serif;\r\n  font-weight: 500;\r\n  transition: 0.3s;\r\n  color: white;\r\n}\r\n.movie-title:hover{\r\n  color: #FFE400;\r\n}\r\n.like-stat{\r\n  font-family: 'Poppins', sans-serif;\r\n  font-weight: 500;\r\n  transition: 0.3s;\r\n  color: white;\r\n}\r\n.like-stat:hover{\r\n  color: #FFE400;\r\n}\r\n#like{\r\n  height: 17px;\r\n  width: 17px;\r\n}\r\n\r\n/* Popup */\r\n.popUp {\r\n  display: none;\r\n}\r\n\r\n.popup-blur {\r\n  position: fixed;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 15;\r\n  padding: 1rem 1rem;\r\n  overflow-y: auto;\r\n  color: #fff;\r\n  opacity: 1;\r\n  background-color: rgba(0, 0, 0, 0.93);\r\n}\r\n\r\n.popup-countainer {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 0 5%;\r\n  gap: 15px;\r\n  background: #22323d;\r\n}\r\n\r\n.img-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.comment-img {\r\n  margin: 1% 0;\r\n  height: 300px;\r\n}\r\n\r\n.fa-close {\r\n  font-size: 30px;\r\n  align-self: flex-end;\r\n  margin: 5px 20px 0 0;\r\n}\r\n\r\n.detail {\r\n  margin: 2px 0;\r\n  gap: 2px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.summary {\r\n  padding: 0 3%;\r\n  text-align: justify;\r\n}\r\n\r\n.comment-section {\r\n  display: flex;\r\n  width: 50%;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 5px;\r\n}\r\n\r\n.form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  width: 90%;\r\n  margin: 2%;\r\n}\r\n\r\n#submit {\r\n  width: 100%;\r\n  margin-bottom: 10px;\r\n}\r\n\r\ninput {\r\n  color: #1e2c36;\r\n  font-size: large;\r\n  padding: 1%;\r\n}\r\n\r\ntextarea {\r\n  color: #1e2c36;\r\n  font-size: large;\r\n  padding: 1%;\r\n}\r\n/* end popup */\r\n\r\n\r\n/* start footer style */\r\n\r\nfooter{\r\n  position: fixed;\r\n  bottom: 0;\r\n  width: 100%;\r\n  height: 50px;\r\n  width: 100%;\r\n  border-top: 2px solid black;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 0 100px;\r\n  background-color: #000000;\r\n  padding: 40px 100px;\r\n  \r\n}\r\n\r\n#logo-footer{\r\n  height: 60px;\r\n  width: 120px;\r\n}\r\n.foot-desc{\r\n  color: white;\r\n  font-family: 'Poppins', sans-serif;\r\n  font-size: 18px;\r\n  font-weight: 500;\r\n  cursor: pointer;\r\n  transition: 0.3;\r\n}\r\n.foot-desc:hover{\r\n  color: #FFE400;\r\n}\r\n/* footer style end */"],"sourceRoot":""}]);
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


// import './logo.png';
class Movies {
    getMovies = async () => {
      try {
        const response = await fetch('https://api.tvmaze.com/shows');
        const data = await response.json();
        return data;
      } catch (error) {
        return error;
      }
    }
}

const movie = new Movies();

const update = async () => {
  const movieContainer = document.querySelector('.movie-container');
  const allData = await movie.getMovies();
  const items = allData.slice(0, 8);
  let html = '';
  // for (let i = 0; i < 1; i += 1) {
  //   const singleData = allData[i];
  //   console.log(singleData);
  //   html += `<div class="card" data-index="${i}">
  //       <div class="card-image-container">
  //           <img class="card-image" src="${singleData.image.medium}" alt="">
  //           <img src="./play.png" alt="" id="play">
  //       </div> 
  //       <div class="card-content">
  //           <p class="movie-title">${singleData.name}</p>
  //           <img src="./like.png" alt="like" id="like">
  //           <p class="like-stat">2 likes</p>
  //       </div>
  //       <button class="card-button" id="commentBtn">Comments</button>
  //   </div>`;
  // }
  items.forEach((element, index) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.setAttribute('data-index', index);
    html += `
                <div class="card-image-container">
                    <img class="card-image" src="${element.image.medium}" alt="">
                    <img src="./play.png" alt="" id="play">
                </div>
                <div class="card-content">
                    <p class="movie-title">${element.name}</p>
                    <img src="./like.png" alt="like" id="like">
                    <p class="like-stat">2 likes</p>
                </div>
                <button class="card-button" id="${element.id}" type="submit">Comments</button>
              `;
    card.innerHTML = html;
    movieContainer.append(card);
    const commentButton = document.querySelector(`.card[data-index="${index}"] .card-button`);
    commentButton.addEventListener('click', async () => {
      (0,_modules_comment_js__WEBPACK_IMPORTED_MODULE_1__["default"])(element, index);
    });
  });
};
update();

/***/ }),

/***/ "./src/modules/API.js":
/*!****************************!*\
  !*** ./src/modules/API.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getComment": () => (/* binding */ getComment),
/* harmony export */   "postComment": () => (/* binding */ postComment)
/* harmony export */ });
const involvementId = 'VdUaJZjJhUjlpm3843JM';
const commentUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${involvementId}/comments`;
const likeUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${involvementId}/likes/`;

// API for post Comment

const postComment = async (index, username, comment) => {
  await fetch(commentUrl, {
    method: 'POST',
    body: JSON.stringify({
      item_id: index,
      username,
      comment,
    }),
    headers: { 'content-Type': 'application/json; charset=UTF-8' },
  });
};

// API for get comment

const getComment = async (index) => {
  const response = await fetch(`${commentUrl}?item_id=${index}`);
  const user = await response.json();
  return user;
};



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
/* harmony import */ var _API_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./API.js */ "./src/modules/API.js");
/* harmony import */ var _counters_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./counters.js */ "./src/modules/counters.js");



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
          <div class ="img-container"><img class="comment-img" src="${element.image.original}" alt="">
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
  const comments = await (0,_API_js__WEBPACK_IMPORTED_MODULE_0__.getComment)(index);
  if (comments.length >= 1) {
    comments.forEach((comment) => {
      commentList.appendChild(appendComment(comment));
    });
    document.querySelector('#comment-count').textContent = (0,_counters_js__WEBPACK_IMPORTED_MODULE_1__["default"])(comments);
  }

  const form = document.querySelector('.form');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const nameInput = document.querySelector('#name');
    const textInput = document.querySelector('#text');
    if (nameInput !== '' && textInput !== '') {
      await (0,_API_js__WEBPACK_IMPORTED_MODULE_0__.postComment)(index, nameInput.value, textInput.value);
      const commentList = document.querySelector('.commentList');
      commentList.innerHTML = '';
      nameInput.value = '';
      textInput.value = '';
      const comments = await (0,_API_js__WEBPACK_IMPORTED_MODULE_0__.getComment)(index);
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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFZLFdBQVcsYUFBYSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sYUFBYSxNQUFNLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsY0FBYyxNQUFNLEtBQUssYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxjQUFjLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxVQUFVLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxV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VyxXQUFXLE1BQU07QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJtRDtBQUNQO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCx1QkFBdUI7QUFDekUsd0JBQXdCLGtCQUFrQiwrQkFBK0IsZ0JBQWdCO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsV0FBVztBQUN4QztBQUNBO0FBQ0Esc0VBQXNFLHVCQUF1QjtBQUM3RjtBQUNBLDhCQUE4QixhQUFhO0FBQzNDO0FBQ0EsOENBQThDLGlCQUFpQjtBQUMvRCw0Q0FBNEMsaUJBQWlCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLHlCQUF5QixtREFBVTtBQUNuQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsMkRBQTJELHdEQUFlO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG9EQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLG1EQUFVO0FBQ3ZDO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsaUVBQWUsWUFBWTs7Ozs7Ozs7Ozs7Ozs7QUMxRTNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsZUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL21vdmllcy1maW5hbC1jYXBzdG9uZS1taWNyb3ZlcnNlLWphdmFzY3JpcHQvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL21vdmllcy1maW5hbC1jYXBzdG9uZS1taWNyb3ZlcnNlLWphdmFzY3JpcHQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL21vdmllcy1maW5hbC1jYXBzdG9uZS1taWNyb3ZlcnNlLWphdmFzY3JpcHQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9tb3ZpZXMtZmluYWwtY2Fwc3RvbmUtbWljcm92ZXJzZS1qYXZhc2NyaXB0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL21vdmllcy1maW5hbC1jYXBzdG9uZS1taWNyb3ZlcnNlLWphdmFzY3JpcHQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbW92aWVzLWZpbmFsLWNhcHN0b25lLW1pY3JvdmVyc2UtamF2YXNjcmlwdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbW92aWVzLWZpbmFsLWNhcHN0b25lLW1pY3JvdmVyc2UtamF2YXNjcmlwdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9tb3ZpZXMtZmluYWwtY2Fwc3RvbmUtbWljcm92ZXJzZS1qYXZhc2NyaXB0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL21vdmllcy1maW5hbC1jYXBzdG9uZS1taWNyb3ZlcnNlLWphdmFzY3JpcHQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9tb3ZpZXMtZmluYWwtY2Fwc3RvbmUtbWljcm92ZXJzZS1qYXZhc2NyaXB0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbW92aWVzLWZpbmFsLWNhcHN0b25lLW1pY3JvdmVyc2UtamF2YXNjcmlwdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9tb3ZpZXMtZmluYWwtY2Fwc3RvbmUtbWljcm92ZXJzZS1qYXZhc2NyaXB0Ly4vc3JjL21vZHVsZXMvQVBJLmpzIiwid2VicGFjazovL21vdmllcy1maW5hbC1jYXBzdG9uZS1taWNyb3ZlcnNlLWphdmFzY3JpcHQvLi9zcmMvbW9kdWxlcy9jb21tZW50LmpzIiwid2VicGFjazovL21vdmllcy1maW5hbC1jYXBzdG9uZS1taWNyb3ZlcnNlLWphdmFzY3JpcHQvLi9zcmMvbW9kdWxlcy9jb3VudGVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURhbmNpbmcrU2NyaXB0OndnaHRANzAwJmZhbWlseT1Qb3BwaW5zOndnaHRAMTAwOzMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwOzkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5ib2R5e1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExMTExMTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuaGVhZGVyIHtcXHJcXG4gIGhlaWdodDogNjVweDsgXFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwOyBcXHJcXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7IFxcclxcbiAgdG9wOiAwO1xcclxcbiAgei1pbmRleDogOTk7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmctbGVmdDogMTAwcHg7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2xvZ297XFxyXFxuICBoZWlnaHQ6IDU1cHg7XFxyXFxuICB3aWR0aDogMTAwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG4ubG9nb3tcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDJweDtcXHJcXG59XFxyXFxuLmxvZ28tdGl0bGV7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1mYW1pbHk6IDcwMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG4ubG9nby10aXRsZSBzcGFue1xcclxcbiAgY29sb3I6ICNGRkU0MDA7XFxyXFxuICBmb250LWZhbWlseTogJ0RhbmNpbmcgU2NyaXB0JywgY3Vyc2l2ZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBmb250LXNpemU6IDM1cHg7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciAubmF2YmFyIC5sb2dvIC5sb2dvLWxpbmsge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgLm5hdmJhciAubmF2LWxpc3Qge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDUwMHB4O1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWl0ZW0tbGlua3tcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjM7XFxyXFxuICBcXHJcXG59XFxyXFxuLm5hdi1pdGVtLWxpbms6aG92ZXJ7XFxyXFxuICBjb2xvcjogI0ZGRTQwMDtcXHJcXG59XFxyXFxuLm5hdi1pdGVtLWxpbms6OmJlZm9yZXtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgaGVpZ2h0OiAycHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZFNDAwO1xcclxcbiAgd2lkdGg6IDA7XFxyXFxuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2UtaW4tb3V0O1xcclxcblxcclxcbn1cXHJcXG4ubmF2LWl0ZW0tbGluazpob3Zlcjo6YmVmb3JlIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgXFxyXFxufVxcclxcblxcclxcbi5zZWFyY2ggaW5wdXQge1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTExMTE7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMxMTExMTE7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcbi5zZWFyY2ggaW5wdXQ6OnBsYWNlaG9sZGVye1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgLmNvbnRhaW5lciAubmF2YmFyIC5zZWFyY2ggaW5wdXQ6Zm9jdXMtdmlzaWJsZSB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjRkZFNDAwO1xcclxcbiAgb3V0bGluZTogMXB4IHNvbGlkICNGRkU0MDA7O1xcclxcbn1cXHJcXG4vKiBtYWluIHN0eWxlIHN0YXJ0ICovXFxyXFxuXFxyXFxubWFpbntcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgcGFkZGluZzogMTAwcHggMDtcXHJcXG59XFxyXFxuLm1vdmllLWNvbnRhaW5lcntcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMzBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmNhcmR7XFxyXFxuICBoZWlnaHQ6IDQwMHB4O1xcclxcbiAgd2lkdGg6IDIyMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxyXFxuICBcXHJcXG59XFxyXFxuLmNhcmQ6aG92ZXJ7XFxyXFxuICBib3gtc2hhZG93OiByZ2JhKDI1MCwgMjUzLCA0NywgMC4zNSkgNXB4IDIwcHggMzBweDtcXHJcXG4gIFxcclxcbn1cXHJcXG4jcGxheXtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIHdpZHRoOiA0MHB4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA1MCU7IFxcclxcbiAgbGVmdDogNTAlOyBcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtaW1hZ2UtY29udGFpbmVye1xcclxcbiAgaGVpZ2h0OiA3MCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtaW1hZ2V7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcXHJcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcXHJcXG4gIHRyYW5zaXRpb246IDAuMztcXHJcXG59XFxyXFxuLmNhcmQtaW1hZ2UtY29udGFpbmVyOmhvdmVyICNwbGF5e1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcbi5jYXJkLWltYWdlOmhvdmVye1xcclxcbiAgb3BhY2l0eTogMC40O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1jb250ZW50e1xcclxcbiAgaGVpZ2h0OiAyMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgcGFkZGluZzogMCAzcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExMTExO1xcclxcbiAgYm9yZGVyOiAwLjFweCBzb2xpZCAjMmIyYTI3O1xcclxcbn1cXHJcXG4uY2FyZC1idXR0b257XFxyXFxuICBoZWlnaHQ6IDEwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRTQwMDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMTdweDtcXHJcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XFxyXFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcbi5jYXJkLWJ1dHRvbjpob3ZlcntcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiAwLjRweCBzb2xpZCAjRkZFNDAwO1xcclxcbiAgXFxyXFxufVxcclxcbi5tb3ZpZS10aXRsZXtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuLm1vdmllLXRpdGxlOmhvdmVye1xcclxcbiAgY29sb3I6ICNGRkU0MDA7XFxyXFxufVxcclxcbi5saWtlLXN0YXR7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcbi5saWtlLXN0YXQ6aG92ZXJ7XFxyXFxuICBjb2xvcjogI0ZGRTQwMDtcXHJcXG59XFxyXFxuI2xpa2V7XFxyXFxuICBoZWlnaHQ6IDE3cHg7XFxyXFxuICB3aWR0aDogMTdweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogUG9wdXAgKi9cXHJcXG4ucG9wVXAge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWJsdXIge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB6LWluZGV4OiAxNTtcXHJcXG4gIHBhZGRpbmc6IDFyZW0gMXJlbTtcXHJcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOTMpO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY291bnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMCA1JTtcXHJcXG4gIGdhcDogMTVweDtcXHJcXG4gIGJhY2tncm91bmQ6ICMyMjMyM2Q7XFxyXFxufVxcclxcblxcclxcbi5pbWctY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWltZyB7XFxyXFxuICBtYXJnaW46IDElIDA7XFxyXFxuICBoZWlnaHQ6IDMwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtY2xvc2Uge1xcclxcbiAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxuICBtYXJnaW46IDVweCAyMHB4IDAgMDtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbCB7XFxyXFxuICBtYXJnaW46IDJweCAwO1xcclxcbiAgZ2FwOiAycHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnN1bW1hcnkge1xcclxcbiAgcGFkZGluZzogMCAzJTtcXHJcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LXNlY3Rpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBtYXJnaW46IDIlO1xcclxcbn1cXHJcXG5cXHJcXG4jc3VibWl0IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQge1xcclxcbiAgY29sb3I6ICMxZTJjMzY7XFxyXFxuICBmb250LXNpemU6IGxhcmdlO1xcclxcbiAgcGFkZGluZzogMSU7XFxyXFxufVxcclxcblxcclxcbnRleHRhcmVhIHtcXHJcXG4gIGNvbG9yOiAjMWUyYzM2O1xcclxcbiAgZm9udC1zaXplOiBsYXJnZTtcXHJcXG4gIHBhZGRpbmc6IDElO1xcclxcbn1cXHJcXG4vKiBlbmQgcG9wdXAgKi9cXHJcXG5cXHJcXG5cXHJcXG4vKiBzdGFydCBmb290ZXIgc3R5bGUgKi9cXHJcXG5cXHJcXG5mb290ZXJ7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBwYWRkaW5nOiAwIDEwMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcXHJcXG4gIHBhZGRpbmc6IDQwcHggMTAwcHg7XFxyXFxuICBcXHJcXG59XFxyXFxuXFxyXFxuI2xvZ28tZm9vdGVye1xcclxcbiAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgd2lkdGg6IDEyMHB4O1xcclxcbn1cXHJcXG4uZm9vdC1kZXNje1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjM7XFxyXFxufVxcclxcbi5mb290LWRlc2M6aG92ZXJ7XFxyXFxuICBjb2xvcjogI0ZGRTQwMDtcXHJcXG59XFxyXFxuLyogZm9vdGVyIHN0eWxlIGVuZCAqL1wiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLE1BQU07RUFDTixXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsUUFBUTtBQUNWO0FBQ0E7RUFDRSxZQUFZO0VBQ1osa0NBQWtDO0VBQ2xDLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsc0NBQXNDO0VBQ3RDLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZUFB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O0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULFVBQVU7RUFDVixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjtBQUNBLGNBQWM7OztBQUdkLHVCQUF1Qjs7QUFFdkI7RUFDRSxlQUFlO0VBQ2YsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLG1CQUFtQjs7QUFFckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0VBQ1osa0NBQWtDO0VBQ2xDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGVBQWU7QUFDakI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQSxxQkFBcUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQ6d2dodEA3MDAmZmFtaWx5PVBvcHBpbnM6d2dodEAxMDA7MzAwOzQwMDs1MDA7NjAwOzcwMDs4MDA7OTAwJmRpc3BsYXk9c3dhcCcpO1xcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbmJvZHl7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExMTExO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5oZWFkZXIge1xcclxcbiAgaGVpZ2h0OiA2NXB4OyBcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7IFxcclxcbiAgbWFyZ2luLWJvdHRvbTogMjVweDsgXFxyXFxuICB0b3A6IDA7XFxyXFxuICB6LWluZGV4OiA5OTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxMDBweDtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbG9nb3tcXHJcXG4gIGhlaWdodDogNTVweDtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcbi5sb2dve1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMnB4O1xcclxcbn1cXHJcXG4ubG9nby10aXRsZXtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LWZhbWlseTogNzAwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcbi5sb2dvLXRpdGxlIHNwYW57XFxyXFxuICBjb2xvcjogI0ZGRTQwMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnRGFuY2luZyBTY3JpcHQnLCBjdXJzaXZlO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMzVweDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIC5uYXZiYXIgLmxvZ28gLmxvZ28tbGluayB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciAubmF2YmFyIC5uYXYtbGlzdCB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogNTAwcHg7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5uYXYtaXRlbS1saW5re1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgcGFkZGluZy10b3A6IDUwcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHRyYW5zaXRpb246IDAuMztcXHJcXG4gIFxcclxcbn1cXHJcXG4ubmF2LWl0ZW0tbGluazpob3ZlcntcXHJcXG4gIGNvbG9yOiAjRkZFNDAwO1xcclxcbn1cXHJcXG4ubmF2LWl0ZW0tbGluazo6YmVmb3Jle1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBoZWlnaHQ6IDJweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkU0MDA7XFxyXFxuICB3aWR0aDogMDtcXHJcXG4gIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxuXFxyXFxufVxcclxcbi5uYXYtaXRlbS1saW5rOmhvdmVyOjpiZWZvcmUge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaCBpbnB1dCB7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExMTExMTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgIzExMTExMTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuLnNlYXJjaCBpbnB1dDo6cGxhY2Vob2xkZXJ7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciAuY29udGFpbmVyIC5uYXZiYXIgLnNlYXJjaCBpbnB1dDpmb2N1cy12aXNpYmxlIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNGRkU0MDA7XFxyXFxuICBvdXRsaW5lOiAxcHggc29saWQgI0ZGRTQwMDs7XFxyXFxufVxcclxcbi8qIG1haW4gc3R5bGUgc3RhcnQgKi9cXHJcXG5cXHJcXG5tYWlue1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBwYWRkaW5nOiAxMDBweCAwO1xcclxcbn1cXHJcXG4ubW92aWUtY29udGFpbmVye1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAzMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG4uY2FyZHtcXHJcXG4gIGhlaWdodDogNDAwcHg7XFxyXFxuICB3aWR0aDogMjIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG4gIFxcclxcbn1cXHJcXG4uY2FyZDpob3ZlcntcXHJcXG4gIGJveC1zaGFkb3c6IHJnYmEoMjUwLCAyNTMsIDQ3LCAwLjM1KSA1cHggMjBweCAzMHB4O1xcclxcbiAgXFxyXFxufVxcclxcbiNwbGF5e1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDUwJTsgXFxyXFxuICBsZWZ0OiA1MCU7IFxcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1pbWFnZS1jb250YWluZXJ7XFxyXFxuICBoZWlnaHQ6IDcwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1pbWFnZXtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xcclxcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xcclxcbiAgdHJhbnNpdGlvbjogMC4zO1xcclxcbn1cXHJcXG4uY2FyZC1pbWFnZS1jb250YWluZXI6aG92ZXIgI3BsYXl7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuLmNhcmQtaW1hZ2U6aG92ZXJ7XFxyXFxuICBvcGFjaXR5OiAwLjQ7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWNvbnRlbnR7XFxyXFxuICBoZWlnaHQ6IDIwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBwYWRkaW5nOiAwIDNweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTExMTE7XFxyXFxuICBib3JkZXI6IDAuMXB4IHNvbGlkICMyYjJhMjc7XFxyXFxufVxcclxcbi5jYXJkLWJ1dHRvbntcXHJcXG4gIGhlaWdodDogMTAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZFNDAwO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZm9udC1zaXplOiAxN3B4O1xcclxcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcXHJcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuLmNhcmQtYnV0dG9uOmhvdmVye1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXI6IDAuNHB4IHNvbGlkICNGRkU0MDA7XFxyXFxuICBcXHJcXG59XFxyXFxuLm1vdmllLXRpdGxle1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG4ubW92aWUtdGl0bGU6aG92ZXJ7XFxyXFxuICBjb2xvcjogI0ZGRTQwMDtcXHJcXG59XFxyXFxuLmxpa2Utc3RhdHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuLmxpa2Utc3RhdDpob3ZlcntcXHJcXG4gIGNvbG9yOiAjRkZFNDAwO1xcclxcbn1cXHJcXG4jbGlrZXtcXHJcXG4gIGhlaWdodDogMTdweDtcXHJcXG4gIHdpZHRoOiAxN3B4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBQb3B1cCAqL1xcclxcbi5wb3BVcCB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtYmx1ciB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHotaW5kZXg6IDE1O1xcclxcbiAgcGFkZGluZzogMXJlbSAxcmVtO1xcclxcbiAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45Myk7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1jb3VudGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAwIDUlO1xcclxcbiAgZ2FwOiAxNXB4O1xcclxcbiAgYmFja2dyb3VuZDogIzIyMzIzZDtcXHJcXG59XFxyXFxuXFxyXFxuLmltZy1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtaW1nIHtcXHJcXG4gIG1hcmdpbjogMSUgMDtcXHJcXG4gIGhlaWdodDogMzAwcHg7XFxyXFxufVxcclxcblxcclxcbi5mYS1jbG9zZSB7XFxyXFxuICBmb250LXNpemU6IDMwcHg7XFxyXFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG4gIG1hcmdpbjogNXB4IDIwcHggMCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlsIHtcXHJcXG4gIG1hcmdpbjogMnB4IDA7XFxyXFxuICBnYXA6IDJweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VtbWFyeSB7XFxyXFxuICBwYWRkaW5nOiAwIDMlO1xcclxcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtc2VjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIG1hcmdpbjogMiU7XFxyXFxufVxcclxcblxcclxcbiNzdWJtaXQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCB7XFxyXFxuICBjb2xvcjogIzFlMmMzNjtcXHJcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxuICBwYWRkaW5nOiAxJTtcXHJcXG59XFxyXFxuXFxyXFxudGV4dGFyZWEge1xcclxcbiAgY29sb3I6ICMxZTJjMzY7XFxyXFxuICBmb250LXNpemU6IGxhcmdlO1xcclxcbiAgcGFkZGluZzogMSU7XFxyXFxufVxcclxcbi8qIGVuZCBwb3B1cCAqL1xcclxcblxcclxcblxcclxcbi8qIHN0YXJ0IGZvb3RlciBzdHlsZSAqL1xcclxcblxcclxcbmZvb3RlcntcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXItdG9wOiAycHggc29saWQgYmxhY2s7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHBhZGRpbmc6IDAgMTAwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcclxcbiAgcGFkZGluZzogNDBweCAxMDBweDtcXHJcXG4gIFxcclxcbn1cXHJcXG5cXHJcXG4jbG9nby1mb290ZXJ7XFxyXFxuICBoZWlnaHQ6IDYwcHg7XFxyXFxuICB3aWR0aDogMTIwcHg7XFxyXFxufVxcclxcbi5mb290LWRlc2N7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IDAuMztcXHJcXG59XFxyXFxuLmZvb3QtZGVzYzpob3ZlcntcXHJcXG4gIGNvbG9yOiAjRkZFNDAwO1xcclxcbn1cXHJcXG4vKiBmb290ZXIgc3R5bGUgZW5kICovXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgZGlzcGxheVBvcFVwIGZyb20gJy4vbW9kdWxlcy9jb21tZW50LmpzJztcclxuLy8gaW1wb3J0ICcuL2xvZ28ucG5nJztcclxuY2xhc3MgTW92aWVzIHtcclxuICAgIGdldE1vdmllcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS50dm1hemUuY29tL3Nob3dzJyk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gZXJyb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbW92aWUgPSBuZXcgTW92aWVzKCk7XHJcblxyXG5jb25zdCB1cGRhdGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgbW92aWVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW92aWUtY29udGFpbmVyJyk7XHJcbiAgY29uc3QgYWxsRGF0YSA9IGF3YWl0IG1vdmllLmdldE1vdmllcygpO1xyXG4gIGNvbnN0IGl0ZW1zID0gYWxsRGF0YS5zbGljZSgwLCA4KTtcclxuICBsZXQgaHRtbCA9ICcnO1xyXG4gIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgMTsgaSArPSAxKSB7XHJcbiAgLy8gICBjb25zdCBzaW5nbGVEYXRhID0gYWxsRGF0YVtpXTtcclxuICAvLyAgIGNvbnNvbGUubG9nKHNpbmdsZURhdGEpO1xyXG4gIC8vICAgaHRtbCArPSBgPGRpdiBjbGFzcz1cImNhcmRcIiBkYXRhLWluZGV4PVwiJHtpfVwiPlxyXG4gIC8vICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWltYWdlLWNvbnRhaW5lclwiPlxyXG4gIC8vICAgICAgICAgICA8aW1nIGNsYXNzPVwiY2FyZC1pbWFnZVwiIHNyYz1cIiR7c2luZ2xlRGF0YS5pbWFnZS5tZWRpdW19XCIgYWx0PVwiXCI+XHJcbiAgLy8gICAgICAgICAgIDxpbWcgc3JjPVwiLi9wbGF5LnBuZ1wiIGFsdD1cIlwiIGlkPVwicGxheVwiPlxyXG4gIC8vICAgICAgIDwvZGl2PiBcclxuICAvLyAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XHJcbiAgLy8gICAgICAgICAgIDxwIGNsYXNzPVwibW92aWUtdGl0bGVcIj4ke3NpbmdsZURhdGEubmFtZX08L3A+XHJcbiAgLy8gICAgICAgICAgIDxpbWcgc3JjPVwiLi9saWtlLnBuZ1wiIGFsdD1cImxpa2VcIiBpZD1cImxpa2VcIj5cclxuICAvLyAgICAgICAgICAgPHAgY2xhc3M9XCJsaWtlLXN0YXRcIj4yIGxpa2VzPC9wPlxyXG4gIC8vICAgICAgIDwvZGl2PlxyXG4gIC8vICAgICAgIDxidXR0b24gY2xhc3M9XCJjYXJkLWJ1dHRvblwiIGlkPVwiY29tbWVudEJ0blwiPkNvbW1lbnRzPC9idXR0b24+XHJcbiAgLy8gICA8L2Rpdj5gO1xyXG4gIC8vIH1cclxuICBpdGVtcy5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FyZC5jbGFzc05hbWUgPSAnY2FyZCc7XHJcbiAgICBjYXJkLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGluZGV4KTtcclxuICAgIGh0bWwgKz0gYFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaW1hZ2UtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImNhcmQtaW1hZ2VcIiBzcmM9XCIke2VsZW1lbnQuaW1hZ2UubWVkaXVtfVwiIGFsdD1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9wbGF5LnBuZ1wiIGFsdD1cIlwiIGlkPVwicGxheVwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtb3ZpZS10aXRsZVwiPiR7ZWxlbWVudC5uYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vbGlrZS5wbmdcIiBhbHQ9XCJsaWtlXCIgaWQ9XCJsaWtlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJsaWtlLXN0YXRcIj4yIGxpa2VzPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2FyZC1idXR0b25cIiBpZD1cIiR7ZWxlbWVudC5pZH1cIiB0eXBlPVwic3VibWl0XCI+Q29tbWVudHM8L2J1dHRvbj5cclxuICAgICAgICAgICAgICBgO1xyXG4gICAgY2FyZC5pbm5lckhUTUwgPSBodG1sO1xyXG4gICAgbW92aWVDb250YWluZXIuYXBwZW5kKGNhcmQpO1xyXG4gICAgY29uc3QgY29tbWVudEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jYXJkW2RhdGEtaW5kZXg9XCIke2luZGV4fVwiXSAuY2FyZC1idXR0b25gKTtcclxuICAgIGNvbW1lbnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGRpc3BsYXlQb3BVcChlbGVtZW50LCBpbmRleCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxudXBkYXRlKCk7IiwiY29uc3QgaW52b2x2ZW1lbnRJZCA9ICdWZFVhSlpqSmhVamxwbTM4NDNKTSc7XHJcbmNvbnN0IGNvbW1lbnRVcmwgPSBgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvJHtpbnZvbHZlbWVudElkfS9jb21tZW50c2A7XHJcbmNvbnN0IGxpa2VVcmwgPSBgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvJHtpbnZvbHZlbWVudElkfS9saWtlcy9gO1xyXG5cclxuLy8gQVBJIGZvciBwb3N0IENvbW1lbnRcclxuXHJcbmNvbnN0IHBvc3RDb21tZW50ID0gYXN5bmMgKGluZGV4LCB1c2VybmFtZSwgY29tbWVudCkgPT4ge1xyXG4gIGF3YWl0IGZldGNoKGNvbW1lbnRVcmwsIHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICBpdGVtX2lkOiBpbmRleCxcclxuICAgICAgdXNlcm5hbWUsXHJcbiAgICAgIGNvbW1lbnQsXHJcbiAgICB9KSxcclxuICAgIGhlYWRlcnM6IHsgJ2NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyB9LFxyXG4gIH0pO1xyXG59O1xyXG5cclxuLy8gQVBJIGZvciBnZXQgY29tbWVudFxyXG5cclxuY29uc3QgZ2V0Q29tbWVudCA9IGFzeW5jIChpbmRleCkgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7Y29tbWVudFVybH0/aXRlbV9pZD0ke2luZGV4fWApO1xyXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgcmV0dXJuIHVzZXI7XHJcbn07XHJcblxyXG5leHBvcnQge1xyXG4gIHBvc3RDb21tZW50LCBnZXRDb21tZW50LFxyXG59OyIsImltcG9ydCB7IGdldENvbW1lbnQsIHBvc3RDb21tZW50IH0gZnJvbSAnLi9BUEkuanMnO1xyXG5pbXBvcnQgZ2V0Q29tbWVudENvdW50IGZyb20gJy4vY291bnRlcnMuanMnO1xyXG5cclxuY29uc3QgYXBwZW5kQ29tbWVudCA9IChjb21tZW50KSA9PiB7XHJcbiAgY29uc3QgY29tbWVudExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gIGNvbW1lbnRMaXN0LmlubmVySFRNTCA9IGAgPHNwYW4gY2xhc3MgPVwiZGF0ZVwiPiR7Y29tbWVudC5jcmVhdGlvbl9kYXRlfSA8L3NwYW4+XHJcbiAgIDxzcGFuIGNsYXNzPVwibmFtZVwiPiR7Y29tbWVudC51c2VybmFtZX0gPC9zcGFuPjxzcGFuIGNsYXNzPVwiY29tbWVudFwiPiR7Y29tbWVudC5jb21tZW50fTwvc3Bhbj5gO1xyXG4gIHJldHVybiBjb21tZW50TGlzdDtcclxufTtcclxuXHJcbmNvbnN0IGRpc3BsYXlQb3BVcCA9IGFzeW5jIChlbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gIGxldCBpbm5lckhUTUwgPSAnJztcclxuICBpbm5lckhUTUwgKz0gYDxkaXYgaWQgPSBcIiR7ZWxlbWVudC5pZH1cIiBjbGFzcz1cInBvcHVwLWJsdXJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInBvcHVwLWNvdW50YWluZXJcIj5cclxuICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jbG9zZVwiPjwvaT5cclxuICAgICAgICAgIDxkaXYgY2xhc3MgPVwiaW1nLWNvbnRhaW5lclwiPjxpbWcgY2xhc3M9XCJjb21tZW50LWltZ1wiIHNyYz1cIiR7ZWxlbWVudC5pbWFnZS5vcmlnaW5hbH1cIiBhbHQ9XCJcIj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGgyIGNsYXNzPVwidGl0bGVcIj4ke2VsZW1lbnQubmFtZX08L2gyPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImRldGFpbFwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwibGFuZ2F1Z2VcIj5MYW5ndWFnZTogJHtlbGVtZW50Lmxhbmd1YWdlfTwvcD5cclxuICAgICAgICAgICAgICA8cCBjbGFzcz1cInJ1bnRpbWVcIj5SdW50aW1lOiAke2VsZW1lbnQucnVudGltZX0gbWluczwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcyA9XCJzdW1tYXJ5XCI+IFxyXG4gICAgICAgICAgICA8aDQ+U3VtbXJ5OjwvaDQ+XHJcbiAgICAgICAgICAgICR7ZWxlbWVudC5zdW1tYXJ5fVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudC1zZWN0aW9uXCI+XHJcbiAgICAgICAgICA8aDM+Q29tbWVudHMoPHNwYW4gaWQ9XCJjb21tZW50LWNvdW50XCI+MDwvc3Bhbj4pPC9oMz5cclxuICAgICAgICAgIDx1bCBjbGFzcz1cImNvbW1lbnRMaXN0XCI+PC91bD5cclxuICAgICAgICAgIDxoND5BZGQgYSBjb21tZW50PC9oND5cclxuICAgICAgICAgIDxmb3JtIGNsYXNzPVwiZm9ybVwiIGFjdGlvbj1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCBpZCA9IFwibmFtZVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJZb3VyIG5hbWVcIj5cclxuICAgICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cImNvbW1lbnQtdGV4dFwiIGlkPVwidGV4dFwiIGNvbHM9XCIyMFwiIHJvd3M9XCI1XCIgcGxhY2Vob2xkZXI9XCJZb3VyIGluc2lnaHRcIj48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzdWJtaXRcIiB0eXBlPVwic3VibWl0XCI+Q29tbWVudDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgPC9kaXY+YDtcclxuICBjb25zdCBwb3BVcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3BVcCcpO1xyXG4gIHBvcFVwLmlubmVySFRNTCA9IGlubmVySFRNTDtcclxuICBwb3BVcC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYS1jbG9zZScpO1xyXG4gIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgcG9wVXAuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICB9KTtcclxuXHJcbiAgY29uc3QgY29tbWVudExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudExpc3QnKTtcclxuICBjb25zdCBjb21tZW50cyA9IGF3YWl0IGdldENvbW1lbnQoaW5kZXgpO1xyXG4gIGlmIChjb21tZW50cy5sZW5ndGggPj0gMSkge1xyXG4gICAgY29tbWVudHMuZm9yRWFjaCgoY29tbWVudCkgPT4ge1xyXG4gICAgICBjb21tZW50TGlzdC5hcHBlbmRDaGlsZChhcHBlbmRDb21tZW50KGNvbW1lbnQpKTtcclxuICAgIH0pO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbW1lbnQtY291bnQnKS50ZXh0Q29udGVudCA9IGdldENvbW1lbnRDb3VudChjb21tZW50cyk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0nKTtcclxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJyk7XHJcbiAgICBjb25zdCB0ZXh0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGV4dCcpO1xyXG4gICAgaWYgKG5hbWVJbnB1dCAhPT0gJycgJiYgdGV4dElucHV0ICE9PSAnJykge1xyXG4gICAgICBhd2FpdCBwb3N0Q29tbWVudChpbmRleCwgbmFtZUlucHV0LnZhbHVlLCB0ZXh0SW5wdXQudmFsdWUpO1xyXG4gICAgICBjb25zdCBjb21tZW50TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50TGlzdCcpO1xyXG4gICAgICBjb21tZW50TGlzdC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgbmFtZUlucHV0LnZhbHVlID0gJyc7XHJcbiAgICAgIHRleHRJbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgICBjb25zdCBjb21tZW50cyA9IGF3YWl0IGdldENvbW1lbnQoaW5kZXgpO1xyXG4gICAgICBjb21tZW50cy5mb3JFYWNoKChjb21tZW50KSA9PiB7XHJcbiAgICAgICAgY29tbWVudExpc3QuYXBwZW5kQ2hpbGQoYXBwZW5kQ29tbWVudChjb21tZW50KSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29tbWVudC1jb3VudCcpLnRleHRDb250ZW50ID0gY29tbWVudHMubGVuZ3RoO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheVBvcFVwOyIsImNvbnN0IGdldENvbW1lbnRDb3VudCA9IChjb21tZW50cykgPT4ge1xyXG4gIGNvbnN0IHJlcyA9IGNvbW1lbnRzLmxlbmd0aDtcclxuICByZXR1cm4gcmVzO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBnZXRDb21tZW50Q291bnQ7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9