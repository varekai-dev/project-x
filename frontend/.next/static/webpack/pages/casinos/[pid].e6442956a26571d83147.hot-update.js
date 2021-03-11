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
/* harmony import */ var react_icons_Ai__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/Ai */ "./node_modules/react-icons/Ai/index.esm.js");
/* harmony import */ var react_icons_Ri__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-icons/Ri */ "./node_modules/react-icons/Ri/index.esm.js");
/* harmony import */ var react_icons_Gi__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-icons/Gi */ "./node_modules/react-icons/Gi/index.esm.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");


var _jsxFileName = "C:\\Users\\IT\\Documents\\GitHub\\project-x\\frontend\\pages\\casinos\\[pid].js",
    _s = $RefreshSig$();
















function Post() {
  _s();

  var bonus = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null); // const distance = bonus.getBoundingClientRect();
  // console.log(distance);

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
                  lineNumber: 45,
                  columnNumber: 10
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 9
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 8
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
              href: "/casinos",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: "post__breadcrump",
                children: ["Casino reviews ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Bs__WEBPACK_IMPORTED_MODULE_9__["BsChevronRight"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 50,
                  columnNumber: 25
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 9
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 8
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "post__breadcrump",
              children: pid
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "post__title",
            style: {
              backgroundImage: "url(https://images.prismic.io/lucky7bonus/65d473f5-4b87-4752-929d-1f3fcb56aa72_BG_Podium-tournoi+copie.jpg)"
            },
            children: pid
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
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
                lineNumber: 66,
                columnNumber: 9
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "post__text",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                    children: "Opinions on Jack21"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 69,
                    columnNumber: 11
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 68,
                  columnNumber: 10
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa aspernatur deserunt, reiciendis illo voluptatem incidunt suscipit rem! Velit sapiente eveniet eum pariatur libero?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 71,
                  columnNumber: 10
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa aspernatur deserunt, reiciendis illo voluptatem incidunt suscipit rem! Velit sapiente eveniet eum pariatur libero?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 77,
                  columnNumber: 10
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa aspernatur deserunt, reiciendis illo voluptatem incidunt suscipit rem! Velit sapiente eveniet eum pariatur libero?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 84,
                  columnNumber: 10
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa aspernatur deserunt, reiciendis illo voluptatem incidunt suscipit rem! Velit sapiente eveniet eum pariatur libero?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 90,
                  columnNumber: 10
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa aspernatur deserunt, reiciendis illo voluptatem incidunt suscipit rem! Velit sapiente eveniet eum pariatur libero?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 96,
                  columnNumber: 10
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa aspernatur deserunt, reiciendis illo voluptatem incidunt suscipit rem! Velit sapiente eveniet eum pariatur libero?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 102,
                  columnNumber: 10
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa aspernatur deserunt, reiciendis illo voluptatem incidunt suscipit rem! Velit sapiente eveniet eum pariatur libero?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 108,
                  columnNumber: 10
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa aspernatur deserunt, reiciendis illo voluptatem incidunt suscipit rem! Velit sapiente eveniet eum pariatur libero?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 114,
                  columnNumber: 10
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa aspernatur deserunt, reiciendis illo voluptatem incidunt suscipit rem! Velit sapiente eveniet eum pariatur libero?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 120,
                  columnNumber: 10
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa aspernatur deserunt, reiciendis illo voluptatem incidunt suscipit rem! Velit sapiente eveniet eum pariatur libero?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 126,
                  columnNumber: 10
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa aspernatur deserunt, reiciendis illo voluptatem incidunt suscipit rem! Velit sapiente eveniet eum pariatur libero?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 132,
                  columnNumber: 10
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa aspernatur deserunt, reiciendis illo voluptatem incidunt suscipit rem! Velit sapiente eveniet eum pariatur libero?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 138,
                  columnNumber: 10
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: "https://images.prismic.io/lucky7bonus/608979d6-3927-4732-b909-393de182ab46_sinscrire_sur_ce_casino.png",
                  alt: "s'inscrire sur Jack21"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 144,
                  columnNumber: 10
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                    children: "Games and suppliers at Jack21"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 149,
                    columnNumber: 11
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 148,
                  columnNumber: 10
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa aspernatur deserunt, reiciendis illo voluptatem incidunt suscipit rem! Velit sapiente eveniet eum pariatur libero?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 151,
                  columnNumber: 10
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa aspernatur deserunt, reiciendis illo voluptatem incidunt suscipit rem! Velit sapiente eveniet eum pariatur libero?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 157,
                  columnNumber: 10
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 9
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 8
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "post__right",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "post__company-info",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                  children: "Quickfacts on Jack21"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 167,
                  columnNumber: 10
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "company__line",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "company__line-left",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Gi__WEBPACK_IMPORTED_MODULE_12__["GiLaurelCrown"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 170,
                      columnNumber: 12
                    }, this), " Owner"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 169,
                    columnNumber: 11
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "company__line-right",
                    children: "Somebody"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 172,
                    columnNumber: 11
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 168,
                  columnNumber: 10
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "company__line",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "company__line-left",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Bs__WEBPACK_IMPORTED_MODULE_9__["BsCalendar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 176,
                      columnNumber: 12
                    }, this), "Founded"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 175,
                    columnNumber: 11
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "company__line-right",
                    children: "2020-01-01"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 179,
                    columnNumber: 11
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 174,
                  columnNumber: 10
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "company__line",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "company__line-left",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ri__WEBPACK_IMPORTED_MODULE_11__["RiMoneyEuroCircleLine"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 183,
                      columnNumber: 12
                    }, this), "Min. deposit"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 182,
                    columnNumber: 11
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "company__line-right",
                    children: "\u20AC30"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 186,
                    columnNumber: 11
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 181,
                  columnNumber: 10
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 166,
                columnNumber: 9
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "post__rating",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                  children: "What we think about Jack21"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 190,
                  columnNumber: 10
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "post__rating-line",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "rating-line-left",
                    children: "Bonuses"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 192,
                    columnNumber: 11
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "rating-line-right",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_10__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 194,
                      columnNumber: 12
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 193,
                    columnNumber: 11
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 191,
                  columnNumber: 10
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 189,
                columnNumber: 9
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "post__contactform",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ContactForm__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 200,
                  columnNumber: 10
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 199,
                columnNumber: 9
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 165,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: Object(clsx__WEBPACK_IMPORTED_MODULE_13__["default"])("post__fixed", show && "active"),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CasinoWrapper__WEBPACK_IMPORTED_MODULE_7__["default"], {
              post: true,
              review: false
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 205,
              columnNumber: 8
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 204,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            ref: bonus,
            className: "test"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 207,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 37,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FzaW5vcy9bcGlkXS5qcyJdLCJuYW1lcyI6WyJQb3N0IiwiYm9udXMiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInNob3ciLCJoYW5kbGVTaG93IiwidHJhbnNpdGlvbk5hdkJhciIsIndpbmRvdyIsInNjcm9sbFkiLCJ1c2VFZmZlY3QiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJvdXRlciIsInVzZVJvdXRlciIsInBpZCIsInF1ZXJ5IiwiYmFja2dyb3VuZEltYWdlIiwiY2xzeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQ2YsTUFBTUMsS0FBSyxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBcEIsQ0FEZSxDQUVmO0FBQ0E7O0FBSGUsa0JBSVlDLHNEQUFRLENBQUMsS0FBRCxDQUpwQjtBQUFBLE1BSVJDLElBSlE7QUFBQSxNQUlGQyxVQUpFOztBQUtmLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTTtBQUM5QixRQUFJQyxNQUFNLENBQUNDLE9BQVAsR0FBaUIsR0FBckIsRUFBMEI7QUFDekJILGdCQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0EsS0FGRCxNQUVPO0FBQ05BLGdCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0E7QUFDRCxHQU5EOztBQU9BSSx5REFBUyxDQUFDLFlBQU07QUFDZkYsVUFBTSxDQUFDRyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ0osZ0JBQWxDO0FBQ0EsV0FBTyxZQUFNO0FBQ1pDLFlBQU0sQ0FBQ0ksbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNMLGdCQUFyQztBQUNBLEtBRkQ7QUFHQSxHQUxRLEVBS04sRUFMTSxDQUFU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QUREO0FBaUxBOztHQXJNUUQsSTtVQWtCT2EscUQ7OztLQWxCUGIsSTtBQXVNTUEsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FzaW5vcy9bcGlkXS5lNjQ0Mjk1NmEyNjU3MWQ4MzE0Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFwiLi9wb3N0LnNjc3NcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9XZWJMYXlvdXRcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBDb250YWN0Rm9ybSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Db250YWN0Rm9ybVwiO1xyXG5pbXBvcnQgQ2FzaW5vV3JhcHBlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9DYXNpbm9XcmFwcGVyXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgQnNDaGV2cm9uUmlnaHQgfSBmcm9tIFwicmVhY3QtaWNvbnMvQnNcIjtcclxuaW1wb3J0IHsgQWlUd290b25lU3RhciB9IGZyb20gXCJyZWFjdC1pY29ucy9BaVwiO1xyXG5pbXBvcnQgeyBCc0NhbGVuZGFyIH0gZnJvbSBcInJlYWN0LWljb25zL0JzXCI7XHJcbmltcG9ydCB7IFJpTW9uZXlFdXJvQ2lyY2xlTGluZSB9IGZyb20gXCJyZWFjdC1pY29ucy9SaVwiO1xyXG5pbXBvcnQgeyBHaUxhdXJlbENyb3duIH0gZnJvbSBcInJlYWN0LWljb25zL0dpXCI7XHJcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XHJcblxyXG5mdW5jdGlvbiBQb3N0KCkge1xyXG5cdGNvbnN0IGJvbnVzID0gdXNlUmVmKG51bGwpO1xyXG5cdC8vIGNvbnN0IGRpc3RhbmNlID0gYm9udXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0Ly8gY29uc29sZS5sb2coZGlzdGFuY2UpO1xyXG5cdGNvbnN0IFtzaG93LCBoYW5kbGVTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCB0cmFuc2l0aW9uTmF2QmFyID0gKCkgPT4ge1xyXG5cdFx0aWYgKHdpbmRvdy5zY3JvbGxZID4gMjAwKSB7XHJcblx0XHRcdGhhbmRsZVNob3codHJ1ZSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRoYW5kbGVTaG93KGZhbHNlKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0cmFuc2l0aW9uTmF2QmFyKTtcclxuXHRcdHJldHVybiAoKSA9PiB7XHJcblx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRyYW5zaXRpb25OYXZCYXIpO1xyXG5cdFx0fTtcclxuXHR9LCBbXSk7XHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblx0Y29uc3QgeyBwaWQgfSA9IHJvdXRlci5xdWVyeTtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PExheW91dD5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3N0XCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9zdF9faW5uZXJcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3N0X19icmVhZGNydW1wc1wiPlxyXG5cdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJwb3N0X19icmVhZGNydW1wXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdEhvbWVcclxuXHRcdFx0XHRcdFx0XHRcdFx0PEJzQ2hldnJvblJpZ2h0IC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvY2FzaW5vc1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwicG9zdF9fYnJlYWRjcnVtcFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRDYXNpbm8gcmV2aWV3cyA8QnNDaGV2cm9uUmlnaHQgLz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwicG9zdF9fYnJlYWRjcnVtcFwiPntwaWR9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInBvc3RfX3RpdGxlXCJcclxuXHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZEltYWdlOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcInVybChodHRwczovL2ltYWdlcy5wcmlzbWljLmlvL2x1Y2t5N2JvbnVzLzY1ZDQ3M2Y1LTRiODctNDc1Mi05MjlkLTFmM2ZjYjU2YWE3Ml9CR19Qb2RpdW0tdG91cm5vaStjb3BpZS5qcGcpXCIsXHJcblx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdHtwaWR9XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX2NvbnRlbnRcIj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX2xlZnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxDYXNpbm9XcmFwcGVyIHBvc3Q9e3RydWV9IHJldmlldz17ZmFsc2V9IC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX3RleHRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGgxPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzdHJvbmc+T3BpbmlvbnMgb24gSmFjazIxPC9zdHJvbmc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvaDE+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxwPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0TmVzY2l1bnQgbmVtbyBxdWFzIGxhdWRhbnRpdW0gYWNjdXNhbnRpdW0gbmFtLiBDdW1xdWUgaXBzYVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFzcGVybmF0dXIgZGVzZXJ1bnQsIHJlaWNpZW5kaXMgaWxsbyB2b2x1cHRhdGVtIGluY2lkdW50XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3VzY2lwaXQgcmVtISBWZWxpdCBzYXBpZW50ZSBldmVuaWV0IGV1bSBwYXJpYXR1ciBsaWJlcm8/XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHA+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHROZXNjaXVudCBuZW1vIHF1YXMgbGF1ZGFudGl1bSBhY2N1c2FudGl1bSBuYW0uIEN1bXF1ZSBpcHNhXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YXNwZXJuYXR1ciBkZXNlcnVudCwgcmVpY2llbmRpcyBpbGxvIHZvbHVwdGF0ZW0gaW5jaWR1bnRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdXNjaXBpdCByZW0hIFZlbGl0IHNhcGllbnRlIGV2ZW5pZXQgZXVtIHBhcmlhdHVyIGxpYmVybz9cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHA+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHROZXNjaXVudCBuZW1vIHF1YXMgbGF1ZGFudGl1bSBhY2N1c2FudGl1bSBuYW0uIEN1bXF1ZSBpcHNhXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YXNwZXJuYXR1ciBkZXNlcnVudCwgcmVpY2llbmRpcyBpbGxvIHZvbHVwdGF0ZW0gaW5jaWR1bnRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdXNjaXBpdCByZW0hIFZlbGl0IHNhcGllbnRlIGV2ZW5pZXQgZXVtIHBhcmlhdHVyIGxpYmVybz9cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8cD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdE5lc2NpdW50IG5lbW8gcXVhcyBsYXVkYW50aXVtIGFjY3VzYW50aXVtIG5hbS4gQ3VtcXVlIGlwc2FcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhc3Blcm5hdHVyIGRlc2VydW50LCByZWljaWVuZGlzIGlsbG8gdm9sdXB0YXRlbSBpbmNpZHVudFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN1c2NpcGl0IHJlbSEgVmVsaXQgc2FwaWVudGUgZXZlbmlldCBldW0gcGFyaWF0dXIgbGliZXJvP1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxwPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0TmVzY2l1bnQgbmVtbyBxdWFzIGxhdWRhbnRpdW0gYWNjdXNhbnRpdW0gbmFtLiBDdW1xdWUgaXBzYVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFzcGVybmF0dXIgZGVzZXJ1bnQsIHJlaWNpZW5kaXMgaWxsbyB2b2x1cHRhdGVtIGluY2lkdW50XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3VzY2lwaXQgcmVtISBWZWxpdCBzYXBpZW50ZSBldmVuaWV0IGV1bSBwYXJpYXR1ciBsaWJlcm8/XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHA+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHROZXNjaXVudCBuZW1vIHF1YXMgbGF1ZGFudGl1bSBhY2N1c2FudGl1bSBuYW0uIEN1bXF1ZSBpcHNhXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YXNwZXJuYXR1ciBkZXNlcnVudCwgcmVpY2llbmRpcyBpbGxvIHZvbHVwdGF0ZW0gaW5jaWR1bnRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdXNjaXBpdCByZW0hIFZlbGl0IHNhcGllbnRlIGV2ZW5pZXQgZXVtIHBhcmlhdHVyIGxpYmVybz9cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8cD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdE5lc2NpdW50IG5lbW8gcXVhcyBsYXVkYW50aXVtIGFjY3VzYW50aXVtIG5hbS4gQ3VtcXVlIGlwc2FcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhc3Blcm5hdHVyIGRlc2VydW50LCByZWljaWVuZGlzIGlsbG8gdm9sdXB0YXRlbSBpbmNpZHVudFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN1c2NpcGl0IHJlbSEgVmVsaXQgc2FwaWVudGUgZXZlbmlldCBldW0gcGFyaWF0dXIgbGliZXJvP1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxwPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0TmVzY2l1bnQgbmVtbyBxdWFzIGxhdWRhbnRpdW0gYWNjdXNhbnRpdW0gbmFtLiBDdW1xdWUgaXBzYVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFzcGVybmF0dXIgZGVzZXJ1bnQsIHJlaWNpZW5kaXMgaWxsbyB2b2x1cHRhdGVtIGluY2lkdW50XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3VzY2lwaXQgcmVtISBWZWxpdCBzYXBpZW50ZSBldmVuaWV0IGV1bSBwYXJpYXR1ciBsaWJlcm8/XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHA+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHROZXNjaXVudCBuZW1vIHF1YXMgbGF1ZGFudGl1bSBhY2N1c2FudGl1bSBuYW0uIEN1bXF1ZSBpcHNhXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YXNwZXJuYXR1ciBkZXNlcnVudCwgcmVpY2llbmRpcyBpbGxvIHZvbHVwdGF0ZW0gaW5jaWR1bnRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdXNjaXBpdCByZW0hIFZlbGl0IHNhcGllbnRlIGV2ZW5pZXQgZXVtIHBhcmlhdHVyIGxpYmVybz9cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8cD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdE5lc2NpdW50IG5lbW8gcXVhcyBsYXVkYW50aXVtIGFjY3VzYW50aXVtIG5hbS4gQ3VtcXVlIGlwc2FcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhc3Blcm5hdHVyIGRlc2VydW50LCByZWljaWVuZGlzIGlsbG8gdm9sdXB0YXRlbSBpbmNpZHVudFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN1c2NpcGl0IHJlbSEgVmVsaXQgc2FwaWVudGUgZXZlbmlldCBldW0gcGFyaWF0dXIgbGliZXJvP1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxwPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0TmVzY2l1bnQgbmVtbyBxdWFzIGxhdWRhbnRpdW0gYWNjdXNhbnRpdW0gbmFtLiBDdW1xdWUgaXBzYVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFzcGVybmF0dXIgZGVzZXJ1bnQsIHJlaWNpZW5kaXMgaWxsbyB2b2x1cHRhdGVtIGluY2lkdW50XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3VzY2lwaXQgcmVtISBWZWxpdCBzYXBpZW50ZSBldmVuaWV0IGV1bSBwYXJpYXR1ciBsaWJlcm8/XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHA+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHROZXNjaXVudCBuZW1vIHF1YXMgbGF1ZGFudGl1bSBhY2N1c2FudGl1bSBuYW0uIEN1bXF1ZSBpcHNhXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YXNwZXJuYXR1ciBkZXNlcnVudCwgcmVpY2llbmRpcyBpbGxvIHZvbHVwdGF0ZW0gaW5jaWR1bnRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdXNjaXBpdCByZW0hIFZlbGl0IHNhcGllbnRlIGV2ZW5pZXQgZXVtIHBhcmlhdHVyIGxpYmVybz9cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3JjPVwiaHR0cHM6Ly9pbWFnZXMucHJpc21pYy5pby9sdWNreTdib251cy82MDg5NzlkNi0zOTI3LTQ3MzItYjkwOS0zOTNkZTE4MmFiNDZfc2luc2NyaXJlX3N1cl9jZV9jYXNpbm8ucG5nXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ9XCJzJ2luc2NyaXJlIHN1ciBKYWNrMjFcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ+PC9pbWc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxoMj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Ryb25nPkdhbWVzIGFuZCBzdXBwbGllcnMgYXQgSmFjazIxPC9zdHJvbmc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvaDI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxwPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0TmVzY2l1bnQgbmVtbyBxdWFzIGxhdWRhbnRpdW0gYWNjdXNhbnRpdW0gbmFtLiBDdW1xdWUgaXBzYVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFzcGVybmF0dXIgZGVzZXJ1bnQsIHJlaWNpZW5kaXMgaWxsbyB2b2x1cHRhdGVtIGluY2lkdW50XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3VzY2lwaXQgcmVtISBWZWxpdCBzYXBpZW50ZSBldmVuaWV0IGV1bSBwYXJpYXR1ciBsaWJlcm8/XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHA+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHROZXNjaXVudCBuZW1vIHF1YXMgbGF1ZGFudGl1bSBhY2N1c2FudGl1bSBuYW0uIEN1bXF1ZSBpcHNhXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YXNwZXJuYXR1ciBkZXNlcnVudCwgcmVpY2llbmRpcyBpbGxvIHZvbHVwdGF0ZW0gaW5jaWR1bnRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdXNjaXBpdCByZW0hIFZlbGl0IHNhcGllbnRlIGV2ZW5pZXQgZXVtIHBhcmlhdHVyIGxpYmVybz9cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3N0X19yaWdodFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3N0X19jb21wYW55LWluZm9cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGgzPlF1aWNrZmFjdHMgb24gSmFjazIxPC9oMz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb21wYW55X19saW5lXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb21wYW55X19saW5lLWxlZnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxHaUxhdXJlbENyb3duIC8+IE93bmVyXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb21wYW55X19saW5lLXJpZ2h0XCI+U29tZWJvZHk8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29tcGFueV9fbGluZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29tcGFueV9fbGluZS1sZWZ0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnNDYWxlbmRhciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Rm91bmRlZFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29tcGFueV9fbGluZS1yaWdodFwiPjIwMjAtMDEtMDE8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29tcGFueV9fbGluZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29tcGFueV9fbGluZS1sZWZ0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8UmlNb25leUV1cm9DaXJjbGVMaW5lIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRNaW4uIGRlcG9zaXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbXBhbnlfX2xpbmUtcmlnaHRcIj7igqwzMDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3N0X19yYXRpbmdcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGgzPldoYXQgd2UgdGhpbmsgYWJvdXQgSmFjazIxPC9oMz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3N0X19yYXRpbmctbGluZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nLWxpbmUtbGVmdFwiPkJvbnVzZXM8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJhdGluZy1saW5lLXJpZ2h0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8QWlUd290b25lU3RhciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fY29udGFjdGZvcm1cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PENvbnRhY3RGb3JtIC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbHN4KFwicG9zdF9fZml4ZWRcIiwgc2hvdyAmJiBcImFjdGl2ZVwiKX0+XHJcblx0XHRcdFx0XHRcdFx0PENhc2lub1dyYXBwZXIgcG9zdD17dHJ1ZX0gcmV2aWV3PXtmYWxzZX0gLz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgcmVmPXtib251c30gY2xhc3NOYW1lPVwidGVzdFwiPjwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9MYXlvdXQ+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==