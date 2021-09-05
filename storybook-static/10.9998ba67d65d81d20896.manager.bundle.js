(window.webpackJsonp = window.webpackJsonp || []).push([[10], {865(module, __webpack_exports__, __webpack_require__) {
	'use strict'; __webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, 'SyntaxHighlighter', (() => syntaxhighlighter_SyntaxHighlighter)); __webpack_require__(87), __webpack_require__(42), __webpack_require__(43), __webpack_require__(15), __webpack_require__(110), __webpack_require__(4), __webpack_require__(9), __webpack_require__(5), __webpack_require__(13), __webpack_require__(6), __webpack_require__(7), __webpack_require__(10), __webpack_require__(16), __webpack_require__(14), __webpack_require__(17), __webpack_require__(41), __webpack_require__(23); let react = __webpack_require__(0); let react_default = __webpack_require__.n(react); let esm = __webpack_require__(25); let dist_esm = __webpack_require__(1); let global_window = __webpack_require__(8); let window_default = __webpack_require__.n(global_window); let memoizerific = __webpack_require__(28); let memoizerific_default = __webpack_require__.n(memoizerific); let jsx = __webpack_require__(919); let bash = __webpack_require__(926); let css = __webpack_require__(928); let js_extras = __webpack_require__(917); let json = __webpack_require__(920); let graphql = __webpack_require__(933); let markup = __webpack_require__(929); let markdown = __webpack_require__(924); let yaml = __webpack_require__(922); let tsx = __webpack_require__(930); let typescript = __webpack_require__(932); let prism_light = __webpack_require__(940); let ActionBar = __webpack_require__(862); let ScrollArea = __webpack_require__(406); let dist = __webpack_require__(33); let dist_default = __webpack_require__.n(dist); let formatter = memoizerific_default()(2)((code => dist_default()(code))); function _extends() {
		return (_extends = Object.assign || function (target) {
			for (let i = 1; i < arguments.length; i++) {
				let source = arguments[i]; for (let key in source) {
					Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
				}
			}

			return target;
		}).apply(this, arguments);
	}

	function _objectWithoutProperties(source, excluded) {
		if (source == null) {
			return {};
		}

		let key; let i; let target = (function _objectWithoutPropertiesLoose(source, excluded) {
			if (source == null) {
				return {};
			}

			let key; let i; let target = {}; let sourceKeys = Object.keys(source); for (i = 0; i < sourceKeys.length; i++) {
				key = sourceKeys[i], excluded.indexOf(key) >= 0 || (target[key] = source[key]);
			}

			return target;
		})(source, excluded); if (Object.getOwnPropertySymbols) {
			let sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) {
				key = sourceSymbolKeys[i], excluded.indexOf(key) >= 0 || Object.prototype.propertyIsEnumerable.call(source, key) && (target[key] = source[key]);
			}
		}

		return target;
	}

	function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
		try {
			var info = gen[key](arg); var {value} = info;
		} catch (error) {
			return void reject(error);
		}

		info.done ? resolve(value) : Promise.resolve(value).then(_next, _throw);
	}

	function _slicedToArray(arr, i) {
		return (function _arrayWithHoles(arr) {
			if (Array.isArray(arr)) {
				return arr;
			}
		})(arr) || (function _iterableToArrayLimit(arr, i) {
			if (typeof Symbol === 'undefined' || !(Symbol.iterator in Object(arr))) {
				return;
			}

			let _arr = []; let _n = !0; let _d = !1; let _e = void 0; try {
				for (var _s, _i = arr[Symbol.iterator](); !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), !i || _arr.length !== i); _n = !0) {

				}
			} catch (err) {
				_d = !0, _e = err;
			} finally {
				try {
					_n || _i.return == null || _i.return();
				} finally {
					if (_d) {
						throw _e;
					}
				}
			}

			return _arr;
		})(arr, i) || (function _unsupportedIterableToArray(o, minLen) {
			if (!o) {
				return;
			}

			if (typeof o === 'string') {
				return _arrayLikeToArray(o, minLen);
			}

			let n = Object.prototype.toString.call(o).slice(8, -1); n === 'Object' && o.constructor && (n = o.constructor.name); if (n === 'Map' || n === 'Set') {
				return Array.from(o);
			}

			if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
				return _arrayLikeToArray(o, minLen);
			}
		})(arr, i) || (function _nonIterableRest() {
			throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
		})();
	}

	function _arrayLikeToArray(arr, len) {
		(len == null || len > arr.length) && (len = arr.length); for (var i = 0, arr2 = new Array(len); i < len; i++) {
			arr2[i] = arr[i];
		}

		return arr2;
	}

	let syntaxhighlighter_navigator = window_default.a.navigator; let syntaxhighlighter_document = window_default.a.document; let globalWindow = window_default.a.window; prism_light.a.registerLanguage('jsextra', js_extras.a), prism_light.a.registerLanguage('jsx', jsx.a), prism_light.a.registerLanguage('json', json.a), prism_light.a.registerLanguage('yml', yaml.a), prism_light.a.registerLanguage('md', markdown.a), prism_light.a.registerLanguage('bash', bash.a), prism_light.a.registerLanguage('css', css.a), prism_light.a.registerLanguage('html', markup.a), prism_light.a.registerLanguage('tsx', tsx.a), prism_light.a.registerLanguage('typescript', typescript.a), prism_light.a.registerLanguage('graphql', graphql.a); let copyToClipboard; let themedSyntax = memoizerific_default()(2)((theme => Object.entries(theme.code || {}).reduce(((acc, _ref) => {
		let _ref2 = _slicedToArray(_ref, 2); let key = _ref2[0]; let val = _ref2[1]; return {...acc, ...(function _defineProperty(obj, key, value) {
			return key in obj ? Object.defineProperty(obj, key, {value, enumerable: !0, configurable: !0, writable: !0}) : obj[key] = value, obj;
		})({}, '* .'.concat(key), val)};
	}), {}))); copyToClipboard = syntaxhighlighter_navigator != null && syntaxhighlighter_navigator.clipboard ? function copyToClipboard(text) {
		return syntaxhighlighter_navigator.clipboard.writeText(text);
	} : (function () {
		let _ref3 = (function _asyncToGenerator(fn) {
			return function () {
				let self = this; let args = arguments; return new Promise(((resolve, reject) => {
					let gen = fn.apply(self, args); function _next(value) {
						asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value);
					}

					function _throw(err) {
						asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err);
					}

					_next(void 0);
				}));
			};
		})(regeneratorRuntime.mark((function _callee(text) {
			let tmp; let focus; return regeneratorRuntime.wrap((function _callee$(_context) {
				for (;;) {
					switch (_context.prev = _context.next) {
						case 0: tmp = syntaxhighlighter_document.createElement('TEXTAREA'), focus = syntaxhighlighter_document.activeElement, tmp.value = text, syntaxhighlighter_document.body.appendChild(tmp), tmp.select(), syntaxhighlighter_document.execCommand('copy'), syntaxhighlighter_document.body.removeChild(tmp), focus.focus(); case 8: case 'end': return _context.stop();
					}
				}
			}), _callee);
		}))); return function copyToClipboard(_x) {
			return _ref3.apply(this, arguments);
		};
	})(); let Wrapper = dist_esm.styled.div((_ref4 => ({position: 'relative', overflow: 'hidden', color: _ref4.theme.color.defaultText})), (_ref5 => {
		let {theme} = _ref5; return _ref5.bordered ? {border: '1px solid '.concat(theme.appBorderColor), borderRadius: theme.borderRadius, background: theme.background.content} : {};
	})); let Scroller = Object(dist_esm.styled)((_ref6 => {
		let {children} = _ref6; let
			{className} = _ref6; return react_default.a.createElement(ScrollArea.a, {horizontal: !0, vertical: !0, className}, children);
	}))({position: 'relative'}, (_ref7 => ({'& code': {paddingRight: _ref7.theme.layoutMargin}})), (_ref8 => {
		let {theme} = _ref8; return themedSyntax(theme);
	})); let Pre = dist_esm.styled.pre((_ref9 => {
		let {theme} = _ref9; return {display: 'flex', justifyContent: 'flex-start', margin: 0, padding: _ref9.padded ? theme.layoutMargin : 0};
	})); let Code = dist_esm.styled.code({flex: 1, paddingRight: 0, opacity: 1}); var syntaxhighlighter_SyntaxHighlighter = function SyntaxHighlighter(_ref10) {
		let {children} = _ref10; let _ref10$language = _ref10.language; let language = void 0 === _ref10$language ? 'jsx' : _ref10$language; let _ref10$copyable = _ref10.copyable; let copyable = void 0 !== _ref10$copyable && _ref10$copyable; let _ref10$bordered = _ref10.bordered; let bordered = void 0 !== _ref10$bordered && _ref10$bordered; let _ref10$padded = _ref10.padded; let padded = void 0 !== _ref10$padded && _ref10$padded; let _ref10$format = _ref10.format; let format = void 0 === _ref10$format || _ref10$format; let _ref10$className = _ref10.className; let className = void 0 === _ref10$className ? null : _ref10$className; let _ref10$showLineNumber = _ref10.showLineNumbers; let showLineNumbers = void 0 !== _ref10$showLineNumber && _ref10$showLineNumber; let
			rest = _objectWithoutProperties(_ref10, ['children', 'language', 'copyable', 'bordered', 'padded', 'format', 'className', 'showLineNumbers']); if (typeof children !== 'string' || !children.trim()) {
			return null;
		}

		let highlightableCode = format ? formatter(children) : children.trim(); let _useState2 = _slicedToArray(Object(react.useState)(!1), 2); let copied = _useState2[0]; let setCopied = _useState2[1]; return react_default.a.createElement(Wrapper, {bordered, padded, className}, react_default.a.createElement(Scroller, null, react_default.a.createElement(prism_light.a, {padded: padded || bordered, language, showLineNumbers, showInlineLineNumbers: showLineNumbers, useInlineStyles: !1, PreTag: Pre, CodeTag: Code, lineNumberContainerStyle: {}, ...rest}, highlightableCode)), copyable ? react_default.a.createElement(ActionBar.a, {actionItems: [{title: copied ? 'Copied' : 'Copy', onClick: function onClick(e) {
			e.preventDefault(), copyToClipboard(highlightableCode).then((() => {
				setCopied(!0), globalWindow.setTimeout((() => setCopied(!1)), 1500);
			})).catch(esm.a.error);
		}}]}) : null);
	};

	syntaxhighlighter_SyntaxHighlighter.displayName = 'SyntaxHighlighter'; __webpack_exports__.default = syntaxhighlighter_SyntaxHighlighter;
}}]);
