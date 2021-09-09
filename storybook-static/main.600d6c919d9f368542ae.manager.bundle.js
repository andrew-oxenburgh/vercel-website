(window.webpackJsonp = window.webpackJsonp || []).push([[2], {1(module, __webpack_exports__, __webpack_require__) {
	'use strict'; __webpack_require__.d(__webpack_exports__, 'styled', (() => styled)), __webpack_require__.d(__webpack_exports__, 'ignoreSsrWarning', (() => ignoreSsrWarning)); let _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(454); var styled = (__webpack_require__(56), __webpack_require__(397), __webpack_require__(134), _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.a); var ignoreSsrWarning = '/* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */';
}, 100(module, __webpack_exports__, __webpack_require__) {
	'use strict'; __webpack_require__.d(__webpack_exports__, 'd', (() => mkColor)), __webpack_require__.d(__webpack_exports__, 'c', (() => lightenColor)), __webpack_require__.d(__webpack_exports__, 'a', (() => darkenColor)), __webpack_require__.d(__webpack_exports__, 'b', (() => getPreferredColorScheme)); __webpack_require__(18), __webpack_require__(4), __webpack_require__(9), __webpack_require__(5), __webpack_require__(13), __webpack_require__(6), __webpack_require__(7), __webpack_require__(10); let polished__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3); let global__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8); let global__WEBPACK_IMPORTED_MODULE_9___default = __webpack_require__.n(global__WEBPACK_IMPORTED_MODULE_9__); let _storybook_client_logger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(25); function _typeof(obj) {
		return (_typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function _typeof(obj) {
			return typeof obj;
		} : function _typeof(obj) {
			return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
		})(obj);
	}

	let globalWindow = global__WEBPACK_IMPORTED_MODULE_9___default.a.window; var mkColor = function mkColor(color) {
		return {color};
	};

	let colorFactory = function colorFactory(type) {
		return function (color) {
			if (!(function isColorString(color) {
				return typeof color === 'string' || (_storybook_client_logger__WEBPACK_IMPORTED_MODULE_10__.a.warn('Color passed to theme object should be a string. Instead ' + ''.concat(color, '(').concat(_typeof(color), ') was passed.')), !1);
			})(color)) {
				return color;
			}

			if (!(function isValidColorForPolished(color) {
				return !/(gradient|var|calc)/.test(color);
			})(color)) {
				return color;
			}

			try {
				return (function applyPolished(type, color) {
					return type === 'darken' ? Object(polished__WEBPACK_IMPORTED_MODULE_8__.d)(''.concat(Object(polished__WEBPACK_IMPORTED_MODULE_8__.a)(1, color)), 0.95) : type === 'lighten' ? Object(polished__WEBPACK_IMPORTED_MODULE_8__.d)(''.concat(Object(polished__WEBPACK_IMPORTED_MODULE_8__.b)(1, color)), 0.95) : color;
				})(type, color);
			} catch (error) {
				return color;
			}
		};
	};

	var lightenColor = colorFactory('lighten'); var darkenColor = colorFactory('darken'); var getPreferredColorScheme = function getPreferredColorScheme() {
		return globalWindow && globalWindow.matchMedia && globalWindow.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	};
}, 11(module, __webpack_exports__, __webpack_require__) {
	'use strict'; __webpack_require__.d(__webpack_exports__, 'h', (() => merge)), __webpack_require__.d(__webpack_exports__, 'a', (() => esm_ActiveTabs)), __webpack_require__.d(__webpack_exports__, 'd', (() => esm_combineParameters)), __webpack_require__.d(__webpack_exports__, 'p', (() => useStorybookState)), __webpack_require__.d(__webpack_exports__, 'o', (() => useStorybookApi)), __webpack_require__.d(__webpack_exports__, 'b', (() => ManagerConsumer)), __webpack_require__.d(__webpack_exports__, 'c', (() => esm_ManagerProvider)), __webpack_require__.d(__webpack_exports__, 'e', (() => isGroup)), __webpack_require__.d(__webpack_exports__, 'f', (() => isRoot)), __webpack_require__.d(__webpack_exports__, 'g', (() => isStory)), __webpack_require__.d(__webpack_exports__, 'n', (() => useParameter)), __webpack_require__.d(__webpack_exports__, 'i', (() => useAddonState)), __webpack_require__.d(__webpack_exports__, 'k', (() => useArgs)), __webpack_require__.d(__webpack_exports__, 'm', (() => useGlobals)), __webpack_require__.d(__webpack_exports__, 'j', (() => useArgTypes)), __webpack_require__.d(__webpack_exports__, 'l', (() => useGlobalTypes)); let provider_namespaceObject = {}; __webpack_require__.r(provider_namespaceObject), __webpack_require__.d(provider_namespaceObject, 'init', (() => provider_init)); let addons_namespaceObject = {}; __webpack_require__.r(addons_namespaceObject), __webpack_require__.d(addons_namespaceObject, 'types', (() => types)), __webpack_require__.d(addons_namespaceObject, 'ensurePanel', (() => ensurePanel)), __webpack_require__.d(addons_namespaceObject, 'init', (() => addons_init)); let channel_namespaceObject = {}; __webpack_require__.r(channel_namespaceObject), __webpack_require__.d(channel_namespaceObject, 'init', (() => channel_init)); let notifications_namespaceObject = {}; __webpack_require__.r(notifications_namespaceObject), __webpack_require__.d(notifications_namespaceObject, 'init', (() => notifications_init)); let settings_namespaceObject = {}; __webpack_require__.r(settings_namespaceObject), __webpack_require__.d(settings_namespaceObject, 'init', (() => settings_init)); let release_notes_namespaceObject = {}; __webpack_require__.r(release_notes_namespaceObject), __webpack_require__.d(release_notes_namespaceObject, 'init', (() => release_notes_init)); let refs_namespaceObject = {}; __webpack_require__.r(refs_namespaceObject), __webpack_require__.d(refs_namespaceObject, 'getSourceType', (() => getSourceType)), __webpack_require__.d(refs_namespaceObject, 'defaultStoryMapper', (() => defaultStoryMapper)), __webpack_require__.d(refs_namespaceObject, 'init', (() => refs_init)); let modules_stories_namespaceObject = {}; __webpack_require__.r(modules_stories_namespaceObject), __webpack_require__.d(modules_stories_namespaceObject, 'init', (() => stories_init)); let layout_namespaceObject = {}; __webpack_require__.r(layout_namespaceObject), __webpack_require__.d(layout_namespaceObject, 'ActiveTabs', (() => ActiveTabs)), __webpack_require__.d(layout_namespaceObject, 'focusableUIElements', (() => focusableUIElements)), __webpack_require__.d(layout_namespaceObject, 'init', (() => layout_init)); let shortcuts_namespaceObject = {}; __webpack_require__.r(shortcuts_namespaceObject), __webpack_require__.d(shortcuts_namespaceObject, 'isMacLike', (() => isMacLike)), __webpack_require__.d(shortcuts_namespaceObject, 'controlOrMetaKey', (() => controlOrMetaKey)), __webpack_require__.d(shortcuts_namespaceObject, 'keys', (() => keys)), __webpack_require__.d(shortcuts_namespaceObject, 'defaultShortcuts', (() => defaultShortcuts)), __webpack_require__.d(shortcuts_namespaceObject, 'init', (() => shortcuts_init)); let url_namespaceObject = {}; __webpack_require__.r(url_namespaceObject), __webpack_require__.d(url_namespaceObject, 'init', (() => url_init)); let versions_namespaceObject = {}; __webpack_require__.r(versions_namespaceObject), __webpack_require__.d(versions_namespaceObject, 'init', (() => versions_init)); let globals_namespaceObject = {}; __webpack_require__.r(globals_namespaceObject), __webpack_require__.d(globals_namespaceObject, 'init', (() => globals_init)); __webpack_require__(18), __webpack_require__(38), __webpack_require__(15), __webpack_require__(22), __webpack_require__(31), __webpack_require__(42), __webpack_require__(43), __webpack_require__(48), __webpack_require__(49), __webpack_require__(4), __webpack_require__(9), __webpack_require__(5), __webpack_require__(13), __webpack_require__(6), __webpack_require__(7), __webpack_require__(10), __webpack_require__(17), __webpack_require__(16), __webpack_require__(14); let _; let react = __webpack_require__(0); let react_default = __webpack_require__.n(react); let mergeWith = __webpack_require__(208); let mergeWith_default = __webpack_require__.n(mergeWith); let esm = __webpack_require__(20); let store2 = (__webpack_require__(87), __webpack_require__(41), __webpack_require__(65)); let store2_default = __webpack_require__.n(store2); let cjs = __webpack_require__(118); function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
		try {
			var info = gen[key](arg); var {value} = info;
		} catch (error) {
			return void reject(error);
		}

		info.done ? resolve(value) : Promise.resolve(value).then(_next, _throw);
	}

	function _defineProperties(target, props) {
		for (let i = 0; i < props.length; i++) {
			let descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 'value' in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
		}
	}

	(_ = store2_default.a._).fn('set', (function (key, data) {
		return _.set(this._area, this._in(key), Object(cjs.stringify)(data, {maxDepth: 50}));
	})), _.fn('get', (function (key, alt) {
		let value = _.get(this._area, this._in(key)); return value !== null ? Object(cjs.parse)(value) : alt || value;
	})); function get(storage) {
		return storage.get('@storybook/ui/store') || {};
	}

	function store_update(storage, patch) {
		let previous = get(storage); return (function set(storage, value) {
			return storage.set('@storybook/ui/store', value);
		})(storage, {...previous, ...patch});
	}

	let _templateObject; let _templateObject2; let _templateObject3; let store_Store = (function () {
		function Store(_ref) {
			let {setState} = _ref; let
				{getState} = _ref; !(function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError('Cannot call a class as a function');
				}
			})(this, Store), this.upstreamGetState = void 0, this.upstreamSetState = void 0, this.upstreamSetState = setState, this.upstreamGetState = getState;
		}

		let _setState; return (function _createClass(Constructor, protoProps, staticProps) {
			return protoProps && _defineProperties(Constructor.prototype, protoProps), staticProps && _defineProperties(Constructor, staticProps), Constructor;
		})(Store, [{key: 'getInitialState', value: function getInitialState(base) {
			return {...base, ...get(store2_default.a.local), ...get(store2_default.a.session)};
		}}, {key: 'getState', value: function getState() {
			return this.upstreamGetState();
		}}, {key: 'setState', value: (_setState = (function _asyncToGenerator(fn) {
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
		})(regeneratorRuntime.mark((function _callee(inputPatch, cbOrOptions, inputOptions) {
			let callback; let options; let _ref2$persistence; let persistence; let patch; let delta; let newState; let storage; let _this = this; return regeneratorRuntime.wrap((function _callee$(_context) {
				for (;;) {
					switch (_context.prev = _context.next) {
						case 0: return typeof cbOrOptions === 'function' ? (callback = cbOrOptions, options = inputOptions) : options = cbOrOptions, _ref2$persistence = (options || {}).persistence, persistence = void 0 === _ref2$persistence ? 'none' : _ref2$persistence, patch = {}, delta = {}, typeof inputPatch === 'function' ? patch = function patch(state) {
							return delta = inputPatch(state);
						} : delta = patch = inputPatch, _context.next = 7, new Promise((resolve => {
							_this.upstreamSetState(patch, resolve);
						})); case 7: if (newState = _context.sent, persistence === 'none') {
							_context.next = 12; break;
						}

							return storage = persistence === 'session' ? store2_default.a.session : store2_default.a.local, _context.next = 12, store_update(storage, delta); case 12: return callback && callback(newState), _context.abrupt('return', newState); case 14: case 'end': return _context.stop();
					}
				}
			}), _callee);
		}))), function setState(_x, _x2, _x3) {
			return _setState.apply(this, arguments);
		})}]), Store;
	})(); let isEqual = (__webpack_require__(58), __webpack_require__(430)); let isEqual_default = __webpack_require__.n(isEqual); let dist_esm = __webpack_require__(25); var merge = function (a, b) {
		return mergeWith_default()({}, a, b, ((objValue, srcValue) => Array.isArray(srcValue) && Array.isArray(objValue) ? (srcValue.forEach((s => {
			objValue.find((o => o === s || isEqual_default()(o, s))) || objValue.push(s);
		})), objValue) : Array.isArray(objValue) ? (dist_esm.a.log(['the types mismatch, picking', objValue]), objValue) : void 0));
	};

	let initial_state = function main() {
		for (var _len = arguments.length, additions = new Array(_len), _key = 0; _key < _len; _key++) {
			additions[_key] = arguments[_key];
		}

		return additions.reduce(((acc, item) => merge(acc, item)), {});
	};

	let browser = (__webpack_require__(50), __webpack_require__(67), __webpack_require__(40), __webpack_require__(26), __webpack_require__(77), __webpack_require__(110), __webpack_require__(52), __webpack_require__(82), __webpack_require__(61)); let browser_default = __webpack_require__.n(browser); let dist = __webpack_require__(33); let dist_default = __webpack_require__.n(dist); let csf_dist = __webpack_require__(66); let mapValues = __webpack_require__(431); let mapValues_default = __webpack_require__.n(mapValues); function _toConsumableArray(arr) {
		return (function _arrayWithoutHoles(arr) {
			if (Array.isArray(arr)) {
				return _arrayLikeToArray(arr);
			}
		})(arr) || (function _iterableToArray(iter) {
			if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(iter)) {
				return Array.from(iter);
			}
		})(arr) || (function _unsupportedIterableToArray(o, minLen) {
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
		})(arr) || (function _nonIterableSpread() {
			throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
		})();
	}

	function _arrayLikeToArray(arr, len) {
		(len == null || len > arr.length) && (len = arr.length); for (var i = 0, arr2 = new Array(len); i < len; i++) {
			arr2[i] = arr[i];
		}

		return arr2;
	}

	function _taggedTemplateLiteral(strings, raw) {
		return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, {raw: {value: Object.freeze(raw)}}));
	}

	let warnLegacyShowRoots = browser_default()((() => {}), dist_default()(_templateObject || (_templateObject = _taggedTemplateLiteral(['\n    The \'showRoots\' config option is deprecated and will be removed in Storybook 7.0. Use \'sidebar.showRoots\' instead.\n    Read more about it in the migration guide: https://github.com/storybookjs/storybook/blob/master/MIGRATION.md\n  '])))); let warnChangedDefaultHierarchySeparators = browser_default()((() => {}), dist_default()(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(['\n    The default hierarchy separators changed in Storybook 6.0.\n    \'|\' and \'.\' will no longer create a hierarchy, but codemods are available.\n    Read more about it in the migration guide: https://github.com/storybookjs/storybook/blob/master/MIGRATION.md\n  '])))); let STORY_KIND_PATH_SEPARATOR = /\s*\/\s*/; let stories_transformStoriesRawToStoriesHash = function transformStoriesRawToStoriesHash(input, _ref2) {
		let {provider} = _ref2; let values = Object.values(input).filter(Boolean); let usesOldHierarchySeparator = values.some((_ref3 => _ref3.kind.match(/\.|\|/))); let
			storiesHashOutOfOrder = values.reduce(((acc, item) => {
				let {kind} = item; let {parameters} = item; let _provider$getConfig = provider.getConfig(); let _provider$getConfig$s = _provider$getConfig.sidebar; let sidebar = void 0 === _provider$getConfig$s ? {} : _provider$getConfig$s; let deprecatedShowRoots = _provider$getConfig.showRoots; let _sidebar$showRoots = sidebar.showRoots; let showRoots = void 0 === _sidebar$showRoots ? deprecatedShowRoots : _sidebar$showRoots; let _sidebar$collapsedRoo = sidebar.collapsedRoots; let collapsedRoots = void 0 === _sidebar$collapsedRoo ? [] : _sidebar$collapsedRoo; let
					{renderLabel} = sidebar; void 0 !== deprecatedShowRoots && warnLegacyShowRoots(); let setShowRoots = void 0 !== showRoots; usesOldHierarchySeparator && !setShowRoots && warnChangedDefaultHierarchySeparators(); let groups = kind.trim().split(STORY_KIND_PATH_SEPARATOR); let root = (!setShowRoots || showRoots) && groups.length > 1 ? [groups.shift()] : []; let rootAndGroups = [].concat(root, _toConsumableArray(groups)).reduce(((list, name, index) => {
					let parent = index > 0 && list[index - 1].id; let id = Object(csf_dist.sanitize)(parent ? ''.concat(parent, '-').concat(name) : name); if (parent === id) {
						throw new Error(dist_default()(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(['\n              Invalid part \'', '\', leading to id === parentId (\'', '\'), inside kind \'', '\'\n\n              Did you create a path that uses the separator char accidentally, such as \'Vue <docs/>\' where \'/\' is a separator char? See https://github.com/storybookjs/storybook/issues/6128\n            '])), name, id, kind));
					}

					return root.length && index === 0 ? list.push({id, name, depth: index, children: [], isComponent: !1, isLeaf: !1, isRoot: !0, renderLabel, startCollapsed: collapsedRoots.includes(id)}) : list.push({id, name, parent, depth: index, children: [], isComponent: !1, isLeaf: !1, isRoot: !1, renderLabel, parameters: {docsOnly: parameters == null ? void 0 : parameters.docsOnly, viewMode: parameters == null ? void 0 : parameters.viewMode}}), list;
				}), []); let paths = [].concat(_toConsumableArray(rootAndGroups.map((_ref4 => _ref4.id))), [item.id]); return rootAndGroups.forEach(((group, index) => {
					let child = paths[index + 1]; let {id} = group; acc[id] = merge(acc[id] || {}, {...group, ...child && {children: [child]}});
				})), acc[item.id] = {...item, depth: rootAndGroups.length, parent: rootAndGroups[rootAndGroups.length - 1].id, isLeaf: !0, isComponent: !1, isRoot: !1, renderLabel}, acc;
			}), {}); return Object.values(storiesHashOutOfOrder).reduce((function addItem(acc, item) {
			if (!acc[item.id]) {
				acc[item.id] = item; let {children} = item; if (children) {
					let childNodes = children.map((id => storiesHashOutOfOrder[id])); acc[item.id].isComponent = childNodes.every((childNode => childNode.isLeaf)), childNodes.forEach((childNode => addItem(acc, childNode)));
				}
			}

			return acc;
		}), {});
	};

	function isRoot(item) {
		return Boolean(item) && item.isRoot;
	}

	function isGroup(item) {
		return Boolean(item) && (!item.isRoot && !item.isLeaf);
	}

	function isStory(item) {
		return Boolean(item) && item.isLeaf;
	}

	let addons_templateObject; var provider_init = function init(_ref) {
		let {provider} = _ref; let
			{fullAPI} = _ref; return {api: provider.renderPreview ? {renderPreview: provider.renderPreview} : {}, init: function init() {
			provider.handleAPI(fullAPI);
		}};
	};

	__webpack_require__(23); function _slicedToArray(arr, i) {
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
		})(arr, i) || (function addons_unsupportedIterableToArray(o, minLen) {
			if (!o) {
				return;
			}

			if (typeof o === 'string') {
				return addons_arrayLikeToArray(o, minLen);
			}

			let n = Object.prototype.toString.call(o).slice(8, -1); n === 'Object' && o.constructor && (n = o.constructor.name); if (n === 'Map' || n === 'Set') {
				return Array.from(o);
			}

			if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
				return addons_arrayLikeToArray(o, minLen);
			}
		})(arr, i) || (function _nonIterableRest() {
			throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
		})();
	}

	function addons_arrayLikeToArray(arr, len) {
		(len == null || len > arr.length) && (len = arr.length); for (var i = 0, arr2 = new Array(len); i < len; i++) {
			arr2[i] = arr[i];
		}

		return arr2;
	}

	let types; let warnDisabledDeprecated = browser_default()((() => {}), dist_default()(addons_templateObject || (addons_templateObject = (function addons_taggedTemplateLiteral(strings, raw) {
		return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, {raw: {value: Object.freeze(raw)}}));
	})(['\n    Use \'parameters.key.disable\' instead of \'parameters.key.disabled\'.\n    \n    https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#deprecated-disabled-parameter\n  '])))); function ensurePanel(panels, selectedPanel, currentPanel) {
		let keys = Object.keys(panels); return keys.indexOf(selectedPanel) >= 0 ? selectedPanel : keys.length ? keys[0] : currentPanel;
	}

	!(function (types) {
		types.TAB = 'tab', types.PANEL = 'panel', types.TOOL = 'tool', types.PREVIEW = 'preview', types.NOTES_ELEMENT = 'notes-element';
	})(types || (types = {}));

	var addons_init = function init(_ref) {
		let {provider} = _ref; let {store} = _ref; let {fullAPI} = _ref; var
			api = {getElements: function getElements(type) {
				return provider.getElements(type);
			}, getPanels: function getPanels() {
				return api.getElements(types.PANEL);
			}, getStoryPanels: function getStoryPanels() {
				let allPanels = api.getPanels(); let {storyId} = store.getState(); let story = fullAPI.getData(storyId); if (!allPanels || !story || !isStory(story)) {
					return allPanels;
				}

				let {parameters} = story; let
					filteredPanels = {}; return Object.entries(allPanels).forEach((_ref2 => {
					let _ref3 = _slicedToArray(_ref2, 2); let id = _ref3[0]; let panel = _ref3[1]; let {paramKey} = panel; paramKey && parameters && parameters[paramKey] && (parameters[paramKey].disabled || parameters[paramKey].disable) ? parameters[paramKey].disabled && warnDisabledDeprecated() : filteredPanels[id] = panel;
				})), filteredPanels;
			}, getSelectedPanel: function getSelectedPanel() {
				let {selectedPanel} = store.getState(); return ensurePanel(api.getPanels(), selectedPanel, selectedPanel);
			}, setSelectedPanel: function setSelectedPanel(panelName) {
				store.setState({selectedPanel: panelName}, {persistence: 'session'});
			}, setAddonState: function setAddonState(addonId, newStateOrMerger, options) {
				let nextState; let obj; let key; let value; let existing = store.getState().addons; typeof newStateOrMerger === 'function' ? nextState = newStateOrMerger(api.getAddonState(addonId)) : nextState = newStateOrMerger; return store.setState({addons: {...existing, ...(obj = {}, key = addonId, value = nextState, key in obj ? Object.defineProperty(obj, key, {value, enumerable: !0, configurable: !0, writable: !0}) : obj[key] = value, obj)}}, options).then((() => api.getAddonState(addonId)));
			}, getAddonState: function getAddonState(addonId) {
				return store.getState().addons[addonId];
			}}; return {api, state: {selectedPanel: ensurePanel(api.getPanels(), store.getState().selectedPanel), addons: {}}};
	};

	var channel_init = function init(_ref) {
		let {provider} = _ref; var
			api = {getChannel: function getChannel() {
				return provider.channel;
			}, on: function on(type, cb) {
				return provider.channel.addListener(type, cb), function () {
					return provider.channel.removeListener(type, cb);
				};
			}, off: function off(type, cb) {
				return provider.channel.removeListener(type, cb);
			}, once: function once(type, cb) {
				return provider.channel.once(type, cb);
			}, emit: function emit(type) {
				for (var _provider$channel, _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
					args[_key - 1] = arguments[_key];
				}

				return (_provider$channel = provider.channel).emit.apply(_provider$channel, [type].concat(args));
			}, collapseAll: function collapseAll() {
				provider.channel.emit(esm.STORIES_COLLAPSE_ALL, {});
			}, expandAll: function expandAll() {
				api.emit(esm.STORIES_EXPAND_ALL);
			}}; return {api};
	};

	function notifications_toConsumableArray(arr) {
		return (function notifications_arrayWithoutHoles(arr) {
			if (Array.isArray(arr)) {
				return notifications_arrayLikeToArray(arr);
			}
		})(arr) || (function notifications_iterableToArray(iter) {
			if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(iter)) {
				return Array.from(iter);
			}
		})(arr) || (function notifications_unsupportedIterableToArray(o, minLen) {
			if (!o) {
				return;
			}

			if (typeof o === 'string') {
				return notifications_arrayLikeToArray(o, minLen);
			}

			let n = Object.prototype.toString.call(o).slice(8, -1); n === 'Object' && o.constructor && (n = o.constructor.name); if (n === 'Map' || n === 'Set') {
				return Array.from(o);
			}

			if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
				return notifications_arrayLikeToArray(o, minLen);
			}
		})(arr) || (function notifications_nonIterableSpread() {
			throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
		})();
	}

	function notifications_arrayLikeToArray(arr, len) {
		(len == null || len > arr.length) && (len = arr.length); for (var i = 0, arr2 = new Array(len); i < len; i++) {
			arr2[i] = arr[i];
		}

		return arr2;
	}

	var notifications_init = function init(_ref) {
		let {store} = _ref; var
			api = {addNotification: function addNotification(notification) {
				api.clearNotification(notification.id); let {notifications} = store.getState(); store.setState({notifications: [].concat(notifications_toConsumableArray(notifications), [notification])});
			}, clearNotification: function clearNotification(id) {
				let {notifications} = store.getState(); store.setState({notifications: notifications.filter((n => n.id !== id))}); let notification = notifications.find((n => n.id === id)); notification && notification.onClear && notification.onClear();
			}}; return {api, state: {notifications: []}};
	};

	function settings_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
		try {
			var info = gen[key](arg); var {value} = info;
		} catch (error) {
			return void reject(error);
		}

		info.done ? resolve(value) : Promise.resolve(value).then(_next, _throw);
	}

	function settings_asyncToGenerator(fn) {
		return function () {
			let self = this; let args = arguments; return new Promise(((resolve, reject) => {
				let gen = fn.apply(self, args); function _next(value) {
					settings_asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value);
				}

				function _throw(err) {
					settings_asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err);
				}

				_next(void 0);
			}));
		};
	}

	var settings_init = function init(_ref) {
		let _navigateToSettingsPage; let {store} = _ref; let {navigate} = _ref; let {fullAPI} = _ref; let isSettingsScreenActive = function isSettingsScreenActive() {
			return Boolean((fullAPI.getUrlState().path || '').match(/^\/settings/));
		};

		let api = {closeSettings: function closeSettings() {
			let {lastTrackedStoryId} = store.getState().settings; lastTrackedStoryId ? fullAPI.selectStory(lastTrackedStoryId) : fullAPI.selectFirstStory();
		}, changeSettingsTab: function changeSettingsTab(tab) {
			navigate('/settings/'.concat(tab));
		}, isSettingsScreenActive, navigateToSettingsPage: (_navigateToSettingsPage = settings_asyncToGenerator(regeneratorRuntime.mark((function _callee(path) {
			let _store$getState2; let settings; let storyId; return regeneratorRuntime.wrap((function _callee$(_context) {
				for (;;) {
					switch (_context.prev = _context.next) {
						case 0: if (isSettingsScreenActive()) {
							_context.next = 4; break;
						}

							return _store$getState2 = store.getState(), settings = _store$getState2.settings, storyId = _store$getState2.storyId, _context.next = 4, store.setState({settings: {...settings, lastTrackedStoryId: storyId}}); case 4: navigate(path); case 5: case 'end': return _context.stop();
					}
				}
			}), _callee);
		}))), function navigateToSettingsPage(_x) {
			return _navigateToSettingsPage.apply(this, arguments);
		})}; return {init: (function () {
			let _ref2 = settings_asyncToGenerator(regeneratorRuntime.mark((function _callee2() {
				return regeneratorRuntime.wrap((function _callee2$(_context2) {
					for (;;) {
						switch (_context2.prev = _context2.next) {
							case 0: return _context2.next = 2, store.setState({settings: {lastTrackedStoryId: null}}); case 2: case 'end': return _context2.stop();
						}
					}
				}), _callee2);
			}))); return function initModule() {
				return _ref2.apply(this, arguments);
			};
		})(), api};
	};

	let global_window = __webpack_require__(8); let window_default = __webpack_require__.n(global_window); let memoizerific = __webpack_require__(28); let memoizerific_default = __webpack_require__.n(memoizerific); function release_notes_toConsumableArray(arr) {
		return (function release_notes_arrayWithoutHoles(arr) {
			if (Array.isArray(arr)) {
				return release_notes_arrayLikeToArray(arr);
			}
		})(arr) || (function release_notes_iterableToArray(iter) {
			if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(iter)) {
				return Array.from(iter);
			}
		})(arr) || (function release_notes_unsupportedIterableToArray(o, minLen) {
			if (!o) {
				return;
			}

			if (typeof o === 'string') {
				return release_notes_arrayLikeToArray(o, minLen);
			}

			let n = Object.prototype.toString.call(o).slice(8, -1); n === 'Object' && o.constructor && (n = o.constructor.name); if (n === 'Map' || n === 'Set') {
				return Array.from(o);
			}

			if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
				return release_notes_arrayLikeToArray(o, minLen);
			}
		})(arr) || (function release_notes_nonIterableSpread() {
			throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
		})();
	}

	function release_notes_arrayLikeToArray(arr, len) {
		(len == null || len > arr.length) && (len = arr.length); for (var i = 0, arr2 = new Array(len); i < len; i++) {
			arr2[i] = arr[i];
		}

		return arr2;
	}

	let refs_templateObject; let {RELEASE_NOTES_DATA} = window_default.a; let getReleaseNotesData = memoizerific_default()(1)((() => {
		try {
			return {...JSON.parse(RELEASE_NOTES_DATA) || {}};
		} catch (e) {
			return {};
		}
	})); var release_notes_init = function init(_ref) {
		let {store} = _ref; let releaseNotesData = getReleaseNotesData(); let
			getReleaseNotesViewed = function getReleaseNotesViewed() {
				return store.getState().releaseNotesViewed || [];
			};

		return {init: function initModule() {}, api: {releaseNotesVersion: function releaseNotesVersion() {
			return releaseNotesData.currentVersion;
		}, setDidViewReleaseNotes: function setDidViewReleaseNotes() {
			let releaseNotesViewed = getReleaseNotesViewed(); releaseNotesViewed.includes(releaseNotesData.currentVersion) || store.setState({releaseNotesViewed: [].concat(release_notes_toConsumableArray(releaseNotesViewed), [releaseNotesData.currentVersion])}, {persistence: 'permanent'});
		}, showReleaseNotesOnLaunch: function showReleaseNotesOnLaunch() {
			if (!releaseNotesData.currentVersion) {
				return !1;
			}

			let didViewReleaseNotes = getReleaseNotesViewed().includes(releaseNotesData.currentVersion); let showReleaseNotesOnLaunch = releaseNotesData.showOnFirstLaunch && !didViewReleaseNotes; return showReleaseNotesOnLaunch;
		}}};
	};

	__webpack_require__(273), __webpack_require__(335), __webpack_require__(745), __webpack_require__(120), __webpack_require__(250), __webpack_require__(79); function _typeof(obj) {
		return (_typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function _typeof(obj) {
			return typeof obj;
		} : function _typeof(obj) {
			return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
		})(obj);
	}

	function refs_taggedTemplateLiteral(strings, raw) {
		return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, {raw: {value: Object.freeze(raw)}}));
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

	function _toPropertyKey(arg) {
		let key = (function _toPrimitive(input, hint) {
			if (_typeof(input) !== 'object' || input === null) {
				return input;
			}

			let prim = input[Symbol.toPrimitive]; if (void 0 !== prim) {
				let res = prim.call(input, hint || 'default'); if (_typeof(res) !== 'object') {
					return res;
				}

				throw new TypeError('@@toPrimitive must return a primitive value.');
			}

			return (hint === 'string' ? String : Number)(input);
		})(arg, 'string'); return _typeof(key) === 'symbol' ? key : String(key);
	}

	function refs_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
		try {
			var info = gen[key](arg); var {value} = info;
		} catch (error) {
			return void reject(error);
		}

		info.done ? resolve(value) : Promise.resolve(value).then(_next, _throw);
	}

	function refs_asyncToGenerator(fn) {
		return function () {
			let self = this; let args = arguments; return new Promise(((resolve, reject) => {
				let gen = fn.apply(self, args); function _next(value) {
					refs_asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value);
				}

				function _throw(err) {
					refs_asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err);
				}

				_next(void 0);
			}));
		};
	}

	function refs_defineProperty(obj, key, value) {
		return key in obj ? Object.defineProperty(obj, key, {value, enumerable: !0, configurable: !0, writable: !0}) : obj[key] = value, obj;
	}

	function refs_slicedToArray(arr, i) {
		return (function refs_arrayWithHoles(arr) {
			if (Array.isArray(arr)) {
				return arr;
			}
		})(arr) || (function refs_iterableToArrayLimit(arr, i) {
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
		})(arr, i) || (function refs_unsupportedIterableToArray(o, minLen) {
			if (!o) {
				return;
			}

			if (typeof o === 'string') {
				return refs_arrayLikeToArray(o, minLen);
			}

			let n = Object.prototype.toString.call(o).slice(8, -1); n === 'Object' && o.constructor && (n = o.constructor.name); if (n === 'Map' || n === 'Set') {
				return Array.from(o);
			}

			if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
				return refs_arrayLikeToArray(o, minLen);
			}
		})(arr, i) || (function refs_nonIterableRest() {
			throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
		})();
	}

	function refs_arrayLikeToArray(arr, len) {
		(len == null || len > arr.length) && (len = arr.length); for (var i = 0, arr2 = new Array(len); i < len; i++) {
			arr2[i] = arr[i];
		}

		return arr2;
	}

	let refs_location = window_default.a.location; let {fetch} = window_default.a; let findFilename = /(\/((?:[^\/]+?)\.[^\/]+?)|\/)$/; var getSourceType = function getSourceType(source, refId) {
		let localOrigin = refs_location.origin; let localPathname = refs_location.pathname; let _URL = new URL(source); let sourceOrigin = _URL.origin; let sourcePathname = _URL.pathname; let localFull = ''.concat(localOrigin + localPathname).replace(findFilename, ''); let sourceFull = ''.concat(sourceOrigin + sourcePathname).replace(findFilename, ''); return localFull === sourceFull ? ['local', sourceFull] : refId || source ? ['external', sourceFull] : [null, null];
	};

	var defaultStoryMapper = function defaultStoryMapper(b, a) {
		return {...a, kind: a.kind.replace('|', '/')};
	};

	let addRefIds = function addRefIds(input, ref) {
		return Object.entries(input).reduce(((acc, _ref) => {
			let _ref2 = refs_slicedToArray(_ref, 2); let id = _ref2[0]; let item = _ref2[1]; return {...acc, ...refs_defineProperty({}, id, {...item, refId: ref.id})};
		}), {});
	};

	let handle = (function () {
		let _ref3 = refs_asyncToGenerator(regeneratorRuntime.mark((function _callee(request) {
			return regeneratorRuntime.wrap((function _callee$(_context) {
				for (;;) {
					switch (_context.prev = _context.next) {
						case 0: if (!request) {
							_context.next = 2; break;
						}

							return _context.abrupt('return', Promise.resolve(request).then((response => response.ok ? response.json() : {})).catch((error => ({error})))); case 2: return _context.abrupt('return', {}); case 3: case 'end': return _context.stop();
					}
				}
			}), _callee);
		}))); return function handle(_x) {
			return _ref3.apply(this, arguments);
		};
	})(); let map = function map(input, ref, options) {
		let {storyMapper} = options; return storyMapper ? Object.entries(input).reduce(((acc, _ref4) => {
			let _ref5 = refs_slicedToArray(_ref4, 2); let id = _ref5[0]; let item = _ref5[1]; return {...acc, ...refs_defineProperty({}, id, storyMapper(ref, item))};
		}), {}) : input;
	};

	var refs_init = function init(_ref6) {
		let _checkRef; let {store} = _ref6; let {provider} = _ref6; let {singleStory} = _ref6; let _ref7 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; let _ref7$runCheck = _ref7.runCheck; let runCheck = void 0 === _ref7$runCheck || _ref7$runCheck; var api = {findRef: function findRef(source) {
			let refs = api.getRefs(); return Object.values(refs).find((_ref8 => _ref8.url.match(source)));
		}, changeRefVersion: function changeRefVersion(id, url) {
			let _api$getRefs$id = api.getRefs()[id]; let ref = {id, url, versions: _api$getRefs$id.versions, title: _api$getRefs$id.title, stories: {}}; api.checkRef(ref);
		}, changeRefState: function changeRefState(id, ready) {
			let _api$getRefs = api.getRefs(); let ref = _api$getRefs[id]; let updated = _objectWithoutProperties(_api$getRefs, [id].map(_toPropertyKey)); updated[id] = {...ref, ready}, store.setState({refs: updated});
		}, checkRef: (_checkRef = refs_asyncToGenerator(regeneratorRuntime.mark((function _callee2(ref) {
			let id; let url; let version; let type; let isPublic; let loadedData; let query; let credentials; let storiesFetch; let _yield$Promise$all; let _yield$Promise$all2; let stories; let metadata; return regeneratorRuntime.wrap((function _callee2$(_context2) {
				for (;;) {
					switch (_context2.prev = _context2.next) {
						case 0: return id = ref.id, url = ref.url, version = ref.version, type = ref.type, isPublic = type === 'server-checked', loadedData = {}, query = version ? '?version='.concat(version) : '', credentials = isPublic ? 'omit' : 'include', _context2.next = 7, fetch(''.concat(url, '/stories.json').concat(query), {headers: {Accept: 'application/json'}, credentials}); case 7: if ((storiesFetch = _context2.sent).ok || isPublic) {
							_context2.next = 12; break;
						}

							loadedData.error = {message: dist_default()(refs_templateObject || (refs_templateObject = refs_taggedTemplateLiteral(['\n            Error: Loading of ref failed\n              at fetch (lib/api/src/modules/refs.ts)\n\n            URL: ', '\n\n            We weren\'t able to load the above URL,\n            it\'s possible a CORS error happened.\n\n            Please check your dev-tools network tab.\n          '])), url)}, _context2.next = 20; break; case 12: if (!storiesFetch.ok) {
							_context2.next = 20; break;
						}

							return _context2.next = 15, Promise.all([handle(storiesFetch), handle(fetch(''.concat(url, '/metadata.json').concat(query), {headers: {Accept: 'application/json'}, credentials, cache: 'no-cache'}).catch((() => !1)))]); case 15: _yield$Promise$all = _context2.sent, _yield$Promise$all2 = refs_slicedToArray(_yield$Promise$all, 2), stories = _yield$Promise$all2[0], metadata = _yield$Promise$all2[1], Object.assign(loadedData, {...stories, ...metadata}); case 20: return _context2.next = 22, api.setRef(id, {id, url, ...loadedData, error: loadedData.error, type: loadedData.stories ? 'lazy' : 'auto-inject'}); case 22: case 'end': return _context2.stop();
					}
				}
			}), _callee2);
		}))), function checkRef(_x2) {
			return _checkRef.apply(this, arguments);
		}), getRefs: function getRefs() {
			let _store$getState$refs = store.getState().refs; return void 0 === _store$getState$refs ? {} : _store$getState$refs;
		}, setRef: function setRef(id, _ref9) {
			let ready = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]; let {stories} = _ref9; let rest = _objectWithoutProperties(_ref9, ['stories']); if (!singleStory) {
				let _provider$getConfig = provider.getConfig(); let _provider$getConfig$s = _provider$getConfig.storyMapper; let storyMapper = void 0 === _provider$getConfig$s ? defaultStoryMapper : _provider$getConfig$s; let ref = api.getRefs()[id]; let after = stories ? addRefIds(stories_transformStoriesRawToStoriesHash(map(stories, ref, {storyMapper}), {provider}), ref) : void 0; api.updateRef(id, {stories: after, ...rest, ready});
			}
		}, updateRef: function updateRef(id, data) {
			let _api$getRefs2 = api.getRefs(); let ref = _api$getRefs2[id]; let updated = _objectWithoutProperties(_api$getRefs2, [id].map(_toPropertyKey)); updated[id] = {...ref, ...data}; let ordered = Object.keys(initialState).reduce(((obj, key) => (obj[key] = updated[key], obj)), {}); store.setState({refs: ordered});
		}}; let refs = !singleStory && provider.getConfig().refs || {}; var initialState = refs; return runCheck && Object.entries(refs).forEach((_ref10 => {
			let _ref11 = refs_slicedToArray(_ref10, 2); let v = (_ref11[0], _ref11[1]); api.checkRef(v);
		})), {api, state: {refs: initialState}};
	};

	function events_slicedToArray(arr, i) {
		return (function events_arrayWithHoles(arr) {
			if (Array.isArray(arr)) {
				return arr;
			}
		})(arr) || (function events_iterableToArrayLimit(arr, i) {
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
		})(arr, i) || (function events_unsupportedIterableToArray(o, minLen) {
			if (!o) {
				return;
			}

			if (typeof o === 'string') {
				return events_arrayLikeToArray(o, minLen);
			}

			let n = Object.prototype.toString.call(o).slice(8, -1); n === 'Object' && o.constructor && (n = o.constructor.name); if (n === 'Map' || n === 'Set') {
				return Array.from(o);
			}

			if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
				return events_arrayLikeToArray(o, minLen);
			}
		})(arr, i) || (function events_nonIterableRest() {
			throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
		})();
	}

	function events_arrayLikeToArray(arr, len) {
		(len == null || len > arr.length) && (len = arr.length); for (var i = 0, arr2 = new Array(len); i < len; i++) {
			arr2[i] = arr[i];
		}

		return arr2;
	}

	let events_getEventMetadata = function getEventMetadata(context, fullAPI) {
		let {source} = context; let {refId} = context; let {type} = context; let _getSourceType2 = events_slicedToArray(getSourceType(source, refId), 2); let sourceType = _getSourceType2[0]; let sourceLocation = _getSourceType2[1]; let
			meta = {source, sourceType, sourceLocation, refId, ref: refId && fullAPI.getRefs()[refId] ? fullAPI.getRefs()[refId] : fullAPI.findRef(sourceLocation), type}; switch (!0) {
			case typeof refId === 'string': case sourceType === 'local': case sourceType === 'external': return meta; default: return dist_esm.a.warn('Received a '.concat(type, ' frame that was not configured as a ref')), null;
		}
	};

	function stories_objectWithoutProperties(source, excluded) {
		if (source == null) {
			return {};
		}

		let key; let i; let target = (function stories_objectWithoutPropertiesLoose(source, excluded) {
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

	function stories_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
		try {
			var info = gen[key](arg); var {value} = info;
		} catch (error) {
			return void reject(error);
		}

		info.done ? resolve(value) : Promise.resolve(value).then(_next, _throw);
	}

	function stories_toConsumableArray(arr) {
		return (function stories_arrayWithoutHoles(arr) {
			if (Array.isArray(arr)) {
				return stories_arrayLikeToArray(arr);
			}
		})(arr) || (function stories_iterableToArray(iter) {
			if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(iter)) {
				return Array.from(iter);
			}
		})(arr) || (function stories_unsupportedIterableToArray(o, minLen) {
			if (!o) {
				return;
			}

			if (typeof o === 'string') {
				return stories_arrayLikeToArray(o, minLen);
			}

			let n = Object.prototype.toString.call(o).slice(8, -1); n === 'Object' && o.constructor && (n = o.constructor.name); if (n === 'Map' || n === 'Set') {
				return Array.from(o);
			}

			if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
				return stories_arrayLikeToArray(o, minLen);
			}
		})(arr) || (function stories_nonIterableSpread() {
			throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
		})();
	}

	function stories_arrayLikeToArray(arr, len) {
		(len == null || len > arr.length) && (len = arr.length); for (var i = 0, arr2 = new Array(len); i < len; i++) {
			arr2[i] = arr[i];
		}

		return arr2;
	}

	let {DOCS_MODE} = window_default.a; let
		deprecatedOptionsParameterWarnings = ['enableShortcuts', 'theme', 'showRoots'].reduce(((acc, option) => (acc[option] = browser_default()((() => {}), 'parameters.options.'.concat(option, ' is deprecated and will be removed in Storybook 7.0.\nTo change this setting, use `addons.setConfig`. See https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#deprecated-immutable-options-parameters\n  ')), acc)), {}); function checkDeprecatedOptionParameters(options) {
		options && Object.keys(options).forEach((option => {
			deprecatedOptionsParameterWarnings[option] && deprecatedOptionsParameterWarnings[option]();
		}));
	}

	var stories_init = function init(_ref) {
		let _setStories; let {fullAPI} = _ref; let {store} = _ref; let {navigate} = _ref; let {provider} = _ref; let initialStoryId = _ref.storyId; let initialViewMode = _ref.viewMode; var api = {storyId: csf_dist.toId, getData: function getData(storyId, refId) {
			let result = api.resolveStory(storyId, refId); return isRoot(result) ? void 0 : result;
		}, resolveStory: function resolveStory(storyId, refId) {
			let _store$getState = store.getState(); let {refs} = _store$getState; let {storiesHash} = _store$getState; return refId ? refs[refId].stories ? refs[refId].stories[storyId] : void 0 : storiesHash ? storiesHash[storyId] : void 0;
		}, getCurrentStoryData: function getCurrentStoryData() {
			let _store$getState2 = store.getState(); let {storyId} = _store$getState2; let {refId} = _store$getState2; return api.getData(storyId, refId);
		}, getParameters: function getParameters(storyIdOrCombo, parameterName) {
			let _ref2 = typeof storyIdOrCombo === 'string' ? {storyId: storyIdOrCombo, refId: void 0} : storyIdOrCombo; let {storyId} = _ref2; let {refId} = _ref2; let data = api.getData(storyId, refId); if (isStory(data)) {
				let {parameters} = data; return parameterName ? parameters[parameterName] : parameters;
			}

			return null;
		}, getCurrentParameter: function getCurrentParameter(parameterName) {
			let _store$getState3 = store.getState(); let {storyId} = _store$getState3; let {refId} = _store$getState3; return api.getParameters({storyId, refId}, parameterName) || void 0;
		}, jumpToComponent: function jumpToComponent(direction) {
			let _store$getState4 = store.getState(); let {storiesHash} = _store$getState4; let {storyId} = _store$getState4; let {refs} = _store$getState4; let {refId} = _store$getState4; if (api.getData(storyId, refId)) {
				let hash = refId ? refs[refId].stories || {} : storiesHash; let lookupList = Object.entries(hash).reduce(((acc, i) => (i[1].isComponent && acc.push(stories_toConsumableArray(i[1].children)), acc)), []); let index = lookupList.findIndex((i => i.includes(storyId))); if (!(index === lookupList.length - 1 && direction > 0 || index === 0 && direction < 0)) {
					let result = lookupList[index + direction][0]; result && api.selectStory(result, void 0, {ref: refId});
				}
			}
		}, jumpToStory: function jumpToStory(direction) {
			let _store$getState5 = store.getState(); let {storiesHash} = _store$getState5; let {storyId} = _store$getState5; let {refs} = _store$getState5; let {refId} = _store$getState5; let story = api.getData(storyId, refId); if (DOCS_MODE) {
				api.jumpToComponent(direction);
			} else if (story) {
				let hash = story.refId ? refs[story.refId].stories : storiesHash; let lookupList = Object.keys(hash).filter((k => !(hash[k].children || Array.isArray(hash[k])))); let index = lookupList.indexOf(storyId); if (!(index === lookupList.length - 1 && direction > 0 || index === 0 && direction < 0)) {
					let result = lookupList[index + direction]; result && api.selectStory(result, void 0, {ref: refId});
				}
			}
		}, setStories: (_setStories = (function stories_asyncToGenerator(fn) {
			return function () {
				let self = this; let args = arguments; return new Promise(((resolve, reject) => {
					let gen = fn.apply(self, args); function _next(value) {
						stories_asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value);
					}

					function _throw(err) {
						stories_asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err);
					}

					_next(void 0);
				}));
			};
		})(regeneratorRuntime.mark((function _callee(input, error) {
			let hash; return regeneratorRuntime.wrap((function _callee$(_context) {
				for (;;) {
					switch (_context.prev = _context.next) {
						case 0: return hash = stories_transformStoriesRawToStoriesHash(input, {provider}), _context.next = 3, store.setState({storiesHash: hash, storiesConfigured: !0, storiesFailed: error}); case 3: case 'end': return _context.stop();
					}
				}
			}), _callee);
		}))), function setStories(_x, _x2) {
			return _setStories.apply(this, arguments);
		}), selectFirstStory: function selectFirstStory() {
			let {storiesHash} = store.getState(); let
				firstStory = Object.keys(storiesHash).find((k => !(storiesHash[k].children || Array.isArray(storiesHash[k])))); firstStory ? api.selectStory(firstStory) : navigate('/');
		}, selectStory: function selectStory(kindOrId) {
			let story = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0; let options = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}; let {ref} = options; let viewModeFromArgs = options.viewMode; let _store$getState7 = store.getState(); let _store$getState7$view = _store$getState7.viewMode; let viewModeFromState = void 0 === _store$getState7$view ? 'story' : _store$getState7$view; let {storyId} = _store$getState7; let {storiesHash} = _store$getState7; let {refs} = _store$getState7; let hash = ref ? refs[ref].stories : storiesHash; if (story) {
				if (kindOrId) {
					let _id2 = ref ? ''.concat(ref, '_').concat(Object(csf_dist.toId)(kindOrId, story)) : Object(csf_dist.toId)(kindOrId, story); if (hash[_id2]) {
						api.selectStory(_id2, void 0, options);
					} else {
						let _k = hash[Object(csf_dist.sanitize)(kindOrId)]; if (_k && _k.children) {
							let foundId = _k.children.find((childId => hash[childId].name === story)); foundId && api.selectStory(foundId, void 0, options);
						}
					}
				} else {
					let kind = storyId.split('--', 2)[0]; let _id = Object(csf_dist.toId)(kind, story); api.selectStory(_id, void 0, options);
				}
			} else {
				let s = hash[kindOrId] || hash[Object(csf_dist.sanitize)(kindOrId)]; let id = s ? s.children ? s.children[0] : s.id : kindOrId; let viewMode = s && !isRoot(s) && (viewModeFromArgs || s.parameters.viewMode) ? s.parameters.viewMode : viewModeFromState; viewMode.match(/docs|story/) || (viewMode = 'story'); let p = s && s.refId ? '/'.concat(viewMode, '/').concat(s.refId, '_').concat(id) : '/'.concat(viewMode, '/').concat(id); navigate(p);
			}
		}, findLeafStoryId: function findLeafStoryId(storiesHash, storyId) {
			if (storiesHash[storyId].isLeaf) {
				return storyId;
			}

			let childStoryId = storiesHash[storyId].children[0]; return api.findLeafStoryId(storiesHash, childStoryId);
		}, updateStoryArgs: function updateStoryArgs(story, updatedArgs) {
			let storyId = story.id; let {refId} = story; fullAPI.emit(esm.UPDATE_STORY_ARGS, {storyId, updatedArgs, options: {target: refId ? 'storybook-ref-'.concat(refId) : 'storybook-preview-iframe'}});
		}, resetStoryArgs: function resetStoryArgs(story, argNames) {
			let storyId = story.id; let {refId} = story; fullAPI.emit(esm.RESET_STORY_ARGS, {storyId, argNames, options: {target: refId ? 'storybook-ref-'.concat(refId) : 'storybook-preview-iframe'}});
		}}; return {api, state: {storiesHash: {}, storyId: initialStoryId, viewMode: initialViewMode, storiesConfigured: !1}, init: function initModule() {
			fullAPI.on(esm.STORY_SPECIFIED, (function handler(_ref3) {
				let {storyId} = _ref3; let {viewMode} = _ref3; let
					{sourceType} = events_getEventMetadata(this, fullAPI); if (!fullAPI.isSettingsScreenActive() && sourceType === 'local') {
					let state = store.getState(); state.storyId === storyId && state.viewMode === viewMode || navigate('/'.concat(viewMode, '/').concat(storyId));
				}
			})), fullAPI.on(esm.STORY_CHANGED, (function handler() {
				if (events_getEventMetadata(this, fullAPI).sourceType === 'local') {
					let options = fullAPI.getCurrentParameter('options'); options && (checkDeprecatedOptionParameters(options), fullAPI.setOptions(options));
				}
			})), fullAPI.on(esm.SET_STORIES, (function handler(data) {
				let {ref} = events_getEventMetadata(this, fullAPI); let error = data.error || void 0; let
					stories = data.v ? (function denormalizeStoryParameters(_ref) {
						let {globalParameters} = _ref; let {kindParameters} = _ref; let
							{stories} = _ref; return mapValues_default()(stories, (storyData => ({...storyData, parameters: esm_combineParameters(globalParameters, kindParameters[storyData.kind], storyData.parameters)})));
					})(data) : data.stories; if (ref) {
					fullAPI.setRef(ref.id, {...ref, ...data, stories}, !0);
				} else {
					if (!data.v) {
						throw new Error('Unexpected legacy SET_STORIES event from local source');
					}

					fullAPI.setStories(stories, error); let options = fullAPI.getCurrentParameter('options'); checkDeprecatedOptionParameters(options), fullAPI.setOptions(options);
				}
			})), fullAPI.on(esm.SELECT_STORY, (function handler(_ref4) {
				let {kind} = _ref4; let {story} = _ref4; let rest = stories_objectWithoutProperties(_ref4, ['kind', 'story']); let
					{ref} = events_getEventMetadata(this, fullAPI); ref ? fullAPI.selectStory(kind, story, {...rest, ref: ref.id}) : fullAPI.selectStory(kind, story, rest);
			})), fullAPI.on(esm.STORY_ARGS_UPDATED, (function handleStoryArgsUpdated(_ref5) {
				let {storyId} = _ref5; let {args} = _ref5; let
					{ref} = events_getEventMetadata(this, fullAPI); if (ref) {
					let _refId = ref.id; let _stories = ref.stories; _stories[storyId].args = args, fullAPI.updateRef(_refId, {stories: _stories});
				} else {
					let {storiesHash} = store.getState(); storiesHash[storyId].args = args, store.setState({storiesHash});
				}
			}));
		}};
	};

	let pick = __webpack_require__(137); let pick_default = __webpack_require__.n(pick); let fast_deep_equal = __webpack_require__(64); let fast_deep_equal_default = __webpack_require__.n(fast_deep_equal); let create = __webpack_require__(207); function layout_objectWithoutProperties(source, excluded) {
		if (source == null) {
			return {};
		}

		let key; let i; let target = (function layout_objectWithoutPropertiesLoose(source, excluded) {
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

	let layout_DOCS_MODE = window_default.a.DOCS_MODE; let layout_document = window_default.a.document; var ActiveTabs = {SIDEBAR: 'sidebar', CANVAS: 'canvas', ADDONS: 'addons'}; let layout_defaultState = {ui: {enableShortcuts: !0, docsMode: !1}, layout: {initialActive: ActiveTabs.CANVAS, isToolshown: !layout_DOCS_MODE, isFullscreen: !1, showPanel: !0, showNav: !0, panelPosition: 'bottom'}, selectedPanel: void 0, theme: create.a.light}; var focusableUIElements = {storySearchField: 'storybook-explorer-searchfield', storyListMenu: 'storybook-explorer-menu', storyPanelRoot: 'storybook-panel-root'}; var layout_init = function init(_ref) {
		let {store} = _ref; let {provider} = _ref; let {singleStory} = _ref; let api = {toggleFullscreen: function toggleFullscreen(toggled) {
			return store.setState((state => {
				let {showNav} = state.layout; let value = typeof toggled === 'boolean' ? toggled : !state.layout.isFullscreen; let
					shouldShowNav = !1 === showNav && !1 === value; return {layout: {...state.layout, isFullscreen: value, showNav: !(singleStory || !shouldShowNav) || showNav}};
			}), {persistence: 'session'});
		}, togglePanel: function togglePanel(toggled) {
			return store.setState((state => {
				let _state$layout = state.layout; let {showNav} = _state$layout; let {isFullscreen} = _state$layout; let value = void 0 !== toggled ? toggled : !state.layout.showPanel; let shouldToggleFullScreen = !1 === showNav && !1 === value; return {layout: {...state.layout, showPanel: value, isFullscreen: Boolean(shouldToggleFullScreen) || isFullscreen}};
			}), {persistence: 'session'});
		}, togglePanelPosition: function togglePanelPosition(position) {
			return void 0 !== position ? store.setState((state => ({layout: {...state.layout, panelPosition: position}})), {persistence: 'session'}) : store.setState((state => ({layout: {...state.layout, panelPosition: state.layout.panelPosition === 'right' ? 'bottom' : 'right'}})), {persistence: 'session'});
		}, toggleNav: function toggleNav(toggled) {
			return store.setState((state => {
				if (singleStory) {
					return {layout: state.layout};
				}

				let _state$layout2 = state.layout; let {showPanel} = _state$layout2; let {isFullscreen} = _state$layout2; let value = void 0 !== toggled ? toggled : !state.layout.showNav; let shouldToggleFullScreen = !1 === showPanel && !1 === value; return {layout: {...state.layout, showNav: value, isFullscreen: Boolean(shouldToggleFullScreen) || isFullscreen}};
			}), {persistence: 'session'});
		}, toggleToolbar: function toggleToolbar(toggled) {
			return store.setState((state => {
				let value = void 0 !== toggled ? toggled : !state.layout.isToolshown; return {layout: {...state.layout, isToolshown: value}};
			}), {persistence: 'session'});
		}, resetLayout: function resetLayout() {
			return store.setState((state => ({layout: {...state.layout, showNav: !1, showPanel: !1, isFullscreen: !1}})), {persistence: 'session'});
		}, focusOnUIElement: function focusOnUIElement(elementId, select) {
			if (elementId) {
				let element = layout_document.getElementById(elementId); element && (element.focus(), select && element.select());
			}
		}, getInitialOptions: function getInitialOptions() {
			let _provider$getConfig = provider.getConfig(); let {theme} = _provider$getConfig; let {selectedPanel} = _provider$getConfig; let options = layout_objectWithoutProperties(_provider$getConfig, ['theme', 'selectedPanel']); return {...layout_defaultState, layout: {...layout_defaultState.layout, ...pick_default()(options, Object.keys(layout_defaultState.layout)), ...singleStory && {showNav: !1}}, ui: {...layout_defaultState.ui, ...pick_default()(options, Object.keys(layout_defaultState.ui))}, selectedPanel: selectedPanel || layout_defaultState.selectedPanel, theme: theme || layout_defaultState.theme};
		}, setOptions: function setOptions(options) {
			let _store$getState = store.getState(); let {layout} = _store$getState; let {ui} = _store$getState; let {selectedPanel} = _store$getState; let {theme} = _store$getState; if (options) {
				let updatedLayout = {...layout, ...pick_default()(options, Object.keys(layout)), ...singleStory && {showNav: !1}}; let updatedUi = {...ui, ...pick_default()(options, Object.keys(ui))}; let updatedTheme = {...theme, ...options.theme}; let modification = {}; fast_deep_equal_default()(ui, updatedUi) || (modification.ui = updatedUi), fast_deep_equal_default()(layout, updatedLayout) || (modification.layout = updatedLayout), options.selectedPanel && !fast_deep_equal_default()(selectedPanel, options.selectedPanel) && (modification.selectedPanel = options.selectedPanel), Object.keys(modification).length && store.setState(modification, {persistence: 'permanent'}), fast_deep_equal_default()(theme, updatedTheme) || store.setState({theme: updatedTheme});
			}
		}}; let
			persisted = pick_default()(store.getState(), 'layout', 'ui', 'selectedPanel'); return {api, state: merge(api.getInitialOptions(), persisted)};
	};

	let lib_shortcut = __webpack_require__(162); function shortcuts_defineProperty(obj, key, value) {
		return key in obj ? Object.defineProperty(obj, key, {value, enumerable: !0, configurable: !0, writable: !0}) : obj[key] = value, obj;
	}

	function shortcuts_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
		try {
			var info = gen[key](arg); var {value} = info;
		} catch (error) {
			return void reject(error);
		}

		info.done ? resolve(value) : Promise.resolve(value).then(_next, _throw);
	}

	function shortcuts_asyncToGenerator(fn) {
		return function () {
			let self = this; let args = arguments; return new Promise(((resolve, reject) => {
				let gen = fn.apply(self, args); function _next(value) {
					shortcuts_asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value);
				}

				function _throw(err) {
					shortcuts_asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err);
				}

				_next(void 0);
			}));
		};
	}

	function shortcuts_slicedToArray(arr, i) {
		return (function shortcuts_arrayWithHoles(arr) {
			if (Array.isArray(arr)) {
				return arr;
			}
		})(arr) || (function shortcuts_iterableToArrayLimit(arr, i) {
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
		})(arr, i) || (function shortcuts_unsupportedIterableToArray(o, minLen) {
			if (!o) {
				return;
			}

			if (typeof o === 'string') {
				return shortcuts_arrayLikeToArray(o, minLen);
			}

			let n = Object.prototype.toString.call(o).slice(8, -1); n === 'Object' && o.constructor && (n = o.constructor.name); if (n === 'Map' || n === 'Set') {
				return Array.from(o);
			}

			if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
				return shortcuts_arrayLikeToArray(o, minLen);
			}
		})(arr, i) || (function shortcuts_nonIterableRest() {
			throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
		})();
	}

	function shortcuts_arrayLikeToArray(arr, len) {
		(len == null || len > arr.length) && (len = arr.length); for (var i = 0, arr2 = new Array(len); i < len; i++) {
			arr2[i] = arr[i];
		}

		return arr2;
	}

	let shortcuts_navigator = window_default.a.navigator; let shortcuts_document = window_default.a.document; var isMacLike = function isMacLike() {
		return !(!shortcuts_navigator || !shortcuts_navigator.platform) && Boolean(shortcuts_navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i));
	};

	var controlOrMetaKey = function controlOrMetaKey() {
		return isMacLike() ? 'meta' : 'control';
	};

	function keys(o) {
		return Object.keys(o);
	}

	var defaultShortcuts = Object.freeze({fullScreen: ['F'], togglePanel: ['A'], panelPosition: ['D'], toggleNav: ['S'], toolbar: ['T'], search: ['/'], focusNav: ['1'], focusIframe: ['2'], focusPanel: ['3'], prevComponent: ['alt', 'ArrowUp'], nextComponent: ['alt', 'ArrowDown'], prevStory: ['alt', 'ArrowLeft'], nextStory: ['alt', 'ArrowRight'], shortcutsPage: [controlOrMetaKey(), 'shift', ','], aboutPage: [','], escape: ['escape'], collapseAll: [controlOrMetaKey(), 'shift', 'ArrowUp'], expandAll: [controlOrMetaKey(), 'shift', 'ArrowDown']}); let addonsShortcuts = {}; let url_templateObject; let url_templateObject2; let url_templateObject3; let _templateObject4; var shortcuts_init = function init(_ref) {
		let {store} = _ref; let {fullAPI} = _ref; var api = {getShortcutKeys: function getShortcutKeys() {
			return store.getState().shortcuts;
		}, getDefaultShortcuts: function getDefaultShortcuts() {
			return {...defaultShortcuts, ...api.getAddonsShortcutDefaults()};
		}, getAddonsShortcuts: function getAddonsShortcuts() {
			return addonsShortcuts;
		}, getAddonsShortcutLabels: function getAddonsShortcutLabels() {
			let labels = {}; return Object.entries(api.getAddonsShortcuts()).forEach((_ref2 => {
				let _ref3 = shortcuts_slicedToArray(_ref2, 2); let actionName = _ref3[0]; let {label} = _ref3[1]; labels[actionName] = label;
			})), labels;
		}, getAddonsShortcutDefaults: function getAddonsShortcutDefaults() {
			let defaults = {}; return Object.entries(api.getAddonsShortcuts()).forEach((_ref4 => {
				let _ref5 = shortcuts_slicedToArray(_ref4, 2); let actionName = _ref5[0]; let {defaultShortcut} = _ref5[1]; defaults[actionName] = defaultShortcut;
			})), defaults;
		}, setShortcuts: function setShortcuts(shortcuts) {
			return shortcuts_asyncToGenerator(regeneratorRuntime.mark((function _callee() {
				return regeneratorRuntime.wrap((function _callee$(_context) {
					for (;;) {
						switch (_context.prev = _context.next) {
							case 0: return _context.next = 2, store.setState({shortcuts}, {persistence: 'permanent'}); case 2: return _context.abrupt('return', shortcuts); case 3: case 'end': return _context.stop();
						}
					}
				}), _callee);
			})))();
		}, restoreAllDefaultShortcuts: function restoreAllDefaultShortcuts() {
			return shortcuts_asyncToGenerator(regeneratorRuntime.mark((function _callee2() {
				return regeneratorRuntime.wrap((function _callee2$(_context2) {
					for (;;) {
						switch (_context2.prev = _context2.next) {
							case 0: return _context2.abrupt('return', api.setShortcuts(api.getDefaultShortcuts())); case 1: case 'end': return _context2.stop();
						}
					}
				}), _callee2);
			})))();
		}, setShortcut: function setShortcut(action, value) {
			return shortcuts_asyncToGenerator(regeneratorRuntime.mark((function _callee3() {
				let shortcuts; return regeneratorRuntime.wrap((function _callee3$(_context3) {
					for (;;) {
						switch (_context3.prev = _context3.next) {
							case 0: return shortcuts = api.getShortcutKeys(), _context3.next = 3, api.setShortcuts({...shortcuts, ...shortcuts_defineProperty({}, action, value)}); case 3: return _context3.abrupt('return', value); case 4: case 'end': return _context3.stop();
						}
					}
				}), _callee3);
			})))();
		}, setAddonShortcut: function setAddonShortcut(addon, shortcut) {
			return shortcuts_asyncToGenerator(regeneratorRuntime.mark((function _callee4() {
				let shortcuts; return regeneratorRuntime.wrap((function _callee4$(_context4) {
					for (;;) {
						switch (_context4.prev = _context4.next) {
							case 0: return shortcuts = api.getShortcutKeys(), _context4.next = 3, api.setShortcuts({...shortcuts, ...shortcuts_defineProperty({}, ''.concat(addon, '-').concat(shortcut.actionName), shortcut.defaultShortcut)}); case 3: return addonsShortcuts[''.concat(addon, '-').concat(shortcut.actionName)] = shortcut, _context4.abrupt('return', shortcut); case 5: case 'end': return _context4.stop();
						}
					}
				}), _callee4);
			})))();
		}, restoreDefaultShortcut: function restoreDefaultShortcut(action) {
			return shortcuts_asyncToGenerator(regeneratorRuntime.mark((function _callee5() {
				let defaultShortcut; return regeneratorRuntime.wrap((function _callee5$(_context5) {
					for (;;) {
						switch (_context5.prev = _context5.next) {
							case 0: return defaultShortcut = api.getDefaultShortcuts()[action], _context5.abrupt('return', api.setShortcut(action, defaultShortcut)); case 2: case 'end': return _context5.stop();
						}
					}
				}), _callee5);
			})))();
		}, handleKeydownEvent: function handleKeydownEvent(event) {
			let shortcut = Object(lib_shortcut.a)(event); let shortcuts = api.getShortcutKeys(); let matchedFeature = keys(shortcuts).find((feature => Object(lib_shortcut.b)(shortcut, shortcuts[feature]))); matchedFeature && (event != null && event.preventDefault && event.preventDefault(), api.handleShortcutFeature(matchedFeature));
		}, handleShortcutFeature: function handleShortcutFeature(feature) {
			let _store$getState = store.getState(); let _store$getState$layou = _store$getState.layout; let {isFullscreen} = _store$getState$layou; let {showNav} = _store$getState$layou; let {showPanel} = _store$getState$layou; if (_store$getState.ui.enableShortcuts) {
				switch (feature) {
					case 'escape': isFullscreen ? fullAPI.toggleFullscreen() : showNav || fullAPI.toggleNav(); break; case 'focusNav': isFullscreen && fullAPI.toggleFullscreen(), showNav || fullAPI.toggleNav(), fullAPI.focusOnUIElement(focusableUIElements.storyListMenu); break; case 'search': isFullscreen && fullAPI.toggleFullscreen(), showNav || fullAPI.toggleNav(), setTimeout((() => {
						fullAPI.focusOnUIElement(focusableUIElements.storySearchField, !0);
					}), 0); break; case 'focusIframe': var element = shortcuts_document.getElementById('storybook-preview-iframe'); if (element) {
						try {
							element.contentWindow.focus();
						} catch (e) {}
					}

						break; case 'focusPanel': isFullscreen && fullAPI.toggleFullscreen(), showPanel || fullAPI.togglePanel(), fullAPI.focusOnUIElement(focusableUIElements.storyPanelRoot); break; case 'nextStory': fullAPI.jumpToStory(1); break; case 'prevStory': fullAPI.jumpToStory(-1); break; case 'nextComponent': fullAPI.jumpToComponent(1); break; case 'prevComponent': fullAPI.jumpToComponent(-1); break; case 'fullScreen': fullAPI.toggleFullscreen(); break; case 'togglePanel': isFullscreen && (fullAPI.toggleFullscreen(), fullAPI.resetLayout()), fullAPI.togglePanel(); break; case 'toggleNav': isFullscreen && (fullAPI.toggleFullscreen(), fullAPI.resetLayout()), fullAPI.toggleNav(); break; case 'toolbar': fullAPI.toggleToolbar(); break; case 'panelPosition': isFullscreen && fullAPI.toggleFullscreen(), showPanel || fullAPI.togglePanel(), fullAPI.togglePanelPosition(); break; case 'aboutPage': fullAPI.navigate('/settings/about'); break; case 'shortcutsPage': fullAPI.navigate('/settings/shortcuts'); break; case 'collapseAll': fullAPI.collapseAll(); break; case 'expandAll': fullAPI.expandAll(); break; default: addonsShortcuts[feature].action();
				}
			}
		}}; let _store$getState2$shor = store.getState().shortcuts; let persistedShortcuts = void 0 === _store$getState2$shor ? defaultShortcuts : _store$getState2$shor; let
			state = {shortcuts: keys(defaultShortcuts).reduce(((acc, key) => ({...acc, ...shortcuts_defineProperty({}, key, persistedShortcuts[key] || defaultShortcuts[key])})), defaultShortcuts)}; return {api, state, init: function initModule() {
			shortcuts_document.addEventListener('keydown', (event => {
				(function focusInInput(event) {
					return /input|textarea/i.test(event.target.tagName) || event.target.getAttribute('contenteditable') !== null;
				})(event) || fullAPI.handleKeydownEvent(event);
			})), fullAPI.on(esm.PREVIEW_KEYDOWN, (data => {
				fullAPI.handleKeydownEvent(data.event);
			}));
		}};
	};

	let es = (__webpack_require__(62), __webpack_require__(108)); let router = __webpack_require__(870); let utils = __webpack_require__(213); function url_taggedTemplateLiteral(strings, raw) {
		return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, {raw: {value: Object.freeze(raw)}}));
	}

	function url_objectWithoutProperties(source, excluded) {
		if (source == null) {
			return {};
		}

		let key; let i; let target = (function url_objectWithoutPropertiesLoose(source, excluded) {
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

	function url_toConsumableArray(arr) {
		return (function url_arrayWithoutHoles(arr) {
			if (Array.isArray(arr)) {
				return url_arrayLikeToArray(arr);
			}
		})(arr) || (function url_iterableToArray(iter) {
			if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(iter)) {
				return Array.from(iter);
			}
		})(arr) || url_unsupportedIterableToArray(arr) || (function url_nonIterableSpread() {
			throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
		})();
	}

	function url_slicedToArray(arr, i) {
		return (function url_arrayWithHoles(arr) {
			if (Array.isArray(arr)) {
				return arr;
			}
		})(arr) || (function url_iterableToArrayLimit(arr, i) {
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
		})(arr, i) || url_unsupportedIterableToArray(arr, i) || (function url_nonIterableRest() {
			throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
		})();
	}

	function url_unsupportedIterableToArray(o, minLen) {
		if (o) {
			if (typeof o === 'string') {
				return url_arrayLikeToArray(o, minLen);
			}

			let n = Object.prototype.toString.call(o).slice(8, -1); return n === 'Object' && o.constructor && (n = o.constructor.name), n === 'Map' || n === 'Set' ? Array.from(o) : n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? url_arrayLikeToArray(o, minLen) : void 0;
		}
	}

	function url_arrayLikeToArray(arr, len) {
		(len == null || len > arr.length) && (len = arr.length); for (var i = 0, arr2 = new Array(len); i < len; i++) {
			arr2[i] = arr[i];
		}

		return arr2;
	}

	let prevParams; let globalWindow = window_default.a.window; let parseBoolean = function parseBoolean(value) {
		return value === 'true' || value === '1' || value !== 'false' && value !== '0' && void 0;
	};

	let url_navigateTo = function navigateTo(path) {
		let queryParams = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; let options = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}; let params = Object.entries(queryParams).filter((_ref => url_slicedToArray(_ref, 2)[1])).sort(((_ref3, _ref4) => url_slicedToArray(_ref3, 1)[0] < url_slicedToArray(_ref4, 1)[0] ? -1 : 1)).map((_ref7 => {
			let _ref8 = url_slicedToArray(_ref7, 2); let k = _ref8[0]; let v = _ref8[1]; return ''.concat(k, '=').concat(v);
		})); let to = [path].concat(url_toConsumableArray(params)).join('&'); return Object(router.d)(to, options);
	};

	let url_initialUrlSupport = function initialUrlSupport(_ref9) {
		let _ref9$state = _ref9.state; let {location} = _ref9$state; let {path} = _ref9$state; let {viewMode} = _ref9$state; let storyIdFromUrl = _ref9$state.storyId; let {singleStory} = _ref9; let _queryFromLocation = Object(utils.d)(location); let {full} = _queryFromLocation; let {panel} = _queryFromLocation; let {nav} = _queryFromLocation; let {shortcuts} = _queryFromLocation; let {addonPanel} = _queryFromLocation; let {addons} = _queryFromLocation; let {panelRight} = _queryFromLocation; let {stories} = _queryFromLocation; let {selectedKind} = _queryFromLocation; let {selectedStory} = _queryFromLocation; let otherParams = (_queryFromLocation.path, url_objectWithoutProperties(_queryFromLocation, ['full', 'panel', 'nav', 'shortcuts', 'addonPanel', 'addons', 'panelRight', 'stories', 'selectedKind', 'selectedStory', 'path'])); let layout = {isFullscreen: parseBoolean(full), showNav: !singleStory && parseBoolean(nav), showPanel: parseBoolean(panel), panelPosition: ['right', 'bottom'].includes(panel) ? panel : void 0}; let ui = {enableShortcuts: parseBoolean(shortcuts)}; let selectedPanel = addonPanel || void 0; addons === '0' && (dist_esm.b.warn(dist_default()(url_templateObject || (url_templateObject = url_taggedTemplateLiteral(['\n      The \'addons\' query param is deprecated and will be removed in Storybook 7.0. Use \'panel=false\' instead.\n\n      More info: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#deprecated-layout-url-params\n    '])))), layout.showPanel = !1), panelRight === '1' && (dist_esm.b.warn(dist_default()(url_templateObject2 || (url_templateObject2 = url_taggedTemplateLiteral(['\n      The \'panelRight\' query param is deprecated and will be removed in Storybook 7.0. Use \'panel=right\' instead.\n\n      More info: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#deprecated-layout-url-params\n    '])))), layout.panelPosition = 'right'), stories === '0' && (dist_esm.b.warn(dist_default()(url_templateObject3 || (url_templateObject3 = url_taggedTemplateLiteral(['\n      The \'stories\' query param is deprecated and will be removed in Storybook 7.0. Use \'nav=false\' instead.\n\n      More info: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#deprecated-layout-url-params\n    '])))), layout.showNav = !1); let storyId = storyIdFromUrl; !storyId && selectedKind && (dist_esm.b.warn(dist_default()(_templateObject4 || (_templateObject4 = url_taggedTemplateLiteral(['\n      The \'selectedKind\' and \'selectedStory\' query params are deprecated and will be removed in Storybook 7.0. Use \'path\' instead.\n\n      More info: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#deprecated-layout-url-params\n    '])))), storyId = selectedStory ? Object(csf_dist.toId)(selectedKind, selectedStory) : Object(csf_dist.sanitize)(selectedKind)); let customQueryParams = fast_deep_equal_default()(prevParams, otherParams) ? prevParams : otherParams; return prevParams = customQueryParams, {viewMode, layout, ui, selectedPanel, location, path, customQueryParams, storyId};
	};

	var url_init = function init(_ref10) {
		let {store} = _ref10; let {navigate} = _ref10; let {state} = _ref10; let {provider} = _ref10; let {fullAPI} = _ref10; let rest = url_objectWithoutProperties(_ref10, ['store', 'navigate', 'state', 'provider', 'fullAPI']); let
			api = {getQueryParam: function getQueryParam(key) {
				let {customQueryParams} = store.getState(); return customQueryParams ? customQueryParams[key] : void 0;
			}, getUrlState: function getUrlState() {
				let _store$getState2 = store.getState(); return {path: _store$getState2.path, queryParams: _store$getState2.customQueryParams, storyId: _store$getState2.storyId, url: _store$getState2.url, viewMode: _store$getState2.viewMode};
			}, setQueryParams: function setQueryParams(input) {
				let {customQueryParams} = store.getState(); let
					update = {...customQueryParams, ...Object.entries(input).reduce(((acc, _ref11) => {
						let _ref12 = url_slicedToArray(_ref11, 2); let key = _ref12[0]; let value = _ref12[1]; return value !== null && (acc[key] = value), acc;
					}), {})}; fast_deep_equal_default()(customQueryParams, update) || store.setState({customQueryParams: update});
			}, navigateUrl: function navigateUrl(url, options) {
				Object(es.d)(url, options);
			}}; return {api, state: url_initialUrlSupport({store, navigate, state, provider, fullAPI, ...rest}), init: function initModule() {
			let handleOrId; let updateArgsParam = function updateArgsParam() {
				let _fullAPI$getUrlState = fullAPI.getUrlState(); let {path} = _fullAPI$getUrlState; let {queryParams} = _fullAPI$getUrlState; if (_fullAPI$getUrlState.viewMode === 'story') {
					let currentStory = fullAPI.getCurrentStoryData(); if (isStory(currentStory)) {
						let {args} = currentStory; let {initialArgs} = currentStory; let
							argsString = Object(utils.a)(initialArgs, args); url_navigateTo(path, {...queryParams, args: argsString}, {replace: !0}), api.setQueryParams({args: argsString});
					}
				}
			};

			fullAPI.on(esm.SET_CURRENT_STORY, (() => updateArgsParam())), fullAPI.on(esm.STORY_ARGS_UPDATED, (() => {
				'requestIdleCallback' in globalWindow ? (handleOrId && globalWindow.cancelIdleCallback(handleOrId), handleOrId = globalWindow.requestIdleCallback(updateArgsParam, {timeout: 1e3})) : (handleOrId && clearTimeout(handleOrId), setTimeout(updateArgsParam, 100));
			})), fullAPI.on(esm.GLOBALS_UPDATED, (_ref13 => {
				let {globals} = _ref13; let {initialGlobals} = _ref13; let _fullAPI$getUrlState2 = fullAPI.getUrlState(); let {path} = _fullAPI$getUrlState2; let {queryParams} = _fullAPI$getUrlState2; let
					globalsString = Object(utils.a)(initialGlobals, globals); url_navigateTo(path, {...queryParams, globals: globalsString}, {replace: !0}), api.setQueryParams({globals: globalsString});
			})), fullAPI.on(esm.NAVIGATE_URL, ((url, options) => {
				fullAPI.navigateUrl(url, options);
			})), fullAPI.showReleaseNotesOnLaunch() && navigate('/settings/release-notes');
		}};
	};

	let semver = __webpack_require__(74); let semver_default = __webpack_require__.n(semver); function versions_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
		try {
			var info = gen[key](arg); var {value} = info;
		} catch (error) {
			return void reject(error);
		}

		info.done ? resolve(value) : Promise.resolve(value).then(_next, _throw);
	}

	let {VERSIONCHECK} = window_default.a; let getVersionCheckData = memoizerific_default()(1)((() => {
		try {
			return {...JSON.parse(VERSIONCHECK).data || {}};
		} catch (e) {
			return {};
		}
	})); var versions_init = function init(_ref) {
		let {store} = _ref; let {mode} = _ref; let {fullAPI} = _ref; let {dismissedVersionNotification} = store.getState(); let state = {versions: {current: {version: '6.3.6'}, ...getVersionCheckData()}, dismissedVersionNotification}; var
			api = {getCurrentVersion: function getCurrentVersion() {
				return store.getState().versions.current;
			}, getLatestVersion: function getLatestVersion() {
				let _store$getState3$vers = store.getState().versions; let {latest} = _store$getState3$vers; let {next} = _store$getState3$vers; let {current} = _store$getState3$vers; return current && semver_default.a.prerelease(current.version) && next ? latest && semver_default.a.gt(latest.version, next.version) ? latest : next : latest;
			}, versionUpdateAvailable: function versionUpdateAvailable() {
				let latest = api.getLatestVersion(); let current = api.getCurrentVersion(); if (latest) {
					if (!latest.version) {
						return !0;
					}

					if (!current.version) {
						return !0;
					}

					let actualCurrent = semver_default.a.prerelease(current.version) ? ''.concat(semver_default.a.major(current.version), '.').concat(semver_default.a.minor(current.version), '.').concat(semver_default.a.patch(current.version)) : current.version; let diff = semver_default.a.diff(actualCurrent, latest.version); return semver_default.a.gt(latest.version, actualCurrent) && diff !== 'patch' && !diff.includes('pre');
				}

				return !1;
			}}; return {init: (function () {
			let _ref2 = (function versions_asyncToGenerator(fn) {
				return function () {
					let self = this; let args = arguments; return new Promise(((resolve, reject) => {
						let gen = fn.apply(self, args); function _next(value) {
							versions_asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value);
						}

						function _throw(err) {
							versions_asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err);
						}

						_next(void 0);
					}));
				};
			})(regeneratorRuntime.mark((function _callee() {
				let _store$getState4; let _store$getState4$vers; let versions; let _getVersionCheckData; let latest; let next; let latestVersion; let diff; return regeneratorRuntime.wrap((function _callee$(_context) {
					for (;;) {
						switch (_context.prev = _context.next) {
							case 0: return _store$getState4 = store.getState(), _store$getState4$vers = _store$getState4.versions, versions = void 0 === _store$getState4$vers ? {} : _store$getState4$vers, _getVersionCheckData = getVersionCheckData(), latest = _getVersionCheckData.latest, next = _getVersionCheckData.next, _context.next = 4, store.setState({versions: {...versions, latest, next}}); case 4: api.versionUpdateAvailable() && (latestVersion = api.getLatestVersion().version, diff = semver_default.a.diff(versions.current.version, versions.latest.version), latestVersion === dismissedVersionNotification || diff === 'patch' || semver_default.a.prerelease(latestVersion) || mode === 'production' || fullAPI.addNotification({id: 'update', link: '/settings/about', content: {headline: 'Storybook '.concat(latestVersion, ' is available!'), subHeadline: 'Your current version is: '.concat(versions.current.version)}, icon: {name: 'book'}, onClear: function onClear() {
								store.setState({dismissedVersionNotification: latestVersion}, {persistence: 'permanent'});
							}})); case 5: case 'end': return _context.stop();
						}
					}
				}), _callee);
			}))); return function initModule() {
				return _ref2.apply(this, arguments);
			};
		})(), state, api};
	};

	var
		globals_init = function init(_ref) {
			let {store} = _ref; let {fullAPI} = _ref; let
				updateGlobals = function updateGlobals(globals) {
					let _store$getState; let currentGlobals = (_store$getState = store.getState()) === null || void 0 === _store$getState ? void 0 : _store$getState.globals; fast_deep_equal_default()(globals, currentGlobals) || store.setState({globals});
				};

			return {api: {updateGlobals: function updateGlobals(newGlobals) {
				fullAPI.emit(esm.UPDATE_GLOBALS, {globals: newGlobals, options: {target: 'storybook-preview-iframe'}});
			}}, state: {globals: {}}, init: function initModule() {
				fullAPI.on(esm.GLOBALS_UPDATED, (function handleGlobalsUpdated(_ref2) {
					let {globals} = _ref2; events_getEventMetadata(this, fullAPI).ref ? dist_esm.a.warn('received a GLOBALS_UPDATED from a non-local ref. This is not currently supported.') : updateGlobals(globals);
				})), fullAPI.on(esm.SET_STORIES, (function handleSetStories(_ref3) {
					let {globals} = _ref3; events_getEventMetadata(this, fullAPI).ref ? Object.keys(globals).length > 0 && dist_esm.a.warn('received globals from a non-local ref. This is not currently supported.') : updateGlobals(globals);
				}));
			}};
		};

	function esm_typeof(obj) {
		return (esm_typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function _typeof(obj) {
			return typeof obj;
		} : function _typeof(obj) {
			return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
		})(obj);
	}

	function esm_defineProperty(obj, key, value) {
		return key in obj ? Object.defineProperty(obj, key, {value, enumerable: !0, configurable: !0, writable: !0}) : obj[key] = value, obj;
	}

	function esm_slicedToArray(arr, i) {
		return (function esm_arrayWithHoles(arr) {
			if (Array.isArray(arr)) {
				return arr;
			}
		})(arr) || (function esm_iterableToArrayLimit(arr, i) {
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
		})(arr, i) || esm_unsupportedIterableToArray(arr, i) || (function esm_nonIterableRest() {
			throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
		})();
	}

	function esm_toConsumableArray(arr) {
		return (function esm_arrayWithoutHoles(arr) {
			if (Array.isArray(arr)) {
				return esm_arrayLikeToArray(arr);
			}
		})(arr) || (function esm_iterableToArray(iter) {
			if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(iter)) {
				return Array.from(iter);
			}
		})(arr) || esm_unsupportedIterableToArray(arr) || (function esm_nonIterableSpread() {
			throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
		})();
	}

	function esm_unsupportedIterableToArray(o, minLen) {
		if (o) {
			if (typeof o === 'string') {
				return esm_arrayLikeToArray(o, minLen);
			}

			let n = Object.prototype.toString.call(o).slice(8, -1); return n === 'Object' && o.constructor && (n = o.constructor.name), n === 'Map' || n === 'Set' ? Array.from(o) : n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? esm_arrayLikeToArray(o, minLen) : void 0;
		}
	}

	function esm_arrayLikeToArray(arr, len) {
		(len == null || len > arr.length) && (len = arr.length); for (var i = 0, arr2 = new Array(len); i < len; i++) {
			arr2[i] = arr[i];
		}

		return arr2;
	}

	function esm_defineProperties(target, props) {
		for (let i = 0; i < props.length; i++) {
			let descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 'value' in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
		}
	}

	function _setPrototypeOf(o, p) {
		return (_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
			return o.__proto__ = p, o;
		})(o, p);
	}

	function _createSuper(Derived) {
		let hasNativeReflectConstruct = (function _isNativeReflectConstruct() {
			if (typeof Reflect === 'undefined' || !Reflect.construct) {
				return !1;
			}

			if (Reflect.construct.sham) {
				return !1;
			}

			if (typeof Proxy === 'function') {
				return !0;
			}

			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (() => {}))), !0;
			} catch (e) {
				return !1;
			}
		})(); return function _createSuperInternal() {
			let result; let Super = _getPrototypeOf(Derived); if (hasNativeReflectConstruct) {
				let NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget);
			} else {
				result = Super.apply(this, arguments);
			}

			return _possibleConstructorReturn(this, result);
		};
	}

	function _possibleConstructorReturn(self, call) {
		return !call || esm_typeof(call) !== 'object' && typeof call !== 'function' ? (function _assertThisInitialized(self) {
			if (void 0 === self) {
				throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
			}

			return self;
		})(self) : call;
	}

	function _getPrototypeOf(o) {
		return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
			return o.__proto__ || Object.getPrototypeOf(o);
		})(o);
	}

	var esm_ActiveTabs = ActiveTabs; let ManagerContext = (function createContext(_ref) {
		let {api} = _ref; let
			{state} = _ref; return Object(react.createContext)({api, state});
	})({api: void 0, state: initial_state({})}); var esm_combineParameters = function combineParameters() {
		for (var _len = arguments.length, parameterSets = new Array(_len), _key = 0; _key < _len; _key++) {
			parameterSets[_key] = arguments[_key];
		}

		return mergeWith_default.a.apply(void 0, [{}].concat(parameterSets, [function (objValue, srcValue) {
			if (Array.isArray(srcValue)) {
				return srcValue;
			}
		}]));
	};

	var esm_ManagerProvider = (function (_Component) {
		!(function _inherits(subClass, superClass) {
			if (typeof superClass !== 'function' && superClass !== null) {
				throw new TypeError('Super expression must either be null or a function');
			}

			subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {value: subClass, writable: !0, configurable: !0}}), superClass && _setPrototypeOf(subClass, superClass);
		})(ManagerProvider, _Component);

		let _super = _createSuper(ManagerProvider); function ManagerProvider(props) {
			let _this; !(function esm_classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError('Cannot call a class as a function');
				}
			})(this, ManagerProvider), (_this = _super.call(this, props)).api = {}, _this.modules = void 0, _this.initModules = function () {
				_this.modules.forEach((_ref => {
					let {init} = _ref; init && init();
				}));
			};

			let {location} = props; let {path} = props; let {refId} = props; let _props$viewMode = props.viewMode; let viewMode = void 0 === _props$viewMode ? props.docsMode ? 'docs' : 'story' : _props$viewMode; let {singleStory} = props; let {storyId} = props; let {docsMode} = props; let {navigate} = props; let store = new store_Store({getState: function getState() {
				return _this.state;
			}, setState: function setState(stateChange, callback) {
				return _this.setState(stateChange, callback);
			}}); let
				routeData = {location, path, viewMode, singleStory, storyId, refId}; _this.state = store.getInitialState(initial_state({...routeData, ...(docsMode ? {layout: {isToolshown: !1, showPanel: !1}, ui: {docsMode: !0}} : null)})); let apiData = {navigate, store, provider: props.provider}; _this.modules = [provider_namespaceObject, channel_namespaceObject, addons_namespaceObject, layout_namespaceObject, notifications_namespaceObject, settings_namespaceObject, release_notes_namespaceObject, shortcuts_namespaceObject, modules_stories_namespaceObject, refs_namespaceObject, globals_namespaceObject, url_namespaceObject, versions_namespaceObject].map((m => m.init({...routeData, ...apiData, state: _this.state, fullAPI: _this.api}))); let state = initial_state.apply(void 0, [_this.state].concat(esm_toConsumableArray(_this.modules.map((m => m.state))))); let api = Object.assign.apply(Object, [_this.api, {navigate}].concat(esm_toConsumableArray(_this.modules.map((m => m.api))))); return _this.state = state, _this.api = api, _this;
		}

		return (function esm_createClass(Constructor, protoProps, staticProps) {
			return protoProps && esm_defineProperties(Constructor.prototype, protoProps), staticProps && esm_defineProperties(Constructor, staticProps), Constructor;
		})(ManagerProvider, [{key: 'shouldComponentUpdate', value: function shouldComponentUpdate(nextProps, nextState) {
			let prevState = this.state; let prevProps = this.props; return prevState !== nextState || prevProps.path !== nextProps.path;
		}}, {key: 'render', value: function render() {
			let {children} = this.props; let
				value = {state: this.state, api: this.api}; return react_default.a.createElement(esm_EffectOnMount, {effect: this.initModules}, react_default.a.createElement(ManagerContext.Provider, {value}, react_default.a.createElement(ManagerConsumer, null, children)));
		}}]), ManagerProvider;
	})(react.Component); esm_ManagerProvider.displayName = 'ManagerProvider', esm_ManagerProvider.displayName = 'Manager', esm_ManagerProvider.getDerivedStateFromProps = function (props, state) {
		return state.path !== props.path ? ({...state, location: props.location, path: props.path, refId: props.refId, viewMode: (props.docsMode && props.viewMode) === 'story' ? 'docs' : props.viewMode, storyId: props.storyId}) : null;
	};

	var esm_EffectOnMount = function EffectOnMount(_ref2) {
		let {children} = _ref2; let
			{effect} = _ref2; return react_default.a.useEffect(effect, []), children;
	};

	let defaultFilter = function defaultFilter(c) {
		return c;
	};

	function ManagerConsumer(_ref3) {
		let _ref3$filter = _ref3.filter; let filter = void 0 === _ref3$filter ? defaultFilter : _ref3$filter; let {children} = _ref3; let c = Object(react.useContext)(ManagerContext); let renderer = Object(react.useRef)(children); let filterer = Object(react.useRef)(filter); if (typeof renderer.current !== 'function') {
			return react_default.a.createElement(react.Fragment, null, renderer.current);
		}

		let data = filterer.current(c); let l = Object(react.useMemo)((() => esm_toConsumableArray(Object.entries(data).reduce(((acc, keyval) => acc.concat(keyval)), []))), [c.state]); return Object(react.useMemo)((() => {
			let Child = renderer.current; return react_default.a.createElement(Child, data);
		}), l);
	}

	function useStorybookState() {
		return Object(react.useContext)(ManagerContext).state;
	}

	function useStorybookApi() {
		return Object(react.useContext)(ManagerContext).api;
	}

	function orDefault(fromStore, defaultState) {
		return void 0 === fromStore ? defaultState : fromStore;
	}

	function useParameter(parameterKey, defaultValue) {
		return orDefault(useStorybookApi().getCurrentParameter(parameterKey), defaultValue);
	}

	let addonStateCache = {}; function useSharedState(stateId, defaultState) {
		let api = useStorybookApi(); let state = orDefault(api.getAddonState(stateId), addonStateCache[stateId] ? addonStateCache[stateId] : defaultState); let setState = function setState(s, options) {
			addonStateCache[stateId] && (addonStateCache[stateId] = s), api.setAddonState(stateId, s, options);
		};

		let emit = (function useChannel(eventMap) {
			let deps = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []; let api = useStorybookApi(); return Object(react.useEffect)((() => (Object.entries(eventMap).forEach((_ref4 => {
				let _ref5 = esm_slicedToArray(_ref4, 2); let type = _ref5[0]; let listener = _ref5[1]; return api.on(type, listener);
			})), function () {
				Object.entries(eventMap).forEach((_ref6 => {
					let _ref7 = esm_slicedToArray(_ref6, 2); let type = _ref7[0]; let listener = _ref7[1]; return api.off(type, listener);
				}));
			})), deps), api.emit;
		})(Object(react.useMemo)((() => {
			let _stateChangeHandlers; let _stateInitializationH; let stateChangeHandlers = (esm_defineProperty(_stateChangeHandlers = {}, ''.concat(esm.SHARED_STATE_CHANGED, '-client-').concat(stateId), (function client(s) {
				return setState(s);
			})), esm_defineProperty(_stateChangeHandlers, ''.concat(esm.SHARED_STATE_SET, '-client-').concat(stateId), (function client(s) {
				return setState(s);
			})), _stateChangeHandlers); let stateInitializationHandlers = (esm_defineProperty(_stateInitializationH = {}, esm.SET_STORIES, (() => {
				let currentState = api.getAddonState(stateId); currentState ? (addonStateCache[stateId] = currentState, api.emit(''.concat(esm.SHARED_STATE_SET, '-manager-').concat(stateId), currentState)) : addonStateCache[stateId] ? (setState(addonStateCache[stateId]), api.emit(''.concat(esm.SHARED_STATE_SET, '-manager-').concat(stateId), addonStateCache[stateId])) : void 0 !== defaultState && (setState(defaultState), addonStateCache[stateId] = defaultState, api.emit(''.concat(esm.SHARED_STATE_SET, '-manager-').concat(stateId), defaultState));
			})), esm_defineProperty(_stateInitializationH, esm.STORY_CHANGED, (() => {
				let currentState = api.getAddonState(stateId); void 0 !== currentState && api.emit(''.concat(esm.SHARED_STATE_SET, '-manager-').concat(stateId), currentState);
			})), _stateInitializationH); return {...stateChangeHandlers, ...stateInitializationHandlers};
		}), [stateId])); return [state, function (newStateOrMerger, options) {
			setState(newStateOrMerger, options), emit(''.concat(esm.SHARED_STATE_CHANGED, '-manager-').concat(stateId), newStateOrMerger);
		}];
	}

	function useAddonState(addonId, defaultState) {
		return useSharedState(addonId, defaultState);
	}

	function useArgs() {
		let _useStorybookApi = useStorybookApi(); let {getCurrentStoryData} = _useStorybookApi; let {updateStoryArgs} = _useStorybookApi; let {resetStoryArgs} = _useStorybookApi; let data = getCurrentStoryData(); return [isStory(data) ? data.args : {}, Object(react.useCallback)((newArgs => updateStoryArgs(data, newArgs)), [data, updateStoryArgs]), Object(react.useCallback)((argNames => resetStoryArgs(data, argNames)), [data, resetStoryArgs])];
	}

	function useGlobals() {
		let _useContext3 = Object(react.useContext)(ManagerContext); return [_useContext3.state.globals, _useContext3.api.updateGlobals];
	}

	function useArgTypes() {
		return useParameter('argTypes', {});
	}

	function useGlobalTypes() {
		return useParameter('globalTypes', {});
	}
}, 119(module, __webpack_exports__, __webpack_require__) {
	'use strict'; __webpack_require__.d(__webpack_exports__, 'a', (() => addons)); __webpack_require__(15), __webpack_require__(38), __webpack_require__(67), __webpack_require__(41), __webpack_require__(5); let global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8); let global__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(global__WEBPACK_IMPORTED_MODULE_5__); let _storybook_client_logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25); let _types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(429); let AddonStore = function AddonStore() {
		let _this = this; !(function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError('Cannot call a class as a function');
			}
		})(this, AddonStore), this.loaders = {}, this.elements = {}, this.config = {}, this.channel = void 0, this.promise = void 0, this.resolve = void 0, this.getChannel = function () {
			if (!_this.channel) {
				throw new Error('Accessing non-existent addons channel, see https://storybook.js.org/basics/faq/#why-is-there-no-addons-channel');
			}

			return _this.channel;
		}, this.ready = function () {
			return _this.promise;
		}, this.hasChannel = function () {
			return Boolean(_this.channel);
		}, this.setChannel = function (channel) {
			_this.channel = channel, _this.resolve();
		}, this.getElements = function (type) {
			return _this.elements[type] || (_this.elements[type] = {}), _this.elements[type];
		}, this.addPanel = function (name, options) {
			_this.add(name, {type: _types__WEBPACK_IMPORTED_MODULE_7__.a.PANEL, ...options});
		}, this.add = function (name, addon) {
			let {type} = addon; _this.getElements(type)[name] = {id: name, ...addon};
		}, this.setConfig = function (value) {
			Object.assign(_this.config, value);
		}, this.getConfig = function () {
			return _this.config;
		}, this.register = function (name, registerCallback) {
			_this.loaders[name] && _storybook_client_logger__WEBPACK_IMPORTED_MODULE_6__.a.warn(''.concat(name, ' was loaded twice, this could have bad side-effects')), _this.loaders[name] = registerCallback;
		}, this.loadAddons = function (api) {
			Object.values(_this.loaders).forEach((value => value(api)));
		}, this.promise = new Promise((res => {
			_this.resolve = function () {
				return res(_this.getChannel());
			};
		}));
	};

	let KEY = '__STORYBOOK_ADDONS'; var addons = (function getAddonsStore() {
		return global__WEBPACK_IMPORTED_MODULE_5___default.a[KEY] || (global__WEBPACK_IMPORTED_MODULE_5___default.a[KEY] = new AddonStore()), global__WEBPACK_IMPORTED_MODULE_5___default.a[KEY];
	})();
}, 136(module, __webpack_exports__, __webpack_require__) {
	'use strict'; let _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19); let theme = {base: 'light', colorPrimary: '#FF4785', colorSecondary: '#1EA7FD', appBg: _base__WEBPACK_IMPORTED_MODULE_0__.a.app, appContentBg: _base__WEBPACK_IMPORTED_MODULE_0__.b.lightest, appBorderColor: _base__WEBPACK_IMPORTED_MODULE_0__.b.border, appBorderRadius: 4, fontBase: _base__WEBPACK_IMPORTED_MODULE_0__.c.fonts.base, fontCode: _base__WEBPACK_IMPORTED_MODULE_0__.c.fonts.mono, textColor: _base__WEBPACK_IMPORTED_MODULE_0__.b.darkest, textInverseColor: _base__WEBPACK_IMPORTED_MODULE_0__.b.lightest, textMutedColor: _base__WEBPACK_IMPORTED_MODULE_0__.b.dark, barTextColor: _base__WEBPACK_IMPORTED_MODULE_0__.b.mediumdark, barSelectedColor: _base__WEBPACK_IMPORTED_MODULE_0__.b.secondary, barBg: _base__WEBPACK_IMPORTED_MODULE_0__.b.lightest, inputBg: _base__WEBPACK_IMPORTED_MODULE_0__.b.lightest, inputBorder: _base__WEBPACK_IMPORTED_MODULE_0__.b.border, inputTextColor: _base__WEBPACK_IMPORTED_MODULE_0__.b.darkest, inputBorderRadius: 4}; __webpack_exports__.a = theme;
}, 162(module, __webpack_exports__, __webpack_require__) {
	'use strict'; __webpack_require__.d(__webpack_exports__, 'a', (() => eventToShortcut)), __webpack_require__.d(__webpack_exports__, 'b', (() => shortcutMatchesShortcut)), __webpack_require__.d(__webpack_exports__, 'c', (() => shortcutToHumanString)); __webpack_require__(40), __webpack_require__(26), __webpack_require__(52), __webpack_require__(62), __webpack_require__(58), __webpack_require__(22); let global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8); let {navigator} = __webpack_require__.n(global__WEBPACK_IMPORTED_MODULE_6__).a; let isMacLike = function isMacLike() {
		return !(!navigator || !navigator.platform) && Boolean(navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i));
	};

	var eventToShortcut = function eventToShortcut(e) {
		if (['Meta', 'Alt', 'Control', 'Shift'].includes(e.key)) {
			return null;
		}

		let keys = []; return e.altKey && keys.push('alt'), e.ctrlKey && keys.push('control'), e.metaKey && keys.push('meta'), e.shiftKey && keys.push('shift'), e.key && e.key.length === 1 && e.key !== ' ' && keys.push(e.key.toUpperCase()), e.key === ' ' && keys.push('space'), e.key === 'Escape' && keys.push('escape'), e.key === 'ArrowRight' && keys.push('ArrowRight'), e.key === 'ArrowDown' && keys.push('ArrowDown'), e.key === 'ArrowUp' && keys.push('ArrowUp'), e.key === 'ArrowLeft' && keys.push('ArrowLeft'), keys.length > 0 ? keys : null;
	};

	var shortcutMatchesShortcut = function shortcutMatchesShortcut(inputShortcut, shortcut) {
		return !(!inputShortcut || !shortcut) && (inputShortcut.join('') === 'shift/' && inputShortcut.shift(), inputShortcut.length === shortcut.length && !inputShortcut.find(((key, i) => key !== shortcut[i])));
	};

	let keyToSymbol = function keyToSymbol(key) {
		return key === 'alt' ? (function optionOrAltSymbol() {
			return isMacLike() ? '⌥' : 'alt';
		})() : key === 'control' ? '⌃' : key === 'meta' ? '⌘' : key === 'shift' ? '⇧​' : key === 'Enter' || key === 'Backspace' || key === 'Esc' || key === 'escape' ? '' : key === ' ' ? 'SPACE' : key === 'ArrowUp' ? '↑' : key === 'ArrowDown' ? '↓' : key === 'ArrowLeft' ? '←' : key === 'ArrowRight' ? '→' : key.toUpperCase();
	};

	var shortcutToHumanString = function shortcutToHumanString(shortcut) {
		return shortcut.map(keyToSymbol).join(' ');
	};
}, 164(module, __webpack_exports__, __webpack_require__) {
	'use strict'; __webpack_require__.d(__webpack_exports__, 'a', (() => convert_convert)); __webpack_require__(15), __webpack_require__(23), __webpack_require__(4); let _templateObject; let _templateObject2; let _templateObject3; let _templateObject4; let polished_esm = __webpack_require__(3); let esm_base = __webpack_require__(19); let core_browser_esm = (__webpack_require__(16), __webpack_require__(50), __webpack_require__(56)); function _taggedTemplateLiteral(strings, raw) {
		return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, {raw: {value: Object.freeze(raw)}}));
	}

	let easing = {rubber: 'cubic-bezier(0.175, 0.885, 0.335, 1.05)'}; let rotate360 = Object(core_browser_esm.d)(_templateObject || (_templateObject = _taggedTemplateLiteral(['\n\tfrom {\n\t\ttransform: rotate(0deg);\n\t}\n\tto {\n\t\ttransform: rotate(360deg);\n\t}\n']))); let glow = Object(core_browser_esm.d)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(['\n  0%, 100% { opacity: 1; }\n  50% { opacity: .4; }\n']))); let animation = {rotate360, glow, float: Object(core_browser_esm.d)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(['\n  0% { transform: translateY(1px); }\n  25% { transform: translateY(0px); }\n  50% { transform: translateY(-3px); }\n  100% { transform: translateY(1px); }\n']))), jiggle: Object(core_browser_esm.d)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(['\n  0%, 100% { transform:translate3d(0,0,0); }\n  12.5%, 62.5% { transform:translate3d(-4px,0,0); }\n  37.5%, 87.5% {  transform: translate3d(4px,0,0);  }\n']))), inlineGlow: Object(core_browser_esm.c)('animation:', glow, ' 1.5s ease-in-out infinite;color:transparent;cursor:progress;;label:inlineGlow;'), hoverable: {name: '1o7rzh8-hoverable', styles: 'transition:all 150ms ease-out;transform:translate3d(0,0,0);&:hover{transform:translate3d(0,-2px,0);}&:active{transform:translate3d(0,0,0);};label:hoverable;'}}; let utils = (__webpack_require__(42), __webpack_require__(43), __webpack_require__(9), __webpack_require__(5), __webpack_require__(13), __webpack_require__(6), __webpack_require__(7), __webpack_require__(10), __webpack_require__(14), __webpack_require__(17), __webpack_require__(100)); function _slicedToArray(arr, i) {
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

	let chromeDark = {BASE_FONT_FAMILY: 'Menlo, monospace', BASE_FONT_SIZE: '11px', BASE_LINE_HEIGHT: 1.2, BASE_BACKGROUND_COLOR: 'rgb(36, 36, 36)', BASE_COLOR: 'rgb(213, 213, 213)', OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10, OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5, OBJECT_NAME_COLOR: 'rgb(227, 110, 236)', OBJECT_VALUE_NULL_COLOR: 'rgb(127, 127, 127)', OBJECT_VALUE_UNDEFINED_COLOR: 'rgb(127, 127, 127)', OBJECT_VALUE_REGEXP_COLOR: 'rgb(233, 63, 59)', OBJECT_VALUE_STRING_COLOR: 'rgb(233, 63, 59)', OBJECT_VALUE_SYMBOL_COLOR: 'rgb(233, 63, 59)', OBJECT_VALUE_NUMBER_COLOR: 'hsl(252, 100%, 75%)', OBJECT_VALUE_BOOLEAN_COLOR: 'hsl(252, 100%, 75%)', OBJECT_VALUE_FUNCTION_PREFIX_COLOR: 'rgb(85, 106, 242)', HTML_TAG_COLOR: 'rgb(93, 176, 215)', HTML_TAGNAME_COLOR: 'rgb(93, 176, 215)', HTML_TAGNAME_TEXT_TRANSFORM: 'lowercase', HTML_ATTRIBUTE_NAME_COLOR: 'rgb(155, 187, 220)', HTML_ATTRIBUTE_VALUE_COLOR: 'rgb(242, 151, 102)', HTML_COMMENT_COLOR: 'rgb(137, 137, 137)', HTML_DOCTYPE_COLOR: 'rgb(192, 192, 192)', ARROW_COLOR: 'rgb(145, 145, 145)', ARROW_MARGIN_RIGHT: 3, ARROW_FONT_SIZE: 12, ARROW_ANIMATION_DURATION: '0', TREENODE_FONT_FAMILY: 'Menlo, monospace', TREENODE_FONT_SIZE: '11px', TREENODE_LINE_HEIGHT: 1.2, TREENODE_PADDING_LEFT: 12, TABLE_BORDER_COLOR: 'rgb(85, 85, 85)', TABLE_TH_BACKGROUND_COLOR: 'rgb(44, 44, 44)', TABLE_TH_HOVER_COLOR: 'rgb(48, 48, 48)', TABLE_SORT_ICON_COLOR: 'black', TABLE_DATA_BACKGROUND_IMAGE: 'linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 50%, rgba(51, 139, 255, 0.0980392) 50%, rgba(51, 139, 255, 0.0980392))', TABLE_DATA_BACKGROUND_SIZE: '128px 32px'}; let chromeLight = {BASE_FONT_FAMILY: 'Menlo, monospace', BASE_FONT_SIZE: '11px', BASE_LINE_HEIGHT: 1.2, BASE_BACKGROUND_COLOR: 'white', BASE_COLOR: 'black', OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10, OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5, OBJECT_NAME_COLOR: 'rgb(136, 19, 145)', OBJECT_VALUE_NULL_COLOR: 'rgb(128, 128, 128)', OBJECT_VALUE_UNDEFINED_COLOR: 'rgb(128, 128, 128)', OBJECT_VALUE_REGEXP_COLOR: 'rgb(196, 26, 22)', OBJECT_VALUE_STRING_COLOR: 'rgb(196, 26, 22)', OBJECT_VALUE_SYMBOL_COLOR: 'rgb(196, 26, 22)', OBJECT_VALUE_NUMBER_COLOR: 'rgb(28, 0, 207)', OBJECT_VALUE_BOOLEAN_COLOR: 'rgb(28, 0, 207)', OBJECT_VALUE_FUNCTION_PREFIX_COLOR: 'rgb(13, 34, 170)', HTML_TAG_COLOR: 'rgb(168, 148, 166)', HTML_TAGNAME_COLOR: 'rgb(136, 18, 128)', HTML_TAGNAME_TEXT_TRANSFORM: 'lowercase', HTML_ATTRIBUTE_NAME_COLOR: 'rgb(153, 69, 0)', HTML_ATTRIBUTE_VALUE_COLOR: 'rgb(26, 26, 166)', HTML_COMMENT_COLOR: 'rgb(35, 110, 37)', HTML_DOCTYPE_COLOR: 'rgb(192, 192, 192)', ARROW_COLOR: '#6e6e6e', ARROW_MARGIN_RIGHT: 3, ARROW_FONT_SIZE: 12, ARROW_ANIMATION_DURATION: '0', TREENODE_FONT_FAMILY: 'Menlo, monospace', TREENODE_FONT_SIZE: '11px', TREENODE_LINE_HEIGHT: 1.2, TREENODE_PADDING_LEFT: 12, TABLE_BORDER_COLOR: '#aaa', TABLE_TH_BACKGROUND_COLOR: '#eee', TABLE_TH_HOVER_COLOR: 'hsla(0, 0%, 90%, 1)', TABLE_SORT_ICON_COLOR: '#6e6e6e', TABLE_DATA_BACKGROUND_IMAGE: 'linear-gradient(to bottom, white, white 50%, rgb(234, 243, 255) 50%, rgb(234, 243, 255))', TABLE_DATA_BACKGROUND_SIZE: '128px 32px'}; let syntax_convertColors = function convertColors(colors) {
		return Object.entries(colors).reduce(((acc, _ref) => {
			let _ref2 = _slicedToArray(_ref, 2); let k = _ref2[0]; let v = _ref2[1]; return {...acc, ...(function _defineProperty(obj, key, value) {
				return key in obj ? Object.defineProperty(obj, key, {value, enumerable: !0, configurable: !0, writable: !0}) : obj[key] = value, obj;
			})({}, k, Object(utils.d)(v))};
		}), {});
	};

	let create = function create(_ref3) {
		let {colors} = _ref3; let {mono} = _ref3; let
			colorsObjs = syntax_convertColors(colors); return {token: {fontFamily: mono, WebkitFontSmoothing: 'antialiased', '&.tag': colorsObjs.red3, '&.comment': {...colorsObjs.green1, fontStyle: 'italic'}, '&.prolog': {...colorsObjs.green1, fontStyle: 'italic'}, '&.doctype': {...colorsObjs.green1, fontStyle: 'italic'}, '&.cdata': {...colorsObjs.green1, fontStyle: 'italic'}, '&.string': colorsObjs.red1, '&.url': colorsObjs.cyan1, '&.symbol': colorsObjs.cyan1, '&.number': colorsObjs.cyan1, '&.boolean': colorsObjs.cyan1, '&.variable': colorsObjs.cyan1, '&.constant': colorsObjs.cyan1, '&.inserted': colorsObjs.cyan1, '&.atrule': colorsObjs.blue1, '&.keyword': colorsObjs.blue1, '&.attr-value': colorsObjs.blue1, '&.punctuation': colorsObjs.gray1, '&.operator': colorsObjs.gray1, '&.function': colorsObjs.gray1, '&.deleted': colorsObjs.red2, '&.important': {fontWeight: 'bold'}, '&.bold': {fontWeight: 'bold'}, '&.italic': {fontStyle: 'italic'}, '&.class-name': colorsObjs.cyan2, '&.selector': colorsObjs.red3, '&.attr-name': colorsObjs.red4, '&.property': colorsObjs.red4, '&.regex': colorsObjs.red4, '&.entity': colorsObjs.red4, '&.directive.tag .tag': {background: '#ffff00', ...colorsObjs.gray1}}, 'language-json .token.boolean': colorsObjs.blue1, 'language-json .token.number': colorsObjs.blue1, 'language-json .token.property': colorsObjs.cyan2, namespace: {opacity: 0.7}};
	};

	let esm_create = __webpack_require__(207); function _objectWithoutProperties(source, excluded) {
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

	let lightSyntaxColors = {green1: '#008000', red1: '#A31515', red2: '#9a050f', red3: '#800000', red4: '#ff0000', gray1: '#393A34', cyan1: '#36acaa', cyan2: '#2B91AF', blue1: '#0000ff', blue2: '#00009f'}; let darkSyntaxColors = {green1: '#7C7C7C', red1: '#92C379', red2: '#9a050f', red3: '#A8FF60', red4: '#96CBFE', gray1: '#EDEDED', cyan1: '#C6C5FE', cyan2: '#FFFFB6', blue1: '#B474DD', blue2: '#00009f'}; let convert_createColors = function createColors(vars) {
		return {primary: vars.colorPrimary, secondary: vars.colorSecondary, tertiary: esm_base.b.tertiary, ancillary: esm_base.b.ancillary, orange: esm_base.b.orange, gold: esm_base.b.gold, green: esm_base.b.green, seafoam: esm_base.b.seafoam, purple: esm_base.b.purple, ultraviolet: esm_base.b.ultraviolet, lightest: esm_base.b.lightest, lighter: esm_base.b.lighter, light: esm_base.b.light, mediumlight: esm_base.b.mediumlight, medium: esm_base.b.medium, mediumdark: esm_base.b.mediumdark, dark: esm_base.b.dark, darker: esm_base.b.darker, darkest: esm_base.b.darkest, border: esm_base.b.border, positive: esm_base.b.positive, negative: esm_base.b.negative, warning: esm_base.b.warning, critical: esm_base.b.critical, defaultText: vars.textColor || esm_base.b.darkest, inverseText: vars.textInverseColor || esm_base.b.lightest};
	};

	var convert_convert = function convert() {
		let inherit = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : esm_create.a[Object(utils.b)()]; let {base} = inherit; let colorSecondary = (inherit.colorPrimary, inherit.colorSecondary); let {appBg} = inherit; let {appContentBg} = inherit; let {appBorderColor} = inherit; let {appBorderRadius} = inherit; let {fontBase} = inherit; let {fontCode} = inherit; let {textColor} = inherit; let barTextColor = (inherit.textInverseColor, inherit.barTextColor); let {barSelectedColor} = inherit; let {barBg} = inherit; let {inputBg} = inherit; let {inputBorder} = inherit; let {inputTextColor} = inherit; let {inputBorderRadius} = inherit; let {brandTitle} = inherit; let {brandUrl} = inherit; let {brandImage} = inherit; let {gridCellSize} = inherit; let rest = _objectWithoutProperties(inherit, ['base', 'colorPrimary', 'colorSecondary', 'appBg', 'appContentBg', 'appBorderColor', 'appBorderRadius', 'fontBase', 'fontCode', 'textColor', 'textInverseColor', 'barTextColor', 'barSelectedColor', 'barBg', 'inputBg', 'inputBorder', 'inputTextColor', 'inputBorderRadius', 'brandTitle', 'brandUrl', 'brandImage', 'gridCellSize']); return {...rest || {}, base, color: convert_createColors(inherit), background: {app: appBg, bar: barBg, content: appContentBg, gridCellSize: gridCellSize || esm_base.a.gridCellSize, hoverable: base === 'light' ? 'rgba(0,0,0,.05)' : 'rgba(250,250,252,.1)', positive: esm_base.a.positive, negative: esm_base.a.negative, warning: esm_base.a.warning, critical: esm_base.a.critical}, typography: {fonts: {base: fontBase, mono: fontCode}, weight: esm_base.c.weight, size: esm_base.c.size}, animation, easing, input: {border: inputBorder, background: inputBg, color: inputTextColor, borderRadius: inputBorderRadius}, layoutMargin: 10, appBorderColor, appBorderRadius, barTextColor, barSelectedColor: barSelectedColor || colorSecondary, barBg, brand: {title: brandTitle, url: brandUrl, image: brandImage || (brandTitle ? null : void 0)}, code: create({colors: base === 'light' ? lightSyntaxColors : darkSyntaxColors, mono: fontCode}), addonActionsTheme: {...(base === 'light' ? chromeLight : chromeDark), BASE_FONT_FAMILY: fontCode, BASE_FONT_SIZE: esm_base.c.size.s2 - 1, BASE_LINE_HEIGHT: '18px', BASE_BACKGROUND_COLOR: 'transparent', BASE_COLOR: textColor, ARROW_COLOR: Object(polished_esm.c)(0.2, appBorderColor), ARROW_MARGIN_RIGHT: 4, ARROW_FONT_SIZE: 8, TREENODE_FONT_FAMILY: fontCode, TREENODE_FONT_SIZE: esm_base.c.size.s2 - 1, TREENODE_LINE_HEIGHT: '18px', TREENODE_PADDING_LEFT: 12}};
	};
}, 166(module, __webpack_exports__, __webpack_require__) {
	'use strict'; __webpack_require__.d(__webpack_exports__, 'a', (() => Link)); __webpack_require__(23), __webpack_require__(4), __webpack_require__(15); let react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0); let react__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__); let _storybook_theming__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1); let polished__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3); let _icon_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(60); function _extends() {
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

	let LinkInner = _storybook_theming__WEBPACK_IMPORTED_MODULE_4__.styled.span((_ref => _ref.withArrow ? {'> svg:last-of-type': {height: '0.7em', width: '0.7em', marginRight: 0, marginLeft: '0.25em', bottom: 'auto', verticalAlign: 'inherit'}} : {}), (_ref2 => _ref2.containsIcon ? {svg: {height: '1em', width: '1em', verticalAlign: 'middle', position: 'relative', bottom: 0, marginRight: 0}} : {})); let A = _storybook_theming__WEBPACK_IMPORTED_MODULE_4__.styled.a((_ref3 => {
		let {theme} = _ref3; return {display: 'inline-block', transition: 'all 150ms ease-out', textDecoration: 'none', color: theme.color.secondary, '&:hover, &:focus': {cursor: 'pointer', color: Object(polished__WEBPACK_IMPORTED_MODULE_5__.a)(0.07, theme.color.secondary), 'svg path': {fill: Object(polished__WEBPACK_IMPORTED_MODULE_5__.a)(0.07, theme.color.secondary)}}, '&:active': {color: Object(polished__WEBPACK_IMPORTED_MODULE_5__.a)(0.1, theme.color.secondary), 'svg path': {fill: Object(polished__WEBPACK_IMPORTED_MODULE_5__.a)(0.1, theme.color.secondary)}}, svg: {display: 'inline-block', height: '1em', width: '1em', verticalAlign: 'text-top', position: 'relative', bottom: '-0.125em', marginRight: '0.4em', '& path': {fill: theme.color.secondary}}};
	}), (_ref4 => {
		let colors; let {theme} = _ref4; let {secondary} = _ref4; let {tertiary} = _ref4; return secondary && (colors = [theme.color.mediumdark, theme.color.dark, theme.color.darker]), tertiary && (colors = [theme.color.dark, theme.color.darkest, theme.color.mediumdark]), colors ? {color: colors[0], 'svg path': {fill: colors[0]}, '&:hover': {color: colors[1], 'svg path': {fill: colors[1]}}, '&:active': {color: colors[2], 'svg path': {fill: colors[2]}}} : {};
	}), (_ref5 => _ref5.nochrome ? {color: 'inherit', '&:hover, &:active': {color: 'inherit', textDecoration: 'underline'}} : {}), (_ref6 => {
		let {theme} = _ref6; return _ref6.inverse ? {color: theme.color.lightest, 'svg path': {fill: theme.color.lightest}, '&:hover': {color: theme.color.lighter, 'svg path': {fill: theme.color.lighter}}, '&:active': {color: theme.color.light, 'svg path': {fill: theme.color.light}}} : {};
	}), (_ref7 => _ref7.isButton ? {border: 0, borderRadius: 0, background: 'none', padding: 0, fontSize: 'inherit'} : {})); var Link = function Link(_ref8) {
		let {cancel} = _ref8; let {children} = _ref8; let {onClick} = _ref8; let {withArrow} = _ref8; let {containsIcon} = _ref8; let {className} = _ref8; let
			rest = _objectWithoutProperties(_ref8, ['cancel', 'children', 'onClick', 'withArrow', 'containsIcon', 'className']); return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(A, {...rest, onClick: cancel ? function (e) {
			return (function cancelled(e, cb) {
				(function isPlainLeftClick(e) {
					return !(e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey);
				})(e) && (e.preventDefault(), cb(e));
			})(e, onClick);
		} : onClick, className}, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(LinkInner, {withArrow, containsIcon}, children, withArrow && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_icon_icon__WEBPACK_IMPORTED_MODULE_6__.a, {icon: 'arrowright'})));
	};

	Link.displayName = 'Link', Link.defaultProps = {cancel: !0, className: void 0, style: void 0, onClick: function onClick() {}, withArrow: !1, containsIcon: !1};
}, 19(module, __webpack_exports__, __webpack_require__) {
	'use strict'; __webpack_require__.d(__webpack_exports__, 'b', (() => color)), __webpack_require__.d(__webpack_exports__, 'a', (() => background)), __webpack_require__.d(__webpack_exports__, 'c', (() => typography)); __webpack_require__(62); var color = {primary: '#FF4785', secondary: '#1EA7FD', tertiary: '#FAFBFC', ancillary: '#22a699', orange: '#FC521F', gold: '#FFAE00', green: '#66BF3C', seafoam: '#37D5D3', purple: '#6F2CAC', ultraviolet: '#2A0481', lightest: '#FFFFFF', lighter: '#F8F8F8', light: '#F3F3F3', mediumlight: '#EEEEEE', medium: '#DDDDDD', mediumdark: '#999999', dark: '#666666', darker: '#444444', darkest: '#333333', border: 'rgba(0,0,0,.1)', positive: '#66BF3C', negative: '#FF4400', warning: '#E69D00', critical: '#FFFFFF', defaultText: '#333333', inverseText: '#FFFFFF'}; var background = {app: '#F6F9FC', bar: '#FFFFFF', content: color.lightest, gridCellSize: 10, hoverable: 'rgba(0,0,0,.05)', positive: '#E1FFD4', negative: '#FEDED2', warning: '#FFF5CF', critical: '#FF4400'}; var typography = {fonts: {base: ['"Nunito Sans"', '-apple-system', '".SFNSText-Regular"', '"San Francisco"', 'BlinkMacSystemFont', '"Segoe UI"', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'].join(', '), mono: ['"Operator Mono"', '"Fira Code Retina"', '"Fira Code"', '"FiraCode-Retina"', '"Andale Mono"', '"Lucida Console"', 'Consolas', 'Monaco', 'monospace'].join(', ')}, weight: {regular: 400, bold: 700, black: 900}, size: {s1: 12, s2: 14, s3: 16, m1: 20, m2: 24, m3: 28, l1: 32, l2: 40, l3: 48, code: 90}};
}, 20(module, __webpack_exports__, __webpack_require__) {
	'use strict'; let events; __webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, 'CHANNEL_CREATED', (() => CHANNEL_CREATED)), __webpack_require__.d(__webpack_exports__, 'STORY_SPECIFIED', (() => STORY_SPECIFIED)), __webpack_require__.d(__webpack_exports__, 'SET_STORIES', (() => SET_STORIES)), __webpack_require__.d(__webpack_exports__, 'SET_CURRENT_STORY', (() => SET_CURRENT_STORY)), __webpack_require__.d(__webpack_exports__, 'CURRENT_STORY_WAS_SET', (() => CURRENT_STORY_WAS_SET)), __webpack_require__.d(__webpack_exports__, 'FORCE_RE_RENDER', (() => FORCE_RE_RENDER)), __webpack_require__.d(__webpack_exports__, 'STORY_CHANGED', (() => STORY_CHANGED)), __webpack_require__.d(__webpack_exports__, 'STORY_UNCHANGED', (() => STORY_UNCHANGED)), __webpack_require__.d(__webpack_exports__, 'STORY_RENDERED', (() => STORY_RENDERED)), __webpack_require__.d(__webpack_exports__, 'STORY_MISSING', (() => STORY_MISSING)), __webpack_require__.d(__webpack_exports__, 'STORY_ERRORED', (() => STORY_ERRORED)), __webpack_require__.d(__webpack_exports__, 'STORY_THREW_EXCEPTION', (() => STORY_THREW_EXCEPTION)), __webpack_require__.d(__webpack_exports__, 'UPDATE_STORY_ARGS', (() => UPDATE_STORY_ARGS)), __webpack_require__.d(__webpack_exports__, 'STORY_ARGS_UPDATED', (() => STORY_ARGS_UPDATED)), __webpack_require__.d(__webpack_exports__, 'RESET_STORY_ARGS', (() => RESET_STORY_ARGS)), __webpack_require__.d(__webpack_exports__, 'UPDATE_GLOBALS', (() => UPDATE_GLOBALS)), __webpack_require__.d(__webpack_exports__, 'GLOBALS_UPDATED', (() => GLOBALS_UPDATED)), __webpack_require__.d(__webpack_exports__, 'REGISTER_SUBSCRIPTION', (() => REGISTER_SUBSCRIPTION)), __webpack_require__.d(__webpack_exports__, 'PREVIEW_KEYDOWN', (() => PREVIEW_KEYDOWN)), __webpack_require__.d(__webpack_exports__, 'SELECT_STORY', (() => SELECT_STORY)), __webpack_require__.d(__webpack_exports__, 'STORIES_COLLAPSE_ALL', (() => STORIES_COLLAPSE_ALL)), __webpack_require__.d(__webpack_exports__, 'STORIES_EXPAND_ALL', (() => STORIES_EXPAND_ALL)), __webpack_require__.d(__webpack_exports__, 'DOCS_RENDERED', (() => DOCS_RENDERED)), __webpack_require__.d(__webpack_exports__, 'SHARED_STATE_CHANGED', (() => SHARED_STATE_CHANGED)), __webpack_require__.d(__webpack_exports__, 'SHARED_STATE_SET', (() => SHARED_STATE_SET)), __webpack_require__.d(__webpack_exports__, 'NAVIGATE_URL', (() => NAVIGATE_URL)), (function (events) {
		events.CHANNEL_CREATED = 'channelCreated', events.STORY_SPECIFIED = 'storySpecified', events.SET_STORIES = 'setStories', events.SET_CURRENT_STORY = 'setCurrentStory', events.CURRENT_STORY_WAS_SET = 'currentStoryWasSet', events.FORCE_RE_RENDER = 'forceReRender', events.STORY_CHANGED = 'storyChanged', events.STORY_UNCHANGED = 'storyUnchanged', events.STORY_RENDERED = 'storyRendered', events.STORY_MISSING = 'storyMissing', events.STORY_ERRORED = 'storyErrored', events.STORY_THREW_EXCEPTION = 'storyThrewException', events.UPDATE_STORY_ARGS = 'updateStoryArgs', events.STORY_ARGS_UPDATED = 'storyArgsUpdated', events.RESET_STORY_ARGS = 'resetStoryArgs', events.UPDATE_GLOBALS = 'updateGlobals', events.GLOBALS_UPDATED = 'globalsUpdated', events.REGISTER_SUBSCRIPTION = 'registerSubscription', events.PREVIEW_KEYDOWN = 'previewKeydown', events.SELECT_STORY = 'selectStory', events.STORIES_COLLAPSE_ALL = 'storiesCollapseAll', events.STORIES_EXPAND_ALL = 'storiesExpandAll', events.DOCS_RENDERED = 'docsRendered', events.SHARED_STATE_CHANGED = 'sharedStateChanged', events.SHARED_STATE_SET = 'sharedStateSet', events.NAVIGATE_URL = 'navigateUrl';
	})(events || (events = {})), __webpack_exports__.default = events; var {CHANNEL_CREATED} = events; var {STORY_SPECIFIED} = events; var {SET_STORIES} = events; var {SET_CURRENT_STORY} = events; var {CURRENT_STORY_WAS_SET} = events; var {FORCE_RE_RENDER} = events; var {STORY_CHANGED} = events; var {STORY_UNCHANGED} = events; var {STORY_RENDERED} = events; var {STORY_MISSING} = events; var {STORY_ERRORED} = events; var {STORY_THREW_EXCEPTION} = events; var {UPDATE_STORY_ARGS} = events; var {STORY_ARGS_UPDATED} = events; var {RESET_STORY_ARGS} = events; var {UPDATE_GLOBALS} = events; var {GLOBALS_UPDATED} = events; var {REGISTER_SUBSCRIPTION} = events; var {PREVIEW_KEYDOWN} = events; var {SELECT_STORY} = events; var {STORIES_COLLAPSE_ALL} = events; var {STORIES_EXPAND_ALL} = events; var {DOCS_RENDERED} = events; var {SHARED_STATE_CHANGED} = events; var {SHARED_STATE_SET} = events; var
		{NAVIGATE_URL} = events;
}, 204(module, __webpack_exports__, __webpack_require__) {
	'use strict'; (function (setImmediate) {
		__webpack_require__(50), __webpack_require__(16), __webpack_require__(5), __webpack_require__(88), __webpack_require__(675), __webpack_require__(23), __webpack_require__(31), __webpack_require__(38); let _templateObject; let util_deprecate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(61); let util_deprecate__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(util_deprecate__WEBPACK_IMPORTED_MODULE_8__); let ts_dedent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(33); let ts_dedent__WEBPACK_IMPORTED_MODULE_9___default = __webpack_require__.n(ts_dedent__WEBPACK_IMPORTED_MODULE_9__); function _taggedTemplateLiteral(strings, raw) {
			return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, {raw: {value: Object.freeze(raw)}}));
		}

		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError('Cannot call a class as a function');
			}
		}

		function _defineProperties(target, props) {
			for (let i = 0; i < props.length; i++) {
				let descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 'value' in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
			}
		}

		let generateRandomId = function generateRandomId() {
			return Math.random().toString(16).slice(2);
		};

		let Channel = (function () {
			function Channel() {
				let _this = this; let _ref = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; let {transport} = _ref; let _ref$async = _ref.async; let async = void 0 !== _ref$async && _ref$async; _classCallCheck(this, Channel), this.isAsync = void 0, this.sender = generateRandomId(), this.events = {}, this.data = {}, this.transport = void 0, this.addPeerListener = util_deprecate__WEBPACK_IMPORTED_MODULE_8___default()(((eventName, listener) => {
					_this.addListener(eventName, listener);
				}), ts_dedent__WEBPACK_IMPORTED_MODULE_9___default()(_templateObject || (_templateObject = _taggedTemplateLiteral(['\n      channel.addPeerListener is deprecated\n    '])))), this.isAsync = async, transport && (this.transport = transport, this.transport.setHandler((event => _this.handleEvent(event))));
			}

			return (function _createClass(Constructor, protoProps, staticProps) {
				return protoProps && _defineProperties(Constructor.prototype, protoProps), staticProps && _defineProperties(Constructor, staticProps), Constructor;
			})(Channel, [{key: 'hasTransport', get: function get() {
				return Boolean(this.transport);
			}}, {key: 'addListener', value: function addListener(eventName, listener) {
				this.events[eventName] = this.events[eventName] || [], this.events[eventName].push(listener);
			}}, {key: 'emit', value: function emit(eventName) {
				for (var _this2 = this, _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
					args[_key - 1] = arguments[_key];
				}

				let event = {type: eventName, args, from: this.sender}; let options = {}; args.length >= 1 && args[0] && args[0].options && (options = args[0].options); let handler = function handler() {
					_this2.transport && _this2.transport.send(event, options), _this2.handleEvent(event);
				};

				this.isAsync ? setImmediate(handler) : handler();
			}}, {key: 'last', value: function last(eventName) {
				return this.data[eventName];
			}}, {key: 'eventNames', value: function eventNames() {
				return Object.keys(this.events);
			}}, {key: 'listenerCount', value: function listenerCount(eventName) {
				let listeners = this.listeners(eventName); return listeners ? listeners.length : 0;
			}}, {key: 'listeners', value: function listeners(eventName) {
				let listeners = this.events[eventName]; return listeners || void 0;
			}}, {key: 'once', value: function once(eventName, listener) {
				let onceListener = this.onceListener(eventName, listener); this.addListener(eventName, onceListener);
			}}, {key: 'removeAllListeners', value: function removeAllListeners(eventName) {
				eventName ? this.events[eventName] && delete this.events[eventName] : this.events = {};
			}}, {key: 'removeListener', value: function removeListener(eventName, listener) {
				let listeners = this.listeners(eventName); listeners && (this.events[eventName] = listeners.filter((l => l !== listener)));
			}}, {key: 'on', value: function on(eventName, listener) {
				this.addListener(eventName, listener);
			}}, {key: 'off', value: function off(eventName, listener) {
				this.removeListener(eventName, listener);
			}}, {key: 'handleEvent', value: function handleEvent(event) {
				let listeners = this.listeners(event.type); listeners && listeners.length && listeners.forEach((fn => {
					fn.apply(event, event.args);
				})), this.data[event.type] = event.args;
			}}, {key: 'onceListener', value: function onceListener(eventName, listener) {
				let _this3 = this; let onceListener = function onceListener() {
					return _this3.removeListener(eventName, onceListener), listener.apply(void 0, arguments);
				};

				return onceListener;
			}}]), Channel;
		})(); __webpack_exports__.a = Channel;
	}).call(this, __webpack_require__(673).setImmediate);
}, 206(module, __webpack_exports__, __webpack_require__) {
	'use strict'; __webpack_require__.d(__webpack_exports__, 'b', (() => parse)), __webpack_require__.d(__webpack_exports__, 'a', (() => NumberControl)); __webpack_require__(842), __webpack_require__(120), __webpack_require__(14), __webpack_require__(4), __webpack_require__(9), __webpack_require__(5), __webpack_require__(13), __webpack_require__(6), __webpack_require__(7), __webpack_require__(10), __webpack_require__(16), __webpack_require__(17); let react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(0); let react__WEBPACK_IMPORTED_MODULE_12___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__); let _storybook_theming__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1); let _form__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(55); let _helpers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(39); function _slicedToArray(arr, i) {
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

	let Wrapper = _storybook_theming__WEBPACK_IMPORTED_MODULE_13__.styled.label({display: 'flex'}); var parse = function parse(value) {
		let result = parseFloat(value); return Number.isNaN(result) ? void 0 : result;
	};

	var NumberControl = function NumberControl(_ref) {
		let {name} = _ref; let {value} = _ref; let {onChange} = _ref; let {min} = _ref; let {max} = _ref; let {step} = _ref; let {onBlur} = _ref; let {onFocus} = _ref; let _useState2 = _slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_12__.useState)(typeof value === 'number' ? value : ''), 2); let inputValue = _useState2[0]; let setInputValue = _useState2[1]; let _useState4 = _slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_12__.useState)(!1), 2); let forceVisible = _useState4[0]; let setForceVisible = _useState4[1]; let _useState6 = _slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_12__.useState)(null), 2); let parseError = _useState6[0]; let setParseError = _useState6[1]; let handleChange = Object(react__WEBPACK_IMPORTED_MODULE_12__.useCallback)((event => {
			setInputValue(event.target.value); let result = parseFloat(event.target.value); Number.isNaN(result) ? setParseError(new Error('\''.concat(event.target.value, '\' is not a number'))) : (onChange(result), setParseError(null));
		}), [onChange, setParseError]); let onForceVisible = Object(react__WEBPACK_IMPORTED_MODULE_12__.useCallback)((() => {
			setInputValue('0'), onChange(0), setForceVisible(!0);
		}), [setForceVisible]); let
			htmlElRef = Object(react__WEBPACK_IMPORTED_MODULE_12__.useRef)(null); return Object(react__WEBPACK_IMPORTED_MODULE_12__.useEffect)((() => {
			forceVisible && htmlElRef.current && htmlElRef.current.select();
		}), [forceVisible]), forceVisible || void 0 !== value ? react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(Wrapper, null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_form__WEBPACK_IMPORTED_MODULE_14__.a.Input, {ref: htmlElRef, id: Object(_helpers__WEBPACK_IMPORTED_MODULE_15__.a)(name), type: 'number', onChange: handleChange, size: 'flex', placeholder: 'Edit number...', value: inputValue, valid: parseError ? 'error' : null, autoFocus: forceVisible, name, min, max, step, onFocus, onBlur})) : react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_form__WEBPACK_IMPORTED_MODULE_14__.a.Button, {onClick: onForceVisible}, 'Set number');
	};

	NumberControl.displayName = 'NumberControl';
}, 207(module, __webpack_exports__, __webpack_require__) {
	'use strict'; __webpack_require__.d(__webpack_exports__, 'a', (() => themes)); __webpack_require__(15); let light = __webpack_require__(136); let base = __webpack_require__(19); let dark = {base: 'dark', colorPrimary: '#FF4785', colorSecondary: '#1EA7FD', appBg: '#2f2f2f', appContentBg: base.b.darkest, appBorderColor: 'rgba(255,255,255,.1)', appBorderRadius: 4, fontBase: base.c.fonts.base, fontCode: base.c.fonts.mono, textColor: base.b.lightest, textInverseColor: base.b.darkest, textMutedColor: base.b.mediumdark, barTextColor: '#999999', barSelectedColor: base.b.secondary, barBg: base.b.darkest, inputBg: '#3f3f3f', inputBorder: 'rgba(0,0,0,.3)', inputTextColor: base.b.lightest, inputBorderRadius: 4}; let utils = __webpack_require__(100); var themes = {light: light.a, dark, normal: light.a}; Object(utils.b)();
}, 211(module, __webpack_exports__, __webpack_require__) {
	'use strict'; __webpack_require__.d(__webpack_exports__, 'b', (() => TabButton)), __webpack_require__.d(__webpack_exports__, 'a', (() => IconButton)); __webpack_require__(23), __webpack_require__(4), __webpack_require__(15); let react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0); let react__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__); let _storybook_theming__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1); let _storybook_theming__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(134); function _extends() {
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

	let ButtonOrLink = function ButtonOrLink(_ref) {
		let {children} = _ref; let
			restProps = _objectWithoutProperties(_ref, ['children']); return restProps.href != null ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement('a', restProps, children) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement('button', {type: 'button', ...restProps}, children);
	};

	var TabButton = Object(_storybook_theming__WEBPACK_IMPORTED_MODULE_4__.styled)(ButtonOrLink, {shouldForwardProp: _storybook_theming__WEBPACK_IMPORTED_MODULE_5__.a})({whiteSpace: 'normal', display: 'inline-flex', overflow: 'hidden', verticalAlign: 'top', justifyContent: 'center', alignItems: 'center', textAlign: 'center', textDecoration: 'none', '&:empty': {display: 'none'}}, (_ref2 => ({padding: '0 15px', transition: 'color 0.2s linear, border-bottom-color 0.2s linear', height: 40, lineHeight: '12px', cursor: 'pointer', background: 'transparent', border: '0 solid transparent', borderTop: '3px solid transparent', borderBottom: '3px solid transparent', fontWeight: 'bold', fontSize: 13, '&:focus': {outline: '0 none', borderBottomColor: _ref2.theme.color.secondary}})), (_ref3 => {
		let {active} = _ref3; let {textColor} = _ref3; let
			{theme} = _ref3; return active ? {color: textColor || theme.barSelectedColor, borderBottomColor: theme.barSelectedColor} : {color: textColor || theme.barTextColor, borderBottomColor: 'transparent'};
	})); TabButton.displayName = 'TabButton'; var IconButton = Object(_storybook_theming__WEBPACK_IMPORTED_MODULE_4__.styled)(ButtonOrLink, {shouldForwardProp: _storybook_theming__WEBPACK_IMPORTED_MODULE_5__.a})((_ref4 => ({display: 'inline-flex', justifyContent: 'center', alignItems: 'center', height: 40, background: 'none', color: 'inherit', padding: 0, cursor: 'pointer', fontWeight: 'bold', fontSize: 13, border: '0 solid transparent', borderTop: '3px solid transparent', borderBottom: '3px solid transparent', transition: 'color 0.2s linear, border-bottom-color 0.2s linear', '&:hover, &:focus': {outline: '0 none', color: _ref4.theme.color.secondary}, '& > svg': {width: 15}})), (_ref5 => {
		let {active} = _ref5; let
			{theme} = _ref5; return active ? {outline: '0 none', borderBottomColor: theme.color.secondary} : {};
	})); IconButton.displayName = 'IconButton';
}, 212(module, __webpack_exports__, __webpack_require__) {
	'use strict'; __webpack_require__.d(__webpack_exports__, 'a', (() => SyntaxHighlighter)); __webpack_require__(41), __webpack_require__(5); let react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0); let react__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__); let LazySyntaxHighlighter = react__WEBPACK_IMPORTED_MODULE_2___default.a.lazy((() => Promise.all([__webpack_require__.e(5), __webpack_require__.e(10)]).then(__webpack_require__.bind(null, 865)))); var SyntaxHighlighter = function SyntaxHighlighter(props) {
		return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Suspense, {fallback: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement('div', null)}, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(LazySyntaxHighlighter, props));
	};

	SyntaxHighlighter.displayName = 'SyntaxHighlighter';
}, 213(module, __webpack_exports__, __webpack_require__) {
	'use strict'; __webpack_require__.d(__webpack_exports__, 'c', (() => parsePath)), __webpack_require__.d(__webpack_exports__, 'a', (() => buildArgsParam)), __webpack_require__.d(__webpack_exports__, 'e', (() => queryFromString)), __webpack_require__.d(__webpack_exports__, 'd', (() => queryFromLocation)), __webpack_require__.d(__webpack_exports__, 'b', (() => getMatch)); __webpack_require__(13), __webpack_require__(6), __webpack_require__(7), __webpack_require__(10), __webpack_require__(14), __webpack_require__(17), __webpack_require__(50), __webpack_require__(40), __webpack_require__(26), __webpack_require__(15), __webpack_require__(4), __webpack_require__(9), __webpack_require__(5), __webpack_require__(42), __webpack_require__(18), __webpack_require__(393), __webpack_require__(23), __webpack_require__(43), __webpack_require__(16), __webpack_require__(79), __webpack_require__(22), __webpack_require__(62), __webpack_require__(77), __webpack_require__(152), __webpack_require__(168); let _templateObject; let _storybook_client_logger__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(25); let fast_deep_equal__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(64); let fast_deep_equal__WEBPACK_IMPORTED_MODULE_26___default = __webpack_require__.n(fast_deep_equal__WEBPACK_IMPORTED_MODULE_26__); let lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(135); let lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_27___default = __webpack_require__.n(lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_27__); let memoizerific__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(28); let memoizerific__WEBPACK_IMPORTED_MODULE_28___default = __webpack_require__.n(memoizerific__WEBPACK_IMPORTED_MODULE_28__); let qs__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(107); let qs__WEBPACK_IMPORTED_MODULE_29___default = __webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_29__); let ts_dedent__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(33); let ts_dedent__WEBPACK_IMPORTED_MODULE_30___default = __webpack_require__.n(ts_dedent__WEBPACK_IMPORTED_MODULE_30__); function _defineProperty(obj, key, value) {
		return key in obj ? Object.defineProperty(obj, key, {value, enumerable: !0, configurable: !0, writable: !0}) : obj[key] = value, obj;
	}

	function _typeof(obj) {
		return (_typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function _typeof(obj) {
			return typeof obj;
		} : function _typeof(obj) {
			return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
		})(obj);
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

	let splitPathRegex = /\/([^/]+)\/(?:(.*)_)?([^/]+)?/; var parsePath = memoizerific__WEBPACK_IMPORTED_MODULE_28___default()(1e3)((path => {
		let result = {viewMode: void 0, storyId: void 0, refId: void 0}; if (path) {
			let _ref2 = _slicedToArray(path.toLowerCase().match(splitPathRegex) || [], 4); let viewMode = _ref2[1]; let refId = _ref2[2]; let storyId = _ref2[3]; viewMode && Object.assign(result, {viewMode, storyId, refId});
		}

		return result;
	})); let DEEPLY_EQUAL = Symbol('Deeply equal'); let deepDiff = function deepDiff(value, update) {
		if (_typeof(value) !== _typeof(update)) {
			return update;
		}

		if (fast_deep_equal__WEBPACK_IMPORTED_MODULE_26___default()(value, update)) {
			return DEEPLY_EQUAL;
		}

		if (Array.isArray(value) && Array.isArray(update)) {
			let res = update.reduce(((acc, upd, index) => {
				let diff = deepDiff(value[index], upd); return diff !== DEEPLY_EQUAL && (acc[index] = diff), acc;
			}), new Array(update.length)); return update.length >= value.length ? res : res.concat(new Array(value.length - update.length).fill(void 0));
		}

		return lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_27___default()(value) && lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_27___default()(update) ? Object.keys({...value, ...update}).reduce(((acc, key) => {
			let diff = deepDiff(value == null ? void 0 : value[key], update == null ? void 0 : update[key]); return diff === DEEPLY_EQUAL ? acc : Object.assign(acc, _defineProperty({}, key, diff));
		}), {}) : update;
	};

	let VALIDATION_REGEXP = /^[a-zA-Z0-9 _-]*$/; let NUMBER_REGEXP = /^-?[0-9]+(\.[0-9]+)?$/; let HEX_REGEXP = /^#([a-f0-9]{3,4}|[a-f0-9]{6}|[a-f0-9]{8})$/i; let COLOR_REGEXP = /^(rgba?|hsla?)\(([0-9]{1,3}),\s?([0-9]{1,3})%?,\s?([0-9]{1,3})%?,?\s?([0-9](\.[0-9]{1,2})?)?\)$/i; let validateArgs = function validateArgs() {
		let key = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ''; let value = arguments.length > 1 ? arguments[1] : void 0; return key !== null && (!(key === '' || !VALIDATION_REGEXP.test(key)) && (value == null || (value instanceof Date || (typeof value === 'number' || typeof value === 'boolean' || (typeof value === 'string' ? VALIDATION_REGEXP.test(value) || NUMBER_REGEXP.test(value) || HEX_REGEXP.test(value) || COLOR_REGEXP.test(value) : Array.isArray(value) ? value.every((v => validateArgs(key, v))) : Boolean(lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_27___default()(value)) && Object.entries(value).every((_ref3 => {
			let _ref4 = _slicedToArray(_ref3, 2); let k = _ref4[0]; let v = _ref4[1]; return validateArgs(k, v);
		})))))));
	};

	let encodeSpecialValues = function encodeSpecialValues(value) {
		return void 0 === value ? '!undefined' : value === null ? '!null' : typeof value === 'string' ? HEX_REGEXP.test(value) ? '!hex('.concat(value.slice(1), ')') : COLOR_REGEXP.test(value) ? '!'.concat(value.replace(/[\s%]/g, '')) : value : Array.isArray(value) ? value.map(encodeSpecialValues) : lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_27___default()(value) ? Object.entries(value).reduce(((acc, _ref5) => {
			let _ref6 = _slicedToArray(_ref5, 2); let key = _ref6[0]; let val = _ref6[1]; return Object.assign(acc, _defineProperty({}, key, encodeSpecialValues(val)));
		}), {}) : value;
	};

	let QS_OPTIONS = {encode: !1, delimiter: ';', allowDots: !0, format: 'RFC1738', serializeDate: function serializeDate(date) {
		return '!date('.concat(date.toISOString(), ')');
	}}; var buildArgsParam = function buildArgsParam(initialArgs, args) {
		let update = deepDiff(initialArgs, args); if (!update || update === DEEPLY_EQUAL) {
			return '';
		}

		let object = Object.entries(update).reduce(((acc, _ref7) => {
			let _ref8 = _slicedToArray(_ref7, 2); let key = _ref8[0]; let value = _ref8[1]; return validateArgs(key, value) ? Object.assign(acc, _defineProperty({}, key, value)) : (_storybook_client_logger__WEBPACK_IMPORTED_MODULE_25__.b.warn(ts_dedent__WEBPACK_IMPORTED_MODULE_30___default()(_templateObject || (_templateObject = (function _taggedTemplateLiteral(strings, raw) {
				return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, {raw: {value: Object.freeze(raw)}}));
			})(['\n      Omitted potentially unsafe URL args.\n\n      More info: https://storybook.js.org/docs/react/writing-stories/args#setting-args-through-the-url\n    '])))), acc);
		}), {}); return qs__WEBPACK_IMPORTED_MODULE_29___default.a.stringify(encodeSpecialValues(object), QS_OPTIONS).replace(/ /g, '+').split(';').map((part => part.replace('=', ':'))).join(';');
	};

	var queryFromString = memoizerific__WEBPACK_IMPORTED_MODULE_28___default()(1e3)((s => qs__WEBPACK_IMPORTED_MODULE_29___default.a.parse(s, {ignoreQueryPrefix: !0}))); var queryFromLocation = function queryFromLocation(location) {
		return queryFromString(location.search);
	};

	var getMatch = memoizerific__WEBPACK_IMPORTED_MODULE_28___default()(1e3)((function (current, target) {
		let startsWith = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]; let startsWithTarget = current && startsWith && current.startsWith(target); let currentIsTarget = typeof target === 'string' && current === target; let matchTarget = current && target && current.match(target); return startsWithTarget || currentIsTarget || matchTarget ? {path: current} : null;
	}));
}, 25(module, __webpack_exports__, __webpack_require__) {
	'use strict'; __webpack_require__.d(__webpack_exports__, 'a', (() => logger)), __webpack_require__.d(__webpack_exports__, 'b', (() => once)), __webpack_require__.d(__webpack_exports__, 'c', (() => pretty)); __webpack_require__(18), __webpack_require__(188), __webpack_require__(5), __webpack_require__(6), __webpack_require__(7), __webpack_require__(10), __webpack_require__(79), __webpack_require__(26); let global__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8); let global__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(global__WEBPACK_IMPORTED_MODULE_8__); let {LOGLEVEL} = global__WEBPACK_IMPORTED_MODULE_8___default.a; let {console} = global__WEBPACK_IMPORTED_MODULE_8___default.a; let levels = {trace: 1, debug: 2, info: 3, warn: 4, error: 5, silent: 10}; let currentLogLevelNumber = levels[LOGLEVEL] || levels.info; var logger = {trace: function trace(message) {
		for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
			rest[_key - 1] = arguments[_key];
		}

		return currentLogLevelNumber <= levels.trace && console.trace.apply(console, [message].concat(rest));
	}, debug: function debug(message) {
		for (var _len2 = arguments.length, rest = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
			rest[_key2 - 1] = arguments[_key2];
		}

		return currentLogLevelNumber <= levels.debug && console.debug.apply(console, [message].concat(rest));
	}, info: function info(message) {
		for (var _len3 = arguments.length, rest = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
			rest[_key3 - 1] = arguments[_key3];
		}

		return currentLogLevelNumber <= levels.info && console.info.apply(console, [message].concat(rest));
	}, warn: function warn(message) {
		for (var _len4 = arguments.length, rest = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
			rest[_key4 - 1] = arguments[_key4];
		}

		return currentLogLevelNumber <= levels.warn && console.warn.apply(console, [message].concat(rest));
	}, error: function error(message) {
		for (var _len5 = arguments.length, rest = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
			rest[_key5 - 1] = arguments[_key5];
		}

		return currentLogLevelNumber <= levels.error && console.error.apply(console, [message].concat(rest));
	}, log: function log(message) {
		for (var _len6 = arguments.length, rest = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
			rest[_key6 - 1] = arguments[_key6];
		}

		return currentLogLevelNumber < levels.silent && console.log.apply(console, [message].concat(rest));
	}}; let logged = new Set(); var once = function once(type) {
		return function (message) {
			if (!logged.has(message)) {
				logged.add(message); for (var _len7 = arguments.length, rest = new Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
					rest[_key7 - 1] = arguments[_key7];
				}

				return logger[type].apply(logger, [message].concat(rest));
			}
		};
	};

	once.clear = function () {
		return logged.clear();
	}, once.trace = once('trace'), once.debug = once('debug'), once.info = once('info'), once.warn = once('warn'), once.error = once('error'), once.log = once('log'); var pretty = function pretty(type) {
		return function () {
			for (var argArray = [], _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
				args[_key8] = arguments[_key8];
			}

			if (args.length) {
				let reResultArray; let startTagRe = /<span\s+style=(['"])([^'"]*)\1\s*>/gi; let endTagRe = /<\/span>/gi; for (argArray.push(args[0].replace(startTagRe, '%c').replace(endTagRe, '%c')); reResultArray = startTagRe.exec(args[0]);) {
					argArray.push(reResultArray[2]), argArray.push('');
				}

				for (let j = 1; j < args.length; j++) {
					argArray.push(args[j]);
				}
			}

			logger[type].apply(logger, argArray);
		};
	};

	pretty.trace = pretty('trace'), pretty.debug = pretty('debug'), pretty.info = pretty('info'), pretty.warn = pretty('warn'), pretty.error = pretty('error');
}, 288(module, __webpack_exports__, __webpack_require__) {
	'use strict'; __webpack_require__.d(__webpack_exports__, 'a', (() => createGlobal)); __webpack_require__(47), __webpack_require__(15); let memoizerific__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28); let memoizerific__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(memoizerific__WEBPACK_IMPORTED_MODULE_2__); let createReset = memoizerific__WEBPACK_IMPORTED_MODULE_2___default()(1)((_ref => {
		let {typography} = _ref; return {body: {fontFamily: typography.fonts.base, fontSize: typography.size.s3, margin: 0, WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', WebkitOverflowScrolling: 'touch'}, '*': {boxSizing: 'border-box'}, 'h1, h2, h3, h4, h5, h6': {fontWeight: typography.weight.regular, margin: 0, padding: 0}, 'button, input, textarea, select': {fontFamily: 'inherit', fontSize: 'inherit', boxSizing: 'border-box'}, sub: {fontSize: '0.8em', bottom: '-0.2em'}, sup: {fontSize: '0.8em', top: '-0.2em'}, 'b, strong': {fontWeight: typography.weight.bold}, hr: {border: 'none', borderTop: '1px solid silver', clear: 'both', marginBottom: '1.25rem'}, code: {fontFamily: typography.fonts.mono, WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale', display: 'inline-block', paddingLeft: 2, paddingRight: 2, verticalAlign: 'baseline', color: 'inherit'}, pre: {fontFamily: typography.fonts.mono, WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale', lineHeight: '18px', padding: '11px 1rem', whiteSpace: 'pre-wrap', color: 'inherit', borderRadius: 3, margin: '1rem 0'}};
	})); var createGlobal = memoizerific__WEBPACK_IMPORTED_MODULE_2___default()(1)((_ref2 => {
		let {color} = _ref2; let {background} = _ref2; let {typography} = _ref2; let
			resetStyles = createReset({typography}); return {...resetStyles, body: {...resetStyles.body, color: color.defaultText, background: background.app, overflow: 'hidden'}, hr: {...resetStyles.hr, borderTop: '1px solid '.concat(color.border)}};
	}));
}, 291(module, __webpack_exports__, __webpack_require__) {
	'use strict'; (function (module) {
		let _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76); __webpack_require__.d(__webpack_exports__, 'EVENT_ID', (() => _constants__WEBPACK_IMPORTED_MODULE_0__.b)); __webpack_require__(420), __webpack_require__(428); module && module.hot && module.hot.decline && module.hot.decline();
	}).call(this, __webpack_require__(847)(module));
}, 39(module, __webpack_exports__, __webpack_require__) {
	'use strict'; __webpack_require__.d(__webpack_exports__, 'a', (() => getControlId)); __webpack_require__(79), __webpack_require__(26); var getControlId = function getControlId(value) {
		return 'control-'.concat(value.replace(/\s+/g, '-'));
	};
}, 399(module, __webpack_exports__, __webpack_require__) {
	'use strict'; __webpack_require__.d(__webpack_exports__, 'a', (() => ensure)); __webpack_require__(16), __webpack_require__(50), __webpack_require__(23); let _templateObject; let _storybook_client_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25); let deep_object_diff__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(437); let ts_dedent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33); let ts_dedent__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(ts_dedent__WEBPACK_IMPORTED_MODULE_5__); let _themes_light__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(136); let _convert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(164); var ensure = function ensure(input) {
		if (!input) {
			return Object(_convert__WEBPACK_IMPORTED_MODULE_7__.a)(_themes_light__WEBPACK_IMPORTED_MODULE_6__.a);
		}

		let missing = Object(deep_object_diff__WEBPACK_IMPORTED_MODULE_4__.deletedDiff)(_themes_light__WEBPACK_IMPORTED_MODULE_6__.a, input); return Object.keys(missing).length && _storybook_client_logger__WEBPACK_IMPORTED_MODULE_3__.a.warn(ts_dedent__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject || (_templateObject = (function _taggedTemplateLiteral(strings, raw) {
			return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, {raw: {value: Object.freeze(raw)}}));
		})(['\n          Your theme is missing properties, you should update your theme!\n\n          theme-data missing:\n        ']))), missing), Object(_convert__WEBPACK_IMPORTED_MODULE_7__.a)(input);
	};
}, 405(module, __webpack_exports__, __webpack_require__) {
	'use strict'; __webpack_require__.d(__webpack_exports__, 'a', (() => WithTooltip)), __webpack_require__.d(__webpack_exports__, 'b', (() => WithTooltipPure)); __webpack_require__(41), __webpack_require__(5); let react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0); let react__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__); let LazyWithTooltip = react__WEBPACK_IMPORTED_MODULE_2___default.a.lazy((() => Promise.all([__webpack_require__.e(1), __webpack_require__.e(0)]).then(__webpack_require__.bind(null, 457)).then((mod => ({default: mod.WithTooltip}))))); var WithTooltip = function WithTooltip(props) {
		return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Suspense, {fallback: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement('div', null)}, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(LazyWithTooltip, props));
	};

	WithTooltip.displayName = 'WithTooltip'; let LazyWithTooltipPure = react__WEBPACK_IMPORTED_MODULE_2___default.a.lazy((() => Promise.all([__webpack_require__.e(1), __webpack_require__.e(0)]).then(__webpack_require__.bind(null, 457)).then((mod => ({default: mod.WithTooltipPure}))))); var WithTooltipPure = function WithTooltipPure(props) {
		return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Suspense, {fallback: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement('div', null)}, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(LazyWithTooltipPure, props));
	};

	WithTooltipPure.displayName = 'WithTooltipPure';
}, 406(module, __webpack_exports__, __webpack_require__) {
	'use strict'; __webpack_require__.d(__webpack_exports__, 'a', (() => ScrollArea)); __webpack_require__(41), __webpack_require__(5), __webpack_require__(23), __webpack_require__(4), __webpack_require__(15); let react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0); let react__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__); let _storybook_theming__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1); function _extends() {
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

	let GlobalScrollAreaStyles = react__WEBPACK_IMPORTED_MODULE_5___default.a.lazy((() => __webpack_require__.e(7).then(__webpack_require__.bind(null, 863)))); let OverlayScrollbars = react__WEBPACK_IMPORTED_MODULE_5___default.a.lazy((() => Promise.all([__webpack_require__.e(11), __webpack_require__.e(8)]).then(__webpack_require__.bind(null, 864)))); let Scroller = function Scroller(_ref) {
		_ref.horizontal, _ref.vertical; let props = _objectWithoutProperties(_ref, ['horizontal', 'vertical']); return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5__.Suspense, {fallback: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('div', props)}, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(GlobalScrollAreaStyles, null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(OverlayScrollbars, {options: {scrollbars: {autoHide: 'leave'}}, ...props}));
	};

	Scroller.displayName = 'Scroller'; var ScrollArea = Object(_storybook_theming__WEBPACK_IMPORTED_MODULE_6__.styled)(Scroller)((_ref2 => _ref2.vertical ? {overflowY: 'auto', height: '100%'} : {overflowY: 'hidden'}), (_ref3 => _ref3.horizontal ? {overflowX: 'auto', width: '100%'} : {overflowX: 'hidden'})); ScrollArea.defaultProps = {horizontal: !1, vertical: !1};
}, 415(module, __webpack_exports__, __webpack_require__) {
	'use strict'; __webpack_require__.d(__webpack_exports__, 'a', (() => BooleanControl)); __webpack_require__(47), __webpack_require__(14); let react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0); let react__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__); let polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3); let _storybook_theming__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1); let _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39); let _form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(55); let Label = _storybook_theming__WEBPACK_IMPORTED_MODULE_4__.styled.label((_ref => {
		let {theme} = _ref; return {lineHeight: '18px', alignItems: 'center', marginBottom: 8, display: 'inline-block', position: 'relative', whiteSpace: 'nowrap', background: ''.concat(Object(polished__WEBPACK_IMPORTED_MODULE_3__.c)(0.05, theme.appBorderColor)), borderRadius: '3em', padding: 1, input: {appearance: 'none', width: '100%', height: '100%', position: 'absolute', left: 0, top: 0, margin: 0, padding: 0, border: 'none', background: 'transparent', cursor: 'pointer', borderRadius: '3em', '&:focus': {outline: 'none', boxShadow: ''.concat(theme.color.secondary, ' 0 0 0 1px inset !important')}}, span: {textAlign: 'center', fontSize: theme.typography.size.s1, fontWeight: theme.typography.weight.bold, lineHeight: '1', cursor: 'pointer', display: 'inline-block', padding: '7px 15px', transition: 'all 100ms ease-out', userSelect: 'none', borderRadius: '3em', color: Object(polished__WEBPACK_IMPORTED_MODULE_3__.e)(0.4, theme.color.defaultText), background: 'transparent', '&:hover': {boxShadow: ''.concat(Object(polished__WEBPACK_IMPORTED_MODULE_3__.c)(0.3, theme.appBorderColor), ' 0 0 0 1px inset')}, '&:active': {boxShadow: ''.concat(Object(polished__WEBPACK_IMPORTED_MODULE_3__.c)(0.05, theme.appBorderColor), ' 0 0 0 2px inset'), color: Object(polished__WEBPACK_IMPORTED_MODULE_3__.c)(1, theme.appBorderColor)}, '&:first-of-type': {paddingRight: 8}, '&:last-of-type': {paddingLeft: 8}}, 'input:checked ~ span:last-of-type, input:not(:checked) ~ span:first-of-type': {background: theme.background.bar, boxShadow: ''.concat(Object(polished__WEBPACK_IMPORTED_MODULE_3__.c)(0.1, theme.appBorderColor), ' 0 0 2px'), color: theme.color.defaultText, padding: '7px 15px'}};
	})); var BooleanControl = function BooleanControl(_ref2) {
		let {name} = _ref2; let {value} = _ref2; let _onChange = _ref2.onChange; let {onBlur} = _ref2; let {onFocus} = _ref2; let
			onSetFalse = Object(react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((() => _onChange(!1)), [_onChange]); return void 0 === value ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_form__WEBPACK_IMPORTED_MODULE_6__.a.Button, {onClick: onSetFalse}, 'Set boolean') : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Label, {htmlFor: name, title: value ? 'Change to false' : 'Change to true'}, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement('input', {id: Object(_helpers__WEBPACK_IMPORTED_MODULE_5__.a)(name), type: 'checkbox', onChange: function onChange(e) {
			return _onChange(e.target.checked);
		}, checked: value || !1, name, onBlur, onFocus}), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement('span', null, 'False'), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement('span', null, 'True'));
	};

	BooleanControl.displayName = 'BooleanControl';
}, 416(module, __webpack_exports__, __webpack_require__) {
	'use strict'; __webpack_require__.d(__webpack_exports__, 'a', (() => DateControl)); __webpack_require__(77), __webpack_require__(26), __webpack_require__(16), __webpack_require__(18), __webpack_require__(14), __webpack_require__(4), __webpack_require__(9), __webpack_require__(5), __webpack_require__(13), __webpack_require__(6), __webpack_require__(7), __webpack_require__(10), __webpack_require__(17); let react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(0); let react__WEBPACK_IMPORTED_MODULE_13___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__); let _storybook_theming__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1); let _form__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(55); let _helpers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(39); function _slicedToArray(arr, i) {
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

	let FlexSpaced = _storybook_theming__WEBPACK_IMPORTED_MODULE_14__.styled.div((_ref => ({flex: 1, display: 'flex', input: {marginLeft: 10, flex: 1, height: 32, '&::-webkit-calendar-picker-indicator': {opacity: 0.5, height: 12, filter: _ref.theme.base === 'light' ? void 0 : 'invert(1)'}}, 'input:first-of-type': {marginLeft: 0}}))); var DateControl = function DateControl(_ref2) {
		let {name} = _ref2; let {value} = _ref2; let {onChange} = _ref2; let {onFocus} = _ref2; let {onBlur} = _ref2; let _useState2 = _slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_13__.useState)(!0), 2); let valid = _useState2[0]; let setValid = _useState2[1]; let dateRef = Object(react__WEBPACK_IMPORTED_MODULE_13__.useRef)(); let
			timeRef = Object(react__WEBPACK_IMPORTED_MODULE_13__.useRef)(); Object(react__WEBPACK_IMPORTED_MODULE_13__.useEffect)((() => {
			!1 !== valid && (dateRef && dateRef.current && (dateRef.current.value = (function formatDate(value) {
				let date = new Date(value); let year = '000'.concat(date.getFullYear()).slice(-4); let month = '0'.concat(date.getMonth() + 1).slice(-2); let day = '0'.concat(date.getDate()).slice(-2); return ''.concat(year, '-').concat(month, '-').concat(day);
			})(value)), timeRef && timeRef.current && (timeRef.current.value = (function formatTime(value) {
				let date = new Date(value); let hours = '0'.concat(date.getHours()).slice(-2); let minutes = '0'.concat(date.getMinutes()).slice(-2); return ''.concat(hours, ':').concat(minutes);
			})(value)));
		}), [value]); let controlId = Object(_helpers__WEBPACK_IMPORTED_MODULE_16__.a)(name); return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(FlexSpaced, null, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_form__WEBPACK_IMPORTED_MODULE_15__.a.Input, {type: 'date', max: '9999-12-31', ref: dateRef, id: ''.concat(controlId, '-date'), name: ''.concat(controlId, '-date'), onChange: function onDateChange(e) {
			let parsed = (function parseDate(value) {
				let _value$split2 = _slicedToArray(value.split('-'), 3); let year = _value$split2[0]; let month = _value$split2[1]; let day = _value$split2[2]; let result = new Date(); return result.setFullYear(parseInt(year, 10), parseInt(month, 10) - 1, parseInt(day, 10)), result;
			})(e.target.value); let result = new Date(value); result.setFullYear(parsed.getFullYear(), parsed.getMonth(), parsed.getDate()); let time = result.getTime(); time && onChange(time), setValid(Boolean(time));
		}, onFocus, onBlur}), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_form__WEBPACK_IMPORTED_MODULE_15__.a.Input, {type: 'time', id: ''.concat(controlId, '-time'), name: ''.concat(controlId, '-time'), ref: timeRef, onChange: function onTimeChange(e) {
			let parsed = (function parseTime(value) {
				let _value$split4 = _slicedToArray(value.split(':'), 2); let hours = _value$split4[0]; let minutes = _value$split4[1]; let result = new Date(); return result.setHours(parseInt(hours, 10)), result.setMinutes(parseInt(minutes, 10)), result;
			})(e.target.value); let result = new Date(value); result.setHours(parsed.getHours()), result.setMinutes(parsed.getMinutes()); let time = result.getTime(); time && onChange(time), setValid(Boolean(time));
		}, onFocus, onBlur}), valid ? null : react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement('div', null, 'invalid'));
	};

	DateControl.displayName = 'DateControl';
}, 417(module, __webpack_exports__, __webpack_require__) {
	'use strict'; __webpack_require__.d(__webpack_exports__, 'a', (() => RangeControl)); __webpack_require__(18), __webpack_require__(40), __webpack_require__(26), __webpack_require__(5), __webpack_require__(88), __webpack_require__(14), __webpack_require__(843); let react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0); let react__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__); let _storybook_theming__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1); let polished__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3); let _helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(39); let _Number__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(206); let RangeInput = _storybook_theming__WEBPACK_IMPORTED_MODULE_8__.styled.input((_ref => {
		let {theme} = _ref; let {min} = _ref; let {max} = _ref; let
			{value} = _ref; return {'&': {width: '100%', backgroundColor: 'transparent', appearance: 'none'}, '&::-webkit-slider-runnable-track': {background: theme.base === 'light' ? 'linear-gradient(to right, \n            '.concat(theme.color.green, ' 0%, ').concat(theme.color.green, ' ').concat((value - min) / (max - min) * 100, '%, \n            ').concat(Object(polished__WEBPACK_IMPORTED_MODULE_9__.a)(0.02, theme.input.background), ' ').concat((value - min) / (max - min) * 100, '%, \n            ').concat(Object(polished__WEBPACK_IMPORTED_MODULE_9__.a)(0.02, theme.input.background), ' 100%)') : 'linear-gradient(to right, \n            '.concat(theme.color.green, ' 0%, ').concat(theme.color.green, ' ').concat((value - min) / (max - min) * 100, '%, \n            ').concat(Object(polished__WEBPACK_IMPORTED_MODULE_9__.b)(0.02, theme.input.background), ' ').concat((value - min) / (max - min) * 100, '%, \n            ').concat(Object(polished__WEBPACK_IMPORTED_MODULE_9__.b)(0.02, theme.input.background), ' 100%)'), boxShadow: ''.concat(theme.appBorderColor, ' 0 0 0 1px inset'), borderRadius: 6, width: '100%', height: 6, cursor: 'pointer'}, '&::-webkit-slider-thumb': {marginTop: '-6px', width: 16, height: 16, border: '1px solid '.concat(Object(polished__WEBPACK_IMPORTED_MODULE_9__.d)(theme.appBorderColor, 0.2)), borderRadius: '50px', boxShadow: '0 1px 3px 0px '.concat(Object(polished__WEBPACK_IMPORTED_MODULE_9__.d)(theme.appBorderColor, 0.2)), cursor: 'grab', appearance: 'none', background: ''.concat(theme.input.background), transition: 'all 150ms ease-out', '&:hover': {background: ''.concat(Object(polished__WEBPACK_IMPORTED_MODULE_9__.a)(0.05, theme.input.background)), transform: 'scale3d(1.1, 1.1, 1.1) translateY(-1px)', transition: 'all 50ms ease-out'}, '&:active': {background: ''.concat(theme.input.background), transform: 'scale3d(1, 1, 1) translateY(0px)', cursor: 'grabbing'}}, '&:focus': {outline: 'none', '&::-webkit-slider-runnable-track': {borderColor: Object(polished__WEBPACK_IMPORTED_MODULE_9__.d)(theme.color.secondary, 0.4)}, '&::-webkit-slider-thumb': {borderColor: theme.color.secondary, boxShadow: '0 0px 5px 0px '.concat(theme.color.secondary)}}, '&::-moz-range-track': {background: theme.base === 'light' ? 'linear-gradient(to right, \n            '.concat(theme.color.green, ' 0%, ').concat(theme.color.green, ' ').concat((value - min) / (max - min) * 100, '%, \n            ').concat(Object(polished__WEBPACK_IMPORTED_MODULE_9__.a)(0.02, theme.input.background), ' ').concat((value - min) / (max - min) * 100, '%, \n            ').concat(Object(polished__WEBPACK_IMPORTED_MODULE_9__.a)(0.02, theme.input.background), ' 100%)') : 'linear-gradient(to right, \n            '.concat(theme.color.green, ' 0%, ').concat(theme.color.green, ' ').concat((value - min) / (max - min) * 100, '%, \n            ').concat(Object(polished__WEBPACK_IMPORTED_MODULE_9__.b)(0.02, theme.input.background), ' ').concat((value - min) / (max - min) * 100, '%, \n            ').concat(Object(polished__WEBPACK_IMPORTED_MODULE_9__.b)(0.02, theme.input.background), ' 100%)'), boxShadow: ''.concat(theme.appBorderColor, ' 0 0 0 1px inset'), borderRadius: 6, width: '100%', height: 6, cursor: 'pointer', outline: 'none'}, '&::-moz-range-thumb': {width: 16, height: 16, border: '1px solid '.concat(Object(polished__WEBPACK_IMPORTED_MODULE_9__.d)(theme.color.border, 0.2)), borderRadius: '50px', boxShadow: '0 1px 3px 0px '.concat(Object(polished__WEBPACK_IMPORTED_MODULE_9__.d)(theme.color.border, 0.2)), cursor: 'grab', background: ''.concat(theme.input.background), transition: 'all 150ms ease-out', '&:hover': {background: ''.concat(Object(polished__WEBPACK_IMPORTED_MODULE_9__.a)(0.05, theme.input.background)), transform: 'scale3d(1.1, 1.1, 1.1) translateY(-1px)', transition: 'all 50ms ease-out'}, '&:active': {background: ''.concat(theme.input.background), transform: 'scale3d(1, 1, 1) translateY(0px)', cursor: 'grabbing'}}, '&::-ms-track': {background: theme.base === 'light' ? 'linear-gradient(to right, \n            '.concat(theme.color.green, ' 0%, ').concat(theme.color.green, ' ').concat((value - min) / (max - min) * 100, '%, \n            ').concat(Object(polished__WEBPACK_IMPORTED_MODULE_9__.a)(0.02, theme.input.background), ' ').concat((value - min) / (max - min) * 100, '%, \n            ').concat(Object(polished__WEBPACK_IMPORTED_MODULE_9__.a)(0.02, theme.input.background), ' 100%)') : 'linear-gradient(to right, \n            '.concat(theme.color.green, ' 0%, ').concat(theme.color.green, ' ').concat((value - min) / (max - min) * 100, '%, \n            ').concat(Object(polished__WEBPACK_IMPORTED_MODULE_9__.b)(0.02, theme.input.background), ' ').concat((value - min) / (max - min) * 100, '%, \n            ').concat(Object(polished__WEBPACK_IMPORTED_MODULE_9__.b)(0.02, theme.input.background), ' 100%)'), boxShadow: ''.concat(theme.appBorderColor, ' 0 0 0 1px inset'), color: 'transparent', width: '100%', height: '6px', cursor: 'pointer'}, '&::-ms-fill-lower': {borderRadius: 6}, '&::-ms-fill-upper': {borderRadius: 6}, '&::-ms-thumb': {width: 16, height: 16, background: ''.concat(theme.input.background), border: '1px solid '.concat(Object(polished__WEBPACK_IMPORTED_MODULE_9__.d)(theme.appBorderColor, 0.2)), borderRadius: 50, cursor: 'grab', marginTop: 0}, '@supports (-ms-ime-align:auto)': {'input[type=range]': {margin: '0'}}};
	})); let RangeLabel = _storybook_theming__WEBPACK_IMPORTED_MODULE_8__.styled.span({paddingLeft: 5, paddingRight: 5, fontSize: 12, whiteSpace: 'nowrap', fontFeatureSettings: 'tnum', fontVariantNumeric: 'tabular-nums'}); let RangeWrapper = _storybook_theming__WEBPACK_IMPORTED_MODULE_8__.styled.div({display: 'flex', alignItems: 'center', width: '100%'}); var RangeControl = function RangeControl(_ref2) {
		let {name} = _ref2; let {value} = _ref2; let {onChange} = _ref2; let _ref2$min = _ref2.min; let min = void 0 === _ref2$min ? 0 : _ref2$min; let _ref2$max = _ref2.max; let max = void 0 === _ref2$max ? 100 : _ref2$max; let _ref2$step = _ref2.step; let step = void 0 === _ref2$step ? 1 : _ref2$step; let {onBlur} = _ref2; let {onFocus} = _ref2; let hasValue = void 0 !== value; let
			numberOFDecimalsPlaces = Object(react__WEBPACK_IMPORTED_MODULE_7__.useMemo)((() => (function getNumberOfDecimalPlaces(number) {
				let match = number.toString().match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/); return match ? Math.max(0, (match[1] ? match[1].length : 0) - (match[2] ? Number(match[2]) : 0)) : 0;
			})(step)), [step]); return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(RangeWrapper, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(RangeLabel, null, min), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(RangeInput, {id: Object(_helpers__WEBPACK_IMPORTED_MODULE_10__.a)(name), type: 'range', onChange: function handleChange(event) {
			onChange(Object(_Number__WEBPACK_IMPORTED_MODULE_11__.b)(event.target.value));
		}, name, value, min, max, step, onFocus, onBlur}), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(RangeLabel, null, ''.concat(hasValue ? value.toFixed(numberOFDecimalsPlaces) : '--'), ' / ', max));
	};

	RangeControl.displayName = 'RangeControl';
}, 418(module, __webpack_exports__, __webpack_require__) {
	'use strict'; __webpack_require__.d(__webpack_exports__, 'a', (() => TextControl)); __webpack_require__(14), __webpack_require__(4), __webpack_require__(9), __webpack_require__(5), __webpack_require__(13), __webpack_require__(6), __webpack_require__(7), __webpack_require__(10), __webpack_require__(16), __webpack_require__(17); let react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(0); let react__WEBPACK_IMPORTED_MODULE_10___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__); let _storybook_theming__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1); let _form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(55); let _helpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(39); function _slicedToArray(arr, i) {
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

	let Wrapper = _storybook_theming__WEBPACK_IMPORTED_MODULE_11__.styled.label({display: 'flex'}); var TextControl = function TextControl(_ref) {
		let {name} = _ref; let {value} = _ref; let {onChange} = _ref; let {onFocus} = _ref; let {onBlur} = _ref; let _useState2 = _slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_10__.useState)(!1), 2); let forceVisible = _useState2[0]; let setForceVisible = _useState2[1]; let
			onForceVisible = Object(react__WEBPACK_IMPORTED_MODULE_10__.useCallback)((() => {
				onChange(''), setForceVisible(!0);
			}), [setForceVisible]); if (void 0 === value) {
			return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_form__WEBPACK_IMPORTED_MODULE_12__.a.Button, {onClick: onForceVisible}, 'Set string');
		}

		let isValid = typeof value === 'string'; return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(Wrapper, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_form__WEBPACK_IMPORTED_MODULE_12__.a.Textarea, {id: Object(_helpers__WEBPACK_IMPORTED_MODULE_13__.a)(name), onChange: function handleChange(event) {
			onChange(event.target.value);
		}, size: 'flex', placeholder: 'Edit string...', autoFocus: forceVisible, valid: isValid ? null : 'error', name, value: isValid ? value : '', onFocus, onBlur}));
	};

	TextControl.displayName = 'TextControl';
}, 419(module, __webpack_exports__, __webpack_require__) {
	'use strict'; __webpack_require__.d(__webpack_exports__, 'a', (() => FilesControl)); __webpack_require__(38), __webpack_require__(168), __webpack_require__(250), __webpack_require__(5), __webpack_require__(6), __webpack_require__(7), __webpack_require__(10), __webpack_require__(14), __webpack_require__(22), __webpack_require__(17); let react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(0); let react__WEBPACK_IMPORTED_MODULE_10___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__); let _storybook_theming__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1); let _form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(55); let _helpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(39); let FileInput = Object(_storybook_theming__WEBPACK_IMPORTED_MODULE_11__.styled)(_form__WEBPACK_IMPORTED_MODULE_12__.a.Input)({padding: 10}); var FilesControl = function FilesControl(_ref) {
		let {onChange} = _ref; let {name} = _ref; let _ref$accept = _ref.accept; let accept = void 0 === _ref$accept ? 'image/*' : _ref$accept; let
			{value} = _ref; return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(FileInput, {id: Object(_helpers__WEBPACK_IMPORTED_MODULE_13__.a)(name), type: 'file', name, multiple: !0, onChange: function handleFileChange(e) {
			if (e.target.files) {
				let fileUrls = Array.from(e.target.files).map((file => URL.createObjectURL(file))); onChange(fileUrls), (function revokeOldUrls(urls) {
					urls.forEach((url => {
						url.startsWith('blob:') && URL.revokeObjectURL(url);
					}));
				})(value);
			}
		}, accept, size: 'flex'});
	};

	FilesControl.displayName = 'FilesControl';
}, 420(module, __webpack_exports__, __webpack_require__) {
	'use strict'; __webpack_require__(421), __webpack_require__(422), __webpack_require__(423), __webpack_require__(424), __webpack_require__(425), __webpack_require__(426);
}, 421(module, exports) {}, 422(module, exports) {}, 423(module, exports) {}, 424(module, exports) {}, 425(module, exports) {}, 426(module, exports) {}, 427(module, __webpack_exports__, __webpack_require__) {
	'use strict'; __webpack_require__.d(__webpack_exports__, 'a', (() => Object_ObjectControl)); __webpack_require__(14), __webpack_require__(52), __webpack_require__(4), __webpack_require__(9), __webpack_require__(5), __webpack_require__(13), __webpack_require__(6), __webpack_require__(7), __webpack_require__(10), __webpack_require__(16), __webpack_require__(17); let global_window = __webpack_require__(8); let window_default = __webpack_require__.n(global_window); let cloneDeep = __webpack_require__(447); let cloneDeep_default = __webpack_require__.n(cloneDeep); let react = __webpack_require__(0); let react_default = __webpack_require__.n(react); let esm = __webpack_require__(1); let emotion_theming_browser_esm = __webpack_require__(397); function _typeof(obj) {
		return (_typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function _typeof(obj) {
			return typeof obj;
		} : function _typeof(obj) {
			return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
		})(obj);
	}

	function getObjectType(obj) {
		return obj === null || _typeof(obj) !== 'object' || Array.isArray(obj) || typeof obj[Symbol.iterator] !== 'function' ? Object.prototype.toString.call(obj).slice(8, -1) : 'Iterable';
	}

	function isComponentWillChange(oldValue, newValue) {
		let oldType = getObjectType(oldValue); let newType = getObjectType(newValue); return (oldType === 'Function' || newType === 'Function') && newType !== oldType;
	}

	__webpack_require__(48), __webpack_require__(41), __webpack_require__(49); let prop_types = __webpack_require__(2); let prop_types_default = __webpack_require__.n(prop_types); let inputUsageTypes_KEY = (__webpack_require__(88), __webpack_require__(18), __webpack_require__(131), 'key'); let inputUsageTypes_VALUE = 'value'; function JsonValue_typeof(obj) {
		return (JsonValue_typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function _typeof(obj) {
			return typeof obj;
		} : function _typeof(obj) {
			return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
		})(obj);
	}

	function _toConsumableArray(arr) {
		return (function _arrayWithoutHoles(arr) {
			if (Array.isArray(arr)) {
				return _arrayLikeToArray(arr);
			}
		})(arr) || (function _iterableToArray(iter) {
			if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(iter)) {
				return Array.from(iter);
			}
		})(arr) || (function _unsupportedIterableToArray(o, minLen) {
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
		})(arr) || (function _nonIterableSpread() {
			throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
		})();
	}

	function _arrayLikeToArray(arr, len) {
		(len == null || len > arr.length) && (len = arr.length); for (var i = 0, arr2 = new Array(len); i < len; i++) {
			arr2[i] = arr[i];
		}

		return arr2;
	}

	function _defineProperties(target, props) {
		for (let i = 0; i < props.length; i++) {
			let descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 'value' in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
		}
	}

	function _setPrototypeOf(o, p) {
		return (_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
			return o.__proto__ = p, o;
		})(o, p);
	}

	function _createSuper(Derived) {
		let hasNativeReflectConstruct = (function _isNativeReflectConstruct() {
			if (typeof Reflect === 'undefined' || !Reflect.construct) {
				return !1;
			}

			if (Reflect.construct.sham) {
				return !1;
			}

			if (typeof Proxy === 'function') {
				return !0;
			}

			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (() => {}))), !0;
			} catch (e) {
				return !1;
			}
		})(); return function _createSuperInternal() {
			let result; let Super = _getPrototypeOf(Derived); if (hasNativeReflectConstruct) {
				let NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget);
			} else {
				result = Super.apply(this, arguments);
			}

			return _possibleConstructorReturn(this, result);
		};
	}

	function _possibleConstructorReturn(self, call) {
		return !call || JsonValue_typeof(call) !== 'object' && typeof call !== 'function' ? _assertThisInitialized(self) : call;
	}

	function _assertThisInitialized(self) {
		if (void 0 === self) {
			throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
		}

		return self;
	}

	function _getPrototypeOf(o) {
		return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
			return o.__proto__ || Object.getPrototypeOf(o);
		})(o);
	}

	let JsonValue_JsonValue = (function (_Component) {
		!(function _inherits(subClass, superClass) {
			if (typeof superClass !== 'function' && superClass !== null) {
				throw new TypeError('Super expression must either be null or a function');
			}

			subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {value: subClass, writable: !0, configurable: !0}}), superClass && _setPrototypeOf(subClass, superClass);
		})(JsonValue, _Component);

		let _super = _createSuper(JsonValue); function JsonValue(props) {
			let _this; !(function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError('Cannot call a class as a function');
				}
			})(this, JsonValue), _this = _super.call(this, props); let keyPath = [].concat(_toConsumableArray(props.keyPath), [props.name]); return _this.state = {value: props.value, name: props.name, keyPath, deep: props.deep, editEnabled: !1, inputRef: null}, _this.handleEditMode = _this.handleEditMode.bind(_assertThisInitialized(_this)), _this.refInput = _this.refInput.bind(_assertThisInitialized(_this)), _this.handleCancelEdit = _this.handleCancelEdit.bind(_assertThisInitialized(_this)), _this.handleEdit = _this.handleEdit.bind(_assertThisInitialized(_this)), _this.onKeydown = _this.onKeydown.bind(_assertThisInitialized(_this)), _this;
		}

		return (function _createClass(Constructor, protoProps, staticProps) {
			return protoProps && _defineProperties(Constructor.prototype, protoProps), staticProps && _defineProperties(Constructor, staticProps), Constructor;
		})(JsonValue, [{key: 'componentDidUpdate', value: function componentDidUpdate() {
			let _this$state = this.state; let {editEnabled} = _this$state; let {inputRef} = _this$state; let {name} = _this$state; let {value} = _this$state; let {keyPath} = _this$state; let {deep} = _this$state; let _this$props = this.props; let isReadOnly = (0, _this$props.readOnly)(name, value, keyPath, deep, _this$props.dataType); editEnabled && !isReadOnly && typeof inputRef.focus === 'function' && inputRef.focus();
		}}, {key: 'componentDidMount', value: function componentDidMount() {
			document.addEventListener('keydown', this.onKeydown);
		}}, {key: 'componentWillUnmount', value: function componentWillUnmount() {
			document.removeEventListener('keydown', this.onKeydown);
		}}, {key: 'onKeydown', value: function onKeydown(event) {
			event.altKey || event.ctrlKey || event.metaKey || event.shiftKey || event.repeat || (event.code !== 'Enter' && event.key !== 'Enter' || (event.preventDefault(), this.handleEdit()), event.code !== 'Escape' && event.key !== 'Escape' || (event.preventDefault(), this.handleCancelEdit()));
		}}, {key: 'handleEdit', value: function handleEdit() {
			let _this2 = this; let _this$props2 = this.props; let {handleUpdateValue} = _this$props2; let {originalValue} = _this$props2; let {logger} = _this$props2; let {onSubmitValueParser} = _this$props2; let {keyPath} = _this$props2; let _this$state2 = this.state; let {inputRef} = _this$state2; let {name} = _this$state2; let {deep} = _this$state2; if (inputRef) {
				let newValue = onSubmitValueParser(!0, keyPath, deep, name, inputRef.value); handleUpdateValue({value: newValue, key: name}).then((() => {
					isComponentWillChange(originalValue, newValue) || _this2.handleCancelEdit();
				})).catch(logger.error);
			}
		}}, {key: 'handleEditMode', value: function handleEditMode() {
			this.setState({editEnabled: !0});
		}}, {key: 'refInput', value: function refInput(node) {
			this.state.inputRef = node;
		}}, {key: 'handleCancelEdit', value: function handleCancelEdit() {
			this.setState({editEnabled: !1});
		}}, {key: 'render', value: function render() {
			let _this$state3 = this.state; let {name} = _this$state3; let {value} = _this$state3; let {editEnabled} = _this$state3; let {keyPath} = _this$state3; let {deep} = _this$state3; let _this$props3 = this.props; let {handleRemove} = _this$props3; let {originalValue} = _this$props3; let {readOnly} = _this$props3; let {dataType} = _this$props3; let {getStyle} = _this$props3; let {editButtonElement} = _this$props3; let {cancelButtonElement} = _this$props3; let {inputElementGenerator} = _this$props3; let {minusMenuElement} = _this$props3; let comeFromKeyPath = _this$props3.keyPath; let style = getStyle(name, originalValue, keyPath, deep, dataType); let isReadOnly = readOnly(name, originalValue, keyPath, deep, dataType); let isEditing = editEnabled && !isReadOnly; let inputElement = inputElementGenerator(inputUsageTypes_VALUE, comeFromKeyPath, deep, name, originalValue, dataType); let editButtonElementLayout = react_default.a.cloneElement(editButtonElement, {onClick: this.handleEdit}); let cancelButtonElementLayout = react_default.a.cloneElement(cancelButtonElement, {onClick: this.handleCancelEdit}); let inputElementLayout = react_default.a.cloneElement(inputElement, {ref: this.refInput, defaultValue: JSON.stringify(originalValue)}); let minusMenuLayout = react_default.a.cloneElement(minusMenuElement, {onClick: handleRemove, className: 'rejt-minus-menu', style: style.minus}); return react_default.a.createElement('li', {className: 'rejt-value-node', style: style.li}, react_default.a.createElement('span', {className: 'rejt-name', style: style.name}, name, ' : '), isEditing ? react_default.a.createElement('span', {className: 'rejt-edit-form', style: style.editForm}, inputElementLayout, ' ', cancelButtonElementLayout, editButtonElementLayout) : react_default.a.createElement('span', {className: 'rejt-value', style: style.value, onClick: isReadOnly ? null : this.handleEditMode}, String(value)), !isReadOnly && !isEditing && minusMenuLayout);
		}}], [{key: 'getDerivedStateFromProps', value: function getDerivedStateFromProps(props, state) {
			return props.value !== state.value ? {value: props.value} : null;
		}}]), JsonValue;
	})(react.Component); JsonValue_JsonValue.displayName = 'JsonValue', JsonValue_JsonValue.propTypes = {name: prop_types_default.a.string.isRequired, value: prop_types_default.a.any.isRequired, originalValue: prop_types_default.a.any, keyPath: prop_types_default.a.array, deep: prop_types_default.a.number, handleRemove: prop_types_default.a.func, handleUpdateValue: prop_types_default.a.func, readOnly: prop_types_default.a.func.isRequired, dataType: prop_types_default.a.string, getStyle: prop_types_default.a.func.isRequired, editButtonElement: prop_types_default.a.element, cancelButtonElement: prop_types_default.a.element, inputElementGenerator: prop_types_default.a.func.isRequired, minusMenuElement: prop_types_default.a.element, logger: prop_types_default.a.object.isRequired, onSubmitValueParser: prop_types_default.a.func.isRequired}, JsonValue_JsonValue.defaultProps = {keyPath: [], deep: 0, handleUpdateValue: function handleUpdateValue() {
		return Promise.resolve();
	}, editButtonElement: react_default.a.createElement('button', null, 'e'), cancelButtonElement: react_default.a.createElement('button', null, 'c'), minusMenuElement: react_default.a.createElement('span', null, ' - ')}; let components_JsonValue = JsonValue_JsonValue; __webpack_require__(841), __webpack_require__(22); function JsonAddValue_typeof(obj) {
		return (JsonAddValue_typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function _typeof(obj) {
			return typeof obj;
		} : function _typeof(obj) {
			return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
		})(obj);
	}

	function JsonAddValue_defineProperties(target, props) {
		for (let i = 0; i < props.length; i++) {
			let descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 'value' in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
		}
	}

	function JsonAddValue_setPrototypeOf(o, p) {
		return (JsonAddValue_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
			return o.__proto__ = p, o;
		})(o, p);
	}

	function JsonAddValue_createSuper(Derived) {
		let hasNativeReflectConstruct = (function JsonAddValue_isNativeReflectConstruct() {
			if (typeof Reflect === 'undefined' || !Reflect.construct) {
				return !1;
			}

			if (Reflect.construct.sham) {
				return !1;
			}

			if (typeof Proxy === 'function') {
				return !0;
			}

			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (() => {}))), !0;
			} catch (e) {
				return !1;
			}
		})(); return function _createSuperInternal() {
			let result; let Super = JsonAddValue_getPrototypeOf(Derived); if (hasNativeReflectConstruct) {
				let NewTarget = JsonAddValue_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget);
			} else {
				result = Super.apply(this, arguments);
			}

			return JsonAddValue_possibleConstructorReturn(this, result);
		};
	}

	function JsonAddValue_possibleConstructorReturn(self, call) {
		return !call || JsonAddValue_typeof(call) !== 'object' && typeof call !== 'function' ? JsonAddValue_assertThisInitialized(self) : call;
	}

	function JsonAddValue_assertThisInitialized(self) {
		if (void 0 === self) {
			throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
		}

		return self;
	}

	function JsonAddValue_getPrototypeOf(o) {
		return (JsonAddValue_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
			return o.__proto__ || Object.getPrototypeOf(o);
		})(o);
	}

	let JsonAddValue_JsonAddValue = (function (_Component) {
		!(function JsonAddValue_inherits(subClass, superClass) {
			if (typeof superClass !== 'function' && superClass !== null) {
				throw new TypeError('Super expression must either be null or a function');
			}

			subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {value: subClass, writable: !0, configurable: !0}}), superClass && JsonAddValue_setPrototypeOf(subClass, superClass);
		})(JsonAddValue, _Component);

		let _super = JsonAddValue_createSuper(JsonAddValue); function JsonAddValue(props) {
			let _this; return (function JsonAddValue_classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError('Cannot call a class as a function');
				}
			})(this, JsonAddValue), (_this = _super.call(this, props)).state = {inputRefKey: null, inputRefValue: null}, _this.refInputValue = _this.refInputValue.bind(JsonAddValue_assertThisInitialized(_this)), _this.refInputKey = _this.refInputKey.bind(JsonAddValue_assertThisInitialized(_this)), _this.onKeydown = _this.onKeydown.bind(JsonAddValue_assertThisInitialized(_this)), _this.onSubmit = _this.onSubmit.bind(JsonAddValue_assertThisInitialized(_this)), _this;
		}

		return (function JsonAddValue_createClass(Constructor, protoProps, staticProps) {
			return protoProps && JsonAddValue_defineProperties(Constructor.prototype, protoProps), staticProps && JsonAddValue_defineProperties(Constructor, staticProps), Constructor;
		})(JsonAddValue, [{key: 'componentDidMount', value: function componentDidMount() {
			let _this$state = this.state; let {inputRefKey} = _this$state; let {inputRefValue} = _this$state; let {onlyValue} = this.props; inputRefKey && typeof inputRefKey.focus === 'function' && inputRefKey.focus(), onlyValue && inputRefValue && typeof inputRefValue.focus === 'function' && inputRefValue.focus(), document.addEventListener('keydown', this.onKeydown);
		}}, {key: 'componentWillUnmount', value: function componentWillUnmount() {
			document.removeEventListener('keydown', this.onKeydown);
		}}, {key: 'onKeydown', value: function onKeydown(event) {
			event.altKey || event.ctrlKey || event.metaKey || event.shiftKey || event.repeat || (event.code !== 'Enter' && event.key !== 'Enter' || (event.preventDefault(), this.onSubmit()), event.code !== 'Escape' && event.key !== 'Escape' || (event.preventDefault(), this.props.handleCancel()));
		}}, {key: 'onSubmit', value: function onSubmit() {
			let _this$props = this.props; let {handleAdd} = _this$props; let {onlyValue} = _this$props; let {onSubmitValueParser} = _this$props; let {keyPath} = _this$props; let {deep} = _this$props; let _this$state2 = this.state; let {inputRefKey} = _this$state2; let {inputRefValue} = _this$state2; let result = {}; if (!onlyValue) {
				if (!inputRefKey.value) {
					return;
				}

				result.key = inputRefKey.value;
			}

			result.newValue = onSubmitValueParser(!1, keyPath, deep, result.key, inputRefValue.value), handleAdd(result);
		}}, {key: 'refInputKey', value: function refInputKey(node) {
			this.state.inputRefKey = node;
		}}, {key: 'refInputValue', value: function refInputValue(node) {
			this.state.inputRefValue = node;
		}}, {key: 'render', value: function render() {
			let _this$props2 = this.props; let {handleCancel} = _this$props2; let {onlyValue} = _this$props2; let {addButtonElement} = _this$props2; let {cancelButtonElement} = _this$props2; let {inputElementGenerator} = _this$props2; let {keyPath} = _this$props2; let {deep} = _this$props2; let addButtonElementLayout = react_default.a.cloneElement(addButtonElement, {onClick: this.onSubmit}); let cancelButtonElementLayout = react_default.a.cloneElement(cancelButtonElement, {onClick: handleCancel}); let inputElementValue = inputElementGenerator(inputUsageTypes_VALUE, keyPath, deep); let inputElementValueLayout = react_default.a.cloneElement(inputElementValue, {placeholder: 'Value', ref: this.refInputValue}); let inputElementKeyLayout = null; if (!onlyValue) {
				let inputElementKey = inputElementGenerator(inputUsageTypes_KEY, keyPath, deep); inputElementKeyLayout = react_default.a.cloneElement(inputElementKey, {placeholder: 'Key', ref: this.refInputKey});
			}

			return react_default.a.createElement('span', {className: 'rejt-add-value-node'}, inputElementKeyLayout, inputElementValueLayout, cancelButtonElementLayout, addButtonElementLayout);
		}}]), JsonAddValue;
	})(react.Component); JsonAddValue_JsonAddValue.displayName = 'JsonAddValue', JsonAddValue_JsonAddValue.propTypes = {handleAdd: prop_types_default.a.func.isRequired, handleCancel: prop_types_default.a.func.isRequired, onlyValue: prop_types_default.a.bool, addButtonElement: prop_types_default.a.element, cancelButtonElement: prop_types_default.a.element, inputElementGenerator: prop_types_default.a.func.isRequired, keyPath: prop_types_default.a.array, deep: prop_types_default.a.number, onSubmitValueParser: prop_types_default.a.func.isRequired}, JsonAddValue_JsonAddValue.defaultProps = {onlyValue: !1, addButtonElement: react_default.a.createElement('button', null, '+'), cancelButtonElement: react_default.a.createElement('button', null, 'c')}; let components_JsonAddValue = JsonAddValue_JsonAddValue; function JsonObject_typeof(obj) {
		return (JsonObject_typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function _typeof(obj) {
			return typeof obj;
		} : function _typeof(obj) {
			return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
		})(obj);
	}

	function JsonObject_toConsumableArray(arr) {
		return (function JsonObject_arrayWithoutHoles(arr) {
			if (Array.isArray(arr)) {
				return JsonObject_arrayLikeToArray(arr);
			}
		})(arr) || (function JsonObject_iterableToArray(iter) {
			if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(iter)) {
				return Array.from(iter);
			}
		})(arr) || (function JsonObject_unsupportedIterableToArray(o, minLen) {
			if (!o) {
				return;
			}

			if (typeof o === 'string') {
				return JsonObject_arrayLikeToArray(o, minLen);
			}

			let n = Object.prototype.toString.call(o).slice(8, -1); n === 'Object' && o.constructor && (n = o.constructor.name); if (n === 'Map' || n === 'Set') {
				return Array.from(o);
			}

			if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
				return JsonObject_arrayLikeToArray(o, minLen);
			}
		})(arr) || (function JsonObject_nonIterableSpread() {
			throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
		})();
	}

	function JsonObject_arrayLikeToArray(arr, len) {
		(len == null || len > arr.length) && (len = arr.length); for (var i = 0, arr2 = new Array(len); i < len; i++) {
			arr2[i] = arr[i];
		}

		return arr2;
	}

	function JsonObject_defineProperties(target, props) {
		for (let i = 0; i < props.length; i++) {
			let descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 'value' in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
		}
	}

	function JsonObject_setPrototypeOf(o, p) {
		return (JsonObject_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
			return o.__proto__ = p, o;
		})(o, p);
	}

	function JsonObject_createSuper(Derived) {
		let hasNativeReflectConstruct = (function JsonObject_isNativeReflectConstruct() {
			if (typeof Reflect === 'undefined' || !Reflect.construct) {
				return !1;
			}

			if (Reflect.construct.sham) {
				return !1;
			}

			if (typeof Proxy === 'function') {
				return !0;
			}

			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (() => {}))), !0;
			} catch (e) {
				return !1;
			}
		})(); return function _createSuperInternal() {
			let result; let Super = JsonObject_getPrototypeOf(Derived); if (hasNativeReflectConstruct) {
				let NewTarget = JsonObject_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget);
			} else {
				result = Super.apply(this, arguments);
			}

			return JsonObject_possibleConstructorReturn(this, result);
		};
	}

	function JsonObject_possibleConstructorReturn(self, call) {
		return !call || JsonObject_typeof(call) !== 'object' && typeof call !== 'function' ? JsonObject_assertThisInitialized(self) : call;
	}

	function JsonObject_assertThisInitialized(self) {
		if (void 0 === self) {
			throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
		}

		return self;
	}

	function JsonObject_getPrototypeOf(o) {
		return (JsonObject_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
			return o.__proto__ || Object.getPrototypeOf(o);
		})(o);
	}

	let JsonObject_JsonObject = (function (_Component) {
		!(function JsonObject_inherits(subClass, superClass) {
			if (typeof superClass !== 'function' && superClass !== null) {
				throw new TypeError('Super expression must either be null or a function');
			}

			subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {value: subClass, writable: !0, configurable: !0}}), superClass && JsonObject_setPrototypeOf(subClass, superClass);
		})(JsonObject, _Component);

		let _super = JsonObject_createSuper(JsonObject); function JsonObject(props) {
			let _this; !(function JsonObject_classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError('Cannot call a class as a function');
				}
			})(this, JsonObject), _this = _super.call(this, props); let keyPath = props.deep === -1 ? [] : [].concat(JsonObject_toConsumableArray(props.keyPath), [props.name]); return _this.state = {name: props.name, data: props.data, keyPath, deep: props.deep, nextDeep: props.deep + 1, collapsed: props.isCollapsed(keyPath, props.deep, props.data), addFormVisible: !1}, _this.handleCollapseMode = _this.handleCollapseMode.bind(JsonObject_assertThisInitialized(_this)), _this.handleRemoveValue = _this.handleRemoveValue.bind(JsonObject_assertThisInitialized(_this)), _this.handleAddMode = _this.handleAddMode.bind(JsonObject_assertThisInitialized(_this)), _this.handleAddValueAdd = _this.handleAddValueAdd.bind(JsonObject_assertThisInitialized(_this)), _this.handleAddValueCancel = _this.handleAddValueCancel.bind(JsonObject_assertThisInitialized(_this)), _this.handleEditValue = _this.handleEditValue.bind(JsonObject_assertThisInitialized(_this)), _this.onChildUpdate = _this.onChildUpdate.bind(JsonObject_assertThisInitialized(_this)), _this.renderCollapsed = _this.renderCollapsed.bind(JsonObject_assertThisInitialized(_this)), _this.renderNotCollapsed = _this.renderNotCollapsed.bind(JsonObject_assertThisInitialized(_this)), _this;
		}

		return (function JsonObject_createClass(Constructor, protoProps, staticProps) {
			return protoProps && JsonObject_defineProperties(Constructor.prototype, protoProps), staticProps && JsonObject_defineProperties(Constructor, staticProps), Constructor;
		})(JsonObject, [{key: 'onChildUpdate', value: function onChildUpdate(childKey, childData) {
			let _this$state = this.state; let {data} = _this$state; let {keyPath} = _this$state; data[childKey] = childData, this.setState({data}), (0, this.props.onUpdate)(keyPath[keyPath.length - 1], data);
		}}, {key: 'handleAddMode', value: function handleAddMode() {
			this.setState({addFormVisible: !0});
		}}, {key: 'handleAddValueCancel', value: function handleAddValueCancel() {
			this.setState({addFormVisible: !1});
		}}, {key: 'handleAddValueAdd', value: function handleAddValueAdd(_ref) {
			let _this2 = this; let {key} = _ref; let {newValue} = _ref; let _this$state2 = this.state; let {data} = _this$state2; let {keyPath} = _this$state2; let deep = _this$state2.nextDeep; let _this$props = this.props; let {beforeAddAction} = _this$props; let {logger} = _this$props; beforeAddAction(key, keyPath, deep, newValue).then((() => {
				data[key] = newValue, _this2.setState({data}), _this2.handleAddValueCancel(); let _this2$props = _this2.props; let {onUpdate} = _this2$props; let {onDeltaUpdate} = _this2$props; onUpdate(keyPath[keyPath.length - 1], data), onDeltaUpdate({type: 'ADD_DELTA_TYPE', keyPath, deep, key, newValue});
			})).catch(logger.error);
		}}, {key: 'handleRemoveValue', value: function handleRemoveValue(key) {
			let _this3 = this; return function () {
				let _this3$props = _this3.props; let {beforeRemoveAction} = _this3$props; let {logger} = _this3$props; let _this3$state = _this3.state; let {data} = _this3$state; let {keyPath} = _this3$state; let deep = _this3$state.nextDeep; let oldValue = data[key]; beforeRemoveAction(key, keyPath, deep, oldValue).then((() => {
					let deltaUpdateResult = {keyPath, deep, key, oldValue, type: 'REMOVE_DELTA_TYPE'}; delete data[key], _this3.setState({data}); let _this3$props2 = _this3.props; let {onUpdate} = _this3$props2; let {onDeltaUpdate} = _this3$props2; onUpdate(keyPath[keyPath.length - 1], data), onDeltaUpdate(deltaUpdateResult);
				})).catch(logger.error);
			};
		}}, {key: 'handleCollapseMode', value: function handleCollapseMode() {
			this.setState((state => ({collapsed: !state.collapsed})));
		}}, {key: 'handleEditValue', value: function handleEditValue(_ref2) {
			let _this4 = this; let {key} = _ref2; let {value} = _ref2; return new Promise(((resolve, reject) => {
				let {beforeUpdateAction} = _this4.props; let _this4$state = _this4.state; let {data} = _this4$state; let {keyPath} = _this4$state; let deep = _this4$state.nextDeep; let
					oldValue = data[key]; beforeUpdateAction(key, keyPath, deep, oldValue, value).then((() => {
					data[key] = value, _this4.setState({data}); let _this4$props = _this4.props; let {onUpdate} = _this4$props; let {onDeltaUpdate} = _this4$props; onUpdate(keyPath[keyPath.length - 1], data), onDeltaUpdate({type: 'UPDATE_DELTA_TYPE', keyPath, deep, key, newValue: value, oldValue}), resolve();
				})).catch(reject);
			}));
		}}, {key: 'renderCollapsed', value: function renderCollapsed() {
			let _this$state3 = this.state; let {name} = _this$state3; let {keyPath} = _this$state3; let {deep} = _this$state3; let {data} = _this$state3; let _this$props2 = this.props; let {handleRemove} = _this$props2; let {readOnly} = _this$props2; let {dataType} = _this$props2; let {getStyle} = _this$props2; let {minusMenuElement} = _this$props2; let _getStyle = getStyle(name, data, keyPath, deep, dataType); let {minus} = _getStyle; let {collapsed} = _getStyle; let keyList = Object.getOwnPropertyNames(data); let isReadOnly = readOnly(name, data, keyPath, deep, dataType); let removeItemButton = react_default.a.cloneElement(minusMenuElement, {onClick: handleRemove, className: 'rejt-minus-menu', style: minus}); return react_default.a.createElement('span', {className: 'rejt-collapsed'}, react_default.a.createElement('span', {className: 'rejt-collapsed-text', style: collapsed, onClick: this.handleCollapseMode}, '{...}', ' ', keyList.length, ' ', keyList.length === 1 ? 'key' : 'keys'), !isReadOnly && removeItemButton);
		}}, {key: 'renderNotCollapsed', value: function renderNotCollapsed() {
			let _this5 = this; let _this$state4 = this.state; let {name} = _this$state4; let {data} = _this$state4; let {keyPath} = _this$state4; let {deep} = _this$state4; let {nextDeep} = _this$state4; let {addFormVisible} = _this$state4; let _this$props3 = this.props; let {isCollapsed} = _this$props3; let {handleRemove} = _this$props3; let {onDeltaUpdate} = _this$props3; let {readOnly} = _this$props3; let {getStyle} = _this$props3; let {dataType} = _this$props3; let {addButtonElement} = _this$props3; let {cancelButtonElement} = _this$props3; let {editButtonElement} = _this$props3; let {inputElementGenerator} = _this$props3; let {textareaElementGenerator} = _this$props3; let {minusMenuElement} = _this$props3; let {plusMenuElement} = _this$props3; let {beforeRemoveAction} = _this$props3; let {beforeAddAction} = _this$props3; let {beforeUpdateAction} = _this$props3; let {logger} = _this$props3; let {onSubmitValueParser} = _this$props3; let _getStyle2 = getStyle(name, data, keyPath, deep, dataType); let {minus} = _getStyle2; let {plus} = _getStyle2; let {addForm} = _getStyle2; let {ul} = _getStyle2; let {delimiter} = _getStyle2; let keyList = Object.getOwnPropertyNames(data); let isReadOnly = readOnly(name, data, keyPath, deep, dataType); let addItemButton = react_default.a.cloneElement(plusMenuElement, {onClick: this.handleAddMode, className: 'rejt-plus-menu', style: plus}); let removeItemButton = react_default.a.cloneElement(minusMenuElement, {onClick: handleRemove, className: 'rejt-minus-menu', style: minus}); let list = keyList.map((key => react_default.a.createElement(components_JsonNode, {key, name: key, data: data[key], keyPath, deep: nextDeep, isCollapsed, handleRemove: _this5.handleRemoveValue(key), handleUpdateValue: _this5.handleEditValue, onUpdate: _this5.onChildUpdate, onDeltaUpdate, readOnly, getStyle, addButtonElement, cancelButtonElement, editButtonElement, inputElementGenerator, textareaElementGenerator, minusMenuElement, plusMenuElement, beforeRemoveAction, beforeAddAction, beforeUpdateAction, logger, onSubmitValueParser}))); return react_default.a.createElement('span', {className: 'rejt-not-collapsed'}, react_default.a.createElement('span', {className: 'rejt-not-collapsed-delimiter', style: delimiter}, '{'), !isReadOnly && addItemButton, react_default.a.createElement('ul', {className: 'rejt-not-collapsed-list', style: ul}, list), !isReadOnly && addFormVisible && react_default.a.createElement('div', {className: 'rejt-add-form', style: addForm}, react_default.a.createElement(components_JsonAddValue, {handleAdd: this.handleAddValueAdd, handleCancel: this.handleAddValueCancel, addButtonElement, cancelButtonElement, inputElementGenerator, keyPath, deep, onSubmitValueParser})), react_default.a.createElement('span', {className: 'rejt-not-collapsed-delimiter', style: delimiter}, '}'), !isReadOnly && removeItemButton);
		}}, {key: 'render', value: function render() {
			let _this$state5 = this.state; let {name} = _this$state5; let {collapsed} = _this$state5; let {data} = _this$state5; let {keyPath} = _this$state5; let {deep} = _this$state5; let _this$props4 = this.props; let {getStyle} = _this$props4; let {dataType} = _this$props4; let value = collapsed ? this.renderCollapsed() : this.renderNotCollapsed(); let style = getStyle(name, data, keyPath, deep, dataType); return react_default.a.createElement('div', {className: 'rejt-object-node'}, react_default.a.createElement('span', {onClick: this.handleCollapseMode}, react_default.a.createElement('span', {className: 'rejt-name', style: style.name}, name, ' :', ' ')), value);
		}}], [{key: 'getDerivedStateFromProps', value: function getDerivedStateFromProps(props, state) {
			return props.data !== state.data ? {data: props.data} : null;
		}}]), JsonObject;
	})(react.Component); JsonObject_JsonObject.displayName = 'JsonObject', JsonObject_JsonObject.propTypes = {data: prop_types_default.a.object.isRequired, name: prop_types_default.a.string.isRequired, isCollapsed: prop_types_default.a.func.isRequired, keyPath: prop_types_default.a.array, deep: prop_types_default.a.number, handleRemove: prop_types_default.a.func, onUpdate: prop_types_default.a.func.isRequired, onDeltaUpdate: prop_types_default.a.func.isRequired, readOnly: prop_types_default.a.func.isRequired, dataType: prop_types_default.a.string, getStyle: prop_types_default.a.func.isRequired, addButtonElement: prop_types_default.a.element, cancelButtonElement: prop_types_default.a.element, editButtonElement: prop_types_default.a.element, inputElementGenerator: prop_types_default.a.func.isRequired, textareaElementGenerator: prop_types_default.a.func.isRequired, minusMenuElement: prop_types_default.a.element, plusMenuElement: prop_types_default.a.element, beforeRemoveAction: prop_types_default.a.func, beforeAddAction: prop_types_default.a.func, beforeUpdateAction: prop_types_default.a.func, logger: prop_types_default.a.object.isRequired, onSubmitValueParser: prop_types_default.a.func.isRequired}, JsonObject_JsonObject.defaultProps = {keyPath: [], deep: 0, minusMenuElement: react_default.a.createElement('span', null, ' - '), plusMenuElement: react_default.a.createElement('span', null, ' + ')}; let components_JsonObject = JsonObject_JsonObject; __webpack_require__(414); function JsonArray_typeof(obj) {
		return (JsonArray_typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function _typeof(obj) {
			return typeof obj;
		} : function _typeof(obj) {
			return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
		})(obj);
	}

	function JsonArray_toConsumableArray(arr) {
		return (function JsonArray_arrayWithoutHoles(arr) {
			if (Array.isArray(arr)) {
				return JsonArray_arrayLikeToArray(arr);
			}
		})(arr) || (function JsonArray_iterableToArray(iter) {
			if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(iter)) {
				return Array.from(iter);
			}
		})(arr) || (function JsonArray_unsupportedIterableToArray(o, minLen) {
			if (!o) {
				return;
			}

			if (typeof o === 'string') {
				return JsonArray_arrayLikeToArray(o, minLen);
			}

			let n = Object.prototype.toString.call(o).slice(8, -1); n === 'Object' && o.constructor && (n = o.constructor.name); if (n === 'Map' || n === 'Set') {
				return Array.from(o);
			}

			if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
				return JsonArray_arrayLikeToArray(o, minLen);
			}
		})(arr) || (function JsonArray_nonIterableSpread() {
			throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
		})();
	}

	function JsonArray_arrayLikeToArray(arr, len) {
		(len == null || len > arr.length) && (len = arr.length); for (var i = 0, arr2 = new Array(len); i < len; i++) {
			arr2[i] = arr[i];
		}

		return arr2;
	}

	function JsonArray_defineProperties(target, props) {
		for (let i = 0; i < props.length; i++) {
			let descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 'value' in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
		}
	}

	function JsonArray_setPrototypeOf(o, p) {
		return (JsonArray_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
			return o.__proto__ = p, o;
		})(o, p);
	}

	function JsonArray_createSuper(Derived) {
		let hasNativeReflectConstruct = (function JsonArray_isNativeReflectConstruct() {
			if (typeof Reflect === 'undefined' || !Reflect.construct) {
				return !1;
			}

			if (Reflect.construct.sham) {
				return !1;
			}

			if (typeof Proxy === 'function') {
				return !0;
			}

			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (() => {}))), !0;
			} catch (e) {
				return !1;
			}
		})(); return function _createSuperInternal() {
			let result; let Super = JsonArray_getPrototypeOf(Derived); if (hasNativeReflectConstruct) {
				let NewTarget = JsonArray_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget);
			} else {
				result = Super.apply(this, arguments);
			}

			return JsonArray_possibleConstructorReturn(this, result);
		};
	}

	function JsonArray_possibleConstructorReturn(self, call) {
		return !call || JsonArray_typeof(call) !== 'object' && typeof call !== 'function' ? JsonArray_assertThisInitialized(self) : call;
	}

	function JsonArray_assertThisInitialized(self) {
		if (void 0 === self) {
			throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
		}

		return self;
	}

	function JsonArray_getPrototypeOf(o) {
		return (JsonArray_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
			return o.__proto__ || Object.getPrototypeOf(o);
		})(o);
	}

	let JsonArray_JsonArray = (function (_Component) {
		!(function JsonArray_inherits(subClass, superClass) {
			if (typeof superClass !== 'function' && superClass !== null) {
				throw new TypeError('Super expression must either be null or a function');
			}

			subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {value: subClass, writable: !0, configurable: !0}}), superClass && JsonArray_setPrototypeOf(subClass, superClass);
		})(JsonArray, _Component);

		let _super = JsonArray_createSuper(JsonArray); function JsonArray(props) {
			let _this; !(function JsonArray_classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError('Cannot call a class as a function');
				}
			})(this, JsonArray), _this = _super.call(this, props); let keyPath = [].concat(JsonArray_toConsumableArray(props.keyPath), [props.name]); return _this.state = {data: props.data, name: props.name, keyPath, deep: props.deep, nextDeep: props.deep + 1, collapsed: props.isCollapsed(keyPath, props.deep, props.data), addFormVisible: !1}, _this.handleCollapseMode = _this.handleCollapseMode.bind(JsonArray_assertThisInitialized(_this)), _this.handleRemoveItem = _this.handleRemoveItem.bind(JsonArray_assertThisInitialized(_this)), _this.handleAddMode = _this.handleAddMode.bind(JsonArray_assertThisInitialized(_this)), _this.handleAddValueAdd = _this.handleAddValueAdd.bind(JsonArray_assertThisInitialized(_this)), _this.handleAddValueCancel = _this.handleAddValueCancel.bind(JsonArray_assertThisInitialized(_this)), _this.handleEditValue = _this.handleEditValue.bind(JsonArray_assertThisInitialized(_this)), _this.onChildUpdate = _this.onChildUpdate.bind(JsonArray_assertThisInitialized(_this)), _this.renderCollapsed = _this.renderCollapsed.bind(JsonArray_assertThisInitialized(_this)), _this.renderNotCollapsed = _this.renderNotCollapsed.bind(JsonArray_assertThisInitialized(_this)), _this;
		}

		return (function JsonArray_createClass(Constructor, protoProps, staticProps) {
			return protoProps && JsonArray_defineProperties(Constructor.prototype, protoProps), staticProps && JsonArray_defineProperties(Constructor, staticProps), Constructor;
		})(JsonArray, [{key: 'onChildUpdate', value: function onChildUpdate(childKey, childData) {
			let _this$state = this.state; let {data} = _this$state; let {keyPath} = _this$state; data[childKey] = childData, this.setState({data}), (0, this.props.onUpdate)(keyPath[keyPath.length - 1], data);
		}}, {key: 'handleAddMode', value: function handleAddMode() {
			this.setState({addFormVisible: !0});
		}}, {key: 'handleCollapseMode', value: function handleCollapseMode() {
			this.setState((state => ({collapsed: !state.collapsed})));
		}}, {key: 'handleRemoveItem', value: function handleRemoveItem(index) {
			let _this2 = this; return function () {
				let _this2$props = _this2.props; let {beforeRemoveAction} = _this2$props; let {logger} = _this2$props; let _this2$state = _this2.state; let {data} = _this2$state; let {keyPath} = _this2$state; let deep = _this2$state.nextDeep; let oldValue = data[index]; beforeRemoveAction(index, keyPath, deep, oldValue).then((() => {
					let deltaUpdateResult = {keyPath, deep, key: index, oldValue, type: 'REMOVE_DELTA_TYPE'}; data.splice(index, 1), _this2.setState({data}); let _this2$props2 = _this2.props; let {onUpdate} = _this2$props2; let {onDeltaUpdate} = _this2$props2; onUpdate(keyPath[keyPath.length - 1], data), onDeltaUpdate(deltaUpdateResult);
				})).catch(logger.error);
			};
		}}, {key: 'handleAddValueAdd', value: function handleAddValueAdd(_ref) {
			let _this3 = this; let {newValue} = _ref; let _this$state2 = this.state; let {data} = _this$state2; let {keyPath} = _this$state2; let deep = _this$state2.nextDeep; let _this$props = this.props; let {beforeAddAction} = _this$props; let {logger} = _this$props; beforeAddAction(data.length, keyPath, deep, newValue).then((() => {
				let newData = [].concat(JsonArray_toConsumableArray(data), [newValue]); _this3.setState({data: newData}), _this3.handleAddValueCancel(); let _this3$props = _this3.props; let {onUpdate} = _this3$props; let {onDeltaUpdate} = _this3$props; onUpdate(keyPath[keyPath.length - 1], newData), onDeltaUpdate({type: 'ADD_DELTA_TYPE', keyPath, deep, key: newData.length - 1, newValue});
			})).catch(logger.error);
		}}, {key: 'handleAddValueCancel', value: function handleAddValueCancel() {
			this.setState({addFormVisible: !1});
		}}, {key: 'handleEditValue', value: function handleEditValue(_ref2) {
			let _this4 = this; let {key} = _ref2; let {value} = _ref2; return new Promise(((resolve, reject) => {
				let {beforeUpdateAction} = _this4.props; let _this4$state = _this4.state; let {data} = _this4$state; let {keyPath} = _this4$state; let deep = _this4$state.nextDeep; let
					oldValue = data[key]; beforeUpdateAction(key, keyPath, deep, oldValue, value).then((() => {
					data[key] = value, _this4.setState({data}); let _this4$props = _this4.props; let {onUpdate} = _this4$props; let {onDeltaUpdate} = _this4$props; onUpdate(keyPath[keyPath.length - 1], data), onDeltaUpdate({type: 'UPDATE_DELTA_TYPE', keyPath, deep, key, newValue: value, oldValue}), resolve();
				})).catch(reject);
			}));
		}}, {key: 'renderCollapsed', value: function renderCollapsed() {
			let _this$state3 = this.state; let {name} = _this$state3; let {data} = _this$state3; let {keyPath} = _this$state3; let {deep} = _this$state3; let _this$props2 = this.props; let {handleRemove} = _this$props2; let {readOnly} = _this$props2; let {getStyle} = _this$props2; let {dataType} = _this$props2; let {minusMenuElement} = _this$props2; let _getStyle = getStyle(name, data, keyPath, deep, dataType); let {minus} = _getStyle; let {collapsed} = _getStyle; let isReadOnly = readOnly(name, data, keyPath, deep, dataType); let removeItemButton = react_default.a.cloneElement(minusMenuElement, {onClick: handleRemove, className: 'rejt-minus-menu', style: minus}); return react_default.a.createElement('span', {className: 'rejt-collapsed'}, react_default.a.createElement('span', {className: 'rejt-collapsed-text', style: collapsed, onClick: this.handleCollapseMode}, '[...] ', data.length, ' ', data.length === 1 ? 'item' : 'items'), !isReadOnly && removeItemButton);
		}}, {key: 'renderNotCollapsed', value: function renderNotCollapsed() {
			let _this5 = this; let _this$state4 = this.state; let {name} = _this$state4; let {data} = _this$state4; let {keyPath} = _this$state4; let {deep} = _this$state4; let {addFormVisible} = _this$state4; let {nextDeep} = _this$state4; let _this$props3 = this.props; let {isCollapsed} = _this$props3; let {handleRemove} = _this$props3; let {onDeltaUpdate} = _this$props3; let {readOnly} = _this$props3; let {getStyle} = _this$props3; let {dataType} = _this$props3; let {addButtonElement} = _this$props3; let {cancelButtonElement} = _this$props3; let {editButtonElement} = _this$props3; let {inputElementGenerator} = _this$props3; let {textareaElementGenerator} = _this$props3; let {minusMenuElement} = _this$props3; let {plusMenuElement} = _this$props3; let {beforeRemoveAction} = _this$props3; let {beforeAddAction} = _this$props3; let {beforeUpdateAction} = _this$props3; let {logger} = _this$props3; let {onSubmitValueParser} = _this$props3; let _getStyle2 = getStyle(name, data, keyPath, deep, dataType); let {minus} = _getStyle2; let {plus} = _getStyle2; let {delimiter} = _getStyle2; let {ul} = _getStyle2; let {addForm} = _getStyle2; let isReadOnly = readOnly(name, data, keyPath, deep, dataType); let addItemButton = react_default.a.cloneElement(plusMenuElement, {onClick: this.handleAddMode, className: 'rejt-plus-menu', style: plus}); let removeItemButton = react_default.a.cloneElement(minusMenuElement, {onClick: handleRemove, className: 'rejt-minus-menu', style: minus}); return react_default.a.createElement('span', {className: 'rejt-not-collapsed'}, react_default.a.createElement('span', {className: 'rejt-not-collapsed-delimiter', style: delimiter}, '['), !addFormVisible && addItemButton, react_default.a.createElement('ul', {className: 'rejt-not-collapsed-list', style: ul}, data.map(((item, index) => react_default.a.createElement(components_JsonNode, {key: index, name: ''.concat(index), data: item, keyPath, deep: nextDeep, isCollapsed, handleRemove: _this5.handleRemoveItem(index), handleUpdateValue: _this5.handleEditValue, onUpdate: _this5.onChildUpdate, onDeltaUpdate, readOnly, getStyle, addButtonElement, cancelButtonElement, editButtonElement, inputElementGenerator, textareaElementGenerator, minusMenuElement, plusMenuElement, beforeRemoveAction, beforeAddAction, beforeUpdateAction, logger, onSubmitValueParser})))), !isReadOnly && addFormVisible && react_default.a.createElement('div', {className: 'rejt-add-form', style: addForm}, react_default.a.createElement(components_JsonAddValue, {handleAdd: this.handleAddValueAdd, handleCancel: this.handleAddValueCancel, onlyValue: !0, addButtonElement, cancelButtonElement, inputElementGenerator, keyPath, deep, onSubmitValueParser})), react_default.a.createElement('span', {className: 'rejt-not-collapsed-delimiter', style: delimiter}, ']'), !isReadOnly && removeItemButton);
		}}, {key: 'render', value: function render() {
			let _this$state5 = this.state; let {name} = _this$state5; let {collapsed} = _this$state5; let {data} = _this$state5; let {keyPath} = _this$state5; let {deep} = _this$state5; let _this$props4 = this.props; let {dataType} = _this$props4; let {getStyle} = _this$props4; let value = collapsed ? this.renderCollapsed() : this.renderNotCollapsed(); let style = getStyle(name, data, keyPath, deep, dataType); return react_default.a.createElement('div', {className: 'rejt-array-node'}, react_default.a.createElement('span', {onClick: this.handleCollapseMode}, react_default.a.createElement('span', {className: 'rejt-name', style: style.name}, name, ' :', ' ')), value);
		}}], [{key: 'getDerivedStateFromProps', value: function getDerivedStateFromProps(props, state) {
			return props.data !== state.data ? {data: props.data} : null;
		}}]), JsonArray;
	})(react.Component); JsonArray_JsonArray.displayName = 'JsonArray', JsonArray_JsonArray.propTypes = {data: prop_types_default.a.array.isRequired, name: prop_types_default.a.string.isRequired, isCollapsed: prop_types_default.a.func.isRequired, keyPath: prop_types_default.a.array, deep: prop_types_default.a.number, handleRemove: prop_types_default.a.func, onUpdate: prop_types_default.a.func.isRequired, onDeltaUpdate: prop_types_default.a.func.isRequired, readOnly: prop_types_default.a.func.isRequired, dataType: prop_types_default.a.string, getStyle: prop_types_default.a.func.isRequired, addButtonElement: prop_types_default.a.element, cancelButtonElement: prop_types_default.a.element, editButtonElement: prop_types_default.a.element, inputElementGenerator: prop_types_default.a.func.isRequired, textareaElementGenerator: prop_types_default.a.func.isRequired, minusMenuElement: prop_types_default.a.element, plusMenuElement: prop_types_default.a.element, beforeRemoveAction: prop_types_default.a.func, beforeAddAction: prop_types_default.a.func, beforeUpdateAction: prop_types_default.a.func, logger: prop_types_default.a.object.isRequired, onSubmitValueParser: prop_types_default.a.func.isRequired}, JsonArray_JsonArray.defaultProps = {keyPath: [], deep: 0, minusMenuElement: react_default.a.createElement('span', null, ' - '), plusMenuElement: react_default.a.createElement('span', null, ' + ')}; let components_JsonArray = JsonArray_JsonArray; function JsonFunctionValue_typeof(obj) {
		return (JsonFunctionValue_typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function _typeof(obj) {
			return typeof obj;
		} : function _typeof(obj) {
			return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
		})(obj);
	}

	function JsonFunctionValue_toConsumableArray(arr) {
		return (function JsonFunctionValue_arrayWithoutHoles(arr) {
			if (Array.isArray(arr)) {
				return JsonFunctionValue_arrayLikeToArray(arr);
			}
		})(arr) || (function JsonFunctionValue_iterableToArray(iter) {
			if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(iter)) {
				return Array.from(iter);
			}
		})(arr) || (function JsonFunctionValue_unsupportedIterableToArray(o, minLen) {
			if (!o) {
				return;
			}

			if (typeof o === 'string') {
				return JsonFunctionValue_arrayLikeToArray(o, minLen);
			}

			let n = Object.prototype.toString.call(o).slice(8, -1); n === 'Object' && o.constructor && (n = o.constructor.name); if (n === 'Map' || n === 'Set') {
				return Array.from(o);
			}

			if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
				return JsonFunctionValue_arrayLikeToArray(o, minLen);
			}
		})(arr) || (function JsonFunctionValue_nonIterableSpread() {
			throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
		})();
	}

	function JsonFunctionValue_arrayLikeToArray(arr, len) {
		(len == null || len > arr.length) && (len = arr.length); for (var i = 0, arr2 = new Array(len); i < len; i++) {
			arr2[i] = arr[i];
		}

		return arr2;
	}

	function JsonFunctionValue_defineProperties(target, props) {
		for (let i = 0; i < props.length; i++) {
			let descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 'value' in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
		}
	}

	function JsonFunctionValue_setPrototypeOf(o, p) {
		return (JsonFunctionValue_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
			return o.__proto__ = p, o;
		})(o, p);
	}

	function JsonFunctionValue_createSuper(Derived) {
		let hasNativeReflectConstruct = (function JsonFunctionValue_isNativeReflectConstruct() {
			if (typeof Reflect === 'undefined' || !Reflect.construct) {
				return !1;
			}

			if (Reflect.construct.sham) {
				return !1;
			}

			if (typeof Proxy === 'function') {
				return !0;
			}

			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (() => {}))), !0;
			} catch (e) {
				return !1;
			}
		})(); return function _createSuperInternal() {
			let result; let Super = JsonFunctionValue_getPrototypeOf(Derived); if (hasNativeReflectConstruct) {
				let NewTarget = JsonFunctionValue_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget);
			} else {
				result = Super.apply(this, arguments);
			}

			return JsonFunctionValue_possibleConstructorReturn(this, result);
		};
	}

	function JsonFunctionValue_possibleConstructorReturn(self, call) {
		return !call || JsonFunctionValue_typeof(call) !== 'object' && typeof call !== 'function' ? JsonFunctionValue_assertThisInitialized(self) : call;
	}

	function JsonFunctionValue_assertThisInitialized(self) {
		if (void 0 === self) {
			throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
		}

		return self;
	}

	function JsonFunctionValue_getPrototypeOf(o) {
		return (JsonFunctionValue_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
			return o.__proto__ || Object.getPrototypeOf(o);
		})(o);
	}

	let JsonFunctionValue_JsonFunctionValue = (function (_Component) {
		!(function JsonFunctionValue_inherits(subClass, superClass) {
			if (typeof superClass !== 'function' && superClass !== null) {
				throw new TypeError('Super expression must either be null or a function');
			}

			subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {value: subClass, writable: !0, configurable: !0}}), superClass && JsonFunctionValue_setPrototypeOf(subClass, superClass);
		})(JsonFunctionValue, _Component);

		let _super = JsonFunctionValue_createSuper(JsonFunctionValue); function JsonFunctionValue(props) {
			let _this; !(function JsonFunctionValue_classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError('Cannot call a class as a function');
				}
			})(this, JsonFunctionValue), _this = _super.call(this, props); let keyPath = [].concat(JsonFunctionValue_toConsumableArray(props.keyPath), [props.name]); return _this.state = {value: props.value, name: props.name, keyPath, deep: props.deep, editEnabled: !1, inputRef: null}, _this.handleEditMode = _this.handleEditMode.bind(JsonFunctionValue_assertThisInitialized(_this)), _this.refInput = _this.refInput.bind(JsonFunctionValue_assertThisInitialized(_this)), _this.handleCancelEdit = _this.handleCancelEdit.bind(JsonFunctionValue_assertThisInitialized(_this)), _this.handleEdit = _this.handleEdit.bind(JsonFunctionValue_assertThisInitialized(_this)), _this.onKeydown = _this.onKeydown.bind(JsonFunctionValue_assertThisInitialized(_this)), _this;
		}

		return (function JsonFunctionValue_createClass(Constructor, protoProps, staticProps) {
			return protoProps && JsonFunctionValue_defineProperties(Constructor.prototype, protoProps), staticProps && JsonFunctionValue_defineProperties(Constructor, staticProps), Constructor;
		})(JsonFunctionValue, [{key: 'componentDidUpdate', value: function componentDidUpdate() {
			let _this$state = this.state; let {editEnabled} = _this$state; let {inputRef} = _this$state; let {name} = _this$state; let {value} = _this$state; let {keyPath} = _this$state; let {deep} = _this$state; let _this$props = this.props; let readOnlyResult = (0, _this$props.readOnly)(name, value, keyPath, deep, _this$props.dataType); editEnabled && !readOnlyResult && typeof inputRef.focus === 'function' && inputRef.focus();
		}}, {key: 'componentDidMount', value: function componentDidMount() {
			document.addEventListener('keydown', this.onKeydown);
		}}, {key: 'componentWillUnmount', value: function componentWillUnmount() {
			document.removeEventListener('keydown', this.onKeydown);
		}}, {key: 'onKeydown', value: function onKeydown(event) {
			event.altKey || event.ctrlKey || event.metaKey || event.shiftKey || event.repeat || (event.code !== 'Enter' && event.key !== 'Enter' || (event.preventDefault(), this.handleEdit()), event.code !== 'Escape' && event.key !== 'Escape' || (event.preventDefault(), this.handleCancelEdit()));
		}}, {key: 'handleEdit', value: function handleEdit() {
			let _this2 = this; let _this$props2 = this.props; let {handleUpdateValue} = _this$props2; let {originalValue} = _this$props2; let {logger} = _this$props2; let {onSubmitValueParser} = _this$props2; let {keyPath} = _this$props2; let _this$state2 = this.state; let {inputRef} = _this$state2; let {name} = _this$state2; let {deep} = _this$state2; if (inputRef) {
				let newValue = onSubmitValueParser(!0, keyPath, deep, name, inputRef.value); handleUpdateValue({value: newValue, key: name}).then((() => {
					isComponentWillChange(originalValue, newValue) || _this2.handleCancelEdit();
				})).catch(logger.error);
			}
		}}, {key: 'handleEditMode', value: function handleEditMode() {
			this.setState({editEnabled: !0});
		}}, {key: 'refInput', value: function refInput(node) {
			this.state.inputRef = node;
		}}, {key: 'handleCancelEdit', value: function handleCancelEdit() {
			this.setState({editEnabled: !1});
		}}, {key: 'render', value: function render() {
			let _this$state3 = this.state; let {name} = _this$state3; let {value} = _this$state3; let {editEnabled} = _this$state3; let {keyPath} = _this$state3; let {deep} = _this$state3; let _this$props3 = this.props; let {handleRemove} = _this$props3; let {originalValue} = _this$props3; let {readOnly} = _this$props3; let {dataType} = _this$props3; let {getStyle} = _this$props3; let {editButtonElement} = _this$props3; let {cancelButtonElement} = _this$props3; let {textareaElementGenerator} = _this$props3; let {minusMenuElement} = _this$props3; let comeFromKeyPath = _this$props3.keyPath; let style = getStyle(name, originalValue, keyPath, deep, dataType); let result = null; let minusElement = null; let resultOnlyResult = readOnly(name, originalValue, keyPath, deep, dataType); if (editEnabled && !resultOnlyResult) {
				let textareaElement = textareaElementGenerator(inputUsageTypes_VALUE, comeFromKeyPath, deep, name, originalValue, dataType); let editButtonElementLayout = react_default.a.cloneElement(editButtonElement, {onClick: this.handleEdit}); let cancelButtonElementLayout = react_default.a.cloneElement(cancelButtonElement, {onClick: this.handleCancelEdit}); let textareaElementLayout = react_default.a.cloneElement(textareaElement, {ref: this.refInput, defaultValue: originalValue}); result = react_default.a.createElement('span', {className: 'rejt-edit-form', style: style.editForm}, textareaElementLayout, ' ', cancelButtonElementLayout, editButtonElementLayout), minusElement = null;
			} else {
				result = react_default.a.createElement('span', {className: 'rejt-value', style: style.value, onClick: resultOnlyResult ? null : this.handleEditMode}, value); let minusMenuLayout = react_default.a.cloneElement(minusMenuElement, {onClick: handleRemove, className: 'rejt-minus-menu', style: style.minus}); minusElement = resultOnlyResult ? null : minusMenuLayout;
			}

			return react_default.a.createElement('li', {className: 'rejt-function-value-node', style: style.li}, react_default.a.createElement('span', {className: 'rejt-name', style: style.name}, name, ' :', ' '), result, minusElement);
		}}], [{key: 'getDerivedStateFromProps', value: function getDerivedStateFromProps(props, state) {
			return props.value !== state.value ? {value: props.value} : null;
		}}]), JsonFunctionValue;
	})(react.Component); JsonFunctionValue_JsonFunctionValue.displayName = 'JsonFunctionValue', JsonFunctionValue_JsonFunctionValue.propTypes = {name: prop_types_default.a.string.isRequired, value: prop_types_default.a.any.isRequired, originalValue: prop_types_default.a.any, keyPath: prop_types_default.a.array, deep: prop_types_default.a.number, handleRemove: prop_types_default.a.func, handleUpdateValue: prop_types_default.a.func, readOnly: prop_types_default.a.func.isRequired, dataType: prop_types_default.a.string, getStyle: prop_types_default.a.func.isRequired, editButtonElement: prop_types_default.a.element, cancelButtonElement: prop_types_default.a.element, textareaElementGenerator: prop_types_default.a.func.isRequired, minusMenuElement: prop_types_default.a.element, logger: prop_types_default.a.object.isRequired, onSubmitValueParser: prop_types_default.a.func.isRequired}, JsonFunctionValue_JsonFunctionValue.defaultProps = {keyPath: [], deep: 0, handleUpdateValue: function handleUpdateValue() {}, editButtonElement: react_default.a.createElement('button', null, 'e'), cancelButtonElement: react_default.a.createElement('button', null, 'c'), minusMenuElement: react_default.a.createElement('span', null, ' - ')}; let components_JsonFunctionValue = JsonFunctionValue_JsonFunctionValue; let dataTypes_ERROR = 'Error'; let dataTypes_OBJECT = 'Object'; let dataTypes_ARRAY = 'Array'; let dataTypes_STRING = 'String'; let dataTypes_NUMBER = 'Number'; let dataTypes_BOOLEAN = 'Boolean'; let dataTypes_DATE = 'Date'; let dataTypes_NULL = 'Null'; let dataTypes_UNDEFINED = 'Undefined'; let dataTypes_FUNCTION = 'Function'; let dataTypes_SYMBOL = 'Symbol'; function JsonNode_typeof(obj) {
		return (JsonNode_typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function _typeof(obj) {
			return typeof obj;
		} : function _typeof(obj) {
			return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
		})(obj);
	}

	function JsonNode_defineProperties(target, props) {
		for (let i = 0; i < props.length; i++) {
			let descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 'value' in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
		}
	}

	function JsonNode_setPrototypeOf(o, p) {
		return (JsonNode_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
			return o.__proto__ = p, o;
		})(o, p);
	}

	function JsonNode_createSuper(Derived) {
		let hasNativeReflectConstruct = (function JsonNode_isNativeReflectConstruct() {
			if (typeof Reflect === 'undefined' || !Reflect.construct) {
				return !1;
			}

			if (Reflect.construct.sham) {
				return !1;
			}

			if (typeof Proxy === 'function') {
				return !0;
			}

			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (() => {}))), !0;
			} catch (e) {
				return !1;
			}
		})(); return function _createSuperInternal() {
			let result; let Super = JsonNode_getPrototypeOf(Derived); if (hasNativeReflectConstruct) {
				let NewTarget = JsonNode_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget);
			} else {
				result = Super.apply(this, arguments);
			}

			return JsonNode_possibleConstructorReturn(this, result);
		};
	}

	function JsonNode_possibleConstructorReturn(self, call) {
		return !call || JsonNode_typeof(call) !== 'object' && typeof call !== 'function' ? (function JsonNode_assertThisInitialized(self) {
			if (void 0 === self) {
				throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
			}

			return self;
		})(self) : call;
	}

	function JsonNode_getPrototypeOf(o) {
		return (JsonNode_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
			return o.__proto__ || Object.getPrototypeOf(o);
		})(o);
	}

	let JsonNode_JsonNode = (function (_Component) {
		!(function JsonNode_inherits(subClass, superClass) {
			if (typeof superClass !== 'function' && superClass !== null) {
				throw new TypeError('Super expression must either be null or a function');
			}

			subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {value: subClass, writable: !0, configurable: !0}}), superClass && JsonNode_setPrototypeOf(subClass, superClass);
		})(JsonNode, _Component);

		let _super = JsonNode_createSuper(JsonNode); function JsonNode(props) {
			let _this; return (function JsonNode_classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError('Cannot call a class as a function');
				}
			})(this, JsonNode), (_this = _super.call(this, props)).state = {data: props.data, name: props.name, keyPath: props.keyPath, deep: props.deep}, _this;
		}

		return (function JsonNode_createClass(Constructor, protoProps, staticProps) {
			return protoProps && JsonNode_defineProperties(Constructor.prototype, protoProps), staticProps && JsonNode_defineProperties(Constructor, staticProps), Constructor;
		})(JsonNode, [{key: 'render', value: function render() {
			let _this$state = this.state; let {data} = _this$state; let {name} = _this$state; let {keyPath} = _this$state; let {deep} = _this$state; let _this$props = this.props; let {isCollapsed} = _this$props; let {handleRemove} = _this$props; let {handleUpdateValue} = _this$props; let {onUpdate} = _this$props; let {onDeltaUpdate} = _this$props; let {readOnly} = _this$props; let {getStyle} = _this$props; let {addButtonElement} = _this$props; let {cancelButtonElement} = _this$props; let {editButtonElement} = _this$props; let {inputElementGenerator} = _this$props; let {textareaElementGenerator} = _this$props; let {minusMenuElement} = _this$props; let {plusMenuElement} = _this$props; let {beforeRemoveAction} = _this$props; let {beforeAddAction} = _this$props; let {beforeUpdateAction} = _this$props; let {logger} = _this$props; let {onSubmitValueParser} = _this$props; let readOnlyTrue = function readOnlyTrue() {
				return !0;
			};

			let dataType = getObjectType(data); switch (dataType) {
				case dataTypes_ERROR: return react_default.a.createElement(components_JsonObject, {data, name, isCollapsed, keyPath, deep, handleRemove, onUpdate, onDeltaUpdate, readOnly: readOnlyTrue, dataType, getStyle, addButtonElement, cancelButtonElement, editButtonElement, inputElementGenerator, textareaElementGenerator, minusMenuElement, plusMenuElement, beforeRemoveAction, beforeAddAction, beforeUpdateAction, logger, onSubmitValueParser}); case dataTypes_OBJECT: return react_default.a.createElement(components_JsonObject, {data, name, isCollapsed, keyPath, deep, handleRemove, onUpdate, onDeltaUpdate, readOnly, dataType, getStyle, addButtonElement, cancelButtonElement, editButtonElement, inputElementGenerator, textareaElementGenerator, minusMenuElement, plusMenuElement, beforeRemoveAction, beforeAddAction, beforeUpdateAction, logger, onSubmitValueParser}); case dataTypes_ARRAY: return react_default.a.createElement(components_JsonArray, {data, name, isCollapsed, keyPath, deep, handleRemove, onUpdate, onDeltaUpdate, readOnly, dataType, getStyle, addButtonElement, cancelButtonElement, editButtonElement, inputElementGenerator, textareaElementGenerator, minusMenuElement, plusMenuElement, beforeRemoveAction, beforeAddAction, beforeUpdateAction, logger, onSubmitValueParser}); case dataTypes_STRING: return react_default.a.createElement(components_JsonValue, {name, value: '"'.concat(data, '"'), originalValue: data, keyPath, deep, handleRemove, handleUpdateValue, readOnly, dataType, getStyle, cancelButtonElement, editButtonElement, inputElementGenerator, minusMenuElement, logger, onSubmitValueParser}); case dataTypes_NUMBER: return react_default.a.createElement(components_JsonValue, {name, value: data, originalValue: data, keyPath, deep, handleRemove, handleUpdateValue, readOnly, dataType, getStyle, cancelButtonElement, editButtonElement, inputElementGenerator, minusMenuElement, logger, onSubmitValueParser}); case dataTypes_BOOLEAN: return react_default.a.createElement(components_JsonValue, {name, value: data ? 'true' : 'false', originalValue: data, keyPath, deep, handleRemove, handleUpdateValue, readOnly, dataType, getStyle, cancelButtonElement, editButtonElement, inputElementGenerator, minusMenuElement, logger, onSubmitValueParser}); case dataTypes_DATE: return react_default.a.createElement(components_JsonValue, {name, value: data.toISOString(), originalValue: data, keyPath, deep, handleRemove, handleUpdateValue, readOnly: readOnlyTrue, dataType, getStyle, cancelButtonElement, editButtonElement, inputElementGenerator, minusMenuElement, logger, onSubmitValueParser}); case dataTypes_NULL: return react_default.a.createElement(components_JsonValue, {name, value: 'null', originalValue: 'null', keyPath, deep, handleRemove, handleUpdateValue, readOnly, dataType, getStyle, cancelButtonElement, editButtonElement, inputElementGenerator, minusMenuElement, logger, onSubmitValueParser}); case dataTypes_UNDEFINED: return react_default.a.createElement(components_JsonValue, {name, value: 'undefined', originalValue: 'undefined', keyPath, deep, handleRemove, handleUpdateValue, readOnly, dataType, getStyle, cancelButtonElement, editButtonElement, inputElementGenerator, minusMenuElement, logger, onSubmitValueParser}); case dataTypes_FUNCTION: return react_default.a.createElement(components_JsonFunctionValue, {name, value: data.toString(), originalValue: data, keyPath, deep, handleRemove, handleUpdateValue, readOnly, dataType, getStyle, cancelButtonElement, editButtonElement, textareaElementGenerator, minusMenuElement, logger, onSubmitValueParser}); case dataTypes_SYMBOL: return react_default.a.createElement(components_JsonValue, {name, value: data.toString(), originalValue: data, keyPath, deep, handleRemove, handleUpdateValue, readOnly: readOnlyTrue, dataType, getStyle, cancelButtonElement, editButtonElement, inputElementGenerator, minusMenuElement, logger, onSubmitValueParser}); default: return null;
			}
		}}], [{key: 'getDerivedStateFromProps', value: function getDerivedStateFromProps(props, state) {
			return props.data !== state.data ? {data: props.data} : null;
		}}]), JsonNode;
	})(react.Component); JsonNode_JsonNode.displayName = 'JsonNode', JsonNode_JsonNode.propTypes = {name: prop_types_default.a.string.isRequired, data: prop_types_default.a.any, isCollapsed: prop_types_default.a.func.isRequired, keyPath: prop_types_default.a.array, deep: prop_types_default.a.number, handleRemove: prop_types_default.a.func, handleUpdateValue: prop_types_default.a.func, onUpdate: prop_types_default.a.func.isRequired, onDeltaUpdate: prop_types_default.a.func.isRequired, readOnly: prop_types_default.a.func.isRequired, getStyle: prop_types_default.a.func.isRequired, addButtonElement: prop_types_default.a.element, cancelButtonElement: prop_types_default.a.element, editButtonElement: prop_types_default.a.element, inputElementGenerator: prop_types_default.a.func.isRequired, textareaElementGenerator: prop_types_default.a.func.isRequired, minusMenuElement: prop_types_default.a.element, plusMenuElement: prop_types_default.a.element, beforeRemoveAction: prop_types_default.a.func, beforeAddAction: prop_types_default.a.func, beforeUpdateAction: prop_types_default.a.func, logger: prop_types_default.a.object.isRequired, onSubmitValueParser: prop_types_default.a.func.isRequired}, JsonNode_JsonNode.defaultProps = {keyPath: [], deep: 0}; var components_JsonNode = JsonNode_JsonNode; let object = {minus: {color: 'red'}, plus: {color: 'green'}, collapsed: {color: 'grey'}, delimiter: {}, ul: {padding: '0px', margin: '0 0 0 25px', listStyle: 'none'}, name: {color: '#2287CD'}, addForm: {}}; let array = {minus: {color: 'red'}, plus: {color: 'green'}, collapsed: {color: 'grey'}, delimiter: {}, ul: {padding: '0px', margin: '0 0 0 25px', listStyle: 'none'}, name: {color: '#2287CD'}, addForm: {}}; let styles_value = {minus: {color: 'red'}, editForm: {}, value: {color: '#7bba3d'}, li: {minHeight: '22px', lineHeight: '22px', outline: '0px'}, name: {color: '#2287CD'}}; let parse = __webpack_require__(448); function react_editable_json_tree_typeof(obj) {
		return (react_editable_json_tree_typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function _typeof(obj) {
			return typeof obj;
		} : function _typeof(obj) {
			return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
		})(obj);
	}

	function react_editable_json_tree_defineProperties(target, props) {
		for (let i = 0; i < props.length; i++) {
			let descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 'value' in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
		}
	}

	function react_editable_json_tree_setPrototypeOf(o, p) {
		return (react_editable_json_tree_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
			return o.__proto__ = p, o;
		})(o, p);
	}

	function react_editable_json_tree_createSuper(Derived) {
		let hasNativeReflectConstruct = (function react_editable_json_tree_isNativeReflectConstruct() {
			if (typeof Reflect === 'undefined' || !Reflect.construct) {
				return !1;
			}

			if (Reflect.construct.sham) {
				return !1;
			}

			if (typeof Proxy === 'function') {
				return !0;
			}

			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (() => {}))), !0;
			} catch (e) {
				return !1;
			}
		})(); return function _createSuperInternal() {
			let result; let Super = react_editable_json_tree_getPrototypeOf(Derived); if (hasNativeReflectConstruct) {
				let NewTarget = react_editable_json_tree_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget);
			} else {
				result = Super.apply(this, arguments);
			}

			return react_editable_json_tree_possibleConstructorReturn(this, result);
		};
	}

	function react_editable_json_tree_possibleConstructorReturn(self, call) {
		return !call || react_editable_json_tree_typeof(call) !== 'object' && typeof call !== 'function' ? react_editable_json_tree_assertThisInitialized(self) : call;
	}

	function react_editable_json_tree_assertThisInitialized(self) {
		if (void 0 === self) {
			throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
		}

		return self;
	}

	function react_editable_json_tree_getPrototypeOf(o) {
		return (react_editable_json_tree_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
			return o.__proto__ || Object.getPrototypeOf(o);
		})(o);
	}

	let react_editable_json_tree_JsonTree = (function (_Component) {
		!(function react_editable_json_tree_inherits(subClass, superClass) {
			if (typeof superClass !== 'function' && superClass !== null) {
				throw new TypeError('Super expression must either be null or a function');
			}

			subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {value: subClass, writable: !0, configurable: !0}}), superClass && react_editable_json_tree_setPrototypeOf(subClass, superClass);
		})(JsonTree, _Component);

		let _super = react_editable_json_tree_createSuper(JsonTree); function JsonTree(props) {
			let _this; return (function react_editable_json_tree_classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError('Cannot call a class as a function');
				}
			})(this, JsonTree), (_this = _super.call(this, props)).state = {data: props.data, rootName: props.rootName}, _this.onUpdate = _this.onUpdate.bind(react_editable_json_tree_assertThisInitialized(_this)), _this.removeRoot = _this.removeRoot.bind(react_editable_json_tree_assertThisInitialized(_this)), _this;
		}

		return (function react_editable_json_tree_createClass(Constructor, protoProps, staticProps) {
			return protoProps && react_editable_json_tree_defineProperties(Constructor.prototype, protoProps), staticProps && react_editable_json_tree_defineProperties(Constructor, staticProps), Constructor;
		})(JsonTree, [{key: 'onUpdate', value: function onUpdate(key, data) {
			this.setState({data}), this.props.onFullyUpdate(data);
		}}, {key: 'removeRoot', value: function removeRoot() {
			this.onUpdate(null, null);
		}}, {key: 'render', value: function render() {
			let _this$state = this.state; let {data} = _this$state; let {rootName} = _this$state; let _this$props = this.props; let {isCollapsed} = _this$props; let {onDeltaUpdate} = _this$props; let {readOnly} = _this$props; let {getStyle} = _this$props; let {addButtonElement} = _this$props; let {cancelButtonElement} = _this$props; let {editButtonElement} = _this$props; let {inputElement} = _this$props; let {textareaElement} = _this$props; let {minusMenuElement} = _this$props; let {plusMenuElement} = _this$props; let {beforeRemoveAction} = _this$props; let {beforeAddAction} = _this$props; let {beforeUpdateAction} = _this$props; let {logger} = _this$props; let {onSubmitValueParser} = _this$props; let {fallback} = _this$props; let dataType = getObjectType(data); let readOnlyFunction = readOnly; getObjectType(readOnly) === 'Boolean' && (readOnlyFunction = function readOnlyFunction() {
				return readOnly;
			}); let inputElementFunction = inputElement; inputElement && getObjectType(inputElement) !== 'Function' && (inputElementFunction = function inputElementFunction() {
				return inputElement;
			}); let textareaElementFunction = textareaElement; return textareaElement && getObjectType(textareaElement) !== 'Function' && (textareaElementFunction = function textareaElementFunction() {
				return textareaElement;
			}), dataType === 'Object' || dataType === 'Array' ? react_default.a.createElement('div', {className: 'rejt-tree'}, react_default.a.createElement(components_JsonNode, {data, name: rootName, collapsed: !1, deep: -1, isCollapsed, onUpdate: this.onUpdate, onDeltaUpdate, readOnly: readOnlyFunction, getStyle, addButtonElement, cancelButtonElement, editButtonElement, inputElementGenerator: inputElementFunction, textareaElementGenerator: textareaElementFunction, minusMenuElement, plusMenuElement, handleRemove: this.removeRoot, beforeRemoveAction, beforeAddAction, beforeUpdateAction, logger, onSubmitValueParser})) : fallback;
		}}], [{key: 'getDerivedStateFromProps', value: function getDerivedStateFromProps(props, state) {
			return props.data !== state.data || props.rootName !== state.rootName ? {data: props.data, rootName: props.rootName} : null;
		}}]), JsonTree;
	})(react.Component); react_editable_json_tree_JsonTree.displayName = 'JsonTree', react_editable_json_tree_JsonTree.propTypes = {data: prop_types_default.a.any.isRequired, rootName: prop_types_default.a.string, isCollapsed: prop_types_default.a.func, onFullyUpdate: prop_types_default.a.func, onDeltaUpdate: prop_types_default.a.func, readOnly: prop_types_default.a.oneOfType([prop_types_default.a.bool, prop_types_default.a.func]), getStyle: prop_types_default.a.func, addButtonElement: prop_types_default.a.element, cancelButtonElement: prop_types_default.a.element, editButtonElement: prop_types_default.a.element, inputElement: prop_types_default.a.oneOfType([prop_types_default.a.element, prop_types_default.a.func]), textareaElement: prop_types_default.a.oneOfType([prop_types_default.a.element, prop_types_default.a.func]), minusMenuElement: prop_types_default.a.element, plusMenuElement: prop_types_default.a.element, beforeRemoveAction: prop_types_default.a.func, beforeAddAction: prop_types_default.a.func, beforeUpdateAction: prop_types_default.a.func, logger: prop_types_default.a.object, onSubmitValueParser: prop_types_default.a.func}, react_editable_json_tree_JsonTree.defaultProps = {rootName: 'root', isCollapsed: function isCollapsed(keyPath, deep) {
		return deep !== -1;
	}, getStyle: function getStyle(keyName, data, keyPath, deep, dataType) {
		switch (dataType) {
			case 'Object': case 'Error': return object; case 'Array': return array; default: return styles_value;
		}
	}, readOnly: function readOnly(keyName, data, keyPath, deep, dataType) {
		return !1;
	}, onFullyUpdate: function onFullyUpdate(data) {}, onDeltaUpdate: function onDeltaUpdate(_ref) {
		_ref.type, _ref.keyPath, _ref.deep, _ref.key, _ref.newValue, _ref.oldValue;
	}, beforeRemoveAction: function beforeRemoveAction(key, keyPath, deep, oldValue) {
		return new Promise((resolve => resolve()));
	}, beforeAddAction: function beforeAddAction(key, keyPath, deep, newValue) {
		return new Promise((resolve => resolve()));
	}, beforeUpdateAction: function beforeUpdateAction(key, keyPath, deep, oldValue, newValue) {
		return new Promise((resolve => resolve()));
	}, logger: {error: function error() {}}, onSubmitValueParser: function onSubmitValueParser(isEditMode, keyPath, deep, name, rawValue) {
		return Object(parse.a)(rawValue);
	}, inputElement: function inputElement(usage, keyPath, deep, keyName, data, dataType) {
		return react_default.a.createElement('input', null);
	}, textareaElement: function textareaElement(usage, keyPath, deep, keyName, data, dataType) {
		return react_default.a.createElement('textarea', null);
	}, fallback: null}; let helpers = __webpack_require__(39); let esm_form = __webpack_require__(55); let icon = __webpack_require__(60); let bar_button = __webpack_require__(211); function _slicedToArray(arr, i) {
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
		})(arr, i) || (function Object_unsupportedIterableToArray(o, minLen) {
			if (!o) {
				return;
			}

			if (typeof o === 'string') {
				return Object_arrayLikeToArray(o, minLen);
			}

			let n = Object.prototype.toString.call(o).slice(8, -1); n === 'Object' && o.constructor && (n = o.constructor.name); if (n === 'Map' || n === 'Set') {
				return Array.from(o);
			}

			if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
				return Object_arrayLikeToArray(o, minLen);
			}
		})(arr, i) || (function _nonIterableRest() {
			throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
		})();
	}

	function Object_arrayLikeToArray(arr, len) {
		(len == null || len > arr.length) && (len = arr.length); for (var i = 0, arr2 = new Array(len); i < len; i++) {
			arr2[i] = arr[i];
		}

		return arr2;
	}

	let globalWindow = window_default.a.window; let Wrapper = esm.styled.div((_ref => {
		let {theme} = _ref; return {position: 'relative', display: 'flex', '.rejt-tree': {marginLeft: '1rem', fontSize: '13px'}, '.rejt-value-node, .rejt-object-node > .rejt-collapsed, .rejt-array-node > .rejt-collapsed, .rejt-object-node > .rejt-not-collapsed, .rejt-array-node > .rejt-not-collapsed': {'& > svg': {opacity: 0, transition: 'opacity 0.2s'}}, '.rejt-value-node:hover, .rejt-object-node:hover > .rejt-collapsed, .rejt-array-node:hover > .rejt-collapsed, .rejt-object-node:hover > .rejt-not-collapsed, .rejt-array-node:hover > .rejt-not-collapsed': {'& > svg': {opacity: 1}}, '.rejt-edit-form button': {display: 'none'}, '.rejt-add-form': {marginLeft: 10}, '.rejt-add-value-node': {display: 'inline-flex', alignItems: 'center'}, '.rejt-name': {lineHeight: '22px'}, '.rejt-not-collapsed-delimiter': {lineHeight: '22px'}, '.rejt-plus-menu': {marginLeft: 5}, '.rejt-object-node > span > *': {position: 'relative', zIndex: 2}, '.rejt-object-node, .rejt-array-node': {position: 'relative'}, '.rejt-object-node > span:first-of-type::after, .rejt-array-node > span:first-of-type::after, .rejt-collapsed::before, .rejt-not-collapsed::before': {content: '""', position: 'absolute', top: 0, display: 'block', width: '100%', marginLeft: '-1rem', padding: '0 4px 0 1rem', height: 22}, '.rejt-collapsed::before, .rejt-not-collapsed::before': {zIndex: 1, background: 'transparent', borderRadius: 4, transition: 'background 0.2s', pointerEvents: 'none', opacity: 0.1}, '.rejt-object-node:hover, .rejt-array-node:hover': {'& > .rejt-collapsed::before, & > .rejt-not-collapsed::before': {background: theme.color.secondary}}, '.rejt-collapsed::after, .rejt-not-collapsed::after': {content: '""', position: 'absolute', display: 'inline-block', pointerEvents: 'none', width: 0, height: 0}, '.rejt-collapsed::after': {left: -8, top: 8, borderTop: '3px solid transparent', borderBottom: '3px solid transparent', borderLeft: '3px solid rgba(153,153,153,0.6)'}, '.rejt-not-collapsed::after': {left: -10, top: 10, borderTop: '3px solid rgba(153,153,153,0.6)', borderLeft: '3px solid transparent', borderRight: '3px solid transparent'}, '.rejt-value': {display: 'inline-block', border: '1px solid transparent', borderRadius: 4, margin: '1px 0', padding: '0 4px', cursor: 'text', color: theme.color.defaultText}, '.rejt-value-node:hover > .rejt-value': {background: theme.background.app, borderColor: theme.color.border}};
	})); let Button = esm.styled.button((_ref2 => {
		let {theme} = _ref2; let
			{primary} = _ref2; return {border: 0, height: 20, margin: 1, borderRadius: 4, background: primary ? theme.color.secondary : 'transparent', color: primary ? theme.color.lightest : theme.color.dark, fontWeight: primary ? 'bold' : 'normal', cursor: 'pointer', order: primary ? 'initial' : 9};
	})); let ActionIcon = Object(esm.styled)(icon.a)((_ref3 => {
		let {theme} = _ref3; let {icon} = _ref3; let
			{disabled} = _ref3; return {display: 'inline-block', verticalAlign: 'middle', width: 15, height: 15, padding: 3, marginLeft: 5, cursor: disabled ? 'not-allowed' : 'pointer', color: theme.color.mediumdark, '&:hover': disabled ? {} : {color: icon === 'subtract' ? theme.color.negative : theme.color.ancillary}, 'svg + &': {marginLeft: 0}};
	})); let Input = esm.styled.input((_ref4 => {
		let {theme} = _ref4; let
			{placeholder} = _ref4; return {outline: 0, margin: placeholder ? 1 : '1px 0', padding: '3px 4px', color: theme.color.defaultText, background: theme.background.app, border: '1px solid '.concat(theme.color.border), borderRadius: 4, lineHeight: '14px', width: placeholder === 'Key' ? 80 : 120, '&:focus': {border: '1px solid '.concat(theme.color.secondary)}};
	})); let RawButton = Object(esm.styled)(bar_button.a)((_ref5 => {
		let {theme} = _ref5; return {position: 'absolute', zIndex: 2, top: 2, right: 2, height: 21, padding: '0 3px', background: theme.background.bar, border: '1px solid '.concat(theme.color.border), borderRadius: 3, color: theme.color.mediumdark, fontSize: '9px', fontWeight: 'bold', span: {marginLeft: 3, marginTop: 1}};
	})); let RawInput = Object(esm.styled)(esm_form.a.Textarea)((_ref6 => {
		let {theme} = _ref6; return {flex: 1, padding: '7px 6px', fontFamily: theme.typography.fonts.mono, fontSize: '12px', lineHeight: '18px', '&::placeholder': {fontFamily: theme.typography.fonts.base, fontSize: '13px'}, '&:placeholder-shown': {padding: '7px 10px'}};
	})); let ENTER_EVENT = {bubbles: !0, cancelable: !0, key: 'Enter', code: 'Enter', keyCode: 13}; let dispatchEnterKey = function dispatchEnterKey(event) {
		event.currentTarget.dispatchEvent(new globalWindow.KeyboardEvent('keydown', ENTER_EVENT));
	};

	let selectValue = function selectValue(event) {
		event.currentTarget.select();
	};

	let getCustomStyleFunction = function getCustomStyleFunction(theme) {
		return function () {
			return {name: {color: theme.color.secondary}, collapsed: {color: theme.color.dark}, ul: {listStyle: 'none', margin: '0 0 0 1rem', padding: 0}, li: {outline: 0}};
		};
	};

	var Object_ObjectControl = function ObjectControl(_ref7) {
		let {name} = _ref7; let {value} = _ref7; let {onChange} = _ref7; let theme = Object(emotion_theming_browser_esm.b)(); let data = Object(react.useMemo)((() => value && cloneDeep_default()(value)), [value]); let hasData = data != null; let _useState2 = _slicedToArray(Object(react.useState)(!hasData), 2); let showRaw = _useState2[0]; let setShowRaw = _useState2[1]; let _useState4 = _slicedToArray(Object(react.useState)(null), 2); let parseError = _useState4[0]; let setParseError = _useState4[1]; let updateRaw = Object(react.useCallback)((raw => {
			try {
				raw && onChange(JSON.parse(raw)), setParseError(void 0);
			} catch (e) {
				setParseError(e);
			}
		}), [onChange]); let _useState6 = _slicedToArray(Object(react.useState)(!1), 2); let forceVisible = _useState6[0]; let setForceVisible = _useState6[1]; let onForceVisible = Object(react.useCallback)((() => {
			onChange({}), setForceVisible(!0);
		}), [setForceVisible]); let
			htmlElRef = Object(react.useRef)(null); if (Object(react.useEffect)((() => {
			forceVisible && htmlElRef.current && htmlElRef.current.select();
		}), [forceVisible]), !hasData) {
			return react_default.a.createElement(esm_form.a.Button, {onClick: onForceVisible}, 'Set object');
		}

		let rawJSONForm = react_default.a.createElement(RawInput, {ref: htmlElRef, id: Object(helpers.a)(name), name, defaultValue: value === null ? '' : JSON.stringify(value, null, 2), onBlur: function onBlur(event) {
			return updateRaw(event.target.value);
		}, placeholder: 'Edit JSON string...', autoFocus: forceVisible, valid: parseError ? 'error' : null}); return react_default.a.createElement(Wrapper, null, ['Object', 'Array'].includes(getObjectType(data)) && react_default.a.createElement(RawButton, {onClick: function onClick() {
			return setShowRaw((v => !v));
		}}, react_default.a.createElement(icon.a, {icon: showRaw ? 'eyeclose' : 'eye'}), react_default.a.createElement('span', null, 'RAW')), showRaw ? rawJSONForm : react_default.a.createElement(react_editable_json_tree_JsonTree, {data, rootName: name, onFullyUpdate: onChange, getStyle: getCustomStyleFunction(theme), cancelButtonElement: react_default.a.createElement(Button, {type: 'button'}, 'Cancel'), editButtonElement: react_default.a.createElement(Button, {type: 'submit'}, 'Save'), addButtonElement: react_default.a.createElement(Button, {type: 'submit', primary: !0}, 'Save'), plusMenuElement: react_default.a.createElement(ActionIcon, {icon: 'add'}), minusMenuElement: react_default.a.createElement(ActionIcon, {icon: 'subtract'}), inputElement: function inputElement(_, __, ___, key) {
			return key ? react_default.a.createElement(Input, {onFocus: selectValue, onBlur: dispatchEnterKey}) : react_default.a.createElement(Input, null);
		}, fallback: rawJSONForm}));
	};

	Object_ObjectControl.displayName = 'ObjectControl';
}, 428(module, __webpack_exports__, __webpack_require__) {
	'use strict'; __webpack_require__(15); let v4 = __webpack_require__(452); let v4_default = __webpack_require__.n(v4); let esm = __webpack_require__(119); let constants = __webpack_require__(76); let config = {depth: 10, clearOnStoryChange: !0, limit: 50}; function action(name) {
		let options = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; let actionOptions = {...config, ...options}; let handler = function actionHandler() {
			for (var channel = esm.a.getChannel(), id = v4_default()(), minDepth = 5, _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			let normalizedArgs = args.length > 1 ? args : args[0]; let actionDisplayToEmit = {id, count: 0, data: {name, args: normalizedArgs}, options: {...actionOptions, depth: minDepth + (actionOptions.depth || 3), allowFunction: actionOptions.allowFunction || !1}}; channel.emit(constants.b, actionDisplayToEmit);
		};

		return handler;
	}

	__webpack_require__(38), __webpack_require__(23), __webpack_require__(4), __webpack_require__(9), __webpack_require__(5), __webpack_require__(13), __webpack_require__(6), __webpack_require__(7), __webpack_require__(10), __webpack_require__(16), __webpack_require__(14), __webpack_require__(17); function _slicedToArray(arr, i) {
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

	let actions_actions = function actions() {
		for (var options = config, _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		let names = args; if (names.length === 1 && Array.isArray(names[0])) {
			let _names = names; let _names2 = _slicedToArray(_names, 1); names = _names2[0];
		}

		names.length !== 1 && typeof names[names.length - 1] !== 'string' && (options = {...config, ...names.pop()}); let namesObject = names[0]; names.length === 1 && typeof namesObject !== 'string' || (namesObject = {}, names.forEach((name => {
			namesObject[name] = name;
		}))); let actionsObject = {}; return Object.keys(namesObject).forEach((name => {
			actionsObject[name] = action(namesObject[name], options);
		})), actionsObject;
	};

	let browser = (__webpack_require__(50), __webpack_require__(61)); let browser_default = __webpack_require__.n(browser); let dist = __webpack_require__(33); let dist_default = __webpack_require__.n(dist); browser_default()((() => {}), 'decorate.* is no longer supported as of Storybook 6.0.'), __webpack_require__(22), __webpack_require__(43), __webpack_require__(40), __webpack_require__(26), __webpack_require__(18); let global_window = __webpack_require__(8); let window_default = __webpack_require__.n(global_window); let dist_esm = (__webpack_require__(850), __webpack_require__(188), __webpack_require__(52), __webpack_require__(82), __webpack_require__(25)); let core_events_dist_esm = __webpack_require__(20); let globalWindow = window_default.a.window; let invalidHooksError = (core_events_dist_esm.STORY_RENDERED, core_events_dist_esm.DOCS_RENDERED, function invalidHooksError() {
		return new Error('Storybook preview hooks can only be called inside decorators and story functions.');
	}); function getHooksContextOrNull() {
		return globalWindow.STORYBOOK_HOOKS_CONTEXT || null;
	}

	function getHooksContextOrThrow() {
		let hooks = getHooksContextOrNull(); if (hooks == null) {
			throw invalidHooksError();
		}

		return hooks;
	}

	function useMemoLike(name, nextCreate, deps) {
		return (function useHook(name, callback, deps) {
			let hooks = getHooksContextOrThrow(); if (hooks.currentPhase === 'MOUNT') {
				deps == null || Array.isArray(deps) || dist_esm.a.warn(''.concat(name, ' received a final argument that is not an array (instead, received ').concat(deps, '). When specified, the final argument must be an array.')); let _hook = {name, deps}; return hooks.currentHooks.push(_hook), callback(_hook), _hook;
			}

			if (hooks.currentPhase === 'UPDATE') {
				let _hook2 = hooks.getNextHook(); if (_hook2 == null) {
					throw new Error('Rendered more hooks than during the previous render.');
				}

				return _hook2.name !== name && dist_esm.a.warn('Storybook has detected a change in the order of Hooks'.concat(hooks.currentDecoratorName ? ' called by '.concat(hooks.currentDecoratorName) : '', '. This will lead to bugs and errors if not fixed.')), deps != null && _hook2.deps == null && dist_esm.a.warn(''.concat(name, ' received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.')), deps != null && _hook2.deps != null && deps.length !== _hook2.deps.length && dist_esm.a.warn('The final argument passed to '.concat(name, ' changed size between renders. The order and size of this array must remain constant.\nPrevious: ').concat(_hook2.deps, '\nIncoming: ').concat(deps)), deps != null && _hook2.deps != null && (function areDepsEqual(deps, nextDeps) {
					return deps.length === nextDeps.length && deps.every(((dep, i) => dep === nextDeps[i]));
				})(deps, _hook2.deps) || (callback(_hook2), _hook2.deps = deps), _hook2;
			}

			throw invalidHooksError();
		})(name, (hook => {
			hook.memoizedState = nextCreate();
		}), deps).memoizedState;
	}

	function useEffect(create, deps) {
		let hooks = getHooksContextOrThrow(); let effect = useMemoLike('useEffect', (() => ({create})), deps); hooks.currentEffects.includes(effect) || hooks.currentEffects.push(effect);
	}

	let withActions_templateObject; function withActions_toConsumableArray(arr) {
		return (function withActions_arrayWithoutHoles(arr) {
			if (Array.isArray(arr)) {
				return withActions_arrayLikeToArray(arr);
			}
		})(arr) || (function withActions_iterableToArray(iter) {
			if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(iter)) {
				return Array.from(iter);
			}
		})(arr) || withActions_unsupportedIterableToArray(arr) || (function withActions_nonIterableSpread() {
			throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
		})();
	}

	function withActions_slicedToArray(arr, i) {
		return (function withActions_arrayWithHoles(arr) {
			if (Array.isArray(arr)) {
				return arr;
			}
		})(arr) || (function withActions_iterableToArrayLimit(arr, i) {
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
		})(arr, i) || withActions_unsupportedIterableToArray(arr, i) || (function withActions_nonIterableRest() {
			throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
		})();
	}

	function withActions_unsupportedIterableToArray(o, minLen) {
		if (o) {
			if (typeof o === 'string') {
				return withActions_arrayLikeToArray(o, minLen);
			}

			let n = Object.prototype.toString.call(o).slice(8, -1); return n === 'Object' && o.constructor && (n = o.constructor.name), n === 'Map' || n === 'Set' ? Array.from(o) : n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? withActions_arrayLikeToArray(o, minLen) : void 0;
		}
	}

	function withActions_arrayLikeToArray(arr, len) {
		(len == null || len > arr.length) && (len = arr.length); for (var i = 0, arr2 = new Array(len); i < len; i++) {
			arr2[i] = arr[i];
		}

		return arr2;
	}

	let withActions_document = window_default.a.document; let {Element} = window_default.a; let delegateEventSplitter = /^(\S+)\s*(.*)$/; let matchesMethod = Element != null && !Element.prototype.matches ? 'msMatchesSelector' : 'matches'; let root = withActions_document && withActions_document.getElementById('root'); let hasMatchInAncestry = function hasMatchInAncestry(element, selector) {
		if (element[matchesMethod](selector)) {
			return !0;
		}

		let parent = element.parentElement; return Boolean(parent) && hasMatchInAncestry(parent, selector);
	};

	let createHandlers = function createHandlers(actionsFn) {
		for (var _len = arguments.length, handles = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
			handles[_key - 1] = arguments[_key];
		}

		let actionsObject = actionsFn.apply(void 0, handles); return Object.entries(actionsObject).map((_ref => {
			let _ref2 = withActions_slicedToArray(_ref, 2); let key = _ref2[0]; let action = _ref2[1]; let _key$match2 = withActions_slicedToArray(key.match(delegateEventSplitter), 3); let eventName = (_key$match2[0], _key$match2[1]); let selector = _key$match2[2]; return {eventName, handler: function handler(e) {
				selector && !hasMatchInAncestry(e.target, selector) || action(e);
			}};
		}));
	};

	let applyEventHandlers = browser_default()((function (actionsFn) {
		for (var _len2 = arguments.length, handles = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
			handles[_key2 - 1] = arguments[_key2];
		}

		useEffect((() => {
			if (root != null) {
				let handlers = createHandlers.apply(void 0, [actionsFn].concat(handles)); return handlers.forEach((_ref3 => {
					let {eventName} = _ref3; let
						{handler} = _ref3; return root.addEventListener(eventName, handler);
				})), function () {
					return handlers.forEach((_ref4 => {
						let {eventName} = _ref4; let
							{handler} = _ref4; return root.removeEventListener(eventName, handler);
					}));
				};
			}
		}), [root, actionsFn, handles]);
	}), dist_default()(withActions_templateObject || (withActions_templateObject = (function withActions_taggedTemplateLiteral(strings, raw) {
		return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, {raw: {value: Object.freeze(raw)}}));
	})(['\n    withActions(options) is deprecated, please configure addon-actions using the addParameter api:\n\n    addParameters({\n      actions: {\n        handles: options\n      },\n    });\n  '])))); !(function makeDecorator(_ref) {
		let {name} = _ref; let {parameterName} = _ref; let {wrapper} = _ref; let _ref$skipIfNoParamete = _ref.skipIfNoParametersOrOptions; let skipIfNoParametersOrOptions = void 0 !== _ref$skipIfNoParamete && _ref$skipIfNoParamete; let
			decorator = function decorator(options) {
				return function (getStory, context) {
					let parameters = context.parameters && context.parameters[parameterName]; return parameters && parameters.disable ? getStory(context) : !skipIfNoParametersOrOptions || options || parameters ? wrapper(getStory, context, {options, parameters}) : getStory(context);
				};
			};
	})({name: 'withActions', parameterName: constants.d, skipIfNoParametersOrOptions: !0, wrapper: function wrapper(getStory, context, _ref5) {
		let {parameters} = _ref5; let
			{options} = _ref5; return (function applyDeprecatedOptions(actionsFn, options) {
			options && applyEventHandlers(actionsFn, options);
		})(actions_actions, options), parameters && parameters.handles && applyEventHandlers.apply(void 0, [actions_actions].concat(withActions_toConsumableArray(parameters.handles))), getStory(context);
	}});
}, 429(module, __webpack_exports__, __webpack_require__) {
	'use strict'; __webpack_require__.d(__webpack_exports__, 'a', (() => types)); let types; __webpack_require__(58), __webpack_require__(67); !(function (types) {
		types.TAB = 'tab', types.PANEL = 'panel', types.TOOL = 'tool', types.TOOLEXTRA = 'toolextra', types.PREVIEW = 'preview', types.NOTES_ELEMENT = 'notes-element';
	})(types || (types = {}));
}, 439(module, __webpack_exports__, __webpack_require__) {
	'use strict'; __webpack_require__.d(__webpack_exports__, 'a', (() => Button)); __webpack_require__(804), __webpack_require__(47), __webpack_require__(15), __webpack_require__(18), __webpack_require__(23), __webpack_require__(4); let react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0); let react__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__); let _storybook_theming__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1); let polished__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3); function _extends() {
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

	let ButtonWrapper = _storybook_theming__WEBPACK_IMPORTED_MODULE_7__.styled.button((_ref => {
		let {small} = _ref; let
			{theme} = _ref; return {border: 0, borderRadius: '3em', cursor: 'pointer', display: 'inline-block', overflow: 'hidden', padding: small ? '8px 16px' : '13px 20px', position: 'relative', textAlign: 'center', textDecoration: 'none', transition: 'all 150ms ease-out', transform: 'translate3d(0,0,0)', verticalAlign: 'top', whiteSpace: 'nowrap', userSelect: 'none', opacity: 1, margin: 0, background: 'transparent', fontSize: ''.concat(small ? theme.typography.size.s1 : theme.typography.size.s2 - 1, 'px'), fontWeight: theme.typography.weight.bold, lineHeight: '1', svg: {display: 'inline-block', height: small ? 14 : 16, width: small ? 14 : 16, verticalAlign: 'top', marginRight: small ? 4 : 6, marginTop: small ? -1 : -2, marginBottom: small ? -1 : -2, pointerEvents: 'none', path: {fill: 'currentColor'}}};
	}), (_ref2 => _ref2.disabled ? {cursor: 'not-allowed !important', opacity: 0.5, '&:hover': {transform: 'none'}} : {}), (_ref3 => {
		let {containsIcon} = _ref3; let
			{small} = _ref3; return containsIcon ? ({svg: {display: 'block', margin: 0}, ...(small ? {padding: 9} : {padding: 12})}) : {};
	}), (_ref4 => {
		let color; let {theme} = _ref4; let {primary} = _ref4; let {secondary} = _ref4; let {gray} = _ref4; return gray ? color = theme.color.medium : secondary ? color = theme.color.secondary : primary && (color = theme.color.primary), color ? {background: color, color: gray ? theme.color.darkest : theme.color.lightest, '&:hover': {background: Object(polished__WEBPACK_IMPORTED_MODULE_8__.a)(0.05, color)}, '&:active': {boxShadow: 'rgba(0, 0, 0, 0.1) 0 0 0 3em inset'}, '&:focus': {boxShadow: ''.concat(Object(polished__WEBPACK_IMPORTED_MODULE_8__.d)(color, 1), ' 0 1px 9px 2px'), outline: 'none'}, '&:focus:hover': {boxShadow: ''.concat(Object(polished__WEBPACK_IMPORTED_MODULE_8__.d)(color, 0.2), ' 0 8px 18px 0px')}} : {};
	}), (_ref5 => {
		let {theme} = _ref5; let {tertiary} = _ref5; let {inForm} = _ref5; let
			{small} = _ref5; return tertiary ? ({background: theme.base === 'light' ? Object(polished__WEBPACK_IMPORTED_MODULE_8__.a)(0.02, theme.input.background) : Object(polished__WEBPACK_IMPORTED_MODULE_8__.b)(0.02, theme.input.background), color: theme.input.color, boxShadow: ''.concat(theme.input.border, ' 0 0 0 1px inset'), borderRadius: theme.input.borderRadius, ...(inForm && small ? {padding: '10px 16px'} : {}), '&:hover': {background: theme.base === 'light' ? Object(polished__WEBPACK_IMPORTED_MODULE_8__.a)(0.05, theme.input.background) : Object(polished__WEBPACK_IMPORTED_MODULE_8__.b)(0.05, theme.input.background), ...(inForm ? {} : {boxShadow: 'rgba(0,0,0,.2) 0 2px 6px 0, rgba(0,0,0,.1) 0 0 0 1px inset'})}, '&:active': {background: theme.input.background}, '&:focus': {boxShadow: ''.concat(Object(polished__WEBPACK_IMPORTED_MODULE_8__.d)(theme.color.secondary, 1), ' 0 0 0 1px inset'), outline: 'none'}}) : {};
	}), (_ref6 => {
		let {theme} = _ref6; return _ref6.outline ? {boxShadow: ''.concat(Object(polished__WEBPACK_IMPORTED_MODULE_8__.e)(0.8, theme.color.defaultText), ' 0 0 0 1px inset'), color: Object(polished__WEBPACK_IMPORTED_MODULE_8__.e)(0.3, theme.color.defaultText), background: 'transparent', '&:hover, &:focus': {boxShadow: ''.concat(Object(polished__WEBPACK_IMPORTED_MODULE_8__.e)(0.5, theme.color.defaultText), ' 0 0 0 1px inset'), outline: 'none'}, '&:active': {boxShadow: ''.concat(Object(polished__WEBPACK_IMPORTED_MODULE_8__.e)(0.5, theme.color.defaultText), ' 0 0 0 2px inset'), color: Object(polished__WEBPACK_IMPORTED_MODULE_8__.e)(0, theme.color.defaultText)}} : {};
	}), (_ref7 => {
		let {theme} = _ref7; let {outline} = _ref7; let {primary} = _ref7; let
			color = theme.color.primary; return outline && primary ? {boxShadow: ''.concat(color, ' 0 0 0 1px inset'), color, 'svg path': {fill: color}, '&:hover': {boxShadow: ''.concat(color, ' 0 0 0 1px inset'), background: 'transparent'}, '&:active': {background: color, boxShadow: ''.concat(color, ' 0 0 0 1px inset'), color: theme.color.tertiary}, '&:focus': {boxShadow: ''.concat(color, ' 0 0 0 1px inset, ').concat(Object(polished__WEBPACK_IMPORTED_MODULE_8__.d)(color, 0.4), ' 0 1px 9px 2px'), outline: 'none'}, '&:focus:hover': {boxShadow: ''.concat(color, ' 0 0 0 1px inset, ').concat(Object(polished__WEBPACK_IMPORTED_MODULE_8__.d)(color, 0.2), ' 0 8px 18px 0px')}} : {};
	}), (_ref8 => {
		let color; let {theme} = _ref8; let {outline} = _ref8; let {primary} = _ref8; return _ref8.secondary ? color = theme.color.secondary : primary && (color = theme.color.primary), outline && color ? {boxShadow: ''.concat(color, ' 0 0 0 1px inset'), color, 'svg path': {fill: color}, '&:hover': {boxShadow: ''.concat(color, ' 0 0 0 1px inset'), background: 'transparent'}, '&:active': {background: color, boxShadow: ''.concat(color, ' 0 0 0 1px inset'), color: theme.color.tertiary}, '&:focus': {boxShadow: ''.concat(color, ' 0 0 0 1px inset, ').concat(Object(polished__WEBPACK_IMPORTED_MODULE_8__.d)(color, 0.4), ' 0 1px 9px 2px'), outline: 'none'}, '&:focus:hover': {boxShadow: ''.concat(color, ' 0 0 0 1px inset, ').concat(Object(polished__WEBPACK_IMPORTED_MODULE_8__.d)(color, 0.2), ' 0 8px 18px 0px')}} : {};
	})); let ButtonLink = ButtonWrapper.withComponent('a', {target: 'ex9hp6v0', label: 'ButtonLink'}); var Button = Object.assign(Object(react__WEBPACK_IMPORTED_MODULE_6__.forwardRef)(((_ref9, ref) => {
		let {isLink} = _ref9; let {children} = _ref9; let
			props = _objectWithoutProperties(_ref9, ['isLink', 'children']); return isLink ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(ButtonLink, {...props, ref}, children) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(ButtonWrapper, {...props, ref}, children);
	})), {defaultProps: {isLink: !1}});
}, 448(module, __webpack_exports__, __webpack_require__) {
	'use strict'; function parse(string) {
		let result = string; if (result.indexOf('function') === 0) {
			return eval('('.concat(result, ')'));
		}

		try {
			result = JSON.parse(string);
		} catch (e) {}

		return result;
	}

	__webpack_exports__.a = parse;
}, 449(module, __webpack_exports__, __webpack_require__) {
	'use strict'; __webpack_require__.d(__webpack_exports__, 'ColorControl', (() => ColorControl)); __webpack_require__(41), __webpack_require__(5); let react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0); let react__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__); let LazyColorControl = react__WEBPACK_IMPORTED_MODULE_2___default.a.lazy((() => Promise.all([__webpack_require__.e(6), __webpack_require__.e(9)]).then(__webpack_require__.bind(null, 866)))); var ColorControl = function ColorControl(props) {
		return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Suspense, {fallback: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement('div', null)}, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(LazyColorControl, props));
	};

	ColorControl.displayName = 'ColorControl';
}, 462(module, exports, __webpack_require__) {
	__webpack_require__(463), __webpack_require__(852), __webpack_require__(860), __webpack_require__(861), __webpack_require__(853), __webpack_require__(857), __webpack_require__(855), __webpack_require__(856), __webpack_require__(854), __webpack_require__(858), module.exports = __webpack_require__(859);
}, 463(module, __webpack_exports__, __webpack_require__) {
	'use strict'; __webpack_require__.r(__webpack_exports__); __webpack_require__(87), __webpack_require__(464), __webpack_require__(602);
}, 537(module, exports) {}, 55(module, __webpack_exports__, __webpack_require__) {
	'use strict'; __webpack_require__.d(__webpack_exports__, 'a', (() => Form)); __webpack_require__(15); let esm = __webpack_require__(1); let react = (__webpack_require__(47), __webpack_require__(23), __webpack_require__(4), __webpack_require__(0)); let react_default = __webpack_require__.n(react); function _objectWithoutProperties(source, excluded) {
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

	let Wrapper = esm.styled.label((_ref => {
		let {theme} = _ref; return {display: 'flex', borderBottom: '1px solid '.concat(theme.appBorderColor), margin: '0 15px', padding: '8px 0', '&:last-child': {marginBottom: '3rem'}};
	})); let Label = esm.styled.span((_ref2 => ({minWidth: 100, fontWeight: _ref2.theme.typography.weight.bold, marginRight: 15, display: 'flex', justifyContent: 'flex-start', alignItems: 'center', lineHeight: '16px'}))); let field_Field = function Field(_ref3) {
		let {label} = _ref3; let {children} = _ref3; let
			props = _objectWithoutProperties(_ref3, ['label', 'children']); return react_default.a.createElement(Wrapper, props, label ? react_default.a.createElement(Label, null, react_default.a.createElement('span', null, label)) : null, children);
	};

	field_Field.displayName = 'Field', field_Field.defaultProps = {label: void 0}; let react_textarea_autosize_browser_esm = __webpack_require__(453); let Button = __webpack_require__(439); function _extends() {
		return (_extends = Object.assign || function (target) {
			for (let i = 1; i < arguments.length; i++) {
				let source = arguments[i]; for (let key in source) {
					Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
				}
			}

			return target;
		}).apply(this, arguments);
	}

	function input_objectWithoutProperties(source, excluded) {
		if (source == null) {
			return {};
		}

		let key; let i; let target = (function input_objectWithoutPropertiesLoose(source, excluded) {
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

	let styleResets = {appearance: 'none', border: '0 none', boxSizing: 'inherit', display: ' block', margin: ' 0', background: 'transparent', padding: 0, fontSize: 'inherit', position: 'relative'}; let styles = function styles(_ref) {
		let {theme} = _ref; return {...styleResets, transition: 'box-shadow 200ms ease-out, opacity 200ms ease-out', color: theme.input.color || 'inherit', background: theme.input.background, boxShadow: ''.concat(theme.input.border, ' 0 0 0 1px inset'), borderRadius: theme.input.borderRadius, fontSize: theme.typography.size.s2 - 1, lineHeight: '20px', padding: '6px 10px', '&:focus': {boxShadow: ''.concat(theme.color.secondary, ' 0 0 0 1px inset'), outline: 'none'}, '&[disabled]': {cursor: 'not-allowed', opacity: 0.5}, '&:-webkit-autofill': {WebkitBoxShadow: '0 0 0 3em '.concat(theme.color.lightest, ' inset')}, '::placeholder': {color: theme.color.mediumdark}};
	};

	let sizes = function sizes(_ref2) {
		switch (_ref2.size) {
			case '100%': return {width: '100%'}; case 'flex': return {flex: 1}; case 'auto': default: return {display: 'inline'};
		}
	};

	let alignment = function alignment(_ref3) {
		switch (_ref3.align) {
			case 'end': return {textAlign: 'right'}; case 'center': return {textAlign: 'center'}; case 'start': default: return {textAlign: 'left'};
		}
	};

	let validation = function validation(_ref4) {
		let {valid} = _ref4; let
			{theme} = _ref4; switch (valid) {
			case 'valid': return {boxShadow: ''.concat(theme.color.positive, ' 0 0 0 1px inset !important')}; case 'error': return {boxShadow: ''.concat(theme.color.negative, ' 0 0 0 1px inset !important')}; case 'warn': return {boxShadow: ''.concat(theme.color.warning, ' 0 0 0 1px inset')}; case void 0: case null: default: return {};
		}
	};

	let Input = Object.assign(Object(esm.styled)(Object(react.forwardRef)(((_ref5, ref) => {
		_ref5.size, _ref5.valid, _ref5.align; let props = input_objectWithoutProperties(_ref5, ['size', 'valid', 'align']); return react_default.a.createElement('input', {...props, ref});
	})))(styles, sizes, alignment, validation, {minHeight: 32}), {displayName: 'Input'}); let Select = Object.assign(Object(esm.styled)(Object(react.forwardRef)(((_ref6, ref) => {
		_ref6.size, _ref6.valid, _ref6.align; let props = input_objectWithoutProperties(_ref6, ['size', 'valid', 'align']); return react_default.a.createElement('select', {...props, ref});
	})))(styles, sizes, validation, {height: 32, userSelect: 'none', paddingRight: 20, appearance: 'menulist'}), {displayName: 'Select'}); let Textarea = Object.assign(Object(esm.styled)(Object(react.forwardRef)(((_ref7, ref) => {
		_ref7.size, _ref7.valid, _ref7.align; let props = input_objectWithoutProperties(_ref7, ['size', 'valid', 'align']); return react_default.a.createElement(react_textarea_autosize_browser_esm.a, {...props, ref});
	})))(styles, sizes, alignment, validation, (_ref8 => {
		let _ref8$height = _ref8.height; return {overflow: 'visible', maxHeight: void 0 === _ref8$height ? 400 : _ref8$height};
	})), {displayName: 'Textarea'}); let ButtonStyled = Object(esm.styled)(Object(react.forwardRef)(((_ref9, ref) => {
		_ref9.size, _ref9.valid, _ref9.align; let props = input_objectWithoutProperties(_ref9, ['size', 'valid', 'align']); return react_default.a.createElement(Button.a, {...props, ref});
	})))(sizes, validation, {userSelect: 'none', overflow: 'visible', zIndex: 2, '&:hover': {transform: 'none'}}); let input_Button = Object.assign(Object(react.forwardRef)(((props, ref) => react_default.a.createElement(ButtonStyled, {...props, tertiary: !0, small: !0, inForm: !0, ref}))), {displayName: 'Button'}); var Form = Object.assign(esm.styled.form({boxSizing: 'border-box', width: '100%'}), {Field: field_Field, Input, Select, Textarea, Button: input_Button});
}, 60(module, __webpack_exports__, __webpack_require__) {
	'use strict'; __webpack_require__.d(__webpack_exports__, 'a', (() => Icons)), __webpack_require__.d(__webpack_exports__, 'b', (() => Symbols)); __webpack_require__(23), __webpack_require__(22), __webpack_require__(4), __webpack_require__(15); let react = __webpack_require__(0); let react_default = __webpack_require__.n(react); let esm = __webpack_require__(1); let icon_icons = {mobile: 'M648 64h-272c-66.274 0-120 53.726-120 120v656c0 66.274 53.726 120 120 120h272c66.274 0 120-53.726 120-120v-656c0-66.274-53.726-120-120-120zM376 144h272c22.056 0 40 17.944 40 40v495.968h-352v-495.968c0-22.056 17.946-40 40-40zM648 880h-272c-22.054 0-40-17.944-40-40v-80.032h352v80.032c0 22.056-17.944 40-40 40zM544.034 819.962c0 17.676-14.33 32.002-32.004 32.002-17.67 0-32-14.326-32-32.002 0-17.672 14.33-31.998 32-31.998 17.674-0 32.004 14.326 32.004 31.998z', watch: 'M736.172 108.030c0-11.044-8.956-20-20-20h-408.282c-11.044 0-20 8.956-20 20 0 11.046 8.956 20 20 20h408.282c11.044 0 20-8.954 20-20zM736.172 50.37c0-11.044-8.956-20-20-20h-408.282c-11.044 0-20 8.956-20 20s8.956 20 20 20h408.282c11.044 0 20-8.956 20-20zM736.172 973.692c0-11.044-8.956-20-20-20h-408.282c-11.044 0-20 8.956-20 20s8.956 20 20 20h408.282c11.044 0 20-8.956 20-20zM736.172 916.030c0-11.044-8.956-20-20-20h-408.282c-11.044 0-20 8.956-20 20 0 11.046 8.956 20 20 20h408.282c11.044 0 20-8.954 20-20zM717.53 228c18.904 0 34.286 15.14 34.286 33.75v500.502c0 18.61-15.38 33.75-34.286 33.75h-411.43c-18.904 0-34.286-15.14-34.286-33.75v-500.502c0-18.61 15.38-33.75 34.286-33.75h411.43zM717.53 148h-411.43c-63.118 0-114.286 50.928-114.286 113.75v500.502c0 62.822 51.166 113.75 114.286 113.75h411.43c63.118 0 114.286-50.926 114.286-113.75v-500.502c-0.002-62.822-51.168-113.75-114.286-113.75v0zM680.036 511.53c0 22.090-17.91 40-40 40h-128.004c-5.384 0-10.508-1.078-15.196-3.006-0.124-0.048-0.254-0.086-0.376-0.132-0.61-0.262-1.188-0.57-1.782-0.86-0.572-0.276-1.16-0.528-1.718-0.828-0.204-0.112-0.39-0.246-0.594-0.364-0.918-0.514-1.832-1.050-2.704-1.64-0.086-0.058-0.164-0.128-0.254-0.188-10.492-7.21-17.382-19.284-17.382-32.98v-151.5c0-22.094 17.91-40 40.004-40 22.088 0 40 17.906 40 40v111.498h88c22.094-0.002 40.002 17.91 40.006 40z', tablet: 'M200.022 927.988h624.018c1.38 0 2.746-0.072 4.090-0.208 20.168-2.050 35.91-19.080 35.91-39.792v-751.916c0-22.092-17.91-40-40-40h-624.018c-22.098 0-40 17.908-40 40v751.916c0 22.094 17.906 40 40 40zM512.002 878.206c-17.674 0-32.004-14.328-32.004-31.998 0-17.678 14.33-32.002 32.004-32.002 17.67 0 32 14.324 32 32.002 0 17.67-14.33 31.998-32 31.998zM240.022 176.078h544.018v591.902h-544.018v-591.902z', browser: 'M920.004 128h-816.008c-1.38 0-2.746 0.070-4.090 0.208-20.168 2.048-35.91 19.080-35.91 39.792v688c0 22.090 17.91 40 40 40h816.008c22.098 0 40-17.91 40-40v-688c-0-22.094-17.906-40-40-40zM368 177.78c17.674 0 32.004 14.328 32.004 31.998 0 17.676-14.33 32.002-32.004 32.002-17.67 0-32-14.326-32-32.002 0-17.67 14.33-31.998 32-31.998zM272 177.78c17.674 0 32.004 14.328 32.004 31.998 0 17.676-14.33 32.002-32.004 32.002-17.67 0-32-14.326-32-32.002 0-17.67 14.33-31.998 32-31.998zM176 177.78c17.674 0 32.004 14.328 32.004 31.998 0 17.676-14.33 32.002-32.004 32.002-17.67 0-32-14.326-32-32.002 0-17.67 14.33-31.998 32-31.998zM880.004 815.996h-736.008v-527.988h736.008v527.988z', sidebar: 'M920.032 127.858h-816c-22.092 0-40 17.908-40 40v688c0 22.092 17.908 40 40 40h316.578c1.13 0.096 2.266 0.172 3.422 0.172s2.292-0.078 3.424-0.172h492.576c22.092 0 40-17.908 40-40v-688c0-22.092-17.908-40-40-40zM144.032 207.858h240v608h-240v-608zM880.032 815.858h-416v-608h416v608zM198.734 288.030c0-17.674 14.328-32 32.002-32h66.396c17.672 0 32 14.326 32 32 0 17.676-14.324 32-32 32h-66.398c-17.674 0-32-14.326-32-32zM198.734 416.030c0-17.674 14.328-32 32.002-32h66.396c17.672 0 32 14.326 32 32 0 17.676-14.324 32-32 32h-66.398c-17.674 0-32-14.326-32-32zM198.734 544.030c0-17.674 14.328-32 32.002-32h66.396c17.672 0 32 14.326 32 32 0 17.676-14.324 32-32 32h-66.398c-17.674 0-32-14.326-32-32z', sidebaralt: 'M64 167.944v688c0 22.092 17.908 40 40 40h816c22.092 0 40-17.908 40-40v-688c0-22.092-17.908-40-40-40h-816c-22.092 0-40 17.908-40 40zM880 815.944h-240v-608h240v608zM144 207.944h416v608h-416v-608zM793.296 320.118h-66.398c-17.676 0-32-14.324-32-32 0-17.674 14.328-32 32-32h66.396c17.674 0 32.002 14.326 32.002 32 0 17.672-14.324 32-32 32zM793.296 448.118h-66.398c-17.676 0-32-14.324-32-32 0-17.674 14.328-32 32-32h66.396c17.674 0 32.002 14.326 32.002 32 0 17.672-14.324 32-32 32zM793.296 576.118h-66.398c-17.676 0-32-14.324-32-32 0-17.674 14.328-32 32-32h66.396c17.674 0 32.002 14.326 32.002 32 0 17.672-14.324 32-32 32z', bottombar: 'M85 121h854c24 0 42 18 42 41v700c0 23-18 41-42 41H608a44 44 0 0 1-7 0H85c-24 0-42-18-42-41V162c0-23 18-41 42-41zm41 535v165h772V656H126zm0-82h772V202H126v372zm185 197h-69c-19 0-34-14-34-32s15-33 34-33h69c19 0 34 15 34 33s-15 32-34 32zm236 0h-70c-18 0-33-14-33-32s15-33 33-33h70c18 0 33 15 33 33s-15 32-33 32zm235 0h-70c-18 0-33-14-33-32s15-33 33-33h70c18 0 33 15 33 33s-15 32-33 32z', useralt: 'M533 960a850 850 0 0 0 386-92v-19c0-117-242-223-306-234-20-3-21-58-21-58s59-58 72-137c35 0 56-84 21-113 2-31 45-243-173-243S337 276 338 307c-34 29-13 113 22 113 13 79 72 137 72 137s-1 55-21 58c-64 11-301 115-306 231a855 855 0 0 0 428 114z', user: 'M814 805a525 525 0 00-217-116c-17-3-17-50-17-50s50-49 61-116c29 0 48-71 18-96 1-26 38-206-147-206S364 401 365 427c-30 25-11 96 18 96 11 67 61 116 61 116s0 47-17 50c-39 6-154 53-217 116a418 418 0 015-590 418 418 0 01594 0 418 418 0 015 590M512 0a512 512 0 100 1024A512 512 0 00512 0', useradd: 'M87 859c-30-12-59-27-87-43 5-105 221-200 279-210 19-3 19-53 19-53s-54-53-65-125c-32 0-51-76-20-103-1-28-40-221 158-221 199 0 160 193 158 221 32 27 12 103-19 103-12 72-66 125-66 125s1 50 19 53c59 10 279 107 279 213v18a781 781 0 0 1-655 22zm892-565h-91v-90a45 45 0 1 0-91 0v90h-91a45 45 0 1 0 0 91h91v91a45 45 0 1 0 91 0v-91h91a45 45 0 1 0 0-91z', users: 'M360 128c193 0 155 182 154 208 31 25 12 97-19 97-11 67-64 118-64 118s1 47 19 50c57 9 271 100 271 200v16a771 771 0 0 1-637 21c-29-11-57-25-84-40 4-99 215-189 271-197 18-3 18-50 18-50s-52-51-63-118c-31 0-50-72-19-97-1-26-40-208 153-208zm416 66c133 0 107 125 106 144 21 17 8 66-13 66-8 47-44 81-44 81s0 33 12 34c40 6 187 69 187 138v46c-80 27-163 41-249 41l-9-1c-16-31-44-61-83-90a546 546 0 0 0-111-64c47-38 117-66 143-70 12-1 12-34 12-34s-36-34-43-81c-21 0-34-49-13-66-1-19-27-144 105-144z', profile: 'M761 631c0-13-10-23-22-23H285c-12 0-22 10-22 23 0 12 10 23 22 23h454c12 0 22-11 22-23zm0 100c0-12-10-22-22-22H285c-12 0-22 10-22 22 0 13 10 23 22 23h454c12 0 22-10 22-23zm0 101c0-13-10-23-22-23H285c-12 0-22 10-22 23s10 23 22 23h454c12 0 22-10 22-23zM832 0c59 0 107 49 107 109v807c-1 60-49 108-107 108H130c-25 0-45-20-45-46V46a45 45 0 0 1 45-46h702zm0 91H174v842h658c10 0 18-9 18-18V110c0-10-8-19-18-19zM384 532l-39-20c2-49 100-93 126-97 8-1 8-25 8-25s-24-24-29-57c-14 0-23-35-9-48-1-13-18-102 71-102s72 89 71 102c14 13 5 48-9 48-5 33-29 57-29 57s0 24 8 25c27 4 126 49 126 98v8a346 346 0 0 1-295 11z', bookmark: 'M772 1012L511 761l-260 251a49 49 0 0 1-52 10c-18-7-29-24-29-43V132c0-25 21-46 47-46h588c26 0 47 21 47 46v847c0 19-11 36-29 43a49 49 0 0 1-51-10z', bookmarkhollow: 'M772 1012L511 761l-260 251a49 49 0 0 1-52 10c-18-7-29-24-29-43V132c0-25 21-46 47-46h588c26 0 47 21 47 46v847c0 19-11 36-29 43a49 49 0 0 1-51-10zM545 664l213 205V181H265v688l213-205c9-9 21-14 33-14s24 5 34 14z', book: 'M896.054 159.774c-0.122-52.914-43.048-95.774-95.992-95.774h-632.004c-1.754 0-3.468 0.154-5.164 0.372-19.644 2.54-34.836 19.292-34.836 39.628v816c0 22.094 17.91 40 40 40h632.004c52.642 0 95.368-42.378 95.968-94.88h0.036v-705.332l-0.012-0.014zM368.062 144h80v271.922l-11.728-11.718c-15.62-15.606-40.924-15.606-56.542 0l-11.728 11.718v-271.922zM816.036 864.204c-0.1 8.712-7.268 15.796-15.972 15.796h-592.004v-736h80.004v368.426c0 16.176 9.742 30.758 24.684 36.954 14.944 6.192 32.146 2.778 43.586-8.656l51.728-51.68 51.728 51.68c7.652 7.644 17.876 11.708 28.28 11.708 5.156 0 10.356-1 15.306-3.050 14.944-6.196 24.684-20.778 24.684-36.954v-368.428h272c8.796 0 15.972 7.16 15.992 15.958l-0.016 704.246z', repository: 'M856.020 159.804c-0.122-52.916-43.048-95.774-95.992-95.774h-591.968c-1.754 0-3.468 0.154-5.164 0.37-19.644 2.54-34.836 19.292-34.836 39.63v784.584c0 22.094 17.91 40 40 40h151.972v63.594c0 10.876 6.548 20.682 16.598 24.844 10.046 4.164 21.612 1.87 29.304-5.818l34.78-34.748 34.78 34.748c5.144 5.14 12.020 7.87 19.014 7.87 3.466 0 6.962-0.672 10.292-2.052 10.048-4.164 16.598-13.968 16.598-24.844v-63.594h278.63c52.642 0 95.368-42.38 95.968-94.882h0.036v-673.916l-0.012-0.012zM776.020 159.988l-0.014 504.628h-519.974v-520.584h503.996c8.796-0 15.972 7.158 15.992 15.956zM760.028 848.616h-278.63v-56h-161.366v56h-111.972v-104h567.944l-0.002 88.204c-0.102 8.71-7.27 15.796-15.974 15.796zM320.032 240.396c0-17.67 14.328-31.998 31.998-31.998s32.002 14.326 32.002 31.998c0 17.674-14.332 32-32.002 32-17.672-0.002-31.998-14.326-31.998-32zM320.032 349.79c0-17.67 14.328-31.998 31.998-31.998s32.002 14.328 32.002 31.998c0 17.676-14.332 32-32.002 32-17.672 0-31.998-14.324-31.998-32zM320.032 459.188c0-17.67 14.328-32 31.998-32s32.002 14.328 32.002 32c0 17.674-14.332 31.998-32.002 31.998-17.672 0-31.998-14.324-31.998-31.998zM384.032 568.582c0 17.674-14.332 31.998-32.002 31.998s-31.998-14.324-31.998-31.998c0-17.67 14.328-32 31.998-32 17.67 0.002 32.002 14.33 32.002 32z', star: 'M763.972 919.5c-6.368 0-12.758-1.518-18.61-4.596l-233.358-122.688-233.37 122.688c-13.476 7.090-29.808 5.904-42.124-3.042-12.318-8.95-18.486-24.118-15.912-39.124l44.57-259.856-188.792-184.028c-10.904-10.626-14.828-26.524-10.124-41.004s17.222-25.034 32.292-27.222l260.906-37.912 116.686-236.42c6.738-13.652 20.644-22.296 35.87-22.296v0c15.226 0 29.13 8.644 35.87 22.298l116.674 236.418 260.906 37.912c15.068 2.19 27.586 12.742 32.292 27.222s0.782 30.376-10.124 41.004l-188.792 184.028 44.24 257.93c0.62 2.796 0.946 5.704 0.946 8.688 0 22.054-17.848 39.942-39.888 40-0.054 0-0.106 0-0.158 0z', starhollow: 'M763.972 919.5c-6.368 0-12.758-1.518-18.61-4.596l-233.358-122.688-233.37 122.688c-13.476 7.090-29.808 5.904-42.124-3.042-12.318-8.95-18.486-24.118-15.912-39.124l44.57-259.856-188.792-184.028c-10.904-10.626-14.828-26.524-10.124-41.004s17.222-25.034 32.292-27.222l260.906-37.912 116.686-236.42c6.738-13.652 20.644-22.296 35.87-22.296v0c15.226 0 29.13 8.644 35.87 22.298l116.674 236.418 260.906 37.912c15.068 2.19 27.586 12.742 32.292 27.222s0.782 30.376-10.124 41.004l-188.792 184.028 44.24 257.93c0.62 2.796 0.946 5.704 0.946 8.688 0 22.054-17.848 39.942-39.888 40-0.054 0-0.106 0-0.158 0zM190.256 428.144l145.812 142.13c9.428 9.192 13.73 22.432 11.504 35.406l-34.424 200.7 180.244-94.758c11.654-6.13 25.576-6.126 37.226 0l180.232 94.756-34.422-200.698c-2.226-12.974 2.076-26.214 11.504-35.406l145.812-142.13-201.51-29.282c-13.030-1.892-24.292-10.076-30.118-21.882l-90.114-182.596-90.122 182.598c-5.826 11.804-17.090 19.988-30.118 21.88l-201.506 29.282z', circle: 'M1024 512A512 512 0 110 512a512 512 0 011024 0z', circlehollow: 'M1024 512A512 512 0 100 512a512 512 0 001024 0zM215 809a418 418 0 010-594 418 418 0 01594 0 418 418 0 010 594 418 418 0 01-594 0z', heart: 'M895.032 194.328c-20.906-21.070-46.492-37.316-76.682-48.938-30.104-11.71-63.986-17.39-101.474-17.39-19.55 0-38.744 2.882-57.584 9.094-18.472 6.062-36.584 14.242-54.072 24.246-17.476 9.828-34.056 21.276-49.916 33.898-16.038 12.8-30.456 25.572-43.346 38.664-13.52-13.092-28.026-25.864-43.616-38.664-15.684-12.624-32.080-24.070-49.382-33.898-17.214-10.004-35.414-18.184-54.704-24.246-19.104-6.21-38.568-9.094-58.034-9.094-37.126 0-70.56 5.68-100.48 17.39-29.732 11.622-55.328 27.868-76.328 48.938-20.994 21.094-37.214 46.962-48.478 77.328-11.174 30.544-16.942 64.5-16.942 101.812 0 21.628 3.068 43.078 9.19 64.53 6.308 21.096 14.416 41.986 24.876 61.642 10.446 19.656 22.702 38.488 36.584 56.59 13.88 18.124 28.388 34.516 43.344 49.58l305.766 305.112c8.466 7.558 18.11 11.444 28.204 11.444 10.726 0 19.914-3.884 27.308-11.444l305.934-304.226c14.78-14.772 29.382-31.368 43.166-49.378 14.058-18.212 26.314-37.222 37.042-57.23 10.9-19.924 19.192-40.638 25.406-62 6.218-21.188 9.198-42.61 9.198-64.618 0-37.312-5.592-71.268-16.582-101.812-11.264-30.366-27.22-56.236-48.398-77.33z', hearthollow: 'M716.876 208c27.708 0 52.092 4.020 72.47 11.948l0.132 0.052 0.13 0.050c19.866 7.644 35.774 17.664 48.632 30.624l0.166 0.168 0.17 0.168c12.586 12.536 22.304 28.27 29.706 48.094 7.782 21.786 11.726 46.798 11.726 74.364 0 14.658-1.95 28.426-5.958 42.086l-0.028 0.092-0.026 0.092c-4.866 16.72-11.006 31.752-18.776 45.952l-0.162 0.298-0.16 0.296c-8.81 16.434-18.58 31.532-29.864 46.148l-0.204 0.264c-11.316 14.786-23.48 28.708-36.154 41.378l-277.122 275.574-276.94-276.35c-13.32-13.43-25.248-27.074-36.488-41.75-11.386-14.848-21.284-30.136-29.444-45.49-7.206-13.54-13.494-29.17-18.7-46.472-4.030-14.264-5.988-28.044-5.988-42.116 0-27.36 4.042-52.314 12.016-74.176 7.214-19.378 17.344-35.708 30.066-48.492 12.998-13.042 28.958-23.148 48.826-30.914 20.436-8 43.764-11.886 71.32-11.886 11.536 0 22.738 1.742 33.298 5.174l0.374 0.122 0.376 0.12c13.116 4.122 26.066 9.874 38.494 17.094l0.34 0.2 0.344 0.196c12.736 7.234 25.308 15.876 38.43 26.412 14.486 11.906 27.060 23.048 38.428 34.056l56.994 55.192 55.662-56.532c10.324-10.484 22.18-21.040 36.242-32.264 13.382-10.646 26.216-19.38 39.228-26.698l0.256-0.144 0.254-0.144c13.008-7.442 26.228-13.386 39.294-17.676l0.050-0.016 0.050-0.018c10.354-3.414 20.998-5.076 32.54-5.076zM716.876 128c-19.55 0-38.744 2.882-57.584 9.094-18.472 6.062-36.584 14.242-54.072 24.246-17.476 9.828-34.056 21.276-49.916 33.898-16.038 12.8-30.456 25.572-43.346 38.664-13.52-13.092-28.026-25.864-43.616-38.664-15.684-12.624-32.080-24.070-49.382-33.898-17.214-10.004-35.414-18.184-54.704-24.246-19.104-6.21-38.568-9.094-58.034-9.094-37.126 0-70.56 5.68-100.48 17.39-29.732 11.622-55.328 27.868-76.328 48.938-20.994 21.094-37.214 46.962-48.478 77.328-11.174 30.544-16.942 64.5-16.942 101.812 0 21.628 3.068 43.078 9.19 64.53 6.308 21.096 14.416 41.986 24.876 61.642 10.446 19.656 22.702 38.488 36.584 56.59 13.88 18.124 28.388 34.516 43.344 49.58l305.766 305.112c8.466 7.558 18.11 11.444 28.204 11.444 10.726 0 19.914-3.884 27.308-11.444l305.934-304.226c14.78-14.772 29.382-31.368 43.166-49.378 14.058-18.212 26.314-37.222 37.042-57.23 10.9-19.924 19.192-40.638 25.406-62 6.218-21.188 9.198-42.61 9.198-64.618 0-37.312-5.592-71.268-16.582-101.812-11.262-30.366-27.216-56.234-48.396-77.328-20.906-21.070-46.492-37.316-76.682-48.938-30.106-11.712-63.988-17.392-101.476-17.392v0z', facehappy: 'M512 0a512 512 0 110 1024A512 512 0 01512 0zm0 91.4c-112.3 0-218 43.8-297.4 123.2A417.8 417.8 0 0091.4 512c0 112.3 43.8 218 123.2 297.4A417.8 417.8 0 00512 932.6c112.3 0 218-43.8 297.4-123.2A417.8 417.8 0 00932.6 512c0-112.3-43.8-218-123.2-297.4A417.8 417.8 0 00512 91.4zm248 493.7c15.2 0 28.7 7.5 37 19l2.6 3.9a46 46 0 015.8 18l.3 4.9c0 6.6-1.4 13-4 18.7l-2.1 4.1A329 329 0 01232 663l-5.5-9.3a46 46 0 01-2-41.2l2-4.2v-.2a45.6 45.6 0 0176.7-4l2.5 4a237.9 237.9 0 00410 7.7l4.5-7.7a46 46 0 0139.7-22.9zM329.7 292.6a73.1 73.1 0 110 146.2 73.1 73.1 0 010-146.2zm365.2 0a73.1 73.1 0 110 146.2 73.1 73.1 0 010-146.2z', facesad: 'M512 0a512 512 0 110 1024A512 512 0 01512 0zm0 91.4c-112.3 0-218 43.8-297.4 123.2A417.8 417.8 0 0091.4 512c0 112.3 43.8 218 123.2 297.4A417.8 417.8 0 00512 932.6c112.3 0 218-43.8 297.4-123.2A417.8 417.8 0 00932.6 512c0-112.3-43.8-218-123.2-297.4A417.8 417.8 0 00512 91.4zm1.1 449.2a329 329 0 01281.1 157.7l5.5 9.2a46 46 0 012 41.3l-2 4.1v.3a45.6 45.6 0 01-76.7 4l-2.6-4a238 238 0 00-410-7.7l-4.5 7.7a46 46 0 01-76.6 4l-2.6-4a46 46 0 01-5.9-18l-.2-5c0-6.6 1.4-12.9 4-18.6l2.1-4.2a329 329 0 01286.4-166.8zm-183.4-248a73.1 73.1 0 110 146.2 73.1 73.1 0 010-146.2zm365.2 0a73.1 73.1 0 110 146.2 73.1 73.1 0 010-146.2z', faceneutral: 'M512 0a512 512 0 110 1024A512 512 0 01512 0zm0 91.4c-112.3 0-218 43.8-297.4 123.2A417.8 417.8 0 0091.4 512c0 112.3 43.8 218 123.2 297.4A417.8 417.8 0 00512 932.6c112.3 0 218-43.8 297.4-123.2A417.8 417.8 0 00932.6 512c0-112.3-43.8-218-123.2-297.4A417.8 417.8 0 00512 91.4zm248 521.2a45.7 45.7 0 014.7 91.2l-4.7.2H266.3a45.7 45.7 0 01-4.7-91.2l4.7-.2H760zm-430.3-320a73.1 73.1 0 110 146.2 73.1 73.1 0 010-146.2zm365.2 0a73.1 73.1 0 110 146.2 73.1 73.1 0 010-146.2z', lock: 'M896.032 915.53v-467.498c0-19.102-13.402-35.052-31.31-39.026-0.21-0.046-0.414-0.12-0.628-0.162-0.444-0.090-0.904-0.13-1.354-0.208-2.186-0.37-4.416-0.606-6.708-0.606h-55.902l0.002-55.85h0.020c0-159.14-129.010-288.15-288.15-288.15-159.128 0-288.13 128.992-288.15 288.118v55.884h-54.852c-20.71 0-37.746 15.742-39.792 35.91-0.136 1.344-0.208 2.708-0.208 4.090v463.332c-0.618 2.792-0.968 5.688-0.968 8.668 0 22.094 17.91 40 40 40h688.27c22.092 0 40-17.91 40-40-0.002-1.524-0.104-3.024-0.27-4.502zM209 488.032h607.032v392h-607.032v-392zM303.85 352.182c0-114.776 93.376-208.15 208.15-208.15 114.59 0 207.842 93.074 208.142 207.596 0 0.084-0.012 0.164-0.012 0.248v56.156h-416.284l0.004-55.85zM552.164 691.858l-0.002 58.188c0.004 22.088-17.906 39.996-39.996 39.998-22.094 0.002-40.004-17.906-40-40v-57.974c-14.704-11.726-24.134-29.782-24.134-50.048 0-35.346 28.654-64 64-64s64 28.654 64 64c0 20.142-9.318 38.104-23.868 49.836z', unlock: 'M896.032 915.53v-467.498c0-1.988-0.194-3.926-0.472-5.834-0.11-0.744-0.192-1.498-0.34-2.226-1.524-7.44-5.136-14.1-10.164-19.408-0.252-0.266-0.48-0.554-0.738-0.814-0.496-0.494-1.036-0.944-1.554-1.412-0.43-0.386-0.84-0.8-1.288-1.17-0.292-0.24-0.608-0.446-0.904-0.676-2.506-1.954-5.244-3.616-8.176-4.934-0.744-0.334-1.504-0.632-2.27-0.922-4.39-1.656-9.124-2.604-14.094-2.604h-552.184l0.002-55.85c0-114.776 93.376-208.15 208.15-208.15 86.038 0 160.034 52.474 191.7 127.096 0.012 0.028 0.030 0.044 0.042 0.072 5.978 14.566 20.284 24.832 37.006 24.832 22.090 0 40-17.906 40-40 0-4.71-0.86-9.21-2.354-13.41-0.182-0.694-0.42-1.438-0.782-2.292-43.666-103.582-146.14-176.296-265.612-176.296-159.128 0-288.13 128.994-288.15 288.12v55.882h-54.85c-20.71 0-37.746 15.742-39.792 35.91-0.136 1.344-0.208 2.708-0.208 4.090v463.332c-0.618 2.794-0.968 5.688-0.968 8.668 0 22.094 17.91 40 40 40h688.27c22.092 0 40-17.91 40-40-0.002-1.528-0.104-3.028-0.27-4.506zM209 488.032h607.032v392h-607.032v-392zM552.164 691.86l-0.002 58.186c0.004 22.088-17.906 39.996-39.996 40-22.094 0-40.004-17.908-40-40v-57.976c-14.702-11.726-24.134-29.782-24.134-50.048 0-35.346 28.654-64 64-64s64 28.654 64 64c0 20.142-9.318 38.102-23.868 49.838z', key: 'M768.032 320.032c0 35.346-28.654 64-64 64s-64-28.654-64-64 28.654-64 64-64 64 28.654 64 64zM960.032 353.092c0 159.062-128.946 288.010-288.008 288.010-35.306 0-69.124-6.368-100.38-17.996l-27.736 27.738-0.002 54.464c0 0.016 0.002 0.028 0.002 0.040 0 11.046-4.478 21.046-11.716 28.29-6.334 6.332-14.784 10.55-24.196 11.508-1.346 0.136-2.708 0.208-4.090 0.208h-71.748l-0.002 71.96c0 0.012 0.002 0.040 0.002 0.040 0 11.046-4.478 21.046-11.716 28.286-6.334 6.336-14.784 10.554-24.196 11.508-1.346 0.136-2.708 0.208-4.090 0.208h-71.996l-0.002 62.684c0 22.094-17.908 40-40 40-0.022 0-0.042 0-0.062 0-0.022 0-0.042 0-0.064 0h-175.996c-13.76 0-25.888-6.95-33.086-17.524-4.362-6.406-6.916-14.14-6.916-22.476v-112c0-0.664 0.066-1.308 0.1-1.964 0.032-0.618 0.034-1.234 0.092-1.852 0.11-1.148 0.288-2.278 0.492-3.398 0.024-0.128 0.034-0.258 0.058-0.386 1.614-8.378 5.848-15.808 11.808-21.446l325.456-325.458c-11.642-31.274-18.020-65.11-18.020-100.44 0-159.060 128.946-288.006 288.006-288.006 159.060-0.004 288.006 128.942 288.006 288.002zM880.032 353.092c0-114.696-93.312-208.006-208.008-208.006s-208.006 93.31-208.006 208.006c0 43.208 13.246 83.376 35.884 116.668l-57.36 57.362c-0.136-0.184-0.27-0.368-0.408-0.546l-298.102 298.106-0.002 55.356h96.124v-62.684c0-0.708 0.070-1.394 0.106-2.094 0.036-0.664 0.036-1.336 0.102-1.992 0.132-1.316 0.334-2.61 0.592-3.882 0.006-0.028 0.008-0.058 0.014-0.090 0.258-1.262 0.58-2.5 0.956-3.714 0.012-0.040 0.018-0.078 0.030-0.118 4.676-15.032 17.976-26.262 34.114-27.902 1.344-0.136 2.708-0.208 4.090-0.208h71.998v-67.64c-0.156-1.434-0.248-2.882-0.248-4.36 0-22.094 17.908-40 40-40h71.998v-30.692c0-0.148 0.020-0.29 0.022-0.438 0.008-10.226 3.912-20.45 11.714-28.254l55.99-55.988c1.982-1.984 4.124-3.71 6.38-5.188l18.68-18.684c33.030 22.090 72.702 34.992 115.332 34.992 114.694-0 208.008-93.314 208.008-208.010z', arrowleftalt: 'M107.854 539.924l282.834 283.272c15.594 15.65 40.92 15.692 56.568 0.1 15.648-15.594 15.694-40.92 0.1-56.568l-214.838-215.040h655.412c22.092 0 40-17.908 40-40s-17.908-40-40-40h-655l214.75-214.61c15.64-15.602 15.672-40.928 0.070-56.568-7.814-7.834-18.066-11.752-28.32-11.75-10.22 0-20.442 3.892-28.25 11.68l-283.242 282.93c-15.634 15.594-15.672 40.91-0.084 56.554z', arrowrightalt: 'M916.266 483.792l-282.834-283.272c-15.594-15.65-40.92-15.692-56.568-0.1-15.648 15.594-15.694 40.92-0.1 56.568l214.838 215.040h-655.412c-22.092 0-40 17.908-40 40s17.908 40 40 40h655l-214.748 214.61c-15.64 15.602-15.672 40.928-0.070 56.568 7.814 7.834 18.066 11.752 28.32 11.75 10.22 0 20.442-3.892 28.25-11.68l283.242-282.93c15.632-15.596 15.67-40.91 0.082-56.554z', sync: 'M135.6 442.5a41 41 0 0130 12l94.9 94.6c16 16 16 42 0 58s-42.1 16-58.2 0l-30.1-30a341.9 341.9 0 0095 178.6c65.3 65 152 101 244.3 101 92.3 0 179-36 244.3-101a345 345 0 0066.8-93.6 41.1 41.1 0 0174.3 35v.2l-.1.2-5.2 10.3a427.8 427.8 0 01-380 230.9A427.5 427.5 0 0190.1 585.8l-20 20c-16 16-42 16-58.2 0a41 41 0 010-58l93.6-93.3a41 41 0 0130-12zm376-357.2c208.9 0 382.8 149.5 420.1 347.1l22-22c16.1-16 42.2-16 58.2 0s16 42 0 58l-93.5 93.4a41 41 0 01-30 12 41 41 0 01-30-12L763.5 467a41 41 0 010-58c16-16 42.1-16 58.2 0l26.8 26.8a342 342 0 00-92.7-167.6c-65.3-65-152-101-244.3-101-92.3 0-179 36-244.2 101a345.2 345.2 0 00-66.9 93.6 41.1 41.1 0 01-74.3-35v-.2l.2-.2c.7-1.7.2-.8 5.1-10.3A427.8 427.8 0 01511.5 85.3z', reply: 'M679.496 431.738c-0.414-0.062-0.834-0.102-1.266-0.102h-477.482l171.506-171.504c15.622-15.622 15.622-40.95-0.002-56.57-15.62-15.624-40.948-15.624-56.568 0l-239.734 239.732c-0.958 0.956-1.868 1.958-2.724 3.006-0.328 0.402-1.884 2.482-2.324 3.138-0.36 0.54-1.696 2.77-2.008 3.352-0.308 0.58-1.424 2.936-1.676 3.544-0.036 0.086-0.468 1.268-0.648 1.774-0.23 0.636-0.474 1.266-0.672 1.918-0.186 0.612-0.818 3.13-0.95 3.788-0.148 0.748-0.522 3.318-0.574 3.862-0.262 2.642-0.262 5.3 0 7.942 0.044 0.448 0.412 3.032 0.58 3.874 0.112 0.556 0.74 3.088 0.958 3.808 0.158 0.524 1.036 2.992 1.328 3.7 0.192 0.458 1.298 2.828 1.688 3.552 0.208 0.386 0.446 0.75 0.666 1.126 0.436 0.752 1.844 2.888 2.084 3.224 0.52 0.724 4.262 5.074 4.29 5.098l239.718 239.72c15.62 15.618 40.948 15.618 56.57 0 15.62-15.624 15.622-40.948 0-56.57l-171.516-171.514h471.296c114.52 0.084 207.688 93.124 207.988 207.594 0 0.084-0.012 0.164-0.012 0.248v95.876c-0.004 22.094 17.906 40.002 40 40 22.090-0.002 40-17.91 39.996-39.998l0.004-95.57h0.020c0-156.594-124.914-284.012-280.536-288.048z', undo: 'M230 301h480a240 240 0 1 1 0 481H235c-23 0-42-20-42-43 0-24 19-43 42-43h475a155 155 0 0 0 0-310H228l3 3 65 65a45 45 0 0 1-65 64L90 376a45 45 0 0 1 0-64l142-142a45 45 0 1 1 64 65l-63 62-3 4z', transfer: 'M916.25 348.726l-125 124.688c-7.808 7.79-18.032 11.68-28.25 11.68-10.254 0.002-20.506-3.918-28.32-11.75-15.602-15.64-15.57-40.966 0.070-56.568l56.508-56.368h-655.258c-22.092 0-40-17.908-40-40s17.908-40 40-40h655.672l-57.006-57.206c-15.594-15.646-15.548-40.972 0.1-56.566s40.972-15.55 56.568 0.098l125 125.438c15.588 15.644 15.548 40.958-0.084 56.554zM107.666 731.892l125 125.438c15.596 15.648 40.92 15.692 56.568 0.098s15.694-40.92 0.1-56.566l-57.006-57.206h655.672c22.092 0 40-17.908 40-40s-17.908-40-40-40h-655.258l56.508-56.368c15.64-15.602 15.672-40.928 0.070-56.568-7.814-7.832-18.066-11.752-28.32-11.75-10.218 0-20.442 3.89-28.25 11.68l-125 124.688c-15.632 15.596-15.672 40.91-0.084 56.554z', redirect: 'M913.852 702.796c-15.594-15.648-40.922-15.694-56.57-0.1l-57.204 57.006v-451.424c0-0.372-0.028-0.736-0.074-1.098-0.458-99.016-80.86-179.15-179.988-179.15-99.412 0-180 80.592-180 180 0 0.084 0.004 0.166 0.004 0.248h-0.004v343.504h-0.006c0 0.082 0.006 0.164 0.006 0.248 0 55.14-44.86 100-100 100s-100-44.86-100-100c0-0.084 0.006-0.166 0.006-0.248h-0.002v-483.752c0-22.092-17.91-40-40-40s-40.004 17.908-40.004 40v483.752c0 0.018 0.002 0.036 0.002 0.054 0 0.064-0.002 0.128-0.002 0.194 0 99.408 80.59 180 180 180 99.412 0 180-80.592 180-180 0-0.084-0.004-0.166-0.004-0.248h0.004v-343.504h0.008c0-0.082-0.008-0.164-0.008-0.248 0-55.138 44.86-100 100-100s100 44.862 100 100c0 0.084-0.008 0.166-0.008 0.248h0.070v451.008l-56.368-56.506c-15.602-15.642-40.93-15.67-56.566-0.070-7.836 7.814-11.754 18.066-11.754 28.32 0 10.218 3.894 20.442 11.68 28.252l124.692 125c15.594 15.632 40.91 15.67 56.554 0.084l125.434-125c15.652-15.598 15.692-40.92 0.102-56.57z', expand: 'M433.4 578.8l6.2 5.2a44.8 44.8 0 010 63.3L238.4 849.1h100.3a44.8 44.8 0 018 88.8l-8 .8H130l-6.2-.5 2.7.3h-.3a44.7 44.7 0 01-24.8-10.2l-.3-.3-.3-.2-.3-.4-.3-.2-.3-.2v-.2h-.1l-.2-.1a45.7 45.7 0 01-13.5-24.8l-.3-1.7a45 45 0 01-.5-5.3V685.7a44.8 44.8 0 0189-8.1l.6 8 .1 100L376.3 584a44.8 44.8 0 0157.1-5.2zm157.2 0a44.8 44.8 0 0157.1 5.2L849 785.7v-100l.8-8.1a44.8 44.8 0 0188.9 8V895a45 45 0 01-.5 5.3l-.3 1.7a38.6 38.6 0 01-2.8 9.4 43.4 43.4 0 01-9.6 14.2l-4.7 4.2 2-1.7.7-.6-.3.4a44.1 44.1 0 01-4.4 3.3l-.6.4a45.8 45.8 0 01-20.4 7h-.3.9l1.8-.3-6.2.5H685.3l-8-.8a44.8 44.8 0 018-88.8h100.3L584.4 647.3a44.8 44.8 0 010-63.3zM98.5 925.5l1.3 1.3.1.2.6.4a45 45 0 002 1.7l.7.6-4.7-4.2zM893.9 85.3h.9-.8l6.2.5a45 45 0 00-1.8-.2l-.9-.1h-1l-.5-.1h-1.2 2.7l.3.1a44.7 44.7 0 0125.4 10.7l.3.3v.1l.3.2.3.2v.2h.1l.2.1.6.6.5.6A45.6 45.6 0 01938 122l.3 1.7c.3 1.8.4 3.6.5 5.3v209.2a44.8 44.8 0 01-89 8.1l-.6-8-.1-100L647.7 440a44.8 44.8 0 01-57.1 5.2l-6.2-5.2a44.8 44.8 0 010-63.3l201.2-201.8H685.3a44.8 44.8 0 01-8-88.8l8-.8H894h-.1zm-555.2 0l8 .8a44.8 44.8 0 01-8 88.8H238.4l201.2 201.8a44.8 44.8 0 010 63.3l-6.2 5.2a44.8 44.8 0 01-57.1-5.2L175 238.3v100l-.8 8.1a44.8 44.8 0 01-88.9-8V129c0-1.7.2-3.5.5-5.3l.3-1.7a38.6 38.6 0 012.8-9.4 43.4 43.4 0 019.6-14.2l4.7-4.2-2 1.7.2-.3a43.7 43.7 0 0124.8-10.2h1.3l.3-.1h2.3-.1 208.7zm582 9l4.8 4.2-1.3-1.3-.1-.2-.5-.4h-.1l-.6-.6-1.4-1.1-.7-.6zm-790.7-9h-2l-.5.1h-1l-.9.2c-.6 0-1.2 0-1.8.2l6.2-.5z', expandalt: 'M479.7 13.4L205.4 287.6a45.7 45.7 0 1064.7 64.7l242-242 241.8 241.9a45.7 45.7 0 1064.7-64.7L544.4 13.4a45.6 45.6 0 00-64.7 0M512 1024a45.6 45.6 0 01-32.3-13.4L205.4 736.5a45.7 45.7 0 1164.7-64.7l241.8 241.8 242-241.9a45.7 45.7 0 1164.7 64.7l-274.3 274.2c-9 9-20.7 13.4-32.4 13.4', collapse: 'M479.7 411L205.4 136.6a45.7 45.7 0 1164.7-64.6L512 314 753.9 72.2a45.7 45.7 0 1164.7 64.6L544.4 411a45.6 45.6 0 01-64.7 0M512 598.3a45.6 45.6 0 00-32.3 13.4L205.4 885.8a45.7 45.7 0 1064.7 64.7l241.8-241.8 242 242a45.7 45.7 0 1064.7-64.7L544.3 611.7c-9-8.9-20.7-13.4-32.4-13.4', grow: 'M541.146 448.384c-1.694-0.216-3.408-0.37-5.162-0.37h-367.968c-1.754 0-3.468 0.152-5.162 0.37-19.646 2.538-34.838 19.292-34.838 39.63v368.032c0 22.094 17.91 40 40 40h367.968c13.808 0 25.98-6.996 33.168-17.636 0.102-0.148 0.184-0.308 0.282-0.458 0.612-0.924 1.2-1.862 1.722-2.838 0.046-0.082 0.080-0.172 0.124-0.254 2.994-5.61 4.704-12.008 4.704-18.808v-368.036c0-20.34-15.192-37.094-34.838-39.632zM208.016 816.046v-288.032h287.968v288.032h-287.968zM736.032 856.046c0 22.090-17.908 40-40 40-22.090 0-40-17.908-40-40v-487.902l-488.016 0.002c-22.090 0-40-17.91-40-40s17.908-40.002 40-40.002h528.016c1.754 0 3.468 0.152 5.162 0.37 19.646 2.538 34.838 19.292 34.838 39.63v527.902zM896.032 168.030v688.004c-0.002 22.088-17.91 39.996-40 39.996s-40.002-17.908-40.002-40c0 0 0.002-304.026 0.002-304.040v-343.96h-343.96c-0.014 0-304.040 0.002-304.040 0.002-22.090 0-40-17.91-40-40s17.908-40.002 40-40.002h688c1.754 0 3.468 0.152 5.162 0.37 19.646 2.536 34.838 19.29 34.838 39.63z', arrowleft: 'M257.93 511.976c0-10.236 3.902-20.47 11.71-28.282l344.098-344.158c15.622-15.624 40.946-15.624 56.57-0.006 15.622 15.622 15.624 40.948 0.004 56.568l-315.82 315.876 315.868 315.922c15.618 15.624 15.618 40.952-0.004 56.568-15.622 15.62-40.95 15.618-56.57-0.006l-344.146-344.202c-7.808-7.81-11.71-18.044-11.71-28.28z', arrowup: 'M512.024 256c10.236 0 20.47 3.904 28.282 11.712l344.154 344.098c15.624 15.62 15.624 40.946 0.006 56.57-15.622 15.622-40.948 15.624-56.568 0.004l-315.876-315.82-315.922 315.868c-15.624 15.618-40.952 15.618-56.568-0.004-15.62-15.624-15.618-40.95 0.006-56.57l344.204-344.144c7.81-7.81 18.046-11.714 28.282-11.714z', arrowdown: 'M511.976 768.002c-10.236 0-20.47-3.904-28.282-11.712l-344.154-344.098c-15.624-15.62-15.624-40.946-0.006-56.57 15.622-15.622 40.948-15.624 56.568-0.004l315.876 315.82 315.922-315.868c15.624-15.618 40.952-15.616 56.568 0.004 15.62 15.624 15.618 40.95-0.006 56.57l-344.204 344.144c-7.81 7.81-18.046 11.714-28.282 11.714z', arrowright: 'M768.072 514.022c0 10.236-3.904 20.47-11.712 28.282l-344.098 344.156c-15.62 15.624-40.946 15.624-56.568 0.006-15.622-15.622-15.624-40.948-0.006-56.568l315.82-315.876-315.868-315.922c-15.618-15.624-15.618-40.952 0.004-56.568 15.624-15.62 40.95-15.618 56.57 0.006l344.144 344.204c7.81 7.81 11.714 18.044 11.714 28.28z', chevrondown: 'M511.976 833c-10.236 0-20.47-3.904-28.282-11.712l-471.934-471.874c-15.624-15.62-15.624-40.946-0.006-56.57 15.622-15.622 40.948-15.624 56.568-0.004l443.652 443.598 443.61-443.556c15.624-15.618 40.952-15.616 56.568 0.004 15.62 15.624 15.618 40.95-0.006 56.57l-471.89 471.832c-7.808 7.808-18.044 11.712-28.28 11.712z', back: 'M512 932.6c-112.3 0-218-43.8-297.4-123.2A417.8 417.8 0 0191.4 512c0-112.3 43.8-218 123.2-297.4A417.8 417.8 0 01512 91.4c112.3 0 218 43.8 297.4 123.2A417.8 417.8 0 01932.6 512c0 112.3-43.8 218-123.2 297.4A417.8 417.8 0 01512 932.6zm0 91.4A512 512 0 10512 0a512 512 0 000 1024zM232.7 542.5l142.8 143.3a45.7 45.7 0 0064.8-64.5L375 555.9h383.7a45.7 45.7 0 000-91.4H375.6l64.6-64.4a45.7 45.7 0 10-64.6-64.8L232.8 477.8a45.7 45.7 0 00-.1 64.6z', download: 'M543.8 791.3a45.7 45.7 0 01-64.6 0l-142.5-143a45.6 45.6 0 010-64.6 45.7 45.7 0 0164.7 0l64.5 64.7V265.2a45.7 45.7 0 1191.4 0v383.6l65.4-65.1a45.7 45.7 0 1164.5 64.8L543.8 791.3zM1024 512A512 512 0 110 512a512 512 0 011024 0zm-91.4 0c0-112.3-43.8-218-123.2-297.4A417.8 417.8 0 00512 91.4c-112.3 0-218 43.8-297.4 123.2A417.8 417.8 0 0091.4 512c0 112.3 43.8 218 123.2 297.4A417.8 417.8 0 00512 932.6c112.3 0 218-43.8 297.4-123.2A417.8 417.8 0 00932.6 512z', upload: 'M480.2 232.7a45.7 45.7 0 0164.6 0l142.5 143a45.6 45.6 0 010 64.6 45.7 45.7 0 01-64.7 0L558 375.5v383.2a45.7 45.7 0 11-91.4 0V375.2l-65.4 65.1a45.7 45.7 0 11-64.5-64.8l143.4-142.8zM0 512a512 512 0 111024 0A512 512 0 010 512zm91.4 0c0 112.3 43.8 218 123.2 297.4A417.8 417.8 0 00512 932.6c112.3 0 218-43.8 297.4-123.2A417.8 417.8 0 00932.6 512c0-112.3-43.8-218-123.2-297.4A417.8 417.8 0 00512 91.4c-112.3 0-218 43.8-297.4 123.2A417.8 417.8 0 0091.4 512z', proceed: 'M791.3 480.2L648.5 336.8a45.7 45.7 0 10-64.8 64.5l65.1 65.4H265.2a45.7 45.7 0 100 91.4h383.2l-64.6 64.5a45.7 45.7 0 0064.6 64.7l142.8-142.5a45.7 45.7 0 00.1-64.6M512 0a512 512 0 100 1024A512 512 0 00512 0m0 91.4c112.3 0 218 43.8 297.4 123.2A417.8 417.8 0 01932.6 512c0 112.3-43.8 218-123.2 297.4A417.8 417.8 0 01512 932.6c-112.3 0-218-43.8-297.4-123.2A417.8 417.8 0 0191.4 512c0-112.3 43.8-218 123.2-297.4A417.8 417.8 0 01512 91.4', info: 'M874.04 149.96c199.95 199.95 199.95 524.14 0 724.08-199.95 199.95-524.13 199.95-724.08 0-199.95-199.95-199.95-524.13 0-724.08 199.95-199.95 524.13-199.95 724.08 0zM512 91.43c-112.34 0-217.95 43.75-297.39 123.18-79.43 79.44-123.18 185.05-123.18 297.4 0 112.33 43.75 217.94 123.18 297.38 79.44 79.43 185.05 123.18 297.4 123.18 112.33 0 217.94-43.75 297.38-123.18C888.82 729.95 932.57 624.34 932.57 512c0-112.34-43.75-217.95-123.18-297.39C729.95 135.18 624.34 91.43 512 91.43zm1.14 318.96a45.73 45.73 0 00-45.11 38.3l-.6 7.42v274.28a45.71 45.71 0 0090.83 7.42l.6-7.42V456.11a45.72 45.72 0 00-45.72-45.72zm0-162.25a45.72 45.72 0 100 91.44 45.72 45.72 0 000-91.44z', question: 'M874.04 149.96c199.95 199.95 199.95 524.13 0 724.08-199.95 199.95-524.13 199.95-724.08 0-199.95-199.95-199.95-524.13 0-724.08 199.95-199.95 524.13-199.95 724.08 0zM512 91.43c-112.34 0-217.95 43.75-297.39 123.18-79.43 79.44-123.18 185.05-123.18 297.4 0 112.33 43.75 217.95 123.18 297.38 79.44 79.43 185.05 123.18 297.4 123.18 112.33 0 217.94-43.75 297.38-123.18C888.82 729.96 932.57 624.34 932.57 512c0-112.34-43.75-217.95-123.18-297.39C729.95 135.18 624.34 91.43 512 91.43zm1.14 640.9a45.72 45.72 0 100 91.43 45.72 45.72 0 000-91.44zm-1.14-549c-111.3 0-201.52 90.22-201.52 201.52a45.71 45.71 0 0090.84 7.41l.6-7.47c.03-60.68 49.4-110.03 110.08-110.03 60.7 0 110.1 49.38 110.1 110.09 0 60.7-49.4 110.09-110.1 110.09v.17a45.68 45.68 0 00-44.57 45.65v100.58a45.7 45.7 0 1091.42 0v-60.46c88.7-21.12 154.67-100.87 154.67-196.03 0-111.3-90.22-201.52-201.52-201.52z', support: 'M512 932.57c-87.57 0-171.05-26.59-241.23-75.93l106-106a273.98 273.98 0 00135.26 35.62c46.7 0 93.41-11.88 135.22-35.6l105.98 105.98c-70.19 49.34-153.66 75.93-241.23 75.93m-344.64-661.8l105.97 105.98c-47.44 83.63-47.43 186.86.02 270.49L167.36 753.22C118.02 683.04 91.43 599.56 91.43 512c0-87.57 26.59-171.05 75.93-241.23m585.87-103.41L647.29 273.3a273.95 273.95 0 00-135.26-35.61c-46.74 0-93.47 11.9-135.3 35.63L270.77 167.36C340.96 118.02 424.43 91.43 512 91.43s171.05 26.59 241.23 75.93m-370.5 473.91c-71.3-71.3-71.3-187.3 0-258.6a181.7 181.7 0 01129.3-53.55h.02c48.83 0 94.74 19.02 129.28 53.56 71.29 71.29 71.29 187.3 0 258.6a181.66 181.66 0 01-129.3 53.55 181.67 181.67 0 01-129.3-53.56m473.91 111.95L750.68 647.27c47.48-83.65 47.48-186.91.02-270.56l105.94-105.94c49.34 70.18 75.93 153.66 75.93 241.23s-26.59 171.04-75.93 241.22m17.4-603.26c-199.95-199.95-524.13-199.95-724.08 0-199.95 199.95-199.95 524.13 0 724.08 199.95 199.95 524.13 199.95 724.08 0 199.95-199.95 199.95-524.13 0-724.08', alert: 'M511.998 623.846c-22.090 0-40-17.906-40-40v-208c0-22.090 17.91-40 40-40v0c22.090 0 40.004 17.91 40.004 40v208c0 22.094-17.914 40-40.004 40v0zM511.998 743.846c22.090 0 40.004-17.906 40.004-40v0c0-22.090-17.914-40-40.004-40v0c-22.090 0-40 17.91-40 40v0c0 22.094 17.91 40 40 40v0zM512.142 211.808l-340.074 589.028h680.148l-340.074-589.028zM512.142 92.51c14.5 0 29 9.526 40 28.58l398.638 690.462c22 38.106 4 69.282-40 69.282h-797.278c-44 0-62-31.176-40-69.282l398.638-690.462c11.002-19.052 25.502-28.58 40.002-28.58v0z', bell: 'M901.344 760.018l-57.644-77.648c-7.906-7.906-11.77-38.284-11.71-48.646h0.042v-200.588h-0.364c-6.878-148.106-114.428-269.902-255.792-298.528 0.208-2.1 0.318-4.228 0.318-6.384 0-35.452-28.738-64.194-64.194-64.194-35.458 0-64.194 28.742-64.194 64.194 0 2.19 0.112 4.352 0.326 6.486-141.128 28.802-248.446 150.488-255.316 298.426h-0.364v200.588h0.042c0.058 10.362-3.804 40.74-11.71 48.646l-57.644 77.648c-8.802 8.802-16.35 18.978-16.35 32.208 0 22.092 17.908 40 40 40h255.876c-0.814 5.412-1.28 10.936-1.28 16.576 0 61.43 49.794 111.23 111.23 111.23 61.432 0 111.228-49.8 111.228-111.23 0-5.638-0.464-11.164-1.282-16.576h255.128c22.092 0 40-17.908 40-40 0.004-13.23-7.542-23.404-16.346-32.208zM272.732 436.848c2.862-61.602 29.032-119.104 73.69-161.91 44.786-42.93 103.628-66.62 165.692-66.706h0.26c62.062 0.086 120.906 23.776 165.692 66.706 44.658 42.806 70.828 100.308 73.69 161.91l0.278 5.962v149.384h-479.58v-149.384l0.278-5.962zM543.846 848.8c0 17.22-14.010 31.23-31.228 31.23-17.22 0-31.23-14.010-31.23-31.23 0-6.096 1.784-11.768 4.82-16.576h52.818c3.038 4.81 4.82 10.482 4.82 16.576zM512.484 752.226h-283.922l14.572-19.63c12.064-14.542 20.078-33.27 24.982-58.158 0.146-0.742 0.276-1.496 0.416-2.244h487.42c0.138 0.748 0.268 1.5 0.414 2.244 4.904 24.888 12.918 43.616 24.982 58.158l14.572 19.63h-283.436z', rss: 'M256.094 865.048c0 53.020-42.972 96-96 96-53.020 0-96-42.98-96-96 0-53.016 42.98-96 96-96s96 42.984 96 96zM510.020 918.352c-0.018-0.172-0.042-0.344-0.050-0.52-0.054-0.676-0.124-1.34-0.214-2.004-10.582-105.644-57.866-200.46-128.894-271.536v0c-71.074-71.054-165.906-118.352-271.564-128.934-0.664-0.090-1.33-0.16-2.006-0.214-0.174-0.016-0.348-0.040-0.52-0.054-0.254-0.024-0.5-0.024-0.742-0.008-0.64-0.032-1.278-0.098-1.922-0.098-22.098 0-40 17.908-40 40 0 20.582 15.542 37.516 35.536 39.738 0.042 0.004 0.066 0.036 0.106 0.040 84.82 8.098 163.514 45.024 224.542 106.042v0c61.036 61.036 97.964 139.738 106.070 224.574 0.004 0.040 0.036 0.070 0.042 0.106 2.222 19.988 19.156 35.536 39.736 35.536 22.092 0 40-17.902 40-40 0-0.644-0.066-1.282-0.098-1.922 0-0.246 0-0.492-0.022-0.746zM734.688 918.45c-0.004-0.090-0.018-0.186-0.024-0.276-0.040-0.544-0.058-1.102-0.124-1.638-10.972-167.816-83.558-318.804-195.33-430.616h0.002c-111.812-111.788-262.81-184.384-430.644-195.36-0.542-0.060-1.094-0.084-1.642-0.122-0.092-0.008-0.182-0.016-0.272-0.022-0.020-0.002-0.042 0.004-0.054 0.004-0.836-0.052-1.664-0.124-2.512-0.124-22.092 0-40 17.908-40 40 0 21.036 16.246 38.24 36.874 39.842 0.046 0.008 0.078 0.038 0.128 0.042 66.876 4.086 131.786 19.292 193.406 45.358 70.472 29.81 133.78 72.494 188.166 126.874v0c54.394 54.396 97.090 117.71 126.902 188.204 26.064 61.624 41.274 126.532 45.362 193.408 0.004 0.052 0.036 0.080 0.042 0.13 1.604 20.624 18.802 36.87 39.844 36.87 22.090 0 40-17.904 40-40 0-0.85-0.074-1.678-0.126-2.514-0.002-0.024 0.006-0.040 0.002-0.060zM959.126 920.556c-0.002-0.094 0.008-0.164 0.004-0.262-10.342-231.204-108.314-439.604-261.486-592.796v-0.002c-153.2-153.19-361.61-251.174-592.828-261.518-0.096-0.004-0.168 0.006-0.262 0.004-0.176-0.004-0.348-0.030-0.524-0.030-22.098 0-40 17.91-40 40 0 20.988 16.168 38.164 36.716 39.834 0.184 0.042 0.356 0.086 0.566 0.098 97.040 4.314 191.186 25.538 280.376 63.258 97.14 41.090 184.406 99.928 259.368 174.876v0c74.96 74.964 133.81 162.24 174.908 259.398 37.718 89.19 58.946 183.336 63.26 280.376 0.010 0.208 0.052 0.38 0.096 0.562 1.67 20.552 18.848 36.72 39.834 36.72 22.092 0 40-17.906 40-40-0-0.17-0.024-0.342-0.028-0.518z', edit: 'M948.56 263.376c12.704-12.708 15.072-31.836 7.11-46.936-1.84-3.524-4.232-6.832-7.192-9.792-0.286-0.286-0.594-0.528-0.886-0.8l-129.318-128.634c-0.048-0.048-0.088-0.106-0.138-0.154-7.812-7.812-18.050-11.716-28.292-11.714-10.242-0.004-20.484 3.902-28.296 11.714-0.064 0.066-0.12 0.136-0.184 0.204l-636.168 636.168c-5.868 5.134-10.21 11.958-12.298 19.748l-47.606 177.664c-3.7 13.804 0.248 28.534 10.352 38.638 7.602 7.6 17.816 11.714 28.288 11.714 3.452 0 6.93-0.446 10.352-1.364l177.664-47.606c7.296-1.956 13.732-5.904 18.74-11.216l521.486-521.484c1.126-0.904 2.222-1.87 3.268-2.914 1.042-1.044 2.006-2.138 2.91-3.264l107.75-107.748c0.836-0.71 1.668-1.432 2.458-2.224zM806.9 291.66l-73.592-73.202 56.61-56.61 73.594 73.2-56.612 56.612zM281.566 816.996l-73.4-73.4 468.572-468.568 73.594 73.202-468.766 468.766zM160.496 864.628l11.742-43.822 32.080 32.080-43.822 11.742z', paintbrush: 'M946.58 293.66c12.704-12.708 15.072-31.836 7.108-46.938-1.838-3.524-4.23-6.83-7.19-9.79-0.282-0.282-0.588-0.52-0.876-0.792l-129.338-128.654c-0.046-0.046-0.084-0.098-0.13-0.144-7.814-7.812-18.056-11.718-28.296-11.714-10.24 0-20.48 3.906-28.292 11.714-0.064 0.066-0.12 0.138-0.184 0.206l-557.048 557.048c-2.194 2.192-4.042 4.59-5.622 7.11-70.624 87.486-17.922 195.43-174.738 239.554 0 0 64.758 18.11 144.33 18.11 74.374 0 161.678-15.824 221.23-77.020 0.394-0.364 0.808-0.696 1.192-1.078l1.734-1.734c0.852-0.798 1.678-1.578 2.504-2.426 0.348-0.356 0.668-0.728 1.010-1.086l168.756-168.756c1.126-0.906 2.224-1.872 3.272-2.918 1.044-1.044 2.008-2.14 2.914-3.266l375.212-375.212c0.834-0.706 1.664-1.424 2.452-2.214zM537.462 589.402l-73.594-73.206 324.068-324.064 73.594 73.2-324.068 324.070zM388.178 667.684c-13.288-13.632-28.584-23.974-44.78-31.016l63.902-63.902 73.596 73.204-64.246 64.248c-6.498-15.23-15.964-29.698-28.472-42.534zM229.848 791.928c8.294-30.346 14.852-54.332 32.416-73.862 0.83-0.864 2.664-2.702 4.26-4.286 8.030-6.792 17.534-8.246 24.198-8.246 14.386 0 29.026 6.554 40.162 17.98 19.592 20.106 21.934 49.238 5.596 66.874l-1.712 1.712c-0.798 0.752-1.612 1.524-2.462 2.354l-0.86 0.84-0.834 0.864c-30.666 31.79-75.914 45.424-118.104 50.542 7.53-18.888 12.598-37.426 17.34-54.772z', close: 'M150 150a512 512 0 11724 724 512 512 0 01-724-724zm69.3 64.2A418.5 418.5 0 0095.9 512a418.5 418.5 0 00123.4 297.8A418.5 418.5 0 00517 933.2 418.5 418.5 0 00815 809.8 418.5 418.5 0 00938.4 512 418.5 418.5 0 00815 214.2 418.5 418.5 0 00517 90.8a418.5 418.5 0 00-297.8 123.4zM655 304a46 46 0 0165 65L577 512l143 143a46 46 0 11-65 65L512 577 369 720a46 46 0 11-65-65l143-143-143-143a46 46 0 0165-65l143 143 143-143z', closeAlt: 'M586.7 512L936 861.4a52.8 52.8 0 0 1-74.6 74.7L512 586.7 162.6 936A52.8 52.8 0 0 1 88 861.4L437.3 512 88 162.6A52.8 52.8 0 1 1 162.6 88L512 437.3 861.4 88a52.8 52.8 0 1 1 74.7 74.7L586.7 512z', trash: 'M919.5 225.208h-215.5v-120.080c0-20.344-15.192-37.096-34.836-39.632-1.696-0.216-3.41-0.372-5.164-0.372h-304.004c-1.754 0-3.468 0.152-5.164 0.372-19.644 2.54-34.836 19.292-34.836 39.628v120.084h-215.996c-22.090 0-40 17.912-40 40.002 0 22.092 17.91 40 40 40h27.216l53.916 615.914h0.214c0 22.092 17.91 40 40 40h573.372c22.094 0 40-17.91 40-40h0.148l53.916-615.914h26.716c22.090 0 40-17.91 40-40s-17.908-40.002-39.998-40.002zM399.996 145.126h224.004v80.082h-224.004v-80.082zM762.062 881.124h-500.124l-50.414-575.912h600.954l-50.416 575.912zM632.004 697.124v-240c-0.004-22.092 17.906-40.002 40-40.002 22.090 0.002 40 17.908 40 40.002l-0.004 240.002c0.004 22.088-17.906 39.996-39.996 39.998-22.094 0.002-40.004-17.906-40-40zM311.996 697.124v-240c-0.004-22.092 17.906-40.002 40-40.002 22.090 0.002 40 17.908 40 40.002l-0.004 240.002c0.004 22.088-17.906 39.996-39.996 39.998-22.094 0.002-40.004-17.906-40-40zM472 697.124v-240c-0.004-22.092 17.906-40.002 40-40.002 22.090 0.002 40 17.908 40 40.002l-0.004 240.002c0.004 22.088-17.906 39.996-39.996 39.998-22.094 0.002-40.004-17.906-40-40z', cross: 'M1013.286 955.716l-443.72-443.716 443.718-443.718c15.622-15.622 15.62-40.948-0.004-56.566-15.618-15.622-40.942-15.622-56.562 0l-443.716 443.718-443.72-443.718c-15.62-15.624-40.946-15.622-56.566 0-15.622 15.62-15.622 40.944 0 56.566l443.722 443.718-443.722 443.722c-15.622 15.618-15.62 40.942 0 56.56s40.948 15.622 56.566 0l443.72-443.718 443.722 443.718c15.618 15.624 40.942 15.622 56.56 0 15.62-15.618 15.622-40.944 0.002-56.566z', delete: 'M874 150A512 512 0 10150 874 512 512 0 00874 150zm-659.4 64.6A417.8 417.8 0 01512 91.4c97 0 188.9 32.6 263.3 92.6L184 775.3A417.4 417.4 0 0191.4 512c0-112.4 43.7-218 123.2-297.4zm594.8 594.8A417.8 417.8 0 01512 932.6c-97 0-189-32.7-263.3-92.6L840 248.7A417.4 417.4 0 01932.6 512c0 112.3-43.8 218-123.2 297.4z', add: 'M512-.2a512 512 0 110 1024 512 512 0 010-1024zm0 91.4c-112.3 0-218 43.8-297.4 123.2A417.8 417.8 0 0091.4 511.8c0 112.4 43.8 218 123.2 297.4A417.8 417.8 0 00512 932.4c112.3 0 218-43.8 297.4-123.2a417.8 417.8 0 00123.2-297.4c0-112.3-43.8-218-123.2-297.4A417.8 417.8 0 00512 91.2zm1.1 129.2a45.7 45.7 0 0145.7 45.7v201.1H760a45.7 45.7 0 010 91.5H558.8v201.1a45.7 45.7 0 11-91.4 0V558.7H266.3a45.7 45.7 0 110-91.5h201.1V266.1a45.7 45.7 0 0145.7-45.7z', subtract: 'M512 0a512 512 0 110 1024A512 512 0 01512 0zm4 94A418 418 0 0094 515a418 418 0 00422 422 418 418 0 00421-422A418 418 0 00516 94zm244 372a46 46 0 010 92H264a46 46 0 110-92z', plus: 'M921.002 473h-368.008v-368.004c0.002-22.090-17.906-39.996-39.996-39.996-22.088 0-39.998 17.91-39.998 40v368h-368.002c-22.094 0-40 17.908-39.998 40-0.002 22.090 17.904 39.996 39.996 39.996l368.004-0.002v368.010c0 22.094 17.908 40 40 39.996 22.090 0.004 39.996-17.902 39.996-39.996v-368.010h368.010c22.090 0.002 39.994-17.906 39.994-39.996-0-22.088-17.908-39.998-39.998-39.998z', document: 'M764 1c12 0 24 4 32 13l129 132c9 8 13 20 13 31v802c0 24-20 44-45 44H131c-25 0-45-20-45-44V45c0-24 20-44 45-44h633zm-48 89H175v844h674l-1-707h-87c-22 0-40-15-44-36v-8l-1-93zm-16 584a45 45 0 0 1 8 89H324a45 45 0 0 1-8-88l8-1h376zm0-187a45 45 0 0 1 8 89l-8 1H324a45 45 0 0 1-8-89l8-1h376zm0-186a45 45 0 0 1 8 88l-8 1H324a45 45 0 0 1-8-89h384z', folder: 'M571 274h327c23 0 41 18 41 41v488c0 22-18 40-41 40H126c-23 0-41-18-41-40V242c0-34 27-61 61-61h317c18 0 35 7 47 21l61 72zm-119-8H170v492h684V359H531l-79-93z', component: 'M171 469h298V171H246c-42 0-75 33-75 75v223zm0 86v223c0 42 33 75 75 75h223V555H171zm682-86V246c0-42-33-75-75-75H555v298h298zm0 86H555v298h223c42 0 75-33 75-75V555zM256 85h512c94 0 171 77 171 171v512c0 94-77 171-171 171H256c-94 0-171-77-171-171V256c0-94 77-171 171-171z', calendar: 'M920.036 160.030h-112.004v-72c0-22.092-17.906-40.004-40-40.004-22.090 0-40 17.906-40 40v72.004h-432v-72c0-22.092-17.906-40.004-40-40.004-22.090 0-40 17.906-40 40v72.004h-112.004c-1.38 0-2.746 0.070-4.090 0.208-20.168 2.046-35.91 19.080-35.91 39.792v688c0 22.090 17.91 40 40 40h816.008c22.098 0 40-17.91 40-40v-688c0-22.094-17.908-40-40-40zM356.032 848.026h-212.004v-142.662h212.004v142.662zM356.032 665.364h-212.004v-162.664h212.004v162.664zM356.032 462.7h-212.004v-142.662h212.004v142.662zM628.032 848.026h-232v-142.662h232v142.662zM628.032 665.364h-232v-162.664h232v162.664zM628.032 462.7h-232v-142.662h232v142.662zM880.036 848.026h-212.004v-142.662h212.004v142.662zM880.036 665.364h-212.004v-162.664h212.004v162.664zM880.036 462.7h-212.004v-142.662h212.004v142.662z', graphline: 'M820.536 489.23c-15.624 15.618-40.954 15.618-56.57 0l-42.006-42.002-169.898 169.9c-7.822 7.82-18.076 11.722-28.326 11.712-10.248 0.008-20.496-3.894-28.314-11.712l-96.178-96.182-140.67 140.674c-15.624 15.622-40.954 15.618-56.57-0.004-15.624-15.618-15.624-40.946 0-56.566l168.946-168.946c7.812-7.816 18.058-11.72 28.3-11.716 10.238-0.002 20.476 3.904 28.29 11.716l96.204 96.204 168.91-168.91c0.33-0.356 0.626-0.73 0.972-1.076 7.824-7.824 18.084-11.726 28.34-11.712 10.252-0.012 20.508 3.892 28.332 11.714 0.346 0.346 0.64 0.72 0.972 1.074l69.266 69.266c15.62 15.618 15.616 40.942 0 56.566zM880 144h-736v736h736v-736zM920 64c22.092 0 40 17.908 40 40v816c0 22.092-17.908 40-40 40h-816c-22.092 0-40-17.908-40-40v-816c0-22.092 17.908-40 40-40h816z', docchart: 'M919.938 128h-816.008c-1.38 0-2.746 0.070-4.090 0.208-20.168 2.046-35.91 19.080-35.91 39.792v688c0 22.090 17.91 40 40 40h816.008c22.098 0 40-17.91 40-40v-688c0-22.094-17.906-40-40-40zM395.934 470.67h232v162.664h-232v-162.664zM355.934 633.334h-212.004v-162.664h212.004v162.664zM395.934 430.67v-142.662h232v142.662h-232zM667.934 470.67h212.004v162.664h-212.004v-162.664zM667.934 430.67v-142.662h212.004v142.662h-212.004zM355.934 288.008v142.662h-212.004v-142.662h212.004zM143.93 673.334h212.004v142.662h-212.004v-142.662zM395.934 673.334h232v142.662h-232v-142.662zM667.934 673.334h212.004v142.662h-212.004v-142.662z', doclist: 'M919.938 128h-816.008c-1.38 0-2.746 0.070-4.090 0.208-20.168 2.046-35.91 19.080-35.91 39.792v688c0 22.090 17.91 40 40 40h816.008c22.098 0 40-17.91 40-40v-688c-0-22.094-17.906-40-40-40zM143.93 288.008h736.008v527.988h-736.008v-527.988zM248 400.004c0-22.090 17.91-40 40-40h448c22.094 0 40 17.906 40 40 0 22.090-17.906 40-40 40h-448c-22.090 0-40-17.91-40-40zM776 552.002c0 22.094-17.906 40-40 40h-448c-22.090 0-40-17.906-40-40 0-22.090 17.91-40 40-40h448c22.094 0 40 17.91 40 40zM776 704c0 22.094-17.906 40-40 40h-448c-22.090 0-40-17.906-40-40 0-22.090 17.91-40 40-40h448c22.094 0 40 17.91 40 40z', category: 'M925.224 256.37c-1.694-0.216-3.408-0.37-5.162-0.37h-816c-1.754 0-3.468 0.152-5.162 0.37-19.646 2.538-34.838 19.292-34.838 39.63v624c0 22.094 17.91 40 40 40h816c13.808 0 25.98-6.996 33.168-17.636 0.102-0.148 0.184-0.308 0.282-0.458 0.612-0.924 1.2-1.862 1.722-2.838 0.046-0.082 0.080-0.172 0.124-0.254 2.994-5.61 4.704-12.008 4.704-18.808v-624.004c0-20.342-15.19-37.096-34.838-39.632zM144.062 880v-544h736v544h-736zM896.11 180c0 11.044-8.954 20-20 20h-728.032c-11.046 0-20-8.956-20-20v0c0-11.046 8.954-20 20-20h728.032c11.046 0 20 8.954 20 20v0zM832.094 84c0 11.044-8.954 20-20 20h-600c-11.046 0-20-8.956-20-20v0c0-11.046 8.954-20 20-20h600c11.046 0 20 8.954 20 20v0z', grid: 'M437.162 552.368c-1.694-0.216-3.408-0.37-5.162-0.37h-263.978c-1.754 0-3.468 0.152-5.162 0.37-19.646 2.538-34.838 19.292-34.838 39.63v264.040c0 22.094 17.91 40 40 40h263.978c13.808 0 25.98-6.996 33.168-17.636 0.102-0.148 0.184-0.308 0.282-0.458 0.612-0.924 1.2-1.862 1.722-2.838 0.046-0.082 0.080-0.172 0.124-0.254 2.994-5.61 4.704-12.008 4.704-18.808v-264.044c0-20.34-15.19-37.094-34.838-39.632zM208.022 816.038v-184.040h183.978v184.040h-183.978zM437.162 128.4c-1.694-0.216-3.408-0.37-5.162-0.37h-263.978c-1.754 0-3.468 0.152-5.162 0.37-19.646 2.538-34.838 19.292-34.838 39.63v263.968c0 22.094 17.91 40 40 40h263.978c13.808 0 25.98-6.996 33.168-17.636 0.102-0.148 0.184-0.308 0.282-0.458 0.612-0.924 1.2-1.862 1.722-2.838 0.046-0.082 0.080-0.172 0.124-0.254 2.994-5.61 4.704-12.008 4.704-18.808v-263.972c0-20.342-15.19-37.096-34.838-39.632zM208.022 392v-183.968h183.978v183.968h-183.978zM861.212 552.368c-1.694-0.216-3.408-0.37-5.162-0.37h-264.050c-1.754 0-3.468 0.152-5.162 0.37-19.646 2.538-34.838 19.292-34.838 39.63v264.040c0 22.094 17.91 40 40 40h264.048c13.808 0 25.98-6.996 33.168-17.636 0.102-0.148 0.184-0.308 0.282-0.458 0.612-0.924 1.2-1.862 1.722-2.838 0.046-0.082 0.080-0.172 0.124-0.254 2.994-5.61 4.704-12.008 4.704-18.808v-264.044c0.002-20.34-15.19-37.094-34.836-39.632zM632 816.038v-184.040h184.048v184.040h-184.048zM861.212 128.4c-1.694-0.216-3.408-0.37-5.162-0.37h-264.050c-1.754 0-3.468 0.152-5.162 0.37-19.646 2.538-34.838 19.292-34.838 39.63v263.968c0 22.094 17.91 40 40 40h264.048c13.808 0 25.98-6.996 33.168-17.636 0.102-0.148 0.184-0.308 0.282-0.458 0.612-0.924 1.2-1.862 1.722-2.838 0.046-0.082 0.080-0.172 0.124-0.254 2.994-5.61 4.704-12.008 4.704-18.808v-263.972c0.002-20.342-15.19-37.096-34.836-39.632zM632 392v-183.968h184.048v183.968h-184.048z', copy: 'M960.132 210.186c0-0.444-0.050-0.874-0.066-1.312-0.024-0.684-0.044-1.366-0.104-2.046-0.060-0.74-0.158-1.468-0.26-2.198-0.080-0.564-0.156-1.128-0.258-1.692-0.146-0.792-0.328-1.566-0.518-2.34-0.124-0.508-0.244-1.014-0.39-1.518-0.224-0.784-0.488-1.548-0.76-2.312-0.176-0.49-0.344-0.98-0.538-1.466-0.302-0.754-0.642-1.486-0.988-2.216-0.224-0.472-0.436-0.946-0.68-1.41-0.398-0.762-0.838-1.496-1.284-2.228-0.242-0.396-0.466-0.798-0.722-1.19-0.608-0.924-1.262-1.81-1.942-2.678-0.132-0.168-0.248-0.346-0.382-0.512-0.98-1.212-2.028-2.364-3.14-3.454l-104.020-104.9c-3.714-3.714-7.988-6.518-12.542-8.464-0.088-0.040-0.174-0.084-0.262-0.122-0.994-0.418-2.006-0.774-3.024-1.108-0.242-0.080-0.474-0.176-0.72-0.252-0.942-0.288-1.894-0.516-2.854-0.732-0.334-0.076-0.658-0.176-0.996-0.244-0.998-0.2-2.004-0.336-3.010-0.458-0.306-0.038-0.606-0.1-0.912-0.13-1.322-0.13-2.65-0.204-3.976-0.204h-391.784c-1.754 0-3.468 0.152-5.162 0.372-19.646 2.538-34.838 19.29-34.838 39.628v145.516h-279.874c-1.754 0-3.468 0.152-5.162 0.372-19.646 2.538-34.838 19.29-34.838 39.628v628.28c0 22.094 17.91 40 40 40h496.118c13.808 0 25.98-6.996 33.168-17.636 0.102-0.148 2.084-3.466 2.128-3.548 2.992-5.612 4.704-12.010 4.704-18.808 0 0 0 0 0-0.004v-145.518h279.874c13.808 0 25.98-6.996 33.168-17.636 0.102-0.148 2.084-3.466 2.128-3.548 2.992-5.612 4.704-12.010 4.704-18.808 0 0 0 0 0-0.004v-521.828c0.008-0.23-0.016-0.458-0.014-0.688 0.002-0.202 0.028-0.39 0.028-0.584zM144.124 878.792v-548.278h311.752v65.186c0 22.090 17.91 40 40 40h64.366v443.092h-416.118zM640.244 693.278v-296.31c0.006-0.23-0.018-0.458-0.014-0.688 0.004-0.196 0.030-0.382 0.030-0.578 0-0.444-0.052-0.874-0.066-1.312-0.024-0.684-0.044-1.366-0.104-2.046-0.062-0.74-0.16-1.468-0.262-2.198-0.078-0.564-0.152-1.128-0.258-1.692-0.144-0.792-0.324-1.566-0.516-2.34-0.124-0.508-0.246-1.014-0.39-1.518-0.226-0.784-0.488-1.548-0.76-2.312-0.174-0.49-0.342-0.98-0.538-1.466-0.302-0.754-0.64-1.486-0.988-2.216-0.222-0.472-0.438-0.946-0.68-1.41-0.398-0.762-0.838-1.496-1.284-2.228-0.242-0.396-0.466-0.798-0.724-1.19-0.606-0.924-1.262-1.81-1.942-2.678-0.13-0.168-0.246-0.346-0.382-0.512-0.978-1.212-2.028-2.364-3.138-3.454l-104.020-104.9c-3.714-3.714-7.988-6.518-12.542-8.464-0.088-0.040-0.172-0.084-0.262-0.122-0.994-0.418-2.004-0.774-3.024-1.108-0.242-0.080-0.476-0.176-0.72-0.252-0.942-0.288-1.896-0.516-2.854-0.732-0.334-0.076-0.658-0.176-0.996-0.244-0.998-0.2-2.004-0.336-3.012-0.458-0.304-0.038-0.602-0.1-0.91-0.13-1.322-0.13-2.648-0.204-3.976-0.204h-31.916v-105.516h311.752v65.186c0 22.090 17.91 40 40 40h64.366v443.092h-239.87z', certificate: 'M832.032 384.032c0-176.728-143.266-320-320-320s-320 143.272-320 320c0 104.662 50.25 197.584 127.938 255.966v311.5c0 16.174 9.74 30.756 24.682 36.952 4.954 2.052 10.152 3.050 15.31 3.050 10.402 0 20.626-4.060 28.276-11.702l123.726-123.58 123.772 123.332c11.452 11.412 28.644 14.804 43.574 8.608 14.93-6.2 24.66-20.776 24.66-36.942v-311.124c77.756-58.376 128.062-151.342 128.062-256.060zM272.032 384.032c0-64.106 24.964-124.374 70.292-169.706 45.33-45.33 105.6-70.294 169.708-70.294s124.376 24.964 169.708 70.294c45.33 45.332 70.292 105.6 70.292 169.706s-24.964 124.376-70.292 169.704c-45.33 45.33-105.6 70.294-169.708 70.294s-124.376-24.964-169.708-70.294c-45.328-45.328-70.292-105.598-70.292-169.704zM623.968 854.89l-83.804-83.508c-15.622-15.564-40.898-15.552-56.502 0.034l-83.694 83.594v-171.17c34.878 13.042 72.632 20.192 112.062 20.192 39.382 0 77.094-7.13 111.938-20.142v171z', print: 'M925.922 304.496c-1.698-0.218-3.41-0.37-5.166-0.37h-88.64v-93.548c0.006-0.21-0.016-0.422-0.014-0.634 0.004-0.212 0.036-0.416 0.036-0.63 0-0.478-0.054-0.942-0.074-1.416-0.024-0.636-0.042-1.27-0.094-1.906-0.066-0.776-0.168-1.54-0.276-2.302-0.074-0.534-0.146-1.066-0.242-1.596-0.15-0.82-0.338-1.624-0.538-2.424-0.12-0.48-0.23-0.958-0.37-1.436-0.234-0.812-0.506-1.608-0.792-2.398-0.164-0.462-0.322-0.924-0.504-1.38-0.318-0.788-0.668-1.552-1.036-2.316-0.208-0.436-0.406-0.88-0.628-1.312-0.424-0.802-0.88-1.574-1.352-2.344-0.218-0.358-0.422-0.724-0.656-1.078-0.636-0.972-1.324-1.91-2.042-2.82-0.098-0.124-0.182-0.252-0.282-0.376-0.988-1.224-2.048-2.388-3.172-3.488l-104.004-104.882c-3.696-3.696-7.948-6.486-12.466-8.432-0.122-0.050-0.224-0.11-0.344-0.16-0.974-0.41-1.966-0.756-2.962-1.084-0.262-0.086-0.512-0.19-0.78-0.272-0.926-0.284-1.87-0.506-2.812-0.722-0.346-0.080-0.684-0.182-1.034-0.252-0.988-0.198-1.988-0.334-2.988-0.456-0.31-0.040-0.618-0.102-0.93-0.134-1.324-0.132-2.652-0.204-3.978-0.204h-455.67c-1.754 0-3.468 0.152-5.162 0.37-19.646 2.538-34.838 19.29-34.838 39.63v200h-87.356c-1.754 0-3.468 0.152-5.164 0.37-19.644 2.538-34.836 19.29-34.836 39.63v320c0 22.094 17.91 40 40 40h87.368v216c0 22.094 17.91 40 40 40h560.006c13.81 0 25.982-6.996 33.17-17.636 0.102-0.146 0.184-0.306 0.282-0.458 0.612-0.922 1.2-1.86 1.722-2.836 0.046-0.082 0.080-0.17 0.124-0.254 2.994-5.612 4.704-12.008 4.704-18.808 0 0 0 0 0-0.004v-216h88.624c13.808 0 25.982-6.996 33.168-17.636 0.104-0.148 0.186-0.308 0.286-0.458 0.612-0.922 1.198-1.862 1.72-2.836 0.046-0.082 0.082-0.172 0.124-0.256 2.994-5.61 4.702-12.008 4.702-18.806 0 0 0 0 0-0.004v-320c0-20.344-15.186-37.096-34.834-39.636zM272.116 144.128h375.634v65.186c0 1.38 0.070 2.746 0.208 4.090 2.048 20.168 19.080 35.91 39.792 35.91h64.366v54.812h-480v-159.998zM272.124 880.126v-327.998h480.006v327.998zM880.756 384.128v239.998h-48.624v-111.998c0-20.34-15.19-37.092-34.836-39.63-1.694-0.218-565.17-0.372-565.17-0.372-1.754 0-3.468 0.152-5.162 0.372-19.646 2.538-34.838 19.29-34.838 39.628v112h-47.368v-239.998zM664.124 608.126c22.092 0 40 17.908 40 40s-17.908 40-40 40h-304c-22.092 0-40-17.908-40-40s17.908-40 40-40h304zM704.124 784.126c0 22.092-17.908 40-40 40h-304c-22.092 0-40-17.908-40-40s17.908-40 40-40h304c22.092 0 40 17.908 40 40z', listunordered: 'M961 233c0 22.090-17.908 40-40 40h-607.996c-22.090 0-40-17.908-40-40v0c0-22.090 17.908-40.002 40-40.002h607.996c22.092 0 40 17.912 40 40.002v0zM961 793c0-22.090-17.908-40.002-40-40.002h-607.996c-22.092 0-40 17.912-40 40.002v0c0 22.092 17.91 40 40 40h607.996c22.092 0 40-17.91 40-40v0zM961 606.332c0-22.090-17.908-40-40-40h-607.996c-22.092 0-40 17.91-40 40v0c0 22.094 17.91 40 40 40h607.996c22.092 0 40-17.91 40-40v0zM961 419.668c0-22.090-17.908-40.004-40-40.004h-607.996c-22.092 0-40 17.914-40 40.004v0c0 22.090 17.91 40 40 40h607.996c22.092-0 40-17.91 40-40v0zM129 168.998c-35.346 0-64 28.654-64 64s28.654 64 64 64 64-28.654 64-64-28.654-64-64-64zM129 728.998c-35.346 0-64 28.654-64 64s28.654 64 64 64 64-28.654 64-64-28.654-64-64-64zM129 542.332c-35.346 0-64 28.652-64 64 0 35.344 28.654 64 64 64s64-28.656 64-64c0-35.348-28.654-64-64-64zM129 355.664c-35.346 0-64 28.656-64 64 0 35.348 28.654 64 64 64s64-28.652 64-64c0-35.344-28.654-64-64-64z', graphbar: 'M324.832 513c22.090 0 40 17.91 40 40v304c0 22.090-17.906 40-40 40v0c-22.090 0-40-17.906-40-40v-304c0-22.090 17.91-40 40-40v0zM884.832 128.998c-22.090 0-40 17.906-40 40v688.002c0 22.094 17.91 40 40 40v0c22.094 0 40-17.91 40-40v-688.002c0-22.094-17.91-40-40-40v0zM698.164 256.998c-22.090 0-40 17.91-40 40v560.002c0 22.094 17.91 40 40 40v0c22.094 0 40-17.91 40-40v-560.002c0-22.090-17.91-40-40-40v0zM511.5 384.998c-22.090 0-40.004 17.91-40.004 40v432.002c0 22.094 17.914 40 40.004 40v0c22.090 0 40-17.91 40-40v-432.002c0-22.090-17.91-40-40-40v0zM139.168 641c-22.090 0-40 17.91-40 40v176c0 22.094 17.91 40 40 40v0c22.094 0 40-17.91 40-40v-176c0-22.090-17.91-40-40-40v0z', menu: 'M960 232c0 22.092-17.908 40-40.002 40h-815.996c-22.092 0-40-17.908-40-40v0c0-22.090 17.908-40 40-40h815.998c22.092 0 40 17.91 40 40v0zM768 416c0 22.090-17.908 40-40 40h-624c-22.090 0-40-17.908-40-40v0c0-22.090 17.908-40.002 40-40.002h624c22.092 0.002 40 17.914 40 40.002v0zM832 608c0 22.092-17.906 40.002-40 40.002h-688c-22.090 0-40-17.91-40-40.002v0c0-22.090 17.908-40 40-40h688c22.094 0 40 17.912 40 40v0zM576 792c0 22.094-17.91 40-40.002 40h-431.998c-22.090 0-40-17.906-40-40v0c0-22.094 17.908-40.002 40-40.002h432c22.094 0.002 40 17.912 40 40.002v0z', filter: 'M962.030 168.032c0 22.092-17.908 40-40.002 40h-815.996c-22.092 0-40-17.908-40-40v0c0-22.090 17.908-40 40-40h815.998c22.092 0 40 17.908 40 40v0zM770 544.034c0 22.090-17.908 40-40 40h-432c-22.090 0-40-17.908-40-40v0c0-22.090 17.908-40.002 40-40.002h432c22.090 0 40 17.912 40 40.002v0zM642.030 728.032c0 22.094-17.91 40-40.002 40h-175.998c-22.090 0-40-17.906-40-40v0c0-22.094 17.908-40.002 40-40.002h176c22.094 0.002 40 17.91 40 40.002v0zM866 352.030c0 22.092-17.906 40.002-40 40.002h-624c-22.090 0-40-17.91-40-40.002v0c0-22.090 17.908-40 40-40h624c22.092 0 40 17.91 40 40v0zM512.030 928.034c22.090 0 40.004-17.906 40.004-40v0c0-22.090-17.914-40-40.004-40v0c-22.090 0-40 17.91-40 40v0c0 22.092 17.91 40 40 40v0z', ellipsis: 'M184 393c66.274 0 120 53.73 120 120s-53.726 120-120 120c-66.286 0-120-53.73-120-120s53.714-120 120-120zM512 393c66.272 0 120 53.73 120 120s-53.728 120-120 120c-66.286 0-120-53.73-120-120s53.714-120 120-120zM840 393c66.272 0 120 53.73 120 120s-53.728 120-120 120c-66.286 0-120-53.73-120-120s53.714-120 120-120z', cog: 'M512 288a224 224 0 0 0 0 448h2a225 225 0 0 0 52-7 47 47 0 0 0-23-90 130 130 0 0 1-31 3 131 131 0 1 1 127-101v1a47 47 0 1 0 91 19 224 224 0 0 0-218-273zM409 0c-67 14-131 40-186 77v98c0 13-6 25-15 33-8 9-20 15-33 15H77C40 278 14 341 0 409l69 68c9 10 14 22 13 34 1 13-4 25-13 34L0 614c14 68 41 132 78 188h97c13 0 25 6 33 15 9 8 15 20 15 33v97c55 37 119 63 187 77l68-69a46 46 0 0 1 36-13c11 0 23 4 32 13l69 69c68-14 131-40 186-77v-98c0-13 6-25 15-34 8-8 20-14 33-14h98c37-56 63-119 77-186l-69-70c-10-9-14-21-14-34 0-12 4-24 14-34l69-69c-14-67-40-129-77-184h-98c-13 0-25-6-33-15-9-8-15-20-15-33V77C746 40 683 14 615 0l-69 69a46 46 0 0 1-35 14c-11 0-23-5-33-14L409 0zm-28 103l32 32c26 26 61 41 98 41h3c37 0 72-15 98-41l32-31c22 7 43 16 64 26v46c0 37 15 73 42 99 26 27 62 42 99 42h45c11 20 19 41 26 63l-31 31c-26 27-41 63-41 100 0 38 15 74 41 100l32 32c-8 22-17 44-27 65h-45c-37 0-73 15-99 42-27 26-42 62-42 99v44c-21 11-42 20-65 27l-31-31c-26-26-61-41-98-41h-3c-37 0-72 15-98 41l-32 32c-22-8-44-17-65-28v-43c0-37-15-73-42-99-26-27-62-42-99-42h-44c-11-21-20-44-28-67l32-31c26-26 41-62 40-100 1-37-14-73-40-100l-31-30c7-23 16-44 26-65h45c37 0 73-15 99-42 27-26 42-62 42-99v-45c21-10 43-19 65-27z', wrench: 'M959.438 274.25c0-22.090-17.914-40-40.004-40-11.16 0-21.242 4.582-28.496 11.954l-60.152 60.148c-15.622 15.622-40.946 15.618-56.566-0.004l-56.57-56.566c-15.622-15.622-15.622-40.95 0-56.57l59.55-59.546c7.75-7.292 12.614-17.618 12.614-29.102 0-22.090-17.914-40-40.004-40-1.598 0-3.164 0.122-4.71 0.304-0.012 0-0.020-0.008-0.032-0.004-94.958 11.586-168.504 92.492-168.504 190.574 0 23.528 4.238 46.058 11.98 66.886l-503.078 503.074c-1.496 1.496-2.8 3.102-4.012 4.758-10.914 13.676-17.454 30.992-17.454 49.848 0 44.188 35.818 79.996 79.996 79.996 18.906 0 36.27-6.574 49.964-17.54 1.614-1.188 3.18-2.464 4.64-3.926l503.078-503.078c20.828 7.742 43.36 11.98 66.882 11.98 97.988 0 178.828-73.402 190.54-168.222v-0.012c0.2-1.628 0.338-3.272 0.338-4.952zM151.996 912c-22.090 0-40-17.906-40-40 0-22.090 17.91-40 40-40s40.004 17.91 40.004 40c0 22.094-17.914 40-40.004 40z', nut: 'M512 286a229 229 0 0 0-233 226c0 124 104 225 233 225h2a240 240 0 0 0 54-7c21-5 35-24 35-45a48 48 0 0 0-59-45 139 139 0 0 1-32 3c-75 0-136-59-136-131 0-73 61-132 136-132a134 134 0 0 1 132 161v1l-2 9c0 26 22 47 49 47a48 48 0 0 0 47-37c4-16 6-33 6-49 0-125-104-226-232-226m0-286c-16 0-33 4-47 12L90 223a91 91 0 0 0-47 79v420c0 33 18 63 47 79l375 211a96 96 0 0 0 94 0l375-211c29-16 47-46 47-79V302c0-33-18-63-47-79L559 12c-14-8-31-12-47-12m0 91l375 211v420L512 933 137 722V302L512 91', camera: 'M925.164 208.372c-1.694-0.218-3.408-0.372-5.162-0.372h-471.968v-39.962c0-20.344-15.192-37.096-34.836-39.63-1.696-0.218-3.41-0.374-5.164-0.374h-176.004c-1.754 0-3.468 0.152-5.164 0.374-19.644 2.538-34.836 19.29-34.836 39.626v39.966h-88.032c-1.754 0-3.468 0.152-5.162 0.372-19.646 2.536-34.838 19.29-34.838 39.628v528c0 22.094 17.91 40 40 40h816.004c13.808 0 25.98-6.996 33.168-17.636 0.102-0.148 0.184-0.308 0.282-0.46 0.612-0.922 1.2-1.86 1.722-2.836 0.046-0.082 0.080-0.172 0.124-0.254 2.994-5.61 4.704-12.008 4.704-18.808v-528.004c-0-20.342-15.192-37.096-34.838-39.63zM880.002 736h-736.004v-448h736.004v448zM512 402.522c60.368 0 109.478 49.112 109.478 109.478s-49.112 109.478-109.478 109.478-109.478-49.112-109.478-109.478 49.11-109.478 109.478-109.478zM512 322.522c-104.644 0-189.478 84.832-189.478 189.478 0 104.644 84.834 189.478 189.478 189.478 104.646 0 189.478-84.834 189.478-189.478 0-104.646-84.832-189.478-189.478-189.478v0z', eye: 'M1008.714 490.522c-9.002-12.594-223.276-308.808-496.684-308.808-273.444 0-487.682 296.214-496.684 308.808l-15.316 21.49 15.316 21.466c9.002 12.618 223.24 308.808 496.684 308.808 273.408 0 487.682-296.19 496.684-308.808l15.316-21.466-15.316-21.49zM807.68 631.688c-46 39.142-92.558 70.064-138.382 91.904-53.874 25.676-106.786 38.694-157.266 38.694-50.49 0-103.406-13.018-157.282-38.696-45.826-21.838-92.382-52.758-138.378-91.902-53.708-45.706-94.302-92.122-116.61-119.672 22.36-27.602 63.028-74.094 116.612-119.696 45.996-39.146 92.554-70.068 138.378-91.908 53.876-25.678 106.792-38.698 157.28-38.698 50.48 0 103.39 13.020 157.264 38.696 45.824 21.842 92.382 52.764 138.382 91.91 53.602 45.614 94.264 92.098 116.624 119.696-22.306 27.544-62.898 73.954-116.622 119.672zM692.032 512.036c0 99.41-80.588 180-180 180s-180-80.59-180-180c0-99.406 80.588-179.998 180-179.998s180 80.59 180 179.998z', eyeclose: 'M75.744 948.314c-15.62-15.62-15.62-40.948 0-56.564l816-816c15.626-15.624 40.95-15.624 56.57 0 15.624 15.62 15.626 40.946 0.004 56.57l-816 815.994c-15.62 15.62-40.95 15.62-56.572 0zM332.032 512.034c0 20.104 3.296 39.434 9.376 57.484l228.104-228.106c-18.050-6.080-37.38-9.376-57.48-9.376-99.412-0.004-180 80.588-180 179.996zM692.032 512.034c0-20.1-3.3-39.432-9.38-57.484l-228.106 228.11c18.052 6.080 37.384 9.376 57.488 9.376 99.412 0 180-80.59 180-180zM1008.716 490.522c-4.98-6.968-72.86-100.8-178.81-183.22l-57.040 57.040c11.624 8.8 23.24 18.128 34.814 27.98 53.6 45.614 94.264 92.1 116.624 119.696-22.304 27.544-62.896 73.954-116.62 119.672-46 39.14-92.56 70.064-138.384 91.904-53.872 25.676-106.786 38.694-157.266 38.694-37.448 0-76.234-7.18-115.76-21.36l-61.486 61.49c54.786 24.22 114.45 39.87 177.248 39.87 273.41 0 487.684-296.19 496.686-308.808l15.316-21.468-15.316-21.49zM216.372 631.69c-53.708-45.706-94.3-92.12-116.61-119.672 22.36-27.6 63.028-74.094 116.612-119.696 46-39.146 92.554-70.068 138.38-91.908 53.874-25.68 106.79-38.7 157.28-38.7 37.46 0 76.264 7.188 115.8 21.38l61.484-61.484c-54.796-24.236-114.474-39.896-177.286-39.896-273.446 0-487.684 296.214-496.686 308.808l-15.316 21.49 15.314 21.466c4.98 6.984 72.866 100.84 178.84 183.26l57.040-57.040c-11.64-8.806-23.264-18.144-34.854-28.008z', photo: 'M920 64h-816c-22.092 0-40 17.91-40 40v816c0 22.094 17.908 40 40 40h816c22.092 0 40-17.906 40-40v-816c0-22.090-17.908-40-40-40zM880 144v449.782l-235.39-235.392c-7.502-7.5-17.676-11.714-28.286-11.714s-20.784 4.214-28.286 11.716l-169.804 169.804-40.958-40.958c-15.622-15.622-40.95-15.622-56.57 0l-176.708 176.708v-519.946h736.002zM144 880v-102.914l204.992-204.994 215.972 215.974c7.81 7.81 18.048 11.714 28.286 11.714s20.474-3.904 28.286-11.714c15.62-15.622 15.62-40.95 0-56.57l-146.732-146.73 141.522-141.524 263.676 263.68v173.078h-736.002zM356.174 400.542c52.466 0 95-42.536 95-95s-42.534-95-95-95-95 42.536-95 95 42.534 95 95 95zM356.174 250.542c30.326 0 55 24.672 55 55s-24.674 55-55 55-55-24.672-55-55 24.674-55 55-55z', video: 'M926.050 273.364c-9.556 0-20.574 3.8-32.278 11.812l-189.738 129.894v-151.068c0-20.342-15.192-37.094-34.838-39.63-1.694-0.218-3.408-0.372-5.162-0.372h-560.002c-1.754 0-3.468 0.152-5.162 0.372-19.646 2.538-34.838 19.29-34.838 39.628v496.002c0 22.092 17.91 40 40 40h560.004c13.808 0 25.98-6.998 33.168-17.638 0.102-0.148 0.184-0.308 0.282-0.458 0.612-0.922 1.2-1.862 1.722-2.836 0.046-0.082 0.080-0.172 0.124-0.254 2.994-5.612 4.704-12.010 4.704-18.81v-151.066l189.738 129.886c11.706 8.012 22.718 11.812 32.278 11.812 20.092 0 33.736-16.806 33.736-46.622v-384.032c0-29.816-13.644-46.62-33.738-46.62zM624.036 720h-480.004v-415.998h480.004v415.998zM879.788 632.3l-175.728-120.296 175.728-120.302v240.598zM240.688 663.534c-22.090 0-40-17.906-40-40v0c0-22.090 17.91-40 40-40v0c22.090 0 40.004 17.91 40.004 40v0c0 22.092-17.914 40-40.004 40v0z', speaker: 'M692.070 580.856c18.156-18.156 28.152-42.266 28.152-67.89-0.008-25.622-10.002-49.726-28.148-67.872-8.476-8.478-18.308-15.188-29-19.922-0.222-0.098-0.408-0.22-0.566-0.364-13.294-6.5-22.476-20.116-22.476-35.914 0-22.090 17.91-40 40-40 5.774 0 11.246 1.248 16.204 3.45 0.016 0.006 0.026 0.008 0.040 0.016 19.292 8.656 37.036 20.832 52.368 36.164 33.254 33.254 51.574 77.446 51.58 124.43 0.006 46.996-18.31 91.204-51.58 124.472-15.064 15.062-32.45 27.074-51.344 35.7-0.154 0.070-0.286 0.112-0.434 0.176-5.124 2.382-10.812 3.75-16.832 3.75-22.090 0-40-17.906-40-40 0-16.196 9.644-30.112 23.488-36.402 0.156-0.11 0.32-0.216 0.516-0.304 10.314-4.712 19.81-11.268 28.032-19.49zM861.778 275.386c-47.824-47.824-107.946-79.588-173.204-92.242-0.356-0.078-0.712-0.146-1.072-0.214-0.060-0.012-0.124-0.026-0.186-0.038-0.506-0.096-0.976-0.162-1.422-0.208-1.918-0.282-3.868-0.476-5.864-0.476-22.090 0-40 17.91-40 40 0 19.024 13.292 34.91 31.084 38.968 0.352 0.128 0.728 0.244 1.162 0.326 48.7 9.268 95.226 32.748 132.934 70.452 99.972 99.972 100.054 261.984-0.002 362.040-37.684 37.684-84.152 61.14-132.788 70.426-0.084 0.016-0.144 0.046-0.224 0.066-18.338 3.644-32.166 19.816-32.166 39.222 0 22.094 17.91 40 40 40 2.776 0 5.484-0.286 8.102-0.822 0.094-0.018 0.172-0.018 0.27-0.038 65.32-12.626 125.496-44.406 173.376-92.286 131.008-131.008 131.008-344.172 0-475.176zM525.988 159.516v704.968c0 22.090-17.906 40-40 40-12.73 0-24.046-5.966-31.374-15.234l-51.056-61.722v0.216l-122.14-147.666h-177.386c-22.090 0-40-17.906-40-40v0 0-256c0-5.22 1.030-10.194 2.85-14.766 0.104-0.266 0.184-0.542 0.294-0.804 0.39-0.924 0.844-1.812 1.3-2.702 0.134-0.26 0.242-0.538 0.382-0.794 0.246-0.456 0.54-0.878 0.804-1.324 6.972-11.726 19.734-19.61 34.368-19.61h177.386l173.13-209.238c7.324-9.316 18.67-15.324 31.44-15.324 22.092-0 40.002 17.91 40.002 40zM445.988 270.826l-126.708 153.252h-175.248v176h175.248l19.832 23.998h0.17l106.708 129.112v-482.362z', phone: 'M742.52 960c-76.266 0-163.184-32.364-258.338-96.194-73.798-49.504-136.41-106.904-175.938-146.34-43.282-43.222-105.612-111.376-156.842-190.682-66.576-103.062-95.348-196.038-85.518-276.344 8.952-73.326 50.674-134.292 120.664-176.304 10.95-6.63 23.76-10.134 37.054-10.134 32.752 0 71.124 23.354 120.764 73.494 36.434 36.802 70.108 79.22 89.472 106.644 46.698 66.176 60.686 107.352 48.286 142.136-12.638 35.538-35.534 55.704-52.25 70.428-5.662 5.006-9.95 8.854-13.070 12.262 4.040 7.542 11.744 19.868 26.054 37.476 42.388 52.076 90.548 89.024 111.972 100.874 3.308-2.96 7.11-7.168 12.352-13.152 14.87-16.81 35.062-39.636 70.482-52.28 7.978-2.842 16.498-4.276 25.35-4.276 44.172 0 108.804 44.078 155.246 81.056 45.834 36.494 103.292 90.498 127.104 132.612 22.602 39.596 14.982 68.64 4.596 86.006-48.138 80.296-119.862 122.718-207.44 122.718zM224.758 144.53c-47.558 29.426-73.566 67.28-79.468 115.618-7.494 61.224 17.17 136.326 73.308 223.226 49.902 77.252 112.994 144.35 146.16 177.472 30.296 30.222 91.906 88.17 163.988 136.524 81.738 54.83 153.662 82.63 213.772 82.63 58.618 0 103.506-26.526 137.138-81.076-0.47-1.536-1.532-4.062-3.854-8.132-14.584-25.794-57.006-69.202-105.642-108.156-58.776-47.074-96.708-63.894-106.756-64.982-15.348 5.826-25.020 16.758-36.178 29.372-12.542 14.318-28.31 32.316-55.476 41.528l-6.25 2.12h-6.598c-8.704 0-31.826 0-86.73-43.378-32.196-25.438-64.65-57.534-91.38-90.374-35.712-43.942-51.41-77.764-46.674-100.548l0.55-2.642 0.9-2.546c9.19-26 26.284-41.118 41.364-54.458 12.726-11.208 23.698-20.874 29.494-36.378-0.606-4.398-5.076-23.488-37.948-70.072-15.882-22.494-45.746-60.376-77.614-93.084-39.93-40.986-60.106-50.546-66.106-52.664z', flag: 'M168 960.060c-22.092 0-40-17.908-40-40v-816.36c0-22.092 17.908-40 40-40h687.698c16.178 0 30.764 9.746 36.956 24.694 6.192 14.946 2.77 32.15-8.67 43.59l-188.918 188.922 189.218 189.216c11.44 11.442 14.862 28.646 8.67 43.592-6.192 14.948-20.776 24.694-36.956 24.694h-647.998v341.654c0 22.090-17.908 39.998-40 39.998zM208 498.406h551.428l-149.218-149.216c-15.622-15.622-15.622-40.95 0-56.568l148.918-148.922h-551.128v354.706z', pin: 'M512 959.916c-13.36 0-25.84-6.672-33.262-17.782l-242.080-362.324c-0.12-0.176-0.236-0.356-0.354-0.536-36.394-54.5-55.63-118.042-55.63-183.804 0-182.696 148.632-331.324 331.326-331.324 182.696 0 331.328 148.628 331.328 331.324 0 60.71-16.554 119.98-47.906 171.652-0.758 1.528-1.618 3.016-2.578 4.45l-5.786 8.664c-0.054 0.082-0.112 0.164-0.168 0.246-0.042 0.070-0.104 0.16-0.148 0.23l-241.484 361.426c-7.422 11.106-19.898 17.778-33.258 17.778zM303.458 535.784l0.026 0.040c0.038 0.054 0.158 0.238 0.194 0.292l208.324 311.796 212.374-317.86c0.376-0.696 0.778-1.382 1.198-2.062 24.7-39.708 37.758-85.532 37.758-132.52 0-138.582-112.746-251.324-251.328-251.324s-251.326 112.742-251.326 251.324c0 50.054 14.674 98.39 42.432 139.782 0.114 0.176 0.232 0.356 0.348 0.532zM512 304.4c49.98 0 90.64 40.66 90.64 90.64 0 49.976-40.66 90.636-90.64 90.636s-90.64-40.66-90.64-90.636c0-49.98 40.66-90.64 90.64-90.64zM512 224.4c-94.242 0-170.64 76.398-170.64 170.64s76.398 170.636 170.64 170.636 170.64-76.394 170.64-170.636-76.398-170.64-170.64-170.64v0z', compass: 'M512 0a512 512 0 110 1024A512 512 0 01512 0zm0 91.4c-112.3 0-218 43.8-297.4 123.2A417.8 417.8 0 0091.4 512c0 112.3 43.8 218 123.2 297.4A417.8 417.8 0 00512 932.6c112.3 0 218-43.8 297.4-123.2A417.8 417.8 0 00932.6 512c0-112.3-43.8-218-123.2-297.4A417.8 417.8 0 00512 91.4zm242.4 178.1a22.9 22.9 0 012.9 28.9L574.9 571.7l-3.2 3.2-273.3 182.4a22.9 22.9 0 01-31.7-31.7l181-271.6c1.7-2.5 3.8-4.6 6.3-6.3l271.6-181c9-6 21.1-4.9 28.8 2.8zM483.2 483.3l-115 172.4 172.5-115-57.5-57.4z', globe: 'M533.6 1.6a144.2 144.2 0 00-43.2 0A511.7 511.7 0 000 512.6 511.7 511.7 0 00512 1024c282.8 0 512-229 512-511.4a511.7 511.7 0 00-490.4-511zM930 467H749c-3.6-105.7-20-204.7-47.2-282.5a494.4 494.4 0 00-24.2-58.2 419.3 419.3 0 01131.8 89.3A416.7 416.7 0 01930.2 467zM512 931.5c-75.3 0-137.3-163.3-145.4-373.3h290.8c-8.1 210-70.1 373.3-145.4 373.3zM366.5 467c7.4-200.2 63.7-358.5 134-374.3a406.8 406.8 0 0123 0c70.3 15.9 126.6 174.1 134 374.3h-291zM214.6 215.5A420.7 420.7 0 01346.4 126c-8.7 17.7-16.9 37.1-24.2 58.2-27.1 78-43.6 177-47.2 282.5H94a416.7 416.7 0 01120.7-251.3zM93.9 558.2H275c3.8 104.8 20.2 203 47 280.3a488.6 488.6 0 0025.8 61 420.4 420.4 0 01-133.3-89.9A416.7 416.7 0 0193.9 558.2zm715.5 251.4a420.4 420.4 0 01-133.3 90c9.3-18.4 18-38.8 25.7-61.1 27-77.4 43.3-175.5 47-280.3h181.3a416.7 416.7 0 01-120.7 251.4z', location: 'M1024 512a512 512 0 10-512.1 512C643 1024 774 974 874 874s150-231 150-362zM809.4 809.4a417.4 417.4 0 01-251.7 120.7v-153a45.7 45.7 0 00-91.5 0v153a417 417 0 01-251.6-120.7A417.7 417.7 0 0194 557.7h153a45.7 45.7 0 000-91.5h-153a417.3 417.3 0 01120.7-251.6A417.5 417.5 0 01466.2 93.8v153a45.7 45.7 0 0091.4 0v-153a417.4 417.4 0 01251.8 120.7A417.5 417.5 0 01930 466.2H777a45.7 45.7 0 000 91.4h153a417.3 417.3 0 01-120.7 251.7v.1z', search: 'M218 670a318 318 0 0 1 0-451 316 316 0 0 1 451 0 318 318 0 0 1 0 451 316 316 0 0 1-451 0m750 240L756 698a402 402 0 1 0-59 60l212 212c16 16 42 16 59 0 16-17 16-43 0-60', zoom: 'M220 670a316 316 0 0 1 0-450 316 316 0 0 1 450 0 316 316 0 0 1 0 450 316 316 0 0 1-450 0zm749 240L757 698a402 402 0 1 0-59 59l212 212a42 42 0 0 0 59-59zM487 604a42 42 0 0 1-84 0V487H286a42 42 0 1 1 0-84h117V286a42 42 0 1 1 84 0v117h117a42 42 0 0 1 0 84H487v117z', zoomout: 'M757 698a402 402 0 1 0-59 59l212 212a42 42 0 0 0 59-59L757 698zM126 445a316 316 0 0 1 319-319 316 316 0 0 1 318 319 316 316 0 0 1-318 318 316 316 0 0 1-319-318zm160 42a42 42 0 1 1 0-84h318a42 42 0 0 1 0 84H286z', zoomreset: 'M148 560a318 318 0 0 0 522 110 316 316 0 0 0 0-450 316 316 0 0 0-450 0c-11 11-21 22-30 34v4h47c25 0 46 21 46 46s-21 45-46 45H90c-13 0-25-6-33-14-9-9-14-20-14-33V156c0-25 20-45 45-45s45 20 45 45v32l1 1a401 401 0 0 1 623 509l212 212a42 42 0 0 1-59 59L698 757A401 401 0 0 1 65 570a42 42 0 0 1 83-10z', timer: 'M571.5 0a42.7 42.7 0 010 85.3h-16.7l-.2 53.1a441.6 441.6 0 01221.2 84.9l44.7-44.6a42.7 42.7 0 0160.3 60.3l-41.5 41.5a443.8 443.8 0 11-370-142l.1-53.2H452A42.7 42.7 0 01452 0h119.5zM512 221.7a356 356 0 00-253.5 105 356 356 0 00-105 253.5 356 356 0 00105 253.5 356 356 0 00253.5 105 356 356 0 00253.5-105 356.2 356.2 0 00105-253.5 356 356 0 00-105-253.5 356 356 0 00-253.5-105zm-.1 52.7a42.7 42.7 0 0142.6 42.6v206.6a68.2 68.2 0 0125.3 47.3l.2 5.8a68.2 68.2 0 11-110.8-53.4V317a42.7 42.7 0 0142.7-42.6z', time: 'M512 0a512 512 0 110 1024A512 512 0 01512 0zm0 91.4c-112.3 0-218 43.8-297.4 123.2A417.8 417.8 0 0091.4 512c0 112.3 43.8 218 123.2 297.4A417.8 417.8 0 00512 932.6c112.3 0 218-43.8 297.4-123.2A417.8 417.8 0 00932.6 512c0-112.3-43.8-218-123.2-297.4A417.8 417.8 0 00512 91.4zm0 54.9a45.7 45.7 0 0145.7 45.7v280H759a45.7 45.7 0 010 91.4H512c-6.1 0-12-1.2-17.4-3.4l-.4-.2-2-1c-.7-.3-1.4-.5-2-.9l-.7-.4-3-1.9-.4-.2c-12-8.2-19.8-22-19.8-37.7V192a45.7 45.7 0 0145.7-45.7z', lightning: 'M320.022 1022.644c-7.408 0-14.852-2.052-21.44-6.238-15.292-9.714-22.144-28.494-16.706-45.774l115.186-365.908-214.552-52.57c-14.714-3.606-26.128-15.214-29.486-29.988-3.356-14.772 1.92-30.174 13.632-39.786l576-472.662c14.458-11.864 35.208-12.126 49.962-0.626 14.752 11.496 19.568 31.682 11.594 48.602l-171.202 363.256 208.648 51.756c14.29 3.544 25.476 14.652 29.124 28.914s-0.834 29.376-11.668 39.344l-512 471.112c-7.586 6.984-17.308 10.568-27.092 10.568zM279.236 493.49l178.314 43.69c10.74 2.632 19.912 9.59 25.336 19.226s6.62 21.086 3.298 31.636l-83.030 263.76 347.066-319.352-183.82-45.596c-11.63-2.884-21.356-10.832-26.498-21.656-5.144-10.822-5.164-23.382-0.054-34.22l116.31-246.788-376.922 309.3z', lightningoff: 'M310 374L76 150a37 37 0 0 1 0-54c15-14 41-14 56 0l816 778c16 15 16 39 0 54a41 41 0 0 1-56 0L666 712l-57-54-242-230-57-54zm-32 28l57 54-44 38 115 29 78 76-75 254 169-165 57 54-279 271c-8 7-17 11-26 11-7 0-14-2-20-6a41 41 0 0 1-16-46l109-367-203-52c-14-4-25-16-28-30-4-15 1-31 13-40l93-81zm124-108L731 9c13-12 33-12 47-1 14 12 19 32 11 49L627 421l198 52c13 4 24 15 27 29 4 14-1 29-11 39l-89 87-56-54 42-41-118-31-80-76 109-242-190 165-57-55z', dashboard: 'M512 85.3a512 512 0 01361 875c-99.5-44-225-70.4-361.6-70.4-136.1 0-261.4 26.2-360.8 70A512 512 0 01512 85.4zm0 91.5c-112.4 0-218 43.7-297.4 123.1A417.8 417.8 0 0091.4 597.3c0 93 30 181.5 85.5 254.2 101-34.8 215.3-53 334.5-53 119.6 0 234.2 18.3 335.5 53.4a417.3 417.3 0 0085.7-254.6c0-112.3-43.8-218-123.2-297.4a417.5 417.5 0 00-275-122.6l-22.4-.5zm219.7 115.7a45.7 45.7 0 0116.7 62.4L580.4 646c6.5 17.1 6.7 36.6-.6 54.3l-4.3 8.7A73.1 73.1 0 11501.3 600l168-291a45.7 45.7 0 0162.4-16.6z', hourglass: 'M511.926 801.946c-22.090 0-40-17.906-40-40v0c0-22.090 17.91-40 40-40v0c22.090 0 40.004 17.91 40.004 40v0c0 22.094-17.914 40-40.004 40v0zM831.682 915.242c0.192 1.582 0.318 3.186 0.318 4.82 0 22.090-17.908 40-40 40h-560c-22.092 0-40-17.914-40-40 0-2.438 0.252-4.812 0.67-7.128 2.36-53.636 18.034-105.7 45.852-151.554 0.734-1.476 1.562-2.912 2.492-4.296l5.582-8.364c0.054-0.080 0.11-0.158 0.164-0.238 0.042-0.068 0.098-0.156 0.144-0.222l157.704-236.036-158.5-237.228c-0.116-0.17-0.23-0.342-0.34-0.516-32.842-49.178-51.11-105.994-53.368-165.044-0.238-1.762-0.402-3.546-0.402-5.374 0-22.090 17.908-40 40-40h560c22.092 0 40 17.914 40 40 0 2.056-0.204 4.064-0.504 6.038-2.194 54.020-17.886 106.48-45.894 152.648-0.734 1.472-1.562 2.91-2.492 4.294l-5.582 8.366c-0.054 0.078-0.11 0.156-0.164 0.236-0.042 0.068-0.098 0.154-0.144 0.222l-157.734 236.082 158.468 237.182c0.116 0.168 0.23 0.344 0.34 0.516 32.946 49.33 51.226 106.346 53.39 165.596zM749.958 144.060h-475.99c6.138 31.304 18.384 61.124 36.354 87.916 0.118 0.17 0.23 0.344 0.342 0.514l0.024 0.038c0.036 0.054 0.15 0.23 0.186 0.284l54.286 81.25h293.596l58.196-87.1c0.366-0.67 0.75-1.334 1.154-1.99 15.492-24.916 26.228-52.324 31.852-80.912zM497.528 512.178l-0.032 0.046 14.426 21.592 93.378-139.756h-186.692l78.92 118.118zM305.96 799.156c-15.498 24.91-26.234 52.318-31.856 80.906h476.052c-6.138-31.304-18.384-61.122-36.354-87.918-0.118-0.168-0.23-0.344-0.342-0.512l-0.024-0.040c-0.036-0.050-0.15-0.23-0.186-0.282l-140.242-209.902-28.98 43.374c-7.166 10.72-19.21 17.162-32.11 17.162-12.896 0-24.942-6.442-32.11-17.166l-28.76-43.044-143.938 215.428c-0.36 0.674-0.744 1.338-1.15 1.994z', play: 'M878.78 477.856l-591.884-341.722c-9.464-5.464-18.426-8.050-26.386-8.048-19.516 0.002-33.002 15.546-33.002 42.338v683.446c0 26.792 13.482 42.338 33.002 42.338 7.96 0 16.924-2.586 26.386-8.048l591.884-341.722c32.664-18.864 32.664-49.724 0-68.582z', stop: 'M1024 512A512 512 0 100 512a512 512 0 001024 0zM215 809a418 418 0 010-594 418 418 0 01594 0 418 418 0 010 594 418 418 0 01-594 0zm471-78H338c-25 0-45-20-45-45V338c0-25 20-45 45-45h348c25 0 45 20 45 45v348c0 25-20 45-45 45z', email: 'M960.032 268.004c0.748-10.040-2.246-20.364-9.226-28.684-5.984-7.132-13.938-11.62-22.394-13.394-0.13-0.026-0.268-0.066-0.396-0.092-1.082-0.22-2.172-0.376-3.272-0.5-0.25-0.032-0.492-0.080-0.742-0.102-1.028-0.096-2.052-0.136-3.090-0.156-0.292-0.002-0.582-0.042-0.876-0.042h-816.008c-21.416 0-38.848 16.844-39.898 38-0.034 0.628-0.092 1.256-0.096 1.89 0 0.034-0.006 0.074-0.006 0.114 0 0.050 0.008 0.102 0.008 0.152v495.692c0 0.054-0.008 0.106-0.008 0.156 0 22.090 17.91 40 40 40h816.004c13.808 0 25.98-6.996 33.17-17.636 0.1-0.148 0.182-0.312 0.28-0.458 0.606-0.93 1.196-1.868 1.722-2.84 0.046-0.082 0.080-0.172 0.124-0.258 2.992-5.604 4.704-12.008 4.704-18.804v0 0-493.038zM144.032 350.156l339.946 281.188c6.568 6.434 14.918 10.168 23.564 11.122 0.16 0.024 0.32 0.050 0.48 0.066 0.838 0.082 1.676 0.114 2.518 0.14 0.496 0.020 0.994 0.058 1.492 0.058s0.996-0.042 1.492-0.058c0.842-0.028 1.68-0.058 2.518-0.14 0.16-0.016 0.32-0.042 0.48-0.066 8.646-0.958 16.996-4.688 23.564-11.122l339.946-281.206v370.894h-736v-370.876zM215.066 305.030h593.91l-296.946 245.422-296.964-245.422z', link: 'M743.52 529.234c5.616-5.616 83.048-83.046 88.462-88.46 30.944-32.778 47.97-75.636 47.97-120.792 0-47.048-18.304-91.26-51.542-124.484-33.228-33.22-77.43-51.516-124.458-51.516-45.024 0-87.792 16.94-120.536 47.72l-104.458 104.456c-30.792 32.738-47.734 75.512-47.734 120.548 0 41.916 14.576 81.544 41.248 113.196 3.264 3.876 6.666 7.664 10.292 11.29 4.258 4.258 8.704 8.262 13.304 12.022 0.054 0.080 0.096 0.152 0.148 0.232 9.572 7.308 15.778 18.804 15.778 31.776 0 22.094-17.914 40-40.004 40-8.542 0-16.442-2.696-22.938-7.26-2.746-1.93-20.622-17.43-30.35-28.050-0.008-0.010-0.018-0.018-0.026-0.028-4.992-5.432-13.234-15.23-18.552-22.65s-16.556-25.872-17.036-26.736c-0.7-1.262-2.974-5.526-3.422-6.39-0.69-1.334-6.118-12.67-6.114-12.67-14.342-31.96-22.332-67.4-22.332-104.728 0-60.826 21.198-116.648 56.58-160.544 0.252-0.314 4.61-5.594 6.594-7.866 0.304-0.35 5.038-5.636 7.16-7.874 0.252-0.268 105.86-105.874 106.128-106.126 45.902-43.584 107.958-70.314 176.264-70.314 141.382 0 255.998 114.5 255.998 256 0 68.516-26.882 130.688-70.652 176.61-0.144 0.148-109.854 109.546-112.090 111.528-0.958 0.848-5.072 4.352-5.072 4.352-6.448 5.434-13.132 10.592-20.1 15.378 0.412-6.836 0.644-13.702 0.644-20.6 0-26.46-3.108-52.206-8.918-76.918l-0.236-1.102zM616.144 767.82c35.382-43.896 56.58-99.718 56.58-160.544 0-37.328-7.99-72.768-22.332-104.728 0.004 0 0.006-0.002 0.010-0.004-0.258-0.576-0.538-1.14-0.8-1.714-0.686-1.498-2.894-6.112-3.296-6.93-0.668-1.344-2.952-5.732-3.386-6.604-3.48-6.982-8.708-15.126-9.49-16.366-0.498-0.792-0.996-1.58-1.502-2.364-0.834-1.29-15.364-22.066-26.656-34.466-0.008-0.010-0.018-0.018-0.026-0.028-7.056-8.448-24.932-24.198-30.35-28.050-6.47-4.602-14.396-7.26-22.938-7.26-22.090 0-40.004 17.906-40.004 40 0 12.97 6.206 24.466 15.778 31.776 0.052 0.080 0.094 0.152 0.148 0.232 4.602 3.76 20.334 19.434 23.598 23.31 26.672 31.65 41.248 71.28 41.248 113.196 0 45.038-16.944 87.81-47.734 120.548l-104.458 104.456c-32.742 30.782-75.512 47.72-120.536 47.72-47.028 0-91.228-18.294-124.458-51.516-33.236-33.224-51.542-77.436-51.542-124.484 0-45.154 17.028-88.014 47.97-120.792 5.414-5.414 40.812-40.812 68.958-68.958 7.176-7.176 13.888-13.886 19.504-19.502v-0.002c-0.356-1.562-0.246-1.096-0.246-1.096-5.81-24.712-8.918-50.458-8.918-76.918 0-6.898 0.232-13.764 0.644-20.6-6.966 4.788-20.1 15.33-20.1 15.33-0.734 0.62-9.518 8.388-11.68 10.45-0.16 0.154-105.338 105.33-105.482 105.478-43.77 45.922-70.652 108.094-70.652 176.61 0 141.5 114.616 256 255.998 256 68.306 0 130.362-26.73 176.264-70.314 0.27-0.254 105.876-105.86 106.128-106.126 0.004-0.002 13.506-15.426 13.758-15.74z', paperclip: 'M824.25 369.354c68.146-70.452 67.478-182.784-2.094-252.354-70.296-70.296-184.266-70.296-254.558 0-0.014 0.012-0.028 0.026-0.042 0.042-0.004 0.002-0.006 0.004-0.010 0.008l-433.144 433.142c-0.036 0.036-0.074 0.068-0.11 0.106-0.054 0.052-0.106 0.11-0.16 0.162l-2.668 2.67c-0.286 0.286-0.528 0.596-0.8 0.888-43.028 44.88-66.664 103.616-66.664 165.986 0 64.106 24.962 124.376 70.292 169.704 45.328 45.33 105.598 70.292 169.706 70.292 50.612 0 98.822-15.57 139.186-44.428 4.932-1.952 9.556-4.906 13.544-8.894l16.802-16.802c0.056-0.056 0.116-0.112 0.172-0.168 0.038-0.038 0.074-0.076 0.112-0.116l289.010-289.014c15.622-15.618 15.62-40.942 0-56.56s-40.948-15.62-56.566 0l-289.124 289.122c-62.482 62.484-163.792 62.484-226.274 0-62.484-62.482-62.484-163.79 0-226.272h-0.002l433.134-433.12c0.058-0.060 0.112-0.122 0.172-0.18 38.99-38.99 102.43-38.99 141.42 0 38.992 38.99 38.99 102.432 0 141.422-0.058 0.060-0.122 0.114-0.18 0.17l0.006 0.006-280.536 280.534c-0.002-0.002-0.002-0.004-0.004-0.006l-79.978 79.98c-0.010 0.010-0.016 0.020-0.028 0.028-0.008 0.012-0.018 0.018-0.028 0.028l-0.064 0.062c-15.622 15.624-40.944 15.624-56.562 0-15.624-15.62-15.624-40.944-0.002-56.566l0.062-0.062c0.010-0.010 0.018-0.020 0.028-0.028 0.008-0.012 0.020-0.018 0.028-0.028l79.98-79.978c-0.002-0.002-0.004-0.002-0.006-0.004l136.508-136.512c15.622-15.62 15.62-40.944-0.002-56.562-15.618-15.62-40.946-15.62-56.564 0l-219.342 219.344c-1.284 1.284-2.42 2.652-3.494 4.052-40.4 47.148-38.316 118.184 6.322 162.824 44.64 44.638 115.674 46.722 162.82 6.324 1.402-1.072 2.772-2.21 4.054-3.494l2.83-2.832c0.002 0 0.002 0 0.002 0s0 0 0 0l360.54-360.54c0.058-0.056 0.12-0.114 0.18-0.172 0.050-0.050 0.098-0.106 0.15-0.158l0.994-0.994c0.34-0.338 0.63-0.702 0.952-1.052z', box: 'M960.016 408.080c0-0.672-0.046-1.342-0.078-2.014-0.032-0.594-0.044-1.19-0.102-1.782-0.068-0.726-0.186-1.448-0.294-2.17-0.080-0.54-0.144-1.080-0.248-1.616-0.138-0.724-0.326-1.442-0.506-2.16-0.134-0.534-0.252-1.070-0.408-1.6-0.196-0.662-0.436-1.314-0.668-1.968-0.204-0.582-0.396-1.166-0.628-1.74-0.226-0.56-0.494-1.11-0.75-1.662-0.3-0.656-0.598-1.312-0.934-1.954-0.242-0.454-0.514-0.894-0.774-1.342-0.414-0.716-0.83-1.43-1.292-2.124-0.256-0.382-0.538-0.752-0.806-1.128-0.514-0.716-1.036-1.428-1.602-2.116-0.090-0.11-0.162-0.226-0.254-0.336-0.244-0.292-0.516-0.542-0.768-0.826-0.534-0.6-1.068-1.198-1.644-1.772-0.48-0.478-0.982-0.924-1.48-1.376-0.354-0.316-0.674-0.658-1.040-0.964l-405.788-335.666c-6.568-6.436-14.918-10.166-23.564-11.124-0.16-0.022-0.32-0.050-0.48-0.066-0.838-0.082-1.676-0.11-2.518-0.14-0.496-0.020-0.994-0.058-1.492-0.058s-0.996 0.040-1.492 0.058c-0.842 0.028-1.68 0.058-2.518 0.14-0.16 0.016-0.32 0.044-0.48 0.066-8.646 0.956-16.996 4.688-23.564 11.124l-405.662 335.542c-7.13 5.982-11.616 13.93-13.392 22.382-0.032 0.14-0.070 0.278-0.1 0.42-0.212 1.072-0.37 2.152-0.494 3.238-0.032 0.258-0.078 0.51-0.106 0.77-0.086 0.89-0.114 1.786-0.138 2.68-0.014 0.39-0.052 0.78-0.054 1.17 0 0.040-0.006 0.074-0.006 0.114v204.856c-0.958 12.434 3.854 25.128 14.134 33.754l405.662 335.54c6.568 6.438 14.918 10.168 23.564 11.124 0.16 0.020 0.32 0.050 0.48 0.066 0.838 0.082 1.676 0.114 2.518 0.14 0.496 0.020 0.994 0.058 1.492 0.058 0.054 0 0.11-0.008 0.162-0.008 0.042 0 0.084 0.008 0.126 0.008 0.342 0 0.672-0.042 1.012-0.050 0.062-0.004 0.126-0.008 0.192-0.008 0.134-0.004 0.27-0.020 0.402-0.024 10.602-0.422 20.136-4.938 27.054-12.046l404.526-334.624c0.084-0.066 0.166-0.136 0.248-0.204l0.12-0.098c0.17-0.144 0.314-0.304 0.48-0.45 0.814-0.704 1.614-1.43 2.37-2.2 0.296-0.3 0.562-0.624 0.85-0.934 0.602-0.652 1.2-1.308 1.756-2 0.3-0.372 0.566-0.758 0.852-1.136 0.504-0.672 1.002-1.344 1.462-2.046 0.242-0.368 0.458-0.75 0.686-1.124 0.458-0.754 0.908-1.508 1.316-2.292 0.164-0.312 0.304-0.636 0.46-0.954 0.426-0.872 0.832-1.746 1.196-2.652 0.092-0.23 0.168-0.464 0.256-0.696 0.376-0.996 0.728-2 1.026-3.032 0.042-0.148 0.074-0.296 0.114-0.442 0.306-1.102 0.578-2.218 0.79-3.356 0.016-0.082 0.024-0.164 0.038-0.246 0.212-1.184 0.382-2.378 0.49-3.598v0c0.1-1.156 0.176-2.32 0.176-3.5v-204.86c0.024-0.318 0.022-0.638 0.040-0.958 0.026-0.668 0.074-1.338 0.074-2.008zM143.89 493.202l328.14 271.42v103.902l-328.14-271.18v-104.142zM552.032 764.402l327.868-271.212v103.88l-327.868 270.972v-103.64zM511.898 122.66l345.348 285.42-345.348 285.42-345.374-285.42 345.374-285.42z', structure: 'M954.324 833.3c0.208-0.558 0.388-1.128 0.586-1.692 0.3-0.868 0.608-1.734 0.882-2.61 0.234-0.746 0.444-1.5 0.66-2.25 0.212-0.734 0.432-1.464 0.624-2.204 0.204-0.766 0.378-1.54 0.562-2.308 0.18-0.766 0.366-1.528 0.528-2.292 0.146-0.692 0.272-1.386 0.402-2.082 0.168-0.89 0.332-1.778 0.476-2.668 0.090-0.566 0.164-1.136 0.244-1.704 0.148-1.058 0.29-2.118 0.404-3.18 0.042-0.422 0.080-0.852 0.12-1.274 0.118-1.23 0.212-2.46 0.282-3.696 0.018-0.304 0.030-0.606 0.042-0.906 0.062-1.36 0.098-2.718 0.104-4.082 0-0.114 0.008-0.226 0.008-0.34 0-0.128-0.010-0.258-0.010-0.39-0.006-1.368-0.042-2.734-0.104-4.102-0.014-0.296-0.030-0.594-0.044-0.89-0.070-1.246-0.166-2.492-0.284-3.738-0.042-0.434-0.084-0.864-0.128-1.292-0.116-1.050-0.25-2.098-0.4-3.144-0.088-0.628-0.18-1.258-0.282-1.882-0.13-0.8-0.276-1.598-0.428-2.394-0.162-0.868-0.332-1.73-0.518-2.594-0.116-0.524-0.24-1.046-0.364-1.57-0.264-1.128-0.542-2.25-0.846-3.36-0.070-0.254-0.144-0.504-0.214-0.754-11.38-40.382-48.464-69.996-92.488-69.996-3.066 0-6.096 0.16-9.088 0.442l-264.576-458.262c21.080-29.698 24.3-70.13 4.9-103.732-12.596-21.816-32.458-36.812-54.764-43.724-0.062-0.020-0.124-0.036-0.186-0.054-1.394-0.43-2.798-0.83-4.21-1.196-0.296-0.076-0.596-0.142-0.894-0.216-1.208-0.3-2.422-0.586-3.642-0.84-0.384-0.082-0.774-0.148-1.16-0.224-1.168-0.228-2.338-0.444-3.514-0.626-0.384-0.060-0.776-0.112-1.162-0.168-1.208-0.174-2.416-0.332-3.63-0.46-0.35-0.038-0.7-0.066-1.048-0.1-1.27-0.12-2.54-0.218-3.814-0.29-0.32-0.018-0.642-0.032-0.964-0.044-1.294-0.058-2.594-0.094-3.892-0.1-0.166 0-0.328-0.012-0.492-0.012-0.19 0-0.376 0.014-0.564 0.014-1.21 0.008-2.42 0.040-3.63 0.092-0.494 0.022-0.986 0.046-1.478 0.074-0.992 0.060-1.986 0.136-2.978 0.226-0.722 0.064-1.442 0.134-2.16 0.214-0.696 0.080-1.392 0.17-2.090 0.266-1.014 0.136-2.026 0.286-3.032 0.452-0.352 0.060-0.704 0.124-1.054 0.19-44.97 8.028-79.122 47.302-79.122 94.582 0 20.756 6.602 39.958 17.79 55.67l-264.58 458.26c-2.954-0.274-5.94-0.434-8.962-0.434-53.078 0-96.11 43.032-96.11 96.11 0 53.082 43.032 96.11 96.11 96.11 38.8 0 72.208-23.004 87.386-56.11l529.202-0.004c0.138 0.304 0.292 0.606 0.436 0.91 0.226 0.48 0.456 0.958 0.69 1.434 0.474 0.968 0.966 1.93 1.476 2.882 0.214 0.402 0.432 0.8 0.65 1.2 0.314 0.566 0.604 1.14 0.93 1.708 0.284 0.488 0.59 0.958 0.88 1.442 0.122 0.2 0.244 0.398 0.37 0.602 27.086 44.372 84.766 59.278 130.040 33.136 18.864-10.89 32.624-27.214 40.478-45.852 0.054-0.132 0.104-0.266 0.158-0.398 0.518-1.248 1.020-2.506 1.486-3.776zM238.414 744.282l264.542-458.204c0.424 0.042 0.85 0.064 1.276 0.098 0.668 0.056 1.334 0.112 2.004 0.152 0.652 0.040 1.306 0.066 1.96 0.092 1.122 0.046 2.244 0.076 3.368 0.084 0.146 0.002 0.292 0.012 0.438 0.012 0.168 0 0.334-0.012 0.502-0.014 1.436-0.004 2.874-0.040 4.31-0.108 0.088-0.006 0.176-0.010 0.262-0.014 1.376-0.070 2.75-0.168 4.124-0.296l264.596 458.298c-3.48 4.894-6.514 10.122-9.042 15.636h-529.226c-2.546-5.55-5.602-10.814-9.114-15.736z', cpu: 'M392.016 672.016h240.032c22.092 0 40-17.908 40-40v-240.032c0-22.092-17.908-40-40-40h-240.032c-22.092 0-40 17.908-40 40v240.032c0 22.092 17.908 40 40 40zM432.016 431.984h160.032v160.032h-160.032v-160.032zM864.032 424h71.98c22.094 0 40.004-17.906 40.004-40 0-22.092-17.906-40-40-40h-71.984v-143.968c0-22.092-17.908-40-40-40h-144v-72.012c0-22.094-17.906-40.004-40-40.004-22.090 0-40 17.906-40 40v72.016h-176v-72.012c0-22.094-17.906-40.004-40-40.004-22.090 0-40 17.906-40 40v72.016h-144c-22.092 0-40 17.908-40 40v143.968h-71.984c-22.094 0-40 17.908-40 40s17.91 40 40 40h71.984v176h-71.984c-22.094 0-40 17.908-40 40s17.91 40 40 40h71.984v144.030c0 22.092 17.908 40 40 40h144v71.954c0 22.094 17.906 40 40 40s40-17.91 40-40v-71.954h176v71.954c0 22.094 17.906 40 40 40s40-17.91 40-40v-71.954h144c22.092 0 40-17.908 40-40v-144.030h71.98c22.094 0 40.004-17.906 40.004-40 0-22.092-17.906-40-40-40h-71.984v-176zM784.032 784.032h-143.692c-0.104 0-0.204-0.016-0.308-0.016s-0.206 0.016-0.308 0.016h-127.382c-0.104 0-0.204-0.016-0.308-0.016s-0.206 0.016-0.308 0.016h-127.382c-0.104 0-0.204-0.016-0.308-0.016s-0.206 0.016-0.308 0.016h-143.696v-544h544v544z', memory: 'M320.032 416.032v-152.968c0-22.094 17.91-40 40-40 22.094 0 40 17.91 40 40.004v152.964c0 22.090-17.906 40-40 40s-40-17.908-40-40zM512 456.032c22.094 0 40-17.91 40-40v-152.964c0-22.094-17.906-40.004-40-40.004-22.090 0-40 17.906-40 40v152.968c0 22.092 17.908 40 40 40zM664.032 456.032c22.094 0 40-17.91 40-40v-82.996c0-22.094-17.906-40.004-40-40.004-22.090 0-40 17.906-40 40v83c0 22.092 17.906 40 40 40zM864.018 316.616v603.418c0 0.004 0 0.004 0 0.004 0 6.798-1.71 13.198-4.704 18.808-0.044 0.084-0.078 0.172-0.124 0.254-0.524 0.976-1.112 1.914-1.722 2.836-0.098 0.15-0.18 0.312-0.282 0.46-7.188 10.638-19.36 17.634-33.168 17.634h-623.99c-22.090 0-40-17.908-40-40v-343.574c-0.002-0.142-0.022-0.282-0.022-0.426 0-0.142 0.020-0.282 0.022-0.426v-471.574c0-20.34 15.192-37.092 34.838-39.63 1.694-0.216 3.408-0.37 5.162-0.37l411.254 0.052c10.594-0.286 21.282 3.58 29.368 11.668l211.672 212.206c7.906 7.908 11.792 18.298 11.696 28.66zM240.026 144.034v391.998h543.99v-203.27l-188.252-188.728h-355.738zM784.016 880.032v-264h-543.99v264h543.99z', database: 'M895.95 221.364c-3.414-87.32-173.972-157.672-383.918-157.672s-380.504 70.352-383.918 157.672h-0.082v578.328c0 88.552 171.918 160.338 384 160.338s384-71.786 384-160.338v-578.328h-0.082zM798.412 430.578c-15.6 11.386-37.69 22.346-63.882 31.696-60.984 21.77-140.002 33.758-222.498 33.758s-161.514-11.988-222.498-33.758c-26.192-9.348-48.282-20.308-63.88-31.696-8.706-6.352-13.646-11.608-16.122-14.874v-92.9c70.29 37.478 179.654 61.566 302.5 61.566s232.21-24.088 302.5-61.566v92.9c-2.476 3.266-7.416 8.522-16.12 14.874zM814.532 514.464v93.24c-2.474 3.266-7.416 8.522-16.12 14.874-15.6 11.386-37.69 22.346-63.882 31.696-60.984 21.77-140.002 33.758-222.498 33.758s-161.514-11.988-222.498-33.758c-26.192-9.348-48.282-20.308-63.88-31.696-8.706-6.352-13.646-11.608-16.122-14.874v-93.24c70.29 37.48 179.654 61.566 302.5 61.566s232.21-24.086 302.5-61.566zM225.652 209.146c15.6-11.386 37.69-22.346 63.88-31.696 60.984-21.77 140.002-33.758 222.498-33.758s161.514 11.988 222.498 33.758c26.192 9.348 48.282 20.308 63.882 31.696 8.704 6.352 13.646 11.608 16.12 14.874v0.026c-2.474 3.266-7.416 8.522-16.12 14.874-15.6 11.386-37.69 22.346-63.882 31.696-60.984 21.77-140.002 33.758-222.498 33.758s-161.514-11.988-222.498-33.758c-26.192-9.348-48.282-20.308-63.88-31.696-8.706-6.352-13.646-11.608-16.122-14.874v-0.026c2.476-3.268 7.418-8.524 16.122-14.874zM798.412 814.578c-15.6 11.386-37.69 22.346-63.882 31.696-60.984 21.77-140.002 33.758-222.498 33.758s-161.514-11.988-222.498-33.758c-26.192-9.348-48.282-20.308-63.88-31.696-8.714-6.36-13.66-11.62-16.13-14.886h0.010v-93.228c70.29 37.48 179.654 61.566 302.5 61.566s232.21-24.086 302.5-61.566v93.228h0.010c-2.474 3.266-7.42 8.526-16.132 14.886z', power: 'M320 118.3a45.7 45.7 0 0122.5 85.6 384.6 384.6 0 00-120.8 93.4A380.9 380.9 0 00128 548.6c0 102.5 39.9 199 112.4 271.5A381.5 381.5 0 00512 932.5c102.5 0 199-39.9 271.5-112.4a381.5 381.5 0 00112.4-271.5c0-98.1-36.5-190.6-103.1-262l-2-2-9.4-9.5a384.2 384.2 0 00-100-71.2 45.6 45.6 0 0139.6-82.2l.6.3h.2l.1.1h.1l2 1 4 2 1.9 1 3.5 1.9a480.6 480.6 0 0144.9 27l2 1.3v-.3.1a475.4 475.4 0 11-545.3 6.2l3.6-2.6v.1a471.4 471.4 0 0151.7-31.7l3.7-2 1.4-.7.3-.2 6.4-3.1.1-.1h.1l.7-.3c5.2-2.1 11-3.4 17-3.4zM511.8 0c25 0 45.3 20 45.7 45v421.3a45.7 45.7 0 01-91.4.7V45.7A45.7 45.7 0 01511.9 0z', outbox: 'M960.062 616v304c0 1.382-0.070 2.746-0.208 4.090-2.046 20.172-19.080 35.91-39.792 35.91h-816c-22.090 0-40-17.906-40-40v-304c0-22.090 17.91-40 40-40s40 17.91 40 40v264h736v-264c0-22.090 17.91-40 40-40s40 17.912 40 40zM664.732 200.168l-124.41-124.41c-0.014-0.014-0.024-0.028-0.038-0.042-3.57-3.57-7.664-6.284-12.018-8.222-5.316-2.368-11.028-3.54-16.742-3.47-0.14-0.002-0.276-0.020-0.414-0.020-13.552 0-25.512 6.756-32.748 17.072l-119.1 119.092c-15.622 15.62-15.618 40.948 0.002 56.57 15.622 15.62 40.95 15.62 56.568 0l55.276-55.276v462.54c0 22.094 17.912 40 40.002 40 22.092 0 40-17.91 40-40v-464.314l57.052 57.052c15.622 15.624 40.948 15.62 56.568 0 15.628-15.624 15.628-40.952 0.002-56.572z', share: 'M896.006 920c0 22.090-17.91 40-40 40h-688.006c-22.090 0-40-17.906-40-40v-549.922c-0.838-3.224-1.33-6.588-1.33-10.072 0-22.090 17.908-40.004 40-40.004h178.66c22.092 0.004 40 17.914 40 40.004 0 22.088-17.908 40-40 40h-137.33v479.996h607.998v-479.996h-138.658c-22.090 0-40-17.912-40-40 0-22.090 17.906-40.004 40-40.004h178.658c22.090 0 40 17.91 40 40v559.844c0 0.050 0.008 0.102 0.008 0.154zM665.622 200.168l-124.452-124.45c-8.042-8.042-18.65-11.912-29.186-11.674-1.612-0.034-3.222 0-4.828 0.16-0.558 0.054-1.098 0.16-1.648 0.238-0.742 0.104-1.484 0.192-2.218 0.338-0.656 0.13-1.29 0.31-1.934 0.472-0.622 0.154-1.244 0.292-1.86 0.476-0.64 0.196-1.258 0.436-1.886 0.66-0.602 0.216-1.208 0.414-1.802 0.66-0.598 0.248-1.17 0.54-1.754 0.814-0.598 0.282-1.202 0.546-1.788 0.86-0.578 0.312-1.13 0.664-1.694 1-0.552 0.332-1.116 0.644-1.654 1.006-0.67 0.448-1.3 0.942-1.942 1.426-0.394 0.302-0.806 0.576-1.196 0.894-1.046 0.858-2.052 1.768-3.008 2.726l-124.398 124.39c-15.622 15.62-15.618 40.948 0.002 56.57 15.622 15.62 40.95 15.62 56.568 0l56.164-56.166v439.426c0 22.094 17.912 40 40.002 40 22.092 0 40-17.91 40-40v-441.202l57.942 57.942c15.622 15.624 40.948 15.62 56.568 0 15.626-15.618 15.626-40.946 0.002-56.566z', button: 'M644.634 802.32c-4.558 5.434-10.254 9.328-16.446 11.672l0.008 0.024-45.628 16.606 27.54 75.66c7.554 20.756-3.148 43.71-23.906 51.266s-43.714-3.146-51.27-23.906l-27.54-75.656-47.63 17.29c-6.020 1.956-12.586 2.518-19.254 1.342-21.75-3.836-36.282-24.582-32.45-46.34l30.57-173.328c2.55-14.476 12.61-25.714 25.458-30.508 0.292-0.118 0.586-0.23 0.878-0.34 0.238-0.084 0.476-0.168 0.718-0.246 12.942-4.624 27.91-2.492 39.196 6.98l134.824 113.13c16.932 14.2 19.144 39.432 4.932 56.354zM960.002 664v-368.082c0-22.092-17.908-40-40-40h-816c-22.092 0-40 17.908-40 40l-0.292 368.238c0 22.092 17.908 40 40 40h240.292c22.092 0 40-17.908 40-40s-17.908-40-40-40h-200.292l0.292-288.238h736v288.082h-200c-22.092 0-40 17.908-40 40s17.908 40 40 40h240c22.092 0 40-17.908 40-40z', form: 'M948.362 178.828l-471.082 470.086c-0.24 0.25-0.45 0.52-0.698 0.77-7.82 7.82-18.070 11.722-28.32 11.712-10.25 0.010-20.504-3.892-28.324-11.712-0.262-0.262-0.48-0.546-0.734-0.812l-221.736-221.738c-15.624-15.622-15.624-40.95 0-56.566 15.618-15.622 40.946-15.624 56.57 0l194.224 194.222 443.53-442.528c15.622-15.618 40.95-15.618 56.57 0 15.62 15.62 15.62 40.946 0 56.566zM98.372 128.448c-18.926 0-34.266 15.342-34.266 34.268v699.032c0 18.926 15.34 34.266 34.266 34.266h699.032c18.926 0 34.266-15.34 34.266-34.266v-430.588c0 0 0.002-1.184 0.002-1.788 0-22.090-17.914-40-40.004-40s-40 17.91-40 40c0 0.288 0.002 386.64 0.002 386.64h-607.562v-607.564h600.002c22.090-0.002 40.002-17.906 40.002-40 0-22.090-17.914-40-40.004-40z', check: 'M948.598 199.75c-15.622-15.618-40.95-15.618-56.57 0l-535.644 535.644-224.060-224.062c-15.624-15.624-40.954-15.62-56.57 0-15.624 15.62-15.624 40.948 0 56.568l251.574 251.574c0.252 0.266 0.472 0.55 0.734 0.812 7.82 7.82 18.072 11.724 28.322 11.714 10.25 0.010 20.502-3.894 28.322-11.714 0.248-0.248 0.456-0.518 0.698-0.77l563.196-563.202c15.618-15.618 15.618-40.94-0.002-56.564z', batchaccept: 'M684 277L271 772l-1 1a40 40 0 0 1-56 5l-1-1L14 610a40 40 0 1 1 52-61l169 142 387-465a40 40 0 0 1 62 51zm340 234c0-22-18-40-40-40H808a40 40 0 0 0 0 80h176c22 0 40-18 40-40zm0-216c0-22-18-40-40-40H808a40 40 0 0 0 0 80h176c22 0 40-18 40-40zm0 432c0-22-18-40-40-40H808a40 40 0 0 0 0 80h176c22 0 40-18 40-40z', batchdeny: 'M1024 512c0-22-18-40-40-40H808a40 40 0 0 0 0 80h176c22 0 40-18 40-40zm0-216c0-22-18-40-40-40H808a40 40 0 0 0 0 80h176c22 0 40-18 40-40zm0 432c0-22-18-40-40-40H808a40 40 0 0 0 0 80h176c22 0 40-18 40-40zM625 236c16 15 16 41 0 56L406 512l220 220a40 40 0 1 1-57 57L349 568 129 788a40 40 0 1 1-57-56l220-220L73 292a40 40 0 0 1 56-57l220 220 219-219c16-16 41-16 57 0z', home: 'M948.12 483.624l-407.814-407.754c-7.812-7.808-18.046-11.712-28.282-11.712-10.238 0-20.472 3.904-28.282 11.712l-407.92 407.86c-15.624 15.622-15.624 40.948-0.006 56.57s40.944 15.622 56.568 0.004l19.616-19.612v366.708c0 22.090 17.91 40 40 40h190.696c0.416 0.014 0.82 0.062 1.238 0.062 11.054 0 21.060-4.484 28.3-11.734 7.266-7.244 11.766-17.262 11.766-28.332 0-0.418-0.050-0.822-0.062-1.238v-263.204h176.060v263.934c0 22.090 17.91 40 40 40l191.876 0.124c2.292 0 4.524-0.236 6.708-0.608 0.45-0.074 0.91-0.116 1.356-0.206 0.21-0.044 0.414-0.116 0.628-0.162 17.906-3.972 31.308-19.924 31.308-39.026v-366.492l19.682 19.68c15.622 15.62 40.948 15.616 56.568-0.006s15.618-40.948-0.004-56.568zM791.876 448.272v398.71l-111.874-0.074v-263.876c0-0.020-0.002-0.042-0.002-0.062 0-0.006 0-0.014 0-0.022 0-22.090-17.91-40-40-40h-254.002c-0.556 0-1.1 0.060-1.65 0.084-0.14-0.002-0.274-0.022-0.414-0.022-22.090 0-40 17.91-40 40v264.382h-111.934v-399.392c0-2.286-0.234-4.512-0.604-6.694l280.626-280.584 280.514 280.472c-0.412 2.302-0.66 4.658-0.66 7.078z', admin: 'M919.596 847.534h-88.414v-467.716l88.75-0.044c13.688-0.132 26.958-7.25 34.294-19.96 11.044-19.13 4.49-43.596-14.642-54.64l-407.904-235.676c-0.44-0.254-0.894-0.45-1.34-0.684-0.542-0.29-1.084-0.578-1.638-0.84-0.696-0.328-1.4-0.62-2.108-0.904-0.478-0.194-0.954-0.388-1.44-0.56-0.78-0.282-1.564-0.524-2.352-0.754-0.442-0.126-0.878-0.256-1.324-0.37-0.808-0.206-1.618-0.376-2.43-0.528-0.468-0.088-0.934-0.174-1.404-0.246-0.768-0.116-1.534-0.204-2.302-0.274-0.554-0.052-1.108-0.096-1.664-0.124-0.672-0.034-1.34-0.044-2.012-0.044-0.67 0-1.338 0.012-2.010 0.044-0.556 0.030-1.11 0.072-1.664 0.124-0.77 0.070-1.536 0.158-2.302 0.274-0.468 0.072-0.938 0.158-1.402 0.246-0.814 0.152-1.624 0.322-2.432 0.528-0.444 0.114-0.882 0.242-1.322 0.37-0.79 0.23-1.574 0.472-2.356 0.754-0.484 0.172-0.958 0.368-1.438 0.56-0.708 0.286-1.41 0.576-2.11 0.904-0.554 0.262-1.094 0.55-1.636 0.84-0.446 0.234-0.9 0.43-1.34 0.684l-407.906 235.672c-19.128 11.044-25.686 35.51-14.64 54.64 7.34 12.71 20.606 19.828 34.292 19.96v0.044h89.842v467.716h-89.474c-22.090 0-40 17.91-40 40s17.91 40 40 40h128.276c0.402 0.012 0.794 0.060 1.2 0.060s0.796-0.048 1.2-0.060h183.602c0.402 0.012 0.794 0.060 1.2 0.060s0.796-0.048 1.2-0.060h183.602c0.402 0.012 0.794 0.060 1.2 0.060s0.796-0.048 1.2-0.060h313.154c22.098 0 40-17.91 40-40-0.006-22.090-17.914-39.996-40.006-39.996zM751.182 847.534h-105.94v-467.716h105.94v467.716zM252.93 299.816l258.736-149.486 258.738 149.486h-517.474zM565.242 379.816v467.716h-106v-467.716h106zM273.242 379.816h106v467.716h-106v-467.716z', paragraph: 'M728.032 96.032h-116.98c-0.026 0-0.050-0.004-0.076-0.004s-0.050 0.004-0.076 0.004h-199.848c-0.026 0-0.050-0.004-0.076-0.004s-0.050 0.004-0.076 0.004h-31.924c-123.712 0-224 100.292-224 224 0 121.032 95.994 219.628 216 223.842v344.158c0 22.092 17.91 40 40 40 22.086 0 40-17.908 40-40v-712h120v712c0 22.092 17.91 40 40 40 22.086 0 40-17.908 40-40v-712h77.056c22.094 0 40-17.91 40-40 0-22.092-17.91-40-40-40z', basket: 'M632.254 695.604v-112.016c-0.004-22.092 17.906-40.002 40-40.002 22.090 0.002 40 17.908 40 40.002l-0.004 112.018c0.004 22.088-17.906 39.996-39.996 39.998-22.094 0.002-40.004-17.904-40-40zM352.246 735.604c22.090-0.002 40-17.91 39.996-39.998l0.004-112.018c0-22.094-17.91-40-40-40.002-22.094 0-40.004 17.91-40 40.002v112.016c-0.004 22.096 17.906 40.002 40 40zM512.25 735.604c22.090-0.002 40-17.91 39.996-39.998l0.004-112.018c0-22.094-17.91-40-40-40.002-22.094 0-40.004 17.91-40 40.002v112.016c-0.004 22.096 17.906 40.002 40 40zM950.3 397.424c-7.596-8.686-18.574-13.67-30.114-13.67h-313.284c0.87 5.196 1.346 10.524 1.346 15.966 0 24.608-9.27 47.044-24.494 64.034h290.684l-47.318 351.376-629.908-0.030-47.502-351.346h291.034c-15.224-16.988-24.494-39.426-24.494-64.034 0-5.444 0.476-10.772 1.346-15.966h-313.66c-11.542 0-22.524 4.986-30.12 13.678-7.596 8.694-11.066 20.242-9.52 31.682l51.614 381.742 0.050 0.042c5.832 47.424 46.222 84.158 95.222 84.172l0.054 0.034 601.816-0.034c0.042 0 0.082 0.002 0.124 0.002 49.414 0 90.090-37.34 95.396-85.336l51.258-380.64c1.54-11.44-1.934-22.984-9.53-31.672zM805.492 105.34c-15.622-15.622-40.95-15.624-56.572 0.004l-230.684 230.684c-2.052-0.2-4.132-0.306-6.236-0.306-35.346 0-64 28.654-64 64s28.654 64 64 64 64-28.654 64-64c0-2.652-0.18-5.262-0.494-7.83l229.986-229.98c15.622-15.624 15.616-40.95-0-56.572z', credit: 'M376.188 672.062h-112.124c-22.092 0-40-17.908-40-40s17.908-40 40-40h112.124c22.092 0 40 17.908 40 40s-17.908 40-40 40zM960 232.002v560c0 6.8-1.708 13.2-4.704 18.81-0.044 0.082-0.078 0.172-0.124 0.254-0.524 0.974-1.112 1.914-1.722 2.836-0.098 0.15-0.18 0.31-0.282 0.458-7.188 10.64-19.36 17.638-33.168 17.638h-816c-22.090 0-40-17.908-40-40v-559.998c0-20.34 15.192-37.092 34.838-39.628 1.694-0.218 3.408-0.372 5.162-0.372h816c1.754 0 3.468 0.152 5.162 0.372 19.646 2.536 34.838 19.288 34.838 39.63zM144 272.002v80.030h736v-80.030h-736zM880 751.998v-239.966h-736v239.966h736z', shield: 'M875.146 148.994c-0.064-0.040-0.116-0.094-0.184-0.132-92.714-52.39-221.036-84.83-362.846-84.83-138.512 0-270.346 34.356-362.51 84.618-0.606 0.33-1.138 0.658-1.608 0.986-11.954 6.918-20.016 19.81-20.016 34.614v451.4c0 12.7 5.938 23.996 15.166 31.32l340.538 281.676c6.568 6.434 14.918 10.168 23.564 11.122 0.16 0.024 0.32 0.050 0.48 0.066 0.838 0.082 1.676 0.114 2.518 0.14 0.496 0.020 0.994 0.058 1.492 0.058s0.996-0.040 1.492-0.058c0.842-0.032 1.68-0.058 2.518-0.14 0.16-0.016 0.32-0.042 0.48-0.066 8.646-0.958 16.996-4.688 23.564-11.122l339.36-280.718c10.326-7.23 17.094-19.2 17.094-32.762v-450.918c0.002-15.254-8.54-28.506-21.102-35.254zM207.984 208.212c36.292-18.168 77.668-32.854 123.356-43.722 57.062-13.576 117.884-20.458 180.778-20.458s123.714 6.882 180.778 20.458c30.186 7.182 58.474 16.040 84.674 26.456l-490.846 490.848-78.738-65.070v-408.512zM511.742 867.75l-163.078-134.77 467.586-467.584v350.69l-304.508 251.664z', beaker: 'M848.64 790.56l-208.638-361.374v-252.062h24c22.092 0 40-17.908 40-40s-17.908-40-40-40h-304.002c-22.092 0-40 17.908-40 40s17.908 40 40 40h24v252.066l-208.636 361.37c-44 76.208-8 138.564 80 138.564h513.278c87.998 0 123.998-62.354 79.998-138.564zM464 177.124h96.002l-0.070 273.376 63.872 110.628h-223.678c35.932-62.268 63.872-110.684 63.876-110.692v-273.312zM768.64 849.124h-513.278c-8.28 0-14.186-0.976-17.968-2 1.004-3.792 3.112-9.394 7.25-16.564 0 0 54.598-94.614 109.316-189.436l316.026-0.002 109.374 189.44c4.138 7.168 6.246 12.77 7.25 16.562-3.784 1.024-9.69 2-17.97 2z', thumbsup: 'M256.972 768.004c0-8.67-3.156-16.158-9.484-22.534-6.332-6.34-13.836-9.484-22.504-9.458-8.682 0-16.188 3.172-22.516 9.458-6.33 6.344-9.488 13.84-9.488 22.534 0 8.692 3.158 16.186 9.488 22.532 6.328 6.286 13.834 9.458 22.516 9.458 8.668 0.028 16.172-3.118 22.504-9.458 6.328-6.376 9.484-13.868 9.484-22.532zM832.948 480.010c0-17.004-6.478-31.908-19.468-44.734-13.014-12.82-27.834-19.25-44.512-19.276h-175.97c0-19.328 7.98-45.904 24.004-79.724 15.968-33.826 23.978-60.568 23.978-80.256 0-32.646-5.332-56.808-15.994-72.48-10.664-15.664-31.988-23.484-63.98-23.484-8.696 8.64-15.012 22.828-19.032 42.486-4.020 19.69-9.102 40.606-15.254 62.752-6.168 22.172-16.080 40.382-29.762 54.738-7.344 7.68-20.168 22.832-38.5 45.496-1.326 1.67-5.164 6.65-11.512 15.010-6.342 8.342-11.594 15.178-15.762 20.508-4.156 5.308-9.91 12.386-17.252 21.218-7.328 8.862-14 16.186-19.988 22.038-5.986 5.794-12.412 11.73-19.26 17.744-6.852 5.984-13.508 10.5-19.99 13.48-6.478 3.010-12.4 4.484-17.756 4.512h-15.982v320.010h15.982c4.332 0 9.596 0.492 15.774 1.504 6.168 1.012 11.676 2.080 16.488 3.258 4.812 1.144 11.154 2.98 19.002 5.466 7.862 2.512 13.702 4.424 17.502 5.74 3.812 1.31 9.732 3.422 17.756 6.238 8.026 2.842 12.866 4.586 14.506 5.272 70.324 24.334 127.304 36.504 170.996 36.504h60.482c64.006 0 96.024-27.836 96.024-83.478 0-8.664-0.848-18.016-2.514-27.996 10.004-5.334 17.936-14.084 23.758-26.276 5.824-12.172 8.724-24.416 8.778-36.746 0-12.366-3.008-23.844-9.024-34.51 17.664-16.682 26.524-36.496 26.524-59.496 0-8.308-1.696-17.554-5.032-27.72-3.336-10.202-7.492-18.104-12.468-23.762 10.636-0.328 19.55-8.15 26.714-23.486 7.192-15.34 10.744-28.82 10.744-40.496v-0.054zM896.984 479.516c0 29.638-8.204 56.816-24.5 81.506 2.98 10.994 4.484 22.476 4.484 34.482 0 25.674-6.344 49.68-19.004 71.99 1.012 7 1.506 14.164 1.506 21.488 0 33.688-10.008 63.354-29.968 89.026 0.326 46.32-13.834 82.904-42.518 109.756-28.682 26.848-66.522 40.246-113.496 40.246h-64.528c-31.99 0-63.542-3.746-94.742-11.268-31.168-7.492-67.246-18.402-108.23-32.758-38.662-13.312-61.656-19.956-68.984-19.956h-143.996c-17.664 0-32.742-6.292-45.252-18.784-12.508-12.5-18.756-27.588-18.756-45.254v-319.982c0-17.666 6.248-32.728 18.756-45.226 12.51-12.52 27.588-18.784 45.252-18.784h136.998c12.002-8.010 34.818-33.822 68.478-77.484 19.33-24.99 37.168-46.344 53.508-64.008 7.996-8.314 13.918-22.586 17.744-42.766 3.828-20.178 8.912-41.232 15.256-63.24 6.36-21.984 16.68-40.002 30.994-53.998 13.002-12.362 28.012-18.514 45.018-18.514 27.998 0 53.152 5.414 75.464 16.242 22.31 10.828 39.316 27.748 50.964 50.77 11.704 23.002 17.5 53.978 17.5 92.962 0 31.008-7.984 63-23.98 96.028h88.014c34.67 0 64.634 12.628 89.956 37.98 25.346 25.346 38.008 55.144 38.008 89.49l0.054 0.056z', mirror: 'M857 127.778h-688c-22.092 0-40 17.91-40 40v688c0 22.090 17.908 40 40 40h688c22.094 0 40-17.91 40-40v-688c0-22.092-17.906-40-40-40zM817 815.778h-608v-1.086l606.914-606.914h1.086v608z', switchalt: 'M923.946 63.418h-631.232c-20.268 0-36.7 16.432-36.7 36.7v155.286h-155.284c-20.268 0-36.7 16.432-36.7 36.7v631.23c0 20.268 16.43 36.7 36.7 36.7h631.23c20.272 0 36.7-16.432 36.7-36.7v-155.286h155.286c20.272 0 36.7-16.432 36.7-36.7v-631.23c-0.002-20.268-16.43-36.7-36.7-36.7zM688.66 880.032h-544.628v-544.628h111.984v395.946c0 20.268 16.43 36.7 36.7 36.7h395.944v111.982zM688.66 688.046h-352.644v-352.644h352.644v352.644zM880.644 688.046h-111.984v-395.946c0-20.268-16.428-36.7-36.7-36.7h-395.944v-111.984h544.628v544.63z', commit: 'M984.032 472h-186.808c-19.474-140.12-139.74-248-285.222-248s-265.748 107.88-285.222 248h-186.746c-22.092 0-40 17.912-40 40.002 0 22.092 17.91 40 40 40h186.746c19.476 140.122 139.74 247.998 285.222 247.998s265.746-107.876 285.222-247.998h186.808c22.092 0 40-17.91 40-40s-17.908-40.002-40-40.002zM512 720c-114.692 0-208-93.308-208-208s93.308-208 208-208 208 93.308 208 208-93.308 208-208 208z', branch: 'M861.968 312.032c0-66.168-53.832-120-120-120s-120 53.832-120 120c0 50.55 31.436 93.87 75.77 111.516-5.384 20.352-15.71 39.68-29.844 54.92-28.828 31.092-72.202 46.858-128.91 46.858-77.162 0-129.12 26.162-162.984 55.12V297.15c46.556-16.512 80-60.974 80-113.12 0-66.168-53.832-120-120-120s-120 53.832-120 120c0 52.146 33.444 96.608 80 113.12v429.762c-46.556 16.512-80 60.974-80 113.12 0 66.168 53.832 120 120 120s120-53.832 120-120c0-50.926-31.902-94.514-76.758-111.908 5.222-26.17 16.578-51.154 32.558-70.432 28.8-34.746 71.592-52.364 127.184-52.364 99.498 0 156.922-39.408 187.574-72.466 27.402-29.554 45.708-67.194 52.48-106.716 48.078-15.66 82.93-60.882 82.93-114.114zM336 144.032c22.056 0 40 17.944 40 40s-17.944 40-40 40-40-17.944-40-40 17.944-40 40-40zm0 736c-22.056 0-40-17.944-40-40s17.944-40 40-40 40 17.944 40 40-17.944 40-40 40zm405.968-528c-22.056 0-40-17.944-40-40s17.944-40 40-40 40 17.944 40 40-17.942 40-40 40z', merge: 'M776.306 456.032c-51.602 0-95.696 32.744-112.612 78.542-69.674-6.072-141.482-31.012-197.386-69.306-46.266-31.69-100.392-85.728-111.792-168.92 45.4-17.12 77.79-60.998 77.79-112.314 0-66.168-53.832-120-120-120s-120 53.832-120 120c0 52.146 33.444 96.608 80 113.12v429.762c-46.556 16.512-80 60.974-80 113.12 0 66.168 53.832 120 120 120s120-53.832 120-120c0-52.146-33.444-96.608-80-113.12V471.444c19.622 21.888 42.618 41.898 68.792 59.828 68.422 46.868 156.64 77.042 241.646 83.462 16.14 47.23 60.932 81.3 113.56 81.3 66.168 0 120-53.832 120-120s-53.83-120.002-119.998-120.002zm-464-312c22.056 0 40 17.944 40 40s-17.944 40-40 40-40-17.944-40-40 17.942-40 40-40zm0 736c-22.056 0-40-17.944-40-40s17.944-40 40-40 40 17.944 40 40-17.944 40-40 40zm464-264c-22.056 0-40-17.944-40-40s17.944-40 40-40 40 17.944 40 40-17.944 40-40 40z', pullrequest: 'M631 157c104 1 171 52 171 166v397a123 123 0 1 1-82 0V323c0-63-27-83-90-84h-24l22 23a41 41 0 1 1-58 58l-93-93a41 41 0 0 1 1-58l93-93a41 41 0 1 1 58 58l-23 23h25zM222 314a123 123 0 1 1 82 0v406a123 123 0 1 1-82 0V314zm41 564a41 41 0 1 0 0-82 41 41 0 0 0 0 82zm0-639a41 41 0 1 0 0-83 41 41 0 0 0 0 83zm498 639a41 41 0 1 0 0-82 41 41 0 0 0 0 82z', chromatic: 'M512 0a512 512 0 110 1024A512 512 0 01512 0zM368 452v284a144 144 0 00274 59c-10-4-20-8-29-14l-111-64c-6-3-10-10-10-16V523l-124-71zm454 89c-8 7-17 13-26 18L551 701l81 46 1 1a144 144 0 00189-207zm-493-89l-81 47h-1a143 143 0 00-52 196 144 144 0 00137 71c-2-10-3-21-3-32V452zm375-195l-12 1c2 10 3 21 3 32v128c0 7-4 13-10 17l-154 88v144l245-142 2-1a144 144 0 00-74-267zm-384 0c-51 0-99 28-125 72-28 49-25 109 7 154 8-7 17-13 26-18l111-64a20 20 0 0120 0l153 88 124-71-244-141-1-1c-22-12-46-19-71-19zm192-111c-57 0-107 33-130 83 10 4 19 8 29 14l245 141v-96c-2-79-66-142-144-142z', twitter: 'M960 233.114c-32.946 14.616-68.41 24.5-105.598 28.942 37.954-22.762 67.098-58.774 80.856-101.688-35.52 21.054-74.894 36.368-116.726 44.598-33.542-35.724-81.316-58.038-134.204-58.038-101.496 0-183.796 82.292-183.796 183.814 0 14.424 1.628 28.45 4.758 41.89-152.75-7.668-288.22-80.872-378.876-192.072-15.822 27.15-24.898 58.706-24.898 92.42 0 63.776 32.458 120.034 81.782 153.010-30.116-0.944-58.458-9.212-83.262-22.982-0.028 0.75-0.028 1.546-0.028 2.324 0 89.070 63.356 163.334 147.438 180.256-15.426 4.186-31.664 6.426-48.442 6.426-11.836 0-23.35-1.146-34.574-3.28 23.406 73.006 91.286 126.16 171.726 127.632-62.914 49.324-142.18 78.696-228.314 78.696-14.828 0-29.448-0.876-43.842-2.568 81.33 52.138 177.96 82.574 281.786 82.574 338.11 0 523-280.104 523-523.014 0-7.986-0.164-15.914-0.542-23.778 35.952-25.96 67.124-58.318 91.756-95.162z', google: 'M799.094 79.996c0 0-200.938 0-267.936 0-120.126 0-233.188 91.004-233.188 196.434 0 107.692 81.904 194.624 204.124 194.624 8.496 0 16.75-0.148 24.812-0.74-7.942 15.186-13.594 32.286-13.594 50.022 0 29.974 16.094 54.226 36.466 74.042-15.376 0-30.248 0.438-46.438 0.438-148.782 0.036-263.312 94.784-263.312 193.056 0 96.758 125.534 157.312 274.312 157.312 169.656 0 263.312-96.25 263.312-193.024 0-77.6-22.908-124.062-93.686-174.156-24.216-17.128-70.534-58.812-70.534-83.32 0-28.69 8.19-42.868 51.406-76.624 44.346-34.63 75.688-83.302 75.688-139.944 0-67.372-30-133.058-86.374-154.746h85l59.942-43.374zM701.504 735.438c2.092 8.992 3.276 18.226 3.276 27.624 0 78.226-50.374 139.304-194.934 139.304-102.874 0-177.124-65.078-177.124-143.304 0-76.622 92.122-140.434 194.934-139.32 24.004 0.254 46.376 4.136 66.69 10.702 55.812 38.834 95.874 60.808 107.158 104.994zM536.844 443.782c-69-2.094-134.624-77.212-146.564-167.876-11.874-90.664 34.378-160.030 103.442-157.97 68.996 2.060 134.594 74.818 146.53 165.432 11.906 90.696-34.408 162.508-103.408 160.414z', gdrive: 'M465.926 641.356l-149.328 258.708h494.074l149.328-258.708h-494.074zM917.704 567.988l-256.33-444.048h-298.686l256.356 444.048h298.66zM320.236 197.442l-256.236 443.914 149.36 258.708 256.23-443.914-149.354-258.708z', youtube: 'M704.010 511.988c0-12.332-5.038-21.358-15.042-26.992l-255.982-159.99c-10.344-6.666-21.178-6.998-32.51-1.008-10.988 5.984-16.492 15.312-16.492 28.002v320c0 12.69 5.504 22.018 16.492 28.002 5.332 2.678 10.516 3.996 15.506 3.996 6.668 0 12.334-1.644 17.004-4.98l255.982-160.014c10.004-5.69 15.042-14.684 15.042-26.992v-0.024zM960 511.988c0 31.99-0.164 56.98-0.488 75.032-0.334 17.99-1.754 40.738-4.27 68.25-2.516 27.504-6.262 52.058-11.27 73.742-5.332 24.338-16.84 44.85-34.504 61.496-17.64 16.63-38.306 26.308-61.96 28.988-73.992 8.342-185.824 12.526-335.508 12.526-149.668 0-261.5-4.184-335.5-12.526-23.662-2.656-44.414-12.302-62.242-28.988-17.834-16.678-29.412-37.182-34.744-61.496-4.672-21.684-8.258-46.238-10.756-73.742-2.508-27.512-3.928-50.26-4.254-68.25-0.342-18.050-0.504-43.042-0.504-75.032 0-31.998 0.162-57.010 0.504-75.008 0.326-18.022 1.746-40.768 4.254-68.28 2.498-27.474 6.262-52.082 11.252-73.744 5.34-24.336 16.842-44.842 34.504-61.496 17.648-16.654 38.324-26.332 61.986-29.010 74-8.312 185.832-12.472 335.5-12.472 149.684 0 261.516 4.16 335.508 12.472 23.654 2.678 44.406 12.356 62.232 29.010 17.826 16.678 29.422 37.16 34.73 61.496 4.702 21.662 8.256 46.27 10.772 73.744 2.516 27.512 3.936 50.258 4.27 68.28 0.324 17.998 0.488 43.010 0.488 75.008z', facebook: 'M582.52 960h-167.88v-448h-112v-154.396l112-0.052-0.166-90.948c-0.036-125.974 34.12-202.604 182.484-202.604h123.542v154.424h-77.19c-57.782 0-60.566 21.56-60.566 61.85l-0.218 77.278h138.854l-16.376 154.394-122.36 0.052-0.124 448.002z', medium: 'M0 0v1024h1024v-1024h-1024zM850.708 242.614l-54.918 52.655c-3.858 2.965-6.321 7.581-6.321 12.772 0 0.933 0.080 1.847 0.232 2.736l-0.014-0.095v386.883c-0.139 0.794-0.219 1.708-0.219 2.641 0 5.191 2.462 9.807 6.283 12.744l0.038 0.028 53.637 52.655v11.558h-269.774v-11.558l55.559-53.936c5.461-5.456 5.461-7.068 5.461-15.413v-312.719l-154.477 392.344h-20.874l-179.851-392.344v262.947c-0.209 1.465-0.329 3.156-0.329 4.875 0 9.848 3.924 18.78 10.293 25.317l-0.008-0.008 72.258 87.649v11.558h-204.895v-11.558l72.263-87.649c6.070-6.284 9.81-14.852 9.81-24.293 0-2.081-0.182-4.12-0.53-6.101l0.031 0.21v-304.044c0.086-0.804 0.135-1.737 0.135-2.682 0-7.844-3.389-14.896-8.782-19.773l-0.023-0.021-64.234-77.378v-11.558h199.438l154.157 338.083 135.53-338.083h190.123v11.558z', graphql: 'M576 849a85 85 0 0 0-125-2L253 733l1-3h517l2 5-197 114zM451 177l2 2-258 448-3-1V398a85 85 0 0 0 61-107l198-114zm321 114a85 85 0 0 0 61 107v228l-3 1-258-448 2-2 198 114zM254 689a85 85 0 0 0-24-42l259-447a86 86 0 0 0 47 0l259 448a85 85 0 0 0-24 41H254zm643-54c-7-4-15-7-23-9V398a86 86 0 1 0-82-142L595 142a85 85 0 1 0-165 0L233 256a85 85 0 1 0-82 142v228a85 85 0 1 0 82 142l197 114a85 85 0 1 0 164-2l196-114a86 86 0 1 0 107-131z', redux: 'M359.016 943.608c-23.82 5.948-47.642 8.322-71.512 8.322-88.208 0-168.084-36.982-207.444-96.534-52.432-79.882-70.296-249.182 102.538-374.356 3.586 19.078 10.746 45.292 15.492 60.834-22.656 16.652-58.39 50.064-81.046 95.324-32.19 63.184-28.61 126.404 9.54 184.798 26.194 39.304 67.926 63.176 121.564 70.34 65.598 8.332 131.154-3.582 194.332-36.94 92.998-48.898 155.014-107.282 195.49-187.162-10.702-10.75-17.818-26.248-19.074-44.15-1.168-36.942 27.45-67.922 64.388-69.132h2.418c35.73 0 65.55 28.61 66.714 64.384 1.206 35.73-24.986 65.546-59.548 69.132-65.6 134.686-181.254 225.312-333.852 255.14zM902.646 540.622c-90.59-106.072-224.11-164.488-376.708-164.488h-19.072c-10.744-21.444-33.402-35.752-58.388-35.752h-2.418c-36.944 1.186-65.548 32.192-64.392 69.13 1.216 35.774 30.99 64.394 66.81 64.394h2.328c26.242-1.208 48.894-17.892 58.434-40.542h21.45c90.624 0 176.46 26.234 253.968 77.482 59.55 39.36 102.49 90.576 126.356 152.596 20.24 50.052 19.074 98.952-2.42 140.64-33.356 63.228-89.37 97.794-163.292 97.794-47.69 0-92.998-14.33-116.822-25.082-13.118 11.958-36.984 31.028-53.64 42.944 51.226 23.87 103.7 36.94 153.762 36.94 114.446 0 199.070-63.132 231.268-126.362 34.562-69.13 32.188-188.326-57.224-289.694zM297.046 708.706c1.21 35.828 30.984 64.394 66.764 64.394h2.368c36.992-1.168 65.556-32.15 64.39-69.132-1.162-35.732-30.984-64.394-66.758-64.394h-2.376c-2.418 0-5.958 0-8.332 1.208-48.89-81.090-69.132-169.27-62.014-264.648 4.792-71.528 28.616-133.516 70.346-184.766 34.568-44.106 101.326-65.57 146.598-66.758 126.402-2.396 180.044 154.968 183.576 218.144 15.542 3.584 41.734 11.936 59.644 17.892-14.328-193.118-133.526-293.266-247.97-293.266-107.28 0-206.236 77.484-245.552 191.932-54.848 152.596-19.070 299.212 47.644 414.826-5.912 8.374-9.494 21.498-8.328 34.568z', github: 'M214.6 809.4A417.8 417.8 0 0191.4 512c0-112.3 43.8-218 123.2-297.4A417.8 417.8 0 01512 91.4c112.3 0 218 43.8 297.4 123.2A417.8 417.8 0 01932.6 512c0 112.3-43.8 218-123.2 297.4-49 49-108 84.3-172.2 104.3v-74.4c0-39.5-13.6-68.6-40.7-87.2a354 354 0 0091.9-19.6c15.8-5.6 30-12.2 42.6-19.9a177.8 177.8 0 0036.3-29.8 175 175 0 0029.1-41.7 228 228 0 0018.6-55.9c4.6-21.7 6.9-45.6 6.9-71.7 0-50.7-16.5-93.8-49.5-129.4 15-39.2 13.4-81.8-4.9-127.9l-12.2-1.4c-8.5-1-23.8 2.6-45.8 10.8-22 8.1-46.8 21.5-74.3 40.1a450.9 450.9 0 00-121-16.1 442 442 0 00-120.5 16.1 419.6 419.6 0 00-49.3-29.1c-15.5-7.7-27.9-13-37.2-15.7a127.6 127.6 0 00-41.4-5.6c-2.3.3-4 .6-4.9 1-18.3 46.3-20 89-4.9 127.8a183.5 183.5 0 00-49.5 129.4c0 26.1 2.3 50 6.9 71.7a228.3 228.3 0 0018.6 56 175 175 0 0029.1 41.6 177.9 177.9 0 0036.3 29.8 223.4 223.4 0 0042.6 19.9A353.2 353.2 0 00432 752c-26.8 18.3-40.2 47.3-40.2 87.2v75.9a418.4 418.4 0 01-177-105.8M512 0a512 512 0 100 1024A512 512 0 00512 0', bitbucket: 'M362.3 395l53 276.5h195.4l34-198.4h283l-74.4 457a30 30 0 01-29.7 25.3H210.7a41 41 0 01-40-34.2l-127.6-775a30 30 0 0130-34.9l877.8.2a30 30 0 0130 34.8L940.5 395H362.3z', gitlab: 'M186.9 75a18.7 18.7 0 0135.6 0l108.8 333.4h361.4L512 961.8 331.3 408.4H78.1zM78.1 408.5L512 961.8 36.8 618.2a37.1 37.1 0 01-13.6-41.6L78 408.4zm867.8 0l55 168.2c5 15.3-.5 32.1-13.7 41.6L512 961.8l434-553.4zM837.1 75l108.8 333.3H692.7L801.5 75a18.7 18.7 0 0135.6 0z', azuredevops: 'M0,378.6 L95.8,252 L454.4,106.2 L454.4,1 L768.8,231 L126.6,355.8 L126.6,706.8 L0,670.2 L0,378.6 Z M1024,188.8 L1024,814 L778.6,1023 L381.8,892.6 L381.8,1023 L126.6,706.6 L769,783.2 L769,231 L1024,188.8 Z', discord: 'M371 147c-14 0-126 3-245 91 0 0-126 227-126 507 0 0 74 126 268 132l58-71c-111-34-153-103-153-103l24 15 4 2 8 4a668 668 0 0 0 420 68 629 629 0 0 0 228-89s-44 71-159 103l58 71c194-7 268-133 268-132 0-280-126-507-126-507-126-94-246-91-246-91l-12 14a576 576 0 0 1 218 110 729 729 0 0 0-441-81l-15 1c-31 4-105 14-199 56-33 14-52 24-52 24s72-69 230-114l-9-10h-1zm-23 323c50 0 91 43 90 97 0 53-40 96-90 96-49 0-89-43-89-96 0-54 39-97 89-97zm321 0c49 0 89 43 89 97 0 53-39 96-89 96s-90-43-90-96c0-54 40-97 90-97z', contrast: 'M368 713h79l266-266v-79L368 713zm192 0h153V560L560 713zm98-402h-79L311 579v79l347-347zm-192 0H311v155l155-155zm467 402V91H311v128h452c23 0 42 19 42 42v452h128zM713 933V805H261c-23 0-42-19-42-42V311H91v622h622zM982 0c23 0 42 19 42 42v721c0 23-19 42-42 42H805v177c0 23-19 42-42 42H42c-23 0-42-19-42-42V261c0-23 19-42 42-42h177V42c0-23 19-42 42-42h721z', unfold: 'M512 645l8 1c21 4 37 22 37 44v181l52-52 6-6a45 45 0 0 1 58 69l-129 129-7 5a45 45 0 0 1-57-5L351 882l-5-6a45 45 0 0 1 5-57l7-6c17-12 41-10 57 6l52 52V690l1-8c4-21 22-37 44-37zM337 275a45 45 0 1 1 0 90H229l91 102h382l91-102H685a45 45 0 1 1 0-90h208c39 0 59 46 34 75L782 512l145 162c25 29 5 75-34 75H685a45 45 0 1 1 0-90h108l-91-102H320l-91 102h108a45 45 0 1 1 0 90H129c-38 0-59-46-33-75l144-162L96 350c-24-27-8-69 26-74l7-1h208zM537 8l7 6 129 129a45 45 0 0 1-58 68l-6-5-52-52v181c0 22-16 40-37 44h-8c-22 0-40-15-44-36l-1-8V153l-52 53a45 45 0 0 1-57 5l-7-5a45 45 0 0 1-5-57l5-6L480 14c16-16 40-18 57-6z', sharealt: 'M130 85h332a45 45 0 0 1 8 89l-8 1H175v674h674V557a45 45 0 0 1 89-8l1 8v337c0 22-16 40-37 44l-8 1H130c-22 0-40-16-44-37l-1-8V130c0-22 16-40 37-44l8-1h332-332zm555 0h210l5 1-6-1a45 45 0 0 1 32 13l-5-4 3 3 2 1a46 46 0 0 1 12 24v2l1 5v209a45 45 0 0 1-89 8l-1-8V238L544 544a45 45 0 0 1-57 5l-7-5a45 45 0 0 1 0-64l306-305H685a45 45 0 0 1-8-89l8-1h209-209z', accessibility: 'M512 0a512 512 0 110 1024A512 512 0 01512 0zm0 89.6a422.4 422.4 0 100 844.8 422.4 422.4 0 000-844.8zm262.2 250a40.9 40.9 0 01-27.5 49.3l-169.1 50.7c-8.2 2.7-15.1 11-13.7 20.5 1.3 27.4 1.5 76.5 7 98.4 12.9 59 82.4 214.4 91 233.6a56 56 0 014.9 19 40 40 0 01-40 40c-18 0-30.3-12.7-38.2-28.4A34096 34096 0 01510.9 664l-77.7 165.7-1.3 2.1a40 40 0 01-69.3-39.7c8.6-19 78-174.5 90.8-233.6 5.5-21.9 6-71 7.3-98.4a21 21 0 00-13.7-20.5l-169.1-50.7a40.7 40.7 0 01-27.5-50.7c6.9-20.5 30.2-30.1 50.9-24.6 0 0 154.6 49.3 209.6 49.3s213.8-50.7 213.8-50.7c20.6-5.5 44 6.8 49.5 27.4zm-264-171.2a76.7 76.7 0 110 153.4c-42.6 0-77-34.2-77-76.7 0-41 34.4-76.7 77-76.7z', accessibilityalt: 'M512 0a512 512 0 110 1024A512 512 0 01512 0zm262.2 339.6c-5.5-20.6-28.9-32.9-49.5-27.4 0 0-158.8 50.7-213.8 50.7s-209.6-49.3-209.6-49.3c-20.7-5.5-44 4-51 24.6A40.7 40.7 0 00278 389l169 50.7a21 21 0 0113.8 20.5c-1.3 27.4-1.8 76.5-7.3 98.4-12.9 59.1-82.2 214.5-90.8 233.6a40 40 0 1070.6 37.5L511 664a34096 34096 0 0077.7 158.7c7.9 15.7 20.2 28.4 38.2 28.4a40 40 0 0040-40 56 56 0 00-4.8-19c-8.7-19.2-78.2-174.5-91.1-233.6-5.5-21.9-5.7-71-7-98.4-1.4-9.6 5.5-17.8 13.7-20.5l169.1-50.7a40.9 40.9 0 0027.5-49.3zm-264-171.2c-42.6 0-77 35.6-77 76.7a76.7 76.7 0 0077 76.7 76.7 76.7 0 100-153.4z', markup: 'M1010.6 479.7L736.4 205.4a45.7 45.7 0 10-64.7 64.6l242 242L671.7 754a45.7 45.7 0 1064.7 64.6l274.1-274.2a45.6 45.6 0 000-64.6M0 511.9c0-11.7 4.5-23.4 13.4-32.3l274.1-274.2a45.7 45.7 0 1164.7 64.6L110.4 512l241.9 241.9a45.7 45.7 0 01-64.7 64.6L13.4 544.2C4.4 535.3 0 523.6 0 512', outline: 'M180.1 714.3V844h129.6v94.8h-180c-24.2 0-44-19.5-44.4-43.7V714.3h94.8zM619.3 844v94.8H404.7v-94.8h214.6zm319.4-129.6v180c0 24.2-19.5 44-43.7 44.4H714.3v-94.8H844V714.3h94.8zm0-309.6v214.6h-94.8V404.7h94.8zm-758.6 0v214.6H85.3V404.7h94.8zm331.9 34a73.2 73.2 0 110 146.4 73.2 73.2 0 010-146.3zM894.2 85.4c24.3 0 44 19.5 44.5 43.7V309.7h-94.8V180H714.3V85.3h180zm-584.5 0v94.8H180v129.6H85.3v-180c0-24.2 19.5-44 43.7-44.4H309.7zm309.6 0v94.8H404.7V85.3h214.6z', verified: 'M719 66l30 56c12 23 35 40 61 44l62 11c45 8 76 51 70 96l-9 63c-4 26 5 52 23 71l44 46c32 33 32 85 0 118l-44 46a85 85 0 00-23 71l9 63c6 45-25 88-70 96l-62 11c-26 4-49 21-61 44l-30 56a85 85 0 01-113 36l-57-27a85 85 0 00-74 0l-57 27c-42 21-92 4-113-36l-30-56a85 85 0 00-61-44l-62-11c-45-8-76-51-70-96l9-63c4-26-5-52-23-71l-44-46a85 85 0 010-118l44-46c18-19 27-45 23-71l-9-63c-6-45 25-88 70-96l62-11c26-4 49-21 61-44l30-56c21-40 71-57 113-36l57 27c23 12 51 12 74 0l57-27c42-21 92-4 113 36zm70 258a46 46 0 00-59 5L437 622 294 480l-6-5a46 46 0 00-59 69l175 175 6 5c18 13 43 11 59-5l326-325 4-6c13-18 12-43-4-59z', comment: 'M936 85l6 1c22 3 39 21 39 44v709c0 8-2 15-5 21l-2 4c-9 12-23 20-38 20H427l-131 127c-9 9-21 13-34 13-25 0-46-20-46-45v-95H88c-25 0-45-20-45-45V130a45 45 0 0145-45zm-46 89H134v620h756V174zM768 544c25 0 46 20 46 44 0 25-21 45-46 45H256c-25 0-46-20-46-45 0-24 21-44 46-44zm0-208c25 0 46 20 46 44 0 25-21 45-46 45H256c-25 0-46-20-46-45 0-24 21-44 46-44z', commentadd: 'M937 85l6 1c23 3 40 21 40 44v711c0 7-2 14-5 21l-3 4c-8 12-22 19-38 19H428l-131 128c-9 9-22 13-35 13-25 0-45-20-45-45v-96H89c-26 0-46-20-46-44V130a45 45 0 0146-45zm-45 90H134v621h758V175zm-379 97c22 0 40 18 40 40v134h132a40 40 0 010 81H553v132a40 40 0 11-80 0V527H341a40 40 0 110-81h132V312c0-22 18-40 40-40z', requestchange: 'M937 85l6 1c23 3 40 21 40 44v711c0 7-2 14-5 21l-3 4c-8 12-22 19-38 19H428l-131 128c-9 9-22 13-35 13-25 0-45-20-45-45v-96H89c-26 0-46-20-46-44V130a45 45 0 0146-45zm-45 90H134v621h758V175zM585 310c18-18 47-18 65 0l143 144c18 17 18 46 0 64L650 661a46 46 0 01-65 0 46 46 0 010-65l65-64H266a46 46 0 110-92h384l-65-65a46 46 0 010-65z', comments: 'M978.3 92.2a45 45 0 0145.7 44.6v535.6a45.2 45.2 0 01-45.7 44.6h-125v122c0 7.7-2 14.8-5.5 21.3l-2.3 3.7a46.1 46.1 0 01-38 19.6H298.8L168 1011a47 47 0 01-34.3 13.1c-25.2 0-45.7-20-45.7-44.6v-95.8H45.7c-25.2 0-45.7-20-45.7-44.5V303.4A45 45 0 0145.7 259h125v-122a45 45 0 0139.8-44.3c1.3-.1 257.2-.3 767.8-.4zM761.9 348H91.4v446.5H762V348zm-125 264c25.3 0 45.8 20 45.8 44.6A45.2 45.2 0 01637 701H216.4c-25.3 0-45.7-20-45.7-44.5a45.2 45.2 0 0145.7-44.6H637zm295.7-430.7H262V259h505.1l46.3.4a45 45 0 0139.8 44.2v324.3h79.3V181.3zM637 441.3c25.2 0 45.7 20 45.7 44.6a45.2 45.2 0 01-45.7 44.6H216.4c-25.3 0-45.7-20-45.7-44.6a45.2 45.2 0 0145.7-44.5H637z', ruler: 'M83 110c-22 0-40 18-40 40v176a40 40 0 0080 0v-49h778v49a40 40 0 0080 0V150a40 40 0 10-80 0v49H123v-49c0-22-18-40-40-40zm40 458v266h778V568h-63v115a40 40 0 11-80 0V568h-63v46a40 40 0 11-80 0v-46h-63v115a40 40 0 11-80 0V568h-63v46a40 40 0 11-80 0v-46h-63v115a40 40 0 11-80 0V568h-63zm103-80h691c36 0 64 28 64 64v298c0 36-28 64-64 64H107c-36 0-64-28-64-64V552c0-36 28-64 64-64h119z'}; let Svg = esm.styled.svg({shapeRendering: 'inherit', transform: 'translate3d(0,0,0)'}, (_ref => _ref.inline ? {display: 'inline-block'} : {display: 'block'})); function _extends() {
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

	Svg.displayName = 'Svg'; let Path = esm.styled.path({fill: 'currentColor'}); var Icons = react_default.a.memo((_ref => {
		let {icon} = _ref; let {symbol} = _ref; let
			props = _objectWithoutProperties(_ref, ['icon', 'symbol']); return react_default.a.createElement(Svg, {viewBox: '0 0 1024 1024', ...props}, symbol ? react_default.a.createElement('use', {xlinkHref: '#icon--'.concat(symbol)}) : react_default.a.createElement(Path, {d: icon_icons[icon]}));
	})); var Symbols = react_default.a.memo((_ref2 => {
		let _ref2$icons = _ref2.icons; let keys = void 0 === _ref2$icons ? Object.keys(icon_icons) : _ref2$icons; return react_default.a.createElement('svg', {xmlns: 'http://www.w3.org/2000/svg', style: {position: 'absolute', width: 0, height: 0}, 'data-chromatic': 'ignore'}, keys.map((key => react_default.a.createElement('symbol', {id: 'icon--'.concat(key), key}, react_default.a.createElement(Path, {d: icon_icons[key]})))));
	}));
}, 76(module, __webpack_exports__, __webpack_require__) {
	'use strict'; __webpack_require__.d(__webpack_exports__, 'd', (() => PARAM_KEY)), __webpack_require__.d(__webpack_exports__, 'a', (() => ADDON_ID)), __webpack_require__.d(__webpack_exports__, 'c', (() => PANEL_ID)), __webpack_require__.d(__webpack_exports__, 'b', (() => EVENT_ID)); var PARAM_KEY = 'actions'; var ADDON_ID = 'storybook/actions'; var PANEL_ID = ''.concat(ADDON_ID, '/panel'); var EVENT_ID = ''.concat(ADDON_ID, '/action-event');
}, 852(module, __webpack_exports__, __webpack_require__) {
	'use strict'; __webpack_require__.r(__webpack_exports__); let global_window = __webpack_require__(8); let window_default = __webpack_require__.n(global_window); let react = (__webpack_require__(23), __webpack_require__(15), __webpack_require__(0)); let react_default = __webpack_require__.n(react); let react_dom = __webpack_require__(158); let react_dom_default = __webpack_require__.n(react_dom); let es = __webpack_require__(108); let router = __webpack_require__(870); let esm = __webpack_require__(11); let emotion_theming_browser_esm = __webpack_require__(397); let ensure = __webpack_require__(399); let index_module = __webpack_require__(165); let react_sizeme = (__webpack_require__(791), __webpack_require__(4), __webpack_require__(9), __webpack_require__(5), __webpack_require__(13), __webpack_require__(6), __webpack_require__(7), __webpack_require__(10), __webpack_require__(438)); let react_sizeme_default = __webpack_require__.n(react_sizeme); let icon_icon = __webpack_require__(60); let dist_esm = __webpack_require__(1); let core_browser_esm = __webpack_require__(56); let global = __webpack_require__(288); let bar_button = (__webpack_require__(22), __webpack_require__(48), __webpack_require__(49), __webpack_require__(211)); let Root_Root = dist_esm.styled.div({position: 'fixed', left: 0, top: 0, width: '100vw', height: '100vh', overflow: 'hidden'}); function _typeof(obj) {
		return (_typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function _typeof(obj) {
			return typeof obj;
		} : function _typeof(obj) {
			return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
		})(obj);
	}

	function _defineProperties(target, props) {
		for (let i = 0; i < props.length; i++) {
			let descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 'value' in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
		}
	}

	function _setPrototypeOf(o, p) {
		return (_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
			return o.__proto__ = p, o;
		})(o, p);
	}

	function _createSuper(Derived) {
		let hasNativeReflectConstruct = (function _isNativeReflectConstruct() {
			if (typeof Reflect === 'undefined' || !Reflect.construct) {
				return !1;
			}

			if (Reflect.construct.sham) {
				return !1;
			}

			if (typeof Proxy === 'function') {
				return !0;
			}

			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (() => {}))), !0;
			} catch (e) {
				return !1;
			}
		})(); return function _createSuperInternal() {
			let result; let Super = _getPrototypeOf(Derived); if (hasNativeReflectConstruct) {
				let NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget);
			} else {
				result = Super.apply(this, arguments);
			}

			return _possibleConstructorReturn(this, result);
		};
	}

	function _possibleConstructorReturn(self, call) {
		return !call || _typeof(call) !== 'object' && typeof call !== 'function' ? (function _assertThisInitialized(self) {
			if (void 0 === self) {
				throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
			}

			return self;
		})(self) : call;
	}

	function _getPrototypeOf(o) {
		return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
			return o.__proto__ || Object.getPrototypeOf(o);
		})(o);
	}

	let {SIDEBAR} = esm.a; let {CANVAS} = esm.a; let {ADDONS} = esm.a; let Pane = dist_esm.styled.div({transition: 'transform .2s ease', position: 'absolute', top: 0, height: '100%', overflow: 'auto'}, (_ref => {
		let {theme} = _ref; return {background: theme.background.content, '&:nth-of-type(1)': {borderRight: '1px solid '.concat(theme.appBorderColor)}, '&:nth-of-type(3)': {borderLeft: '1px solid '.concat(theme.appBorderColor)}};
	}), (_ref2 => {
		switch (_ref2.index) {
			case 0: return {width: '80vw', transform: 'translateX(-80vw)', left: 0}; case 1: return {width: '100%', transform: 'translateX(0) scale(1)', left: 0}; case 2: return {width: '80vw', transform: 'translateX(80vw)', right: 0}; default: return {};
		}
	}), (_ref3 => {
		let {active} = _ref3; let
			{index} = _ref3; switch (!0) {
			case index === 0 && active === SIDEBAR: return {transform: 'translateX(-0px)'}; case index === 1 && active === SIDEBAR: return {transform: 'translateX(40vw) translateY(-42.5vh) translateY(40px) scale(0.2)'}; case index === 1 && active === ADDONS: return {transform: 'translateX(-40vw) translateY(-42.5vh) translateY(40px) scale(0.2)'}; case index === 2 && active === ADDONS: return {transform: 'translateX(0px)'}; default: return {};
		}
	})); let
		Panels = react_default.a.memo((_ref4 => {
			let {children} = _ref4; let
				{active} = _ref4; return react_default.a.createElement(PanelsContainer, null, react.Children.toArray(children).map(((item, index) => react_default.a.createElement(Pane, {key: index, index, active}, item))));
		})); Panels.displayName = 'Panels'; var PanelsContainer = dist_esm.styled.div({position: 'fixed', top: 0, left: 0, width: '100vw', height: 'calc(100% - 40px)'}); let mobile_Bar = dist_esm.styled.nav({position: 'fixed', bottom: 0, left: 0, width: '100vw', height: 40, display: 'flex', boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.1)', '& > *': {flex: 1}}, (_ref5 => ({background: _ref5.theme.barBg}))); let mobile_Mobile = (function (_Component) {
		!(function _inherits(subClass, superClass) {
			if (typeof superClass !== 'function' && superClass !== null) {
				throw new TypeError('Super expression must either be null or a function');
			}

			subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {value: subClass, writable: !0, configurable: !0}}), superClass && _setPrototypeOf(subClass, superClass);
		})(Mobile, _Component);

		let _super = _createSuper(Mobile); function Mobile(props) {
			let _this; !(function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError('Cannot call a class as a function');
				}
			})(this, Mobile), _this = _super.call(this, props); let {options} = props; return _this.state = {active: options.initialActive || SIDEBAR}, _this;
		}

		return (function _createClass(Constructor, protoProps, staticProps) {
			return protoProps && _defineProperties(Constructor.prototype, protoProps), staticProps && _defineProperties(Constructor, staticProps), Constructor;
		})(Mobile, [{key: 'render', value: function render() {
			let _this2 = this; let _this$props = this.props; let {Sidebar} = _this$props; let {Preview} = _this$props; let {Panel} = _this$props; let {Notifications} = _this$props; let {pages} = _this$props; let {viewMode} = _this$props; let {options} = _this$props; let {docsOnly} = _this$props; let {active} = this.state; return react_default.a.createElement(Root_Root, null, react_default.a.createElement(Notifications, {placement: {position: 'fixed', bottom: 60, left: 20, right: 20}}), react_default.a.createElement(Panels, {active}, react_default.a.createElement(Sidebar, null), react_default.a.createElement('div', null, react_default.a.createElement('div', {hidden: !viewMode}, react_default.a.createElement(Preview, {isToolshown: options.isToolshown, id: 'main', viewMode})), pages.map((_ref6 => {
				let {key} = _ref6; let Route = _ref6.route; let
					Content = _ref6.render; return react_default.a.createElement(Route, {key}, react_default.a.createElement(Content, null));
			}))), react_default.a.createElement(Panel, {hidden: !viewMode})), react_default.a.createElement(mobile_Bar, null, react_default.a.createElement(bar_button.b, {onClick: function onClick() {
				return _this2.setState({active: SIDEBAR});
			}, active: active === SIDEBAR}, 'Sidebar'), react_default.a.createElement(bar_button.b, {onClick: function onClick() {
				return _this2.setState({active: CANVAS});
			}, active: active === CANVAS}, viewMode ? 'Canvas' : null, pages.map((_ref7 => {
				let {key} = _ref7; let
					Route = _ref7.route; return react_default.a.createElement(Route, {key}, key);
			}))), viewMode && !docsOnly ? react_default.a.createElement(bar_button.b, {onClick: function onClick() {
				return _this2.setState({active: ADDONS});
			}, active: active === ADDONS}, 'Addons') : null));
		}}]), Mobile;
	})(react.Component); mobile_Mobile.displayName = 'Mobile'; __webpack_require__(62); let store2 = __webpack_require__(65); let store2_default = __webpack_require__.n(store2); let debounce = __webpack_require__(163); let debounce_default = __webpack_require__.n(debounce); let memoizerific = __webpack_require__(28); let memoizerific_default = __webpack_require__.n(memoizerific); let write = memoizerific_default()(1)((changes => {
		try {
			store2_default.a.local.set('storybook-layout', changes);
		} catch (e) {
			console.error(e);
		}
	})); let persist_set = debounce_default()(write, 500); let cjs = __webpack_require__(409); let cjs_default = __webpack_require__.n(cjs); let Handle = dist_esm.styled.div((_ref => {
		let {theme} = _ref; return {zIndex: 10, position: 'absolute', top: 0, left: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', color: _ref.isDragging ? theme.color.secondary : theme.appBorderColor, overflow: 'hidden', transition: 'color 0.2s linear, background-position 0.2s linear, background-size 0.2s linear, background 0.2s linear', '&:hover': {color: theme.color.secondary}};
	}), (_ref2 => ({cursor: _ref2.axis === 'x' ? 'col-resize' : 'row-resize'})), (_ref3 => {
		let {theme} = _ref3; return _ref3.axis === 'x' ? {height: '100%', width: theme.layoutMargin, marginLeft: 0} : {height: theme.layoutMargin, width: '100%', marginTop: 0};
	}), (_ref4 => {
		let {axis} = _ref4; let
			{isDragging} = _ref4; if (axis === 'y') {
			let style = {backgroundImage: 'radial-gradient(at center center,rgba(0,0,0,0.2) 0%,transparent 70%,transparent 100%)', backgroundSize: '100% 50px', backgroundPosition: '50% 0', backgroundRepeat: 'no-repeat'}; return isDragging ? style : ({...style, backgroundPosition: '50% 10px', '&:hover': style});
		}

		if (axis === 'x') {
			let _style = {backgroundImage: 'radial-gradient(at center center,rgba(0,0,0,0.2) 0%,transparent 70%,transparent 100%)', backgroundSize: '50px 100%', backgroundPosition: '0 50%', backgroundRepeat: 'no-repeat'}; return isDragging ? _style : ({..._style, backgroundPosition: '10px 50%', '&:hover': _style});
		}

		return {};
	})); function container_typeof(obj) {
		return (container_typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function _typeof(obj) {
			return typeof obj;
		} : function _typeof(obj) {
			return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
		})(obj);
	}

	function container_defineProperties(target, props) {
		for (let i = 0; i < props.length; i++) {
			let descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 'value' in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
		}
	}

	function container_setPrototypeOf(o, p) {
		return (container_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
			return o.__proto__ = p, o;
		})(o, p);
	}

	function container_createSuper(Derived) {
		let hasNativeReflectConstruct = (function container_isNativeReflectConstruct() {
			if (typeof Reflect === 'undefined' || !Reflect.construct) {
				return !1;
			}

			if (Reflect.construct.sham) {
				return !1;
			}

			if (typeof Proxy === 'function') {
				return !0;
			}

			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (() => {}))), !0;
			} catch (e) {
				return !1;
			}
		})(); return function _createSuperInternal() {
			let result; let Super = container_getPrototypeOf(Derived); if (hasNativeReflectConstruct) {
				let NewTarget = container_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget);
			} else {
				result = Super.apply(this, arguments);
			}

			return container_possibleConstructorReturn(this, result);
		};
	}

	function container_possibleConstructorReturn(self, call) {
		return !call || container_typeof(call) !== 'object' && typeof call !== 'function' ? (function container_assertThisInitialized(self) {
			if (void 0 === self) {
				throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
			}

			return self;
		})(self) : call;
	}

	function container_getPrototypeOf(o) {
		return (container_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
			return o.__proto__ || Object.getPrototypeOf(o);
		})(o);
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

	let container_Pane = dist_esm.styled.div({position: 'absolute', boxSizing: 'border-box', top: 0, left: 0, width: '100%', height: '100%'}, (_ref => _ref.hidden ? {opacity: 0} : {opacity: 1}), (_ref2 => _ref2.top ? {zIndex: 9} : {}), (_ref3 => {
		let {border} = _ref3; let
			{theme} = _ref3; switch (border) {
			case 'left': return {borderLeft: '1px solid '.concat(theme.appBorderColor)}; case 'right': return {borderRight: '1px solid '.concat(theme.appBorderColor)}; case 'top': return {borderTop: '1px solid '.concat(theme.appBorderColor)}; case 'bottom': return {borderBottom: '1px solid '.concat(theme.appBorderColor)}; default: return {};
		}
	}), (_ref4 => _ref4.animate ? {transition: ['width', 'height', 'top', 'left', 'background', 'opacity', 'transform'].map((p => ''.concat(p, ' 0.1s ease-out'))).join(',')} : {})); let Paper = dist_esm.styled.div({position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}, (_ref5 => {
		let {isFullscreen} = _ref5; let
			{theme} = _ref5; return isFullscreen ? {boxShadow: 'none', borderRadius: 0} : {borderRadius: theme.appBorderRadius, overflow: 'hidden', boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.1)'};
	})); let container_Sidebar = function Sidebar(_ref6) {
		let _ref6$hidden = _ref6.hidden; let hidden = void 0 !== _ref6$hidden && _ref6$hidden; let {children} = _ref6; let _ref6$position = _ref6.position; let position = void 0 === _ref6$position ? void 0 : _ref6$position; let props = _objectWithoutProperties(_ref6, ['hidden', 'children', 'position']); return hidden ? null : react_default.a.createElement(container_Pane, {style: position, ...props}, children);
	};

	let container_Main = function Main(_ref7) {
		let _ref7$isFullscreen = _ref7.isFullscreen; let isFullscreen = void 0 !== _ref7$isFullscreen && _ref7$isFullscreen; let {children} = _ref7; let _ref7$position = _ref7.position; let position = void 0 === _ref7$position ? void 0 : _ref7$position; let props = _objectWithoutProperties(_ref7, ['isFullscreen', 'children', 'position']); return react_default.a.createElement(container_Pane, {style: position, top: !0, ...props, role: 'main'}, react_default.a.createElement(Paper, {isFullscreen}, children));
	};

	container_Main.displayName = 'Main'; let container_Preview = function Preview(_ref8) {
		let _ref8$hidden = _ref8.hidden; let hidden = void 0 !== _ref8$hidden && _ref8$hidden; let {children} = _ref8; let _ref8$position = _ref8.position; let position = void 0 === _ref8$position ? void 0 : _ref8$position; let props = _objectWithoutProperties(_ref8, ['hidden', 'children', 'position']); return react_default.a.createElement(container_Pane, {style: position, top: !0, hidden, ...props}, children);
	};

	container_Preview.displayName = 'Preview'; let container_Panel = function Panel(_ref9) {
		let _ref9$hidden = _ref9.hidden; let hidden = void 0 !== _ref9$hidden && _ref9$hidden; let {children} = _ref9; let _ref9$position = _ref9.position; let position = void 0 === _ref9$position ? void 0 : _ref9$position; let _ref9$align = _ref9.align; let align = void 0 === _ref9$align ? 'right' : _ref9$align; let props = _objectWithoutProperties(_ref9, ['hidden', 'children', 'position', 'align']); return react_default.a.createElement(container_Pane, {style: position, hidden, ...props, border: align === 'bottom' ? 'top' : 'left'}, children);
	};

	container_Panel.displayName = 'Panel'; let HoverBlocker = dist_esm.styled.div({position: 'absolute', left: 0, top: 0, zIndex: 15, height: '100vh', width: '100vw'}); let getPreviewPosition = function getPreviewPosition(_ref10) {
		let {panelPosition} = _ref10; let {isPanelHidden} = _ref10; let {isNavHidden} = _ref10; let {isFullscreen} = _ref10; let {bounds} = _ref10; let {resizerPanel} = _ref10; let {resizerNav} = _ref10; let
			{margin} = _ref10; if (isFullscreen || isPanelHidden) {
			return {};
		}

		let navX = isNavHidden ? 0 : resizerNav.x; let panelX = resizerPanel.x; let panelY = resizerPanel.y; return panelPosition === 'bottom' ? {height: panelY - margin, left: 0, top: 0, width: bounds.width - navX - 2 * margin} : {height: bounds.height - 2 * margin, left: 0, top: 0, width: panelX - navX - margin};
	};

	let getMainPosition = function getMainPosition(_ref11) {
		let {bounds} = _ref11; let {resizerNav} = _ref11; let {isNavHidden} = _ref11; let {isFullscreen} = _ref11; let
			{margin} = _ref11; if (isFullscreen) {
			return {};
		}

		let navX = isNavHidden ? 0 : resizerNav.x; return {height: bounds.height - 2 * margin, left: navX + margin, top: margin, width: bounds.width - navX - 2 * margin};
	};

	let getPanelPosition = function getPanelPosition(_ref12) {
		let {isPanelBottom} = _ref12; let {isPanelHidden} = _ref12; let {isNavHidden} = _ref12; let {bounds} = _ref12; let {resizerPanel} = _ref12; let {resizerNav} = _ref12; let {margin} = _ref12; let navX = isNavHidden ? 0 : resizerNav.x; let panelX = resizerPanel.x; let
			panelY = resizerPanel.y; return isPanelBottom && isPanelHidden ? {height: bounds.height - panelY - margin, left: 0, top: panelY - margin, width: bounds.width - navX - 2 * margin} : !isPanelBottom && isPanelHidden ? {height: bounds.height - 2 * margin, left: panelX - navX - margin, top: 0, width: bounds.width - panelX - margin} : isPanelBottom ? {height: bounds.height - panelY - margin, left: 0, top: panelY - margin, width: bounds.width - navX - 2 * margin} : {height: bounds.height - 2 * margin, left: panelX - navX - margin, top: 0, width: bounds.width - panelX - margin};
	};

	let container_Layout = (function (_Component) {
		!(function container_inherits(subClass, superClass) {
			if (typeof superClass !== 'function' && superClass !== null) {
				throw new TypeError('Super expression must either be null or a function');
			}

			subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {value: subClass, writable: !0, configurable: !0}}), superClass && container_setPrototypeOf(subClass, superClass);
		})(Layout, _Component);

		let _super = container_createSuper(Layout); function Layout(props) {
			let _this; !(function container_classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError('Cannot call a class as a function');
				}
			})(this, Layout), (_this = _super.call(this, props)).resizeNav = function (e, data) {
				data.deltaX && _this.setState({resizerNav: {x: data.x, y: data.y}});
			}, _this.resizePanel = function (e, data) {
				let {options} = _this.props; (data.deltaY && options.panelPosition === 'bottom' || data.deltaX && options.panelPosition === 'right') && _this.setState({resizerPanel: {x: data.x, y: data.y}});
			}, _this.setDragNav = function () {
				_this.setState({isDragging: 'nav'});
			}, _this.setDragPanel = function () {
				_this.setState({isDragging: 'panel'});
			}, _this.unsetDrag = function () {
				_this.setState({isDragging: !1});
			};

			let {bounds} = props; let _options = props.options; let _persistence$get = (function get() {
				try {
					return store2_default.a.local.get('storybook-layout') || !1;
				} catch (e) {
					return console.error(e), !1;
				}
			})(); let {resizerNav} = _persistence$get; let
				{resizerPanel} = _persistence$get; return _this.state = {isDragging: !1, resizerNav: resizerNav || {x: 220, y: 0}, resizerPanel: resizerPanel || (_options.panelPosition === 'bottom' ? {x: 0, y: Math.round(0.6 * bounds.height)} : {x: bounds.width - 400, y: 0})}, _this;
		}

		return (function container_createClass(Constructor, protoProps, staticProps) {
			return protoProps && container_defineProperties(Constructor.prototype, protoProps), staticProps && container_defineProperties(Constructor, staticProps), Constructor;
		})(Layout, [{key: 'componentDidUpdate', value: function componentDidUpdate(prevProps, prevState) {
			let _this$state = this.state; let {resizerPanel} = _this$state; let {resizerNav} = _this$state; persist_set({resizerPanel, resizerNav}); let _prevProps$bounds = prevProps.bounds; let prevWidth = _prevProps$bounds.width; let prevHeight = _prevProps$bounds.height; let _this$props = this.props; let {bounds} = _this$props; let {options} = _this$props; let {width} = bounds; let {height} = bounds; width === prevWidth && height === prevHeight || (options.panelPosition === 'bottom' ? this.setState({resizerPanel: {x: prevState.resizerPanel.x, y: prevState.resizerPanel.y - (prevHeight - height)}}) : this.setState({resizerPanel: {x: prevState.resizerPanel.x - (prevWidth - width), y: prevState.resizerPanel.y}}));
		}}, {key: 'render', value: function render() {
			let _this$props2 = this.props; let {children} = _this$props2; let {bounds} = _this$props2; let {options} = _this$props2; let {theme} = _this$props2; let {viewMode} = _this$props2; let {docsOnly} = _this$props2; let {panelCount} = _this$props2; let _this$state2 = this.state; let {isDragging} = _this$state2; let {resizerNav} = _this$state2; let {resizerPanel} = _this$state2; let margin = theme.layoutMargin; let isNavHidden = options.isFullscreen || !options.showNav; let isPanelHidden = options.isFullscreen || !options.showPanel || docsOnly || viewMode !== 'story' || panelCount === 0; let isFullscreen = options.isFullscreen || isNavHidden && isPanelHidden; let {isToolshown} = options; let {panelPosition} = options; let isPanelBottom = panelPosition === 'bottom'; let isPanelRight = panelPosition === 'right'; let panelX = resizerPanel.x; let navX = resizerNav.x; return bounds ? react_default.a.createElement(react.Fragment, null, isNavHidden ? null : react_default.a.createElement(cjs_default.a, {axis: 'x', position: resizerNav, bounds: {left: 200, top: 0, right: isPanelRight && !isPanelHidden ? panelX - 200 : bounds.width - 200, bottom: 0}, onStart: this.setDragNav, onDrag: this.resizeNav, onStop: this.unsetDrag}, react_default.a.createElement(Handle, {axis: 'x', isDragging: isDragging === 'nav'})), isPanelHidden ? null : react_default.a.createElement(cjs_default.a, {axis: isPanelBottom ? 'y' : 'x', position: resizerPanel, bounds: isPanelBottom ? {left: 0, top: 200, right: 0, bottom: bounds.height - 200} : {left: isNavHidden ? 200 : navX + 200, top: 0, right: bounds.width - 200, bottom: 0}, onStart: this.setDragPanel, onDrag: this.resizePanel, onStop: this.unsetDrag}, react_default.a.createElement(Handle, {isDragging: isDragging === 'panel', style: isPanelBottom ? {left: navX + margin, width: bounds.width - navX - 2 * margin, marginTop: -margin} : {marginLeft: -margin}, axis: isPanelBottom ? 'y' : 'x'})), isDragging ? react_default.a.createElement(HoverBlocker, null) : null, children({mainProps: {viewMode, animate: !isDragging, isFullscreen, position: getMainPosition({bounds, resizerNav, isNavHidden, isFullscreen, margin})}, previewProps: {viewMode, docsOnly, animate: !isDragging, isFullscreen, isToolshown, position: getPreviewPosition({isFullscreen, isNavHidden, isPanelHidden, resizerNav, resizerPanel, bounds, panelPosition, margin})}, navProps: {viewMode, animate: !isDragging, hidden: isNavHidden, position: {height: bounds.height, left: 0, top: 0, width: navX + margin}}, panelProps: {viewMode, animate: !isDragging, align: options.panelPosition, hidden: isPanelHidden, position: getPanelPosition({isPanelBottom, isPanelHidden, isNavHidden, bounds, resizerPanel, resizerNav, margin})}})) : null;
		}}], [{key: 'getDerivedStateFromProps', value: function getDerivedStateFromProps(props, state) {
			let {bounds} = props; let {options} = props; let {resizerPanel} = state; let {resizerNav} = state; let isNavHidden = options.isFullscreen || !options.showNav; let isPanelHidden = options.isFullscreen || !options.showPanel; let {panelPosition} = options; let isPanelRight = panelPosition === 'right'; let isPanelBottom = panelPosition === 'bottom'; let navX = resizerNav.x; let panelX = resizerPanel.x; let panelY = resizerPanel.y; let
				mutation = {}; if (!isNavHidden) {
				let minMainWidth = 200 + (!isPanelHidden && isPanelRight ? 200 : 0); let maxNavX = bounds.width - minMainWidth; navX > maxNavX ? mutation.resizerNav = {x: maxNavX, y: 0} : (navX < 200 || maxNavX < 200) && (mutation.resizerNav = {x: 200, y: 0});
			}

			if (isPanelRight && !isPanelHidden) {
				let maxPanelX = bounds.width - 200; let minPanelX = navX + 200; panelX > maxPanelX || panelX === 0 ? mutation.resizerPanel = {x: maxPanelX, y: 0} : panelX < minPanelX && (mutation.resizerPanel = {x: minPanelX, y: 0});
			}

			isPanelBottom && !isPanelHidden && ((panelY > bounds.height - 200 || panelY === 0) && (mutation.resizerPanel = {x: 0, y: bounds.height - 200})); return mutation.resizerPanel || mutation.resizerNav ? ({...state, ...mutation}) : state;
		}}]), Layout;
	})(react.Component); container_Layout.displayName = 'Layout', container_Layout.defaultProps = {viewMode: void 0, docsOnly: !1}; let ThemedLayout = Object(emotion_theming_browser_esm.c)(container_Layout); function desktop_extends() {
		return (desktop_extends = Object.assign || function (target) {
			for (let i = 1; i < arguments.length; i++) {
				let source = arguments[i]; for (let key in source) {
					Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
				}
			}

			return target;
		}).apply(this, arguments);
	}

	let Desktop = Object.assign(react_default.a.memo((_ref => {
		let {Panel} = _ref; let {Sidebar} = _ref; let {Preview} = _ref; let {Notifications} = _ref; let {pages} = _ref; let {options} = _ref; let _ref$viewMode = _ref.viewMode; let viewMode = void 0 === _ref$viewMode ? void 0 : _ref$viewMode; let _ref$width = _ref.width; let width = void 0 === _ref$width ? 0 : _ref$width; let _ref$height = _ref.height; let height = void 0 === _ref$height ? 0 : _ref$height; let {panelCount} = _ref; let _ref$docsOnly = _ref.docsOnly; let
			docsOnly = void 0 !== _ref$docsOnly && _ref$docsOnly; return react_default.a.createElement(react.Fragment, null, react_default.a.createElement(Notifications, {placement: {position: 'fixed', bottom: 20, left: 20}}), width && height ? react_default.a.createElement(ThemedLayout, {options, bounds: {width, height, top: 0, left: 0}, viewMode, docsOnly: Boolean(docsOnly), panelCount}, (_ref2 => {
			let {navProps} = _ref2; let {mainProps} = _ref2; let {panelProps} = _ref2; let
				{previewProps} = _ref2; return react_default.a.createElement(react.Fragment, null, react_default.a.createElement(container_Sidebar, navProps, react_default.a.createElement(Sidebar, null)), react_default.a.createElement(container_Main, {...mainProps, isFullscreen: Boolean(mainProps.isFullscreen)}, react_default.a.createElement(container_Preview, {...previewProps, hidden: viewMode === 'settings'}, react_default.a.createElement(Preview, {id: 'main'})), react_default.a.createElement(container_Panel, {...panelProps, hidden: viewMode !== 'story' || docsOnly}, react_default.a.createElement(Panel, null)), pages.map((_ref3 => {
				let {key} = _ref3; let Route = _ref3.route; let
					Content = _ref3.render; return react_default.a.createElement(Route, {key}, react_default.a.createElement(Content, null));
			}))));
		})) : react_default.a.createElement('div', {title: JSON.stringify({width, height})}));
	})), {displayName: 'DesktopLayout'}); __webpack_require__(14), __webpack_require__(43), __webpack_require__(16), __webpack_require__(17), __webpack_require__(120); function Spaced_extends() {
		return (Spaced_extends = Object.assign || function (target) {
			for (let i = 1; i < arguments.length; i++) {
				let source = arguments[i]; for (let key in source) {
					Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
				}
			}

			return target;
		}).apply(this, arguments);
	}

	function Spaced_objectWithoutProperties(source, excluded) {
		if (source == null) {
			return {};
		}

		let key; let i; let target = (function Spaced_objectWithoutPropertiesLoose(source, excluded) {
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

	function _defineProperty(obj, key, value) {
		return key in obj ? Object.defineProperty(obj, key, {value, enumerable: !0, configurable: !0, writable: !0}) : obj[key] = value, obj;
	}

	let Container = dist_esm.styled.div((_ref => {
		let {theme} = _ref; let {col} = _ref; let _ref$row = _ref.row; let
			row = void 0 === _ref$row ? 1 : _ref$row; return col ? _defineProperty({display: 'inline-block', verticalAlign: 'inherit', '& > *': {marginLeft: col * theme.layoutMargin, verticalAlign: 'inherit'}}, '& > *:first-child'.concat(dist_esm.ignoreSsrWarning), {marginLeft: 0}) : _defineProperty({'& > *': {marginTop: row * theme.layoutMargin}}, '& > *:first-child'.concat(dist_esm.ignoreSsrWarning), {marginTop: 0});
	}), (_ref4 => {
		let {theme} = _ref4; let {outer} = _ref4; let {col} = _ref4; let
			{row} = _ref4; switch (!0) {
			case !(!outer || !col): return {marginLeft: outer * theme.layoutMargin, marginRight: outer * theme.layoutMargin}; case !(!outer || !row): return {marginTop: outer * theme.layoutMargin, marginBottom: outer * theme.layoutMargin}; default: return {};
		}
	})); let Spaced_Spaced = function Spaced(_ref5) {
		let {col} = _ref5; let {row} = _ref5; let {outer} = _ref5; let {children} = _ref5; let rest = Spaced_objectWithoutProperties(_ref5, ['col', 'row', 'outer', 'children']); let
			outerAmount = (function toNumber(input) {
				return typeof input === 'number' ? input : Number(input);
			})(typeof outer !== 'number' && outer ? col || row : outer); return react_default.a.createElement(Container, {col, row, outer: outerAmount, ...rest}, children);
	};

	Spaced_Spaced.displayName = 'Spaced'; let ScrollArea = __webpack_require__(406); __webpack_require__(47); function StorybookLogo_extends() {
		return (StorybookLogo_extends = Object.assign || function (target) {
			for (let i = 1; i < arguments.length; i++) {
				let source = arguments[i]; for (let key in source) {
					Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
				}
			}

			return target;
		}).apply(this, arguments);
	}

	function StorybookLogo_objectWithoutProperties(source, excluded) {
		if (source == null) {
			return {};
		}

		let key; let i; let target = (function StorybookLogo_objectWithoutPropertiesLoose(source, excluded) {
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

	let StorybookLogo_StorybookLogo = function StorybookLogo(_ref) {
		let {alt} = _ref; let
			props = StorybookLogo_objectWithoutProperties(_ref, ['alt']); return react_default.a.createElement('svg', {width: '200px', height: '40px', viewBox: '0 0 200 40', ...props, role: 'img'}, alt ? react_default.a.createElement('title', null, alt) : null, react_default.a.createElement('defs', null, react_default.a.createElement('path', {d: 'M1.2 36.9L0 3.9c0-1.1.8-2 1.9-2.1l28-1.8a2 2 0 0 1 2.2 1.9 2 2 0 0 1 0 .1v36a2 2 0 0 1-2 2 2 2 0 0 1-.1 0L3.2 38.8a2 2 0 0 1-2-2z', id: 'a'})), react_default.a.createElement('g', {fill: 'none', fillRule: 'evenodd'}, react_default.a.createElement('path', {d: 'M53.3 31.7c-1.7 0-3.4-.3-5-.7-1.5-.5-2.8-1.1-3.9-2l1.6-3.5c2.2 1.5 4.6 2.3 7.3 2.3 1.5 0 2.5-.2 3.3-.7.7-.5 1.1-1 1.1-1.9 0-.7-.3-1.3-1-1.7s-2-.8-3.7-1.2c-2-.4-3.6-.9-4.8-1.5-1.1-.5-2-1.2-2.6-2-.5-1-.8-2-.8-3.2 0-1.4.4-2.6 1.2-3.6.7-1.1 1.8-2 3.2-2.6 1.3-.6 2.9-.9 4.7-.9 1.6 0 3.1.3 4.6.7 1.5.5 2.7 1.1 3.5 2l-1.6 3.5c-2-1.5-4.2-2.3-6.5-2.3-1.3 0-2.3.2-3 .8-.8.5-1.2 1.1-1.2 2 0 .5.2 1 .5 1.3.2.3.7.6 1.4.9l2.9.8c2.9.6 5 1.4 6.2 2.4a5 5 0 0 1 2 4.2 6 6 0 0 1-2.5 5c-1.7 1.2-4 1.9-7 1.9zm21-3.6l1.4-.1-.2 3.5-1.9.1c-2.4 0-4.1-.5-5.2-1.5-1.1-1-1.6-2.7-1.6-4.8v-6h-3v-3.6h3V11h4.8v4.6h4v3.6h-4v6c0 1.8.9 2.8 2.6 2.8zm11.1 3.5c-1.6 0-3-.3-4.3-1a7 7 0 0 1-3-2.8c-.6-1.3-1-2.7-1-4.4 0-1.6.4-3 1-4.3a7 7 0 0 1 3-2.8c1.2-.7 2.7-1 4.3-1 1.7 0 3.2.3 4.4 1a7 7 0 0 1 3 2.8c.6 1.2 1 2.7 1 4.3 0 1.7-.4 3.1-1 4.4a7 7 0 0 1-3 2.8c-1.2.7-2.7 1-4.4 1zm0-3.6c2.4 0 3.6-1.6 3.6-4.6 0-1.5-.3-2.6-1-3.4a3.2 3.2 0 0 0-2.6-1c-2.3 0-3.5 1.4-3.5 4.4 0 3 1.2 4.6 3.5 4.6zm21.7-8.8l-2.7.3c-1.3.2-2.3.5-2.8 1.2-.6.6-.9 1.4-.9 2.5v8.2H96V15.7h4.6v2.6c.8-1.8 2.5-2.8 5-3h1.3l.3 4zm14-3.5h4.8L116.4 37h-4.9l3-6.6-6.4-14.8h5l4 10 4-10zm16-.4c1.4 0 2.6.3 3.6 1 1 .6 1.9 1.6 2.5 2.8.6 1.2.9 2.7.9 4.3 0 1.6-.3 3-1 4.3a6.9 6.9 0 0 1-2.4 2.9c-1 .7-2.2 1-3.6 1-1 0-2-.2-3-.7-.8-.4-1.5-1-2-1.9v2.4h-4.7V8.8h4.8v9c.5-.8 1.2-1.4 2-1.9.9-.4 1.8-.6 3-.6zM135.7 28c1.1 0 2-.4 2.6-1.2.6-.8 1-2 1-3.4 0-1.5-.4-2.5-1-3.3s-1.5-1.1-2.6-1.1-2 .3-2.6 1.1c-.6.8-1 2-1 3.3 0 1.5.4 2.6 1 3.4.6.8 1.5 1.2 2.6 1.2zm18.9 3.6c-1.7 0-3.2-.3-4.4-1a7 7 0 0 1-3-2.8c-.6-1.3-1-2.7-1-4.4 0-1.6.4-3 1-4.3a7 7 0 0 1 3-2.8c1.2-.7 2.7-1 4.4-1 1.6 0 3 .3 4.3 1a7 7 0 0 1 3 2.8c.6 1.2 1 2.7 1 4.3 0 1.7-.4 3.1-1 4.4a7 7 0 0 1-3 2.8c-1.2.7-2.7 1-4.3 1zm0-3.6c2.3 0 3.5-1.6 3.5-4.6 0-1.5-.3-2.6-1-3.4a3.2 3.2 0 0 0-2.5-1c-2.4 0-3.6 1.4-3.6 4.4 0 3 1.2 4.6 3.6 4.6zm18 3.6c-1.7 0-3.2-.3-4.4-1a7 7 0 0 1-3-2.8c-.6-1.3-1-2.7-1-4.4 0-1.6.4-3 1-4.3a7 7 0 0 1 3-2.8c1.2-.7 2.7-1 4.4-1 1.6 0 3 .3 4.4 1a7 7 0 0 1 2.9 2.8c.6 1.2 1 2.7 1 4.3 0 1.7-.4 3.1-1 4.4a7 7 0 0 1-3 2.8c-1.2.7-2.7 1-4.3 1zm0-3.6c2.3 0 3.5-1.6 3.5-4.6 0-1.5-.3-2.6-1-3.4a3.2 3.2 0 0 0-2.5-1c-2.4 0-3.6 1.4-3.6 4.4 0 3 1.2 4.6 3.6 4.6zm27.4 3.4h-6l-6-7v7h-4.8V8.8h4.9v13.6l5.8-6.7h5.7l-6.6 7.5 7 8.2z', fill: 'currentColor'}), react_default.a.createElement('mask', {id: 'b', fill: '#fff'}, react_default.a.createElement('use', {xlinkHref: '#a'})), react_default.a.createElement('use', {fill: '#FF4785', fillRule: 'nonzero', xlinkHref: '#a'}), react_default.a.createElement('path', {d: 'M23.7 5L24 .2l3.9-.3.1 4.8a.3.3 0 0 1-.5.2L26 3.8l-1.7 1.4a.3.3 0 0 1-.5-.3zm-5 10c0 .9 5.3.5 6 0 0-5.4-2.8-8.2-8-8.2-5.3 0-8.2 2.8-8.2 7.1 0 7.4 10 7.6 10 11.6 0 1.2-.5 1.9-1.8 1.9-1.6 0-2.2-.9-2.1-3.6 0-.6-6.1-.8-6.3 0-.5 6.7 3.7 8.6 8.5 8.6 4.6 0 8.3-2.5 8.3-7 0-7.9-10.2-7.7-10.2-11.6 0-1.6 1.2-1.8 2-1.8.6 0 2 0 1.9 3z', fill: '#FFF', fillRule: 'nonzero', mask: 'url(#b)'})));
	};

	StorybookLogo_StorybookLogo.displayName = 'StorybookLogo'; let StorybookLogoStyled = Object(dist_esm.styled)(StorybookLogo_StorybookLogo)({width: 'auto', height: '22px !important', display: 'block'}); let Img = dist_esm.styled.img({width: 'auto', height: 'auto', display: 'block', maxWidth: '100%'}); let LogoLink = dist_esm.styled.a((_ref => ({display: 'inline-block', height: '100%', margin: '-3px -4px', padding: '2px 3px', border: '1px solid transparent', borderRadius: 3, color: 'inherit', textDecoration: 'none', '&:focus': {outline: 0, borderColor: _ref.theme.color.secondary}}))); let Brand = Object(emotion_theming_browser_esm.c)((_ref2 => {
		let _theme$brand = _ref2.theme.brand; let _theme$brand$title = _theme$brand.title; let title = void 0 === _theme$brand$title ? 'Storybook' : _theme$brand$title; let _theme$brand$url = _theme$brand.url; let url = void 0 === _theme$brand$url ? './' : _theme$brand$url; let {image} = _theme$brand; let targetValue = url === './' ? '' : '_blank'; if (image === null) {
			return title === null ? null : url ? react_default.a.createElement(LogoLink, {href: url, target: targetValue, dangerouslySetInnerHTML: {__html: title}}) : react_default.a.createElement('div', {dangerouslySetInnerHTML: {__html: title}});
		}

		let logo = image ? react_default.a.createElement(Img, {src: image, alt: title}) : react_default.a.createElement(StorybookLogoStyled, {alt: title}); return url ? react_default.a.createElement(LogoLink, {title, href: url, target: targetValue}, logo) : react_default.a.createElement('div', null, logo);
	})); let Button = __webpack_require__(439); let TooltipLinkList = __webpack_require__(869); let lazy_WithTooltip = __webpack_require__(405); function Menu_objectWithoutProperties(source, excluded) {
		if (source == null) {
			return {};
		}

		let key; let i; let target = (function Menu_objectWithoutPropertiesLoose(source, excluded) {
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

	let sharedStyles = {height: 10, width: 10, marginLeft: -5, marginRight: -5, display: 'block'}; let Icon = Object(dist_esm.styled)(icon_icon.a)(sharedStyles, (_ref => ({color: _ref.theme.color.secondary}))); let Menu_Img = dist_esm.styled.img(sharedStyles); let Menu_Placeholder = dist_esm.styled.div(sharedStyles); let Menu_MenuItemIcon = function MenuItemIcon(_ref2) {
		let {icon} = _ref2; let
			{imgSrc} = _ref2; return icon ? react_default.a.createElement(Icon, {icon}) : imgSrc ? react_default.a.createElement(Menu_Img, {src: imgSrc, alt: 'image'}) : react_default.a.createElement(Menu_Placeholder, null);
	};

	Menu_MenuItemIcon.displayName = 'MenuItemIcon'; let MenuButton = Object(dist_esm.styled)(Button.a)((_ref3 => {
		let {highlighted} = _ref3; let
			{theme} = _ref3; return {position: 'relative', overflow: 'visible', padding: 7, transition: 'none', '&:focus': {background: theme.barBg, boxShadow: 'none'}, '&:focus:before': {content: '""', position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, borderRadius: '100%', border: '1px solid '.concat(theme.color.secondary)}, ...highlighted && {'&:after': {content: '""', position: 'absolute', top: 0, right: 0, width: 8, height: 8, borderRadius: 8, background: theme.color.positive}}};
	})); let Menu_SidebarMenuList = function SidebarMenuList(_ref4) {
		let {menu} = _ref4; let {onHide} = _ref4; let
			links = Object(react.useMemo)((() => menu.map((_ref5 => {
				let {onClick} = _ref5; let
					rest = Menu_objectWithoutProperties(_ref5, ['onClick']); return {...rest, onClick(event, item) {
					onClick && onClick(event, item), onHide();
				}};
			}))), [menu]); return react_default.a.createElement(TooltipLinkList.a, {links});
	};

	Menu_SidebarMenuList.displayName = 'SidebarMenuList'; let Menu_SidebarMenu = function SidebarMenu(_ref6) {
		let {isHighlighted} = _ref6; let
			{menu} = _ref6; return react_default.a.createElement(lazy_WithTooltip.a, {placement: 'top', trigger: 'click', closeOnClick: !0, tooltip: function tooltip(_ref7) {
			let {onHide} = _ref7; return react_default.a.createElement(Menu_SidebarMenuList, {onHide, menu});
		}}, react_default.a.createElement(MenuButton, {outline: !0, small: !0, containsIcon: !0, highlighted: isHighlighted, title: 'Shortcuts'}, react_default.a.createElement(icon_icon.a, {icon: 'ellipsis'})));
	};

	function Heading_objectWithoutProperties(source, excluded) {
		if (source == null) {
			return {};
		}

		let key; let i; let target = (function Heading_objectWithoutPropertiesLoose(source, excluded) {
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

	Menu_SidebarMenu.displayName = 'SidebarMenu'; let BrandArea = dist_esm.styled.div((_ref => {
		let {theme} = _ref; return {fontSize: theme.typography.size.s2, fontWeight: theme.typography.weight.bold, color: theme.color.defaultText, marginRight: 20, display: 'flex', width: '100%', alignItems: 'center', minHeight: 22, '& > *': {maxWidth: '100%', height: 'auto', display: 'block', flex: '1 1 auto'}};
	})); let HeadingWrapper = dist_esm.styled.div({display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative'}); let Heading_Heading = function Heading(_ref2) {
		let _ref2$menuHighlighted = _ref2.menuHighlighted; let menuHighlighted = void 0 !== _ref2$menuHighlighted && _ref2$menuHighlighted; let {menu} = _ref2; let props = Heading_objectWithoutProperties(_ref2, ['menuHighlighted', 'menu']); return react_default.a.createElement(HeadingWrapper, props, react_default.a.createElement(BrandArea, null, react_default.a.createElement(Brand, null)), react_default.a.createElement(Menu_SidebarMenu, {menu, isHighlighted: menuHighlighted}));
	};

	Heading_Heading.displayName = 'Heading'; __webpack_require__(31), __webpack_require__(67), __webpack_require__(38), __webpack_require__(18); function data_objectWithoutProperties(source, excluded) {
		if (source == null) {
			return {};
		}

		let key; let i; let target = (function data_objectWithoutPropertiesLoose(source, excluded) {
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

	let DEFAULT_REF_ID = 'storybook_internal'; let collapseAllStories = function collapseAllStories(stories) {
		let componentIdToLeafId = {}; let childrenRewritten = Object.values(stories).filter((item => !(item.isLeaf && stories[item.parent].isComponent))).map((item => {
			let {id} = item; let {isComponent} = item; let {children} = item; let
				rest = data_objectWithoutProperties(item, ['id', 'isComponent', 'children']); if (!isComponent) {
				return item;
			}

			let nonLeafChildren = []; let leafChildren = []; if (children.forEach((child => (stories[child].isLeaf ? leafChildren : nonLeafChildren).push(child))), leafChildren.length === 0) {
				return item;
			}

			let leafId = leafChildren[0]; let component = {args: {}, ...rest, id: leafId, kind: stories[leafId].kind, isRoot: !1, isLeaf: !0, isComponent: !0, children: []}; if (componentIdToLeafId[id] = leafId, nonLeafChildren.length !== 0) {
				throw new Error('Unexpected \''.concat(item.id, '\': ').concat(JSON.stringify({isComponent, nonLeafChildren})));
			}

			return component;
		})).map((item => {
			if (item.isLeaf) {
				return item;
			}

			let {children} = item; let rest = data_objectWithoutProperties(item, ['children']); let
				rewritten = children.map((child => componentIdToLeafId[child] || child)); return {children: rewritten, ...rest};
		})); let result = {}; return childrenRewritten.forEach((item => {
			result[item.id] = item;
		})), result;
	};

	let collapseDocsOnlyStories = function collapseDocsOnlyStories(storiesHash) {
		let componentIdToLeafId = {}; let docsOnlyComponentsCollapsed = Object.values(storiesHash).filter((item => !(item.isLeaf && item.parameters && item.parameters.docsOnly) || (componentIdToLeafId[item.parent] = item.id, !1))).map((item => {
			let {isComponent} = item; let {children} = item; let
				{id} = item; if (isComponent && children.length === 1) {
				let leafId = componentIdToLeafId[id]; if (leafId) {
					return {args: {}, ...item, id: leafId, isLeaf: !0, children: []};
				}
			}

			if (children) {
				let rewritten = children.map((child => componentIdToLeafId[child] || child)); return {...item, children: rewritten};
			}

			return item;
		})); let result = {}; return docsOnlyComponentsCollapsed.forEach((item => {
			result[item.id] = item;
		})), result;
	};

	let polished_esm = __webpack_require__(3); let link_link = (__webpack_require__(88), __webpack_require__(40), __webpack_require__(26), __webpack_require__(77), __webpack_require__(79), __webpack_require__(166)); let client_logger_dist_esm = __webpack_require__(25); let LOADER_SEQUENCE = (__webpack_require__(393), [0, 0, 1, 1, 2, 3, 3, 3, 1, 1, 1, 2, 2, 2, 3]); let Loadingitem = dist_esm.styled.div({cursor: 'progress', fontSize: 13, height: '16px', marginTop: 4, marginBottom: 4, alignItems: 'center', overflow: 'hidden'}, (_ref => {
		let _ref$depth = _ref.depth; let depth = void 0 === _ref$depth ? 0 : _ref$depth; return {marginLeft: 15 * depth, maxWidth: 85 - 5 * depth};
	}), (_ref2 => _ref2.theme.animation.inlineGlow), (_ref3 => ({background: _ref3.theme.appBorderColor}))); let Contained = dist_esm.styled.div({display: 'flex', flexDirection: 'column', paddingLeft: 20, paddingRight: 20}); let Loader_Loader = function Loader(_ref4) {
		let {size} = _ref4; let repeats = Math.ceil(size / LOADER_SEQUENCE.length); let
			sequence = Array.from(Array(repeats)).fill(LOADER_SEQUENCE).flat().slice(0, size); return react_default.a.createElement(react.Fragment, null, sequence.map(((depth, index) => react_default.a.createElement(Loadingitem, {depth, key: index}))));
	};

	function _toArray(arr) {
		return _arrayWithHoles(arr) || (function _iterableToArray(iter) {
			if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(iter)) {
				return Array.from(iter);
			}
		})(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest();
	}

	function _slicedToArray(arr, i) {
		return _arrayWithHoles(arr) || (function _iterableToArrayLimit(arr, i) {
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
		})(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
	}

	function _nonIterableRest() {
		throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
	}

	function _unsupportedIterableToArray(o, minLen) {
		if (o) {
			if (typeof o === 'string') {
				return _arrayLikeToArray(o, minLen);
			}

			let n = Object.prototype.toString.call(o).slice(8, -1); return n === 'Object' && o.constructor && (n = o.constructor.name), n === 'Map' || n === 'Set' ? Array.from(o) : n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _arrayLikeToArray(o, minLen) : void 0;
		}
	}

	function _arrayLikeToArray(arr, len) {
		(len == null || len > arr.length) && (len = arr.length); for (var i = 0, arr2 = new Array(len); i < len; i++) {
			arr2[i] = arr[i];
		}

		return arr2;
	}

	function _arrayWithHoles(arr) {
		if (Array.isArray(arr)) {
			return arr;
		}
	}

	Loader_Loader.displayName = 'Loader'; let globalWindow = window_default.a.window; let RefBlocks_document = window_default.a.document; let TextStyle = dist_esm.styled.div((_ref => ({fontSize: _ref.theme.typography.size.s2 - 1, lineHeight: '20px', margin: 0}))); let Text = dist_esm.styled.div((_ref2 => {
		let {theme} = _ref2; return {fontSize: theme.typography.size.s2 - 1, lineHeight: '20px', margin: 0, code: {fontSize: theme.typography.size.s1}, ul: {paddingLeft: 20, marginTop: 8, marginBottom: 8}};
	})); let ErrorDisplay = dist_esm.styled.pre({width: 420, boxSizing: 'border-box', borderRadius: 8, overflow: 'auto', whiteSpace: 'pre'}, (_ref3 => ({color: _ref3.theme.color.dark}))); let ErrorName = dist_esm.styled.strong((_ref4 => ({color: _ref4.theme.color.orange}))); let ErrorImportant = dist_esm.styled.strong((_ref5 => ({color: _ref5.theme.color.ancillary, textDecoration: 'underline'}))); let ErrorDetail = dist_esm.styled.em((_ref6 => ({color: _ref6.theme.color.mediumdark}))); let firstLineRegex = /(Error): (.*)\n/; let linesRegex = /at (?:(.*) )?\(?(.+)\)?/; let RefBlocks_ErrorFormatter = function ErrorFormatter(_ref7) {
		let {error} = _ref7; if (!error) {
			return react_default.a.createElement(react.Fragment, null, 'This error has no stack or message');
		}

		if (!error.stack) {
			return react_default.a.createElement(react.Fragment, null, error.message || 'This error has no stack or message');
		}

		let input = error.stack.toString(); let match = input.match(firstLineRegex); if (!match) {
			return react_default.a.createElement(react.Fragment, null, input);
		}

		let _match = _slicedToArray(match, 3); let type = _match[1]; let name = _match[2]; let lines = _toArray(input.split(/\n/).slice(1).map((line => {
			let r = line.match(linesRegex); return r ? {name: r[1], location: r[2].replace(RefBlocks_document.location.origin, '')} : null;
		})).filter(Boolean)).slice(1); return react_default.a.createElement(react.Fragment, null, react_default.a.createElement('span', null, type), ': ', react_default.a.createElement(ErrorName, null, name), react_default.a.createElement('br', null), lines.map(((l, i) => l.name ? react_default.a.createElement(react.Fragment, {key: i}, '  ', 'at ', react_default.a.createElement(ErrorImportant, null, l.name), ' (', react_default.a.createElement(ErrorDetail, null, l.location), ')', react_default.a.createElement('br', null)) : react_default.a.createElement(react.Fragment, {key: i}, '  ', 'at ', react_default.a.createElement(ErrorDetail, null, l.location), react_default.a.createElement('br', null)))));
	};

	RefBlocks_ErrorFormatter.displayName = 'ErrorFormatter'; let RefBlocks_AuthBlock = function AuthBlock(_ref8) {
		let {loginUrl} = _ref8; let {id} = _ref8; let _useState2 = _slicedToArray(Object(react.useState)(!1), 2); let isAuthAttempted = _useState2[0]; let setAuthAttempted = _useState2[1]; let refresh = Object(react.useCallback)((() => {
			globalWindow.document.location.reload();
		}), []); let
			open = Object(react.useCallback)((e => {
				e.preventDefault(); let childWindow = globalWindow.open(loginUrl, 'storybook_auth_'.concat(id), 'resizable,scrollbars'); var timer = setInterval((() => {
					childWindow ? childWindow.closed && (clearInterval(timer), setAuthAttempted(!0)) : (client_logger_dist_esm.a.error('unable to access loginUrl window'), clearInterval(timer));
				}), 1e3);
			}), []); return react_default.a.createElement(Contained, null, react_default.a.createElement(Spaced_Spaced, null, isAuthAttempted ? react_default.a.createElement(react.Fragment, null, react_default.a.createElement(Text, null, 'Authentication on ', react_default.a.createElement('strong', null, loginUrl), ' concluded. Refresh the page to fetch this Storybook.'), react_default.a.createElement('div', null, react_default.a.createElement(Button.a, {small: !0, gray: !0, onClick: refresh}, react_default.a.createElement(icon_icon.a, {icon: 'sync'}), 'Refresh now'))) : react_default.a.createElement(react.Fragment, null, react_default.a.createElement(Text, null, 'Sign in to browse this Storybook.'), react_default.a.createElement('div', null, react_default.a.createElement(Button.a, {small: !0, gray: !0, onClick: open}, react_default.a.createElement(icon_icon.a, {icon: 'lock'}), 'Sign in')))));
	};

	RefBlocks_AuthBlock.displayName = 'AuthBlock'; let RefBlocks_ErrorBlock = function ErrorBlock(_ref9) {
		let {error} = _ref9; return react_default.a.createElement(Contained, null, react_default.a.createElement(Spaced_Spaced, null, react_default.a.createElement(TextStyle, null, 'Oh no! Something went wrong loading this Storybook.', react_default.a.createElement('br', null), react_default.a.createElement(lazy_WithTooltip.a, {trigger: 'click', closeOnClick: !1, tooltip: react_default.a.createElement(ErrorDisplay, null, react_default.a.createElement(RefBlocks_ErrorFormatter, {error}))}, react_default.a.createElement(link_link.a, {isButton: !0}, 'View error ', react_default.a.createElement(icon_icon.a, {icon: 'arrowdown'}))), ' ', react_default.a.createElement(link_link.a, {withArrow: !0, href: 'https://storybook.js.org/docs', cancel: !1, target: '_blank'}, 'View docs'))));
	};

	RefBlocks_ErrorBlock.displayName = 'ErrorBlock'; let FlexSpaced = Object(dist_esm.styled)(Spaced_Spaced)({display: 'flex'}); let WideSpaced = Object(dist_esm.styled)(Spaced_Spaced)({flex: 1}); let RefBlocks_EmptyBlock = function EmptyBlock(_ref10) {
		let {isMain} = _ref10; return react_default.a.createElement(Contained, null, react_default.a.createElement(FlexSpaced, {col: 1}, react_default.a.createElement(WideSpaced, null, react_default.a.createElement(Text, null, isMain ? react_default.a.createElement(react_default.a.Fragment, null, 'Oh no! Your Storybook is empty. Possible reasons why:', react_default.a.createElement('ul', null, react_default.a.createElement('li', null, 'The glob specified in ', react_default.a.createElement('code', null, 'main.js'), ' isn\'t correct.'), react_default.a.createElement('li', null, 'No stories are defined in your story files.')), ' ') : react_default.a.createElement(react_default.a.Fragment, null, 'Yikes! Something went wrong loading these stories.')))));
	};

	RefBlocks_EmptyBlock.displayName = 'EmptyBlock'; let RefBlocks_LoaderBlock = function LoaderBlock(_ref11) {
		let {isMain} = _ref11; return react_default.a.createElement(Contained, null, react_default.a.createElement(Loader_Loader, {size: isMain ? 17 : 5}));
	};

	RefBlocks_LoaderBlock.displayName = 'LoaderBlock'; __webpack_require__(58); function RefIndicator_objectWithoutProperties(source, excluded) {
		if (source == null) {
			return {};
		}

		let key; let i; let target = (function RefIndicator_objectWithoutPropertiesLoose(source, excluded) {
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

	function RefIndicator_slicedToArray(arr, i) {
		return (function RefIndicator_arrayWithHoles(arr) {
			if (Array.isArray(arr)) {
				return arr;
			}
		})(arr) || (function RefIndicator_iterableToArrayLimit(arr, i) {
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
		})(arr, i) || (function RefIndicator_unsupportedIterableToArray(o, minLen) {
			if (!o) {
				return;
			}

			if (typeof o === 'string') {
				return RefIndicator_arrayLikeToArray(o, minLen);
			}

			let n = Object.prototype.toString.call(o).slice(8, -1); n === 'Object' && o.constructor && (n = o.constructor.name); if (n === 'Map' || n === 'Set') {
				return Array.from(o);
			}

			if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
				return RefIndicator_arrayLikeToArray(o, minLen);
			}
		})(arr, i) || (function RefIndicator_nonIterableRest() {
			throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
		})();
	}

	function RefIndicator_arrayLikeToArray(arr, len) {
		(len == null || len > arr.length) && (len = arr.length); for (var i = 0, arr2 = new Array(len); i < len; i++) {
			arr2[i] = arr[i];
		}

		return arr2;
	}

	let RefIndicator_document = window_default.a.document; let RefIndicator_globalWindow = window_default.a.window; let IndicatorPlacement = dist_esm.styled.aside((_ref => ({height: 16, display: 'flex', alignItems: 'center', '& > * + *': {marginLeft: _ref.theme.layoutMargin}}))); let IndicatorClickTarget = dist_esm.styled.button((_ref2 => {
		let {theme} = _ref2; return {height: 20, width: 20, padding: 0, margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', outline: 'none', border: '1px solid transparent', borderRadius: '100%', cursor: 'pointer', color: theme.base === 'light' ? Object(polished_esm.e)(0.3, theme.color.defaultText) : Object(polished_esm.e)(0.6, theme.color.defaultText), '&:hover': {color: theme.barSelectedColor}, '&:focus': {color: theme.barSelectedColor, borderColor: theme.color.secondary}, svg: {height: 10, width: 10, transition: 'all 150ms ease-out', color: 'inherit'}};
	})); let MessageTitle = dist_esm.styled.span((_ref3 => ({fontWeight: _ref3.theme.typography.weight.bold}))); let Message = dist_esm.styled.a((_ref4 => {
		let {theme} = _ref4; return {textDecoration: 'none', lineHeight: '16px', padding: 15, display: 'flex', flexDirection: 'row', alignItems: 'flex-start', color: theme.color.defaultText, '&:not(:last-child)': {borderBottom: '1px solid '.concat(theme.appBorderColor)}, '&:hover': {background: theme.background.hoverable, color: theme.color.darker}, '&:link': {color: theme.color.darker}, '&:active': {color: theme.color.darker}, '&:focus': {color: theme.color.darker}, '& > *': {flex: 1}, '& > svg': {marginTop: 3, width: 16, height: 16, marginRight: 10, flex: 'unset'}};
	})); let MessageWrapper = dist_esm.styled.div({width: 280, boxSizing: 'border-box', borderRadius: 8, overflow: 'hidden'}); let BlueIcon = Object(dist_esm.styled)(icon_icon.a)((_ref5 => ({color: _ref5.theme.color.secondary}))); let YellowIcon = Object(dist_esm.styled)(icon_icon.a)((_ref6 => ({color: _ref6.theme.color.gold}))); let RedIcon = Object(dist_esm.styled)(icon_icon.a)((_ref7 => ({color: _ref7.theme.color.negative}))); let GreenIcon = Object(dist_esm.styled)(icon_icon.a)((_ref8 => ({color: _ref8.theme.color.green}))); let Version = dist_esm.styled.div((_ref9 => {
		let {theme} = _ref9; return {display: 'flex', alignItems: 'center', fontSize: theme.typography.size.s1, fontWeight: theme.typography.weight.regular, color: theme.base === 'light' ? Object(polished_esm.e)(0.3, theme.color.defaultText) : Object(polished_esm.e)(0.6, theme.color.defaultText), '& > * + *': {marginLeft: 4}, svg: {height: 10, width: 10}};
	})); let RefIndicator_CurrentVersion = function CurrentVersion(_ref10) {
		let {url} = _ref10; let {versions} = _ref10; let
			currentVersionId = Object(react.useMemo)((() => {
				let c = Object.entries(versions).find((_ref11 => {
					let _ref12 = RefIndicator_slicedToArray(_ref11, 2); _ref12[0]; return _ref12[1] === url;
				})); return c && c[0] ? c[0] : 'current';
			}), [url, versions]); return react_default.a.createElement(Version, null, react_default.a.createElement('span', null, currentVersionId), react_default.a.createElement(icon_icon.a, {icon: 'chevrondown'}));
	};

	RefIndicator_CurrentVersion.displayName = 'CurrentVersion'; let RefIndicator = react_default.a.memo(Object(react.forwardRef)(((_ref13, forwardedRef) => {
		let {state} = _ref13; let ref = RefIndicator_objectWithoutProperties(_ref13, ['state']); let api = Object(esm.o)(); let list = Object(react.useMemo)((() => Object.values(ref.stories || {})), [ref.stories]); let componentCount = Object(react.useMemo)((() => list.filter((v => v.isComponent)).length), [list]); let leafCount = Object(react.useMemo)((() => list.filter((v => v.isLeaf)).length), [list]); let
			changeVersion = Object(react.useCallback)(((event, item) => {
				event.preventDefault(), api.changeRefVersion(ref.id, item.href);
			}), []); return react_default.a.createElement(IndicatorPlacement, {ref: forwardedRef}, react_default.a.createElement(lazy_WithTooltip.a, {placement: 'bottom-start', trigger: 'click', tooltip: react_default.a.createElement(MessageWrapper, null, react_default.a.createElement(Spaced_Spaced, {row: 0}, state === 'loading' && react_default.a.createElement(RefIndicator_LoadingMessage, {url: ref.url}), (state === 'error' || state === 'empty') && react_default.a.createElement(RefIndicator_ErrorOccurredMessage, {url: ref.url}), state === 'ready' && react_default.a.createElement(RefIndicator_ReadyMessage, {url: ref.url, componentCount, leafCount}), state === 'auth' && react_default.a.createElement(RefIndicator_LoginRequiredMessage, ref), ref.type === 'auto-inject' && state !== 'error' && react_default.a.createElement(RefIndicator_PerformanceDegradedMessage, null), state !== 'loading' && react_default.a.createElement(RefIndicator_ReadDocsMessage, null)))}, react_default.a.createElement(IndicatorClickTarget, {'data-action': 'toggle-indicator', 'aria-label': 'toggle indicator'}, react_default.a.createElement(icon_icon.a, {icon: 'globe'}))), ref.versions && Object.keys(ref.versions).length ? react_default.a.createElement(lazy_WithTooltip.a, {placement: 'bottom-start', trigger: 'click', tooltip: react_default.a.createElement(TooltipLinkList.a, {links: Object.entries(ref.versions).map((_ref14 => {
			let _ref15 = RefIndicator_slicedToArray(_ref14, 2); let id = _ref15[0]; let href = _ref15[1]; return {left: href === ref.url ? react_default.a.createElement(Menu_MenuItemIcon, {icon: 'check'}) : react_default.a.createElement('span', null), id, title: id, href, onClick: changeVersion};
		}))})}, react_default.a.createElement(RefIndicator_CurrentVersion, {url: ref.url, versions: ref.versions})) : null);
	}))); var RefIndicator_ReadyMessage = function ReadyMessage(_ref16) {
		let {url} = _ref16; let {componentCount} = _ref16; let
			{leafCount} = _ref16; return react_default.a.createElement(Message, {href: url.replace(/\/?$/, '/index.html'), target: '_blank'}, react_default.a.createElement(BlueIcon, {icon: 'globe'}), react_default.a.createElement('div', null, react_default.a.createElement(MessageTitle, null, 'View external Storybook'), react_default.a.createElement('div', null, 'Explore ', componentCount, ' components and ', leafCount, ' stories in a new browser tab.')));
	};

	RefIndicator_ReadyMessage.displayName = 'ReadyMessage'; var RefIndicator_LoginRequiredMessage = function LoginRequiredMessage(_ref17) {
		let {loginUrl} = _ref17; let {id} = _ref17; let
			open = Object(react.useCallback)((e => {
				e.preventDefault(); let childWindow = RefIndicator_globalWindow.open(loginUrl, 'storybook_auth_'.concat(id), 'resizable,scrollbars'); var timer = setInterval((() => {
					childWindow ? childWindow.closed && (clearInterval(timer), RefIndicator_document.location.reload()) : clearInterval(timer);
				}), 1e3);
			}), []); return react_default.a.createElement(Message, {onClick: open}, react_default.a.createElement(YellowIcon, {icon: 'lock'}), react_default.a.createElement('div', null, react_default.a.createElement(MessageTitle, null, 'Log in required'), react_default.a.createElement('div', null, 'You need to authenticate to view this Storybook\'s components.')));
	};

	RefIndicator_LoginRequiredMessage.displayName = 'LoginRequiredMessage'; var RefIndicator_ReadDocsMessage = function ReadDocsMessage() {
		return react_default.a.createElement(Message, {href: 'https://storybook.js.org', target: '_blank'}, react_default.a.createElement(GreenIcon, {icon: 'document'}), react_default.a.createElement('div', null, react_default.a.createElement(MessageTitle, null, 'Read Composition docs'), react_default.a.createElement('div', null, 'Learn how to combine multiple Storybooks into one.')));
	};

	RefIndicator_ReadDocsMessage.displayName = 'ReadDocsMessage'; var RefIndicator_ErrorOccurredMessage = function ErrorOccurredMessage(_ref18) {
		let {url} = _ref18; return react_default.a.createElement(Message, {href: url.replace(/\/?$/, '/index.html'), target: '_blank'}, react_default.a.createElement(RedIcon, {icon: 'alert'}), react_default.a.createElement('div', null, react_default.a.createElement(MessageTitle, null, 'Something went wrong'), react_default.a.createElement('div', null, 'This external Storybook didn\'t load. Debug it in a new tab now.')));
	};

	RefIndicator_ErrorOccurredMessage.displayName = 'ErrorOccurredMessage'; var RefIndicator_LoadingMessage = function LoadingMessage(_ref19) {
		let {url} = _ref19; return react_default.a.createElement(Message, {href: url.replace(/\/?$/, '/index.html'), target: '_blank'}, react_default.a.createElement(BlueIcon, {icon: 'time'}), react_default.a.createElement('div', null, react_default.a.createElement(MessageTitle, null, 'Please wait'), react_default.a.createElement('div', null, 'This Storybook is loading.')));
	};

	RefIndicator_LoadingMessage.displayName = 'LoadingMessage'; var RefIndicator_PerformanceDegradedMessage = function PerformanceDegradedMessage() {
		return react_default.a.createElement(Message, {href: 'https://storybook.js.org/docs', target: '_blank'}, react_default.a.createElement(YellowIcon, {icon: 'lightning'}), react_default.a.createElement('div', null, react_default.a.createElement(MessageTitle, null, 'Reduce lag'), react_default.a.createElement('div', null, 'Learn how to speed up Composition performance.')));
	};

	RefIndicator_PerformanceDegradedMessage.displayName = 'PerformanceDegradedMessage'; __webpack_require__(42), __webpack_require__(52), __webpack_require__(82), __webpack_require__(168); function TreeNode_extends() {
		return (TreeNode_extends = Object.assign || function (target) {
			for (let i = 1; i < arguments.length; i++) {
				let source = arguments[i]; for (let key in source) {
					Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
				}
			}

			return target;
		}).apply(this, arguments);
	}

	function TreeNode_objectWithoutProperties(source, excluded) {
		if (source == null) {
			return {};
		}

		let key; let i; let target = (function TreeNode_objectWithoutPropertiesLoose(source, excluded) {
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

	let {DOCS_MODE} = window_default.a; let CollapseIcon = dist_esm.styled.span((_ref => {
		let {theme} = _ref; let
			{isExpanded} = _ref; return {display: 'inline-block', width: 0, height: 0, marginTop: 6, marginLeft: 8, marginRight: 5, color: Object(polished_esm.e)(0.4, theme.color.mediumdark), borderTop: '3px solid transparent', borderBottom: '3px solid transparent', borderLeft: '3px solid', transform: isExpanded ? 'rotateZ(90deg)' : 'none', transition: 'transform .1s ease-out'};
	})); let iconColors = {light: {document: DOCS_MODE ? 'secondary' : '#ff8300', bookmarkhollow: 'seafoam', component: 'secondary', folder: 'ultraviolet'}, dark: {document: DOCS_MODE ? 'secondary' : 'gold', bookmarkhollow: 'seafoam', component: 'secondary', folder: 'primary'}}; let isColor = function isColor(theme, color) {
		return color in theme.color;
	};

	let TypeIcon = Object(dist_esm.styled)(icon_icon.a)({width: 12, height: 12, padding: 1, marginTop: 3, marginRight: 5, flex: '0 0 auto'}, (_ref2 => {
		let {theme} = _ref2; let {icon} = _ref2; let _ref2$symbol = _ref2.symbol; let symbol = void 0 === _ref2$symbol ? icon : _ref2$symbol; let
			color = (theme.base === 'dark' ? iconColors.dark : iconColors.light)[symbol]; return {color: isColor(theme, color) ? theme.color[color] : color};
	})); let TreeNode_BranchNode = dist_esm.styled.button((_ref3 => {
		let {theme} = _ref3; let _ref3$depth = _ref3.depth; let depth = void 0 === _ref3$depth ? 0 : _ref3$depth; let
			_ref3$isExpandable = _ref3.isExpandable; return {width: '100%', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'start', textAlign: 'left', padding: 3, paddingLeft: ''.concat((void 0 !== _ref3$isExpandable && _ref3$isExpandable ? 2 : 18) + 16 * depth, 'px'), color: 'inherit', fontSize: ''.concat(theme.typography.size.s2 - 1, 'px'), background: 'transparent', '&:hover, &:focus': {background: theme.background.hoverable, outline: 'none'}};
	})); let TreeNode_LeafNode = dist_esm.styled.a((_ref4 => {
		let {theme} = _ref4; let
			_ref4$depth = _ref4.depth; return {cursor: 'pointer', display: 'flex', alignItems: 'start', padding: 3, paddingLeft: ''.concat(18 + 16 * (void 0 === _ref4$depth ? 0 : _ref4$depth), 'px'), fontSize: ''.concat(theme.typography.size.s2 - 1, 'px'), textDecoration: 'none', color: theme.color.defaultText, background: 'transparent', '&:hover, &:focus': {outline: 'none', background: theme.background.hoverable}, '&[data-selected="true"]': {color: theme.color.lightest, background: theme.color.secondary, fontWeight: theme.typography.weight.bold, '&:hover, &:focus': {background: theme.color.secondary}, svg: {color: theme.color.lightest}}};
	})); let Path = dist_esm.styled.span((_ref5 => {
		let {theme} = _ref5; return {display: 'grid', justifyContent: 'start', gridAutoColumns: 'auto', gridAutoFlow: 'column', color: theme.textMutedColor, fontSize: ''.concat(theme.typography.size.s1 - 1, 'px'), '& > span': {whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}, '& > span + span': {position: 'relative', marginLeft: 4, paddingLeft: 7, '&:before': {content: '\'/\'', position: 'absolute', left: 0}}};
	})); let RootNode = dist_esm.styled.div((_ref6 => {
		let {theme} = _ref6; return {display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', marginTop: 16, marginBottom: 4, fontSize: ''.concat(theme.typography.size.s1 - 1, 'px'), fontWeight: theme.typography.weight.black, lineHeight: '16px', minHeight: 20, letterSpacing: '0.35em', textTransform: 'uppercase', color: theme.color.mediumdark};
	})); let GroupNode = react_default.a.memo((_ref7 => {
		let {children} = _ref7; let _ref7$isExpanded = _ref7.isExpanded; let isExpanded = void 0 !== _ref7$isExpanded && _ref7$isExpanded; let _ref7$isExpandable = _ref7.isExpandable; let isExpandable = void 0 !== _ref7$isExpandable && _ref7$isExpandable; let
			props = TreeNode_objectWithoutProperties(_ref7, ['children', 'isExpanded', 'isExpandable']); return react_default.a.createElement(TreeNode_BranchNode, {isExpandable, tabIndex: -1, ...props}, isExpandable ? react_default.a.createElement(CollapseIcon, {isExpanded}) : null, react_default.a.createElement(TypeIcon, {symbol: 'folder', color: 'primary'}), children);
	})); let ComponentNode = react_default.a.memo((_ref8 => {
		_ref8.theme; let {children} = _ref8; let {isExpanded} = _ref8; let {isExpandable} = _ref8; let
			props = TreeNode_objectWithoutProperties(_ref8, ['theme', 'children', 'isExpanded', 'isExpandable']); return react_default.a.createElement(TreeNode_BranchNode, {isExpandable, tabIndex: -1, ...props}, isExpandable && react_default.a.createElement(CollapseIcon, {isExpanded}), react_default.a.createElement(TypeIcon, {symbol: 'component', color: 'secondary'}), children);
	})); let DocumentNode = react_default.a.memo((_ref9 => {
		_ref9.theme; let {children} = _ref9; let
			props = TreeNode_objectWithoutProperties(_ref9, ['theme', 'children']); return react_default.a.createElement(TreeNode_LeafNode, {tabIndex: -1, ...props}, react_default.a.createElement(TypeIcon, {symbol: 'document'}), children);
	})); let StoryNode = react_default.a.memo((_ref10 => {
		_ref10.theme; let {children} = _ref10; let
			props = TreeNode_objectWithoutProperties(_ref10, ['theme', 'children']); return react_default.a.createElement(TreeNode_LeafNode, {tabIndex: -1, ...props}, react_default.a.createElement(TypeIcon, {symbol: 'bookmarkhollow'}), children);
	})); let core_events_dist_esm = (__webpack_require__(131), __webpack_require__(20)); let throttle = __webpack_require__(408); let throttle_default = __webpack_require__.n(throttle); let codeToKeyMap = {Space: ' ', Slash: '/', ArrowLeft: 'ArrowLeft', ArrowUp: 'ArrowUp', ArrowRight: 'ArrowRight', ArrowDown: 'ArrowDown', Escape: 'Escape', Enter: 'Enter'}; let allFalse = {alt: !1, ctrl: !1, meta: !1, shift: !1}; let matchesModifiers = function matchesModifiers(modifiers, event) {
		let _ref = !1 === modifiers ? allFalse : modifiers; let {alt} = _ref; let {ctrl} = _ref; let {meta} = _ref; let {shift} = _ref; return (typeof alt !== 'boolean' || alt === event.altKey) && ((typeof ctrl !== 'boolean' || ctrl === event.ctrlKey) && ((typeof meta !== 'boolean' || meta === event.metaKey) && (typeof shift !== 'boolean' || shift === event.shiftKey)));
	};

	let
		matchesKeyCode = function matchesKeyCode(code, event) {
			return event.code ? event.code === code : event.key === codeToKeyMap[code];
		};

	function _toConsumableArray(arr) {
		return (function _arrayWithoutHoles(arr) {
			if (Array.isArray(arr)) {
				return utils_arrayLikeToArray(arr);
			}
		})(arr) || (function utils_iterableToArray(iter) {
			if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(iter)) {
				return Array.from(iter);
			}
		})(arr) || (function utils_unsupportedIterableToArray(o, minLen) {
			if (!o) {
				return;
			}

			if (typeof o === 'string') {
				return utils_arrayLikeToArray(o, minLen);
			}

			let n = Object.prototype.toString.call(o).slice(8, -1); n === 'Object' && o.constructor && (n = o.constructor.name); if (n === 'Map' || n === 'Set') {
				return Array.from(o);
			}

			if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
				return utils_arrayLikeToArray(o, minLen);
			}
		})(arr) || (function _nonIterableSpread() {
			throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
		})();
	}

	function utils_arrayLikeToArray(arr, len) {
		(len == null || len > arr.length) && (len = arr.length); for (var i = 0, arr2 = new Array(len); i < len; i++) {
			arr2[i] = arr[i];
		}

		return arr2;
	}

	let utils_document = window_default.a.document; let utils_globalWindow = window_default.a.window; let utils_DOCS_MODE = window_default.a.DOCS_MODE; let utils_createId = function createId(itemId, refId) {
		return refId && refId !== DEFAULT_REF_ID ? ''.concat(refId, '_').concat(itemId) : itemId;
	};

	let getLink = function getLink(itemId, refId) {
		let type = utils_DOCS_MODE ? 'docs' : 'story'; return ''.concat(utils_document.location.pathname, '?path=/').concat(type, '/').concat(utils_createId(itemId, refId));
	};

	let utils_get = memoizerific_default()(1e3)(((id, dataset) => dataset[id])); let getParent = memoizerific_default()(1e3)(((id, dataset) => {
		let item = utils_get(id, dataset); return item && !Object(esm.f)(item) ? utils_get(item.parent, dataset) : void 0;
	})); var getParents = memoizerific_default()(1e3)(((id, dataset) => {
		let parent = getParent(id, dataset); return parent ? [parent].concat(_toConsumableArray(getParents(parent.id, dataset))) : [];
	})); let getAncestorIds = memoizerific_default()(1e3)(((data, id) => getParents(id, data).map((item => item.id)))); var getDescendantIds = memoizerific_default()(1e3)(((data, id, skipLeafs) => {
		let _ref$children = (data[id] || {}).children; return (void 0 === _ref$children ? [] : _ref$children).reduce(((acc, childId) => (!data[childId] || skipLeafs && data[childId].isLeaf || acc.push.apply(acc, [childId].concat(_toConsumableArray(getDescendantIds(data, childId, skipLeafs)))), acc)), []);
	})); function getPath(item, ref) {
		let parent = !Object(esm.f)(item) && item.parent ? ref.stories[item.parent] : null; return parent ? [].concat(_toConsumableArray(getPath(parent, ref)), [parent.name]) : ref.id === DEFAULT_REF_ID ? [] : [ref.title || ref.id];
	}

	let searchItem = function searchItem(item, ref) {
		return {...item, refId: ref.id, path: getPath(item, ref)};
	};

	let scrollIntoView = function scrollIntoView(element) {
		let center = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]; if (element) {
			let _element$getBoundingC = element.getBoundingClientRect(); let {top} = _element$getBoundingC; let {bottom} = _element$getBoundingC; let isInView = top >= 0 && bottom <= (utils_globalWindow.innerHeight || utils_document.documentElement.clientHeight); isInView || element.scrollIntoView({block: center ? 'center' : 'nearest'});
		}
	};

	let isAncestor = function isAncestor(element, maybeAncestor) {
		return !(!element || !maybeAncestor) && (element === maybeAncestor || isAncestor(element.parentElement, maybeAncestor));
	};

	function useExpanded_slicedToArray(arr, i) {
		return (function useExpanded_arrayWithHoles(arr) {
			if (Array.isArray(arr)) {
				return arr;
			}
		})(arr) || (function useExpanded_iterableToArrayLimit(arr, i) {
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
		})(arr, i) || useExpanded_unsupportedIterableToArray(arr, i) || (function useExpanded_nonIterableRest() {
			throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
		})();
	}

	function useExpanded_defineProperty(obj, key, value) {
		return key in obj ? Object.defineProperty(obj, key, {value, enumerable: !0, configurable: !0, writable: !0}) : obj[key] = value, obj;
	}

	function useExpanded_toConsumableArray(arr) {
		return (function useExpanded_arrayWithoutHoles(arr) {
			if (Array.isArray(arr)) {
				return useExpanded_arrayLikeToArray(arr);
			}
		})(arr) || (function useExpanded_iterableToArray(iter) {
			if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(iter)) {
				return Array.from(iter);
			}
		})(arr) || useExpanded_unsupportedIterableToArray(arr) || (function useExpanded_nonIterableSpread() {
			throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
		})();
	}

	function useExpanded_unsupportedIterableToArray(o, minLen) {
		if (o) {
			if (typeof o === 'string') {
				return useExpanded_arrayLikeToArray(o, minLen);
			}

			let n = Object.prototype.toString.call(o).slice(8, -1); return n === 'Object' && o.constructor && (n = o.constructor.name), n === 'Map' || n === 'Set' ? Array.from(o) : n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? useExpanded_arrayLikeToArray(o, minLen) : void 0;
		}
	}

	function useExpanded_arrayLikeToArray(arr, len) {
		(len == null || len > arr.length) && (len = arr.length); for (var i = 0, arr2 = new Array(len); i < len; i++) {
			arr2[i] = arr[i];
		}

		return arr2;
	}

	let useExpanded_document = window_default.a.document; let useExpanded_initializeExpanded = function initializeExpanded(_ref) {
		let _highlightedRef$curre; let _highlightedRef$curre2; let {refId} = _ref; let {data} = _ref; let {initialExpanded} = _ref; let {highlightedRef} = _ref; let {rootIds} = _ref; let highlightedAncestors = ((_highlightedRef$curre = highlightedRef.current) === null || void 0 === _highlightedRef$curre ? void 0 : _highlightedRef$curre.refId) === refId ? getAncestorIds(data, (_highlightedRef$curre2 = highlightedRef.current) === null || void 0 === _highlightedRef$curre2 ? void 0 : _highlightedRef$curre2.itemId) : []; return [].concat(useExpanded_toConsumableArray(rootIds), useExpanded_toConsumableArray(highlightedAncestors)).reduce(((acc, id) => Object.assign(acc, useExpanded_defineProperty({}, id, !(id in initialExpanded) || initialExpanded[id]))), {});
	};

	let noop = function noop() {}; function Tree_toConsumableArray(arr) {
		return (function Tree_arrayWithoutHoles(arr) {
			if (Array.isArray(arr)) {
				return Tree_arrayLikeToArray(arr);
			}
		})(arr) || (function Tree_iterableToArray(iter) {
			if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(iter)) {
				return Array.from(iter);
			}
		})(arr) || Tree_unsupportedIterableToArray(arr) || (function Tree_nonIterableSpread() {
			throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
		})();
	}

	function Tree_slicedToArray(arr, i) {
		return (function Tree_arrayWithHoles(arr) {
			if (Array.isArray(arr)) {
				return arr;
			}
		})(arr) || (function Tree_iterableToArrayLimit(arr, i) {
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
		})(arr, i) || Tree_unsupportedIterableToArray(arr, i) || (function Tree_nonIterableRest() {
			throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
		})();
	}

	function Tree_unsupportedIterableToArray(o, minLen) {
		if (o) {
			if (typeof o === 'string') {
				return Tree_arrayLikeToArray(o, minLen);
			}

			let n = Object.prototype.toString.call(o).slice(8, -1); return n === 'Object' && o.constructor && (n = o.constructor.name), n === 'Map' || n === 'Set' ? Array.from(o) : n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Tree_arrayLikeToArray(o, minLen) : void 0;
		}
	}

	function Tree_arrayLikeToArray(arr, len) {
		(len == null || len > arr.length) && (len = arr.length); for (var i = 0, arr2 = new Array(len); i < len; i++) {
			arr2[i] = arr[i];
		}

		return arr2;
	}

	function Tree_extends() {
		return (Tree_extends = Object.assign || function (target) {
			for (let i = 1; i < arguments.length; i++) {
				let source = arguments[i]; for (let key in source) {
					Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
				}
			}

			return target;
		}).apply(this, arguments);
	}

	function Tree_objectWithoutProperties(source, excluded) {
		if (source == null) {
			return {};
		}

		let key; let i; let target = (function Tree_objectWithoutPropertiesLoose(source, excluded) {
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

	let Action = dist_esm.styled.button((_ref => {
		let {theme} = _ref; return {display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 20, height: 20, margin: 0, marginLeft: 'auto', padding: 0, outline: 0, lineHeight: 'normal', background: 'none', border: '1px solid transparent', borderRadius: '100%', cursor: 'pointer', transition: 'all 150ms ease-out', color: theme.base === 'light' ? Object(polished_esm.e)(0.3, theme.color.defaultText) : Object(polished_esm.e)(0.6, theme.color.defaultText), '&:hover': {color: theme.barSelectedColor}, '&:focus': {color: theme.barSelectedColor, borderColor: theme.color.secondary, '&:not(:focus-visible)': {borderColor: 'transparent'}}, svg: {width: 10, height: 10}};
	})); let CollapseButton = dist_esm.styled.button((_ref2 => {
		let {theme} = _ref2; return {background: 'transparent', border: 'none', outline: 'none', boxSizing: 'content-box', cursor: 'pointer', position: 'relative', textAlign: 'left', lineHeight: 'normal', font: 'inherit', color: 'inherit', letterSpacing: 'inherit', textTransform: 'inherit', display: 'flex', flex: '0 1 auto', padding: '3px 10px 1px 1px', margin: 0, marginLeft: -19, overflow: 'hidden', borderRadius: 26, transition: 'color 150ms, box-shadow 150ms', 'span:first-of-type': {marginTop: 4, marginRight: 7}, '&:focus': {boxShadow: '0 0 0 1px '.concat(theme.color.secondary), color: theme.color.secondary, 'span:first-of-type': {color: theme.color.secondary}, '&:not(:focus-visible)': {boxShadow: 'none'}}};
	})); let Node = react_default.a.memo((_ref3 => {
		let _item$renderLabel3; let {item} = _ref3; let {refId} = _ref3; let {isOrphan} = _ref3; let {isDisplayed} = _ref3; let {isSelected} = _ref3; let {isFullyExpanded} = _ref3; let {setFullyExpanded} = _ref3; let {isExpanded} = _ref3; let {setExpanded} = _ref3; let {onSelectStoryId} = _ref3; if (!isDisplayed) {
			return null;
		}

		let _item$renderLabel2; let id = utils_createId(item.id, refId); if (Object(esm.g)(item)) {
			let _item$renderLabel; let LeafNode = item.isComponent ? DocumentNode : StoryNode; return react_default.a.createElement(LeafNode, {key: id, id, className: 'sidebar-item', 'data-ref-id': refId, 'data-item-id': item.id, 'data-parent-id': item.parent, 'data-nodetype': item.isComponent ? 'document' : 'story', 'data-selected': isSelected, 'data-highlightable': isDisplayed, depth: isOrphan ? item.depth : item.depth - 1, href: getLink(item.id, refId), onClick: function onClick(event) {
				event.preventDefault(), onSelectStoryId(item.id);
			}}, ((_item$renderLabel = item.renderLabel) === null || void 0 === _item$renderLabel ? void 0 : _item$renderLabel.call(item, item)) || item.name);
		}

		if (Object(esm.f)(item)) {
			return react_default.a.createElement(RootNode, {key: id, id, className: 'sidebar-subheading', 'data-ref-id': refId, 'data-item-id': item.id, 'data-nodetype': 'root', 'aria-expanded': isExpanded}, react_default.a.createElement(CollapseButton, {type: 'button', 'data-action': 'collapse-root', onClick: function onClick(event) {
				event.preventDefault(), setExpanded({ids: [item.id], value: !isExpanded});
			}}, react_default.a.createElement(CollapseIcon, {isExpanded}), ((_item$renderLabel2 = item.renderLabel) === null || void 0 === _item$renderLabel2 ? void 0 : _item$renderLabel2.call(item, item)) || item.name), isExpanded && react_default.a.createElement(Action, {type: 'button', className: 'sidebar-subheading-action', 'aria-label': 'expand', 'data-action': 'expand-all', 'data-expanded': isFullyExpanded, onClick: function onClick(event) {
				event.preventDefault(), setFullyExpanded();
			}}, react_default.a.createElement(icon_icon.a, {icon: isFullyExpanded ? 'collapse' : 'expandalt'})));
		}

		let BranchNode = item.isComponent ? ComponentNode : GroupNode; return react_default.a.createElement(BranchNode, {key: id, id, className: 'sidebar-item', 'data-ref-id': refId, 'data-item-id': item.id, 'data-parent-id': item.parent, 'data-nodetype': item.isComponent ? 'component' : 'group', 'data-highlightable': isDisplayed, 'aria-controls': item.children && item.children[0], 'aria-expanded': isExpanded, depth: isOrphan ? item.depth : item.depth - 1, isComponent: item.isComponent, isExpandable: item.children && item.children.length > 0, isExpanded, onClick: function onClick(event) {
			event.preventDefault(), setExpanded({ids: [item.id], value: !isExpanded}), item.isComponent && !isExpanded && onSelectStoryId(item.id);
		}}, ((_item$renderLabel3 = item.renderLabel) === null || void 0 === _item$renderLabel3 ? void 0 : _item$renderLabel3.call(item, item)) || item.name);
	})); let Tree_Root = react_default.a.memo((_ref4 => {
		let {setExpanded} = _ref4; let {isFullyExpanded} = _ref4; let {expandableDescendants} = _ref4; let props = Tree_objectWithoutProperties(_ref4, ['setExpanded', 'isFullyExpanded', 'expandableDescendants']); let
			setFullyExpanded = Object(react.useCallback)((() => setExpanded({ids: expandableDescendants, value: !isFullyExpanded})), [setExpanded, isFullyExpanded, expandableDescendants]); return react_default.a.createElement(Node, {...props, setExpanded, isFullyExpanded, setFullyExpanded});
	})); let Tree_Container = dist_esm.styled.div((props => ({marginTop: props.hasOrphans ? 20 : 0, marginBottom: 20}))); let Tree = react_default.a.memo((_ref5 => {
		let {isBrowsing} = _ref5; let {isMain} = _ref5; let {refId} = _ref5; let {data} = _ref5; let {highlightedRef} = _ref5; let {setHighlightedItemId} = _ref5; let {selectedStoryId} = _ref5; let {onSelectStoryId} = _ref5; let containerRef = Object(react.useRef)(null); let _useMemo2 = Tree_slicedToArray(Object(react.useMemo)((() => Object.keys(data).reduce(((acc, id) => {
			let item = data[id]; return Object(esm.f)(item) ? acc[0].push(id) : item.parent || acc[1].push(id), Object(esm.f)(item) && item.startCollapsed && (acc[2][id] = !1), acc;
		}), [[], [], {}])), [data]), 3); let rootIds = _useMemo2[0]; let orphanIds = _useMemo2[1]; let initialExpanded = _useMemo2[2]; let _useMemo3 = Object(react.useMemo)((() => orphanIds.concat(rootIds).reduce(((acc, nodeId) => {
			let _acc$orphansFirst; let descendantIds = getDescendantIds(data, nodeId, !1); return (_acc$orphansFirst = acc.orphansFirst).push.apply(_acc$orphansFirst, [nodeId].concat(Tree_toConsumableArray(descendantIds))), acc.expandableDescendants[nodeId] = descendantIds.filter((d => !data[d].isLeaf)), acc;
		}), {orphansFirst: [], expandableDescendants: {}})), [data, rootIds, orphanIds]); let {orphansFirst} = _useMemo3; let {expandableDescendants} = _useMemo3; let singleStoryComponentIds = Object(react.useMemo)((() => orphansFirst.filter((nodeId => {
			let _data$nodeId = data[nodeId]; let _data$nodeId$children = _data$nodeId.children; let children = void 0 === _data$nodeId$children ? [] : _data$nodeId$children; let {isComponent} = _data$nodeId; let {isLeaf} = _data$nodeId; let {name} = _data$nodeId; return !isLeaf && isComponent && children.length === 1 && Object(esm.g)(data[children[0]]) && data[children[0]].name === name;
		}))), [data, orphansFirst]); let collapsedItems = Object(react.useMemo)((() => orphansFirst.filter((id => !singleStoryComponentIds.includes(id)))), [orphanIds, orphansFirst, singleStoryComponentIds]); let collapsedData = Object(react.useMemo)((() => singleStoryComponentIds.reduce(((acc, id) => {
			let _ref6 = data[id]; let {children} = _ref6; let {parent} = _ref6; let childId = Tree_slicedToArray(children, 1)[0]; if (parent) {
				let siblings = Tree_toConsumableArray(data[parent].children); siblings[siblings.indexOf(id)] = childId, acc[parent] = {...data[parent], children: siblings};
			}

			return acc[childId] = {...data[childId], parent, depth: data[childId].depth - 1}, acc;
		}), {...data})), [data]); let ancestry = Object(react.useMemo)((() => collapsedItems.reduce(((acc, id) => Object.assign(acc, (function Tree_defineProperty(obj, key, value) {
			return key in obj ? Object.defineProperty(obj, key, {value, enumerable: !0, configurable: !0, writable: !0}) : obj[key] = value, obj;
		})({}, id, getAncestorIds(collapsedData, id)))), {})), [collapsedItems, collapsedData]); let _useExpanded2 = Tree_slicedToArray((function useExpanded(_ref2) {
			let {containerRef} = _ref2; let {isBrowsing} = _ref2; let {refId} = _ref2; let {data} = _ref2; let {initialExpanded} = _ref2; let {rootIds} = _ref2; let {highlightedRef} = _ref2; let {setHighlightedItemId} = _ref2; let {selectedStoryId} = _ref2; let {onSelectStoryId} = _ref2; let api = Object(esm.o)(); let _useReducer2 = useExpanded_slicedToArray(Object(react.useReducer)(((state, _ref3) => {
				let {ids} = _ref3; let
					{value} = _ref3; return ids.reduce(((acc, id) => Object.assign(acc, useExpanded_defineProperty({}, id, value))), {...state});
			}), {refId, data, highlightedRef, rootIds, initialExpanded}, useExpanded_initializeExpanded), 2); let expanded = _useReducer2[0]; let setExpanded = _useReducer2[1]; let getElementByDataItemId = Object(react.useCallback)((id => {
				let _containerRef$current; return (_containerRef$current = containerRef.current) === null || void 0 === _containerRef$current ? void 0 : _containerRef$current.querySelector('[data-item-id="'.concat(id, '"]'));
			}), [containerRef]); let highlightElement = Object(react.useCallback)((element => {
				setHighlightedItemId(element.getAttribute('data-item-id')), scrollIntoView(element);
			}), [setHighlightedItemId]); let
				updateExpanded = Object(react.useCallback)((_ref4 => {
					let {ids} = _ref4; let
						{value} = _ref4; if (setExpanded({ids, value}), ids.length === 1) {
						let _containerRef$current2; let element = (_containerRef$current2 = containerRef.current) === null || void 0 === _containerRef$current2 ? void 0 : _containerRef$current2.querySelector('[data-item-id="'.concat(ids[0], '"][data-ref-id="').concat(refId, '"]')); element && highlightElement(element);
					}
				}), [containerRef, highlightElement, refId]); Object(react.useEffect)((() => {
				setExpanded({ids: getAncestorIds(data, selectedStoryId), value: !0});
			}), [data, selectedStoryId]); let collapseAll = Object(react.useCallback)((() => {
				let ids = Object.keys(data).filter((id => !rootIds.includes(id))); setExpanded({ids, value: !1});
			}), [data, rootIds]); let expandAll = Object(react.useCallback)((() => {
				setExpanded({ids: Object.keys(data), value: !0});
			}), [data]); return Object(react.useEffect)((() => api ? (api.on(core_events_dist_esm.STORIES_COLLAPSE_ALL, collapseAll), api.on(core_events_dist_esm.STORIES_EXPAND_ALL, expandAll), function () {
				api.off(core_events_dist_esm.STORIES_COLLAPSE_ALL, collapseAll), api.off(core_events_dist_esm.STORIES_EXPAND_ALL, expandAll);
			}) : noop), [api, collapseAll, expandAll]), Object(react.useEffect)((() => {
				let menuElement = useExpanded_document.getElementById('storybook-explorer-menu'); let navigateTree = throttle_default()((event => {
					let _highlightedRef$curre3; let _highlightedRef$curre4; let highlightedItemId = ((_highlightedRef$curre3 = highlightedRef.current) === null || void 0 === _highlightedRef$curre3 ? void 0 : _highlightedRef$curre3.refId) === refId && ((_highlightedRef$curre4 = highlightedRef.current) === null || void 0 === _highlightedRef$curre4 ? void 0 : _highlightedRef$curre4.itemId); if (isBrowsing && containerRef.current && highlightedItemId && !event.repeat && matchesModifiers(!1, event)) {
						let isEnter = matchesKeyCode('Enter', event); let isSpace = matchesKeyCode('Space', event); let isArrowLeft = matchesKeyCode('ArrowLeft', event); let isArrowRight = matchesKeyCode('ArrowRight', event); if (isEnter || isSpace || isArrowLeft || isArrowRight) {
							let highlightedElement = getElementByDataItemId(highlightedItemId); if (highlightedElement && highlightedElement.getAttribute('data-ref-id') === refId) {
								let {target} = event; if (isAncestor(menuElement, target) || isAncestor(target, menuElement)) {
									if (target.hasAttribute('data-action')) {
										if (isEnter || isSpace) {
											return;
										}

										target.blur();
									}

									event.preventDefault(); let type = highlightedElement.getAttribute('data-nodetype'); (isEnter || isSpace) && ['component', 'story', 'document'].includes(type) && onSelectStoryId(highlightedItemId); let isExpanded = highlightedElement.getAttribute('aria-expanded'); if (isArrowLeft) {
										if (isExpanded === 'true') {
											return void setExpanded({ids: [highlightedItemId], value: !1});
										}

										let parentId = highlightedElement.getAttribute('data-parent-id'); let parentElement = parentId && getElementByDataItemId(parentId); return parentElement && parentElement.getAttribute('data-highlightable') === 'true' ? void highlightElement(parentElement) : void setExpanded({ids: getDescendantIds(data, highlightedItemId, !0), value: !1});
									}

									isArrowRight && (isExpanded === 'false' ? updateExpanded({ids: [highlightedItemId], value: !0}) : isExpanded === 'true' && updateExpanded({ids: getDescendantIds(data, highlightedItemId, !0), value: !0}));
								}
							}
						}
					}
				}), 60); return useExpanded_document.addEventListener('keydown', navigateTree), function () {
					return useExpanded_document.removeEventListener('keydown', navigateTree);
				};
			}), [containerRef, isBrowsing, refId, data, highlightedRef, setHighlightedItemId, onSelectStoryId]), [expanded, updateExpanded];
		})({containerRef, isBrowsing, refId, data: collapsedData, initialExpanded, rootIds, highlightedRef, setHighlightedItemId, selectedStoryId, onSelectStoryId}), 2); let expanded = _useExpanded2[0]; let
			setExpanded = _useExpanded2[1]; return react_default.a.createElement(Tree_Container, {ref: containerRef, hasOrphans: isMain && orphanIds.length > 0}, collapsedItems.map((itemId => {
			let item = collapsedData[itemId]; let id = utils_createId(itemId, refId); if (Object(esm.f)(item)) {
				let descendants = expandableDescendants[item.id]; let isFullyExpanded = descendants.every((d => expanded[d])); return react_default.a.createElement(Tree_Root, {key: id, item, refId, isOrphan: !1, isDisplayed: !0, isSelected: selectedStoryId === itemId, isExpanded: Boolean(expanded[itemId]), setExpanded, isFullyExpanded, expandableDescendants: descendants, onSelectStoryId});
			}

			let isDisplayed = !item.parent || ancestry[itemId].every((a => expanded[a])); return react_default.a.createElement(Node, {key: id, item, refId, isOrphan: orphanIds.some((oid => itemId === oid || itemId.startsWith(''.concat(oid, '-')))), isDisplayed, isSelected: selectedStoryId === itemId, isExpanded: Boolean(expanded[itemId]), setExpanded, onSelectStoryId});
		})));
	})); function Refs_extends() {
		return (Refs_extends = Object.assign || function (target) {
			for (let i = 1; i < arguments.length; i++) {
				let source = arguments[i]; for (let key in source) {
					Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
				}
			}

			return target;
		}).apply(this, arguments);
	}

	function Refs_slicedToArray(arr, i) {
		return (function Refs_arrayWithHoles(arr) {
			if (Array.isArray(arr)) {
				return arr;
			}
		})(arr) || (function Refs_iterableToArrayLimit(arr, i) {
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
		})(arr, i) || (function Refs_unsupportedIterableToArray(o, minLen) {
			if (!o) {
				return;
			}

			if (typeof o === 'string') {
				return Refs_arrayLikeToArray(o, minLen);
			}

			let n = Object.prototype.toString.call(o).slice(8, -1); n === 'Object' && o.constructor && (n = o.constructor.name); if (n === 'Map' || n === 'Set') {
				return Array.from(o);
			}

			if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
				return Refs_arrayLikeToArray(o, minLen);
			}
		})(arr, i) || (function Refs_nonIterableRest() {
			throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
		})();
	}

	function Refs_arrayLikeToArray(arr, len) {
		(len == null || len > arr.length) && (len = arr.length); for (var i = 0, arr2 = new Array(len); i < len; i++) {
			arr2[i] = arr[i];
		}

		return arr2;
	}

	let Wrapper = dist_esm.styled.div((_ref => ({position: 'relative', marginLeft: -20, marginRight: -20, marginTop: _ref.isMain ? void 0 : 0}))); let RefHead = dist_esm.styled.div((_ref2 => {
		let {theme} = _ref2; return {fontWeight: theme.typography.weight.black, fontSize: theme.typography.size.s2 - 1, textDecoration: 'none', lineHeight: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'transparent', width: '100%', marginTop: 20, paddingTop: 16, borderTop: '1px solid '.concat(theme.appBorderColor), color: theme.base === 'light' ? theme.color.defaultText : Object(polished_esm.e)(0.2, theme.color.defaultText)};
	})); let RefTitle = dist_esm.styled.span((_ref3 => {
		_ref3.theme; return {display: 'block', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex: 1, overflow: 'hidden', marginLeft: 2};
	})); let Refs_CollapseButton = dist_esm.styled.button((_ref4 => {
		let {theme} = _ref4; return {background: 'transparent', border: '1px solid transparent', borderRadius: 26, outline: 'none', boxSizing: 'content-box', cursor: 'pointer', position: 'relative', textAlign: 'left', lineHeight: 'normal', font: 'inherit', color: 'inherit', display: 'flex', padding: 3, paddingLeft: 1, paddingRight: 12, margin: 0, marginLeft: -20, overflow: 'hidden', 'span:first-of-type': {marginTop: 5}, '&:focus': {borderColor: theme.color.secondary, 'span:first-of-type': {borderLeftColor: theme.color.secondary}}};
	})); let Ref = react_default.a.memo((props => {
		let api = Object(esm.o)(); let {stories} = props; let refId = props.id; let _props$title = props.title; let title = void 0 === _props$title ? refId : _props$title; let isLoadingMain = props.isLoading; let {isBrowsing} = props; let {selectedStoryId} = props; let {highlightedRef} = props; let {setHighlighted} = props; let {loginUrl} = props; let {type} = props; let {ready} = props; let {error} = props; let length = Object(react.useMemo)((() => stories ? Object.keys(stories).length : 0), [stories]); let indicatorRef = Object(react.useRef)(null); let isMain = refId === DEFAULT_REF_ID; let isLoading = isLoadingMain || type === 'auto-inject' && !ready || type === 'unknown'; let state = (function getStateType(isLoading, isAuthRequired, isError, isEmpty) {
			switch (!0) {
				case isAuthRequired: return 'auth'; case isError: return 'error'; case isLoading: return 'loading'; case isEmpty: return 'empty'; default: return 'ready';
			}
		})(isLoading, Boolean(loginUrl) && length === 0, Boolean(error), !isLoading && length === 0); let _useState2 = Refs_slicedToArray(Object(react.useState)(!0), 2); let isExpanded = _useState2[0]; let setExpanded = _useState2[1]; let handleClick = Object(react.useCallback)((() => setExpanded((value => !value))), [setExpanded]); let setHighlightedItemId = Object(react.useCallback)((itemId => setHighlighted({itemId, refId})), [setHighlighted]); let onSelectStoryId = Object(react.useCallback)((storyId => api && api.selectStory(storyId, void 0, {ref: !isMain && refId})), [api, isMain, refId]); return react_default.a.createElement(react_default.a.Fragment, null, isMain || react_default.a.createElement(RefHead, {'aria-label': ''.concat(isExpanded ? 'Hide' : 'Show', ' ').concat(title, ' stories'), 'aria-expanded': isExpanded}, react_default.a.createElement(Refs_CollapseButton, {'data-action': 'collapse-ref', onClick: handleClick}, react_default.a.createElement(CollapseIcon, {isExpanded}), react_default.a.createElement(RefTitle, {title}, title)), react_default.a.createElement(RefIndicator, {...props, state, ref: indicatorRef})), isExpanded && react_default.a.createElement(Wrapper, {'data-title': title, isMain}, state === 'auth' && react_default.a.createElement(RefBlocks_AuthBlock, {id: refId, loginUrl}), state === 'error' && react_default.a.createElement(RefBlocks_ErrorBlock, {error}), state === 'loading' && react_default.a.createElement(RefBlocks_LoaderBlock, {isMain}), state === 'empty' && react_default.a.createElement(RefBlocks_EmptyBlock, {isMain}), state === 'ready' && react_default.a.createElement(Tree, {isBrowsing, isMain, refId, data: stories, selectedStoryId, onSelectStoryId, highlightedRef, setHighlightedItemId})));
	})); __webpack_require__(273); function useHighlighted_slicedToArray(arr, i) {
		return (function useHighlighted_arrayWithHoles(arr) {
			if (Array.isArray(arr)) {
				return arr;
			}
		})(arr) || (function useHighlighted_iterableToArrayLimit(arr, i) {
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
		})(arr, i) || (function useHighlighted_unsupportedIterableToArray(o, minLen) {
			if (!o) {
				return;
			}

			if (typeof o === 'string') {
				return useHighlighted_arrayLikeToArray(o, minLen);
			}

			let n = Object.prototype.toString.call(o).slice(8, -1); n === 'Object' && o.constructor && (n = o.constructor.name); if (n === 'Map' || n === 'Set') {
				return Array.from(o);
			}

			if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
				return useHighlighted_arrayLikeToArray(o, minLen);
			}
		})(arr, i) || (function useHighlighted_nonIterableRest() {
			throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
		})();
	}

	function useHighlighted_arrayLikeToArray(arr, len) {
		(len == null || len > arr.length) && (len = arr.length); for (var i = 0, arr2 = new Array(len); i < len; i++) {
			arr2[i] = arr[i];
		}

		return arr2;
	}

	let useHighlighted_document = window_default.a.document; let useHighlighted_globalWindow = window_default.a.window; let fromSelection = function fromSelection(selection) {
		return selection ? {itemId: selection.storyId, refId: selection.refId} : null;
	};

	function HighlightStyles_defineProperty(obj, key, value) {
		return key in obj ? Object.defineProperty(obj, key, {value, enumerable: !0, configurable: !0, writable: !0}) : obj[key] = value, obj;
	}

	let HighlightStyles_HighlightStyles = function HighlightStyles(_ref) {
		let {refId} = _ref; let
			{itemId} = _ref; return react_default.a.createElement(core_browser_esm.a, {styles: function styles(_ref2) {
			let _dataRefId$conca; let {color} = _ref2; let background = Object(polished_esm.e)(0.85, color.secondary); return HighlightStyles_defineProperty({}, '[data-ref-id="'.concat(refId, '"][data-item-id="').concat(itemId, '"]:not([data-selected="true"])'), (HighlightStyles_defineProperty(_dataRefId$conca = {}, '&[data-nodetype="component"], &[data-nodetype="group"]', {background, '&:hover, &:focus': {background}}), HighlightStyles_defineProperty(_dataRefId$conca, '&[data-nodetype="story"], &[data-nodetype="document"]', {color: color.defaultText, background, '&:hover, &:focus': {background}}), _dataRefId$conca));
		}});
	};

	function Explorer_extends() {
		return (Explorer_extends = Object.assign || function (target) {
			for (let i = 1; i < arguments.length; i++) {
				let source = arguments[i]; for (let key in source) {
					Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
				}
			}

			return target;
		}).apply(this, arguments);
	}

	function Explorer_slicedToArray(arr, i) {
		return (function Explorer_arrayWithHoles(arr) {
			if (Array.isArray(arr)) {
				return arr;
			}
		})(arr) || (function Explorer_iterableToArrayLimit(arr, i) {
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
		})(arr, i) || (function Explorer_unsupportedIterableToArray(o, minLen) {
			if (!o) {
				return;
			}

			if (typeof o === 'string') {
				return Explorer_arrayLikeToArray(o, minLen);
			}

			let n = Object.prototype.toString.call(o).slice(8, -1); n === 'Object' && o.constructor && (n = o.constructor.name); if (n === 'Map' || n === 'Set') {
				return Array.from(o);
			}

			if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
				return Explorer_arrayLikeToArray(o, minLen);
			}
		})(arr, i) || (function Explorer_nonIterableRest() {
			throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
		})();
	}

	function Explorer_arrayLikeToArray(arr, len) {
		(len == null || len > arr.length) && (len = arr.length); for (var i = 0, arr2 = new Array(len); i < len; i++) {
			arr2[i] = arr[i];
		}

		return arr2;
	}

	HighlightStyles_HighlightStyles.displayName = 'HighlightStyles'; let Explorer = react_default.a.memo((_ref => {
		let {isLoading} = _ref; let {isBrowsing} = _ref; let {dataset} = _ref; let {selected} = _ref; let containerRef = Object(react.useRef)(null); let _useHighlighted2 = Explorer_slicedToArray((function useHighlighted(_ref) {
			let {containerRef} = _ref; let {isLoading} = _ref; let {isBrowsing} = _ref; let {dataset} = _ref; let {selected} = _ref; let initialHighlight = fromSelection(selected); let highlightedRef = Object(react.useRef)(initialHighlight); let _useState2 = useHighlighted_slicedToArray(Object(react.useState)(initialHighlight), 2); let highlighted = _useState2[0]; let setHighlighted = _useState2[1]; let updateHighlighted = Object(react.useCallback)((highlight => {
				highlightedRef.current = highlight, setHighlighted(highlight);
			}), [highlightedRef]); let
				highlightElement = Object(react.useCallback)((function (element) {
					let center = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]; let itemId = element.getAttribute('data-item-id'); let refId = element.getAttribute('data-ref-id'); itemId && refId && (updateHighlighted({itemId, refId}), scrollIntoView(element, center));
				}), [updateHighlighted]); return Object(react.useEffect)((() => {
				let highlight = fromSelection(selected); if (updateHighlighted(highlight), highlight) {
					let {itemId} = highlight; let
						{refId} = highlight; setTimeout((() => {
						let _containerRef$current; scrollIntoView((_containerRef$current = containerRef.current) === null || void 0 === _containerRef$current ? void 0 : _containerRef$current.querySelector('[data-item-id="'.concat(itemId, '"][data-ref-id="').concat(refId, '"]')), !0);
					}), 0);
				}
			}), [dataset, highlightedRef, containerRef, selected]), Object(react.useEffect)((() => {
				let lastRequestId; let menuElement = useHighlighted_document.getElementById('storybook-explorer-menu'); let navigateTree = function navigateTree(event) {
					if (!isLoading && isBrowsing && containerRef.current && matchesModifiers(!1, event)) {
						let isArrowUp = matchesKeyCode('ArrowUp', event); let isArrowDown = matchesKeyCode('ArrowDown', event); if (isArrowUp || isArrowDown) {
							event.preventDefault(); var requestId = useHighlighted_globalWindow.requestAnimationFrame((() => {
								useHighlighted_globalWindow.cancelAnimationFrame(lastRequestId), lastRequestId = requestId; let {target} = event; if (isAncestor(menuElement, target) || isAncestor(target, menuElement)) {
									target.hasAttribute('data-action') && target.blur(); let highlightable = Array.from(containerRef.current.querySelectorAll('[data-highlightable=true]')); let currentIndex = highlightable.findIndex((el => {
										let _highlightedRef$curre; let _highlightedRef$curre2; return el.getAttribute('data-item-id') === ((_highlightedRef$curre = highlightedRef.current) === null || void 0 === _highlightedRef$curre ? void 0 : _highlightedRef$curre.itemId) && el.getAttribute('data-ref-id') === ((_highlightedRef$curre2 = highlightedRef.current) === null || void 0 === _highlightedRef$curre2 ? void 0 : _highlightedRef$curre2.refId);
									})); let nextIndex = (function cycle(array, index, delta) {
										let next = index + delta % array.length; return next < 0 && (next = array.length + next), next >= array.length && (next -= array.length), next;
									})(highlightable, currentIndex, isArrowUp ? -1 : 1); let didRunAround = isArrowUp ? nextIndex === highlightable.length - 1 : nextIndex === 0; highlightElement(highlightable[nextIndex], didRunAround);
								}
							}));
						}
					}
				};

				return useHighlighted_document.addEventListener('keydown', navigateTree), function () {
					return useHighlighted_document.removeEventListener('keydown', navigateTree);
				};
			}), [isLoading, isBrowsing, highlightedRef, highlightElement]), [highlighted, updateHighlighted, highlightedRef];
		})({containerRef, isLoading, isBrowsing, dataset, selected}), 3); let highlighted = _useHighlighted2[0]; let setHighlighted = _useHighlighted2[1]; let
			highlightedRef = _useHighlighted2[2]; return react_default.a.createElement('div', {ref: containerRef, id: 'storybook-explorer-tree', 'data-highlighted-ref-id': highlighted == null ? void 0 : highlighted.refId, 'data-highlighted-item-id': highlighted == null ? void 0 : highlighted.itemId}, highlighted && react_default.a.createElement(HighlightStyles_HighlightStyles, highlighted), dataset.entries.map((_ref2 => {
			let _ref3 = Explorer_slicedToArray(_ref2, 2); let refId = _ref3[0]; let ref = _ref3[1]; return react_default.a.createElement(Ref, {...ref, key: refId, isLoading, isBrowsing, selectedStoryId: (selected == null ? void 0 : selected.refId) === ref.id ? selected.storyId : null, highlightedRef, setHighlighted});
		})));
	})); let downshift_esm = (__webpack_require__(188), __webpack_require__(152), __webpack_require__(110), __webpack_require__(109)); let dist_fuse = __webpack_require__(440); let fuse_default = __webpack_require__.n(dist_fuse); function isCloseType(x) {
		return !(!x || !x.closeMenu);
	}

	function isClearType(x) {
		return !(!x || !x.clearLastViewed);
	}

	function isExpandType(x) {
		return !(!x || !x.showAll);
	}

	function Search_extends() {
		return (Search_extends = Object.assign || function (target) {
			for (let i = 1; i < arguments.length; i++) {
				let source = arguments[i]; for (let key in source) {
					Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
				}
			}

			return target;
		}).apply(this, arguments);
	}

	function Search_toConsumableArray(arr) {
		return (function Search_arrayWithoutHoles(arr) {
			if (Array.isArray(arr)) {
				return Search_arrayLikeToArray(arr);
			}
		})(arr) || (function Search_iterableToArray(iter) {
			if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(iter)) {
				return Array.from(iter);
			}
		})(arr) || Search_unsupportedIterableToArray(arr) || (function Search_nonIterableSpread() {
			throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
		})();
	}

	function Search_slicedToArray(arr, i) {
		return (function Search_arrayWithHoles(arr) {
			if (Array.isArray(arr)) {
				return arr;
			}
		})(arr) || (function Search_iterableToArrayLimit(arr, i) {
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
		})(arr, i) || Search_unsupportedIterableToArray(arr, i) || (function Search_nonIterableRest() {
			throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
		})();
	}

	function Search_unsupportedIterableToArray(o, minLen) {
		if (o) {
			if (typeof o === 'string') {
				return Search_arrayLikeToArray(o, minLen);
			}

			let n = Object.prototype.toString.call(o).slice(8, -1); return n === 'Object' && o.constructor && (n = o.constructor.name), n === 'Map' || n === 'Set' ? Array.from(o) : n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Search_arrayLikeToArray(o, minLen) : void 0;
		}
	}

	function Search_arrayLikeToArray(arr, len) {
		(len == null || len > arr.length) && (len = arr.length); for (var i = 0, arr2 = new Array(len); i < len; i++) {
			arr2[i] = arr[i];
		}

		return arr2;
	}

	let Search_document = window_default.a.document; let Search_options = {shouldSort: !0, tokenize: !0, findAllMatches: !0, includeScore: !0, includeMatches: !0, threshold: 0.2, location: 0, distance: 100, maxPatternLength: 32, minMatchCharLength: 1, keys: [{name: 'name', weight: 0.7}, {name: 'path', weight: 0.3}]}; let ScreenReaderLabel = dist_esm.styled.label({position: 'absolute', left: -1e4, top: 'auto', width: 1, height: 1, overflow: 'hidden'}); let SearchIcon = Object(dist_esm.styled)(icon_icon.a)((_ref => ({width: 12, height: 12, position: 'absolute', top: 8, left: 10, zIndex: 1, pointerEvents: 'none', color: _ref.theme.textMutedColor}))); let SearchField = dist_esm.styled.div((_ref2 => ({display: 'flex', flexDirection: 'column', position: 'relative', '&:focus-within svg': {color: _ref2.theme.color.defaultText}}))); let Input = dist_esm.styled.input((_ref3 => {
		let {theme} = _ref3; return {appearance: 'none', height: 28, paddingLeft: 28, paddingRight: 28, border: '1px solid '.concat(Object(polished_esm.e)(0.6, theme.color.mediumdark)), background: 'transparent', borderRadius: 28, fontSize: ''.concat(theme.typography.size.s1, 'px'), fontFamily: 'inherit', transition: 'all 150ms', color: theme.color.defaultText, '&:focus, &:active': {outline: 0, borderColor: theme.color.secondary, background: theme.input.background}, '&::placeholder': {color: theme.textMutedColor}, '&:valid ~ code, &:focus ~ code': {display: 'none'}, '&:invalid ~ svg': {display: 'none'}, '&:valid ~ svg': {display: 'block'}, '&::-ms-clear': {display: 'none'}, '&::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration': {display: 'none'}};
	})); let FocusKey = dist_esm.styled.code((_ref4 => ({position: 'absolute', top: 6, right: 12, width: 16, height: 16, zIndex: 1, lineHeight: '17px', textAlign: 'center', fontSize: '11px', background: 'rgba(0,0,0,0.1)', color: _ref4.theme.textMutedColor, borderRadius: 2, userSelect: 'none', pointerEvents: 'none'}))); let ClearIcon = Object(dist_esm.styled)(icon_icon.a)((_ref5 => ({width: 16, height: 16, padding: 4, position: 'absolute', top: 6, right: 8, zIndex: 1, background: 'rgba(0,0,0,0.1)', borderRadius: 16, color: _ref5.theme.color.defaultText, cursor: 'pointer'}))); let FocusContainer = dist_esm.styled.div({outline: 0}); let Search = react_default.a.memo((_ref6 => {
		let {children} = _ref6; let {dataset} = _ref6; let _ref6$enableShortcuts = (_ref6.isLoading, _ref6.enableShortcuts); let enableShortcuts = void 0 === _ref6$enableShortcuts || _ref6$enableShortcuts; let {getLastViewed} = _ref6; let {clearLastViewed} = _ref6; let _ref6$initialQuery = _ref6.initialQuery; let initialQuery = void 0 === _ref6$initialQuery ? '' : _ref6$initialQuery; let api = Object(esm.o)(); let inputRef = Object(react.useRef)(null); let _useState2 = Search_slicedToArray(Object(react.useState)('Find components'), 2); let inputPlaceholder = _useState2[0]; let setPlaceholder = _useState2[1]; let _useState4 = Search_slicedToArray(Object(react.useState)(!1), 2); let allComponents = _useState4[0]; let showAllComponents = _useState4[1]; let selectStory = Object(react.useCallback)(((id, refId) => {
			api && api.selectStory(id, void 0, {ref: refId !== DEFAULT_REF_ID && refId}), inputRef.current.blur(), showAllComponents(!1);
		}), [api, inputRef, showAllComponents, DEFAULT_REF_ID]); let list = Object(react.useMemo)((() => dataset.entries.reduce(((acc, _ref7) => {
			let _ref8 = Search_slicedToArray(_ref7, 2); let refId = _ref8[0]; let {stories} = _ref8[1]; return stories && acc.push.apply(acc, Search_toConsumableArray(Object.values(stories).map((item => searchItem(item, dataset.hash[refId]))))), acc;
		}), [])), [dataset]); let fuse = Object(react.useMemo)((() => new fuse_default.a(list, Search_options)), [list]); let getResults = Object(react.useCallback)((input => {
			if (!input) {
				return [];
			}

			let results = []; let resultIds = new Set(); let distinctResults = fuse.search(input).filter((_ref9 => {
				let {item} = _ref9; return !(!item.isComponent && !item.isLeaf || resultIds.has(item.parent)) && (resultIds.add(item.id), !0);
			})); return distinctResults.length && (results = distinctResults.slice(0, allComponents ? 1e3 : 50), distinctResults.length > 50 && !allComponents && results.push({showAll: function showAll() {
				return showAllComponents(!0);
			}, totalCount: distinctResults.length, moreCount: distinctResults.length - 50})), results;
		}), [allComponents, fuse]); let
			stateReducer = Object(react.useCallback)(((state, changes) => {
				switch (changes.type) {
					case downshift_esm.a.stateChangeTypes.blurInput: return {...changes, inputValue: state.inputValue, isOpen: state.inputValue && !state.selectedItem, selectedItem: null}; case downshift_esm.a.stateChangeTypes.mouseUp: return {}; case downshift_esm.a.stateChangeTypes.keyDownEscape: return state.inputValue ? ({...changes, inputValue: '', isOpen: !0, selectedItem: null}) : (inputRef.current.blur(), ({...changes, isOpen: !1, selectedItem: null})); case downshift_esm.a.stateChangeTypes.clickItem: case downshift_esm.a.stateChangeTypes.keyDownEnter: if ((function isSearchResult(x) {
						return !(!x || !x.item);
					})(changes.selectedItem)) {
						let _changes$selectedItem = changes.selectedItem.item; let {id} = _changes$selectedItem; let {refId} = _changes$selectedItem; return selectStory(id, refId), ({...changes, inputValue: state.inputValue, isOpen: !1});
					}

						return isExpandType(changes.selectedItem) ? (changes.selectedItem.showAll(), {}) : isClearType(changes.selectedItem) ? (changes.selectedItem.clearLastViewed(), inputRef.current.blur(), {isOpen: !1}) : isCloseType(changes.selectedItem) ? (inputRef.current.blur(), {isOpen: !1}) : changes; case downshift_esm.a.stateChangeTypes.changeInput: return showAllComponents(!1), changes; default: return changes;
				}
			}), [inputRef, selectStory, showAllComponents]); return react_default.a.createElement(downshift_esm.a, {initialInputValue: initialQuery, stateReducer, itemToString: function itemToString(result) {
			let _result$item; return (result == null || (_result$item = result.item) === null || void 0 === _result$item ? void 0 : _result$item.name) || '';
		}}, (_ref10 => {
			let {isOpen} = _ref10; let {openMenu} = _ref10; let {closeMenu} = _ref10; let {inputValue} = _ref10; let {clearSelection} = _ref10; let {getInputProps} = _ref10; let {getItemProps} = _ref10; let {getLabelProps} = _ref10; let {getMenuProps} = _ref10; let {getRootProps} = _ref10; let {highlightedIndex} = _ref10; let input = inputValue ? inputValue.trim() : ''; let results = input ? getResults(input) : []; let
				lastViewed = !input && getLastViewed(); lastViewed && lastViewed.length && ((results = lastViewed.reduce(((acc, _ref11) => {
				let {storyId} = _ref11; let {refId} = _ref11; let
					data = dataset.hash[refId]; if (data && data.stories && data.stories[storyId]) {
					let story = data.stories[storyId]; let item = !story.isLeaf || story.isComponent || story.isRoot ? story : data.stories[story.parent]; acc.some((res => res.item.refId === refId && res.item.id === item.id)) || acc.push({item: searchItem(item, dataset.hash[refId]), matches: [], score: 0});
				}

				return acc;
			}), [])).push({closeMenu}), results.length > 0 && results.push({clearLastViewed})); let inputProps = getInputProps({id: 'storybook-explorer-searchfield', ref: inputRef, required: !0, type: 'search', placeholder: inputPlaceholder, onFocus: function onFocus() {
				openMenu(), setPlaceholder('Type to find...');
			}, onBlur: function onBlur() {
				return setPlaceholder('Find components');
			}}); return react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement(ScreenReaderLabel, getLabelProps(), 'Search for components'), react_default.a.createElement(SearchField, {...getRootProps({refKey: ''}, {suppressRefError: !0}), className: 'search-field'}, react_default.a.createElement(SearchIcon, {icon: 'search'}), react_default.a.createElement(Input, inputProps), enableShortcuts && react_default.a.createElement(FocusKey, null, '/'), react_default.a.createElement(ClearIcon, {icon: 'cross', onClick: function onClick() {
				return clearSelection();
			}})), react_default.a.createElement(FocusContainer, {tabIndex: 0, id: 'storybook-explorer-menu'}, children({query: input, results, isBrowsing: !isOpen && Search_document.activeElement !== inputRef.current, closeMenu, getMenuProps, getItemProps, highlightedIndex})));
		}));
	})); function SearchResults_extends() {
		return (SearchResults_extends = Object.assign || function (target) {
			for (let i = 1; i < arguments.length; i++) {
				let source = arguments[i]; for (let key in source) {
					Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
				}
			}

			return target;
		}).apply(this, arguments);
	}

	function SearchResults_objectWithoutProperties(source, excluded) {
		if (source == null) {
			return {};
		}

		let key; let i; let target = (function SearchResults_objectWithoutPropertiesLoose(source, excluded) {
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

	function SearchResults_slicedToArray(arr, i) {
		return (function SearchResults_arrayWithHoles(arr) {
			if (Array.isArray(arr)) {
				return arr;
			}
		})(arr) || (function SearchResults_iterableToArrayLimit(arr, i) {
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
		})(arr, i) || (function SearchResults_unsupportedIterableToArray(o, minLen) {
			if (!o) {
				return;
			}

			if (typeof o === 'string') {
				return SearchResults_arrayLikeToArray(o, minLen);
			}

			let n = Object.prototype.toString.call(o).slice(8, -1); n === 'Object' && o.constructor && (n = o.constructor.name); if (n === 'Map' || n === 'Set') {
				return Array.from(o);
			}

			if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
				return SearchResults_arrayLikeToArray(o, minLen);
			}
		})(arr, i) || (function SearchResults_nonIterableRest() {
			throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
		})();
	}

	function SearchResults_arrayLikeToArray(arr, len) {
		(len == null || len > arr.length) && (len = arr.length); for (var i = 0, arr2 = new Array(len); i < len; i++) {
			arr2[i] = arr[i];
		}

		return arr2;
	}

	let SearchResults_document = window_default.a.document; let SearchResults_DOCS_MODE = window_default.a.DOCS_MODE; let ResultsList = dist_esm.styled.ol({listStyle: 'none', margin: 0, marginLeft: -20, marginRight: -20, padding: 0}); let ResultRow = dist_esm.styled.li((_ref => {
		let {theme} = _ref; return {display: 'block', margin: 0, padding: 0, background: _ref.isHighlighted ? Object(polished_esm.e)(0.9, theme.color.secondary) : 'transparent', cursor: 'pointer', 'a:hover, button:hover': {background: 'transparent'}};
	})); let NoResults = dist_esm.styled.div((_ref2 => {
		let {theme} = _ref2; return {marginTop: 20, textAlign: 'center', fontSize: ''.concat(theme.typography.size.s2 - 1, 'px'), lineHeight: '18px', color: theme.color.defaultText, small: {color: theme.barTextColor, fontSize: ''.concat(theme.typography.size.s1, 'px')}};
	})); let Mark = dist_esm.styled.mark((_ref3 => ({background: 'transparent', color: _ref3.theme.color.secondary}))); let ActionRow = Object(dist_esm.styled)(ResultRow)({display: 'flex', padding: '6px 19px', alignItems: 'center'}); let BackActionRow = Object(dist_esm.styled)(ActionRow)({marginTop: 8}); let ActionLabel = dist_esm.styled.span((_ref4 => {
		let {theme} = _ref4; return {flexGrow: 1, color: theme.color.mediumdark, fontSize: ''.concat(theme.typography.size.s1, 'px')};
	})); let ActionIcon = Object(dist_esm.styled)(icon_icon.a)((_ref5 => ({display: 'inline-block', width: 10, height: 10, marginRight: 6, color: _ref5.theme.color.mediumdark}))); let ActionKey = dist_esm.styled.code((_ref6 => ({minWidth: 16, height: 16, lineHeight: '17px', textAlign: 'center', fontSize: '11px', background: 'rgba(0,0,0,0.1)', color: _ref6.theme.textMutedColor, borderRadius: 2, userSelect: 'none', pointerEvents: 'none'}))); let Highlight = react_default.a.memo((_ref7 => {
		let {children} = _ref7; let
			{match} = _ref7; if (!match) {
			return react_default.a.createElement(react_default.a.Fragment, null, children);
		}

		let {value} = match; let
			result = match.indices.reduce(((_ref8, _ref9, index, _ref10) => {
				let {cursor} = _ref8; let {nodes} = _ref8; let _ref11 = SearchResults_slicedToArray(_ref9, 2); let start = _ref11[0]; let end = _ref11[1]; let
					{length} = _ref10; return nodes.push(react_default.a.createElement('span', {key: ''.concat(index, '-0')}, value.slice(cursor, start))), nodes.push(react_default.a.createElement(Mark, {key: ''.concat(index, '-1')}, value.slice(start, end + 1))), index === length - 1 && nodes.push(react_default.a.createElement('span', {key: ''.concat(index, '-2')}, value.slice(end + 1))), {cursor: end + 1, nodes};
			}), {cursor: 0, nodes: []}).nodes; return react_default.a.createElement(react_default.a.Fragment, null, result);
	})); let Result = react_default.a.memo((_ref12 => {
		let {item} = _ref12; let {matches} = _ref12; let onClick = (_ref12.icon, _ref12.onClick); let props = SearchResults_objectWithoutProperties(_ref12, ['item', 'matches', 'icon', 'onClick']); let click = Object(react.useCallback)((event => {
			event.preventDefault(), onClick(event);
		}), [onClick]); let nameMatch = matches.find((match => match.key === 'name')); let pathMatches = matches.filter((match => match.key === 'path')); let label = react_default.a.createElement('div', {className: 'search-result-item--label'}, react_default.a.createElement('strong', null, react_default.a.createElement(Highlight, {match: nameMatch}, item.name)), react_default.a.createElement(Path, null, item.path.map(((group, index) => react_default.a.createElement('span', {key: index}, react_default.a.createElement(Highlight, {match: pathMatches.find((match => match.arrayIndex === index))}, group)))))); let
			title = ''.concat(item.path.join(' / '), ' / ').concat(item.name); if (SearchResults_DOCS_MODE) {
			return react_default.a.createElement(ResultRow, props, react_default.a.createElement(DocumentNode, {depth: 0, onClick: click, href: getLink(item.id, item.refId), title}, label));
		}

		let TreeNode = item.isComponent ? ComponentNode : StoryNode; return react_default.a.createElement(ResultRow, props, react_default.a.createElement(TreeNode, {isExpanded: !1, depth: 0, onClick, title}, label));
	})); let SearchResults = react_default.a.memo((_ref13 => {
		let {query} = _ref13; let {results} = _ref13; let {closeMenu} = _ref13; let {getMenuProps} = _ref13; let {getItemProps} = _ref13; let {highlightedIndex} = _ref13; let _ref13$isLoading = _ref13.isLoading; let isLoading = void 0 !== _ref13$isLoading && _ref13$isLoading; let _ref13$enableShortcut = _ref13.enableShortcuts; let
			enableShortcuts = void 0 === _ref13$enableShortcut || _ref13$enableShortcut; return Object(react.useEffect)((() => {
			let handleEscape = function handleEscape(event) {
				if (enableShortcuts && !isLoading && !event.repeat && matchesModifiers(!1, event) && matchesKeyCode('Escape', event)) {
					let {target} = event; if ((target == null ? void 0 : target.id) === 'storybook-explorer-searchfield') {
						return;
					}

					event.preventDefault(), closeMenu();
				}
			};

			return SearchResults_document.addEventListener('keydown', handleEscape), function () {
				return SearchResults_document.removeEventListener('keydown', handleEscape);
			};
		}), [enableShortcuts, isLoading]), react_default.a.createElement(ResultsList, getMenuProps(), results.length > 0 && !query && react_default.a.createElement('li', null, react_default.a.createElement(RootNode, {className: 'search-result-recentlyOpened'}, 'Recently opened')), results.length === 0 && query && react_default.a.createElement('li', null, react_default.a.createElement(NoResults, null, react_default.a.createElement('strong', null, 'No components found'), react_default.a.createElement('br', null), react_default.a.createElement('small', null, 'Find components by name or path.'))), results.map(((result, index) => {
			if (isCloseType(result)) {
				return react_default.a.createElement(BackActionRow, {...result, ...getItemProps({key: index, index, item: result}), isHighlighted: highlightedIndex === index, className: 'search-result-back'}, react_default.a.createElement(ActionIcon, {icon: 'arrowleft'}), react_default.a.createElement(ActionLabel, null, 'Back to components'), react_default.a.createElement(ActionKey, null, 'ESC'));
			}

			if (isClearType(result)) {
				return react_default.a.createElement(ActionRow, {...result, ...getItemProps({key: index, index, item: result}), isHighlighted: highlightedIndex === index, className: 'search-result-clearHistory'}, react_default.a.createElement(ActionIcon, {icon: 'trash'}), react_default.a.createElement(ActionLabel, null, 'Clear history'));
			}

			if (isExpandType(result)) {
				return react_default.a.createElement(ActionRow, {...result, ...getItemProps({key: index, index, item: result}), isHighlighted: highlightedIndex === index, className: 'search-result-more'}, react_default.a.createElement(ActionIcon, {icon: 'plus'}), react_default.a.createElement(ActionLabel, null, 'Show ', result.moreCount, ' more results'));
			}

			let {item} = result; let
				key = ''.concat(item.refId, '::').concat(item.id); return react_default.a.createElement(Result, {...result, ...getItemProps({key, index, item: result}), isHighlighted: highlightedIndex === index, className: 'search-result-item'});
		})));
	})); function useLastViewed_toConsumableArray(arr) {
		return (function useLastViewed_arrayWithoutHoles(arr) {
			if (Array.isArray(arr)) {
				return useLastViewed_arrayLikeToArray(arr);
			}
		})(arr) || (function useLastViewed_iterableToArray(iter) {
			if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(iter)) {
				return Array.from(iter);
			}
		})(arr) || (function useLastViewed_unsupportedIterableToArray(o, minLen) {
			if (!o) {
				return;
			}

			if (typeof o === 'string') {
				return useLastViewed_arrayLikeToArray(o, minLen);
			}

			let n = Object.prototype.toString.call(o).slice(8, -1); n === 'Object' && o.constructor && (n = o.constructor.name); if (n === 'Map' || n === 'Set') {
				return Array.from(o);
			}

			if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
				return useLastViewed_arrayLikeToArray(o, minLen);
			}
		})(arr) || (function useLastViewed_nonIterableSpread() {
			throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
		})();
	}

	function useLastViewed_arrayLikeToArray(arr, len) {
		(len == null || len > arr.length) && (len = arr.length); for (var i = 0, arr2 = new Array(len); i < len; i++) {
			arr2[i] = arr[i];
		}

		return arr2;
	}

	function useLastViewed_typeof(obj) {
		return (useLastViewed_typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function _typeof(obj) {
			return typeof obj;
		} : function _typeof(obj) {
			return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
		})(obj);
	}

	let save = debounce_default()((value => store2_default.a.set('lastViewedStoryIds', value)), 1e3); function Sidebar_extends() {
		return (Sidebar_extends = Object.assign || function (target) {
			for (let i = 1; i < arguments.length; i++) {
				let source = arguments[i]; for (let key in source) {
					Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
				}
			}

			return target;
		}).apply(this, arguments);
	}

	function Sidebar_slicedToArray(arr, i) {
		return (function Sidebar_arrayWithHoles(arr) {
			if (Array.isArray(arr)) {
				return arr;
			}
		})(arr) || (function Sidebar_iterableToArrayLimit(arr, i) {
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
		})(arr, i) || (function Sidebar_unsupportedIterableToArray(o, minLen) {
			if (!o) {
				return;
			}

			if (typeof o === 'string') {
				return Sidebar_arrayLikeToArray(o, minLen);
			}

			let n = Object.prototype.toString.call(o).slice(8, -1); n === 'Object' && o.constructor && (n = o.constructor.name); if (n === 'Map' || n === 'Set') {
				return Array.from(o);
			}

			if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
				return Sidebar_arrayLikeToArray(o, minLen);
			}
		})(arr, i) || (function Sidebar_nonIterableRest() {
			throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
		})();
	}

	function Sidebar_arrayLikeToArray(arr, len) {
		(len == null || len > arr.length) && (len = arr.length); for (var i = 0, arr2 = new Array(len); i < len; i++) {
			arr2[i] = arr[i];
		}

		return arr2;
	}

	let Sidebar_DOCS_MODE = window_default.a.DOCS_MODE; let Sidebar_Container = dist_esm.styled.nav({position: 'absolute', zIndex: 1, left: 0, top: 0, bottom: 0, right: 0, width: '100%', height: '100%'}); let StyledSpaced = Object(dist_esm.styled)(Spaced_Spaced)({paddingBottom: '2.5rem'}); let CustomScrollArea = Object(dist_esm.styled)(ScrollArea.a)({'&&&&& .os-scrollbar-handle:before': {left: -12}, '&&&&& .os-scrollbar-vertical': {right: 5}, padding: 20}); let Swap = react_default.a.memo((_ref => {
		let {children} = _ref; let {condition} = _ref; let _React$Children$toArr2 = Sidebar_slicedToArray(react_default.a.Children.toArray(children), 2); let a = _React$Children$toArr2[0]; let
			b = _React$Children$toArr2[1]; return react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement('div', {style: {display: condition ? 'block' : 'none'}}, a), react_default.a.createElement('div', {style: {display: condition ? 'none' : 'block'}}, b));
	})); let Sidebar_useCombination = function useCombination(stories, ready, error, refs) {
		let hash = Object(react.useMemo)((() => Object.assign((function Sidebar_defineProperty(obj, key, value) {
			return key in obj ? Object.defineProperty(obj, key, {value, enumerable: !0, configurable: !0, writable: !0}) : obj[key] = value, obj;
		})({}, DEFAULT_REF_ID, {stories, title: null, id: DEFAULT_REF_ID, url: 'iframe.html', ready, error}), refs)), [refs, stories]); return Object(react.useMemo)((() => ({hash, entries: Object.entries(hash)})), [hash]);
	};

	let Sidebar_Sidebar = react_default.a.memo((_ref2 => {
		let _ref2$storyId = _ref2.storyId; let storyId = void 0 === _ref2$storyId ? null : _ref2$storyId; let _ref2$refId = _ref2.refId; let refId = void 0 === _ref2$refId ? DEFAULT_REF_ID : _ref2$refId; let storiesHash = _ref2.stories; let {storiesConfigured} = _ref2; let {storiesFailed} = _ref2; let {menu} = _ref2; let _ref2$menuHighlighted = _ref2.menuHighlighted; let menuHighlighted = void 0 !== _ref2$menuHighlighted && _ref2$menuHighlighted; let _ref2$enableShortcuts = _ref2.enableShortcuts; let enableShortcuts = void 0 === _ref2$enableShortcuts || _ref2$enableShortcuts; let _ref2$refs = _ref2.refs; let refs = void 0 === _ref2$refs ? {} : _ref2$refs; let selected = Object(react.useMemo)((() => storyId && {storyId, refId}), [storyId, refId]); let stories = Object(react.useMemo)((() => (Sidebar_DOCS_MODE ? collapseAllStories : collapseDocsOnlyStories)(storiesHash)), [Sidebar_DOCS_MODE, storiesHash]); let dataset = Sidebar_useCombination(stories, storiesConfigured, storiesFailed, refs); let isLoading = !dataset.hash[DEFAULT_REF_ID].ready; let lastViewedProps = (function useLastViewed(selection) {
			let initialLastViewedStoryIds = Object(react.useMemo)((() => {
				let items = store2_default.a.get('lastViewedStoryIds'); return items && Array.isArray(items) && items.some((item => useLastViewed_typeof(item) === 'object' && item.storyId && item.refId)) ? items : [];
			}), [store2_default.a]); let lastViewedRef = Object(react.useRef)(initialLastViewedStoryIds); let updateLastViewed = Object(react.useCallback)((story => {
				let items = lastViewedRef.current; let index = items.findIndex((_ref => {
					let {storyId} = _ref; let
						{refId} = _ref; return storyId === story.storyId && refId === story.refId;
				})); index !== 0 && (lastViewedRef.current = index === -1 ? [story].concat(useLastViewed_toConsumableArray(items)) : [story].concat(useLastViewed_toConsumableArray(items.slice(0, index)), useLastViewed_toConsumableArray(items.slice(index + 1))), save(lastViewedRef.current));
			}), [lastViewedRef]); return Object(react.useEffect)((() => {
				selection && updateLastViewed(selection);
			}), [selection]), {getLastViewed: Object(react.useCallback)((() => lastViewedRef.current), [lastViewedRef]), clearLastViewed: Object(react.useCallback)((() => {
				lastViewedRef.current = lastViewedRef.current.slice(0, 1), save(lastViewedRef.current);
			}), [lastViewedRef])};
		})(selected); return react_default.a.createElement(Sidebar_Container, {className: 'container sidebar-container'}, react_default.a.createElement(CustomScrollArea, {vertical: !0}, react_default.a.createElement(StyledSpaced, {row: 1.6}, react_default.a.createElement(Heading_Heading, {className: 'sidebar-header', menuHighlighted, menu}), react_default.a.createElement(Search, {dataset, isLoading, enableShortcuts, ...lastViewedProps}, (_ref3 => {
			let {query} = _ref3; let {results} = _ref3; let {isBrowsing} = _ref3; let {closeMenu} = _ref3; let {getMenuProps} = _ref3; let {getItemProps} = _ref3; let
				{highlightedIndex} = _ref3; return react_default.a.createElement(Swap, {condition: isBrowsing}, react_default.a.createElement(Explorer, {dataset, selected, isLoading, isBrowsing}), react_default.a.createElement(SearchResults, {query, results, closeMenu, getMenuProps, getItemProps, highlightedIndex, enableShortcuts, isLoading}));
		})))));
	})); let BadgeWrapper = dist_esm.styled.div((_ref => ({display: 'inline-block', fontSize: 11, lineHeight: '12px', alignSelf: 'center', padding: '4px 12px', borderRadius: '3em', fontWeight: _ref.theme.typography.weight.bold})), {svg: {height: 12, width: 12, marginRight: 4, marginTop: -2, path: {fill: 'currentColor'}}}, (_ref2 => {
		let {theme} = _ref2; switch (_ref2.status) {
			case 'critical': return {color: theme.color.critical, background: theme.background.critical}; case 'negative': return {color: theme.color.negative, background: theme.background.negative}; case 'warning': return {color: theme.color.warning, background: theme.background.warning}; case 'neutral': return {color: theme.color.dark, background: theme.color.mediumlight}; case 'positive': return {color: theme.color.positive, background: theme.background.positive}; default: return {};
		}
	})); let Badge_Badge = function Badge(_ref3) {
		let props = {..._ref3}; return react_default.a.createElement(BadgeWrapper, props);
	};

	Badge_Badge.displayName = 'Badge'; let lib_shortcut = __webpack_require__(162); function menu_toConsumableArray(arr) {
		return (function menu_arrayWithoutHoles(arr) {
			if (Array.isArray(arr)) {
				return menu_arrayLikeToArray(arr);
			}
		})(arr) || (function menu_iterableToArray(iter) {
			if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(iter)) {
				return Array.from(iter);
			}
		})(arr) || menu_unsupportedIterableToArray(arr) || (function menu_nonIterableSpread() {
			throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
		})();
	}

	function menu_slicedToArray(arr, i) {
		return (function menu_arrayWithHoles(arr) {
			if (Array.isArray(arr)) {
				return arr;
			}
		})(arr) || (function menu_iterableToArrayLimit(arr, i) {
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
		})(arr, i) || menu_unsupportedIterableToArray(arr, i) || (function menu_nonIterableRest() {
			throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
		})();
	}

	function menu_unsupportedIterableToArray(o, minLen) {
		if (o) {
			if (typeof o === 'string') {
				return menu_arrayLikeToArray(o, minLen);
			}

			let n = Object.prototype.toString.call(o).slice(8, -1); return n === 'Object' && o.constructor && (n = o.constructor.name), n === 'Map' || n === 'Set' ? Array.from(o) : n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? menu_arrayLikeToArray(o, minLen) : void 0;
		}
	}

	function menu_arrayLikeToArray(arr, len) {
		(len == null || len > arr.length) && (len = arr.length); for (var i = 0, arr2 = new Array(len); i < len; i++) {
			arr2[i] = arr[i];
		}

		return arr2;
	}

	let _templateObject; let focusableUIElements_storySearchField = 'storybook-explorer-searchfield'; let Key = dist_esm.styled.code((_ref => ({width: 16, height: 16, lineHeight: '17px', textAlign: 'center', fontSize: '11px', background: 'rgba(0,0,0,0.07)', color: _ref.theme.color.defaultText, borderRadius: 2, userSelect: 'none', pointerEvents: 'none', '& + &': {marginLeft: 2}}))); let menu_Shortcut = function Shortcut(_ref2) {
		let {keys} = _ref2; return react_default.a.createElement(react_default.a.Fragment, null, keys.map(((key, index) => react_default.a.createElement(Key, {key: index}, Object(lib_shortcut.c)([key])))));
	};

	let menu_useMenu = function useMenu(api, isToolshown, isFullscreen, showPanel, showNav, enableShortcuts) {
		let theme = Object(emotion_theming_browser_esm.b)(); let shortcutKeys = api.getShortcutKeys(); let about = Object(react.useMemo)((() => ({id: 'about', title: 'About your Storybook', onClick: function onClick() {
			return api.navigateToSettingsPage('/settings/about');
		}, right: api.versionUpdateAvailable() && react_default.a.createElement(Badge_Badge, {status: 'positive'}, 'Update'), left: react_default.a.createElement(Menu_MenuItemIcon, null)})), [api, enableShortcuts, shortcutKeys]); let releaseNotes = Object(react.useMemo)((() => ({id: 'release-notes', title: 'Release notes', onClick: function onClick() {
			return api.navigateToSettingsPage('/settings/release-notes');
		}, left: react_default.a.createElement(Menu_MenuItemIcon, null)})), [api, enableShortcuts, shortcutKeys]); let shortcuts = Object(react.useMemo)((() => ({id: 'shortcuts', title: 'Keyboard shortcuts', onClick: function onClick() {
			return api.navigateToSettingsPage('/settings/shortcuts');
		}, right: enableShortcuts ? react_default.a.createElement(menu_Shortcut, {keys: shortcutKeys.shortcutsPage}) : null, left: react_default.a.createElement(Menu_MenuItemIcon, null), style: {borderBottom: '4px solid '.concat(theme.appBorderColor)}})), [api, enableShortcuts, shortcutKeys]); let sidebarToggle = Object(react.useMemo)((() => ({id: 'S', title: 'Show sidebar', onClick: function onClick() {
			return api.toggleNav();
		}, right: enableShortcuts ? react_default.a.createElement(menu_Shortcut, {keys: shortcutKeys.toggleNav}) : null, left: showNav ? react_default.a.createElement(Menu_MenuItemIcon, {icon: 'check'}) : react_default.a.createElement(Menu_MenuItemIcon, null)})), [api, enableShortcuts, shortcutKeys, showNav]); let toolbarToogle = Object(react.useMemo)((() => ({id: 'T', title: 'Show toolbar', onClick: function onClick() {
			return api.toggleToolbar();
		}, right: enableShortcuts ? react_default.a.createElement(menu_Shortcut, {keys: shortcutKeys.toolbar}) : null, left: isToolshown ? react_default.a.createElement(Menu_MenuItemIcon, {icon: 'check'}) : react_default.a.createElement(Menu_MenuItemIcon, null)})), [api, enableShortcuts, shortcutKeys, isToolshown]); let addonsToggle = Object(react.useMemo)((() => ({id: 'A', title: 'Show addons', onClick: function onClick() {
			return api.togglePanel();
		}, right: enableShortcuts ? react_default.a.createElement(menu_Shortcut, {keys: shortcutKeys.togglePanel}) : null, left: showPanel ? react_default.a.createElement(Menu_MenuItemIcon, {icon: 'check'}) : react_default.a.createElement(Menu_MenuItemIcon, null)})), [api, enableShortcuts, shortcutKeys, showPanel]); let addonsOrientationToggle = Object(react.useMemo)((() => ({id: 'D', title: 'Change addons orientation', onClick: function onClick() {
			return api.togglePanelPosition();
		}, right: enableShortcuts ? react_default.a.createElement(menu_Shortcut, {keys: shortcutKeys.panelPosition}) : null, left: react_default.a.createElement(Menu_MenuItemIcon, null)})), [api, enableShortcuts, shortcutKeys]); let fullscreenToggle = Object(react.useMemo)((() => ({id: 'F', title: 'Go full screen', onClick: function onClick() {
			return api.toggleFullscreen();
		}, right: enableShortcuts ? react_default.a.createElement(menu_Shortcut, {keys: shortcutKeys.fullScreen}) : null, left: isFullscreen ? 'check' : react_default.a.createElement(Menu_MenuItemIcon, null)})), [api, enableShortcuts, shortcutKeys, isFullscreen]); let searchToggle = Object(react.useMemo)((() => ({id: '/', title: 'Search', onClick: function onClick() {
			return api.focusOnUIElement(focusableUIElements_storySearchField);
		}, right: enableShortcuts ? react_default.a.createElement(menu_Shortcut, {keys: shortcutKeys.search}) : null, left: react_default.a.createElement(Menu_MenuItemIcon, null)})), [api, enableShortcuts, shortcutKeys]); let up = Object(react.useMemo)((() => ({id: 'up', title: 'Previous component', onClick: function onClick() {
			return api.jumpToComponent(-1);
		}, right: enableShortcuts ? react_default.a.createElement(menu_Shortcut, {keys: shortcutKeys.prevComponent}) : null, left: react_default.a.createElement(Menu_MenuItemIcon, null)})), [api, enableShortcuts, shortcutKeys]); let down = Object(react.useMemo)((() => ({id: 'down', title: 'Next component', onClick: function onClick() {
			return api.jumpToComponent(1);
		}, right: enableShortcuts ? react_default.a.createElement(menu_Shortcut, {keys: shortcutKeys.nextComponent}) : null, left: react_default.a.createElement(Menu_MenuItemIcon, null)})), [api, enableShortcuts, shortcutKeys]); let prev = Object(react.useMemo)((() => ({id: 'prev', title: 'Previous story', onClick: function onClick() {
			return api.jumpToStory(-1);
		}, right: enableShortcuts ? react_default.a.createElement(menu_Shortcut, {keys: shortcutKeys.prevStory}) : null, left: react_default.a.createElement(Menu_MenuItemIcon, null)})), [api, enableShortcuts, shortcutKeys]); let next = Object(react.useMemo)((() => ({id: 'next', title: 'Next story', onClick: function onClick() {
			return api.jumpToStory(1);
		}, right: enableShortcuts ? react_default.a.createElement(menu_Shortcut, {keys: shortcutKeys.nextStory}) : null, left: react_default.a.createElement(Menu_MenuItemIcon, null)})), [api, enableShortcuts, shortcutKeys]); let collapse = Object(react.useMemo)((() => ({id: 'collapse', title: 'Collapse all', onClick: function onClick() {
			return api.collapseAll();
		}, right: enableShortcuts ? react_default.a.createElement(menu_Shortcut, {keys: shortcutKeys.collapseAll}) : null, left: react_default.a.createElement(Menu_MenuItemIcon, null)})), [api, enableShortcuts, shortcutKeys]); return Object(react.useMemo)((() => [about].concat(menu_toConsumableArray(api.releaseNotesVersion() ? [releaseNotes] : []), [shortcuts, sidebarToggle, toolbarToogle, addonsToggle, addonsOrientationToggle, fullscreenToggle, searchToggle, up, down, prev, next, collapse], menu_toConsumableArray((function getAddonsShortcuts() {
			let addonsShortcuts = api.getAddonsShortcuts(); let keys = shortcutKeys; return Object.entries(addonsShortcuts).filter((_ref3 => {
				let _ref4 = menu_slicedToArray(_ref3, 2); return _ref4[0], _ref4[1].showInMenu;
			})).map((_ref5 => {
				let _ref6 = menu_slicedToArray(_ref5, 2); let actionName = _ref6[0]; let _ref6$ = _ref6[1]; let {label} = _ref6$; let {action} = _ref6$; return {id: actionName, title: label, onClick: function onClick() {
					return action();
				}, right: enableShortcuts ? react_default.a.createElement(menu_Shortcut, {keys: keys[actionName]}) : null, left: react_default.a.createElement(Menu_MenuItemIcon, null)};
			}));
		})()))), [about].concat(menu_toConsumableArray(api.releaseNotesVersion() ? [releaseNotes] : []), [shortcuts, sidebarToggle, toolbarToogle, addonsToggle, addonsOrientationToggle, fullscreenToggle, searchToggle, up, down, prev, next, collapse]));
	};

	let sidebar = react_default.a.memo((() => react_default.a.createElement(esm.b, {filter: function mapper(_ref) {
		let {state} = _ref; let {api} = _ref; let _state$ui = state.ui; let {name} = _state$ui; let {url} = _state$ui; let {enableShortcuts} = _state$ui; let {viewMode} = state; let {storyId} = state; let {refId} = state; let _state$layout = state.layout; let {isToolshown} = _state$layout; let {isFullscreen} = _state$layout; let {showPanel} = _state$layout; let {showNav} = _state$layout; let {storiesHash} = state; let
			{storiesConfigured} = state; return {title: name, url, stories: storiesHash, storiesFailed: state.storiesFailed, storiesConfigured, refs: state.refs, storyId, refId, viewMode, menu: menu_useMenu(api, isToolshown, isFullscreen, showPanel, showNav, enableShortcuts), menuHighlighted: api.versionUpdateAvailable(), enableShortcuts};
	}}, (fromState => react_default.a.createElement(Sidebar_Sidebar, fromState))))); let types = __webpack_require__(429); let addons_dist_esm = __webpack_require__(119); __webpack_require__(50); let Loader_templateObject; let rotate360 = Object(core_browser_esm.d)(_templateObject || (_templateObject = (function _taggedTemplateLiteral(strings, raw) {
		return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, {raw: {value: Object.freeze(raw)}}));
	})(['\n\tfrom {\n\t\ttransform: rotate(0deg);\n\t}\n\tto {\n\t\ttransform: rotate(360deg);\n\t}\n']))); function Loader_slicedToArray(arr, i) {
		return (function Loader_arrayWithHoles(arr) {
			if (Array.isArray(arr)) {
				return arr;
			}
		})(arr) || (function Loader_iterableToArrayLimit(arr, i) {
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
		})(arr, i) || (function Loader_unsupportedIterableToArray(o, minLen) {
			if (!o) {
				return;
			}

			if (typeof o === 'string') {
				return Loader_arrayLikeToArray(o, minLen);
			}

			let n = Object.prototype.toString.call(o).slice(8, -1); n === 'Object' && o.constructor && (n = o.constructor.name); if (n === 'Map' || n === 'Set') {
				return Array.from(o);
			}

			if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
				return Loader_arrayLikeToArray(o, minLen);
			}
		})(arr, i) || (function Loader_nonIterableRest() {
			throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
		})();
	}

	function Loader_arrayLikeToArray(arr, len) {
		(len == null || len > arr.length) && (len = arr.length); for (var i = 0, arr2 = new Array(len); i < len; i++) {
			arr2[i] = arr[i];
		}

		return arr2;
	}

	function Loader_extends() {
		return (Loader_extends = Object.assign || function (target) {
			for (let i = 1; i < arguments.length; i++) {
				let source = arguments[i]; for (let key in source) {
					Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
				}
			}

			return target;
		}).apply(this, arguments);
	}

	function Loader_objectWithoutProperties(source, excluded) {
		if (source == null) {
			return {};
		}

		let key; let i; let target = (function Loader_objectWithoutPropertiesLoose(source, excluded) {
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

	let {EventSource} = window_default.a; let {CONFIG_TYPE} = window_default.a; let LoaderWrapper = dist_esm.styled.div((_ref => {
		let _ref$size = _ref.size; let size = void 0 === _ref$size ? 32 : _ref$size; return {borderRadius: '50%', cursor: 'progress', display: 'inline-block', overflow: 'hidden', position: 'absolute', transition: 'all 200ms ease-out', verticalAlign: 'top', top: '50%', left: '50%', marginTop: -size / 2, marginLeft: -size / 2, height: size, width: size, zIndex: 4, borderWidth: 2, borderStyle: 'solid', borderColor: 'rgba(97, 97, 97, 0.29)', borderTopColor: 'rgb(100,100,100)', animation: ''.concat(rotate360, ' 0.7s linear infinite'), mixBlendMode: 'difference'};
	})); let ProgressWrapper = dist_esm.styled.div({position: 'absolute', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%'}); let ProgressTrack = dist_esm.styled.div((_ref2 => {
		let {theme} = _ref2; return {position: 'relative', width: '80%', marginBottom: '0.75rem', maxWidth: 300, height: 5, borderRadius: 5, background: Object(polished_esm.e)(0.8, theme.color.secondary), overflow: 'hidden', cursor: 'progress'};
	})); let ProgressBar = dist_esm.styled.div((_ref3 => ({position: 'absolute', top: 0, left: 0, height: '100%', background: _ref3.theme.color.secondary}))); let ProgressMessage = dist_esm.styled.div((_ref4 => {
		let {theme} = _ref4; return {minHeight: '2em', fontSize: ''.concat(theme.typography.size.s1, 'px'), color: theme.barTextColor};
	})); let ErrorIcon = Object(dist_esm.styled)(icon_icon.a)((_ref5 => ({width: 20, height: 20, marginBottom: '0.5rem', color: _ref5.theme.color.mediumdark}))); let ellipsis = Object(core_browser_esm.d)(Loader_templateObject || (Loader_templateObject = (function Loader_taggedTemplateLiteral(strings, raw) {
		return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, {raw: {value: Object.freeze(raw)}}));
	})(['\n  from { content: "..." }\n  33% { content: "." }\n  66% { content: ".." }\n  to { content: "..." }\n']))); let Ellipsis = dist_esm.styled.span({'&::after': {content: '\'...\'', animation: ''.concat(ellipsis, ' 1s linear infinite'), animationDelay: '1s', display: 'inline-block', width: '1em', height: 'auto'}}); let
		Loader_PureLoader = function PureLoader(_ref6) {
			let {progress} = _ref6; let {error} = _ref6; let {size} = _ref6; let
				props = Loader_objectWithoutProperties(_ref6, ['progress', 'error', 'size']); if (error) {
				return react_default.a.createElement(ProgressWrapper, {'aria-label': error.toString(), 'aria-live': 'polite', role: 'status', ...props}, react_default.a.createElement(ErrorIcon, {icon: 'lightningoff'}), react_default.a.createElement(ProgressMessage, null, error.message));
			}

			if (progress) {
				let {value} = progress; let {modules} = progress; let
					{message} = progress; return modules && (message += ' '.concat(modules.complete, ' / ').concat(modules.total, ' modules')), react_default.a.createElement(ProgressWrapper, {'aria-label': 'Content is loading...', 'aria-live': 'polite', 'aria-valuemin': 0, 'aria-valuemax': 100, 'aria-valuenow': 100 * value, 'aria-valuetext': message, role: 'progressbar', ...props}, react_default.a.createElement(ProgressTrack, null, react_default.a.createElement(ProgressBar, {style: {width: ''.concat(100 * value, '%')}})), react_default.a.createElement(ProgressMessage, null, message, value < 1 && react_default.a.createElement(Ellipsis, {key: message})));
			}

			return react_default.a.createElement(LoaderWrapper, {'aria-label': 'Content is loading...', 'aria-live': 'polite', role: 'status', size, ...props});
		};

	Loader_PureLoader.displayName = 'PureLoader'; let Loader_Loader_Loader = function Loader(props) {
		let _useState2 = Loader_slicedToArray(Object(react.useState)(void 0), 2); let progress = _useState2[0]; let setProgress = _useState2[1]; let _useState4 = Loader_slicedToArray(Object(react.useState)(void 0), 2); let error = _useState4[0]; let setError = _useState4[1]; return Object(react.useEffect)((() => {
			if (CONFIG_TYPE === 'DEVELOPMENT' && EventSource) {
				let lastProgress; let eventSource = new EventSource('/progress'); return eventSource.onmessage = function (event) {
					try {
						lastProgress = JSON.parse(event.data), setProgress(lastProgress);
					} catch (e) {
						setError(e), eventSource.close();
					}
				}, eventSource.onerror = function () {
					lastProgress && lastProgress.value !== 1 && setError(new Error('Connection closed')), eventSource.close();
				}, function () {
					return eventSource.close();
				};
			}
		}), []), react_default.a.createElement(Loader_PureLoader, {progress, error, ...props});
	};

	Loader_Loader_Loader.displayName = 'Loader'; let FrameWrap = dist_esm.styled.div((_ref => {
		let {offset} = _ref; return {position: 'absolute', overflow: 'auto', left: 0, right: 0, bottom: 0, top: offset, zIndex: 3, transition: 'all 0.1s linear', height: 'calc(100% - '.concat(offset, 'px)'), background: 'transparent'};
	})); let UnstyledLink = Object(dist_esm.styled)(router.a)({color: 'inherit', textDecoration: 'inherit', display: 'inline-block'}); let DesktopOnly = dist_esm.styled.span({'@media (max-width: 599px)': {display: 'none'}}); let IframeWrapper = dist_esm.styled.div((_ref2 => ({position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, width: '100%', height: '100%', background: _ref2.theme.background.content}))); let components_LoaderWrapper = dist_esm.styled.div((_ref3 => ({position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, background: _ref3.theme.background.content, zIndex: 1}))); let separator = __webpack_require__(868); function zoom_typeof(obj) {
		return (zoom_typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function _typeof(obj) {
			return typeof obj;
		} : function _typeof(obj) {
			return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
		})(obj);
	}

	function zoom_classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError('Cannot call a class as a function');
		}
	}

	function zoom_defineProperties(target, props) {
		for (let i = 0; i < props.length; i++) {
			let descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 'value' in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
		}
	}

	function zoom_setPrototypeOf(o, p) {
		return (zoom_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
			return o.__proto__ = p, o;
		})(o, p);
	}

	function zoom_createSuper(Derived) {
		let hasNativeReflectConstruct = (function zoom_isNativeReflectConstruct() {
			if (typeof Reflect === 'undefined' || !Reflect.construct) {
				return !1;
			}

			if (Reflect.construct.sham) {
				return !1;
			}

			if (typeof Proxy === 'function') {
				return !0;
			}

			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (() => {}))), !0;
			} catch (e) {
				return !1;
			}
		})(); return function _createSuperInternal() {
			let result; let Super = zoom_getPrototypeOf(Derived); if (hasNativeReflectConstruct) {
				let NewTarget = zoom_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget);
			} else {
				result = Super.apply(this, arguments);
			}

			return zoom_possibleConstructorReturn(this, result);
		};
	}

	function zoom_possibleConstructorReturn(self, call) {
		return !call || zoom_typeof(call) !== 'object' && typeof call !== 'function' ? (function zoom_assertThisInitialized(self) {
			if (void 0 === self) {
				throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
			}

			return self;
		})(self) : call;
	}

	function zoom_getPrototypeOf(o) {
		return (zoom_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
			return o.__proto__ || Object.getPrototypeOf(o);
		})(o);
	}

	let Context = react_default.a.createContext({value: 1, set: function set(v) {}}); let zoom_ZoomProvider = (function (_Component) {
		!(function zoom_inherits(subClass, superClass) {
			if (typeof superClass !== 'function' && superClass !== null) {
				throw new TypeError('Super expression must either be null or a function');
			}

			subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {value: subClass, writable: !0, configurable: !0}}), superClass && zoom_setPrototypeOf(subClass, superClass);
		})(ZoomProvider, _Component);

		let _super = zoom_createSuper(ZoomProvider); function ZoomProvider() {
			let _this; zoom_classCallCheck(this, ZoomProvider); for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return (_this = _super.call.apply(_super, [this].concat(args))).state = {value: 1}, _this.set = function (value) {
				return _this.setState({value});
			}, _this;
		}

		return (function zoom_createClass(Constructor, protoProps, staticProps) {
			return protoProps && zoom_defineProperties(Constructor.prototype, protoProps), staticProps && zoom_defineProperties(Constructor, staticProps), Constructor;
		})(ZoomProvider, [{key: 'render', value: function render() {
			let _this$props = this.props; let {children} = _this$props; let {shouldScale} = _this$props; let {set} = this; let {value} = this.state; return react_default.a.createElement(Context.Provider, {value: {value: shouldScale ? value : 1, set}}, children);
		}}]), ZoomProvider;
	})(react.Component); zoom_ZoomProvider.displayName = 'ZoomProvider'; let ZoomConsumer = Context.Consumer; let Zoom = react_default.a.memo((_ref => {
		let {zoomIn} = _ref; let {zoomOut} = _ref; let
			{reset} = _ref; return react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement(bar_button.a, {key: 'zoomin', onClick: zoomIn, title: 'Zoom in'}, react_default.a.createElement(icon_icon.a, {icon: 'zoom'})), react_default.a.createElement(bar_button.a, {key: 'zoomout', onClick: zoomOut, title: 'Zoom out'}, react_default.a.createElement(icon_icon.a, {icon: 'zoomout'})), react_default.a.createElement(bar_button.a, {key: 'zoomreset', onClick: reset, title: 'Reset zoom'}, react_default.a.createElement(icon_icon.a, {icon: 'zoomreset'})));
	})); let ZoomWrapper = react_default.a.memo((_ref2 => {
		let {set} = _ref2; let {value} = _ref2; let zoomIn = Object(react.useCallback)((e => {
			e.preventDefault(), set(0.8 * value);
		}), [set, value]); let zoomOut = Object(react.useCallback)((e => {
			e.preventDefault(), set(1.25 * value);
		}), [set, value]); let
			reset = Object(react.useCallback)((e => {
				e.preventDefault(), set(1);
			}), [set, 1]); return react_default.a.createElement(Zoom, {key: 'zoom', zoomIn, zoomOut, reset});
	})); let zoomTool = {title: 'zoom', id: 'zoom', match: function match(_ref3) {
		return _ref3.viewMode === 'story';
	}, render: react_default.a.memo((() => react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement(ZoomConsumer, null, (_ref4 => {
		let {set} = _ref4; let
			{value} = _ref4; return react_default.a.createElement(ZoomWrapper, {set, value});
	})), react_default.a.createElement(separator.a, null))))}; let wrappers_ApplyWrappers = (__webpack_require__(810), function ApplyWrappers(_ref) {
		let {wrappers} = _ref; let {id} = _ref; let {storyId} = _ref; let {active} = _ref; let
			{children} = _ref; return react_default.a.createElement(react.Fragment, null, wrappers.reduceRight(((acc, wrapper, index) => wrapper.render({index, children: acc, id, storyId, active})), children));
	}); wrappers_ApplyWrappers.displayName = 'ApplyWrappers'; let defaultWrappers = [{render: function render(p) {
		return react_default.a.createElement(IframeWrapper, {id: 'storybook-preview-wrapper', hidden: !p.active}, p.children);
	}}]; function bar_slicedToArray(arr, i) {
		return (function bar_arrayWithHoles(arr) {
			if (Array.isArray(arr)) {
				return arr;
			}
		})(arr) || (function bar_iterableToArrayLimit(arr, i) {
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
		})(arr, i) || (function bar_unsupportedIterableToArray(o, minLen) {
			if (!o) {
				return;
			}

			if (typeof o === 'string') {
				return bar_arrayLikeToArray(o, minLen);
			}

			let n = Object.prototype.toString.call(o).slice(8, -1); n === 'Object' && o.constructor && (n = o.constructor.name); if (n === 'Map' || n === 'Set') {
				return Array.from(o);
			}

			if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
				return bar_arrayLikeToArray(o, minLen);
			}
		})(arr, i) || (function bar_nonIterableRest() {
			throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
		})();
	}

	function bar_arrayLikeToArray(arr, len) {
		(len == null || len > arr.length) && (len = arr.length); for (var i = 0, arr2 = new Array(len); i < len; i++) {
			arr2[i] = arr[i];
		}

		return arr2;
	}

	function bar_objectWithoutProperties(source, excluded) {
		if (source == null) {
			return {};
		}

		let key; let i; let target = (function bar_objectWithoutPropertiesLoose(source, excluded) {
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

	let Side = dist_esm.styled.div({display: 'flex', whiteSpace: 'nowrap', flexBasis: 'auto', flexShrink: 0}, (_ref => _ref.left ? {'& > *': {marginLeft: 15}} : {}), (_ref2 => _ref2.right ? {marginLeft: 30, '& > *': {marginRight: 15}} : {})); Side.displayName = 'Side'; let bar_Bar = Object(dist_esm.styled)((_ref3 => {
		let {children} = _ref3; let
			{className} = _ref3; return react_default.a.createElement(ScrollArea.a, {horizontal: !0, vertical: !1, className}, children);
	}))((_ref4 => ({color: _ref4.theme.barTextColor, width: '100%', height: 40, flexShrink: 0, overflow: 'auto', overflowY: 'hidden'})), (_ref5 => {
		let {theme} = _ref5; return _ref5.border ? {boxShadow: ''.concat(theme.appBorderColor, '  0 -1px 0 0 inset'), background: theme.barBg} : {};
	})); bar_Bar.displayName = 'Bar'; let BarInner = dist_esm.styled.div((_ref6 => ({display: 'flex', justifyContent: 'space-between', position: 'relative', flexWrap: 'nowrap', flexShrink: 0, height: 40, backgroundColor: _ref6.bgColor || ''}))); let bar_FlexBar = function FlexBar(_ref7) {
		let {children} = _ref7; let {backgroundColor} = _ref7; let rest = bar_objectWithoutProperties(_ref7, ['children', 'backgroundColor']); let _Children$toArray2 = bar_slicedToArray(react.Children.toArray(children), 2); let left = _Children$toArray2[0]; let
			right = _Children$toArray2[1]; return react_default.a.createElement(bar_Bar, rest, react_default.a.createElement(BarInner, {bgColor: backgroundColor}, react_default.a.createElement(Side, {left: !0}, left), right ? react_default.a.createElement(Side, {right: !0}, right) : null));
	};

	bar_FlexBar.displayName = 'FlexBar', bar_FlexBar.displayName = 'FlexBar'; let dist = __webpack_require__(66); function placeholder_slicedToArray(arr, i) {
		return (function placeholder_arrayWithHoles(arr) {
			if (Array.isArray(arr)) {
				return arr;
			}
		})(arr) || (function placeholder_iterableToArrayLimit(arr, i) {
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
		})(arr, i) || (function placeholder_unsupportedIterableToArray(o, minLen) {
			if (!o) {
				return;
			}

			if (typeof o === 'string') {
				return placeholder_arrayLikeToArray(o, minLen);
			}

			let n = Object.prototype.toString.call(o).slice(8, -1); n === 'Object' && o.constructor && (n = o.constructor.name); if (n === 'Map' || n === 'Set') {
				return Array.from(o);
			}

			if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
				return placeholder_arrayLikeToArray(o, minLen);
			}
		})(arr, i) || (function placeholder_nonIterableRest() {
			throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
		})();
	}

	function placeholder_arrayLikeToArray(arr, len) {
		(len == null || len > arr.length) && (len = arr.length); for (var i = 0, arr2 = new Array(len); i < len; i++) {
			arr2[i] = arr[i];
		}

		return arr2;
	}

	function placeholder_objectWithoutProperties(source, excluded) {
		if (source == null) {
			return {};
		}

		let key; let i; let target = (function placeholder_objectWithoutPropertiesLoose(source, excluded) {
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

	let Title = dist_esm.styled.div((_ref => ({fontWeight: _ref.theme.typography.weight.bold}))); let Desc = dist_esm.styled.div(); let placeholder_Message = dist_esm.styled.div((_ref2 => {
		let {theme} = _ref2; return {padding: 30, textAlign: 'center', color: theme.color.defaultText, fontSize: theme.typography.size.s2 - 1};
	})); let placeholder_Placeholder = function Placeholder(_ref3) {
		let {children} = _ref3; let props = placeholder_objectWithoutProperties(_ref3, ['children']); let _Children$toArray2 = placeholder_slicedToArray(react.Children.toArray(children), 2); let title = _Children$toArray2[0]; let
			desc = _Children$toArray2[1]; return react_default.a.createElement(placeholder_Message, props, react_default.a.createElement(Title, null, title), desc && react_default.a.createElement(Desc, null, desc));
	};

	function tabs_typeof(obj) {
		return (tabs_typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function _typeof(obj) {
			return typeof obj;
		} : function _typeof(obj) {
			return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
		})(obj);
	}

	function tabs_defineProperties(target, props) {
		for (let i = 0; i < props.length; i++) {
			let descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 'value' in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
		}
	}

	function tabs_setPrototypeOf(o, p) {
		return (tabs_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
			return o.__proto__ = p, o;
		})(o, p);
	}

	function tabs_createSuper(Derived) {
		let hasNativeReflectConstruct = (function tabs_isNativeReflectConstruct() {
			if (typeof Reflect === 'undefined' || !Reflect.construct) {
				return !1;
			}

			if (Reflect.construct.sham) {
				return !1;
			}

			if (typeof Proxy === 'function') {
				return !0;
			}

			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (() => {}))), !0;
			} catch (e) {
				return !1;
			}
		})(); return function _createSuperInternal() {
			let result; let Super = tabs_getPrototypeOf(Derived); if (hasNativeReflectConstruct) {
				let NewTarget = tabs_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget);
			} else {
				result = Super.apply(this, arguments);
			}

			return tabs_possibleConstructorReturn(this, result);
		};
	}

	function tabs_possibleConstructorReturn(self, call) {
		return !call || tabs_typeof(call) !== 'object' && typeof call !== 'function' ? (function tabs_assertThisInitialized(self) {
			if (void 0 === self) {
				throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
			}

			return self;
		})(self) : call;
	}

	function tabs_getPrototypeOf(o) {
		return (tabs_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
			return o.__proto__ || Object.getPrototypeOf(o);
		})(o);
	}

	placeholder_Placeholder.displayName = 'Placeholder'; let tabs_Wrapper = dist_esm.styled.div((_ref => {
		let {theme} = _ref; return _ref.bordered ? {backgroundClip: 'padding-box', border: '1px solid '.concat(theme.appBorderColor), borderRadius: theme.appBorderRadius, overflow: 'hidden', boxSizing: 'border-box'} : {};
	}), (_ref2 => _ref2.absolute ? {width: '100%', height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column'} : {display: 'block'})); let TabBar = dist_esm.styled.div({overflow: 'hidden', '&:first-of-type': {marginLeft: 0}}); let tabs_Content = dist_esm.styled.div({display: 'block', position: 'relative'}, (_ref3 => {
		let {theme} = _ref3; return {fontSize: theme.typography.size.s2 - 1, background: theme.background.content};
	}), (_ref4 => {
		let {bordered} = _ref4; let
			{theme} = _ref4; return bordered ? {borderRadius: '0 0 '.concat(theme.appBorderRadius - 1, 'px ').concat(theme.appBorderRadius - 1, 'px')} : {};
	}), (_ref5 => {
		let {absolute} = _ref5; let
			{bordered} = _ref5; return absolute ? (function tabs_defineProperty(obj, key, value) {
			return key in obj ? Object.defineProperty(obj, key, {value, enumerable: !0, configurable: !0, writable: !0}) : obj[key] = value, obj;
		})({height: 'calc(100% - '.concat(bordered ? 42 : 40, 'px)'), position: 'absolute', left: 0 + (bordered ? 1 : 0), right: 0 + (bordered ? 1 : 0), bottom: 0 + (bordered ? 1 : 0), top: 40 + (bordered ? 1 : 0), overflow: 'auto'}, '& > *:first-child'.concat('/* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */'), {position: 'absolute', left: 0 + (bordered ? 1 : 0), right: 0 + (bordered ? 1 : 0), bottom: 0 + (bordered ? 1 : 0), top: 0 + (bordered ? 1 : 0), height: 'calc(100% - '.concat(bordered ? 2 : 0, 'px)'), overflow: 'auto'}) : {};
	})); let VisuallyHidden = dist_esm.styled.div((_ref7 => _ref7.active ? {display: 'block'} : {display: 'none'})); let Tabs = Object(react.memo)((_ref11 => {
		let {children} = _ref11; let {selected} = _ref11; let {actions} = _ref11; let {absolute} = _ref11; let {bordered} = _ref11; let {tools} = _ref11; let {backgroundColor} = _ref11; let htmlId = _ref11.id; let
			list = (function childrenToList(children, selected) {
				return react.Children.toArray(children).map(((_ref9, index) => {
					let _ref9$props = _ref9.props; let {title} = _ref9$props; let {id} = _ref9$props; let {color} = _ref9$props; let childrenOfChild = _ref9$props.children; let content = Array.isArray(childrenOfChild) ? childrenOfChild[0] : childrenOfChild; return {active: selected ? id === selected : index === 0, title, id, color, render: typeof content === 'function' ? content : function (_ref10) {
						let {active} = _ref10; let
							{key} = _ref10; return react_default.a.createElement(VisuallyHidden, {key, active, role: 'tabpanel'}, content);
					}};
				}));
			})(children, selected); return list.length ? react_default.a.createElement(tabs_Wrapper, {absolute, bordered, id: htmlId}, react_default.a.createElement(bar_FlexBar, {border: !0, backgroundColor}, react_default.a.createElement(TabBar, {role: 'tablist'}, list.map((_ref12 => {
			let {title} = _ref12; let {id} = _ref12; let {active} = _ref12; let {color} = _ref12; let
				tabTitle = typeof title === 'function' ? title() : title; return react_default.a.createElement(bar_button.b, {id: 'tabbutton-'.concat(Object(dist.sanitize)(tabTitle)), className: 'tabbutton '.concat(active ? 'tabbutton-active' : ''), type: 'button', key: id, active, textColor: color, onClick: function onClick(e) {
				e.preventDefault(), actions.onSelect(id);
			}, role: 'tab'}, tabTitle);
		}))), tools ? react_default.a.createElement(react.Fragment, null, tools) : null), react_default.a.createElement(tabs_Content, {id: 'panel-tab-content', bordered, absolute}, list.map((_ref13 => {
			let {id} = _ref13; let
				{active} = _ref13; return (0, _ref13.render)({key: id, active});
		})))) : react_default.a.createElement(placeholder_Placeholder, null, react_default.a.createElement(react.Fragment, {key: 'title'}, 'Nothing found'));
	})); Tabs.displayName = 'Tabs', Tabs.defaultProps = {id: null, children: null, tools: null, selected: null, absolute: !1, bordered: !1}; let tabs_TabsState = (function (_Component) {
		!(function tabs_inherits(subClass, superClass) {
			if (typeof superClass !== 'function' && superClass !== null) {
				throw new TypeError('Super expression must either be null or a function');
			}

			subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {value: subClass, writable: !0, configurable: !0}}), superClass && tabs_setPrototypeOf(subClass, superClass);
		})(TabsState, _Component);

		let _super = tabs_createSuper(TabsState); function TabsState(props) {
			let _this; return (function tabs_classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError('Cannot call a class as a function');
				}
			})(this, TabsState), (_this = _super.call(this, props)).handlers = {onSelect: function onSelect(id) {
				return _this.setState({selected: id});
			}}, _this.state = {selected: props.initial}, _this;
		}

		return (function tabs_createClass(Constructor, protoProps, staticProps) {
			return protoProps && tabs_defineProperties(Constructor.prototype, protoProps), staticProps && tabs_defineProperties(Constructor, staticProps), Constructor;
		})(TabsState, [{key: 'render', value: function render() {
			let _this$props = this.props; let _this$props$bordered = _this$props.bordered; let bordered = void 0 !== _this$props$bordered && _this$props$bordered; let _this$props$absolute = _this$props.absolute; let absolute = void 0 !== _this$props$absolute && _this$props$absolute; let {children} = _this$props; let {backgroundColor} = _this$props; let {selected} = this.state; return react_default.a.createElement(Tabs, {bordered, absolute, selected, backgroundColor, actions: this.handlers}, children);
		}}]), TabsState;
	})(react.Component); tabs_TabsState.displayName = 'TabsState', tabs_TabsState.defaultProps = {children: [], initial: null, absolute: !1, bordered: !1, backgroundColor: ''}; let copy_to_clipboard = __webpack_require__(441); let copy_to_clipboard_default = __webpack_require__.n(copy_to_clipboard); let lib = __webpack_require__(107); let lib_default = __webpack_require__.n(lib); let stringifyQueryParams_stringifyQueryParams = function stringifyQueryParams(queryParams) {
		return lib_default.a.stringify(queryParams, {addQueryPrefix: !0, encode: !1}).replace(/^\?/, '&');
	};

	let {PREVIEW_URL} = window_default.a; let copyMapper = function copyMapper(_ref) {
		let {state} = _ref; let {storyId} = state; let {refId} = state; let
			ref = state.refs[refId]; return {refId, baseUrl: ref ? ''.concat(ref.url, '/iframe.html') : PREVIEW_URL || 'iframe.html', storyId, queryParams: state.customQueryParams};
	};

	let copyTool = {title: 'copy', id: 'copy', match: function match(_ref2) {
		return _ref2.viewMode === 'story';
	}, render: function render() {
		return react_default.a.createElement(esm.b, {filter: copyMapper}, (_ref3 => {
			let {baseUrl} = _ref3; let {storyId} = _ref3; let
				{queryParams} = _ref3; return storyId ? react_default.a.createElement(bar_button.a, {key: 'copy', onClick: function onClick() {
				return copy_to_clipboard_default()(''.concat(baseUrl, '?id=').concat(storyId).concat(stringifyQueryParams_stringifyQueryParams(queryParams)));
			}, title: 'Copy canvas link'}, react_default.a.createElement(icon_icon.a, {icon: 'link'})) : null;
		}));
	}}; let eject_PREVIEW_URL = window_default.a.PREVIEW_URL; let ejectMapper = function ejectMapper(_ref) {
		let {state} = _ref; let {storyId} = state; let {refId} = state; let
			ref = state.refs[refId]; return {refId, baseUrl: ref ? ''.concat(ref.url, '/iframe.html') : eject_PREVIEW_URL || 'iframe.html', storyId, queryParams: state.customQueryParams};
	};

	let ejectTool = {title: 'eject', id: 'eject', match: function match(_ref2) {
		return _ref2.viewMode === 'story';
	}, render: function render() {
		return react_default.a.createElement(esm.b, {filter: ejectMapper}, (_ref3 => {
			let {baseUrl} = _ref3; let {storyId} = _ref3; let
				{queryParams} = _ref3; return storyId ? react_default.a.createElement(bar_button.a, {key: 'opener', href: ''.concat(baseUrl, '?id=').concat(storyId).concat(stringifyQueryParams_stringifyQueryParams(queryParams)), target: '_blank', title: 'Open canvas in new tab'}, react_default.a.createElement(icon_icon.a, {icon: 'sharealt'})) : null;
		}));
	}}; function toolbar_extends() {
		return (toolbar_extends = Object.assign || function (target) {
			for (let i = 1; i < arguments.length; i++) {
				let source = arguments[i]; for (let key in source) {
					Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
				}
			}

			return target;
		}).apply(this, arguments);
	}

	function toolbar_toConsumableArray(arr) {
		return (function toolbar_arrayWithoutHoles(arr) {
			if (Array.isArray(arr)) {
				return toolbar_arrayLikeToArray(arr);
			}
		})(arr) || (function toolbar_iterableToArray(iter) {
			if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(iter)) {
				return Array.from(iter);
			}
		})(arr) || (function toolbar_unsupportedIterableToArray(o, minLen) {
			if (!o) {
				return;
			}

			if (typeof o === 'string') {
				return toolbar_arrayLikeToArray(o, minLen);
			}

			let n = Object.prototype.toString.call(o).slice(8, -1); n === 'Object' && o.constructor && (n = o.constructor.name); if (n === 'Map' || n === 'Set') {
				return Array.from(o);
			}

			if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
				return toolbar_arrayLikeToArray(o, minLen);
			}
		})(arr) || (function toolbar_nonIterableSpread() {
			throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
		})();
	}

	function toolbar_arrayLikeToArray(arr, len) {
		(len == null || len > arr.length) && (len = arr.length); for (var i = 0, arr2 = new Array(len); i < len; i++) {
			arr2[i] = arr[i];
		}

		return arr2;
	}

	function toolbar_objectWithoutProperties(source, excluded) {
		if (source == null) {
			return {};
		}

		let key; let i; let target = (function toolbar_objectWithoutPropertiesLoose(source, excluded) {
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

	let toolbar_Bar = function Bar(_ref) {
		_ref.shown; let props = toolbar_objectWithoutProperties(_ref, ['shown']); return react_default.a.createElement(bar_FlexBar, props);
	};

	toolbar_Bar.displayName = 'Bar'; let Toolbar = Object(dist_esm.styled)(toolbar_Bar)({position: 'absolute', left: 0, right: 0, top: 0, transition: 'transform .2s linear'}, (_ref2 => ({transform: _ref2.shown ? 'translateY(0px)' : 'translateY(-40px)'}))); let toolbar_fullScreenMapper = function fullScreenMapper(_ref3) {
		let {api} = _ref3; let
			{state} = _ref3; return {toggle: api.toggleFullscreen, value: state.layout.isFullscreen, shortcut: Object(lib_shortcut.c)(api.getShortcutKeys().fullScreen)};
	};

	let tabsMapper = function tabsMapper(_ref5) {
		let {state} = _ref5; return {viewMode: state.docsOnly, storyId: state.storyId, path: state.path, location: state.location, refId: state.refId};
	};

	let toolbar_createTabsTool = function createTabsTool(tabs) {
		return {title: 'title', id: 'title', render: function render() {
			return react_default.a.createElement(esm.b, {filter: tabsMapper}, (rp => react_default.a.createElement(react.Fragment, null, react_default.a.createElement(TabBar, {key: 'tabs'}, tabs.filter((p => !p.hidden)).map(((t, index) => {
				let to = t.route(rp); let isActive = rp.path === to; return react_default.a.createElement(UnstyledLink, {key: t.id || 'l'.concat(index), to}, react_default.a.createElement(bar_button.b, {disabled: t.disabled, active: isActive}, t.title));
			}))), react_default.a.createElement(separator.a, null))));
		}};
	};

	let defaultTools = [zoomTool]; let defaultToolsExtra = [{title: 'fullscreen', id: 'fullscreen', match: function match(p) {
		return ['story', 'docs'].includes(p.viewMode);
	}, render: function render() {
		return react_default.a.createElement(esm.b, {filter: toolbar_fullScreenMapper}, (_ref4 => {
			let {toggle} = _ref4; let {value} = _ref4; let
				{shortcut} = _ref4; return react_default.a.createElement(DesktopOnly, null, react_default.a.createElement(bar_button.a, {key: 'full', onClick: toggle, title: ''.concat(value ? 'Exit full screen' : 'Go full screen', ' [').concat(shortcut, ']')}, react_default.a.createElement(icon_icon.a, {icon: value ? 'close' : 'expand'})));
		}));
	}}, ejectTool, copyTool]; let toolbar_useTools = function useTools(getElements, tabs, viewMode, story, location, path) {
		let toolsFromConfig = Object(react.useMemo)((() => (function getTools(getFn) {
			return Object.values(getFn(types.a.TOOL));
		})(getElements)), [getElements]); let toolsExtraFromConfig = Object(react.useMemo)((() => (function getToolsExtra(getFn) {
			return Object.values(getFn(types.a.TOOLEXTRA));
		})(getElements)), [getElements]); let tools = Object(react.useMemo)((() => [].concat(defaultTools, toolbar_toConsumableArray(toolsFromConfig))), [defaultTools, toolsFromConfig]); let toolsExtra = Object(react.useMemo)((() => [].concat(defaultToolsExtra, toolbar_toConsumableArray(toolsExtraFromConfig))), [defaultToolsExtra, toolsExtraFromConfig]); return Object(react.useMemo)((() => story && story.parameters ? (function filterTools(tools, toolsExtra, tabs, _ref10) {
			let {viewMode} = _ref10; let {story} = _ref10; let {location} = _ref10; let {path} = _ref10; let toolsLeft = [tabs.filter((p => !p.hidden)).length >= 1 && toolbar_createTabsTool(tabs)].concat(toolbar_toConsumableArray(tools)); let toolsRight = toolbar_toConsumableArray(toolsExtra); let filter = function filter(item) {
				return item && (!item.match || item.match({storyId: story.id, refId: story.refId, viewMode, location, path})) && !(function toolbarItemHasBeenExcluded(item, story) {
					let _toolbarItems$item$id; let toolbarItemsFromStoryParameters = 'toolbar' in story.parameters ? story.parameters.toolbar : void 0; let toolbarItemsFromAddonsConfig = addons_dist_esm.a.getConfig().toolbar; let toolbarItems = Object(esm.h)(toolbarItemsFromAddonsConfig, toolbarItemsFromStoryParameters); return Boolean(toolbarItems) && !((_toolbarItems$item$id = toolbarItems[item.id]) === null || void 0 === _toolbarItems$item$id || !_toolbarItems$item$id.hidden);
				})(item, story);
			};

			let left = toolsLeft.filter(filter); let
				right = toolsRight.filter(filter); return {left, right};
		})(tools, toolsExtra, tabs, {viewMode, story, location, path}) : {left: tools, right: toolsExtra}), [viewMode, story, location, path, tools, toolsExtra, tabs]);
	};

	let ToolRes = react_default.a.memo((_ref6 => {
		let {api} = _ref6; let {story} = _ref6; let {tabs} = _ref6; let {isShown} = _ref6; let {location} = _ref6; let {path} = _ref6; let {viewMode} = _ref6; let _useTools = toolbar_useTools(api.getElements, tabs, viewMode, story, location, path); let {left} = _useTools; let
			{right} = _useTools; return left || right ? react_default.a.createElement(Toolbar, {key: 'toolbar', shown: isShown, border: !0}, react_default.a.createElement(Tools, {key: 'left', list: left}), react_default.a.createElement(Tools, {key: 'right', list: right})) : null;
	})); let ToolbarComp = react_default.a.memo((props => react_default.a.createElement(router.b, null, (_ref7 => {
		let {location} = _ref7; let {path} = _ref7; let
			{viewMode} = _ref7; return react_default.a.createElement(ToolRes, {...props, location, path, viewMode});
	})))); var Tools = react_default.a.memo((_ref8 => {
		let {list} = _ref8; return react_default.a.createElement(react_default.a.Fragment, null, list.filter(Boolean).map(((_ref9, index) => {
			let Render = _ref9.render; let {id} = _ref9; let t = toolbar_objectWithoutProperties(_ref9, ['render', 'id']); return react_default.a.createElement(Render, {key: id || t.key || 'f-'.concat(index)});
		})));
	})); let browserSupportsCssZoom_globalWindow = window_default.a.window; function browserSupportsCssZoom() {
		try {
			return void 0 !== browserSupportsCssZoom_globalWindow.document.implementation.createHTMLDocument('').body.style.zoom;
		} catch (error) {
			return !1;
		}
	}

	function ZoomElement_slicedToArray(arr, i) {
		return (function ZoomElement_arrayWithHoles(arr) {
			if (Array.isArray(arr)) {
				return arr;
			}
		})(arr) || (function ZoomElement_iterableToArrayLimit(arr, i) {
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
		})(arr, i) || (function ZoomElement_unsupportedIterableToArray(o, minLen) {
			if (!o) {
				return;
			}

			if (typeof o === 'string') {
				return ZoomElement_arrayLikeToArray(o, minLen);
			}

			let n = Object.prototype.toString.call(o).slice(8, -1); n === 'Object' && o.constructor && (n = o.constructor.name); if (n === 'Map' || n === 'Set') {
				return Array.from(o);
			}

			if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
				return ZoomElement_arrayLikeToArray(o, minLen);
			}
		})(arr, i) || (function ZoomElement_nonIterableRest() {
			throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
		})();
	}

	function ZoomElement_arrayLikeToArray(arr, len) {
		(len == null || len > arr.length) && (len = arr.length); for (var i = 0, arr2 = new Array(len); i < len; i++) {
			arr2[i] = arr[i];
		}

		return arr2;
	}

	let ZoomElementWrapper = dist_esm.styled.div((_ref => {
		let _ref$scale = _ref.scale; let scale = void 0 === _ref$scale ? 1 : _ref$scale; let {height} = _ref; return browserSupportsCssZoom() ? {'> *': {zoom: 1 / scale}} : {height: height + 50, transformOrigin: 'top left', transform: 'scale('.concat(1 / scale, ')')};
	})); function ZoomElement(_ref2) {
		let {scale} = _ref2; let {children} = _ref2; let componentWrapperRef = react_default.a.useRef(null); let _useState2 = ZoomElement_slicedToArray(Object(react.useState)(0), 2); let height = _useState2[0]; let
			setHeight = _useState2[1]; return Object(react.useEffect)((() => {
			componentWrapperRef.current && setHeight(componentWrapperRef.current.getBoundingClientRect().height);
		}), [scale, componentWrapperRef.current]), react_default.a.createElement(ZoomElementWrapper, {scale, height}, react_default.a.createElement('div', {ref: componentWrapperRef, className: 'innerZoomElementWrapper'}, children));
	}

	function ZoomIFrame_typeof(obj) {
		return (ZoomIFrame_typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function _typeof(obj) {
			return typeof obj;
		} : function _typeof(obj) {
			return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
		})(obj);
	}

	function ZoomIFrame_classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError('Cannot call a class as a function');
		}
	}

	function ZoomIFrame_defineProperties(target, props) {
		for (let i = 0; i < props.length; i++) {
			let descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 'value' in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
		}
	}

	function ZoomIFrame_setPrototypeOf(o, p) {
		return (ZoomIFrame_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
			return o.__proto__ = p, o;
		})(o, p);
	}

	function ZoomIFrame_createSuper(Derived) {
		let hasNativeReflectConstruct = (function ZoomIFrame_isNativeReflectConstruct() {
			if (typeof Reflect === 'undefined' || !Reflect.construct) {
				return !1;
			}

			if (Reflect.construct.sham) {
				return !1;
			}

			if (typeof Proxy === 'function') {
				return !0;
			}

			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (() => {}))), !0;
			} catch (e) {
				return !1;
			}
		})(); return function _createSuperInternal() {
			let result; let Super = ZoomIFrame_getPrototypeOf(Derived); if (hasNativeReflectConstruct) {
				let NewTarget = ZoomIFrame_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget);
			} else {
				result = Super.apply(this, arguments);
			}

			return ZoomIFrame_possibleConstructorReturn(this, result);
		};
	}

	function ZoomIFrame_possibleConstructorReturn(self, call) {
		return !call || ZoomIFrame_typeof(call) !== 'object' && typeof call !== 'function' ? (function ZoomIFrame_assertThisInitialized(self) {
			if (void 0 === self) {
				throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
			}

			return self;
		})(self) : call;
	}

	function ZoomIFrame_getPrototypeOf(o) {
		return (ZoomIFrame_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
			return o.__proto__ || Object.getPrototypeOf(o);
		})(o);
	}

	ZoomElement.displayName = 'ZoomElement'; let ZoomIFrame_ZoomIFrame = (function (_Component) {
		!(function ZoomIFrame_inherits(subClass, superClass) {
			if (typeof superClass !== 'function' && superClass !== null) {
				throw new TypeError('Super expression must either be null or a function');
			}

			subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {value: subClass, writable: !0, configurable: !0}}), superClass && ZoomIFrame_setPrototypeOf(subClass, superClass);
		})(ZoomIFrame, _Component);

		let _super = ZoomIFrame_createSuper(ZoomIFrame); function ZoomIFrame() {
			let _this; ZoomIFrame_classCallCheck(this, ZoomIFrame); for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return (_this = _super.call.apply(_super, [this].concat(args))).iframe = null, _this;
		}

		return (function ZoomIFrame_createClass(Constructor, protoProps, staticProps) {
			return protoProps && ZoomIFrame_defineProperties(Constructor.prototype, protoProps), staticProps && ZoomIFrame_defineProperties(Constructor, staticProps), Constructor;
		})(ZoomIFrame, [{key: 'componentDidMount', value: function componentDidMount() {
			let {iFrameRef} = this.props; this.iframe = iFrameRef.current;
		}}, {key: 'shouldComponentUpdate', value: function shouldComponentUpdate(nextProps) {
			let _this$props = this.props; let {scale} = _this$props; let {active} = _this$props; return scale !== nextProps.scale && this.setIframeInnerZoom(nextProps.scale), active !== nextProps.active && this.iframe.setAttribute('data-is-storybook', nextProps.active ? 'true' : 'false'), !1;
		}}, {key: 'setIframeInnerZoom', value: function setIframeInnerZoom(scale) {
			try {
				browserSupportsCssZoom() ? Object.assign(this.iframe.contentDocument.body.style, {zoom: 1 / scale}) : Object.assign(this.iframe.contentDocument.body.style, {width: ''.concat(100 * scale, '%'), height: ''.concat(100 * scale, '%'), transform: 'scale('.concat(1 / scale, ')'), transformOrigin: 'top left'});
			} catch (e) {
				this.setIframeZoom(scale);
			}
		}}, {key: 'setIframeZoom', value: function setIframeZoom(scale) {
			Object.assign(this.iframe.style, {width: ''.concat(100 * scale, '%'), height: ''.concat(100 * scale, '%'), transform: 'scale('.concat(1 / scale, ')'), transformOrigin: 'top left'});
		}}, {key: 'render', value: function render() {
			return this.props.children;
		}}]), ZoomIFrame;
	})(react.Component); ZoomIFrame_ZoomIFrame.displayName = 'ZoomIFrame'; window_default.a.window; let Zoom_Zoom = {Element: ZoomElement, IFrame: ZoomIFrame_ZoomIFrame}; function iframe_extends() {
		return (iframe_extends = Object.assign || function (target) {
			for (let i = 1; i < arguments.length; i++) {
				let source = arguments[i]; for (let key in source) {
					Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
				}
			}

			return target;
		}).apply(this, arguments);
	}

	function iframe_objectWithoutProperties(source, excluded) {
		if (source == null) {
			return {};
		}

		let key; let i; let target = (function iframe_objectWithoutPropertiesLoose(source, excluded) {
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

	let StyledIframe = dist_esm.styled.iframe({position: 'absolute', display: 'block', boxSizing: 'content-box', height: '100%', width: '100%', border: '0 none', transition: 'all .3s, background-position 0s, visibility 0s', backgroundPosition: '-1px -1px, -1px -1px, -1px -1px, -1px -1px'}); function IFrame(props) {
		let {active} = props; let {id} = props; let {title} = props; let {src} = props; let {allowFullScreen} = props; let {scale} = props; let rest = iframe_objectWithoutProperties(props, ['active', 'id', 'title', 'src', 'allowFullScreen', 'scale']); let
			iFrameRef = react_default.a.useRef(null); return react_default.a.createElement(Zoom_Zoom.IFrame, {scale, active, iFrameRef}, react_default.a.createElement(StyledIframe, {'data-is-storybook': active ? 'true' : 'false', onLoad: function onLoad(e) {
			return e.currentTarget.setAttribute('data-is-loaded', 'true');
		}, id, title, src, allowFullScreen, ref: iFrameRef, ...rest}));
	}

	function FramesRenderer_slicedToArray(arr, i) {
		return (function FramesRenderer_arrayWithHoles(arr) {
			if (Array.isArray(arr)) {
				return arr;
			}
		})(arr) || (function FramesRenderer_iterableToArrayLimit(arr, i) {
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
		})(arr, i) || (function FramesRenderer_unsupportedIterableToArray(o, minLen) {
			if (!o) {
				return;
			}

			if (typeof o === 'string') {
				return FramesRenderer_arrayLikeToArray(o, minLen);
			}

			let n = Object.prototype.toString.call(o).slice(8, -1); n === 'Object' && o.constructor && (n = o.constructor.name); if (n === 'Map' || n === 'Set') {
				return Array.from(o);
			}

			if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
				return FramesRenderer_arrayLikeToArray(o, minLen);
			}
		})(arr, i) || (function FramesRenderer_nonIterableRest() {
			throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
		})();
	}

	function FramesRenderer_arrayLikeToArray(arr, len) {
		(len == null || len > arr.length) && (len = arr.length); for (var i = 0, arr2 = new Array(len); i < len; i++) {
			arr2[i] = arr[i];
		}

		return arr2;
	}

	IFrame.displayName = 'IFrame'; let FramesRenderer_FramesRenderer = function FramesRenderer(_ref) {
		let _refs$refId; let {refs} = _ref; let {story} = _ref; let {scale} = _ref; let _ref$viewMode = _ref.viewMode; let viewMode = void 0 === _ref$viewMode ? 'story' : _ref$viewMode; let {refId} = _ref; let _ref$queryParams = _ref.queryParams; let queryParams = void 0 === _ref$queryParams ? {} : _ref$queryParams; let {baseUrl} = _ref; let _ref$storyId = _ref.storyId; let storyId = void 0 === _ref$storyId ? '*' : _ref$storyId; let version = (_refs$refId = refs[refId]) === null || void 0 === _refs$refId ? void 0 : _refs$refId.version; let stringifiedQueryParams = stringifyQueryParams_stringifyQueryParams({...queryParams, ...version && {version}}); let active = (function getActive(refId) {
			return refId ? 'storybook-ref-'.concat(refId) : 'storybook-preview-iframe';
		})(refId); let styles = Object(react.useMemo)((() => ({'[data-is-storybook="false"]': {visibility: 'hidden'}, '[data-is-storybook="true"]': {visibility: 'visible'}})), []); let _useState2 = FramesRenderer_slicedToArray(Object(react.useState)({'storybook-preview-iframe': ''.concat(baseUrl, '?id=').concat(storyId, '&viewMode=').concat(viewMode).concat(stringifiedQueryParams)}), 2); let frames = _useState2[0]; let setFrames = _useState2[1]; return Object(react.useEffect)((() => {
			let newFrames = Object.values(refs).filter((r => !r.error && (r.type === 'auto-inject' || !(!story || r.id !== story.refId)))).reduce(((acc, r) => ({...acc, ...(function FramesRenderer_defineProperty(obj, key, value) {
				return key in obj ? Object.defineProperty(obj, key, {value, enumerable: !0, configurable: !0, writable: !0}) : obj[key] = value, obj;
			})({}, 'storybook-ref-'.concat(r.id), ''.concat(r.url, '/iframe.html?id=').concat(storyId, '&viewMode=').concat(viewMode, '&refId=').concat(r.id).concat(stringifiedQueryParams))})), frames); setFrames(newFrames);
		}), [storyId, story, refs]), react_default.a.createElement(react.Fragment, null, react_default.a.createElement(core_browser_esm.a, {styles}), Object.entries(frames).map((_ref2 => {
			let _ref3 = FramesRenderer_slicedToArray(_ref2, 2); let id = _ref3[0]; let src = _ref3[1]; return react_default.a.createElement(react.Fragment, {key: id}, react_default.a.createElement(IFrame, {active: id === active, key: refs[id] ? refs[id].url : id, id, title: id, src, allowFullScreen: !0, scale}));
		})));
	};

	function preview_objectWithoutProperties(source, excluded) {
		if (source == null) {
			return {};
		}

		let key; let i; let target = (function preview_objectWithoutPropertiesLoose(source, excluded) {
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

	function preview_toConsumableArray(arr) {
		return (function preview_arrayWithoutHoles(arr) {
			if (Array.isArray(arr)) {
				return preview_arrayLikeToArray(arr);
			}
		})(arr) || (function preview_iterableToArray(iter) {
			if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(iter)) {
				return Array.from(iter);
			}
		})(arr) || (function preview_unsupportedIterableToArray(o, minLen) {
			if (!o) {
				return;
			}

			if (typeof o === 'string') {
				return preview_arrayLikeToArray(o, minLen);
			}

			let n = Object.prototype.toString.call(o).slice(8, -1); n === 'Object' && o.constructor && (n = o.constructor.name); if (n === 'Map' || n === 'Set') {
				return Array.from(o);
			}

			if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
				return preview_arrayLikeToArray(o, minLen);
			}
		})(arr) || (function preview_nonIterableSpread() {
			throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
		})();
	}

	function preview_arrayLikeToArray(arr, len) {
		(len == null || len > arr.length) && (len = arr.length); for (var i = 0, arr2 = new Array(len); i < len; i++) {
			arr2[i] = arr[i];
		}

		return arr2;
	}

	FramesRenderer_FramesRenderer.displayName = 'FramesRenderer'; let preview_getWrappers = function getWrappers(getFn) {
		return Object.values(getFn(types.a.PREVIEW));
	};

	let canvasMapper = function canvasMapper(_ref) {
		let {state} = _ref; let
			{api} = _ref; return {storyId: state.storyId, refId: state.refId, viewMode: state.viewMode, customCanvas: api.renderPreview, queryParams: state.customQueryParams, getElements: api.getElements, story: api.getData(state.storyId, state.refId), storiesConfigured: state.storiesConfigured, storiesFailed: state.storiesFailed, refs: state.refs, active: !(!state.viewMode || !state.viewMode.match(/^(story|docs)$/))};
	};

	let preview_useTabs = function useTabs(id, baseUrl, withLoader, getElements, story) {
		let canvas = Object(react.useMemo)((() => (function createCanvas(id) {
			let baseUrl = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'iframe.html'; let withLoader = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]; return {id: 'canvas', title: 'Canvas', route: function route(_ref2) {
				let {storyId} = _ref2; let
					{refId} = _ref2; return refId ? '/story/'.concat(refId, '_').concat(storyId) : '/story/'.concat(storyId);
			}, match: function match(_ref3) {
				let {viewMode} = _ref3; return !(!viewMode || !viewMode.match(/^(story|docs)$/));
			}, render: function render() {
				return react_default.a.createElement(esm.b, {filter: canvasMapper}, (_ref4 => {
					let {story} = _ref4; let {refs} = _ref4; let {customCanvas} = _ref4; let {storyId} = _ref4; let {refId} = _ref4; let {viewMode} = _ref4; let {queryParams} = _ref4; let {getElements} = _ref4; let {storiesConfigured} = _ref4; let {storiesFailed} = _ref4; let {active} = _ref4; let wrappers = Object(react.useMemo)((() => [].concat(preview_toConsumableArray(defaultWrappers), preview_toConsumableArray(preview_getWrappers(getElements)))), [getElements].concat(preview_toConsumableArray(defaultWrappers))); let
						isLoading = story ? Boolean(refs[refId]) && !refs[refId].ready : !storiesFailed && !storiesConfigured; return react_default.a.createElement(ZoomConsumer, null, (_ref5 => {
						let scale = _ref5.value; return react_default.a.createElement(react_default.a.Fragment, null, withLoader && isLoading && react_default.a.createElement(components_LoaderWrapper, null, react_default.a.createElement(Loader_Loader_Loader, {id: 'preview-loader', role: 'progressbar'})), react_default.a.createElement(wrappers_ApplyWrappers, {id, storyId, viewMode, active, wrappers}, customCanvas ? customCanvas(storyId, viewMode, id, baseUrl, scale, queryParams) : react_default.a.createElement(FramesRenderer_FramesRenderer, {baseUrl, refs, scale, story, viewMode, refId, queryParams, storyId})));
					}));
				}));
			}};
		})(id, baseUrl, withLoader)), [id, baseUrl, withLoader]); let tabsFromConfig = Object(react.useMemo)((() => (function getTabs(getFn) {
			return Object.values(getFn(types.a.TAB));
		})(getElements)), [getElements]); return Object(react.useMemo)((() => story != null && story.parameters ? (function filterTabs(panels, parameters) {
			let {previewTabs} = addons_dist_esm.a.getConfig(); let
				parametersTabs = parameters ? parameters.previewTabs : void 0; if (previewTabs || parametersTabs) {
				let tabs = Object(esm.h)(previewTabs, parametersTabs); let arrTabs = Object.keys(tabs).map(((key, index) => ({index, ...(typeof tabs[key] === 'string' ? {title: tabs[key]} : tabs[key]), id: key}))); return panels.filter((panel => {
					let t = arrTabs.find((tab => tab.id === panel.id)); return void 0 === t || t.id === 'canvas' || !t.hidden;
				})).map(((panel, index) => ({...panel, index}))).sort(((p1, p2) => {
					let tab_1 = arrTabs.find((tab => tab.id === p1.id)); let index_1 = tab_1 ? tab_1.index : arrTabs.length + p1.index; let tab_2 = arrTabs.find((tab => tab.id === p2.id)); return index_1 - (tab_2 ? tab_2.index : arrTabs.length + p2.index);
				})).map((panel => {
					let t = arrTabs.find((tab => tab.id === panel.id)); return t ? ({...panel, title: t.title || panel.title, disabled: t.disabled, hidden: t.hidden}) : panel;
				}));
			}

			return panels;
		})([canvas].concat(preview_toConsumableArray(tabsFromConfig)), story.parameters) : [canvas].concat(preview_toConsumableArray(tabsFromConfig))), [story, canvas].concat(preview_toConsumableArray(tabsFromConfig)));
	};

	let preview_Preview = react_default.a.memo((props => {
		let {api} = props; let previewId = props.id; let {options} = props; let {viewMode} = props; let {storyId} = props; let _props$story = props.story; let story = void 0 === _props$story ? void 0 : _props$story; let {description} = props; let {baseUrl} = props; let _props$withLoader = props.withLoader; let withLoader = void 0 === _props$withLoader || _props$withLoader; let {getElements} = api; let tabs = preview_useTabs(previewId, baseUrl, withLoader, getElements, story); let shouldScale = viewMode === 'story'; let {isToolshown} = options; let previousStoryId = Object(react.useRef)(storyId); let
			previousViewMode = Object(react.useRef)(viewMode); return Object(react.useEffect)((() => {
			if (story && viewMode && (storyId !== previousStoryId.current || viewMode !== previousViewMode.current) && (previousStoryId.current = storyId, previousViewMode.current = viewMode, viewMode.match(/docs|story/))) {
				let {refId} = story; let
					{id} = story; api.emit(core_events_dist_esm.SET_CURRENT_STORY, {storyId: id, viewMode, options: {target: refId ? 'storybook-ref-'.concat(refId) : 'storybook-preview-iframe'}});
			}
		}), [story, viewMode]), react_default.a.createElement(react.Fragment, null, previewId === 'main' && react_default.a.createElement(index_module.a, {key: 'description'}, react_default.a.createElement('title', null, description)), react_default.a.createElement(zoom_ZoomProvider, {shouldScale}, react_default.a.createElement(ToolbarComp, {key: 'tools', story, api, isShown: isToolshown, tabs}), react_default.a.createElement(FrameWrap, {key: 'frame', offset: isToolshown ? 40 : 0}, tabs.map(((_ref6, i) => {
			let Render = _ref6.render; let {match} = _ref6; let t = preview_objectWithoutProperties(_ref6, ['render', 'match']); let key = t.id || t.key || i; return react_default.a.createElement(react.Fragment, {key}, react_default.a.createElement(router.b, null, (lp => react_default.a.createElement(Render, {active: match(lp)}))));
		})))));
	})); function preview_extends() {
		return (preview_extends = Object.assign || function (target) {
			for (let i = 1; i < arguments.length; i++) {
				let source = arguments[i]; for (let key in source) {
					Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
				}
			}

			return target;
		}).apply(this, arguments);
	}

	let preview_PREVIEW_URL = window_default.a.PREVIEW_URL; let preview_getDescription = function getDescription(item) {
		if (Object(esm.f)(item)) {
			return item.name ? ''.concat(item.name, ' ⋅ Storybook') : 'Storybook';
		}

		if (Object(esm.e)(item)) {
			return item.name ? ''.concat(item.name, ' ⋅ Storybook') : 'Storybook';
		}

		if (Object(esm.g)(item)) {
			let {kind} = item; let
				{name} = item; return kind && name ? (function splitTitleAddExtraSpace(input) {
				return input.split('/').join(' / ').replace(/\s\s/, ' ');
			})(''.concat(kind, ' - ').concat(name, ' ⋅ Storybook')) : 'Storybook';
		}

		return 'Storybook';
	};

	let preview_mapper = function mapper(_ref) {
		let {api} = _ref; let {state} = _ref; let {layout} = state; let {location} = state; let {customQueryParams} = state; let {storyId} = state; let {refs} = state; let {viewMode} = state; let {path} = state; let {refId} = state; let story = api.getData(storyId, refId); let
			docsOnly = !(!story || !story.parameters) && Boolean(story.parameters.docsOnly); return {api, story, options: layout, description: preview_getDescription(story), viewMode, path, refs, storyId, baseUrl: preview_PREVIEW_URL || 'iframe.html', queryParams: customQueryParams, docsOnly, location};
	};

	let preview = react_default.a.memo((props => react_default.a.createElement(esm.b, {filter: preview_mapper}, (fromState => react_default.a.createElement(preview_Preview, {...props, ...fromState}))))); function panel_typeof(obj) {
		return (panel_typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function _typeof(obj) {
			return typeof obj;
		} : function _typeof(obj) {
			return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
		})(obj);
	}

	function panel_slicedToArray(arr, i) {
		return (function panel_arrayWithHoles(arr) {
			if (Array.isArray(arr)) {
				return arr;
			}
		})(arr) || (function panel_iterableToArrayLimit(arr, i) {
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
		})(arr, i) || (function panel_unsupportedIterableToArray(o, minLen) {
			if (!o) {
				return;
			}

			if (typeof o === 'string') {
				return panel_arrayLikeToArray(o, minLen);
			}

			let n = Object.prototype.toString.call(o).slice(8, -1); n === 'Object' && o.constructor && (n = o.constructor.name); if (n === 'Map' || n === 'Set') {
				return Array.from(o);
			}

			if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
				return panel_arrayLikeToArray(o, minLen);
			}
		})(arr, i) || (function panel_nonIterableRest() {
			throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
		})();
	}

	function panel_arrayLikeToArray(arr, len) {
		(len == null || len > arr.length) && (len = arr.length); for (var i = 0, arr2 = new Array(len); i < len; i++) {
			arr2[i] = arr[i];
		}

		return arr2;
	}

	function panel_defineProperties(target, props) {
		for (let i = 0; i < props.length; i++) {
			let descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 'value' in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
		}
	}

	function panel_setPrototypeOf(o, p) {
		return (panel_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
			return o.__proto__ = p, o;
		})(o, p);
	}

	function panel_createSuper(Derived) {
		let hasNativeReflectConstruct = (function panel_isNativeReflectConstruct() {
			if (typeof Reflect === 'undefined' || !Reflect.construct) {
				return !1;
			}

			if (Reflect.construct.sham) {
				return !1;
			}

			if (typeof Proxy === 'function') {
				return !0;
			}

			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (() => {}))), !0;
			} catch (e) {
				return !1;
			}
		})(); return function _createSuperInternal() {
			let result; let Super = panel_getPrototypeOf(Derived); if (hasNativeReflectConstruct) {
				let NewTarget = panel_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget);
			} else {
				result = Super.apply(this, arguments);
			}

			return panel_possibleConstructorReturn(this, result);
		};
	}

	function panel_possibleConstructorReturn(self, call) {
		return !call || panel_typeof(call) !== 'object' && typeof call !== 'function' ? (function panel_assertThisInitialized(self) {
			if (void 0 === self) {
				throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
			}

			return self;
		})(self) : call;
	}

	function panel_getPrototypeOf(o) {
		return (panel_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
			return o.__proto__ || Object.getPrototypeOf(o);
		})(o);
	}

	let DesktopOnlyIconButton = Object(dist_esm.styled)(bar_button.a)({'@media (max-width: 599px)': {display: 'none'}}); let SafeTabContent = react_default.a.memo((_ref => _ref.children)); let panel_SafeTab = (function (_Component) {
		!(function panel_inherits(subClass, superClass) {
			if (typeof superClass !== 'function' && superClass !== null) {
				throw new TypeError('Super expression must either be null or a function');
			}

			subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {value: subClass, writable: !0, configurable: !0}}), superClass && panel_setPrototypeOf(subClass, superClass);
		})(SafeTab, _Component);

		let _super = panel_createSuper(SafeTab); function SafeTab(props) {
			let _this; return (function panel_classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError('Cannot call a class as a function');
				}
			})(this, SafeTab), (_this = _super.call(this, props)).state = {hasError: !1}, _this;
		}

		return (function panel_createClass(Constructor, protoProps, staticProps) {
			return protoProps && panel_defineProperties(Constructor.prototype, protoProps), staticProps && panel_defineProperties(Constructor, staticProps), Constructor;
		})(SafeTab, [{key: 'componentDidCatch', value: function componentDidCatch(error, info) {
			this.setState({hasError: !0}), console.error(error, info);
		}}, {key: 'render', value: function render() {
			let {hasError} = this.state; let _this$props = this.props; let {children} = _this$props; let {title} = _this$props; let
				{id} = _this$props; return hasError ? react_default.a.createElement('h1', null, 'Something went wrong.') : react_default.a.createElement(SafeTabContent, {id, title}, children);
		}}]), SafeTab;
	})(react.Component); panel_SafeTab.displayName = 'SafeTab'; let AddonPanel = react_default.a.memo((_ref2 => {
		let {panels} = _ref2; let {shortcuts} = _ref2; let {actions} = _ref2; let _ref2$selectedPanel = _ref2.selectedPanel; let selectedPanel = void 0 === _ref2$selectedPanel ? null : _ref2$selectedPanel; let _ref2$panelPosition = _ref2.panelPosition; let panelPosition = void 0 === _ref2$panelPosition ? 'right' : _ref2$panelPosition; let _ref2$absolute = _ref2.absolute; let
			absolute = void 0 === _ref2$absolute || _ref2$absolute; return react_default.a.createElement(Tabs, {absolute, selected: selectedPanel, actions, tools: react_default.a.createElement(react.Fragment, null, react_default.a.createElement(DesktopOnlyIconButton, {key: 'position', onClick: actions.togglePosition, title: 'Change addon orientation ['.concat(Object(lib_shortcut.c)(shortcuts.panelPosition), ']')}, react_default.a.createElement(icon_icon.a, {icon: panelPosition === 'bottom' ? 'sidebaralt' : 'bottombar'})), react_default.a.createElement(DesktopOnlyIconButton, {key: 'visibility', onClick: actions.toggleVisibility, title: 'Hide addons ['.concat(Object(lib_shortcut.c)(shortcuts.togglePanel), ']')}, react_default.a.createElement(icon_icon.a, {icon: 'close'}))), id: 'storybook-panel-root'}, Object.entries(panels).map((_ref3 => {
			let _ref4 = panel_slicedToArray(_ref3, 2); let k = _ref4[0]; let v = _ref4[1]; return react_default.a.createElement(panel_SafeTab, {key: k, id: k, title: v.title}, v.render);
		})));
	})); AddonPanel.displayName = 'AddonPanel'; let panel = AddonPanel; function panel_extends() {
		return (panel_extends = Object.assign || function (target) {
			for (let i = 1; i < arguments.length; i++) {
				let source = arguments[i]; for (let key in source) {
					Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
				}
			}

			return target;
		}).apply(this, arguments);
	}

	let createPanelActions = memoizerific_default()(1)((api => ({onSelect: function onSelect(panel) {
		return api.setSelectedPanel(panel);
	}, toggleVisibility: function toggleVisibility() {
		return api.togglePanel();
	}, togglePosition: function togglePosition() {
		return api.togglePanelPosition();
	}}))); let panel_mapper = function mapper(_ref) {
		let {state} = _ref; let
			{api} = _ref; return {panels: api.getStoryPanels(), selectedPanel: api.getSelectedPanel(), panelPosition: state.layout.panelPosition, actions: createPanelActions(api), shortcuts: api.getShortcutKeys()};
	};

	let panel_Panel = function Panel(props) {
		return react_default.a.createElement(esm.b, {filter: panel_mapper}, (customProps => react_default.a.createElement(panel, {...props, ...customProps})));
	};

	panel_Panel.displayName = 'Panel'; let containers_panel = panel_Panel; let Notification = (__webpack_require__(812), dist_esm.styled.div((_ref => {
		let {theme} = _ref; return {position: 'relative', display: 'flex', padding: 15, width: 280, borderRadius: 4, background: theme.base === 'light' ? 'rgba(50,53,71,0.97)' : 'linear-gradient(0deg, rgba(248,248,248,0.97) 0%, rgba(247,252,255,0.97) 100%)', boxShadow: '0 2px 5px 0 rgba(0,0,0,0.05), 0 5px 15px 0 rgba(0,0,0,0.1)', color: theme.color.inverseText, textDecoration: 'none'};
	}))); let NotificationLink = Object(dist_esm.styled)(Notification)((() => ({transition: 'all 150ms ease-out', transform: 'translate3d(0, 0, 0)', '&:hover': {transform: 'translate3d(0, -3px, 0)', boxShadow: '0 1px 3px 0 rgba(30,167,253,0.5), 0 2px 5px 0 rgba(0,0,0,0.05), 0 5px 15px 0 rgba(0,0,0,0.1)'}, '&:active': {transform: 'translate3d(0, 0, 0)', boxShadow: '0 1px 3px 0 rgba(30,167,253,0.5), 0 2px 5px 0 rgba(0,0,0,0.05), 0 5px 15px 0 rgba(0,0,0,0.1)'}, '&:focus': {boxShadow: '0 1px 3px 0 rgba(30,167,253,0.5), 0 2px 5px 0 rgba(0,0,0,0.05), 0 5px 15px 0 rgba(0,0,0,0.1)'}}))).withComponent(router.a, {target: 'e1poa7z40', label: 'NotificationLink'}); let NotificationIconWrapper = dist_esm.styled.div((() => ({display: 'flex', marginRight: 10, alignItems: 'center'}))); let NotificationTextWrapper = dist_esm.styled.div((() => ({width: '100%', display: 'flex', flexDirection: 'column'}))); let Headline = dist_esm.styled.div((_ref2 => {
		let {theme} = _ref2; return {height: '100%', width: _ref2.hasIcon ? 205 : 230, alignItems: 'center', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontSize: theme.typography.size.s1, lineHeight: '16px', fontWeight: theme.typography.weight.bold};
	})); let SubHeadline = dist_esm.styled.div((_ref3 => {
		let {theme} = _ref3; return {color: Object(polished_esm.e)(0.25, theme.color.inverseText), fontSize: theme.typography.size.s1 - 1, lineHeight: '14px', marginTop: 2};
	})); let NotificationItem_ItemContent = function ItemContent(_ref4) {
		let {icon} = _ref4; let _ref4$content = _ref4.content; let {headline} = _ref4$content; let
			{subHeadline} = _ref4$content; return react_default.a.createElement(react_default.a.Fragment, null, !icon || react_default.a.createElement(NotificationIconWrapper, null, react_default.a.createElement(icon_icon.a, {icon: icon.name, width: 16, color: icon.color || '#66BF3C'})), react_default.a.createElement(NotificationTextWrapper, null, react_default.a.createElement(Headline, {title: headline, hasIcon: Boolean(icon)}, headline), subHeadline && react_default.a.createElement(SubHeadline, null, subHeadline)));
	};

	let DismissButtonWrapper = Object(dist_esm.styled)(bar_button.a)((_ref5 => ({height: '100%', display: 'flex', color: _ref5.theme.base === 'light' ? 'rgba(255,255,255,0.7)' : ' #999999'}))); let NotificationItem_DismissNotificationItem = function DismissNotificationItem(_ref6) {
		let {onDismiss} = _ref6; return react_default.a.createElement('div', null, react_default.a.createElement(DismissButtonWrapper, {title: 'Dismiss notification', onClick: function onClick(e) {
			e.preventDefault(), onDismiss();
		}}, react_default.a.createElement(icon_icon.a, {icon: 'closeAlt', height: 12, width: 12})));
	};

	NotificationItem_DismissNotificationItem.displayName = 'DismissNotificationItem'; dist_esm.styled.div({height: 48}); let notifications_NotificationItem = function NotificationItem(_ref7) {
		let _ref7$notification = _ref7.notification; let {content} = _ref7$notification; let {link} = _ref7$notification; let {onClear} = _ref7$notification; let {id} = _ref7$notification; let {icon} = _ref7$notification; let {onDismissNotification} = _ref7; let dismissNotificationItem = function dismissNotificationItem() {
			onDismissNotification(id), onClear();
		};

		return link ? react_default.a.createElement(NotificationLink, {to: link}, react_default.a.createElement(NotificationItem_ItemContent, {icon, content}), react_default.a.createElement(NotificationItem_DismissNotificationItem, {onDismiss: dismissNotificationItem})) : react_default.a.createElement(Notification, null, react_default.a.createElement(NotificationItem_ItemContent, {icon, content}), react_default.a.createElement(NotificationItem_DismissNotificationItem, {onDismiss: dismissNotificationItem}));
	};

	let List = dist_esm.styled.div({zIndex: 10, '> * + *': {marginTop: 10}, '&:empty': {display: 'none'}}, (_ref => _ref.placement || {bottom: 0, left: 0, right: 0, position: 'fixed'})); let NotificationList_NotificationList = function NotificationList(_ref2) {
		let {notifications} = _ref2; let {clearNotification} = _ref2; let _ref2$placement = _ref2.placement; let
			placement = void 0 === _ref2$placement ? void 0 : _ref2$placement; return react_default.a.createElement(List, {placement}, notifications.map((notification => react_default.a.createElement(notifications_NotificationItem, {key: notification.id, onDismissNotification: function onDismissNotification(id) {
			return clearNotification(id);
		}, notification}))));
	};

	NotificationList_NotificationList.displayName = 'NotificationList'; let notifications_NotificationList = NotificationList_NotificationList; function notifications_extends() {
		return (notifications_extends = Object.assign || function (target) {
			for (let i = 1; i < arguments.length; i++) {
				let source = arguments[i]; for (let key in source) {
					Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
				}
			}

			return target;
		}).apply(this, arguments);
	}

	let notifications_mapper = function mapper(_ref) {
		let {state} = _ref; let
			{clearNotification} = Object(esm.o)(); return {notifications: state.notifications, clearNotification};
	};

	let notifications_NotificationConnect = function NotificationConnect(props) {
		return react_default.a.createElement(esm.b, {filter: notifications_mapper}, (fromState => react_default.a.createElement(notifications_NotificationList, {...props, ...fromState})));
	};

	notifications_NotificationConnect.displayName = 'NotificationConnect'; let containers_notifications = notifications_NotificationConnect; let semver = __webpack_require__(74); let semver_default = __webpack_require__.n(semver); let markdown_to_jsx_dist_esm = __webpack_require__(442); function StorybookIcon_extends() {
		return (StorybookIcon_extends = Object.assign || function (target) {
			for (let i = 1; i < arguments.length; i++) {
				let source = arguments[i]; for (let key in source) {
					Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
				}
			}

			return target;
		}).apply(this, arguments);
	}

	let StorybookIcon_StorybookIcon = function StorybookIcon(_ref) {
		let props = {..._ref}; return react_default.a.createElement('svg', {viewBox: '0 0 64 64', ...props}, react_default.a.createElement('title', null, 'Storybook icon'), react_default.a.createElement('g', {id: 'Artboard', stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd'}, react_default.a.createElement('path', {d: 'M8.04798541,58.7875918 L6.07908839,6.32540407 C6.01406344,4.5927838 7.34257463,3.12440831 9.07303814,3.01625434 L53.6958037,0.227331489 C55.457209,0.117243658 56.974354,1.45590096 57.0844418,3.21730626 C57.0885895,3.28366922 57.0906648,3.35014546 57.0906648,3.41663791 L57.0906648,60.5834697 C57.0906648,62.3483119 55.6599776,63.7789992 53.8951354,63.7789992 C53.847325,63.7789992 53.7995207,63.7779262 53.7517585,63.775781 L11.0978899,61.8600599 C9.43669044,61.7854501 8.11034889,60.4492961 8.04798541,58.7875918 Z', id: 'path-1', fill: '#FF4785', fillRule: 'nonzero'}), react_default.a.createElement('path', {d: 'M35.9095005,24.1768792 C35.9095005,25.420127 44.2838488,24.8242707 45.4080313,23.9509748 C45.4080313,15.4847538 40.8652557,11.0358878 32.5466666,11.0358878 C24.2280775,11.0358878 19.5673077,15.553972 19.5673077,22.3311017 C19.5673077,34.1346028 35.4965208,34.3605071 35.4965208,40.7987804 C35.4965208,42.606015 34.6115646,43.6790606 32.6646607,43.6790606 C30.127786,43.6790606 29.1248356,42.3834613 29.2428298,37.9783269 C29.2428298,37.0226907 19.5673077,36.7247626 19.2723223,37.9783269 C18.5211693,48.6535354 25.1720308,51.7326752 32.7826549,51.7326752 C40.1572906,51.7326752 45.939005,47.8018145 45.939005,40.6858282 C45.939005,28.035186 29.7738035,28.3740425 29.7738035,22.1051974 C29.7738035,19.5637737 31.6617103,19.2249173 32.7826549,19.2249173 C33.9625966,19.2249173 36.0864917,19.4328883 35.9095005,24.1768792 Z', id: 'path9_fill-path', fill: '#FFFFFF', fillRule: 'nonzero'}), react_default.a.createElement('path', {d: 'M44.0461638,0.830433986 L50.1874092,0.446606143 L50.443532,7.7810017 C50.4527198,8.04410717 50.2468789,8.26484453 49.9837734,8.27403237 C49.871115,8.27796649 49.7607078,8.24184808 49.6721567,8.17209069 L47.3089847,6.3104681 L44.5110468,8.43287463 C44.3012992,8.591981 44.0022839,8.55092814 43.8431776,8.34118051 C43.7762017,8.25288717 43.742082,8.14401677 43.7466857,8.03329059 L44.0461638,0.830433986 Z', id: 'Path', fill: '#FFFFFF'})));
	};

	StorybookIcon_StorybookIcon.displayName = 'StorybookIcon'; let DocumentWrapper = dist_esm.styled.div((_ref => {
		let {theme} = _ref; return {fontSize: ''.concat(theme.typography.size.s2, 'px'), lineHeight: '1.6', h1: {fontSize: ''.concat(theme.typography.size.l1, 'px'), fontWeight: theme.typography.weight.black}, h2: {fontSize: ''.concat(theme.typography.size.m2, 'px'), borderBottom: '1px solid '.concat(theme.appBorderColor)}, h3: {fontSize: ''.concat(theme.typography.size.m1, 'px')}, h4: {fontSize: ''.concat(theme.typography.size.s3, 'px')}, h5: {fontSize: ''.concat(theme.typography.size.s2, 'px')}, h6: {fontSize: ''.concat(theme.typography.size.s2, 'px'), color: theme.color.dark}, 'pre:not(.prismjs)': {background: 'transparent', border: 'none', borderRadius: 0, padding: 0, margin: 0}, 'pre pre, pre.prismjs': {padding: 15, margin: 0, whiteSpace: 'pre-wrap', color: 'inherit', fontSize: '13px', lineHeight: '19px'}, 'pre pre code, pre.prismjs code': {color: 'inherit', fontSize: 'inherit'}, 'pre code': {margin: 0, padding: 0, whiteSpace: 'pre', border: 'none', background: 'transparent'}, 'pre code, pre tt': {backgroundColor: 'transparent', border: 'none'}, 'body > *:first-of-type': {marginTop: '0 !important'}, 'body > *:last-child': {marginBottom: '0 !important'}, a: {color: theme.color.secondary, textDecoration: 'none'}, 'a.absent': {color: '#cc0000'}, 'a.anchor': {display: 'block', paddingLeft: 30, marginLeft: -30, cursor: 'pointer', position: 'absolute', top: 0, left: 0, bottom: 0}, 'h1, h2, h3, h4, h5, h6': {margin: '20px 0 10px', padding: 0, cursor: 'text', position: 'relative', '&:first-of-type': {marginTop: 0, paddingTop: 0}, '&:hover a.anchor': {textDecoration: 'none'}, '& tt, & code': {fontSize: 'inherit'}}, 'h1:first-of-type + h2': {marginTop: 0, paddingTop: 0}, 'p, blockquote, ul, ol, dl, li, table, pre': {margin: '15px 0'}, hr: {border: '0 none', borderTop: '1px solid '.concat(theme.appBorderColor), height: 4, padding: 0}, 'body > h1:first-of-type, body > h2:first-of-type, body > h3:first-of-type, body > h4:first-of-type, body > h5:first-of-type, body > h6:first-of-type': {marginTop: 0, paddingTop: 0}, 'body > h1:first-of-type + h2': {marginTop: 0, paddingTop: 0}, 'a:first-of-type h1, a:first-of-type h2, a:first-of-type h3, a:first-of-type h4, a:first-of-type h5, a:first-of-type h6': {marginTop: 0, paddingTop: 0}, 'h1 p, h2 p, h3 p, h4 p, h5 p, h6 p': {marginTop: 0}, 'li p.first': {display: 'inline-block'}, 'ul, ol': {paddingLeft: 30, '& :first-of-type': {marginTop: 0}, '& :last-child': {marginBottom: 0}}, dl: {padding: 0}, 'dl dt': {fontSize: '14px', fontWeight: 'bold', fontStyle: 'italic', margin: '0 0 15px', padding: '0 15px', '&:first-of-type': {padding: 0}, '& > :first-of-type': {marginTop: 0}, '& > :last-child': {marginBottom: 0}}, blockquote: {borderLeft: '4px solid '.concat(theme.color.medium), padding: '0 15px', color: theme.color.dark, '& > :first-of-type': {marginTop: 0}, '& > :last-child': {marginBottom: 0}}, table: {padding: 0, borderCollapse: 'collapse', '& tr': {borderTop: '1px solid '.concat(theme.appBorderColor), backgroundColor: 'white', margin: 0, padding: 0, '& th': {fontWeight: 'bold', border: '1px solid '.concat(theme.appBorderColor), textAlign: 'left', margin: 0, padding: '6px 13px'}, '& td': {border: '1px solid '.concat(theme.appBorderColor), textAlign: 'left', margin: 0, padding: '6px 13px'}, '&:nth-of-type(2n)': {backgroundColor: theme.color.lighter}, '& th :first-of-type, & td :first-of-type': {marginTop: 0}, '& th :last-child, & td :last-child': {marginBottom: 0}}}, img: {maxWidth: '100%'}, 'span.frame': {display: 'block', overflow: 'hidden', '& > span': {border: '1px solid '.concat(theme.color.medium), display: 'block', float: 'left', overflow: 'hidden', margin: '13px 0 0', padding: 7, width: 'auto'}, '& span img': {display: 'block', float: 'left'}, '& span span': {clear: 'both', color: theme.color.darkest, display: 'block', padding: '5px 0 0'}}, 'span.align-center': {display: 'block', overflow: 'hidden', clear: 'both', '& > span': {display: 'block', overflow: 'hidden', margin: '13px auto 0', textAlign: 'center'}, '& span img': {margin: '0 auto', textAlign: 'center'}}, 'span.align-right': {display: 'block', overflow: 'hidden', clear: 'both', '& > span': {display: 'block', overflow: 'hidden', margin: '13px 0 0', textAlign: 'right'}, '& span img': {margin: 0, textAlign: 'right'}}, 'span.float-left': {display: 'block', marginRight: 13, overflow: 'hidden', float: 'left', '& span': {margin: '13px 0 0'}}, 'span.float-right': {display: 'block', marginLeft: 13, overflow: 'hidden', float: 'right', '& > span': {display: 'block', overflow: 'hidden', margin: '13px auto 0', textAlign: 'right'}}, 'code, tt': {margin: '0 2px', padding: '0 5px', whiteSpace: 'nowrap', border: '1px solid '.concat(theme.color.mediumlight), backgroundColor: theme.color.lighter, borderRadius: 3, color: theme.base === 'dark' && theme.color.darkest}};
	})); let lazy_syntaxhighlighter = __webpack_require__(212); let Footer = dist_esm.styled.div((_ref => {
		let {theme} = _ref; return {display: 'flex', paddingTop: 20, marginTop: 20, borderTop: '1px solid '.concat(theme.appBorderColor), fontWeight: theme.typography.weight.bold, '& > * + *': {marginLeft: 20}};
	})); let SettingsFooter_SettingsFooter = function SettingsFooter(props) {
		return react_default.a.createElement(Footer, props, react_default.a.createElement(link_link.a, {secondary: !0, href: 'https://storybook.js.org', cancel: !1, target: '_blank'}, 'Docs'), react_default.a.createElement(link_link.a, {secondary: !0, href: 'https://github.com/storybookjs/storybook', cancel: !1, target: '_blank'}, 'GitHub'), react_default.a.createElement(link_link.a, {secondary: !0, href: 'https://storybook.js.org/support', cancel: !1, target: '_blank'}, 'Support'));
	};

	SettingsFooter_SettingsFooter.displayName = 'SettingsFooter'; let settings_SettingsFooter = SettingsFooter_SettingsFooter; let Header = dist_esm.styled.header((_ref => {
		let {theme} = _ref; return {marginBottom: 20, fontSize: theme.typography.size.m3, fontWeight: theme.typography.weight.black, alignItems: 'center', display: 'flex', '> svg': {height: 32, width: 'auto', marginRight: 8}};
	})); let Subheading = dist_esm.styled.span((_ref2 => {
		let {theme} = _ref2; return {letterSpacing: '0.35em', textTransform: 'uppercase', fontWeight: theme.typography.weight.black, fontSize: theme.typography.size.s2 - 1, lineHeight: '24px', color: theme.color.mediumdark};
	})); let SubheadingLink = Object(dist_esm.styled)(link_link.a)((_ref3 => ({fontSize: _ref3.theme.typography.size.s1}))); let Subheader = dist_esm.styled.div({display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '.75rem'}); let UpdateMessage = dist_esm.styled.div((_ref4 => {
		let {status} = _ref4; let
			{theme} = _ref4; return status === 'positive' ? {background: theme.background.positive, color: theme.color.positive} : status === 'negative' ? {background: theme.background.negative, color: theme.color.negative} : {background: '#EAF3FC', color: theme.color.darkest};
	}), (_ref5 => {
		let {theme} = _ref5; return {fontWeight: theme.typography.weight.bold, fontSize: theme.typography.size.s2, padding: '10px 20px', marginBottom: 24, borderRadius: theme.appBorderRadius, border: '1px solid '.concat(theme.appBorderColor), textAlign: 'center'};
	})); let ErrorMessage = dist_esm.styled.div((_ref6 => ({fontWeight: _ref6.theme.typography.weight.bold, textAlign: 'center'}))); let Upgrade = dist_esm.styled.div((_ref7 => {
		let {theme} = _ref7; return {marginTop: 20, borderTop: '1px solid '.concat(theme.appBorderColor)};
	})); let about_Container = dist_esm.styled.div({padding: '3rem 20px', maxWidth: 600, margin: '0 auto'}); let about_AboutScreen = function AboutScreen(_ref8) {
		let updateMessage; let _ref8$latest = _ref8.latest; let latest = void 0 === _ref8$latest ? null : _ref8$latest; let {current} = _ref8; let canUpdate = latest && semver_default.a.gt(latest.version, current.version); return updateMessage = latest ? canUpdate ? react_default.a.createElement(UpdateMessage, {status: 'positive'}, 'Storybook ', latest.version, ' is available. Upgrade from ', current.version, ' now.') : react_default.a.createElement(UpdateMessage, {status: 'neutral'}, 'Looking good! You\'re up to date.') : react_default.a.createElement(UpdateMessage, {status: 'negative'}, 'Oops! The latest version of Storybook couldn\'t be fetched.'), react_default.a.createElement(about_Container, null, react_default.a.createElement(Header, null, react_default.a.createElement(StorybookIcon_StorybookIcon, null), 'Storybook ', current.version), updateMessage, latest ? react_default.a.createElement(react.Fragment, null, react_default.a.createElement(Subheader, null, react_default.a.createElement(Subheading, null, latest.version, ' Changelog'), react_default.a.createElement(SubheadingLink, {secondary: !0, href: 'https://github.com/storybookjs/storybook/blob/next/CHANGELOG.md', withArrow: !0, cancel: !1, target: '_blank'}, 'Read full changelog')), react_default.a.createElement(DocumentWrapper, null, react_default.a.createElement(markdown_to_jsx_dist_esm.a, null, latest.info.plain))) : react_default.a.createElement(ErrorMessage, null, react_default.a.createElement(link_link.a, {href: 'https://github.com/storybookjs/storybook/releases', target: '_blank', withArrow: !0, secondary: !0, cancel: !1}, 'Check Storybook\'s release history')), canUpdate && react_default.a.createElement(Upgrade, null, react_default.a.createElement(DocumentWrapper, null, react_default.a.createElement('p', null, react_default.a.createElement('b', null, 'Upgrade all Storybook packages to latest:')), react_default.a.createElement(lazy_syntaxhighlighter.a, {language: 'bash', copyable: !0, padded: !0, bordered: !0}, 'npx sb upgrade'))), react_default.a.createElement(settings_SettingsFooter, null));
	};

	function about_page_typeof(obj) {
		return (about_page_typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function _typeof(obj) {
			return typeof obj;
		} : function _typeof(obj) {
			return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
		})(obj);
	}

	function about_page_classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError('Cannot call a class as a function');
		}
	}

	function about_page_defineProperties(target, props) {
		for (let i = 0; i < props.length; i++) {
			let descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 'value' in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
		}
	}

	function about_page_setPrototypeOf(o, p) {
		return (about_page_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
			return o.__proto__ = p, o;
		})(o, p);
	}

	function about_page_createSuper(Derived) {
		let hasNativeReflectConstruct = (function about_page_isNativeReflectConstruct() {
			if (typeof Reflect === 'undefined' || !Reflect.construct) {
				return !1;
			}

			if (Reflect.construct.sham) {
				return !1;
			}

			if (typeof Proxy === 'function') {
				return !0;
			}

			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (() => {}))), !0;
			} catch (e) {
				return !1;
			}
		})(); return function _createSuperInternal() {
			let result; let Super = about_page_getPrototypeOf(Derived); if (hasNativeReflectConstruct) {
				let NewTarget = about_page_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget);
			} else {
				result = Super.apply(this, arguments);
			}

			return about_page_possibleConstructorReturn(this, result);
		};
	}

	function about_page_possibleConstructorReturn(self, call) {
		return !call || about_page_typeof(call) !== 'object' && typeof call !== 'function' ? (function about_page_assertThisInitialized(self) {
			if (void 0 === self) {
				throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
			}

			return self;
		})(self) : call;
	}

	function about_page_getPrototypeOf(o) {
		return (about_page_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
			return o.__proto__ || Object.getPrototypeOf(o);
		})(o);
	}

	about_AboutScreen.displayName = 'AboutScreen'; let NotificationClearer = (function (_Component) {
		!(function about_page_inherits(subClass, superClass) {
			if (typeof superClass !== 'function' && superClass !== null) {
				throw new TypeError('Super expression must either be null or a function');
			}

			subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {value: subClass, writable: !0, configurable: !0}}), superClass && about_page_setPrototypeOf(subClass, superClass);
		})(NotificationClearer, _Component);

		let _super = about_page_createSuper(NotificationClearer); function NotificationClearer() {
			return about_page_classCallCheck(this, NotificationClearer), _super.apply(this, arguments);
		}

		return (function about_page_createClass(Constructor, protoProps, staticProps) {
			return protoProps && about_page_defineProperties(Constructor.prototype, protoProps), staticProps && about_page_defineProperties(Constructor, staticProps), Constructor;
		})(NotificationClearer, [{key: 'componentDidMount', value: function componentDidMount() {
			let _this$props = this.props; let {api} = _this$props; let {notificationId} = _this$props; api.clearNotification(notificationId);
		}}, {key: 'render', value: function render() {
			return this.props.children;
		}}]), NotificationClearer;
	})(react.Component); NotificationClearer.displayName = 'NotificationClearer'; let about_page_AboutPage = function AboutPage() {
		let api = Object(esm.o)(); return react_default.a.createElement(NotificationClearer, {api, notificationId: 'update'}, react_default.a.createElement(about_AboutScreen, {current: api.getCurrentVersion(), latest: api.getLatestVersion()}));
	};

	function release_notes_slicedToArray(arr, i) {
		return (function release_notes_arrayWithHoles(arr) {
			if (Array.isArray(arr)) {
				return arr;
			}
		})(arr) || (function release_notes_iterableToArrayLimit(arr, i) {
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
		})(arr, i) || (function release_notes_unsupportedIterableToArray(o, minLen) {
			if (!o) {
				return;
			}

			if (typeof o === 'string') {
				return release_notes_arrayLikeToArray(o, minLen);
			}

			let n = Object.prototype.toString.call(o).slice(8, -1); n === 'Object' && o.constructor && (n = o.constructor.name); if (n === 'Map' || n === 'Set') {
				return Array.from(o);
			}

			if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
				return release_notes_arrayLikeToArray(o, minLen);
			}
		})(arr, i) || (function release_notes_nonIterableRest() {
			throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
		})();
	}

	function release_notes_arrayLikeToArray(arr, len) {
		(len == null || len > arr.length) && (len = arr.length); for (var i = 0, arr2 = new Array(len); i < len; i++) {
			arr2[i] = arr[i];
		}

		return arr2;
	}

	function release_notes_extends() {
		return (release_notes_extends = Object.assign || function (target) {
			for (let i = 1; i < arguments.length; i++) {
				let source = arguments[i]; for (let key in source) {
					Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
				}
			}

			return target;
		}).apply(this, arguments);
	}

	about_page_AboutPage.displayName = 'AboutPage'; let Centered = dist_esm.styled.div({top: '50%', position: 'absolute', transform: 'translateY(-50%)', width: '100%', textAlign: 'center'}); let release_notes_LoaderWrapper = dist_esm.styled.div({position: 'relative', height: '32px'}); let release_notes_Message = dist_esm.styled.div((_ref => {
		let {theme} = _ref; return {paddingTop: '12px', color: theme.color.mediumdark, maxWidth: '295px', margin: '0 auto', fontSize: ''.concat(theme.typography.size.s1, 'px'), lineHeight: '16px'};
	})); let Iframe = dist_esm.styled.iframe({position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, border: 0, margin: 0, padding: 0, width: '100%', height: '100%'}, (_ref2 => ({visibility: _ref2.isLoaded ? 'visible' : 'hidden'}))); let AlertIcon = Object(dist_esm.styled)((props => react_default.a.createElement(icon_icon.a, {icon: 'alert', ...props})))((_ref3 => ({color: _ref3.theme.color.mediumdark, width: 40, margin: '0 auto'}))); let getIframeUrl = function getIframeUrl(version) {
		let _version$split2 = release_notes_slicedToArray(version.split('.'), 2); let major = _version$split2[0]; let minor = _version$split2[1]; return 'https://storybook.js.org/releases/iframe/'.concat(major, '.').concat(minor);
	};

	let release_notes_ReleaseNotesLoader = function ReleaseNotesLoader() {
		return react_default.a.createElement(Centered, null, react_default.a.createElement(release_notes_LoaderWrapper, null, react_default.a.createElement(Loader_Loader_Loader, null)), react_default.a.createElement(release_notes_Message, null, 'Loading release notes'));
	};

	release_notes_ReleaseNotesLoader.displayName = 'ReleaseNotesLoader'; let release_notes_MaxWaitTimeMessaging = function MaxWaitTimeMessaging() {
		return react_default.a.createElement(Centered, null, react_default.a.createElement(AlertIcon, null), react_default.a.createElement(release_notes_Message, null, 'The release notes couldn\'t be loaded. Check your internet connection and try again.'));
	};

	release_notes_MaxWaitTimeMessaging.displayName = 'MaxWaitTimeMessaging'; let release_notes_PureReleaseNotesScreen = function PureReleaseNotesScreen(_ref4) {
		let {didHitMaxWaitTime} = _ref4; let {isLoaded} = _ref4; let {setLoaded} = _ref4; let
			{version} = _ref4; return react_default.a.createElement(react.Fragment, null, !isLoaded && !didHitMaxWaitTime && react_default.a.createElement(release_notes_ReleaseNotesLoader, null), didHitMaxWaitTime ? react_default.a.createElement(release_notes_MaxWaitTimeMessaging, null) : react_default.a.createElement(Iframe, {isLoaded, onLoad: function onLoad() {
			return setLoaded(!0);
		}, src: getIframeUrl(version), title: 'Release notes for Storybook version '.concat(version)}));
	};

	release_notes_PureReleaseNotesScreen.displayName = 'PureReleaseNotesScreen'; let release_notes_ReleaseNotesScreen = function ReleaseNotesScreen(_ref5) {
		let {version} = _ref5; let _useState2 = release_notes_slicedToArray(Object(react.useState)(!1), 2); let isLoaded = _useState2[0]; let setLoaded = _useState2[1]; let _useState4 = release_notes_slicedToArray(Object(react.useState)(!1), 2); let didHitMaxWaitTime = _useState4[0]; let
			setDidHitMaxWaitTime = _useState4[1]; return Object(react.useEffect)((() => {
			let timer = setTimeout((() => !isLoaded && setDidHitMaxWaitTime(!0)), 1e4); return function () {
				return clearTimeout(timer);
			};
		}), [isLoaded]), react_default.a.createElement(release_notes_PureReleaseNotesScreen, {didHitMaxWaitTime, isLoaded, setLoaded, version});
	};

	release_notes_ReleaseNotesScreen.displayName = 'ReleaseNotesScreen'; let release_notes_page_ReleaseNotesPage = function ReleaseNotesPage() {
		let api = Object(esm.o)(); Object(react.useEffect)((() => {
			api.setDidViewReleaseNotes();
		}), []); let version = api.releaseNotesVersion(); return react_default.a.createElement(release_notes_ReleaseNotesScreen, {version});
	};

	release_notes_page_ReleaseNotesPage.displayName = 'ReleaseNotesPage'; __webpack_require__(41), __webpack_require__(87); let shortcuts_templateObject; let esm_form = __webpack_require__(55); function shortcuts_typeof(obj) {
		return (shortcuts_typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function _typeof(obj) {
			return typeof obj;
		} : function _typeof(obj) {
			return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
		})(obj);
	}

	function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
		try {
			var info = gen[key](arg); var {value} = info;
		} catch (error) {
			return void reject(error);
		}

		info.done ? resolve(value) : Promise.resolve(value).then(_next, _throw);
	}

	function _asyncToGenerator(fn) {
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
	}

	function shortcuts_defineProperties(target, props) {
		for (let i = 0; i < props.length; i++) {
			let descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 'value' in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
		}
	}

	function shortcuts_setPrototypeOf(o, p) {
		return (shortcuts_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
			return o.__proto__ = p, o;
		})(o, p);
	}

	function shortcuts_createSuper(Derived) {
		let hasNativeReflectConstruct = (function shortcuts_isNativeReflectConstruct() {
			if (typeof Reflect === 'undefined' || !Reflect.construct) {
				return !1;
			}

			if (Reflect.construct.sham) {
				return !1;
			}

			if (typeof Proxy === 'function') {
				return !0;
			}

			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (() => {}))), !0;
			} catch (e) {
				return !1;
			}
		})(); return function _createSuperInternal() {
			let result; let Super = shortcuts_getPrototypeOf(Derived); if (hasNativeReflectConstruct) {
				let NewTarget = shortcuts_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget);
			} else {
				result = Super.apply(this, arguments);
			}

			return shortcuts_possibleConstructorReturn(this, result);
		};
	}

	function shortcuts_possibleConstructorReturn(self, call) {
		return !call || shortcuts_typeof(call) !== 'object' && typeof call !== 'function' ? (function shortcuts_assertThisInitialized(self) {
			if (void 0 === self) {
				throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
			}

			return self;
		})(self) : call;
	}

	function shortcuts_getPrototypeOf(o) {
		return (shortcuts_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
			return o.__proto__ || Object.getPrototypeOf(o);
		})(o);
	}

	function shortcuts_defineProperty(obj, key, value) {
		return key in obj ? Object.defineProperty(obj, key, {value, enumerable: !0, configurable: !0, writable: !0}) : obj[key] = value, obj;
	}

	function shortcuts_slicedToArray(arr, i) {
		return (function shortcuts_arrayWithHoles(arr) {
			if (Array.isArray(arr)) {
				return arr;
			}
		})(arr) || (function shortcuts_iterableToArrayLimit(arr, i) {
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
		})(arr, i) || (function shortcuts_unsupportedIterableToArray(o, minLen) {
			if (!o) {
				return;
			}

			if (typeof o === 'string') {
				return shortcuts_arrayLikeToArray(o, minLen);
			}

			let n = Object.prototype.toString.call(o).slice(8, -1); n === 'Object' && o.constructor && (n = o.constructor.name); if (n === 'Map' || n === 'Set') {
				return Array.from(o);
			}

			if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
				return shortcuts_arrayLikeToArray(o, minLen);
			}
		})(arr, i) || (function shortcuts_nonIterableRest() {
			throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
		})();
	}

	function shortcuts_arrayLikeToArray(arr, len) {
		(len == null || len > arr.length) && (len = arr.length); for (var i = 0, arr2 = new Array(len); i < len; i++) {
			arr2[i] = arr[i];
		}

		return arr2;
	}

	let shortcuts_Button = esm_form.a.Button; let shortcuts_Input = esm_form.a.Input; let shortcuts_Header = dist_esm.styled.header((_ref => {
		let {theme} = _ref; return {marginBottom: 20, fontSize: theme.typography.size.m3, fontWeight: theme.typography.weight.black, alignItems: 'center', display: 'flex'};
	})); let HeaderItem = dist_esm.styled.div((_ref2 => ({fontWeight: _ref2.theme.typography.weight.bold}))); let GridHeaderRow = dist_esm.styled.div({alignSelf: 'flex-end', display: 'grid', margin: '10px 0', gridTemplateColumns: '1fr 1fr 12px', '& > *:last-of-type': {gridColumn: '2 / 2', justifySelf: 'flex-end', gridRow: '1'}}); let Row = dist_esm.styled.div((_ref3 => {
		let {theme} = _ref3; return {padding: '6px 0', borderTop: '1px solid '.concat(theme.appBorderColor), display: 'grid', gridTemplateColumns: '1fr 1fr 0px'};
	})); let GridWrapper = dist_esm.styled.div({display: 'grid', gridTemplateColumns: '1fr', gridAutoRows: 'minmax(auto, auto)', marginBottom: 20}); let Description = dist_esm.styled.div({alignSelf: 'center'}); let TextInput = Object(dist_esm.styled)(shortcuts_Input)((_ref4 => {
		let {valid} = _ref4; let
			{theme} = _ref4; return valid === 'error' ? {animation: ''.concat(theme.animation.jiggle, ' 700ms ease-out')} : {};
	}), {display: 'flex', width: 80, flexDirection: 'column', justifySelf: 'flex-end', paddingLeft: 4, paddingRight: 4, textAlign: 'center'}); let Fade = Object(core_browser_esm.d)(shortcuts_templateObject || (shortcuts_templateObject = (function shortcuts_taggedTemplateLiteral(strings, raw) {
		return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, {raw: {value: Object.freeze(raw)}}));
	})(['\n0%,100% { opacity: 0; }\n  50% { opacity: 1; }\n']))); let SuccessIcon = Object(dist_esm.styled)(icon_icon.a)((_ref5 => {
		let {valid} = _ref5; let
			{theme} = _ref5; return valid === 'valid' ? {color: theme.color.positive, animation: ''.concat(Fade, ' 2s ease forwards')} : {opacity: 0};
	}), {alignSelf: 'center', display: 'flex', marginLeft: 10, height: 14, width: 14}); let shortcuts_Container = dist_esm.styled.div((_ref6 => ({fontSize: _ref6.theme.typography.size.s2, padding: '3rem 20px', maxWidth: 600, margin: '0 auto'}))); let shortcutLabels = {fullScreen: 'Go full screen', togglePanel: 'Toggle addons', panelPosition: 'Toggle addons orientation', toggleNav: 'Toggle sidebar', toolbar: 'Toggle canvas toolbar', search: 'Focus search', focusNav: 'Focus sidebar', focusIframe: 'Focus canvas', focusPanel: 'Focus addons', prevComponent: 'Previous component', nextComponent: 'Next component', prevStory: 'Previous story', nextStory: 'Next story', shortcutsPage: 'Go to shortcuts page', aboutPage: 'Go to about page', collapseAll: 'Collapse all items on sidebar', expandAll: 'Expand all items on sidebar'}; let fixedShortcuts = ['escape']; function toShortcutState(shortcutKeys) {
		return Object.entries(shortcutKeys).reduce(((acc, _ref7) => {
			let _ref8 = shortcuts_slicedToArray(_ref7, 2); let feature = _ref8[0]; let shortcut = _ref8[1]; return fixedShortcuts.includes(feature) ? acc : ({...acc, ...shortcuts_defineProperty({}, feature, {shortcut, error: !1})});
		}), {});
	}

	let shortcuts_ShortcutsScreen = (function (_Component) {
		!(function shortcuts_inherits(subClass, superClass) {
			if (typeof superClass !== 'function' && superClass !== null) {
				throw new TypeError('Super expression must either be null or a function');
			}

			subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {value: subClass, writable: !0, configurable: !0}}), superClass && shortcuts_setPrototypeOf(subClass, superClass);
		})(ShortcutsScreen, _Component);

		let _super = shortcuts_createSuper(ShortcutsScreen); function ShortcutsScreen(props) {
			let _this; return (function shortcuts_classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError('Cannot call a class as a function');
				}
			})(this, ShortcutsScreen), (_this = _super.call(this, props)).onKeyDown = function (e) {
				let _this$state = _this.state; let {activeFeature} = _this$state; let {shortcutKeys} = _this$state; if (e.key === 'Backspace') {
					return _this.restoreDefault();
				}

				let shortcut = Object(lib_shortcut.a)(e); if (!shortcut) {
					return !1;
				}

				let error = Boolean(Object.entries(shortcutKeys).find((_ref9 => {
					let _ref10 = shortcuts_slicedToArray(_ref9, 2); let feature = _ref10[0]; let existingShortcut = _ref10[1].shortcut; return feature !== activeFeature && existingShortcut && Object(lib_shortcut.b)(shortcut, existingShortcut);
				}))); return _this.setState({shortcutKeys: {...shortcutKeys, ...shortcuts_defineProperty({}, activeFeature, {shortcut, error})}});
			}, _this.onFocus = function (focusedInput) {
				return function () {
					let {shortcutKeys} = _this.state; _this.setState({activeFeature: focusedInput, shortcutKeys: {...shortcutKeys, ...shortcuts_defineProperty({}, focusedInput, {shortcut: null, error: !1})}});
				};
			}, _this.onBlur = _asyncToGenerator(regeneratorRuntime.mark((function _callee() {
				let _this$state2; let shortcutKeys; let activeFeature; let _shortcutKeys$activeF; let shortcut; let error; return regeneratorRuntime.wrap((function _callee$(_context) {
					for (;;) {
						switch (_context.prev = _context.next) {
							case 0: if (_this$state2 = _this.state, shortcutKeys = _this$state2.shortcutKeys, activeFeature = _this$state2.activeFeature, !shortcutKeys[activeFeature]) {
								_context.next = 6; break;
							}

								if (_shortcutKeys$activeF = shortcutKeys[activeFeature], shortcut = _shortcutKeys$activeF.shortcut, error = _shortcutKeys$activeF.error, shortcut && !error) {
									_context.next = 5; break;
								}

								return _context.abrupt('return', _this.restoreDefault()); case 5: return _context.abrupt('return', _this.saveShortcut()); case 6: return _context.abrupt('return', !1); case 7: case 'end': return _context.stop();
						}
					}
				}), _callee);
			}))), _this.saveShortcut = _asyncToGenerator(regeneratorRuntime.mark((function _callee2() {
				let _this$state3; let activeFeature; let shortcutKeys; let setShortcut; return regeneratorRuntime.wrap((function _callee2$(_context2) {
					for (;;) {
						switch (_context2.prev = _context2.next) {
							case 0: return _this$state3 = _this.state, activeFeature = _this$state3.activeFeature, shortcutKeys = _this$state3.shortcutKeys, setShortcut = _this.props.setShortcut, _context2.next = 4, setShortcut(activeFeature, shortcutKeys[activeFeature].shortcut); case 4: _this.setState({successField: activeFeature}); case 5: case 'end': return _context2.stop();
						}
					}
				}), _callee2);
			}))), _this.restoreDefaults = _asyncToGenerator(regeneratorRuntime.mark((function _callee3() {
				let restoreAllDefaultShortcuts; let defaultShortcuts; return regeneratorRuntime.wrap((function _callee3$(_context3) {
					for (;;) {
						switch (_context3.prev = _context3.next) {
							case 0: return restoreAllDefaultShortcuts = _this.props.restoreAllDefaultShortcuts, _context3.next = 3, restoreAllDefaultShortcuts(); case 3: return defaultShortcuts = _context3.sent, _context3.abrupt('return', _this.setState({shortcutKeys: toShortcutState(defaultShortcuts)})); case 5: case 'end': return _context3.stop();
						}
					}
				}), _callee3);
			}))), _this.restoreDefault = _asyncToGenerator(regeneratorRuntime.mark((function _callee4() {
				let _this$state4; let activeFeature; let shortcutKeys; let restoreDefaultShortcut; let defaultShortcut; return regeneratorRuntime.wrap((function _callee4$(_context4) {
					for (;;) {
						switch (_context4.prev = _context4.next) {
							case 0: return _this$state4 = _this.state, activeFeature = _this$state4.activeFeature, shortcutKeys = _this$state4.shortcutKeys, restoreDefaultShortcut = _this.props.restoreDefaultShortcut, _context4.next = 4, restoreDefaultShortcut(activeFeature); case 4: return defaultShortcut = _context4.sent, _context4.abrupt('return', _this.setState({shortcutKeys: {...shortcutKeys, ...toShortcutState(shortcuts_defineProperty({}, activeFeature, defaultShortcut))}})); case 6: case 'end': return _context4.stop();
						}
					}
				}), _callee4);
			}))), _this.displaySuccessMessage = function (activeElement) {
				let _this$state5 = _this.state; let {successField} = _this$state5; let {shortcutKeys} = _this$state5; return activeElement === successField && !1 === shortcutKeys[activeElement].error ? 'valid' : void 0;
			}, _this.displayError = function (activeElement) {
				let _this$state6 = _this.state; let {activeFeature} = _this$state6; let {shortcutKeys} = _this$state6; return activeElement === activeFeature && !0 === shortcutKeys[activeElement].error ? 'error' : void 0;
			}, _this.renderKeyInput = function () {
				let _this$state7 = _this.state; let {shortcutKeys} = _this$state7; let {addonsShortcutLabels} = _this$state7; return Object.entries(shortcutKeys).map((_ref15 => {
					let _ref16 = shortcuts_slicedToArray(_ref15, 2); let feature = _ref16[0]; let {shortcut} = _ref16[1]; return react_default.a.createElement(Row, {key: feature}, react_default.a.createElement(Description, null, shortcutLabels[feature] || addonsShortcutLabels[feature]), react_default.a.createElement(TextInput, {spellCheck: 'false', valid: _this.displayError(feature), className: 'modalInput', onBlur: _this.onBlur, onFocus: _this.onFocus(feature), onKeyDown: _this.onKeyDown, value: shortcut ? Object(lib_shortcut.c)(shortcut) : '', placeholder: 'Type keys', readOnly: !0}), react_default.a.createElement(SuccessIcon, {valid: _this.displaySuccessMessage(feature), icon: 'check'}));
				}));
			}, _this.renderKeyForm = function () {
				return react_default.a.createElement(GridWrapper, null, react_default.a.createElement(GridHeaderRow, null, react_default.a.createElement(HeaderItem, null, 'Commands'), react_default.a.createElement(HeaderItem, null, 'Shortcut')), _this.renderKeyInput());
			}, _this.state = {activeFeature: void 0, successField: void 0, shortcutKeys: toShortcutState(props.shortcutKeys), addonsShortcutLabels: props.addonsShortcutLabels}, _this;
		}

		return (function shortcuts_createClass(Constructor, protoProps, staticProps) {
			return protoProps && shortcuts_defineProperties(Constructor.prototype, protoProps), staticProps && shortcuts_defineProperties(Constructor, staticProps), Constructor;
		})(ShortcutsScreen, [{key: 'render', value: function render() {
			let layout = this.renderKeyForm(); return react_default.a.createElement(shortcuts_Container, null, react_default.a.createElement(shortcuts_Header, null, 'Keyboard shortcuts'), layout, react_default.a.createElement(shortcuts_Button, {tertiary: !0, small: !0, id: 'restoreDefaultsHotkeys', onClick: this.restoreDefaults}, 'Restore defaults'), react_default.a.createElement(settings_SettingsFooter, null));
		}}]), ShortcutsScreen;
	})(react.Component); shortcuts_ShortcutsScreen.displayName = 'ShortcutsScreen'; let shortcuts_page_ShortcutsPage = function ShortcutsPage() {
		return react_default.a.createElement(esm.b, null, (_ref => {
			let _ref$api = _ref.api; let {getShortcutKeys} = _ref$api; let {getAddonsShortcutLabels} = _ref$api; let {setShortcut} = _ref$api; let {restoreDefaultShortcut} = _ref$api; let {restoreAllDefaultShortcuts} = _ref$api; return react_default.a.createElement(shortcuts_ShortcutsScreen, {shortcutKeys: getShortcutKeys(), addonsShortcutLabels: getAddonsShortcutLabels(), setShortcut, restoreDefaultShortcut, restoreAllDefaultShortcuts});
		}));
	};

	shortcuts_page_ShortcutsPage.displayName = 'ShortcutsPage'; let settings_document = window_default.a.document; let TabBarButton = react_default.a.memo((_ref => {
		let {changeTab} = _ref; let {id} = _ref; let
			{title} = _ref; return react_default.a.createElement(router.b, null, (_ref2 => {
			let active = _ref2.path.includes('settings/'.concat(id)); return react_default.a.createElement(bar_button.b, {id: 'tabbutton-'.concat(id), className: ['tabbutton'].concat(active ? ['tabbutton-active'] : []).join(' '), type: 'button', key: 'id', active, onClick: function onClick() {
				return changeTab(id);
			}, role: 'tab'}, title);
		}));
	})); let settings_Content = Object(dist_esm.styled)(ScrollArea.a)({position: 'absolute', top: 40, left: 0, right: 0, bottom: 0, overflow: 'auto'}, (_ref3 => ({background: _ref3.theme.background.content}))); let settings_Pages = function Pages(_ref4) {
		let {changeTab} = _ref4; let {onClose} = _ref4; let _ref4$enableShortcuts = _ref4.enableShortcuts; let enableShortcuts = void 0 === _ref4$enableShortcuts || _ref4$enableShortcuts; let _ref4$hasReleaseNotes = _ref4.hasReleaseNotes; let
			hasReleaseNotes = void 0 !== _ref4$hasReleaseNotes && _ref4$hasReleaseNotes; return react_default.a.useEffect((() => {
			let handleEscape = function handleEscape(event) {
				enableShortcuts && !event.repeat && matchesModifiers(!1, event) && matchesKeyCode('Escape', event) && (event.preventDefault(), onClose());
			};

			return settings_document.addEventListener('keydown', handleEscape), function () {
				return settings_document.removeEventListener('keydown', handleEscape);
			};
		}), []), react_default.a.createElement(react.Fragment, null, react_default.a.createElement(bar_FlexBar, {border: !0}, react_default.a.createElement(TabBar, {role: 'tablist'}, react_default.a.createElement(TabBarButton, {id: 'about', title: 'About', changeTab}), hasReleaseNotes && react_default.a.createElement(TabBarButton, {id: 'release-notes', title: 'Release notes', changeTab}), react_default.a.createElement(TabBarButton, {id: 'shortcuts', title: 'Keyboard shortcuts', changeTab})), react_default.a.createElement(bar_button.a, {onClick: function onClick(e) {
			return e.preventDefault(), onClose();
		}, title: 'Close settings page'}, react_default.a.createElement(icon_icon.a, {icon: 'close'}))), react_default.a.createElement(settings_Content, {vertical: !0, horizontal: !1}, react_default.a.createElement(router.c, {path: 'about'}, react_default.a.createElement(about_page_AboutPage, {key: 'about'})), react_default.a.createElement(router.c, {path: 'release-notes'}, react_default.a.createElement(release_notes_page_ReleaseNotesPage, {key: 'release-notes'})), react_default.a.createElement(router.c, {path: 'shortcuts'}, react_default.a.createElement(shortcuts_page_ShortcutsPage, {key: 'shortcuts'}))));
	};

	settings_Pages.displayName = 'Pages'; let settings_SettingsPages = function SettingsPages() {
		let api = Object(esm.o)(); let state = Object(esm.p)(); return react_default.a.createElement(settings_Pages, {hasReleaseNotes: Boolean(api.releaseNotesVersion()), enableShortcuts: state.ui.enableShortcuts, changeTab: function changeTab(tab) {
			return api.changeSettingsTab(tab);
		}, onClose: api.closeSettings});
	};

	function app_typeof(obj) {
		return (app_typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function _typeof(obj) {
			return typeof obj;
		} : function _typeof(obj) {
			return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
		})(obj);
	}

	function app_extends() {
		return (app_extends = Object.assign || function (target) {
			for (let i = 1; i < arguments.length; i++) {
				let source = arguments[i]; for (let key in source) {
					Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
				}
			}

			return target;
		}).apply(this, arguments);
	}

	settings_SettingsPages.displayName = 'SettingsPages'; let View = dist_esm.styled.div({position: 'fixed', overflow: 'hidden', height: '100vh', width: '100vw'}); let App = react_default.a.memo((_ref => {
		let content; let {viewMode} = _ref; let {docsOnly} = _ref; let {layout} = _ref; let {panelCount} = _ref; let _ref$size = _ref.size; let {width} = _ref$size; let {height} = _ref$size; let props = Object(react.useMemo)((() => ({Sidebar: sidebar, Preview: preview, Panel: containers_panel, Notifications: containers_notifications, pages: [{key: 'settings', render: function render() {
			return react_default.a.createElement(settings_SettingsPages, null);
		}, route(_ref2) {
			let {children} = _ref2; return react_default.a.createElement(router.c, {path: '/settings', startsWith: !0}, children);
		}}]})), []); return content = width && height ? width < 600 ? react_default.a.createElement(mobile_Mobile, {...props, viewMode, options: layout, docsOnly}) : react_default.a.createElement(Desktop, {...props, viewMode, options: layout, docsOnly, width, height, panelCount}) : react_default.a.createElement('div', null), react_default.a.createElement(View, null, react_default.a.createElement(core_browser_esm.a, {styles: global.a}), react_default.a.createElement(icon_icon.b, {icons: ['folder', 'component', 'document', 'bookmarkhollow']}), content);
	}), ((prevProps, nextProps) => {
		if (Object.is(prevProps, nextProps)) {
			return !0;
		}

		if (app_typeof(prevProps) !== 'object' || prevProps === null) {
			return !1;
		}

		if (app_typeof(nextProps) !== 'object' || nextProps === null) {
			return !1;
		}

		let keysA = Object.keys(prevProps); let keysB = Object.keys(nextProps); if (keysA.length !== keysB.length) {
			return !1;
		}

		for (let _i = 0, _keysA = keysA; _i < _keysA.length; _i++) {
			let key = _keysA[_i]; if (key === 'size') {
				if (prevProps[key].width !== nextProps[key].width) {
					return !1;
				}

				if (prevProps[key].height !== nextProps[key].height) {
					return !1;
				}
			} else {
				if (!Object.prototype.hasOwnProperty.call(nextProps, key)) {
					return !1;
				}

				if (!Object.is(prevProps[key], nextProps[key])) {
					return !1;
				}
			}
		}

		return !0;
	})); let SizedApp = react_sizeme_default()({monitorHeight: !0})(App); App.displayName = 'App'; let app = SizedApp; function provider_defineProperties(target, props) {
		for (let i = 0; i < props.length; i++) {
			let descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 'value' in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
		}
	}

	let Provider = (function () {
		function Provider() {
			!(function provider_classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError('Cannot call a class as a function');
				}
			})(this, Provider);
		}

		return (function provider_createClass(Constructor, protoProps, staticProps) {
			return protoProps && provider_defineProperties(Constructor.prototype, protoProps), staticProps && provider_defineProperties(Constructor, staticProps), Constructor;
		})(Provider, [{key: 'getElements', value: function getElements(_type) {
			throw new Error('Provider.getElements() is not implemented!');
		}}, {key: 'handleAPI', value: function handleAPI(_api) {
			throw new Error('Provider.handleAPI() is not implemented!');
		}}, {key: 'getConfig', value: function getConfig() {
			return console.error('Provider.getConfig() is not implemented!'), {};
		}}]), Provider;
	})(); function esm_extends() {
		return (esm_extends = Object.assign || function (target) {
			for (let i = 1; i < arguments.length; i++) {
				let source = arguments[i]; for (let key in source) {
					Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
				}
			}

			return target;
		}).apply(this, arguments);
	}

	let esm_DOCS_MODE = window_default.a.DOCS_MODE; emotion_theming_browser_esm.a.displayName = 'ThemeProvider', index_module.b.displayName = 'HelmetProvider'; let getDocsMode = function getDocsMode() {
		try {
			return Boolean(esm_DOCS_MODE);
		} catch (e) {
			return !1;
		}
	};

	let esm_Container = Object({NODE_ENV: 'production', NODE_PATH: [], STORYBOOK: 'true', PUBLIC_URL: '.'}).XSTORYBOOK_EXAMPLE_APP ? react_default.a.StrictMode : react_default.a.Fragment; let esm_Root = function Root(_ref) {
		let {provider} = _ref; let
			{history} = _ref; return react_default.a.createElement(esm_Container, {key: 'container'}, react_default.a.createElement(index_module.b, {key: 'helmet.Provider'}, react_default.a.createElement(es.c, {key: 'location.provider', history}, react_default.a.createElement(router.b, {key: 'location.consumer'}, (locationData => react_default.a.createElement(esm.c, {key: 'manager', provider, ...locationData, docsMode: getDocsMode()}, (_ref2 => {
			let {state} = _ref2; let {api} = _ref2; let panelCount = Object.keys(api.getPanels()).length; let story = api.getData(state.storyId, state.refId); let
				isLoading = story ? Boolean(state.refs[state.refId]) && !state.refs[state.refId].ready : !state.storiesFailed && !state.storiesConfigured; return react_default.a.createElement(emotion_theming_browser_esm.a, {key: 'theme.provider', theme: Object(ensure.a)(state.theme)}, react_default.a.createElement(app, {key: 'app', viewMode: state.viewMode, layout: isLoading ? ({...state.layout, showPanel: !1}) : state.layout, panelCount, docsOnly: story && story.parameters && story.parameters.docsOnly}));
		})))))));
	};

	esm_Root.displayName = 'Root'; __webpack_require__(627), __webpack_require__(250); let channels_dist_esm = __webpack_require__(204); let dist_cjs = __webpack_require__(118); function esm_toArray(arr) {
		return (function esm_arrayWithHoles(arr) {
			if (Array.isArray(arr)) {
				return arr;
			}
		})(arr) || esm_iterableToArray(arr) || esm_unsupportedIterableToArray(arr) || (function esm_nonIterableRest() {
			throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
		})();
	}

	function esm_toConsumableArray(arr) {
		return (function esm_arrayWithoutHoles(arr) {
			if (Array.isArray(arr)) {
				return esm_arrayLikeToArray(arr);
			}
		})(arr) || esm_iterableToArray(arr) || esm_unsupportedIterableToArray(arr) || (function esm_nonIterableSpread() {
			throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
		})();
	}

	function esm_unsupportedIterableToArray(o, minLen) {
		if (o) {
			if (typeof o === 'string') {
				return esm_arrayLikeToArray(o, minLen);
			}

			let n = Object.prototype.toString.call(o).slice(8, -1); return n === 'Object' && o.constructor && (n = o.constructor.name), n === 'Map' || n === 'Set' ? Array.from(o) : n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? esm_arrayLikeToArray(o, minLen) : void 0;
		}
	}

	function esm_iterableToArray(iter) {
		if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(iter)) {
			return Array.from(iter);
		}
	}

	function esm_arrayLikeToArray(arr, len) {
		(len == null || len > arr.length) && (len = arr.length); for (var i = 0, arr2 = new Array(len); i < len; i++) {
			arr2[i] = arr[i];
		}

		return arr2;
	}

	function esm_defineProperties(target, props) {
		for (let i = 0; i < props.length; i++) {
			let descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 'value' in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
		}
	}

	let esm_globalWindow = window_default.a.window; let esm_document = window_default.a.document; let esm_location = window_default.a.location; let KEY = 'storybook-channel'; let esm_PostmsgTransport = (function () {
		function PostmsgTransport(config) {
			if ((function esm_classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError('Cannot call a class as a function');
				}
			})(this, PostmsgTransport), this.config = config, this.buffer = void 0, this.handler = void 0, this.connected = void 0, this.buffer = [], this.handler = null, esm_globalWindow.addEventListener('message', this.handleEvent.bind(this), !1), config.page !== 'manager' && config.page !== 'preview') {
				throw new Error('postmsg-channel: "config.page" cannot be "'.concat(config.page, '"'));
			}
		}

		return (function esm_createClass(Constructor, protoProps, staticProps) {
			return protoProps && esm_defineProperties(Constructor.prototype, protoProps), staticProps && esm_defineProperties(Constructor, staticProps), Constructor;
		})(PostmsgTransport, [{key: 'setHandler', value: function setHandler(handler) {
			let _this = this; this.handler = function () {
				for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
					args[_key] = arguments[_key];
				}

				handler.apply(_this, args), !_this.connected && _this.getLocalFrame().length && (_this.flush(), _this.connected = !0);
			};
		}}, {key: 'send', value: function send(event, options) {
			let target; let _this2 = this; let depth = 25; let allowFunction = !0; options && typeof options.allowFunction === 'boolean' && (allowFunction = options.allowFunction), options && Number.isInteger(options.depth) && (depth = options.depth), options && typeof options.target === 'string' && (target = options.target); let frames = this.getFrames(target); let query = lib_default.a.parse(esm_location.search, {ignoreQueryPrefix: !0}); let data = Object(dist_cjs.stringify)({key: KEY, event, refId: query.refId}, {maxDepth: depth, allowFunction}); return frames.length ? (this.buffer.length && this.flush(), frames.forEach((f => {
				try {
					f.postMessage(data, '*');
				} catch (e) {
					console.error('sending over postmessage fail');
				}
			})), Promise.resolve(null)) : new Promise(((resolve, reject) => {
				_this2.buffer.push({event, resolve, reject});
			}));
		}}, {key: 'flush', value: function flush() {
			let _this3 = this; let {buffer} = this; this.buffer = [], buffer.forEach((item => {
				_this3.send(item.event).then(item.resolve).catch(item.reject);
			}));
		}}, {key: 'getFrames', value: function getFrames(target) {
			if (this.config.page === 'manager') {
				let list = esm_toConsumableArray(esm_document.querySelectorAll('iframe[data-is-storybook][data-is-loaded]')).filter((e => {
					try {
						return Boolean(e.contentWindow) && void 0 !== e.dataset.isStorybook && e.id === target;
					} catch (er) {
						return !1;
					}
				})).map((e => e.contentWindow)); return list.length ? list : this.getCurrentFrames();
			}

			return esm_globalWindow && esm_globalWindow.parent && esm_globalWindow.parent !== esm_globalWindow ? [esm_globalWindow.parent] : [];
		}}, {key: 'getCurrentFrames', value: function getCurrentFrames() {
			return this.config.page === 'manager' ? esm_toConsumableArray(esm_document.querySelectorAll('[data-is-storybook="true"]')).map((e => e.contentWindow)) : esm_globalWindow && esm_globalWindow.parent ? [esm_globalWindow.parent] : [];
		}}, {key: 'getLocalFrame', value: function getLocalFrame() {
			return this.config.page === 'manager' ? esm_toConsumableArray(esm_document.querySelectorAll('#storybook-preview-iframe')).map((e => e.contentWindow)) : esm_globalWindow && esm_globalWindow.parent ? [esm_globalWindow.parent] : [];
		}}, {key: 'handleEvent', value: function handleEvent(rawEvent) {
			try {
				let {data} = rawEvent; let _ref = typeof data === 'string' && Object(dist_cjs.isJSON)(data) ? Object(dist_cjs.parse)(data) : data; let {key} = _ref; let {event} = _ref; let
					{refId} = _ref; if (key === KEY) {
					let pageString = this.config.page === 'manager' ? '<span style="color: #37D5D3; background: black"> manager </span>' : '<span style="color: #1EA7FD; background: black"> preview </span>'; let eventString = Object.values(core_events_dist_esm).includes(event.type) ? '<span style="color: #FF4785">'.concat(event.type, '</span>') : '<span style="color: #FFAE00">'.concat(event.type, '</span>'); if (refId && (event.refId = refId), event.source = this.config.page === 'preview' ? rawEvent.origin : esm_getEventSourceUrl(rawEvent), !event.source) {
						return void client_logger_dist_esm.c.error(''.concat(pageString, ' received ').concat(eventString, ' but was unable to determine the source of the event'));
					}

					let message = ''.concat(pageString, ' received ').concat(eventString, ' (').concat(data.length, ')'); client_logger_dist_esm.c.debug.apply(client_logger_dist_esm.c, [esm_location.origin !== event.source ? message : ''.concat(message, ' <span style="color: gray">(on ').concat(esm_location.origin, ' from ').concat(event.source, ')</span>')].concat(esm_toConsumableArray(event.args))), this.handler(event);
				}
			} catch (error) {
				client_logger_dist_esm.a.error(error);
			}
		}}]), PostmsgTransport;
	})(); var esm_getEventSourceUrl = function getEventSourceUrl(event) {
		let _frames$filter2 = esm_toArray(esm_toConsumableArray(esm_document.querySelectorAll('iframe[data-is-storybook]')).filter((element => {
			try {
				return element.contentWindow === event.source;
			} catch (err) {}

			let origin; let src = element.getAttribute('src'); try {
				origin = new URL(src, esm_document.location).origin;
			} catch (err) {
				return !1;
			}

			return origin === event.origin;
		}))); let frame = _frames$filter2[0]; let remainder = _frames$filter2.slice(1); if (frame && remainder.length === 0) {
			let src = frame.getAttribute('src'); let _URL2 = new URL(src, esm_document.location); let {protocol} = _URL2; let {host} = _URL2; let {pathname} = _URL2; return ''.concat(protocol, '//').concat(host).concat(pathname);
		}

		return remainder.length > 0 && client_logger_dist_esm.a.error('found multiple candidates for event source'), null;
	};

	function provider_typeof(obj) {
		return (provider_typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function _typeof(obj) {
			return typeof obj;
		} : function _typeof(obj) {
			return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
		})(obj);
	}

	function manager_provider_defineProperties(target, props) {
		for (let i = 0; i < props.length; i++) {
			let descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 'value' in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
		}
	}

	function provider_setPrototypeOf(o, p) {
		return (provider_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
			return o.__proto__ = p, o;
		})(o, p);
	}

	function provider_createSuper(Derived) {
		let hasNativeReflectConstruct = (function provider_isNativeReflectConstruct() {
			if (typeof Reflect === 'undefined' || !Reflect.construct) {
				return !1;
			}

			if (Reflect.construct.sham) {
				return !1;
			}

			if (typeof Proxy === 'function') {
				return !0;
			}

			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (() => {}))), !0;
			} catch (e) {
				return !1;
			}
		})(); return function _createSuperInternal() {
			let result; let Super = provider_getPrototypeOf(Derived); if (hasNativeReflectConstruct) {
				let NewTarget = provider_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget);
			} else {
				result = Super.apply(this, arguments);
			}

			return provider_possibleConstructorReturn(this, result);
		};
	}

	function provider_possibleConstructorReturn(self, call) {
		return !call || provider_typeof(call) !== 'object' && typeof call !== 'function' ? (function provider_assertThisInitialized(self) {
			if (void 0 === self) {
				throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
			}

			return self;
		})(self) : call;
	}

	function provider_getPrototypeOf(o) {
		return (provider_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
			return o.__proto__ || Object.getPrototypeOf(o);
		})(o);
	}

	let provider_ReactProvider = (function (_Provider) {
		!(function provider_inherits(subClass, superClass) {
			if (typeof superClass !== 'function' && superClass !== null) {
				throw new TypeError('Super expression must either be null or a function');
			}

			subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {value: subClass, writable: !0, configurable: !0}}), superClass && provider_setPrototypeOf(subClass, superClass);
		})(ReactProvider, _Provider);

		let _super = provider_createSuper(ReactProvider); function ReactProvider() {
			let _this; !(function manager_provider_classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError('Cannot call a class as a function');
				}
			})(this, ReactProvider), (_this = _super.call(this)).addons = void 0, _this.channel = void 0; let channel = (function createChannel(_ref2) {
				let {page} = _ref2; let
					transport = new esm_PostmsgTransport({page}); return new channels_dist_esm.a({transport});
			})({page: 'manager'}); return addons_dist_esm.a.setChannel(channel), channel.emit(core_events_dist_esm.default.CHANNEL_CREATED), _this.addons = addons_dist_esm.a, _this.channel = channel, _this;
		}

		return (function manager_provider_createClass(Constructor, protoProps, staticProps) {
			return protoProps && manager_provider_defineProperties(Constructor.prototype, protoProps), staticProps && manager_provider_defineProperties(Constructor, staticProps), Constructor;
		})(ReactProvider, [{key: 'getElements', value: function getElements(type) {
			return this.addons.getElements(type);
		}}, {key: 'getConfig', value: function getConfig() {
			return this.addons.getConfig();
		}}, {key: 'handleAPI', value: function handleAPI(api) {
			this.addons.loadAddons(api);
		}}]), ReactProvider;
	})(Provider); let conditional_polyfills_globalWindow = window_default.a.window; let manager_document = window_default.a.document; (function importPolyfills() {
		let polyfills = []; if (!conditional_polyfills_globalWindow.fetch) {
			polyfills.push(__webpack_require__.e(12).then(__webpack_require__.t.bind(null, 945, 7)).then((function patch(_ref) {
				let fetch = _ref.default; conditional_polyfills_globalWindow.fetch = fetch;
			})));
		}

		return Promise.all(polyfills);
	})().then((() => {
		!(function renderStorybookUI(domNode, provider) {
			if (!(provider instanceof Provider)) {
				throw new Error('provider is not extended from the base Provider');
			}

			react_dom_default.a.render(react_default.a.createElement(esm_Root, {key: 'root', provider}), domNode);
		})(manager_document.getElementById('root'), new provider_ReactProvider());
	}));
}, 853(module, __webpack_exports__, __webpack_require__) {
	'use strict'; __webpack_require__.r(__webpack_exports__); __webpack_require__(31), __webpack_require__(67); let react = __webpack_require__(0); let react_default = __webpack_require__.n(react); let esm = __webpack_require__(119); let types = __webpack_require__(429); let useUpdate = function useUpdate(update, value) {
		let previousValue = (function usePrevious(value) {
			let ref = Object(react.useRef)(); return Object(react.useEffect)((() => {
				ref.current = value;
			}), [value]), ref.current;
		})(value); return update ? value : previousValue;
	};

	let addon_panel_AddonPanel = function AddonPanel(_ref) {
		let {active} = _ref; let
			{children} = _ref; return react_default.a.createElement('div', {hidden: !active, style: {transform: 'translateX(0px)'}}, useUpdate(active, children));
	};

	addon_panel_AddonPanel.displayName = 'AddonPanel'; let dist_esm = __webpack_require__(11); let theming_dist_esm = (__webpack_require__(42), __webpack_require__(43), __webpack_require__(15), __webpack_require__(4), __webpack_require__(9), __webpack_require__(5), __webpack_require__(13), __webpack_require__(6), __webpack_require__(7), __webpack_require__(10), __webpack_require__(16), __webpack_require__(14), __webpack_require__(17), __webpack_require__(1)); let link_link = __webpack_require__(166); let NoControlsWrapper = theming_dist_esm.styled.div((_ref => {
		let {theme} = _ref; return {background: theme.background.warning, color: theme.color.darkest, padding: '10px 15px', lineHeight: '20px', boxShadow: ''.concat(theme.appBorderColor, ' 0 -1px 0 0 inset')};
	})); let NoControlsWarning_NoControlsWarning = function NoControlsWarning() {
		return react_default.a.createElement(NoControlsWrapper, null, 'This story is not configured to handle controls.', ' ', react_default.a.createElement(link_link.a, {href: 'https://storybook.js.org/docs/react/essentials/controls', target: '_blank', cancel: !1, withArrow: !0}, 'Learn how to add controls'));
	};

	NoControlsWarning_NoControlsWarning.displayName = 'NoControlsWarning'; __webpack_require__(18), __webpack_require__(120), __webpack_require__(38), __webpack_require__(23), __webpack_require__(22); let pickBy = __webpack_require__(444); let pickBy_default = __webpack_require__.n(pickBy); let polished_esm = __webpack_require__(3); let icon_icon = __webpack_require__(60); let index_module = __webpack_require__(445); let headerCommon = function headerCommon(_ref) {
		return {margin: '20px 0 8px', padding: 0, cursor: 'text', position: 'relative', color: _ref.theme.color.defaultText, '&:first-of-type': {marginTop: 0, paddingTop: 0}, '&:hover a.anchor': {textDecoration: 'none'}, '& tt, & code': {fontSize: 'inherit'}};
	};

	let shared_codeCommon = function codeCommon(_ref2) {
		let {theme} = _ref2; return {lineHeight: 1, margin: '0 2px', padding: '3px 5px', whiteSpace: 'nowrap', borderRadius: 3, fontSize: theme.typography.size.s2 - 1, border: theme.base === 'light' ? '1px solid '.concat(theme.color.mediumlight) : '1px solid '.concat(theme.color.darker), color: theme.base === 'light' ? Object(polished_esm.e)(0.1, theme.color.defaultText) : Object(polished_esm.e)(0.3, theme.color.defaultText), backgroundColor: theme.base === 'light' ? theme.color.lighter : theme.color.border};
	};

	let withReset = function withReset(_ref3) {
		let {theme} = _ref3; return {fontFamily: theme.typography.fonts.base, fontSize: theme.typography.size.s3, margin: 0, WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', WebkitOverflowScrolling: 'touch'};
	};

	let withMargin = {margin: '16px 0'}; let Table = theming_dist_esm.styled.table((_ref => {
		let {theme} = _ref; return {'&&': {borderCollapse: 'collapse', borderSpacing: 0, border: 'none', tr: {border: 'none !important', background: 'none'}, 'td, th': {padding: 0, border: 'none', width: 'auto!important'}, marginTop: 0, marginBottom: 0, 'th:first-of-type, td:first-of-type': {paddingLeft: 0}, 'th:last-of-type, td:last-of-type': {paddingRight: 0}, td: {paddingTop: 0, paddingBottom: 4, '&:not(:first-of-type)': {paddingLeft: 10, paddingRight: 0}}, tbody: {boxShadow: 'none', border: 'none'}, code: shared_codeCommon({theme}), '& code': {margin: 0, display: 'inline-block', fontSize: theme.typography.size.s1}}};
	})); let ArgJsDoc_ArgJsDoc = function ArgJsDoc(_ref2) {
		let {tags} = _ref2; let params = (tags.params || []).filter((x => x.description)); let hasDisplayableParams = params.length !== 0; let
			hasDisplayableReturns = tags.returns != null && tags.returns.description != null; return hasDisplayableParams || hasDisplayableReturns ? react_default.a.createElement(Table, null, react_default.a.createElement('tbody', null, hasDisplayableParams && params.map((x => react_default.a.createElement('tr', {key: x.name}, react_default.a.createElement('td', null, react_default.a.createElement('code', null, x.name)), react_default.a.createElement('td', null, x.description)))), hasDisplayableReturns && react_default.a.createElement('tr', {key: 'returns'}, react_default.a.createElement('td', null, react_default.a.createElement('code', null, 'Returns')), react_default.a.createElement('td', null, tags.returns.description)))) : null;
	};

	ArgJsDoc_ArgJsDoc.displayName = 'ArgJsDoc'; __webpack_require__(77), __webpack_require__(26), __webpack_require__(110), __webpack_require__(88); let memoizerific = __webpack_require__(28); let memoizerific_default = __webpack_require__.n(memoizerific); let uniq = __webpack_require__(446); let uniq_default = __webpack_require__.n(uniq); let lazy_WithTooltip = __webpack_require__(405); let lazy_syntaxhighlighter = __webpack_require__(212); function _slicedToArray(arr, i) {
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
		})(arr, i) || _unsupportedIterableToArray(arr, i) || (function _nonIterableRest() {
			throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
		})();
	}

	function _toConsumableArray(arr) {
		return (function _arrayWithoutHoles(arr) {
			if (Array.isArray(arr)) {
				return _arrayLikeToArray(arr);
			}
		})(arr) || (function _iterableToArray(iter) {
			if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(iter)) {
				return Array.from(iter);
			}
		})(arr) || _unsupportedIterableToArray(arr) || (function _nonIterableSpread() {
			throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
		})();
	}

	function _unsupportedIterableToArray(o, minLen) {
		if (o) {
			if (typeof o === 'string') {
				return _arrayLikeToArray(o, minLen);
			}

			let n = Object.prototype.toString.call(o).slice(8, -1); return n === 'Object' && o.constructor && (n = o.constructor.name), n === 'Map' || n === 'Set' ? Array.from(o) : n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _arrayLikeToArray(o, minLen) : void 0;
		}
	}

	function _arrayLikeToArray(arr, len) {
		(len == null || len > arr.length) && (len = arr.length); for (var i = 0, arr2 = new Array(len); i < len; i++) {
			arr2[i] = arr[i];
		}

		return arr2;
	}

	let Summary = theming_dist_esm.styled.div((_ref => ({display: 'flex', flexDirection: _ref.isExpanded ? 'column' : 'row', flexWrap: 'wrap', alignItems: 'flex-start', marginBottom: '-4px', minWidth: 100}))); let Text = theming_dist_esm.styled.span(shared_codeCommon, (_ref2 => {
		let {theme} = _ref2; let _ref2$simple = _ref2.simple; let
			simple = void 0 !== _ref2$simple && _ref2$simple; return {flex: '0 0 auto', fontFamily: theme.typography.fonts.mono, fontSize: theme.typography.size.s1, wordBreak: 'break-word', whiteSpace: 'normal', maxWidth: '100%', margin: 0, marginRight: '4px', marginBottom: '4px', paddingTop: '2px', paddingBottom: '2px', lineHeight: '13px', ...simple && {background: 'transparent', border: '0 none', paddingLeft: 0}};
	})); let ExpandButton = theming_dist_esm.styled.button((_ref3 => {
		let {theme} = _ref3; return {fontFamily: theme.typography.fonts.mono, color: theme.color.secondary, marginBottom: '4px', background: 'none', border: 'none'};
	})); let Expandable = theming_dist_esm.styled.div(shared_codeCommon, (_ref4 => {
		let {theme} = _ref4; return {fontFamily: theme.typography.fonts.mono, color: theme.color.secondary, fontSize: theme.typography.size.s1, margin: 0, whiteSpace: 'nowrap', display: 'flex', alignItems: 'center'};
	})); let Detail = theming_dist_esm.styled.div((_ref5 => {
		let {theme} = _ref5; return {width: _ref5.width, minWidth: 200, maxWidth: 800, padding: 15, fontFamily: theme.typography.fonts.mono, fontSize: theme.typography.size.s1, boxSizing: 'content-box', '& code': {padding: '0 !important'}};
	})); let ArrowIcon = Object(theming_dist_esm.styled)(icon_icon.a)({height: 10, width: 10, minWidth: 10, marginLeft: 4}); let ArgValue_EmptyArg = function EmptyArg() {
		return react_default.a.createElement('span', null, '-');
	};

	ArgValue_EmptyArg.displayName = 'EmptyArg'; let ArgValue_ArgText = function ArgText(_ref6) {
		let {text} = _ref6; let
			{simple} = _ref6; return react_default.a.createElement(Text, {simple}, text);
	};

	ArgValue_ArgText.displayName = 'ArgText'; let calculateDetailWidth = memoizerific_default()(1e3)((detail => {
		let lines = detail.split(/\r?\n/); return ''.concat(Math.max.apply(Math, _toConsumableArray(lines.map((x => x.length)))), 'ch');
	})); let ArgValue_renderSummaryItems = function renderSummaryItems(summaryItems) {
		let isExpanded = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]; let items = summaryItems; return isExpanded || (items = summaryItems.slice(0, 8)), items.map((item => react_default.a.createElement(ArgValue_ArgText, {key: item, text: item === '' ? '""' : item})));
	};

	let ArgValue_ArgSummary = function ArgSummary(_ref7) {
		let {value} = _ref7; let {initialExpandedArgs} = _ref7; let {summary} = value; let {detail} = value; let _useState2 = _slicedToArray(Object(react.useState)(!1), 2); let isOpen = _useState2[0]; let setIsOpen = _useState2[1]; let _useState4 = _slicedToArray(Object(react.useState)(initialExpandedArgs || !1), 2); let isExpanded = _useState4[0]; let
			setIsExpanded = _useState4[1]; if (summary == null) {
			return null;
		}

		let summaryAsString = typeof summary.toString === 'function' ? summary.toString() : summary; if (detail == null) {
			if (/[(){}[\]<>]/.test(summaryAsString)) {
				return react_default.a.createElement(ArgValue_ArgText, {text: summaryAsString});
			}

			let summaryItems = (function getSummaryItems(summary) {
				if (!summary) {
					return [summary];
				}

				let summaryItems = summary.split('|').map((value => value.trim())); return uniq_default()(summaryItems);
			})(summaryAsString); let itemsCount = summaryItems.length; return itemsCount > 8 ? react_default.a.createElement(Summary, {isExpanded}, ArgValue_renderSummaryItems(summaryItems, isExpanded), react_default.a.createElement(ExpandButton, {onClick: function onClick() {
				return setIsExpanded(!isExpanded);
			}}, isExpanded ? 'Show less...' : 'Show '.concat(itemsCount - 8, ' more...'))) : react_default.a.createElement(Summary, null, ArgValue_renderSummaryItems(summaryItems));
		}

		return react_default.a.createElement(lazy_WithTooltip.b, {closeOnClick: !0, trigger: 'click', placement: 'bottom', tooltipShown: isOpen, onVisibilityChange: function onVisibilityChange(isVisible) {
			setIsOpen(isVisible);
		}, tooltip: react_default.a.createElement(Detail, {width: calculateDetailWidth(detail)}, react_default.a.createElement(lazy_syntaxhighlighter.a, {language: 'jsx', format: !1}, detail))}, react_default.a.createElement(Expandable, {className: 'sbdocs-expandable'}, react_default.a.createElement('span', null, summaryAsString), react_default.a.createElement(ArrowIcon, {icon: isOpen ? 'arrowup' : 'arrowdown'})));
	};

	ArgValue_ArgSummary.displayName = 'ArgSummary'; let ArgValue_ArgValue = function ArgValue(_ref8) {
		let {value} = _ref8; let
			{initialExpandedArgs} = _ref8; return value == null ? react_default.a.createElement(ArgValue_EmptyArg, null) : react_default.a.createElement(ArgValue_ArgSummary, {value, initialExpandedArgs});
	};

	let controls_Object = __webpack_require__(427); let controls_Boolean = __webpack_require__(415); let controls = __webpack_require__(449); let controls_Date = __webpack_require__(416); let controls_Number = __webpack_require__(206); let dist = (__webpack_require__(50), __webpack_require__(33)); let dist_default = __webpack_require__.n(dist); let client_logger_dist_esm = __webpack_require__(25); __webpack_require__(52), __webpack_require__(82), __webpack_require__(414), __webpack_require__(58); function helpers_slicedToArray(arr, i) {
		return (function helpers_arrayWithHoles(arr) {
			if (Array.isArray(arr)) {
				return arr;
			}
		})(arr) || (function helpers_iterableToArrayLimit(arr, i) {
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
		})(arr, i) || (function helpers_unsupportedIterableToArray(o, minLen) {
			if (!o) {
				return;
			}

			if (typeof o === 'string') {
				return helpers_arrayLikeToArray(o, minLen);
			}

			let n = Object.prototype.toString.call(o).slice(8, -1); n === 'Object' && o.constructor && (n = o.constructor.name); if (n === 'Map' || n === 'Set') {
				return Array.from(o);
			}

			if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
				return helpers_arrayLikeToArray(o, minLen);
			}
		})(arr, i) || (function helpers_nonIterableRest() {
			throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
		})();
	}

	function helpers_arrayLikeToArray(arr, len) {
		(len == null || len > arr.length) && (len = arr.length); for (var i = 0, arr2 = new Array(len); i < len; i++) {
			arr2[i] = arr[i];
		}

		return arr2;
	}

	let selectedKey = function selectedKey(value, options) {
		let entry = options && Object.entries(options).find((_ref => {
			let _ref2 = helpers_slicedToArray(_ref, 2); _ref2[0]; return _ref2[1] === value;
		})); return entry ? entry[0] : void 0;
	};

	let selectedKeys = function selectedKeys(value, options) {
		return value && options ? Object.entries(options).filter((entry => value.includes(entry[1]))).map((entry => entry[0])) : [];
	};

	let selectedValues = function selectedValues(keys, options) {
		return keys && options && keys.map((key => options[key]));
	};

	let helpers = __webpack_require__(39); function Checkbox_toConsumableArray(arr) {
		return (function Checkbox_arrayWithoutHoles(arr) {
			if (Array.isArray(arr)) {
				return Checkbox_arrayLikeToArray(arr);
			}
		})(arr) || (function Checkbox_iterableToArray(iter) {
			if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(iter)) {
				return Array.from(iter);
			}
		})(arr) || Checkbox_unsupportedIterableToArray(arr) || (function Checkbox_nonIterableSpread() {
			throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
		})();
	}

	function Checkbox_slicedToArray(arr, i) {
		return (function Checkbox_arrayWithHoles(arr) {
			if (Array.isArray(arr)) {
				return arr;
			}
		})(arr) || (function Checkbox_iterableToArrayLimit(arr, i) {
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
		})(arr, i) || Checkbox_unsupportedIterableToArray(arr, i) || (function Checkbox_nonIterableRest() {
			throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
		})();
	}

	function Checkbox_unsupportedIterableToArray(o, minLen) {
		if (o) {
			if (typeof o === 'string') {
				return Checkbox_arrayLikeToArray(o, minLen);
			}

			let n = Object.prototype.toString.call(o).slice(8, -1); return n === 'Object' && o.constructor && (n = o.constructor.name), n === 'Map' || n === 'Set' ? Array.from(o) : n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Checkbox_arrayLikeToArray(o, minLen) : void 0;
		}
	}

	function Checkbox_arrayLikeToArray(arr, len) {
		(len == null || len > arr.length) && (len = arr.length); for (var i = 0, arr2 = new Array(len); i < len; i++) {
			arr2[i] = arr[i];
		}

		return arr2;
	}

	let Wrapper = theming_dist_esm.styled.div((_ref => _ref.isInline ? {display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', label: {display: 'inline-flex', marginRight: 15}} : {label: {display: 'flex'}})); let Checkbox_Text = theming_dist_esm.styled.span({}); let Label = theming_dist_esm.styled.label({lineHeight: '20px', alignItems: 'center', marginBottom: 8, '&:last-child': {marginBottom: 0}, input: {margin: 0, marginRight: 6}}); let Checkbox_CheckboxControl = function CheckboxControl(_ref2) {
		let {name} = _ref2; let {options} = _ref2; let {value} = _ref2; let {onChange} = _ref2; let
			{isInline} = _ref2; if (!options) {
			return client_logger_dist_esm.a.warn('Checkbox with no options: '.concat(name)), react_default.a.createElement(react_default.a.Fragment, null, '-');
		}

		let initial = selectedKeys(value, options); let _useState2 = Checkbox_slicedToArray(Object(react.useState)(initial), 2); let selected = _useState2[0]; let setSelected = _useState2[1]; let handleChange = function handleChange(e) {
			let option = e.target.value; let updated = Checkbox_toConsumableArray(selected); updated != null && updated.includes(option) ? updated.splice(updated.indexOf(option), 1) : updated.push(option), onChange(selectedValues(updated, options)), setSelected(updated);
		};

		let controlId = Object(helpers.a)(name); return react_default.a.createElement(Wrapper, {isInline}, Object.keys(options).map(((key, index) => {
			let id = ''.concat(controlId, '-').concat(index); return react_default.a.createElement(Label, {key: id, htmlFor: id}, react_default.a.createElement('input', {type: 'checkbox', id, name: id, value: key, onChange: handleChange, checked: selected == null ? void 0 : selected.includes(key)}), react_default.a.createElement(Checkbox_Text, null, key));
		})));
	};

	Checkbox_CheckboxControl.displayName = 'CheckboxControl'; let _templateObject; let Radio_Wrapper = theming_dist_esm.styled.div((_ref => _ref.isInline ? {display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', label: {display: 'inline-flex', marginRight: 15}} : {label: {display: 'flex'}})); let Radio_Text = (theming_dist_esm.styled.fieldset({border: 0, padding: 0, margin: 0}), theming_dist_esm.styled.span({})); let Radio_Label = theming_dist_esm.styled.label({lineHeight: '20px', alignItems: 'center', marginBottom: 8, '&:last-child': {marginBottom: 0}, input: {margin: 0, marginRight: 6}}); let Radio_RadioControl = function RadioControl(_ref2) {
		let {name} = _ref2; let {options} = _ref2; let {value} = _ref2; let _onChange = _ref2.onChange; let
			{isInline} = _ref2; if (!options) {
			return client_logger_dist_esm.a.warn('Radio with no options: '.concat(name)), react_default.a.createElement(react_default.a.Fragment, null, '-');
		}

		let selection = selectedKey(value, options); let controlId = Object(helpers.a)(name); return react_default.a.createElement(Radio_Wrapper, {isInline}, Object.keys(options).map(((key, index) => {
			let id = ''.concat(controlId, '-').concat(index); return react_default.a.createElement(Radio_Label, {key: id, htmlFor: id}, react_default.a.createElement('input', {type: 'radio', id, name: id, value: key, onChange: function onChange(e) {
				return _onChange(options[e.currentTarget.value]);
			}, checked: key === selection}), react_default.a.createElement(Radio_Text, null, key));
		})));
	};

	Radio_RadioControl.displayName = 'RadioControl'; let styleResets = {appearance: 'none', border: '0 none', boxSizing: 'inherit', display: ' block', margin: ' 0', background: 'transparent', padding: 0, fontSize: 'inherit', position: 'relative'}; let OptionsSelect = theming_dist_esm.styled.select((_ref => {
		let {theme} = _ref; return {...styleResets, boxSizing: 'border-box', position: 'relative', padding: '6px 10px', width: '100%', color: theme.input.color || 'inherit', background: theme.input.background, borderRadius: theme.input.borderRadius, boxShadow: ''.concat(theme.input.border, ' 0 0 0 1px inset'), fontSize: theme.typography.size.s2 - 1, lineHeight: '20px', '&:focus': {boxShadow: ''.concat(theme.color.secondary, ' 0 0 0 1px inset'), outline: 'none'}, '&[disabled]': {cursor: 'not-allowed', opacity: 0.5}, '::placeholder': {color: theme.color.mediumdark}, '&[multiple]': {overflow: 'auto', padding: 0, option: {display: 'block', padding: '6px 10px', marginLeft: 1, marginRight: 1}}};
	})); let SelectWrapper = theming_dist_esm.styled.span(_templateObject || (_templateObject = (function _taggedTemplateLiteral(strings, raw) {
		return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, {raw: {value: Object.freeze(raw)}}));
	})(['\n  display: inline-block;\n  line-height: normal;\n  overflow: hidden;\n  position: relative;\n  vertical-align: top;\n  width: 100%;\n\n  svg {\n    position: absolute;\n    z-index: 1;\n    pointer-events: none;\n    height: 12px;\n    margin-top: -6px;\n    right: 12px;\n    top: 50%;\n\n    path {\n      fill: currentColor;\n    }\n  }\n']))); let Select_SingleSelect = function SingleSelect(_ref2) {
		let {name} = _ref2; let {value} = _ref2; let {options} = _ref2; let {onChange} = _ref2; let selection = selectedKey(value, options) || 'Choose option...'; let
			controlId = Object(helpers.a)(name); return react_default.a.createElement(SelectWrapper, null, react_default.a.createElement(icon_icon.a, {icon: 'arrowdown'}), react_default.a.createElement(OptionsSelect, {id: controlId, value: selection, onChange: function handleChange(e) {
			onChange(options[e.currentTarget.value]);
		}}, react_default.a.createElement('option', {key: 'no-selection', disabled: !0}, 'Choose option...'), Object.keys(options).map((key => react_default.a.createElement('option', {key}, key)))));
	};

	Select_SingleSelect.displayName = 'SingleSelect'; let Select_MultiSelect = function MultiSelect(_ref3) {
		let {name} = _ref3; let {value} = _ref3; let {options} = _ref3; let {onChange} = _ref3; let selection = selectedKeys(value, options); let
			controlId = Object(helpers.a)(name); return react_default.a.createElement(SelectWrapper, null, react_default.a.createElement(OptionsSelect, {id: controlId, multiple: !0, value: selection, onChange: function handleChange(e) {
			let selection = Array.from(e.currentTarget.options).filter((option => option.selected)).map((option => option.value)); onChange(selectedValues(selection, options));
		}}, Object.keys(options).map((key => react_default.a.createElement('option', {key}, key)))));
	};

	Select_MultiSelect.displayName = 'MultiSelect'; let Options_templateObject; let Select_SelectControl = function SelectControl(props) {
		let {name} = props; return props.options ? props.isMulti ? react_default.a.createElement(Select_MultiSelect, props) : react_default.a.createElement(Select_SingleSelect, props) : (client_logger_dist_esm.a.warn('Select with no options: '.concat(name)), react_default.a.createElement(react_default.a.Fragment, null, '-'));
	};

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

	let normalizeOptions = function normalizeOptions(options, labels) {
		return Array.isArray(options) ? options.reduce(((acc, item) => (acc[(labels == null ? void 0 : labels[item]) || String(item)] = item, acc)), {}) : options;
	};

	let Options_OptionsControl = function OptionsControl(props) {
		let _props$type = props.type; let type = void 0 === _props$type ? 'select' : _props$type; let {options} = props; let {labels} = props; let {argType} = props; let normalized = {...props, options: normalizeOptions(options || argType.options, labels)}; switch (options && client_logger_dist_esm.b.warn(dist_default()(Options_templateObject || (Options_templateObject = (function Options_taggedTemplateLiteral(strings, raw) {
			return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, {raw: {value: Object.freeze(raw)}}));
		})(['\n      \'control.options\' is deprecated and will be removed in Storybook 7.0. Define \'options\' directly on the argType instead, and use \'control.labels\' for custom labels.\n\n      More info: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#deprecated-controloptions\n    '])))), type) {
			case 'check': case 'inline-check': return react_default.a.createElement(Checkbox_CheckboxControl, {...normalized, isInline: type === 'inline-check'}); case 'radio': case 'inline-radio': return react_default.a.createElement(Radio_RadioControl, {...normalized, isInline: type === 'inline-radio'}); case 'select': case 'multi-select': return react_default.a.createElement(Select_SelectControl, {...normalized, isMulti: type === 'multi-select'}); default: throw new Error('Unknown options type: '.concat(type));
		}
	};

	let Range = __webpack_require__(417); let controls_Text = __webpack_require__(418); let Files = __webpack_require__(419); function ArgControl_extends() {
		return (ArgControl_extends = Object.assign || function (target) {
			for (let i = 1; i < arguments.length; i++) {
				let source = arguments[i]; for (let key in source) {
					Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
				}
			}

			return target;
		}).apply(this, arguments);
	}

	function ArgControl_slicedToArray(arr, i) {
		return (function ArgControl_arrayWithHoles(arr) {
			if (Array.isArray(arr)) {
				return arr;
			}
		})(arr) || (function ArgControl_iterableToArrayLimit(arr, i) {
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
		})(arr, i) || (function ArgControl_unsupportedIterableToArray(o, minLen) {
			if (!o) {
				return;
			}

			if (typeof o === 'string') {
				return ArgControl_arrayLikeToArray(o, minLen);
			}

			let n = Object.prototype.toString.call(o).slice(8, -1); n === 'Object' && o.constructor && (n = o.constructor.name); if (n === 'Map' || n === 'Set') {
				return Array.from(o);
			}

			if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
				return ArgControl_arrayLikeToArray(o, minLen);
			}
		})(arr, i) || (function ArgControl_nonIterableRest() {
			throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
		})();
	}

	function ArgControl_arrayLikeToArray(arr, len) {
		(len == null || len > arr.length) && (len = arr.length); for (var i = 0, arr2 = new Array(len); i < len; i++) {
			arr2[i] = arr[i];
		}

		return arr2;
	}

	let ArgControl_NoControl = function NoControl() {
		return react_default.a.createElement(react_default.a.Fragment, null, '-');
	};

	let ArgControl_ArgControl = function ArgControl(_ref) {
		let {row} = _ref; let {arg} = _ref; let {updateArgs} = _ref; let {key} = row; let {control} = row; let _useState2 = ArgControl_slicedToArray(Object(react.useState)(!1), 2); let isFocused = _useState2[0]; let setFocused = _useState2[1]; let _useState4 = ArgControl_slicedToArray(Object(react.useState)({value: arg}), 2); let boxedValue = _useState4[0]; let
			setBoxedValue = _useState4[1]; Object(react.useEffect)((() => {
			isFocused || setBoxedValue({value: arg});
		}), [isFocused, arg]); let onChange = Object(react.useCallback)((argVal => (setBoxedValue({value: argVal}), updateArgs((function _defineProperty(obj, key, value) {
			return key in obj ? Object.defineProperty(obj, key, {value, enumerable: !0, configurable: !0, writable: !0}) : obj[key] = value, obj;
		})({}, key, argVal)), argVal)), [updateArgs, key]); let onBlur = Object(react.useCallback)((() => setFocused(!1)), []); let onFocus = Object(react.useCallback)((() => setFocused(!0)), []); if (!control || control.disable) {
			return react_default.a.createElement(ArgControl_NoControl, null);
		}

		let props = {name: key, argType: row, value: boxedValue.value, onChange, onBlur, onFocus}; switch (control.type) {
			case 'array': case 'object': return react_default.a.createElement(controls_Object.a, {...props, ...control}); case 'boolean': return react_default.a.createElement(controls_Boolean.a, {...props, ...control}); case 'color': return react_default.a.createElement(controls.ColorControl, {...props, ...control}); case 'date': return react_default.a.createElement(controls_Date.a, {...props, ...control}); case 'number': return react_default.a.createElement(controls_Number.a, {...props, ...control}); case 'check': case 'inline-check': case 'radio': case 'inline-radio': case 'select': case 'multi-select': return react_default.a.createElement(Options_OptionsControl, {...props, ...control, controlType: control.type}); case 'range': return react_default.a.createElement(Range.a, {...props, ...control}); case 'text': return react_default.a.createElement(controls_Text.a, {...props, ...control}); case 'file': return react_default.a.createElement(Files.a, {...props, ...control}); default: return react_default.a.createElement(ArgControl_NoControl, null);
		}
	};

	let Name = theming_dist_esm.styled.span({fontWeight: 'bold'}); let Required = theming_dist_esm.styled.span((_ref => {
		let {theme} = _ref; return {color: theme.color.negative, fontFamily: theme.typography.fonts.mono, cursor: 'help'};
	})); let Description = theming_dist_esm.styled.div((_ref2 => {
		let {theme} = _ref2; return {'&&': {p: {margin: '0 0 10px 0'}, a: {color: theme.color.secondary}}, code: shared_codeCommon({theme}), '& code': {margin: 0, display: 'inline-block'}};
	})); let Type = theming_dist_esm.styled.div((_ref3 => {
		let {theme} = _ref3; let
			{hasDescription} = _ref3; return {color: theme.base === 'light' ? Object(polished_esm.e)(0.1, theme.color.defaultText) : Object(polished_esm.e)(0.2, theme.color.defaultText), marginTop: hasDescription ? 4 : 0};
	})); let TypeWithJsDoc = theming_dist_esm.styled.div((_ref4 => {
		let {theme} = _ref4; let
			{hasDescription} = _ref4; return {color: theme.base === 'light' ? Object(polished_esm.e)(0.1, theme.color.defaultText) : Object(polished_esm.e)(0.2, theme.color.defaultText), marginTop: hasDescription ? 12 : 0, marginBottom: 12};
	})); let StyledTd = theming_dist_esm.styled.td((_ref5 => {
		_ref5.theme; return {paddingLeft: _ref5.expandable ? '40px !important' : '20px !important'};
	})); let ArgRow_ArgRow = function ArgRow(props) {
		let _row$type; let {row} = props; let {updateArgs} = props; let {compact} = props; let {expandable} = props; let {initialExpandedArgs} = props; let {name} = row; let {description} = row; let table = row.table || {}; let type = table.type || row.type; let defaultValue = table.defaultValue || row.defaultValue; let required = (_row$type = row.type) === null || void 0 === _row$type ? void 0 : _row$type.required; let hasDescription = description != null && description !== ''; return react_default.a.createElement('tr', null, react_default.a.createElement(StyledTd, {expandable}, react_default.a.createElement(Name, null, name), required ? react_default.a.createElement(Required, {title: 'Required'}, '*') : null), compact ? null : react_default.a.createElement('td', null, hasDescription && react_default.a.createElement(Description, null, react_default.a.createElement(index_module.a, null, description)), table.jsDocTags != null ? react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement(TypeWithJsDoc, {hasDescription}, react_default.a.createElement(ArgValue_ArgValue, {value: type, initialExpandedArgs})), react_default.a.createElement(ArgJsDoc_ArgJsDoc, {tags: table.jsDocTags})) : react_default.a.createElement(Type, {hasDescription}, react_default.a.createElement(ArgValue_ArgValue, {value: type, initialExpandedArgs}))), compact ? null : react_default.a.createElement('td', null, react_default.a.createElement(ArgValue_ArgValue, {value: defaultValue, initialExpandedArgs})), updateArgs ? react_default.a.createElement('td', null, react_default.a.createElement(ArgControl_ArgControl, props)) : null);
	};

	ArgRow_ArgRow.displayName = 'ArgRow'; __webpack_require__(47); function SectionRow_slicedToArray(arr, i) {
		return (function SectionRow_arrayWithHoles(arr) {
			if (Array.isArray(arr)) {
				return arr;
			}
		})(arr) || (function SectionRow_iterableToArrayLimit(arr, i) {
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
		})(arr, i) || (function SectionRow_unsupportedIterableToArray(o, minLen) {
			if (!o) {
				return;
			}

			if (typeof o === 'string') {
				return SectionRow_arrayLikeToArray(o, minLen);
			}

			let n = Object.prototype.toString.call(o).slice(8, -1); n === 'Object' && o.constructor && (n = o.constructor.name); if (n === 'Map' || n === 'Set') {
				return Array.from(o);
			}

			if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
				return SectionRow_arrayLikeToArray(o, minLen);
			}
		})(arr, i) || (function SectionRow_nonIterableRest() {
			throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
		})();
	}

	function SectionRow_arrayLikeToArray(arr, len) {
		(len == null || len > arr.length) && (len = arr.length); for (var i = 0, arr2 = new Array(len); i < len; i++) {
			arr2[i] = arr[i];
		}

		return arr2;
	}

	let ExpanderIcon = Object(theming_dist_esm.styled)(icon_icon.a)((_ref => {
		let {theme} = _ref; return {marginRight: 8, marginLeft: -10, marginTop: -2, height: 12, width: 12, color: theme.base === 'light' ? Object(polished_esm.e)(0.25, theme.color.defaultText) : Object(polished_esm.e)(0.3, theme.color.defaultText), border: 'none', display: 'inline-block'};
	})); let FlexWrapper = theming_dist_esm.styled.span((_ref2 => {
		_ref2.theme; return {display: 'flex', lineHeight: '20px', alignItems: 'center'};
	})); let Section = theming_dist_esm.styled.td((_ref3 => {
		let {theme} = _ref3; return {position: 'relative', letterSpacing: '0.35em', textTransform: 'uppercase', fontWeight: theme.typography.weight.black, fontSize: theme.typography.size.s1 - 1, color: theme.base === 'light' ? Object(polished_esm.e)(0.4, theme.color.defaultText) : Object(polished_esm.e)(0.6, theme.color.defaultText), background: ''.concat(theme.background.app, ' !important'), '& ~ td': {background: ''.concat(theme.background.app, ' !important')}};
	})); let Subsection = theming_dist_esm.styled.td((_ref4 => {
		let {theme} = _ref4; return {position: 'relative', fontWeight: theme.typography.weight.bold, fontSize: theme.typography.size.s2 - 1, background: theme.background.content};
	})); let SectionRow_StyledTd = theming_dist_esm.styled.td((_ref5 => {
		_ref5.theme; return {position: 'relative'};
	})); let StyledTr = theming_dist_esm.styled.tr((_ref6 => {
		let {theme} = _ref6; return {'&:hover > td': {backgroundColor: ''.concat(theme.background.hoverable, ' !important'), boxShadow: ''.concat(theme.color.mediumlight, ' 0 - 1px 0 0 inset'), cursor: 'row-resize'}};
	})); let ClickIntercept = theming_dist_esm.styled.button((() => ({background: 'none', border: 'none', padding: '0', font: 'inherit', position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, height: '100%', width: '100%', color: 'transparent', cursor: 'row-resize !important'}))); let SectionRow_SectionRow = function SectionRow(_ref7) {
		let _ref7$level = _ref7.level; let level = void 0 === _ref7$level ? 'section' : _ref7$level; let {label} = _ref7; let {children} = _ref7; let _ref7$initialExpanded = _ref7.initialExpanded; let initialExpanded = void 0 === _ref7$initialExpanded || _ref7$initialExpanded; let _ref7$colSpan = _ref7.colSpan; let colSpan = void 0 === _ref7$colSpan ? 3 : _ref7$colSpan; let _useState2 = SectionRow_slicedToArray(Object(react.useState)(initialExpanded), 2); let expanded = _useState2[0]; let setExpanded = _useState2[1]; let Level = level === 'subsection' ? Subsection : Section; let itemCount = (children == null ? void 0 : children.length) || 0; let caption = level === 'subsection' ? ''.concat(itemCount, ' item').concat(itemCount !== 1 ? 's' : '') : ''; let icon = expanded ? 'arrowdown' : 'arrowright'; let helperText = ''.concat(expanded ? 'Hide' : 'Side', ' ').concat(level === 'subsection' ? itemCount : label, ' item').concat(itemCount !== 1 ? 's' : ''); return react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement(StyledTr, {title: helperText}, react_default.a.createElement(Level, {colSpan: 1}, react_default.a.createElement(ClickIntercept, {onClick: function onClick(e) {
			return setExpanded(!expanded);
		}, tabIndex: 0}, helperText), react_default.a.createElement(FlexWrapper, null, react_default.a.createElement(ExpanderIcon, {icon}), label)), react_default.a.createElement(SectionRow_StyledTd, {colSpan: colSpan - 1}, react_default.a.createElement(ClickIntercept, {onClick: function onClick(e) {
			return setExpanded(!expanded);
		}, tabIndex: -1, style: {outline: 'none'}}, helperText), expanded ? null : caption)), expanded ? children : null);
	};

	function EmptyBlock_extends() {
		return (EmptyBlock_extends = Object.assign || function (target) {
			for (let i = 1; i < arguments.length; i++) {
				let source = arguments[i]; for (let key in source) {
					Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
				}
			}

			return target;
		}).apply(this, arguments);
	}

	let EmptyBlock_Wrapper = theming_dist_esm.styled.div(withReset, (_ref => {
		let {theme} = _ref; return {backgroundColor: theme.base === 'light' ? 'rgba(0,0,0,.01)' : 'rgba(255,255,255,.01)', borderRadius: theme.appBorderRadius, border: '1px dashed '.concat(theme.appBorderColor), display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20, margin: '25px 0 40px', color: Object(polished_esm.e)(0.3, theme.color.defaultText), fontSize: theme.typography.size.s2};
	})); let EmptyBlock_EmptyBlock = function EmptyBlock(props) {
		return react_default.a.createElement(EmptyBlock_Wrapper, {...props, className: 'docblock-emptyblock'});
	};

	EmptyBlock_EmptyBlock.displayName = 'EmptyBlock'; __webpack_require__(40), __webpack_require__(62); let create = __webpack_require__(207); let emotion_theming_browser_esm = __webpack_require__(397); let convert = __webpack_require__(164); function Source_extends() {
		return (Source_extends = Object.assign || function (target) {
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

	let SourceError; let StyledSyntaxHighlighter = Object(theming_dist_esm.styled)(lazy_syntaxhighlighter.a)((_ref => {
		let {theme} = _ref; return {fontSize: ''.concat(theme.typography.size.s2 - 1, 'px'), lineHeight: '19px', margin: '25px 0 40px', borderRadius: theme.appBorderRadius, boxShadow: theme.base === 'light' ? 'rgba(0, 0, 0, 0.10) 0 1px 3px 0' : 'rgba(0, 0, 0, 0.20) 0 2px 5px 0', 'pre.prismjs': {padding: 20, background: 'inherit'}};
	})); !(function (SourceError) {
		SourceError.NO_STORY = 'There’s no story here.', SourceError.SOURCE_UNAVAILABLE = 'Oh no! The source is not available.';
	})(SourceError || (SourceError = {}));

	let Source_Source = function Source(props) {
		let {error} = props; if (error) {
			return react_default.a.createElement(EmptyBlock_EmptyBlock, null, error);
		}

		let _ref3 = props; let {language} = _ref3; let {code} = _ref3; let {dark} = _ref3; let {format} = _ref3; let rest = _objectWithoutProperties(_ref3, ['language', 'code', 'dark', 'format']); let syntaxHighlighter = react_default.a.createElement(StyledSyntaxHighlighter, {bordered: !0, copyable: !0, format, language, className: 'docblock-source', ...rest}, code); if (void 0 === dark) {
			return syntaxHighlighter;
		}

		let overrideTheme = dark ? create.a.dark : create.a.light; return react_default.a.createElement(emotion_theming_browser_esm.a, {theme: Object(convert.a)(overrideTheme)}, syntaxHighlighter);
	};

	function DocumentFormatting_extends() {
		return (DocumentFormatting_extends = Object.assign || function (target) {
			for (let i = 1; i < arguments.length; i++) {
				let source = arguments[i]; for (let key in source) {
					Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
				}
			}

			return target;
		}).apply(this, arguments);
	}

	function DocumentFormatting_objectWithoutProperties(source, excluded) {
		if (source == null) {
			return {};
		}

		let key; let i; let target = (function DocumentFormatting_objectWithoutPropertiesLoose(source, excluded) {
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

	Source_Source.displayName = 'Source', Source_Source.defaultProps = {format: !1}; theming_dist_esm.styled.h1(withReset, headerCommon, (_ref => {
		let {theme} = _ref; return {fontSize: ''.concat(theme.typography.size.l1, 'px'), fontWeight: theme.typography.weight.black};
	})), theming_dist_esm.styled.h2(withReset, headerCommon, (_ref2 => {
		let {theme} = _ref2; return {fontSize: ''.concat(theme.typography.size.m2, 'px'), paddingBottom: 4, borderBottom: '1px solid '.concat(theme.appBorderColor)};
	})), theming_dist_esm.styled.h3(withReset, headerCommon, (_ref3 => {
		let {theme} = _ref3; return {fontSize: ''.concat(theme.typography.size.m1, 'px')};
	})), theming_dist_esm.styled.h4(withReset, headerCommon, (_ref4 => {
		let {theme} = _ref4; return {fontSize: ''.concat(theme.typography.size.s3, 'px')};
	})), theming_dist_esm.styled.h5(withReset, headerCommon, (_ref5 => {
		let {theme} = _ref5; return {fontSize: ''.concat(theme.typography.size.s2, 'px')};
	})), theming_dist_esm.styled.h6(withReset, headerCommon, (_ref6 => {
		let {theme} = _ref6; return {fontSize: ''.concat(theme.typography.size.s2, 'px'), color: theme.color.dark};
	})), theming_dist_esm.styled.pre(withReset, withMargin, (_ref7 => ({fontFamily: _ref7.theme.typography.fonts.mono, WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale', lineHeight: '18px', padding: '11px 1rem', whiteSpace: 'pre-wrap', color: 'inherit', borderRadius: 3, margin: '1rem 0', '&:not(.prismjs)': {background: 'transparent', border: 'none', borderRadius: 0, padding: 0, margin: 0}, '& pre, &.prismjs': {padding: 15, margin: 0, whiteSpace: 'pre-wrap', color: 'inherit', fontSize: '13px', lineHeight: '19px', code: {color: 'inherit', fontSize: 'inherit'}}, '& code': {whiteSpace: 'pre'}, '& code, & tt': {border: 'none'}}))); let DocumentFormatting_Link = function Link(_ref8) {
		let input = _ref8.href; let {children} = _ref8; let props = DocumentFormatting_objectWithoutProperties(_ref8, ['href', 'children']); let isStorybookPath = /^\//.test(input); let isAnchorUrl = /^#.*/.test(input); let href = isStorybookPath ? '?path='.concat(input) : input; let target = isAnchorUrl ? '_self' : '_top'; return react_default.a.createElement('a', {href, target, ...props}, children);
	};

	DocumentFormatting_Link.displayName = 'Link'; Object(theming_dist_esm.styled)(DocumentFormatting_Link)(withReset, (_ref9 => ({fontSize: 'inherit', lineHeight: '24px', color: _ref9.theme.color.secondary, textDecoration: 'none', '&.absent': {color: '#cc0000'}, '&.anchor': {display: 'block', paddingLeft: 30, marginLeft: -30, cursor: 'pointer', position: 'absolute', top: 0, left: 0, bottom: 0}}))), theming_dist_esm.styled.hr((_ref10 => {
		let {theme} = _ref10; return {border: '0 none', borderTop: '1px solid '.concat(theme.appBorderColor), height: 4, padding: 0};
	})), theming_dist_esm.styled.dl(withReset, {...withMargin, padding: 0, '& dt': {fontSize: '14px', fontWeight: 'bold', fontStyle: 'italic', padding: 0, margin: '16px 0 4px'}, '& dt:first-of-type': {padding: 0}, '& dt > :first-of-type': {marginTop: 0}, '& dt > :last-child': {marginBottom: 0}, '& dd': {margin: '0 0 16px', padding: '0 15px'}, '& dd > :first-of-type': {marginTop: 0}, '& dd > :last-child': {marginBottom: 0}}), theming_dist_esm.styled.blockquote(withReset, withMargin, (_ref11 => {
		let {theme} = _ref11; return {borderLeft: '4px solid '.concat(theme.color.medium), padding: '0 15px', color: theme.color.dark, '& > :first-of-type': {marginTop: 0}, '& > :last-child': {marginBottom: 0}};
	})), theming_dist_esm.styled.table(withReset, withMargin, (_ref12 => {
		let {theme} = _ref12; return {fontSize: theme.typography.size.s2, lineHeight: '24px', padding: 0, borderCollapse: 'collapse', '& tr': {borderTop: '1px solid '.concat(theme.appBorderColor), backgroundColor: theme.appContentBg, margin: 0, padding: 0}, '& tr:nth-of-type(2n)': {backgroundColor: theme.base === 'dark' ? theme.color.darker : theme.color.lighter}, '& tr th': {fontWeight: 'bold', color: theme.color.defaultText, border: '1px solid '.concat(theme.appBorderColor), margin: 0, padding: '6px 13px'}, '& tr td': {border: '1px solid '.concat(theme.appBorderColor), color: theme.color.defaultText, margin: 0, padding: '6px 13px'}, '& tr th :first-of-type, & tr td :first-of-type': {marginTop: 0}, '& tr th :last-child, & tr td :last-child': {marginBottom: 0}};
	})), theming_dist_esm.styled.img({maxWidth: '100%'}), theming_dist_esm.styled.div(withReset), theming_dist_esm.styled.span(withReset, (_ref13 => {
		let {theme} = _ref13; return {'&.frame': {display: 'block', overflow: 'hidden', '& > span': {border: '1px solid '.concat(theme.color.medium), display: 'block', float: 'left', overflow: 'hidden', margin: '13px 0 0', padding: 7, width: 'auto'}, '& span img': {display: 'block', float: 'left'}, '& span span': {clear: 'both', color: theme.color.darkest, display: 'block', padding: '5px 0 0'}}, '&.align-center': {display: 'block', overflow: 'hidden', clear: 'both', '& > span': {display: 'block', overflow: 'hidden', margin: '13px auto 0', textAlign: 'center'}, '& span img': {margin: '0 auto', textAlign: 'center'}}, '&.align-right': {display: 'block', overflow: 'hidden', clear: 'both', '& > span': {display: 'block', overflow: 'hidden', margin: '13px 0 0', textAlign: 'right'}, '& span img': {margin: 0, textAlign: 'right'}}, '&.float-left': {display: 'block', marginRight: 13, overflow: 'hidden', float: 'left', '& span': {margin: '13px 0 0'}}, '&.float-right': {display: 'block', marginLeft: 13, overflow: 'hidden', float: 'right', '& > span': {display: 'block', overflow: 'hidden', margin: '13px auto 0', textAlign: 'right'}}};
	})); let listCommon = {paddingLeft: 30, '& :first-of-type': {marginTop: 0}, '& :last-child': {marginBottom: 0}}; let DefaultCodeBlock = (theming_dist_esm.styled.li(withReset, (_ref14 => {
		let {theme} = _ref14; return {fontSize: theme.typography.size.s2, color: theme.color.defaultText, lineHeight: '24px', '& + li': {marginTop: '.25em'}, '& ul, & ol': {marginTop: '.25em', marginBottom: 0}, '& code': shared_codeCommon({theme})};
	})), theming_dist_esm.styled.ul(withReset, withMargin, {...listCommon, listStyle: 'disc'}), theming_dist_esm.styled.ol(withReset, withMargin, {...listCommon, listStyle: 'decimal'}), theming_dist_esm.styled.p(withReset, withMargin, (_ref15 => {
		let {theme} = _ref15; return {fontSize: theme.typography.size.s2, lineHeight: '24px', color: theme.color.defaultText, '& code': shared_codeCommon({theme})};
	})), theming_dist_esm.styled.code((_ref16 => ({fontFamily: _ref16.theme.typography.fonts.mono, WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale', display: 'inline-block', paddingLeft: 2, paddingRight: 2, verticalAlign: 'baseline', color: 'inherit'})), shared_codeCommon)); let DocumentFormatting_Code = function Code(_ref17) {
		let _language$; let {className} = _ref17; let {children} = _ref17; let props = DocumentFormatting_objectWithoutProperties(_ref17, ['className', 'children']); let language = (className || '').match(/lang-(\S+)/); return !children.match(/[\n\r]/g) ? react_default.a.createElement(DefaultCodeBlock, {...props, className}, children) : react_default.a.createElement(StyledSyntaxHighlighter, {bordered: !0, copyable: !0, language: (_language$ = language == null ? void 0 : language[1]) !== null && void 0 !== _language$ ? _language$ : 'plaintext', format: !1, ...props}, children);
	};

	DocumentFormatting_Code.displayName = 'Code'; theming_dist_esm.styled.title(shared_codeCommon); let ResetWrapper = theming_dist_esm.styled.div(withReset); function ArgsTable_extends() {
		return (ArgsTable_extends = Object.assign || function (target) {
			for (let i = 1; i < arguments.length; i++) {
				let source = arguments[i]; for (let key in source) {
					Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
				}
			}

			return target;
		}).apply(this, arguments);
	}

	function ArgsTable_slicedToArray(arr, i) {
		return (function ArgsTable_arrayWithHoles(arr) {
			if (Array.isArray(arr)) {
				return arr;
			}
		})(arr) || (function ArgsTable_iterableToArrayLimit(arr, i) {
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
		})(arr, i) || (function ArgsTable_unsupportedIterableToArray(o, minLen) {
			if (!o) {
				return;
			}

			if (typeof o === 'string') {
				return ArgsTable_arrayLikeToArray(o, minLen);
			}

			let n = Object.prototype.toString.call(o).slice(8, -1); n === 'Object' && o.constructor && (n = o.constructor.name); if (n === 'Map' || n === 'Set') {
				return Array.from(o);
			}

			if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
				return ArgsTable_arrayLikeToArray(o, minLen);
			}
		})(arr, i) || (function ArgsTable_nonIterableRest() {
			throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
		})();
	}

	function ArgsTable_arrayLikeToArray(arr, len) {
		(len == null || len > arr.length) && (len = arr.length); for (var i = 0, arr2 = new Array(len); i < len; i++) {
			arr2[i] = arr[i];
		}

		return arr2;
	}

	function ArgsTable_defineProperty(obj, key, value) {
		return key in obj ? Object.defineProperty(obj, key, {value, enumerable: !0, configurable: !0, writable: !0}) : obj[key] = value, obj;
	}

	let ArgsTableError; let TableWrapper = theming_dist_esm.styled.table((_ref => {
		let _trFirstChild$conca; let _trLastChild$concat; let _; let {theme} = _ref; let {compact} = _ref; let {inAddonPanel} = _ref; return {'&&': (_ = {borderCollapse: 'collapse', borderSpacing: 0, color: theme.color.defaultText, 'td, th': {padding: 0, border: 'none', verticalAlign: 'top', textOverflow: 'ellipsis'}, fontSize: theme.typography.size.s2 - 1, lineHeight: '20px', textAlign: 'left', width: '100%', marginTop: inAddonPanel ? 0 : 25, marginBottom: inAddonPanel ? 0 : 40, 'thead th:first-of-type, td:first-of-type': {width: '25%'}, 'th:first-of-type, td:first-of-type': {paddingLeft: 20}, 'th:nth-of-type(2), td:nth-of-type(2)': {...(compact ? null : {width: '35%'})}, 'td:nth-of-type(3)': {...(compact ? null : {width: '15%'})}, 'th:last-of-type, td:last-of-type': {paddingRight: 20, ...(compact ? null : {width: '25%'})}, th: {color: theme.base === 'light' ? Object(polished_esm.e)(0.25, theme.color.defaultText) : Object(polished_esm.e)(0.45, theme.color.defaultText), paddingTop: 10, paddingBottom: 10, paddingLeft: 15, paddingRight: 15}, td: {paddingTop: '10px', paddingBottom: '10px', '&:not(:first-of-type)': {paddingLeft: 15, paddingRight: 15}, '&:last-of-type': {paddingRight: 20}}, marginLeft: inAddonPanel ? 0 : 1, marginRight: inAddonPanel ? 0 : 1}, ArgsTable_defineProperty(_, 'tr:first-child'.concat(theming_dist_esm.ignoreSsrWarning), (_trFirstChild$conca = {}, ArgsTable_defineProperty(_trFirstChild$conca, 'td:first-child'.concat(theming_dist_esm.ignoreSsrWarning, ', th:first-child').concat(theming_dist_esm.ignoreSsrWarning), {borderTopLeftRadius: inAddonPanel ? 0 : theme.appBorderRadius}), ArgsTable_defineProperty(_trFirstChild$conca, 'td:last-child'.concat(theming_dist_esm.ignoreSsrWarning, ', th:last-child').concat(theming_dist_esm.ignoreSsrWarning), {borderTopRightRadius: inAddonPanel ? 0 : theme.appBorderRadius}), _trFirstChild$conca)), ArgsTable_defineProperty(_, 'tr:last-child'.concat(theming_dist_esm.ignoreSsrWarning), (_trLastChild$concat = {}, ArgsTable_defineProperty(_trLastChild$concat, 'td:first-child'.concat(theming_dist_esm.ignoreSsrWarning, ', th:first-child').concat(theming_dist_esm.ignoreSsrWarning), {borderBottomLeftRadius: inAddonPanel ? 0 : theme.appBorderRadius}), ArgsTable_defineProperty(_trLastChild$concat, 'td:last-child'.concat(theming_dist_esm.ignoreSsrWarning, ', th:last-child').concat(theming_dist_esm.ignoreSsrWarning), {borderBottomRightRadius: inAddonPanel ? 0 : theme.appBorderRadius}), _trLastChild$concat)), ArgsTable_defineProperty(_, 'tbody', {boxShadow: !inAddonPanel && (theme.base === 'light' ? 'rgba(0, 0, 0, 0.10) 0 1px 3px 1px,\n          '.concat(Object(polished_esm.e)(0.035, theme.appBorderColor), ' 0 0 0 1px') : 'rgba(0, 0, 0, 0.20) 0 2px 5px 1px,\n          '.concat(Object(polished_esm.c)(0.05, theme.appBorderColor), ' 0 0 0 1px')), borderRadius: theme.appBorderRadius, '@media not all and (min-resolution:.001dpcm)': {'@supports (-webkit-appearance:none)': {borderWidth: 1, borderStyle: 'solid', ...inAddonPanel && {borderColor: 'transparent'}, ...!inAddonPanel && {borderColor: theme.base === 'light' ? Object(polished_esm.e)(0.035, theme.appBorderColor) : Object(polished_esm.c)(0.05, theme.appBorderColor)}}}, tr: {background: 'transparent', overflow: 'hidden', ...(inAddonPanel ? {borderTopWidth: 1, borderTopStyle: 'solid', borderTopColor: theme.base === 'light' ? Object(polished_esm.a)(0.1, theme.background.content) : Object(polished_esm.b)(0.05, theme.background.content)} : ArgsTable_defineProperty({}, '&:not(:first-child'.concat(theming_dist_esm.ignoreSsrWarning, ')'), {borderTopWidth: 1, borderTopStyle: 'solid', borderTopColor: theme.base === 'light' ? Object(polished_esm.a)(0.1, theme.background.content) : Object(polished_esm.b)(0.05, theme.background.content)}))}, td: {background: theme.background.content}}), _)};
	})); let ResetButton = theming_dist_esm.styled.button((_ref3 => {
		let {theme} = _ref3; return {border: 0, borderRadius: '3em', cursor: 'pointer', display: 'inline-block', overflow: 'hidden', padding: '3px 8px', transition: 'all 150ms ease-out', verticalAlign: 'top', userSelect: 'none', margin: 0, backgroundColor: theme.base === 'light' ? '#EAF3FC' : theme.color.border, boxShadow: theme.base === 'light' ? ''.concat(theme.color.border, ' 0 0 0 1px inset') : ''.concat(theme.color.darker, '  0 0 0 1px inset'), color: theme.color.secondary, '&:hover': {background: theme.base === 'light' ? Object(polished_esm.a)(0.03, '#EAF3FC') : Object(polished_esm.c)(0.1, theme.color.border)}, '&:focus': {boxShadow: ''.concat(theme.color.secondary, ' 0 0 0 1px inset'), outline: 'none'}, svg: {display: 'block', height: 14, width: 14}};
	})); let ControlHeadingWrapper = theming_dist_esm.styled.span({display: 'flex', justifyContent: 'space-between'}); !(function (ArgsTableError) {
		ArgsTableError.NO_COMPONENT = 'No component found.', ArgsTableError.ARGS_UNSUPPORTED = 'Args unsupported. See Args documentation for your framework.';
	})(ArgsTableError || (ArgsTableError = {}));

	let sortFns = {alpha: function alpha(a, b) {
		return a.name.localeCompare(b.name);
	}, requiredFirst: function requiredFirst(a, b) {
		let _b$type; let _a$type; return Number(!((_b$type = b.type) === null || void 0 === _b$type || !_b$type.required)) - Number(!((_a$type = a.type) === null || void 0 === _a$type || !_a$type.required)) || a.name.localeCompare(b.name);
	}, none: void 0}; let ArgsTable_ArgsTable = function ArgsTable(props) {
		let {error} = props; if (error) {
			return react_default.a.createElement(EmptyBlock_EmptyBlock, null, error, ' ', react_default.a.createElement(link_link.a, {href: 'http://storybook.js.org/docs/', target: '_blank', withArrow: !0}, 'Read the docs'));
		}

		let _ref8 = props; let {rows} = _ref8; let {args} = _ref8; let {updateArgs} = _ref8; let {resetArgs} = _ref8; let {compact} = _ref8; let {inAddonPanel} = _ref8; let {initialExpandedArgs} = _ref8; let _ref8$sort = _ref8.sort; let sort = void 0 === _ref8$sort ? 'none' : _ref8$sort; let groups = (function groupRows(rows, sort) {
			let sections = {ungrouped: [], ungroupedSubsections: {}, sections: {}}; if (!rows) {
				return sections;
			}

			Object.entries(rows).forEach((_ref4 => {
				let _ref5 = ArgsTable_slicedToArray(_ref4, 2); let key = _ref5[0]; let row = _ref5[1]; let _ref6 = (row == null ? void 0 : row.table) || {}; let {category} = _ref6; let {subcategory} = _ref6; if (category) {
					let section = sections.sections[category] || {ungrouped: [], subsections: {}}; if (subcategory) {
						let subsection = section.subsections[subcategory] || []; subsection.push({key, ...row}), section.subsections[subcategory] = subsection;
					} else {
						section.ungrouped.push({key, ...row});
					}

					sections.sections[category] = section;
				} else if (subcategory) {
					let _subsection = sections.ungroupedSubsections[subcategory] || []; _subsection.push({key, ...row}), sections.ungroupedSubsections[subcategory] = _subsection;
				} else {
					sections.ungrouped.push({key, ...row});
				}
			})); let sortFn = sortFns[sort]; let sortSubsection = function sortSubsection(record) {
				return sortFn ? Object.keys(record).reduce(((acc, cur) => ({...acc, ...ArgsTable_defineProperty({}, cur, record[cur].sort(sortFn))})), {}) : record;
			};

			return {ungrouped: sections.ungrouped.sort(sortFn), ungroupedSubsections: sortSubsection(sections.ungroupedSubsections), sections: Object.keys(sections.sections).reduce(((acc, cur) => ({...acc, ...ArgsTable_defineProperty({}, cur, {ungrouped: sections.sections[cur].ungrouped.sort(sortFn), subsections: sortSubsection(sections.sections[cur].subsections)})})), {})};
		})(pickBy_default()(rows, (row => {
			let _row$table; return !(row != null && (_row$table = row.table) !== null && void 0 !== _row$table && _row$table.disable);
		})), sort); if (groups.ungrouped.length === 0 && Object.entries(groups.sections).length === 0 && Object.entries(groups.ungroupedSubsections).length === 0) {
			return react_default.a.createElement(EmptyBlock_EmptyBlock, null, 'No inputs found for this component. ', react_default.a.createElement(link_link.a, {href: 'http://storybook.js.org/docs/', target: '_blank', withArrow: !0}, 'Read the docs'));
		}

		let colSpan = 1; updateArgs && (colSpan += 1), compact || (colSpan += 2); let expandable = Object.keys(groups.sections).length > 0; let common = {updateArgs, compact, inAddonPanel, initialExpandedArgs}; return react_default.a.createElement(ResetWrapper, null, react_default.a.createElement(TableWrapper, {compact, inAddonPanel, className: 'docblock-argstable'}, react_default.a.createElement('thead', {className: 'docblock-argstable-head'}, react_default.a.createElement('tr', null, react_default.a.createElement('th', null, 'Name'), compact ? null : react_default.a.createElement('th', null, 'Description'), compact ? null : react_default.a.createElement('th', null, 'Default'), updateArgs ? react_default.a.createElement('th', null, react_default.a.createElement(ControlHeadingWrapper, null, 'Control', ' ', resetArgs && react_default.a.createElement(ResetButton, {onClick: function onClick() {
			return resetArgs();
		}, title: 'Reset controls'}, react_default.a.createElement(icon_icon.a, {icon: 'sync', 'aria-hidden': !0})))) : null)), react_default.a.createElement('tbody', {className: 'docblock-argstable-body'}, groups.ungrouped.map((row => react_default.a.createElement(ArgRow_ArgRow, {key: row.key, row, arg: args && args[row.key], ...common}))), Object.entries(groups.ungroupedSubsections).map((_ref9 => {
			let _ref10 = ArgsTable_slicedToArray(_ref9, 2); let subcategory = _ref10[0]; let subsection = _ref10[1]; return react_default.a.createElement(SectionRow_SectionRow, {key: subcategory, label: subcategory, level: 'subsection', colSpan}, subsection.map((row => react_default.a.createElement(ArgRow_ArgRow, {key: row.key, row, arg: args && args[row.key], expandable, ...common}))));
		})), Object.entries(groups.sections).map((_ref11 => {
			let _ref12 = ArgsTable_slicedToArray(_ref11, 2); let category = _ref12[0]; let section = _ref12[1]; return react_default.a.createElement(SectionRow_SectionRow, {key: category, label: category, level: 'section', colSpan}, section.ungrouped.map((row => react_default.a.createElement(ArgRow_ArgRow, {key: row.key, row, arg: args && args[row.key], ...common}))), Object.entries(section.subsections).map((_ref13 => {
				let _ref14 = ArgsTable_slicedToArray(_ref13, 2); let subcategory = _ref14[0]; let subsection = _ref14[1]; return react_default.a.createElement(SectionRow_SectionRow, {key: subcategory, label: subcategory, level: 'subsection', colSpan}, subsection.map((row => react_default.a.createElement(ArgRow_ArgRow, {key: row.key, row, arg: args && args[row.key], expandable, ...common}))));
			})));
		})))));
	};

	ArgsTable_ArgsTable.displayName = 'ArgsTable'; function ControlsPanel_slicedToArray(arr, i) {
		return (function ControlsPanel_arrayWithHoles(arr) {
			if (Array.isArray(arr)) {
				return arr;
			}
		})(arr) || (function ControlsPanel_iterableToArrayLimit(arr, i) {
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
		})(arr, i) || (function ControlsPanel_unsupportedIterableToArray(o, minLen) {
			if (!o) {
				return;
			}

			if (typeof o === 'string') {
				return ControlsPanel_arrayLikeToArray(o, minLen);
			}

			let n = Object.prototype.toString.call(o).slice(8, -1); n === 'Object' && o.constructor && (n = o.constructor.name); if (n === 'Map' || n === 'Set') {
				return Array.from(o);
			}

			if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
				return ControlsPanel_arrayLikeToArray(o, minLen);
			}
		})(arr, i) || (function ControlsPanel_nonIterableRest() {
			throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
		})();
	}

	function ControlsPanel_arrayLikeToArray(arr, len) {
		(len == null || len > arr.length) && (len = arr.length); for (var i = 0, arr2 = new Array(len); i < len; i++) {
			arr2[i] = arr[i];
		}

		return arr2;
	}

	let ControlsPanel_ControlsPanel = function ControlsPanel() {
		let _useArgs2 = ControlsPanel_slicedToArray(Object(dist_esm.k)(), 3); let args = _useArgs2[0]; let updateArgs = _useArgs2[1]; let resetArgs = _useArgs2[2]; let rows = Object(dist_esm.j)(); let isArgsStory = Object(dist_esm.n)('__isArgsStory', !1); let _useParameter = Object(dist_esm.n)('controls', {}); let {expanded} = _useParameter; let {sort} = _useParameter; let {presetColors} = _useParameter; let _useParameter$hideNoC = _useParameter.hideNoControlsWarning; let hideNoControlsWarning = void 0 !== _useParameter$hideNoC && _useParameter$hideNoC; let {path} = Object(dist_esm.p)(); let hasControls = Object.values(rows).some((arg => arg == null ? void 0 : arg.control)); let showWarning = !(hasControls && isArgsStory || hideNoControlsWarning); let withPresetColors = Object.entries(rows).reduce(((acc, _ref) => {
			let _arg$control; let _arg$control2; let _ref2 = ControlsPanel_slicedToArray(_ref, 2); let key = _ref2[0]; let arg = _ref2[1]; return (arg == null || (_arg$control = arg.control) === null || void 0 === _arg$control ? void 0 : _arg$control.type) !== 'color' || arg != null && (_arg$control2 = arg.control) !== null && void 0 !== _arg$control2 && _arg$control2.presetColors ? acc[key] = arg : acc[key] = {...arg, control: {...arg.control, presetColors}}, acc;
		}), {}); return react_default.a.createElement(react_default.a.Fragment, null, showWarning && react_default.a.createElement(NoControlsWarning_NoControlsWarning, null), react_default.a.createElement(ArgsTable_ArgsTable, {key: path, compact: !expanded && hasControls, rows: withPresetColors, args, updateArgs, resetArgs, inAddonPanel: !0, sort}));
	};

	esm.a.register('addon-controls', (api => {
		esm.a.addPanel('addon-controls', {title: function title() {
			let rows = Object(dist_esm.j)(); let controlsCount = Object.values(rows).filter((argType => argType == null ? void 0 : argType.control)).length; let suffix = controlsCount === 0 ? '' : ' ('.concat(controlsCount, ')'); return 'Controls'.concat(suffix);
		}, type: types.a.PANEL, paramKey: 'controls', render: function render(_ref) {
			let {key} = _ref; let
				{active} = _ref; return active && api.getCurrentStoryData() ? react_default.a.createElement(addon_panel_AddonPanel, {key, active}, react_default.a.createElement(ControlsPanel_ControlsPanel, null)) : null;
		}});
	}));
}, 854(module, __webpack_exports__, __webpack_require__) {
	'use strict'; __webpack_require__.r(__webpack_exports__); let react = __webpack_require__(0); let react_default = __webpack_require__.n(react); let esm = __webpack_require__(119); let types = __webpack_require__(429); let dist_esm = (__webpack_require__(31), __webpack_require__(23), __webpack_require__(22), __webpack_require__(15), __webpack_require__(11)); let separator = __webpack_require__(868); let lazy_WithTooltip = (__webpack_require__(14), __webpack_require__(4), __webpack_require__(9), __webpack_require__(5), __webpack_require__(13), __webpack_require__(6), __webpack_require__(7), __webpack_require__(10), __webpack_require__(16), __webpack_require__(17), __webpack_require__(405)); let TooltipLinkList = __webpack_require__(869); let bar_button = __webpack_require__(211); let icon_icon = __webpack_require__(60); let ToolbarMenuButton_ToolbarMenuButton = function ToolbarMenuButton(_ref) {
		let {active} = _ref; let {title} = _ref; let {icon} = _ref; let {description} = _ref; let
			{onClick} = _ref; return react_default.a.createElement(bar_button.a, {active, title: description, onClick}, icon && react_default.a.createElement(icon_icon.a, {icon}), title ? ' '.concat(title) : null);
	};

	let disallowedCycleableItemTypes = (__webpack_require__(52), ['reset']); let ADDON_ID = (__webpack_require__(87), __webpack_require__(41), 'addon-toolbars'); function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
		try {
			var info = gen[key](arg); var {value} = info;
		} catch (error) {
			return void reject(error);
		}

		info.done ? resolve(value) : Promise.resolve(value).then(_next, _throw);
	}

	let registerShortcuts = (function () {
		let _ref = (function _asyncToGenerator(fn) {
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
		})(regeneratorRuntime.mark((function _callee(api, id, shortcuts) {
			return regeneratorRuntime.wrap((function _callee$(_context) {
				for (;;) {
					switch (_context.prev = _context.next) {
						case 0: if (!shortcuts || !shortcuts.next) {
							_context.next = 3; break;
						}

							return _context.next = 3, api.setAddonShortcut(ADDON_ID, {label: shortcuts.next.label, defaultShortcut: shortcuts.next.keys, actionName: ''.concat(id, ':next'), action: shortcuts.next.action}); case 3: if (!shortcuts || !shortcuts.previous) {
							_context.next = 6; break;
						}

							return _context.next = 6, api.setAddonShortcut(ADDON_ID, {label: shortcuts.previous.label, defaultShortcut: shortcuts.previous.keys, actionName: ''.concat(id, ':previous'), action: shortcuts.previous.action}); case 6: if (!shortcuts || !shortcuts.reset) {
							_context.next = 9; break;
						}

							return _context.next = 9, api.setAddonShortcut(ADDON_ID, {label: shortcuts.reset.label, defaultShortcut: shortcuts.reset.keys, actionName: ''.concat(id, ':reset'), action: shortcuts.reset.action}); case 9: case 'end': return _context.stop();
					}
				}
			}), _callee);
		}))); return function registerShortcuts(_x, _x2, _x3) {
			return _ref.apply(this, arguments);
		};
	})(); function _extends() {
		return (_extends = Object.assign || function (target) {
			for (let i = 1; i < arguments.length; i++) {
				let source = arguments[i]; for (let key in source) {
					Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
				}
			}

			return target;
		}).apply(this, arguments);
	}

	function _defineProperty(obj, key, value) {
		return key in obj ? Object.defineProperty(obj, key, {value, enumerable: !0, configurable: !0, writable: !0}) : obj[key] = value, obj;
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

	__webpack_require__(58); function ToolbarMenuList_slicedToArray(arr, i) {
		return (function ToolbarMenuList_arrayWithHoles(arr) {
			if (Array.isArray(arr)) {
				return arr;
			}
		})(arr) || (function ToolbarMenuList_iterableToArrayLimit(arr, i) {
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
		})(arr, i) || (function ToolbarMenuList_unsupportedIterableToArray(o, minLen) {
			if (!o) {
				return;
			}

			if (typeof o === 'string') {
				return ToolbarMenuList_arrayLikeToArray(o, minLen);
			}

			let n = Object.prototype.toString.call(o).slice(8, -1); n === 'Object' && o.constructor && (n = o.constructor.name); if (n === 'Map' || n === 'Set') {
				return Array.from(o);
			}

			if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
				return ToolbarMenuList_arrayLikeToArray(o, minLen);
			}
		})(arr, i) || (function ToolbarMenuList_nonIterableRest() {
			throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
		})();
	}

	function ToolbarMenuList_arrayLikeToArray(arr, len) {
		(len == null || len > arr.length) && (len = arr.length); for (var i = 0, arr2 = new Array(len); i < len; i++) {
			arr2[i] = arr[i];
		}

		return arr2;
	}

	let ToolbarMenuList = (function withKeyboardCycle(Component) {
		return function WithKeyboardCycle(props) {
			let {id} = props; let _props$toolbar = props.toolbar; let {items} = _props$toolbar; let {shortcuts} = _props$toolbar; let api = Object(dist_esm.o)(); let _useGlobals2 = _slicedToArray(Object(dist_esm.m)(), 2); let globals = _useGlobals2[0]; let updateGlobals = _useGlobals2[1]; let cycleValues = Object(react.useRef)([]); let currentValue = globals[id]; let reset = Object(react.useCallback)((() => {
				updateGlobals(_defineProperty({}, id, ''));
			}), [updateGlobals]); let setNext = Object(react.useCallback)((() => {
				let values = cycleValues.current; let currentIndex = values.indexOf(currentValue); let newCurrentIndex = currentIndex === values.length - 1 ? 0 : currentIndex + 1; let newCurrent = cycleValues.current[newCurrentIndex]; updateGlobals(_defineProperty({}, id, newCurrent));
			}), [cycleValues, currentValue, updateGlobals]); let
				setPrevious = Object(react.useCallback)((() => {
					let values = cycleValues.current; let indexOf = values.indexOf(currentValue); let currentIndex = indexOf > -1 ? indexOf : 0; let newCurrentIndex = currentIndex === 0 ? values.length - 1 : currentIndex - 1; let newCurrent = cycleValues.current[newCurrentIndex]; updateGlobals(_defineProperty({}, id, newCurrent));
				}), [cycleValues, currentValue, updateGlobals]); return Object(react.useEffect)((() => {
				shortcuts && registerShortcuts(api, id, {next: {...shortcuts.next, action: setNext}, previous: {...shortcuts.previous, action: setPrevious}, reset: {...shortcuts.reset, action: reset}});
			}), [api, id, shortcuts, setNext, setPrevious, reset]), Object(react.useEffect)((() => {
				cycleValues.current = (function createCycleValueArray(items) {
					return items.filter((item => !disallowedCycleableItemTypes.includes(item.type))).map((item => item.value));
				})(items);
			}), []), react_default.a.createElement(Component, {cycleValues: cycleValues.current, ...props});
		};
	})((_ref => {
		let {id} = _ref; let {name} = _ref; let {description} = _ref; let _ref$toolbar = _ref.toolbar; let _icon = _ref$toolbar.icon; let {items} = _ref$toolbar; let _title = _ref$toolbar.title; let {showName} = _ref$toolbar; let {preventDynamicIcon} = _ref$toolbar; let _useGlobals2 = ToolbarMenuList_slicedToArray(Object(dist_esm.m)(), 2); let globals = _useGlobals2[0]; let updateGlobals = _useGlobals2[1]; let currentValue = globals[id]; let hasGlobalValue = Boolean(currentValue); let icon = _icon; let
			title = _title; preventDynamicIcon || (icon = (function getSelectedIcon(_ref) {
			let {currentValue} = _ref; let {items} = _ref; let
				selectedItem = currentValue != null && items.find((item => item.value === currentValue)); return selectedItem && selectedItem.icon;
		})({currentValue, items}) || icon), showName && !title && (title = name); let handleItemClick = Object(react.useCallback)((value => {
			updateGlobals((function ToolbarMenuList_defineProperty(obj, key, value) {
				return key in obj ? Object.defineProperty(obj, key, {value, enumerable: !0, configurable: !0, writable: !0}) : obj[key] = value, obj;
			})({}, id, value));
		}), [currentValue, updateGlobals]); return react_default.a.createElement(lazy_WithTooltip.a, {placement: 'top', trigger: 'click', tooltip: function tooltip(_ref2) {
			let {onHide} = _ref2; let
				links = items.filter((_ref3 => {
					let shouldReturn = !0; return _ref3.type !== 'reset' || currentValue || (shouldReturn = !1), shouldReturn;
				})).map((item => (function ToolbarMenuListItem(_ref) {
					let {left} = _ref; let {right} = _ref; let {title} = _ref; let {value} = _ref; let {icon} = _ref; let {hideIcon} = _ref; let {onClick} = _ref; let {currentValue} = _ref; let Icon = react_default.a.createElement(icon_icon.a, {style: {opacity: 1}, icon}); let hasContent = left || right || title; let
						Item = {id: value, active: currentValue === value, onClick}; return left && (Item.left = left), right && (Item.right = right), title && (Item.title = title), icon && !hideIcon && (hasContent && !right ? Item.right = Icon : hasContent && !left ? Item.left = Icon : hasContent || (Item.right = Icon)), Item;
				})({...item, currentValue, onClick: function onClick() {
					handleItemClick(item.value), onHide();
				}}))); return react_default.a.createElement(TooltipLinkList.a, {links});
		}, closeOnClick: !0}, react_default.a.createElement(ToolbarMenuButton_ToolbarMenuButton, {active: hasGlobalValue, description, icon, title}));
	})); let defaultItemValues = {type: 'item', value: ''}; function ToolbarManager_extends() {
		return (ToolbarManager_extends = Object.assign || function (target) {
			for (let i = 1; i < arguments.length; i++) {
				let source = arguments[i]; for (let key in source) {
					Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
				}
			}

			return target;
		}).apply(this, arguments);
	}

	let ToolbarManager_ToolbarManager = function ToolbarManager() {
		let globalTypes = Object(dist_esm.l)(); let globalIds = Object.keys(globalTypes).filter((id => Boolean(globalTypes[id].toolbar))); return globalIds.length ? react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement(separator.a, null), globalIds.map((id => {
			let normalizedArgType = (function normalizeArgType(key, argType) {
				return {...argType, name: argType.name || key, description: argType.description || key, toolbar: {...argType.toolbar, items: argType.toolbar.items.map((_item => {
					let item = typeof _item === 'string' ? {value: _item, title: _item} : _item; return item.type === 'reset' && argType.toolbar.icon && (item.icon = argType.toolbar.icon, item.hideIcon = !0), ({...defaultItemValues, ...item});
				}))}};
			})(id, globalTypes[id]); return react_default.a.createElement(ToolbarMenuList, {key: id, id, ...normalizedArgType});
		}))) : null;
	};

	esm.a.register(ADDON_ID, (() => esm.a.add(ADDON_ID, {title: ADDON_ID, type: types.a.TOOL, match: function match() {
		return !0;
	}, render: function render() {
		return react_default.a.createElement(ToolbarManager_ToolbarManager, null);
	}})));
}, 855(module, __webpack_exports__, __webpack_require__) {
	'use strict'; __webpack_require__.r(__webpack_exports__); __webpack_require__(40), __webpack_require__(26); let _templateObject; let react = __webpack_require__(0); let react_default = __webpack_require__.n(react); let esm = __webpack_require__(119); let types = __webpack_require__(429); let ADDON_ID = 'storybook/background'; let PARAM_KEY = 'backgrounds'; let memoizerific = (''.concat(ADDON_ID, '/update'), __webpack_require__(22), __webpack_require__(14), __webpack_require__(18), __webpack_require__(5), __webpack_require__(7), __webpack_require__(10), __webpack_require__(15), __webpack_require__(4), __webpack_require__(9), __webpack_require__(13), __webpack_require__(6), __webpack_require__(17), __webpack_require__(16), __webpack_require__(28)); let memoizerific_default = __webpack_require__.n(memoizerific); let dist_esm = __webpack_require__(11); let client_logger_dist_esm = __webpack_require__(25); let lazy_WithTooltip = __webpack_require__(405); let TooltipLinkList = __webpack_require__(869); let bar_button = __webpack_require__(211); let icon = __webpack_require__(60); let ColorIcon = __webpack_require__(1).styled.span((_ref => ({borderRadius: '1rem', display: 'block', height: '1rem', width: '1rem', background: _ref.background})), (_ref2 => {
		let {theme} = _ref2; return {boxShadow: ''.concat(theme.appBorderColor, ' 0 0 0 1px inset')};
	})); let global_window = (__webpack_require__(50), __webpack_require__(58), __webpack_require__(62), __webpack_require__(38), __webpack_require__(8)); let window_default = __webpack_require__.n(global_window); let dist = __webpack_require__(33); let dist_default = __webpack_require__.n(dist); function _taggedTemplateLiteral(strings, raw) {
		return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, {raw: {value: Object.freeze(raw)}}));
	}

	window_default.a.document; function _slicedToArray(arr, i) {
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
		})(arr, i) || _unsupportedIterableToArray(arr, i) || (function _nonIterableRest() {
			throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
		})();
	}

	function _toConsumableArray(arr) {
		return (function _arrayWithoutHoles(arr) {
			if (Array.isArray(arr)) {
				return _arrayLikeToArray(arr);
			}
		})(arr) || (function _iterableToArray(iter) {
			if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(iter)) {
				return Array.from(iter);
			}
		})(arr) || _unsupportedIterableToArray(arr) || (function _nonIterableSpread() {
			throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
		})();
	}

	function _unsupportedIterableToArray(o, minLen) {
		if (o) {
			if (typeof o === 'string') {
				return _arrayLikeToArray(o, minLen);
			}

			let n = Object.prototype.toString.call(o).slice(8, -1); return n === 'Object' && o.constructor && (n = o.constructor.name), n === 'Map' || n === 'Set' ? Array.from(o) : n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _arrayLikeToArray(o, minLen) : void 0;
		}
	}

	function _arrayLikeToArray(arr, len) {
		(len == null || len > arr.length) && (len = arr.length); for (var i = 0, arr2 = new Array(len); i < len; i++) {
			arr2[i] = arr[i];
		}

		return arr2;
	}

	let createBackgroundSelectorItem = memoizerific_default()(1e3)(((id, name, value, hasSwatch, change, active) => ({id: id || name, title: name, onClick: function onClick() {
		change({selected: value, name});
	}, value, right: hasSwatch ? react_default.a.createElement(ColorIcon, {background: value}) : void 0, active}))); let getDisplayedItems = memoizerific_default()(10)(((backgrounds, selectedBackgroundColor, change) => {
		let backgroundSelectorItems = backgrounds.map((_ref => {
			let {name} = _ref; let
				{value} = _ref; return createBackgroundSelectorItem(null, name, value, !0, change, value === selectedBackgroundColor);
		})); return selectedBackgroundColor !== 'transparent' ? [createBackgroundSelectorItem('reset', 'Clear background', 'transparent', null, change, !1)].concat(_toConsumableArray(backgroundSelectorItems)) : backgroundSelectorItems;
	})); let DEFAULT_BACKGROUNDS_CONFIG = {default: null, disable: !0, values: []}; let BackgroundSelector = Object(react.memo)((() => {
		let _globals$BACKGROUNDS_; let backgroundsConfig = Object(dist_esm.n)(PARAM_KEY, DEFAULT_BACKGROUNDS_CONFIG); let _useGlobals2 = _slicedToArray(Object(dist_esm.m)(), 2); let globals = _useGlobals2[0]; let updateGlobals = _useGlobals2[1]; let globalsBackgroundColor = (_globals$BACKGROUNDS_ = globals[PARAM_KEY]) === null || void 0 === _globals$BACKGROUNDS_ ? void 0 : _globals$BACKGROUNDS_.value; let selectedBackgroundColor = Object(react.useMemo)((() => (function getBackgroundColorByName(currentSelectedValue) {
			let backgrounds = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []; let defaultName = arguments.length > 2 ? arguments[2] : void 0; if (currentSelectedValue === 'transparent') {
				return 'transparent';
			}

			if (backgrounds.find((background => background.value === currentSelectedValue))) {
				return currentSelectedValue;
			}

			let defaultBackground = backgrounds.find((background => background.name === defaultName)); if (defaultBackground) {
				return defaultBackground.value;
			}

			if (defaultName) {
				let availableColors = backgrounds.map((background => background.name)).join(', '); client_logger_dist_esm.a.warn(dist_default()(_templateObject || (_templateObject = _taggedTemplateLiteral(['\n        Backgrounds Addon: could not find the default color "', '".\n        These are the available colors for your story based on your configuration:\n        ', '.\n      '])), defaultName, availableColors));
			}

			return 'transparent';
		})(globalsBackgroundColor, backgroundsConfig.values, backgroundsConfig.default)), [backgroundsConfig, globalsBackgroundColor]); Array.isArray(backgroundsConfig) && client_logger_dist_esm.a.warn('Addon Backgrounds api has changed in Storybook 6.0. Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md'); let onBackgroundChange = Object(react.useCallback)((value => {
			updateGlobals((function _defineProperty(obj, key, value) {
				return key in obj ? Object.defineProperty(obj, key, {value, enumerable: !0, configurable: !0, writable: !0}) : obj[key] = value, obj;
			})({}, PARAM_KEY, {...globals[PARAM_KEY], value}));
		}), [backgroundsConfig, globals, updateGlobals]); return backgroundsConfig.disable ? null : react_default.a.createElement(react.Fragment, null, react_default.a.createElement(lazy_WithTooltip.a, {placement: 'top', trigger: 'click', closeOnClick: !0, tooltip: function tooltip(_ref2) {
			let {onHide} = _ref2; return react_default.a.createElement(TooltipLinkList.a, {links: getDisplayedItems(backgroundsConfig.values, selectedBackgroundColor, (_ref3 => {
				let {selected} = _ref3; selectedBackgroundColor !== selected && onBackgroundChange(selected), onHide();
			}))});
		}}, react_default.a.createElement(bar_button.a, {key: 'background', title: 'Change the background of the preview', active: selectedBackgroundColor !== 'transparent'}, react_default.a.createElement(icon.a, {icon: 'photo'}))));
	})); function GridSelector_slicedToArray(arr, i) {
		return (function GridSelector_arrayWithHoles(arr) {
			if (Array.isArray(arr)) {
				return arr;
			}
		})(arr) || (function GridSelector_iterableToArrayLimit(arr, i) {
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
		})(arr, i) || (function GridSelector_unsupportedIterableToArray(o, minLen) {
			if (!o) {
				return;
			}

			if (typeof o === 'string') {
				return GridSelector_arrayLikeToArray(o, minLen);
			}

			let n = Object.prototype.toString.call(o).slice(8, -1); n === 'Object' && o.constructor && (n = o.constructor.name); if (n === 'Map' || n === 'Set') {
				return Array.from(o);
			}

			if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
				return GridSelector_arrayLikeToArray(o, minLen);
			}
		})(arr, i) || (function GridSelector_nonIterableRest() {
			throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
		})();
	}

	function GridSelector_arrayLikeToArray(arr, len) {
		(len == null || len > arr.length) && (len = arr.length); for (var i = 0, arr2 = new Array(len); i < len; i++) {
			arr2[i] = arr[i];
		}

		return arr2;
	}

	let GridSelector = Object(react.memo)((() => {
		let _globals$BACKGROUNDS_; let _useGlobals2 = GridSelector_slicedToArray(Object(dist_esm.m)(), 2); let globals = _useGlobals2[0]; let updateGlobals = _useGlobals2[1]; let {grid} = Object(dist_esm.n)(PARAM_KEY, {grid: {disable: !1}}); if (grid != null && grid.disable) {
			return null;
		}

		let isActive = ((_globals$BACKGROUNDS_ = globals[PARAM_KEY]) === null || void 0 === _globals$BACKGROUNDS_ ? void 0 : _globals$BACKGROUNDS_.grid) || !1; return react_default.a.createElement(bar_button.a, {key: 'background', active: isActive, title: 'Apply a grid to the preview', onClick: function onClick() {
			return updateGlobals((function GridSelector_defineProperty(obj, key, value) {
				return key in obj ? Object.defineProperty(obj, key, {value, enumerable: !0, configurable: !0, writable: !0}) : obj[key] = value, obj;
			})({}, PARAM_KEY, {...globals[PARAM_KEY], grid: !isActive}));
		}}, react_default.a.createElement(icon.a, {icon: 'grid'}));
	})); esm.a.register(ADDON_ID, (() => {
		esm.a.add(ADDON_ID, {title: 'Backgrounds', type: types.a.TOOL, match: function match(_ref) {
			let {viewMode} = _ref; return !(!viewMode || !viewMode.match(/^(story|docs)$/));
		}, render: function render() {
			return react_default.a.createElement(react.Fragment, null, react_default.a.createElement(BackgroundSelector, null), react_default.a.createElement(GridSelector, null));
		}});
	}));
}, 856(module, __webpack_exports__, __webpack_require__) {
	'use strict'; __webpack_require__.r(__webpack_exports__); let react = __webpack_require__(0); let react_default = __webpack_require__.n(react); let esm = __webpack_require__(119); let types = __webpack_require__(429); let ADDON_ID = 'storybook/viewport'; let memoizerific = (''.concat(ADDON_ID, '/update'), ''.concat(ADDON_ID, '/configure'), ''.concat(ADDON_ID, '/setStoryDefaultViewport'), ''.concat(ADDON_ID, '/viewportChanged'), __webpack_require__(18), __webpack_require__(22), __webpack_require__(43), __webpack_require__(14), __webpack_require__(15), __webpack_require__(31), __webpack_require__(47), __webpack_require__(58), __webpack_require__(23), __webpack_require__(79), __webpack_require__(26), __webpack_require__(4), __webpack_require__(9), __webpack_require__(5), __webpack_require__(13), __webpack_require__(6), __webpack_require__(7), __webpack_require__(10), __webpack_require__(17), __webpack_require__(16), __webpack_require__(28)); let memoizerific_default = __webpack_require__.n(memoizerific); let dist_esm = __webpack_require__(1); let emotion_theming_browser_esm = __webpack_require__(397); let core_browser_esm = __webpack_require__(56); let bar_button = __webpack_require__(211); let lazy_WithTooltip = __webpack_require__(405); let TooltipLinkList = __webpack_require__(869); let icon = __webpack_require__(60); let api_dist_esm = __webpack_require__(11); __webpack_require__(41), __webpack_require__(87); function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
		try {
			var info = gen[key](arg); var {value} = info;
		} catch (error) {
			return void reject(error);
		}

		info.done ? resolve(value) : Promise.resolve(value).then(_next, _throw);
	}

	let getCurrentViewportIndex = function getCurrentViewportIndex(viewportsKeys, current) {
		return viewportsKeys.indexOf(current);
	};

	let getNextViewport = function getNextViewport(viewportsKeys, current) {
		let currentViewportIndex = getCurrentViewportIndex(viewportsKeys, current); return currentViewportIndex === viewportsKeys.length - 1 ? viewportsKeys[0] : viewportsKeys[currentViewportIndex + 1];
	};

	let getPreviousViewport = function getPreviousViewport(viewportsKeys, current) {
		let currentViewportIndex = getCurrentViewportIndex(viewportsKeys, current); return currentViewportIndex < 1 ? viewportsKeys[viewportsKeys.length - 1] : viewportsKeys[currentViewportIndex - 1];
	};

	let registerShortcuts = (function () {
		let _ref = (function _asyncToGenerator(fn) {
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
		})(regeneratorRuntime.mark((function _callee(api, setState, viewportsKeys) {
			return regeneratorRuntime.wrap((function _callee$(_context) {
				for (;;) {
					switch (_context.prev = _context.next) {
						case 0: return _context.next = 2, api.setAddonShortcut(ADDON_ID, {label: 'Previous viewport', defaultShortcut: ['shift', 'V'], actionName: 'previous', action: function action() {
							let _api$getAddonState = api.getAddonState(ADDON_ID); let {selected} = _api$getAddonState; let {isRotated} = _api$getAddonState; setState({selected: getPreviousViewport(viewportsKeys, selected), isRotated});
						}}); case 2: return _context.next = 4, api.setAddonShortcut(ADDON_ID, {label: 'Next viewport', defaultShortcut: ['V'], actionName: 'next', action: function action() {
							let _api$getAddonState2 = api.getAddonState(ADDON_ID); let {selected} = _api$getAddonState2; let {isRotated} = _api$getAddonState2; setState({selected: getNextViewport(viewportsKeys, selected), isRotated});
						}}); case 4: return _context.next = 6, api.setAddonShortcut(ADDON_ID, {label: 'Reset viewport', defaultShortcut: ['alt', 'V'], actionName: 'reset', action: function action() {
							let {isRotated} = api.getAddonState(ADDON_ID); setState({selected: 'reset', isRotated});
						}}); case 6: case 'end': return _context.stop();
					}
				}
			}), _callee);
		}))); return function registerShortcuts(_x, _x2, _x3) {
			return _ref.apply(this, arguments);
		};
	})(); let MINIMAL_VIEWPORTS = {mobile1: {name: 'Small mobile', styles: {height: '568px', width: '320px'}, type: 'mobile'}, mobile2: {name: 'Large mobile', styles: {height: '896px', width: '414px'}, type: 'mobile'}, tablet: {name: 'Tablet', styles: {height: '1112px', width: '834px'}, type: 'tablet'}}; function _defineProperty(obj, key, value) {
		return key in obj ? Object.defineProperty(obj, key, {value, enumerable: !0, configurable: !0, writable: !0}) : obj[key] = value, obj;
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
		})(arr, i) || _unsupportedIterableToArray(arr, i) || (function _nonIterableRest() {
			throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
		})();
	}

	function _toConsumableArray(arr) {
		return (function _arrayWithoutHoles(arr) {
			if (Array.isArray(arr)) {
				return _arrayLikeToArray(arr);
			}
		})(arr) || (function _iterableToArray(iter) {
			if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(iter)) {
				return Array.from(iter);
			}
		})(arr) || _unsupportedIterableToArray(arr) || (function _nonIterableSpread() {
			throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
		})();
	}

	function _unsupportedIterableToArray(o, minLen) {
		if (o) {
			if (typeof o === 'string') {
				return _arrayLikeToArray(o, minLen);
			}

			let n = Object.prototype.toString.call(o).slice(8, -1); return n === 'Object' && o.constructor && (n = o.constructor.name), n === 'Map' || n === 'Set' ? Array.from(o) : n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _arrayLikeToArray(o, minLen) : void 0;
		}
	}

	function _arrayLikeToArray(arr, len) {
		(len == null || len > arr.length) && (len = arr.length); for (var i = 0, arr2 = new Array(len); i < len; i++) {
			arr2[i] = arr[i];
		}

		return arr2;
	}

	let toList = memoizerific_default()(50)((items => [].concat(baseViewports, _toConsumableArray(Object.entries(items).map((_ref2 => {
		let _ref3 = _slicedToArray(_ref2, 2); let id = _ref3[0]; let _ref = _ref3[1]; let {name} = _ref; let rest = _objectWithoutProperties(_ref, ['name']); return {...rest, id, title: name};
	})))))); let responsiveViewport = {id: 'reset', title: 'Reset viewport', styles: null, type: 'other'}; var baseViewports = [responsiveViewport]; let toLinks = memoizerific_default()(50)(((list, active, set, state, close) => list.map((i => {
		switch (i.id) {
			case responsiveViewport.id: if (active.id === i.id) {
				return null;
			}

			default: return {...i, onClick: function onClick() {
				set({...state, selected: i.id}), close();
			}};
		}
	})).filter(Boolean))); let ActiveViewportSize = dist_esm.styled.div((() => ({display: 'inline-flex'}))); let ActiveViewportLabel = dist_esm.styled.div((_ref5 => {
		let {theme} = _ref5; return {display: 'inline-block', textDecoration: 'none', padding: 10, fontWeight: theme.typography.weight.bold, fontSize: theme.typography.size.s2 - 1, lineHeight: '1', height: 40, border: 'none', borderTop: '3px solid transparent', borderBottom: '3px solid transparent', background: 'transparent'};
	})); let IconButtonWithLabel = Object(dist_esm.styled)(bar_button.a)((() => ({display: 'inline-flex', alignItems: 'center'}))); let IconButtonLabel = dist_esm.styled.div((_ref6 => ({fontSize: _ref6.theme.typography.size.s2 - 1, marginLeft: 10}))); let getStyles = function getStyles(prevStyles, styles, isRotated) {
		if (styles === null) {
			return null;
		}

		let result = typeof styles === 'function' ? styles(prevStyles) : styles; return isRotated ? (function flip(_ref4) {
			let {width} = _ref4; let {height} = _ref4; let
				styles = _objectWithoutProperties(_ref4, ['width', 'height']); return {...styles, height: width, width: height};
		})(result) : result;
	};

	let ViewportTool = Object(react.memo)(Object(emotion_theming_browser_esm.c)((_ref7 => {
		let _ref9; let {theme} = _ref7; let _useParameter = Object(api_dist_esm.n)('viewport', {}); let _useParameter$viewpor = _useParameter.viewports; let viewports = void 0 === _useParameter$viewpor ? MINIMAL_VIEWPORTS : _useParameter$viewpor; let _useParameter$default = _useParameter.defaultViewport; let defaultViewport = void 0 === _useParameter$default ? responsiveViewport.id : _useParameter$default; let {disable} = _useParameter; let _useAddonState2 = _slicedToArray(Object(api_dist_esm.i)(ADDON_ID, {selected: defaultViewport, isRotated: !1}), 2); let state = _useAddonState2[0]; let setState = _useAddonState2[1]; let list = toList(viewports); let api = Object(api_dist_esm.o)(); list.find((i => i.id === defaultViewport)) || console.warn('Cannot find "defaultViewport" of "'.concat(defaultViewport, '" in addon-viewport configs, please check the "viewports" setting in the configuration.')), Object(react.useEffect)((() => {
			registerShortcuts(api, setState, Object.keys(viewports));
		}), [viewports]), Object(react.useEffect)((() => {
			setState({selected: defaultViewport || (viewports[state.selected] ? state.selected : responsiveViewport.id), isRotated: state.isRotated});
		}), [defaultViewport]); let {selected} = state; let {isRotated} = state; let item = list.find((i => i.id === selected)) || list.find((i => i.id === defaultViewport)) || list.find((i => i.default)) || responsiveViewport; let ref = Object(react.useRef)(); let
			styles = getStyles(ref.current, item.styles, isRotated); return Object(react.useEffect)((() => {
			ref.current = styles;
		}), [item]), disable || Object.entries(viewports).length === 0 ? null : react_default.a.createElement(react.Fragment, null, react_default.a.createElement(lazy_WithTooltip.a, {placement: 'top', trigger: 'click', tooltip: function tooltip(_ref8) {
			let {onHide} = _ref8; return react_default.a.createElement(TooltipLinkList.a, {links: toLinks(list, item, setState, state, onHide)});
		}, closeOnClick: !0}, react_default.a.createElement(IconButtonWithLabel, {key: 'viewport', title: 'Change the size of the preview', active: Boolean(styles), onDoubleClick: function onDoubleClick() {
			setState({...state, selected: responsiveViewport.id});
		}}, react_default.a.createElement(icon.a, {icon: 'grow'}), styles ? react_default.a.createElement(IconButtonLabel, null, ''.concat(item.title, isRotated ? ' (L)' : ' (P)')) : null)), styles ? react_default.a.createElement(ActiveViewportSize, null, react_default.a.createElement(core_browser_esm.a, {styles: (_ref9 = {}, _defineProperty(_ref9, '#'.concat('storybook-preview-iframe'), {margin: 'auto', transition: 'width .3s, height .3s', position: 'relative', border: '1px solid black', boxShadow: '0 0 100px 100vw rgba(0,0,0,0.5)', ...styles}), _defineProperty(_ref9, '#'.concat('storybook-preview-wrapper'), {padding: theme.layoutMargin, alignContent: 'center', alignItems: 'center', justifyContent: 'center', justifyItems: 'center', overflow: 'auto', display: 'grid', gridTemplateColumns: '100%', gridTemplateRows: '100%'}), _ref9)}), react_default.a.createElement(ActiveViewportLabel, {title: 'Viewport width'}, styles.width.replace('px', '')), react_default.a.createElement(bar_button.a, {key: 'viewport-rotate', title: 'Rotate viewport', onClick: function onClick() {
			setState({...state, isRotated: !isRotated});
		}}, react_default.a.createElement(icon.a, {icon: 'transfer'})), react_default.a.createElement(ActiveViewportLabel, {title: 'Viewport height'}, styles.height.replace('px', ''))) : null);
	}))); esm.a.register(ADDON_ID, (() => {
		esm.a.add(ADDON_ID, {title: 'viewport / media-queries', type: types.a.TOOL, match: function match(_ref) {
			return _ref.viewMode === 'story';
		}, render: function render() {
			return react.createElement(ViewportTool, null);
		}});
	}));
}, 857(module, __webpack_exports__, __webpack_require__) {
	'use strict'; __webpack_require__.r(__webpack_exports__); __webpack_require__(4), __webpack_require__(9), __webpack_require__(5), __webpack_require__(13), __webpack_require__(6), __webpack_require__(7), __webpack_require__(10), __webpack_require__(16), __webpack_require__(14), __webpack_require__(17); let react = __webpack_require__(0); let react_default = __webpack_require__.n(react); let esm = __webpack_require__(119); let types = __webpack_require__(429); let dist_esm = __webpack_require__(20); let fast_deep_equal = (__webpack_require__(48), __webpack_require__(49), __webpack_require__(64)); let fast_deep_equal_default = __webpack_require__.n(fast_deep_equal); let theming_dist_esm = (__webpack_require__(22), __webpack_require__(23), __webpack_require__(15), __webpack_require__(1)); let emotion_theming_browser_esm = __webpack_require__(397); let react_inspector = __webpack_require__(450); let ScrollArea = __webpack_require__(406); let ActionBar = __webpack_require__(862); let polished_esm = (__webpack_require__(47), __webpack_require__(3)); let Action = theming_dist_esm.styled.div({display: 'flex', padding: 0, borderLeft: '5px solid transparent', borderBottom: '1px solid transparent', transition: 'all 0.1s', alignItems: 'flex-start', whiteSpace: 'pre'}); let Counter = theming_dist_esm.styled.div((_ref => {
		let {theme} = _ref; return {backgroundColor: Object(polished_esm.c)(0.5, theme.appBorderColor), color: theme.color.inverseText, fontSize: theme.typography.size.s1, fontWeight: theme.typography.weight.bold, lineHeight: 1, padding: '1px 5px', borderRadius: 20, margin: '2px 0px'};
	})); let InspectorContainer = theming_dist_esm.styled.div({flex: 1, padding: '0 0 0 5px'}); function _extends() {
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

	let Wrapper = Object(theming_dist_esm.styled)((_ref => {
		let {children} = _ref; let
			{className} = _ref; return react_default.a.createElement(ScrollArea.a, {horizontal: !0, vertical: !0, className}, children);
	}))({margin: 0, padding: '10px 5px 20px'}); let ThemedInspector = Object(emotion_theming_browser_esm.c)((_ref2 => {
		let {theme} = _ref2; let
			props = _objectWithoutProperties(_ref2, ['theme']); return react_default.a.createElement(react_inspector.a, {theme: theme.addonActionsTheme || 'chromeLight', ...props});
	})); let ActionLogger_ActionLogger = function ActionLogger(_ref3) {
		let {actions} = _ref3; let
			{onClear} = _ref3; return react_default.a.createElement(react.Fragment, null, react_default.a.createElement(Wrapper, {title: 'actionslogger'}, actions.map((action => react_default.a.createElement(Action, {key: action.id}, action.count > 1 && react_default.a.createElement(Counter, null, action.count), react_default.a.createElement(InspectorContainer, null, react_default.a.createElement(ThemedInspector, {sortObjectKeys: !0, showNonenumerable: !1, name: action.data.name, data: action.data.args || action.data})))))), react_default.a.createElement(ActionBar.a, {actionItems: [{title: 'Clear', onClick: onClear}]}));
	};

	let actions_dist_esm = __webpack_require__(291); function _typeof(obj) {
		return (_typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function _typeof(obj) {
			return typeof obj;
		} : function _typeof(obj) {
			return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
		})(obj);
	}

	function _toConsumableArray(arr) {
		return (function _arrayWithoutHoles(arr) {
			if (Array.isArray(arr)) {
				return _arrayLikeToArray(arr);
			}
		})(arr) || (function _iterableToArray(iter) {
			if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(iter)) {
				return Array.from(iter);
			}
		})(arr) || (function _unsupportedIterableToArray(o, minLen) {
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
		})(arr) || (function _nonIterableSpread() {
			throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
		})();
	}

	function _arrayLikeToArray(arr, len) {
		(len == null || len > arr.length) && (len = arr.length); for (var i = 0, arr2 = new Array(len); i < len; i++) {
			arr2[i] = arr[i];
		}

		return arr2;
	}

	function _defineProperties(target, props) {
		for (let i = 0; i < props.length; i++) {
			let descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 'value' in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
		}
	}

	function _setPrototypeOf(o, p) {
		return (_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
			return o.__proto__ = p, o;
		})(o, p);
	}

	function _createSuper(Derived) {
		let hasNativeReflectConstruct = (function _isNativeReflectConstruct() {
			if (typeof Reflect === 'undefined' || !Reflect.construct) {
				return !1;
			}

			if (Reflect.construct.sham) {
				return !1;
			}

			if (typeof Proxy === 'function') {
				return !0;
			}

			try {
				return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (() => {}))), !0;
			} catch (e) {
				return !1;
			}
		})(); return function _createSuperInternal() {
			let result; let Super = _getPrototypeOf(Derived); if (hasNativeReflectConstruct) {
				let NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget);
			} else {
				result = Super.apply(this, arguments);
			}

			return _possibleConstructorReturn(this, result);
		};
	}

	function _possibleConstructorReturn(self, call) {
		return !call || _typeof(call) !== 'object' && typeof call !== 'function' ? (function _assertThisInitialized(self) {
			if (void 0 === self) {
				throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
			}

			return self;
		})(self) : call;
	}

	function _getPrototypeOf(o) {
		return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
			return o.__proto__ || Object.getPrototypeOf(o);
		})(o);
	}

	let containers_ActionLogger_ActionLogger = (function (_Component) {
		!(function _inherits(subClass, superClass) {
			if (typeof superClass !== 'function' && superClass !== null) {
				throw new TypeError('Super expression must either be null or a function');
			}

			subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {value: subClass, writable: !0, configurable: !0}}), superClass && _setPrototypeOf(subClass, superClass);
		})(ActionLogger, _Component);

		let _super = _createSuper(ActionLogger); function ActionLogger(props) {
			let _this; return (function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError('Cannot call a class as a function');
				}
			})(this, ActionLogger), (_this = _super.call(this, props)).mounted = void 0, _this.handleStoryChange = function () {
				let {actions} = _this.state; actions.length > 0 && actions[0].options.clearOnStoryChange && _this.clearActions();
			}, _this.addAction = function (action) {
				_this.setState((prevState => {
					let actions = _toConsumableArray(prevState.actions); let previous = actions.length && actions[0]; return previous && (function safeDeepEqual(a, b) {
						try {
							return fast_deep_equal_default()(a, b);
						} catch (e) {
							return !1;
						}
					})(previous.data, action.data) ? previous.count++ : (action.count = 1, actions.unshift(action)), {actions: actions.slice(0, action.options.limit)};
				}));
			}, _this.clearActions = function () {
				_this.setState({actions: []});
			}, _this.state = {actions: []}, _this;
		}

		return (function _createClass(Constructor, protoProps, staticProps) {
			return protoProps && _defineProperties(Constructor.prototype, protoProps), staticProps && _defineProperties(Constructor, staticProps), Constructor;
		})(ActionLogger, [{key: 'componentDidMount', value: function componentDidMount() {
			this.mounted = !0; let {api} = this.props; api.on(actions_dist_esm.EVENT_ID, this.addAction), api.on(dist_esm.STORY_CHANGED, this.handleStoryChange);
		}}, {key: 'componentWillUnmount', value: function componentWillUnmount() {
			this.mounted = !1; let {api} = this.props; api.off(dist_esm.STORY_CHANGED, this.handleStoryChange), api.off(actions_dist_esm.EVENT_ID, this.addAction);
		}}, {key: 'render', value: function render() {
			let _this$state$actions = this.state.actions; let actions = void 0 === _this$state$actions ? [] : _this$state$actions; let {active} = this.props; let props = {actions, onClear: this.clearActions}; return active ? react_default.a.createElement(ActionLogger_ActionLogger, props) : null;
		}}]), ActionLogger;
	})(react.Component); let constants = __webpack_require__(76); function _slicedToArray(arr, i) {
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
		})(arr, i) || (function register_unsupportedIterableToArray(o, minLen) {
			if (!o) {
				return;
			}

			if (typeof o === 'string') {
				return register_arrayLikeToArray(o, minLen);
			}

			let n = Object.prototype.toString.call(o).slice(8, -1); n === 'Object' && o.constructor && (n = o.constructor.name); if (n === 'Map' || n === 'Set') {
				return Array.from(o);
			}

			if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
				return register_arrayLikeToArray(o, minLen);
			}
		})(arr, i) || (function _nonIterableRest() {
			throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
		})();
	}

	function register_arrayLikeToArray(arr, len) {
		(len == null || len > arr.length) && (len = arr.length); for (var i = 0, arr2 = new Array(len); i < len; i++) {
			arr2[i] = arr[i];
		}

		return arr2;
	}

	esm.a.register(constants.a, (api => {
		esm.a.addPanel(constants.c, {title: function title() {
			let _useState2 = _slicedToArray(Object(react.useState)(0), 2); let actionsCount = _useState2[0]; let setActionsCount = _useState2[1]; let onEvent = function onEvent() {
				return setActionsCount((previous => previous + 1));
			};

			let onChange = function onChange() {
				return setActionsCount(0);
			};

			Object(react.useEffect)((() => (api.on(constants.b, onEvent), api.on(dist_esm.STORY_CHANGED, onChange), function () {
				api.off(constants.b, onEvent), api.off(dist_esm.STORY_CHANGED, onChange);
			}))); let suffix = actionsCount === 0 ? '' : ' ('.concat(actionsCount, ')'); return 'Actions'.concat(suffix);
		}, type: types.a.PANEL, render: function render(_ref) {
			let {active} = _ref; let
				{key} = _ref; return react_default.a.createElement(containers_ActionLogger_ActionLogger, {key, api, active});
		}, paramKey: constants.d});
	}));
}, 860(module, __webpack_exports__, __webpack_require__) {
	'use strict'; __webpack_require__.r(__webpack_exports__); __webpack_require__(14); let esm = __webpack_require__(119); let ADDON_ID = 'storybook/links'; let constants = {NAVIGATE: ''.concat(ADDON_ID, '/navigate'), REQUEST: ''.concat(ADDON_ID, '/request'), RECEIVE: ''.concat(ADDON_ID, '/receive')}; esm.a.register(ADDON_ID, (api => {
		esm.a.getChannel().on(constants.REQUEST, (_ref => {
			let {kind} = _ref; let {name} = _ref; let
				id = api.storyId(kind, name); api.emit(constants.RECEIVE, id);
		}));
	}));
}, 861(module, __webpack_exports__, __webpack_require__) {
	'use strict'; __webpack_require__.r(__webpack_exports__); __webpack_require__(18); let SourceType; let esm = __webpack_require__(119); let types = __webpack_require__(429); let PANEL_ID = ''.concat('storybook/docs', '/panel'); ''.concat('storybook/docs', '/snippet-rendered'); !(function (SourceType) {
		SourceType.AUTO = 'auto', SourceType.CODE = 'code', SourceType.DYNAMIC = 'dynamic';
	})(SourceType || (SourceType = {})), esm.a.register('storybook/docs', (() => {
		esm.a.add(PANEL_ID, {type: types.a.TAB, title: 'Docs', route: function route(_ref) {
			let {storyId} = _ref; let
				{refId} = _ref; return refId ? '/docs/'.concat(refId, '_').concat(storyId) : '/docs/'.concat(storyId);
		}, match: function match(_ref2) {
			return _ref2.viewMode === 'docs';
		}, render: function render() {
			return null;
		}});
	}));
}, 862(module, __webpack_exports__, __webpack_require__) {
	'use strict'; __webpack_require__.d(__webpack_exports__, 'a', (() => ActionBar)); __webpack_require__(47), __webpack_require__(22), __webpack_require__(23), __webpack_require__(4); let react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0); let react__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__); let _storybook_theming__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1); function _objectWithoutProperties(source, excluded) {
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

	let Container = _storybook_theming__WEBPACK_IMPORTED_MODULE_5__.styled.div((_ref => ({position: 'absolute', bottom: 0, right: 0, maxWidth: '100%', display: 'flex', background: _ref.theme.background.content, zIndex: 1}))); let ActionButton = _storybook_theming__WEBPACK_IMPORTED_MODULE_5__.styled.button((_ref2 => {
		let {theme} = _ref2; return {border: '0 none', padding: '4px 10px', cursor: 'pointer', display: 'flex', alignItems: 'center', color: theme.color.defaultText, background: theme.background.content, fontSize: 12, lineHeight: '16px', fontFamily: theme.typography.fonts.base, fontWeight: theme.typography.weight.bold, borderTop: '1px solid '.concat(theme.appBorderColor), borderLeft: '1px solid '.concat(theme.appBorderColor), marginLeft: -1, borderRadius: '4px 0 0 0', '&:not(:last-child)': {borderRight: '1px solid '.concat(theme.appBorderColor)}, '& + *': {borderLeft: '1px solid '.concat(theme.appBorderColor), borderRadius: 0}, '&:focus': {boxShadow: ''.concat(theme.color.secondary, ' 0 -3px 0 0 inset'), outline: '0 none'}};
	}), (_ref3 => _ref3.disabled && {cursor: 'not-allowed', opacity: 0.5})); ActionButton.displayName = 'ActionButton'; var ActionBar = function ActionBar(_ref4) {
		let {actionItems} = _ref4; let
			props = _objectWithoutProperties(_ref4, ['actionItems']); return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Container, props, actionItems.map(((_ref5, index) => {
			let {title} = _ref5; let {className} = _ref5; let {onClick} = _ref5; let
				{disabled} = _ref5; return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(ActionButton, {key: index, className, onClick, disabled}, title);
		})));
	};

	ActionBar.displayName = 'ActionBar';
}, 868(module, __webpack_exports__, __webpack_require__) {
	'use strict'; __webpack_require__.d(__webpack_exports__, 'a', (() => Separator)); __webpack_require__(42), __webpack_require__(0); var Separator = __webpack_require__(1).styled.span((_ref => ({width: 1, height: 24, background: _ref.theme.appBorderColor, marginTop: 8})), (_ref2 => _ref2.force ? {} : {'& + &': {display: 'none'}})); Separator.displayName = 'Separator';
}, 869(module, __webpack_exports__, __webpack_require__) {
	'use strict'; __webpack_require__.d(__webpack_exports__, 'a', (() => TooltipLinkList_TooltipLinkList)); __webpack_require__(22), __webpack_require__(23), __webpack_require__(4), __webpack_require__(15); let react = __webpack_require__(0); let react_default = __webpack_require__.n(react); let esm = __webpack_require__(1); let memoizerific = (__webpack_require__(47), __webpack_require__(28)); let memoizerific_default = __webpack_require__.n(memoizerific); let polished_esm = __webpack_require__(3); function _extends() {
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

	let Title = Object(esm.styled)((_ref => {
		_ref.active, _ref.loading, _ref.disabled; let rest = _objectWithoutProperties(_ref, ['active', 'loading', 'disabled']); return react_default.a.createElement('span', rest);
	}))((_ref2 => {
		let {theme} = _ref2; return {color: theme.color.defaultText, fontWeight: theme.typography.weight.regular};
	}), (_ref3 => {
		let {active} = _ref3; let
			{theme} = _ref3; return active ? {color: theme.color.primary, fontWeight: theme.typography.weight.bold} : {};
	}), (_ref4 => {
		let {loading} = _ref4; let
			{theme} = _ref4; return loading ? ({display: 'inline-block', flex: 'none', ...theme.animation.inlineGlow}) : {};
	}), (_ref5 => {
		let {disabled} = _ref5; let
			{theme} = _ref5; return disabled ? {color: Object(polished_esm.e)(0.7, theme.color.defaultText)} : {};
	})); let Right = esm.styled.span({'& svg': {transition: 'all 200ms ease-out', opacity: 0, height: 12, width: 12, margin: '3px 0', verticalAlign: 'top'}, '& path': {fill: 'inherit'}}, (_ref6 => {
		let {active} = _ref6; let
			{theme} = _ref6; return active ? {'& svg': {opacity: 1}, '& path': {fill: theme.color.primary}} : {};
	})); let Center = esm.styled.span({flex: 1, textAlign: 'left', display: 'inline-flex', '& > * + *': {paddingLeft: 10}}); let CenterText = esm.styled.span({flex: 1, textAlign: 'center'}, (_ref7 => {
		let {active} = _ref7; let
			{theme} = _ref7; return active ? {color: theme.color.primary} : {};
	}), (_ref8 => {
		let {theme} = _ref8; return _ref8.disabled ? {color: theme.color.mediumdark} : {};
	})); let Left = esm.styled.span((_ref9 => {
		let {active} = _ref9; let
			{theme} = _ref9; return active ? {'& svg': {opacity: 1}, '& path': {fill: theme.color.primary}} : {};
	})); let ListItem_Item = esm.styled.a((_ref10 => {
		let {theme} = _ref10; return {fontSize: theme.typography.size.s1, transition: 'all 150ms ease-out', color: Object(polished_esm.e)(0.5, theme.color.defaultText), textDecoration: 'none', cursor: 'pointer', justifyContent: 'space-between', lineHeight: '18px', padding: '7px 15px', display: 'flex', alignItems: 'center', '& > * + *': {paddingLeft: 10}, '&:hover': {background: theme.background.hoverable}, '&:hover svg': {opacity: 1}};
	}), (_ref11 => _ref11.disabled ? {cursor: 'not-allowed'} : {})); let getItemProps = memoizerific_default()(100)(((onClick, href, LinkWrapper) => {
		let result = {}; return onClick && Object.assign(result, {onClick}), href && Object.assign(result, {href}), LinkWrapper && href && Object.assign(result, {to: href, as: LinkWrapper}), result;
	})); let ListItem_ListItem = function ListItem(_ref12) {
		let {loading} = _ref12; let {left} = _ref12; let {title} = _ref12; let {center} = _ref12; let {right} = _ref12; let {active} = _ref12; let {disabled} = _ref12; let {href} = _ref12; let {onClick} = _ref12; let {LinkWrapper} = _ref12; let rest = _objectWithoutProperties(_ref12, ['loading', 'left', 'title', 'center', 'right', 'active', 'disabled', 'href', 'onClick', 'LinkWrapper']); let itemProps = getItemProps(onClick, href, LinkWrapper); let
			commonProps = {active, disabled}; return react_default.a.createElement(ListItem_Item, {...commonProps, ...rest, ...itemProps}, left && react_default.a.createElement(Left, commonProps, left), title || center ? react_default.a.createElement(Center, null, title && react_default.a.createElement(Title, {...commonProps, loading}, title), center && react_default.a.createElement(CenterText, commonProps, center)) : null, right && react_default.a.createElement(Right, commonProps, right));
	};

	ListItem_ListItem.displayName = 'ListItem', ListItem_ListItem.defaultProps = {loading: !1, left: null, title: react_default.a.createElement('span', null, 'Loading state'), center: null, right: null, active: !1, disabled: !1, href: null, LinkWrapper: null, onClick: null}; let tooltip_ListItem = ListItem_ListItem; function TooltipLinkList_extends() {
		return (TooltipLinkList_extends = Object.assign || function (target) {
			for (let i = 1; i < arguments.length; i++) {
				let source = arguments[i]; for (let key in source) {
					Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
				}
			}

			return target;
		}).apply(this, arguments);
	}

	function TooltipLinkList_objectWithoutProperties(source, excluded) {
		if (source == null) {
			return {};
		}

		let key; let i; let target = (function TooltipLinkList_objectWithoutPropertiesLoose(source, excluded) {
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

	let List = esm.styled.div({minWidth: 180, overflow: 'hidden', overflowY: 'auto', maxHeight: 432}, (_ref => ({borderRadius: 2 * _ref.theme.appBorderRadius}))); let TooltipLinkList_Item = function Item(props) {
		let {LinkWrapper} = props; let onClickFromProps = props.onClick; let rest = TooltipLinkList_objectWithoutProperties(props, ['LinkWrapper', 'onClick']); let {title} = rest; let {href} = rest; let {active} = rest; let onClick = Object(react.useCallback)((event => {
			onClickFromProps(event, rest);
		}), [onClickFromProps]); let
			hasOnClick = Boolean(onClickFromProps); return react_default.a.createElement(tooltip_ListItem, {title, active, href, LinkWrapper, ...rest, ...(hasOnClick ? {onClick} : {})});
	};

	TooltipLinkList_Item.displayName = 'Item'; var TooltipLinkList_TooltipLinkList = function TooltipLinkList(_ref2) {
		let {links} = _ref2; let
			{LinkWrapper} = _ref2; return react_default.a.createElement(List, null, links.map((_ref3 => {
			let {isGatsby} = _ref3; let
				p = TooltipLinkList_objectWithoutProperties(_ref3, ['isGatsby']); return react_default.a.createElement(TooltipLinkList_Item, {key: p.id, LinkWrapper: isGatsby ? LinkWrapper : null, ...p});
		})));
	};

	TooltipLinkList_TooltipLinkList.displayName = 'TooltipLinkList', TooltipLinkList_TooltipLinkList.defaultProps = {LinkWrapper: tooltip_ListItem.defaultProps.LinkWrapper};
}, 870(module, __webpack_exports__, __webpack_require__) {
	'use strict'; __webpack_require__.d(__webpack_exports__, 'a', (() => router_QueryLink)), __webpack_require__.d(__webpack_exports__, 'b', (() => router_QueryLocation)), __webpack_require__.d(__webpack_exports__, 'c', (() => router_Route)), __webpack_require__.d(__webpack_exports__, 'd', (() => router_queryNavigate)); __webpack_require__(18), __webpack_require__(152), __webpack_require__(26), __webpack_require__(168), __webpack_require__(15), __webpack_require__(40), __webpack_require__(23), __webpack_require__(4); let global_window = __webpack_require__(8); let window_default = __webpack_require__.n(global_window); let react = __webpack_require__(0); let react_default = __webpack_require__.n(react); let es = __webpack_require__(108); let visibility_ToggleVisibility = function ToggleVisibility(_ref) {
		let {hidden} = _ref; let
			{children} = _ref; return react_default.a.createElement('div', {hidden}, children);
	};

	visibility_ToggleVisibility.displayName = 'ToggleVisibility'; let utils = __webpack_require__(213); function _extends() {
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

	let router_document = window_default.a.document; let getBase = function getBase() {
		return ''.concat(router_document.location.pathname, '?');
	};

	var router_queryNavigate = function queryNavigate(to, options) {
		return typeof to === 'number' ? Object(es.d)(to) : Object(es.d)(''.concat(getBase(), 'path=').concat(to), options);
	};

	var router_QueryLink = function QueryLink(_ref) {
		let {to} = _ref; let {children} = _ref; let
			rest = _objectWithoutProperties(_ref, ['to', 'children']); return react_default.a.createElement(es.a, {to: ''.concat(getBase(), 'path=').concat(to), ...rest}, children);
	};

	router_QueryLink.displayName = 'QueryLink', router_QueryLink.displayName = 'QueryLink'; var router_QueryLocation = function QueryLocation(_ref2) {
		let {children} = _ref2; return react_default.a.createElement(es.b, null, (_ref3 => {
			let {location} = _ref3; let _queryFromString = Object(utils.e)(location.search); let {path} = _queryFromString; let {singleStory} = _queryFromString; let _parsePath = Object(utils.c)(path); let {viewMode} = _parsePath; let {storyId} = _parsePath; let
				{refId} = _parsePath; return children({path, location, navigate: router_queryNavigate, viewMode, storyId, refId, singleStory: singleStory === 'true'});
		}));
	};

	router_QueryLocation.displayName = 'QueryLocation', router_QueryLocation.displayName = 'QueryLocation'; let router_QueryMatch = function QueryMatch(_ref4) {
		let {children} = _ref4; let targetPath = _ref4.path; let _ref4$startsWith = _ref4.startsWith; let
			startsWith = void 0 !== _ref4$startsWith && _ref4$startsWith; return react_default.a.createElement(router_QueryLocation, null, (_ref5 => {
			let urlPath = _ref5.path; let rest = _objectWithoutProperties(_ref5, ['path']); return children({match: Object(utils.b)(urlPath, targetPath, startsWith), ...rest});
		}));
	};

	router_QueryMatch.displayName = 'QueryMatch', router_QueryMatch.displayName = 'QueryMatch'; var router_Route = function Route(_ref6) {
		let {path} = _ref6; let {children} = _ref6; let _ref6$startsWith = _ref6.startsWith; let startsWith = void 0 !== _ref6$startsWith && _ref6$startsWith; let _ref6$hideOnly = _ref6.hideOnly; let
			hideOnly = void 0 !== _ref6$hideOnly && _ref6$hideOnly; return react_default.a.createElement(router_QueryMatch, {path, startsWith}, (_ref7 => {
			let {match} = _ref7; return hideOnly ? react_default.a.createElement(visibility_ToggleVisibility, {hidden: !match}, children) : match ? children : null;
		}));
	};

	router_Route.displayName = 'Route', router_Route.displayName = 'Route';
}}, [[462, 3, 4]]]);
