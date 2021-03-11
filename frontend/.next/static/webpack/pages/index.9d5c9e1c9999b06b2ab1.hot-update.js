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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb2RhbC9pbmRleC5qc3giXSwibmFtZXMiOlsiVHJhbnNpdGlvbnNNb2RhbCIsImNoaWxkcmVuIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIm9wZW4iLCJzZXRPcGVuIiwiaGFuZGxlT3BlbiIsImhhbmRsZUNsb3NlIiwiQmFja2Ryb3AiLCJ0aW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxnQkFBVCxPQUF3QztBQUFBOztBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTs7QUFBQSx3QkFDOUJDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBRDhCO0FBQUE7QUFBQSxNQUMvQ0MsSUFEK0M7QUFBQSxNQUN6Q0MsT0FEeUM7O0FBR3RELE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDeEJELFdBQU8sQ0FBQyxJQUFELENBQVA7QUFDQSxHQUZEOztBQUlBLE1BQU1FLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDekJGLFdBQU8sQ0FBQyxLQUFELENBQVA7QUFDQSxHQUZEOztBQUlBLHNCQUNDO0FBQUEsNEJBQ0M7QUFBSyxhQUFPLEVBQUVDLFVBQWQ7QUFBQSxnQkFBMkJMO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxlQUdDLHFFQUFDLCtEQUFEO0FBQ0MseUJBQWdCLHdCQURqQjtBQUVDLDBCQUFpQiw4QkFGbEI7QUFHQyxtQkFBYSxFQUFDLGFBSGY7QUFJQyxVQUFJLEVBQUVHLElBSlA7QUFLQyxhQUFPLEVBQUVHLFdBTFY7QUFNQywwQkFBb0IsTUFOckI7QUFPQyx1QkFBaUIsRUFBRUMsa0VBUHBCO0FBUUMsbUJBQWEsRUFBRTtBQUNkQyxlQUFPLEVBQUU7QUFESyxPQVJoQjtBQUFBLDZCQVlDLHFFQUFDLDhEQUFEO0FBQU0sY0FBSUwsSUFBVjtBQUFBLCtCQUNDO0FBQUssbUJBQVMsRUFBQyxPQUFmO0FBQUEsaUNBQ0M7QUFBQSxvQ0FDQztBQUFJLHVCQUFTLEVBQUMsV0FBZDtBQUFBLHNDQUNDO0FBQU0seUJBQVMsRUFBQyxXQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREQsZUFJQztBQUFJLHVCQUFTLEVBQUMsV0FBZDtBQUFBLHNDQUNDO0FBQU0seUJBQVMsRUFBQyxXQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSkQsZUFPQztBQUFJLHVCQUFTLEVBQUMsV0FBZDtBQUFBLHNDQUNDO0FBQU0seUJBQVMsRUFBQyxXQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBUEQsZUFXQztBQUFJLHVCQUFTLEVBQUMsV0FBZDtBQUFBLHNDQUNDO0FBQU0seUJBQVMsRUFBQyxXQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBWEQsZUFlQztBQUFJLHVCQUFTLEVBQUMsV0FBZDtBQUFBLHNDQUNDO0FBQU0seUJBQVMsRUFBQyxXQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBZkQsZUFxQkM7QUFBSSx1QkFBUyxFQUFDLFdBQWQ7QUFBQSxzQ0FDQztBQUFNLHlCQUFTLEVBQUMsV0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQXJCRCxlQTJCQztBQUFJLHVCQUFTLEVBQUMsV0FBZDtBQUFBLHNDQUNDO0FBQU0seUJBQVMsRUFBQyxXQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBM0JEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhEO0FBQUEsa0JBREQ7QUF5REE7O0dBcEV1QkosZ0I7O0tBQUFBLGdCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjlkNWM5ZTFjOTk5OWIwNmIyYWIxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Nb2RhbFwiO1xyXG5pbXBvcnQgQmFja2Ryb3AgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0JhY2tkcm9wXCI7XHJcbmltcG9ydCBGYWRlIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9GYWRlXCI7XHJcbmltcG9ydCBcIi4vTW9kYWwuc2Nzc1wiO1xyXG5pbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVHJhbnNpdGlvbnNNb2RhbCh7IGNoaWxkcmVuIH0pIHtcclxuXHRjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG5cdGNvbnN0IGhhbmRsZU9wZW4gPSAoKSA9PiB7XHJcblx0XHRzZXRPcGVuKHRydWUpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG5cdFx0c2V0T3BlbihmYWxzZSk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxkaXYgb25DbGljaz17aGFuZGxlT3Blbn0+e2NoaWxkcmVufTwvZGl2PlxyXG5cclxuXHRcdFx0PE1vZGFsXHJcblx0XHRcdFx0YXJpYS1sYWJlbGxlZGJ5PVwidHJhbnNpdGlvbi1tb2RhbC10aXRsZVwiXHJcblx0XHRcdFx0YXJpYS1kZXNjcmliZWRieT1cInRyYW5zaXRpb24tbW9kYWwtZGVzY3JpcHRpb25cIlxyXG5cdFx0XHRcdGNsYXNzTmFtZU5hbWU9XCJwb3B1cF9tb2RhbFwiXHJcblx0XHRcdFx0b3Blbj17b3Blbn1cclxuXHRcdFx0XHRvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuXHRcdFx0XHRjbG9zZUFmdGVyVHJhbnNpdGlvblxyXG5cdFx0XHRcdEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cclxuXHRcdFx0XHRCYWNrZHJvcFByb3BzPXt7XHJcblx0XHRcdFx0XHR0aW1lb3V0OiA1MDAsXHJcblx0XHRcdFx0fX1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxGYWRlIGluPXtvcGVufT5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9wdXBcIj5cclxuXHRcdFx0XHRcdFx0PHVsPlxyXG5cdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJ0ZXh0LWJhc2VcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPldhZ2VyJm5ic3A7Ojwvc3Bhbj4mbmJzcDtObyB3YWdlclxyXG5cdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cInRleHQtYmFzZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+TWluLiBkZXBvc2l0Jm5ic3A7Ojwvc3Bhbj4mbmJzcDvigqwxMFxyXG5cdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cInRleHQtYmFzZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+TWF4LiBiZXQmbmJzcDs6PC9zcGFuPiZuYnNwO05vIG1heC5cclxuXHRcdFx0XHRcdFx0XHRcdGJldFxyXG5cdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cInRleHQtYmFzZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+VlBOJm5ic3A7YWxsb3dlZCZuYnNwOzo8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQmbmJzcDtOb1xyXG5cdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cInRleHQtYmFzZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdEJvbnVzIGh1bnQgUkFXJm5ic3A7YWxsb3dlZCZuYnNwOzpcclxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdCZuYnNwO1llc1xyXG5cdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cInRleHQtYmFzZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdEJvbnVzIGh1bnQmbmJzcDt1bmRlciZuYnNwO2JvbnVzJm5ic3A7YWxsb3dlZCZuYnNwOzpcclxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdCZuYnNwO1llc1xyXG5cdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cInRleHQtYmFzZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdENyeXB0b2N1cnJlbmNpZXMgYWxsb3dlZCZuYnNwOzpcclxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdCZuYnNwO1llc1xyXG5cdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L0ZhZGU+XHJcblx0XHRcdDwvTW9kYWw+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=