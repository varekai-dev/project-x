webpackHotUpdate_N_E("pages/index",{

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
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "casino__exclusive",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
                children: "Exclusive bonus"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 25,
                columnNumber: 10
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("use", {
                xlinkHref: "/icons.svg#exclusive"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 26,
                columnNumber: 10
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 9
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 8
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "http://localhost:1337".concat(info.Overlay.url),
            alt: "logo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
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
            lineNumber: 39,
            columnNumber: 8
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: info.website
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 8
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
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
                  lineNumber: 49,
                  columnNumber: 11
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 10
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 9
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "casino__info-small",
              children: ["up to ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                children: ["\u20AC", bonus.amount]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 16
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 9
            }, _this)]
          }, bonus.id, true, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 8
          }, _this);
        }), !post && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [" ", !review ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_BonusTerms__WEBPACK_IMPORTED_MODULE_3__["default"], {
            info: info
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 10
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Rating__WEBPACK_IMPORTED_MODULE_4__["default"], {
            rating: info.ratingTotal,
            number: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
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
          lineNumber: 71,
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
                lineNumber: 77,
                columnNumber: 20
              }, this), " "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 10
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 9
          }, this)
        }, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: info.affiliateLink,
          className: "casino__info-btn ",
          children: ["Get your ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
            children: "bonus now"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 17
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 7
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 70,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXNpbm9XcmFwcGVyL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJDYXNpbm9XcmFwcGVyIiwiaW5mbyIsInJldmlldyIsInBvc3QiLCJtYWluIiwiY29uc29sZSIsImxvZyIsImNsc3giLCJhZmZpbGlhdGVMaW5rIiwiT3ZlcmxheSIsInVybCIsInRpdGxlIiwid2Vic2l0ZSIsImJvbnVzZXMiLCJtYXAiLCJib251cyIsInBlcmNlbnRhZ2UiLCJhbW91bnQiLCJpZCIsInJhdGluZ1RvdGFsIiwic2x1ZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxhQUFULE9BQTBFO0FBQUE7O0FBQUEsdUJBQWpEQyxJQUFpRDtBQUFBLE1BQWpEQSxJQUFpRCwwQkFBMUMsRUFBMEM7QUFBQSxNQUF0Q0MsTUFBc0MsUUFBdENBLE1BQXNDO0FBQUEsdUJBQTlCQyxJQUE4QjtBQUFBLE1BQTlCQSxJQUE4QiwwQkFBdkIsS0FBdUI7QUFBQSx1QkFBaEJDLElBQWdCO0FBQUEsTUFBaEJBLElBQWdCLDBCQUFULEtBQVM7QUFDekVDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZTCxJQUFaO0FBQ0Esc0JBQ0M7QUFBQSxjQUNFQSxJQUFJLGlCQUNKO0FBQ0MsZUFBUyxFQUFFTSxvREFBSSxDQUNkLGlCQURjLEVBRWRMLE1BQU0sSUFBSSxRQUZJLEVBR2RFLElBQUksSUFBSSxNQUhNLENBRGhCO0FBQUEsOEJBT0M7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQSxnQ0FDQztBQUFHLGNBQUksRUFBRUgsSUFBSSxDQUFDTyxhQUFkO0FBQTZCLG1CQUFTLEVBQUMsNEJBQXZDO0FBQUEsa0NBQ0M7QUFBSyxxQkFBUyxFQUFDLG1CQUFmO0FBQUEsbUNBQ0M7QUFBQSxzQ0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERCxl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Ljg4NmM5MzZiMjA2YTU4YzFjNTkwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBcIi4vY2FzaW5vLnNjc3NcIjtcclxuaW1wb3J0IEJvbnVzVGVybXMgZnJvbSBcIi4vQm9udXNUZXJtc1wiO1xyXG5pbXBvcnQgUmF0aW5nIGZyb20gXCIuL1JhdGluZ1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XHJcbmltcG9ydCBJbmZvQnRuIGZyb20gXCIuLi9CdXR0b25zL0luZm9CdG5cIjtcclxuXHJcbmZ1bmN0aW9uIENhc2lub1dyYXBwZXIoeyBpbmZvID0ge30sIHJldmlldywgcG9zdCA9IGZhbHNlLCBtYWluID0gZmFsc2UgfSkge1xyXG5cdGNvbnNvbGUubG9nKGluZm8pO1xyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHR7aW5mbyAmJiAoXHJcblx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbHN4KFxyXG5cdFx0XHRcdFx0XHRcImNhc2lub19fd3JhcHBlclwiLFxyXG5cdFx0XHRcdFx0XHRyZXZpZXcgJiYgXCJyZXZpZXdcIixcclxuXHRcdFx0XHRcdFx0bWFpbiAmJiBcIm1haW5cIlxyXG5cdFx0XHRcdFx0KX1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhc2lub190b3BcIj5cclxuXHRcdFx0XHRcdFx0PGEgaHJlZj17aW5mby5hZmZpbGlhdGVMaW5rfSBjbGFzc05hbWU9XCJjYXNpbm9fX2ltZyBjYXNpbm9fX2l0ZW0gIFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FzaW5vX19leGNsdXNpdmVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxzdmc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0aXRsZT5FeGNsdXNpdmUgYm9udXM8L3RpdGxlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dXNlIHhsaW5rSHJlZj1cIi9pY29ucy5zdmcjZXhjbHVzaXZlXCI+PC91c2U+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3N2Zz5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHRcdFx0XHRcdFx0c3JjPXtgaHR0cDovL2xvY2FsaG9zdDoxMzM3JHtpbmZvLk92ZXJsYXkudXJsfWB9XHJcblx0XHRcdFx0XHRcdFx0XHRhbHQ9XCJsb2dvXCJcclxuXHRcdFx0XHRcdFx0XHQ+PC9pbWc+XHJcblx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0PGFcclxuXHRcdFx0XHRcdFx0XHRocmVmPXtpbmZvLmFmZmlsaWF0ZUxpbmt9XHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY2FzaW5vX19uYW1lIGNhc2lub19faXRlbSAgXCJcclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuPntpbmZvLnRpdGxlfTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj57aW5mby53ZWJzaXRlfTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHR7aW5mby5ib251c2VzLm1hcCgoYm9udXMpID0+IChcclxuXHRcdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjYXNpbm9fX2luZm8gYmlnZ2VyIGNhc2lub19faXRlbSAgXCJcclxuXHRcdFx0XHRcdFx0XHRcdGtleT17Ym9udXMuaWR9XHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHA+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxzdHJvbmc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+e2JvbnVzLnBlcmNlbnRhZ2V9JTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9zdHJvbmc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJjYXNpbm9fX2luZm8tc21hbGxcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0dXAgdG8gPHN0cm9uZz7igqx7Ym9udXMuYW1vdW50fTwvc3Ryb25nPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQpKX1cclxuXHJcblx0XHRcdFx0XHRcdHshcG9zdCAmJiAoXHJcblx0XHRcdFx0XHRcdFx0PD5cclxuXHRcdFx0XHRcdFx0XHRcdHtcIiBcIn1cclxuXHRcdFx0XHRcdFx0XHRcdHshcmV2aWV3ID8gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Qm9udXNUZXJtcyBpbmZvPXtpbmZvfSAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0PFJhdGluZyByYXRpbmc9e2luZm8ucmF0aW5nVG90YWx9IG51bWJlcj17dHJ1ZX0gLz5cclxuXHRcdFx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHRcdFx0PC8+XHJcblx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhc2lub19faW5mby1idG5zIGNhc2lub19faXRlbSBcIj5cclxuXHRcdFx0XHRcdFx0PEluZm9CdG4gcmV2aWV3PXtyZXZpZXd9IGluZm89e2luZm99IC8+XHJcblx0XHRcdFx0XHRcdHtyZXZpZXcgJiYgKFxyXG5cdFx0XHRcdFx0XHRcdDw+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPXtgaHR0cDovL2xvY2FsaG9zdDozMDAwL2Nhc2lub3MvJHtpbmZvLnNsdWd9YH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cImNhc2lub19fcmV2aWV3LWxpbmtcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7XCIgXCJ9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0UmVhZCBvdXIgPHN0cm9uZz5yZXZpZXc8L3N0cm9uZz57XCIgXCJ9XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHQ8Lz5cclxuXHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdFx0PGEgaHJlZj17aW5mby5hZmZpbGlhdGVMaW5rfSBjbGFzc05hbWU9XCJjYXNpbm9fX2luZm8tYnRuIFwiPlxyXG5cdFx0XHRcdFx0XHRcdEdldCB5b3VyIDxzdHJvbmc+Ym9udXMgbm93PC9zdHJvbmc+e1wiIFwifVxyXG5cdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0KX1cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhc2lub1dyYXBwZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=