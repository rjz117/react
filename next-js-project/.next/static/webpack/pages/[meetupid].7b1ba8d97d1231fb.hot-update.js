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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar DUMMY_MEETUPS = [\n    {\n        id: \"m1\",\n        title: \"A First Meetup\",\n        image: \"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg\",\n        address: \"Some address 5, 12345 Some City\",\n        description: \"This is a first meetup!\"\n    },\n    {\n        id: \"m2\",\n        title: \"A Second Meetup\",\n        image: \"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg\",\n        address: \"Some address 10, 12345 Some City\",\n        description: \"This is a second meetup!\"\n    }, \n];\nvar MeetupDetail = function(props) {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var meetId = props.id;\n    var meetup = DUMMY_MEETUPS.find(function(meet) {\n        return meet.id === meetId;\n    });\n    console.log(meetup);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: props.image,\n                alt: \"meetup\"\n            }, void 0, false, {\n                fileName: \"/home/pp-2/Ravirajsinh/react/firstnext/components/meetups/MeetupDetail.js\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: props.title\n            }, void 0, false, {\n                fileName: \"/home/pp-2/Ravirajsinh/react/firstnext/components/meetups/MeetupDetail.js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"address\", {\n                children: props.address\n            }, void 0, false, {\n                fileName: \"/home/pp-2/Ravirajsinh/react/firstnext/components/meetups/MeetupDetail.js\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: meetup.description\n            }, void 0, false, {\n                fileName: \"/home/pp-2/Ravirajsinh/react/firstnext/components/meetups/MeetupDetail.js\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/pp-2/Ravirajsinh/react/firstnext/components/meetups/MeetupDetail.js\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, _this);\n};\n_s(MeetupDetail, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = MeetupDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MeetupDetail);\nvar _c;\n$RefreshReg$(_c, \"MeetupDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFBd0M7QUFDUDs7QUFFakMsSUFBTUUsYUFBYSxHQUFHO0lBQ2xCO1FBQ0VDLEVBQUUsRUFBRSxJQUFJO1FBQ1JDLEtBQUssRUFBRSxnQkFBZ0I7UUFDdkJDLEtBQUssRUFDSCx3SEFBd0g7UUFDMUhDLE9BQU8sRUFBRSxpQ0FBaUM7UUFDMUNDLFdBQVcsRUFBRSx5QkFBeUI7S0FDdkM7SUFDRDtRQUNFSixFQUFFLEVBQUUsSUFBSTtRQUNSQyxLQUFLLEVBQUUsaUJBQWlCO1FBQ3hCQyxLQUFLLEVBQ0gsd0hBQXdIO1FBQzFIQyxPQUFPLEVBQUUsa0NBQWtDO1FBQzNDQyxXQUFXLEVBQUUsMEJBQTBCO0tBQ3hDO0NBQ0Y7QUFFRCxJQUFNQyxZQUFZLEdBQUcsU0FBQ0MsS0FBSyxFQUFLOztJQUM5QixJQUFNQyxNQUFNLEdBQUdWLHNEQUFTLEVBQUU7SUFDMUIsSUFBTVcsTUFBTSxHQUFHRixLQUFLLENBQUNOLEVBQUU7SUFFdkIsSUFBTVMsTUFBTSxHQUFHVixhQUFhLENBQUNXLElBQUksQ0FBQyxTQUFDQyxJQUFJO2VBQUtBLElBQUksQ0FBQ1gsRUFBRSxLQUFLUSxNQUFNO0tBQUEsQ0FBQztJQUMvREksT0FBTyxDQUFDQyxHQUFHLENBQUNKLE1BQU0sQ0FBQyxDQUFDO0lBQ3BCLHFCQUNJLDhEQUFDWCwyQ0FBUTs7MEJBQ0wsOERBQUNnQixLQUFHO2dCQUFDQyxHQUFHLEVBQUVULEtBQUssQ0FBQ0osS0FBSztnQkFBRWMsR0FBRyxFQUFDLFFBQVE7Ozs7O3FCQUFFOzBCQUNyQyw4REFBQ0MsSUFBRTswQkFBRVgsS0FBSyxDQUFDTCxLQUFLOzs7OztxQkFBTTswQkFDdEIsOERBQUNFLFNBQU87MEJBQUVHLEtBQUssQ0FBQ0gsT0FBTzs7Ozs7cUJBQVc7MEJBQ2xDLDhEQUFDZSxHQUFDOzBCQUFFVCxNQUFNLENBQUNMLFdBQVc7Ozs7O3FCQUFLOzs7Ozs7YUFDcEIsQ0FDZDtDQUNGO0dBZEtDLFlBQVk7O1FBQ0RSLGtEQUFTOzs7QUFEcEJRLEtBQUFBLFlBQVk7QUFnQmxCLCtEQUFlQSxZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBEZXRhaWwuanM/MzFkMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IERVTU1ZX01FRVRVUFMgPSBbXG4gICAge1xuICAgICAgaWQ6IFwibTFcIixcbiAgICAgIHRpdGxlOiBcIkEgRmlyc3QgTWVldHVwXCIsXG4gICAgICBpbWFnZTpcbiAgICAgICAgXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iL2QvZDMvU3RhZHRiaWxkX00lQzMlQkNuY2hlbi5qcGcvMTI4MHB4LVN0YWR0YmlsZF9NJUMzJUJDbmNoZW4uanBnXCIsXG4gICAgICBhZGRyZXNzOiBcIlNvbWUgYWRkcmVzcyA1LCAxMjM0NSBTb21lIENpdHlcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSBmaXJzdCBtZWV0dXAhXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogXCJtMlwiLFxuICAgICAgdGl0bGU6IFwiQSBTZWNvbmQgTWVldHVwXCIsXG4gICAgICBpbWFnZTpcbiAgICAgICAgXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iL2QvZDMvU3RhZHRiaWxkX00lQzMlQkNuY2hlbi5qcGcvMTI4MHB4LVN0YWR0YmlsZF9NJUMzJUJDbmNoZW4uanBnXCIsXG4gICAgICBhZGRyZXNzOiBcIlNvbWUgYWRkcmVzcyAxMCwgMTIzNDUgU29tZSBDaXR5XCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgc2Vjb25kIG1lZXR1cCFcIixcbiAgICB9LFxuICBdO1xuXG4gIGNvbnN0IE1lZXR1cERldGFpbCA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IG1lZXRJZCA9IHByb3BzLmlkO1xuXG4gICAgY29uc3QgbWVldHVwID0gRFVNTVlfTUVFVFVQUy5maW5kKChtZWV0KSA9PiBtZWV0LmlkID09PSBtZWV0SWQpO1xuICAgIGNvbnNvbGUubG9nKG1lZXR1cCk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgPGltZyBzcmM9e3Byb3BzLmltYWdlfSBhbHQ9J21lZXR1cCcvPlxuICAgICAgICAgICAgPGgxPntwcm9wcy50aXRsZX08L2gxPlxuICAgICAgICAgICAgPGFkZHJlc3M+e3Byb3BzLmFkZHJlc3N9PC9hZGRyZXNzPlxuICAgICAgICAgICAgPHA+e21lZXR1cC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgKVxuICB9XG5cbiAgZXhwb3J0IGRlZmF1bHQgTWVldHVwRGV0YWlsIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIkZyYWdtZW50IiwiRFVNTVlfTUVFVFVQUyIsImlkIiwidGl0bGUiLCJpbWFnZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsIk1lZXR1cERldGFpbCIsInByb3BzIiwicm91dGVyIiwibWVldElkIiwibWVldHVwIiwiZmluZCIsIm1lZXQiLCJjb25zb2xlIiwibG9nIiwiaW1nIiwic3JjIiwiYWx0IiwiaDEiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/meetups/MeetupDetail.js\n"));

/***/ })

});