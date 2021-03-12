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
  console.log(info);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: info && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])("casino__wrapper", review && "review", main && "main"),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "casino_top",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: info.affiliateLink,
          className: "casino__img casino__item  ",
          children: [info.bonuses[0].exlusive || info.bonuses[1] && info.bonuses[1].exlusive && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "casino__exclusive",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
                children: "Exclusive bonus"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 27,
                columnNumber: 12
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("use", {
                xlinkHref: "/icons.svg#exclusive"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 28,
                columnNumber: 12
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 10
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "http://localhost:1337".concat(info.Overlay.url),
            alt: "logo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 8
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 7
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: info.affiliateLink,
          className: "casino__name casino__item  ",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: info.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 8
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: info.website
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 8
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 38,
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
                  lineNumber: 52,
                  columnNumber: 11
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 10
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 9
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "casino__info-small",
              children: ["up to ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                children: ["\u20AC", bonus.amount]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 16
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 9
            }, _this)]
          }, bonus.id, true, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 8
          }, _this);
        }), !post && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [" ", !review ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_BonusTerms__WEBPACK_IMPORTED_MODULE_3__["default"], {
            info: info
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 10
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Rating__WEBPACK_IMPORTED_MODULE_4__["default"], {
            rating: info.ratingTotal,
            number: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 10
          }, this)]
        }, void 0, true)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 6
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "casino__info-btns casino__item ",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Buttons_InfoBtn__WEBPACK_IMPORTED_MODULE_7__["default"], {
          review: review,
          info: info
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
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
                lineNumber: 80,
                columnNumber: 20
              }, this), " "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 10
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 9
          }, this)
        }, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: info.affiliateLink,
          className: "casino__info-btn ",
          children: ["Get your ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
            children: "bonus now"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 17
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 7
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 6
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXNpbm9XcmFwcGVyL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJDYXNpbm9XcmFwcGVyIiwiaW5mbyIsInJldmlldyIsInBvc3QiLCJtYWluIiwiY29uc29sZSIsImxvZyIsImNsc3giLCJhZmZpbGlhdGVMaW5rIiwiYm9udXNlcyIsImV4bHVzaXZlIiwiT3ZlcmxheSIsInVybCIsInRpdGxlIiwid2Vic2l0ZSIsIm1hcCIsImJvbnVzIiwicGVyY2VudGFnZSIsImFtb3VudCIsImlkIiwicmF0aW5nVG90YWwiLCJzbHVnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLGFBQVQsT0FBMEU7QUFBQTs7QUFBQSx1QkFBakRDLElBQWlEO0FBQUEsTUFBakRBLElBQWlELDBCQUExQyxFQUEwQztBQUFBLE1BQXRDQyxNQUFzQyxRQUF0Q0EsTUFBc0M7QUFBQSx1QkFBOUJDLElBQThCO0FBQUEsTUFBOUJBLElBQThCLDBCQUF2QixLQUF1QjtBQUFBLHVCQUFoQkMsSUFBZ0I7QUFBQSxNQUFoQkEsSUFBZ0IsMEJBQVQsS0FBUztBQUN6RUMsU0FBTyxDQUFDQyxHQUFSLENBQVlMLElBQVo7QUFDQSxzQkFDQztBQUFBLGNBQ0VBLElBQUksaUJBQ0o7QUFDQyxlQUFTLEVBQUVNLG9EQUFJLENBQ2QsaUJBRGMsRUFFZEwsTUFBTSxJQUFJLFFBRkksRUFHZEUsSUFBSSxJQUFJLE1BSE0sQ0FEaEI7QUFBQSw4QkFPQztBQUFLLGlCQUFTLEVBQUMsWUFBZjtBQUFBLGdDQUNDO0FBQUcsY0FBSSxFQUFFSCxJQUFJLENBQUNPLGFBQWQ7QUFBNkIsbUJBQVMsRUFBQyw0QkFBdkM7QUFBQSxxQkFDRVAsSUFBSSxDQUFDUSxPQUFMLENBQWEsQ0FBYixFQUFnQkMsUUFBaEIsSUFDQ1QsSUFBSSxDQUFDUSxPQUFMLENBQWEsQ0FB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LGdCQVpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTNERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRixtQkFERDtBQWtGQTs7S0FwRlFSLGE7QUFzRk1BLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Nhc2lub3MvW3BpZF0uNmU3N2U1ODRiODQwM2Y4YTcwMmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFwiLi9jYXNpbm8uc2Nzc1wiO1xyXG5pbXBvcnQgQm9udXNUZXJtcyBmcm9tIFwiLi9Cb251c1Rlcm1zXCI7XHJcbmltcG9ydCBSYXRpbmcgZnJvbSBcIi4vUmF0aW5nXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcclxuaW1wb3J0IEluZm9CdG4gZnJvbSBcIi4uL0J1dHRvbnMvSW5mb0J0blwiO1xyXG5cclxuZnVuY3Rpb24gQ2FzaW5vV3JhcHBlcih7IGluZm8gPSB7fSwgcmV2aWV3LCBwb3N0ID0gZmFsc2UsIG1haW4gPSBmYWxzZSB9KSB7XHJcblx0Y29uc29sZS5sb2coaW5mbyk7XHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdHtpbmZvICYmIChcclxuXHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRjbGFzc05hbWU9e2Nsc3goXHJcblx0XHRcdFx0XHRcdFwiY2FzaW5vX193cmFwcGVyXCIsXHJcblx0XHRcdFx0XHRcdHJldmlldyAmJiBcInJldmlld1wiLFxyXG5cdFx0XHRcdFx0XHRtYWluICYmIFwibWFpblwiXHJcblx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FzaW5vX3RvcFwiPlxyXG5cdFx0XHRcdFx0XHQ8YSBocmVmPXtpbmZvLmFmZmlsaWF0ZUxpbmt9IGNsYXNzTmFtZT1cImNhc2lub19faW1nIGNhc2lub19faXRlbSAgXCI+XHJcblx0XHRcdFx0XHRcdFx0e2luZm8uYm9udXNlc1swXS5leGx1c2l2ZSB8fFxyXG5cdFx0XHRcdFx0XHRcdFx0KGluZm8uYm9udXNlc1sxXSAmJiBpbmZvLmJvbnVzZXNbMV0uZXhsdXNpdmUgJiYgKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhc2lub19fZXhjbHVzaXZlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHN2Zz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0aXRsZT5FeGNsdXNpdmUgYm9udXM8L3RpdGxlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHVzZSB4bGlua0hyZWY9XCIvaWNvbnMuc3ZnI2V4Y2x1c2l2ZVwiPjwvdXNlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3ZnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdCkpfVxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdFx0XHRcdFx0XHRzcmM9e2BodHRwOi8vbG9jYWxob3N0OjEzMzcke2luZm8uT3ZlcmxheS51cmx9YH1cclxuXHRcdFx0XHRcdFx0XHRcdGFsdD1cImxvZ29cIlxyXG5cdFx0XHRcdFx0XHRcdD48L2ltZz5cclxuXHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHQ8YVxyXG5cdFx0XHRcdFx0XHRcdGhyZWY9e2luZm8uYWZmaWxpYXRlTGlua31cclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjYXNpbm9fX25hbWUgY2FzaW5vX19pdGVtICBcIlxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4+e2luZm8udGl0bGV9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuPntpbmZvLndlYnNpdGV9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdHtpbmZvLmJvbnVzZXMubWFwKChib251cykgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNhc2lub19faW5mbyBiaWdnZXIgY2FzaW5vX19pdGVtICBcIlxyXG5cdFx0XHRcdFx0XHRcdFx0a2V5PXtib251cy5pZH1cclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8cD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHN0cm9uZz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj57Ym9udXMucGVyY2VudGFnZX0lPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3N0cm9uZz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImNhc2lub19faW5mby1zbWFsbFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR1cCB0byA8c3Ryb25nPuKCrHtib251cy5hbW91bnR9PC9zdHJvbmc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdCkpfVxyXG5cclxuXHRcdFx0XHRcdFx0eyFwb3N0ICYmIChcclxuXHRcdFx0XHRcdFx0XHQ8PlxyXG5cdFx0XHRcdFx0XHRcdFx0e1wiIFwifVxyXG5cdFx0XHRcdFx0XHRcdFx0eyFyZXZpZXcgPyAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxCb251c1Rlcm1zIGluZm89e2luZm99IC8+XHJcblx0XHRcdFx0XHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8UmF0aW5nIHJhdGluZz17aW5mby5yYXRpbmdUb3RhbH0gbnVtYmVyPXt0cnVlfSAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdFx0XHQ8Lz5cclxuXHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FzaW5vX19pbmZvLWJ0bnMgY2FzaW5vX19pdGVtIFwiPlxyXG5cdFx0XHRcdFx0XHQ8SW5mb0J0biByZXZpZXc9e3Jldmlld30gaW5mbz17aW5mb30gLz5cclxuXHRcdFx0XHRcdFx0e3JldmlldyAmJiAoXHJcblx0XHRcdFx0XHRcdFx0PD5cclxuXHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9e2BodHRwOi8vbG9jYWxob3N0OjMwMDAvY2FzaW5vcy8ke2luZm8uc2x1Z31gfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwiY2FzaW5vX19yZXZpZXctbGlua1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtcIiBcIn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRSZWFkIG91ciA8c3Ryb25nPnJldmlldzwvc3Ryb25nPntcIiBcIn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdDwvPlxyXG5cdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHQ8YSBocmVmPXtpbmZvLmFmZmlsaWF0ZUxpbmt9IGNsYXNzTmFtZT1cImNhc2lub19faW5mby1idG4gXCI+XHJcblx0XHRcdFx0XHRcdFx0R2V0IHlvdXIgPHN0cm9uZz5ib251cyBub3c8L3N0cm9uZz57XCIgXCJ9XHJcblx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQpfVxyXG5cdFx0PC8+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FzaW5vV3JhcHBlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==