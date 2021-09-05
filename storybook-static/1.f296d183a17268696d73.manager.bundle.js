(window.webpackJsonp = window.webpackJsonp || []).push([[1], {939(module, __webpack_exports__, __webpack_require__) {
	'use strict'; let objectWithoutPropertiesLoose = __webpack_require__(46); let esm_extends = __webpack_require__(12); let inheritsLoose = __webpack_require__(133); let react = __webpack_require__(0); let react_default = __webpack_require__.n(react); let react_dom = __webpack_require__(158); let ManagerReferenceNodeContext = react.createContext(); let ManagerReferenceNodeSetterContext = react.createContext(); function Manager(_ref) {
		let {children} = _ref; let _React$useState = react.useState(null); let referenceNode = _React$useState[0]; let
			setReferenceNode = _React$useState[1]; return react.useEffect((() => function () {
			setReferenceNode(null);
		}), [setReferenceNode]), react.createElement(ManagerReferenceNodeContext.Provider, {value: referenceNode}, react.createElement(ManagerReferenceNodeSetterContext.Provider, {value: setReferenceNode}, children));
	}

	let unwrapArray = function unwrapArray(arg) {
		return Array.isArray(arg) ? arg[0] : arg;
	};

	let safeInvoke = function safeInvoke(fn) {
		if (typeof fn === 'function') {
			for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
				args[_key - 1] = arguments[_key];
			}

			return fn.apply(void 0, args);
		}
	};

	let setRef = function setRef(ref, node) {
		if (typeof ref === 'function') {
			return safeInvoke(ref, node);
		}

		ref != null && (ref.current = node);
	};

	let fromEntries = function fromEntries(entries) {
		return entries.reduce(((acc, _ref) => {
			let key = _ref[0]; let value = _ref[1]; return acc[key] = value, acc;
		}), {});
	};

	let useIsomorphicLayoutEffect = typeof window !== 'undefined' && window.document && window.document.createElement ? react.useLayoutEffect : react.useEffect; function getBoundingClientRect(element) {
		let rect = element.getBoundingClientRect(); return {width: rect.width, height: rect.height, top: rect.top, right: rect.right, bottom: rect.bottom, left: rect.left, x: rect.left, y: rect.top};
	}

	function getWindow(node) {
		if (node.toString() !== '[object Window]') {
			let {ownerDocument} = node; return ownerDocument && ownerDocument.defaultView || window;
		}

		return node;
	}

	function getWindowScroll(node) {
		let win = getWindow(node); return {scrollLeft: win.pageXOffset, scrollTop: win.pageYOffset};
	}

	function isElement(node) {
		return node instanceof getWindow(node).Element || node instanceof Element;
	}

	function isHTMLElement(node) {
		return node instanceof getWindow(node).HTMLElement || node instanceof HTMLElement;
	}

	function isShadowRoot(node) {
		return typeof ShadowRoot !== 'undefined' && (node instanceof getWindow(node).ShadowRoot || node instanceof ShadowRoot);
	}

	function getNodeName(element) {
		return element ? (element.nodeName || '').toLowerCase() : null;
	}

	function getDocumentElement(element) {
		return ((isElement(element) ? element.ownerDocument : element.document) || window.document).documentElement;
	}

	function getWindowScrollBarX(element) {
		return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
	}

	function getComputedStyle(element) {
		return getWindow(element).getComputedStyle(element);
	}

	function isScrollParent(element) {
		let _getComputedStyle = getComputedStyle(element); let {overflow} = _getComputedStyle; let {overflowX} = _getComputedStyle; let {overflowY} = _getComputedStyle; return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
	}

	function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
		void 0 === isFixed && (isFixed = !1); let documentElement = getDocumentElement(offsetParent); let rect = getBoundingClientRect(elementOrVirtualElement); let isOffsetParentAnElement = isHTMLElement(offsetParent); let scroll = {scrollLeft: 0, scrollTop: 0}; let offsets = {x: 0, y: 0}; return (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) && ((getNodeName(offsetParent) !== 'body' || isScrollParent(documentElement)) && (scroll = (function getNodeScroll(node) {
			return node !== getWindow(node) && isHTMLElement(node) ? (function getHTMLElementScroll(element) {
				return {scrollLeft: element.scrollLeft, scrollTop: element.scrollTop};
			})(node) : getWindowScroll(node);
		})(offsetParent)), isHTMLElement(offsetParent) ? ((offsets = getBoundingClientRect(offsetParent)).x += offsetParent.clientLeft, offsets.y += offsetParent.clientTop) : documentElement && (offsets.x = getWindowScrollBarX(documentElement))), {x: rect.left + scroll.scrollLeft - offsets.x, y: rect.top + scroll.scrollTop - offsets.y, width: rect.width, height: rect.height};
	}

	function getLayoutRect(element) {
		return {x: element.offsetLeft, y: element.offsetTop, width: element.offsetWidth, height: element.offsetHeight};
	}

	function getParentNode(element) {
		return getNodeName(element) === 'html' ? element : element.assignedSlot || element.parentNode || (isShadowRoot(element) ? element.host : null) || getDocumentElement(element);
	}

	function getScrollParent(node) {
		return ['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0 ? node.ownerDocument.body : isHTMLElement(node) && isScrollParent(node) ? node : getScrollParent(getParentNode(node));
	}

	function listScrollParents(element, list) {
		let _element$ownerDocumen; void 0 === list && (list = []); let scrollParent = getScrollParent(element); let isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body); let win = getWindow(scrollParent); let target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent; let updatedList = list.concat(target); return isBody ? updatedList : updatedList.concat(listScrollParents(getParentNode(target)));
	}

	function isTableElement(element) {
		return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
	}

	function getTrueOffsetParent(element) {
		return isHTMLElement(element) && getComputedStyle(element).position !== 'fixed' ? element.offsetParent : null;
	}

	function getOffsetParent(element) {
		for (var window = getWindow(element), offsetParent = getTrueOffsetParent(element); offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static';) {
			offsetParent = getTrueOffsetParent(offsetParent);
		}

		return offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static') ? window : offsetParent || (function getContainingBlock(element) {
			for (let isFirefox = navigator.userAgent.toLowerCase().includes('firefox'), currentNode = getParentNode(element); isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0;) {
				let css = getComputedStyle(currentNode); if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].includes(css.willChange) || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
					return currentNode;
				}

				currentNode = currentNode.parentNode;
			}

			return null;
		})(element) || window;
	}

	let enums_top = 'top'; let bottom = 'bottom'; let right = 'right'; let left = 'left'; let basePlacements = [enums_top, bottom, right, left]; let variationPlacements = basePlacements.reduce(((acc, placement) => acc.concat([placement + '-start', placement + '-end'])), []); let enums_placements = [].concat(basePlacements, ['auto']).reduce(((acc, placement) => acc.concat([placement, placement + '-start', placement + '-end'])), []); let modifierPhases = ['beforeRead', 'read', 'afterRead', 'beforeMain', 'main', 'afterMain', 'beforeWrite', 'write', 'afterWrite']; function order(modifiers) {
		let map = new Map(); let visited = new Set(); let
			result = []; function sort(modifier) {
			visited.add(modifier.name), [].concat(modifier.requires || [], modifier.requiresIfExists || []).forEach((dep => {
				if (!visited.has(dep)) {
					let depModifier = map.get(dep); depModifier && sort(depModifier);
				}
			})), result.push(modifier);
		}

		return modifiers.forEach((modifier => {
			map.set(modifier.name, modifier);
		})), modifiers.forEach((modifier => {
			visited.has(modifier.name) || sort(modifier);
		})), result;
	}

	let DEFAULT_OPTIONS = {placement: 'bottom', modifiers: [], strategy: 'absolute'}; function areValidElements() {
		for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return !args.some((element => !(element && typeof element.getBoundingClientRect === 'function')));
	}

	function popperGenerator(generatorOptions) {
		void 0 === generatorOptions && (generatorOptions = {}); let _generatorOptions = generatorOptions; let _generatorOptions$def = _generatorOptions.defaultModifiers; let defaultModifiers = void 0 === _generatorOptions$def ? [] : _generatorOptions$def; let _generatorOptions$def2 = _generatorOptions.defaultOptions; let defaultOptions = void 0 === _generatorOptions$def2 ? DEFAULT_OPTIONS : _generatorOptions$def2; return function createPopper(reference, popper, options) {
			void 0 === options && (options = defaultOptions); let fn; let pending; let state = {placement: 'bottom', orderedModifiers: [], options: {...DEFAULT_OPTIONS, ...defaultOptions}, modifiersData: {}, elements: {reference, popper}, attributes: {}, styles: {}}; let effectCleanupFns = []; let isDestroyed = !1; var instance = {state, setOptions: function setOptions(options) {
				cleanupModifierEffects(), state.options = {...defaultOptions, ...state.options, ...options}, state.scrollParents = {reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [], popper: listScrollParents(popper)}; let orderedModifiers = (function orderModifiers(modifiers) {
					let orderedModifiers = order(modifiers); return modifierPhases.reduce(((acc, phase) => acc.concat(orderedModifiers.filter((modifier => modifier.phase === phase)))), []);
				})((function mergeByName(modifiers) {
					let merged = modifiers.reduce(((merged, current) => {
						let existing = merged[current.name]; return merged[current.name] = existing ? ({...existing, ...current, options: {...existing.options, ...current.options}, data: {...existing.data, ...current.data}}) : current, merged;
					}), {}); return Object.keys(merged).map((key => merged[key]));
				})([].concat(defaultModifiers, state.options.modifiers))); return state.orderedModifiers = orderedModifiers.filter((m => m.enabled)), (function runModifierEffects() {
					state.orderedModifiers.forEach((_ref3 => {
						let {name} = _ref3; let _ref3$options = _ref3.options; let options = void 0 === _ref3$options ? {} : _ref3$options; let
							{effect} = _ref3; if (typeof effect === 'function') {
							let cleanupFn = effect({state, name, instance, options}); let noopFn = function noopFn() {}; effectCleanupFns.push(cleanupFn || noopFn);
						}
					}));
				})(), instance.update();
			}, forceUpdate: function forceUpdate() {
				if (!isDestroyed) {
					let _state$elements = state.elements; let {reference} = _state$elements; let {popper} = _state$elements; if (areValidElements(reference, popper)) {
						state.rects = {reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'), popper: getLayoutRect(popper)}, state.reset = !1, state.placement = state.options.placement, state.orderedModifiers.forEach((modifier => state.modifiersData[modifier.name] = {...modifier.data})); for (let index = 0; index < state.orderedModifiers.length; index++) {
							if (!0 !== state.reset) {
								let _state$orderedModifie = state.orderedModifiers[index]; let {fn} = _state$orderedModifie; let _state$orderedModifie2 = _state$orderedModifie.options; let _options = void 0 === _state$orderedModifie2 ? {} : _state$orderedModifie2; let {name} = _state$orderedModifie; typeof fn === 'function' && (state = fn({state, options: _options, name, instance}) || state);
							} else {
								state.reset = !1, index = -1;
							}
						}
					}
				}
			}, update: (fn = function () {
				return new Promise((resolve => {
					instance.forceUpdate(), resolve(state);
				}));
			}, function () {
				return pending || (pending = new Promise((resolve => {
					Promise.resolve().then((() => {
						pending = void 0, resolve(fn());
					}));
				}))), pending;
			}), destroy: function destroy() {
				cleanupModifierEffects(), isDestroyed = !0;
			}}; if (!areValidElements(reference, popper)) {
				return instance;
			}

			function cleanupModifierEffects() {
				effectCleanupFns.forEach((fn => fn())), effectCleanupFns = [];
			}

			return instance.setOptions(options).then((state => {
				!isDestroyed && options.onFirstUpdate && options.onFirstUpdate(state);
			})), instance;
		};
	}

	let passive = {passive: !0}; let eventListeners = {name: 'eventListeners', enabled: !0, phase: 'write', fn: function fn() {}, effect: function effect(_ref) {
		let {state} = _ref; let {instance} = _ref; let {options} = _ref; let _options$scroll = options.scroll; let scroll = void 0 === _options$scroll || _options$scroll; let _options$resize = options.resize; let resize = void 0 === _options$resize || _options$resize; let window = getWindow(state.elements.popper); let
			scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper); return scroll && scrollParents.forEach((scrollParent => {
			scrollParent.addEventListener('scroll', instance.update, passive);
		})), resize && window.addEventListener('resize', instance.update, passive), function () {
			scroll && scrollParents.forEach((scrollParent => {
				scrollParent.removeEventListener('scroll', instance.update, passive);
			})), resize && window.removeEventListener('resize', instance.update, passive);
		};
	}, data: {}}; function getBasePlacement(placement) {
		return placement.split('-')[0];
	}

	function getVariation(placement) {
		return placement.split('-')[1];
	}

	function getMainAxisFromPlacement(placement) {
		return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
	}

	function computeOffsets(_ref) {
		let offsets; let {reference} = _ref; let {element} = _ref; let {placement} = _ref; let basePlacement = placement ? getBasePlacement(placement) : null; let variation = placement ? getVariation(placement) : null; let commonX = reference.x + reference.width / 2 - element.width / 2; let commonY = reference.y + reference.height / 2 - element.height / 2; switch (basePlacement) {
			case enums_top: offsets = {x: commonX, y: reference.y - element.height}; break; case bottom: offsets = {x: commonX, y: reference.y + reference.height}; break; case right: offsets = {x: reference.x + reference.width, y: commonY}; break; case left: offsets = {x: reference.x - element.width, y: commonY}; break; default: offsets = {x: reference.x, y: reference.y};
		}

		let mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null; if (mainAxis != null) {
			let len = mainAxis === 'y' ? 'height' : 'width'; switch (variation) {
				case 'start': offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2); break; case 'end': offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
			}
		}

		return offsets;
	}

	let modifiers_popperOffsets = {name: 'popperOffsets', enabled: !0, phase: 'read', fn: function popperOffsets_popperOffsets(_ref) {
		let {state} = _ref; let
			{name} = _ref; state.modifiersData[name] = computeOffsets({reference: state.rects.reference, element: state.rects.popper, strategy: 'absolute', placement: state.placement});
	}, data: {}}; let math_max = Math.max; let math_min = Math.min; let {round} = Math; let unsetSides = {top: 'auto', right: 'auto', bottom: 'auto', left: 'auto'}; function mapToStyles(_ref2) {
		let _Object$assign2; let {popper} = _ref2; let {popperRect} = _ref2; let {placement} = _ref2; let {offsets} = _ref2; let {position} = _ref2; let {gpuAcceleration} = _ref2; let {adaptive} = _ref2; let {roundOffsets} = _ref2; let _ref3 = !0 === roundOffsets ? (function roundOffsetsByDPR(_ref) {
			let {x} = _ref; let {y} = _ref; let
				dpr = window.devicePixelRatio || 1; return {x: round(round(x * dpr) / dpr) || 0, y: round(round(y * dpr) / dpr) || 0};
		})(offsets) : typeof roundOffsets === 'function' ? roundOffsets(offsets) : offsets; let _ref3$x = _ref3.x; let x = void 0 === _ref3$x ? 0 : _ref3$x; let _ref3$y = _ref3.y; let y = void 0 === _ref3$y ? 0 : _ref3$y; let hasX = offsets.hasOwnProperty('x'); let hasY = offsets.hasOwnProperty('y'); let sideX = left; let sideY = enums_top; let win = window; if (adaptive) {
			let offsetParent = getOffsetParent(popper); let heightProp = 'clientHeight'; let widthProp = 'clientWidth'; offsetParent === getWindow(popper) && getComputedStyle(offsetParent = getDocumentElement(popper)).position !== 'static' && (heightProp = 'scrollHeight', widthProp = 'scrollWidth'), placement === enums_top && (sideY = bottom, y -= offsetParent[heightProp] - popperRect.height, y *= gpuAcceleration ? 1 : -1), placement === left && (sideX = right, x -= offsetParent[widthProp] - popperRect.width, x *= gpuAcceleration ? 1 : -1);
		}

		let _Object$assign; let commonStyles = {position, ...adaptive && unsetSides}; return gpuAcceleration ? ({...commonStyles, ...((_Object$assign = {})[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) < 2 ? 'translate(' + x + 'px, ' + y + 'px)' : 'translate3d(' + x + 'px, ' + y + 'px, 0)', _Object$assign)}) : ({...commonStyles, ...((_Object$assign2 = {})[sideY] = hasY ? y + 'px' : '', _Object$assign2[sideX] = hasX ? x + 'px' : '', _Object$assign2.transform = '', _Object$assign2)});
	}

	let hash = {left: 'right', right: 'left', bottom: 'top', top: 'bottom'}; function getOppositePlacement(placement) {
		return placement.replace(/left|right|bottom|top/g, (matched => hash[matched]));
	}

	let getOppositeVariationPlacement_hash = {start: 'end', end: 'start'}; function getOppositeVariationPlacement(placement) {
		return placement.replace(/start|end/g, (matched => getOppositeVariationPlacement_hash[matched]));
	}

	function contains(parent, child) {
		let rootNode = child.getRootNode && child.getRootNode(); if (parent.contains(child)) {
			return !0;
		}

		if (rootNode && isShadowRoot(rootNode)) {
			let next = child; do {
				if (next && parent.isSameNode(next)) {
					return !0;
				}

				next = next.parentNode || next.host;
			} while (next);
		}

		return !1;
	}

	function rectToClientRect(rect) {
		return {...rect, left: rect.x, top: rect.y, right: rect.x + rect.width, bottom: rect.y + rect.height};
	}

	function getClientRectFromMixedType(element, clippingParent) {
		return clippingParent === 'viewport' ? rectToClientRect((function getViewportRect(element) {
			let win = getWindow(element); let html = getDocumentElement(element); let {visualViewport} = win; let width = html.clientWidth; let height = html.clientHeight; let x = 0; let y = 0; return visualViewport && (width = visualViewport.width, height = visualViewport.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (x = visualViewport.offsetLeft, y = visualViewport.offsetTop)), {width, height, x: x + getWindowScrollBarX(element), y};
		})(element)) : isHTMLElement(clippingParent) ? (function getInnerBoundingClientRect(element) {
			let rect = getBoundingClientRect(element); return rect.top += element.clientTop, rect.left += element.clientLeft, rect.bottom = rect.top + element.clientHeight, rect.right = rect.left + element.clientWidth, rect.width = element.clientWidth, rect.height = element.clientHeight, rect.x = rect.left, rect.y = rect.top, rect;
		})(clippingParent) : rectToClientRect((function getDocumentRect(element) {
			let _element$ownerDocumen; let html = getDocumentElement(element); let winScroll = getWindowScroll(element); let body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body; let width = math_max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0); let height = math_max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0); let x = -winScroll.scrollLeft + getWindowScrollBarX(element); let y = -winScroll.scrollTop; return getComputedStyle(body || html).direction === 'rtl' && (x += math_max(html.clientWidth, body ? body.clientWidth : 0) - width), {width, height, x, y};
		})(getDocumentElement(element)));
	}

	function getClippingRect(element, boundary, rootBoundary) {
		let mainClippingParents = boundary === 'clippingParents' ? (function getClippingParents(element) {
			let clippingParents = listScrollParents(getParentNode(element)); let clipperElement = ['absolute', 'fixed'].indexOf(getComputedStyle(element).position) >= 0 && isHTMLElement(element) ? getOffsetParent(element) : element; return isElement(clipperElement) ? clippingParents.filter((clippingParent => isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body')) : [];
		})(element) : [].concat(boundary); let clippingParents = [].concat(mainClippingParents, [rootBoundary]); let firstClippingParent = clippingParents[0]; let clippingRect = clippingParents.reduce(((accRect, clippingParent) => {
			let rect = getClientRectFromMixedType(element, clippingParent); return accRect.top = math_max(rect.top, accRect.top), accRect.right = math_min(rect.right, accRect.right), accRect.bottom = math_min(rect.bottom, accRect.bottom), accRect.left = math_max(rect.left, accRect.left), accRect;
		}), getClientRectFromMixedType(element, firstClippingParent)); return clippingRect.width = clippingRect.right - clippingRect.left, clippingRect.height = clippingRect.bottom - clippingRect.top, clippingRect.x = clippingRect.left, clippingRect.y = clippingRect.top, clippingRect;
	}

	function mergePaddingObject(paddingObject) {
		return {top: 0, right: 0, bottom: 0, left: 0, ...paddingObject};
	}

	function expandToHashMap(value, keys) {
		return keys.reduce(((hashMap, key) => (hashMap[key] = value, hashMap)), {});
	}

	function detectOverflow(state, options) {
		void 0 === options && (options = {}); let _options = options; let _options$placement = _options.placement; let placement = void 0 === _options$placement ? state.placement : _options$placement; let _options$boundary = _options.boundary; let boundary = void 0 === _options$boundary ? 'clippingParents' : _options$boundary; let _options$rootBoundary = _options.rootBoundary; let rootBoundary = void 0 === _options$rootBoundary ? 'viewport' : _options$rootBoundary; let _options$elementConte = _options.elementContext; let elementContext = void 0 === _options$elementConte ? 'popper' : _options$elementConte; let _options$altBoundary = _options.altBoundary; let altBoundary = void 0 !== _options$altBoundary && _options$altBoundary; let _options$padding = _options.padding; let padding = void 0 === _options$padding ? 0 : _options$padding; let paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements)); let altContext = elementContext === 'popper' ? 'reference' : 'popper'; let referenceElement = state.elements.reference; let popperRect = state.rects.popper; let element = state.elements[altBoundary ? altContext : elementContext]; let clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary); let referenceClientRect = getBoundingClientRect(referenceElement); let popperOffsets = computeOffsets({reference: referenceClientRect, element: popperRect, strategy: 'absolute', placement}); let popperClientRect = rectToClientRect({...popperRect, ...popperOffsets}); let elementClientRect = elementContext === 'popper' ? popperClientRect : referenceClientRect; let overflowOffsets = {top: clippingClientRect.top - elementClientRect.top + paddingObject.top, bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom, left: clippingClientRect.left - elementClientRect.left + paddingObject.left, right: elementClientRect.right - clippingClientRect.right + paddingObject.right}; let offsetData = state.modifiersData.offset; if (elementContext === 'popper' && offsetData) {
			let offset = offsetData[placement]; Object.keys(overflowOffsets).forEach((key => {
				let multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1; let axis = [enums_top, bottom].indexOf(key) >= 0 ? 'y' : 'x'; overflowOffsets[key] += offset[axis] * multiply;
			}));
		}

		return overflowOffsets;
	}

	function within(min, value, max) {
		return math_max(min, math_min(value, max));
	}

	function getSideOffsets(overflow, rect, preventedOffsets) {
		return void 0 === preventedOffsets && (preventedOffsets = {x: 0, y: 0}), {top: overflow.top - rect.height - preventedOffsets.y, right: overflow.right - rect.width + preventedOffsets.x, bottom: overflow.bottom - rect.height + preventedOffsets.y, left: overflow.left - rect.width - preventedOffsets.x};
	}

	function isAnySideFullyClipped(overflow) {
		return [enums_top, right, bottom, left].some((side => overflow[side] >= 0));
	}

	let popper_createPopper = popperGenerator({defaultModifiers: [eventListeners, modifiers_popperOffsets, {name: 'computeStyles', enabled: !0, phase: 'beforeWrite', fn: function computeStyles(_ref4) {
		let {state} = _ref4; let {options} = _ref4; let _options$gpuAccelerat = options.gpuAcceleration; let gpuAcceleration = void 0 === _options$gpuAccelerat || _options$gpuAccelerat; let _options$adaptive = options.adaptive; let adaptive = void 0 === _options$adaptive || _options$adaptive; let _options$roundOffsets = options.roundOffsets; let roundOffsets = void 0 === _options$roundOffsets || _options$roundOffsets; let
			commonStyles = {placement: getBasePlacement(state.placement), popper: state.elements.popper, popperRect: state.rects.popper, gpuAcceleration}; state.modifiersData.popperOffsets != null && (state.styles.popper = {...state.styles.popper, ...mapToStyles({...commonStyles, offsets: state.modifiersData.popperOffsets, position: state.options.strategy, adaptive, roundOffsets})}), state.modifiersData.arrow != null && (state.styles.arrow = {...state.styles.arrow, ...mapToStyles({...commonStyles, offsets: state.modifiersData.arrow, position: 'absolute', adaptive: !1, roundOffsets})}), state.attributes.popper = {...state.attributes.popper, 'data-popper-placement': state.placement};
	}, data: {}}, {name: 'applyStyles', enabled: !0, phase: 'write', fn: function applyStyles(_ref) {
		let {state} = _ref; Object.keys(state.elements).forEach((name => {
			let style = state.styles[name] || {}; let attributes = state.attributes[name] || {}; let element = state.elements[name]; isHTMLElement(element) && getNodeName(element) && (Object.assign(element.style, style), Object.keys(attributes).forEach((name => {
				let value = attributes[name]; !1 === value ? element.removeAttribute(name) : element.setAttribute(name, !0 === value ? '' : value);
			})));
		}));
	}, effect: function applyStyles_effect(_ref2) {
		let {state} = _ref2; let
			initialStyles = {popper: {position: state.options.strategy, left: '0', top: '0', margin: '0'}, arrow: {position: 'absolute'}, reference: {}}; return Object.assign(state.elements.popper.style, initialStyles.popper), state.styles = initialStyles, state.elements.arrow && Object.assign(state.elements.arrow.style, initialStyles.arrow), function () {
			Object.keys(state.elements).forEach((name => {
				let element = state.elements[name]; let attributes = state.attributes[name] || {}; let style = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]).reduce(((style, property) => (style[property] = '', style)), {}); isHTMLElement(element) && getNodeName(element) && (Object.assign(element.style, style), Object.keys(attributes).forEach((attribute => {
					element.removeAttribute(attribute);
				})));
			}));
		};
	}, requires: ['computeStyles']}, {name: 'offset', enabled: !0, phase: 'main', requires: ['popperOffsets'], fn: function offset_offset(_ref2) {
		let {state} = _ref2; let {options} = _ref2; let {name} = _ref2; let _options$offset = options.offset; let offset = void 0 === _options$offset ? [0, 0] : _options$offset; let data = enums_placements.reduce(((acc, placement) => (acc[placement] = (function distanceAndSkiddingToXY(placement, rects, offset) {
			let basePlacement = getBasePlacement(placement); let invertDistance = [left, enums_top].indexOf(basePlacement) >= 0 ? -1 : 1; let _ref = typeof offset === 'function' ? offset({...rects, placement}) : offset; let skidding = _ref[0]; let distance = _ref[1]; return skidding = skidding || 0, distance = (distance || 0) * invertDistance, [left, right].indexOf(basePlacement) >= 0 ? {x: distance, y: skidding} : {x: skidding, y: distance};
		})(placement, state.rects, offset), acc)), {}); let _data$state$placement = data[state.placement]; let {x} = _data$state$placement; let
			{y} = _data$state$placement; state.modifiersData.popperOffsets != null && (state.modifiersData.popperOffsets.x += x, state.modifiersData.popperOffsets.y += y), state.modifiersData[name] = data;
	}}, {name: 'flip', enabled: !0, phase: 'main', fn: function flip(_ref) {
		let {state} = _ref; let {options} = _ref; let
			{name} = _ref; if (!state.modifiersData[name]._skip) {
			for (var _options$mainAxis = options.mainAxis, checkMainAxis = void 0 === _options$mainAxis || _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = void 0 === _options$altAxis || _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, {padding} = options, {boundary} = options, {rootBoundary} = options, {altBoundary} = options, _options$flipVariatio = options.flipVariations, flipVariations = void 0 === _options$flipVariatio || _options$flipVariatio, {allowedAutoPlacements} = options, preferredPlacement = state.options.placement, basePlacement = getBasePlacement(preferredPlacement), fallbackPlacements = specifiedFallbackPlacements || (basePlacement === preferredPlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : (function getExpandedFallbackPlacements(placement) {
					if (getBasePlacement(placement) === 'auto') {
						return [];
					}

					let oppositePlacement = getOppositePlacement(placement); return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
				})(preferredPlacement)), placements = [preferredPlacement].concat(fallbackPlacements).reduce(((acc, placement) => acc.concat(getBasePlacement(placement) === 'auto' ? (function computeAutoPlacement(state, options) {
					void 0 === options && (options = {}); let _options = options; let {placement} = _options; let {boundary} = _options; let {rootBoundary} = _options; let {padding} = _options; let {flipVariations} = _options; let _options$allowedAutoP = _options.allowedAutoPlacements; let allowedAutoPlacements = void 0 === _options$allowedAutoP ? enums_placements : _options$allowedAutoP; let variation = getVariation(placement); let placements = variation ? flipVariations ? variationPlacements : variationPlacements.filter((placement => getVariation(placement) === variation)) : basePlacements; let allowedPlacements = placements.filter((placement => allowedAutoPlacements.indexOf(placement) >= 0)); allowedPlacements.length === 0 && (allowedPlacements = placements); let overflows = allowedPlacements.reduce(((acc, placement) => (acc[placement] = detectOverflow(state, {placement, boundary, rootBoundary, padding})[getBasePlacement(placement)], acc)), {}); return Object.keys(overflows).sort(((a, b) => overflows[a] - overflows[b]));
				})(state, {placement, boundary, rootBoundary, padding, flipVariations, allowedAutoPlacements}) : placement)), []), referenceRect = state.rects.reference, popperRect = state.rects.popper, checksMap = new Map(), makeFallbackChecks = !0, firstFittingPlacement = placements[0], i = 0; i < placements.length; i++) {
				let placement = placements[i]; let _basePlacement = getBasePlacement(placement); let isStartVariation = getVariation(placement) === 'start'; let isVertical = [enums_top, bottom].indexOf(_basePlacement) >= 0; let len = isVertical ? 'width' : 'height'; let overflow = detectOverflow(state, {placement, boundary, rootBoundary, altBoundary, padding}); let mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : enums_top; referenceRect[len] > popperRect[len] && (mainVariationSide = getOppositePlacement(mainVariationSide)); let altVariationSide = getOppositePlacement(mainVariationSide); let checks = []; if (checkMainAxis && checks.push(overflow[_basePlacement] <= 0), checkAltAxis && checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0), checks.every((check => check))) {
					firstFittingPlacement = placement, makeFallbackChecks = !1; break;
				}

				checksMap.set(placement, checks);
			}

			if (makeFallbackChecks) {
				for (let _loop = function _loop(_i) {
						let fittingPlacement = placements.find((placement => {
							let checks = checksMap.get(placement); if (checks) {
								return checks.slice(0, _i).every((check => check));
							}
						})); if (fittingPlacement) {
							return firstFittingPlacement = fittingPlacement, 'break';
						}
					}, _i = flipVariations ? 3 : 1; _i > 0; _i--) {
					if (_loop(_i) === 'break') {
						break;
					}
				}
			}

			state.placement !== firstFittingPlacement && (state.modifiersData[name]._skip = !0, state.placement = firstFittingPlacement, state.reset = !0);
		}
	}, requiresIfExists: ['offset'], data: {_skip: !1}}, {name: 'preventOverflow', enabled: !0, phase: 'main', fn: function preventOverflow(_ref) {
		let {state} = _ref; let {options} = _ref; let {name} = _ref; let _options$mainAxis = options.mainAxis; let checkMainAxis = void 0 === _options$mainAxis || _options$mainAxis; let _options$altAxis = options.altAxis; let checkAltAxis = void 0 !== _options$altAxis && _options$altAxis; let {boundary} = options; let {rootBoundary} = options; let {altBoundary} = options; let {padding} = options; let _options$tether = options.tether; let tether = void 0 === _options$tether || _options$tether; let _options$tetherOffset = options.tetherOffset; let tetherOffset = void 0 === _options$tetherOffset ? 0 : _options$tetherOffset; let overflow = detectOverflow(state, {boundary, rootBoundary, padding, altBoundary}); let basePlacement = getBasePlacement(state.placement); let variation = getVariation(state.placement); let isBasePlacement = !variation; let mainAxis = getMainAxisFromPlacement(basePlacement); let altAxis = (function getAltAxis(axis) {
			return axis === 'x' ? 'y' : 'x';
		})(mainAxis); let {popperOffsets} = state.modifiersData; let referenceRect = state.rects.reference; let popperRect = state.rects.popper; let tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset({...state.rects, placement: state.placement}) : tetherOffset; let
			data = {x: 0, y: 0}; if (popperOffsets) {
			if (checkMainAxis || checkAltAxis) {
				let mainSide = mainAxis === 'y' ? enums_top : left; let altSide = mainAxis === 'y' ? bottom : right; let len = mainAxis === 'y' ? 'height' : 'width'; let offset = popperOffsets[mainAxis]; let min = popperOffsets[mainAxis] + overflow[mainSide]; let max = popperOffsets[mainAxis] - overflow[altSide]; let additive = tether ? -popperRect[len] / 2 : 0; let minLen = variation === 'start' ? referenceRect[len] : popperRect[len]; let maxLen = variation === 'start' ? -popperRect[len] : -referenceRect[len]; let arrowElement = state.elements.arrow; let arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {width: 0, height: 0}; let arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : {top: 0, right: 0, bottom: 0, left: 0}; let arrowPaddingMin = arrowPaddingObject[mainSide]; let arrowPaddingMax = arrowPaddingObject[altSide]; let arrowLen = within(0, referenceRect[len], arrowRect[len]); let minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue; let maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue; let arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow); let clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0; let offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0; let tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset; let tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue; if (checkMainAxis) {
					let preventedOffset = within(tether ? math_min(min, tetherMin) : min, offset, tether ? math_max(max, tetherMax) : max); popperOffsets[mainAxis] = preventedOffset, data[mainAxis] = preventedOffset - offset;
				}

				if (checkAltAxis) {
					let _mainSide = mainAxis === 'x' ? enums_top : left; let _altSide = mainAxis === 'x' ? bottom : right; let _offset = popperOffsets[altAxis]; let _min = _offset + overflow[_mainSide]; let _max = _offset - overflow[_altSide]; let _preventedOffset = within(tether ? math_min(_min, tetherMin) : _min, _offset, tether ? math_max(_max, tetherMax) : _max); popperOffsets[altAxis] = _preventedOffset, data[altAxis] = _preventedOffset - _offset;
				}
			}

			state.modifiersData[name] = data;
		}
	}, requiresIfExists: ['offset']}, {name: 'arrow', enabled: !0, phase: 'main', fn: function arrow(_ref) {
		let _state$modifiersData$; let {state} = _ref; let {name} = _ref; let arrowElement = state.elements.arrow; let {popperOffsets} = state.modifiersData; let basePlacement = getBasePlacement(state.placement); let axis = getMainAxisFromPlacement(basePlacement); let len = [left, right].indexOf(basePlacement) >= 0 ? 'height' : 'width'; if (arrowElement && popperOffsets) {
			let paddingObject = state.modifiersData[name + '#persistent'].padding; let arrowRect = getLayoutRect(arrowElement); let minProp = axis === 'y' ? enums_top : left; let maxProp = axis === 'y' ? bottom : right; let endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len]; let startDiff = popperOffsets[axis] - state.rects.reference[axis]; let arrowOffsetParent = getOffsetParent(arrowElement); let clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0; let centerToReference = endDiff / 2 - startDiff / 2; let min = paddingObject[minProp]; let max = clientSize - arrowRect[len] - paddingObject[maxProp]; let center = clientSize / 2 - arrowRect[len] / 2 + centerToReference; let offset = within(min, center, max); let axisProp = axis; state.modifiersData[name] = ((_state$modifiersData$ = {})[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
		}
	}, effect: function arrow_effect(_ref2) {
		let {state} = _ref2; let {options} = _ref2; let {name} = _ref2; let _options$element = options.element; let arrowElement = void 0 === _options$element ? '[data-popper-arrow]' : _options$element; let _options$padding = options.padding; let
			padding = void 0 === _options$padding ? 0 : _options$padding; arrowElement != null && (typeof arrowElement !== 'string' || (arrowElement = state.elements.popper.querySelector(arrowElement))) && contains(state.elements.popper, arrowElement) && (padding = typeof padding === 'function' ? padding({...state.rects, placement: state.placement}) : padding, state.elements.arrow = arrowElement, state.modifiersData[name + '#persistent'] = {padding: mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements))});
	}, requires: ['popperOffsets'], requiresIfExists: ['preventOverflow']}, {name: 'hide', enabled: !0, phase: 'main', requiresIfExists: ['preventOverflow'], fn: function hide(_ref) {
		let {state} = _ref; let {name} = _ref; let referenceRect = state.rects.reference; let popperRect = state.rects.popper; let preventedOffsets = state.modifiersData.preventOverflow; let referenceOverflow = detectOverflow(state, {elementContext: 'reference'}); let popperAltOverflow = detectOverflow(state, {altBoundary: !0}); let referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect); let popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets); let isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets); let
			hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets); state.modifiersData[name] = {referenceClippingOffsets, popperEscapeOffsets, isReferenceHidden, hasPopperEscaped}, state.attributes.popper = {...state.attributes.popper, 'data-popper-reference-hidden': isReferenceHidden, 'data-popper-escaped': hasPopperEscaped};
	}}]}); let react_fast_compare = __webpack_require__(396); let react_fast_compare_default = __webpack_require__.n(react_fast_compare); let EMPTY_MODIFIERS = []; let NOOP = function NOOP() {}; let NOOP_PROMISE = function NOOP_PROMISE() {
		return Promise.resolve(null);
	};

	let Popper_EMPTY_MODIFIERS = []; function Popper(_ref) {
		let _ref$placement = _ref.placement; let placement = void 0 === _ref$placement ? 'bottom' : _ref$placement; let _ref$strategy = _ref.strategy; let strategy = void 0 === _ref$strategy ? 'absolute' : _ref$strategy; let _ref$modifiers = _ref.modifiers; let modifiers = void 0 === _ref$modifiers ? Popper_EMPTY_MODIFIERS : _ref$modifiers; let {referenceElement} = _ref; let {onFirstUpdate} = _ref; let {innerRef} = _ref; let {children} = _ref; let referenceNode = react.useContext(ManagerReferenceNodeContext); let _React$useState = react.useState(null); let popperElement = _React$useState[0]; let setPopperElement = _React$useState[1]; let _React$useState2 = react.useState(null); let arrowElement = _React$useState2[0]; let setArrowElement = _React$useState2[1]; react.useEffect((() => {
			setRef(innerRef, popperElement);
		}), [innerRef, popperElement]); let options = react.useMemo((() => ({placement, strategy, onFirstUpdate, modifiers: [].concat(modifiers, [{name: 'arrow', enabled: arrowElement != null, options: {element: arrowElement}}])})), [placement, strategy, onFirstUpdate, modifiers, arrowElement]); let _usePopper = (function usePopper(referenceElement, popperElement, options) {
			void 0 === options && (options = {}); let prevOptions = react.useRef(null); let optionsWithDefaults = {onFirstUpdate: options.onFirstUpdate, placement: options.placement || 'bottom', strategy: options.strategy || 'absolute', modifiers: options.modifiers || EMPTY_MODIFIERS}; let _React$useState = react.useState({styles: {popper: {position: optionsWithDefaults.strategy, left: '0', top: '0'}}, attributes: {}}); let state = _React$useState[0]; let setState = _React$useState[1]; let updateStateModifier = react.useMemo((() => ({name: 'updateState', enabled: !0, phase: 'write', fn: function fn(_ref) {
				let {state} = _ref; let
					elements = Object.keys(state.elements); setState({styles: fromEntries(elements.map((element => [element, state.styles[element] || {}]))), attributes: fromEntries(elements.map((element => [element, state.attributes[element]])))});
			}, requires: ['computeStyles']})), []); let popperOptions = react.useMemo((() => {
				let newOptions = {onFirstUpdate: optionsWithDefaults.onFirstUpdate, placement: optionsWithDefaults.placement, strategy: optionsWithDefaults.strategy, modifiers: [].concat(optionsWithDefaults.modifiers, [updateStateModifier, {name: 'applyStyles', enabled: !1}])}; return react_fast_compare_default()(prevOptions.current, newOptions) ? prevOptions.current || newOptions : (prevOptions.current = newOptions, newOptions);
			}), [optionsWithDefaults.onFirstUpdate, optionsWithDefaults.placement, optionsWithDefaults.strategy, optionsWithDefaults.modifiers, updateStateModifier]); let popperInstanceRef = react.useRef(); return useIsomorphicLayoutEffect((() => {
				popperInstanceRef.current && popperInstanceRef.current.setOptions(popperOptions);
			}), [popperOptions]), useIsomorphicLayoutEffect((() => {
				if (referenceElement != null && popperElement != null) {
					let popperInstance = (options.createPopper || popper_createPopper)(referenceElement, popperElement, popperOptions); return popperInstanceRef.current = popperInstance, function () {
						popperInstance.destroy(), popperInstanceRef.current = null;
					};
				}
			}), [referenceElement, popperElement, options.createPopper]), {state: popperInstanceRef.current ? popperInstanceRef.current.state : null, styles: state.styles, attributes: state.attributes, update: popperInstanceRef.current ? popperInstanceRef.current.update : null, forceUpdate: popperInstanceRef.current ? popperInstanceRef.current.forceUpdate : null};
		})(referenceElement || referenceNode, popperElement, options); let {state} = _usePopper; let {styles} = _usePopper; let {forceUpdate} = _usePopper; let {update} = _usePopper; let childrenProps = react.useMemo((() => ({ref: setPopperElement, style: styles.popper, placement: state ? state.placement : placement, hasPopperEscaped: state && state.modifiersData.hide ? state.modifiersData.hide.hasPopperEscaped : null, isReferenceHidden: state && state.modifiersData.hide ? state.modifiersData.hide.isReferenceHidden : null, arrowProps: {style: styles.arrow, ref: setArrowElement}, forceUpdate: forceUpdate || NOOP, update: update || NOOP_PROMISE})), [setPopperElement, setArrowElement, placement, state, styles, update, forceUpdate]); return unwrapArray(children)(childrenProps);
	}

	let warning = __webpack_require__(455); let warning_default = __webpack_require__.n(warning); function Reference(_ref) {
		let {children} = _ref; let {innerRef} = _ref; let setReferenceNode = react.useContext(ManagerReferenceNodeSetterContext); let
			refHandler = react.useCallback((node => {
				setRef(innerRef, node), safeInvoke(setReferenceNode, node);
			}), [innerRef, setReferenceNode]); return react.useEffect((() => function () {
			return setRef(innerRef, null);
		})), react.useEffect((() => {
			warning_default()(Boolean(setReferenceNode), '`Reference` should not be used outside of a `Manager` component.');
		}), [setReferenceNode]), unwrapArray(children)({ref: refHandler});
	}

	let TooltipContext = react_default.a.createContext({}); let callAll = function callAll() {
		for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
			fns[_key] = arguments[_key];
		}

		return function () {
			for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
				args[_key2] = arguments[_key2];
			}

			return fns.forEach((fn => fn && fn.apply(void 0, args)));
		};
	};

	let canUseDOM = function canUseDOM() {
		return !(typeof window === 'undefined' || !window.document || !window.document.createElement);
	};

	let react_popper_tooltip_setRef = function setRef(ref, node) {
		if (typeof ref === 'function') {
			return ref(node);
		}

		ref != null && (ref.current = node);
	};

	let react_popper_tooltip_Tooltip = (function (_Component) {
		function Tooltip() {
			for (var _this, _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return (_this = _Component.call.apply(_Component, [this].concat(args)) || this).observer = void 0, _this.tooltipRef = void 0, _this.handleOutsideClick = function (event) {
				if (_this.tooltipRef && !_this.tooltipRef.contains(event.target)) {
					let {parentOutsideClickHandler} = _this.context; let _this$props = _this.props; let
						{hideTooltip} = _this$props; (0, _this$props.clearScheduled)(), hideTooltip(), parentOutsideClickHandler && parentOutsideClickHandler(event);
				}
			}, _this.handleOutsideRightClick = function (event) {
				if (_this.tooltipRef && !_this.tooltipRef.contains(event.target)) {
					let {parentOutsideRightClickHandler} = _this.context; let _this$props2 = _this.props; let
						{hideTooltip} = _this$props2; (0, _this$props2.clearScheduled)(), hideTooltip(), parentOutsideRightClickHandler && parentOutsideRightClickHandler(event);
				}
			}, _this.addOutsideClickHandler = function () {
				document.body.addEventListener('touchend', _this.handleOutsideClick), document.body.addEventListener('click', _this.handleOutsideClick);
			}, _this.removeOutsideClickHandler = function () {
				document.body.removeEventListener('touchend', _this.handleOutsideClick), document.body.removeEventListener('click', _this.handleOutsideClick);
			}, _this.addOutsideRightClickHandler = function () {
				return document.body.addEventListener('contextmenu', _this.handleOutsideRightClick);
			}, _this.removeOutsideRightClickHandler = function () {
				return document.body.removeEventListener('contextmenu', _this.handleOutsideRightClick);
			}, _this.getTooltipRef = function (node) {
				_this.tooltipRef = node, react_popper_tooltip_setRef(_this.props.innerRef, node);
			}, _this.getArrowProps = function (props) {
				return void 0 === props && (props = {}), Object(esm_extends.a)({}, props, {style: Object(esm_extends.a)({}, props.style, _this.props.arrowProps.style)});
			}, _this.getTooltipProps = function (props) {
				return void 0 === props && (props = {}), Object(esm_extends.a)({}, props, _this.isTriggeredBy('hover') && {onMouseEnter: callAll(_this.props.clearScheduled, props.onMouseEnter), onMouseLeave: callAll(_this.props.hideTooltip, props.onMouseLeave)}, {style: Object(esm_extends.a)({}, props.style, _this.props.style)});
			}, _this.contextValue = {isParentNoneTriggered: _this.props.trigger === 'none', addParentOutsideClickHandler: _this.addOutsideClickHandler, addParentOutsideRightClickHandler: _this.addOutsideRightClickHandler, parentOutsideClickHandler: _this.handleOutsideClick, parentOutsideRightClickHandler: _this.handleOutsideRightClick, removeParentOutsideClickHandler: _this.removeOutsideClickHandler, removeParentOutsideRightClickHandler: _this.removeOutsideRightClickHandler}, _this;
		}

		Object(inheritsLoose.a)(Tooltip, _Component); let _proto = Tooltip.prototype; return _proto.componentDidMount = function componentDidMount() {
			let _this2 = this; if ((this.observer = new MutationObserver((() => {
				_this2.props.update();
			}))).observe(this.tooltipRef, this.props.mutationObserverOptions), this.isTriggeredBy('hover') || this.isTriggeredBy('click') || this.isTriggeredBy('right-click')) {
				let _this$context = this.context; let {removeParentOutsideClickHandler} = _this$context; let {removeParentOutsideRightClickHandler} = _this$context; this.addOutsideClickHandler(), this.addOutsideRightClickHandler(), removeParentOutsideClickHandler && removeParentOutsideClickHandler(), removeParentOutsideRightClickHandler && removeParentOutsideRightClickHandler();
			}
		}, _proto.componentDidUpdate = function componentDidUpdate() {
			this.props.closeOnReferenceHidden && this.props.isReferenceHidden && this.props.hideTooltip();
		}, _proto.componentWillUnmount = function componentWillUnmount() {
			if (this.observer && this.observer.disconnect(), this.isTriggeredBy('hover') || this.isTriggeredBy('click') || this.isTriggeredBy('right-click')) {
				let _this$context2 = this.context; let {isParentNoneTriggered} = _this$context2; let {addParentOutsideClickHandler} = _this$context2; let {addParentOutsideRightClickHandler} = _this$context2; this.removeOutsideClickHandler(), this.removeOutsideRightClickHandler(), this.handleOutsideClick = void 0, this.handleOutsideRightClick = void 0, !isParentNoneTriggered && addParentOutsideClickHandler && addParentOutsideClickHandler(), !isParentNoneTriggered && addParentOutsideRightClickHandler && addParentOutsideRightClickHandler();
			}
		}, _proto.render = function render() {
			let _this$props3 = this.props; let {arrowProps} = _this$props3; let {placement} = _this$props3; let {tooltip} = _this$props3; return react_default.a.createElement(TooltipContext.Provider, {value: this.contextValue}, tooltip({arrowRef: arrowProps.ref, getArrowProps: this.getArrowProps, getTooltipProps: this.getTooltipProps, placement, tooltipRef: this.getTooltipRef}));
		}, _proto.isTriggeredBy = function isTriggeredBy(event) {
			let {trigger} = this.props; return trigger === event || Array.isArray(trigger) && trigger.includes(event);
		}, Tooltip;
	})(react.Component); react_popper_tooltip_Tooltip.contextType = TooltipContext; let react_popper_tooltip_TooltipTrigger = (function (_Component) {
		function TooltipTrigger() {
			for (var _this, _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return (_this = _Component.call.apply(_Component, [this].concat(args)) || this).state = {tooltipShown: _this.props.defaultTooltipShown}, _this.hideTimeout = void 0, _this.showTimeout = void 0, _this.popperOffset = void 0, _this.setTooltipState = function (state) {
				let cb = function cb() {
					return _this.props.onVisibilityChange(state.tooltipShown);
				};

				_this.isControlled() ? cb() : _this.setState(state, cb);
			}, _this.clearScheduled = function () {
				clearTimeout(_this.hideTimeout), clearTimeout(_this.showTimeout);
			}, _this.showTooltip = function (_ref) {
				let {pageX} = _ref; let
					{pageY} = _ref; _this.clearScheduled(); let state = {tooltipShown: !0}; _this.props.followCursor && (state = Object(esm_extends.a)({}, state, {pageX, pageY})), _this.showTimeout = window.setTimeout((() => _this.setTooltipState(state)), _this.props.delayShow);
			}, _this.hideTooltip = function () {
				_this.clearScheduled(), _this.hideTimeout = window.setTimeout((() => _this.setTooltipState({tooltipShown: !1})), _this.props.delayHide);
			}, _this.toggleTooltip = function (_ref2) {
				let {pageX} = _ref2; let {pageY} = _ref2; let
					action = _this.getState() ? 'hideTooltip' : 'showTooltip'; _this[action]({pageX, pageY});
			}, _this.clickToggle = function (event) {
				event.preventDefault(); let {pageX} = event; let {pageY} = event; let
					action = _this.props.followCursor ? 'showTooltip' : 'toggleTooltip'; _this[action]({pageX, pageY});
			}, _this.contextMenuToggle = function (event) {
				event.preventDefault(); let {pageX} = event; let {pageY} = event; let
					action = _this.props.followCursor ? 'showTooltip' : 'toggleTooltip'; _this[action]({pageX, pageY});
			}, _this.getTriggerProps = function (props) {
				return void 0 === props && (props = {}), Object(esm_extends.a)({}, props, _this.isTriggeredBy('click') && {onClick: callAll(_this.clickToggle, props.onClick), onTouchEnd: callAll(_this.clickToggle, props.onTouchEnd)}, _this.isTriggeredBy('right-click') && {onContextMenu: callAll(_this.contextMenuToggle, props.onContextMenu)}, _this.isTriggeredBy('hover') && Object(esm_extends.a)({onMouseEnter: callAll(_this.showTooltip, props.onMouseEnter), onMouseLeave: callAll(_this.hideTooltip, props.onMouseLeave)}, _this.props.followCursor && {onMouseMove: callAll(_this.showTooltip, props.onMouseMove)}), _this.isTriggeredBy('focus') && {onFocus: callAll(_this.showTooltip, props.onFocus), onBlur: callAll(_this.hideTooltip, props.onBlur)});
			}, _this;
		}

		Object(inheritsLoose.a)(TooltipTrigger, _Component); let _proto = TooltipTrigger.prototype; return _proto.componentWillUnmount = function componentWillUnmount() {
			this.clearScheduled();
		}, _proto.render = function render() {
			let _this2 = this; let _this$props = this.props; let {children} = _this$props; let {tooltip} = _this$props; let {placement} = _this$props; let {trigger} = _this$props; let {getTriggerRef} = _this$props; let {modifiers} = _this$props; let {closeOnReferenceHidden} = _this$props; let {usePortal} = _this$props; let {portalContainer} = _this$props; let {followCursor} = _this$props; let {getTooltipRef} = _this$props; let {mutationObserverOptions} = _this$props; let restProps = Object(objectWithoutPropertiesLoose.a)(_this$props, ['children', 'tooltip', 'placement', 'trigger', 'getTriggerRef', 'modifiers', 'closeOnReferenceHidden', 'usePortal', 'portalContainer', 'followCursor', 'getTooltipRef', 'mutationObserverOptions']); let popper = react_default.a.createElement(Popper, Object(esm_extends.a)({innerRef: getTooltipRef, placement, modifiers: [{name: 'followCursor', enabled: followCursor, phase: 'main', fn: function fn(data) {
				_this2.popperOffset = data.state.rects.popper;
			}}].concat(modifiers)}, restProps), (_ref3 => {
				let {ref} = _ref3; let {style} = _ref3; let {placement} = _ref3; let {arrowProps} = _ref3; let {isReferenceHidden} = _ref3; let
					{update} = _ref3; if (followCursor && _this2.popperOffset) {
					let _this2$state = _this2.state; let {pageX} = _this2$state; let {pageY} = _this2$state; let _this2$popperOffset = _this2.popperOffset; let {width} = _this2$popperOffset; let {height} = _this2$popperOffset; let x = pageX + width > window.pageXOffset + document.body.offsetWidth ? pageX - width : pageX; let y = pageY + height > window.pageYOffset + document.body.offsetHeight ? pageY - height : pageY; style.transform = 'translate3d(' + x + 'px, ' + y + 'px, 0';
				}

				return react_default.a.createElement(react_popper_tooltip_Tooltip, Object(esm_extends.a)({arrowProps, closeOnReferenceHidden, isReferenceHidden, placement, update, style, tooltip, trigger, mutationObserverOptions}, {clearScheduled: _this2.clearScheduled, hideTooltip: _this2.hideTooltip, innerRef: ref}));
			})); return react_default.a.createElement(Manager, null, react_default.a.createElement(Reference, {innerRef: getTriggerRef}, (_ref4 => {
				let {ref} = _ref4; return children({getTriggerProps: _this2.getTriggerProps, triggerRef: ref});
			})), this.getState() && (usePortal ? Object(react_dom.createPortal)(popper, portalContainer) : popper));
		}, _proto.isControlled = function isControlled() {
			return void 0 !== this.props.tooltipShown;
		}, _proto.getState = function getState() {
			return this.isControlled() ? this.props.tooltipShown : this.state.tooltipShown;
		}, _proto.isTriggeredBy = function isTriggeredBy(event) {
			let {trigger} = this.props; return trigger === event || Array.isArray(trigger) && trigger.includes(event);
		}, TooltipTrigger;
	})(react.Component); react_popper_tooltip_TooltipTrigger.defaultProps = {closeOnReferenceHidden: !0, defaultTooltipShown: !1, delayHide: 0, delayShow: 0, followCursor: !1, onVisibilityChange: function noop() {}, placement: 'right', portalContainer: canUseDOM() ? document.body : null, trigger: 'hover', usePortal: canUseDOM(), mutationObserverOptions: {childList: !0, subtree: !0}, modifiers: []}; __webpack_exports__.a = react_popper_tooltip_TooltipTrigger;
}}]);
