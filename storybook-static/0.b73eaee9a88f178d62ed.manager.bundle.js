(window.webpackJsonp = window.webpackJsonp || []).push([[0], {457(module, __webpack_exports__, __webpack_require__) {
	'use strict'; __webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, 'WithTooltipPure', (() => WithTooltip_WithTooltipPure)), __webpack_require__.d(__webpack_exports__, 'WithToolTipState', (() => WithTooltip_WithToolTipState)), __webpack_require__.d(__webpack_exports__, 'WithTooltip', (() => WithTooltip_WithToolTipState)); __webpack_require__(16), __webpack_require__(50), __webpack_require__(23), __webpack_require__(4), __webpack_require__(15), __webpack_require__(9), __webpack_require__(5), __webpack_require__(13), __webpack_require__(7), __webpack_require__(10), __webpack_require__(14), __webpack_require__(17), __webpack_require__(6), __webpack_require__(38); let react = __webpack_require__(0); let react_default = __webpack_require__.n(react); let esm = __webpack_require__(1); let global_window = __webpack_require__(8); let window_default = __webpack_require__.n(global_window); let react_popper_tooltip = __webpack_require__(939); let memoizerific = (__webpack_require__(77), __webpack_require__(26), __webpack_require__(168), __webpack_require__(18), __webpack_require__(28)); let memoizerific_default = __webpack_require__.n(memoizerific); let utils = __webpack_require__(100); function _extends() {
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

	let _templateObject; let _templateObject2; let match = memoizerific_default()(1e3)((function (requests, actual, value) {
		let fallback = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0; return actual.split('-')[0] === requests ? value : fallback;
	})); let Arrow = esm.styled.div({position: 'absolute', borderStyle: 'solid'}, (_ref => {
		let {placement} = _ref; let x = 0; let
			y = 0; switch (!0) {
			case placement.startsWith('left') || placement.startsWith('right'): y = 8; break; case placement.startsWith('top') || placement.startsWith('bottom'): x = 8;
		}

		return {transform: 'translate3d('.concat(x, 'px, ').concat(y, 'px, 0px)')};
	}), (_ref2 => {
		let {theme} = _ref2; let {color} = _ref2; let
			{placement} = _ref2; return {bottom: ''.concat(match('top', placement, -8, 'auto'), 'px'), top: ''.concat(match('bottom', placement, -8, 'auto'), 'px'), right: ''.concat(match('left', placement, -8, 'auto'), 'px'), left: ''.concat(match('right', placement, -8, 'auto'), 'px'), borderBottomWidth: ''.concat(match('top', placement, '0', 8), 'px'), borderTopWidth: ''.concat(match('bottom', placement, '0', 8), 'px'), borderRightWidth: ''.concat(match('left', placement, '0', 8), 'px'), borderLeftWidth: ''.concat(match('right', placement, '0', 8), 'px'), borderTopColor: match('top', placement, theme.color[color] || color || theme.base === 'light' ? Object(utils.c)(theme.background.app) : Object(utils.a)(theme.background.app), 'transparent'), borderBottomColor: match('bottom', placement, theme.color[color] || color || theme.base === 'light' ? Object(utils.c)(theme.background.app) : Object(utils.a)(theme.background.app), 'transparent'), borderLeftColor: match('left', placement, theme.color[color] || color || theme.base === 'light' ? Object(utils.c)(theme.background.app) : Object(utils.a)(theme.background.app), 'transparent'), borderRightColor: match('right', placement, theme.color[color] || color || theme.base === 'light' ? Object(utils.c)(theme.background.app) : Object(utils.a)(theme.background.app), 'transparent')};
	})); let Wrapper = esm.styled.div((_ref3 => ({display: _ref3.hidden ? 'none' : 'inline-block', zIndex: 2147483647})), (_ref4 => {
		let {theme} = _ref4; let
			{color} = _ref4; return _ref4.hasChrome ? {background: theme.color[color] || color || theme.base === 'light' ? Object(utils.c)(theme.background.app) : Object(utils.a)(theme.background.app), filter: '\n            drop-shadow(0px 5px 5px rgba(0,0,0,0.05))\n            drop-shadow(0 1px 3px rgba(0,0,0,0.1))\n          ', borderRadius: 2 * theme.appBorderRadius, fontSize: theme.typography.size.s1} : {};
	})); let Tooltip_Tooltip = function Tooltip(_ref5) {
		let {placement} = _ref5; let {hasChrome} = _ref5; let {children} = _ref5; let {arrowProps} = _ref5; let {tooltipRef} = _ref5; let {arrowRef} = _ref5; let {color} = _ref5; let
			props = _objectWithoutProperties(_ref5, ['placement', 'hasChrome', 'children', 'arrowProps', 'tooltipRef', 'arrowRef', 'color']); return react_default.a.createElement(Wrapper, {hasChrome, placement, ref: tooltipRef, ...props, color}, hasChrome && react_default.a.createElement(Arrow, {placement, ref: arrowRef, ...arrowProps, color}), children);
	};

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

	function WithTooltip_extends() {
		return (WithTooltip_extends = Object.assign || function (target) {
			for (let i = 1; i < arguments.length; i++) {
				let source = arguments[i]; for (let key in source) {
					Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
				}
			}

			return target;
		}).apply(this, arguments);
	}

	function WithTooltip_objectWithoutProperties(source, excluded) {
		if (source == null) {
			return {};
		}

		let key; let i; let target = (function WithTooltip_objectWithoutPropertiesLoose(source, excluded) {
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

	function _taggedTemplateLiteral(strings, raw) {
		return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, {raw: {value: Object.freeze(raw)}}));
	}

	Tooltip_Tooltip.displayName = 'Tooltip', Tooltip_Tooltip.defaultProps = {color: void 0, arrowRef: void 0, tooltipRef: void 0, hasChrome: !0, placement: 'top', arrowProps: {}}; let WithTooltip_document = window_default.a.document; let TargetContainer = esm.styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(['\n  display: inline-block;\n  cursor: ', ';\n'])), (props => props.mode === 'hover' ? 'default' : 'pointer')); let TargetSvgContainer = esm.styled.g(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(['\n  cursor: ', ';\n'])), (props => props.mode === 'hover' ? 'default' : 'pointer')); var WithTooltip_WithTooltipPure = function WithTooltipPure(_ref) {
		let {svg} = _ref; let {trigger} = _ref; let placement = (_ref.closeOnClick, _ref.placement); let {modifiers} = _ref; let {hasChrome} = _ref; let _tooltip = _ref.tooltip; let {children} = _ref; let {tooltipShown} = _ref; let {onVisibilityChange} = _ref; let props = WithTooltip_objectWithoutProperties(_ref, ['svg', 'trigger', 'closeOnClick', 'placement', 'modifiers', 'hasChrome', 'tooltip', 'children', 'tooltipShown', 'onVisibilityChange']); let
			Container = svg ? TargetSvgContainer : TargetContainer; return react_default.a.createElement(react_popper_tooltip.a, {placement, trigger, modifiers, tooltipShown, onVisibilityChange, tooltip: function tooltip(_ref2) {
			let {getTooltipProps} = _ref2; let {getArrowProps} = _ref2; let {tooltipRef} = _ref2; let {arrowRef} = _ref2; let
				tooltipPlacement = _ref2.placement; return react_default.a.createElement(Tooltip_Tooltip, {hasChrome, placement: tooltipPlacement, tooltipRef, arrowRef, arrowProps: getArrowProps(), ...getTooltipProps()}, typeof _tooltip === 'function' ? _tooltip({onHide: function onHide() {
				return onVisibilityChange(!1);
			}}) : _tooltip);
		}}, (_ref3 => {
			let {getTriggerProps} = _ref3; let
				{triggerRef} = _ref3; return react_default.a.createElement(Container, {ref: triggerRef, ...getTriggerProps(), ...props}, children);
		}));
	};

	WithTooltip_WithTooltipPure.displayName = 'WithTooltipPure', WithTooltip_WithTooltipPure.defaultProps = {svg: !1, trigger: 'hover', closeOnClick: !1, placement: 'top', modifiers: [{name: 'preventOverflow', options: {padding: 8}}, {name: 'offset', options: {offset: [8, 8]}}, {name: 'arrow', options: {padding: 8}}], hasChrome: !0, tooltipShown: !1}; var WithTooltip_WithToolTipState = function WithToolTipState(_ref4) {
		let {startOpen} = _ref4; let onChange = _ref4.onVisibilityChange; let rest = WithTooltip_objectWithoutProperties(_ref4, ['startOpen', 'onVisibilityChange']); let _useState2 = _slicedToArray(Object(react.useState)(startOpen || !1), 2); let tooltipShown = _useState2[0]; let setTooltipShown = _useState2[1]; let
			onVisibilityChange = Object(react.useCallback)((visibility => {
				onChange && !1 === onChange(visibility) || setTooltipShown(visibility);
			}), [onChange]); return Object(react.useEffect)((() => {
			let hide = function hide() {
				return onVisibilityChange(!1);
			};

			WithTooltip_document.addEventListener('keydown', hide, !1); let iframes = Array.from(WithTooltip_document.getElementsByTagName('iframe')); let unbinders = []; return iframes.forEach((iframe => {
				let bind = function bind() {
					try {
						iframe.contentWindow.document && (iframe.contentWindow.document.addEventListener('click', hide), unbinders.push((() => {
							try {
								iframe.contentWindow.document.removeEventListener('click', hide);
							} catch (e) {}
						})));
					} catch (e) {}
				};

				bind(), iframe.addEventListener('load', bind), unbinders.push((() => {
					iframe.removeEventListener('load', bind);
				}));
			})), function () {
				WithTooltip_document.removeEventListener('keydown', hide), unbinders.forEach((unbind => {
					unbind();
				}));
			};
		})), react_default.a.createElement(WithTooltip_WithTooltipPure, {...rest, tooltipShown, onVisibilityChange});
	};

	WithTooltip_WithToolTipState.displayName = 'WithToolTipState';
}}]);
