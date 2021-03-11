webpackHotUpdate_N_E("pages/casinos/[pid]",{

/***/ "./pages/casinos/[pid].js":
/*!********************************!*\
  !*** ./pages/casinos/[pid].js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _post_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post.scss */ "./pages/casinos/post.scss");
/* harmony import */ var _post_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_post_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_WebLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/WebLayout */ "./components/WebLayout/index.jsx");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_ContactForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/ContactForm */ "./components/ContactForm/index.jsx");
/* harmony import */ var _components_CasinoWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/CasinoWrapper */ "./components/CasinoWrapper/index.jsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_icons_Bs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/Bs */ "./node_modules/react-icons/Bs/index.esm.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");


var _jsxFileName = "C:\\Users\\IT\\Documents\\GitHub\\project-x\\frontend\\pages\\casinos\\[pid].js",
    _s = $RefreshSig$();












function Post() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      show = _useState[0],
      handleShow = _useState[1];

  var transitionNavBar = function transitionNavBar() {
    if (window.scrollY > 200) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    window.addEventListener("scroll", transitionNavBar);
    return function () {
      window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var pid = router.query.pid;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_WebLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "post",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "post__inner",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "post__breadcrumps",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
              href: "/",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: "post__breadcrump",
                children: ["Home", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Bs__WEBPACK_IMPORTED_MODULE_9__["BsChevronRight"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 38,
                  columnNumber: 10
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 36,
                columnNumber: 9
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 8
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
              href: "/casinos",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: "post__breadcrump",
                children: ["Casino reviews ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Bs__WEBPACK_IMPORTED_MODULE_9__["BsChevronRight"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 43,
                  columnNumber: 25
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 9
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 8
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "post__breadcrump",
              children: pid
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "post__title",
            style: {
              backgroundImage: "url(https://images.prismic.io/lucky7bonus/65d473f5-4b87-4752-929d-1f3fcb56aa72_BG_Podium-tournoi+copie.jpg)"
            },
            children: pid
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "post__content",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "post__left",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CasinoWrapper__WEBPACK_IMPORTED_MODULE_7__["default"], {
                post: true,
                review: false
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 9
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "post__text",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                    children: "Opinions on Jack21"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 62,
                    columnNumber: 11
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 61,
                  columnNumber: 10
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa aspernatur deserunt, reiciendis illo voluptatem incidunt suscipit rem! Velit sapiente eveniet eum pariatur libero?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 64,
                  columnNumber: 10
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa aspernatur deserunt, reiciendis illo voluptatem incidunt suscipit rem! Velit sapiente eveniet eum pariatur libero?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 70,
                  columnNumber: 10
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa aspernatur deserunt, reiciendis illo voluptatem incidunt suscipit rem! Velit sapiente eveniet eum pariatur libero?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 76,
                  columnNumber: 10
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa aspernatur deserunt, reiciendis illo voluptatem incidunt suscipit rem! Velit sapiente eveniet eum pariatur libero?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 82,
                  columnNumber: 10
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: "https://images.prismic.io/lucky7bonus/608979d6-3927-4732-b909-393de182ab46_sinscrire_sur_ce_casino.png",
                  alt: "s'inscrire sur Jack21"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 88,
                  columnNumber: 10
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                    children: "Games and suppliers at Jack21"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 93,
                    columnNumber: 11
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 92,
                  columnNumber: 10
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa aspernatur deserunt, reiciendis illo voluptatem incidunt suscipit rem! Velit sapiente eveniet eum pariatur libero?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 95,
                  columnNumber: 10
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa aspernatur deserunt, reiciendis illo voluptatem incidunt suscipit rem! Velit sapiente eveniet eum pariatur libero?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 101,
                  columnNumber: 10
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 9
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 8
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "post__right",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "post__contactform",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ContactForm__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 111,
                  columnNumber: 10
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 110,
                columnNumber: 9
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: Object(clsx__WEBPACK_IMPORTED_MODULE_10__["default"])("post__fixed", !show && "active"),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CasinoWrapper__WEBPACK_IMPORTED_MODULE_7__["default"], {
              post: true,
              review: false
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 8
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 3
  }, this);
}

_s(Post, "ZKfh6gYMKPs4e9VnWm3R+Xbx7yc=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c = Post;
/* harmony default export */ __webpack_exports__["default"] = (Post);

var _c;

$RefreshReg$(_c, "Post");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FzaW5vcy9bcGlkXS5qcyJdLCJuYW1lcyI6WyJQb3N0IiwidXNlU3RhdGUiLCJzaG93IiwiaGFuZGxlU2hvdyIsInRyYW5zaXRpb25OYXZCYXIiLCJ3aW5kb3ciLCJzY3JvbGxZIiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwaWQiLCJxdWVyeSIsImJhY2tncm91bmRJbWFnZSIsImNsc3giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQSxrQkFDWUMsc0RBQVEsQ0FBQyxLQUFELENBRHBCO0FBQUEsTUFDUkMsSUFEUTtBQUFBLE1BQ0ZDLFVBREU7O0FBRWYsTUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQzlCLFFBQUlDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixHQUFyQixFQUEwQjtBQUN6QkgsZ0JBQVUsQ0FBQyxJQUFELENBQVY7QUFDQSxLQUZELE1BRU87QUFDTkEsZ0JBQVUsQ0FBQyxLQUFELENBQVY7QUFDQTtBQUNELEdBTkQ7O0FBT0FJLHlEQUFTLENBQUMsWUFBTTtBQUNmRixVQUFNLENBQUNHLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDSixnQkFBbEM7QUFDQSxXQUFPLFlBQU07QUFDWkMsWUFBTSxDQUFDSSxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ0wsZ0JBQXJDO0FBQ0EsS0FGRDtBQUdBLEdBTFEsRUFLTixFQUxNLENBQVQ7QUFNQSxNQUFNTSxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBZmUsTUFnQlBDLEdBaEJPLEdBZ0JDRixNQUFNLENBQUNHLEtBaEJSLENBZ0JQRCxHQWhCTztBQWlCZixzQkFDQyxxRUFBQyw2REFBRDtBQUFBLDJCQUNDO0FBQUssZUFBUyxFQUFDLE1BQWY7QUFBQSw2QkFDQztBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUFBLCtCQUNDO0FBQUssbUJBQVMsRUFBQyxhQUFmO0FBQUEsa0NBQ0M7QUFBSyxxQkFBUyxFQUFDLG1CQUFmO0FBQUEsb0NBQ0MscUVBQUMsZ0RBQUQ7QUFBTSxrQkFBSSxFQUFDLEdBQVg7QUFBQSxxQ0FDQztBQUFHLHlCQUFTLEVBQUMsa0JBQWI7QUFBQSxnREFFQyxxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREQsZUFPQyxxRUFBQyxnREFBRDtBQUFNLGtCQUFJLEVBQUMsVUFBWDtBQUFBLHFDQUNDO0FBQUcseUJBQVMsRUFBQyxrQkFBYjtBQUFBLDJEQUNnQixxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVBELGVBWUM7QUFBTSx1QkFBUyxFQUFDLGtCQUFoQjtBQUFBLHdCQUFvQ0E7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFaRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREQsZUFlQztBQUNDLHFCQUFTLEVBQUMsYUFEWDtBQUVDLGlCQUFLLEVBQUU7QUFDTkUsNkJBQWUsRUFDZDtBQUZLLGFBRlI7QUFBQSxzQkFPRUY7QUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWZELGVBd0JDO0FBQUsscUJBQVMsRUFBQyxlQUFmO0FBQUEsb0NBQ0M7QUFBSyx1QkFBUyxFQUFDLFlBQWY7QUFBQSxzQ0FDQyxxRUFBQyxpRUFBRDtBQUFlLG9CQUFJLEVBQUUsSUFBckI7QUFBMkIsc0JBQU0sRUFBRTtBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURELGVBRUM7QUFBSyx5QkFBUyxFQUFDLFlBQWY7QUFBQSx3Q0FDQztBQUFBLHlDQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERCxlQUlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUpELGVBVUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBVkQsZUFnQkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBaEJELGVBc0JDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQXRCRCxlQTRCQztBQUNDLHFCQUFHLEVBQUMsd0dBREw7QUFFQyxxQkFBRyxFQUFDO0FBRkw7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkE1QkQsZUFnQ0M7QUFBQSx5Q0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBaENELGVBbUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQW5DRCxlQXlDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkF6Q0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERCxlQW9EQztBQUFLLHVCQUFTLEVBQUMsYUFBZjtBQUFBLHFDQUNDO0FBQUsseUJBQVMsRUFBQyxtQkFBZjtBQUFBLHVDQUNDLHFFQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFwREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXhCRCxlQWtGQztBQUFLLHFCQUFTLEVBQUVHLHFEQUFJLENBQUMsYUFBRCxFQUFnQixDQUFDYixJQUFELElBQVMsUUFBekIsQ0FBcEI7QUFBQSxtQ0FDQyxxRUFBQyxpRUFBRDtBQUFlLGtCQUFJLEVBQUUsSUFBckI7QUFBMkIsb0JBQU0sRUFBRTtBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFsRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUE4RkE7O0dBL0dRRixJO1VBZU9XLHFEOzs7S0FmUFgsSTtBQWlITUEsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FzaW5vcy9bcGlkXS41ZDk3ZTEwZjFlZDJmZDhhZmJkOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBcIi4vcG9zdC5zY3NzXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvV2ViTGF5b3V0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgQ29udGFjdEZvcm0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQ29udGFjdEZvcm1cIjtcclxuaW1wb3J0IENhc2lub1dyYXBwZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQ2FzaW5vV3JhcHBlclwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IEJzQ2hldnJvblJpZ2h0IH0gZnJvbSBcInJlYWN0LWljb25zL0JzXCI7XHJcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XHJcblxyXG5mdW5jdGlvbiBQb3N0KCkge1xyXG5cdGNvbnN0IFtzaG93LCBoYW5kbGVTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCB0cmFuc2l0aW9uTmF2QmFyID0gKCkgPT4ge1xyXG5cdFx0aWYgKHdpbmRvdy5zY3JvbGxZID4gMjAwKSB7XHJcblx0XHRcdGhhbmRsZVNob3codHJ1ZSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRoYW5kbGVTaG93KGZhbHNlKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0cmFuc2l0aW9uTmF2QmFyKTtcclxuXHRcdHJldHVybiAoKSA9PiB7XHJcblx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRyYW5zaXRpb25OYXZCYXIpO1xyXG5cdFx0fTtcclxuXHR9LCBbXSk7XHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblx0Y29uc3QgeyBwaWQgfSA9IHJvdXRlci5xdWVyeTtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PExheW91dD5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3N0XCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9zdF9faW5uZXJcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3N0X19icmVhZGNydW1wc1wiPlxyXG5cdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJwb3N0X19icmVhZGNydW1wXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdEhvbWVcclxuXHRcdFx0XHRcdFx0XHRcdFx0PEJzQ2hldnJvblJpZ2h0IC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvY2FzaW5vc1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwicG9zdF9fYnJlYWRjcnVtcFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRDYXNpbm8gcmV2aWV3cyA8QnNDaGV2cm9uUmlnaHQgLz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwicG9zdF9fYnJlYWRjcnVtcFwiPntwaWR9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInBvc3RfX3RpdGxlXCJcclxuXHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZEltYWdlOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcInVybChodHRwczovL2ltYWdlcy5wcmlzbWljLmlvL2x1Y2t5N2JvbnVzLzY1ZDQ3M2Y1LTRiODctNDc1Mi05MjlkLTFmM2ZjYjU2YWE3Ml9CR19Qb2RpdW0tdG91cm5vaStjb3BpZS5qcGcpXCIsXHJcblx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdHtwaWR9XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX2NvbnRlbnRcIj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX2xlZnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxDYXNpbm9XcmFwcGVyIHBvc3Q9e3RydWV9IHJldmlldz17ZmFsc2V9IC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX3RleHRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGgxPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzdHJvbmc+T3BpbmlvbnMgb24gSmFjazIxPC9zdHJvbmc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvaDE+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxwPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0TmVzY2l1bnQgbmVtbyBxdWFzIGxhdWRhbnRpdW0gYWNjdXNhbnRpdW0gbmFtLiBDdW1xdWUgaXBzYVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFzcGVybmF0dXIgZGVzZXJ1bnQsIHJlaWNpZW5kaXMgaWxsbyB2b2x1cHRhdGVtIGluY2lkdW50XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3VzY2lwaXQgcmVtISBWZWxpdCBzYXBpZW50ZSBldmVuaWV0IGV1bSBwYXJpYXR1ciBsaWJlcm8/XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHA+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHROZXNjaXVudCBuZW1vIHF1YXMgbGF1ZGFudGl1bSBhY2N1c2FudGl1bSBuYW0uIEN1bXF1ZSBpcHNhXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YXNwZXJuYXR1ciBkZXNlcnVudCwgcmVpY2llbmRpcyBpbGxvIHZvbHVwdGF0ZW0gaW5jaWR1bnRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdXNjaXBpdCByZW0hIFZlbGl0IHNhcGllbnRlIGV2ZW5pZXQgZXVtIHBhcmlhdHVyIGxpYmVybz9cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8cD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdE5lc2NpdW50IG5lbW8gcXVhcyBsYXVkYW50aXVtIGFjY3VzYW50aXVtIG5hbS4gQ3VtcXVlIGlwc2FcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhc3Blcm5hdHVyIGRlc2VydW50LCByZWljaWVuZGlzIGlsbG8gdm9sdXB0YXRlbSBpbmNpZHVudFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN1c2NpcGl0IHJlbSEgVmVsaXQgc2FwaWVudGUgZXZlbmlldCBldW0gcGFyaWF0dXIgbGliZXJvP1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxwPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0TmVzY2l1bnQgbmVtbyBxdWFzIGxhdWRhbnRpdW0gYWNjdXNhbnRpdW0gbmFtLiBDdW1xdWUgaXBzYVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFzcGVybmF0dXIgZGVzZXJ1bnQsIHJlaWNpZW5kaXMgaWxsbyB2b2x1cHRhdGVtIGluY2lkdW50XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3VzY2lwaXQgcmVtISBWZWxpdCBzYXBpZW50ZSBldmVuaWV0IGV1bSBwYXJpYXR1ciBsaWJlcm8/XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNyYz1cImh0dHBzOi8vaW1hZ2VzLnByaXNtaWMuaW8vbHVja3k3Ym9udXMvNjA4OTc5ZDYtMzkyNy00NzMyLWI5MDktMzkzZGUxODJhYjQ2X3NpbnNjcmlyZV9zdXJfY2VfY2FzaW5vLnBuZ1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0PVwicydpbnNjcmlyZSBzdXIgSmFjazIxXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0PjwvaW1nPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHN0cm9uZz5HYW1lcyBhbmQgc3VwcGxpZXJzIGF0IEphY2syMTwvc3Ryb25nPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2gyPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8cD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdE5lc2NpdW50IG5lbW8gcXVhcyBsYXVkYW50aXVtIGFjY3VzYW50aXVtIG5hbS4gQ3VtcXVlIGlwc2FcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhc3Blcm5hdHVyIGRlc2VydW50LCByZWljaWVuZGlzIGlsbG8gdm9sdXB0YXRlbSBpbmNpZHVudFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN1c2NpcGl0IHJlbSEgVmVsaXQgc2FwaWVudGUgZXZlbmlldCBldW0gcGFyaWF0dXIgbGliZXJvP1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxwPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0TmVzY2l1bnQgbmVtbyBxdWFzIGxhdWRhbnRpdW0gYWNjdXNhbnRpdW0gbmFtLiBDdW1xdWUgaXBzYVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFzcGVybmF0dXIgZGVzZXJ1bnQsIHJlaWNpZW5kaXMgaWxsbyB2b2x1cHRhdGVtIGluY2lkdW50XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3VzY2lwaXQgcmVtISBWZWxpdCBzYXBpZW50ZSBldmVuaWV0IGV1bSBwYXJpYXR1ciBsaWJlcm8/XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fcmlnaHRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fY29udGFjdGZvcm1cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PENvbnRhY3RGb3JtIC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbHN4KFwicG9zdF9fZml4ZWRcIiwgIXNob3cgJiYgXCJhY3RpdmVcIil9PlxyXG5cdFx0XHRcdFx0XHRcdDxDYXNpbm9XcmFwcGVyIHBvc3Q9e3RydWV9IHJldmlldz17ZmFsc2V9IC8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9MYXlvdXQ+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==