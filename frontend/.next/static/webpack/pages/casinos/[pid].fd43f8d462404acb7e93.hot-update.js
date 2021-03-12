webpackHotUpdate_N_E("pages/casinos/[pid]",{

/***/ "./components/CasinoWrapper/index.jsx":
/*!********************************************!*\
  !*** ./components/CasinoWrapper/index.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _casino_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./casino.scss */ "./components/CasinoWrapper/casino.scss");
/* harmony import */ var _casino_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_casino_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _BonusTerms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BonusTerms */ "./components/CasinoWrapper/BonusTerms.jsx");
/* harmony import */ var _Rating__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Rating */ "./components/CasinoWrapper/Rating.jsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _Buttons_InfoBtn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Buttons/InfoBtn */ "./components/Buttons/InfoBtn.jsx");


var _jsxFileName = "C:\\Users\\IT\\Documents\\GitHub\\project-x\\frontend\\components\\CasinoWrapper\\index.jsx";








function CasinoWrapper(_ref) {
  var _this = this;

  var _ref$info = _ref.info,
      info = _ref$info === void 0 ? {} : _ref$info,
      review = _ref.review,
      _ref$post = _ref.post,
      post = _ref$post === void 0 ? false : _ref$post,
      _ref$main = _ref.main,
      main = _ref$main === void 0 ? false : _ref$main;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: info && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])("casino__wrapper", review && "review", main && "main"),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "casino_top",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: info.affiliateLink,
          className: "casino__img casino__item  ",
          children: [info.bonuses[0].exlusive || info.bonuses[1].exlusive && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "casino__exclusive",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
                children: "Exclusive bonus"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 26,
                columnNumber: 12
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("use", {
                xlinkHref: "/icons.svg#exclusive"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 27,
                columnNumber: 12
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 10
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "http://localhost:1337".concat(info.Overlay.url),
            alt: "logo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 8
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 7
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: info.affiliateLink,
          className: "casino__name casino__item  ",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: info.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 8
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: info.website
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 8
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 7
        }, this), info.bonuses.map(function (bonus) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "casino__info bigger casino__item  ",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: [bonus.percentage, "%"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 51,
                  columnNumber: 11
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 10
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 9
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "casino__info-small",
              children: ["up to ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                children: ["\u20AC", bonus.amount]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 16
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 9
            }, _this)]
          }, bonus.id, true, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 8
          }, _this);
        }), !post && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [" ", !review ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_BonusTerms__WEBPACK_IMPORTED_MODULE_3__["default"], {
            info: info
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 10
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Rating__WEBPACK_IMPORTED_MODULE_4__["default"], {
            rating: info.ratingTotal,
            number: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 10
          }, this)]
        }, void 0, true)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 6
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "casino__info-btns casino__item ",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Buttons_InfoBtn__WEBPACK_IMPORTED_MODULE_7__["default"], {
          review: review,
          info: info
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 7
        }, this), review && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
            href: "http://localhost:3000/casinos/".concat(info.slug),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "casino__review-link",
              children: [" ", "Read our ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                children: "review"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 20
              }, this), " "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 10
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 9
          }, this)
        }, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: info.affiliateLink,
          className: "casino__info-btn ",
          children: ["Get your ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
            children: "bonus now"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 17
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 7
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 6
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }, this)
  }, void 0, false);
}

_c = CasinoWrapper;
/* harmony default export */ __webpack_exports__["default"] = (CasinoWrapper);

var _c;

$RefreshReg$(_c, "CasinoWrapper");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXNpbm9XcmFwcGVyL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJDYXNpbm9XcmFwcGVyIiwiaW5mbyIsInJldmlldyIsInBvc3QiLCJtYWluIiwiY2xzeCIsImFmZmlsaWF0ZUxpbmsiLCJib251c2VzIiwiZXhsdXNpdmUiLCJPdmVybGF5IiwidXJsIiwidGl0bGUiLCJ3ZWJzaXRlIiwibWFwIiwiYm9udXMiLCJwZXJjZW50YWdlIiwiYW1vdW50IiwiaWQiLCJyYXRpbmdUb3RhbCIsInNsdWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsYUFBVCxPQUEwRTtBQUFBOztBQUFBLHVCQUFqREMsSUFBaUQ7QUFBQSxNQUFqREEsSUFBaUQsMEJBQTFDLEVBQTBDO0FBQUEsTUFBdENDLE1BQXNDLFFBQXRDQSxNQUFzQztBQUFBLHVCQUE5QkMsSUFBOEI7QUFBQSxNQUE5QkEsSUFBOEIsMEJBQXZCLEtBQXVCO0FBQUEsdUJBQWhCQyxJQUFnQjtBQUFBLE1BQWhCQSxJQUFnQiwwQkFBVCxLQUFTO0FBQ3pFLHNCQUNDO0FBQUEsY0FDRUgsSUFBSSxpQkFDSjtBQUNDLGVBQVMsRUFBRUksb0RBQUksQ0FDZCxpQkFEYyxFQUVkSCxNQUFNLElBQUksUUFGSSxFQUdkRSxJQUFJLElBQUksTUFITSxDQURoQjtBQUFBLDhCQU9DO0FBQUssaUJBQVMsRUFBQyxZQUFmO0FBQUEsZ0NBQ0M7QUFBRyxjQUFJLEVBQUVILElBQUksQ0FBQ0ssYUFBZDtBQUE2QixtQkFBUyxFQUFDLDRCQUF2QztBQUFBLHFCQUNFTCxJQUFJLENBQUNNLE9BQUwsQ0FBYSxDQUFiLEVBQWdCQyxRQUFoQixJQUNDUCxJQUFJLENBQUNNLE9BQUwsQ0FBYSxDQUFiLEVBQWdCQyxRQUFoQixpQkFDQTtBQUFLLHFCQUFTLEVBQUMsbUJBQWY7QUFBQSxt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bkZRTixhO0FBcUZNQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYXNpbm9zL1twaWRdLmZkNDNmOGQ0NjI0MDRhY2I3ZTkzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBcIi4vY2FzaW5vLnNjc3NcIjtcclxuaW1wb3J0IEJvbnVzVGVybXMgZnJvbSBcIi4vQm9udXNUZXJtc1wiO1xyXG5pbXBvcnQgUmF0aW5nIGZyb20gXCIuL1JhdGluZ1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XHJcbmltcG9ydCBJbmZvQnRuIGZyb20gXCIuLi9CdXR0b25zL0luZm9CdG5cIjtcclxuXHJcbmZ1bmN0aW9uIENhc2lub1dyYXBwZXIoeyBpbmZvID0ge30sIHJldmlldywgcG9zdCA9IGZhbHNlLCBtYWluID0gZmFsc2UgfSkge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHR7aW5mbyAmJiAoXHJcblx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbHN4KFxyXG5cdFx0XHRcdFx0XHRcImNhc2lub19fd3JhcHBlclwiLFxyXG5cdFx0XHRcdFx0XHRyZXZpZXcgJiYgXCJyZXZpZXdcIixcclxuXHRcdFx0XHRcdFx0bWFpbiAmJiBcIm1haW5cIlxyXG5cdFx0XHRcdFx0KX1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhc2lub190b3BcIj5cclxuXHRcdFx0XHRcdFx0PGEgaHJlZj17aW5mby5hZmZpbGlhdGVMaW5rfSBjbGFzc05hbWU9XCJjYXNpbm9fX2ltZyBjYXNpbm9fX2l0ZW0gIFwiPlxyXG5cdFx0XHRcdFx0XHRcdHtpbmZvLmJvbnVzZXNbMF0uZXhsdXNpdmUgfHxcclxuXHRcdFx0XHRcdFx0XHRcdChpbmZvLmJvbnVzZXNbMV0uZXhsdXNpdmUgJiYgKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhc2lub19fZXhjbHVzaXZlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHN2Zz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0aXRsZT5FeGNsdXNpdmUgYm9udXM8L3RpdGxlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHVzZSB4bGlua0hyZWY9XCIvaWNvbnMuc3ZnI2V4Y2x1c2l2ZVwiPjwvdXNlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3ZnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdCkpfVxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdFx0XHRcdFx0XHRzcmM9e2BodHRwOi8vbG9jYWxob3N0OjEzMzcke2luZm8uT3ZlcmxheS51cmx9YH1cclxuXHRcdFx0XHRcdFx0XHRcdGFsdD1cImxvZ29cIlxyXG5cdFx0XHRcdFx0XHRcdD48L2ltZz5cclxuXHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHQ8YVxyXG5cdFx0XHRcdFx0XHRcdGhyZWY9e2luZm8uYWZmaWxpYXRlTGlua31cclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjYXNpbm9fX25hbWUgY2FzaW5vX19pdGVtICBcIlxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4+e2luZm8udGl0bGV9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuPntpbmZvLndlYnNpdGV9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdHtpbmZvLmJvbnVzZXMubWFwKChib251cykgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNhc2lub19faW5mbyBiaWdnZXIgY2FzaW5vX19pdGVtICBcIlxyXG5cdFx0XHRcdFx0XHRcdFx0a2V5PXtib251cy5pZH1cclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8cD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHN0cm9uZz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj57Ym9udXMucGVyY2VudGFnZX0lPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3N0cm9uZz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImNhc2lub19faW5mby1zbWFsbFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR1cCB0byA8c3Ryb25nPuKCrHtib251cy5hbW91bnR9PC9zdHJvbmc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdCkpfVxyXG5cclxuXHRcdFx0XHRcdFx0eyFwb3N0ICYmIChcclxuXHRcdFx0XHRcdFx0XHQ8PlxyXG5cdFx0XHRcdFx0XHRcdFx0e1wiIFwifVxyXG5cdFx0XHRcdFx0XHRcdFx0eyFyZXZpZXcgPyAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxCb251c1Rlcm1zIGluZm89e2luZm99IC8+XHJcblx0XHRcdFx0XHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8UmF0aW5nIHJhdGluZz17aW5mby5yYXRpbmdUb3RhbH0gbnVtYmVyPXt0cnVlfSAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdFx0XHQ8Lz5cclxuXHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FzaW5vX19pbmZvLWJ0bnMgY2FzaW5vX19pdGVtIFwiPlxyXG5cdFx0XHRcdFx0XHQ8SW5mb0J0biByZXZpZXc9e3Jldmlld30gaW5mbz17aW5mb30gLz5cclxuXHRcdFx0XHRcdFx0e3JldmlldyAmJiAoXHJcblx0XHRcdFx0XHRcdFx0PD5cclxuXHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9e2BodHRwOi8vbG9jYWxob3N0OjMwMDAvY2FzaW5vcy8ke2luZm8uc2x1Z31gfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwiY2FzaW5vX19yZXZpZXctbGlua1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtcIiBcIn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRSZWFkIG91ciA8c3Ryb25nPnJldmlldzwvc3Ryb25nPntcIiBcIn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdDwvPlxyXG5cdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHQ8YSBocmVmPXtpbmZvLmFmZmlsaWF0ZUxpbmt9IGNsYXNzTmFtZT1cImNhc2lub19faW5mby1idG4gXCI+XHJcblx0XHRcdFx0XHRcdFx0R2V0IHlvdXIgPHN0cm9uZz5ib251cyBub3c8L3N0cm9uZz57XCIgXCJ9XHJcblx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQpfVxyXG5cdFx0PC8+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FzaW5vV3JhcHBlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==