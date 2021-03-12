webpackHotUpdate_N_E("pages/casinos/[pid]",{

/***/ "./components/BreadCrumps/index.jsx":
/*!******************************************!*\
  !*** ./components/BreadCrumps/index.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _breadcrumps_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./breadcrumps.scss */ "./components/BreadCrumps/breadcrumps.scss");
/* harmony import */ var _breadcrumps_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_breadcrumps_scss__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "C:\\Users\\IT\\Documents\\GitHub\\project-x\\frontend\\components\\BreadCrumps\\index.jsx",
    _s = $RefreshSig$();







function BreadCrumps(_ref) {
  _s();

  var name = _ref.name;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var address = router.pathname.split("/");
  var cutAddress = address.slice(1, address.lenght);
  console.log(cutAddress[0]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "post__breadcrumps",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: "post__breadcrump",
        children: ["Home", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__["BsChevronRight"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 4
    }, this), cutAddress.length > 1 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/".concat(cutAddress[0]),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: "post__breadcrump",
        children: [cutAddress[0], " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__["BsChevronRight"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 23
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 6
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: "post__breadcrump",
      children: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 3
  }, this);
}

_s(BreadCrumps, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

_c = BreadCrumps;
/* harmony default export */ __webpack_exports__["default"] = (BreadCrumps);

var _c;

$RefreshReg$(_c, "BreadCrumps");

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

/***/ }),

/***/ "./node_modules/react-icons/Bs/index.esm.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CcmVhZENydW1wcy9pbmRleC5qc3giXSwibmFtZXMiOlsiQnJlYWRDcnVtcHMiLCJuYW1lIiwicm91dGVyIiwidXNlUm91dGVyIiwiYWRkcmVzcyIsInBhdGhuYW1lIiwic3BsaXQiLCJjdXRBZGRyZXNzIiwic2xpY2UiLCJsZW5naHQiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFdBQVQsT0FBK0I7QUFBQTs7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7QUFDOUIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1DLE9BQU8sR0FBR0YsTUFBTSxDQUFDRyxRQUFQLENBQWdCQyxLQUFoQixDQUFzQixHQUF0QixDQUFoQjtBQUNBLE1BQU1DLFVBQVUsR0FBR0gsT0FBTyxDQUFDSSxLQUFSLENBQWMsQ0FBZCxFQUFpQkosT0FBTyxDQUFDSyxNQUF6QixDQUFuQjtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUosVUFBVSxDQUFDLENBQUQsQ0FBdEI7QUFFQSxzQkFDQztBQUFLLGFBQVMsRUFBQyxtQkFBZjtBQUFBLDRCQUNDLHFFQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFDLEdBQVg7QUFBQSw2QkFDQztBQUFHLGlCQUFTLEVBQUMsa0JBQWI7QUFBQSx3Q0FFQyxxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxFQU9FQSxVQUFVLENBQUNLLE1BQVgsR0FBb0IsQ0FBcEIsaUJBQ0EscUVBQUMsZ0RBQUQ7QUFBTSxVQUFJLGFBQU1MLFVBQVUsQ0FBQyxDQUFELENBQWhCLENBQVY7QUFBQSw2QkFDQztBQUFHLGlCQUFTLEVBQUMsa0JBQWI7QUFBQSxtQkFDRUEsVUFBVSxDQUFDLENBQUQsQ0FEWixvQkFDaUIscUVBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJGLGVBZUM7QUFBTSxlQUFTLEVBQUMsa0JBQWhCO0FBQUEsZ0JBQW9DTjtBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFtQkE7O0dBekJRRCxXO1VBQ09HLHFEOzs7S0FEUEgsVztBQTJCTUEsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FzaW5vcy9bcGlkXS4yZjBjOGZhNWFiYTc2ZDNhNzU2MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IEJzQ2hldnJvblJpZ2h0IH0gZnJvbSBcInJlYWN0LWljb25zL2JzXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgXCIuL2JyZWFkY3J1bXBzLnNjc3NcIjtcclxuXHJcbmZ1bmN0aW9uIEJyZWFkQ3J1bXBzKHsgbmFtZSB9KSB7XHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblx0Y29uc3QgYWRkcmVzcyA9IHJvdXRlci5wYXRobmFtZS5zcGxpdChcIi9cIik7XHJcblx0Y29uc3QgY3V0QWRkcmVzcyA9IGFkZHJlc3Muc2xpY2UoMSwgYWRkcmVzcy5sZW5naHQpO1xyXG5cdGNvbnNvbGUubG9nKGN1dEFkZHJlc3NbMF0pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJwb3N0X19icmVhZGNydW1wc1wiPlxyXG5cdFx0XHQ8TGluayBocmVmPVwiL1wiPlxyXG5cdFx0XHRcdDxhIGNsYXNzTmFtZT1cInBvc3RfX2JyZWFkY3J1bXBcIj5cclxuXHRcdFx0XHRcdEhvbWVcclxuXHRcdFx0XHRcdDxCc0NoZXZyb25SaWdodCAvPlxyXG5cdFx0XHRcdDwvYT5cclxuXHRcdFx0PC9MaW5rPlxyXG5cdFx0XHR7Y3V0QWRkcmVzcy5sZW5ndGggPiAxICYmIChcclxuXHRcdFx0XHQ8TGluayBocmVmPXtgLyR7Y3V0QWRkcmVzc1swXX1gfT5cclxuXHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cInBvc3RfX2JyZWFkY3J1bXBcIj5cclxuXHRcdFx0XHRcdFx0e2N1dEFkZHJlc3NbMF19IDxCc0NoZXZyb25SaWdodCAvPlxyXG5cdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0KX1cclxuXHJcblx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInBvc3RfX2JyZWFkY3J1bXBcIj57bmFtZX08L3NwYW4+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCcmVhZENydW1wcztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==