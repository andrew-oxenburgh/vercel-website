(window.webpackJsonp = window.webpackJsonp || []).push([[8], {864(module, __webpack_exports__, __webpack_require__) {
	'use strict'; __webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, 'OverlayScrollbarsComponent', (() => OverlayScrollbarsComponent)); __webpack_require__(456), __webpack_require__(26), __webpack_require__(88), __webpack_require__(79), __webpack_require__(62), __webpack_require__(31), __webpack_require__(77), __webpack_require__(40), __webpack_require__(18), __webpack_require__(23), __webpack_require__(4), __webpack_require__(15); let react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(0); let react__WEBPACK_IMPORTED_MODULE_12___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__); let overlayscrollbars__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(887); let overlayscrollbars__WEBPACK_IMPORTED_MODULE_13___default = __webpack_require__.n(overlayscrollbars__WEBPACK_IMPORTED_MODULE_13__); function _extends() {
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

	var OverlayScrollbarsComponent = function OverlayScrollbarsComponent(_ref) {
		let _ref$options = _ref.options; let options = void 0 === _ref$options ? {} : _ref$options; let {extensions} = _ref; let {className} = _ref; let {children} = _ref; let rest = _objectWithoutProperties(_ref, ['options', 'extensions', 'className', 'children']); let osTargetRef = react__WEBPACK_IMPORTED_MODULE_12___default.a.useRef(); let osInstance = react__WEBPACK_IMPORTED_MODULE_12___default.a.useRef(); return react__WEBPACK_IMPORTED_MODULE_12___default.a.useEffect((() => (osInstance.current = overlayscrollbars__WEBPACK_IMPORTED_MODULE_13___default()(osTargetRef.current, options, extensions), mergeHostClassNames(osInstance.current, className), function () {
			overlayscrollbars__WEBPACK_IMPORTED_MODULE_13___default.a.valid(osInstance.current) && (osInstance.current.destroy(), osInstance.current = null);
		})), []), react__WEBPACK_IMPORTED_MODULE_12___default.a.useEffect((() => {
			overlayscrollbars__WEBPACK_IMPORTED_MODULE_13___default.a.valid(osInstance.current) && osInstance.current.options(options);
		}), [options]), react__WEBPACK_IMPORTED_MODULE_12___default.a.useEffect((() => {
			overlayscrollbars__WEBPACK_IMPORTED_MODULE_13___default.a.valid(osInstance.current) && mergeHostClassNames(osInstance.current, className);
		}), [className]), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement('div', {className: 'os-host', ...rest, ref: osTargetRef}, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement('div', {className: 'os-resize-observer-host'}), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement('div', {className: 'os-padding'}, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement('div', {className: 'os-viewport'}, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement('div', {className: 'os-content'}, children))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement('div', {className: 'os-scrollbar os-scrollbar-horizontal '}, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement('div', {className: 'os-scrollbar-track'}, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement('div', {className: 'os-scrollbar-handle'}))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement('div', {className: 'os-scrollbar os-scrollbar-vertical'}, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement('div', {className: 'os-scrollbar-track'}, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement('div', {className: 'os-scrollbar-handle'}))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement('div', {className: 'os-scrollbar-corner'}));
	};

	function mergeHostClassNames(osInstance, className) {
		if (overlayscrollbars__WEBPACK_IMPORTED_MODULE_13___default.a.valid(osInstance)) {
			let {host} = osInstance.getElements(); let regex = new RegExp('(^os-host([-_].+|)$)|'.concat(osInstance.options().className.replace(/\s/g, '$|'), '$'), 'g'); let
				osClassNames = host.className.split(' ').filter((name => name.match(regex))).join(' '); host.className = ''.concat(osClassNames, ' ').concat(className || '');
		}
	}

	OverlayScrollbarsComponent.displayName = 'OverlayScrollbarsComponent', __webpack_exports__.default = OverlayScrollbarsComponent;
}}]);
