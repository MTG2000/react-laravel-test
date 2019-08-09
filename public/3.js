(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./resources/js/components/layouts/styles/product.scss":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./resources/js/components/layouts/styles/product.scss ***!
  \**************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".productPage {\n  min-height: 100vh;\n  perspective: 3000px;\n}\n.productPage .imageWrapper {\n  width: 100%;\n  max-width: 550px;\n  height: 50vh;\n  max-height: 400px;\n  overflow: hidden;\n}\n.productPage .imageWrapper img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  transition: transform 0.5s ease-in-out;\n  background-color: #999;\n}\n.productPage .imageWrapper:hover img {\n  transform: scale(1.2) rotate(-7deg);\n}", ""]);

// exports


/***/ }),

/***/ "./resources/js/components/layouts/ProductPage.jsx":
/*!*********************************************************!*\
  !*** ./resources/js/components/layouts/ProductPage.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_product_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/product.scss */ "./resources/js/components/layouts/styles/product.scss");
/* harmony import */ var _styles_product_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_product_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Loading */ "./resources/js/components/layouts/Loading.jsx");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var tempProduct = {
  id: 4,
  title: "Leather Tanning",
  img: "https://drive.google.com/uc?id=1xma7V3yoEd6g8BU4EwUIsQqwV8ywtyIc",
  text: "Our leather and textiles business provides specialty chemicals for beamhouse and tanning, retaining, dyestuffs, textiles and finishing.\n\n We not only supply these specialty chemicals to our customers but also strive, whenever possible, to be the partners who provide the best solutions or processes for their needs.\n\n  We have more than 25 years of experience in the leather chemical business and represent a number of world-class suppliers throughout the region. Our leather technicians develop an economical process in our application laboratory, run trials at the customers’ site and provide a total package to meet their needs.\n\nOur reputable suppliers constantly visit clients to get updates on the latest fashion trends and technical know-how.\n\n This enables close cooperation and ensures the ability to respond quickly to market changes.\n\nThe goods, which are manufactured by our customers, include shoe upper leather, upholstery, handbags, car upholstery as well as many other products.",
  properties: {
    "Sodium Sulphide": "Na2S – Yellow flakes with low Fe content.",
    "Sodium Hydrosulphide": "NaSH – Biege flakes",
    "Liming auxiliaries": "Products used for better de-hairing and reduction of Na2S usage.",
    "Formic acid 85% (Substitution)": "Green acidic combination product which substitutes Formic acid usage in pickling, dyeing and tanning processes."
  }
};

var ProductPage = function ProductPage(_ref) {
  var match = _ref.match;

  // console.log(match.params.id);
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      product = _useState2[0],
      setProduct = _useState2[1];

  document.title = product && product.title || "Products";
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var result;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.t0 = console;
              _context.next = 3;
              return fetch("http://jsonplaceholder.typicode.com/posts/1");

            case 3:
              _context.t1 = _context.sent;

              _context.t0.log.call(_context.t0, _context.t1);

              result = tempProduct;
              setProduct(result);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  });
  if (!product) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Loading__WEBPACK_IMPORTED_MODULE_3__["default"], null);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "productPage container py-5"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "imageWrapper mx-auto rounded mt-5"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: product.img,
    alt: product.title
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "text-primary mb-5 mt-6 text-center h1",
    "data-aos": "flip-up",
    "data-aos-duration": "1100"
  }, product.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    style: {
      whiteSpace: "pre-line"
    },
    className: "mb-5",
    "data-aos": "fade-right"
  }, product.text), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    "data-aos": "fade-up"
  }, Object.keys(product.properties).map(function (key, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "d-flex",
      key: index
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "bg-primary text-white border-bottom text-break  px-4 py-3",
      style: {
        width: "30%",
        minWidth: "150px"
      }
    }, key), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: " w-100 border-bottom border-primary px-4 py-3"
    }, product.properties[key]));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "my-5"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductPage);

/***/ }),

/***/ "./resources/js/components/layouts/styles/product.scss":
/*!*************************************************************!*\
  !*** ./resources/js/components/layouts/styles/product.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/lib/loader.js??ref--7-3!./product.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./resources/js/components/layouts/styles/product.scss");

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