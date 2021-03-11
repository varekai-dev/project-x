webpackHotUpdate_N_E("pages/casinos",{

/***/ "./components/Modal/index.jsx":
/*!************************************!*\
  !*** ./components/Modal/index.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TransitionsModal; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Modal */ "./node_modules/@material-ui/core/esm/Modal/index.js");
/* harmony import */ var _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Backdrop */ "./node_modules/@material-ui/core/esm/Backdrop/index.js");
/* harmony import */ var _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Fade */ "./node_modules/@material-ui/core/esm/Fade/index.js");
/* harmony import */ var _Modal_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Modal.scss */ "./components/Modal/Modal.scss");
/* harmony import */ var _Modal_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Modal_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");




var _jsxFileName = "C:\\Users\\IT\\Documents\\GitHub\\project-x\\frontend\\components\\Modal\\index.jsx",
    _s = $RefreshSig$();







function TransitionsModal(_ref) {
  _s();

  var children = _ref.children;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var handleOpen = function handleOpen() {
    setOpen(true);
  };

  var handleClose = function handleClose() {
    setOpen(false);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "popup__btn",
      onClick: handleOpen,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_3__["default"], {
      "aria-labelledby": "transition-modal-title",
      "aria-describedby": "transition-modal-description",
      classNameName: "popup_modal",
      open: open,
      onClose: handleClose,
      closeAfterTransition: true,
      BackdropComponent: _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_4__["default"],
      BackdropProps: {
        timeout: 500
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_5__["default"], {
        "in": open,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "popup",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "popup__top",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "popup__title",
              children: "Bonus infos"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 8
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "popup__img",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "https://images.prismic.io/lucky7bonus%2F543f07f2-161e-412a-8fe8-6dff4f41f52d_bitcasino_banner.png",
                alt: "Bitcasino banner",
                "class": "w-full"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 9
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "popup__text",
            children: "Using the code LUCKY7, receive a free safety deposit box upon registration that can earn you up to $50. The player will have to make a first deposit before being able to collect his winnings. Gamdom now offers you the opportunity to bet on your favorite sports and athletic competitions."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "text-base",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "font-bold",
                children: "Wager\xA0:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 9
              }, this), "\xA0No wager"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 8
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "text-base",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "font-bold",
                children: "Min. deposit\xA0:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 9
              }, this), "\xA0\u20AC10"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 8
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "text-base",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "font-bold",
                children: "Max. bet\xA0:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 9
              }, this), "\xA0No max. bet"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 8
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "text-base",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "font-bold",
                children: "VPN\xA0allowed\xA0:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 9
              }, this), "\xA0No"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 8
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "text-base",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "font-bold",
                children: "Bonus hunt RAW\xA0allowed\xA0:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 9
              }, this), "\xA0Yes"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 8
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "text-base",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "font-bold",
                children: "Bonus hunt\xA0under\xA0bonus\xA0allowed\xA0:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 9
              }, this), "\xA0Yes"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 8
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "text-base",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "font-bold",
                children: "Cryptocurrencies allowed\xA0:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 9
              }, this), "\xA0Yes"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "popup__btns",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "popup__btn popup__review",
              children: ["Read ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                children: "our review "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 14
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 8
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "popup__btn popup__bonus",
              children: ["Get your ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                children: "bonus now"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 18
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 8
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "popup__btn popup__close",
              children: "Close"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 4
    }, this)]
  }, void 0, true);
}

_s(TransitionsModal, "xG1TONbKtDWtdOTrXaTAsNhPg/Q=");

_c = TransitionsModal;

var _c;

$RefreshReg$(_c, "TransitionsModal");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb2RhbC9pbmRleC5qc3giXSwibmFtZXMiOlsiVHJhbnNpdGlvbnNNb2RhbCIsImNoaWxkcmVuIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIm9wZW4iLCJzZXRPcGVuIiwiaGFuZGxlT3BlbiIsImhhbmRsZUNsb3NlIiwiQmFja2Ryb3AiLCJ0aW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxnQkFBVCxPQUF3QztBQUFBOztBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTs7QUFBQSx3QkFDOUJDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBRDhCO0FBQUE7QUFBQSxNQUMvQ0MsSUFEK0M7QUFBQSxNQUN6Q0MsT0FEeUM7O0FBR3RELE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDeEJELFdBQU8sQ0FBQyxJQUFELENBQVA7QUFDQSxHQUZEOztBQUlBLE1BQU1FLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDekJGLFdBQU8sQ0FBQyxLQUFELENBQVA7QUFDQSxHQUZEOztBQUlBLHNCQUNDO0FBQUEsNEJBQ0M7QUFBSyxlQUFTLEVBQUMsWUFBZjtBQUE0QixhQUFPLEVBQUVDLFVBQXJDO0FBQUEsZ0JBQ0VMO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELGVBS0MscUVBQUMsK0RBQUQ7QUFDQyx5QkFBZ0Isd0JBRGpCO0FBRUMsMEJBQWlCLDhCQUZsQjtBQUdDLG1CQUFhLEVBQUMsYUFIZjtBQUlDLFVBQUksRUFBRUcsSUFKUDtBQUtDLGFBQU8sRUFBRUcsV0FMVjtBQU1DLDBCQUFvQixNQU5yQjtBQU9DLHVCQUFpQixFQUFFQyxrRUFQcEI7QUFRQyxtQkFBYSxFQUFFO0FBQ2RDLGVBQU8sRUFBRTtBQURLLE9BUmhCO0FBQUEsNkJBWUMscUVBQUMsOERBQUQ7QUFB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Z2VzL2Nhc2lub3MuYmEyZjU3MjYyYzdmYzllODYwZTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL01vZGFsXCI7XHJcbmltcG9ydCBCYWNrZHJvcCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQmFja2Ryb3BcIjtcclxuaW1wb3J0IEZhZGUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0ZhZGVcIjtcclxuaW1wb3J0IFwiLi9Nb2RhbC5zY3NzXCI7XHJcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUcmFuc2l0aW9uc01vZGFsKHsgY2hpbGRyZW4gfSkge1xyXG5cdGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblx0Y29uc3QgaGFuZGxlT3BlbiA9ICgpID0+IHtcclxuXHRcdHNldE9wZW4odHJ1ZSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcblx0XHRzZXRPcGVuKGZhbHNlKTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3B1cF9fYnRuXCIgb25DbGljaz17aGFuZGxlT3Blbn0+XHJcblx0XHRcdFx0e2NoaWxkcmVufVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDxNb2RhbFxyXG5cdFx0XHRcdGFyaWEtbGFiZWxsZWRieT1cInRyYW5zaXRpb24tbW9kYWwtdGl0bGVcIlxyXG5cdFx0XHRcdGFyaWEtZGVzY3JpYmVkYnk9XCJ0cmFuc2l0aW9uLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuXHRcdFx0XHRjbGFzc05hbWVOYW1lPVwicG9wdXBfbW9kYWxcIlxyXG5cdFx0XHRcdG9wZW49e29wZW59XHJcblx0XHRcdFx0b25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcblx0XHRcdFx0Y2xvc2VBZnRlclRyYW5zaXRpb25cclxuXHRcdFx0XHRCYWNrZHJvcENvbXBvbmVudD17QmFja2Ryb3B9XHJcblx0XHRcdFx0QmFja2Ryb3BQcm9wcz17e1xyXG5cdFx0XHRcdFx0dGltZW91dDogNTAwLFxyXG5cdFx0XHRcdH19XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8RmFkZSBpbj17b3Blbn0+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvcHVwXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9wdXBfX3RvcFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInBvcHVwX190aXRsZVwiPkJvbnVzIGluZm9zPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9wdXBfX2ltZ1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzcmM9XCJodHRwczovL2ltYWdlcy5wcmlzbWljLmlvL2x1Y2t5N2JvbnVzJTJGNTQzZjA3ZjItMTYxZS00MTJhLThmZTgtNmRmZjRmNDFmNTJkX2JpdGNhc2lub19iYW5uZXIucG5nXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0YWx0PVwiQml0Y2FzaW5vIGJhbm5lclwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzPVwidy1mdWxsXCJcclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvcHVwX190ZXh0XCI+XHJcblx0XHRcdFx0XHRcdFx0VXNpbmcgdGhlIGNvZGUgTFVDS1k3LCByZWNlaXZlIGEgZnJlZSBzYWZldHkgZGVwb3NpdCBib3ggdXBvblxyXG5cdFx0XHRcdFx0XHRcdHJlZ2lzdHJhdGlvbiB0aGF0IGNhbiBlYXJuIHlvdSB1cCB0byAkNTAuIFRoZSBwbGF5ZXIgd2lsbCBoYXZlIHRvXHJcblx0XHRcdFx0XHRcdFx0bWFrZSBhIGZpcnN0IGRlcG9zaXQgYmVmb3JlIGJlaW5nIGFibGUgdG8gY29sbGVjdCBoaXMgd2lubmluZ3MuXHJcblx0XHRcdFx0XHRcdFx0R2FtZG9tIG5vdyBvZmZlcnMgeW91IHRoZSBvcHBvcnR1bml0eSB0byBiZXQgb24geW91ciBmYXZvcml0ZVxyXG5cdFx0XHRcdFx0XHRcdHNwb3J0cyBhbmQgYXRobGV0aWMgY29tcGV0aXRpb25zLlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PHVsPlxyXG5cdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJ0ZXh0LWJhc2VcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPldhZ2VyJm5ic3A7Ojwvc3Bhbj4mbmJzcDtObyB3YWdlclxyXG5cdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cInRleHQtYmFzZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+TWluLiBkZXBvc2l0Jm5ic3A7Ojwvc3Bhbj4mbmJzcDvigqwxMFxyXG5cdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cInRleHQtYmFzZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+TWF4LiBiZXQmbmJzcDs6PC9zcGFuPiZuYnNwO05vIG1heC5cclxuXHRcdFx0XHRcdFx0XHRcdGJldFxyXG5cdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cInRleHQtYmFzZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+VlBOJm5ic3A7YWxsb3dlZCZuYnNwOzo8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQmbmJzcDtOb1xyXG5cdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cInRleHQtYmFzZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdEJvbnVzIGh1bnQgUkFXJm5ic3A7YWxsb3dlZCZuYnNwOzpcclxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdCZuYnNwO1llc1xyXG5cdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cInRleHQtYmFzZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdEJvbnVzIGh1bnQmbmJzcDt1bmRlciZuYnNwO2JvbnVzJm5ic3A7YWxsb3dlZCZuYnNwOzpcclxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdCZuYnNwO1llc1xyXG5cdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cInRleHQtYmFzZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdENyeXB0b2N1cnJlbmNpZXMgYWxsb3dlZCZuYnNwOzpcclxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdCZuYnNwO1llc1xyXG5cdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9wdXBfX2J0bnNcIj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvcHVwX19idG4gcG9wdXBfX3Jldmlld1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0UmVhZCA8c3Ryb25nPm91ciByZXZpZXcgPC9zdHJvbmc+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3B1cF9fYnRuIHBvcHVwX19ib251c1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0R2V0IHlvdXIgPHN0cm9uZz5ib251cyBub3c8L3N0cm9uZz5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvcHVwX19idG4gcG9wdXBfX2Nsb3NlXCI+Q2xvc2U8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L0ZhZGU+XHJcblx0XHRcdDwvTW9kYWw+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=