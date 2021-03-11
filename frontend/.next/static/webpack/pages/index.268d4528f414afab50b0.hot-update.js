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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    onClick: handleOpen,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_3__["default"], {
      "aria-labelledby": "transition-modal-title",
      "aria-describedby": "transition-modal-description",
      className: "popup_modal",
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
          children: children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 3
  }, this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb2RhbC9pbmRleC5qc3giXSwibmFtZXMiOlsiVHJhbnNpdGlvbnNNb2RhbCIsImNoaWxkcmVuIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIm9wZW4iLCJzZXRPcGVuIiwiaGFuZGxlT3BlbiIsImhhbmRsZUNsb3NlIiwiQmFja2Ryb3AiLCJ0aW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLGdCQUFULE9BQXdDO0FBQUE7O0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZOztBQUFBLHdCQUM5QkMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FEOEI7QUFBQTtBQUFBLE1BQy9DQyxJQUQrQztBQUFBLE1BQ3pDQyxPQUR5Qzs7QUFHdEQsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN4QkQsV0FBTyxDQUFDLElBQUQsQ0FBUDtBQUNBLEdBRkQ7O0FBSUEsTUFBTUUsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN6QkYsV0FBTyxDQUFDLEtBQUQsQ0FBUDtBQUNBLEdBRkQ7O0FBSUEsc0JBQ0M7QUFBSyxXQUFPLEVBQUVDLFVBQWQ7QUFBQSwyQkFDQyxxRUFBQywrREFBRDtBQUNDLHlCQUFnQix3QkFEakI7QUFFQywwQkFBaUIsOEJBRmxCO0FBR0MsZUFBUyxFQUFDLGFBSFg7QUFJQyxVQUFJLEVBQUVGLElBSlA7QUFLQyxhQUFPLEVBQUVHLFdBTFY7QUFNQywwQkFBb0IsTUFOckI7QUFPQyx1QkFBaUIsRUFBRUMsa0VBUHBCO0FBUUMsbUJBQWEsRUFBRTtBQUNkQyxlQUFPLEVBQUU7QUFESyxPQVJoQjtBQUFBLDZCQVlDLHFFQUFDLDhEQUFEO0FBQU0sY0FBSUwsSUFBVjtBQUFBLCtCQUNDO0FBQUssbUJBQVMsRUFBQyxPQUFmO0FBQUEsb0JBQXdCSDtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFvQkE7O0dBL0J1QkQsZ0I7O0tBQUFBLGdCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjI2OGQ0NTI4ZjQxNGFmYWI1MGIwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBNb2RhbCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTW9kYWxcIjtcclxuaW1wb3J0IEJhY2tkcm9wIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CYWNrZHJvcFwiO1xyXG5pbXBvcnQgRmFkZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRmFkZVwiO1xyXG5pbXBvcnQgXCIuL01vZGFsLnNjc3NcIjtcclxuaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRyYW5zaXRpb25zTW9kYWwoeyBjaGlsZHJlbiB9KSB7XHJcblx0Y29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuXHRjb25zdCBoYW5kbGVPcGVuID0gKCkgPT4ge1xyXG5cdFx0c2V0T3Blbih0cnVlKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuXHRcdHNldE9wZW4oZmFsc2UpO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IG9uQ2xpY2s9e2hhbmRsZU9wZW59PlxyXG5cdFx0XHQ8TW9kYWxcclxuXHRcdFx0XHRhcmlhLWxhYmVsbGVkYnk9XCJ0cmFuc2l0aW9uLW1vZGFsLXRpdGxlXCJcclxuXHRcdFx0XHRhcmlhLWRlc2NyaWJlZGJ5PVwidHJhbnNpdGlvbi1tb2RhbC1kZXNjcmlwdGlvblwiXHJcblx0XHRcdFx0Y2xhc3NOYW1lPVwicG9wdXBfbW9kYWxcIlxyXG5cdFx0XHRcdG9wZW49e29wZW59XHJcblx0XHRcdFx0b25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcblx0XHRcdFx0Y2xvc2VBZnRlclRyYW5zaXRpb25cclxuXHRcdFx0XHRCYWNrZHJvcENvbXBvbmVudD17QmFja2Ryb3B9XHJcblx0XHRcdFx0QmFja2Ryb3BQcm9wcz17e1xyXG5cdFx0XHRcdFx0dGltZW91dDogNTAwLFxyXG5cdFx0XHRcdH19XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8RmFkZSBpbj17b3Blbn0+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvcHVwXCI+e2NoaWxkcmVufTwvZGl2PlxyXG5cdFx0XHRcdDwvRmFkZT5cclxuXHRcdFx0PC9Nb2RhbD5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==