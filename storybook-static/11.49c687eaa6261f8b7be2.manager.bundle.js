/*! For license information please see 11.49c687eaa6261f8b7be2.manager.bundle.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([[11], {887(module, exports, __webpack_require__) {
	let __WEBPACK_AMD_DEFINE_RESULT__; let global; global = typeof window !== 'undefined' ? window : this, void 0 === (__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
		return (function (window, document, undefined) {
			'use strict'; let _targets; let _instancePropertyString; let _easingsMath; let PLUGINNAME = 'OverlayScrollbars'; let TYPES = {o: 'object', f: 'function', a: 'array', s: 'string', b: 'boolean', n: 'number', u: 'undefined', z: 'null'}; let LEXICON = {c: 'class', s: 'style', i: 'id', l: 'length', p: 'prototype', ti: 'tabindex', oH: 'offsetHeight', cH: 'clientHeight', sH: 'scrollHeight', oW: 'offsetWidth', cW: 'clientWidth', sW: 'scrollWidth', hOP: 'hasOwnProperty', bCR: 'getBoundingClientRect'}; var VENDORS = (function () {
				let jsCache = {}; let cssCache = {}; let cssPrefixes = ['-webkit-', '-moz-', '-o-', '-ms-']; let jsPrefixes = ['WebKit', 'Moz', 'O', 'MS']; function firstLetterToUpper(str) {
					return str.charAt(0).toUpperCase() + str.slice(1);
				}

				return {_cssPrefixes: cssPrefixes, _jsPrefixes: jsPrefixes, _cssProperty(name) {
					let result = cssCache[name]; if (cssCache[LEXICON.hOP](name)) {
						return result;
					}

 for (var resultPossibilities, v, currVendorWithoutDashes, uppercasedName = firstLetterToUpper(name), elmStyle = document.createElement('div')[LEXICON.s], i = 0; i < cssPrefixes.length; i++) {
						for (currVendorWithoutDashes = cssPrefixes[i].replace(/-/g, ''), resultPossibilities = [name, cssPrefixes[i] + name, currVendorWithoutDashes + uppercasedName, firstLetterToUpper(currVendorWithoutDashes) + uppercasedName], v = 0; v < resultPossibilities[LEXICON.l]; v++) {
if (elmStyle[resultPossibilities[v]] !== undefined) {
							result = resultPossibilities[v]; break;
						}
}
}

					return cssCache[name] = result, result;
				}, _cssPropertyValue(property, values, suffix) {
					let name = property + ' ' + values; let result = cssCache[name]; if (cssCache[LEXICON.hOP](name)) {
						return result;
					}

 for (var prop, dummyStyle = document.createElement('div')[LEXICON.s], possbleValues = values.split(' '), preparedSuffix = suffix || '', i = 0, v = -1; i < possbleValues[LEXICON.l]; i++) {
						for (;v < VENDORS._cssPrefixes[LEXICON.l]; v++) {
if (prop = v < 0 ? possbleValues[i] : VENDORS._cssPrefixes[v] + possbleValues[i], dummyStyle.cssText = property + ':' + prop + preparedSuffix, dummyStyle[LEXICON.l]) {
							result = prop; break;
						}
}
}

					return cssCache[name] = result, result;
				}, _jsAPI(name, isInterface, fallback) {
					let i = 0; let result = jsCache[name]; if (!jsCache[LEXICON.hOP](name)) {
						for (result = window[name]; i < jsPrefixes[LEXICON.l]; i++) {
							result = result || window[(isInterface ? jsPrefixes[i] : jsPrefixes[i].toLowerCase()) + firstLetterToUpper(name)];
						}

						jsCache[name] = result;
					}

					return result || fallback;
				}};
			})(); let COMPATIBILITY = (function () {
				function windowSize(x) {
					return x ? window.innerWidth || document.documentElement[LEXICON.cW] || document.body[LEXICON.cW] : window.innerHeight || document.documentElement[LEXICON.cH] || document.body[LEXICON.cH];
				}

				function bind(func, thisObj) {
					if (typeof func !== TYPES.f) {
						throw 'Can\'t bind function!';
					}

					let proto = LEXICON.p; let aArgs = Array[proto].slice.call(arguments, 2); let fNOP = function () {}; let fBound = function () {
						return func.apply(this instanceof fNOP ? this : thisObj, aArgs.concat(Array[proto].slice.call(arguments)));
					};

					return func[proto] && (fNOP[proto] = func[proto]), fBound[proto] = new fNOP(), fBound;
				}

				return {wW: bind(windowSize, 0, !0), wH: bind(windowSize, 0), mO: bind(VENDORS._jsAPI, 0, 'MutationObserver', !0), rO: bind(VENDORS._jsAPI, 0, 'ResizeObserver', !0), rAF: bind(VENDORS._jsAPI, 0, 'requestAnimationFrame', !1, (func => window.setTimeout(func, 1e3 / 60))), cAF: bind(VENDORS._jsAPI, 0, 'cancelAnimationFrame', !1, (id => window.clearTimeout(id))), now() {
					return Date.now && Date.now() || (new Date()).getTime();
				}, stpP(event) {
					event.stopPropagation ? event.stopPropagation() : event.cancelBubble = !0;
				}, prvD(event) {
					event.preventDefault && event.cancelable ? event.preventDefault() : event.returnValue = !1;
				}, page(event) {
					let strPage = 'page'; let strClient = 'client'; let strX = 'X'; let strY = 'Y'; let eventDoc = ((event = event.originalEvent || event).target || event.srcElement || document).ownerDocument || document; let doc = eventDoc.documentElement; let {body} = eventDoc; if (event.touches !== undefined) {
						let touch = event.touches[0]; return {x: touch[strPage + strX], y: touch[strPage + strY]};
					}

					return !event[strPage + strX] && event[strClient + strX] && event[strClient + strX] != null ? {x: event[strClient + strX] + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0), y: event[strClient + strY] + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0)} : {x: event[strPage + strX], y: event[strPage + strY]};
				}, mBtn(event) {
					let {button} = event; return event.which || button === undefined ? event.which : 1 & button ? 1 : 2 & button ? 3 : 4 & button ? 2 : 0;
				}, inA(item, arr) {
					for (let i = 0; i < arr[LEXICON.l]; i++) {
						try {
							if (arr[i] === item) {
return i
}
						} catch (e) {}
					}

					return -1;
				}, isA(arr) {
					let def = Array.isArray; return def ? def(arr) : this.type(arr) == TYPES.a;
				}, type(obj) {
					return obj === undefined || obj === null ? String(obj) : Object[LEXICON.p].toString.call(obj).replace(/^\[object (.+)\]$/, '$1').toLowerCase();
				}, bind};
			})(); let MATH = Math; let JQUERY = window.jQuery; let EASING = (_easingsMath = {p: MATH.PI, c: MATH.cos, s: MATH.sin, w: MATH.pow, t: MATH.sqrt, n: MATH.asin, a: MATH.abs, o: 1.70158}, {swing(x, t, b, c, d) {
				return 0.5 - _easingsMath.c(x * _easingsMath.p) / 2;
			}, linear(x, t, b, c, d) {
				return x;
			}, easeInQuad(x, t, b, c, d) {
				return c * (t /= d) * t + b;
			}, easeOutQuad(x, t, b, c, d) {
				return -c * (t /= d) * (t - 2) + b;
			}, easeInOutQuad(x, t, b, c, d) {
				return (t /= d / 2) < 1 ? c / 2 * t * t + b : -c / 2 * (--t * (t - 2) - 1) + b;
			}, easeInCubic(x, t, b, c, d) {
				return c * (t /= d) * t * t + b;
			}, easeOutCubic(x, t, b, c, d) {
				return c * ((t = t / d - 1) * t * t + 1) + b;
			}, easeInOutCubic(x, t, b, c, d) {
				return (t /= d / 2) < 1 ? c / 2 * t * t * t + b : c / 2 * ((t -= 2) * t * t + 2) + b;
			}, easeInQuart(x, t, b, c, d) {
				return c * (t /= d) * t * t * t + b;
			}, easeOutQuart(x, t, b, c, d) {
				return -c * ((t = t / d - 1) * t * t * t - 1) + b;
			}, easeInOutQuart(x, t, b, c, d) {
				return (t /= d / 2) < 1 ? c / 2 * t * t * t * t + b : -c / 2 * ((t -= 2) * t * t * t - 2) + b;
			}, easeInQuint(x, t, b, c, d) {
				return c * (t /= d) * t * t * t * t + b;
			}, easeOutQuint(x, t, b, c, d) {
				return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
			}, easeInOutQuint(x, t, b, c, d) {
				return (t /= d / 2) < 1 ? c / 2 * t * t * t * t * t + b : c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
			}, easeInSine(x, t, b, c, d) {
				return -c * _easingsMath.c(t / d * (_easingsMath.p / 2)) + c + b;
			}, easeOutSine(x, t, b, c, d) {
				return c * _easingsMath.s(t / d * (_easingsMath.p / 2)) + b;
			}, easeInOutSine(x, t, b, c, d) {
				return -c / 2 * (_easingsMath.c(_easingsMath.p * t / d) - 1) + b;
			}, easeInExpo(x, t, b, c, d) {
				return t == 0 ? b : c * _easingsMath.w(2, 10 * (t / d - 1)) + b;
			}, easeOutExpo(x, t, b, c, d) {
				return t == d ? b + c : c * (1 - _easingsMath.w(2, -10 * t / d)) + b;
			}, easeInOutExpo(x, t, b, c, d) {
				return t == 0 ? b : t == d ? b + c : (t /= d / 2) < 1 ? c / 2 * _easingsMath.w(2, 10 * (t - 1)) + b : c / 2 * (2 - _easingsMath.w(2, -10 * --t)) + b;
			}, easeInCirc(x, t, b, c, d) {
				return -c * (_easingsMath.t(1 - (t /= d) * t) - 1) + b;
			}, easeOutCirc(x, t, b, c, d) {
				return c * _easingsMath.t(1 - (t = t / d - 1) * t) + b;
			}, easeInOutCirc(x, t, b, c, d) {
				return (t /= d / 2) < 1 ? -c / 2 * (_easingsMath.t(1 - t * t) - 1) + b : c / 2 * (_easingsMath.t(1 - (t -= 2) * t) + 1) + b;
			}, easeInElastic(x, t, b, c, d) {
				let s = _easingsMath.o; let p = 0; let a = c; return t == 0 ? b : (t /= d) == 1 ? b + c : (p || (p = 0.3 * d), a < _easingsMath.a(c) ? (a = c, s = p / 4) : s = p / (2 * _easingsMath.p) * _easingsMath.n(c / a), -a * _easingsMath.w(2, 10 * (t -= 1)) * _easingsMath.s((t * d - s) * (2 * _easingsMath.p) / p) + b);
			}, easeOutElastic(x, t, b, c, d) {
				let s = _easingsMath.o; let p = 0; let a = c; return t == 0 ? b : (t /= d) == 1 ? b + c : (p || (p = 0.3 * d), a < _easingsMath.a(c) ? (a = c, s = p / 4) : s = p / (2 * _easingsMath.p) * _easingsMath.n(c / a), a * _easingsMath.w(2, -10 * t) * _easingsMath.s((t * d - s) * (2 * _easingsMath.p) / p) + c + b);
			}, easeInOutElastic(x, t, b, c, d) {
				let s = _easingsMath.o; let p = 0; let a = c; return t == 0 ? b : (t /= d / 2) == 2 ? b + c : (p || (p = d * (0.3 * 1.5)), a < _easingsMath.a(c) ? (a = c, s = p / 4) : s = p / (2 * _easingsMath.p) * _easingsMath.n(c / a), t < 1 ? a * _easingsMath.w(2, 10 * (t -= 1)) * _easingsMath.s((t * d - s) * (2 * _easingsMath.p) / p) * -0.5 + b : a * _easingsMath.w(2, -10 * (t -= 1)) * _easingsMath.s((t * d - s) * (2 * _easingsMath.p) / p) * 0.5 + c + b);
			}, easeInBack(x, t, b, c, d, s) {
				return c * (t /= d) * t * (((s = s || _easingsMath.o) + 1) * t - s) + b;
			}, easeOutBack(x, t, b, c, d, s) {
				return c * ((t = t / d - 1) * t * (((s = s || _easingsMath.o) + 1) * t + s) + 1) + b;
			}, easeInOutBack(x, t, b, c, d, s) {
				return s = s || _easingsMath.o, (t /= d / 2) < 1 ? c / 2 * (t * t * ((1 + (s *= 1.525)) * t - s)) + b : c / 2 * ((t -= 2) * t * ((1 + (s *= 1.525)) * t + s) + 2) + b;
			}, easeInBounce(x, t, b, c, d) {
				return c - this.easeOutBounce(x, d - t, 0, c, d) + b;
			}, easeOutBounce(x, t, b, c, d) {
				let o = 7.5625; return (t /= d) < 1 / 2.75 ? c * (o * t * t) + b : t < 2 / 2.75 ? c * (o * (t -= 1.5 / 2.75) * t + 0.75) + b : t < 2.5 / 2.75 ? c * (o * (t -= 2.25 / 2.75) * t + 0.9375) + b : c * (o * (t -= 2.625 / 2.75) * t + 0.984375) + b;
			}, easeInOutBounce(x, t, b, c, d) {
				return t < d / 2 ? 0.5 * this.easeInBounce(x, 2 * t, 0, c, d) + b : 0.5 * this.easeOutBounce(x, 2 * t - d, 0, c, d) + 0.5 * c + b;
			}}); let FRAMEWORK = (function () {
				let _rnothtmlwhite = /[^\x20\t\r\n\f]+/g; let _strSpace = ' '; let _strEmpty = ''; let _strScrollLeft = 'scrollLeft'; let _strScrollTop = 'scrollTop'; let _animations = []; let _type = COMPATIBILITY.type; let _cssNumber = {animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0}; function extend() {
					let src; let copyIsArray; let copy; let name; let options; let clone; let target = arguments[0] || {}; let i = 1; let length = arguments[LEXICON.l]; let deep = !1; for (_type(target) == TYPES.b && (deep = target, target = arguments[1] || {}, i = 2), _type(target) != TYPES.o && !_type(target) == TYPES.f && (target = {}), length === i && (target = FakejQuery, --i); i < length; i++) {
						if ((options = arguments[i]) != null) {
							for (name in options) {
								src = target[name], target !== (copy = options[name]) && (deep && copy && (isPlainObject(copy) || (copyIsArray = COMPATIBILITY.isA(copy))) ? (copyIsArray ? (copyIsArray = !1, clone = src && COMPATIBILITY.isA(src) ? src : []) : clone = src && isPlainObject(src) ? src : {}, target[name] = extend(deep, clone, copy)) : copy !== undefined && (target[name] = copy));
							}
						}
					}

					return target;
				}

				function inArray(item, arr, fromIndex) {
					for (let i = fromIndex || 0; i < arr[LEXICON.l]; i++) {
						if (arr[i] === item) {
							return i;
						}
					}

					return -1;
				}

				function isFunction(obj) {
					return _type(obj) == TYPES.f;
				}

				function isEmptyObject(obj) {
					for (let name in obj) {
						return !1;
					}

					return !0;
				}

				function isPlainObject(obj) {
					if (!obj || _type(obj) != TYPES.o) {
						return !1;
					}

					let key; let proto = LEXICON.p; let {hasOwnProperty} = Object[proto]; let hasOwnConstructor = hasOwnProperty.call(obj, 'constructor'); let hasIsPrototypeOf = obj.constructor && obj.constructor[proto] && hasOwnProperty.call(obj.constructor[proto], 'isPrototypeOf'); if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
						return !1;
					}

					for (key in obj) {

					}

					return _type(key) == TYPES.u || hasOwnProperty.call(obj, key);
				}

				function each(obj, callback) {
					let i = 0; if (isArrayLike(obj)) {
						for (;i < obj[LEXICON.l] && !1 !== callback.call(obj[i], i, obj[i]); i++) {

						}
					} else {
						for (i in obj) {
							if (!1 === callback.call(obj[i], i, obj[i])) {
break;
}
}
					}

					return obj;
				}

				function isArrayLike(obj) {
					let length = Boolean(obj) && [LEXICON.l] in obj && obj[LEXICON.l]; let t = _type(obj); return !isFunction(t) && (t == TYPES.a || length === 0 || _type(length) == TYPES.n && length > 0 && length - 1 in obj);
				}

				function stripAndCollapse(value) {
					return (value.match(_rnothtmlwhite) || []).join(_strSpace);
				}

				function matches(elem, selector) {
					for (let nodeList = (elem.parentNode || document).querySelectorAll(selector) || [], i = nodeList[LEXICON.l]; i--;) {
						if (nodeList[i] == elem) {
							return !0;
						}
					}

					return !1;
				}

				function insertAdjacentElement(el, strategy, child) {
					if (COMPATIBILITY.isA(child)) {
						for (let i = 0; i < child[LEXICON.l]; i++) {
							insertAdjacentElement(el, strategy, child[i]);
						}
					} else {
						_type(child) == TYPES.s ? el.insertAdjacentHTML(strategy, child) : el.insertAdjacentElement(strategy, child.nodeType ? child : child[0]);
					}
				}

				function setCSSVal(el, prop, val) {
					try {
						el[LEXICON.s][prop] !== undefined && (el[LEXICON.s][prop] = parseCSSVal(prop, val));
					} catch (e) {}
				}

				function parseCSSVal(prop, val) {
					return _cssNumber[prop.toLowerCase()] || _type(val) != TYPES.n || (val += 'px'), val;
				}

				function startNextAnimationInQ(animObj, removeFromQ) {
					let index; let nextAnim; !1 !== removeFromQ && animObj.q.splice(0, 1), animObj.q[LEXICON.l] > 0 ? (nextAnim = animObj.q[0], animate(animObj.el, nextAnim.props, nextAnim.duration, nextAnim.easing, nextAnim.complete, !0)) : (index = inArray(animObj, _animations)) > -1 && _animations.splice(index, 1);
				}

				function setAnimationValue(el, prop, value) {
					prop === _strScrollLeft || prop === _strScrollTop ? el[prop] = value : setCSSVal(el, prop, value);
				}

				function animate(el, props, options, easing, complete, guaranteedNext) {
					let key; let animObj; let progress; let step; let specialEasing; let duration; let hasOptions = isPlainObject(options); let from = {}; let to = {}; let i = 0; for (hasOptions ? (easing = options.easing, options.start, progress = options.progress, step = options.step, specialEasing = options.specialEasing, complete = options.complete, duration = options.duration) : duration = options, specialEasing = specialEasing || {}, duration = duration || 400, easing = easing || 'swing', guaranteedNext = guaranteedNext || !1; i < _animations[LEXICON.l]; i++) {
						if (_animations[i].el === el) {
							animObj = _animations[i]; break;
						}
					}

					for (key in animObj || (animObj = {el, q: []}, _animations.push(animObj)), props) {
						from[key] = key === _strScrollLeft || key === _strScrollTop ? el[key] : FakejQuery(el).css(key);
					}

					for (key in from) {
						from[key] !== props[key] && props[key] !== undefined && (to[key] = props[key]);
					}

					if (isEmptyObject(to)) {
						guaranteedNext && startNextAnimationInQ(animObj);
					} else {
						let timeNow; let end; let percent; let fromVal; let toVal; let easedVal; let timeStart; let frame; let elapsed; let qPos = guaranteedNext ? 0 : inArray(qObj, animObj.q); var qObj = {props: to, duration: hasOptions ? options : duration, easing, complete}; if (qPos === -1 && (qPos = animObj.q[LEXICON.l], animObj.q.push(qObj)), qPos === 0) {
							if (duration > 0) {
								timeStart = COMPATIBILITY.now(), frame = function () {
									for (key in timeNow = COMPATIBILITY.now(), elapsed = timeNow - timeStart, end = qObj.stop || elapsed >= duration, percent = 1 - (MATH.max(0, timeStart + duration - timeNow) / duration || 0), to) {
										fromVal = parseFloat(from[key]), toVal = parseFloat(to[key]), easedVal = (toVal - fromVal) * EASING[specialEasing[key] || easing](percent, percent * duration, 0, 1, duration) + fromVal, setAnimationValue(el, key, easedVal), isFunction(step) && step(easedVal, {elem: el, prop: key, start: fromVal, now: easedVal, end: toVal, pos: percent, options: {easing, speacialEasing: specialEasing, duration, complete, step}, startTime: timeStart});
									}

isFunction(progress) && progress({}, percent, MATH.max(0, duration - elapsed)), end ? (startNextAnimationInQ(animObj), isFunction(complete) && complete()) : qObj.frame = COMPATIBILITY.rAF()(frame);
								}, qObj.frame = COMPATIBILITY.rAF()(frame);
							} else {
								for (key in to) {
									setAnimationValue(el, key, to[key]);
								}

								startNextAnimationInQ(animObj);
							}
						}
					}
				}

				function stop(el, clearQ, jumpToEnd) {
					for (var animObj, qObj, key, i = 0; i < _animations[LEXICON.l]; i++) {
						if ((animObj = _animations[i]).el === el) {
							if (animObj.q[LEXICON.l] > 0) {
								if ((qObj = animObj.q[0]).stop = !0, COMPATIBILITY.cAF()(qObj.frame), animObj.q.splice(0, 1), jumpToEnd) {
									for (key in qObj.props) {
										setAnimationValue(el, key, qObj.props[key]);
									}
								}

clearQ ? animObj.q = [] : startNextAnimationInQ(animObj, !1);
							}

							break;
						}
					}
				}

				function elementIsVisible(el) {
					return Boolean(el[LEXICON.oW] || el[LEXICON.oH] || el.getClientRects()[LEXICON.l]);
				}

				function FakejQuery(selector) {
					if (arguments[LEXICON.l] === 0) {
						return this;
					}

					let elms; let el; let base = new FakejQuery(); let elements = selector; let i = 0; if (_type(selector) == TYPES.s) {
						for (elements = [], selector.charAt(0) === '<' ? ((el = document.createElement('div')).innerHTML = selector, elms = el.children) : elms = document.querySelectorAll(selector); i < elms[LEXICON.l]; i++) {
							elements.push(elms[i]);
						}
					}

					if (elements) {
						for (_type(elements) == TYPES.s || isArrayLike(elements) && elements !== window && elements !== elements.self || (elements = [elements]), i = 0; i < elements[LEXICON.l]; i++) {
							base[i] = elements[i];
						}

						base[LEXICON.l] = elements[LEXICON.l];
					}

					return base;
				}

				return FakejQuery[LEXICON.p] = {on(eventName, handler) {
					let el; let eventNameLength = (eventName = (eventName || _strEmpty).match(_rnothtmlwhite) || [_strEmpty])[LEXICON.l]; let i = 0; return this.each((function () {
						el = this; try {
							if (el.addEventListener) {
								for (;i < eventNameLength; i++) {
									el.addEventListener(eventName[i], handler);
								}
							} else if (el.detachEvent) {
								for (;i < eventNameLength; i++) {
									el.attachEvent('on' + eventName[i], handler);
								}
							}
						} catch (e) {}
					}));
				}, off(eventName, handler) {
					let el; let eventNameLength = (eventName = (eventName || _strEmpty).match(_rnothtmlwhite) || [_strEmpty])[LEXICON.l]; let i = 0; return this.each((function () {
						el = this; try {
							if (el.removeEventListener) {
								for (;i < eventNameLength; i++) {
									el.removeEventListener(eventName[i], handler);
								}
							} else if (el.detachEvent) {
								for (;i < eventNameLength; i++) {
									el.detachEvent('on' + eventName[i], handler);
								}
							}
						} catch (e) {}
					}));
				}, one(eventName, handler) {
					return eventName = (eventName || _strEmpty).match(_rnothtmlwhite) || [_strEmpty], this.each((function () {
						let el = FakejQuery(this); FakejQuery.each(eventName, ((i, oneEventName) => {
							var oneHandler = function (e) {
								handler.call(this, e), el.off(oneEventName, oneHandler);
							};

							el.on(oneEventName, oneHandler);
						}));
					}));
				}, trigger(eventName) {
					let el; let event; return this.each((function () {
						el = this, document.createEvent ? ((event = document.createEvent('HTMLEvents')).initEvent(eventName, !0, !1), el.dispatchEvent(event)) : el.fireEvent('on' + eventName);
					}));
				}, append(child) {
					return this.each((function () {
						insertAdjacentElement(this, 'beforeend', child);
					}));
				}, prepend(child) {
					return this.each((function () {
						insertAdjacentElement(this, 'afterbegin', child);
					}));
				}, before(child) {
					return this.each((function () {
						insertAdjacentElement(this, 'beforebegin', child);
					}));
				}, after(child) {
					return this.each((function () {
						insertAdjacentElement(this, 'afterend', child);
					}));
				}, remove() {
					return this.each((function () {
						let el = this; let {parentNode} = el; parentNode != null && parentNode.removeChild(el);
					}));
				}, unwrap() {
					let i; let el; let parent; let parents = []; for (this.each((function () {
						inArray(parent = this.parentNode, parents) === -1 && parents.push(parent);
					})), i = 0; i < parents[LEXICON.l]; i++) {
						for (el = parents[i], parent = el.parentNode; el.firstChild;) {
							parent.insertBefore(el.firstChild, el);
						}

						parent.removeChild(el);
					}

					return this;
				}, wrapAll(wrapperHTML) {
					for (var i, nodes = this, wrapper = FakejQuery(wrapperHTML)[0], deepest = wrapper, parent = nodes[0].parentNode, {previousSibling} = nodes[0]; deepest.childNodes[LEXICON.l] > 0;) {
						deepest = deepest.childNodes[0];
					}

					for (i = 0; nodes[LEXICON.l] - i; deepest.firstChild === nodes[0] && i++) {
						deepest.appendChild(nodes[i]);
					}

					let nextSibling = previousSibling ? previousSibling.nextSibling : parent.firstChild; return parent.insertBefore(wrapper, nextSibling), this;
				}, wrapInner(wrapperHTML) {
					return this.each((function () {
						let el = FakejQuery(this); let contents = el.contents(); contents[LEXICON.l] ? contents.wrapAll(wrapperHTML) : el.append(wrapperHTML);
					}));
				}, wrap(wrapperHTML) {
					return this.each((function () {
						FakejQuery(this).wrapAll(wrapperHTML);
					}));
				}, css(styles, val) {
					let el; let key; let cptStyle; let getCptStyle = window.getComputedStyle; return _type(styles) == TYPES.s ? val === undefined ? (el = this[0], cptStyle = getCptStyle ? getCptStyle(el, null) : el.currentStyle[styles], getCptStyle ? cptStyle != null ? cptStyle.getPropertyValue(styles) : el[LEXICON.s][styles] : cptStyle) : this.each((function () {
						setCSSVal(this, styles, val);
					})) : this.each((function () {
						for (key in styles) {
							setCSSVal(this, key, styles[key]);
						}
					}));
				}, hasClass(className) {
					for (var elem, classList, i = 0, classNamePrepared = _strSpace + className + _strSpace; elem = this[i++];) {
						if ((classList = elem.classList) && classList.contains(className)) {
							return !0;
						}

 if (elem.nodeType === 1 && (_strSpace + stripAndCollapse(elem.className + _strEmpty) + _strSpace).indexOf(classNamePrepared) > -1) {
							return !0;
						}
					}

					return !1;
				}, addClass(className) {
					let classes; let elem; let cur; let curValue; let clazz; let finalValue; let supportClassList; let elmClassList; let i = 0; let v = 0; if (className) {
						for (classes = className.match(_rnothtmlwhite) || []; elem = this[i++];) {
if (elmClassList = elem.classList, supportClassList === undefined && (supportClassList = elmClassList !== undefined), supportClassList) {for (;clazz = classes[v++];){elmClassList.add(clazz);}}else if (curValue = elem.className + _strEmpty, cur = elem.nodeType === 1 && _strSpace + stripAndCollapse(curValue) + _strSpace) {
							for (;clazz = classes[v++];) {
cur.indexOf(_strSpace + clazz + _strSpace) < 0 && (cur += clazz + _strSpace);
}curValue !== (finalValue = stripAndCollapse(cur)) && (elem.className = finalValue);
						}
}
}

					return this;
				}, removeClass(className) {
					let classes; let elem; let cur; let curValue; let clazz; let finalValue; let supportClassList; let elmClassList; let i = 0; let v = 0; if (className) {
						for (classes = className.match(_rnothtmlwhite) || []; elem = this[i++];) {
if (elmClassList = elem.classList, supportClassList === undefined && (supportClassList = elmClassList !== undefined), supportClassList) {for (;clazz = classes[v++];){elmClassList.remove(clazz);}}else if (curValue = elem.className + _strEmpty, cur = elem.nodeType === 1 && _strSpace + stripAndCollapse(curValue) + _strSpace) {
							for (;clazz = classes[v++];) {for (;cur.indexOf(_strSpace + clazz + _strSpace) > -1;){cur=cur.replace(_strSpace+clazz+_strSpace,_strSpace);}}curValue !== (finalValue = stripAndCollapse(cur)) && (elem.className = finalValue);
						}
}
}

					return this;
				}, hide() {
					return this.each((function () {
						this[LEXICON.s].display = 'none';
					}));
				}, show() {
					return this.each((function () {
						this[LEXICON.s].display = 'block';
					}));
				}, attr(attrName, value) {
					for (var el, i = 0; el = this[i++];) {
						if (value === undefined) {
							return el.getAttribute(attrName);
						}

 el.setAttribute(attrName, value);
					}

					return this;
				}, removeAttr(attrName) {
					return this.each((function () {
						this.removeAttribute(attrName);
					}));
				}, offset() {
					let rect = this[0][LEXICON.bCR](); let scrollLeft = window.pageXOffset || document.documentElement[_strScrollLeft]; let scrollTop = window.pageYOffset || document.documentElement[_strScrollTop]; return {top: rect.top + scrollTop, left: rect.left + scrollLeft};
				}, position() {
					let el = this[0]; return {top: el.offsetTop, left: el.offsetLeft};
				}, scrollLeft(value) {
					for (var el, i = 0; el = this[i++];) {
						if (value === undefined) {
							return el[_strScrollLeft];
						}

 el[_strScrollLeft] = value;
					}

					return this;
				}, scrollTop(value) {
					for (var el, i = 0; el = this[i++];) {
						if (value === undefined) {
							return el[_strScrollTop];
						}

 el[_strScrollTop] = value;
					}

					return this;
				}, val(value) {
					let el = this[0]; return value ? (el.value = value, this) : el.value;
				}, first() {
					return this.eq(0);
				}, last() {
					return this.eq(-1);
				}, eq(index) {
					return FakejQuery(this[index >= 0 ? index : this[LEXICON.l] + index]);
				}, find(selector) {
					let i; let children = []; return this.each((function () {
						let ch = this.querySelectorAll(selector); for (i = 0; i < ch[LEXICON.l]; i++) {
							children.push(ch[i]);
						}
					})), FakejQuery(children);
				}, children(selector) {
					let el; let ch; let i; let children = []; return this.each((function () {
						for (ch = this.children, i = 0; i < ch[LEXICON.l]; i++) {
							el = ch[i], selector ? (el.matches && el.matches(selector) || matches(el, selector)) && children.push(el) : children.push(el);
						}
					})), FakejQuery(children);
				}, parent(selector) {
					let parent; let parents = []; return this.each((function () {
						parent = this.parentNode, selector && !FakejQuery(parent).is(selector) || parents.push(parent);
					})), FakejQuery(parents);
				}, is(selector) {
					let el; let i; for (i = 0; i < this[LEXICON.l]; i++) {
						if (el = this[i], selector === ':visible') {
							return elementIsVisible(el);
						}

 if (selector === ':hidden') {
							return !elementIsVisible(el);
						}

 if (el.matches && el.matches(selector) || matches(el, selector)) {
							return !0;
						}
					}

					return !1;
				}, contents() {
					let childs; let i; let contents = []; return this.each((function () {
						for (childs = this.childNodes, i = 0; i < childs[LEXICON.l]; i++) {
							contents.push(childs[i]);
						}
					})), FakejQuery(contents);
				}, each(callback) {
					return each(this, callback);
				}, animate(props, duration, easing, complete) {
					return this.each((function () {
						animate(this, props, duration, easing, complete);
					}));
				}, stop(clearQ, jump) {
					return this.each((function () {
						stop(this, clearQ, jump);
					}));
				}}, extend(FakejQuery, {extend, inArray, isEmptyObject, isPlainObject, each}), FakejQuery;
			})(); let INSTANCES = (_targets = [], _instancePropertyString = '__overlayScrollbars__', function (target, instance) {
				let argLen = arguments[LEXICON.l]; if (argLen < 1) {
					return _targets;
				}

				if (instance) {
					target[_instancePropertyString] = instance, _targets.push(target);
				} else {
					let index = COMPATIBILITY.inA(target, _targets); if (index > -1) {
						if (!(argLen > 1)) {
							return _targets[index][_instancePropertyString];
						}

						delete target[_instancePropertyString], _targets.splice(index, 1);
					}
				}
			}); let PLUGIN = (function () {
				let _plugin; let _pluginsGlobals; let _pluginsAutoUpdateLoop; let type; let possibleTemplateTypes; let restrictedStringsSplit; let restrictedStringsPossibilitiesSplit; let classNameAllowedValues; let numberAllowedValues; let booleanNullAllowedValues; let booleanTrueTemplate; let booleanFalseTemplate; let callbackTemplate; let overflowBehaviorAllowedValues; let optionsDefaultsAndTemplate; let convert; let _pluginsExtensions = []; let _pluginsOptions = (type = COMPATIBILITY.type, possibleTemplateTypes = [TYPES.b, TYPES.n, TYPES.s, TYPES.a, TYPES.o, TYPES.f, TYPES.z], restrictedStringsSplit = ' ', restrictedStringsPossibilitiesSplit = ':', classNameAllowedValues = [TYPES.z, TYPES.s], numberAllowedValues = TYPES.n, booleanNullAllowedValues = [TYPES.z, TYPES.b], booleanTrueTemplate = [!0, TYPES.b], booleanFalseTemplate = [!1, TYPES.b], callbackTemplate = [null, [TYPES.z, TYPES.f]], overflowBehaviorAllowedValues = 'v-h:visible-hidden v-s:visible-scroll s:scroll h:hidden', optionsDefaultsAndTemplate = {className: ['os-theme-dark', classNameAllowedValues], resize: ['none', 'n:none b:both h:horizontal v:vertical'], sizeAutoCapable: booleanTrueTemplate, clipAlways: booleanTrueTemplate, normalizeRTL: booleanTrueTemplate, paddingAbsolute: booleanFalseTemplate, autoUpdate: [null, booleanNullAllowedValues], autoUpdateInterval: [33, numberAllowedValues], updateOnLoad: [['img'], [TYPES.s, TYPES.a, TYPES.z]], nativeScrollbarsOverlaid: {showNativeScrollbars: booleanFalseTemplate, initialize: booleanTrueTemplate}, overflowBehavior: {x: ['scroll', overflowBehaviorAllowedValues], y: ['scroll', overflowBehaviorAllowedValues]}, scrollbars: {visibility: ['auto', 'v:visible h:hidden a:auto'], autoHide: ['never', 'n:never s:scroll l:leave m:move'], autoHideDelay: [800, numberAllowedValues], dragScrolling: booleanTrueTemplate, clickScrolling: booleanFalseTemplate, touchSupport: booleanTrueTemplate, snapHandle: booleanFalseTemplate}, textarea: {dynWidth: booleanFalseTemplate, dynHeight: booleanFalseTemplate, inheritedAttrs: [['style', 'class'], [TYPES.s, TYPES.a, TYPES.z]]}, callbacks: {onInitialized: callbackTemplate, onInitializationWithdrawn: callbackTemplate, onDestroyed: callbackTemplate, onScrollStart: callbackTemplate, onScroll: callbackTemplate, onScrollStop: callbackTemplate, onOverflowChanged: callbackTemplate, onOverflowAmountChanged: callbackTemplate, onDirectionChanged: callbackTemplate, onContentSizeChanged: callbackTemplate, onHostSizeChanged: callbackTemplate, onUpdated: callbackTemplate}}, {_defaults: (convert = function (template) {
					var recursive = function (obj) {
						let key; let val; let valType; for (key in obj) {
							obj[LEXICON.hOP](key) && (val = obj[key], (valType = type(val)) == TYPES.a ? obj[key] = val[template ? 1 : 0] : valType == TYPES.o && (obj[key] = recursive(val)));
						}

						return obj;
					};

					return recursive(FRAMEWORK.extend(!0, {}, optionsDefaultsAndTemplate));
				})(), _template: convert(!0), _validate(obj, template, writeErrors, diffObj) {
					let validatedOptions = {}; let validatedOptionsPrepared = {}; let objectCopy = FRAMEWORK.extend(!0, {}, obj); let {inArray} = FRAMEWORK; let isEmptyObj = FRAMEWORK.isEmptyObject; var checkObjectProps = function (data, template, diffData, validatedOptions, validatedOptionsPrepared, prevPropName) {
						for (var prop in template) {
							if (template[LEXICON.hOP](prop) && data[LEXICON.hOP](prop)) {
								var restrictedStringValuesSplit; var restrictedStringValuesPossibilitiesSplit; var isRestrictedValue; var mainPossibility; var currType; var i; var v; var j; let isValid = !1; let isDiff = !1; let templateValue = template[prop]; let templateValueType = type(templateValue); let templateIsComplex = templateValueType == TYPES.o; let templateTypes = COMPATIBILITY.isA(templateValue) ? templateValue : [templateValue]; let dataDiffValue = diffData[prop]; let dataValue = data[prop]; let dataValueType = type(dataValue); let propPrefix = prevPropName ? prevPropName + '.' : ''; let error = 'The option "' + propPrefix + prop + '" wasn\'t set, because'; let errorPossibleTypes = []; let errorRestrictedStrings = []; if (dataDiffValue = dataDiffValue === undefined ? {} : dataDiffValue, templateIsComplex && dataValueType == TYPES.o) {
									validatedOptions[prop] = {}, validatedOptionsPrepared[prop] = {}, checkObjectProps(dataValue, templateValue, dataDiffValue, validatedOptions[prop], validatedOptionsPrepared[prop], propPrefix + prop), FRAMEWORK.each([data, validatedOptions, validatedOptionsPrepared], ((index, value) => {
										isEmptyObj(value[prop]) && delete value[prop];
									}));
								} else if (!templateIsComplex) {
									for (i = 0; i < templateTypes[LEXICON.l]; i++) {
										if (currType = templateTypes[i], isRestrictedValue = (templateValueType = type(currType)) == TYPES.s && inArray(currType, possibleTemplateTypes) === -1) {
for (errorPossibleTypes.push(TYPES.s), restrictedStringValuesSplit = currType.split(restrictedStringsSplit), errorRestrictedStrings = errorRestrictedStrings.concat(restrictedStringValuesSplit), v = 0; v < restrictedStringValuesSplit[LEXICON.l]; v++) {
											for (mainPossibility = (restrictedStringValuesPossibilitiesSplit = restrictedStringValuesSplit[v].split(restrictedStringsPossibilitiesSplit))[0], j = 0; j < restrictedStringValuesPossibilitiesSplit[LEXICON.l]; j++) {if (dataValue === restrictedStringValuesPossibilitiesSplit[j]) {
isValid = !0; break
}} if (isValid) {break}
										}
} else if (errorPossibleTypes.push(currType), dataValueType === currType) {
											isValid = !0; break;
										}
									}

									isValid ? ((isDiff = dataValue !== dataDiffValue) && (validatedOptions[prop] = dataValue), (isRestrictedValue ? inArray(dataDiffValue, restrictedStringValuesPossibilitiesSplit) < 0 : isDiff) && (validatedOptionsPrepared[prop] = isRestrictedValue ? mainPossibility : dataValue)) : writeErrors && console.warn(error + ' it doesn\'t accept the type [ ' + dataValueType.toUpperCase() + ' ] with the value of "' + dataValue + '".\r\nAccepted types are: [ ' + errorPossibleTypes.join(', ').toUpperCase() + ' ].' + (errorRestrictedStrings[length] > 0 ? '\r\nValid strings are: [ ' + errorRestrictedStrings.join(', ').split(restrictedStringsPossibilitiesSplit).join(', ') + ' ].' : '')), delete data[prop];
								}
							}
						}
					};

					return checkObjectProps(objectCopy, template, diffObj || {}, validatedOptions, validatedOptionsPrepared), !isEmptyObj(objectCopy) && writeErrors && console.warn('The following options are discarded due to invalidity:\r\n' + window.JSON.stringify(objectCopy, null, 2)), {_default: validatedOptions, _prepared: validatedOptionsPrepared};
				}}); function initOverlayScrollbarsStatics() {
					_pluginsGlobals || (_pluginsGlobals = new OverlayScrollbarsGlobals(_pluginsOptions._defaults)), _pluginsAutoUpdateLoop || (_pluginsAutoUpdateLoop = new OverlayScrollbarsAutoUpdateLoop(_pluginsGlobals));
				}

				function OverlayScrollbarsGlobals(defaultOptions) {
					let _base = this; let strOverflow = 'overflow'; let strHidden = 'hidden'; let strScroll = 'scroll'; let bodyElement = FRAMEWORK('body'); let scrollbarDummyElement = FRAMEWORK('<div id="os-dummy-scrollbar-size"><div></div></div>'); let scrollbarDummyElement0 = scrollbarDummyElement[0]; let dummyContainerChild = FRAMEWORK(scrollbarDummyElement.children('div').eq(0)); bodyElement.append(scrollbarDummyElement), scrollbarDummyElement.hide().show(); let nativeScrollbarSize = calcNativeScrollbarSize(scrollbarDummyElement0); let nativeScrollbarIsOverlaid = {x: nativeScrollbarSize.x === 0, y: nativeScrollbarSize.y === 0}; let msie = (function () {
						let result; let ua = window.navigator.userAgent; let strIndexOf = 'indexOf'; let strSubString = 'substring'; let msie = ua[strIndexOf]('MSIE '); let trident = ua[strIndexOf]('Trident/'); let edge = ua[strIndexOf]('Edge/'); let rv = ua[strIndexOf]('rv:'); let parseIntFunc = parseInt; return msie > 0 ? result = parseIntFunc(ua[strSubString](msie + 5, ua[strIndexOf]('.', msie)), 10) : trident > 0 ? result = parseIntFunc(ua[strSubString](rv + 3, ua[strIndexOf]('.', rv)), 10) : edge > 0 && (result = parseIntFunc(ua[strSubString](edge + 5, ua[strIndexOf]('.', edge)), 10)), result;
					})(); function calcNativeScrollbarSize(measureElement) {
						return {x: measureElement[LEXICON.oH] - measureElement[LEXICON.cH], y: measureElement[LEXICON.oW] - measureElement[LEXICON.cW]};
					}

					FRAMEWORK.extend(_base, {defaultOptions, msie, autoUpdateLoop: !1, autoUpdateRecommended: !COMPATIBILITY.mO(), nativeScrollbarSize, nativeScrollbarIsOverlaid, nativeScrollbarStyling: (function () {
						let result = !1; scrollbarDummyElement.addClass('os-viewport-native-scrollbars-invisible'); try {
							result = scrollbarDummyElement.css('scrollbar-width') === 'none' && (msie > 9 || !msie) || window.getComputedStyle(scrollbarDummyElement0, '::-webkit-scrollbar').getPropertyValue('display') === 'none';
						} catch (ex) {}

						return result;
					})(), overlayScrollbarDummySize: {x: 30, y: 30}, cssCalc: VENDORS._cssPropertyValue('width', 'calc', '(1px)') || null, restrictedMeasuring: (function () {
						scrollbarDummyElement.css(strOverflow, strHidden); let scrollSize = {w: scrollbarDummyElement0[LEXICON.sW], h: scrollbarDummyElement0[LEXICON.sH]}; scrollbarDummyElement.css(strOverflow, 'visible'); let scrollSize2 = {w: scrollbarDummyElement0[LEXICON.sW], h: scrollbarDummyElement0[LEXICON.sH]}; return scrollSize.w - scrollSize2.w != 0 || scrollSize.h - scrollSize2.h != 0;
					})(), rtlScrollBehavior: (function () {
						scrollbarDummyElement.css({'overflow-y': strHidden, 'overflow-x': strScroll, direction: 'rtl'}).scrollLeft(0); let dummyContainerOffset = scrollbarDummyElement.offset(); let dummyContainerChildOffset = dummyContainerChild.offset(); scrollbarDummyElement.scrollLeft(-999); let dummyContainerChildOffsetAfterScroll = dummyContainerChild.offset(); return {i: dummyContainerOffset.left === dummyContainerChildOffset.left, n: dummyContainerChildOffset.left !== dummyContainerChildOffsetAfterScroll.left};
					})(), supportTransform: Boolean(VENDORS._cssProperty('transform')), supportTransition: Boolean(VENDORS._cssProperty('transition')), supportPassiveEvents: (function () {
						let supportsPassive = !1; try {
							window.addEventListener('test', null, Object.defineProperty({}, 'passive', {get() {
								supportsPassive = !0;
							}}));
						} catch (e) {}

						return supportsPassive;
					})(), supportResizeObserver: Boolean(COMPATIBILITY.rO()), supportMutationObserver: Boolean(COMPATIBILITY.mO())}), scrollbarDummyElement.removeAttr(LEXICON.s).remove(), (function () {
						if (!nativeScrollbarIsOverlaid.x || !nativeScrollbarIsOverlaid.y) {
							var {abs} = MATH; let windowWidth = COMPATIBILITY.wW(); let windowHeight = COMPATIBILITY.wH(); let windowDpr = getWindowDPR(); let
								onResize = function () {
									if (INSTANCES().length > 0) {
										let newW = COMPATIBILITY.wW(); let newH = COMPATIBILITY.wH(); let deltaW = newW - windowWidth; let deltaH = newH - windowHeight; if (deltaW === 0 && deltaH === 0) {
											return;
										}

										let newScrollbarSize; let deltaWRatio = MATH.round(newW / (windowWidth / 100)); let deltaHRatio = MATH.round(newH / (windowHeight / 100)); let absDeltaW = abs(deltaW); let absDeltaH = abs(deltaH); let absDeltaWRatio = abs(deltaWRatio); let absDeltaHRatio = abs(deltaHRatio); let newDPR = getWindowDPR(); let deltaIsBigger = absDeltaW > 2 && absDeltaH > 2; let difference = !differenceIsBiggerThanOne(absDeltaWRatio, absDeltaHRatio); let isZoom = deltaIsBigger && difference && newDPR !== windowDpr && windowDpr > 0; let oldScrollbarSize = _base.nativeScrollbarSize; isZoom && (bodyElement.append(scrollbarDummyElement), newScrollbarSize = _base.nativeScrollbarSize = calcNativeScrollbarSize(scrollbarDummyElement[0]), scrollbarDummyElement.remove(), oldScrollbarSize.x === newScrollbarSize.x && oldScrollbarSize.y === newScrollbarSize.y || FRAMEWORK.each(INSTANCES(), (function () {
											INSTANCES(this) && INSTANCES(this).update('zoom');
										}))), windowWidth = newW, windowHeight = newH, windowDpr = newDPR;
									}
								};

							FRAMEWORK(window).on('resize', onResize);
						}

						function differenceIsBiggerThanOne(valOne, valTwo) {
							let absValOne = abs(valOne); let absValTwo = abs(valTwo); return !(absValOne === absValTwo || absValOne + 1 === absValTwo || absValOne - 1 === absValTwo);
						}

						function getWindowDPR() {
							let dDPI = window.screen.deviceXDPI || 0; let sDPI = window.screen.logicalXDPI || 1; return window.devicePixelRatio || dDPI / sDPI;
						}
					})();
				}

				function OverlayScrollbarsAutoUpdateLoop(globals) {
					let _loopID; let _base = this; let _inArray = FRAMEWORK.inArray; let _getNow = COMPATIBILITY.now; let _strAutoUpdate = 'autoUpdate'; let _strAutoUpdateInterval = _strAutoUpdate + 'Interval'; let _strLength = LEXICON.l; let _loopingInstances = []; let _loopingInstancesIntervalCache = []; let _loopIsActive = !1; let _loopIntervalDefault = 33; let _loopInterval = _loopIntervalDefault; let _loopTimeOld = _getNow(); var loop = function () {
						if (_loopingInstances[_strLength] > 0 && _loopIsActive) {
							_loopID = COMPATIBILITY.rAF()((() => {
								loop();
							})); let lowestInterval; let instance; let instanceOptions; let instanceAutoUpdateAllowed; let instanceAutoUpdateInterval; let now; let timeNew = _getNow(); let timeDelta = timeNew - _loopTimeOld; if (timeDelta > _loopInterval) {
								_loopTimeOld = timeNew - timeDelta % _loopInterval, lowestInterval = _loopIntervalDefault; for (let i = 0; i < _loopingInstances[_strLength]; i++) {
									(instance = _loopingInstances[i]) !== undefined && (instanceAutoUpdateAllowed = (instanceOptions = instance.options())[_strAutoUpdate], instanceAutoUpdateInterval = MATH.max(1, instanceOptions[_strAutoUpdateInterval]), now = _getNow(), (!0 === instanceAutoUpdateAllowed || instanceAutoUpdateAllowed === null) && now - _loopingInstancesIntervalCache[i] > instanceAutoUpdateInterval && (instance.update('auto'), _loopingInstancesIntervalCache[i] = new Date(now += instanceAutoUpdateInterval)), lowestInterval = MATH.max(1, MATH.min(lowestInterval, instanceAutoUpdateInterval)));
								}

								_loopInterval = lowestInterval;
							}
						} else {
							_loopInterval = _loopIntervalDefault;
						}
					};

					_base.add = function (instance) {
						_inArray(instance, _loopingInstances) === -1 && (_loopingInstances.push(instance), _loopingInstancesIntervalCache.push(_getNow()), _loopingInstances[_strLength] > 0 && !_loopIsActive && (_loopIsActive = !0, globals.autoUpdateLoop = _loopIsActive, loop()));
					}, _base.remove = function (instance) {
						let index = _inArray(instance, _loopingInstances); index > -1 && (_loopingInstancesIntervalCache.splice(index, 1), _loopingInstances.splice(index, 1), _loopingInstances[_strLength] === 0 && _loopIsActive && (_loopIsActive = !1, globals.autoUpdateLoop = _loopIsActive, _loopID !== undefined && (COMPATIBILITY.cAF()(_loopID), _loopID = -1)));
					};
				}

				function OverlayScrollbarsInstance(pluginTargetElement, options, extensions, globals, autoUpdateLoop) {
					let {type} = COMPATIBILITY; let {inArray} = FRAMEWORK; let {each} = FRAMEWORK; let _base = new _plugin(); let
						_frameworkProto = FRAMEWORK[LEXICON.p]; if (isHTMLElement(pluginTargetElement)) {
						if (INSTANCES(pluginTargetElement)) {
							let inst = INSTANCES(pluginTargetElement); return inst.options(options), inst;
						}

						var _nativeScrollbarIsOverlaid; var _overlayScrollbarDummySize; var _rtlScrollBehavior; var _autoUpdateRecommended; var _msieVersion; var _nativeScrollbarStyling; var _cssCalc; var _nativeScrollbarSize; var _supportTransition; var _supportTransform; var _supportPassiveEvents; var _supportResizeObserver; var _supportMutationObserver; var _initialized; var _destroyed; var _isTextarea; var _isBody; var _documentMixed; var _domExists; var _isBorderBox; var _sizeAutoObserverAdded; var _paddingX; var _paddingY; var _borderX; var _borderY; var _marginX; var _marginY; var _isRTL; var _sleeping; var _defaultOptions; var _currentOptions; var _currentPreparedOptions; var _lastUpdateTime; var _swallowedUpdateTimeout; var _windowElement; var _documentElement; var _htmlElement; var _bodyElement; var _targetElement; var _hostElement; var _sizeAutoObserverElement; var _sizeObserverElement; var _paddingElement; var _viewportElement; var _contentElement; var _contentArrangeElement; var _contentGlueElement; var _textareaCoverElement; var _scrollbarCornerElement; var _scrollbarHorizontalElement; var _scrollbarHorizontalTrackElement; var _scrollbarHorizontalHandleElement; var _scrollbarVerticalElement; var _scrollbarVerticalTrackElement; var _scrollbarVerticalHandleElement; var _windowElementNative; var _documentElementNative; var _targetElementNative; var _hostElementNative; var _sizeAutoObserverElementNative; var _sizeObserverElementNative; var _paddingElementNative; var _viewportElementNative; var _contentElementNative; var _hostSizeCache; var _contentScrollSizeCache; var _arrangeContentSizeCache; var _hasOverflowCache; var _hideOverflowCache; var _widthAutoCache; var _heightAutoCache; var _cssBoxSizingCache; var _cssPaddingCache; var _cssBorderCache; var _cssMarginCache; var _cssDirectionCache; var _cssDirectionDetectedCache; var _paddingAbsoluteCache; var _clipAlwaysCache; var _contentGlueSizeCache; var _overflowBehaviorCache; var _overflowAmountCache; var _ignoreOverlayScrollbarHidingCache; var _autoUpdateCache; var _sizeAutoCapableCache; var _contentElementScrollSizeChangeDetectedCache; var _hostElementSizeChangeDetectedCache; var _scrollbarsVisibilityCache; var _scrollbarsAutoHideCache; var _scrollbarsClickScrollingCache; var _scrollbarsDragScrollingCache; var _resizeCache; var _normalizeRTLCache; var _classNameCache; var _oldClassName; var _textareaAutoWrappingCache; var _textareaInfoCache; var _textareaSizeCache; var _textareaDynHeightCache; var _textareaDynWidthCache; var _bodyMinSizeCache; var _mutationObserverHost; var _mutationObserverContent; var _mutationObserverHostCallback; var _mutationObserverContentCallback; var _mutationObserversConnected; var _textareaHasFocus; var _scrollbarsAutoHideTimeoutId; var _scrollbarsAutoHideMoveTimeoutId; var _scrollbarsAutoHideDelay; var _scrollbarsAutoHideNever; var _scrollbarsAutoHideScroll; var _scrollbarsAutoHideMove; var _scrollbarsAutoHideLeave; var _scrollbarsHandleHovered; var _scrollbarsHandlesDefineScrollPos; var _resizeNone; var _resizeBoth; var _resizeHorizontal; var _resizeVertical; var _contentBorderSize = {}; var _scrollHorizontalInfo = {}; var _scrollVerticalInfo = {}; var _viewportSize = {}; var _nativeScrollbarMinSize = {}; let _strMinusHidden = '-hidden'; var _strMarginMinus = 'margin-'; var _strPaddingMinus = 'padding-'; var _strBorderMinus = 'border-'; var _strTop = 'top'; var _strRight = 'right'; var _strBottom = 'bottom'; var _strLeft = 'left'; var _strMinMinus = 'min-'; var _strMaxMinus = 'max-'; var _strWidth = 'width'; var _strHeight = 'height'; var _strFloat = 'float'; var _strEmpty = ''; var _strAuto = 'auto'; let _strSync = 'sync'; var _strScroll = 'scroll'; var _strHundredPercent = '100%'; var _strX = 'x'; var _strY = 'y'; var _strDot = '.'; var _strSpace = ' '; let _strScrollbar = 'scrollbar'; let _strMinusHorizontal = '-horizontal'; let _strMinusVertical = '-vertical'; var _strScrollLeft = _strScroll + 'Left'; var _strScrollTop = _strScroll + 'Top'; var _strMouseTouchDownEvent = 'mousedown touchstart'; var _strMouseTouchUpEvent = 'mouseup touchend touchcancel'; var _strMouseTouchMoveEvent = 'mousemove touchmove'; var _strMouseEnter = 'mouseenter'; var _strMouseLeave = 'mouseleave'; var _strKeyDownEvent = 'keydown'; var _strKeyUpEvent = 'keyup'; var _strSelectStartEvent = 'selectstart'; var _strTransitionEndEvent = 'transitionend webkitTransitionEnd oTransitionEnd'; var _strResizeObserverProperty = '__overlayScrollbarsRO__'; let _cassNamesPrefix = 'os-'; var _classNameHTMLElement = _cassNamesPrefix + 'html'; var _classNameHostElement = _cassNamesPrefix + 'host'; var _classNameHostElementForeign = _classNameHostElement + '-foreign'; var _classNameHostTextareaElement = _classNameHostElement + '-textarea'; var _classNameHostScrollbarHorizontalHidden = _classNameHostElement + '-' + _strScrollbar + _strMinusHorizontal + _strMinusHidden; var _classNameHostScrollbarVerticalHidden = _classNameHostElement + '-' + _strScrollbar + _strMinusVertical + _strMinusHidden; var _classNameHostTransition = _classNameHostElement + '-transition'; var _classNameHostRTL = _classNameHostElement + '-rtl'; var _classNameHostResizeDisabled = _classNameHostElement + '-resize-disabled'; var _classNameHostScrolling = _classNameHostElement + '-scrolling'; var _classNameHostOverflow = _classNameHostElement + '-overflow'; var _classNameHostOverflowX = (_classNameHostOverflow = _classNameHostElement + '-overflow') + '-x'; var _classNameHostOverflowY = _classNameHostOverflow + '-y'; var _classNameTextareaElement = _cassNamesPrefix + 'textarea'; var _classNameTextareaCoverElement = _classNameTextareaElement + '-cover'; var _classNamePaddingElement = _cassNamesPrefix + 'padding'; var _classNameViewportElement = _cassNamesPrefix + 'viewport'; var _classNameViewportNativeScrollbarsInvisible = _classNameViewportElement + '-native-scrollbars-invisible'; var _classNameViewportNativeScrollbarsOverlaid = _classNameViewportElement + '-native-scrollbars-overlaid'; var _classNameContentElement = _cassNamesPrefix + 'content'; var _classNameContentArrangeElement = _cassNamesPrefix + 'content-arrange'; var _classNameContentGlueElement = _cassNamesPrefix + 'content-glue'; var _classNameSizeAutoObserverElement = _cassNamesPrefix + 'size-auto-observer'; var _classNameResizeObserverElement = _cassNamesPrefix + 'resize-observer'; var _classNameResizeObserverItemElement = _cassNamesPrefix + 'resize-observer-item'; var _classNameResizeObserverItemFinalElement = _classNameResizeObserverItemElement + '-final'; var _classNameTextInherit = _cassNamesPrefix + 'text-inherit'; var _classNameScrollbar = _cassNamesPrefix + _strScrollbar; var _classNameScrollbarTrack = _classNameScrollbar + '-track'; var _classNameScrollbarTrackOff = _classNameScrollbarTrack + '-off'; var _classNameScrollbarHandle = _classNameScrollbar + '-handle'; var _classNameScrollbarHandleOff = _classNameScrollbarHandle + '-off'; var _classNameScrollbarUnusable = _classNameScrollbar + '-unusable'; var _classNameScrollbarAutoHidden = _classNameScrollbar + '-' + _strAuto + _strMinusHidden; var _classNameScrollbarCorner = _classNameScrollbar + '-corner'; var _classNameScrollbarCornerResize = _classNameScrollbarCorner + '-resize'; var _classNameScrollbarCornerResizeB = _classNameScrollbarCornerResize + '-both'; var _classNameScrollbarCornerResizeH = _classNameScrollbarCornerResize + _strMinusHorizontal; var _classNameScrollbarCornerResizeV = _classNameScrollbarCornerResize + _strMinusVertical; var _classNameScrollbarHorizontal = _classNameScrollbar + _strMinusHorizontal; var _classNameScrollbarVertical = _classNameScrollbar + _strMinusVertical; var _classNameDragging = _cassNamesPrefix + 'dragging'; var _classNameThemeNone = _cassNamesPrefix + 'theme-none'; var _classNamesDynamicDestroy = [_classNameViewportNativeScrollbarsInvisible, _classNameViewportNativeScrollbarsOverlaid, _classNameScrollbarTrackOff, _classNameScrollbarHandleOff, _classNameScrollbarUnusable, _classNameScrollbarAutoHidden, _classNameScrollbarCornerResize, _classNameScrollbarCornerResizeB, _classNameScrollbarCornerResizeH, _classNameScrollbarCornerResizeV, _classNameDragging].join(_strSpace); var _callbacksInitQeueue = []; var _viewportAttrsFromTarget = [LEXICON.ti]; var _extensions = {}; let _extensionsPrivateMethods = 'added removed on contract'; var _swallowedUpdateHints = {}; var _swallowUpdateLag = 42; var _updateOnLoadEventName = 'load'; var _updateOnLoadElms = []; var _updateAutoCache = {}; var _mutationObserverAttrsTextarea = ['wrap', 'cols', 'rows']; var _mutationObserverAttrsHost = [LEXICON.i, LEXICON.c, LEXICON.s, 'open'].concat(_viewportAttrsFromTarget); var _destroyEvents = []; return _base.sleep = function () {
							_sleeping = !0;
						}, _base.update = function (force) {
							let attrsChanged; let contentSizeC; let doUpdateAuto; let mutHost; let mutContent; if (!_destroyed) {
								return type(force) == TYPES.s ? force === _strAuto ? (attrsChanged = meaningfulAttrsChanged(), contentSizeC = updateAutoContentSizeChanged(), (doUpdateAuto = attrsChanged || contentSizeC) && update({_contentSizeChanged: contentSizeC, _changedOptions: _initialized ? undefined : _currentPreparedOptions})) : force === _strSync ? _mutationObserversConnected ? (mutHost = _mutationObserverHostCallback(_mutationObserverHost.takeRecords()), mutContent = _mutationObserverContentCallback(_mutationObserverContent.takeRecords())) : mutHost = _base.update(_strAuto) : force === 'zoom' && update({_hostSizeChanged: !0, _contentSizeChanged: !0}) : (force = _sleeping || force, _sleeping = !1, _base.update(_strSync) && !force || update({_force: force})), updateElementsOnLoad(), doUpdateAuto || mutHost || mutContent;
							}
						}, _base.options = function (newOptions, value) {
							let changedOps; let option = {}; if (FRAMEWORK.isEmptyObject(newOptions) || !FRAMEWORK.isPlainObject(newOptions)) {
								if (type(newOptions) != TYPES.s) {
									return _currentOptions;
								}

								if (!(arguments.length > 1)) {
									return getObjectPropVal(_currentOptions, newOptions);
								}

								setObjectPropVal(option, newOptions, value), changedOps = setOptions(option);
							} else {
								changedOps = setOptions(newOptions);
							}

							FRAMEWORK.isEmptyObject(changedOps) || update({_changedOptions: changedOps});
						}, _base.destroy = function () {
							if (!_destroyed) {
								for (let extName in autoUpdateLoop.remove(_base), disconnectMutationObservers(), setupResizeObserver(_sizeObserverElement), setupResizeObserver(_sizeAutoObserverElement), _extensions) {
									_base.removeExt(extName);
								}

								for (;_destroyEvents[LEXICON.l] > 0;) {
									_destroyEvents.pop()();
								}

								setupHostMouseTouchEvents(!0), _contentGlueElement && remove(_contentGlueElement), _contentArrangeElement && remove(_contentArrangeElement), _sizeAutoObserverAdded && remove(_sizeAutoObserverElement), setupScrollbarsDOM(!0), setupScrollbarCornerDOM(!0), setupStructureDOM(!0); for (let i = 0; i < _updateOnLoadElms[LEXICON.l]; i++) {
									FRAMEWORK(_updateOnLoadElms[i]).off(_updateOnLoadEventName, updateOnLoadCallback);
								}

								_updateOnLoadElms = undefined, _destroyed = !0, _sleeping = !0, INSTANCES(pluginTargetElement, 0), dispatchCallback('onDestroyed');
							}
						}, _base.scroll = function (coordinates, duration, easing, complete) {
							if (arguments.length === 0 || coordinates === undefined) {
								let infoX = _scrollHorizontalInfo; let infoY = _scrollVerticalInfo; let normalizeInvert = _normalizeRTLCache && _isRTL && _rtlScrollBehavior.i; let normalizeNegate = _normalizeRTLCache && _isRTL && _rtlScrollBehavior.n; let scrollX = infoX._currentScroll; let scrollXRatio = infoX._currentScrollRatio; let maxScrollX = infoX._maxScroll; return scrollXRatio = normalizeInvert ? 1 - scrollXRatio : scrollXRatio, scrollX = normalizeInvert ? maxScrollX - scrollX : scrollX, maxScrollX *= normalizeNegate ? -1 : 1, {position: {x: scrollX *= normalizeNegate ? -1 : 1, y: infoY._currentScroll}, ratio: {x: scrollXRatio, y: infoY._currentScrollRatio}, max: {x: maxScrollX, y: infoY._maxScroll}, handleOffset: {x: infoX._handleOffset, y: infoY._handleOffset}, handleLength: {x: infoX._handleLength, y: infoY._handleLength}, handleLengthRatio: {x: infoX._handleLengthRatio, y: infoY._handleLengthRatio}, trackLength: {x: infoX._trackLength, y: infoY._trackLength}, snappedHandleOffset: {x: infoX._snappedHandleOffset, y: infoY._snappedHandleOffset}, isRTL: _isRTL, isRTLNormalized: _normalizeRTLCache};
							}

							_base.update(_strSync); let i; let doScrollLeft; let doScrollTop; let animationOptions; let settingsAxis; let settingsScroll; let settingsBlock; let settingsMargin; let finalElement; let normalizeRTL = _normalizeRTLCache; let coordinatesXAxisProps = [_strX, _strLeft, 'l']; let coordinatesYAxisProps = [_strY, _strTop, 't']; let coordinatesOperators = ['+=', '-=', '*=', '/=']; let durationIsObject = type(duration) == TYPES.o; let completeCallback = durationIsObject ? duration.complete : complete; let finalScroll = {}; let specialEasing = {}; let strEnd = 'end'; let strBegin = 'begin'; let strCenter = 'center'; let strNearest = 'nearest'; let strAlways = 'always'; let strNever = 'never'; let strIfNeeded = 'ifneeded'; let strLength = LEXICON.l; let elementObjSettingsAxisValues = [_strX, _strY, 'xy', 'yx']; let elementObjSettingsBlockValues = [strBegin, strEnd, strCenter, strNearest]; let elementObjSettingsScrollValues = [strAlways, strNever, strIfNeeded]; let coordinatesIsElementObj = coordinates[LEXICON.hOP]('el'); let possibleElement = coordinatesIsElementObj ? coordinates.el : coordinates; let possibleElementIsJQuery = Boolean(possibleElement instanceof FRAMEWORK || JQUERY) && possibleElement instanceof JQUERY; let possibleElementIsHTMLElement = !possibleElementIsJQuery && isHTMLElement(possibleElement); let updateScrollbarInfos = function () {
								doScrollLeft && refreshScrollbarHandleOffset(!0), doScrollTop && refreshScrollbarHandleOffset(!1);
							};

							let proxyCompleteCallback = type(completeCallback) != TYPES.f ? undefined : function () {
								updateScrollbarInfos(), completeCallback();
							};

							function checkSettingsStringValue(currValue, allowedValues) {
								for (i = 0; i < allowedValues[strLength]; i++) {
									if (currValue === allowedValues[i]) {
										return !0;
									}
								}

								return !1;
							}

							function getRawScroll(isX, coordinates) {
								let coordinateProps = isX ? coordinatesXAxisProps : coordinatesYAxisProps; if (coordinates = type(coordinates) == TYPES.s || type(coordinates) == TYPES.n ? [coordinates, coordinates] : coordinates, COMPATIBILITY.isA(coordinates)) {
									return isX ? coordinates[0] : coordinates[1];
								}

								if (type(coordinates) == TYPES.o) {
									for (i = 0; i < coordinateProps[strLength]; i++) {
										if (coordinateProps[i] in coordinates) {
											return coordinates[coordinateProps[i]];
										}
									}
								}
							}

							function getFinalScroll(isX, rawScroll) {
								let operator; let amount; let finalValue; let possibleOperator; let isString = type(rawScroll) == TYPES.s; let scrollInfo = isX ? _scrollHorizontalInfo : _scrollVerticalInfo; let currScroll = scrollInfo._currentScroll; let maxScroll = scrollInfo._maxScroll; let mult = ' * '; let isRTLisX = _isRTL && isX; let normalizeShortcuts = isRTLisX && _rtlScrollBehavior.n && !normalizeRTL; let strReplace = 'replace'; let evalFunc = eval; if (isString ? (rawScroll[strLength] > 2 && (possibleOperator = rawScroll.substr(0, 2), inArray(possibleOperator, coordinatesOperators) > -1 && (operator = possibleOperator)), rawScroll = (rawScroll = operator ? rawScroll.substr(2) : rawScroll)[strReplace](/min/g, 0)[strReplace](/</g, 0)[strReplace](/max/g, (normalizeShortcuts ? '-' : _strEmpty) + _strHundredPercent)[strReplace](/>/g, (normalizeShortcuts ? '-' : _strEmpty) + _strHundredPercent)[strReplace](/px/g, _strEmpty)[strReplace](/%/g, mult + maxScroll * (isRTLisX && _rtlScrollBehavior.n ? -1 : 1) / 100)[strReplace](/vw/g, mult + _viewportSize.w)[strReplace](/vh/g, mult + _viewportSize.h), amount = parseToZeroOrNumber(isNaN(rawScroll) ? parseToZeroOrNumber(evalFunc(rawScroll), !0).toFixed() : rawScroll)) : amount = rawScroll, amount !== undefined && !isNaN(amount) && type(amount) == TYPES.n) {
									let normalizeIsRTLisX = normalizeRTL && isRTLisX; let operatorCurrScroll = currScroll * (normalizeIsRTLisX && _rtlScrollBehavior.n ? -1 : 1); let invert = normalizeIsRTLisX && _rtlScrollBehavior.i; let negate = normalizeIsRTLisX && _rtlScrollBehavior.n; switch (operatorCurrScroll = invert ? maxScroll - operatorCurrScroll : operatorCurrScroll, operator) {
										case '+=': finalValue = operatorCurrScroll + amount; break; case '-=': finalValue = operatorCurrScroll - amount; break; case '*=': finalValue = operatorCurrScroll * amount; break; case '/=': finalValue = operatorCurrScroll / amount; break; default: finalValue = amount;
									}

									finalValue = invert ? maxScroll - finalValue : finalValue, finalValue *= negate ? -1 : 1, finalValue = isRTLisX && _rtlScrollBehavior.n ? MATH.min(0, MATH.max(maxScroll, finalValue)) : MATH.max(0, MATH.min(maxScroll, finalValue));
								}

								return finalValue === currScroll ? undefined : finalValue;
							}

							function getPerAxisValue(value, valueInternalType, defaultValue, allowedValues) {
								let valueArrLength; let valueArrItem; let resultDefault = [defaultValue, defaultValue]; let valueType = type(value); if (valueType == valueInternalType) {
									value = [value, value];
								} else if (valueType == TYPES.a) {
									if ((valueArrLength = value[strLength]) > 2 || valueArrLength < 1) {
										value = resultDefault;
									} else {
										for (valueArrLength === 1 && (value[1] = defaultValue), i = 0; i < valueArrLength; i++) {
											if (valueArrItem = value[i], type(valueArrItem) != valueInternalType || !checkSettingsStringValue(valueArrItem, allowedValues)) {
												value = resultDefault; break;
											}
										}
									}
								} else {
									value = valueType == TYPES.o ? [value[_strX] || defaultValue, value[_strY] || defaultValue] : resultDefault;
								}

								return {x: value[0], y: value[1]};
							}

							function generateMargin(marginTopRightBottomLeftArray) {
								let currValue; let currValueType; let result = []; let valueDirections = [_strTop, _strRight, _strBottom, _strLeft]; for (i = 0; i < marginTopRightBottomLeftArray[strLength] && i !== valueDirections[strLength]; i++) {
									currValue = marginTopRightBottomLeftArray[i], (currValueType = type(currValue)) == TYPES.b ? result.push(currValue ? parseToZeroOrNumber(finalElement.css(_strMarginMinus + valueDirections[i])) : 0) : result.push(currValueType == TYPES.n ? currValue : 0);
								}

								return result;
							}

							if (possibleElementIsJQuery || possibleElementIsHTMLElement) {
								let marginLength; let margin = coordinatesIsElementObj ? coordinates.margin : 0; let axis = coordinatesIsElementObj ? coordinates.axis : 0; let scroll = coordinatesIsElementObj ? coordinates.scroll : 0; let block = coordinatesIsElementObj ? coordinates.block : 0; let marginDefault = [0, 0, 0, 0]; let marginType = type(margin); if ((finalElement = possibleElementIsJQuery ? possibleElement : FRAMEWORK(possibleElement))[strLength] > 0) {
									margin = marginType == TYPES.n || marginType == TYPES.b ? generateMargin([margin, margin, margin, margin]) : marginType == TYPES.a ? (marginLength = margin[strLength]) === 2 ? generateMargin([margin[0], margin[1], margin[0], margin[1]]) : marginLength >= 4 ? generateMargin(margin) : marginDefault : marginType == TYPES.o ? generateMargin([margin[_strTop], margin[_strRight], margin[_strBottom], margin[_strLeft]]) : marginDefault, settingsAxis = checkSettingsStringValue(axis, elementObjSettingsAxisValues) ? axis : 'xy', settingsScroll = getPerAxisValue(scroll, TYPES.s, strAlways, elementObjSettingsScrollValues), settingsBlock = getPerAxisValue(block, TYPES.s, strBegin, elementObjSettingsBlockValues), settingsMargin = margin; let viewportScroll = {l: _scrollHorizontalInfo._currentScroll, t: _scrollVerticalInfo._currentScroll}; let viewportOffset = _paddingElement.offset(); let elementOffset = finalElement.offset(); let doNotScroll = {x: settingsScroll.x == strNever || settingsAxis == _strY, y: settingsScroll.y == strNever || settingsAxis == _strX}; elementOffset[_strTop] -= settingsMargin[0], elementOffset[_strLeft] -= settingsMargin[3]; let elementScrollCoordinates = {x: MATH.round(elementOffset[_strLeft] - viewportOffset[_strLeft] + viewportScroll.l), y: MATH.round(elementOffset[_strTop] - viewportOffset[_strTop] + viewportScroll.t)}; if (_isRTL && (_rtlScrollBehavior.n || _rtlScrollBehavior.i || (elementScrollCoordinates.x = MATH.round(viewportOffset[_strLeft] - elementOffset[_strLeft] + viewportScroll.l)), _rtlScrollBehavior.n && normalizeRTL && (elementScrollCoordinates.x *= -1), _rtlScrollBehavior.i && normalizeRTL && (elementScrollCoordinates.x = MATH.round(viewportOffset[_strLeft] - elementOffset[_strLeft] + (_scrollHorizontalInfo._maxScroll - viewportScroll.l)))), settingsBlock.x != strBegin || settingsBlock.y != strBegin || settingsScroll.x == strIfNeeded || settingsScroll.y == strIfNeeded || _isRTL) {
										let measuringElm = finalElement[0]; let rawElementSize = _supportTransform ? measuringElm[LEXICON.bCR]() : {width: measuringElm[LEXICON.oW], height: measuringElm[LEXICON.oH]}; let elementSize = {w: rawElementSize[_strWidth] + settingsMargin[3] + settingsMargin[1], h: rawElementSize[_strHeight] + settingsMargin[0] + settingsMargin[2]}; let finalizeBlock = function (isX) {
											let vars = getScrollbarVars(isX); let wh = vars._w_h; let lt = vars._left_top; let xy = vars._x_y; let blockIsEnd = settingsBlock[xy] == (isX && _isRTL ? strBegin : strEnd); let blockIsCenter = settingsBlock[xy] == strCenter; let blockIsNearest = settingsBlock[xy] == strNearest; let scrollNever = settingsScroll[xy] == strNever; let scrollIfNeeded = settingsScroll[xy] == strIfNeeded; let vpSize = _viewportSize[wh]; let vpOffset = viewportOffset[lt]; let elSize = elementSize[wh]; let elOffset = elementOffset[lt]; let divide = blockIsCenter ? 2 : 1; let elementCenterOffset = elOffset + elSize / 2; let viewportCenterOffset = vpOffset + vpSize / 2; let isInView = elSize <= vpSize && elOffset >= vpOffset && elOffset + elSize <= vpOffset + vpSize; scrollNever ? doNotScroll[xy] = !0 : doNotScroll[xy] || ((blockIsNearest || scrollIfNeeded) && (doNotScroll[xy] = Boolean(scrollIfNeeded) && isInView, blockIsEnd = elSize < vpSize ? elementCenterOffset > viewportCenterOffset : elementCenterOffset < viewportCenterOffset), elementScrollCoordinates[xy] -= blockIsEnd || blockIsCenter ? (vpSize / divide - elSize / divide) * (isX && _isRTL && normalizeRTL ? -1 : 1) : 0);
										};

										finalizeBlock(!0), finalizeBlock(!1);
									}

									doNotScroll.y && delete elementScrollCoordinates.y, doNotScroll.x && delete elementScrollCoordinates.x, coordinates = elementScrollCoordinates;
								}
							}

							finalScroll[_strScrollLeft] = getFinalScroll(!0, getRawScroll(!0, coordinates)), finalScroll[_strScrollTop] = getFinalScroll(!1, getRawScroll(!1, coordinates)), doScrollLeft = finalScroll[_strScrollLeft] !== undefined, doScrollTop = finalScroll[_strScrollTop] !== undefined, (doScrollLeft || doScrollTop) && (duration > 0 || durationIsObject) ? durationIsObject ? (duration.complete = proxyCompleteCallback, _viewportElement.animate(finalScroll, duration)) : (animationOptions = {duration, complete: proxyCompleteCallback}, COMPATIBILITY.isA(easing) || FRAMEWORK.isPlainObject(easing) ? (specialEasing[_strScrollLeft] = easing[0] || easing.x, specialEasing[_strScrollTop] = easing[1] || easing.y, animationOptions.specialEasing = specialEasing) : animationOptions.easing = easing, _viewportElement.animate(finalScroll, animationOptions)) : (doScrollLeft && _viewportElement[_strScrollLeft](finalScroll[_strScrollLeft]), doScrollTop && _viewportElement[_strScrollTop](finalScroll[_strScrollTop]), updateScrollbarInfos());
						}, _base.scrollStop = function (param1, param2, param3) {
							return _viewportElement.stop(param1, param2, param3), _base;
						}, _base.getElements = function (elementName) {
							let obj = {target: _targetElementNative, host: _hostElementNative, padding: _paddingElementNative, viewport: _viewportElementNative, content: _contentElementNative, scrollbarHorizontal: {scrollbar: _scrollbarHorizontalElement[0], track: _scrollbarHorizontalTrackElement[0], handle: _scrollbarHorizontalHandleElement[0]}, scrollbarVertical: {scrollbar: _scrollbarVerticalElement[0], track: _scrollbarVerticalTrackElement[0], handle: _scrollbarVerticalHandleElement[0]}, scrollbarCorner: _scrollbarCornerElement[0]}; return type(elementName) == TYPES.s ? getObjectPropVal(obj, elementName) : obj;
						}, _base.getState = function (stateProperty) {
							function prepare(obj) {
								if (!FRAMEWORK.isPlainObject(obj)) {
									return obj;
								}

								let extended = extendDeep({}, obj); let changePropertyName = function (from, to) {
									extended[LEXICON.hOP](from) && (extended[to] = extended[from], delete extended[from]);
								};

								return changePropertyName('w', _strWidth), changePropertyName('h', _strHeight), delete extended.c, extended;
							}

							let obj = {destroyed: Boolean(prepare(_destroyed)), sleeping: Boolean(prepare(_sleeping)), autoUpdate: prepare(!_mutationObserversConnected), widthAuto: prepare(_widthAutoCache), heightAuto: prepare(_heightAutoCache), padding: prepare(_cssPaddingCache), overflowAmount: prepare(_overflowAmountCache), hideOverflow: prepare(_hideOverflowCache), hasOverflow: prepare(_hasOverflowCache), contentScrollSize: prepare(_contentScrollSizeCache), viewportSize: prepare(_viewportSize), hostSize: prepare(_hostSizeCache), documentMixed: prepare(_documentMixed)}; return type(stateProperty) == TYPES.s ? getObjectPropVal(obj, stateProperty) : obj;
						}, _base.ext = function (extName) {
							let result; let privateMethods = _extensionsPrivateMethods.split(' '); let i = 0; if (type(extName) == TYPES.s) {
								if (_extensions[LEXICON.hOP](extName)) {
									for (result = extendDeep({}, _extensions[extName]); i < privateMethods.length; i++) {
										delete result[privateMethods[i]];
									}
								}
							} else {
								for (i in result = {}, _extensions) {
									result[i] = extendDeep({}, _base.ext(i));
								}
							}

							return result;
						}, _base.addExt = function (extName, extensionOptions) {
							let instance; let instanceAdded; let instanceContract; let contractResult; let registeredExtensionObj = _plugin.extension(extName); let contractFulfilled = !0; if (registeredExtensionObj) {
								if (_extensions[LEXICON.hOP](extName)) {
									return _base.ext(extName);
								}

								if ((instance = registeredExtensionObj.extensionFactory.call(_base, extendDeep({}, registeredExtensionObj.defaultOptions), FRAMEWORK, COMPATIBILITY)) && (instanceContract = instance.contract, type(instanceContract) == TYPES.f && (contractResult = instanceContract(window), contractFulfilled = type(contractResult) == TYPES.b ? contractResult : contractFulfilled), contractFulfilled)) {
									return _extensions[extName] = instance, instanceAdded = instance.added, type(instanceAdded) == TYPES.f && instanceAdded(extensionOptions), _base.ext(extName);
								}
							} else {
								console.warn('A extension with the name "' + extName + '" isn\'t registered.');
							}
						}, _base.removeExt = function (extName) {
							let instanceRemoved; let instance = _extensions[extName]; return Boolean(instance) && (delete _extensions[extName], instanceRemoved = instance.removed, type(instanceRemoved) == TYPES.f && instanceRemoved(), !0);
						}, _plugin.valid(construct(pluginTargetElement, options, extensions)) && INSTANCES(pluginTargetElement, _base), _base;
					}

					function setupResponsiveEventListener(element, eventNames, listener, remove, passiveOrOptions) {
						let collected = COMPATIBILITY.isA(eventNames) && COMPATIBILITY.isA(listener); let method = remove ? 'removeEventListener' : 'addEventListener'; let onOff = remove ? 'off' : 'on'; let events = !collected && eventNames.split(_strSpace); let i = 0; let passiveOrOptionsIsObj = FRAMEWORK.isPlainObject(passiveOrOptions); let passive = _supportPassiveEvents && (passiveOrOptionsIsObj ? passiveOrOptions._passive : passiveOrOptions) || !1; let capture = passiveOrOptionsIsObj && (passiveOrOptions._capture || !1); let nativeParam = _supportPassiveEvents ? {passive, capture} : capture; if (collected) {
							for (;i < eventNames[LEXICON.l]; i++) {
								setupResponsiveEventListener(element, eventNames[i], listener[i], remove, passiveOrOptions);
							}
						} else {
							for (;i < events[LEXICON.l]; i++) {
								_supportPassiveEvents ? element[0][method](events[i], listener, nativeParam) : element[onOff](events[i], listener);
							}
						}
					}

					function addDestroyEventListener(element, eventNames, listener, passive) {
						setupResponsiveEventListener(element, eventNames, listener, !1, passive), _destroyEvents.push(COMPATIBILITY.bind(setupResponsiveEventListener, 0, element, eventNames, listener, !0, passive));
					}

					function setupResizeObserver(targetElement, onElementResizedCallback) {
						if (targetElement) {
							let resizeObserver = COMPATIBILITY.rO(); let strAnimationStartEvent = 'animationstart mozAnimationStart webkitAnimationStart MSAnimationStart'; let strChildNodes = 'childNodes'; let constScroll = 3333333; let callback = function () {
								targetElement[_strScrollTop](constScroll)[_strScrollLeft](_isRTL ? _rtlScrollBehavior.n ? -constScroll : _rtlScrollBehavior.i ? 0 : constScroll : constScroll), onElementResizedCallback();
							};

							if (onElementResizedCallback) {
								if (_supportResizeObserver) {
									((element = targetElement.addClass('observed').append(generateDiv(_classNameResizeObserverElement)).contents()[0])[_strResizeObserverProperty] = new resizeObserver(callback)).observe(element);
								} else if (_msieVersion > 9 || !_autoUpdateRecommended) {
									targetElement.prepend(generateDiv(_classNameResizeObserverElement, generateDiv({c: _classNameResizeObserverItemElement, dir: 'ltr'}, generateDiv(_classNameResizeObserverItemElement, generateDiv(_classNameResizeObserverItemFinalElement)) + generateDiv(_classNameResizeObserverItemElement, generateDiv({c: _classNameResizeObserverItemFinalElement, style: 'width: 200%; height: 200%'}))))); let isDirty; let rAFId; let currWidth; let currHeight; let observerElement = targetElement[0][strChildNodes][0][strChildNodes][0]; let shrinkElement = FRAMEWORK(observerElement[strChildNodes][1]); let expandElement = FRAMEWORK(observerElement[strChildNodes][0]); let expandElementChild = FRAMEWORK(expandElement[0][strChildNodes][0]); let widthCache = observerElement[LEXICON.oW]; let heightCache = observerElement[LEXICON.oH]; let factor = 2; let {nativeScrollbarSize} = globals; let reset = function () {
										expandElement[_strScrollLeft](constScroll)[_strScrollTop](constScroll), shrinkElement[_strScrollLeft](constScroll)[_strScrollTop](constScroll);
									};

									let onResized = function () {
										rAFId = 0, isDirty && (widthCache = currWidth, heightCache = currHeight, callback());
									};

									let onScroll = function (event) {
										return currWidth = observerElement[LEXICON.oW], currHeight = observerElement[LEXICON.oH], isDirty = currWidth != widthCache || currHeight != heightCache, event && isDirty && !rAFId ? (COMPATIBILITY.cAF()(rAFId), rAFId = COMPATIBILITY.rAF()(onResized)) : event || onResized(), reset(), event && (COMPATIBILITY.prvD(event), COMPATIBILITY.stpP(event)), !1;
									};

									let expandChildCSS = {}; let observerElementCSS = {}; setTopRightBottomLeft(observerElementCSS, _strEmpty, [-(nativeScrollbarSize.y + 1) * factor, nativeScrollbarSize.x * -factor, nativeScrollbarSize.y * -factor, -(nativeScrollbarSize.x + 1) * factor]), FRAMEWORK(observerElement).css(observerElementCSS), expandElement.on(_strScroll, onScroll), shrinkElement.on(_strScroll, onScroll), targetElement.on(strAnimationStartEvent, (() => {
										onScroll(!1);
									})), expandChildCSS[_strWidth] = constScroll, expandChildCSS[_strHeight] = constScroll, expandElementChild.css(expandChildCSS), reset();
								} else {
									let {attachEvent} = _documentElementNative; let
										isIE = _msieVersion !== undefined; if (attachEvent) {
										targetElement.prepend(generateDiv(_classNameResizeObserverElement)), findFirst(targetElement, _strDot + _classNameResizeObserverElement)[0].attachEvent('onresize', callback);
									} else {
										let obj = _documentElementNative.createElement(TYPES.o); obj.setAttribute(LEXICON.ti, '-1'), obj.setAttribute(LEXICON.c, _classNameResizeObserverElement), obj.onload = function () {
											let wnd = this.contentDocument.defaultView; wnd.addEventListener('resize', callback), wnd.document.documentElement.style.display = 'none';
										}, obj.type = 'text/html', isIE && targetElement.prepend(obj), obj.data = 'about:blank', isIE || targetElement.prepend(obj), targetElement.on(strAnimationStartEvent, callback);
									}
								}

								if (targetElement[0] === _sizeObserverElementNative) {
									let directionChanged = function () {
										let dir = _hostElement.css('direction'); let css = {}; let scrollLeftValue = 0; let result = !1; return dir !== _cssDirectionDetectedCache && (dir === 'ltr' ? (css[_strLeft] = 0, css[_strRight] = _strAuto, scrollLeftValue = constScroll) : (css[_strLeft] = _strAuto, css[_strRight] = 0, scrollLeftValue = _rtlScrollBehavior.n ? -constScroll : _rtlScrollBehavior.i ? 0 : constScroll), _sizeObserverElement.children().eq(0).css(css), _sizeObserverElement[_strScrollLeft](scrollLeftValue)[_strScrollTop](constScroll), _cssDirectionDetectedCache = dir, result = !0), result;
									};

									directionChanged(), addDestroyEventListener(targetElement, _strScroll, (event => (directionChanged() && update(), COMPATIBILITY.prvD(event), COMPATIBILITY.stpP(event), !1)));
								}
							} else if (_supportResizeObserver) {
								var element; let resizeObserverObj = (element = targetElement.contents()[0])[_strResizeObserverProperty]; resizeObserverObj && (resizeObserverObj.disconnect(), delete element[_strResizeObserverProperty]);
							} else {
								remove(targetElement.children(_strDot + _classNameResizeObserverElement).eq(0));
							}
						}
					}

					function createMutationObservers() {
						if (_supportMutationObserver) {
							let mutationTarget; let mutationAttrName; let mutationIsClass; let oldMutationVal; let newClassVal; let hostClassNameRegex; let contentTimeout; let now; let sizeAuto; let action; let mutationObserverContentLag = 11; let mutationObserver = COMPATIBILITY.mO(); let contentLastUpdate = COMPATIBILITY.now(); _mutationObserverContentCallback = function (mutations) {
								let doUpdate = !1; return _initialized && !_sleeping && (each(mutations, (function () {
									return !(doUpdate = isUnknownMutation(this));
								})), doUpdate && (now = COMPATIBILITY.now(), sizeAuto = _heightAutoCache || _widthAutoCache, action = function () {
									_destroyed || (contentLastUpdate = now, _isTextarea && textareaUpdate(), sizeAuto ? update() : _base.update(_strAuto));
								}, clearTimeout(contentTimeout), mutationObserverContentLag <= 0 || now - contentLastUpdate > mutationObserverContentLag || !sizeAuto ? action() : contentTimeout = setTimeout(action, mutationObserverContentLag))), doUpdate;
							}, _mutationObserverHost = new mutationObserver(_mutationObserverHostCallback = function (mutations) {
								let mutation; let doUpdate = !1; let doUpdateForce = !1; let mutatedAttrs = []; return _initialized && !_sleeping && (each(mutations, (function () {
									mutationTarget = (mutation = this).target, mutationAttrName = mutation.attributeName, mutationIsClass = mutationAttrName === LEXICON.c, oldMutationVal = mutation.oldValue, newClassVal = mutationTarget.className, _domExists && mutationIsClass && !doUpdateForce && oldMutationVal.indexOf(_classNameHostElementForeign) > -1 && newClassVal.indexOf(_classNameHostElementForeign) < 0 && (hostClassNameRegex = createHostClassNameRegExp(!0), _hostElementNative.className = newClassVal.split(_strSpace).concat(oldMutationVal.split(_strSpace).filter((name => name.match(hostClassNameRegex)))).join(_strSpace), doUpdate = doUpdateForce = !0), doUpdate || (doUpdate = mutationIsClass ? hostClassNamesChanged(oldMutationVal, newClassVal) : mutationAttrName !== LEXICON.s || oldMutationVal !== mutationTarget[LEXICON.s].cssText), mutatedAttrs.push(mutationAttrName);
								})), updateViewportAttrsFromTarget(mutatedAttrs), doUpdate && _base.update(doUpdateForce || _strAuto)), doUpdate;
							}), _mutationObserverContent = new mutationObserver(_mutationObserverContentCallback);
						}
					}

					function connectMutationObservers() {
						_supportMutationObserver && !_mutationObserversConnected && (_mutationObserverHost.observe(_hostElementNative, {attributes: !0, attributeOldValue: !0, attributeFilter: _mutationObserverAttrsHost}), _mutationObserverContent.observe(_isTextarea ? _targetElementNative : _contentElementNative, {attributes: !0, attributeOldValue: !0, subtree: !_isTextarea, childList: !_isTextarea, characterData: !_isTextarea, attributeFilter: _isTextarea ? _mutationObserverAttrsTextarea : _mutationObserverAttrsHost}), _mutationObserversConnected = !0);
					}

					function disconnectMutationObservers() {
						_supportMutationObserver && _mutationObserversConnected && (_mutationObserverHost.disconnect(), _mutationObserverContent.disconnect(), _mutationObserversConnected = !1);
					}

					function hostOnResized() {
						if (!_sleeping) {
							let changed; let hostSize = {w: _sizeObserverElementNative[LEXICON.sW], h: _sizeObserverElementNative[LEXICON.sH]}; changed = checkCache(hostSize, _hostElementSizeChangeDetectedCache), _hostElementSizeChangeDetectedCache = hostSize, changed && update({_hostSizeChanged: !0});
						}
					}

					function hostOnMouseEnter() {
						_scrollbarsAutoHideLeave && refreshScrollbarsAutoHide(!0);
					}

					function hostOnMouseLeave() {
						_scrollbarsAutoHideLeave && !_bodyElement.hasClass(_classNameDragging) && refreshScrollbarsAutoHide(!1);
					}

					function hostOnMouseMove() {
						_scrollbarsAutoHideMove && (refreshScrollbarsAutoHide(!0), clearTimeout(_scrollbarsAutoHideMoveTimeoutId), _scrollbarsAutoHideMoveTimeoutId = setTimeout((() => {
							_scrollbarsAutoHideMove && !_destroyed && refreshScrollbarsAutoHide(!1);
						}), 100));
					}

					function documentOnSelectStart(event) {
						return COMPATIBILITY.prvD(event), !1;
					}

					function updateOnLoadCallback(event) {
						let elm = FRAMEWORK(event.target); eachUpdateOnLoad(((i, updateOnLoadSelector) => {
							elm.is(updateOnLoadSelector) && update({_contentSizeChanged: !0});
						}));
					}

					function setupHostMouseTouchEvents(destroy) {
						destroy || setupHostMouseTouchEvents(!0), setupResponsiveEventListener(_hostElement, _strMouseTouchMoveEvent.split(_strSpace)[0], hostOnMouseMove, !_scrollbarsAutoHideMove || destroy, !0), setupResponsiveEventListener(_hostElement, [_strMouseEnter, _strMouseLeave], [hostOnMouseEnter, hostOnMouseLeave], !_scrollbarsAutoHideLeave || destroy, !0), _initialized || destroy || _hostElement.one('mouseover', hostOnMouseEnter);
					}

					function bodyMinSizeChanged() {
						let bodyMinSize = {}; return _isBody && _contentArrangeElement && (bodyMinSize.w = parseToZeroOrNumber(_contentArrangeElement.css(_strMinMinus + _strWidth)), bodyMinSize.h = parseToZeroOrNumber(_contentArrangeElement.css(_strMinMinus + _strHeight)), bodyMinSize.c = checkCache(bodyMinSize, _bodyMinSizeCache), bodyMinSize.f = !0), _bodyMinSizeCache = bodyMinSize, Boolean(bodyMinSize.c);
					}

					function hostClassNamesChanged(oldClassNames, newClassNames) {
						let i; let regex; let currClasses = typeof newClassNames === TYPES.s ? newClassNames.split(_strSpace) : []; let diff = getArrayDifferences(typeof oldClassNames === TYPES.s ? oldClassNames.split(_strSpace) : [], currClasses); let idx = inArray(_classNameThemeNone, diff); if (idx > -1 && diff.splice(idx, 1), diff[LEXICON.l] > 0) {
							for (regex = createHostClassNameRegExp(!0, !0), i = 0; i < diff.length; i++) {
								if (!diff[i].match(regex)) {
									return !0;
								}
							}
						}

						return !1;
					}

					function isUnknownMutation(mutation) {
						let {attributeName} = mutation; let mutationTarget = mutation.target; let mutationType = mutation.type; let
							strClosest = 'closest'; if (mutationTarget === _contentElementNative) {
							return attributeName === null;
						}

						if (mutationType === 'attributes' && (attributeName === LEXICON.c || attributeName === LEXICON.s) && !_isTextarea) {
							if (attributeName === LEXICON.c && FRAMEWORK(mutationTarget).hasClass(_classNameHostElement)) {
								return hostClassNamesChanged(mutation.oldValue, mutationTarget.className);
							}

							if (typeof mutationTarget[strClosest] !== TYPES.f) {
								return !0;
							}

							if (mutationTarget[strClosest](_strDot + _classNameResizeObserverElement) !== null || mutationTarget[strClosest](_strDot + _classNameScrollbar) !== null || mutationTarget[strClosest](_strDot + _classNameScrollbarCorner) !== null) {
								return !1;
							}
						}

						return !0;
					}

					function updateAutoContentSizeChanged() {
						if (_sleeping) {
							return !1;
						}

						let float; let bodyMinSizeC; let changed; let contentElementScrollSize; let contentMeasureElement = getContentMeasureElement(); let textareaValueLength = _isTextarea && _widthAutoCache && !_textareaAutoWrappingCache ? _targetElement.val().length : 0; let setCSS = !_mutationObserversConnected && _widthAutoCache && !_isTextarea; let css = {}; return setCSS && (float = _contentElement.css(_strFloat), css[_strFloat] = _isRTL ? _strRight : _strLeft, css[_strWidth] = _strAuto, _contentElement.css(css)), contentElementScrollSize = {w: contentMeasureElement[LEXICON.sW] + textareaValueLength, h: contentMeasureElement[LEXICON.sH] + textareaValueLength}, setCSS && (css[_strFloat] = float, css[_strWidth] = _strHundredPercent, _contentElement.css(css)), bodyMinSizeC = bodyMinSizeChanged(), changed = checkCache(contentElementScrollSize, _contentElementScrollSizeChangeDetectedCache), _contentElementScrollSizeChangeDetectedCache = contentElementScrollSize, changed || bodyMinSizeC;
					}

					function meaningfulAttrsChanged() {
						if (!_sleeping && !_mutationObserversConnected) {
							let elem; let curr; let cache; let changedAttrs = []; let checks = [{_elem: _hostElement, _attrs: _mutationObserverAttrsHost.concat(':visible')}, {_elem: _isTextarea ? _targetElement : undefined, _attrs: _mutationObserverAttrsTextarea}]; return each(checks, ((index, check) => {
								(elem = check._elem) && each(check._attrs, ((index, attr) => {
									curr = attr.charAt(0) === ':' ? elem.is(attr) : elem.attr(attr), cache = _updateAutoCache[attr], checkCache(curr, cache) && changedAttrs.push(attr), _updateAutoCache[attr] = curr;
								}));
							})), updateViewportAttrsFromTarget(changedAttrs), changedAttrs[LEXICON.l] > 0;
						}
					}

					function isSizeAffectingCSSProperty(propertyName) {
						if (!_initialized) {
							return !0;
						}

						let flexGrow = 'flex-grow'; let flexShrink = 'flex-shrink'; let flexBasis = 'flex-basis'; let affectingPropsX = [_strWidth, _strMinMinus + _strWidth, _strMaxMinus + _strWidth, _strMarginMinus + _strLeft, _strMarginMinus + _strRight, _strLeft, _strRight, 'font-weight', 'word-spacing', flexGrow, flexShrink, flexBasis]; let affectingPropsXContentBox = [_strPaddingMinus + _strLeft, _strPaddingMinus + _strRight, _strBorderMinus + _strLeft + _strWidth, _strBorderMinus + _strRight + _strWidth]; let affectingPropsY = [_strHeight, _strMinMinus + _strHeight, _strMaxMinus + _strHeight, _strMarginMinus + _strTop, _strMarginMinus + _strBottom, _strTop, _strBottom, 'line-height', flexGrow, flexShrink, flexBasis]; let affectingPropsYContentBox = [_strPaddingMinus + _strTop, _strPaddingMinus + _strBottom, _strBorderMinus + _strTop + _strWidth, _strBorderMinus + _strBottom + _strWidth]; let _strS = 's'; let _strVS = 'v-s'; let checkX = _overflowBehaviorCache.x === _strS || _overflowBehaviorCache.x === _strVS; let sizeIsAffected = !1; let checkPropertyName = function (arr, name) {
							for (let i = 0; i < arr[LEXICON.l]; i++) {
								if (arr[i] === name) {
									return !0;
								}
							}

							return !1;
						};

						return (_overflowBehaviorCache.y === _strS || _overflowBehaviorCache.y === _strVS) && ((sizeIsAffected = checkPropertyName(affectingPropsY, propertyName)) || _isBorderBox || (sizeIsAffected = checkPropertyName(affectingPropsYContentBox, propertyName))), checkX && !sizeIsAffected && ((sizeIsAffected = checkPropertyName(affectingPropsX, propertyName)) || _isBorderBox || (sizeIsAffected = checkPropertyName(affectingPropsXContentBox, propertyName))), sizeIsAffected;
					}

					function updateViewportAttrsFromTarget(attrs) {
						each(attrs = attrs || _viewportAttrsFromTarget, ((index, attr) => {
							if (COMPATIBILITY.inA(attr, _viewportAttrsFromTarget) > -1) {
								let targetAttr = _targetElement.attr(attr); type(targetAttr) == TYPES.s ? _viewportElement.attr(attr, targetAttr) : _viewportElement.removeAttr(attr);
							}
						}));
					}

					function textareaUpdate() {
						if (!_sleeping) {
							let origWidth; let width; let origHeight; let height; let wrapAttrOff = !_textareaAutoWrappingCache; let minWidth = _viewportSize.w; let minHeight = _viewportSize.h; let css = {}; let doMeasure = _widthAutoCache || wrapAttrOff; return css[_strMinMinus + _strWidth] = _strEmpty, css[_strMinMinus + _strHeight] = _strEmpty, css[_strWidth] = _strAuto, _targetElement.css(css), origWidth = _targetElementNative[LEXICON.oW], width = doMeasure ? MATH.max(origWidth, _targetElementNative[LEXICON.sW] - 1) : 1, css[_strWidth] = _widthAutoCache ? _strAuto : _strHundredPercent, css[_strMinMinus + _strWidth] = _strHundredPercent, css[_strHeight] = _strAuto, _targetElement.css(css), origHeight = _targetElementNative[LEXICON.oH], height = MATH.max(origHeight, _targetElementNative[LEXICON.sH] - 1), css[_strWidth] = width, css[_strHeight] = height, _textareaCoverElement.css(css), css[_strMinMinus + _strWidth] = minWidth, css[_strMinMinus + _strHeight] = minHeight, _targetElement.css(css), {_originalWidth: origWidth, _originalHeight: origHeight, _dynamicWidth: width, _dynamicHeight: height};
						}
					}

					function update(updateHints) {
						clearTimeout(_swallowedUpdateTimeout), updateHints = updateHints || {}, _swallowedUpdateHints._hostSizeChanged |= updateHints._hostSizeChanged, _swallowedUpdateHints._contentSizeChanged |= updateHints._contentSizeChanged, _swallowedUpdateHints._force |= updateHints._force; let displayIsHidden; let now = COMPATIBILITY.now(); let hostSizeChanged = Boolean(_swallowedUpdateHints._hostSizeChanged); let contentSizeChanged = Boolean(_swallowedUpdateHints._contentSizeChanged); let force = Boolean(_swallowedUpdateHints._force); let changedOptions = updateHints._changedOptions; let swallow = _swallowUpdateLag > 0 && _initialized && !_destroyed && !force && !changedOptions && now - _lastUpdateTime < _swallowUpdateLag && !_heightAutoCache && !_widthAutoCache; if (swallow && (_swallowedUpdateTimeout = setTimeout(update, _swallowUpdateLag)), !(_destroyed || swallow || _sleeping && !changedOptions || _initialized && !force && (displayIsHidden = _hostElement.is(':hidden')) || _hostElement.css('display') === 'inline')) {
							_lastUpdateTime = now, _swallowedUpdateHints = {}, !_nativeScrollbarStyling || _nativeScrollbarIsOverlaid.x && _nativeScrollbarIsOverlaid.y ? _nativeScrollbarSize = extendDeep({}, globals.nativeScrollbarSize) : (_nativeScrollbarSize.x = 0, _nativeScrollbarSize.y = 0), _nativeScrollbarMinSize = {x: 3 * (_nativeScrollbarSize.x + (_nativeScrollbarIsOverlaid.x ? 0 : 3)), y: 3 * (_nativeScrollbarSize.y + (_nativeScrollbarIsOverlaid.y ? 0 : 3))}, changedOptions = changedOptions || {}; let checkCacheAutoForce = function () {
								return checkCache.apply(this, [].slice.call(arguments).concat([force]));
							};

							let currScroll = {x: _viewportElement[_strScrollLeft](), y: _viewportElement[_strScrollTop]()}; let currentPreparedOptionsScrollbars = _currentPreparedOptions.scrollbars; let currentPreparedOptionsTextarea = _currentPreparedOptions.textarea; let scrollbarsVisibility = currentPreparedOptionsScrollbars.visibility; let scrollbarsVisibilityChanged = checkCacheAutoForce(scrollbarsVisibility, _scrollbarsVisibilityCache); let scrollbarsAutoHide = currentPreparedOptionsScrollbars.autoHide; let scrollbarsAutoHideChanged = checkCacheAutoForce(scrollbarsAutoHide, _scrollbarsAutoHideCache); let scrollbarsClickScrolling = currentPreparedOptionsScrollbars.clickScrolling; let scrollbarsClickScrollingChanged = checkCacheAutoForce(scrollbarsClickScrolling, _scrollbarsClickScrollingCache); let scrollbarsDragScrolling = currentPreparedOptionsScrollbars.dragScrolling; let scrollbarsDragScrollingChanged = checkCacheAutoForce(scrollbarsDragScrolling, _scrollbarsDragScrollingCache); let {className} = _currentPreparedOptions; let classNameChanged = checkCacheAutoForce(className, _classNameCache); let {resize} = _currentPreparedOptions; let resizeChanged = checkCacheAutoForce(resize, _resizeCache) && !_isBody; let {paddingAbsolute} = _currentPreparedOptions; let paddingAbsoluteChanged = checkCacheAutoForce(paddingAbsolute, _paddingAbsoluteCache); let {clipAlways} = _currentPreparedOptions; let clipAlwaysChanged = checkCacheAutoForce(clipAlways, _clipAlwaysCache); let sizeAutoCapable = _currentPreparedOptions.sizeAutoCapable && !_isBody; let sizeAutoCapableChanged = checkCacheAutoForce(sizeAutoCapable, _sizeAutoCapableCache); let ignoreOverlayScrollbarHiding = _currentPreparedOptions.nativeScrollbarsOverlaid.showNativeScrollbars; let ignoreOverlayScrollbarHidingChanged = checkCacheAutoForce(ignoreOverlayScrollbarHiding, _ignoreOverlayScrollbarHidingCache); let {autoUpdate} = _currentPreparedOptions; let autoUpdateChanged = checkCacheAutoForce(autoUpdate, _autoUpdateCache); let {overflowBehavior} = _currentPreparedOptions; let overflowBehaviorChanged = checkCacheAutoForce(overflowBehavior, _overflowBehaviorCache, force); let textareaDynWidth = currentPreparedOptionsTextarea.dynWidth; let textareaDynWidthChanged = checkCacheAutoForce(_textareaDynWidthCache, textareaDynWidth); let textareaDynHeight = currentPreparedOptionsTextarea.dynHeight; let textareaDynHeightChanged = checkCacheAutoForce(_textareaDynHeightCache, textareaDynHeight); if (_scrollbarsAutoHideNever = scrollbarsAutoHide === 'n', _scrollbarsAutoHideScroll = scrollbarsAutoHide === 's', _scrollbarsAutoHideMove = scrollbarsAutoHide === 'm', _scrollbarsAutoHideLeave = scrollbarsAutoHide === 'l', _scrollbarsAutoHideDelay = currentPreparedOptionsScrollbars.autoHideDelay, _oldClassName = _classNameCache, _resizeNone = resize === 'n', _resizeBoth = resize === 'b', _resizeHorizontal = resize === 'h', _resizeVertical = resize === 'v', _normalizeRTLCache = _currentPreparedOptions.normalizeRTL, ignoreOverlayScrollbarHiding = ignoreOverlayScrollbarHiding && _nativeScrollbarIsOverlaid.x && _nativeScrollbarIsOverlaid.y, _scrollbarsVisibilityCache = scrollbarsVisibility, _scrollbarsAutoHideCache = scrollbarsAutoHide, _scrollbarsClickScrollingCache = scrollbarsClickScrolling, _scrollbarsDragScrollingCache = scrollbarsDragScrolling, _classNameCache = className, _resizeCache = resize, _paddingAbsoluteCache = paddingAbsolute, _clipAlwaysCache = clipAlways, _sizeAutoCapableCache = sizeAutoCapable, _ignoreOverlayScrollbarHidingCache = ignoreOverlayScrollbarHiding, _autoUpdateCache = autoUpdate, _overflowBehaviorCache = extendDeep({}, overflowBehavior), _textareaDynWidthCache = textareaDynWidth, _textareaDynHeightCache = textareaDynHeight, _hasOverflowCache = _hasOverflowCache || {x: !1, y: !1}, classNameChanged && (removeClass(_hostElement, _oldClassName + _strSpace + _classNameThemeNone), addClass(_hostElement, className !== undefined && className !== null && className.length > 0 ? className : _classNameThemeNone)), autoUpdateChanged && (!0 === autoUpdate || autoUpdate === null && _autoUpdateRecommended ? (disconnectMutationObservers(), autoUpdateLoop.add(_base)) : (autoUpdateLoop.remove(_base), connectMutationObservers())), sizeAutoCapableChanged) {
								if (sizeAutoCapable) {
									if (_contentGlueElement ? _contentGlueElement.show() : (_contentGlueElement = FRAMEWORK(generateDiv(_classNameContentGlueElement)), _paddingElement.before(_contentGlueElement)), _sizeAutoObserverAdded) {
										_sizeAutoObserverElement.show();
									} else {
										_sizeAutoObserverElement = FRAMEWORK(generateDiv(_classNameSizeAutoObserverElement)), _sizeAutoObserverElementNative = _sizeAutoObserverElement[0], _contentGlueElement.before(_sizeAutoObserverElement); let oldSize = {w: -1, h: -1}; setupResizeObserver(_sizeAutoObserverElement, (() => {
											let newSize = {w: _sizeAutoObserverElementNative[LEXICON.oW], h: _sizeAutoObserverElementNative[LEXICON.oH]}; checkCache(newSize, oldSize) && (_initialized && _heightAutoCache && newSize.h > 0 || _widthAutoCache && newSize.w > 0 || _initialized && !_heightAutoCache && newSize.h === 0 || !_widthAutoCache && newSize.w === 0) && update(), oldSize = newSize;
										})), _sizeAutoObserverAdded = !0, _cssCalc !== null && _sizeAutoObserverElement.css(_strHeight, _cssCalc + '(100% + 1px)');
									}
								} else {
									_sizeAutoObserverAdded && _sizeAutoObserverElement.hide(), _contentGlueElement && _contentGlueElement.hide();
								}
							}

							force && (_sizeObserverElement.find('*').trigger(_strScroll), _sizeAutoObserverAdded && _sizeAutoObserverElement.find('*').trigger(_strScroll)), displayIsHidden = displayIsHidden === undefined ? _hostElement.is(':hidden') : displayIsHidden; let sizeAutoObserverElementBCRect; let textareaAutoWrapping = Boolean(_isTextarea) && _targetElement.attr('wrap') !== 'off'; let textareaAutoWrappingChanged = checkCacheAutoForce(textareaAutoWrapping, _textareaAutoWrappingCache); let cssDirection = _hostElement.css('direction'); let cssDirectionChanged = checkCacheAutoForce(cssDirection, _cssDirectionCache); let boxSizing = _hostElement.css('box-sizing'); let boxSizingChanged = checkCacheAutoForce(boxSizing, _cssBoxSizingCache); let padding = getTopRightBottomLeftHost(_strPaddingMinus); try {
								sizeAutoObserverElementBCRect = _sizeAutoObserverAdded ? _sizeAutoObserverElementNative[LEXICON.bCR]() : null;
							} catch (ex) {
								return;
							}

							_isBorderBox = boxSizing === 'border-box'; let isRTLLeft = (_isRTL = cssDirection === 'rtl') ? _strLeft : _strRight; let isRTLRight = _isRTL ? _strRight : _strLeft; let widthAutoResizeDetection = !1; let widthAutoObserverDetection = !(!_sizeAutoObserverAdded || _hostElement.css(_strFloat) === 'none') && MATH.round(sizeAutoObserverElementBCRect.right - sizeAutoObserverElementBCRect.left) === 0 && (Boolean(paddingAbsolute) || _hostElementNative[LEXICON.cW] - _paddingX > 0); if (sizeAutoCapable && !widthAutoObserverDetection) {
								let tmpCurrHostWidth = _hostElementNative[LEXICON.oW]; let tmpCurrContentGlueWidth = _contentGlueElement.css(_strWidth); _contentGlueElement.css(_strWidth, _strAuto); let tmpNewHostWidth = _hostElementNative[LEXICON.oW]; _contentGlueElement.css(_strWidth, tmpCurrContentGlueWidth), (widthAutoResizeDetection = tmpCurrHostWidth !== tmpNewHostWidth) || (_contentGlueElement.css(_strWidth, tmpCurrHostWidth + 1), tmpNewHostWidth = _hostElementNative[LEXICON.oW], _contentGlueElement.css(_strWidth, tmpCurrContentGlueWidth), widthAutoResizeDetection = tmpCurrHostWidth !== tmpNewHostWidth);
							}

							let widthAuto = (widthAutoObserverDetection || widthAutoResizeDetection) && sizeAutoCapable && !displayIsHidden; let widthAutoChanged = checkCacheAutoForce(widthAuto, _widthAutoCache); let wasWidthAuto = !widthAuto && _widthAutoCache; let heightAuto = !(!_sizeAutoObserverAdded || !sizeAutoCapable || displayIsHidden) && MATH.round(sizeAutoObserverElementBCRect.bottom - sizeAutoObserverElementBCRect.top) === 0; let heightAutoChanged = checkCacheAutoForce(heightAuto, _heightAutoCache); let wasHeightAuto = !heightAuto && _heightAutoCache; let border = getTopRightBottomLeftHost(_strBorderMinus, '-' + _strWidth, !(widthAuto && _isBorderBox || !_isBorderBox), !(heightAuto && _isBorderBox || !_isBorderBox)); let margin = getTopRightBottomLeftHost(_strMarginMinus); let contentElementCSS = {}; let contentGlueElementCSS = {}; let getHostSize = function () {
								return {w: _hostElementNative[LEXICON.cW], h: _hostElementNative[LEXICON.cH]};
							};

							let getViewportSize = function () {
								return {w: _paddingElementNative[LEXICON.oW] + MATH.max(0, _contentElementNative[LEXICON.cW] - _contentElementNative[LEXICON.sW]), h: _paddingElementNative[LEXICON.oH] + MATH.max(0, _contentElementNative[LEXICON.cH] - _contentElementNative[LEXICON.sH])};
							};

							let paddingAbsoluteX = _paddingX = padding.l + padding.r; let paddingAbsoluteY = _paddingY = padding.t + padding.b; if (paddingAbsoluteX *= paddingAbsolute ? 1 : 0, paddingAbsoluteY *= paddingAbsolute ? 1 : 0, padding.c = checkCacheAutoForce(padding, _cssPaddingCache), _borderX = border.l + border.r, _borderY = border.t + border.b, border.c = checkCacheAutoForce(border, _cssBorderCache), _marginX = margin.l + margin.r, _marginY = margin.t + margin.b, margin.c = checkCacheAutoForce(margin, _cssMarginCache), _textareaAutoWrappingCache = textareaAutoWrapping, _cssDirectionCache = cssDirection, _cssBoxSizingCache = boxSizing, _widthAutoCache = widthAuto, _heightAutoCache = heightAuto, _cssPaddingCache = padding, _cssBorderCache = border, _cssMarginCache = margin, cssDirectionChanged && _sizeAutoObserverAdded && _sizeAutoObserverElement.css(_strFloat, isRTLRight), padding.c || cssDirectionChanged || paddingAbsoluteChanged || widthAutoChanged || heightAutoChanged || boxSizingChanged || sizeAutoCapableChanged) {
								var paddingElementCSS = {}; let textareaCSS = {}; let paddingValues = [padding.t, padding.r, padding.b, padding.l]; setTopRightBottomLeft(contentGlueElementCSS, _strMarginMinus, [-padding.t, -padding.r, -padding.b, -padding.l]), paddingAbsolute ? (setTopRightBottomLeft(paddingElementCSS, _strEmpty, paddingValues), setTopRightBottomLeft(_isTextarea ? textareaCSS : contentElementCSS, _strPaddingMinus)) : (setTopRightBottomLeft(paddingElementCSS, _strEmpty), setTopRightBottomLeft(_isTextarea ? textareaCSS : contentElementCSS, _strPaddingMinus, paddingValues)), _paddingElement.css(paddingElementCSS), _targetElement.css(textareaCSS);
							}

							_viewportSize = getViewportSize(); let textareaSize = Boolean(_isTextarea) && textareaUpdate(); let textareaSizeChanged = _isTextarea && checkCacheAutoForce(textareaSize, _textareaSizeCache); let textareaDynOrigSize = _isTextarea && textareaSize ? {w: textareaDynWidth ? textareaSize._dynamicWidth : textareaSize._originalWidth, h: textareaDynHeight ? textareaSize._dynamicHeight : textareaSize._originalHeight} : {}; if (_textareaSizeCache = textareaSize, heightAuto && (heightAutoChanged || paddingAbsoluteChanged || boxSizingChanged || padding.c || border.c) ? contentElementCSS[_strHeight] = _strAuto : (heightAutoChanged || paddingAbsoluteChanged) && (contentElementCSS[_strHeight] = _strHundredPercent), widthAuto && (widthAutoChanged || paddingAbsoluteChanged || boxSizingChanged || padding.c || border.c || cssDirectionChanged) ? (contentElementCSS[_strWidth] = _strAuto, contentGlueElementCSS[_strMaxMinus + _strWidth] = _strHundredPercent) : (widthAutoChanged || paddingAbsoluteChanged) && (contentElementCSS[_strWidth] = _strHundredPercent, contentElementCSS[_strFloat] = _strEmpty, contentGlueElementCSS[_strMaxMinus + _strWidth] = _strEmpty), widthAuto ? (contentGlueElementCSS[_strWidth] = _strAuto, contentElementCSS[_strWidth] = VENDORS._cssPropertyValue(_strWidth, 'max-content intrinsic') || _strAuto, contentElementCSS[_strFloat] = isRTLRight) : contentGlueElementCSS[_strWidth] = _strEmpty, contentGlueElementCSS[_strHeight] = heightAuto ? textareaDynOrigSize.h || _contentElementNative[LEXICON.cH] : _strEmpty, sizeAutoCapable && _contentGlueElement.css(contentGlueElementCSS), _contentElement.css(contentElementCSS), contentElementCSS = {}, contentGlueElementCSS = {}, hostSizeChanged || contentSizeChanged || textareaSizeChanged || cssDirectionChanged || boxSizingChanged || paddingAbsoluteChanged || widthAutoChanged || widthAuto || heightAutoChanged || heightAuto || ignoreOverlayScrollbarHidingChanged || overflowBehaviorChanged || clipAlwaysChanged || resizeChanged || scrollbarsVisibilityChanged || scrollbarsAutoHideChanged || scrollbarsDragScrollingChanged || scrollbarsClickScrollingChanged || textareaDynWidthChanged || textareaDynHeightChanged || textareaAutoWrappingChanged) {
								let strOverflow = 'overflow'; let strOverflowX = strOverflow + '-x'; let strOverflowY = strOverflow + '-y'; let strHidden = 'hidden'; let strVisible = 'visible'; if (!_nativeScrollbarStyling) {
									var viewportElementResetCSS = {}; var resetXTmp = _hasOverflowCache.y && _hideOverflowCache.ys && !ignoreOverlayScrollbarHiding ? _nativeScrollbarIsOverlaid.y ? _viewportElement.css(isRTLLeft) : -_nativeScrollbarSize.y : 0; var resetBottomTmp = _hasOverflowCache.x && _hideOverflowCache.xs && !ignoreOverlayScrollbarHiding ? _nativeScrollbarIsOverlaid.x ? _viewportElement.css(_strBottom) : -_nativeScrollbarSize.x : 0; setTopRightBottomLeft(viewportElementResetCSS, _strEmpty), _viewportElement.css(viewportElementResetCSS);
								}

								let contentMeasureElement = getContentMeasureElement(); let contentSize = {w: textareaDynOrigSize.w || contentMeasureElement[LEXICON.cW], h: textareaDynOrigSize.h || contentMeasureElement[LEXICON.cH]}; let scrollSize = {w: contentMeasureElement[LEXICON.sW], h: contentMeasureElement[LEXICON.sH]}; _nativeScrollbarStyling || (viewportElementResetCSS[_strBottom] = wasHeightAuto ? _strEmpty : resetBottomTmp, viewportElementResetCSS[isRTLLeft] = wasWidthAuto ? _strEmpty : resetXTmp, _viewportElement.css(viewportElementResetCSS)), _viewportSize = getViewportSize(); let hostSize = getHostSize(); let hostAbsoluteRectSize = {w: hostSize.w - _marginX - _borderX - (_isBorderBox ? 0 : _paddingX), h: hostSize.h - _marginY - _borderY - (_isBorderBox ? 0 : _paddingY)}; let contentGlueSize = {w: MATH.max((widthAuto ? contentSize.w : scrollSize.w) + paddingAbsoluteX, hostAbsoluteRectSize.w), h: MATH.max((heightAuto ? contentSize.h : scrollSize.h) + paddingAbsoluteY, hostAbsoluteRectSize.h)}; if (contentGlueSize.c = checkCacheAutoForce(contentGlueSize, _contentGlueSizeCache), _contentGlueSizeCache = contentGlueSize, sizeAutoCapable) {
									(contentGlueSize.c || heightAuto || widthAuto) && (contentGlueElementCSS[_strWidth] = contentGlueSize.w, contentGlueElementCSS[_strHeight] = contentGlueSize.h, _isTextarea || (contentSize = {w: contentMeasureElement[LEXICON.cW], h: contentMeasureElement[LEXICON.cH]})); let textareaCoverCSS = {}; let setContentGlueElementCSSfunction = function (horizontal) {
										let scrollbarVars = getScrollbarVars(horizontal); let wh = scrollbarVars._w_h; let strWH = scrollbarVars._width_height; let autoSize = horizontal ? widthAuto : heightAuto; let borderSize = horizontal ? _borderX : _borderY; let paddingSize = horizontal ? _paddingX : _paddingY; let marginSize = horizontal ? _marginX : _marginY; let viewportSize = _viewportSize[wh] - borderSize - marginSize - (_isBorderBox ? 0 : paddingSize); (!autoSize || !autoSize && border.c) && (contentGlueElementCSS[strWH] = hostAbsoluteRectSize[wh] - 1), !(autoSize && contentSize[wh] < viewportSize) || horizontal && _isTextarea && textareaAutoWrapping || (_isTextarea && (textareaCoverCSS[strWH] = parseToZeroOrNumber(_textareaCoverElement.css(strWH)) - 1), contentGlueElementCSS[strWH] -= 1), contentSize[wh] > 0 && (contentGlueElementCSS[strWH] = MATH.max(1, contentGlueElementCSS[strWH]));
									};

									setContentGlueElementCSSfunction(!0), setContentGlueElementCSSfunction(!1), _isTextarea && _textareaCoverElement.css(textareaCoverCSS), _contentGlueElement.css(contentGlueElementCSS);
								}

								widthAuto && (contentElementCSS[_strWidth] = _strHundredPercent), !widthAuto || _isBorderBox || _mutationObserversConnected || (contentElementCSS[_strFloat] = 'none'), _contentElement.css(contentElementCSS), contentElementCSS = {}; let contentScrollSize = {w: contentMeasureElement[LEXICON.sW], h: contentMeasureElement[LEXICON.sH]}; contentScrollSize.c = contentSizeChanged = checkCacheAutoForce(contentScrollSize, _contentScrollSizeCache), _contentScrollSizeCache = contentScrollSize, _viewportSize = getViewportSize(), hostSizeChanged = checkCacheAutoForce(hostSize = getHostSize(), _hostSizeCache), _hostSizeCache = hostSize; let hideOverflowForceTextarea = _isTextarea && (_viewportSize.w === 0 || _viewportSize.h === 0); let previousOverflowAmount = _overflowAmountCache; let overflowBehaviorIsVS = {}; let overflowBehaviorIsVH = {}; let overflowBehaviorIsS = {}; let overflowAmount = {}; let hasOverflow = {}; let hideOverflow = {}; let canScroll = {}; let viewportRect = _paddingElementNative[LEXICON.bCR](); let setOverflowVariables = function (horizontal) {
									let scrollbarVars = getScrollbarVars(horizontal); let xyI = getScrollbarVars(!horizontal)._x_y; let xy = scrollbarVars._x_y; let wh = scrollbarVars._w_h; let widthHeight = scrollbarVars._width_height; let scrollMax = _strScroll + scrollbarVars._Left_Top + 'Max'; let fractionalOverflowAmount = viewportRect[widthHeight] ? MATH.abs(viewportRect[widthHeight] - _viewportSize[wh]) : 0; let checkFractionalOverflowAmount = previousOverflowAmount && previousOverflowAmount[xy] > 0 && _viewportElementNative[scrollMax] === 0; overflowBehaviorIsVS[xy] = overflowBehavior[xy] === 'v-s', overflowBehaviorIsVH[xy] = overflowBehavior[xy] === 'v-h', overflowBehaviorIsS[xy] = overflowBehavior[xy] === 's', overflowAmount[xy] = MATH.max(0, MATH.round(100 * (contentScrollSize[wh] - _viewportSize[wh])) / 100), overflowAmount[xy] *= hideOverflowForceTextarea || checkFractionalOverflowAmount && fractionalOverflowAmount > 0 && fractionalOverflowAmount < 1 ? 0 : 1, hasOverflow[xy] = overflowAmount[xy] > 0, hideOverflow[xy] = overflowBehaviorIsVS[xy] || overflowBehaviorIsVH[xy] ? hasOverflow[xyI] && !overflowBehaviorIsVS[xyI] && !overflowBehaviorIsVH[xyI] : hasOverflow[xy], hideOverflow[xy + 's'] = Boolean(hideOverflow[xy]) && (overflowBehaviorIsS[xy] || overflowBehaviorIsVS[xy]), canScroll[xy] = hasOverflow[xy] && hideOverflow[xy + 's'];
								};

								if (setOverflowVariables(!0), setOverflowVariables(!1), overflowAmount.c = checkCacheAutoForce(overflowAmount, _overflowAmountCache), _overflowAmountCache = overflowAmount, hasOverflow.c = checkCacheAutoForce(hasOverflow, _hasOverflowCache), _hasOverflowCache = hasOverflow, hideOverflow.c = checkCacheAutoForce(hideOverflow, _hideOverflowCache), _hideOverflowCache = hideOverflow, _nativeScrollbarIsOverlaid.x || _nativeScrollbarIsOverlaid.y) {
									let setContentElementCSS; let borderDesign = 'px solid transparent'; let contentArrangeElementCSS = {}; let arrangeContent = {}; let arrangeChanged = force; (hasOverflow.x || hasOverflow.y) && (arrangeContent.w = _nativeScrollbarIsOverlaid.y && hasOverflow.y ? contentScrollSize.w + _overlayScrollbarDummySize.y : _strEmpty, arrangeContent.h = _nativeScrollbarIsOverlaid.x && hasOverflow.x ? contentScrollSize.h + _overlayScrollbarDummySize.x : _strEmpty, arrangeChanged = checkCacheAutoForce(arrangeContent, _arrangeContentSizeCache), _arrangeContentSizeCache = arrangeContent), (hasOverflow.c || hideOverflow.c || contentScrollSize.c || cssDirectionChanged || widthAutoChanged || heightAutoChanged || widthAuto || heightAuto || ignoreOverlayScrollbarHidingChanged) && (contentElementCSS[_strMarginMinus + isRTLRight] = contentElementCSS[_strBorderMinus + isRTLRight] = _strEmpty, setContentElementCSS = function (horizontal) {
										let scrollbarVars = getScrollbarVars(horizontal); let scrollbarVarsInverted = getScrollbarVars(!horizontal); let xy = scrollbarVars._x_y; let strDirection = horizontal ? _strBottom : isRTLLeft; let invertedAutoSize = horizontal ? heightAuto : widthAuto; _nativeScrollbarIsOverlaid[xy] && hasOverflow[xy] && hideOverflow[xy + 's'] ? (contentElementCSS[_strMarginMinus + strDirection] = invertedAutoSize ? ignoreOverlayScrollbarHiding ? _strEmpty : _overlayScrollbarDummySize[xy] : _strEmpty, contentElementCSS[_strBorderMinus + strDirection] = horizontal && invertedAutoSize || ignoreOverlayScrollbarHiding ? _strEmpty : _overlayScrollbarDummySize[xy] + borderDesign) : (arrangeContent[scrollbarVarsInverted._w_h] = contentElementCSS[_strMarginMinus + strDirection] = contentElementCSS[_strBorderMinus + strDirection] = _strEmpty, arrangeChanged = !0);
									}, _nativeScrollbarStyling ? addRemoveClass(_viewportElement, _classNameViewportNativeScrollbarsInvisible, !ignoreOverlayScrollbarHiding) : (setContentElementCSS(!0), setContentElementCSS(!1))), ignoreOverlayScrollbarHiding && (arrangeContent.w = arrangeContent.h = _strEmpty, arrangeChanged = !0), arrangeChanged && !_nativeScrollbarStyling && (contentArrangeElementCSS[_strWidth] = hideOverflow.y ? arrangeContent.w : _strEmpty, contentArrangeElementCSS[_strHeight] = hideOverflow.x ? arrangeContent.h : _strEmpty, _contentArrangeElement || (_contentArrangeElement = FRAMEWORK(generateDiv(_classNameContentArrangeElement)), _viewportElement.prepend(_contentArrangeElement)), _contentArrangeElement.css(contentArrangeElementCSS)), _contentElement.css(contentElementCSS);
								}

								let setViewportCSS; let viewportElementCSS = {}; if (paddingElementCSS = {}, (hostSizeChanged || hasOverflow.c || hideOverflow.c || contentScrollSize.c || overflowBehaviorChanged || boxSizingChanged || ignoreOverlayScrollbarHidingChanged || cssDirectionChanged || clipAlwaysChanged || heightAutoChanged) && (viewportElementCSS[isRTLRight] = _strEmpty, (setViewportCSS = function (horizontal) {
									let scrollbarVars = getScrollbarVars(horizontal); let scrollbarVarsInverted = getScrollbarVars(!horizontal); let xy = scrollbarVars._x_y; let XY = scrollbarVars._X_Y; let strDirection = horizontal ? _strBottom : isRTLLeft; let reset = function () {
										viewportElementCSS[strDirection] = _strEmpty, _contentBorderSize[scrollbarVarsInverted._w_h] = 0;
									};

									hasOverflow[xy] && hideOverflow[xy + 's'] ? (viewportElementCSS[strOverflow + XY] = _strScroll, ignoreOverlayScrollbarHiding || _nativeScrollbarStyling ? reset() : (viewportElementCSS[strDirection] = -(_nativeScrollbarIsOverlaid[xy] ? _overlayScrollbarDummySize[xy] : _nativeScrollbarSize[xy]), _contentBorderSize[scrollbarVarsInverted._w_h] = _nativeScrollbarIsOverlaid[xy] ? _overlayScrollbarDummySize[scrollbarVarsInverted._x_y] : 0)) : (viewportElementCSS[strOverflow + XY] = _strEmpty, reset());
								})(!0), setViewportCSS(!1), !_nativeScrollbarStyling && (_viewportSize.h < _nativeScrollbarMinSize.x || _viewportSize.w < _nativeScrollbarMinSize.y) && (hasOverflow.x && hideOverflow.x && !_nativeScrollbarIsOverlaid.x || hasOverflow.y && hideOverflow.y && !_nativeScrollbarIsOverlaid.y) ? (viewportElementCSS[_strPaddingMinus + _strTop] = _nativeScrollbarMinSize.x, viewportElementCSS[_strMarginMinus + _strTop] = -_nativeScrollbarMinSize.x, viewportElementCSS[_strPaddingMinus + isRTLRight] = _nativeScrollbarMinSize.y, viewportElementCSS[_strMarginMinus + isRTLRight] = -_nativeScrollbarMinSize.y) : viewportElementCSS[_strPaddingMinus + _strTop] = viewportElementCSS[_strMarginMinus + _strTop] = viewportElementCSS[_strPaddingMinus + isRTLRight] = viewportElementCSS[_strMarginMinus + isRTLRight] = _strEmpty, viewportElementCSS[_strPaddingMinus + isRTLLeft] = viewportElementCSS[_strMarginMinus + isRTLLeft] = _strEmpty, hasOverflow.x && hideOverflow.x || hasOverflow.y && hideOverflow.y || hideOverflowForceTextarea ? _isTextarea && hideOverflowForceTextarea && (paddingElementCSS[strOverflowX] = paddingElementCSS[strOverflowY] = strHidden) : (!clipAlways || overflowBehaviorIsVH.x || overflowBehaviorIsVS.x || overflowBehaviorIsVH.y || overflowBehaviorIsVS.y) && (_isTextarea && (paddingElementCSS[strOverflowX] = paddingElementCSS[strOverflowY] = _strEmpty), viewportElementCSS[strOverflowX] = viewportElementCSS[strOverflowY] = strVisible), _paddingElement.css(paddingElementCSS), _viewportElement.css(viewportElementCSS), viewportElementCSS = {}, (hasOverflow.c || boxSizingChanged || widthAutoChanged || heightAutoChanged) && (!_nativeScrollbarIsOverlaid.x || !_nativeScrollbarIsOverlaid.y))) {
									let elementStyle = _contentElementNative[LEXICON.s]; elementStyle.webkitTransform = 'scale(1)', elementStyle.display = 'run-in', _contentElementNative[LEXICON.oH], elementStyle.display = _strEmpty, elementStyle.webkitTransform = _strEmpty;
								}

								if (contentElementCSS = {}, cssDirectionChanged || widthAutoChanged || heightAutoChanged) {
									if (_isRTL && widthAuto) {
										let floatTmp = _contentElement.css(_strFloat); let posLeftWithoutFloat = MATH.round(_contentElement.css(_strFloat, _strEmpty).css(_strLeft, _strEmpty).position().left); _contentElement.css(_strFloat, floatTmp), posLeftWithoutFloat !== MATH.round(_contentElement.position().left) && (contentElementCSS[_strLeft] = posLeftWithoutFloat);
									} else {
										contentElementCSS[_strLeft] = _strEmpty;
									}
								}

								if (_contentElement.css(contentElementCSS), _isTextarea && contentSizeChanged) {
									let textareaInfo = getTextareaInfo(); if (textareaInfo) {
										let textareaRowsChanged = _textareaInfoCache === undefined || textareaInfo._rows !== _textareaInfoCache._rows; let cursorRow = textareaInfo._cursorRow; let cursorCol = textareaInfo._cursorColumn; let widestRow = textareaInfo._widestRow; let lastRow = textareaInfo._rows; let lastCol = textareaInfo._columns; let cursorIsLastPosition = textareaInfo._cursorPosition >= textareaInfo._cursorMax && _textareaHasFocus; let textareaScrollAmount = {x: textareaAutoWrapping || cursorCol !== lastCol || cursorRow !== widestRow ? -1 : _overflowAmountCache.x, y: (textareaAutoWrapping ? cursorIsLastPosition || textareaRowsChanged && previousOverflowAmount && currScroll.y === previousOverflowAmount.y : (cursorIsLastPosition || textareaRowsChanged) && cursorRow === lastRow) ? _overflowAmountCache.y : -1}; currScroll.x = textareaScrollAmount.x > -1 ? _isRTL && _normalizeRTLCache && _rtlScrollBehavior.i ? 0 : textareaScrollAmount.x : currScroll.x, currScroll.y = textareaScrollAmount.y > -1 ? textareaScrollAmount.y : currScroll.y;
									}

									_textareaInfoCache = textareaInfo;
								}

								_isRTL && _rtlScrollBehavior.i && _nativeScrollbarIsOverlaid.y && hasOverflow.x && _normalizeRTLCache && (currScroll.x += _contentBorderSize.w || 0), widthAuto && _hostElement[_strScrollLeft](0), heightAuto && _hostElement[_strScrollTop](0), _viewportElement[_strScrollLeft](currScroll.x)[_strScrollTop](currScroll.y); let scrollbarsVisibilityVisible = scrollbarsVisibility === 'v'; let scrollbarsVisibilityHidden = scrollbarsVisibility === 'h'; let scrollbarsVisibilityAuto = scrollbarsVisibility === 'a'; let refreshScrollbarsVisibility = function (showX, showY) {
									showY = showY === undefined ? showX : showY, refreshScrollbarAppearance(!0, showX, canScroll.x), refreshScrollbarAppearance(!1, showY, canScroll.y);
								};

								addRemoveClass(_hostElement, _classNameHostOverflow, hideOverflow.x || hideOverflow.y), addRemoveClass(_hostElement, _classNameHostOverflowX, hideOverflow.x), addRemoveClass(_hostElement, _classNameHostOverflowY, hideOverflow.y), cssDirectionChanged && !_isBody && addRemoveClass(_hostElement, _classNameHostRTL, _isRTL), _isBody && addClass(_hostElement, _classNameHostResizeDisabled), resizeChanged && (addRemoveClass(_hostElement, _classNameHostResizeDisabled, _resizeNone), addRemoveClass(_scrollbarCornerElement, _classNameScrollbarCornerResize, !_resizeNone), addRemoveClass(_scrollbarCornerElement, _classNameScrollbarCornerResizeB, _resizeBoth), addRemoveClass(_scrollbarCornerElement, _classNameScrollbarCornerResizeH, _resizeHorizontal), addRemoveClass(_scrollbarCornerElement, _classNameScrollbarCornerResizeV, _resizeVertical)), (scrollbarsVisibilityChanged || overflowBehaviorChanged || hideOverflow.c || hasOverflow.c || ignoreOverlayScrollbarHidingChanged) && (ignoreOverlayScrollbarHiding ? ignoreOverlayScrollbarHidingChanged && (removeClass(_hostElement, _classNameHostScrolling), ignoreOverlayScrollbarHiding && refreshScrollbarsVisibility(!1)) : scrollbarsVisibilityAuto ? refreshScrollbarsVisibility(canScroll.x, canScroll.y) : scrollbarsVisibilityVisible ? refreshScrollbarsVisibility(!0) : scrollbarsVisibilityHidden && refreshScrollbarsVisibility(!1)), (scrollbarsAutoHideChanged || ignoreOverlayScrollbarHidingChanged) && (setupHostMouseTouchEvents(!_scrollbarsAutoHideLeave && !_scrollbarsAutoHideMove), refreshScrollbarsAutoHide(_scrollbarsAutoHideNever, !_scrollbarsAutoHideNever)), (hostSizeChanged || overflowAmount.c || heightAutoChanged || widthAutoChanged || resizeChanged || boxSizingChanged || paddingAbsoluteChanged || ignoreOverlayScrollbarHidingChanged || cssDirectionChanged) && (refreshScrollbarHandleLength(!0), refreshScrollbarHandleOffset(!0), refreshScrollbarHandleLength(!1), refreshScrollbarHandleOffset(!1)), scrollbarsClickScrollingChanged && refreshScrollbarsInteractive(!0, scrollbarsClickScrolling), scrollbarsDragScrollingChanged && refreshScrollbarsInteractive(!1, scrollbarsDragScrolling), dispatchCallback('onDirectionChanged', {isRTL: _isRTL, dir: cssDirection}, cssDirectionChanged), dispatchCallback('onHostSizeChanged', {width: _hostSizeCache.w, height: _hostSizeCache.h}, hostSizeChanged), dispatchCallback('onContentSizeChanged', {width: _contentScrollSizeCache.w, height: _contentScrollSizeCache.h}, contentSizeChanged), dispatchCallback('onOverflowChanged', {x: hasOverflow.x, y: hasOverflow.y, xScrollable: hideOverflow.xs, yScrollable: hideOverflow.ys, clipped: hideOverflow.x || hideOverflow.y}, hasOverflow.c || hideOverflow.c), dispatchCallback('onOverflowAmountChanged', {x: overflowAmount.x, y: overflowAmount.y}, overflowAmount.c);
							}

							_isBody && _bodyMinSizeCache && (_hasOverflowCache.c || _bodyMinSizeCache.c) && (_bodyMinSizeCache.f || bodyMinSizeChanged(), _nativeScrollbarIsOverlaid.y && _hasOverflowCache.x && _contentElement.css(_strMinMinus + _strWidth, _bodyMinSizeCache.w + _overlayScrollbarDummySize.y), _nativeScrollbarIsOverlaid.x && _hasOverflowCache.y && _contentElement.css(_strMinMinus + _strHeight, _bodyMinSizeCache.h + _overlayScrollbarDummySize.x), _bodyMinSizeCache.c = !1), _initialized && changedOptions.updateOnLoad && updateElementsOnLoad(), dispatchCallback('onUpdated', {forced: force});
						}
					}

					function updateElementsOnLoad() {
						_isTextarea || eachUpdateOnLoad(((i, updateOnLoadSelector) => {
							_contentElement.find(updateOnLoadSelector).each(((i, el) => {
								COMPATIBILITY.inA(el, _updateOnLoadElms) < 0 && (_updateOnLoadElms.push(el), FRAMEWORK(el).off(_updateOnLoadEventName, updateOnLoadCallback).on(_updateOnLoadEventName, updateOnLoadCallback));
							}));
						}));
					}

					function setOptions(newOptions) {
						let validatedOpts = _pluginsOptions._validate(newOptions, _pluginsOptions._template, !0, _currentOptions); return _currentOptions = extendDeep({}, _currentOptions, validatedOpts._default), _currentPreparedOptions = extendDeep({}, _currentPreparedOptions, validatedOpts._prepared), validatedOpts._prepared;
					}

					function setupStructureDOM(destroy) {
						let strParent = 'parent'; let classNameResizeObserverHost = 'os-resize-observer-host'; let classNameTextareaElementFull = _classNameTextareaElement + _strSpace + _classNameTextInherit; let textareaClass = _isTextarea ? _strSpace + _classNameTextInherit : _strEmpty; let adoptAttrs = _currentPreparedOptions.textarea.inheritedAttrs; let adoptAttrsMap = {}; let applyAdoptedAttrs = function () {
							let applyAdoptedAttrsElm = destroy ? _targetElement : _hostElement; each(adoptAttrsMap, ((key, value) => {
								type(value) == TYPES.s && (key == LEXICON.c ? applyAdoptedAttrsElm.addClass(value) : applyAdoptedAttrsElm.attr(key, value));
							}));
						};

						let hostElementClassNames = [_classNameHostElement, _classNameHostElementForeign, _classNameHostTextareaElement, _classNameHostResizeDisabled, _classNameHostRTL, _classNameHostScrollbarHorizontalHidden, _classNameHostScrollbarVerticalHidden, _classNameHostTransition, _classNameHostScrolling, _classNameHostOverflow, _classNameHostOverflowX, _classNameHostOverflowY, _classNameThemeNone, _classNameTextareaElement, _classNameTextInherit, _classNameCache].join(_strSpace); let hostElementCSS = {}; _hostElement = _hostElement || (_isTextarea ? _domExists ? _targetElement[strParent]()[strParent]()[strParent]()[strParent]() : FRAMEWORK(generateDiv(_classNameHostTextareaElement)) : _targetElement), _contentElement = _contentElement || selectOrGenerateDivByClass(_classNameContentElement + textareaClass), _viewportElement = _viewportElement || selectOrGenerateDivByClass(_classNameViewportElement + textareaClass), _paddingElement = _paddingElement || selectOrGenerateDivByClass(_classNamePaddingElement + textareaClass), _sizeObserverElement = _sizeObserverElement || selectOrGenerateDivByClass(classNameResizeObserverHost), _textareaCoverElement = _textareaCoverElement || (_isTextarea ? selectOrGenerateDivByClass(_classNameTextareaCoverElement) : undefined), _domExists && addClass(_hostElement, _classNameHostElementForeign), destroy && removeClass(_hostElement, hostElementClassNames), adoptAttrs = type(adoptAttrs) == TYPES.s ? adoptAttrs.split(_strSpace) : adoptAttrs, COMPATIBILITY.isA(adoptAttrs) && _isTextarea && each(adoptAttrs, ((i, v) => {
							type(v) == TYPES.s && (adoptAttrsMap[v] = destroy ? _hostElement.attr(v) : _targetElement.attr(v));
						})), destroy ? (_domExists && _initialized ? (_sizeObserverElement.children().remove(), each([_paddingElement, _viewportElement, _contentElement, _textareaCoverElement], ((i, elm) => {
							elm && removeClass(elm.removeAttr(LEXICON.s), _classNamesDynamicDestroy);
						})), addClass(_hostElement, _isTextarea ? _classNameHostTextareaElement : _classNameHostElement)) : (remove(_sizeObserverElement), _contentElement.contents().unwrap().unwrap().unwrap(), _isTextarea && (_targetElement.unwrap(), remove(_hostElement), remove(_textareaCoverElement), applyAdoptedAttrs())), _isTextarea && _targetElement.removeAttr(LEXICON.s), _isBody && removeClass(_htmlElement, _classNameHTMLElement)) : (_isTextarea && (_currentPreparedOptions.sizeAutoCapable || (hostElementCSS[_strWidth] = _targetElement.css(_strWidth), hostElementCSS[_strHeight] = _targetElement.css(_strHeight)), _domExists || _targetElement.addClass(_classNameTextInherit).wrap(_hostElement), _hostElement = _targetElement[strParent]().css(hostElementCSS)), _domExists || (addClass(_targetElement, _isTextarea ? classNameTextareaElementFull : _classNameHostElement), _hostElement.wrapInner(_contentElement).wrapInner(_viewportElement).wrapInner(_paddingElement).prepend(_sizeObserverElement), _contentElement = findFirst(_hostElement, _strDot + _classNameContentElement), _viewportElement = findFirst(_hostElement, _strDot + _classNameViewportElement), _paddingElement = findFirst(_hostElement, _strDot + _classNamePaddingElement), _isTextarea && (_contentElement.prepend(_textareaCoverElement), applyAdoptedAttrs())), _nativeScrollbarStyling && addClass(_viewportElement, _classNameViewportNativeScrollbarsInvisible), _nativeScrollbarIsOverlaid.x && _nativeScrollbarIsOverlaid.y && addClass(_viewportElement, _classNameViewportNativeScrollbarsOverlaid), _isBody && addClass(_htmlElement, _classNameHTMLElement), _sizeObserverElementNative = _sizeObserverElement[0], _hostElementNative = _hostElement[0], _paddingElementNative = _paddingElement[0], _viewportElementNative = _viewportElement[0], _contentElementNative = _contentElement[0], updateViewportAttrsFromTarget());
					}

					function setupStructureEvents() {
						let textareaUpdateIntervalID; let scrollStopTimeoutId; let textareaKeyDownRestrictedKeyCodes = [112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 123, 33, 34, 37, 38, 39, 40, 16, 17, 18, 19, 20, 144]; let textareaKeyDownKeyCodesList = []; let scrollStopDelay = 175; let strFocus = 'focus'; function updateTextarea(doClearInterval) {
							textareaUpdate(), _base.update(_strAuto), doClearInterval && _autoUpdateRecommended && clearInterval(textareaUpdateIntervalID);
						}

						function textareaOnScroll(event) {
							return _targetElement[_strScrollLeft](_rtlScrollBehavior.i && _normalizeRTLCache ? 9999999 : 0), _targetElement[_strScrollTop](0), COMPATIBILITY.prvD(event), COMPATIBILITY.stpP(event), !1;
						}

						function textareaOnDrop(event) {
							setTimeout((() => {
								_destroyed || updateTextarea();
							}), 50);
						}

						function textareaOnFocus() {
							_textareaHasFocus = !0, addClass(_hostElement, strFocus);
						}

						function textareaOnFocusout() {
							_textareaHasFocus = !1, textareaKeyDownKeyCodesList = [], removeClass(_hostElement, strFocus), updateTextarea(!0);
						}

						function textareaOnKeyDown(event) {
							let {keyCode} = event; inArray(keyCode, textareaKeyDownRestrictedKeyCodes) < 0 && (textareaKeyDownKeyCodesList[LEXICON.l] || (updateTextarea(), textareaUpdateIntervalID = setInterval(updateTextarea, 1e3 / 60)), inArray(keyCode, textareaKeyDownKeyCodesList) < 0 && textareaKeyDownKeyCodesList.push(keyCode));
						}

						function textareaOnKeyUp(event) {
							let {keyCode} = event; let
								index = inArray(keyCode, textareaKeyDownKeyCodesList); inArray(keyCode, textareaKeyDownRestrictedKeyCodes) < 0 && (index > -1 && textareaKeyDownKeyCodesList.splice(index, 1), textareaKeyDownKeyCodesList[LEXICON.l] || updateTextarea(!0));
						}

						function contentOnTransitionEnd(event) {
							!0 !== _autoUpdateCache && isSizeAffectingCSSProperty((event = event.originalEvent || event).propertyName) && _base.update(_strAuto);
						}

						function viewportOnScroll(event) {
							_sleeping || (scrollStopTimeoutId !== undefined ? clearTimeout(scrollStopTimeoutId) : ((_scrollbarsAutoHideScroll || _scrollbarsAutoHideMove) && refreshScrollbarsAutoHide(!0), nativeOverlayScrollbarsAreActive() || addClass(_hostElement, _classNameHostScrolling), dispatchCallback('onScrollStart', event)), _scrollbarsHandlesDefineScrollPos || (refreshScrollbarHandleOffset(!0), refreshScrollbarHandleOffset(!1)), dispatchCallback('onScroll', event), scrollStopTimeoutId = setTimeout((() => {
								_destroyed || (clearTimeout(scrollStopTimeoutId), scrollStopTimeoutId = undefined, (_scrollbarsAutoHideScroll || _scrollbarsAutoHideMove) && refreshScrollbarsAutoHide(!1), nativeOverlayScrollbarsAreActive() || removeClass(_hostElement, _classNameHostScrolling), dispatchCallback('onScrollStop', event));
							}), scrollStopDelay));
						}

						_isTextarea ? (_msieVersion > 9 || !_autoUpdateRecommended ? addDestroyEventListener(_targetElement, 'input', updateTextarea) : addDestroyEventListener(_targetElement, [_strKeyDownEvent, _strKeyUpEvent], [textareaOnKeyDown, textareaOnKeyUp]), addDestroyEventListener(_targetElement, [_strScroll, 'drop', strFocus, strFocus + 'out'], [textareaOnScroll, textareaOnDrop, textareaOnFocus, textareaOnFocusout])) : addDestroyEventListener(_contentElement, _strTransitionEndEvent, contentOnTransitionEnd), addDestroyEventListener(_viewportElement, _strScroll, viewportOnScroll, !0);
					}

					function setupScrollbarsDOM(destroy) {
						let horizontalElements; let verticalElements; let selectOrGenerateScrollbarDOM = function (isHorizontal) {
							let scrollbar = selectOrGenerateDivByClass(_classNameScrollbar + _strSpace + (isHorizontal ? _classNameScrollbarHorizontal : _classNameScrollbarVertical), !0); let track = selectOrGenerateDivByClass(_classNameScrollbarTrack, scrollbar); let handle = selectOrGenerateDivByClass(_classNameScrollbarHandle, scrollbar); return _domExists || destroy || (scrollbar.append(track), track.append(handle)), {_scrollbar: scrollbar, _track: track, _handle: handle};
						};

						function resetScrollbarDOM(isHorizontal) {
							let scrollbarVars = getScrollbarVars(isHorizontal); let scrollbar = scrollbarVars._scrollbar; let track = scrollbarVars._track; let handle = scrollbarVars._handle; _domExists && _initialized ? each([scrollbar, track, handle], ((i, elm) => {
								removeClass(elm.removeAttr(LEXICON.s), _classNamesDynamicDestroy);
							})) : remove(scrollbar || selectOrGenerateScrollbarDOM(isHorizontal)._scrollbar);
						}

						destroy ? (resetScrollbarDOM(!0), resetScrollbarDOM()) : (horizontalElements = selectOrGenerateScrollbarDOM(!0), verticalElements = selectOrGenerateScrollbarDOM(), _scrollbarHorizontalElement = horizontalElements._scrollbar, _scrollbarHorizontalTrackElement = horizontalElements._track, _scrollbarHorizontalHandleElement = horizontalElements._handle, _scrollbarVerticalElement = verticalElements._scrollbar, _scrollbarVerticalTrackElement = verticalElements._track, _scrollbarVerticalHandleElement = verticalElements._handle, _domExists || (_paddingElement.after(_scrollbarVerticalElement), _paddingElement.after(_scrollbarHorizontalElement)));
					}

					function setupScrollbarEvents(isHorizontal) {
						let trackTimeout; let mouseDownScroll; let mouseDownOffset; let mouseDownInvertedScale; let scrollbarVars = getScrollbarVars(isHorizontal); let scrollbarVarsInfo = scrollbarVars._info; let insideIFrame = _windowElementNative.top !== _windowElementNative; let xy = scrollbarVars._x_y; let XY = scrollbarVars._X_Y; let scroll = _strScroll + scrollbarVars._Left_Top; let strActive = 'active'; let strSnapHandle = 'snapHandle'; let strClickEvent = 'click'; let scrollDurationFactor = 1; let increaseDecreaseScrollAmountKeyCodes = [16, 17]; function getPointerPosition(event) {
							return _msieVersion && insideIFrame ? event['screen' + XY] : COMPATIBILITY.page(event)[xy];
						}

						function getPreparedScrollbarsOption(name) {
							return _currentPreparedOptions.scrollbars[name];
						}

						function increaseTrackScrollAmount() {
							scrollDurationFactor = 0.5;
						}

						function decreaseTrackScrollAmount() {
							scrollDurationFactor = 1;
						}

						function stopClickEventPropagation(event) {
							COMPATIBILITY.stpP(event);
						}

						function documentKeyDown(event) {
							inArray(event.keyCode, increaseDecreaseScrollAmountKeyCodes) > -1 && increaseTrackScrollAmount();
						}

						function documentKeyUp(event) {
							inArray(event.keyCode, increaseDecreaseScrollAmountKeyCodes) > -1 && decreaseTrackScrollAmount();
						}

						function onMouseTouchDownContinue(event) {
							let isTouchEvent = (event.originalEvent || event).touches !== undefined; return !(_sleeping || _destroyed || nativeOverlayScrollbarsAreActive() || !_scrollbarsDragScrollingCache || isTouchEvent && !getPreparedScrollbarsOption('touchSupport')) && (COMPATIBILITY.mBtn(event) === 1 || isTouchEvent);
						}

						function documentDragMove(event) {
							if (onMouseTouchDownContinue(event)) {
								let trackLength = scrollbarVarsInfo._trackLength; let handleLength = scrollbarVarsInfo._handleLength; let scrollDelta = scrollbarVarsInfo._maxScroll * ((getPointerPosition(event) - mouseDownOffset) * mouseDownInvertedScale / (trackLength - handleLength)); scrollDelta = isFinite(scrollDelta) ? scrollDelta : 0, _isRTL && isHorizontal && !_rtlScrollBehavior.i && (scrollDelta *= -1), _viewportElement[scroll](MATH.round(mouseDownScroll + scrollDelta)), _scrollbarsHandlesDefineScrollPos && refreshScrollbarHandleOffset(isHorizontal, mouseDownScroll + scrollDelta), _supportPassiveEvents || COMPATIBILITY.prvD(event);
							} else {
								documentMouseTouchUp(event);
							}
						}

						function documentMouseTouchUp(event) {
							if (event = event || event.originalEvent, setupResponsiveEventListener(_documentElement, [_strMouseTouchMoveEvent, _strMouseTouchUpEvent, _strKeyDownEvent, _strKeyUpEvent, _strSelectStartEvent], [documentDragMove, documentMouseTouchUp, documentKeyDown, documentKeyUp, documentOnSelectStart], !0), COMPATIBILITY.rAF()((() => {
								setupResponsiveEventListener(_documentElement, strClickEvent, stopClickEventPropagation, !0, {_capture: !0});
							})), _scrollbarsHandlesDefineScrollPos && refreshScrollbarHandleOffset(isHorizontal, !0), _scrollbarsHandlesDefineScrollPos = !1, removeClass(_bodyElement, _classNameDragging), removeClass(scrollbarVars._handle, strActive), removeClass(scrollbarVars._track, strActive), removeClass(scrollbarVars._scrollbar, strActive), mouseDownScroll = undefined, mouseDownOffset = undefined, mouseDownInvertedScale = 1, decreaseTrackScrollAmount(), trackTimeout !== undefined && (_base.scrollStop(), clearTimeout(trackTimeout), trackTimeout = undefined), event) {
								let rect = _hostElementNative[LEXICON.bCR](); event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom || hostOnMouseLeave(), (_scrollbarsAutoHideScroll || _scrollbarsAutoHideMove) && refreshScrollbarsAutoHide(!1);
							}
						}

						function onHandleMouseTouchDown(event) {
							onMouseTouchDownContinue(event) && onHandleMouseTouchDownAction(event);
						}

						function onHandleMouseTouchDownAction(event) {
							mouseDownScroll = _viewportElement[scroll](), mouseDownScroll = isNaN(mouseDownScroll) ? 0 : mouseDownScroll, (_isRTL && isHorizontal && !_rtlScrollBehavior.n || !_isRTL) && (mouseDownScroll = mouseDownScroll < 0 ? 0 : mouseDownScroll), mouseDownInvertedScale = getHostElementInvertedScale()[xy], mouseDownOffset = getPointerPosition(event), _scrollbarsHandlesDefineScrollPos = !getPreparedScrollbarsOption(strSnapHandle), addClass(_bodyElement, _classNameDragging), addClass(scrollbarVars._handle, strActive), addClass(scrollbarVars._scrollbar, strActive), setupResponsiveEventListener(_documentElement, [_strMouseTouchMoveEvent, _strMouseTouchUpEvent, _strSelectStartEvent], [documentDragMove, documentMouseTouchUp, documentOnSelectStart]), COMPATIBILITY.rAF()((() => {
								setupResponsiveEventListener(_documentElement, strClickEvent, stopClickEventPropagation, !1, {_capture: !0});
							})), !_msieVersion && _documentMixed || COMPATIBILITY.prvD(event), COMPATIBILITY.stpP(event);
						}

						function onTrackMouseTouchDown(event) {
							if (onMouseTouchDownContinue(event)) {
								let decreaseScroll; let handleToViewportRatio = scrollbarVars._info._handleLength / Math.round(MATH.min(1, _viewportSize[scrollbarVars._w_h] / _contentScrollSizeCache[scrollbarVars._w_h]) * scrollbarVars._info._trackLength); let scrollDistance = MATH.round(_viewportSize[scrollbarVars._w_h] * handleToViewportRatio); let scrollBaseDuration = 270 * handleToViewportRatio; let scrollFirstIterationDelay = 400 * handleToViewportRatio; let trackOffset = scrollbarVars._track.offset()[scrollbarVars._left_top]; let {ctrlKey} = event; let instantScroll = event.shiftKey; let instantScrollTransition = instantScroll && ctrlKey; let isFirstIteration = !0; let easing = 'linear'; let scrollActionFinsished = function (transition) {
									_scrollbarsHandlesDefineScrollPos && refreshScrollbarHandleOffset(isHorizontal, transition);
								};

								let scrollActionInstantFinished = function () {
									scrollActionFinsished(), onHandleMouseTouchDownAction(event);
								};

								var scrollAction = function () {
									if (!_destroyed) {
										let mouseOffset = (mouseDownOffset - trackOffset) * mouseDownInvertedScale; let handleOffset = scrollbarVarsInfo._handleOffset; let trackLength = scrollbarVarsInfo._trackLength; let handleLength = scrollbarVarsInfo._handleLength; let scrollRange = scrollbarVarsInfo._maxScroll; let currScroll = scrollbarVarsInfo._currentScroll; let scrollDuration = scrollBaseDuration * scrollDurationFactor; let timeoutDelay = isFirstIteration ? MATH.max(scrollFirstIterationDelay, scrollDuration) : scrollDuration; let instantScrollPosition = scrollRange * ((mouseOffset - handleLength / 2) / (trackLength - handleLength)); let rtlIsNormal = _isRTL && isHorizontal && (!_rtlScrollBehavior.i && !_rtlScrollBehavior.n || _normalizeRTLCache); let decreaseScrollCondition = rtlIsNormal ? handleOffset < mouseOffset : handleOffset > mouseOffset; let scrollObj = {}; let animationObj = {easing, step(now) {
											_scrollbarsHandlesDefineScrollPos && (_viewportElement[scroll](now), refreshScrollbarHandleOffset(isHorizontal, now));
										}}; instantScrollPosition = isFinite(instantScrollPosition) ? instantScrollPosition : 0, instantScrollPosition = _isRTL && isHorizontal && !_rtlScrollBehavior.i ? scrollRange - instantScrollPosition : instantScrollPosition, instantScroll ? (_viewportElement[scroll](instantScrollPosition), instantScrollTransition ? (instantScrollPosition = _viewportElement[scroll](), _viewportElement[scroll](currScroll), instantScrollPosition = rtlIsNormal && _rtlScrollBehavior.i ? scrollRange - instantScrollPosition : instantScrollPosition, instantScrollPosition = rtlIsNormal && _rtlScrollBehavior.n ? -instantScrollPosition : instantScrollPosition, scrollObj[xy] = instantScrollPosition, _base.scroll(scrollObj, extendDeep(animationObj, {duration: 130, complete: scrollActionInstantFinished}))) : scrollActionInstantFinished()) : (decreaseScroll = isFirstIteration ? decreaseScrollCondition : decreaseScroll, (rtlIsNormal ? decreaseScroll ? handleOffset + handleLength >= mouseOffset : handleOffset <= mouseOffset : decreaseScroll ? handleOffset <= mouseOffset : handleOffset + handleLength >= mouseOffset) ? (clearTimeout(trackTimeout), _base.scrollStop(), trackTimeout = undefined, scrollActionFinsished(!0)) : (trackTimeout = setTimeout(scrollAction, timeoutDelay), scrollObj[xy] = (decreaseScroll ? '-=' : '+=') + scrollDistance, _base.scroll(scrollObj, extendDeep(animationObj, {duration: scrollDuration}))), isFirstIteration = !1);
									}
								};

								ctrlKey && increaseTrackScrollAmount(), mouseDownInvertedScale = getHostElementInvertedScale()[xy], mouseDownOffset = COMPATIBILITY.page(event)[xy], _scrollbarsHandlesDefineScrollPos = !getPreparedScrollbarsOption(strSnapHandle), addClass(_bodyElement, _classNameDragging), addClass(scrollbarVars._track, strActive), addClass(scrollbarVars._scrollbar, strActive), setupResponsiveEventListener(_documentElement, [_strMouseTouchUpEvent, _strKeyDownEvent, _strKeyUpEvent, _strSelectStartEvent], [documentMouseTouchUp, documentKeyDown, documentKeyUp, documentOnSelectStart]), scrollAction(), COMPATIBILITY.prvD(event), COMPATIBILITY.stpP(event);
							}
						}

						function onTrackMouseTouchEnter(event) {
							_scrollbarsHandleHovered = !0, (_scrollbarsAutoHideScroll || _scrollbarsAutoHideMove) && refreshScrollbarsAutoHide(!0);
						}

						function onTrackMouseTouchLeave(event) {
							_scrollbarsHandleHovered = !1, (_scrollbarsAutoHideScroll || _scrollbarsAutoHideMove) && refreshScrollbarsAutoHide(!1);
						}

						function onScrollbarMouseTouchDown(event) {
							COMPATIBILITY.stpP(event);
						}

						addDestroyEventListener(scrollbarVars._handle, _strMouseTouchDownEvent, onHandleMouseTouchDown), addDestroyEventListener(scrollbarVars._track, [_strMouseTouchDownEvent, _strMouseEnter, _strMouseLeave], [onTrackMouseTouchDown, onTrackMouseTouchEnter, onTrackMouseTouchLeave]), addDestroyEventListener(scrollbarVars._scrollbar, _strMouseTouchDownEvent, onScrollbarMouseTouchDown), _supportTransition && addDestroyEventListener(scrollbarVars._scrollbar, _strTransitionEndEvent, (event => {
							event.target === scrollbarVars._scrollbar[0] && (refreshScrollbarHandleLength(isHorizontal), refreshScrollbarHandleOffset(isHorizontal));
						}));
					}

					function refreshScrollbarAppearance(isHorizontal, shallBeVisible, canScroll) {
						let scrollbarElement = isHorizontal ? _scrollbarHorizontalElement : _scrollbarVerticalElement; addRemoveClass(_hostElement, isHorizontal ? _classNameHostScrollbarHorizontalHidden : _classNameHostScrollbarVerticalHidden, !shallBeVisible), addRemoveClass(scrollbarElement, _classNameScrollbarUnusable, !canScroll);
					}

					function refreshScrollbarsAutoHide(shallBeVisible, delayfree) {
						if (clearTimeout(_scrollbarsAutoHideTimeoutId), shallBeVisible) {
							removeClass(_scrollbarHorizontalElement, _classNameScrollbarAutoHidden), removeClass(_scrollbarVerticalElement, _classNameScrollbarAutoHidden);
						} else {
							let anyActive; let strActive = 'active'; let hide = function () {
								_scrollbarsHandleHovered || _destroyed || (!(anyActive = _scrollbarHorizontalHandleElement.hasClass(strActive) || _scrollbarVerticalHandleElement.hasClass(strActive)) && (_scrollbarsAutoHideScroll || _scrollbarsAutoHideMove || _scrollbarsAutoHideLeave) && addClass(_scrollbarHorizontalElement, _classNameScrollbarAutoHidden), !anyActive && (_scrollbarsAutoHideScroll || _scrollbarsAutoHideMove || _scrollbarsAutoHideLeave) && addClass(_scrollbarVerticalElement, _classNameScrollbarAutoHidden));
							};

							_scrollbarsAutoHideDelay > 0 && !0 !== delayfree ? _scrollbarsAutoHideTimeoutId = setTimeout(hide, _scrollbarsAutoHideDelay) : hide();
						}
					}

					function refreshScrollbarHandleLength(isHorizontal) {
						let handleCSS = {}; let scrollbarVars = getScrollbarVars(isHorizontal); let scrollbarVarsInfo = scrollbarVars._info; let digit = 1e6; let handleRatio = MATH.min(1, _viewportSize[scrollbarVars._w_h] / _contentScrollSizeCache[scrollbarVars._w_h]); handleCSS[scrollbarVars._width_height] = MATH.floor(100 * handleRatio * digit) / digit + '%', nativeOverlayScrollbarsAreActive() || scrollbarVars._handle.css(handleCSS), scrollbarVarsInfo._handleLength = scrollbarVars._handle[0]['offset' + scrollbarVars._Width_Height], scrollbarVarsInfo._handleLengthRatio = handleRatio;
					}

					function refreshScrollbarHandleOffset(isHorizontal, scrollOrTransition) {
						let transformOffset; let translateValue; let transition = type(scrollOrTransition) == TYPES.b; let transitionDuration = 250; let isRTLisHorizontal = _isRTL && isHorizontal; let scrollbarVars = getScrollbarVars(isHorizontal); let scrollbarVarsInfo = scrollbarVars._info; let strTranslateBrace = 'translate('; let strTransform = VENDORS._cssProperty('transform'); let strTransition = VENDORS._cssProperty('transition'); let nativeScroll = isHorizontal ? _viewportElement[_strScrollLeft]() : _viewportElement[_strScrollTop](); let currentScroll = scrollOrTransition === undefined || transition ? nativeScroll : scrollOrTransition; let handleLength = scrollbarVarsInfo._handleLength; let trackLength = scrollbarVars._track[0]['offset' + scrollbarVars._Width_Height]; let handleTrackDiff = trackLength - handleLength; let handleCSS = {}; let maxScroll = (_viewportElementNative[_strScroll + scrollbarVars._Width_Height] - _viewportElementNative['client' + scrollbarVars._Width_Height]) * (_rtlScrollBehavior.n && isRTLisHorizontal ? -1 : 1); let getScrollRatio = function (base) {
							return isNaN(base / maxScroll) ? 0 : MATH.max(0, MATH.min(1, base / maxScroll));
						};

						let getHandleOffset = function (scrollRatio) {
							let offset = handleTrackDiff * scrollRatio; return offset = isNaN(offset) ? 0 : offset, offset = isRTLisHorizontal && !_rtlScrollBehavior.i ? trackLength - handleLength - offset : offset, offset = MATH.max(0, offset);
						};

						let scrollRatio = getScrollRatio(nativeScroll); let handleOffset = getHandleOffset(getScrollRatio(currentScroll)); let snappedHandleOffset = getHandleOffset(scrollRatio); scrollbarVarsInfo._maxScroll = maxScroll, scrollbarVarsInfo._currentScroll = nativeScroll, scrollbarVarsInfo._currentScrollRatio = scrollRatio, _supportTransform ? (transformOffset = isRTLisHorizontal ? -(trackLength - handleLength - handleOffset) : handleOffset, translateValue = isHorizontal ? strTranslateBrace + transformOffset + 'px, 0)' : strTranslateBrace + '0, ' + transformOffset + 'px)', handleCSS[strTransform] = translateValue, _supportTransition && (handleCSS[strTransition] = transition && MATH.abs(handleOffset - scrollbarVarsInfo._handleOffset) > 1 ? getCSSTransitionString(scrollbarVars._handle) + ', ' + (strTransform + _strSpace + transitionDuration) + 'ms' : _strEmpty)) : handleCSS[scrollbarVars._left_top] = handleOffset, nativeOverlayScrollbarsAreActive() || (scrollbarVars._handle.css(handleCSS), _supportTransform && _supportTransition && transition && scrollbarVars._handle.one(_strTransitionEndEvent, (() => {
							_destroyed || scrollbarVars._handle.css(strTransition, _strEmpty);
						}))), scrollbarVarsInfo._handleOffset = handleOffset, scrollbarVarsInfo._snappedHandleOffset = snappedHandleOffset, scrollbarVarsInfo._trackLength = trackLength;
					}

					function refreshScrollbarsInteractive(isTrack, value) {
						let action = value ? 'removeClass' : 'addClass'; let element2 = isTrack ? _scrollbarVerticalTrackElement : _scrollbarVerticalHandleElement; let className = isTrack ? _classNameScrollbarTrackOff : _classNameScrollbarHandleOff; (isTrack ? _scrollbarHorizontalTrackElement : _scrollbarHorizontalHandleElement)[action](className), element2[action](className);
					}

					function getScrollbarVars(isHorizontal) {
						return {_width_height: isHorizontal ? _strWidth : _strHeight, _Width_Height: isHorizontal ? 'Width' : 'Height', _left_top: isHorizontal ? _strLeft : _strTop, _Left_Top: isHorizontal ? 'Left' : 'Top', _x_y: isHorizontal ? _strX : _strY, _X_Y: isHorizontal ? 'X' : 'Y', _w_h: isHorizontal ? 'w' : 'h', _l_t: isHorizontal ? 'l' : 't', _track: isHorizontal ? _scrollbarHorizontalTrackElement : _scrollbarVerticalTrackElement, _handle: isHorizontal ? _scrollbarHorizontalHandleElement : _scrollbarVerticalHandleElement, _scrollbar: isHorizontal ? _scrollbarHorizontalElement : _scrollbarVerticalElement, _info: isHorizontal ? _scrollHorizontalInfo : _scrollVerticalInfo};
					}

					function setupScrollbarCornerDOM(destroy) {
						_scrollbarCornerElement = _scrollbarCornerElement || selectOrGenerateDivByClass(_classNameScrollbarCorner, !0), destroy ? _domExists && _initialized ? removeClass(_scrollbarCornerElement.removeAttr(LEXICON.s), _classNamesDynamicDestroy) : remove(_scrollbarCornerElement) : _domExists || _hostElement.append(_scrollbarCornerElement);
					}

					function setupScrollbarCornerEvents() {
						let reconnectMutationObserver; let insideIFrame = _windowElementNative.top !== _windowElementNative; let mouseDownPosition = {}; let mouseDownSize = {}; let mouseDownInvertedScale = {}; function documentDragMove(event) {
							if (onMouseTouchDownContinue(event)) {
								let pageOffset = getCoordinates(event); let hostElementCSS = {}; (_resizeHorizontal || _resizeBoth) && (hostElementCSS[_strWidth] = mouseDownSize.w + (pageOffset.x - mouseDownPosition.x) * mouseDownInvertedScale.x), (_resizeVertical || _resizeBoth) && (hostElementCSS[_strHeight] = mouseDownSize.h + (pageOffset.y - mouseDownPosition.y) * mouseDownInvertedScale.y), _hostElement.css(hostElementCSS), COMPATIBILITY.stpP(event);
							} else {
								documentMouseTouchUp(event);
							}
						}

						function documentMouseTouchUp(event) {
							let eventIsTrusted = event !== undefined; setupResponsiveEventListener(_documentElement, [_strSelectStartEvent, _strMouseTouchMoveEvent, _strMouseTouchUpEvent], [documentOnSelectStart, documentDragMove, documentMouseTouchUp], !0), removeClass(_bodyElement, _classNameDragging), _scrollbarCornerElement.releaseCapture && _scrollbarCornerElement.releaseCapture(), eventIsTrusted && (reconnectMutationObserver && connectMutationObservers(), _base.update(_strAuto)), reconnectMutationObserver = !1;
						}

						function onMouseTouchDownContinue(event) {
							let isTouchEvent = (event.originalEvent || event).touches !== undefined; return !_sleeping && !_destroyed && (COMPATIBILITY.mBtn(event) === 1 || isTouchEvent);
						}

						function getCoordinates(event) {
							return _msieVersion && insideIFrame ? {x: event.screenX, y: event.screenY} : COMPATIBILITY.page(event);
						}

						addDestroyEventListener(_scrollbarCornerElement, _strMouseTouchDownEvent, (event => {
							onMouseTouchDownContinue(event) && !_resizeNone && (_mutationObserversConnected && (reconnectMutationObserver = !0, disconnectMutationObservers()), mouseDownPosition = getCoordinates(event), mouseDownSize.w = _hostElementNative[LEXICON.oW] - (_isBorderBox ? 0 : _paddingX), mouseDownSize.h = _hostElementNative[LEXICON.oH] - (_isBorderBox ? 0 : _paddingY), mouseDownInvertedScale = getHostElementInvertedScale(), setupResponsiveEventListener(_documentElement, [_strSelectStartEvent, _strMouseTouchMoveEvent, _strMouseTouchUpEvent], [documentOnSelectStart, documentDragMove, documentMouseTouchUp]), addClass(_bodyElement, _classNameDragging), _scrollbarCornerElement.setCapture && _scrollbarCornerElement.setCapture(), COMPATIBILITY.prvD(event), COMPATIBILITY.stpP(event));
						}));
					}

					function dispatchCallback(name, args, dependent) {
						if (!1 !== dependent) {
							if (_initialized) {
								let ext; let callback = _currentPreparedOptions.callbacks[name]; let extensionOnName = name; extensionOnName.substr(0, 2) === 'on' && (extensionOnName = extensionOnName.substr(2, 1).toLowerCase() + extensionOnName.substr(3)), type(callback) == TYPES.f && callback.call(_base, args), each(_extensions, (function () {
									type((ext = this).on) == TYPES.f && ext.on(extensionOnName, args);
								}));
							} else {
								_destroyed || _callbacksInitQeueue.push({n: name, a: args});
							}
						}
					}

					function setTopRightBottomLeft(targetCSSObject, prefix, values) {
						values = values || [_strEmpty, _strEmpty, _strEmpty, _strEmpty], targetCSSObject[(prefix = prefix || _strEmpty) + _strTop] = values[0], targetCSSObject[prefix + _strRight] = values[1], targetCSSObject[prefix + _strBottom] = values[2], targetCSSObject[prefix + _strLeft] = values[3];
					}

					function getTopRightBottomLeftHost(prefix, suffix, zeroX, zeroY) {
						return suffix = suffix || _strEmpty, prefix = prefix || _strEmpty, {t: zeroY ? 0 : parseToZeroOrNumber(_hostElement.css(prefix + _strTop + suffix)), r: zeroX ? 0 : parseToZeroOrNumber(_hostElement.css(prefix + _strRight + suffix)), b: zeroY ? 0 : parseToZeroOrNumber(_hostElement.css(prefix + _strBottom + suffix)), l: zeroX ? 0 : parseToZeroOrNumber(_hostElement.css(prefix + _strLeft + suffix))};
					}

					function getCSSTransitionString(element) {
						let transitionStr = VENDORS._cssProperty('transition'); let assembledValue = element.css(transitionStr); if (assembledValue) {
							return assembledValue;
						}

						for (var strResult, valueArray, j, regExpString = '\\s*(([^,(]+(\\(.+?\\))?)+)[\\s,]*', regExpMain = new RegExp(regExpString), regExpValidate = new RegExp('^(' + regExpString + ')+$'), properties = 'property duration timing-function delay'.split(' '), result = [], i = 0, splitCssStyleByComma = function (str) {
							if (strResult = [], !str.match(regExpValidate)) {
								return str;
							}

							for (;str.match(regExpMain);) {
								strResult.push(RegExp.$1), str = str.replace(regExpMain, _strEmpty);
							}

							return strResult;
						}; i < properties[LEXICON.l]; i++) {
							for (valueArray = splitCssStyleByComma(element.css(transitionStr + '-' + properties[i])), j = 0; j < valueArray[LEXICON.l]; j++) {
								result[j] = (result[j] ? result[j] + _strSpace : _strEmpty) + valueArray[j];
							}
						}

						return result.join(', ');
					}

					function createHostClassNameRegExp(withCurrClassNameOption, withOldClassNameOption) {
						let i; let split; let appendix; let appendClasses = function (classes, condition) {
							if (appendix = '', condition && typeof classes === TYPES.s) {
								for (split = classes.split(_strSpace), i = 0; i < split[LEXICON.l]; i++) {
									appendix += '|' + split[i] + '$';
								}
							}

							return appendix;
						};

						return new RegExp('(^' + _classNameHostElement + '([-_].+|)$)' + appendClasses(_classNameCache, withCurrClassNameOption) + appendClasses(_oldClassName, withOldClassNameOption), 'g');
					}

					function getHostElementInvertedScale() {
						let rect = _paddingElementNative[LEXICON.bCR](); return {x: _supportTransform && 1 / (MATH.round(rect.width) / _paddingElementNative[LEXICON.oW]) || 1, y: _supportTransform && 1 / (MATH.round(rect.height) / _paddingElementNative[LEXICON.oH]) || 1};
					}

					function isHTMLElement(o) {
						let strOwnerDocument = 'ownerDocument'; let strHTMLElement = 'HTMLElement'; let wnd = o && o[strOwnerDocument] && o[strOwnerDocument].parentWindow || window; return typeof wnd[strHTMLElement] === TYPES.o ? o instanceof wnd[strHTMLElement] : o && typeof o === TYPES.o && o !== null && o.nodeType === 1 && typeof o.nodeName === TYPES.s;
					}

					function getArrayDifferences(a1, a2) {
						let i; let k; let a = []; let diff = []; for (i = 0; i < a1.length; i++) {
							a[a1[i]] = !0;
						}

						for (i = 0; i < a2.length; i++) {
							a[a2[i]] ? delete a[a2[i]] : a[a2[i]] = !0;
						}

						for (k in a) {
							diff.push(k);
						}

						return diff;
					}

					function parseToZeroOrNumber(value, toFloat) {
						let num = toFloat ? parseFloat(value) : parseInt(value, 10); return isNaN(num) ? 0 : num;
					}

					function getTextareaInfo() {
						let textareaCursorPosition = _targetElementNative.selectionStart; if (textareaCursorPosition !== undefined) {
							let rowCols; let i; let textareaValue = _targetElement.val(); let textareaLength = textareaValue[LEXICON.l]; let textareaRowSplit = textareaValue.split('\n'); let textareaLastRow = textareaRowSplit[LEXICON.l]; let textareaCurrentCursorRowSplit = textareaValue.substr(0, textareaCursorPosition).split('\n'); let widestRow = 0; let textareaLastCol = 0; let cursorRow = textareaCurrentCursorRowSplit[LEXICON.l]; let cursorCol = textareaCurrentCursorRowSplit[textareaCurrentCursorRowSplit[LEXICON.l] - 1][LEXICON.l]; for (i = 0; i < textareaRowSplit[LEXICON.l]; i++) {
								(rowCols = textareaRowSplit[i][LEXICON.l]) > textareaLastCol && (widestRow = i + 1, textareaLastCol = rowCols);
							}

							return {_cursorRow: cursorRow, _cursorColumn: cursorCol, _rows: textareaLastRow, _columns: textareaLastCol, _widestRow: widestRow, _cursorPosition: textareaCursorPosition, _cursorMax: textareaLength};
						}
					}

					function nativeOverlayScrollbarsAreActive() {
						return _ignoreOverlayScrollbarHidingCache && _nativeScrollbarIsOverlaid.x && _nativeScrollbarIsOverlaid.y;
					}

					function getContentMeasureElement() {
						return _isTextarea ? _textareaCoverElement[0] : _contentElementNative;
					}

					function generateDiv(classesOrAttrs, content) {
						return '<div ' + (classesOrAttrs ? type(classesOrAttrs) == TYPES.s ? 'class="' + classesOrAttrs + '"' : (function () {
							let key; let attrs = _strEmpty; if (FRAMEWORK.isPlainObject(classesOrAttrs)) {
								for (key in classesOrAttrs) {
									attrs += (key === 'c' ? 'class' : key) + '="' + classesOrAttrs[key] + '" ';
								}
							}

							return attrs;
						})() : _strEmpty) + '>' + (content || _strEmpty) + '</div>';
					}

					function selectOrGenerateDivByClass(className, selectParentOrOnlyChildren) {
						let onlyChildren = type(selectParentOrOnlyChildren) == TYPES.b; let selectParent = onlyChildren ? _hostElement : selectParentOrOnlyChildren || _hostElement; return _domExists && !selectParent[LEXICON.l] ? null : _domExists ? selectParent[onlyChildren ? 'children' : 'find'](_strDot + className.replace(/\s/g, _strDot)).eq(0) : FRAMEWORK(generateDiv(className));
					}

					function getObjectPropVal(obj, path) {
						for (var val, splits = path.split(_strDot), i = 0; i < splits.length; i++) {
							if (!obj[LEXICON.hOP](splits[i])) {
								return;
							}

							val = obj[splits[i]], i < splits.length && type(val) == TYPES.o && (obj = val);
						}

						return val;
					}

					function setObjectPropVal(obj, path, val) {
						for (var splits = path.split(_strDot), splitsLength = splits.length, i = 0, extendObj = {}, extendObjRoot = extendObj; i < splitsLength; i++) {
							extendObj = extendObj[splits[i]] = i + 1 < splitsLength ? {} : val;
						}

						FRAMEWORK.extend(obj, extendObjRoot, !0);
					}

					function eachUpdateOnLoad(action) {
						let {updateOnLoad} = _currentPreparedOptions; updateOnLoad = type(updateOnLoad) == TYPES.s ? updateOnLoad.split(_strSpace) : updateOnLoad, COMPATIBILITY.isA(updateOnLoad) && !_destroyed && each(updateOnLoad, action);
					}

					function checkCache(current, cache, force) {
						if (force) {
							return force;
						}

						if (type(current) != TYPES.o || type(cache) != TYPES.o) {
							return current !== cache;
						}

						for (let prop in current) {
							if (prop !== 'c') {
								if (!current[LEXICON.hOP](prop) || !cache[LEXICON.hOP](prop)) {
									return !0;
								}

								if (checkCache(current[prop], cache[prop])) {
									return !0;
								}
							}
						}

						return !1;
					}

					function extendDeep() {
						return FRAMEWORK.extend.apply(this, [!0].concat([].slice.call(arguments)));
					}

					function addClass(el, classes) {
						return _frameworkProto.addClass.call(el, classes);
					}

					function removeClass(el, classes) {
						return _frameworkProto.removeClass.call(el, classes);
					}

					function addRemoveClass(el, classes, doAdd) {
						return doAdd ? addClass(el, classes) : removeClass(el, classes);
					}

					function remove(el) {
						return _frameworkProto.remove.call(el);
					}

					function findFirst(el, selector) {
						return _frameworkProto.find.call(el, selector).eq(0);
					}

					function construct(targetElement, options, extensions) {
						let initBodyScroll; let bodyMouseTouchDownListener; return _defaultOptions = globals.defaultOptions, _nativeScrollbarStyling = globals.nativeScrollbarStyling, _nativeScrollbarSize = extendDeep({}, globals.nativeScrollbarSize), _nativeScrollbarIsOverlaid = extendDeep({}, globals.nativeScrollbarIsOverlaid), _overlayScrollbarDummySize = extendDeep({}, globals.overlayScrollbarDummySize), _rtlScrollBehavior = extendDeep({}, globals.rtlScrollBehavior), setOptions(extendDeep({}, _defaultOptions, options)), _cssCalc = globals.cssCalc, _msieVersion = globals.msie, _autoUpdateRecommended = globals.autoUpdateRecommended, _supportTransition = globals.supportTransition, _supportTransform = globals.supportTransform, _supportPassiveEvents = globals.supportPassiveEvents, _supportResizeObserver = globals.supportResizeObserver, _supportMutationObserver = globals.supportMutationObserver, globals.restrictedMeasuring, _documentElement = FRAMEWORK(targetElement.ownerDocument), _documentElementNative = _documentElement[0], _windowElement = FRAMEWORK(_documentElementNative.defaultView || _documentElementNative.parentWindow), _windowElementNative = _windowElement[0], _htmlElement = findFirst(_documentElement, 'html'), _bodyElement = findFirst(_htmlElement, 'body'), _targetElement = FRAMEWORK(targetElement), _targetElementNative = _targetElement[0], _isTextarea = _targetElement.is('textarea'), _isBody = _targetElement.is('body'), _documentMixed = _documentElementNative !== document, _domExists = _isTextarea ? _targetElement.hasClass(_classNameTextareaElement) && _targetElement.parent().hasClass(_classNameContentElement) : _targetElement.hasClass(_classNameHostElement) && _targetElement.children(_strDot + _classNamePaddingElement)[LEXICON.l], _nativeScrollbarIsOverlaid.x && _nativeScrollbarIsOverlaid.y && !_currentPreparedOptions.nativeScrollbarsOverlaid.initialize ? (dispatchCallback('onInitializationWithdrawn'), _domExists && (setupStructureDOM(!0), setupScrollbarsDOM(!0), setupScrollbarCornerDOM(!0)), _destroyed = !0, _sleeping = !0, _base) : (_isBody && ((initBodyScroll = {}).l = MATH.max(_targetElement[_strScrollLeft](), _htmlElement[_strScrollLeft](), _windowElement[_strScrollLeft]()), initBodyScroll.t = MATH.max(_targetElement[_strScrollTop](), _htmlElement[_strScrollTop](), _windowElement[_strScrollTop]()), bodyMouseTouchDownListener = function () {
							_viewportElement.removeAttr(LEXICON.ti), setupResponsiveEventListener(_viewportElement, _strMouseTouchDownEvent, bodyMouseTouchDownListener, !0, !0);
						}), setupStructureDOM(), setupScrollbarsDOM(), setupScrollbarCornerDOM(), setupStructureEvents(), setupScrollbarEvents(!0), setupScrollbarEvents(!1), setupScrollbarCornerEvents(), createMutationObservers(), setupResizeObserver(_sizeObserverElement, hostOnResized), _isBody && (_viewportElement[_strScrollLeft](initBodyScroll.l)[_strScrollTop](initBodyScroll.t), document.activeElement == targetElement && _viewportElementNative.focus && (_viewportElement.attr(LEXICON.ti, '-1'), _viewportElementNative.focus(), setupResponsiveEventListener(_viewportElement, _strMouseTouchDownEvent, bodyMouseTouchDownListener, !1, !0))), _base.update(_strAuto), _initialized = !0, dispatchCallback('onInitialized'), each(_callbacksInitQeueue, ((index, value) => {
							dispatchCallback(value.n, value.a);
						})), _callbacksInitQeueue = [], type(extensions) == TYPES.s && (extensions = [extensions]), COMPATIBILITY.isA(extensions) ? each(extensions, ((index, value) => {
							_base.addExt(value);
						})) : FRAMEWORK.isPlainObject(extensions) && each(extensions, ((key, value) => {
							_base.addExt(key, value);
						})), setTimeout((() => {
							_supportTransition && !_destroyed && addClass(_hostElement, _classNameHostTransition);
						}), 333), _base);
					}
				}

				return (_plugin = window[PLUGINNAME] = function (pluginTargetElements, options, extensions) {
					if (arguments[LEXICON.l] === 0) {
						return this;
					}

					let inst; let result; let arr = []; let optsIsPlainObj = FRAMEWORK.isPlainObject(options); return pluginTargetElements ? (pluginTargetElements = pluginTargetElements[LEXICON.l] != undefined ? pluginTargetElements : [pluginTargetElements[0] || pluginTargetElements], initOverlayScrollbarsStatics(), pluginTargetElements[LEXICON.l] > 0 && (optsIsPlainObj ? FRAMEWORK.each(pluginTargetElements, ((i, v) => {
						(inst = v) !== undefined && arr.push(OverlayScrollbarsInstance(inst, options, extensions, _pluginsGlobals, _pluginsAutoUpdateLoop));
					})) : FRAMEWORK.each(pluginTargetElements, ((i, v) => {
						inst = INSTANCES(v), (options === '!' && _plugin.valid(inst) || COMPATIBILITY.type(options) == TYPES.f && options(v, inst) || options === undefined) && arr.push(inst);
					})), result = arr[LEXICON.l] === 1 ? arr[0] : arr), result) : optsIsPlainObj || !options ? result : arr;
				}).globals = function () {
					initOverlayScrollbarsStatics(); let globals = FRAMEWORK.extend(!0, {}, _pluginsGlobals); return delete globals.msie, globals;
				}, _plugin.defaultOptions = function (newDefaultOptions) {
					initOverlayScrollbarsStatics(); let currDefaultOptions = _pluginsGlobals.defaultOptions; if (newDefaultOptions === undefined) {
						return FRAMEWORK.extend(!0, {}, currDefaultOptions);
					}

					_pluginsGlobals.defaultOptions = FRAMEWORK.extend(!0, {}, currDefaultOptions, _pluginsOptions._validate(newDefaultOptions, _pluginsOptions._template, !0, currDefaultOptions)._default);
				}, _plugin.valid = function (osInstance) {
					return osInstance instanceof _plugin && !osInstance.getState().destroyed;
				}, _plugin.extension = function (extensionName, extension, defaultOptions) {
					let extNameTypeString = COMPATIBILITY.type(extensionName) == TYPES.s; let argLen = arguments[LEXICON.l]; let i = 0; if (argLen < 1 || !extNameTypeString) {
						return FRAMEWORK.extend(!0, {length: _pluginsExtensions[LEXICON.l]}, _pluginsExtensions);
					}

					if (extNameTypeString) {
						if (COMPATIBILITY.type(extension) == TYPES.f) {
							_pluginsExtensions.push({name: extensionName, extensionFactory: extension, defaultOptions});
						} else {
							for (;i < _pluginsExtensions[LEXICON.l]; i++) {
								if (_pluginsExtensions[i].name === extensionName) {
									if (!(argLen > 1)) {
return FRAMEWORK.extend(!0, {}, _pluginsExtensions[i]);
} _pluginsExtensions.splice(i, 1);
								}
							}
						}
					}
				}, _plugin;
			})(); return JQUERY && JQUERY.fn && (JQUERY.fn.overlayScrollbars = function (options, extensions) {
				let _elements = this; return JQUERY.isPlainObject(options) ? (JQUERY.each(_elements, (function () {
					PLUGIN(this, options, extensions);
				})), _elements) : PLUGIN(_elements, options);
			}), PLUGIN;
		})(global, global.document, void 0);
	}).call(exports, __webpack_require__, exports, module)) || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
}}]);
