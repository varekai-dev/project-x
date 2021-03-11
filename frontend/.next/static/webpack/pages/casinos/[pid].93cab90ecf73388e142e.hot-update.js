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

  var bonus = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  var distance = bonus.current.offsetTop;
  console.log(distance);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      show = _useState[0],
      handleShow = _useState[1];

  var transitionNavBar = function transitionNavBar() {
    if (window.scrollY > 200 && window.scrollY < distance - 200) {
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
                  lineNumber: 41,
                  columnNumber: 10
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 9
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 8
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
              href: "/casinos",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: "post__breadcrump",
                children: ["Casino reviews ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Bs__WEBPACK_IMPORTED_MODULE_9__["BsChevronRight"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 46,
                  columnNumber: 25
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 9
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 8
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "post__breadcrump",
              children: pid
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "post__title",
            style: {
              backgroundImage: "url(https://images.prismic.io/lucky7bonus/65d473f5-4b87-4752-929d-1f3fcb56aa72_BG_Podium-tournoi+copie.jpg)"
            },
            children: pid
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
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
                lineNumber: 62,
                columnNumber: 9
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "post__text",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                    children: "Opinions on Jack21"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 65,
                    columnNumber: 11
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 64,
                  columnNumber: 10
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa aspernatur deserunt, reiciendis illo voluptatem incidunt suscipit rem! Velit sapiente eveniet eum pariatur libero?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 67,
                  columnNumber: 10
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa aspernatur deserunt, reiciendis illo voluptatem incidunt suscipit rem! Velit sapiente eveniet eum pariatur libero?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 73,
                  columnNumber: 10
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa aspernatur deserunt, reiciendis illo voluptatem incidunt suscipit rem! Velit sapiente eveniet eum pariatur libero?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 79,
                  columnNumber: 10
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa aspernatur deserunt, reiciendis illo voluptatem incidunt suscipit rem! Velit sapiente eveniet eum pariatur libero?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 85,
                  columnNumber: 10
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: "https://images.prismic.io/lucky7bonus/608979d6-3927-4732-b909-393de182ab46_sinscrire_sur_ce_casino.png",
                  alt: "s'inscrire sur Jack21"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 91,
                  columnNumber: 10
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                    children: "Games and suppliers at Jack21"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 96,
                    columnNumber: 11
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 95,
                  columnNumber: 10
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa aspernatur deserunt, reiciendis illo voluptatem incidunt suscipit rem! Velit sapiente eveniet eum pariatur libero?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 98,
                  columnNumber: 10
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa aspernatur deserunt, reiciendis illo voluptatem incidunt suscipit rem! Velit sapiente eveniet eum pariatur libero?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 104,
                  columnNumber: 10
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 9
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 8
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "post__right",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "post__contactform",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ContactForm__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 114,
                  columnNumber: 10
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 113,
                columnNumber: 9
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: Object(clsx__WEBPACK_IMPORTED_MODULE_10__["default"])("post__fixed", show && "active"),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CasinoWrapper__WEBPACK_IMPORTED_MODULE_7__["default"], {
              post: true,
              review: false
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 8
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            ref: bonus,
            className: "test"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
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
      lineNumber: 34,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 3
  }, this);
}

_s(Post, "1dDN4qt5BJy6CgPhkRvD23j9nhQ=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FzaW5vcy9bcGlkXS5qcyJdLCJuYW1lcyI6WyJQb3N0IiwiYm9udXMiLCJ1c2VSZWYiLCJkaXN0YW5jZSIsImN1cnJlbnQiLCJvZmZzZXRUb3AiLCJjb25zb2xlIiwibG9nIiwidXNlU3RhdGUiLCJzaG93IiwiaGFuZGxlU2hvdyIsInRyYW5zaXRpb25OYXZCYXIiLCJ3aW5kb3ciLCJzY3JvbGxZIiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwaWQiLCJxdWVyeSIsImJhY2tncm91bmRJbWFnZSIsImNsc3giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFDZixNQUFNQyxLQUFLLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUFwQjtBQUNBLE1BQU1DLFFBQVEsR0FBR0YsS0FBSyxDQUFDRyxPQUFOLENBQWNDLFNBQS9CO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSixRQUFaOztBQUhlLGtCQUlZSyxzREFBUSxDQUFDLEtBQUQsQ0FKcEI7QUFBQSxNQUlSQyxJQUpRO0FBQUEsTUFJRkMsVUFKRTs7QUFLZixNQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFDOUIsUUFBSUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLEdBQWpCLElBQXdCRCxNQUFNLENBQUNDLE9BQVAsR0FBaUJWLFFBQVEsR0FBRyxHQUF4RCxFQUE2RDtBQUM1RE8sZ0JBQVUsQ0FBQyxJQUFELENBQVY7QUFDQSxLQUZELE1BRU87QUFDTkEsZ0JBQVUsQ0FBQyxLQUFELENBQVY7QUFDQTtBQUNELEdBTkQ7O0FBT0FJLHlEQUFTLENBQUMsWUFBTTtBQUNmRixV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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBcEREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkF4QkQsZUFrRkM7QUFBSyxxQkFBUyxFQUFFRyxxREFBSSxDQUFDLGFBQUQsRUFBZ0JiLElBQUksSUFBSSxRQUF4QixDQUFwQjtBQUFBLG1DQUNDLHFFQUFDLGlFQUFEO0FBQWUsa0JBQUksRUFBRSxJQUFyQjtBQUEyQixvQkFBTSxFQUFFO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWxGRCxlQXFGQztBQUFLLGVBQUcsRUFBRVIsS0FBVjtBQUFpQixxQkFBUyxFQUFDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBckZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBK0ZBOztHQW5IUUQsSTtVQWtCT2tCLHFEOzs7S0FsQlBsQixJO0FBcUhNQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYXNpbm9zL1twaWRdLjkzY2FiOTBlY2Y3MzM4OGUxNDJlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgXCIuL3Bvc3Quc2Nzc1wiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1dlYkxheW91dFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IENvbnRhY3RGb3JtIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0NvbnRhY3RGb3JtXCI7XHJcbmltcG9ydCBDYXNpbm9XcmFwcGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0Nhc2lub1dyYXBwZXJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBCc0NoZXZyb25SaWdodCB9IGZyb20gXCJyZWFjdC1pY29ucy9Cc1wiO1xyXG5pbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xyXG5cclxuZnVuY3Rpb24gUG9zdCgpIHtcclxuXHRjb25zdCBib251cyA9IHVzZVJlZihudWxsKTtcclxuXHRjb25zdCBkaXN0YW5jZSA9IGJvbnVzLmN1cnJlbnQub2Zmc2V0VG9wO1xyXG5cdGNvbnNvbGUubG9nKGRpc3RhbmNlKTtcclxuXHRjb25zdCBbc2hvdywgaGFuZGxlU2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgdHJhbnNpdGlvbk5hdkJhciA9ICgpID0+IHtcclxuXHRcdGlmICh3aW5kb3cuc2Nyb2xsWSA+IDIwMCAmJiB3aW5kb3cuc2Nyb2xsWSA8IGRpc3RhbmNlIC0gMjAwKSB7XHJcblx0XHRcdGhhbmRsZVNob3codHJ1ZSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRoYW5kbGVTaG93KGZhbHNlKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0cmFuc2l0aW9uTmF2QmFyKTtcclxuXHRcdHJldHVybiAoKSA9PiB7XHJcblx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRyYW5zaXRpb25OYXZCYXIpO1xyXG5cdFx0fTtcclxuXHR9LCBbXSk7XHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblx0Y29uc3QgeyBwaWQgfSA9IHJvdXRlci5xdWVyeTtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PExheW91dD5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3N0XCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9zdF9faW5uZXJcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3N0X19icmVhZGNydW1wc1wiPlxyXG5cdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJwb3N0X19icmVhZGNydW1wXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdEhvbWVcclxuXHRcdFx0XHRcdFx0XHRcdFx0PEJzQ2hldnJvblJpZ2h0IC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvY2FzaW5vc1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwicG9zdF9fYnJlYWRjcnVtcFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRDYXNpbm8gcmV2aWV3cyA8QnNDaGV2cm9uUmlnaHQgLz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwicG9zdF9fYnJlYWRjcnVtcFwiPntwaWR9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInBvc3RfX3RpdGxlXCJcclxuXHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZEltYWdlOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcInVybChodHRwczovL2ltYWdlcy5wcmlzbWljLmlvL2x1Y2t5N2JvbnVzLzY1ZDQ3M2Y1LTRiODctNDc1Mi05MjlkLTFmM2ZjYjU2YWE3Ml9CR19Qb2RpdW0tdG91cm5vaStjb3BpZS5qcGcpXCIsXHJcblx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdHtwaWR9XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX2NvbnRlbnRcIj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX2xlZnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxDYXNpbm9XcmFwcGVyIHBvc3Q9e3RydWV9IHJldmlldz17ZmFsc2V9IC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX3RleHRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGgxPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzdHJvbmc+T3BpbmlvbnMgb24gSmFjazIxPC9zdHJvbmc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvaDE+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxwPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0TmVzY2l1bnQgbmVtbyBxdWFzIGxhdWRhbnRpdW0gYWNjdXNhbnRpdW0gbmFtLiBDdW1xdWUgaXBzYVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFzcGVybmF0dXIgZGVzZXJ1bnQsIHJlaWNpZW5kaXMgaWxsbyB2b2x1cHRhdGVtIGluY2lkdW50XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3VzY2lwaXQgcmVtISBWZWxpdCBzYXBpZW50ZSBldmVuaWV0IGV1bSBwYXJpYXR1ciBsaWJlcm8/XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHA+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHROZXNjaXVudCBuZW1vIHF1YXMgbGF1ZGFudGl1bSBhY2N1c2FudGl1bSBuYW0uIEN1bXF1ZSBpcHNhXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YXNwZXJuYXR1ciBkZXNlcnVudCwgcmVpY2llbmRpcyBpbGxvIHZvbHVwdGF0ZW0gaW5jaWR1bnRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdXNjaXBpdCByZW0hIFZlbGl0IHNhcGllbnRlIGV2ZW5pZXQgZXVtIHBhcmlhdHVyIGxpYmVybz9cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8cD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdE5lc2NpdW50IG5lbW8gcXVhcyBsYXVkYW50aXVtIGFjY3VzYW50aXVtIG5hbS4gQ3VtcXVlIGlwc2FcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhc3Blcm5hdHVyIGRlc2VydW50LCByZWljaWVuZGlzIGlsbG8gdm9sdXB0YXRlbSBpbmNpZHVudFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN1c2NpcGl0IHJlbSEgVmVsaXQgc2FwaWVudGUgZXZlbmlldCBldW0gcGFyaWF0dXIgbGliZXJvP1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxwPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0TmVzY2l1bnQgbmVtbyBxdWFzIGxhdWRhbnRpdW0gYWNjdXNhbnRpdW0gbmFtLiBDdW1xdWUgaXBzYVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFzcGVybmF0dXIgZGVzZXJ1bnQsIHJlaWNpZW5kaXMgaWxsbyB2b2x1cHRhdGVtIGluY2lkdW50XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3VzY2lwaXQgcmVtISBWZWxpdCBzYXBpZW50ZSBldmVuaWV0IGV1bSBwYXJpYXR1ciBsaWJlcm8/XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNyYz1cImh0dHBzOi8vaW1hZ2VzLnByaXNtaWMuaW8vbHVja3k3Ym9udXMvNjA4OTc5ZDYtMzkyNy00NzMyLWI5MDktMzkzZGUxODJhYjQ2X3NpbnNjcmlyZV9zdXJfY2VfY2FzaW5vLnBuZ1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0PVwicydpbnNjcmlyZSBzdXIgSmFjazIxXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0PjwvaW1nPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHN0cm9uZz5HYW1lcyBhbmQgc3VwcGxpZXJzIGF0IEphY2syMTwvc3Ryb25nPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2gyPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8cD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdE5lc2NpdW50IG5lbW8gcXVhcyBsYXVkYW50aXVtIGFjY3VzYW50aXVtIG5hbS4gQ3VtcXVlIGlwc2FcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhc3Blcm5hdHVyIGRlc2VydW50LCByZWljaWVuZGlzIGlsbG8gdm9sdXB0YXRlbSBpbmNpZHVudFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN1c2NpcGl0IHJlbSEgVmVsaXQgc2FwaWVudGUgZXZlbmlldCBldW0gcGFyaWF0dXIgbGliZXJvP1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxwPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0TmVzY2l1bnQgbmVtbyBxdWFzIGxhdWRhbnRpdW0gYWNjdXNhbnRpdW0gbmFtLiBDdW1xdWUgaXBzYVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFzcGVybmF0dXIgZGVzZXJ1bnQsIHJlaWNpZW5kaXMgaWxsbyB2b2x1cHRhdGVtIGluY2lkdW50XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3VzY2lwaXQgcmVtISBWZWxpdCBzYXBpZW50ZSBldmVuaWV0IGV1bSBwYXJpYXR1ciBsaWJlcm8/XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fcmlnaHRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fY29udGFjdGZvcm1cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PENvbnRhY3RGb3JtIC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbHN4KFwicG9zdF9fZml4ZWRcIiwgc2hvdyAmJiBcImFjdGl2ZVwiKX0+XHJcblx0XHRcdFx0XHRcdFx0PENhc2lub1dyYXBwZXIgcG9zdD17dHJ1ZX0gcmV2aWV3PXtmYWxzZX0gLz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgcmVmPXtib251c30gY2xhc3NOYW1lPVwidGVzdFwiPjwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9MYXlvdXQ+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==