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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXNpbm9XcmFwcGVyL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJDYXNpbm9XcmFwcGVyIiwiaW5mbyIsInJldmlldyIsInBvc3QiLCJtYWluIiwiY2xzeCIsImFmZmlsaWF0ZUxpbmsiLCJib251c2VzIiwiZXhsdXNpdmUiLCJPdmVybGF5IiwidXJsIiwidGl0bGUiLCJ3ZWJzaXRlIiwibWFwIiwiYm9udXMiLCJwZXJjZW50YWdlIiwiYW1vdW50IiwiaWQiLCJyYXRpbmdUb3RhbCIsInNsdWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsYUFBVCxPQUEwRTtBQUFBOztBQUFBLHVCQUFqREMsSUFBaUQ7QUFBQSxNQUFqREEsSUFBaUQsMEJBQTFDLEVBQTBDO0FBQUEsTUFBdENDLE1BQXNDLFFBQXRDQSxNQUFzQztBQUFBLHVCQUE5QkMsSUFBOEI7QUFBQSxNQUE5QkEsSUFBOEIsMEJBQXZCLEtBQXVCO0FBQUEsdUJBQWhCQyxJQUFnQjtBQUFBLE1BQWhCQSxJQUFnQiwwQkFBVCxLQUFTO0FBQ3pFLHNCQUNDO0FBQUEsY0FDRUgsSUFBSSxpQkFDSjtBQUNDLGVBQVMsRUFBRUksb0RBQUksQ0FDZCxpQkFEYyxFQUVkSCxNQUFNLElBQUksUUFGSSxFQUdkRSxJQUFJLElBQUksTUFITSxDQURoQjtBQUFBLDhCQU9DO0FBQUssaUJBQVMsRUFBQyxZQUFmO0FBQUEsZ0NBQ0M7QUFBRyxjQUFJLEVBQUVILElBQUksQ0FBQ0ssYUFBZDtBQUE2QixtQkFBUyxFQUFDLDRCQUF2QztBQUFBLHFCQUNFTCxJQUFJLENBQUNNLE9BQUwsQ0FBYSxDQUFiLEVBQWdCQyxRQUFoQixJQUNDUCxJQUFJLENBQUNNLE9BQUwsQ0FBYSxDQUFiLEtBQW1CTixJQUFJLENBQUNNLE9BQUwsQ0FBYSxDQUFiLEVBQWdCQyxRQUFuQyxp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QUE7QUFBQTtBQUFBO0FBRkYsbUJBREQ7QUFrRkE7O0tBbkZRTixhO0FBcUZNQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42Njk5YjVjOGFlMjE5NGMxZjc5OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgXCIuL2Nhc2luby5zY3NzXCI7XHJcbmltcG9ydCBCb251c1Rlcm1zIGZyb20gXCIuL0JvbnVzVGVybXNcIjtcclxuaW1wb3J0IFJhdGluZyBmcm9tIFwiLi9SYXRpbmdcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xyXG5pbXBvcnQgSW5mb0J0biBmcm9tIFwiLi4vQnV0dG9ucy9JbmZvQnRuXCI7XHJcblxyXG5mdW5jdGlvbiBDYXNpbm9XcmFwcGVyKHsgaW5mbyA9IHt9LCByZXZpZXcsIHBvc3QgPSBmYWxzZSwgbWFpbiA9IGZhbHNlIH0pIHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0e2luZm8gJiYgKFxyXG5cdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xzeChcclxuXHRcdFx0XHRcdFx0XCJjYXNpbm9fX3dyYXBwZXJcIixcclxuXHRcdFx0XHRcdFx0cmV2aWV3ICYmIFwicmV2aWV3XCIsXHJcblx0XHRcdFx0XHRcdG1haW4gJiYgXCJtYWluXCJcclxuXHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXNpbm9fdG9wXCI+XHJcblx0XHRcdFx0XHRcdDxhIGhyZWY9e2luZm8uYWZmaWxpYXRlTGlua30gY2xhc3NOYW1lPVwiY2FzaW5vX19pbWcgY2FzaW5vX19pdGVtICBcIj5cclxuXHRcdFx0XHRcdFx0XHR7aW5mby5ib251c2VzWzBdLmV4bHVzaXZlIHx8XHJcblx0XHRcdFx0XHRcdFx0XHQoaW5mby5ib251c2VzWzFdICYmIGluZm8uYm9udXNlc1sxXS5leGx1c2l2ZSAmJiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FzaW5vX19leGNsdXNpdmVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3ZnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRpdGxlPkV4Y2x1c2l2ZSBib251czwvdGl0bGU+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dXNlIHhsaW5rSHJlZj1cIi9pY29ucy5zdmcjZXhjbHVzaXZlXCI+PC91c2U+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zdmc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0KSl9XHJcblxyXG5cdFx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRcdHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MTMzNyR7aW5mby5PdmVybGF5LnVybH1gfVxyXG5cdFx0XHRcdFx0XHRcdFx0YWx0PVwibG9nb1wiXHJcblx0XHRcdFx0XHRcdFx0PjwvaW1nPlxyXG5cdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdDxhXHJcblx0XHRcdFx0XHRcdFx0aHJlZj17aW5mby5hZmZpbGlhdGVMaW5rfVxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNhc2lub19fbmFtZSBjYXNpbm9fX2l0ZW0gIFwiXHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj57aW5mby50aXRsZX08L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4+e2luZm8ud2Vic2l0ZX08L3NwYW4+XHJcblx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0e2luZm8uYm9udXNlcy5tYXAoKGJvbnVzKSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY2FzaW5vX19pbmZvIGJpZ2dlciBjYXNpbm9fX2l0ZW0gIFwiXHJcblx0XHRcdFx0XHRcdFx0XHRrZXk9e2JvbnVzLmlkfVxyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdDxwPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3Ryb25nPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPntib251cy5wZXJjZW50YWdlfSU8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvc3Ryb25nPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiY2FzaW5vX19pbmZvLXNtYWxsXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHVwIHRvIDxzdHJvbmc+4oKse2JvbnVzLmFtb3VudH08L3N0cm9uZz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0KSl9XHJcblxyXG5cdFx0XHRcdFx0XHR7IXBvc3QgJiYgKFxyXG5cdFx0XHRcdFx0XHRcdDw+XHJcblx0XHRcdFx0XHRcdFx0XHR7XCIgXCJ9XHJcblx0XHRcdFx0XHRcdFx0XHR7IXJldmlldyA/IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0PEJvbnVzVGVybXMgaW5mbz17aW5mb30gLz5cclxuXHRcdFx0XHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxSYXRpbmcgcmF0aW5nPXtpbmZvLnJhdGluZ1RvdGFsfSBudW1iZXI9e3RydWV9IC8+XHJcblx0XHRcdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHRcdDwvPlxyXG5cdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXNpbm9fX2luZm8tYnRucyBjYXNpbm9fX2l0ZW0gXCI+XHJcblx0XHRcdFx0XHRcdDxJbmZvQnRuIHJldmlldz17cmV2aWV3fSBpbmZvPXtpbmZvfSAvPlxyXG5cdFx0XHRcdFx0XHR7cmV2aWV3ICYmIChcclxuXHRcdFx0XHRcdFx0XHQ8PlxyXG5cdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj17YGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9jYXNpbm9zLyR7aW5mby5zbHVnfWB9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJjYXNpbm9fX3Jldmlldy1saW5rXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e1wiIFwifVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFJlYWQgb3VyIDxzdHJvbmc+cmV2aWV3PC9zdHJvbmc+e1wiIFwifVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0PC8+XHJcblx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHRcdDxhIGhyZWY9e2luZm8uYWZmaWxpYXRlTGlua30gY2xhc3NOYW1lPVwiY2FzaW5vX19pbmZvLWJ0biBcIj5cclxuXHRcdFx0XHRcdFx0XHRHZXQgeW91ciA8c3Ryb25nPmJvbnVzIG5vdzwvc3Ryb25nPntcIiBcIn1cclxuXHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCl9XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXNpbm9XcmFwcGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9