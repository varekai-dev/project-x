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
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _post_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post.scss */ "./pages/casinos/post.scss");
/* harmony import */ var _post_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_post_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_WebLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/WebLayout */ "./components/WebLayout/index.jsx");
/* harmony import */ var _components_ContactForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/ContactForm */ "./components/ContactForm/index.jsx");
/* harmony import */ var _components_CasinoWrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/CasinoWrapper */ "./components/CasinoWrapper/index.jsx");
/* harmony import */ var react_icons_Ai__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/Ai */ "./node_modules/react-icons/Ai/index.esm.js");
/* harmony import */ var react_icons_Bs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-icons/Bs */ "./node_modules/react-icons/Bs/index.esm.js");
/* harmony import */ var react_icons_Ri__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-icons/Ri */ "./node_modules/react-icons/Ri/index.esm.js");
/* harmony import */ var react_icons_Gi__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-icons/Gi */ "./node_modules/react-icons/Gi/index.esm.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _components_BreadCrumps__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/BreadCrumps */ "./components/BreadCrumps/index.jsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_16__);






var _jsxFileName = "C:\\Users\\varekai\\Documents\\GitHub\\project-x\\frontend\\pages\\casinos\\[pid].js",
    _s = $RefreshSig$();















function Post() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      data = _useState[0],
      setData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      show = _useState2[0],
      handleShow = _useState2[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  var name = router.query.pid;
  console.log(router);

  var transitionNavBar = function transitionNavBar() {
    if (window.scrollY > 200) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])( /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
    var response, _data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_16___default.a.get("http://localhost:1337/casinos/".concat(name));

          case 3:
            response = _context.sent;
            _context.next = 6;
            return response.data;

          case 6:
            _data = _context.sent;
            setData(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_data));
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
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    window.addEventListener("scroll", transitionNavBar);
    return function () {
      window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_WebLayout__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
                    lineNumber: 62,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "post__title-text",
                    children: [" ", casino.title]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 63,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 56,
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
                          lineNumber: 71,
                          columnNumber: 29
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 70,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa aspernatur deserunt, reiciendis illo voluptatem incidunt suscipit rem! Velit sapiente eveniet eum pariatur libero?"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 73,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa aspernatur deserunt, reiciendis illo voluptatem incidunt suscipit rem! Velit sapiente eveniet eum pariatur libero?"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 80,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa aspernatur deserunt, reiciendis illo voluptatem incidunt suscipit rem! Velit sapiente eveniet eum pariatur libero?"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 88,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa aspernatur deserunt, reiciendis illo voluptatem incidunt suscipit rem! Velit sapiente eveniet eum pariatur libero?"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 95,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa aspernatur deserunt, reiciendis illo voluptatem incidunt suscipit rem! Velit sapiente eveniet eum pariatur libero?"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 102,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa aspernatur deserunt, reiciendis illo voluptatem incidunt suscipit rem! Velit sapiente eveniet eum pariatur libero?"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 109,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa aspernatur deserunt, reiciendis illo voluptatem incidunt suscipit rem! Velit sapiente eveniet eum pariatur libero?"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 116,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa aspernatur deserunt, reiciendis illo voluptatem incidunt suscipit rem! Velit sapiente eveniet eum pariatur libero?"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 123,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa aspernatur deserunt, reiciendis illo voluptatem incidunt suscipit rem! Velit sapiente eveniet eum pariatur libero?"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 130,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa aspernatur deserunt, reiciendis illo voluptatem incidunt suscipit rem! Velit sapiente eveniet eum pariatur libero?"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 137,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa aspernatur deserunt, reiciendis illo voluptatem incidunt suscipit rem! Velit sapiente eveniet eum pariatur libero?"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 144,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa aspernatur deserunt, reiciendis illo voluptatem incidunt suscipit rem! Velit sapiente eveniet eum pariatur libero?"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 151,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                        src: "https://images.prismic.io/lucky7bonus/608979d6-3927-4732-b909-393de182ab46_sinscrire_sur_ce_casino.png"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 158,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                          children: ["Games and suppliers at ", casino.title]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 160,
                          columnNumber: 29
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 159,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa aspernatur deserunt, reiciendis illo voluptatem incidunt suscipit rem! Velit sapiente eveniet eum pariatur libero?"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 164,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nemo quas laudantium accusantium nam. Cumque ipsa aspernatur deserunt, reiciendis illo voluptatem incidunt suscipit rem! Velit sapiente eveniet eum pariatur libero?"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 171,
                        columnNumber: 27
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 69,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 67,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "post__right",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "post__company-info",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                        children: ["Quickfacts on ", casino.title]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 182,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "company__line",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "company__line-left",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Gi__WEBPACK_IMPORTED_MODULE_13__["GiLaurelCrown"], {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 185,
                            columnNumber: 31
                          }, _this), " Owner"]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 184,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "company__line-right",
                          children: "Somebody"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 187,
                          columnNumber: 29
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 183,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "company__line",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "company__line-left",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Bs__WEBPACK_IMPORTED_MODULE_11__["BsCalendar"], {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 191,
                            columnNumber: 31
                          }, _this), "Founded"]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 190,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "company__line-right",
                          children: "2020-01-01"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 194,
                          columnNumber: 29
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 189,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "company__line",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "company__line-left",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ri__WEBPACK_IMPORTED_MODULE_12__["RiMoneyEuroCircleLine"], {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 200,
                            columnNumber: 31
                          }, _this), "Min. deposit"]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 199,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "company__line-right",
                          children: "\u20AC30"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 203,
                          columnNumber: 29
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 198,
                        columnNumber: 27
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 181,
                      columnNumber: 25
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "post__rating",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                        children: ["What we think about ", casino.title]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 207,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "post__rating-line",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "rating-line-left",
                          children: "Bonuses"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 209,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "rating-line-right",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_10__["AiTwotoneStar"], {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 211,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_10__["AiTwotoneStar"], {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 212,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_10__["AiTwotoneStar"], {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 213,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_10__["AiTwotoneStar"], {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 214,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_10__["AiTwotoneStar"], {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 215,
                            columnNumber: 31
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 210,
                          columnNumber: 29
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 208,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "post__rating-line",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "rating-line-left",
                          children: "Website"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 219,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "rating-line-right",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_10__["AiTwotoneStar"], {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 221,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_10__["AiTwotoneStar"], {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 222,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_10__["AiTwotoneStar"], {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 223,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_10__["AiTwotoneStar"], {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 224,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_10__["AiTwotoneStar"], {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 225,
                            columnNumber: 31
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 220,
                          columnNumber: 29
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 218,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "post__rating-line",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "rating-line-left",
                          children: "Game providers"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 229,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "rating-line-right",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_10__["AiTwotoneStar"], {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 233,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_10__["AiTwotoneStar"], {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 234,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_10__["AiTwotoneStar"], {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 235,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_10__["AiTwotoneStar"], {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 236,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_10__["AiTwotoneStar"], {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 237,
                            columnNumber: 31
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 232,
                          columnNumber: 29
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 228,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "post__rating-line",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "rating-line-left",
                          children: "Payment providers"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 241,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "rating-line-right",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_10__["AiTwotoneStar"], {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 245,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_10__["AiTwotoneStar"], {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 246,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_10__["AiTwotoneStar"], {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 247,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_10__["AiTwotoneStar"], {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 248,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_10__["AiTwotoneStar"], {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 249,
                            columnNumber: 31
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 244,
                          columnNumber: 29
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 240,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "post__rating-line",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "rating-line-left",
                          children: "Support"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 253,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "rating-line-right",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_10__["AiTwotoneStar"], {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 255,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_10__["AiTwotoneStar"], {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 256,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_10__["AiTwotoneStar"], {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 257,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_10__["AiTwotoneStar"], {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 258,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_10__["AiTwotoneStar"], {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 259,
                            columnNumber: 31
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 254,
                          columnNumber: 29
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 252,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "post__rating-global",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          children: "Note global"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 263,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_10__["AiTwotoneStar"], {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 265,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_10__["AiTwotoneStar"], {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 266,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_10__["AiTwotoneStar"], {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 267,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_10__["AiTwotoneStar"], {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 268,
                            columnNumber: 31
                          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_10__["AiTwotoneStar"], {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 269,
                            columnNumber: 31
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 264,
                          columnNumber: 29
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          children: "8.20 / 10"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 271,
                          columnNumber: 29
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 262,
                        columnNumber: 27
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 206,
                      columnNumber: 25
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "post__contactform",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ContactForm__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 276,
                        columnNumber: 27
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 275,
                      columnNumber: 25
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 180,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 66,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: Object(clsx__WEBPACK_IMPORTED_MODULE_14__["default"])("post__fixed", show && "active")
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 280,
                  columnNumber: 21
                }, _this)]
              }, void 0, true);
            })
          }, void 0, false)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 5
  }, this);
}

_s(Post, "KTSDW9ikdJImJR5FI7fOSuZpHts=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FzaW5vcy9bcGlkXS5qcyJdLCJuYW1lcyI6WyJQb3N0IiwidXNlU3RhdGUiLCJkYXRhIiwic2V0RGF0YSIsInNob3ciLCJoYW5kbGVTaG93Iiwicm91dGVyIiwidXNlUm91dGVyIiwibmFtZSIsInF1ZXJ5IiwicGlkIiwiY29uc29sZSIsImxvZyIsInRyYW5zaXRpb25OYXZCYXIiLCJ3aW5kb3ciLCJzY3JvbGxZIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJnZXQiLCJyZXNwb25zZSIsImVycm9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJtYXAiLCJjYXNpbm8iLCJiYWNrZ3JvdW5kSW1hZ2UiLCJPdmVybGF5IiwidXJsIiwidGl0bGUiLCJjbHN4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUFBLGtCQUNVQyxzREFBUSxDQUFDLElBQUQsQ0FEbEI7QUFBQSxNQUNQQyxJQURPO0FBQUEsTUFDREMsT0FEQzs7QUFBQSxtQkFFYUYsc0RBQVEsQ0FBQyxLQUFELENBRnJCO0FBQUEsTUFFUEcsSUFGTztBQUFBLE1BRURDLFVBRkM7O0FBR2QsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBLE1BQU1DLElBQUksR0FBR0YsTUFBTSxDQUFDRyxLQUFQLENBQWFDLEdBQTFCO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZTixNQUFaOztBQUNBLE1BQU1PLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTTtBQUM3QixRQUFJQyxNQUFNLENBQUNDLE9BQVAsR0FBaUIsR0FBckIsRUFBMEI7QUFDeEJWLGdCQUFVLENBQUMsSUFBRCxDQUFW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U0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQXhERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBMUJGLGVBK0ZFO0FBQUssK0JBQVMsRUFBQyxtQkFBZjtBQUFBLDZDQUNFLHFFQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQS9GRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBbEhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFaRixlQWtPRTtBQUFLLDJCQUFTLEVBQUVDLHFEQUFJLENBQUMsYUFBRCxFQUFnQnpCLElBQUksSUFBSSxRQUF4QjtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQWxPRjtBQUFBLDhCQURRO0FBQUEsYUFBVDtBQURIO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBc1BEOztHQXJSUUosSTtVQUdRTyxxRDs7O0tBSFJQLEk7QUF1Uk1BLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Nhc2lub3MvW3BpZF0uNDU2YjY4MjA5YWExZTVlOTkyYWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgXCIuL3Bvc3Quc2Nzc1wiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1dlYkxheW91dFwiO1xyXG5pbXBvcnQgQ29udGFjdEZvcm0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQ29udGFjdEZvcm1cIjtcclxuaW1wb3J0IENhc2lub1dyYXBwZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQ2FzaW5vV3JhcHBlclwiO1xyXG5pbXBvcnQgeyBBaVR3b3RvbmVTdGFyIH0gZnJvbSBcInJlYWN0LWljb25zL0FpXCI7XHJcbmltcG9ydCB7IEJzQ2FsZW5kYXIgfSBmcm9tIFwicmVhY3QtaWNvbnMvQnNcIjtcclxuaW1wb3J0IHsgUmlNb25leUV1cm9DaXJjbGVMaW5lIH0gZnJvbSBcInJlYWN0LWljb25zL1JpXCI7XHJcbmltcG9ydCB7IEdpTGF1cmVsQ3Jvd24gfSBmcm9tIFwicmVhY3QtaWNvbnMvR2lcIjtcclxuaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcclxuaW1wb3J0IEJyZWFkQ3J1bXBzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0JyZWFkQ3J1bXBzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmZ1bmN0aW9uIFBvc3QoKSB7XHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3Nob3csIGhhbmRsZVNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBuYW1lID0gcm91dGVyLnF1ZXJ5LnBpZDtcclxuICBjb25zb2xlLmxvZyhyb3V0ZXIpO1xyXG4gIGNvbnN0IHRyYW5zaXRpb25OYXZCYXIgPSAoKSA9PiB7XHJcbiAgICBpZiAod2luZG93LnNjcm9sbFkgPiAyMDApIHtcclxuICAgICAgaGFuZGxlU2hvdyh0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGhhbmRsZVNob3coZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjEzMzcvY2FzaW5vcy8ke25hbWV9YCk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5kYXRhO1xyXG4gICAgICBzZXREYXRhKFsuLi5kYXRhXSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0cmFuc2l0aW9uTmF2QmFyKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRyYW5zaXRpb25OYXZCYXIpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19pbm5lclwiPlxyXG4gICAgICAgICAgICB7ZGF0YSAmJiAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIHtkYXRhLm1hcCgoY2FzaW5vKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxCcmVhZENydW1wcyBuYW1lPXtjYXNpbm8udGl0bGV9IC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBvc3RfX3RpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybChodHRwOi8vbG9jYWxob3N0OjEzMzcke2Nhc2luby5PdmVybGF5LnVybH0pYCxcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X190aXRsZS1vdmVybGF5XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX3RpdGxlLXRleHRcIj4ge2Nhc2luby50aXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX2xlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxDYXNpbm9XcmFwcGVyIHBvc3Q9e3RydWV9IHJldmlldz17ZmFsc2V9IC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX3RleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPk9waW5pb25zIG9uIHtjYXNpbm8udGl0bGV9PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGl0LiBOZXNjaXVudCBuZW1vIHF1YXMgbGF1ZGFudGl1bSBhY2N1c2FudGl1bSBuYW0uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDdW1xdWUgaXBzYSBhc3Blcm5hdHVyIGRlc2VydW50LCByZWljaWVuZGlzIGlsbG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZvbHVwdGF0ZW0gaW5jaWR1bnQgc3VzY2lwaXQgcmVtISBWZWxpdCBzYXBpZW50ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbmlldCBldW0gcGFyaWF0dXIgbGliZXJvP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGl0LiBOZXNjaXVudCBuZW1vIHF1YXMgbGF1ZGFudGl1bSBhY2N1c2FudGl1bSBuYW0uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDdW1xdWUgaXBzYSBhc3Blcm5hdHVyIGRlc2VydW50LCByZWljaWVuZGlzIGlsbG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZvbHVwdGF0ZW0gaW5jaWR1bnQgc3VzY2lwaXQgcmVtISBWZWxpdCBzYXBpZW50ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbmlldCBldW0gcGFyaWF0dXIgbGliZXJvP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxpdC4gTmVzY2l1bnQgbmVtbyBxdWFzIGxhdWRhbnRpdW0gYWNjdXNhbnRpdW0gbmFtLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3VtcXVlIGlwc2EgYXNwZXJuYXR1ciBkZXNlcnVudCwgcmVpY2llbmRpcyBpbGxvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b2x1cHRhdGVtIGluY2lkdW50IHN1c2NpcGl0IHJlbSEgVmVsaXQgc2FwaWVudGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW5pZXQgZXVtIHBhcmlhdHVyIGxpYmVybz9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxpdC4gTmVzY2l1bnQgbmVtbyBxdWFzIGxhdWRhbnRpdW0gYWNjdXNhbnRpdW0gbmFtLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3VtcXVlIGlwc2EgYXNwZXJuYXR1ciBkZXNlcnVudCwgcmVpY2llbmRpcyBpbGxvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b2x1cHRhdGVtIGluY2lkdW50IHN1c2NpcGl0IHJlbSEgVmVsaXQgc2FwaWVudGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW5pZXQgZXVtIHBhcmlhdHVyIGxpYmVybz9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxpdC4gTmVzY2l1bnQgbmVtbyBxdWFzIGxhdWRhbnRpdW0gYWNjdXNhbnRpdW0gbmFtLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3VtcXVlIGlwc2EgYXNwZXJuYXR1ciBkZXNlcnVudCwgcmVpY2llbmRpcyBpbGxvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b2x1cHRhdGVtIGluY2lkdW50IHN1c2NpcGl0IHJlbSEgVmVsaXQgc2FwaWVudGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW5pZXQgZXVtIHBhcmlhdHVyIGxpYmVybz9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxpdC4gTmVzY2l1bnQgbmVtbyBxdWFzIGxhdWRhbnRpdW0gYWNjdXNhbnRpdW0gbmFtLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3VtcXVlIGlwc2EgYXNwZXJuYXR1ciBkZXNlcnVudCwgcmVpY2llbmRpcyBpbGxvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b2x1cHRhdGVtIGluY2lkdW50IHN1c2NpcGl0IHJlbSEgVmVsaXQgc2FwaWVudGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW5pZXQgZXVtIHBhcmlhdHVyIGxpYmVybz9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxpdC4gTmVzY2l1bnQgbmVtbyBxdWFzIGxhdWRhbnRpdW0gYWNjdXNhbnRpdW0gbmFtLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3VtcXVlIGlwc2EgYXNwZXJuYXR1ciBkZXNlcnVudCwgcmVpY2llbmRpcyBpbGxvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b2x1cHRhdGVtIGluY2lkdW50IHN1c2NpcGl0IHJlbSEgVmVsaXQgc2FwaWVudGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW5pZXQgZXVtIHBhcmlhdHVyIGxpYmVybz9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxpdC4gTmVzY2l1bnQgbmVtbyBxdWFzIGxhdWRhbnRpdW0gYWNjdXNhbnRpdW0gbmFtLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3VtcXVlIGlwc2EgYXNwZXJuYXR1ciBkZXNlcnVudCwgcmVpY2llbmRpcyBpbGxvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b2x1cHRhdGVtIGluY2lkdW50IHN1c2NpcGl0IHJlbSEgVmVsaXQgc2FwaWVudGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW5pZXQgZXVtIHBhcmlhdHVyIGxpYmVybz9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxpdC4gTmVzY2l1bnQgbmVtbyBxdWFzIGxhdWRhbnRpdW0gYWNjdXNhbnRpdW0gbmFtLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3VtcXVlIGlwc2EgYXNwZXJuYXR1ciBkZXNlcnVudCwgcmVpY2llbmRpcyBpbGxvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b2x1cHRhdGVtIGluY2lkdW50IHN1c2NpcGl0IHJlbSEgVmVsaXQgc2FwaWVudGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW5pZXQgZXVtIHBhcmlhdHVyIGxpYmVybz9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxpdC4gTmVzY2l1bnQgbmVtbyBxdWFzIGxhdWRhbnRpdW0gYWNjdXNhbnRpdW0gbmFtLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3VtcXVlIGlwc2EgYXNwZXJuYXR1ciBkZXNlcnVudCwgcmVpY2llbmRpcyBpbGxvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b2x1cHRhdGVtIGluY2lkdW50IHN1c2NpcGl0IHJlbSEgVmVsaXQgc2FwaWVudGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW5pZXQgZXVtIHBhcmlhdHVyIGxpYmVybz9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxpdC4gTmVzY2l1bnQgbmVtbyBxdWFzIGxhdWRhbnRpdW0gYWNjdXNhbnRpdW0gbmFtLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3VtcXVlIGlwc2EgYXNwZXJuYXR1ciBkZXNlcnVudCwgcmVpY2llbmRpcyBpbGxvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b2x1cHRhdGVtIGluY2lkdW50IHN1c2NpcGl0IHJlbSEgVmVsaXQgc2FwaWVudGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW5pZXQgZXVtIHBhcmlhdHVyIGxpYmVybz9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxpdC4gTmVzY2l1bnQgbmVtbyBxdWFzIGxhdWRhbnRpdW0gYWNjdXNhbnRpdW0gbmFtLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3VtcXVlIGlwc2EgYXNwZXJuYXR1ciBkZXNlcnVudCwgcmVpY2llbmRpcyBpbGxvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b2x1cHRhdGVtIGluY2lkdW50IHN1c2NpcGl0IHJlbSEgVmVsaXQgc2FwaWVudGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW5pZXQgZXVtIHBhcmlhdHVyIGxpYmVybz9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltYWdlcy5wcmlzbWljLmlvL2x1Y2t5N2JvbnVzLzYwODk3OWQ2LTM5MjctNDczMi1iOTA5LTM5M2RlMTgyYWI0Nl9zaW5zY3JpcmVfc3VyX2NlX2Nhc2luby5wbmdcIj48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHYW1lcyBhbmQgc3VwcGxpZXJzIGF0IHtjYXNpbm8udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsaXQuIE5lc2NpdW50IG5lbW8gcXVhcyBsYXVkYW50aXVtIGFjY3VzYW50aXVtIG5hbS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEN1bXF1ZSBpcHNhIGFzcGVybmF0dXIgZGVzZXJ1bnQsIHJlaWNpZW5kaXMgaWxsb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm9sdXB0YXRlbSBpbmNpZHVudCBzdXNjaXBpdCByZW0hIFZlbGl0IHNhcGllbnRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVuaWV0IGV1bSBwYXJpYXR1ciBsaWJlcm8/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsaXQuIE5lc2NpdW50IG5lbW8gcXVhcyBsYXVkYW50aXVtIGFjY3VzYW50aXVtIG5hbS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEN1bXF1ZSBpcHNhIGFzcGVybmF0dXIgZGVzZXJ1bnQsIHJlaWNpZW5kaXMgaWxsb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm9sdXB0YXRlbSBpbmNpZHVudCBzdXNjaXBpdCByZW0hIFZlbGl0IHNhcGllbnRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVuaWV0IGV1bSBwYXJpYXR1ciBsaWJlcm8/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX2NvbXBhbnktaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5RdWlja2ZhY3RzIG9uIHtjYXNpbm8udGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBhbnlfX2xpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcGFueV9fbGluZS1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHaUxhdXJlbENyb3duIC8+IE93bmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcGFueV9fbGluZS1yaWdodFwiPlNvbWVib2R5PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wYW55X19saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBhbnlfX2xpbmUtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnNDYWxlbmRhciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGb3VuZGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcGFueV9fbGluZS1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMDIwLTAxLTAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBhbnlfX2xpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcGFueV9fbGluZS1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSaU1vbmV5RXVyb0NpcmNsZUxpbmUgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWluLiBkZXBvc2l0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcGFueV9fbGluZS1yaWdodFwiPuKCrDMwPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX3JhdGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5XaGF0IHdlIHRoaW5rIGFib3V0IHtjYXNpbm8udGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX3JhdGluZy1saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZy1saW5lLWxlZnRcIj5Cb251c2VzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZy1saW5lLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBaVR3b3RvbmVTdGFyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBaVR3b3RvbmVTdGFyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBaVR3b3RvbmVTdGFyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBaVR3b3RvbmVTdGFyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBaVR3b3RvbmVTdGFyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX3JhdGluZy1saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZy1saW5lLWxlZnRcIj5XZWJzaXRlPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZy1saW5lLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBaVR3b3RvbmVTdGFyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBaVR3b3RvbmVTdGFyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBaVR3b3RvbmVTdGFyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBaVR3b3RvbmVTdGFyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBaVR3b3RvbmVTdGFyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX3JhdGluZy1saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZy1saW5lLWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR2FtZSBwcm92aWRlcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmctbGluZS1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWlUd290b25lU3RhciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWlUd290b25lU3RhciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWlUd290b25lU3RhciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWlUd290b25lU3RhciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWlUd290b25lU3RhciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19yYXRpbmctbGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmctbGluZS1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBheW1lbnQgcHJvdmlkZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nLWxpbmUtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFpVHdvdG9uZVN0YXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFpVHdvdG9uZVN0YXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFpVHdvdG9uZVN0YXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFpVHdvdG9uZVN0YXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFpVHdvdG9uZVN0YXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fcmF0aW5nLWxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nLWxpbmUtbGVmdFwiPlN1cHBvcnQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nLWxpbmUtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFpVHdvdG9uZVN0YXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFpVHdvdG9uZVN0YXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFpVHdvdG9uZVN0YXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFpVHdvdG9uZVN0YXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFpVHdvdG9uZVN0YXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fcmF0aW5nLWdsb2JhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5Ob3RlIGdsb2JhbDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFpVHdvdG9uZVN0YXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFpVHdvdG9uZVN0YXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFpVHdvdG9uZVN0YXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFpVHdvdG9uZVN0YXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFpVHdvdG9uZVN0YXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj44LjIwIC8gMTA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX2NvbnRhY3Rmb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRhY3RGb3JtIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goXCJwb3N0X19maXhlZFwiLCBzaG93ICYmIFwiYWN0aXZlXCIpfT5cclxuICAgICAgICAgICAgICAgICAgICAgIHsvKiA8Q2FzaW5vV3JhcHBlciBwb3N0PXt0cnVlfSByZXZpZXc9e2ZhbHNlfSAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=