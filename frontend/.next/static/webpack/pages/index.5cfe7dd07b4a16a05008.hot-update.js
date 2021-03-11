webpackHotUpdate_N_E("pages/index",{

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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
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
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "text-base",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "font-bold",
                children: "Wager\xA0:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 9
              }, this), "\xA0No wager"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 8
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "text-base",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "font-bold",
                children: "Min. deposit\xA0:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 9
              }, this), "\xA0\u20AC10"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 8
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "text-base",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "font-bold",
                children: "Max. bet\xA0:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 9
              }, this), "\xA0No max. bet"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 8
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "text-base",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "font-bold",
                children: "VPN\xA0allowed\xA0:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 9
              }, this), "\xA0No"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 8
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "text-base",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "font-bold",
                children: "Bonus hunt RAW\xA0allowed\xA0:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 9
              }, this), "\xA0Yes"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 8
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "text-base",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "font-bold",
                children: "Bonus hunt\xA0under\xA0bonus\xA0allowed\xA0:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 9
              }, this), "\xA0Yes"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 8
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "text-base",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "font-bold",
                children: "Cryptocurrencies allowed\xA0:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 9
              }, this), "\xA0Yes"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb2RhbC9pbmRleC5qc3giXSwibmFtZXMiOlsiVHJhbnNpdGlvbnNNb2RhbCIsImNoaWxkcmVuIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIm9wZW4iLCJzZXRPcGVuIiwiaGFuZGxlT3BlbiIsImhhbmRsZUNsb3NlIiwiQmFja2Ryb3AiLCJ0aW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxnQkFBVCxPQUF3QztBQUFBOztBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTs7QUFBQSx3QkFDOUJDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBRDhCO0FBQUE7QUFBQSxNQUMvQ0MsSUFEK0M7QUFBQSxNQUN6Q0MsT0FEeUM7O0FBR3RELE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDeEJELFdBQU8sQ0FBQyxJQUFELENBQVA7QUFDQSxHQUZEOztBQUlBLE1BQU1FLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDekJGLFdBQU8sQ0FBQyxLQUFELENBQVA7QUFDQSxHQUZEOztBQUlBLHNCQUNDO0FBQUEsNEJBQ0M7QUFBTSxhQUFPLEVBQUVDLFVBQWY7QUFBQSxnQkFBNEJMO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxlQUdDLHFFQUFDLCtEQUFEO0FBQ0MseUJBQWdCLHdCQURqQjtBQUVDLDBCQUFpQiw4QkFGbEI7QUFHQyxtQkFBYSxFQUFDLGFBSGY7QUFJQyxVQUFJLEVBQUVHLElBSlA7QUFLQyxhQUFPLEVBQUVHLFdBTFY7QUFNQywwQkFBb0IsTUFOckI7QUFPQyx1QkFBaUIsRUFBRUMsa0VBUHBCO0FBUUMsbUJBQWEsRUFBRTtBQUNkQyxlQUFPLEVBQUU7QUFESyxPQVJoQjtBQUFBLDZCQVlDLHFFQUFDLDhEQUFEO0FBQU0sY0FBSUwsSUFBVjtBQUFBLCtCQUNDO0FBQUssbUJBQVMsRUFBQyxPQUFmO0FBQUEsaUNBQ0M7QUFBQSxvQ0FDQztBQUFJLHVCQUFTLEVBQUMsV0FBZDtBQUFBLHNDQUNDO0FBQU0seUJBQVMsRUFBQyxXQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREQsZUFJQztBQUFJLHVCQUFTLEVBQUMsV0FBZDtBQUFBLHNDQUNDO0FBQU0seUJBQVMsRUFBQyxXQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSkQsZUFPQztBQUFJLHVCQUFTLEVBQUMsV0FBZDtBQUFBLHNDQUNDO0FBQU0seUJBQVMsRUFBQyxXQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBUEQsZUFXQztBQUFJLHVCQUFTLEVBQUMsV0FBZDtBQUFBLHNDQUNDO0FBQU0seUJBQVMsRUFBQyxXQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBWEQsZUFlQztBQUFJLHVCQUFTLEVBQUMsV0FBZDtBQUFBLHNDQUNDO0FBQU0seUJBQVMsRUFBQyxXQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBZkQsZUFxQkM7QUFBSSx1QkFBUyxFQUFDLFdBQWQ7QUFBQSxzQ0FDQztBQUFNLHlCQUFTLEVBQUMsV0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQXJCRCxlQTJCQztBQUFJLHVCQUFTLEVBQUMsV0FBZDtBQUFBLHNDQUNDO0FBQU0seUJBQVMsRUFBQyxXQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBM0JEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhEO0FBQUEsa0JBREQ7QUF5REE7O0dBcEV1QkosZ0I7O0tBQUFBLGdCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjVjZmU3ZGQwN2I0YTE2YTA1MDA4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Nb2RhbFwiO1xyXG5pbXBvcnQgQmFja2Ryb3AgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0JhY2tkcm9wXCI7XHJcbmltcG9ydCBGYWRlIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9GYWRlXCI7XHJcbmltcG9ydCBcIi4vTW9kYWwuc2Nzc1wiO1xyXG5pbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVHJhbnNpdGlvbnNNb2RhbCh7IGNoaWxkcmVuIH0pIHtcclxuXHRjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG5cdGNvbnN0IGhhbmRsZU9wZW4gPSAoKSA9PiB7XHJcblx0XHRzZXRPcGVuKHRydWUpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG5cdFx0c2V0T3BlbihmYWxzZSk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxzcGFuIG9uQ2xpY2s9e2hhbmRsZU9wZW59PntjaGlsZHJlbn08L3NwYW4+XHJcblxyXG5cdFx0XHQ8TW9kYWxcclxuXHRcdFx0XHRhcmlhLWxhYmVsbGVkYnk9XCJ0cmFuc2l0aW9uLW1vZGFsLXRpdGxlXCJcclxuXHRcdFx0XHRhcmlhLWRlc2NyaWJlZGJ5PVwidHJhbnNpdGlvbi1tb2RhbC1kZXNjcmlwdGlvblwiXHJcblx0XHRcdFx0Y2xhc3NOYW1lTmFtZT1cInBvcHVwX21vZGFsXCJcclxuXHRcdFx0XHRvcGVuPXtvcGVufVxyXG5cdFx0XHRcdG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG5cdFx0XHRcdGNsb3NlQWZ0ZXJUcmFuc2l0aW9uXHJcblx0XHRcdFx0QmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG5cdFx0XHRcdEJhY2tkcm9wUHJvcHM9e3tcclxuXHRcdFx0XHRcdHRpbWVvdXQ6IDUwMCxcclxuXHRcdFx0XHR9fVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PEZhZGUgaW49e29wZW59PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3B1cFwiPlxyXG5cdFx0XHRcdFx0XHQ8dWw+XHJcblx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cInRleHQtYmFzZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+V2FnZXImbmJzcDs6PC9zcGFuPiZuYnNwO05vIHdhZ2VyXHJcblx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwidGV4dC1iYXNlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5NaW4uIGRlcG9zaXQmbmJzcDs6PC9zcGFuPiZuYnNwO+KCrDEwXHJcblx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwidGV4dC1iYXNlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5NYXguIGJldCZuYnNwOzo8L3NwYW4+Jm5ic3A7Tm8gbWF4LlxyXG5cdFx0XHRcdFx0XHRcdFx0YmV0XHJcblx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwidGV4dC1iYXNlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5WUE4mbmJzcDthbGxvd2VkJm5ic3A7Ojwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdCZuYnNwO05vXHJcblx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwidGV4dC1iYXNlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0Qm9udXMgaHVudCBSQVcmbmJzcDthbGxvd2VkJm5ic3A7OlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0Jm5ic3A7WWVzXHJcblx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwidGV4dC1iYXNlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0Qm9udXMgaHVudCZuYnNwO3VuZGVyJm5ic3A7Ym9udXMmbmJzcDthbGxvd2VkJm5ic3A7OlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0Jm5ic3A7WWVzXHJcblx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwidGV4dC1iYXNlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0Q3J5cHRvY3VycmVuY2llcyBhbGxvd2VkJm5ic3A7OlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0Jm5ic3A7WWVzXHJcblx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvRmFkZT5cclxuXHRcdFx0PC9Nb2RhbD5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==