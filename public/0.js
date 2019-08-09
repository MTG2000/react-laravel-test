(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./resources/js/components/layouts/styles/Landing.scss":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./resources/js/components/layouts/styles/Landing.scss ***!
  \**************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".landing {\n  height: 60vh;\n  max-height: 700px;\n  background-image: url(\"https://drive.google.com/uc?id=1EiTyF2-Klx7HnTwjKM-diWCmcDeZx3vZ\");\n  background-position: center center;\n  background-size: cover;\n  background-attachment: fixed;\n  flex-direction: column;\n  justify-content: center;\n  -webkit-clip-path: polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%);\n  clip-path: polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%);\n  position: relative;\n}\n@media screen and (min-width: 992px) {\n  .landing {\n    height: 80vh;\n  }\n}\n.landing h1 {\n  position: relative;\n  z-index: 1;\n  font-size: 40px;\n}\n@media screen and (min-width: 992px) {\n  .landing h1 {\n    font-size: 100px;\n  }\n}\n.landing:before {\n  content: \"\";\n  display: block;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: radial-gradient(#27272730, #6b6b6b54);\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./resources/js/components/layouts/styles/product-card.scss":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./resources/js/components/layouts/styles/product-card.scss ***!
  \*******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".product-card {\n  width: 300px;\n  height: 400px;\n  position: relative;\n  overflow: hidden;\n}\n.product-card img {\n  height: 300px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n  position: relative;\n}\n.product-card::after {\n  content: \"\";\n  display: block;\n  width: 100%;\n  height: 300px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0;\n  transition: opacity 0.4s;\n  background: rgba(194, 193, 199, 0.447);\n}\n.product-card::after,\n.product-card img {\n  border-radius: 5px;\n}\n.product-card h3 {\n  transform: scale(0.8);\n  opacity: 1;\n  transition: all 0.5s ease-in-out;\n  text-shadow: 3px 3px 15px #999;\n}\n.product-card a {\n  position: absolute;\n  top: 38%;\n  left: 50%;\n  transform: translate(-50%, -50%) rotate(180deg);\n  z-index: 3;\n  opacity: 0;\n  transition: all 0.5s ease-out;\n}\n.product-card:hover::after {\n  opacity: 1;\n}\n.product-card:hover a {\n  position: absolute;\n  top: 38%;\n  left: 50%;\n  transform: translate(-50%, -50%) rotate(0deg);\n  z-index: 3;\n  opacity: 1;\n}\n.product-card:hover h3 {\n  transform: scale(1);\n  color: #222 !important;\n}", ""]);

// exports


/***/ }),

/***/ "./resources/js/components/layouts/Home.jsx":
/*!**************************************************!*\
  !*** ./resources/js/components/layouts/Home.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LandingImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LandingImage */ "./resources/js/components/layouts/LandingImage.jsx");
/* harmony import */ var _Products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Products */ "./resources/js/components/layouts/Products.jsx");




var Home = function Home() {
  document.title = "Petro Asia Cheme";
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LandingImage__WEBPACK_IMPORTED_MODULE_1__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container-fluid row justify-content-around mt-6"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-3 align-self-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://drive.google.com/uc?id=1KLZliy-t4wjWlN7m_xuysMnND1vjxJX0",
    alt: "",
    className: "d-block mx-auto",
    "data-aos": "zoom-in"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-7"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "text-center text-primary  mt-5 mb-4",
    "data-aos": "zoom-in-down"
  }, "About Petro Asia Cheme"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "text-justify text-dark px-3 mt-4 mb-5 mx-auto",
    style: {
      lineHeight: "1.5em",
      letterSpacing: ".04em"
    },
    "data-aos": "fade-left"
  }, "Petro Asia Cheme have been manufacturing, and exporting chemicals and petrochemical products from Iran since 2019 and have penetrated various markets in the world especially Middle East, Africa, CIS countries and Asia. With years of solid experience in chemicals and petrochemicals market, we mainly assist our customers with competitive price, foreign banking facilities, cost-effective and fast logistics services"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Products__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./resources/js/components/layouts/LandingImage.jsx":
/*!**********************************************************!*\
  !*** ./resources/js/components/layouts/LandingImage.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Landing_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/Landing.scss */ "./resources/js/components/layouts/styles/Landing.scss");
/* harmony import */ var _styles_Landing_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Landing_scss__WEBPACK_IMPORTED_MODULE_1__);



var LandImage = function LandImage() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "landing w-100 d-flex"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    "data-aos": "zoom-in"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "text-white text-center display-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-primary"
  }, "P"), "etro", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-primary"
  }, " A"), "sia", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-primary"
  }, " C"), "heme")));
};

/* harmony default export */ __webpack_exports__["default"] = (LandImage);

/***/ }),

/***/ "./resources/js/components/layouts/ProductCard.jsx":
/*!*********************************************************!*\
  !*** ./resources/js/components/layouts/ProductCard.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _styles_product_card_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/product-card.scss */ "./resources/js/components/layouts/styles/product-card.scss");
/* harmony import */ var _styles_product_card_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_product_card_scss__WEBPACK_IMPORTED_MODULE_2__);




var ProductCard = function ProductCard(props) {
  var _props$value = props.value,
      img = _props$value.img,
      name = _props$value.name,
      id = _props$value.id;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "product-card mx-3",
    "data-aos": "zoom-out-up"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: img,
    alt: name,
    className: "w-100"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "text-primary text-center mt-2 h4"
  }, name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/products/".concat(id),
    className: "btn btn-primary"
  }, "See More"));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductCard);

/***/ }),

/***/ "./resources/js/components/layouts/Products.jsx":
/*!******************************************************!*\
  !*** ./resources/js/components/layouts/Products.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ProductCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductCard */ "./resources/js/components/layouts/ProductCard.jsx");


var prods = [{
  id: 1,
  name: "Detergent Chemicals",
  img: "https://drive.google.com/uc?id=1uyTXlgUc8nwm7f7z-DOY9E3JwNs-pkx-"
}, {
  id: 2,
  name: "Industrial Chemicals",
  img: "https://drive.google.com/uc?id=1fBF6mzzcoa1s-N_Fk95GXJKsq63fxhDi"
}, {
  id: 3,
  name: "Leather Tanning Chemicals",
  img: "https://drive.google.com/uc?id=1xma7V3yoEd6g8BU4EwUIsQqwV8ywtyIc"
}, {
  id: 5,
  name: "Textile Dyeing Chemicals",
  img: "https://drive.google.com/uc?id=1p_pI143Fl8tECPHadkjqPogOoNBbaYnF"
}, {
  id: 6,
  name: "Plastic Chemicals & PVC additives",
  img: "https://drive.google.com/uc?id=1re8aUlu70E1gKIoHXApokRAR-5fyV4It"
}, {
  id: 4,
  name: "Paint & Coating Chemicals",
  img: "https://drive.google.com/uc?id=1fBmq4E53al_UPkqcKaYwt91wT5aHVC_u"
}];

var Products = function Products() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "products"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "py-5"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "text-center text-primary display-3 mt-5 mb-5",
    "data-aos": "zoom-in-up"
  }, "Our Products"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row justify-content-around container mx-auto pb-5 mb-5"
  }, prods.map(function (p) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProductCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: p,
      key: p.id
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Products);

/***/ }),

/***/ "./resources/js/components/layouts/styles/Landing.scss":
/*!*************************************************************!*\
  !*** ./resources/js/components/layouts/styles/Landing.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/lib/loader.js??ref--7-3!./Landing.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./resources/js/components/layouts/styles/Landing.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/components/layouts/styles/product-card.scss":
/*!******************************************************************!*\
  !*** ./resources/js/components/layouts/styles/product-card.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/lib/loader.js??ref--7-3!./product-card.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./resources/js/components/layouts/styles/product-card.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

}]);