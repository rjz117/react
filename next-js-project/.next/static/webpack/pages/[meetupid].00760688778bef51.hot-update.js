"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[meetupid]",{

/***/ "./components/meetups/MeetupDetail.js":
/*!********************************************!*\
  !*** ./components/meetups/MeetupDetail.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar DUMMY_MEETUPS = [\n    {\n        id: \"m1\",\n        title: \"A First Meetup\",\n        image: \"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg\",\n        address: \"Some address 5, 12345 Some City\",\n        description: \"This is a first meetup!\"\n    },\n    {\n        id: \"m2\",\n        title: \"A Second Meetup\",\n        image: \"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg\",\n        address: \"Some address 10, 12345 Some City\",\n        description: \"This is a second meetup!\"\n    }, \n];\nvar MeetupDetail = function(props) {\n    var meet = props.meet;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: meet.image,\n                alt: \"meetup\"\n            }, void 0, false, {\n                fileName: \"/home/pp-2/Ravirajsinh/react/firstnext/components/meetups/MeetupDetail.js\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: meet.title\n            }, void 0, false, {\n                fileName: \"/home/pp-2/Ravirajsinh/react/firstnext/components/meetups/MeetupDetail.js\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"address\", {\n                children: meet.address\n            }, void 0, false, {\n                fileName: \"/home/pp-2/Ravirajsinh/react/firstnext/components/meetups/MeetupDetail.js\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: meet.description\n            }, void 0, false, {\n                fileName: \"/home/pp-2/Ravirajsinh/react/firstnext/components/meetups/MeetupDetail.js\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/pp-2/Ravirajsinh/react/firstnext/components/meetups/MeetupDetail.js\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, _this);\n};\n_c = MeetupDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MeetupDetail);\nvar _c;\n$RefreshReg$(_c, \"MeetupDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFBd0M7QUFDUDtBQUVqQyxJQUFNRSxhQUFhLEdBQUc7SUFDbEI7UUFDRUMsRUFBRSxFQUFFLElBQUk7UUFDUkMsS0FBSyxFQUFFLGdCQUFnQjtRQUN2QkMsS0FBSyxFQUNILHdIQUF3SDtRQUMxSEMsT0FBTyxFQUFFLGlDQUFpQztRQUMxQ0MsV0FBVyxFQUFFLHlCQUF5QjtLQUN2QztJQUNEO1FBQ0VKLEVBQUUsRUFBRSxJQUFJO1FBQ1JDLEtBQUssRUFBRSxpQkFBaUI7UUFDeEJDLEtBQUssRUFDSCx3SEFBd0g7UUFDMUhDLE9BQU8sRUFBRSxrQ0FBa0M7UUFDM0NDLFdBQVcsRUFBRSwwQkFBMEI7S0FDeEM7Q0FDRjtBQUVELElBQU1DLFlBQVksR0FBRyxTQUFDQyxLQUFLLEVBQUs7SUFDOUIsSUFBTUMsSUFBSSxHQUFHRCxLQUFLLENBQUNDLElBQUk7SUFDdkIscUJBQ0ksOERBQUNULDJDQUFROzswQkFDTCw4REFBQ1UsS0FBRztnQkFBQ0MsR0FBRyxFQUFFRixJQUFJLENBQUNMLEtBQUs7Z0JBQUVRLEdBQUcsRUFBQyxRQUFROzs7OztxQkFBRTswQkFDcEMsOERBQUNDLElBQUU7MEJBQUVKLElBQUksQ0FBQ04sS0FBSzs7Ozs7cUJBQU07MEJBQ3JCLDhEQUFDRSxTQUFPOzBCQUFFSSxJQUFJLENBQUNKLE9BQU87Ozs7O3FCQUFXOzBCQUNqQyw4REFBQ1MsR0FBQzswQkFBRUwsSUFBSSxDQUFDSCxXQUFXOzs7OztxQkFBSzs7Ozs7O2FBQ2xCLENBQ2Q7Q0FDRjtBQVZLQyxLQUFBQSxZQUFZO0FBWWxCLCtEQUFlQSxZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBEZXRhaWwuanM/MzFkMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IERVTU1ZX01FRVRVUFMgPSBbXG4gICAge1xuICAgICAgaWQ6IFwibTFcIixcbiAgICAgIHRpdGxlOiBcIkEgRmlyc3QgTWVldHVwXCIsXG4gICAgICBpbWFnZTpcbiAgICAgICAgXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iL2QvZDMvU3RhZHRiaWxkX00lQzMlQkNuY2hlbi5qcGcvMTI4MHB4LVN0YWR0YmlsZF9NJUMzJUJDbmNoZW4uanBnXCIsXG4gICAgICBhZGRyZXNzOiBcIlNvbWUgYWRkcmVzcyA1LCAxMjM0NSBTb21lIENpdHlcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSBmaXJzdCBtZWV0dXAhXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogXCJtMlwiLFxuICAgICAgdGl0bGU6IFwiQSBTZWNvbmQgTWVldHVwXCIsXG4gICAgICBpbWFnZTpcbiAgICAgICAgXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iL2QvZDMvU3RhZHRiaWxkX00lQzMlQkNuY2hlbi5qcGcvMTI4MHB4LVN0YWR0YmlsZF9NJUMzJUJDbmNoZW4uanBnXCIsXG4gICAgICBhZGRyZXNzOiBcIlNvbWUgYWRkcmVzcyAxMCwgMTIzNDUgU29tZSBDaXR5XCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgc2Vjb25kIG1lZXR1cCFcIixcbiAgICB9LFxuICBdO1xuXG4gIGNvbnN0IE1lZXR1cERldGFpbCA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IG1lZXQgPSBwcm9wcy5tZWV0O1xuICAgIHJldHVybiAoXG4gICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgIDxpbWcgc3JjPXttZWV0LmltYWdlfSBhbHQ9J21lZXR1cCcvPlxuICAgICAgICAgICAgPGgxPnttZWV0LnRpdGxlfTwvaDE+XG4gICAgICAgICAgICA8YWRkcmVzcz57bWVldC5hZGRyZXNzfTwvYWRkcmVzcz5cbiAgICAgICAgICAgIDxwPnttZWV0LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgPC9GcmFnbWVudD5cbiAgICApXG4gIH1cblxuICBleHBvcnQgZGVmYXVsdCBNZWV0dXBEZXRhaWwiXSwibmFtZXMiOlsidXNlUm91dGVyIiwiRnJhZ21lbnQiLCJEVU1NWV9NRUVUVVBTIiwiaWQiLCJ0aXRsZSIsImltYWdlIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiTWVldHVwRGV0YWlsIiwicHJvcHMiLCJtZWV0IiwiaW1nIiwic3JjIiwiYWx0IiwiaDEiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/meetups/MeetupDetail.js\n"));

/***/ })

});