(window.webpackJsonp = window.webpackJsonp || []).push([[9], {866(module, __webpack_exports__, __webpack_require__) {
	'use strict'; __webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, 'ColorControl', (() => Color_ColorControl)); __webpack_require__(23), __webpack_require__(4), __webpack_require__(9), __webpack_require__(5), __webpack_require__(13), __webpack_require__(6), __webpack_require__(7), __webpack_require__(10), __webpack_require__(17), __webpack_require__(18), __webpack_require__(15), __webpack_require__(67), __webpack_require__(40), __webpack_require__(26), __webpack_require__(22), __webpack_require__(120), __webpack_require__(79), __webpack_require__(168), __webpack_require__(77), __webpack_require__(16), __webpack_require__(31), __webpack_require__(14); let react = __webpack_require__(0); let react_default = __webpack_require__.n(react); let index_module = __webpack_require__(938); let color_convert = __webpack_require__(935); let color_convert_default = __webpack_require__.n(color_convert); let throttle = __webpack_require__(408); let throttle_default = __webpack_require__.n(throttle); let esm = __webpack_require__(1); __webpack_require__(47); function _objectWithoutProperties(source, excluded) {
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

	let Note = esm.styled.div((_ref => {
		let {theme} = _ref; return {padding: '2px 6px', lineHeight: '16px', fontSize: 10, fontWeight: theme.typography.weight.bold, color: theme.color.lightest, boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.3)', borderRadius: 4, whiteSpace: 'nowrap', pointerEvents: 'none', zIndex: -1, background: 'rgba(0, 0, 0, 0.4)', margin: 6};
	})); let TooltipNote_TooltipNote = function TooltipNote(_ref2) {
		let {note} = _ref2; let
			props = _objectWithoutProperties(_ref2, ['note']); return react_default.a.createElement(Note, props, note);
	};

	TooltipNote_TooltipNote.displayName = 'TooltipNote'; let _ColorPicker; let _fallbackColor; let lazy_WithTooltip = __webpack_require__(405); let esm_form = __webpack_require__(55); let icon = __webpack_require__(60); let helpers = __webpack_require__(39); function _slicedToArray(arr, i) {
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

	function _defineProperty(obj, key, value) {
		return key in obj ? Object.defineProperty(obj, key, {value, enumerable: !0, configurable: !0, writable: !0}) : obj[key] = value, obj;
	}

	function _extends() {
		return (_extends = Object.assign || function (target) {
			for (let i = 1; i < arguments.length; i++) {
				let source = arguments[i]; for (let key in source) {
					Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
				}
			}

			return target;
		}).apply(this, arguments);
	}

	function Color_objectWithoutProperties(source, excluded) {
		if (source == null) {
			return {};
		}

		let key; let i; let target = (function Color_objectWithoutPropertiesLoose(source, excluded) {
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

	let Wrapper = esm.styled.div({position: 'relative', maxWidth: 250}); let PickerTooltip = Object(esm.styled)(lazy_WithTooltip.a)({position: 'absolute', zIndex: 1, top: 4, left: 4}); let TooltipContent = esm.styled.div({width: 200, margin: 5, '.react-colorful__saturation': {borderRadius: '4px 4px 0 0'}, '.react-colorful__hue': {boxShadow: 'inset 0 0 0 1px rgb(0 0 0 / 5%)'}, '.react-colorful__last-control': {borderRadius: '0 0 4px 4px'}}); let Color_Note = Object(esm.styled)(TooltipNote_TooltipNote)((_ref => ({fontFamily: _ref.theme.typography.fonts.base}))); let Swatches = esm.styled.div({display: 'grid', gridTemplateColumns: 'repeat(9, 16px)', gap: 6, padding: 3, marginTop: 5, width: 200}); let SwatchColor = esm.styled.div((_ref2 => {
		let {theme} = _ref2; return {width: 16, height: 16, boxShadow: _ref2.active ? ''.concat(theme.appBorderColor, ' 0 0 0 1px inset, ').concat(theme.color.mediumdark, '50 0 0 0 4px') : ''.concat(theme.appBorderColor, ' 0 0 0 1px inset'), borderRadius: theme.appBorderRadius};
	})); let Color_Swatch = function Swatch(_ref3) {
		let {value} = _ref3; let {active} = _ref3; let {onClick} = _ref3; let {style} = _ref3; let props = Color_objectWithoutProperties(_ref3, ['value', 'active', 'onClick', 'style']); let
			backgroundImage = 'linear-gradient('.concat(value, ', ').concat(value, '), ').concat('url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')', ', linear-gradient(#fff, #fff)'); return react_default.a.createElement(SwatchColor, {...props, active, onClick, style: {...style, backgroundImage}});
	};

	Color_Swatch.displayName = 'Swatch'; let ColorSpace; let Input = Object(esm.styled)(esm_form.a.Input)((_ref4 => ({width: '100%', paddingLeft: 30, paddingRight: 30, boxSizing: 'border-box', fontFamily: _ref4.theme.typography.fonts.base}))); let ToggleIcon = Object(esm.styled)(icon.a)((_ref5 => ({position: 'absolute', zIndex: 1, top: 6, right: 7, width: 20, height: 20, padding: 4, boxSizing: 'border-box', cursor: 'pointer', color: _ref5.theme.input.color}))); !(function (ColorSpace) {
		ColorSpace.RGB = 'rgb', ColorSpace.HSL = 'hsl', ColorSpace.HEX = 'hex';
	})(ColorSpace || (ColorSpace = {}));

	let COLOR_SPACES = Object.values(ColorSpace); let COLOR_REGEXP = /\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/; let RGB_REGEXP = /^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i; let HSL_REGEXP = /^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i; let HEX_REGEXP = /^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i; let SHORTHEX_REGEXP = /^\s*#?([0-9a-f]{3})\s*$/i; let ColorPicker = (_defineProperty(_ColorPicker = {}, ColorSpace.HEX, index_module.a), _defineProperty(_ColorPicker, ColorSpace.RGB, index_module.c), _defineProperty(_ColorPicker, ColorSpace.HSL, index_module.b), _ColorPicker); let fallbackColor = (_defineProperty(_fallbackColor = {}, ColorSpace.HEX, 'transparent'), _defineProperty(_fallbackColor, ColorSpace.RGB, 'rgba(0, 0, 0, 0)'), _defineProperty(_fallbackColor, ColorSpace.HSL, 'hsla(0, 0%, 0%, 0)'), _fallbackColor); let stringToArgs = function stringToArgs(value) {
		let match = value == null ? void 0 : value.match(COLOR_REGEXP); if (!match) {
			return [0, 0, 0, 1];
		}

		let _match = _slicedToArray(match, 5); let x = _match[1]; let y = _match[2]; let z = _match[3]; let _match$ = _match[4]; return [x, y, z, void 0 === _match$ ? 1 : _match$].map(Number);
	};

	let Color_parseValue = function parseValue(value) {
		let _ref12; if (value) {
			let valid = !0; if (RGB_REGEXP.test(value)) {
				let _ref8; let _stringToArgs2 = _slicedToArray(stringToArgs(value), 4); let r = _stringToArgs2[0]; let g = _stringToArgs2[1]; let b = _stringToArgs2[2]; let a = _stringToArgs2[3]; let _ref7 = _slicedToArray(color_convert_default.a.rgb.hsl([r, g, b]) || [0, 0, 0], 3); let h = _ref7[0]; let s = _ref7[1]; let l = _ref7[2]; return _defineProperty(_ref8 = {valid, value, keyword: color_convert_default.a.rgb.keyword([r, g, b]), colorSpace: ColorSpace.RGB}, ColorSpace.RGB, value), _defineProperty(_ref8, ColorSpace.HSL, 'hsla('.concat(h, ', ').concat(s, '%, ').concat(l, '%, ').concat(a, ')')), _defineProperty(_ref8, ColorSpace.HEX, '#'.concat(color_convert_default.a.rgb.hex([r, g, b]).toLowerCase())), _ref8;
			}

			if (HSL_REGEXP.test(value)) {
				let _ref11; let _stringToArgs4 = _slicedToArray(stringToArgs(value), 4); let _h = _stringToArgs4[0]; let _s2 = _stringToArgs4[1]; let _l = _stringToArgs4[2]; let _a = _stringToArgs4[3]; let _ref10 = _slicedToArray(color_convert_default.a.hsl.rgb([_h, _s2, _l]) || [0, 0, 0], 3); let _r = _ref10[0]; let _g = _ref10[1]; let _b = _ref10[2]; return _defineProperty(_ref11 = {valid, value, keyword: color_convert_default.a.hsl.keyword([_h, _s2, _l]), colorSpace: ColorSpace.HSL}, ColorSpace.RGB, 'rgba('.concat(_r, ', ').concat(_g, ', ').concat(_b, ', ').concat(_a, ')')), _defineProperty(_ref11, ColorSpace.HSL, value), _defineProperty(_ref11, ColorSpace.HEX, '#'.concat(color_convert_default.a.hsl.hex([_h, _s2, _l]).toLowerCase())), _ref11;
			}

			let plain = value.replace('#', ''); let rgb = color_convert_default.a.keyword.rgb(plain) || color_convert_default.a.hex.rgb(plain); let hsl = color_convert_default.a.rgb.hsl(rgb); let mapped = value; if (/[^#a-f0-9]/i.test(value) ? mapped = plain : HEX_REGEXP.test(value) && (mapped = '#'.concat(plain)), mapped.startsWith('#')) {
				valid = HEX_REGEXP.test(mapped);
			} else {
				try {
					color_convert_default.a.keyword.hex(mapped);
				} catch (e) {
					valid = !1;
				}
			}

			return _defineProperty(_ref12 = {valid, value: mapped, keyword: color_convert_default.a.rgb.keyword(rgb), colorSpace: ColorSpace.HEX}, ColorSpace.RGB, 'rgba('.concat(rgb[0], ', ').concat(rgb[1], ', ').concat(rgb[2], ', 1)')), _defineProperty(_ref12, ColorSpace.HSL, 'hsla('.concat(hsl[0], ', ').concat(hsl[1], '%, ').concat(hsl[2], '%, 1)')), _defineProperty(_ref12, ColorSpace.HEX, mapped), _ref12;
		}
	};

	let Color_useColorInput = function useColorInput(initialValue, onChange) {
		let _useState2 = _slicedToArray(Object(react.useState)(initialValue || ''), 2); let value = _useState2[0]; let setValue = _useState2[1]; let _useState4 = _slicedToArray(Object(react.useState)((() => Color_parseValue(value))), 2); let color = _useState4[0]; let setColor = _useState4[1]; let _useState6 = _slicedToArray(Object(react.useState)((color == null ? void 0 : color.colorSpace) || ColorSpace.HEX), 2); let colorSpace = _useState6[0]; let setColorSpace = _useState6[1]; Object(react.useEffect)((() => {
			void 0 === initialValue && (setValue(''), setColor(void 0), setColorSpace(ColorSpace.HEX));
		}), [initialValue]); let realValue = Object(react.useMemo)((() => (function getRealValue(value, color, colorSpace) {
			if (!value || color == null || !color.valid) {
				return fallbackColor[colorSpace];
			}

			if (colorSpace !== ColorSpace.HEX) {
				return (color == null ? void 0 : color[colorSpace]) || fallbackColor[colorSpace];
			}

			if (!color.hex.startsWith('#')) {
				try {
					return '#'.concat(color_convert_default.a.keyword.hex(color.hex));
				} catch (e) {
					return fallbackColor.hex;
				}
			}

			let short = color.hex.match(SHORTHEX_REGEXP); if (!short) {
				return HEX_REGEXP.test(color.hex) ? color.hex : fallbackColor.hex;
			}

			let _short$1$split2 = _slicedToArray(short[1].split(''), 3); let r = _short$1$split2[0]; let g = _short$1$split2[1]; let b = _short$1$split2[2]; return '#'.concat(r).concat(r).concat(g).concat(g).concat(b).concat(b);
		})(value, color, colorSpace).toLowerCase()), [value, color, colorSpace]); let updateValue = Object(react.useCallback)((update => {
			let parsed = Color_parseValue(update); setValue((parsed == null ? void 0 : parsed.value) || update || ''), parsed && (setColor(parsed), setColorSpace(parsed.colorSpace), onChange(parsed.value));
		}), [onChange]); let cycleColorSpace = Object(react.useCallback)((() => {
			let next = COLOR_SPACES.indexOf(colorSpace) + 1; next >= COLOR_SPACES.length && (next = 0), setColorSpace(COLOR_SPACES[next]); let update = (color == null ? void 0 : color[COLOR_SPACES[next]]) || ''; setValue(update), onChange(update);
		}), [color, colorSpace, onChange]); return {value, realValue, updateValue, color, colorSpace, cycleColorSpace};
	};

	let id = function id(value) {
		return value.replace(/\s*/, '').toLowerCase();
	};

	var Color_ColorControl = function ColorControl(_ref13) {
		let {name} = _ref13; let initialValue = _ref13.value; let {onChange} = _ref13; let {onFocus} = _ref13; let {onBlur} = _ref13; let {presetColors} = _ref13; let {startOpen} = _ref13; let _useColorInput = Color_useColorInput(initialValue, throttle_default()(onChange, 200)); let {value} = _useColorInput; let {realValue} = _useColorInput; let {updateValue} = _useColorInput; let {color} = _useColorInput; let {colorSpace} = _useColorInput; let {cycleColorSpace} = _useColorInput; let _usePresets = (function usePresets(presetColors, currentColor, colorSpace) {
			let _useState8 = _slicedToArray(Object(react.useState)(currentColor != null && currentColor.valid ? [currentColor] : []), 2); let selectedColors = _useState8[0]; let setSelectedColors = _useState8[1]; Object(react.useEffect)((() => {
				void 0 === currentColor && setSelectedColors([]);
			}), [currentColor]); let presets = Object(react.useMemo)((() => (presetColors || []).map((preset => typeof preset === 'string' ? Color_parseValue(preset) : preset.title ? ({...Color_parseValue(preset.color), keyword: preset.title}) : Color_parseValue(preset.color))).concat(selectedColors).filter(Boolean).slice(-27)), [presetColors, selectedColors]); let addPreset = Object(react.useCallback)((color => {
				color != null && color.valid && (presets.some((preset => id(preset[colorSpace]) === id(color[colorSpace]))) || setSelectedColors((arr => arr.concat(color))));
			}), [colorSpace, presets]); return {presets, addPreset};
		})(presetColors, color, colorSpace); let {presets} = _usePresets; let {addPreset} = _usePresets; let
			Picker = ColorPicker[colorSpace]; return react_default.a.createElement(Wrapper, null, react_default.a.createElement(PickerTooltip, {trigger: 'click', startOpen, closeOnClick: !0, onVisibilityChange: function onVisibilityChange() {
			return addPreset(color);
		}, tooltip: react_default.a.createElement(TooltipContent, null, react_default.a.createElement(Picker, {color: realValue === 'transparent' ? '#000000' : realValue, onChange: updateValue, onFocus, onBlur}), presets.length > 0 && react_default.a.createElement(Swatches, null, presets.map(((preset, index) => react_default.a.createElement(lazy_WithTooltip.a, {key: ''.concat(preset.value, '-').concat(index), hasChrome: !1, tooltip: react_default.a.createElement(Color_Note, {note: preset.keyword || preset.value})}, react_default.a.createElement(Color_Swatch, {value: preset[colorSpace], active: color && id(preset[colorSpace]) === id(color[colorSpace]), onClick: function onClick() {
			return updateValue(preset.value);
		}}))))))}, react_default.a.createElement(Color_Swatch, {value: realValue, style: {margin: 4}})), react_default.a.createElement(Input, {id: Object(helpers.a)(name), value, onChange: function onChange(e) {
			return updateValue(e.target.value);
		}, onFocus: function onFocus(e) {
			return e.target.select();
		}, placeholder: 'Choose color...'}), react_default.a.createElement(ToggleIcon, {icon: 'markup', onClick: cycleColorSpace}));
	};

	Color_ColorControl.displayName = 'ColorControl'; __webpack_exports__.default = Color_ColorControl;
}}]);
