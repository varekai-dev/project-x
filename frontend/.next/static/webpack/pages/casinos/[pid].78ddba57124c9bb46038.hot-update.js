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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      data = _useState[0],
      setData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      show = _useState2[0],
      handleShow = _useState2[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var name = router.query.pid;

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
            return axios__WEBPACK_IMPORTED_MODULE_15___default.a.get("http://localhost:1337/casinos/".concat(name));

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
  })), [name]);
  console.log(data);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    window.addEventListener("scroll", transitionNavBar);
    return function () {
      window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_WebLayout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    children: data && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "post",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "post__inner",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "post__title",
            style: {
              backgroundImage: "url(http://localhost:1337".concat(data.Overlay.url, ")")
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "post__title-overlay"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "post__title-text",
              children: [" ", data.title]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "post__content",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "post__left",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "post__text",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                    children: ["Opinions on ", data.title]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 66,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 65,
                  columnNumber: 21
                }, this), data.mainContent]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "post__right",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "post__company-info",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                  children: "Quickfacts "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 73,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "company__line",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "company__line-left",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Gi__WEBPACK_IMPORTED_MODULE_12__["GiLaurelCrown"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 76,
                      columnNumber: 25
                    }, this), " Owner"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 75,
                    columnNumber: 23
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "company__line-right",
                    children: "Somebody"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 78,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 74,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "company__line",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "company__line-left",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Bs__WEBPACK_IMPORTED_MODULE_10__["BsCalendar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 82,
                      columnNumber: 25
                    }, this), "Founded"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 81,
                    columnNumber: 23
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "company__line-right",
                    children: "2020-01-01"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 85,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 80,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "company__line",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "company__line-left",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ri__WEBPACK_IMPORTED_MODULE_11__["RiMoneyEuroCircleLine"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 89,
                      columnNumber: 25
                    }, this), "Min. deposit"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 88,
                    columnNumber: 23
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "company__line-right",
                    children: "\u20AC30"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 92,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 87,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "post__rating",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                  children: ["What we think about ", data.title]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 96,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "post__rating-line",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "rating-line-left",
                    children: "Bonuses"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 98,
                    columnNumber: 23
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "rating-line-right",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 100,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 101,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 102,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 103,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 104,
                      columnNumber: 25
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 99,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 97,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "post__rating-line",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "rating-line-left",
                    children: "Website"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 108,
                    columnNumber: 23
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "rating-line-right",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 110,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 111,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 112,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 113,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 114,
                      columnNumber: 25
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 109,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 107,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "post__rating-line",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "rating-line-left",
                    children: "Game providers"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 118,
                    columnNumber: 23
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "rating-line-right",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 120,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 121,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 122,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 123,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 124,
                      columnNumber: 25
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 119,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 117,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "post__rating-line",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "rating-line-left",
                    children: "Payment providers"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 128,
                    columnNumber: 23
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "rating-line-right",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 130,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 131,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 132,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 133,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 134,
                      columnNumber: 25
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 129,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 127,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "post__rating-line",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "rating-line-left",
                    children: "Support"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 138,
                    columnNumber: 23
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "rating-line-right",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 140,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 141,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 142,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 143,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 144,
                      columnNumber: 25
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 139,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 137,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "post__rating-global",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    children: "Note global"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 148,
                    columnNumber: 23
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 150,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 151,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 152,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 153,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_Ai__WEBPACK_IMPORTED_MODULE_9__["AiTwotoneStar"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 154,
                      columnNumber: 25
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 149,
                    columnNumber: 23
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    children: "8.20 / 10"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 156,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 147,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "post__contactform",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ContactForm__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 161,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 160,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: Object(clsx__WEBPACK_IMPORTED_MODULE_13__["default"])("post__fixed", show && "active")
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 45,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FzaW5vcy9bcGlkXS5qcyJdLCJuYW1lcyI6WyJQb3N0IiwidXNlU3RhdGUiLCJkYXRhIiwic2V0RGF0YSIsInNob3ciLCJoYW5kbGVTaG93Iiwicm91dGVyIiwidXNlUm91dGVyIiwibmFtZSIsInF1ZXJ5IiwicGlkIiwidHJhbnNpdGlvbk5hdkJhciIsIndpbmRvdyIsInNjcm9sbFkiLCJ1c2VFZmZlY3QiLCJheGlvcyIsImdldCIsInJlc3BvbnNlIiwiY29uc29sZSIsImVycm9yIiwibG9nIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJPdmVybGF5IiwidXJsIiwidGl0bGUiLCJtYWluQ29udGVudCIsImNsc3giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUEsa0JBQ1VDLHNEQUFRLENBQUMsSUFBRCxDQURsQjtBQUFBLE1BQ1BDLElBRE87QUFBQSxNQUNEQyxPQURDOztBQUFBLG1CQUVhRixzREFBUSxDQUFDLEtBQUQsQ0FGckI7QUFBQSxNQUVQRyxJQUZPO0FBQUEsTUFFREMsVUFGQzs7QUFHZCxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsSUFBSSxHQUFHRixNQUFNLENBQUNHLEtBQVAsQ0FBYUMsR0FBMUI7O0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQzdCLFFBQUlDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixHQUFyQixFQUEwQjtBQUN4QlIsZ0JBQVUsQ0FBQyxJQUFELENBQVY7QUFDRCxLQUZELE1BRU87QUFDTEEsZ0JBQVUsQ0FBQyxLQUFELENBQVY7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QUFBLDRCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFGRixlQVNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFwREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQXhCRixlQXlGRTtBQUFLLHlCQUFTLEVBQUMsbUJBQWY7QUFBQSx1Q0FDRSxxRUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkF6RkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFaRixlQW9IRTtBQUFLLHFCQUFTLEVBQUVFLHFEQUFJLENBQUMsYUFBRCxFQUFnQnhCLElBQUksSUFBSSxRQUF4QjtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXBIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWtJRDs7R0EvSlFKLEk7VUFHUU8scUQ7OztLQUhSUCxJO0FBaUtNQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYXNpbm9zL1twaWRdLjc4ZGRiYTU3MTI0YzliYjQ2MDM4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFwiLi9wb3N0LnNjc3NcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9XZWJMYXlvdXRcIjtcclxuaW1wb3J0IENvbnRhY3RGb3JtIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0NvbnRhY3RGb3JtXCI7XHJcbmltcG9ydCBDYXNpbm9XcmFwcGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0Nhc2lub1dyYXBwZXJcIjtcclxuaW1wb3J0IHsgQWlUd290b25lU3RhciB9IGZyb20gXCJyZWFjdC1pY29ucy9BaVwiO1xyXG5pbXBvcnQgeyBCc0NhbGVuZGFyIH0gZnJvbSBcInJlYWN0LWljb25zL0JzXCI7XHJcbmltcG9ydCB7IFJpTW9uZXlFdXJvQ2lyY2xlTGluZSB9IGZyb20gXCJyZWFjdC1pY29ucy9SaVwiO1xyXG5pbXBvcnQgeyBHaUxhdXJlbENyb3duIH0gZnJvbSBcInJlYWN0LWljb25zL0dpXCI7XHJcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XHJcbmltcG9ydCBCcmVhZENydW1wcyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9CcmVhZENydW1wc1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5mdW5jdGlvbiBQb3N0KCkge1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtzaG93LCBoYW5kbGVTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBuYW1lID0gcm91dGVyLnF1ZXJ5LnBpZDtcclxuICBjb25zdCB0cmFuc2l0aW9uTmF2QmFyID0gKCkgPT4ge1xyXG4gICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gMjAwKSB7XHJcbiAgICAgIGhhbmRsZVNob3codHJ1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBoYW5kbGVTaG93KGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDoxMzM3L2Nhc2lub3MvJHtuYW1lfWApO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuZGF0YTtcclxuICAgICAgc2V0RGF0YShkYXRhKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgIH1cclxuICB9LCBbbmFtZV0pO1xyXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0cmFuc2l0aW9uTmF2QmFyKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRyYW5zaXRpb25OYXZCYXIpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICB7ZGF0YSAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX2lubmVyXCI+XHJcbiAgICAgICAgICAgICAgey8qIDxCcmVhZENydW1wcyBuYW1lPXtkYXRhLnRpdGxlfSAvPiAqL31cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwb3N0X190aXRsZVwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoaHR0cDovL2xvY2FsaG9zdDoxMzM3JHtkYXRhLk92ZXJsYXkudXJsfSlgLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX3RpdGxlLW92ZXJsYXlcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fdGl0bGUtdGV4dFwiPiB7ZGF0YS50aXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX2xlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgey8qIDxDYXNpbm9XcmFwcGVyIHBvc3Q9e3RydWV9IHJldmlldz17ZmFsc2V9IC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX3RleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPk9waW5pb25zIG9uIHtkYXRhLnRpdGxlfTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAge2RhdGEubWFpbkNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX3JpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fY29tcGFueS1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPlF1aWNrZmFjdHMgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBhbnlfX2xpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcGFueV9fbGluZS1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHaUxhdXJlbENyb3duIC8+IE93bmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcGFueV9fbGluZS1yaWdodFwiPlNvbWVib2R5PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wYW55X19saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBhbnlfX2xpbmUtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnNDYWxlbmRhciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBGb3VuZGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcGFueV9fbGluZS1yaWdodFwiPjIwMjAtMDEtMDE8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBhbnlfX2xpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcGFueV9fbGluZS1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSaU1vbmV5RXVyb0NpcmNsZUxpbmUgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTWluLiBkZXBvc2l0XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcGFueV9fbGluZS1yaWdodFwiPuKCrDMwPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX3JhdGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5XaGF0IHdlIHRoaW5rIGFib3V0IHtkYXRhLnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19yYXRpbmctbGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmctbGluZS1sZWZ0XCI+Qm9udXNlczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmctbGluZS1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QWlUd290b25lU3RhciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QWlUd290b25lU3RhciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QWlUd290b25lU3RhciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QWlUd290b25lU3RhciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QWlUd290b25lU3RhciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19yYXRpbmctbGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmctbGluZS1sZWZ0XCI+V2Vic2l0ZTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmctbGluZS1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QWlUd290b25lU3RhciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QWlUd290b25lU3RhciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QWlUd290b25lU3RhciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QWlUd290b25lU3RhciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QWlUd290b25lU3RhciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19yYXRpbmctbGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmctbGluZS1sZWZ0XCI+R2FtZSBwcm92aWRlcnM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nLWxpbmUtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFpVHdvdG9uZVN0YXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFpVHdvdG9uZVN0YXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFpVHdvdG9uZVN0YXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFpVHdvdG9uZVN0YXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFpVHdvdG9uZVN0YXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdF9fcmF0aW5nLWxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nLWxpbmUtbGVmdFwiPlBheW1lbnQgcHJvdmlkZXJzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZy1saW5lLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBaVR3b3RvbmVTdGFyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBaVR3b3RvbmVTdGFyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBaVR3b3RvbmVTdGFyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBaVR3b3RvbmVTdGFyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBaVR3b3RvbmVTdGFyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX3JhdGluZy1saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZy1saW5lLWxlZnRcIj5TdXBwb3J0PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZy1saW5lLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBaVR3b3RvbmVTdGFyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBaVR3b3RvbmVTdGFyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBaVR3b3RvbmVTdGFyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBaVR3b3RvbmVTdGFyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBaVR3b3RvbmVTdGFyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX3JhdGluZy1nbG9iYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+Tm90ZSBnbG9iYWw8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBaVR3b3RvbmVTdGFyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBaVR3b3RvbmVTdGFyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBaVR3b3RvbmVTdGFyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBaVR3b3RvbmVTdGFyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBaVR3b3RvbmVTdGFyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+OC4yMCAvIDEwPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0X19jb250YWN0Zm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb250YWN0Rm9ybSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KFwicG9zdF9fZml4ZWRcIiwgc2hvdyAmJiBcImFjdGl2ZVwiKX0+XHJcbiAgICAgICAgICAgICAgICB7LyogPENhc2lub1dyYXBwZXIgcG9zdD17dHJ1ZX0gcmV2aWV3PXtmYWxzZX0gLz4gKi99XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9