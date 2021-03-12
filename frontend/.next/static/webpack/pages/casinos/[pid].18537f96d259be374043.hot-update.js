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
          children: [info.bonuses.find(function (item) {
            item.exclusive && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "casino__exclusive",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
                  children: "Exclusive bonus"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 27,
                  columnNumber: 12
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("use", {
                  xlinkHref: "/icons.svg#exclusive"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 28,
                  columnNumber: 12
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 26,
                columnNumber: 11
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 10
            }, _this);
          }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "http://localhost:1337".concat(info.Overlay.url),
            alt: "logo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
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
            lineNumber: 43,
            columnNumber: 8
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: info.website
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 8
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
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
                  lineNumber: 53,
                  columnNumber: 11
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 10
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 9
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "casino__info-small",
              children: ["up to ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                children: ["\u20AC", bonus.amount]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 16
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 9
            }, _this)]
          }, bonus.id, true, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 8
          }, _this);
        }), !post && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [" ", !review ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_BonusTerms__WEBPACK_IMPORTED_MODULE_3__["default"], {
            info: info
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 10
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Rating__WEBPACK_IMPORTED_MODULE_4__["default"], {
            rating: info.ratingTotal,
            number: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
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
          lineNumber: 75,
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
                lineNumber: 81,
                columnNumber: 20
              }, this), " "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 10
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 9
          }, this)
        }, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: info.affiliateLink,
          className: "casino__info-btn ",
          children: ["Get your ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
            children: "bonus now"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 17
          }, this), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 7
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 74,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXNpbm9XcmFwcGVyL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJDYXNpbm9XcmFwcGVyIiwiaW5mbyIsInJldmlldyIsInBvc3QiLCJtYWluIiwiY29uc29sZSIsImxvZyIsImNsc3giLCJhZmZpbGlhdGVMaW5rIiwiYm9udXNlcyIsImZpbmQiLCJpdGVtIiwiZXhjbHVzaXZlIiwiT3ZlcmxheSIsInVybCIsInRpdGxlIiwid2Vic2l0ZSIsIm1hcCIsImJvbnVzIiwicGVyY2VudGFnZSIsImFtb3VudCIsImlkIiwicmF0aW5nVG90YWwiLCJzbHVnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLGFBQVQsT0FBMEU7QUFBQTs7QUFBQSx1QkFBakRDLElBQWlEO0FBQUEsTUFBakRBLElBQWlELDBCQUExQyxFQUEwQztBQUFBLE1BQXRDQyxNQUFzQyxRQUF0Q0EsTUFBc0M7QUFBQSx1QkFBOUJDLElBQThCO0FBQUEsTUFBOUJBLElBQThCLDBCQUF2QixLQUF1QjtBQUFBLHVCQUFoQkMsSUFBZ0I7QUFBQSxNQUFoQkEsSUFBZ0IsMEJBQVQsS0FBUztBQUN6RUMsU0FBTyxDQUFDQyxHQUFSLENBQVlMLElBQVo7QUFDQSxzQkFDQztBQUFBLGNBQ0VBLElBQUksaUJBQ0o7QUFDQyxlQUFTLEVBQUVNLG9EQUFJLENBQ2QsaUJBRGMsRUFFZEwsTUFBTSxJQUFJLFFBRkksRUFHZEUsSUFBSSxJQUFJLE1BSE0sQ0FEaEI7QUFBQSw4QkFPQztBQUFLLGlCQUFTLEVBQUMsWUFBZjtBQUFBLGdDQUNDO0FBQUcsY0FBSSxFQUFFSCxJQUFJLENBQUNPLGFBQWQ7QUFBNkIsbUJBQVMsRUFBQyw0QkFBdkM7QUFBQSxxQkFDRVAsSUFBSSxDQUFDUSxPQUFMLENBQWFDLElBQWIsQ0FBa0IsVUFBQ0MsSUFBRCxFQUFVO0FBQzVC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QUE7QUFBQTtBQUFBO0FBQUEsY0E1REQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkYsbUJBREQ7QUFtRkE7O0tBckZRUixhO0FBdUZNQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYXNpbm9zL1twaWRdLjE4NTM3Zjk2ZDI1OWJlMzc0MDQzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBcIi4vY2FzaW5vLnNjc3NcIjtcclxuaW1wb3J0IEJvbnVzVGVybXMgZnJvbSBcIi4vQm9udXNUZXJtc1wiO1xyXG5pbXBvcnQgUmF0aW5nIGZyb20gXCIuL1JhdGluZ1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XHJcbmltcG9ydCBJbmZvQnRuIGZyb20gXCIuLi9CdXR0b25zL0luZm9CdG5cIjtcclxuXHJcbmZ1bmN0aW9uIENhc2lub1dyYXBwZXIoeyBpbmZvID0ge30sIHJldmlldywgcG9zdCA9IGZhbHNlLCBtYWluID0gZmFsc2UgfSkge1xyXG5cdGNvbnNvbGUubG9nKGluZm8pO1xyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHR7aW5mbyAmJiAoXHJcblx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbHN4KFxyXG5cdFx0XHRcdFx0XHRcImNhc2lub19fd3JhcHBlclwiLFxyXG5cdFx0XHRcdFx0XHRyZXZpZXcgJiYgXCJyZXZpZXdcIixcclxuXHRcdFx0XHRcdFx0bWFpbiAmJiBcIm1haW5cIlxyXG5cdFx0XHRcdFx0KX1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhc2lub190b3BcIj5cclxuXHRcdFx0XHRcdFx0PGEgaHJlZj17aW5mby5hZmZpbGlhdGVMaW5rfSBjbGFzc05hbWU9XCJjYXNpbm9fX2ltZyBjYXNpbm9fX2l0ZW0gIFwiPlxyXG5cdFx0XHRcdFx0XHRcdHtpbmZvLmJvbnVzZXMuZmluZCgoaXRlbSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0aXRlbS5leGNsdXNpdmUgJiYgKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhc2lub19fZXhjbHVzaXZlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHN2Zz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0aXRsZT5FeGNsdXNpdmUgYm9udXM8L3RpdGxlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHVzZSB4bGlua0hyZWY9XCIvaWNvbnMuc3ZnI2V4Y2x1c2l2ZVwiPjwvdXNlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3ZnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0fSl9XHJcblxyXG5cdFx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRcdHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MTMzNyR7aW5mby5PdmVybGF5LnVybH1gfVxyXG5cdFx0XHRcdFx0XHRcdFx0YWx0PVwibG9nb1wiXHJcblx0XHRcdFx0XHRcdFx0PjwvaW1nPlxyXG5cdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdDxhXHJcblx0XHRcdFx0XHRcdFx0aHJlZj17aW5mby5hZmZpbGlhdGVMaW5rfVxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNhc2lub19fbmFtZSBjYXNpbm9fX2l0ZW0gIFwiXHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj57aW5mby50aXRsZX08L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4+e2luZm8ud2Vic2l0ZX08L3NwYW4+XHJcblx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0e2luZm8uYm9udXNlcy5tYXAoKGJvbnVzKSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY2FzaW5vX19pbmZvIGJpZ2dlciBjYXNpbm9fX2l0ZW0gIFwiXHJcblx0XHRcdFx0XHRcdFx0XHRrZXk9e2JvbnVzLmlkfVxyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdDxwPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3Ryb25nPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPntib251cy5wZXJjZW50YWdlfSU8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvc3Ryb25nPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiY2FzaW5vX19pbmZvLXNtYWxsXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHVwIHRvIDxzdHJvbmc+4oKse2JvbnVzLmFtb3VudH08L3N0cm9uZz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0KSl9XHJcblxyXG5cdFx0XHRcdFx0XHR7IXBvc3QgJiYgKFxyXG5cdFx0XHRcdFx0XHRcdDw+XHJcblx0XHRcdFx0XHRcdFx0XHR7XCIgXCJ9XHJcblx0XHRcdFx0XHRcdFx0XHR7IXJldmlldyA/IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0PEJvbnVzVGVybXMgaW5mbz17aW5mb30gLz5cclxuXHRcdFx0XHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxSYXRpbmcgcmF0aW5nPXtpbmZvLnJhdGluZ1RvdGFsfSBudW1iZXI9e3RydWV9IC8+XHJcblx0XHRcdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHRcdDwvPlxyXG5cdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXNpbm9fX2luZm8tYnRucyBjYXNpbm9fX2l0ZW0gXCI+XHJcblx0XHRcdFx0XHRcdDxJbmZvQnRuIHJldmlldz17cmV2aWV3fSBpbmZvPXtpbmZvfSAvPlxyXG5cdFx0XHRcdFx0XHR7cmV2aWV3ICYmIChcclxuXHRcdFx0XHRcdFx0XHQ8PlxyXG5cdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj17YGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9jYXNpbm9zLyR7aW5mby5zbHVnfWB9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJjYXNpbm9fX3Jldmlldy1saW5rXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e1wiIFwifVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFJlYWQgb3VyIDxzdHJvbmc+cmV2aWV3PC9zdHJvbmc+e1wiIFwifVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0PC8+XHJcblx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHRcdDxhIGhyZWY9e2luZm8uYWZmaWxpYXRlTGlua30gY2xhc3NOYW1lPVwiY2FzaW5vX19pbmZvLWJ0biBcIj5cclxuXHRcdFx0XHRcdFx0XHRHZXQgeW91ciA8c3Ryb25nPmJvbnVzIG5vdzwvc3Ryb25nPntcIiBcIn1cclxuXHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCl9XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXNpbm9XcmFwcGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9