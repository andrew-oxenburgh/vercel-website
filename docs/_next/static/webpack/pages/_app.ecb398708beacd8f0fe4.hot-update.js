webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/components/CornerStamp.js":
/*!***************************************!*\
  !*** ./src/components/CornerStamp.js ***!
  \***************************************/
/*! exports provided: CornerStamp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CornerStamp\", function() { return CornerStamp; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n\n\n\nvar _jsxFileName = \"/Users/andrew/dev/ANDREW-OXENBURGH/andrew-oxenburgh.github.io/src/components/CornerStamp.js\",\n    _s = $RefreshSig$();\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])({\n  triangle: {\n    position: 'absolute',\n    top: 0,\n    right: 0,\n    fontSize: '0.5em',\n    width: '0',\n    height: '0',\n    // Opacity: 0.5,\n    zIndex: 100,\n    border: 5 + 'em solid',\n    pointerEvents: 'none'\n  },\n  github: {\n    borderColor: 'rebeccapurple rebeccapurple transparent transparent'\n  },\n  vercel: {\n    borderColor: 'silver, silver transparent transparent'\n  },\n  localhost: {\n    borderColor: 'red red transparent transparent'\n  },\n  text: {\n    color: 'white',\n    position: 'absolute',\n    top: 0,\n    right: 0,\n    background: 'transparent',\n    fontSize: '0.5em',\n    width: 5 + 'rem',\n    height: 5 + 'rem',\n    textAlign: 'center',\n    // Opacity: 0.5,\n    zIndex: 100,\n    transformOrigin: '0 0',\n    transform: 'translateX(3em) rotate(45deg)',\n    pointerEvents: 'none'\n  }\n});\nfunction CornerStamp() {\n  _s();\n\n  // Const size = 5;\n  var classes = useStyles(); // eslint-disable-next-line no-undef\n\n  var name =  true && window.location.hostname ? window.location.hostname : '';\n  var stamp;\n  var env;\n\n  if (name.indexOf('vercel') >= 0) {\n    env = classes.vercel;\n    stamp = 'vercel';\n  } else if (name.indexOf('github') >= 0) {\n    env = classes.github;\n    stamp = 'github';\n  } else {\n    env = classes.localhost;\n    stamp = 'local';\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(classes.triangle, env)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: classes.text,\n      children: stamp\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true);\n}\n\n_s(CornerStamp, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = CornerStamp;\n\nvar _c;\n\n$RefreshReg$(_c, \"CornerStamp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ29ybmVyU3RhbXAuanM/NTg1ZiJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidHJpYW5nbGUiLCJwb3NpdGlvbiIsInRvcCIsInJpZ2h0IiwiZm9udFNpemUiLCJ3aWR0aCIsImhlaWdodCIsInpJbmRleCIsImJvcmRlciIsInBvaW50ZXJFdmVudHMiLCJnaXRodWIiLCJib3JkZXJDb2xvciIsInZlcmNlbCIsImxvY2FsaG9zdCIsInRleHQiLCJjb2xvciIsImJhY2tncm91bmQiLCJ0ZXh0QWxpZ24iLCJ0cmFuc2Zvcm1PcmlnaW4iLCJ0cmFuc2Zvcm0iLCJDb3JuZXJTdGFtcCIsImNsYXNzZXMiLCJuYW1lIiwid2luZG93IiwibG9jYXRpb24iLCJob3N0bmFtZSIsInN0YW1wIiwiZW52IiwiaW5kZXhPZiIsImNsc3giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDO0FBQzVCQyxVQUFRLEVBQUU7QUFDVEMsWUFBUSxFQUFFLFVBREQ7QUFFVEMsT0FBRyxFQUFFLENBRkk7QUFHVEMsU0FBSyxFQUFFLENBSEU7QUFJVEMsWUFBUSxFQUFFLE9BSkQ7QUFLVEMsU0FBSyxFQUFFLEdBTEU7QUFNVEMsVUFBTSxFQUFFLEdBTkM7QUFPVDtBQUNBQyxVQUFNLEVBQUUsR0FSQztBQVNUQyxVQUFNLEVBQUUsSUFBSSxVQVRIO0FBVVRDLGlCQUFhLEVBQUU7QUFWTixHQURrQjtBQWE1QkMsUUFBTSxFQUFFO0FBQ1BDLGVBQVcsRUFBRTtBQUROLEdBYm9CO0FBZ0I1QkMsUUFBTSxFQUFFO0FBQ1BELGVBQVcsRUFBRTtBQUROLEdBaEJvQjtBQW1CNUJFLFdBQVMsRUFBRTtBQUNWRixlQUFXLEVBQUU7QUFESCxHQW5CaUI7QUFzQjVCRyxNQUFJLEVBQUU7QUFDTEMsU0FBSyxFQUFFLE9BREY7QUFFTGQsWUFBUSxFQUFFLFVBRkw7QUFHTEMsT0FBRyxFQUFFLENBSEE7QUFJTEMsU0FBSyxFQUFFLENBSkY7QUFLTGEsY0FBVSxFQUFFLGFBTFA7QUFNTFosWUFBUSxFQUFFLE9BTkw7QUFPTEMsU0FBSyxFQUFFLElBQUksS0FQTjtBQVFMQyxVQUFNLEVBQUUsSUFBSSxLQVJQO0FBU0xXLGFBQVMsRUFBRSxRQVROO0FBVUw7QUFDQVYsVUFBTSxFQUFFLEdBWEg7QUFZTFcsbUJBQWUsRUFBRSxLQVpaO0FBYUxDLGFBQVMsRUFBRSwrQkFiTjtBQWNMVixpQkFBYSxFQUFFO0FBZFY7QUF0QnNCLENBQUQsQ0FBNUI7QUF3Q08sU0FBU1csV0FBVCxHQUF1QjtBQUFBOztBQUM3QjtBQUNBLE1BQU1DLE9BQU8sR0FBR3ZCLFNBQVMsRUFBekIsQ0FGNkIsQ0FJN0I7O0FBQ0EsTUFBTXdCLElBQUksR0FBRyxTQUFpQ0MsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxRQUFqRCxHQUE0REYsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxRQUE1RSxHQUF1RixFQUFwRztBQUNBLE1BQUlDLEtBQUo7QUFDQSxNQUFJQyxHQUFKOztBQUNBLE1BQUlMLElBQUksQ0FBQ00sT0FBTCxDQUFhLFFBQWIsS0FBMEIsQ0FBOUIsRUFBaUM7QUFDaENELE9BQUcsR0FBR04sT0FBTyxDQUFDVCxNQUFkO0FBQ0FjLFNBQUssR0FBRyxRQUFSO0FBQ0EsR0FIRCxNQUdPLElBQUlKLElBQUksQ0FBQ00sT0FBTCxDQUFhLFFBQWIsS0FBMEIsQ0FBOUIsRUFBaUM7QUFDdkNELE9BQUcsR0FBR04sT0FBTyxDQUFDWCxNQUFkO0FBQ0FnQixTQUFLLEdBQUcsUUFBUjtBQUNBLEdBSE0sTUFHQTtBQUNOQyxPQUFHLEdBQUdOLE9BQU8sQ0FBQ1IsU0FBZDtBQUNBYSxTQUFLLEdBQUcsT0FBUjtBQUNBOztBQUVELHNCQUNDO0FBQUEsNEJBQ0M7QUFBSyxlQUFTLEVBQUVHLG9EQUFJLENBQUNSLE9BQU8sQ0FBQ3JCLFFBQVQsRUFBbUIyQixHQUFuQjtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUFFQztBQUFLLGVBQVMsRUFBRU4sT0FBTyxDQUFDUCxJQUF4QjtBQUFBLGdCQUErQlk7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZEO0FBQUEsa0JBREQ7QUFNQTs7R0F6QmVOLFc7VUFFQ3RCLFM7OztLQUZEc0IsVyIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0Nvcm5lclN0YW1wLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7bWFrZVN0eWxlc30gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcblx0dHJpYW5nbGU6IHtcblx0XHRwb3NpdGlvbjogJ2Fic29sdXRlJyxcblx0XHR0b3A6IDAsXG5cdFx0cmlnaHQ6IDAsXG5cdFx0Zm9udFNpemU6ICcwLjVlbScsXG5cdFx0d2lkdGg6ICcwJyxcblx0XHRoZWlnaHQ6ICcwJyxcblx0XHQvLyBPcGFjaXR5OiAwLjUsXG5cdFx0ekluZGV4OiAxMDAsXG5cdFx0Ym9yZGVyOiA1ICsgJ2VtIHNvbGlkJyxcblx0XHRwb2ludGVyRXZlbnRzOiAnbm9uZScsXG5cdH0sXG5cdGdpdGh1Yjoge1xuXHRcdGJvcmRlckNvbG9yOiAncmViZWNjYXB1cnBsZSByZWJlY2NhcHVycGxlIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50Jyxcblx0fSxcblx0dmVyY2VsOiB7XG5cdFx0Ym9yZGVyQ29sb3I6ICdzaWx2ZXIsIHNpbHZlciB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCcsXG5cdH0sXG5cdGxvY2FsaG9zdDoge1xuXHRcdGJvcmRlckNvbG9yOiAncmVkIHJlZCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCcsXG5cdH0sXG5cdHRleHQ6IHtcblx0XHRjb2xvcjogJ3doaXRlJyxcblx0XHRwb3NpdGlvbjogJ2Fic29sdXRlJyxcblx0XHR0b3A6IDAsXG5cdFx0cmlnaHQ6IDAsXG5cdFx0YmFja2dyb3VuZDogJ3RyYW5zcGFyZW50Jyxcblx0XHRmb250U2l6ZTogJzAuNWVtJyxcblx0XHR3aWR0aDogNSArICdyZW0nLFxuXHRcdGhlaWdodDogNSArICdyZW0nLFxuXHRcdHRleHRBbGlnbjogJ2NlbnRlcicsXG5cdFx0Ly8gT3BhY2l0eTogMC41LFxuXHRcdHpJbmRleDogMTAwLFxuXHRcdHRyYW5zZm9ybU9yaWdpbjogJzAgMCcsXG5cdFx0dHJhbnNmb3JtOiAndHJhbnNsYXRlWCgzZW0pIHJvdGF0ZSg0NWRlZyknLFxuXHRcdHBvaW50ZXJFdmVudHM6ICdub25lJyxcblx0fSxcbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gQ29ybmVyU3RhbXAoKSB7XG5cdC8vIENvbnN0IHNpemUgPSA1O1xuXHRjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdGNvbnN0IG5hbWUgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgPyB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgOiAnJztcblx0bGV0IHN0YW1wO1xuXHRsZXQgZW52O1xuXHRpZiAobmFtZS5pbmRleE9mKCd2ZXJjZWwnKSA+PSAwKSB7XG5cdFx0ZW52ID0gY2xhc3Nlcy52ZXJjZWw7XG5cdFx0c3RhbXAgPSAndmVyY2VsJztcblx0fSBlbHNlIGlmIChuYW1lLmluZGV4T2YoJ2dpdGh1YicpID49IDApIHtcblx0XHRlbnYgPSBjbGFzc2VzLmdpdGh1Yjtcblx0XHRzdGFtcCA9ICdnaXRodWInO1xuXHR9IGVsc2Uge1xuXHRcdGVudiA9IGNsYXNzZXMubG9jYWxob3N0O1xuXHRcdHN0YW1wID0gJ2xvY2FsJztcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMudHJpYW5nbGUsIGVudil9Lz5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9PntzdGFtcH08L2Rpdj5cblx0XHQ8Lz5cblx0KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/CornerStamp.js\n");

/***/ })

})