module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Context.jsx":
/*!********************************!*\
  !*** ./components/Context.jsx ***!
  \********************************/
/*! exports provided: MainContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainContext", function() { return MainContext; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\IT\\Documents\\GitHub\\project-x\\frontend\\components\\Context.jsx";

const MainContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])();

function Context({
  children
}) {
  const heroText = [{
    text: "Turnkey esports solutions"
  }, {
    text: "Custom Software development"
  }, {
    text: "News aggregator and portal"
  }, {
    text: "Wagering and gaming"
  }, {
    text: "Data and Analytics"
  }];
  const mainText = [{
    description: `X-Bet.co launched in 2017, and is one of the leading esports betting brands globally. In 2020 X-BET changed its name to XB Systems, and rebranded its X-Bet.co brand to BUFF.bet 
    `,
    id: 1
  }, {
    description: `Our experience in the market has shown us that esports fans interact in a different way to traditional sports betting customers, and want more than just a betting platform

    `,
    id: 2
  }];
  const tabContent = [{
    description: `1. To perfect the hybrid sportsbook model where all forms of betting can be found in one place as an “all in one” betting station.

    `,
    tabId: 1
  }, {
    description: `2. Take a page from the enormous success of mobile games by adding achievements, milestones, login rewards and internal notifications to take player loyalty to the next level.
			`,
    tabId: 2
  }, {
    description: `3. Media portal to differentiate brand, increase user base and lower CPA, engage our existing and potential customers into non-betting activities, cross sell opportunities and strengthen overall user engagement within the Buff eco system.

			`,
    tabId: 3
  }, {
    description: `4. Lowering the costs of player acquisition, increasing exposure and generating social media friendly content that is non-betting related.
			 `,
    tabId: 4
  }, {
    description: `5. Implementation of cutting-edge technologies on the Buff.bet platform, such as  Back-End algorithms, SQL Caching, Data Base optimization, Brotli and gzip Compression, WebP Images, updating Caching Strategies; giving users a lightning fast and visually stunning gaming experience.
			`,
    tabId: 5
  }, {
    description: `6. Develop a dynamic loyalty program and mobile games-like activities, achievements and milestones to further engage and cross-sell each customer above and beyond the usual betting-only model. Resulting in higher user engagement and increasing the Live Time Value  (LTV) of the customer.

			`,
    tabId: 6
  }];
  const section3 = [{
    description: `Purpose-built esports betting platform, asset fully acquired from market leading esports developer UltraPlay, enhancing the user experience for Buff.bet players.
			`,
    id: 1
  }, {
    description: `BUFFHUB an in-house developed esports news aggregator platform, enabling esports community traffic and engagement, facilitating cross sales opportunities to Buff.bet.

			`,
    id: 2
  }, {
    description: `Gives competitive advantage against other esports betting operators on third-party platforms.
			`,
    id: 3
  }, {
    description: `In-house developed affiliate software to enhance the affiliate experience.
			`,
    id: 4
  }];
  const timeStamps = [{
    description: "X-Bet.co Launched",
    date: "October 2017",
    timeStampId: 1
  }, {
    description: "BUFF.bet Launched",
    date: "April 2018",
    timeStampId: 2
  }, {
    description: `Agreement Signed February 2020; \n\n
			 Merger completed  April 2020`,
    date: "April 2020",
    timeStampId: 3
  }, {
    description: "BuffHUB Launched",
    date: "April 2020",
    timeStampId: 4
  }, {
    description: "Establishment of Isle Of Man based holding company XB Vision Technology LTD",
    date: "June 2020",
    timeStampId: 5
  }, {
    description: "IPO on ViennaStock Exchange",
    date: "Q1 2021",
    timeStampId: 6
  }, {
    description: "New Product Launches",
    date: "2021 Onwards",
    timeStampId: 7
  }];
  const ourBrands = [{
    img: "/images/about-us/buff.png",
    link: "/buff-bet",
    description: "more info",
    id: 1
  }, {
    img: "/images/about-us/BuffHub.png",
    link: "/buffhub",
    description: "more info",
    id: 2
  }];
  const esportsBoxes = [{
    img: "/images/home/box-1.png",
    title: "Fast Growing",
    text: "It is the fastest growing sports product globally in terms of participation, viewership and prize money",
    id: 1,
    color: "blue",
    delay: 0
  }, {
    img: "/images/home/box-2.png",
    title: "High Profile",
    text: "Prize money reached $220m in 2019, with prize money in major tournaments surpassing that of traditional sports",
    id: 2,
    color: "orange",
    delay: 300
  }, {
    img: "/images/home/box-3.png",
    title: "Attractive Demographics",
    text: "esports appeals to key demographics that products struggle to interact with",
    id: 3,
    color: "purple",
    delay: 600
  }, {
    img: "/images/home/box-4.png",
    title: "Geographically Diverse",
    text: "While esports is particularly popular in Asia and the USA, it has become a truly global product",
    id: 4,
    color: "green",
    delay: 900
  }];
  const bettingList = [{
    text: "Betting revenues are excluded from the estimated $1.1bn market size, and although it remains a minor part of the esports eco-system, it is growing strongly",
    id: 1
  }, {
    text: "Traditional bookmakers have started to focus on the esports market, given its strong growth and future potential, but they don’t understand esports customers in the same way as esports betting sites",
    id: 2
  }];
  const buffhubMain = [{
    text: "Reduce marketing cost through shifting some advertising to non-gambling category;",
    id: 1
  }, {
    text: "Increase brand awareness and loyalty to drive traffic;",
    id: 2
  }, {
    text: "One profile for BUFFHUB and BUFF.bet to increase proportion of depositing users;",
    id: 3
  }, {
    text: "Allows to advertise in search engines and Social Medias",
    id: 4
  }, {
    text: "Users can consume detailed information about the esports world (e.g. ranking, predictions, news, etc.)",
    id: 5
  }];
  const buffhubBox = [{
    img: "/images/buffhub/paint.png",
    text: "Modern gaming design",
    id: 1,
    delay: 0
  }, {
    img: "/images/buffhub/rank.png",
    text: "Own ranking system",
    id: 2,
    delay: 300
  }, {
    img: "/images/buffhub/commerce.png",
    text: "Community oriented",
    id: 3,
    delay: 600
  }];
  const buffhubFunnelSteps = [{
    text: "Visits to media portal BUFFHUB"
  }, {
    text: "Cross-sell visitors to BUFF.bet betting site"
  }, {
    text: "Registrations on BUFF.bet"
  }, {
    text: "First Time Depositing Players"
  }, {
    text: "Retained Depositing Players"
  }];
  const advantage = [{
    image: "/images/buff/mouse.png",
    alt: "mouse",
    numbers: 34,
    text: "Games covered"
  }, {
    image: "/images/buff/events.png",
    alt: "party",
    numbers: 6000,
    text: "Monthly events"
  }, {
    image: "/images/buff/elipse.png",
    alt: "elipse",
    numbers: 5500,
    text: "Live events"
  }, {
    image: "/images/buff/grow.png",
    alt: "grow",
    numbers: 200,
    text: "Markets"
  }];
  const advantageSports = [{
    image: "/images/buff/ball.png",
    alt: "mouse",
    numbers: 50,
    text: "Sports"
  }, {
    image: "/images/buff/events.png",
    alt: "party",
    numbers: 30000,
    text: "Monthly events"
  }, {
    image: "/images/buff/grow.png",
    alt: "grow",
    numbers: 2000,
    text: "Markets"
  }];
  const info = [{
    title: "Monthly Promotion",
    text: "To top it all off, we do monthly theme-park style promotions to keep it all interesting and we dish out daily betting predictions on our active Social media and blogs.",
    image: "/images/buff/calendar.png"
  }, {
    title: "Our Support",
    text: "Our support quality boasts an incredible 94% satisfaction in our live chat services from thousands of ratings that our clients leave for us.",
    image: "/images/buff/work.png"
  }];
  const store = {
    mainText,
    tabContent,
    section3,
    timeStamps,
    ourBrands,
    esportsBoxes,
    bettingList,
    buffhubMain,
    buffhubBox,
    buffhubFunnelSteps,
    heroText,
    advantage,
    advantageSports,
    info
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MainContext.Provider, {
    value: store,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 344,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Context);

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.scss */ "./styles/globals.scss");
/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Context */ "./components/Context.jsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\IT\\Documents\\GitHub\\project-x\\frontend\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Context__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 3
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./styles/globals.scss":
/*!*****************************!*\
  !*** ./styles/globals.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Db250ZXh0LmpzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiTWFpbkNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiQ29udGV4dCIsImNoaWxkcmVuIiwiaGVyb1RleHQiLCJ0ZXh0IiwibWFpblRleHQiLCJkZXNjcmlwdGlvbiIsImlkIiwidGFiQ29udGVudCIsInRhYklkIiwic2VjdGlvbjMiLCJ0aW1lU3RhbXBzIiwiZGF0ZSIsInRpbWVTdGFtcElkIiwib3VyQnJhbmRzIiwiaW1nIiwibGluayIsImVzcG9ydHNCb3hlcyIsInRpdGxlIiwiY29sb3IiLCJkZWxheSIsImJldHRpbmdMaXN0IiwiYnVmZmh1Yk1haW4iLCJidWZmaHViQm94IiwiYnVmZmh1YkZ1bm5lbFN0ZXBzIiwiYWR2YW50YWdlIiwiaW1hZ2UiLCJhbHQiLCJudW1iZXJzIiwiYWR2YW50YWdlU3BvcnRzIiwiaW5mbyIsInN0b3JlIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JB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Q0FBeEI7QUFxQkEsUUFBTTBCLElBQUksR0FBRyxDQUNaO0FBQ0NaLFNBQUssRUFBRSxtQkFEUjtBQUVDZCxRQUFJLEVBQ0gseUtBSEY7QUFJQ3NCLFNBQUssRUFBRTtBQUpSLEdBRFksRUFPWjtBQUNDUixTQUFLLEVBQUUsYUFEUjtBQUVDZCxRQUFJLEVBQ0gsOElBSEY7QUFJQ3NCLFNBQUssRUFBRTtBQUpSLEdBUFksQ0FBYjtBQWNBLFFBQU1LLEtBQUssR0FBRztBQUNiMUIsWUFEYTtBQUViRyxjQUZhO0FBR2JFLFlBSGE7QUFJYkMsY0FKYTtBQUtiRyxhQUxhO0FBTWJHLGdCQU5hO0FBT2JJLGVBUGE7QUFRYkMsZUFSYTtBQVNiQyxjQVRhO0FBVWJDLHNCQVZhO0FBV2JyQixZQVhhO0FBWWJzQixhQVphO0FBYWJJLG1CQWJhO0FBY2JDO0FBZGEsR0FBZDtBQWdCQSxzQkFBTyxxRUFBQyxXQUFELENBQWEsUUFBYjtBQUFzQixTQUFLLEVBQUVDLEtBQTdCO0FBQUEsY0FBcUM3QjtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDQTs7QUFFY0Qsc0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxVkE7QUFDQTtBQUNBOztBQUVBLFNBQVMrQixLQUFULENBQWU7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQWYsRUFBeUM7QUFDeEMsc0JBQ0MscUVBQUMsMkRBQUQ7QUFBQSwyQkFDQyxxRUFBQyxTQUFELG9CQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFLQTs7QUFFY0Ysb0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1haW5Db250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZnVuY3Rpb24gQ29udGV4dCh7IGNoaWxkcmVuIH0pIHtcclxuXHRjb25zdCBoZXJvVGV4dCA9IFtcclxuXHRcdHtcclxuXHRcdFx0dGV4dDogXCJUdXJua2V5IGVzcG9ydHMgc29sdXRpb25zXCIsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHR0ZXh0OiBcIkN1c3RvbSBTb2Z0d2FyZSBkZXZlbG9wbWVudFwiLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0dGV4dDogXCJOZXdzIGFnZ3JlZ2F0b3IgYW5kIHBvcnRhbFwiLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0dGV4dDogXCJXYWdlcmluZyBhbmQgZ2FtaW5nXCIsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHR0ZXh0OiBcIkRhdGEgYW5kIEFuYWx5dGljc1wiLFxyXG5cdFx0fSxcclxuXHRdO1xyXG5cdGNvbnN0IG1haW5UZXh0ID0gW1xyXG5cdFx0e1xyXG5cdFx0XHRkZXNjcmlwdGlvbjogYFgtQmV0LmNvIGxhdW5jaGVkIGluIDIwMTcsIGFuZCBpcyBvbmUgb2YgdGhlIGxlYWRpbmcgZXNwb3J0cyBiZXR0aW5nIGJyYW5kcyBnbG9iYWxseS4gSW4gMjAyMCBYLUJFVCBjaGFuZ2VkIGl0cyBuYW1lIHRvIFhCIFN5c3RlbXMsIGFuZCByZWJyYW5kZWQgaXRzIFgtQmV0LmNvIGJyYW5kIHRvIEJVRkYuYmV0IFxyXG4gICAgYCxcclxuXHRcdFx0aWQ6IDEsXHJcblx0XHR9LFxyXG5cclxuXHRcdHtcclxuXHRcdFx0ZGVzY3JpcHRpb246IGBPdXIgZXhwZXJpZW5jZSBpbiB0aGUgbWFya2V0IGhhcyBzaG93biB1cyB0aGF0IGVzcG9ydHMgZmFucyBpbnRlcmFjdCBpbiBhIGRpZmZlcmVudCB3YXkgdG8gdHJhZGl0aW9uYWwgc3BvcnRzIGJldHRpbmcgY3VzdG9tZXJzLCBhbmQgd2FudCBtb3JlIHRoYW4ganVzdCBhIGJldHRpbmcgcGxhdGZvcm1cclxuXHJcbiAgICBgLFxyXG5cdFx0XHRpZDogMixcclxuXHRcdH0sXHJcblx0XTtcclxuXHRjb25zdCB0YWJDb250ZW50ID0gW1xyXG5cdFx0e1xyXG5cdFx0XHRkZXNjcmlwdGlvbjogYDEuIFRvIHBlcmZlY3QgdGhlIGh5YnJpZCBzcG9ydHNib29rIG1vZGVsIHdoZXJlIGFsbCBmb3JtcyBvZiBiZXR0aW5nIGNhbiBiZSBmb3VuZCBpbiBvbmUgcGxhY2UgYXMgYW4g4oCcYWxsIGluIG9uZeKAnSBiZXR0aW5nIHN0YXRpb24uXHJcblxyXG4gICAgYCxcclxuXHRcdFx0dGFiSWQ6IDEsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRkZXNjcmlwdGlvbjogYDIuIFRha2UgYSBwYWdlIGZyb20gdGhlIGVub3Jtb3VzIHN1Y2Nlc3Mgb2YgbW9iaWxlIGdhbWVzIGJ5IGFkZGluZyBhY2hpZXZlbWVudHMsIG1pbGVzdG9uZXMsIGxvZ2luIHJld2FyZHMgYW5kIGludGVybmFsIG5vdGlmaWNhdGlvbnMgdG8gdGFrZSBwbGF5ZXIgbG95YWx0eSB0byB0aGUgbmV4dCBsZXZlbC5cclxuXHRcdFx0YCxcclxuXHRcdFx0dGFiSWQ6IDIsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRkZXNjcmlwdGlvbjogYDMuIE1lZGlhIHBvcnRhbCB0byBkaWZmZXJlbnRpYXRlIGJyYW5kLCBpbmNyZWFzZSB1c2VyIGJhc2UgYW5kIGxvd2VyIENQQSwgZW5nYWdlIG91ciBleGlzdGluZyBhbmQgcG90ZW50aWFsIGN1c3RvbWVycyBpbnRvIG5vbi1iZXR0aW5nIGFjdGl2aXRpZXMsIGNyb3NzIHNlbGwgb3Bwb3J0dW5pdGllcyBhbmQgc3RyZW5ndGhlbiBvdmVyYWxsIHVzZXIgZW5nYWdlbWVudCB3aXRoaW4gdGhlIEJ1ZmYgZWNvIHN5c3RlbS5cclxuXHJcblx0XHRcdGAsXHJcblx0XHRcdHRhYklkOiAzLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0ZGVzY3JpcHRpb246IGA0LiBMb3dlcmluZyB0aGUgY29zdHMgb2YgcGxheWVyIGFjcXVpc2l0aW9uLCBpbmNyZWFzaW5nIGV4cG9zdXJlIGFuZCBnZW5lcmF0aW5nIHNvY2lhbCBtZWRpYSBmcmllbmRseSBjb250ZW50IHRoYXQgaXMgbm9uLWJldHRpbmcgcmVsYXRlZC5cclxuXHRcdFx0IGAsXHJcblx0XHRcdHRhYklkOiA0LFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0ZGVzY3JpcHRpb246IGA1LiBJbXBsZW1lbnRhdGlvbiBvZiBjdXR0aW5nLWVkZ2UgdGVjaG5vbG9naWVzIG9uIHRoZSBCdWZmLmJldCBwbGF0Zm9ybSwgc3VjaCBhcyAgQmFjay1FbmQgYWxnb3JpdGhtcywgU1FMIENhY2hpbmcsIERhdGEgQmFzZSBvcHRpbWl6YXRpb24sIEJyb3RsaSBhbmQgZ3ppcCBDb21wcmVzc2lvbiwgV2ViUCBJbWFnZXMsIHVwZGF0aW5nIENhY2hpbmcgU3RyYXRlZ2llczsgZ2l2aW5nIHVzZXJzIGEgbGlnaHRuaW5nIGZhc3QgYW5kIHZpc3VhbGx5IHN0dW5uaW5nIGdhbWluZyBleHBlcmllbmNlLlxyXG5cdFx0XHRgLFxyXG5cdFx0XHR0YWJJZDogNSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdGRlc2NyaXB0aW9uOiBgNi4gRGV2ZWxvcCBhIGR5bmFtaWMgbG95YWx0eSBwcm9ncmFtIGFuZCBtb2JpbGUgZ2FtZXMtbGlrZSBhY3Rpdml0aWVzLCBhY2hpZXZlbWVudHMgYW5kIG1pbGVzdG9uZXMgdG8gZnVydGhlciBlbmdhZ2UgYW5kIGNyb3NzLXNlbGwgZWFjaCBjdXN0b21lciBhYm92ZSBhbmQgYmV5b25kIHRoZSB1c3VhbCBiZXR0aW5nLW9ubHkgbW9kZWwuIFJlc3VsdGluZyBpbiBoaWdoZXIgdXNlciBlbmdhZ2VtZW50IGFuZCBpbmNyZWFzaW5nIHRoZSBMaXZlIFRpbWUgVmFsdWUgIChMVFYpIG9mIHRoZSBjdXN0b21lci5cclxuXHJcblx0XHRcdGAsXHJcblx0XHRcdHRhYklkOiA2LFxyXG5cdFx0fSxcclxuXHRdO1xyXG5cclxuXHRjb25zdCBzZWN0aW9uMyA9IFtcclxuXHRcdHtcclxuXHRcdFx0ZGVzY3JpcHRpb246IGBQdXJwb3NlLWJ1aWx0IGVzcG9ydHMgYmV0dGluZyBwbGF0Zm9ybSwgYXNzZXQgZnVsbHkgYWNxdWlyZWQgZnJvbSBtYXJrZXQgbGVhZGluZyBlc3BvcnRzIGRldmVsb3BlciBVbHRyYVBsYXksIGVuaGFuY2luZyB0aGUgdXNlciBleHBlcmllbmNlIGZvciBCdWZmLmJldCBwbGF5ZXJzLlxyXG5cdFx0XHRgLFxyXG5cdFx0XHRpZDogMSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdGRlc2NyaXB0aW9uOiBgQlVGRkhVQiBhbiBpbi1ob3VzZSBkZXZlbG9wZWQgZXNwb3J0cyBuZXdzIGFnZ3JlZ2F0b3IgcGxhdGZvcm0sIGVuYWJsaW5nIGVzcG9ydHMgY29tbXVuaXR5IHRyYWZmaWMgYW5kIGVuZ2FnZW1lbnQsIGZhY2lsaXRhdGluZyBjcm9zcyBzYWxlcyBvcHBvcnR1bml0aWVzIHRvIEJ1ZmYuYmV0LlxyXG5cclxuXHRcdFx0YCxcclxuXHRcdFx0aWQ6IDIsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRkZXNjcmlwdGlvbjogYEdpdmVzIGNvbXBldGl0aXZlIGFkdmFudGFnZSBhZ2FpbnN0IG90aGVyIGVzcG9ydHMgYmV0dGluZyBvcGVyYXRvcnMgb24gdGhpcmQtcGFydHkgcGxhdGZvcm1zLlxyXG5cdFx0XHRgLFxyXG5cdFx0XHRpZDogMyxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdGRlc2NyaXB0aW9uOiBgSW4taG91c2UgZGV2ZWxvcGVkIGFmZmlsaWF0ZSBzb2Z0d2FyZSB0byBlbmhhbmNlIHRoZSBhZmZpbGlhdGUgZXhwZXJpZW5jZS5cclxuXHRcdFx0YCxcclxuXHRcdFx0aWQ6IDQsXHJcblx0XHR9LFxyXG5cdF07XHJcblxyXG5cdGNvbnN0IHRpbWVTdGFtcHMgPSBbXHJcblx0XHR7XHJcblx0XHRcdGRlc2NyaXB0aW9uOiBcIlgtQmV0LmNvIExhdW5jaGVkXCIsXHJcblx0XHRcdGRhdGU6IFwiT2N0b2JlciAyMDE3XCIsXHJcblx0XHRcdHRpbWVTdGFtcElkOiAxLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0ZGVzY3JpcHRpb246IFwiQlVGRi5iZXQgTGF1bmNoZWRcIixcclxuXHRcdFx0ZGF0ZTogXCJBcHJpbCAyMDE4XCIsXHJcblx0XHRcdHRpbWVTdGFtcElkOiAyLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0ZGVzY3JpcHRpb246IGBBZ3JlZW1lbnQgU2lnbmVkIEZlYnJ1YXJ5IDIwMjA7IFxcblxcblxyXG5cdFx0XHQgTWVyZ2VyIGNvbXBsZXRlZCAgQXByaWwgMjAyMGAsXHJcblx0XHRcdGRhdGU6IFwiQXByaWwgMjAyMFwiLFxyXG5cdFx0XHR0aW1lU3RhbXBJZDogMyxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdGRlc2NyaXB0aW9uOiBcIkJ1ZmZIVUIgTGF1bmNoZWRcIixcclxuXHRcdFx0ZGF0ZTogXCJBcHJpbCAyMDIwXCIsXHJcblx0XHRcdHRpbWVTdGFtcElkOiA0LFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdFx0XCJFc3RhYmxpc2htZW50IG9mIElzbGUgT2YgTWFuIGJhc2VkIGhvbGRpbmcgY29tcGFueSBYQiBWaXNpb24gVGVjaG5vbG9neSBMVERcIixcclxuXHRcdFx0ZGF0ZTogXCJKdW5lIDIwMjBcIixcclxuXHRcdFx0dGltZVN0YW1wSWQ6IDUsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRkZXNjcmlwdGlvbjogXCJJUE8gb24gVmllbm5hU3RvY2sgRXhjaGFuZ2VcIixcclxuXHRcdFx0ZGF0ZTogXCJRMSAyMDIxXCIsXHJcblx0XHRcdHRpbWVTdGFtcElkOiA2LFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0ZGVzY3JpcHRpb246IFwiTmV3IFByb2R1Y3QgTGF1bmNoZXNcIixcclxuXHRcdFx0ZGF0ZTogXCIyMDIxIE9ud2FyZHNcIixcclxuXHRcdFx0dGltZVN0YW1wSWQ6IDcsXHJcblx0XHR9LFxyXG5cdF07XHJcblxyXG5cdGNvbnN0IG91ckJyYW5kcyA9IFtcclxuXHRcdHtcclxuXHRcdFx0aW1nOiBcIi9pbWFnZXMvYWJvdXQtdXMvYnVmZi5wbmdcIixcclxuXHRcdFx0bGluazogXCIvYnVmZi1iZXRcIixcclxuXHRcdFx0ZGVzY3JpcHRpb246IFwibW9yZSBpbmZvXCIsXHJcblx0XHRcdGlkOiAxLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0aW1nOiBcIi9pbWFnZXMvYWJvdXQtdXMvQnVmZkh1Yi5wbmdcIixcclxuXHRcdFx0bGluazogXCIvYnVmZmh1YlwiLFxyXG5cdFx0XHRkZXNjcmlwdGlvbjogXCJtb3JlIGluZm9cIixcclxuXHRcdFx0aWQ6IDIsXHJcblx0XHR9LFxyXG5cdF07XHJcblxyXG5cdGNvbnN0IGVzcG9ydHNCb3hlcyA9IFtcclxuXHRcdHtcclxuXHRcdFx0aW1nOiBcIi9pbWFnZXMvaG9tZS9ib3gtMS5wbmdcIixcclxuXHRcdFx0dGl0bGU6IFwiRmFzdCBHcm93aW5nXCIsXHJcblx0XHRcdHRleHQ6XHJcblx0XHRcdFx0XCJJdCBpcyB0aGUgZmFzdGVzdCBncm93aW5nIHNwb3J0cyBwcm9kdWN0IGdsb2JhbGx5IGluIHRlcm1zIG9mIHBhcnRpY2lwYXRpb24sIHZpZXdlcnNoaXAgYW5kIHByaXplIG1vbmV5XCIsXHJcblx0XHRcdGlkOiAxLFxyXG5cdFx0XHRjb2xvcjogXCJibHVlXCIsXHJcblx0XHRcdGRlbGF5OiAwLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0aW1nOiBcIi9pbWFnZXMvaG9tZS9ib3gtMi5wbmdcIixcclxuXHRcdFx0dGl0bGU6IFwiSGlnaCBQcm9maWxlXCIsXHJcblx0XHRcdHRleHQ6XHJcblx0XHRcdFx0XCJQcml6ZSBtb25leSByZWFjaGVkICQyMjBtIGluIDIwMTksIHdpdGggcHJpemUgbW9uZXkgaW4gbWFqb3IgdG91cm5hbWVudHMgc3VycGFzc2luZyB0aGF0IG9mIHRyYWRpdGlvbmFsIHNwb3J0c1wiLFxyXG5cdFx0XHRpZDogMixcclxuXHRcdFx0Y29sb3I6IFwib3JhbmdlXCIsXHJcblx0XHRcdGRlbGF5OiAzMDAsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRpbWc6IFwiL2ltYWdlcy9ob21lL2JveC0zLnBuZ1wiLFxyXG5cdFx0XHR0aXRsZTogXCJBdHRyYWN0aXZlIERlbW9ncmFwaGljc1wiLFxyXG5cdFx0XHR0ZXh0OlxyXG5cdFx0XHRcdFwiZXNwb3J0cyBhcHBlYWxzIHRvIGtleSBkZW1vZ3JhcGhpY3MgdGhhdCBwcm9kdWN0cyBzdHJ1Z2dsZSB0byBpbnRlcmFjdCB3aXRoXCIsXHJcblx0XHRcdGlkOiAzLFxyXG5cdFx0XHRjb2xvcjogXCJwdXJwbGVcIixcclxuXHRcdFx0ZGVsYXk6IDYwMCxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdGltZzogXCIvaW1hZ2VzL2hvbWUvYm94LTQucG5nXCIsXHJcblx0XHRcdHRpdGxlOiBcIkdlb2dyYXBoaWNhbGx5IERpdmVyc2VcIixcclxuXHRcdFx0dGV4dDpcclxuXHRcdFx0XHRcIldoaWxlIGVzcG9ydHMgaXMgcGFydGljdWxhcmx5IHBvcHVsYXIgaW4gQXNpYSBhbmQgdGhlIFVTQSwgaXQgaGFzIGJlY29tZSBhIHRydWx5IGdsb2JhbCBwcm9kdWN0XCIsXHJcblx0XHRcdGlkOiA0LFxyXG5cdFx0XHRjb2xvcjogXCJncmVlblwiLFxyXG5cdFx0XHRkZWxheTogOTAwLFxyXG5cdFx0fSxcclxuXHRdO1xyXG5cdGNvbnN0IGJldHRpbmdMaXN0ID0gW1xyXG5cdFx0e1xyXG5cdFx0XHR0ZXh0OlxyXG5cdFx0XHRcdFwiQmV0dGluZyByZXZlbnVlcyBhcmUgZXhjbHVkZWQgZnJvbSB0aGUgZXN0aW1hdGVkICQxLjFibiBtYXJrZXQgc2l6ZSwgYW5kIGFsdGhvdWdoIGl0IHJlbWFpbnMgYSBtaW5vciBwYXJ0IG9mIHRoZSBlc3BvcnRzIGVjby1zeXN0ZW0sIGl0IGlzIGdyb3dpbmcgc3Ryb25nbHlcIixcclxuXHRcdFx0aWQ6IDEsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHR0ZXh0OlxyXG5cdFx0XHRcdFwiVHJhZGl0aW9uYWwgYm9va21ha2VycyBoYXZlIHN0YXJ0ZWQgdG8gZm9jdXMgb24gdGhlIGVzcG9ydHMgbWFya2V0LCBnaXZlbiBpdHMgc3Ryb25nIGdyb3d0aCBhbmQgZnV0dXJlIHBvdGVudGlhbCwgYnV0IHRoZXkgZG9u4oCZdCB1bmRlcnN0YW5kIGVzcG9ydHMgY3VzdG9tZXJzIGluIHRoZSBzYW1lIHdheSBhcyBlc3BvcnRzIGJldHRpbmcgc2l0ZXNcIixcclxuXHRcdFx0aWQ6IDIsXHJcblx0XHR9LFxyXG5cdF07XHJcblx0Y29uc3QgYnVmZmh1Yk1haW4gPSBbXHJcblx0XHR7XHJcblx0XHRcdHRleHQ6XHJcblx0XHRcdFx0XCJSZWR1Y2UgbWFya2V0aW5nIGNvc3QgdGhyb3VnaCBzaGlmdGluZyBzb21lIGFkdmVydGlzaW5nIHRvIG5vbi1nYW1ibGluZyBjYXRlZ29yeTtcIixcclxuXHRcdFx0aWQ6IDEsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHR0ZXh0OiBcIkluY3JlYXNlIGJyYW5kIGF3YXJlbmVzcyBhbmQgbG95YWx0eSB0byBkcml2ZSB0cmFmZmljO1wiLFxyXG5cdFx0XHRpZDogMixcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdHRleHQ6XHJcblx0XHRcdFx0XCJPbmUgcHJvZmlsZSBmb3IgQlVGRkhVQiBhbmQgQlVGRi5iZXQgdG8gaW5jcmVhc2UgcHJvcG9ydGlvbiBvZiBkZXBvc2l0aW5nIHVzZXJzO1wiLFxyXG5cdFx0XHRpZDogMyxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdHRleHQ6IFwiQWxsb3dzIHRvIGFkdmVydGlzZSBpbiBzZWFyY2ggZW5naW5lcyBhbmQgU29jaWFsIE1lZGlhc1wiLFxyXG5cdFx0XHRpZDogNCxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdHRleHQ6XHJcblx0XHRcdFx0XCJVc2VycyBjYW4gY29uc3VtZSBkZXRhaWxlZCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZXNwb3J0cyB3b3JsZCAoZS5nLiByYW5raW5nLCBwcmVkaWN0aW9ucywgbmV3cywgZXRjLilcIixcclxuXHRcdFx0aWQ6IDUsXHJcblx0XHR9LFxyXG5cdF07XHJcblxyXG5cdGNvbnN0IGJ1ZmZodWJCb3ggPSBbXHJcblx0XHR7XHJcblx0XHRcdGltZzogXCIvaW1hZ2VzL2J1ZmZodWIvcGFpbnQucG5nXCIsXHJcblx0XHRcdHRleHQ6IFwiTW9kZXJuIGdhbWluZyBkZXNpZ25cIixcclxuXHRcdFx0aWQ6IDEsXHJcblx0XHRcdGRlbGF5OiAwLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0aW1nOiBcIi9pbWFnZXMvYnVmZmh1Yi9yYW5rLnBuZ1wiLFxyXG5cdFx0XHR0ZXh0OiBcIk93biByYW5raW5nIHN5c3RlbVwiLFxyXG5cdFx0XHRpZDogMixcclxuXHRcdFx0ZGVsYXk6IDMwMCxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdGltZzogXCIvaW1hZ2VzL2J1ZmZodWIvY29tbWVyY2UucG5nXCIsXHJcblx0XHRcdHRleHQ6IFwiQ29tbXVuaXR5IG9yaWVudGVkXCIsXHJcblx0XHRcdGlkOiAzLFxyXG5cdFx0XHRkZWxheTogNjAwLFxyXG5cdFx0fSxcclxuXHRdO1xyXG5cdGNvbnN0IGJ1ZmZodWJGdW5uZWxTdGVwcyA9IFtcclxuXHRcdHtcclxuXHRcdFx0dGV4dDogXCJWaXNpdHMgdG8gbWVkaWEgcG9ydGFsIEJVRkZIVUJcIixcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdHRleHQ6IFwiQ3Jvc3Mtc2VsbCB2aXNpdG9ycyB0byBCVUZGLmJldCBiZXR0aW5nIHNpdGVcIixcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdHRleHQ6IFwiUmVnaXN0cmF0aW9ucyBvbiBCVUZGLmJldFwiLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0dGV4dDogXCJGaXJzdCBUaW1lIERlcG9zaXRpbmcgUGxheWVyc1wiLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0dGV4dDogXCJSZXRhaW5lZCBEZXBvc2l0aW5nIFBsYXllcnNcIixcclxuXHRcdH0sXHJcblx0XTtcclxuXHJcblx0Y29uc3QgYWR2YW50YWdlID0gW1xyXG5cdFx0e1xyXG5cdFx0XHRpbWFnZTogXCIvaW1hZ2VzL2J1ZmYvbW91c2UucG5nXCIsXHJcblx0XHRcdGFsdDogXCJtb3VzZVwiLFxyXG5cdFx0XHRudW1iZXJzOiAzNCxcclxuXHRcdFx0dGV4dDogXCJHYW1lcyBjb3ZlcmVkXCIsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRpbWFnZTogXCIvaW1hZ2VzL2J1ZmYvZXZlbnRzLnBuZ1wiLFxyXG5cdFx0XHRhbHQ6IFwicGFydHlcIixcclxuXHRcdFx0bnVtYmVyczogNjAwMCxcclxuXHRcdFx0dGV4dDogXCJNb250aGx5IGV2ZW50c1wiLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0aW1hZ2U6IFwiL2ltYWdlcy9idWZmL2VsaXBzZS5wbmdcIixcclxuXHRcdFx0YWx0OiBcImVsaXBzZVwiLFxyXG5cdFx0XHRudW1iZXJzOiA1NTAwLFxyXG5cdFx0XHR0ZXh0OiBcIkxpdmUgZXZlbnRzXCIsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRpbWFnZTogXCIvaW1hZ2VzL2J1ZmYvZ3Jvdy5wbmdcIixcclxuXHRcdFx0YWx0OiBcImdyb3dcIixcclxuXHRcdFx0bnVtYmVyczogMjAwLFxyXG5cdFx0XHR0ZXh0OiBcIk1hcmtldHNcIixcclxuXHRcdH0sXHJcblx0XTtcclxuXHJcblx0Y29uc3QgYWR2YW50YWdlU3BvcnRzID0gW1xyXG5cdFx0e1xyXG5cdFx0XHRpbWFnZTogXCIvaW1hZ2VzL2J1ZmYvYmFsbC5wbmdcIixcclxuXHRcdFx0YWx0OiBcIm1vdXNlXCIsXHJcblx0XHRcdG51bWJlcnM6IDUwLFxyXG5cdFx0XHR0ZXh0OiBcIlNwb3J0c1wiLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0aW1hZ2U6IFwiL2ltYWdlcy9idWZmL2V2ZW50cy5wbmdcIixcclxuXHRcdFx0YWx0OiBcInBhcnR5XCIsXHJcblx0XHRcdG51bWJlcnM6IDMwMDAwLFxyXG5cdFx0XHR0ZXh0OiBcIk1vbnRobHkgZXZlbnRzXCIsXHJcblx0XHR9LFxyXG5cclxuXHRcdHtcclxuXHRcdFx0aW1hZ2U6IFwiL2ltYWdlcy9idWZmL2dyb3cucG5nXCIsXHJcblx0XHRcdGFsdDogXCJncm93XCIsXHJcblx0XHRcdG51bWJlcnM6IDIwMDAsXHJcblx0XHRcdHRleHQ6IFwiTWFya2V0c1wiLFxyXG5cdFx0fSxcclxuXHRdO1xyXG5cdGNvbnN0IGluZm8gPSBbXHJcblx0XHR7XHJcblx0XHRcdHRpdGxlOiBcIk1vbnRobHkgUHJvbW90aW9uXCIsXHJcblx0XHRcdHRleHQ6XHJcblx0XHRcdFx0XCJUbyB0b3AgaXQgYWxsIG9mZiwgd2UgZG8gbW9udGhseSB0aGVtZS1wYXJrIHN0eWxlIHByb21vdGlvbnMgdG8ga2VlcCBpdCBhbGwgaW50ZXJlc3RpbmcgYW5kIHdlIGRpc2ggb3V0IGRhaWx5IGJldHRpbmcgcHJlZGljdGlvbnMgb24gb3VyIGFjdGl2ZSBTb2NpYWwgbWVkaWEgYW5kIGJsb2dzLlwiLFxyXG5cdFx0XHRpbWFnZTogXCIvaW1hZ2VzL2J1ZmYvY2FsZW5kYXIucG5nXCIsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHR0aXRsZTogXCJPdXIgU3VwcG9ydFwiLFxyXG5cdFx0XHR0ZXh0OlxyXG5cdFx0XHRcdFwiT3VyIHN1cHBvcnQgcXVhbGl0eSBib2FzdHMgYW4gaW5jcmVkaWJsZSA5NCUgc2F0aXNmYWN0aW9uIGluIG91ciBsaXZlIGNoYXQgc2VydmljZXMgZnJvbSB0aG91c2FuZHMgb2YgcmF0aW5ncyB0aGF0IG91ciBjbGllbnRzIGxlYXZlIGZvciB1cy5cIixcclxuXHRcdFx0aW1hZ2U6IFwiL2ltYWdlcy9idWZmL3dvcmsucG5nXCIsXHJcblx0XHR9LFxyXG5cdF07XHJcblx0Y29uc3Qgc3RvcmUgPSB7XHJcblx0XHRtYWluVGV4dCxcclxuXHRcdHRhYkNvbnRlbnQsXHJcblx0XHRzZWN0aW9uMyxcclxuXHRcdHRpbWVTdGFtcHMsXHJcblx0XHRvdXJCcmFuZHMsXHJcblx0XHRlc3BvcnRzQm94ZXMsXHJcblx0XHRiZXR0aW5nTGlzdCxcclxuXHRcdGJ1ZmZodWJNYWluLFxyXG5cdFx0YnVmZmh1YkJveCxcclxuXHRcdGJ1ZmZodWJGdW5uZWxTdGVwcyxcclxuXHRcdGhlcm9UZXh0LFxyXG5cdFx0YWR2YW50YWdlLFxyXG5cdFx0YWR2YW50YWdlU3BvcnRzLFxyXG5cdFx0aW5mbyxcclxuXHR9O1xyXG5cdHJldHVybiA8TWFpbkNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3N0b3JlfT57Y2hpbGRyZW59PC9NYWluQ29udGV4dC5Qcm92aWRlcj47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRleHQ7XHJcbiIsImltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLnNjc3NcIjtcbmltcG9ydCBDb250ZXh0IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnRleHRcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG5cdHJldHVybiAoXG5cdFx0PENvbnRleHQ+XG5cdFx0XHQ8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG5cdFx0PC9Db250ZXh0PlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==