(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./resources/js/components/layouts/styles/contact.module.scss":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./resources/js/components/layouts/styles/contact.module.scss ***!
  \*********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".contact {\n  min-height: 100vh;\n}\n.contact .contactImage {\n  width: 100%;\n  height: 60vh;\n  max-height: 900px;\n  background-size: cover;\n  background-attachment: fixed;\n  background-position: left bottom;\n  -webkit-clip-path: polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%);\n  clip-path: polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n@media screen and (min-width: 992px) {\n  .contact .contactImage {\n    height: 70vh;\n  }\n  .contact .contactImage h1 {\n    font-size: 60px !important;\n  }\n}\n.contact .contactImage h1 {\n  z-index: 2;\n}\n.contact .contactImage:after {\n  content: \"\";\n  display: block;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: radial-gradient(#00000057, #1414144a);\n}", ""]);

// exports


/***/ }),

/***/ "./resources/js/components/layouts/Contact.jsx":
/*!*****************************************************!*\
  !*** ./resources/js/components/layouts/Contact.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_contact_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/contact.module.scss */ "./resources/js/components/layouts/styles/contact.module.scss");
/* harmony import */ var _styles_contact_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_contact_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");




var Contact = function Contact() {
  document.title = "Contact Us";
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-100 ".concat(_styles_contact_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.contact)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_contact_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.contactImage,
    style: {
      backgroundImage: 'url("https://drive.google.com/uc?id=1MxufDwE0jSj0Lk0_SZhRXMbIHhilHtOO")'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "text-center mt-6 mb-5 text-white",
    "data-aos": "zoom-in"
  }, "Contact Us Now")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container mx-auto mb-6"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "text-center mt-6 mb-6 text-dark",
    "data-aos": "zoom-out"
  }, "If you have any question or inquiry Contact us and we will respond as soon as possible"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row justify-content-around"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-3 row justify-content-around",
    "data-aos": "fade-right"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: "phone-volume",
    className: "text-primary mx-auto mt-4",
    size: "3x"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-dark d-flex justify-content-center2 flex-column col-9"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-primary text-left"
  }, "Phone"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "+967-968453720"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "+967-968753937"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-3 row justify-content-around",
    "data-aos": "fade-up"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: "at",
    className: "text-primary  mx-auto mt-4 ",
    size: "3x"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-dark d-flex justify-content-center2 flex-column col-9"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-primary text-left"
  }, "Email"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "info@petroasiachem.com"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "ardi@gmail.com"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-3 row justify-content-around",
    "data-aos": "fade-left"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: "fax",
    className: "text-primary  mx-auto mt-4",
    size: "3x"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-dark d-flex justify-content-center2 flex-column col-9"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-primary text-left"
  }, "Fax"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "text-nowrap"
  }, "+98 23 8846 9688")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: "row mt-5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "text-primary col-lg-12 mt-5",
    "data-aos": "fade-right"
  }, " ", "Or Send a message"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group col-lg-6",
    "data-aos": "fade-right"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "nameForm"
  }, "Your Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "form-control",
    id: "nameForm",
    placeholder: "eg.Ahmad Adnan",
    required: true
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group col-lg-6",
    "data-aos": "fade-left"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "exampleInputEmail1"
  }, "Email address"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "email",
    className: "form-control",
    id: "exampleInputEmail1",
    "aria-describedby": "emailHelp",
    placeholder: "eg.morad@gmail.com",
    required: true
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    id: "emailHelp",
    className: "form-text text-muted"
  }, "We'll never share your email with anyone else.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group col-lg-12",
    "data-aos": "fade-left"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "nameForm"
  }, "Your Message"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
    type: "text",
    className: "form-control",
    id: "nameForm",
    rows: "6",
    placeholder: "Hello, How are you ....",
    required: true,
    style: {
      resize: "none"
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex justify-content-center mt-4 col-12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    className: "btn btn-lg btn-primary",
    "data-aos": "flip-right"
  }, "Send Message")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "./resources/js/components/layouts/styles/contact.module.scss":
/*!********************************************************************!*\
  !*** ./resources/js/components/layouts/styles/contact.module.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/lib/loader.js??ref--7-3!./contact.module.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./resources/js/components/layouts/styles/contact.module.scss");

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