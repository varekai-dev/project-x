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
/* harmony import */ var _components_ContactForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ContactForm */ "./components/ContactForm/index.jsx");
/* harmony import */ var _components_CasinoWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/CasinoWrapper */ "./components/CasinoWrapper/index.jsx");
/* harmony import */ var react_icons_Ai__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/Ai */ "./node_modules/react-icons/Ai/index.esm.js");
/* harmony import */ var react_icons_Bs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/Bs */ "./node_modules/react-icons/Bs/index.esm.js");
/* harmony import */ var react_icons_Ri__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/Ri */ "./node_modules/react-icons/Ri/index.esm.js");
/* harmony import */ var react_icons_Gi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/Gi */ "./node_modules/react-icons/Gi/index.esm.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _components_BreadCrumps__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/BreadCrumps */ "./components/BreadCrumps/index.jsx");


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
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_BreadCrumps__WEBPACK_IMPORTED_MODULE_12__["default"], {
            href: "/casinos",
            second: "Casinos"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "post__title",
            style: {
              backgroundImage: "url(https://images.prismic.io/lucky7bonus/65d473f5-4b87-4752-929d-1f3fcb56aa72_BG_Podium-tournoi+copie.jpg)"
            },
            children: pid
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "post__content",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "post__left",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CasinoWrapper__WEBPACK_IMPORTED_MODULE_6__["default"], {
                post: true,
                review: false
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 9
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "post__text",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                    children: "Opinions on Jack21"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 54,
                    columnNumber: 11
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 53,
                  columnNumber: 10
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa aspernatur deserunt, reiciendis illo voluptatem incidunt suscipit rem! Velit sapiente eveniet eum pariatur libero?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 56,
                  columnNumber: 10
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa aspernatur deserunt, reiciendis illo voluptatem incidunt suscipit rem! Velit sapiente eveniet eum pariatur libero?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 62,
                  columnNumber: 10
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa aspernatur deserunt, reiciendis illo voluptatem incidunt suscipit rem! Velit sapiente eveniet eum pariatur libero?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 69,
                  columnNumber: 10
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa aspernatur deserunt, reiciendis illo voluptatem incidunt suscipit rem! Velit sapiente eveniet eum pariatur libero?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 75,
                  columnNumber: 10
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa aspernatur deserunt, reiciendis illo voluptatem incidunt suscipit rem! Velit sapiente eveniet eum pariatur libero?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 81,
                  columnNumber: 10
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa aspernatur deserunt, reiciendis illo voluptatem incidunt suscipit rem! Velit sapiente eveniet eum pariatur libero?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 87,
                  columnNumber: 10
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa aspernatur deserunt, reiciendis illo voluptatem incidunt suscipit rem! Velit sapiente eveniet eum pariatur libero?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 93,
                  columnNumber: 10
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa aspernatur deserunt, reiciendis illo voluptatem incidunt suscipit rem! Velit sapiente eveniet eum pariatur libero?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 99,
                  columnNumber: 10
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa aspernatur deserunt, reiciendis illo voluptatem incidunt suscipit rem! Velit sapiente eveniet eum pariatur libero?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 105,
                  columnNumber: 10
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa aspernatur deserunt, reiciendis illo voluptatem incidunt suscipit rem! Velit sapiente eveniet eum pariatur libero?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 111,
                  columnNumber: 10
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa aspernatur deserunt, reiciendis illo voluptatem incidunt suscipit rem! Velit sapiente eveniet eum pariatur libero?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 117,
                  columnNumber: 10
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa aspernatur deserunt, reiciendis illo voluptatem incidunt suscipit rem! Velit sapiente eveniet eum pariatur libero?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 123,
                  columnNumber: 10
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: "https://images.prismic.io/lucky7bonus/608979d6-3927-4732-b909-393de182ab46_sinscrire_sur_ce_casino.png",
                  alt: "s'inscrire sur Jack21"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 129,
                  columnNumber: 10
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                    children: "Games and suppliers at Jack21"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 134,
                    columnNumber: 11
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 133,
                  columnNumber: 10
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa aspernatur deserunt, reiciendis illo voluptatem incidunt suscipit rem! Velit sapiente eveniet eum pariatur libero?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 136,
                  columnNumber: 10
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa aspernatur deserunt, reiciendis illo voluptatem incidunt suscipit rem! Velit sapiente eveniet eum pariatur libero?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 142,
                  columnNumber: 10
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 9
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 8
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "post__right",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "post__company-info",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                  children: "Quickfacts on Jack21"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 152,
                  columnNumber: 10
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "company__line",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "company__line-left",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Gi__WEBPACK_IMPORTED_MODULE_10__["GiLaurelCrown"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 155,
                      columnNumber: 12
                    }, this), " Owner"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 154,
                    columnNumber: 11
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "company__line-right",
                    children: "Somebody"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 157,
                    columnNumber: 11
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 153,
                  columnNumber: 10
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "company__line",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "company__line-left",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Bs__WEBPACK_IMPORTED_MODULE_8__["BsCalendar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 161,
                      columnNumber: 12
                    }, this), "Founded"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 160,
                    columnNumber: 11
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "company__line-right",
                    children: "2020-01-01"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 164,
                    columnNumber: 11
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 159,
                  columnNumber: 10
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "company__line",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "company__line-left",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ri__WEBPACK_IMPORTED_MODULE_9__["RiMoneyEuroCircleLine"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 168,
                      columnNumber: 12
                    }, this), "Min. deposit"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 167,
                    columnNumber: 11
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "company__line-right",
                    children: "\u20AC30"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 171,
                    columnNumber: 11
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 166,
                  columnNumber: 10
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 151,
                columnNumber: 9
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "post__rating",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                  children: ["What we think about ", pid]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 175,
                  columnNumber: 10
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "post__rating-line",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "rating-line-left",
                    children: "Bonuses"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 177,
                    columnNumber: 11
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "rating-line-right",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_7__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 179,
                      columnNumber: 12
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_7__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 180,
                      columnNumber: 12
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_7__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 181,
                      columnNumber: 12
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_7__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 182,
                      columnNumber: 12
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_7__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 183,
                      columnNumber: 12
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 178,
                    columnNumber: 11
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 176,
                  columnNumber: 10
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "post__rating-line",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "rating-line-left",
                    children: "Website"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 187,
                    columnNumber: 11
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "rating-line-right",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_7__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 189,
                      columnNumber: 12
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_7__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 190,
                      columnNumber: 12
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_7__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 191,
                      columnNumber: 12
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_7__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 192,
                      columnNumber: 12
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_7__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 193,
                      columnNumber: 12
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 188,
                    columnNumber: 11
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 186,
                  columnNumber: 10
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "post__rating-line",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "rating-line-left",
                    children: "Game providers"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 197,
                    columnNumber: 11
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "rating-line-right",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_7__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 199,
                      columnNumber: 12
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_7__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 200,
                      columnNumber: 12
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_7__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 201,
                      columnNumber: 12
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_7__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 202,
                      columnNumber: 12
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_7__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 203,
                      columnNumber: 12
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 198,
                    columnNumber: 11
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 196,
                  columnNumber: 10
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "post__rating-line",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "rating-line-left",
                    children: "Payment providers"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 207,
                    columnNumber: 11
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "rating-line-right",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_7__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 209,
                      columnNumber: 12
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_7__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 210,
                      columnNumber: 12
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_7__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 211,
                      columnNumber: 12
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_7__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 212,
                      columnNumber: 12
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_7__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 213,
                      columnNumber: 12
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 208,
                    columnNumber: 11
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 206,
                  columnNumber: 10
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "post__rating-line",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "rating-line-left",
                    children: "Support"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 217,
                    columnNumber: 11
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "rating-line-right",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_7__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 219,
                      columnNumber: 12
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_7__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 220,
                      columnNumber: 12
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_7__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 221,
                      columnNumber: 12
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_7__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 222,
                      columnNumber: 12
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_7__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 223,
                      columnNumber: 12
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 218,
                    columnNumber: 11
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 216,
                  columnNumber: 10
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "post__rating-global",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    children: "Note global"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 227,
                    columnNumber: 11
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_7__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 229,
                      columnNumber: 12
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_7__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 230,
                      columnNumber: 12
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_7__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 231,
                      columnNumber: 12
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_7__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 232,
                      columnNumber: 12
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_7__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 233,
                      columnNumber: 12
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 228,
                    columnNumber: 11
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    children: "8.20 / 10"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 235,
                    columnNumber: 11
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 226,
                  columnNumber: 10
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 174,
                columnNumber: 9
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "post__contactform",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ContactForm__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 240,
                  columnNumber: 10
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 239,
                columnNumber: 9
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 150,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: Object(clsx__WEBPACK_IMPORTED_MODULE_11__["default"])("post__fixed", show && "active"),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CasinoWrapper__WEBPACK_IMPORTED_MODULE_6__["default"], {
              post: true,
              review: false
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 245,
              columnNumber: 8
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 244,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            ref: bonus,
            className: "test"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 247,
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
      lineNumber: 36,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FzaW5vcy9bcGlkXS5qcyJdLCJuYW1lcyI6WyJQb3N0IiwiYm9udXMiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInNob3ciLCJoYW5kbGVTaG93IiwidHJhbnNpdGlvbk5hdkJhciIsIndpbmRvdyIsInNjcm9sbFkiLCJ1c2VFZmZlY3QiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJvdXRlciIsInVzZVJvdXRlciIsInBpZCIsInF1ZXJ5IiwiYmFja2dyb3VuZEltYWdlIiwiY2xzeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFDZixNQUFNQyxLQUFLLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUFwQixDQURlLENBRWY7QUFDQTs7QUFIZSxrQkFJWUMsc0RBQVEsQ0FBQyxLQUFELENBSnBCO0FBQUEsTUFJUkMsSUFKUTtBQUFBLE1BSUZDLFVBSkU7O0FBS2YsTUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQzlCLFFBQUlDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixHQUFyQixFQUEwQjtBQUN6QkgsZ0JBQVUsQ0FBQyxJQUFELENBQVY7QUFDQSxLQUZELE1BRU87QUFDTkEsZ0JBQVUsQ0FBQyxLQUFELENBQVY7QUFDQTtBQUNELEdBTkQ7O0FBT0FJLHlEQUFTLENBQUMsWUFBTTtBQUNmRixVQUFNLENBQUNHLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDSixnQkFBbEM7QUFDQSxXQUFPLFlBQU07QUFDWkMsWUFBTSxDQUFDSSxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ0wsZ0JBQXJDO0FBQ0EsS0FGRDtBQUdBLEdBTFEsRUFLTixFQUxNLENBQVQ7QUFNQSxNQUFNTSxN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QTtBQUFBO0FBQUE7QUFBQSx3QkF0QkQsZUFnQ0M7QUFBSywyQkFBUyxFQUFDLG1CQUFmO0FBQUEsMENBQ0M7QUFBSyw2QkFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURELGVBRUM7QUFBSyw2QkFBUyxFQUFDLG1CQUFmO0FBQUEsNENBQ0MscUVBQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFERCxlQUVDLHFFQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBRkQsZUFHQyxxRUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUhELGVBSUMscUVBQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFKRCxlQUtDLHFFQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFoQ0QsZUEwQ0M7QUFBSywyQkFBUyxFQUFDLG1CQUFmO0FBQUEsMENBQ0M7QUFBSyw2QkFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURELGVBRUM7QUFBSyw2QkFBUyxFQUFDLG1CQUFmO0FBQUEsNENBQ0MscUVBQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFERCxlQUVDLHFFQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBRkQsZUFHQyxxRUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUhELGVBSUMscUVBQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFKRCxlQUtDLHFFQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkExQ0QsZUFvREM7QUFBSywyQkFBUyxFQUFDLHFCQUFmO0FBQUEsMENBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREQsZUFFQztBQUFBLDRDQUNDLHFFQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBREQsZUFFQyxxRUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUZELGVBR0MscUVBQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFIRCxlQUlDLHFFQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBSkQsZUFLQyxxRUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFGRCxlQVNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQVREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFwREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQXhCRCxlQXlGQztBQUFLLHlCQUFTLEVBQUMsbUJBQWY7QUFBQSx1Q0FDQyxxRUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkF6RkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQXJHRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBWEQsZUE4TUM7QUFBSyxxQkFBUyxFQUFFRyxxREFBSSxDQUFDLGFBQUQsRUFBZ0JiLElBQUksSUFBSSxRQUF4QixDQUFwQjtBQUFBLG1DQUNDLHFFQUFDLGlFQUFEO0FBQWUsa0JBQUksRUFBRSxJQUFyQjtBQUEyQixvQkFBTSxFQUFFO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQTlNRCxlQWlOQztBQUFLLGVBQUcsRUFBRUgsS0FBVjtBQUFpQixxQkFBUyxFQUFDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBak5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBMk5BOztHQS9PUUQsSTtVQWtCT2EscUQ7OztLQWxCUGIsSTtBQWlQTUEsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FzaW5vcy9bcGlkXS4xNzc1M2I4MmRhMzNjZjExODgxZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFwiLi9wb3N0LnNjc3NcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9XZWJMYXlvdXRcIjtcclxuaW1wb3J0IENvbnRhY3RGb3JtIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0NvbnRhY3RGb3JtXCI7XHJcbmltcG9ydCBDYXNpbm9XcmFwcGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0Nhc2lub1dyYXBwZXJcIjtcclxuaW1wb3J0IHsgQWlUd290b25lU3RhciB9IGZyb20gXCJyZWFjdC1pY29ucy9BaVwiO1xyXG5pbXBvcnQgeyBCc0NhbGVuZGFyIH0gZnJvbSBcInJlYWN0LWljb25zL0JzXCI7XHJcbmltcG9ydCB7IFJpTW9uZXlFdXJvQ2lyY2xlTGluZSB9IGZyb20gXCJyZWFjdC1pY29ucy9SaVwiO1xyXG5pbXBvcnQgeyBHaUxhdXJlbENyb3duIH0gZnJvbSBcInJlYWN0LWljb25zL0dpXCI7XHJcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XHJcbmltcG9ydCBCcmVhZENydW1wcyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9CcmVhZENydW1wc1wiO1xyXG5cclxuZnVuY3Rpb24gUG9zdCgpIHtcclxuXHRjb25zdCBib251cyA9IHVzZVJlZihudWxsKTtcclxuXHQvLyBjb25zdCBkaXN0YW5jZSA9IGJvbnVzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdC8vIGNvbnNvbGUubG9nKGRpc3RhbmNlKTtcclxuXHRjb25zdCBbc2hvdywgaGFuZGxlU2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgdHJhbnNpdGlvbk5hdkJhciA9ICgpID0+IHtcclxuXHRcdGlmICh3aW5kb3cuc2Nyb2xsWSA+IDIwMCkge1xyXG5cdFx0XHRoYW5kbGVTaG93KHRydWUpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aGFuZGxlU2hvdyhmYWxzZSk7XHJcblx0XHR9XHJcblx0fTtcclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdHJhbnNpdGlvbk5hdkJhcik7XHJcblx0XHRyZXR1cm4gKCkgPT4ge1xyXG5cdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0cmFuc2l0aW9uTmF2QmFyKTtcclxuXHRcdH07XHJcblx0fSwgW10pO1xyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cdGNvbnN0IHsgcGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcblx0cmV0dXJuIChcclxuXHRcdDxMYXlvdXQ+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9zdFwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX2lubmVyXCI+XHJcblx0XHRcdFx0XHRcdDxCcmVhZENydW1wcyBocmVmPVwiL2Nhc2lub3NcIiBzZWNvbmQ9XCJDYXNpbm9zXCIgLz5cclxuXHRcdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInBvc3RfX3RpdGxlXCJcclxuXHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZEltYWdlOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcInVybChodHRwczovL2ltYWdlcy5wcmlzbWljLmlvL2x1Y2t5N2JvbnVzLzY1ZDQ3M2Y1LTRiODctNDc1Mi05MjlkLTFmM2ZjYjU2YWE3Ml9CR19Qb2RpdW0tdG91cm5vaStjb3BpZS5qcGcpXCIsXHJcblx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdHtwaWR9XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX2NvbnRlbnRcIj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX2xlZnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxDYXNpbm9XcmFwcGVyIHBvc3Q9e3RydWV9IHJldmlldz17ZmFsc2V9IC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX3RleHRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGgxPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzdHJvbmc+T3BpbmlvbnMgb24gSmFjazIxPC9zdHJvbmc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvaDE+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxwPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0TmVzY2l1bnQgbmVtbyBxdWFzIGxhdWRhbnRpdW0gYWNjdXNhbnRpdW0gbmFtLiBDdW1xdWUgaXBzYVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFzcGVybmF0dXIgZGVzZXJ1bnQsIHJlaWNpZW5kaXMgaWxsbyB2b2x1cHRhdGVtIGluY2lkdW50XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3VzY2lwaXQgcmVtISBWZWxpdCBzYXBpZW50ZSBldmVuaWV0IGV1bSBwYXJpYXR1ciBsaWJlcm8/XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHA+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHROZXNjaXVudCBuZW1vIHF1YXMgbGF1ZGFudGl1bSBhY2N1c2FudGl1bSBuYW0uIEN1bXF1ZSBpcHNhXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YXNwZXJuYXR1ciBkZXNlcnVudCwgcmVpY2llbmRpcyBpbGxvIHZvbHVwdGF0ZW0gaW5jaWR1bnRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdXNjaXBpdCByZW0hIFZlbGl0IHNhcGllbnRlIGV2ZW5pZXQgZXVtIHBhcmlhdHVyIGxpYmVybz9cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHA+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHROZXNjaXVudCBuZW1vIHF1YXMgbGF1ZGFudGl1bSBhY2N1c2FudGl1bSBuYW0uIEN1bXF1ZSBpcHNhXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YXNwZXJuYXR1ciBkZXNlcnVudCwgcmVpY2llbmRpcyBpbGxvIHZvbHVwdGF0ZW0gaW5jaWR1bnRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdXNjaXBpdCByZW0hIFZlbGl0IHNhcGllbnRlIGV2ZW5pZXQgZXVtIHBhcmlhdHVyIGxpYmVybz9cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8cD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdE5lc2NpdW50IG5lbW8gcXVhcyBsYXVkYW50aXVtIGFjY3VzYW50aXVtIG5hbS4gQ3VtcXVlIGlwc2FcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhc3Blcm5hdHVyIGRlc2VydW50LCByZWljaWVuZGlzIGlsbG8gdm9sdXB0YXRlbSBpbmNpZHVudFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN1c2NpcGl0IHJlbSEgVmVsaXQgc2FwaWVudGUgZXZlbmlldCBldW0gcGFyaWF0dXIgbGliZXJvP1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxwPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0TmVzY2l1bnQgbmVtbyBxdWFzIGxhdWRhbnRpdW0gYWNjdXNhbnRpdW0gbmFtLiBDdW1xdWUgaXBzYVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFzcGVybmF0dXIgZGVzZXJ1bnQsIHJlaWNpZW5kaXMgaWxsbyB2b2x1cHRhdGVtIGluY2lkdW50XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3VzY2lwaXQgcmVtISBWZWxpdCBzYXBpZW50ZSBldmVuaWV0IGV1bSBwYXJpYXR1ciBsaWJlcm8/XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHA+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHROZXNjaXVudCBuZW1vIHF1YXMgbGF1ZGFudGl1bSBhY2N1c2FudGl1bSBuYW0uIEN1bXF1ZSBpcHNhXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YXNwZXJuYXR1ciBkZXNlcnVudCwgcmVpY2llbmRpcyBpbGxvIHZvbHVwdGF0ZW0gaW5jaWR1bnRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdXNjaXBpdCByZW0hIFZlbGl0IHNhcGllbnRlIGV2ZW5pZXQgZXVtIHBhcmlhdHVyIGxpYmVybz9cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8cD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdE5lc2NpdW50IG5lbW8gcXVhcyBsYXVkYW50aXVtIGFjY3VzYW50aXVtIG5hbS4gQ3VtcXVlIGlwc2FcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhc3Blcm5hdHVyIGRlc2VydW50LCByZWljaWVuZGlzIGlsbG8gdm9sdXB0YXRlbSBpbmNpZHVudFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN1c2NpcGl0IHJlbSEgVmVsaXQgc2FwaWVudGUgZXZlbmlldCBldW0gcGFyaWF0dXIgbGliZXJvP1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxwPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0TmVzY2l1bnQgbmVtbyBxdWFzIGxhdWRhbnRpdW0gYWNjdXNhbnRpdW0gbmFtLiBDdW1xdWUgaXBzYVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFzcGVybmF0dXIgZGVzZXJ1bnQsIHJlaWNpZW5kaXMgaWxsbyB2b2x1cHRhdGVtIGluY2lkdW50XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3VzY2lwaXQgcmVtISBWZWxpdCBzYXBpZW50ZSBldmVuaWV0IGV1bSBwYXJpYXR1ciBsaWJlcm8/XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHA+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHROZXNjaXVudCBuZW1vIHF1YXMgbGF1ZGFudGl1bSBhY2N1c2FudGl1bSBuYW0uIEN1bXF1ZSBpcHNhXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YXNwZXJuYXR1ciBkZXNlcnVudCwgcmVpY2llbmRpcyBpbGxvIHZvbHVwdGF0ZW0gaW5jaWR1bnRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdXNjaXBpdCByZW0hIFZlbGl0IHNhcGllbnRlIGV2ZW5pZXQgZXVtIHBhcmlhdHVyIGxpYmVybz9cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8cD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdE5lc2NpdW50IG5lbW8gcXVhcyBsYXVkYW50aXVtIGFjY3VzYW50aXVtIG5hbS4gQ3VtcXVlIGlwc2FcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhc3Blcm5hdHVyIGRlc2VydW50LCByZWljaWVuZGlzIGlsbG8gdm9sdXB0YXRlbSBpbmNpZHVudFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN1c2NpcGl0IHJlbSEgVmVsaXQgc2FwaWVudGUgZXZlbmlldCBldW0gcGFyaWF0dXIgbGliZXJvP1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxwPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0TmVzY2l1bnQgbmVtbyBxdWFzIGxhdWRhbnRpdW0gYWNjdXNhbnRpdW0gbmFtLiBDdW1xdWUgaXBzYVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFzcGVybmF0dXIgZGVzZXJ1bnQsIHJlaWNpZW5kaXMgaWxsbyB2b2x1cHRhdGVtIGluY2lkdW50XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3VzY2lwaXQgcmVtISBWZWxpdCBzYXBpZW50ZSBldmVuaWV0IGV1bSBwYXJpYXR1ciBsaWJlcm8/XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHA+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHROZXNjaXVudCBuZW1vIHF1YXMgbGF1ZGFudGl1bSBhY2N1c2FudGl1bSBuYW0uIEN1bXF1ZSBpcHNhXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YXNwZXJuYXR1ciBkZXNlcnVudCwgcmVpY2llbmRpcyBpbGxvIHZvbHVwdGF0ZW0gaW5jaWR1bnRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdXNjaXBpdCByZW0hIFZlbGl0IHNhcGllbnRlIGV2ZW5pZXQgZXVtIHBhcmlhdHVyIGxpYmVybz9cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3JjPVwiaHR0cHM6Ly9pbWFnZXMucHJpc21pYy5pby9sdWNreTdib251cy82MDg5NzlkNi0zOTI3LTQ3MzItYjkwOS0zOTNkZTE4MmFiNDZfc2luc2NyaXJlX3N1cl9jZV9jYXNpbm8ucG5nXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ9XCJzJ2luc2NyaXJlIHN1ciBKYWNrMjFcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ+PC9pbWc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxoMj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Ryb25nPkdhbWVzIGFuZCBzdXBwbGllcnMgYXQgSmFjazIxPC9zdHJvbmc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvaDI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxwPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0TmVzY2l1bnQgbmVtbyBxdWFzIGxhdWRhbnRpdW0gYWNjdXNhbnRpdW0gbmFtLiBDdW1xdWUgaXBzYVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFzcGVybmF0dXIgZGVzZXJ1bnQsIHJlaWNpZW5kaXMgaWxsbyB2b2x1cHRhdGVtIGluY2lkdW50XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3VzY2lwaXQgcmVtISBWZWxpdCBzYXBpZW50ZSBldmVuaWV0IGV1bSBwYXJpYXR1ciBsaWJlcm8/XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHA+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHROZXNjaXVudCBuZW1vIHF1YXMgbGF1ZGFudGl1bSBhY2N1c2FudGl1bSBuYW0uIEN1bXF1ZSBpcHNhXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YXNwZXJuYXR1ciBkZXNlcnVudCwgcmVpY2llbmRpcyBpbGxvIHZvbHVwdGF0ZW0gaW5jaWR1bnRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdXNjaXBpdCByZW0hIFZlbGl0IHNhcGllbnRlIGV2ZW5pZXQgZXVtIHBhcmlhdHVyIGxpYmVybz9cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3N0X19yaWdodFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3N0X19jb21wYW55LWluZm9cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGgzPlF1aWNrZmFjdHMgb24gSmFjazIxPC9oMz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb21wYW55X19saW5lXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb21wYW55X19saW5lLWxlZnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxHaUxhdXJlbENyb3duIC8+IE93bmVyXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb21wYW55X19saW5lLXJpZ2h0XCI+U29tZWJvZHk8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29tcGFueV9fbGluZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29tcGFueV9fbGluZS1sZWZ0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnNDYWxlbmRhciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Rm91bmRlZFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29tcGFueV9fbGluZS1yaWdodFwiPjIwMjAtMDEtMDE8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29tcGFueV9fbGluZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29tcGFueV9fbGluZS1sZWZ0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8UmlNb25leUV1cm9DaXJjbGVMaW5lIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRNaW4uIGRlcG9zaXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbXBhbnlfX2xpbmUtcmlnaHRcIj7igqwzMDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3N0X19yYXRpbmdcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGgzPldoYXQgd2UgdGhpbmsgYWJvdXQge3BpZH08L2gzPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX3JhdGluZy1saW5lXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyYXRpbmctbGluZS1sZWZ0XCI+Qm9udXNlczwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nLWxpbmUtcmlnaHRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxBaVR3b3RvbmVTdGFyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8QWlUd290b25lU3RhciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEFpVHdvdG9uZVN0YXIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxBaVR3b3RvbmVTdGFyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8QWlUd290b25lU3RhciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3N0X19yYXRpbmctbGluZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nLWxpbmUtbGVmdFwiPldlYnNpdGU8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJhdGluZy1saW5lLXJpZ2h0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8QWlUd290b25lU3RhciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEFpVHdvdG9uZVN0YXIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxBaVR3b3RvbmVTdGFyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8QWlUd290b25lU3RhciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEFpVHdvdG9uZVN0YXIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fcmF0aW5nLWxpbmVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJhdGluZy1saW5lLWxlZnRcIj5HYW1lIHByb3ZpZGVyczwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nLWxpbmUtcmlnaHRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxBaVR3b3RvbmVTdGFyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8QWlUd290b25lU3RhciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEFpVHdvdG9uZVN0YXIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxBaVR3b3RvbmVTdGFyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8QWlUd290b25lU3RhciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3N0X19yYXRpbmctbGluZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nLWxpbmUtbGVmdFwiPlBheW1lbnQgcHJvdmlkZXJzPC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyYXRpbmctbGluZS1yaWdodFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEFpVHdvdG9uZVN0YXIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxBaVR3b3RvbmVTdGFyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8QWlUd290b25lU3RhciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEFpVHdvdG9uZVN0YXIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxBaVR3b3RvbmVTdGFyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX3JhdGluZy1saW5lXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyYXRpbmctbGluZS1sZWZ0XCI+U3VwcG9ydDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nLWxpbmUtcmlnaHRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxBaVR3b3RvbmVTdGFyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8QWlUd290b25lU3RhciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEFpVHdvdG9uZVN0YXIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxBaVR3b3RvbmVTdGFyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8QWlUd290b25lU3RhciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3N0X19yYXRpbmctZ2xvYmFsXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdj5Ob3RlIGdsb2JhbDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8QWlUd290b25lU3RhciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEFpVHdvdG9uZVN0YXIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxBaVR3b3RvbmVTdGFyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8QWlUd290b25lU3RhciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEFpVHdvdG9uZVN0YXIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2PjguMjAgLyAxMDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fY29udGFjdGZvcm1cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PENvbnRhY3RGb3JtIC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbHN4KFwicG9zdF9fZml4ZWRcIiwgc2hvdyAmJiBcImFjdGl2ZVwiKX0+XHJcblx0XHRcdFx0XHRcdFx0PENhc2lub1dyYXBwZXIgcG9zdD17dHJ1ZX0gcmV2aWV3PXtmYWxzZX0gLz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgcmVmPXtib251c30gY2xhc3NOYW1lPVwidGVzdFwiPjwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9MYXlvdXQ+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==