(window.webpackJsonp = window.webpackJsonp || []).push([[5], {1020(module, __webpack_exports__, __webpack_require__) {
	'use strict'; __webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, 'ColorControl', (() => Color_ColorControl)); __webpack_require__(25), __webpack_require__(6), __webpack_require__(10), __webpack_require__(9), __webpack_require__(21), __webpack_require__(17), __webpack_require__(14), __webpack_require__(18), __webpack_require__(28), __webpack_require__(24), __webpack_require__(15), __webpack_require__(135), __webpack_require__(114), __webpack_require__(32), __webpack_require__(27), __webpack_require__(155), __webpack_require__(56), __webpack_require__(154), __webpack_require__(81), __webpack_require__(16), __webpack_require__(53), __webpack_require__(8); let react = __webpack_require__(0); let react_default = __webpack_require__.n(react); function index_module_l() {
		return (index_module_l = Object.assign || function (e) {
			for (let r = 1; r < arguments.length; r++) {
				let t = arguments[r]; for (let o in t) {
					Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
				}
			}

			return e;
		}).apply(this, arguments);
	}

	function index_module_u(e, r) {
		if (e == null) {
			return {};
		}

		let t; let o; let n = {}; let a = Object.keys(e); for (o = 0; o < a.length; o++) {
			r.indexOf(t = a[o]) >= 0 || (n[t] = e[t]);
		}

		return n;
	}

	let index_module_c = typeof window !== 'undefined' ? react.useLayoutEffect : react.useEffect; function index_module_i(e) {
		let r = Object(react.useRef)(e); return Object(react.useEffect)((() => {
			r.current = e;
		})), Object(react.useCallback)((e => r.current && r.current(e)), []);
	}

	let index_module_s; let index_module_f = function (e, r, t) {
		return void 0 === r && (r = 0), void 0 === t && (t = 1), e > t ? t : e < r ? r : e;
	};

	let index_module_v = function (e) {
		return 'touches' in e;
	};

	let index_module_d = function (e, r) {
		let t = e.getBoundingClientRect(); let o = index_module_v(r) ? r.touches[0] : r; return {left: index_module_f((o.pageX - (t.left + window.pageXOffset)) / t.width), top: index_module_f((o.pageY - (t.top + window.pageYOffset)) / t.height)};
	};

	let index_module_h = function (e) {
		!index_module_v(e) && e.preventDefault();
	};

	let index_module_m = react_default.a.memo((r => {
		let t = r.onMove; let s = r.onKey; let f = index_module_u(r, ['onMove', 'onKey']); let m = Object(react.useRef)(null); let g = Object(react.useRef)(!1); let p = Object(react.useState)(!1); let b = p[0]; let _ = p[1]; let C = index_module_i(t); let x = index_module_i(s); let E = Object(react.useCallback)((e => {
			index_module_h(e), (index_module_v(e) ? e.touches.length > 0 : e.buttons > 0) && m.current ? C(index_module_d(m.current, e)) : _(!1);
		}), [C]); let H = Object(react.useCallback)((e => {
			let r; let t = e.nativeEvent; let o = m.current; index_module_h(t), r = t, g.current && !index_module_v(r) || (g.current || (g.current = index_module_v(r)), 0) || !o || (o.focus(), C(index_module_d(o, t)), _(!0));
		}), [C]); let M = Object(react.useCallback)((e => {
			let r = e.which || e.keyCode; r < 37 || r > 40 || (e.preventDefault(), x({left: r === 39 ? 0.05 : r === 37 ? -0.05 : 0, top: r === 40 ? 0.05 : r === 38 ? -0.05 : 0}));
		}), [x]); let N = Object(react.useCallback)((() => _(!1)), []); let w = Object(react.useCallback)((e => {
			let r = e ? window.addEventListener : window.removeEventListener; r(g.current ? 'touchmove' : 'mousemove', E), r(g.current ? 'touchend' : 'mouseup', N);
		}), [E, N]); return index_module_c((() => (w(b), function () {
			b && w(!1);
		})), [b, w]), react_default.a.createElement('div', {...f, className: 'react-colorful__interactive', ref: m, onTouchStart: H, onMouseDown: H, onKeyDown: M, tabIndex: 0, role: 'slider'});
	})); let index_module_g = function (e) {
		return e.filter(Boolean).join(' ');
	};

	let index_module_p = function (r) {
		let t = r.color; let o = r.left; let n = r.top; let a = void 0 === n ? 0.5 : n; let l = index_module_g(['react-colorful__pointer', r.className]); return react_default.a.createElement('div', {className: l, style: {top: 100 * a + '%', left: 100 * o + '%'}}, react_default.a.createElement('div', {className: 'react-colorful__pointer-fill', style: {backgroundColor: t}}));
	};

	let index_module_b = function (e, r, t) {
		return void 0 === r && (r = 0), void 0 === t && (t = 10 ** r), Math.round(t * e) / t;
	};

	let index_module_ = {grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI)}; let index_module_C = function (e) {
		return e[0] === '#' && (e = e.substr(1)), e.length < 6 ? {r: parseInt(e[0] + e[0], 16), g: parseInt(e[1] + e[1], 16), b: parseInt(e[2] + e[2], 16), a: 1} : {r: parseInt(e.substr(0, 2), 16), g: parseInt(e.substr(2, 2), 16), b: parseInt(e.substr(4, 2), 16), a: 1};
	};

	let index_module_x = function (e, r) {
		return void 0 === r && (r = 'deg'), Number(e) * (index_module_[r] || 1);
	};

	let index_module_E = function (e) {
		let r = /hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e); return r ? index_module_M({h: index_module_x(r[1], r[2]), s: Number(r[3]), l: Number(r[4]), a: void 0 === r[5] ? 1 : Number(r[5]) / (r[6] ? 100 : 1)}) : {h: 0, s: 0, v: 0, a: 1};
	};

	var index_module_M = function (e) {
		let r = e.s; let t = e.l; return {h: e.h, s: (r *= (t < 50 ? t : 100 - t) / 100) > 0 ? 2 * r / (t + r) * 100 : 0, v: t + r, a: e.a};
	};

	let index_module_N = function (e) {
		let r = e.s; let t = e.v; let o = e.a; let n = (200 - r) * t / 100; return {h: index_module_b(e.h), s: index_module_b(n > 0 && n < 200 ? r * t / 100 / (n <= 100 ? n : 200 - n) * 100 : 0), l: index_module_b(n / 2), a: index_module_b(o, 2)};
	};

	let index_module_w = function (e) {
		let r = index_module_N(e); return 'hsl(' + r.h + ', ' + r.s + '%, ' + r.l + '%)';
	};

	let y = function (e) {
		let r = index_module_N(e); return 'hsla(' + r.h + ', ' + r.s + '%, ' + r.l + '%, ' + r.a + ')';
	};

	let q = function (e) {
		let r = e.h; let t = e.s; let o = e.v; let n = e.a; r = r / 360 * 6, t /= 100, o /= 100; let a = Math.floor(r); let l = o * (1 - t); let u = o * (1 - (r - a) * t); let c = o * (1 - (1 - r + a) * t); let i = a % 6; return {r: index_module_b(255 * [o, u, l, l, c, o][i]), g: index_module_b(255 * [c, o, o, u, l, l][i]), b: index_module_b(255 * [l, l, c, o, o, u][i]), a: index_module_b(n, 2)};
	};

	let I = function (e) {
		let r = /rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e); return r ? B({r: Number(r[1]) / (r[2] ? 100 / 255 : 1), g: Number(r[3]) / (r[4] ? 100 / 255 : 1), b: Number(r[5]) / (r[6] ? 100 / 255 : 1), a: void 0 === r[7] ? 1 : Number(r[7]) / (r[8] ? 100 : 1)}) : {h: 0, s: 0, v: 0, a: 1};
	};

	let z = function (e) {
		let r = e.toString(16); return r.length < 2 ? '0' + r : r;
	};

	var B = function (e) {
		let {r} = e; let t = e.g; let o = e.b; let n = e.a; let a = Math.max(r, t, o); let l = a - Math.min(r, t, o); let
			u = l ? a === r ? (t - o) / l : a === t ? 2 + (o - r) / l : 4 + (r - t) / l : 0; return {h: index_module_b(60 * (u < 0 ? u + 6 : u)), s: index_module_b(a ? l / a * 100 : 0), v: index_module_b(a / 255 * 100), a: n};
	};

	let A = react_default.a.memo((r => {
		let t = r.hue; let o = r.onChange; let n = index_module_g(['react-colorful__hue', r.className]); return react_default.a.createElement('div', {className: n}, react_default.a.createElement(index_module_m, {onMove(e) {
			o({h: 360 * e.left});
		}, onKey(e) {
			o({h: index_module_f(t + 360 * e.left, 0, 360)});
		}, 'aria-label': 'Hue', 'aria-valuetext': index_module_b(t)}, react_default.a.createElement(index_module_p, {className: 'react-colorful__hue-pointer', left: t / 360, color: index_module_w({h: t, s: 100, v: 100, a: 1})})));
	})); let L = react_default.a.memo((r => {
		let t = r.hsva; let o = r.onChange; let n = {backgroundColor: index_module_w({h: t.h, s: 100, v: 100, a: 1})}; return react_default.a.createElement('div', {className: 'react-colorful__saturation', style: n}, react_default.a.createElement(index_module_m, {onMove(e) {
			o({s: 100 * e.left, v: 100 - 100 * e.top});
		}, onKey(e) {
			o({s: index_module_f(t.s + 100 * e.left, 0, 100), v: index_module_f(t.v - 100 * e.top, 0, 100)});
		}, 'aria-label': 'Color', 'aria-valuetext': 'Saturation ' + index_module_b(t.s) + '%, Brightness ' + index_module_b(t.v) + '%'}, react_default.a.createElement(index_module_p, {className: 'react-colorful__saturation-pointer', top: 1 - t.v / 100, left: t.s / 100, color: index_module_w(t)})));
	})); let D = function (e, r) {
		if (e === r) {
			return !0;
		}

		for (let t in e) {
			if (e[t] !== r[t]) {
				return !1;
			}
		}

		return !0;
	};

	let F = function (e, r) {
		return e.replace(/\s/g, '') === r.replace(/\s/g, '');
	};

	function S(e, r, l) {
		let u = index_module_i(l); let c = Object(react.useState)((() => e.toHsva(r))); let s = c[0]; let f = c[1]; let v = Object(react.useRef)({color: r, hsva: s}); Object(react.useEffect)((() => {
			if (!e.equal(r, v.current.color)) {
				let t = e.toHsva(r); v.current = {hsva: t, color: r}, f(t);
			}
		}), [r, e]), Object(react.useEffect)((() => {
			let r; D(s, v.current.hsva) || e.equal(r = e.fromHsva(s), v.current.color) || (v.current = {hsva: s, color: r}, u(r));
		}), [s, e, u]); let d = Object(react.useCallback)((e => {
			f((r => ({...r, ...e})));
		}), []); return [s, d];
	}

	let P; let _ColorPicker; let _fallbackColor; let Y = function () {
		index_module_c((() => {
			if (typeof document !== 'undefined' && !P) {
				(P = document.createElement('style')).innerHTML = '.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}'; let e = index_module_s || __webpack_require__.nc; e && P.setAttribute('nonce', e), document.head.appendChild(P);
			}
		}), []);
	};

	let $ = function (r) {
		let t = r.className; let o = r.colorModel; let n = r.color; let a = void 0 === n ? o.defaultColor : n; let c = r.onChange; let i = index_module_u(r, ['className', 'colorModel', 'color', 'onChange']); Y(); let s = S(o, a, c); let f = s[0]; let v = s[1]; let d = index_module_g(['react-colorful', t]); return react_default.a.createElement('div', {...i, className: d}, react_default.a.createElement(L, {hsva: f, onChange: v}), react_default.a.createElement(A, {hue: f.h, onChange: v, className: 'react-colorful__last-control'}));
	};

	let R = {defaultColor: '000', toHsva(e) {
		return B(index_module_C(e));
	}, fromHsva(e) {
		return t = (r = q(e)).g, o = r.b, '#' + z(r.r) + z(t) + z(o); let r; let t; let o;
	}, equal(e, r) {
		return e.toLowerCase() === r.toLowerCase() || D(index_module_C(e), index_module_C(r));
	}}; let J = function (r) {
		let t = r.className; let o = r.hsva; let n = r.onChange; let a = {backgroundImage: 'linear-gradient(90deg, ' + y({...o, a: 0}) + ', ' + y({...o, a: 1}) + ')'}; let l = index_module_g(['react-colorful__alpha', t]); return react_default.a.createElement('div', {className: l}, react_default.a.createElement('div', {className: 'react-colorful__alpha-gradient', style: a}), react_default.a.createElement(index_module_m, {onMove(e) {
			n({a: e.left});
		}, onKey(e) {
			n({a: index_module_f(o.a + e.left)});
		}, 'aria-label': 'Alpha', 'aria-valuetext': index_module_b(100 * o.a) + '%'}, react_default.a.createElement(index_module_p, {className: 'react-colorful__alpha-pointer', left: o.a, color: y(o)})));
	};

	let Q = function (r) {
		let t = r.className; let o = r.colorModel; let n = r.color; let a = void 0 === n ? o.defaultColor : n; let c = r.onChange; let i = index_module_u(r, ['className', 'colorModel', 'color', 'onChange']); Y(); let s = S(o, a, c); let f = s[0]; let v = s[1]; let d = index_module_g(['react-colorful', t]); return react_default.a.createElement('div', {...i, className: d}, react_default.a.createElement(L, {hsva: f, onChange: v}), react_default.a.createElement(A, {hue: f.h, onChange: v}), react_default.a.createElement(J, {hsva: f, onChange: v, className: 'react-colorful__last-control'}));
	};

	let W = {defaultColor: 'hsla(0, 0%, 0%, 1)', toHsva: index_module_E, fromHsva: y, equal: F}; let he = {defaultColor: 'rgba(0, 0, 0, 1)', toHsva: I, fromHsva(e) {
		let r = q(e); return 'rgba(' + r.r + ', ' + r.g + ', ' + r.b + ', ' + r.a + ')';
	}, equal: F}; let color_convert = __webpack_require__(1105); let color_convert_default = __webpack_require__.n(color_convert); let throttle = __webpack_require__(1108); let throttle_default = __webpack_require__.n(throttle); let esm = __webpack_require__(1); let TooltipNote = __webpack_require__(614); let lazy_WithTooltip = __webpack_require__(172); let esm_form = __webpack_require__(55); let icon = __webpack_require__(46); let helpers = __webpack_require__(45); function _slicedToArray(arr, i) {
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

	let Wrapper = esm.styled.div({position: 'relative', maxWidth: 250}); let PickerTooltip = Object(esm.styled)(lazy_WithTooltip.a)({position: 'absolute', zIndex: 1, top: 4, left: 4}); let TooltipContent = esm.styled.div({width: 200, margin: 5, '.react-colorful__saturation': {borderRadius: '4px 4px 0 0'}, '.react-colorful__hue': {boxShadow: 'inset 0 0 0 1px rgb(0 0 0 / 5%)'}, '.react-colorful__last-control': {borderRadius: '0 0 4px 4px'}}); let Note = Object(esm.styled)(TooltipNote.a)((_ref => ({fontFamily: _ref.theme.typography.fonts.base}))); let Swatches = esm.styled.div({display: 'grid', gridTemplateColumns: 'repeat(9, 16px)', gap: 6, padding: 3, marginTop: 5, width: 200}); let SwatchColor = esm.styled.div((_ref2 => {
		let {theme} = _ref2; return {width: 16, height: 16, boxShadow: _ref2.active ? ''.concat(theme.appBorderColor, ' 0 0 0 1px inset, ').concat(theme.color.mediumdark, '50 0 0 0 4px') : ''.concat(theme.appBorderColor, ' 0 0 0 1px inset'), borderRadius: theme.appBorderRadius};
	})); let Color_Swatch = function Swatch(_ref3) {
		let {value} = _ref3; let {active} = _ref3; let {onClick} = _ref3; let {style} = _ref3; let props = _objectWithoutProperties(_ref3, ['value', 'active', 'onClick', 'style']); let
			backgroundImage = 'linear-gradient('.concat(value, ', ').concat(value, '), ').concat('url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')', ', linear-gradient(#fff, #fff)'); return react_default.a.createElement(SwatchColor, {...props, active, onClick, style: {...style, backgroundImage}});
	};

	Color_Swatch.displayName = 'Swatch'; let ColorSpace; let Input = Object(esm.styled)(esm_form.a.Input)((_ref4 => ({width: '100%', paddingLeft: 30, paddingRight: 30, boxSizing: 'border-box', fontFamily: _ref4.theme.typography.fonts.base}))); let ToggleIcon = Object(esm.styled)(icon.a)((_ref5 => ({position: 'absolute', zIndex: 1, top: 6, right: 7, width: 20, height: 20, padding: 4, boxSizing: 'border-box', cursor: 'pointer', color: _ref5.theme.input.color}))); !(function (ColorSpace) {
		ColorSpace.RGB = 'rgb', ColorSpace.HSL = 'hsl', ColorSpace.HEX = 'hex';
	})(ColorSpace || (ColorSpace = {}));

	let COLOR_SPACES = Object.values(ColorSpace); let COLOR_REGEXP = /\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/; let RGB_REGEXP = /^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i; let HSL_REGEXP = /^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i; let HEX_REGEXP = /^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i; let SHORTHEX_REGEXP = /^\s*#?([0-9a-f]{3})\s*$/i; let ColorPicker = (_defineProperty(_ColorPicker = {}, ColorSpace.HEX, (r => react_default.a.createElement($, {...r, colorModel: R}))), _defineProperty(_ColorPicker, ColorSpace.RGB, (r => react_default.a.createElement(Q, {...r, colorModel: he}))), _defineProperty(_ColorPicker, ColorSpace.HSL, (r => react_default.a.createElement(Q, {...r, colorModel: W}))), _ColorPicker); let fallbackColor = (_defineProperty(_fallbackColor = {}, ColorSpace.HEX, 'transparent'), _defineProperty(_fallbackColor, ColorSpace.RGB, 'rgba(0, 0, 0, 0)'), _defineProperty(_fallbackColor, ColorSpace.HSL, 'hsla(0, 0%, 0%, 0)'), _fallbackColor); let stringToArgs = function stringToArgs(value) {
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
		}, tooltip: react_default.a.createElement(TooltipContent, null, react_default.a.createElement(Picker, {color: realValue === 'transparent' ? '#000000' : realValue, onChange: updateValue, onFocus, onBlur}), presets.length > 0 && react_default.a.createElement(Swatches, null, presets.map(((preset, index) => react_default.a.createElement(lazy_WithTooltip.a, {key: ''.concat(preset.value, '-').concat(index), hasChrome: !1, tooltip: react_default.a.createElement(Note, {note: preset.keyword || preset.value})}, react_default.a.createElement(Color_Swatch, {value: preset[colorSpace], active: color && id(preset[colorSpace]) === id(color[colorSpace]), onClick: function onClick() {
			return updateValue(preset.value);
		}}))))))}, react_default.a.createElement(Color_Swatch, {value: realValue, style: {margin: 4}})), react_default.a.createElement(Input, {id: Object(helpers.a)(name), value, onChange: function onChange(e) {
			return updateValue(e.target.value);
		}, onFocus: function onFocus(e) {
			return e.target.select();
		}, placeholder: 'Choose color...'}), react_default.a.createElement(ToggleIcon, {icon: 'markup', onClick: cycleColorSpace}));
	};

	Color_ColorControl.displayName = 'ColorControl'; __webpack_exports__.default = Color_ColorControl;
}, 1064(module, exports, __webpack_require__) {
	const cssKeywords = __webpack_require__(1106); const reverseKeywords = {}; for (const key of Object.keys(cssKeywords)) {
		reverseKeywords[cssKeywords[key]] = key;
	}

	const convert = {rgb: {channels: 3, labels: 'rgb'}, hsl: {channels: 3, labels: 'hsl'}, hsv: {channels: 3, labels: 'hsv'}, hwb: {channels: 3, labels: 'hwb'}, cmyk: {channels: 4, labels: 'cmyk'}, xyz: {channels: 3, labels: 'xyz'}, lab: {channels: 3, labels: 'lab'}, lch: {channels: 3, labels: 'lch'}, hex: {channels: 1, labels: ['hex']}, keyword: {channels: 1, labels: ['keyword']}, ansi16: {channels: 1, labels: ['ansi16']}, ansi256: {channels: 1, labels: ['ansi256']}, hcg: {channels: 3, labels: ['h', 'c', 'g']}, apple: {channels: 3, labels: ['r16', 'g16', 'b16']}, gray: {channels: 1, labels: ['gray']}}; module.exports = convert; for (const model of Object.keys(convert)) {
		if (!('channels' in convert[model])) {
			throw new Error('missing channels property: ' + model);
		}

		if (!('labels' in convert[model])) {
			throw new Error('missing channel labels property: ' + model);
		}

		if (convert[model].labels.length !== convert[model].channels) {
			throw new Error('channel and label counts mismatch: ' + model);
		}

		const {channels, labels} = convert[model]; delete convert[model].channels, delete convert[model].labels, Object.defineProperty(convert[model], 'channels', {value: channels}), Object.defineProperty(convert[model], 'labels', {value: labels});
	}

	convert.rgb.hsl = function (rgb) {
		const r = rgb[0] / 255; const g = rgb[1] / 255; const b = rgb[2] / 255; const min = Math.min(r, g, b); const max = Math.max(r, g, b); const delta = max - min; let h; let s; max === min ? h = 0 : r === max ? h = (g - b) / delta : g === max ? h = 2 + (b - r) / delta : b === max && (h = 4 + (r - g) / delta), h = Math.min(60 * h, 360), h < 0 && (h += 360); const l = (min + max) / 2; return s = max === min ? 0 : l <= 0.5 ? delta / (max + min) : delta / (2 - max - min), [h, 100 * s, 100 * l];
	}, convert.rgb.hsv = function (rgb) {
		let rdif; let gdif; let bdif; let h; let s; const r = rgb[0] / 255; const g = rgb[1] / 255; const b = rgb[2] / 255; const v = Math.max(r, g, b); const diff = v - Math.min(r, g, b); const diffc = function (c) {
			return (v - c) / 6 / diff + 0.5;
		};

		return diff === 0 ? (h = 0, s = 0) : (s = diff / v, rdif = diffc(r), gdif = diffc(g), bdif = diffc(b), r === v ? h = bdif - gdif : g === v ? h = 1 / 3 + rdif - bdif : b === v && (h = 2 / 3 + gdif - rdif), h < 0 ? h += 1 : h > 1 && (h -= 1)), [360 * h, 100 * s, 100 * v];
	}, convert.rgb.hwb = function (rgb) {
		const r = rgb[0]; const g = rgb[1]; let b = rgb[2]; const h = convert.rgb.hsl(rgb)[0]; const w = 1 / 255 * Math.min(r, Math.min(g, b)); return b = 1 - 1 / 255 * Math.max(r, Math.max(g, b)), [h, 100 * w, 100 * b];
	}, convert.rgb.cmyk = function (rgb) {
		const r = rgb[0] / 255; const g = rgb[1] / 255; const b = rgb[2] / 255; const k = Math.min(1 - r, 1 - g, 1 - b); return [100 * ((1 - r - k) / (1 - k) || 0), 100 * ((1 - g - k) / (1 - k) || 0), 100 * ((1 - b - k) / (1 - k) || 0), 100 * k];
	}, convert.rgb.keyword = function (rgb) {
		const reversed = reverseKeywords[rgb]; if (reversed) {
			return reversed;
		}

		let currentClosestKeyword; let currentClosestDistance = 1 / 0; for (const keyword of Object.keys(cssKeywords)) {
			const value = cssKeywords[keyword]; const distance = (y = value, ((x = rgb)[0] - y[0]) ** 2 + (x[1] - y[1]) ** 2 + (x[2] - y[2]) ** 2); distance < currentClosestDistance && (currentClosestDistance = distance, currentClosestKeyword = keyword);
		}

		let x; let y; return currentClosestKeyword;
	}, convert.keyword.rgb = function (keyword) {
		return cssKeywords[keyword];
	}, convert.rgb.xyz = function (rgb) {
		let r = rgb[0] / 255; let g = rgb[1] / 255; let b = rgb[2] / 255; r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92, g = g > 0.04045 ? ((g + 0.055) / 1.055) ** 2.4 : g / 12.92, b = b > 0.04045 ? ((b + 0.055) / 1.055) ** 2.4 : b / 12.92; return [100 * (0.4124 * r + 0.3576 * g + 0.1805 * b), 100 * (0.2126 * r + 0.7152 * g + 0.0722 * b), 100 * (0.0193 * r + 0.1192 * g + 0.9505 * b)];
	}, convert.rgb.lab = function (rgb) {
		const xyz = convert.rgb.xyz(rgb); let x = xyz[0]; let y = xyz[1]; let z = xyz[2]; x /= 95.047, y /= 100, z /= 108.883, x = x > 0.008856 ? x ** (1 / 3) : 7.787 * x + 16 / 116, y = y > 0.008856 ? y ** (1 / 3) : 7.787 * y + 16 / 116, z = z > 0.008856 ? z ** (1 / 3) : 7.787 * z + 16 / 116; return [116 * y - 16, 500 * (x - y), 200 * (y - z)];
	}, convert.hsl.rgb = function (hsl) {
		const h = hsl[0] / 360; const s = hsl[1] / 100; const l = hsl[2] / 100; let t2; let t3; let val; if (s === 0) {
			return val = 255 * l, [val, val, val];
		}

		t2 = l < 0.5 ? l * (1 + s) : l + s - l * s; const t1 = 2 * l - t2; const rgb = [0, 0, 0]; for (let i = 0; i < 3; i++) {
			t3 = h + 1 / 3 * -(i - 1), t3 < 0 && t3++, t3 > 1 && t3--, val = 6 * t3 < 1 ? t1 + 6 * (t2 - t1) * t3 : 2 * t3 < 1 ? t2 : 3 * t3 < 2 ? t1 + (t2 - t1) * (2 / 3 - t3) * 6 : t1, rgb[i] = 255 * val;
		}

		return rgb;
	}, convert.hsl.hsv = function (hsl) {
		const h = hsl[0]; let s = hsl[1] / 100; let l = hsl[2] / 100; let smin = s; const lmin = Math.max(l, 0.01); l *= 2, s *= l <= 1 ? l : 2 - l, smin *= lmin <= 1 ? lmin : 2 - lmin; return [h, 100 * (l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s)), 100 * ((l + s) / 2)];
	}, convert.hsv.rgb = function (hsv) {
		const h = hsv[0] / 60; const s = hsv[1] / 100; let v = hsv[2] / 100; const hi = Math.floor(h) % 6; const f = h - Math.floor(h); const p = 255 * v * (1 - s); const q = 255 * v * (1 - s * f); const t = 255 * v * (1 - s * (1 - f)); switch (v *= 255, hi) {
			case 0: return [v, t, p]; case 1: return [q, v, p]; case 2: return [p, v, t]; case 3: return [p, q, v]; case 4: return [t, p, v]; case 5: return [v, p, q];
		}
	}, convert.hsv.hsl = function (hsv) {
		const h = hsv[0]; const s = hsv[1] / 100; const v = hsv[2] / 100; const vmin = Math.max(v, 0.01); let sl; let l; l = (2 - s) * v; const lmin = (2 - s) * vmin; return sl = s * vmin, sl /= lmin <= 1 ? lmin : 2 - lmin, sl = sl || 0, l /= 2, [h, 100 * sl, 100 * l];
	}, convert.hwb.rgb = function (hwb) {
		const h = hwb[0] / 360; let wh = hwb[1] / 100; let bl = hwb[2] / 100; const ratio = wh + bl; let f; ratio > 1 && (wh /= ratio, bl /= ratio); const i = Math.floor(6 * h); const v = 1 - bl; f = 6 * h - i, (1 & i) != 0 && (f = 1 - f); const n = wh + f * (v - wh); let r; let g; let b; switch (i) {
			default: case 6: case 0: r = v, g = n, b = wh; break; case 1: r = n, g = v, b = wh; break; case 2: r = wh, g = v, b = n; break; case 3: r = wh, g = n, b = v; break; case 4: r = n, g = wh, b = v; break; case 5: r = v, g = wh, b = n;
		}

		return [255 * r, 255 * g, 255 * b];
	}, convert.cmyk.rgb = function (cmyk) {
		const c = cmyk[0] / 100; const m = cmyk[1] / 100; const y = cmyk[2] / 100; const k = cmyk[3] / 100; return [255 * (1 - Math.min(1, c * (1 - k) + k)), 255 * (1 - Math.min(1, m * (1 - k) + k)), 255 * (1 - Math.min(1, y * (1 - k) + k))];
	}, convert.xyz.rgb = function (xyz) {
		const x = xyz[0] / 100; const y = xyz[1] / 100; const z = xyz[2] / 100; let r; let g; let b; return r = 3.2406 * x + -1.5372 * y + -0.4986 * z, g = -0.9689 * x + 1.8758 * y + 0.0415 * z, b = 0.0557 * x + -0.204 * y + 1.057 * z, r = r > 0.0031308 ? 1.055 * r ** (1 / 2.4) - 0.055 : 12.92 * r, g = g > 0.0031308 ? 1.055 * g ** (1 / 2.4) - 0.055 : 12.92 * g, b = b > 0.0031308 ? 1.055 * b ** (1 / 2.4) - 0.055 : 12.92 * b, r = Math.min(Math.max(0, r), 1), g = Math.min(Math.max(0, g), 1), b = Math.min(Math.max(0, b), 1), [255 * r, 255 * g, 255 * b];
	}, convert.xyz.lab = function (xyz) {
		let x = xyz[0]; let y = xyz[1]; let z = xyz[2]; x /= 95.047, y /= 100, z /= 108.883, x = x > 0.008856 ? x ** (1 / 3) : 7.787 * x + 16 / 116, y = y > 0.008856 ? y ** (1 / 3) : 7.787 * y + 16 / 116, z = z > 0.008856 ? z ** (1 / 3) : 7.787 * z + 16 / 116; return [116 * y - 16, 500 * (x - y), 200 * (y - z)];
	}, convert.lab.xyz = function (lab) {
		let x; let y; let z; y = (lab[0] + 16) / 116, x = lab[1] / 500 + y, z = y - lab[2] / 200; const y2 = y ** 3; const x2 = x ** 3; const z2 = z ** 3; return y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787, x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787, z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787, x *= 95.047, y *= 100, z *= 108.883, [x, y, z];
	}, convert.lab.lch = function (lab) {
		const l = lab[0]; const a = lab[1]; const b = lab[2]; let h; h = 360 * Math.atan2(b, a) / 2 / Math.PI, h < 0 && (h += 360); return [l, Math.sqrt(a * a + b * b), h];
	}, convert.lch.lab = function (lch) {
		const l = lch[0]; const c = lch[1]; const hr = lch[2] / 360 * 2 * Math.PI; return [l, c * Math.cos(hr), c * Math.sin(hr)];
	}, convert.rgb.ansi16 = function (args, saturation = null) {
		const [r, g, b] = args; let value = saturation === null ? convert.rgb.hsv(args)[2] : saturation; if (value = Math.round(value / 50), value === 0) {
			return 30;
		}

		let ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255)); return value === 2 && (ansi += 60), ansi;
	}, convert.hsv.ansi16 = function (args) {
		return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
	}, convert.rgb.ansi256 = function (args) {
		const r = args[0]; const g = args[1]; const b = args[2]; if (r === g && g === b) {
			return r < 8 ? 16 : r > 248 ? 231 : Math.round((r - 8) / 247 * 24) + 232;
		}

		return 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);
	}, convert.ansi16.rgb = function (args) {
		let color = args % 10; if (color === 0 || color === 7) {
			return args > 50 && (color += 3.5), color = color / 10.5 * 255, [color, color, color];
		}

		const mult = 0.5 * (1 + ~~(args > 50)); return [(1 & color) * mult * 255, (color >> 1 & 1) * mult * 255, (color >> 2 & 1) * mult * 255];
	}, convert.ansi256.rgb = function (args) {
		if (args >= 232) {
			const c = 10 * (args - 232) + 8; return [c, c, c];
		}

		let rem; args -= 16; return [Math.floor(args / 36) / 5 * 255, Math.floor((rem = args % 36) / 6) / 5 * 255, rem % 6 / 5 * 255];
	}, convert.rgb.hex = function (args) {
		const string = (((255 & Math.round(args[0])) << 16) + ((255 & Math.round(args[1])) << 8) + (255 & Math.round(args[2]))).toString(16).toUpperCase(); return '000000'.substring(string.length) + string;
	}, convert.hex.rgb = function (args) {
		const match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i); if (!match) {
			return [0, 0, 0];
		}

		let colorString = match[0]; match[0].length === 3 && (colorString = colorString.split('').map((char => char + char)).join('')); const integer = parseInt(colorString, 16); return [integer >> 16 & 255, integer >> 8 & 255, 255 & integer];
	}, convert.rgb.hcg = function (rgb) {
		const r = rgb[0] / 255; const g = rgb[1] / 255; const b = rgb[2] / 255; const max = Math.max(Math.max(r, g), b); const min = Math.min(Math.min(r, g), b); const chroma = max - min; let grayscale; let hue; return grayscale = chroma < 1 ? min / (1 - chroma) : 0, hue = chroma <= 0 ? 0 : max === r ? (g - b) / chroma % 6 : max === g ? 2 + (b - r) / chroma : 4 + (r - g) / chroma, hue /= 6, hue %= 1, [360 * hue, 100 * chroma, 100 * grayscale];
	}, convert.hsl.hcg = function (hsl) {
		const s = hsl[1] / 100; const l = hsl[2] / 100; const c = l < 0.5 ? 2 * s * l : 2 * s * (1 - l); let f = 0; return c < 1 && (f = (l - 0.5 * c) / (1 - c)), [hsl[0], 100 * c, 100 * f];
	}, convert.hsv.hcg = function (hsv) {
		const s = hsv[1] / 100; const v = hsv[2] / 100; const c = s * v; let f = 0; return c < 1 && (f = (v - c) / (1 - c)), [hsv[0], 100 * c, 100 * f];
	}, convert.hcg.rgb = function (hcg) {
		const h = hcg[0] / 360; const c = hcg[1] / 100; const g = hcg[2] / 100; if (c === 0) {
			return [255 * g, 255 * g, 255 * g];
		}

		const pure = [0, 0, 0]; const hi = h % 1 * 6; const v = hi % 1; const w = 1 - v; let mg = 0; switch (Math.floor(hi)) {
			case 0: pure[0] = 1, pure[1] = v, pure[2] = 0; break; case 1: pure[0] = w, pure[1] = 1, pure[2] = 0; break; case 2: pure[0] = 0, pure[1] = 1, pure[2] = v; break; case 3: pure[0] = 0, pure[1] = w, pure[2] = 1; break; case 4: pure[0] = v, pure[1] = 0, pure[2] = 1; break; default: pure[0] = 1, pure[1] = 0, pure[2] = w;
		}

		return mg = (1 - c) * g, [255 * (c * pure[0] + mg), 255 * (c * pure[1] + mg), 255 * (c * pure[2] + mg)];
	}, convert.hcg.hsv = function (hcg) {
		const c = hcg[1] / 100; const v = c + hcg[2] / 100 * (1 - c); let f = 0; return v > 0 && (f = c / v), [hcg[0], 100 * f, 100 * v];
	}, convert.hcg.hsl = function (hcg) {
		const c = hcg[1] / 100; const l = hcg[2] / 100 * (1 - c) + 0.5 * c; let s = 0; return l > 0 && l < 0.5 ? s = c / (2 * l) : l >= 0.5 && l < 1 && (s = c / (2 * (1 - l))), [hcg[0], 100 * s, 100 * l];
	}, convert.hcg.hwb = function (hcg) {
		const c = hcg[1] / 100; const v = c + hcg[2] / 100 * (1 - c); return [hcg[0], 100 * (v - c), 100 * (1 - v)];
	}, convert.hwb.hcg = function (hwb) {
		const w = hwb[1] / 100; const v = 1 - hwb[2] / 100; const c = v - w; let g = 0; return c < 1 && (g = (v - c) / (1 - c)), [hwb[0], 100 * c, 100 * g];
	}, convert.apple.rgb = function (apple) {
		return [apple[0] / 65535 * 255, apple[1] / 65535 * 255, apple[2] / 65535 * 255];
	}, convert.rgb.apple = function (rgb) {
		return [rgb[0] / 255 * 65535, rgb[1] / 255 * 65535, rgb[2] / 255 * 65535];
	}, convert.gray.rgb = function (args) {
		return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
	}, convert.gray.hsl = function (args) {
		return [0, 0, args[0]];
	}, convert.gray.hsv = convert.gray.hsl, convert.gray.hwb = function (gray) {
		return [0, 100, gray[0]];
	}, convert.gray.cmyk = function (gray) {
		return [0, 0, 0, gray[0]];
	}, convert.gray.lab = function (gray) {
		return [gray[0], 0, 0];
	}, convert.gray.hex = function (gray) {
		const val = 255 & Math.round(gray[0] / 100 * 255); const string = ((val << 16) + (val << 8) + val).toString(16).toUpperCase(); return '000000'.substring(string.length) + string;
	}, convert.rgb.gray = function (rgb) {
		return [(rgb[0] + rgb[1] + rgb[2]) / 3 / 255 * 100];
	};
}, 1105(module, exports, __webpack_require__) {
	const conversions = __webpack_require__(1064); const route = __webpack_require__(1107); const convert = {}; Object.keys(conversions).forEach((fromModel => {
		convert[fromModel] = {}, Object.defineProperty(convert[fromModel], 'channels', {value: conversions[fromModel].channels}), Object.defineProperty(convert[fromModel], 'labels', {value: conversions[fromModel].labels}); const routes = route(fromModel); Object.keys(routes).forEach((toModel => {
			const fn = routes[toModel]; convert[fromModel][toModel] = (function wrapRounded(fn) {
				const wrappedFn = function (...args) {
					const arg0 = args[0]; if (arg0 == null) {
						return arg0;
					}

					arg0.length > 1 && (args = arg0); const result = fn(args); if (typeof result === 'object') {
						for (let len = result.length, i = 0; i < len; i++) {
							result[i] = Math.round(result[i]);
						}
					}

					return result;
				};

				return 'conversion' in fn && (wrappedFn.conversion = fn.conversion), wrappedFn;
			})(fn), convert[fromModel][toModel].raw = (function wrapRaw(fn) {
				const wrappedFn = function (...args) {
					const arg0 = args[0]; return arg0 == null ? arg0 : (arg0.length > 1 && (args = arg0), fn(args));
				};

				return 'conversion' in fn && (wrappedFn.conversion = fn.conversion), wrappedFn;
			})(fn);
		}));
	})), module.exports = convert;
}, 1106(module, exports, __webpack_require__) {
	'use strict'; module.exports = {aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50]};
}, 1107(module, exports, __webpack_require__) {
	const conversions = __webpack_require__(1064); function deriveBFS(fromModel) {
		const graph = (function buildGraph() {
			const graph = {}; const models = Object.keys(conversions); for (let len = models.length, i = 0; i < len; i++) {
				graph[models[i]] = {distance: -1, parent: null};
			}

			return graph;
		})(); const queue = [fromModel]; for (graph[fromModel].distance = 0; queue.length;) {
			const current = queue.pop(); const adjacents = Object.keys(conversions[current]); for (let len = adjacents.length, i = 0; i < len; i++) {
				const adjacent = adjacents[i]; const node = graph[adjacent]; node.distance === -1 && (node.distance = graph[current].distance + 1, node.parent = current, queue.unshift(adjacent));
			}
		}

		return graph;
	}

	function link(from, to) {
		return function (args) {
			return to(from(args));
		};
	}

	function wrapConversion(toModel, graph) {
		const path = [graph[toModel].parent, toModel]; let fn = conversions[graph[toModel].parent][toModel]; let cur = graph[toModel].parent; for (;graph[cur].parent;) {
			path.unshift(graph[cur].parent), fn = link(conversions[graph[cur].parent][cur], fn), cur = graph[cur].parent;
		}

		return fn.conversion = path, fn;
	}

	module.exports = function (fromModel) {
		const graph = deriveBFS(fromModel); const conversion = {}; const models = Object.keys(graph); for (let len = models.length, i = 0; i < len; i++) {
			const toModel = models[i]; graph[toModel].parent !== null && (conversion[toModel] = wrapConversion(toModel, graph));
		}

		return conversion;
	};
}, 1108(module, exports, __webpack_require__) {
	let debounce = __webpack_require__(1109); let isObject = __webpack_require__(122); module.exports = function throttle(func, wait, options) {
		let leading = !0; let trailing = !0; if (typeof func !== 'function') {
			throw new TypeError('Expected a function');
		}

		return isObject(options) && (leading = 'leading' in options ? Boolean(options.leading) : leading, trailing = 'trailing' in options ? Boolean(options.trailing) : trailing), debounce(func, wait, {leading, maxWait: wait, trailing});
	};
}, 1109(module, exports, __webpack_require__) {
	let isObject = __webpack_require__(122); let now = __webpack_require__(1110); let toNumber = __webpack_require__(1111); let nativeMax = Math.max; let nativeMin = Math.min; module.exports = function debounce(func, wait, options) {
		let lastArgs; let lastThis; let maxWait; let result; let timerId; let lastCallTime; let lastInvokeTime = 0; let leading = !1; let maxing = !1; let trailing = !0; if (typeof func !== 'function') {
			throw new TypeError('Expected a function');
		}

		function invokeFunc(time) {
			let args = lastArgs; let thisArg = lastThis; return lastArgs = lastThis = void 0, lastInvokeTime = time, result = func.apply(thisArg, args);
		}

		function leadingEdge(time) {
			return lastInvokeTime = time, timerId = setTimeout(timerExpired, wait), leading ? invokeFunc(time) : result;
		}

		function shouldInvoke(time) {
			let timeSinceLastCall = time - lastCallTime; return void 0 === lastCallTime || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && time - lastInvokeTime >= maxWait;
		}

		function timerExpired() {
			let time = now(); if (shouldInvoke(time)) {
				return trailingEdge(time);
			}

			timerId = setTimeout(timerExpired, (function remainingWait(time) {
				let timeWaiting = wait - (time - lastCallTime); return maxing ? nativeMin(timeWaiting, maxWait - (time - lastInvokeTime)) : timeWaiting;
			})(time));
		}

		function trailingEdge(time) {
			return timerId = void 0, trailing && lastArgs ? invokeFunc(time) : (lastArgs = lastThis = void 0, result);
		}

		function debounced() {
			let time = now(); let isInvoking = shouldInvoke(time); if (lastArgs = arguments, lastThis = this, lastCallTime = time, isInvoking) {
				if (void 0 === timerId) {
					return leadingEdge(lastCallTime);
				}

				if (maxing) {
					return clearTimeout(timerId), timerId = setTimeout(timerExpired, wait), invokeFunc(lastCallTime);
				}
			}

			return void 0 === timerId && (timerId = setTimeout(timerExpired, wait)), result;
		}

		return wait = toNumber(wait) || 0, isObject(options) && (leading = Boolean(options.leading), maxWait = (maxing = 'maxWait' in options) ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait, trailing = 'trailing' in options ? Boolean(options.trailing) : trailing), debounced.cancel = function cancel() {
			void 0 !== timerId && clearTimeout(timerId), lastInvokeTime = 0, lastArgs = lastCallTime = lastThis = timerId = void 0;
		}, debounced.flush = function flush() {
			return void 0 === timerId ? result : trailingEdge(now());
		}, debounced;
	};
}, 1110(module, exports, __webpack_require__) {
	let root = __webpack_require__(91); module.exports = function () {
		return root.Date.now();
	};
}, 1111(module, exports, __webpack_require__) {
	let baseTrim = __webpack_require__(1112); let isObject = __webpack_require__(122); let isSymbol = __webpack_require__(233); let reIsBadHex = /^[-+]0x[0-9a-f]+$/i; let reIsBinary = /^0b[01]+$/i; let reIsOctal = /^0o[0-7]+$/i; let freeParseInt = parseInt; module.exports = function toNumber(value) {
		if (typeof value === 'number') {
			return value;
		}

		if (isSymbol(value)) {
			return NaN;
		}

		if (isObject(value)) {
			let other = typeof value.valueOf === 'function' ? value.valueOf() : value; value = isObject(other) ? String(other) : other;
		}

		if (typeof value !== 'string') {
			return value === 0 ? value : Number(value);
		}

		value = baseTrim(value); let isBinary = reIsBinary.test(value); return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NaN : Number(value);
	};
}, 1112(module, exports, __webpack_require__) {
	let trimmedEndIndex = __webpack_require__(1113); let reTrimStart = /^\s+/; module.exports = function baseTrim(string) {
		return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '') : string;
	};
}, 1113(module, exports) {
	let reWhitespace = /\s/; module.exports = function trimmedEndIndex(string) {
		for (var index = string.length; index-- && reWhitespace.test(string.charAt(index));) {

		}

		return index;
	};
}, 614(module, __webpack_exports__, __webpack_require__) {
	'use strict'; __webpack_require__.d(__webpack_exports__, 'a', (() => TooltipNote)); __webpack_require__(136), __webpack_require__(25), __webpack_require__(6); let react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0); let react__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__); function _objectWithoutProperties(source, excluded) {
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

	let Note = __webpack_require__(1).styled.div((_ref => {
		let {theme} = _ref; return {padding: '2px 6px', lineHeight: '16px', fontSize: 10, fontWeight: theme.typography.weight.bold, color: theme.color.lightest, boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.3)', borderRadius: 4, whiteSpace: 'nowrap', pointerEvents: 'none', zIndex: -1, background: 'rgba(0, 0, 0, 0.4)', margin: 6};
	})); var TooltipNote = function TooltipNote(_ref2) {
		let {note} = _ref2; let
			props = _objectWithoutProperties(_ref2, ['note']); return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Note, props, note);
	};

	TooltipNote.displayName = 'TooltipNote';
}}]);
