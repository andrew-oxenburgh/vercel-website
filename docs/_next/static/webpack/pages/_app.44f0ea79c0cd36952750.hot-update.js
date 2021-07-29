webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/components/CornerStamp.js":
/*!***************************************!*\
  !*** ./src/components/CornerStamp.js ***!
  \***************************************/
/*! exports provided: CornerStamp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CornerStamp\", function() { return CornerStamp; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n\n\n\nvar _jsxFileName = \"/Users/andrew/dev/ANDREW-OXENBURGH/andrew-oxenburgh.github.io/src/components/CornerStamp.js\",\n    _s = $RefreshSig$();\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])({\n  triangle: {\n    position: 'absolute',\n    top: 0,\n    right: 0,\n    fontSize: '0.5em',\n    width: '0',\n    height: '0',\n    zIndex: 100,\n    border: 5 + 'em solid',\n    pointerEvents: 'none',\n    borderColor: 'rebeccapurple rebeccapurple transparent transparent'\n  },\n  text: {\n    color: 'white',\n    position: 'absolute',\n    top: 0,\n    right: 0,\n    background: 'transparent',\n    fontSize: '0.5em',\n    fontWeight: 'bold',\n    width: 5 + 'rem',\n    height: 5 + 'rem',\n    textAlign: 'center',\n    // Opacity: 0.5,\n    zIndex: 100,\n    transformOrigin: '0 0',\n    transform: 'translateX(3.2em) rotate(45deg)',\n    pointerEvents: 'none'\n  }\n});\nfunction CornerStamp() {\n  _s();\n\n  // Const size = 5;\n  var classes = useStyles(); // eslint-disable-next-line no-undef\n\n  var name =  true && window.location.hostname ? window.location.hostname : '';\n  var stamp;\n\n  if (name.indexOf('vercel') >= 0) {\n    stamp = 'vercel';\n  } else if (name.indexOf('github') >= 0) {\n    stamp = 'github';\n  } else if (name.indexOf('localhost') >= 0) {\n    stamp = 'localhost';\n  } else {\n    stamp = 'unknown';\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: classes.triangle\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: classes.text,\n      children: stamp\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true);\n}\n\n_s(CornerStamp, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = CornerStamp;\n\nvar _c;\n\n$RefreshReg$(_c, \"CornerStamp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ29ybmVyU3RhbXAuanM/NTg1ZiJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidHJpYW5nbGUiLCJwb3NpdGlvbiIsInRvcCIsInJpZ2h0IiwiZm9udFNpemUiLCJ3aWR0aCIsImhlaWdodCIsInpJbmRleCIsImJvcmRlciIsInBvaW50ZXJFdmVudHMiLCJib3JkZXJDb2xvciIsInRleHQiLCJjb2xvciIsImJhY2tncm91bmQiLCJmb250V2VpZ2h0IiwidGV4dEFsaWduIiwidHJhbnNmb3JtT3JpZ2luIiwidHJhbnNmb3JtIiwiQ29ybmVyU3RhbXAiLCJjbGFzc2VzIiwibmFtZSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaG9zdG5hbWUiLCJzdGFtcCIsImluZGV4T2YiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDO0FBQzVCQyxVQUFRLEVBQUU7QUFDVEMsWUFBUSxFQUFFLFVBREQ7QUFFVEMsT0FBRyxFQUFFLENBRkk7QUFHVEMsU0FBSyxFQUFFLENBSEU7QUFJVEMsWUFBUSxFQUFFLE9BSkQ7QUFLVEMsU0FBSyxFQUFFLEdBTEU7QUFNVEMsVUFBTSxFQUFFLEdBTkM7QUFPVEMsVUFBTSxFQUFFLEdBUEM7QUFRVEMsVUFBTSxFQUFFLElBQUksVUFSSDtBQVNUQyxpQkFBYSxFQUFFLE1BVE47QUFVVEMsZUFBVyxFQUFFO0FBVkosR0FEa0I7QUFhNUJDLE1BQUksRUFBRTtBQUNMQyxTQUFLLEVBQUUsT0FERjtBQUVMWCxZQUFRLEVBQUUsVUFGTDtBQUdMQyxPQUFHLEVBQUUsQ0FIQTtBQUlMQyxTQUFLLEVBQUUsQ0FKRjtBQUtMVSxjQUFVLEVBQUUsYUFMUDtBQU1MVCxZQUFRLEVBQUUsT0FOTDtBQU9MVSxjQUFVLEVBQUUsTUFQUDtBQVFMVCxTQUFLLEVBQUUsSUFBSSxLQVJOO0FBU0xDLFVBQU0sRUFBRSxJQUFJLEtBVFA7QUFVTFMsYUFBUyxFQUFFLFFBVk47QUFXTDtBQUNBUixVQUFNLEVBQUUsR0FaSDtBQWFMUyxtQkFBZSxFQUFFLEtBYlo7QUFjTEMsYUFBUyxFQUFFLGlDQWROO0FBZUxSLGlCQUFhLEVBQUU7QUFmVjtBQWJzQixDQUFELENBQTVCO0FBZ0NPLFNBQVNTLFdBQVQsR0FBdUI7QUFBQTs7QUFDN0I7QUFDQSxNQUFNQyxPQUFPLEdBQUdyQixTQUFTLEVBQXpCLENBRjZCLENBSTdCOztBQUNBLE1BQU1zQixJQUFJLEdBQUcsU0FBaUNDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsUUFBakQsR0FBNERGLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsUUFBNUUsR0FBdUYsRUFBcEc7QUFFQSxNQUFJQyxLQUFKOztBQUVBLE1BQUlKLElBQUksQ0FBQ0ssT0FBTCxDQUFhLFFBQWIsS0FBMEIsQ0FBOUIsRUFBaUM7QUFDaENELFNBQUssR0FBRyxRQUFSO0FBQ0EsR0FGRCxNQUVPLElBQUlKLElBQUksQ0FBQ0ssT0FBTCxDQUFhLFFBQWIsS0FBMEIsQ0FBOUIsRUFBaUM7QUFDdkNELFNBQUssR0FBRyxRQUFSO0FBQ0EsR0FGTSxNQUVBLElBQUlKLElBQUksQ0FBQ0ssT0FBTCxDQUFhLFdBQWIsS0FBNkIsQ0FBakMsRUFBb0M7QUFDMUNELFNBQUssR0FBRyxXQUFSO0FBQ0EsR0FGTSxNQUVBO0FBQ05BLFNBQUssR0FBRyxTQUFSO0FBQ0E7O0FBRUQsc0JBQ0M7QUFBQSw0QkFDQztBQUFLLGVBQVMsRUFBRUwsT0FBTyxDQUFDbkI7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELGVBRUM7QUFBSyxlQUFTLEVBQUVtQixPQUFPLENBQUNSLElBQXhCO0FBQUEsZ0JBQStCYTtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkQ7QUFBQSxrQkFERDtBQU1BOztHQXpCZU4sVztVQUVDcEIsUzs7O0tBRkRvQixXIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvQ29ybmVyU3RhbXAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHttYWtlU3R5bGVzfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcblx0dHJpYW5nbGU6IHtcblx0XHRwb3NpdGlvbjogJ2Fic29sdXRlJyxcblx0XHR0b3A6IDAsXG5cdFx0cmlnaHQ6IDAsXG5cdFx0Zm9udFNpemU6ICcwLjVlbScsXG5cdFx0d2lkdGg6ICcwJyxcblx0XHRoZWlnaHQ6ICcwJyxcblx0XHR6SW5kZXg6IDEwMCxcblx0XHRib3JkZXI6IDUgKyAnZW0gc29saWQnLFxuXHRcdHBvaW50ZXJFdmVudHM6ICdub25lJyxcblx0XHRib3JkZXJDb2xvcjogJ3JlYmVjY2FwdXJwbGUgcmViZWNjYXB1cnBsZSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCcsXG5cdH0sXG5cdHRleHQ6IHtcblx0XHRjb2xvcjogJ3doaXRlJyxcblx0XHRwb3NpdGlvbjogJ2Fic29sdXRlJyxcblx0XHR0b3A6IDAsXG5cdFx0cmlnaHQ6IDAsXG5cdFx0YmFja2dyb3VuZDogJ3RyYW5zcGFyZW50Jyxcblx0XHRmb250U2l6ZTogJzAuNWVtJyxcblx0XHRmb250V2VpZ2h0OiAnYm9sZCcsXG5cdFx0d2lkdGg6IDUgKyAncmVtJyxcblx0XHRoZWlnaHQ6IDUgKyAncmVtJyxcblx0XHR0ZXh0QWxpZ246ICdjZW50ZXInLFxuXHRcdC8vIE9wYWNpdHk6IDAuNSxcblx0XHR6SW5kZXg6IDEwMCxcblx0XHR0cmFuc2Zvcm1PcmlnaW46ICcwIDAnLFxuXHRcdHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMy4yZW0pIHJvdGF0ZSg0NWRlZyknLFxuXHRcdHBvaW50ZXJFdmVudHM6ICdub25lJyxcblx0fSxcbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gQ29ybmVyU3RhbXAoKSB7XG5cdC8vIENvbnN0IHNpemUgPSA1O1xuXHRjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdGNvbnN0IG5hbWUgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgPyB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgOiAnJztcblxuXHRsZXQgc3RhbXA7XG5cblx0aWYgKG5hbWUuaW5kZXhPZigndmVyY2VsJykgPj0gMCkge1xuXHRcdHN0YW1wID0gJ3ZlcmNlbCc7XG5cdH0gZWxzZSBpZiAobmFtZS5pbmRleE9mKCdnaXRodWInKSA+PSAwKSB7XG5cdFx0c3RhbXAgPSAnZ2l0aHViJztcblx0fSBlbHNlIGlmIChuYW1lLmluZGV4T2YoJ2xvY2FsaG9zdCcpID49IDApIHtcblx0XHRzdGFtcCA9ICdsb2NhbGhvc3QnO1xuXHR9IGVsc2Uge1xuXHRcdHN0YW1wID0gJ3Vua25vd24nO1xuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudHJpYW5nbGV9Lz5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9PntzdGFtcH08L2Rpdj5cblx0XHQ8Lz5cblx0KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/CornerStamp.js\n");

/***/ })

})