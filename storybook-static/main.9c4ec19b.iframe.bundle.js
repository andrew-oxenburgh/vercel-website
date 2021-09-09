(window.webpackJsonp = window.webpackJsonp || []).push([[1], {1013(module, __webpack_exports__, __webpack_require__) {
	'use strict'; __webpack_require__.r(__webpack_exports__); let preview_namespaceObject = {}; __webpack_require__.r(preview_namespaceObject), __webpack_require__.d(preview_namespaceObject, 'decorators', (() => decorators)), __webpack_require__.d(preview_namespaceObject, 'parameters', (() => parameters)); __webpack_require__(25), __webpack_require__(6), __webpack_require__(53), __webpack_require__(439), __webpack_require__(990), __webpack_require__(50), __webpack_require__(991), __webpack_require__(992), __webpack_require__(438); let client_api = __webpack_require__(1048); let esm = __webpack_require__(5); let react = __webpack_require__(0); let react_default = __webpack_require__.n(react); let jsx_runtime = __webpack_require__(29); var decorators = (react_default.a.createElement, [function (Story) {
		return Object(jsx_runtime.jsx)('div', {style: {margin: '1em'}, children: Object(jsx_runtime.jsx)(Story, {})});
	}]); var parameters = {actions: {argTypesRegex: '^on[A-Z].*'}, controls: {matchers: {color: /(background|color)$/i, date: /Date$/}}}; function ownKeys(object, enumerableOnly) {
		let keys = Object.keys(object); if (Object.getOwnPropertySymbols) {
			let symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter((sym => Object.getOwnPropertyDescriptor(object, sym).enumerable))), keys.push.apply(keys, symbols);
		}

		return keys;
	}

	function _defineProperty(obj, key, value) {
		return key in obj ? Object.defineProperty(obj, key, {value, enumerable: !0, configurable: !0, writable: !0}) : obj[key] = value, obj;
	}

	Object.keys(preview_namespaceObject).forEach((key => {
		let value = preview_namespaceObject[key]; switch (key) {
			case 'args': case 'argTypes': return esm.a.warn('Invalid args/argTypes in config, ignoring.', JSON.stringify(value)); case 'decorators': return value.forEach((decorator => Object(client_api.c)(decorator, !1))); case 'loaders': return value.forEach((loader => Object(client_api.d)(loader, !1))); case 'parameters': return Object(client_api.e)((function _objectSpread(target) {
				for (let i = 1; i < arguments.length; i++) {
					var source = arguments[i] != null ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach((key => {
						_defineProperty(target, key, source[key]);
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach((key => {
						Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
					}));
				}

				return target;
			})({}, value), !1); case 'argTypesEnhancers': return value.forEach((enhancer => Object(client_api.a)(enhancer))); case 'argsEnhancers': return value.forEach((enhancer => Object(client_api.b)(enhancer))); case 'render': return Object(client_api.g)(value); case 'globals': case 'globalTypes': var v = {}; return v[key] = value, Object(client_api.e)(v, !1); default: return console.log(key + ' was not supported :( !');
		}
	}));
}, 1014(module, __webpack_exports__, __webpack_require__) {
	'use strict'; __webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, 'Primary', (() => Primary)); __webpack_require__(15), __webpack_require__(447); let react = __webpack_require__(0); let react_default = __webpack_require__.n(react); let makeStyles = (__webpack_require__(997), __webpack_require__(1044)); let Typography = __webpack_require__(1047); let jsx_runtime = __webpack_require__(29); let useStyles = (react_default.a.createElement, Object(makeStyles.a)({triangle: {position: 'absolute', top: 0, right: 0, fontSize: '0.5em', width: '0', height: '0', zIndex: 100, border: '5em solid', pointerEvents: 'none', borderColor: 'rebeccapurple rebeccapurple transparent transparent'}, text: {color: 'white', position: 'absolute', top: 0, right: 0, background: 'transparent', fontSize: '0.5em', fontWeight: 'bold', width: '5rem', height: '5rem', textAlign: 'center', zIndex: 100, transformOrigin: '0 0', transform: 'translateX(3.2em) rotate(45deg)', pointerEvents: 'none'}})); function CornerStamp(_ref) {
		let stamp; let {host} = _ref; let classes = useStyles(); return stamp = host.indexOf('vercel') >= 0 ? 'vercel' : host.indexOf('github') >= 0 ? 'github' : host.indexOf('localhost') >= 0 ? 'localhost' : 'unknown', Object(jsx_runtime.jsxs)(Typography.a, {component: 'span', children: [Object(jsx_runtime.jsx)('div', {className: classes.triangle}), Object(jsx_runtime.jsx)('div', {className: classes.text, children: stamp})]});
	}

	CornerStamp.displayName = 'CornerStamp', CornerStamp.__docgenInfo = {description: '', methods: [], displayName: 'CornerStamp', props: {host: {type: {name: 'string'}, required: !1, description: ''}}}, typeof STORYBOOK_REACT_CLASSES !== 'undefined' && (STORYBOOK_REACT_CLASSES['src/components/CornerStamp.js'] = {name: 'CornerStamp', docgenInfo: CornerStamp.__docgenInfo, path: 'src/components/CornerStamp.js'}); react_default.a.createElement, __webpack_exports__.default = {title: 'Blog/CornerStamp', component: CornerStamp}; let BlogSummary_stories_Template = function Template(args) {
		return Object(jsx_runtime.jsx)(CornerStamp, {...args});
	};

	BlogSummary_stories_Template.displayName = 'Template'; var Primary = BlogSummary_stories_Template.bind({}); Primary.args = {host: 'vercel'}, Primary.parameters = {storySource: {source: 'args => <CornerStamp {...args} />'}, ...Primary.parameters};
}, 1015(module, __webpack_exports__, __webpack_require__) {
	'use strict'; __webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, 'Primary', (() => Primary)); __webpack_require__(15), __webpack_require__(447); let react = __webpack_require__(0); let react_default = __webpack_require__.n(react); let Card = (__webpack_require__(6), __webpack_require__(10), __webpack_require__(1045)); let CardContent = __webpack_require__(1049); let Typography = __webpack_require__(1047); let makeStyles = __webpack_require__(1044); let moment = __webpack_require__(3); let moment_default = __webpack_require__.n(moment); let Timer = __webpack_require__(611); let Timer_default = __webpack_require__.n(Timer); let jsx_runtime = __webpack_require__(29); let useStyles = (react_default.a.createElement, Object(makeStyles.a)({root: {minWidth: '20em', overflowWrap: 'break-word', overflow: 'clip'}, content: {padding: '0.5em'}, title: {borderBottom: '1px solid darkgrey'}, when: {fontStyle: 'italic'}})); let BlogSummary_BlogSummary = function BlogSummary(_ref) {
		let {meta} = _ref.post.module; let classes = useStyles(); let moment1 = moment_default()(meta.date); let
			when = moment_default()(moment1).fromNow(); return Object(jsx_runtime.jsx)(Card.a, {className: classes.root, variant: 'outlined', children: Object(jsx_runtime.jsxs)(CardContent.a, {className: classes.content, children: [Object(jsx_runtime.jsx)(Typography.a, {className: classes.title, gutterBottom: !0, variant: 'h5', component: 'h2', children: meta.title}), Object(jsx_runtime.jsx)(Typography.a, {variant: 'body2', color: 'textSecondary', component: 'p', children: meta.description}), Object(jsx_runtime.jsx)(Typography.a, {className: classes.when, variant: 'body2', color: 'textSecondary', component: 'span', children: when}), Object(jsx_runtime.jsxs)(Typography.a, {className: classes.when, variant: 'body2', color: 'textSecondary', component: 'span', children: [Object(jsx_runtime.jsx)(Timer_default.a, {}), ' ', meta.readTime, ' minutes']})]})});
	};

	BlogSummary_BlogSummary.displayName = 'BlogSummary', BlogSummary_BlogSummary.__docgenInfo = {description: '', methods: [], displayName: 'BlogSummary', props: {post: {type: {name: 'shape', value: {link: {name: 'string', required: !1}, module: {name: 'object', required: !1}, readTime: {name: 'number', required: !1}}}, required: !1, description: ''}}}, typeof STORYBOOK_REACT_CLASSES !== 'undefined' && (STORYBOOK_REACT_CLASSES['src/components/BlogSummary.js'] = {name: 'BlogSummary', docgenInfo: BlogSummary_BlogSummary.__docgenInfo, path: 'src/components/BlogSummary.js'}); react_default.a.createElement, __webpack_exports__.default = {title: 'Blog/BlogSummary', component: BlogSummary_BlogSummary, argTypes: {backgroundColor: {control: 'color'}}}; let CornerStamp_stories_Template = function Template(args) {
		return Object(jsx_runtime.jsx)(BlogSummary_BlogSummary, {...args});
	};

	CornerStamp_stories_Template.displayName = 'Template'; var Primary = CornerStamp_stories_Template.bind({}); Primary.args = {post: {link: '/some-link', module: {meta: {date: 'July 27, 2021', title: 'blog title goes here', description: 'here is a desc', readTime: '5'}}}}, Primary.parameters = {storySource: {source: 'args => <BlogSummary {...args} />'}, ...Primary.parameters};
}, 635(module, exports, __webpack_require__) {
	__webpack_require__(636), __webpack_require__(794), __webpack_require__(795), __webpack_require__(1003), __webpack_require__(1005), __webpack_require__(1010), __webpack_require__(1011), __webpack_require__(1009), __webpack_require__(1006), __webpack_require__(1012), __webpack_require__(1007), __webpack_require__(1008), __webpack_require__(1013), module.exports = __webpack_require__(994);
}, 703(module, exports) {}, 795(module, __webpack_exports__, __webpack_require__) {
	'use strict'; __webpack_require__.r(__webpack_exports__); __webpack_require__(356);
}, 994(module, exports, __webpack_require__) {
	'use strict'; (function (module) {
		(0, __webpack_require__(356).configure)([__webpack_require__(995), __webpack_require__(996)], module, !1);
	}).call(this, __webpack_require__(171)(module));
}, 995(module, exports) {
	function webpackEmptyContext(req) {
		let e = new Error('Cannot find module \'' + req + '\''); throw e.code = 'MODULE_NOT_FOUND', e;
	}

	webpackEmptyContext.keys = function () {
		return [];
	}, webpackEmptyContext.resolve = webpackEmptyContext, module.exports = webpackEmptyContext, webpackEmptyContext.id = 995;
}, 996(module, exports, __webpack_require__) {
	let map = {'./components/BlogSummary.stories.jsx': 1014, './components/CornerStamp.stories.jsx': 1015}; function webpackContext(req) {
		let id = webpackContextResolve(req); return __webpack_require__(id);
	}

	function webpackContextResolve(req) {
		if (!__webpack_require__.o(map, req)) {
			let e = new Error('Cannot find module \'' + req + '\''); throw e.code = 'MODULE_NOT_FOUND', e;
		}

		return map[req];
	}

	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	}, webpackContext.resolve = webpackContextResolve, module.exports = webpackContext, webpackContext.id = 996;
}, 998(module, exports, __webpack_require__) {
	let map = {'./af': 448, './af.js': 448, './ar': 449, './ar-dz': 450, './ar-dz.js': 450, './ar-kw': 451, './ar-kw.js': 451, './ar-ly': 452, './ar-ly.js': 452, './ar-ma': 453, './ar-ma.js': 453, './ar-sa': 454, './ar-sa.js': 454, './ar-tn': 455, './ar-tn.js': 455, './ar.js': 449, './az': 456, './az.js': 456, './be': 457, './be.js': 457, './bg': 458, './bg.js': 458, './bm': 459, './bm.js': 459, './bn': 460, './bn-bd': 461, './bn-bd.js': 461, './bn.js': 460, './bo': 462, './bo.js': 462, './br': 463, './br.js': 463, './bs': 464, './bs.js': 464, './ca': 465, './ca.js': 465, './cs': 466, './cs.js': 466, './cv': 467, './cv.js': 467, './cy': 468, './cy.js': 468, './da': 469, './da.js': 469, './de': 470, './de-at': 471, './de-at.js': 471, './de-ch': 472, './de-ch.js': 472, './de.js': 470, './dv': 473, './dv.js': 473, './el': 474, './el.js': 474, './en-au': 475, './en-au.js': 475, './en-ca': 476, './en-ca.js': 476, './en-gb': 477, './en-gb.js': 477, './en-ie': 478, './en-ie.js': 478, './en-il': 479, './en-il.js': 479, './en-in': 480, './en-in.js': 480, './en-nz': 481, './en-nz.js': 481, './en-sg': 482, './en-sg.js': 482, './eo': 483, './eo.js': 483, './es': 484, './es-do': 485, './es-do.js': 485, './es-mx': 486, './es-mx.js': 486, './es-us': 487, './es-us.js': 487, './es.js': 484, './et': 488, './et.js': 488, './eu': 489, './eu.js': 489, './fa': 490, './fa.js': 490, './fi': 491, './fi.js': 491, './fil': 492, './fil.js': 492, './fo': 493, './fo.js': 493, './fr': 494, './fr-ca': 495, './fr-ca.js': 495, './fr-ch': 496, './fr-ch.js': 496, './fr.js': 494, './fy': 497, './fy.js': 497, './ga': 498, './ga.js': 498, './gd': 499, './gd.js': 499, './gl': 500, './gl.js': 500, './gom-deva': 501, './gom-deva.js': 501, './gom-latn': 502, './gom-latn.js': 502, './gu': 503, './gu.js': 503, './he': 504, './he.js': 504, './hi': 505, './hi.js': 505, './hr': 506, './hr.js': 506, './hu': 507, './hu.js': 507, './hy-am': 508, './hy-am.js': 508, './id': 509, './id.js': 509, './is': 510, './is.js': 510, './it': 511, './it-ch': 512, './it-ch.js': 512, './it.js': 511, './ja': 513, './ja.js': 513, './jv': 514, './jv.js': 514, './ka': 515, './ka.js': 515, './kk': 516, './kk.js': 516, './km': 517, './km.js': 517, './kn': 518, './kn.js': 518, './ko': 519, './ko.js': 519, './ku': 520, './ku.js': 520, './ky': 521, './ky.js': 521, './lb': 522, './lb.js': 522, './lo': 523, './lo.js': 523, './lt': 524, './lt.js': 524, './lv': 525, './lv.js': 525, './me': 526, './me.js': 526, './mi': 527, './mi.js': 527, './mk': 528, './mk.js': 528, './ml': 529, './ml.js': 529, './mn': 530, './mn.js': 530, './mr': 531, './mr.js': 531, './ms': 532, './ms-my': 533, './ms-my.js': 533, './ms.js': 532, './mt': 534, './mt.js': 534, './my': 535, './my.js': 535, './nb': 536, './nb.js': 536, './ne': 537, './ne.js': 537, './nl': 538, './nl-be': 539, './nl-be.js': 539, './nl.js': 538, './nn': 540, './nn.js': 540, './oc-lnc': 541, './oc-lnc.js': 541, './pa-in': 542, './pa-in.js': 542, './pl': 543, './pl.js': 543, './pt': 544, './pt-br': 545, './pt-br.js': 545, './pt.js': 544, './ro': 546, './ro.js': 546, './ru': 547, './ru.js': 547, './sd': 548, './sd.js': 548, './se': 549, './se.js': 549, './si': 550, './si.js': 550, './sk': 551, './sk.js': 551, './sl': 552, './sl.js': 552, './sq': 553, './sq.js': 553, './sr': 554, './sr-cyrl': 555, './sr-cyrl.js': 555, './sr.js': 554, './ss': 556, './ss.js': 556, './sv': 557, './sv.js': 557, './sw': 558, './sw.js': 558, './ta': 559, './ta.js': 559, './te': 560, './te.js': 560, './tet': 561, './tet.js': 561, './tg': 562, './tg.js': 562, './th': 563, './th.js': 563, './tk': 564, './tk.js': 564, './tl-ph': 565, './tl-ph.js': 565, './tlh': 566, './tlh.js': 566, './tr': 567, './tr.js': 567, './tzl': 568, './tzl.js': 568, './tzm': 569, './tzm-latn': 570, './tzm-latn.js': 570, './tzm.js': 569, './ug-cn': 571, './ug-cn.js': 571, './uk': 572, './uk.js': 572, './ur': 573, './ur.js': 573, './uz': 574, './uz-latn': 575, './uz-latn.js': 575, './uz.js': 574, './vi': 576, './vi.js': 576, './x-pseudo': 577, './x-pseudo.js': 577, './yo': 578, './yo.js': 578, './zh-cn': 579, './zh-cn.js': 579, './zh-hk': 580, './zh-hk.js': 580, './zh-mo': 581, './zh-mo.js': 581, './zh-tw': 582, './zh-tw.js': 582}; function webpackContext(req) {
		let id = webpackContextResolve(req); return __webpack_require__(id);
	}

	function webpackContextResolve(req) {
		if (!__webpack_require__.o(map, req)) {
			let e = new Error('Cannot find module \'' + req + '\''); throw e.code = 'MODULE_NOT_FOUND', e;
		}

		return map[req];
	}

	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	}, webpackContext.resolve = webpackContextResolve, module.exports = webpackContext, webpackContext.id = 998;
}}, [[635, 2, 3]]]);
