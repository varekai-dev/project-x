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
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _post_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post.scss */ "./pages/casinos/post.scss");
/* harmony import */ var _post_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_post_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_WebLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/WebLayout */ "./components/WebLayout/index.jsx");
/* harmony import */ var _components_ContactForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/ContactForm */ "./components/ContactForm/index.jsx");
/* harmony import */ var _components_CasinoWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/CasinoWrapper */ "./components/CasinoWrapper/index.jsx");
/* harmony import */ var react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/Ai */ "./node_modules/react-icons/Ai/index.esm.js");
/* harmony import */ var react_icons_Bs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/Bs */ "./node_modules/react-icons/Bs/index.esm.js");
/* harmony import */ var react_icons_Ri__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-icons/Ri */ "./node_modules/react-icons/Ri/index.esm.js");
/* harmony import */ var react_icons_Gi__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-icons/Gi */ "./node_modules/react-icons/Gi/index.esm.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _components_BreadCrumps__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/BreadCrumps */ "./components/BreadCrumps/index.jsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_15__);





var _jsxFileName = "C:\\Users\\varekai\\Documents\\GitHub\\project-x\\frontend\\pages\\casinos\\[pid].js",
    _s = $RefreshSig$();















function Post() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      data = _useState[0],
      setData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      show = _useState2[0],
      handleShow = _useState2[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var name = router.query;
  console.log(router);

  var transitionNavBar = function transitionNavBar() {
    if (window.scrollY > 200) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])( /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
    var response, _data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_15___default.a.get("http://localhost:1337/casinos?title=".concat(name));

          case 3:
            response = _context.sent;
            _context.next = 6;
            return response.data;

          case 6:
            _data = _context.sent;
            setData(_data);
            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  })), []);
  console.log(data);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    window.addEventListener("scroll", transitionNavBar);
    return function () {
      window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_WebLayout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "post",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "post__inner",
          children: data && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: data.map(function (casino) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "post__title",
                  style: {
                    backgroundImage: "url(http://localhost:1337".concat(casino.Overlay.url, ")")
                  },
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "post__title-overlay"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 64,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "post__title-text",
                    children: [" ", casino.title]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 65,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 58,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "post__content",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "post__left",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "post__text",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                          children: ["Opinions on ", casino.title]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 73,
                          columnNumber: 29
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 72,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa aspernatur deserunt, reiciendis illo voluptatem incidunt suscipit rem! Velit sapiente eveniet eum pariatur libero?"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 75,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa aspernatur deserunt, reiciendis illo voluptatem incidunt suscipit rem! Velit sapiente eveniet eum pariatur libero?"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 82,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa aspernatur deserunt, reiciendis illo voluptatem incidunt suscipit rem! Velit sapiente eveniet eum pariatur libero?"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 90,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa aspernatur deserunt, reiciendis illo voluptatem incidunt suscipit rem! Velit sapiente eveniet eum pariatur libero?"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 97,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa aspernatur deserunt, reiciendis illo voluptatem incidunt suscipit rem! Velit sapiente eveniet eum pariatur libero?"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 104,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa aspernatur deserunt, reiciendis illo voluptatem incidunt suscipit rem! Velit sapiente eveniet eum pariatur libero?"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 111,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa aspernatur deserunt, reiciendis illo voluptatem incidunt suscipit rem! Velit sapiente eveniet eum pariatur libero?"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 118,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa aspernatur deserunt, reiciendis illo voluptatem incidunt suscipit rem! Velit sapiente eveniet eum pariatur libero?"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 125,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa aspernatur deserunt, reiciendis illo voluptatem incidunt suscipit rem! Velit sapiente eveniet eum pariatur libero?"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 132,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa aspernatur deserunt, reiciendis illo voluptatem incidunt suscipit rem! Velit sapiente eveniet eum pariatur libero?"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 139,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa aspernatur deserunt, reiciendis illo voluptatem incidunt suscipit rem! Velit sapiente eveniet eum pariatur libero?"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 146,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa aspernatur deserunt, reiciendis illo voluptatem incidunt suscipit rem! Velit sapiente eveniet eum pariatur libero?"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 153,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                        src: "https://images.prismic.io/lucky7bonus/608979d6-3927-4732-b909-393de182ab46_sinscrire_sur_ce_casino.png"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 160,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                          children: ["Games and suppliers at ", casino.title]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 162,
                          columnNumber: 29
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 161,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa aspernatur deserunt, reiciendis illo voluptatem incidunt suscipit rem! Velit sapiente eveniet eum pariatur libero?"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 166,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa aspernatur deserunt, reiciendis illo voluptatem incidunt suscipit rem! Velit sapiente eveniet eum pariatur libero?"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 173,
                        columnNumber: 27
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 71,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 69,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "post__right",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "post__company-info",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                        children: ["Quickfacts on ", casino.title]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 184,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "company__line",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "company__line-left",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Gi__WEBPACK_IMPORTED_MODULE_12__["GiLaurelCrown"], {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 187,
                            columnNumber: 31
                          }, _this), " Owner"]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 186,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "company__line-right",
                          children: "Somebody"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 189,
                          columnNumber: 29
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 185,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "company__line",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "company__line-left",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Bs__WEBPACK_IMPORTED_MODULE_10__["BsCalendar"], {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 193,
                            columnNumber: 31
                          }, _this), "Founded"]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 192,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "company__line-right",
                          children: "2020-01-01"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 196,
                          columnNumber: 29
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 191,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "company__line",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "company__line-left",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ri__WEBPACK_IMPORTED_MODULE_11__["RiMoneyEuroCircleLine"], {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 202,
                            columnNumber: 31
                          }, _this), "Min. deposit"]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 201,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "company__line-right",
                          children: "\u20AC30"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 205,
                          columnNumber: 29
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 200,
                        columnNumber: 27
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 183,
                      columnNumber: 25
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "post__rating",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                        children: ["What we think about ", casino.title]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 209,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "post__rating-line",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "rating-line-left",
                          children: "Bonuses"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 211,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "rating-line-right",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 213,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 214,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 215,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 216,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 217,
                            columnNumber: 31
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 212,
                          columnNumber: 29
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 210,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "post__rating-line",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "rating-line-left",
                          children: "Website"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 221,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "rating-line-right",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 223,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 224,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 225,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 226,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 227,
                            columnNumber: 31
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 222,
                          columnNumber: 29
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 220,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "post__rating-line",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "rating-line-left",
                          children: "Game providers"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 231,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "rating-line-right",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 235,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 236,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 237,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 238,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 239,
                            columnNumber: 31
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 234,
                          columnNumber: 29
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 230,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "post__rating-line",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "rating-line-left",
                          children: "Payment providers"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 243,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "rating-line-right",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 247,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 248,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 249,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 250,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 251,
                            columnNumber: 31
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 246,
                          columnNumber: 29
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 242,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "post__rating-line",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "rating-line-left",
                          children: "Support"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 255,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "rating-line-right",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 257,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 258,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 259,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 260,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 261,
                            columnNumber: 31
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 256,
                          columnNumber: 29
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 254,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "post__rating-global",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          children: "Note global"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 265,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 267,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 268,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 269,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 270,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 271,
                            columnNumber: 31
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 266,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          children: "8.20 / 10"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 273,
                          columnNumber: 29
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 264,
                        columnNumber: 27
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 208,
                      columnNumber: 25
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "post__contactform",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ContactForm__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 278,
                        columnNumber: 27
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 277,
                      columnNumber: 25
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 182,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 68,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: Object(clsx__WEBPACK_IMPORTED_MODULE_13__["default"])("post__fixed", show && "active")
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 282,
                  columnNumber: 21
                }, _this)]
              }, void 0, true);
            })
          }, void 0, false)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 5
  }, this);
}

_s(Post, "KTSDW9ikdJImJR5FI7fOSuZpHts=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FzaW5vcy9bcGlkXS5qcyJdLCJuYW1lcyI6WyJQb3N0IiwidXNlU3RhdGUiLCJkYXRhIiwic2V0RGF0YSIsInNob3ciLCJoYW5kbGVTaG93Iiwicm91dGVyIiwidXNlUm91dGVyIiwibmFtZSIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsInRyYW5zaXRpb25OYXZCYXIiLCJ3aW5kb3ciLCJzY3JvbGxZIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJnZXQiLCJyZXNwb25zZSIsImVycm9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJtYXAiLCJjYXNpbm8iLCJiYWNrZ3JvdW5kSW1hZ2UiLCJPdmVybGF5IiwidXJsIiwidGl0bGUiLCJjbHN4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFDVUMsc0RBQVEsQ0FBQyxJQUFELENBRGxCO0FBQUEsTUFDUEMsSUFETztBQUFBLE1BQ0RDLE9BREM7O0FBQUEsbUJBRWFGLHNEQUFRLENBQUMsS0FBRCxDQUZyQjtBQUFBLE1BRVBHLElBRk87QUFBQSxNQUVEQyxVQUZDOztBQUdkLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQSxNQUFNQyxJQUFJLEdBQUdGLE1BQU0sQ0FBQ0csS0FBcEI7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlMLE1BQVo7O0FBQ0EsTUFBTU0sZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQzdCLFFBQUlDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixHQUFyQixFQUEwQjtBQUN4QlQsZ0JBQVUsQ0FBQyxJQUFELENBQVY7QUFDRCxLQUZELE1BRU87QUFD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O0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBSkYsZUFLRSxxRUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBbENGLGVBOENFO0FBQUssaUNBQVMsRUFBQyxtQkFBZjtBQUFBLGdEQUNFO0FBQUssbUNBQVMsRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FERixlQUVFO0FBQUssbUNBQVMsRUFBQyxtQkFBZjtBQUFBLGtEQUNFLHFFQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBREYsZUFFRSxxRUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQUZGLGVBR0UscUVBQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FIRixlQUlFLHFFQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBSkYsZUFLRSxxRUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBOUNGLGVBd0RFO0FBQUssaUNBQVMsRUFBQyxxQkFBZjtBQUFBLGdEQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQURGLGVBRUU7QUFBQSxrREFDRSxxRUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQURGLGVBRUUscUVBQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FGRixlQUdFLHFFQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBSEYsZUFJRSxxRUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQUpGLGVBS0UscUVBQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBRkYsZUFTRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBeERGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkExQkYsZUErRkU7QUFBSywrQkFBUyxFQUFDLG1CQUFmO0FBQUEsNkNBQ0UscUVBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBL0ZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFsSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVpGLGVBa09FO0FBQUssMkJBQVMsRUFBRUMscURBQUksQ0FBQyxhQUFELEVBQWdCeEIsSUFBSSxJQUFJLFFBQXhCO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBbE9GO0FBQUEsOEJBRFE7QUFBQSxhQUFUO0FBREg7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFzUEQ7O0dBdlJRSixJO1VBR1FPLHFEOzs7S0FIUlAsSTtBQXlSTUEsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FzaW5vcy9bcGlkXS4xMDA3MGM3ODg1MDFkNmM1MDZhMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBcIi4vcG9zdC5zY3NzXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvV2ViTGF5b3V0XCI7XHJcbmltcG9ydCBDb250YWN0Rm9ybSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Db250YWN0Rm9ybVwiO1xyXG5pbXBvcnQgQ2FzaW5vV3JhcHBlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9DYXNpbm9XcmFwcGVyXCI7XHJcbmltcG9ydCB7IEFpVHdvdG9uZVN0YXIgfSBmcm9tIFwicmVhY3QtaWNvbnMvQWlcIjtcclxuaW1wb3J0IHsgQnNDYWxlbmRhciB9IGZyb20gXCJyZWFjdC1pY29ucy9Cc1wiO1xyXG5pbXBvcnQgeyBSaU1vbmV5RXVyb0NpcmNsZUxpbmUgfSBmcm9tIFwicmVhY3QtaWNvbnMvUmlcIjtcclxuaW1wb3J0IHsgR2lMYXVyZWxDcm93biB9IGZyb20gXCJyZWFjdC1pY29ucy9HaVwiO1xyXG5pbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xyXG5pbXBvcnQgQnJlYWRDcnVtcHMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQnJlYWRDcnVtcHNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZnVuY3Rpb24gUG9zdCgpIHtcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbc2hvdywgaGFuZGxlU2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IG5hbWUgPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc29sZS5sb2cocm91dGVyKTtcclxuICBjb25zdCB0cmFuc2l0aW9uTmF2QmFyID0gKCkgPT4ge1xyXG4gICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gMjAwKSB7XHJcbiAgICAgIGhhbmRsZVNob3codHJ1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBoYW5kbGVTaG93KGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgICAgICBgaHR0cDovL2xvY2FsaG9zdDoxMzM3L2Nhc2lub3M/dGl0bGU9JHtuYW1lfWBcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgIHNldERhdGEoZGF0YSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0cmFuc2l0aW9uTmF2QmFyKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRyYW5zaXRpb25OYXZCYXIpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19pbm5lclwiPlxyXG4gICAgICAgICAgICB7ZGF0YSAmJiAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIHtkYXRhLm1hcCgoY2FzaW5vKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxCcmVhZENydW1wcyBuYW1lPXtjYXNpbm8udGl0bGV9IC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBvc3RfX3RpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybChodHRwOi8vbG9jYWxob3N0OjEzMzcke2Nhc2luby5PdmVybGF5LnVybH0pYCxcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X190aXRsZS1vdmVybGF5XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX3RpdGxlLXRleHRcIj4ge2Nhc2luby50aXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX2xlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxDYXNpbm9XcmFwcGVyIHBvc3Q9e3RydWV9IHJldmlldz17ZmFsc2V9IC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX3RleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPk9waW5pb25zIG9uIHtjYXNpbm8udGl0bGV9PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGl0LiBOZXNjaXVudCBuZW1vIHF1YXMgbGF1ZGFudGl1bSBhY2N1c2FudGl1bSBuYW0uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDdW1xdWUgaXBzYSBhc3Blcm5hdHVyIGRlc2VydW50LCByZWljaWVuZGlzIGlsbG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZvbHVwdGF0ZW0gaW5jaWR1bnQgc3VzY2lwaXQgcmVtISBWZWxpdCBzYXBpZW50ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbmlldCBldW0gcGFyaWF0dXIgbGliZXJvP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGl0LiBOZXNjaXVudCBuZW1vIHF1YXMgbGF1ZGFudGl1bSBhY2N1c2FudGl1bSBuYW0uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDdW1xdWUgaXBzYSBhc3Blcm5hdHVyIGRlc2VydW50LCByZWljaWVuZGlzIGlsbG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZvbHVwdGF0ZW0gaW5jaWR1bnQgc3VzY2lwaXQgcmVtISBWZWxpdCBzYXBpZW50ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbmlldCBldW0gcGFyaWF0dXIgbGliZXJvP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxpdC4gTmVzY2l1bnQgbmVtbyBxdWFzIGxhdWRhbnRpdW0gYWNjdXNhbnRpdW0gbmFtLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3VtcXVlIGlwc2EgYXNwZXJuYXR1ciBkZXNlcnVudCwgcmVpY2llbmRpcyBpbGxvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b2x1cHRhdGVtIGluY2lkdW50IHN1c2NpcGl0IHJlbSEgVmVsaXQgc2FwaWVudGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW5pZXQgZXVtIHBhcmlhdHVyIGxpYmVybz9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxpdC4gTmVzY2l1bnQgbmVtbyBxdWFzIGxhdWRhbnRpdW0gYWNjdXNhbnRpdW0gbmFtLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3VtcXVlIGlwc2EgYXNwZXJuYXR1ciBkZXNlcnVudCwgcmVpY2llbmRpcyBpbGxvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b2x1cHRhdGVtIGluY2lkdW50IHN1c2NpcGl0IHJlbSEgVmVsaXQgc2FwaWVudGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW5pZXQgZXVtIHBhcmlhdHVyIGxpYmVybz9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxpdC4gTmVzY2l1bnQgbmVtbyBxdWFzIGxhdWRhbnRpdW0gYWNjdXNhbnRpdW0gbmFtLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3VtcXVlIGlwc2EgYXNwZXJuYXR1ciBkZXNlcnVudCwgcmVpY2llbmRpcyBpbGxvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b2x1cHRhdGVtIGluY2lkdW50IHN1c2NpcGl0IHJlbSEgVmVsaXQgc2FwaWVudGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW5pZXQgZXVtIHBhcmlhdHVyIGxpYmVybz9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxpdC4gTmVzY2l1bnQgbmVtbyBxdWFzIGxhdWRhbnRpdW0gYWNjdXNhbnRpdW0gbmFtLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3VtcXVlIGlwc2EgYXNwZXJuYXR1ciBkZXNlcnVudCwgcmVpY2llbmRpcyBpbGxvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b2x1cHRhdGVtIGluY2lkdW50IHN1c2NpcGl0IHJlbSEgVmVsaXQgc2FwaWVudGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW5pZXQgZXVtIHBhcmlhdHVyIGxpYmVybz9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxpdC4gTmVzY2l1bnQgbmVtbyBxdWFzIGxhdWRhbnRpdW0gYWNjdXNhbnRpdW0gbmFtLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3VtcXVlIGlwc2EgYXNwZXJuYXR1ciBkZXNlcnVudCwgcmVpY2llbmRpcyBpbGxvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b2x1cHRhdGVtIGluY2lkdW50IHN1c2NpcGl0IHJlbSEgVmVsaXQgc2FwaWVudGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW5pZXQgZXVtIHBhcmlhdHVyIGxpYmVybz9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxpdC4gTmVzY2l1bnQgbmVtbyBxdWFzIGxhdWRhbnRpdW0gYWNjdXNhbnRpdW0gbmFtLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3VtcXVlIGlwc2EgYXNwZXJuYXR1ciBkZXNlcnVudCwgcmVpY2llbmRpcyBpbGxvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b2x1cHRhdGVtIGluY2lkdW50IHN1c2NpcGl0IHJlbSEgVmVsaXQgc2FwaWVudGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW5pZXQgZXVtIHBhcmlhdHVyIGxpYmVybz9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxpdC4gTmVzY2l1bnQgbmVtbyBxdWFzIGxhdWRhbnRpdW0gYWNjdXNhbnRpdW0gbmFtLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3VtcXVlIGlwc2EgYXNwZXJuYXR1ciBkZXNlcnVudCwgcmVpY2llbmRpcyBpbGxvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b2x1cHRhdGVtIGluY2lkdW50IHN1c2NpcGl0IHJlbSEgVmVsaXQgc2FwaWVudGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW5pZXQgZXVtIHBhcmlhdHVyIGxpYmVybz9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxpdC4gTmVzY2l1bnQgbmVtbyBxdWFzIGxhdWRhbnRpdW0gYWNjdXNhbnRpdW0gbmFtLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3VtcXVlIGlwc2EgYXNwZXJuYXR1ciBkZXNlcnVudCwgcmVpY2llbmRpcyBpbGxvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b2x1cHRhdGVtIGluY2lkdW50IHN1c2NpcGl0IHJlbSEgVmVsaXQgc2FwaWVudGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW5pZXQgZXVtIHBhcmlhdHVyIGxpYmVybz9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxpdC4gTmVzY2l1bnQgbmVtbyBxdWFzIGxhdWRhbnRpdW0gYWNjdXNhbnRpdW0gbmFtLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3VtcXVlIGlwc2EgYXNwZXJuYXR1ciBkZXNlcnVudCwgcmVpY2llbmRpcyBpbGxvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b2x1cHRhdGVtIGluY2lkdW50IHN1c2NpcGl0IHJlbSEgVmVsaXQgc2FwaWVudGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW5pZXQgZXVtIHBhcmlhdHVyIGxpYmVybz9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxpdC4gTmVzY2l1bnQgbmVtbyBxdWFzIGxhdWRhbnRpdW0gYWNjdXNhbnRpdW0gbmFtLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3VtcXVlIGlwc2EgYXNwZXJuYXR1ciBkZXNlcnVudCwgcmVpY2llbmRpcyBpbGxvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b2x1cHRhdGVtIGluY2lkdW50IHN1c2NpcGl0IHJlbSEgVmVsaXQgc2FwaWVudGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW5pZXQgZXVtIHBhcmlhdHVyIGxpYmVybz9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltYWdlcy5wcmlzbWljLmlvL2x1Y2t5N2JvbnVzLzYwODk3OWQ2LTM5MjctNDczMi1iOTA5LTM5M2RlMTgyYWI0Nl9zaW5zY3JpcmVfc3VyX2NlX2Nhc2luby5wbmdcIj48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHYW1lcyBhbmQgc3VwcGxpZXJzIGF0IHtjYXNpbm8udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsaXQuIE5lc2NpdW50IG5lbW8gcXVhcyBsYXVkYW50aXVtIGFjY3VzYW50aXVtIG5hbS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEN1bXF1ZSBpcHNhIGFzcGVybmF0dXIgZGVzZXJ1bnQsIHJlaWNpZW5kaXMgaWxsb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm9sdXB0YXRlbSBpbmNpZHVudCBzdXNjaXBpdCByZW0hIFZlbGl0IHNhcGllbnRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVuaWV0IGV1bSBwYXJpYXR1ciBsaWJlcm8/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsaXQuIE5lc2NpdW50IG5lbW8gcXVhcyBsYXVkYW50aXVtIGFjY3VzYW50aXVtIG5hbS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEN1bXF1ZSBpcHNhIGFzcGVybmF0dXIgZGVzZXJ1bnQsIHJlaWNpZW5kaXMgaWxsb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm9sdXB0YXRlbSBpbmNpZHVudCBzdXNjaXBpdCByZW0hIFZlbGl0IHNhcGllbnRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVuaWV0IGV1bSBwYXJpYXR1ciBsaWJlcm8/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX2NvbXBhbnktaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5RdWlja2ZhY3RzIG9uIHtjYXNpbm8udGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBhbnlfX2xpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcGFueV9fbGluZS1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHaUxhdXJlbENyb3duIC8+IE93bmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcGFueV9fbGluZS1yaWdodFwiPlNvbWVib2R5PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wYW55X19saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBhbnlfX2xpbmUtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnNDYWxlbmRhciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGb3VuZGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcGFueV9fbGluZS1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMDIwLTAxLTAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBhbnlfX2xpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcGFueV9fbGluZS1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSaU1vbmV5RXVyb0NpcmNsZUxpbmUgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWluLiBkZXBvc2l0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcGFueV9fbGluZS1yaWdodFwiPuKCrDMwPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX3JhdGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5XaGF0IHdlIHRoaW5rIGFib3V0IHtjYXNpbm8udGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX3JhdGluZy1saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZy1saW5lLWxlZnRcIj5Cb251c2VzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZy1saW5lLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBaVR3b3RvbmVTdGFyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBaVR3b3RvbmVTdGFyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBaVR3b3RvbmVTdGFyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBaVR3b3RvbmVTdGFyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBaVR3b3RvbmVTdGFyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX3JhdGluZy1saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZy1saW5lLWxlZnRcIj5XZWJzaXRlPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZy1saW5lLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBaVR3b3RvbmVTdGFyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBaVR3b3RvbmVTdGFyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBaVR3b3RvbmVTdGFyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBaVR3b3RvbmVTdGFyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBaVR3b3RvbmVTdGFyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX3JhdGluZy1saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZy1saW5lLWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR2FtZSBwcm92aWRlcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmctbGluZS1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWlUd290b25lU3RhciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWlUd290b25lU3RhciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWlUd290b25lU3RhciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWlUd290b25lU3RhciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWlUd290b25lU3RhciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19yYXRpbmctbGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmctbGluZS1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBheW1lbnQgcHJvdmlkZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nLWxpbmUtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFpVHdvdG9uZVN0YXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFpVHdvdG9uZVN0YXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFpVHdvdG9uZVN0YXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFpVHdvdG9uZVN0YXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFpVHdvdG9uZVN0YXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fcmF0aW5nLWxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nLWxpbmUtbGVmdFwiPlN1cHBvcnQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nLWxpbmUtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFpVHdvdG9uZVN0YXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFpVHdvdG9uZVN0YXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFpVHdvdG9uZVN0YXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFpVHdvdG9uZVN0YXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFpVHdvdG9uZVN0YXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fcmF0aW5nLWdsb2JhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5Ob3RlIGdsb2JhbDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFpVHdvdG9uZVN0YXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFpVHdvdG9uZVN0YXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFpVHdvdG9uZVN0YXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFpVHdvdG9uZVN0YXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFpVHdvdG9uZVN0YXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj44LjIwIC8gMTA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX2NvbnRhY3Rmb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRhY3RGb3JtIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goXCJwb3N0X19maXhlZFwiLCBzaG93ICYmIFwiYWN0aXZlXCIpfT5cclxuICAgICAgICAgICAgICAgICAgICAgIHsvKiA8Q2FzaW5vV3JhcHBlciBwb3N0PXt0cnVlfSByZXZpZXc9e2ZhbHNlfSAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=