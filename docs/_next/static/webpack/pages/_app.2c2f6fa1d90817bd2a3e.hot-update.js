webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/components/CornerStamp.js":
/*!***************************************!*\
  !*** ./src/components/CornerStamp.js ***!
  \***************************************/
/*! exports provided: CornerStamp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CornerStamp\", function() { return CornerStamp; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/Users/andrew/dev/ANDREW-OXENBURGH/andrew-oxenburgh.github.io/src/components/CornerStamp.js\";\n\nfunction CornerStamp() {\n  var size = 5; // eslint-disable-next-line no-undef\n\n  var name =  true && window.location.hostname ? window.location.hostname : '';\n  var s = {\n    name: 'localhost',\n    color: 'pink pink transparent transparent'\n  };\n  var triangle = {\n    position: 'absolute',\n    top: 0,\n    right: 0,\n    fontSize: '0.5em',\n    width: '0',\n    height: '0',\n    // Opacity: 0.5,\n    zIndex: 100,\n    borderTop: size + 'em solid',\n    borderBottom: size + 'em solid',\n    borderLeft: size + 'em solid',\n    borderRight: size + 'em solid',\n    pointerEvents: 'none'\n  };\n  var text = {\n    color: 'white',\n    position: 'absolute',\n    top: 0,\n    right: 0,\n    background: 'transparent',\n    fontSize: '0.5em',\n    width: size + 'rem',\n    height: 5 + 'rem',\n    textAlign: 'center',\n    // Opacity: 0.5,\n    zIndex: 100,\n    transformOrigin: '0 0',\n    transform: 'translateX(3em) rotate(45deg)',\n    pointerEvents: 'none'\n  }; // eslint-disable-next-line no-undef\n  // const stamp = typeof window !== 'undefined' && window.location.hostname ? window.location.hostname : '';\n  // setName('vercel');\n\n  if (name.indexOf('vercel') >= 0) {\n    s = {\n      name: 'vercel',\n      color: 'red red transparent transparent'\n    };\n  } else if (name.indexOf('github') >= 0) {\n    s = {\n      name: 'github',\n      color: 'green green transparent transparent'\n    };\n  } else {// SetColor('yellow yellow transparent transparent');\n  }\n\n  triangle.borderColor = s.color; // Console.log('triangle.borderColor = ' + triangle.borderColor);\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      style: triangle\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      style: text,\n      children: s.name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true);\n}\n_c = CornerStamp;\n\nvar _c;\n\n$RefreshReg$(_c, \"CornerStamp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ29ybmVyU3RhbXAuanM/NTg1ZiJdLCJuYW1lcyI6WyJDb3JuZXJTdGFtcCIsInNpemUiLCJuYW1lIiwid2luZG93IiwibG9jYXRpb24iLCJob3N0bmFtZSIsInMiLCJjb2xvciIsInRyaWFuZ2xlIiwicG9zaXRpb24iLCJ0b3AiLCJyaWdodCIsImZvbnRTaXplIiwid2lkdGgiLCJoZWlnaHQiLCJ6SW5kZXgiLCJib3JkZXJUb3AiLCJib3JkZXJCb3R0b20iLCJib3JkZXJMZWZ0IiwiYm9yZGVyUmlnaHQiLCJwb2ludGVyRXZlbnRzIiwidGV4dCIsImJhY2tncm91bmQiLCJ0ZXh0QWxpZ24iLCJ0cmFuc2Zvcm1PcmlnaW4iLCJ0cmFuc2Zvcm0iLCJpbmRleE9mIiwiYm9yZGVyQ29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBRU8sU0FBU0EsV0FBVCxHQUF1QjtBQUM3QixNQUFNQyxJQUFJLEdBQUcsQ0FBYixDQUQ2QixDQUc3Qjs7QUFDQSxNQUFNQyxJQUFJLEdBQUcsU0FBaUNDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsUUFBakQsR0FBNERGLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsUUFBNUUsR0FBdUYsRUFBcEc7QUFFQSxNQUFJQyxDQUFDLEdBQUc7QUFDUEosUUFBSSxFQUFFLFdBREM7QUFFUEssU0FBSyxFQUFFO0FBRkEsR0FBUjtBQUtBLE1BQU1DLFFBQVEsR0FBRztBQUNoQkMsWUFBUSxFQUFFLFVBRE07QUFFaEJDLE9BQUcsRUFBRSxDQUZXO0FBR2hCQyxTQUFLLEVBQUUsQ0FIUztBQUloQkMsWUFBUSxFQUFFLE9BSk07QUFLaEJDLFNBQUssRUFBRSxHQUxTO0FBTWhCQyxVQUFNLEVBQUUsR0FOUTtBQU9oQjtBQUNBQyxVQUFNLEVBQUUsR0FSUTtBQVNoQkMsYUFBUyxFQUFFZixJQUFJLEdBQUcsVUFURjtBQVVoQmdCLGdCQUFZLEVBQUVoQixJQUFJLEdBQUcsVUFWTDtBQVdoQmlCLGNBQVUsRUFBRWpCLElBQUksR0FBRyxVQVhIO0FBWWhCa0IsZUFBVyxFQUFFbEIsSUFBSSxHQUFHLFVBWko7QUFhaEJtQixpQkFBYSxFQUFFO0FBYkMsR0FBakI7QUFnQkEsTUFBTUMsSUFBSSxHQUFHO0FBQ1pkLFNBQUssRUFBRSxPQURLO0FBRVpFLFlBQVEsRUFBRSxVQUZFO0FBR1pDLE9BQUcsRUFBRSxDQUhPO0FBSVpDLFNBQUssRUFBRSxDQUpLO0FBS1pXLGNBQVUsRUFBRSxhQUxBO0FBTVpWLFlBQVEsRUFBRSxPQU5FO0FBT1pDLFNBQUssRUFBRVosSUFBSSxHQUFHLEtBUEY7QUFRWmEsVUFBTSxFQUFFLElBQUksS0FSQTtBQVNaUyxhQUFTLEVBQUUsUUFUQztBQVVaO0FBQ0FSLFVBQU0sRUFBRSxHQVhJO0FBWVpTLG1CQUFlLEVBQUUsS0FaTDtBQWFaQyxhQUFTLEVBQUUsK0JBYkM7QUFjWkwsaUJBQWEsRUFBRTtBQWRILEdBQWIsQ0EzQjZCLENBNEM3QjtBQUNBO0FBQ0E7O0FBRUEsTUFBSWxCLElBQUksQ0FBQ3dCLE9BQUwsQ0FBYSxRQUFiLEtBQTBCLENBQTlCLEVBQWlDO0FBQ2hDcEIsS0FBQyxHQUFHO0FBQUNKLFVBQUksRUFBRSxRQUFQO0FBQ0hLLFdBQUssRUFBRTtBQURKLEtBQUo7QUFHQSxHQUpELE1BSU8sSUFBSUwsSUFBSSxDQUFDd0IsT0FBTCxDQUFhLFFBQWIsS0FBMEIsQ0FBOUIsRUFBaUM7QUFDdkNwQixLQUFDLEdBQUc7QUFBQ0osVUFBSSxFQUFFLFFBQVA7QUFDSEssV0FBSyxFQUFFO0FBREosS0FBSjtBQUdBLEdBSk0sTUFJQSxDQUNOO0FBQ0E7O0FBRURDLFVBQVEsQ0FBQ21CLFdBQVQsR0FBdUJyQixDQUFDLENBQUNDLEtBQXpCLENBNUQ2QixDQThEN0I7O0FBRUEsc0JBQ0M7QUFBQSw0QkFDQztBQUFLLFdBQUssRUFBRUM7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUFFQztBQUFLLFdBQUssRUFBRWEsSUFBWjtBQUFBLGdCQUFtQmYsQ0FBQyxDQUFDSjtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkQ7QUFBQSxrQkFERDtBQU1BO0tBdEVlRixXIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvQ29ybmVyU3RhbXAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZnVuY3Rpb24gQ29ybmVyU3RhbXAoKSB7XG5cdGNvbnN0IHNpemUgPSA1O1xuXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHRjb25zdCBuYW1lID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lID8gd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lIDogJyc7XG5cblx0bGV0IHMgPSB7XG5cdFx0bmFtZTogJ2xvY2FsaG9zdCcsXG5cdFx0Y29sb3I6ICdwaW5rIHBpbmsgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQnLFxuXHR9O1xuXG5cdGNvbnN0IHRyaWFuZ2xlID0ge1xuXHRcdHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuXHRcdHRvcDogMCxcblx0XHRyaWdodDogMCxcblx0XHRmb250U2l6ZTogJzAuNWVtJyxcblx0XHR3aWR0aDogJzAnLFxuXHRcdGhlaWdodDogJzAnLFxuXHRcdC8vIE9wYWNpdHk6IDAuNSxcblx0XHR6SW5kZXg6IDEwMCxcblx0XHRib3JkZXJUb3A6IHNpemUgKyAnZW0gc29saWQnLFxuXHRcdGJvcmRlckJvdHRvbTogc2l6ZSArICdlbSBzb2xpZCcsXG5cdFx0Ym9yZGVyTGVmdDogc2l6ZSArICdlbSBzb2xpZCcsXG5cdFx0Ym9yZGVyUmlnaHQ6IHNpemUgKyAnZW0gc29saWQnLFxuXHRcdHBvaW50ZXJFdmVudHM6ICdub25lJyxcblx0fTtcblxuXHRjb25zdCB0ZXh0ID0ge1xuXHRcdGNvbG9yOiAnd2hpdGUnLFxuXHRcdHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuXHRcdHRvcDogMCxcblx0XHRyaWdodDogMCxcblx0XHRiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxuXHRcdGZvbnRTaXplOiAnMC41ZW0nLFxuXHRcdHdpZHRoOiBzaXplICsgJ3JlbScsXG5cdFx0aGVpZ2h0OiA1ICsgJ3JlbScsXG5cdFx0dGV4dEFsaWduOiAnY2VudGVyJyxcblx0XHQvLyBPcGFjaXR5OiAwLjUsXG5cdFx0ekluZGV4OiAxMDAsXG5cdFx0dHJhbnNmb3JtT3JpZ2luOiAnMCAwJyxcblx0XHR0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDNlbSkgcm90YXRlKDQ1ZGVnKScsXG5cdFx0cG9pbnRlckV2ZW50czogJ25vbmUnLFxuXHR9O1xuXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHQvLyBjb25zdCBzdGFtcCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSA/IHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSA6ICcnO1xuXHQvLyBzZXROYW1lKCd2ZXJjZWwnKTtcblxuXHRpZiAobmFtZS5pbmRleE9mKCd2ZXJjZWwnKSA+PSAwKSB7XG5cdFx0cyA9IHtuYW1lOiAndmVyY2VsJyxcblx0XHRcdGNvbG9yOiAncmVkIHJlZCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCcsXG5cdFx0fTtcblx0fSBlbHNlIGlmIChuYW1lLmluZGV4T2YoJ2dpdGh1YicpID49IDApIHtcblx0XHRzID0ge25hbWU6ICdnaXRodWInLFxuXHRcdFx0Y29sb3I6ICdncmVlbiBncmVlbiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCcsXG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHQvLyBTZXRDb2xvcigneWVsbG93IHllbGxvdyB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCcpO1xuXHR9XG5cblx0dHJpYW5nbGUuYm9yZGVyQ29sb3IgPSBzLmNvbG9yO1xuXG5cdC8vIENvbnNvbGUubG9nKCd0cmlhbmdsZS5ib3JkZXJDb2xvciA9ICcgKyB0cmlhbmdsZS5ib3JkZXJDb2xvcik7XG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PGRpdiBzdHlsZT17dHJpYW5nbGV9Lz5cblx0XHRcdDxkaXYgc3R5bGU9e3RleHR9PntzLm5hbWV9PC9kaXY+XG5cdFx0PC8+XG5cdCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/CornerStamp.js\n");

/***/ })

})