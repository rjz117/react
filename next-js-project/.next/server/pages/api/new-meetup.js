"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/new-meetup";
exports.ids = ["pages/api/new-meetup"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/new-meetup.js":
/*!*********************************!*\
  !*** ./pages/api/new-meetup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n//api/new-meetup\n\nconst handler = async (req, res)=>{\n    if (req.method === \"POST\") {\n        const data = req.body;\n        const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(\"mongodb+srv://raviraj:raviraj117@cluster0.4s6mv.mongodb.net/?retryWrites=true&w=majority\");\n        const database = client.db(\"meetup\");\n        const meetupCollection = database.collection(\"meetups\");\n        const result = await meetupCollection.insertOne(data);\n        console.log(result);\n        client.close();\n        res.status(201).json({\n            message: \"meetup inserted!\"\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxnQkFBZ0I7QUFFc0I7QUFFdEMsTUFBTUMsT0FBTyxHQUFHLE9BQU9DLEdBQUcsRUFBRUMsR0FBRyxHQUFLO0lBQ2hDLElBQUdELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLE1BQU0sRUFBRTtRQUN0QixNQUFNQyxJQUFJLEdBQUdILEdBQUcsQ0FBQ0ksSUFBSTtRQUVyQixNQUFNQyxNQUFNLEdBQUcsTUFBTVAsd0RBQW1CLENBQUMsMEZBQTBGLENBQUM7UUFDcEksTUFBTVMsUUFBUSxHQUFHRixNQUFNLENBQUNHLEVBQUUsQ0FBQyxRQUFRLENBQUM7UUFFcEMsTUFBTUMsZ0JBQWdCLEdBQUdGLFFBQVEsQ0FBQ0csVUFBVSxDQUFDLFNBQVMsQ0FBQztRQUV2RCxNQUFNQyxNQUFNLEdBQUcsTUFBTUYsZ0JBQWdCLENBQUNHLFNBQVMsQ0FBQ1QsSUFBSSxDQUFDO1FBQ3JEVSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsTUFBTSxDQUFDLENBQUM7UUFDcEJOLE1BQU0sQ0FBQ1UsS0FBSyxFQUFFLENBQUM7UUFDZmQsR0FBRyxDQUFDZSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFDQyxPQUFPLEVBQUcsa0JBQWtCO1NBQUMsQ0FBQyxDQUFDO0tBQ3hEO0NBRUo7QUFHRCxpRUFBZW5CLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpcnN0bmV4dC8uL3BhZ2VzL2FwaS9uZXctbWVldHVwLmpzPzczOTQiXSwic291cmNlc0NvbnRlbnQiOlsiLy9hcGkvbmV3LW1lZXR1cFxuIFxuaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xuXG5jb25zdCBoYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgaWYocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSByZXEuYm9keTtcblxuICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KCdtb25nb2RiK3NydjovL3JhdmlyYWo6cmF2aXJhajExN0BjbHVzdGVyMC40czZtdi5tb25nb2RiLm5ldC8/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5Jyk7XG4gICAgICAgIGNvbnN0IGRhdGFiYXNlID0gY2xpZW50LmRiKCdtZWV0dXAnKTtcblxuICAgICAgICBjb25zdCBtZWV0dXBDb2xsZWN0aW9uID0gZGF0YWJhc2UuY29sbGVjdGlvbignbWVldHVwcycpXG5cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbWVldHVwQ29sbGVjdGlvbi5pbnNlcnRPbmUoZGF0YSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgIGNsaWVudC5jbG9zZSgpO1xuICAgICAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7bWVzc2FnZSA6ICdtZWV0dXAgaW5zZXJ0ZWQhJ30pO1xuICAgIH1cblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7Il0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImRhdGEiLCJib2R5IiwiY2xpZW50IiwiY29ubmVjdCIsImRhdGFiYXNlIiwiZGIiLCJtZWV0dXBDb2xsZWN0aW9uIiwiY29sbGVjdGlvbiIsInJlc3VsdCIsImluc2VydE9uZSIsImNvbnNvbGUiLCJsb2ciLCJjbG9zZSIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/new-meetup.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/new-meetup.js"));
module.exports = __webpack_exports__;

})();