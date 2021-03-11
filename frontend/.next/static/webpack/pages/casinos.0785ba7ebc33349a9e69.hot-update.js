webpackHotUpdate_N_E("pages/casinos",{

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


var _jsxFileName = "C:\\Users\\varekai\\Documents\\GitHub\\project-x\\frontend\\components\\CasinoWrapper\\index.jsx";








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
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "http://localhost:1337".concat(info.Overlay.url),
            alt: "logo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: info.affiliateLink,
          className: "casino__name casino__item  ",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: info.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: info.website
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 13
        }, this), info.bonuses.map(function (bonus) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "casino__info bigger casino__item  ",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: [bonus.percentage, "%"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 41,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 40,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "casino__info-small",
              children: ["up to ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                children: ["\u20AC", bonus.amount]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 25
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 17
            }, _this)]
          }, bonus.id, true, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 15
          }, _this);
        }), !post && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [" ", !review ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_BonusTerms__WEBPACK_IMPORTED_MODULE_3__["default"], {
            info: info
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 19
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Rating__WEBPACK_IMPORTED_MODULE_4__["default"], {
            rating: info.ratingTotal
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 19
          }, this)]
        }, void 0, true)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "casino__info-btns casino__item ",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Buttons_InfoBtn__WEBPACK_IMPORTED_MODULE_7__["default"], {
          review: review,
          info: info
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 13
        }, this), review && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
            href: "http://localhost:3000/casinos/".concat(info.id),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "casino__review-link",
              children: [" ", "Read our ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                children: "review"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 30
              }, this), " "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 19
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 17
          }, this)
        }, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: info.affiliateLink,
          className: "casino__info-btn ",
          children: ["Get your ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
            children: "bonus now"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 24
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXNpbm9XcmFwcGVyL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJDYXNpbm9XcmFwcGVyIiwiaW5mbyIsInJldmlldyIsInBvc3QiLCJtYWluIiwiY2xzeCIsImFmZmlsaWF0ZUxpbmsiLCJPdmVybGF5IiwidXJsIiwidGl0bGUiLCJ3ZWJzaXRlIiwiYm9udXNlcyIsIm1hcCIsImJvbnVzIiwicGVyY2VudGFnZSIsImFtb3VudCIsImlkIiwicmF0aW5nVG90YWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsYUFBVCxPQUEwRTtBQUFBOztBQUFBLHVCQUFqREMsSUFBaUQ7QUFBQSxNQUFqREEsSUFBaUQsMEJBQTFDLEVBQTBDO0FBQUEsTUFBdENDLE1BQXNDLFFBQXRDQSxNQUFzQztBQUFBLHVCQUE5QkMsSUFBOEI7QUFBQSxNQUE5QkEsSUFBOEIsMEJBQXZCLEtBQXVCO0FBQUEsdUJBQWhCQyxJQUFnQjtBQUFBLE1BQWhCQSxJQUFnQiwwQkFBVCxLQUFTO0FBQ3hFLHNCQUNFO0FBQUEsY0FDR0gsSUFBSSxpQkFDSDtBQUNFLGVBQVMsRUFBRUksb0RBQUksQ0FDYixpQkFEYSxFQUViSCxNQUFNLElBQUksUUFGRyxFQUdiRSxJQUFJLElBQUksTUFISyxDQURqQjtBQUFBLDhCQU9FO0FBQUssaUJBQVMsRUFBQyxZQUFmO0FBQUEsZ0NBQ0U7QUFBRyxjQUFJLEVBQUVILElBQUksQ0FBQ0ssYUFBZDtBQUE2QixtQkFBUyxFQUFDLDRCQUF2QztBQUFBLGlDQUNFO0FBQ0UsZUFBRyxpQ0FBMEJMLElBQUksQ0FBQ00sT0FBTCxDQUFhQyxHQUF2QyxDQURMO0FBRUUsZUFBRyxFQUFDO0FBRk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFPRTtBQUNFLGNBQUksRUFBRVAsSUFBSSxDQUFDSyxhQURiO0FBRUUsbUJBQVMsRUFBQyw2QkFGWjtBQUFBLGtDQUlFO0FBQUEsc0JBQU9MLElBQUksQ0FBQ1E7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpGLGVBS0U7QUFBQSxzQkFBT1IsSUFBSSxDQUFDUztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBGLEVBY0dULElBQUksQ0FBQ1UsT0FBTCxDQUFhQyxHQUFiLENBQWlCLFVBQUNDLEtBQUQ7QUFBQSw4QkFDaEI7QUFDRSxxQkFBUyxFQUFDLG9DQURaO0FBQUEsb0NBSUU7QUFBQSxxQ0FDRTtBQUFBLHVDQUNFO0FBQUEsNkJBQU9BLEtBQUssQ0FBQ0MsVUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRixlQVNFO0FBQUcsdUJBQVMsRUFBQyxvQkFBYjtBQUFBLGdEQUNRO0FBQUEscUNBQVVELEtBQUssQ0FBQ0UsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFURjtBQUFBLGFBRU9GLEtBQUssQ0FBQ0csRUFGYjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURnQjtBQUFBLFNBQWpCLENBZEgsRUE4QkcsQ0FBQ2IsSUFBRCxpQkFDQztBQUFBLHFCQUNHLEdBREgsRUFFRyxDQUFDRCxNQUFELGdCQUNDLHFFQUFDLG1EQUFEO0FBQVksZ0JBQUksRUFBRUQ7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERCxnQkFHQyxxRUFBQywrQ0FBRDtBQUFRLGtCQUFNLEVBQUVBLElBQUksQ0FBQ2dCO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTEo7QUFBQSx3QkEvQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEYsZUFpREU7QUFBSyxpQkFBUyxFQUFDLGlDQUFmO0FBQUEsZ0NBQ0UscUVBQUMsd0RBQUQ7QUFBUyxnQkFBTSxFQUFFZixNQUFqQjtBQUF5QixjQUFJLEVBQUVEO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsRUFFR0MsTUFBTSxpQkFDTDtBQUFBLGlDQUNFLHFFQUFDLGdEQUFEO0FBQU0sZ0JBQUksMENBQW1DRCxJQUFJLENBQUNlLEVBQXhDLENBQVY7QUFBQSxtQ0FDRTtBQUFHLHVCQUFTLEVBQUMscUJBQWI7QUFBQSx5QkFDRyxHQURILDRCQUVXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZYLEVBRW1DLEdBRm5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERix5QkFISixlQVlFO0FBQUcsY0FBSSxFQUFFZixJQUFJLENBQUNLLGFBQWQ7QUFBNkIsbUJBQVMsRUFBQyxtQkFBdkM7QUFBQSwrQ0FDVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEWCxFQUNzQyxHQUR0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBakRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKLG1CQURGO0FBd0VEOztLQXpFUU4sYTtBQTJFTUEsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FzaW5vcy4wNzg1YmE3ZWJjMzMzNDlhOWU2OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgXCIuL2Nhc2luby5zY3NzXCI7XHJcbmltcG9ydCBCb251c1Rlcm1zIGZyb20gXCIuL0JvbnVzVGVybXNcIjtcclxuaW1wb3J0IFJhdGluZyBmcm9tIFwiLi9SYXRpbmdcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xyXG5pbXBvcnQgSW5mb0J0biBmcm9tIFwiLi4vQnV0dG9ucy9JbmZvQnRuXCI7XHJcblxyXG5mdW5jdGlvbiBDYXNpbm9XcmFwcGVyKHsgaW5mbyA9IHt9LCByZXZpZXcsIHBvc3QgPSBmYWxzZSwgbWFpbiA9IGZhbHNlIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge2luZm8gJiYgKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAgICAgXCJjYXNpbm9fX3dyYXBwZXJcIixcclxuICAgICAgICAgICAgcmV2aWV3ICYmIFwicmV2aWV3XCIsXHJcbiAgICAgICAgICAgIG1haW4gJiYgXCJtYWluXCJcclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXNpbm9fdG9wXCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9e2luZm8uYWZmaWxpYXRlTGlua30gY2xhc3NOYW1lPVwiY2FzaW5vX19pbWcgY2FzaW5vX19pdGVtICBcIj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjEzMzcke2luZm8uT3ZlcmxheS51cmx9YH1cclxuICAgICAgICAgICAgICAgIGFsdD1cImxvZ29cIlxyXG4gICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGhyZWY9e2luZm8uYWZmaWxpYXRlTGlua31cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXNpbm9fX25hbWUgY2FzaW5vX19pdGVtICBcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHNwYW4+e2luZm8udGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuPntpbmZvLndlYnNpdGV9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIHtpbmZvLmJvbnVzZXMubWFwKChib251cykgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhc2lub19faW5mbyBiaWdnZXIgY2FzaW5vX19pdGVtICBcIlxyXG4gICAgICAgICAgICAgICAga2V5PXtib251cy5pZH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57Ym9udXMucGVyY2VudGFnZX0lPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhc2lub19faW5mby1zbWFsbFwiPlxyXG4gICAgICAgICAgICAgICAgICB1cCB0byA8c3Ryb25nPuKCrHtib251cy5hbW91bnR9PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgICAgeyFwb3N0ICYmIChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgeyFyZXZpZXcgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxCb251c1Rlcm1zIGluZm89e2luZm99IC8+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICA8UmF0aW5nIHJhdGluZz17aW5mby5yYXRpbmdUb3RhbH0gLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhc2lub19faW5mby1idG5zIGNhc2lub19faXRlbSBcIj5cclxuICAgICAgICAgICAgPEluZm9CdG4gcmV2aWV3PXtyZXZpZXd9IGluZm89e2luZm99IC8+XHJcbiAgICAgICAgICAgIHtyZXZpZXcgJiYgKFxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgaHR0cDovL2xvY2FsaG9zdDozMDAwL2Nhc2lub3MvJHtpbmZvLmlkfWB9PlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjYXNpbm9fX3Jldmlldy1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWQgb3VyIDxzdHJvbmc+cmV2aWV3PC9zdHJvbmc+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxhIGhyZWY9e2luZm8uYWZmaWxpYXRlTGlua30gY2xhc3NOYW1lPVwiY2FzaW5vX19pbmZvLWJ0biBcIj5cclxuICAgICAgICAgICAgICBHZXQgeW91ciA8c3Ryb25nPmJvbnVzIG5vdzwvc3Ryb25nPntcIiBcIn1cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXNpbm9XcmFwcGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9