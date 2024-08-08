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
exports.id = "app/api/route";
exports.ids = ["app/api/route"];
exports.modules = {

/***/ "@aws-sdk/client-s3":
/*!*************************************!*\
  !*** external "@aws-sdk/client-s3" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("@aws-sdk/client-s3");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Froute&page=%2Fapi%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Froute.js&appDir=C%3A%5CUsers%5CHP%5CDocuments%5CDev%5Cpdf-summerize-app%5Cfrontend%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CHP%5CDocuments%5CDev%5Cpdf-summerize-app%5Cfrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=export&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Froute&page=%2Fapi%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Froute.js&appDir=C%3A%5CUsers%5CHP%5CDocuments%5CDev%5Cpdf-summerize-app%5Cfrontend%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CHP%5CDocuments%5CDev%5Cpdf-summerize-app%5Cfrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=export&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_HP_Documents_Dev_pdf_summerize_app_frontend_app_api_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/route.js */ \"(rsc)/./app/api/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"export\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/route\",\n        pathname: \"/api\",\n        filename: \"route\",\n        bundlePath: \"app/api/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\HP\\\\Documents\\\\Dev\\\\pdf-summerize-app\\\\frontend\\\\app\\\\api\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_HP_Documents_Dev_pdf_summerize_app_frontend_app_api_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNIUCU1Q0RvY3VtZW50cyU1Q0RldiU1Q3BkZi1zdW1tZXJpemUtYXBwJTVDZnJvbnRlbmQlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q0hQJTVDRG9jdW1lbnRzJTVDRGV2JTVDcGRmLXN1bW1lcml6ZS1hcHAlNUNmcm9udGVuZCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD1leHBvcnQmcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDOEI7QUFDM0c7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvPzUzNTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcSFBcXFxcRG9jdW1lbnRzXFxcXERldlxcXFxwZGYtc3VtbWVyaXplLWFwcFxcXFxmcm9udGVuZFxcXFxhcHBcXFxcYXBpXFxcXHJvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcImV4cG9ydFwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXEhQXFxcXERvY3VtZW50c1xcXFxEZXZcXFxccGRmLXN1bW1lcml6ZS1hcHBcXFxcZnJvbnRlbmRcXFxcYXBwXFxcXGFwaVxcXFxyb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Froute&page=%2Fapi%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Froute.js&appDir=C%3A%5CUsers%5CHP%5CDocuments%5CDev%5Cpdf-summerize-app%5Cfrontend%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CHP%5CDocuments%5CDev%5Cpdf-summerize-app%5Cfrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=export&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/route.js":
/*!**************************!*\
  !*** ./app/api/route.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _octoai_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @octoai/client */ \"(rsc)/./node_modules/@octoai/client/build/module/index.js\");\n\n\nconst client = new _octoai_client__WEBPACK_IMPORTED_MODULE_1__.Client(process.env.OCTOAI_TOKEN);\nconst POST = async (req)=>{\n    const body = await req.json();\n    console.log(\"body: \", body);\n    const completion = await client.chat.completions.create({\n        \"messages\": [\n            {\n                \"role\": \"system\",\n                \"content\": \"You are a tool that summarizes text. This tool is a web appliation that extracts text from a PDF document and produces a formatted list of the main points in the given text. Do not communicate with the user directly.\"\n            },\n            {\n                \"role\": \"assistant\",\n                \"content\": `text:\\n${body.text}`\n            }\n        ],\n        \"model\": \"mixtral-8x7b-instruct\",\n        \"presence_penalty\": 0,\n        \"temperature\": 0.6,\n        \"top_p\": 0.9\n    });\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        success: true,\n        message: \"Hello, World!\",\n        summary: completion.choices[0].message.content\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEyQztBQUNKO0FBRXZDLE1BQU1FLFNBQVMsSUFBSUQsa0RBQU1BLENBQUNFLFFBQVFDLEdBQUcsQ0FBQ0MsWUFBWTtBQUczQyxNQUFNQyxPQUFPLE9BQU9DO0lBQ3pCLE1BQU1DLE9BQU8sTUFBTUQsSUFBSUUsSUFBSTtJQUMzQkMsUUFBUUMsR0FBRyxDQUFDLFVBQVVIO0lBRXRCLE1BQU1JLGFBQWEsTUFBTVYsT0FBT1csSUFBSSxDQUFDQyxXQUFXLENBQUNDLE1BQU0sQ0FBRTtRQUN2RCxZQUFZO1lBQ1Y7Z0JBQ0UsUUFBUTtnQkFDUixXQUFXO1lBQ2I7WUFDQTtnQkFDRSxRQUFRO2dCQUNSLFdBQVcsQ0FBQyxPQUFPLEVBQUVQLEtBQUtRLElBQUksQ0FBQyxDQUFDO1lBQ2xDO1NBQ0Q7UUFDRCxTQUFTO1FBQ1Qsb0JBQW9CO1FBQ3BCLGVBQWU7UUFDZixTQUFTO0lBQ1g7SUFFQSxPQUFPaEIscURBQVlBLENBQUNTLElBQUksQ0FBQztRQUN2QlEsU0FBUztRQUNUQyxTQUFTO1FBQ1RDLFNBQVNQLFdBQVdRLE9BQU8sQ0FBQyxFQUFFLENBQUNGLE9BQU8sQ0FBQ0csT0FBTztJQUNoRDtBQUNGLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9hcHAvYXBpL3JvdXRlLmpzP2JkYWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xuaW1wb3J0IHsgQ2xpZW50IH0gZnJvbSBcIkBvY3RvYWkvY2xpZW50XCJcblxuY29uc3QgY2xpZW50ID0gbmV3IENsaWVudChwcm9jZXNzLmVudi5PQ1RPQUlfVE9LRU4pXG5cblxuZXhwb3J0IGNvbnN0IFBPU1QgPSBhc3luYyAocmVxKSA9PiB7XG4gIGNvbnN0IGJvZHkgPSBhd2FpdCByZXEuanNvbigpXG4gIGNvbnNvbGUubG9nKFwiYm9keTogXCIsIGJvZHkpXG5cbiAgY29uc3QgY29tcGxldGlvbiA9IGF3YWl0IGNsaWVudC5jaGF0LmNvbXBsZXRpb25zLmNyZWF0ZSgge1xuICAgIFwibWVzc2FnZXNcIjogW1xuICAgICAge1xuICAgICAgICBcInJvbGVcIjogXCJzeXN0ZW1cIixcbiAgICAgICAgXCJjb250ZW50XCI6IFwiWW91IGFyZSBhIHRvb2wgdGhhdCBzdW1tYXJpemVzIHRleHQuIFRoaXMgdG9vbCBpcyBhIHdlYiBhcHBsaWF0aW9uIHRoYXQgZXh0cmFjdHMgdGV4dCBmcm9tIGEgUERGIGRvY3VtZW50IGFuZCBwcm9kdWNlcyBhIGZvcm1hdHRlZCBsaXN0IG9mIHRoZSBtYWluIHBvaW50cyBpbiB0aGUgZ2l2ZW4gdGV4dC4gRG8gbm90IGNvbW11bmljYXRlIHdpdGggdGhlIHVzZXIgZGlyZWN0bHkuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwicm9sZVwiOiBcImFzc2lzdGFudFwiLFxuICAgICAgICBcImNvbnRlbnRcIjogYHRleHQ6XFxuJHtib2R5LnRleHR9YFxuICAgICAgfSxcbiAgICBdLFxuICAgIFwibW9kZWxcIjogXCJtaXh0cmFsLTh4N2ItaW5zdHJ1Y3RcIixcbiAgICBcInByZXNlbmNlX3BlbmFsdHlcIjogMCxcbiAgICBcInRlbXBlcmF0dXJlXCI6IDAuNixcbiAgICBcInRvcF9wXCI6IDAuOVxuICB9KTtcblxuICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xuICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgbWVzc2FnZTogXCJIZWxsbywgV29ybGQhXCIsXG4gICAgc3VtbWFyeTogY29tcGxldGlvbi5jaG9pY2VzWzBdLm1lc3NhZ2UuY29udGVudFxuICB9KVxufSJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJDbGllbnQiLCJjbGllbnQiLCJwcm9jZXNzIiwiZW52IiwiT0NUT0FJX1RPS0VOIiwiUE9TVCIsInJlcSIsImJvZHkiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImNvbXBsZXRpb24iLCJjaGF0IiwiY29tcGxldGlvbnMiLCJjcmVhdGUiLCJ0ZXh0Iiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJzdW1tYXJ5IiwiY2hvaWNlcyIsImNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/route.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@octoai"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Froute&page=%2Fapi%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Froute.js&appDir=C%3A%5CUsers%5CHP%5CDocuments%5CDev%5Cpdf-summerize-app%5Cfrontend%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CHP%5CDocuments%5CDev%5Cpdf-summerize-app%5Cfrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=export&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();