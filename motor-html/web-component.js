'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _map = require('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

exports.default = makeWebComponentBaseClass;

var _jss = require('../jss');

var _jss2 = _interopRequireDefault(_jss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Very very stupid hack needed for Safari in order for us to be able to extend
// the HTMLElement class. See:
// https://github.com/google/traceur-compiler/issues/1709
//if (typeof window.HTMLElement != 'function') {
//const _HTMLElement = function HTMLElement(){}
//_HTMLElement.prototype = window.HTMLElement.prototype
//window.HTMLElement = _HTMLElement
//}

// XXX: we can improve by clearing items after X amount of time.
var classCache = new _map2.default();

var stylesheets = {};
var instanceCountByConstructor = {};

function hasHTMLElementPrototype(constructor) {
    if (!constructor) return false;
    if (constructor === HTMLElement) return true;else return hasHTMLElementPrototype(constructor.prototype);
}

/**
 * Creates a WebComponent base class dynamically, depending on which
 * HTMLElement class you want it to extend from. Extend from WebComponent when
 * making a new Custom Element class.
 *
 * @example
 * const WebComponent = makeWebComponentBaseClass(HTMLButtonElement)
 * class AwesomeButton extends WebComponent { ... }
 *
 * @param {Function} elementClass The class to that the generated WebComponent
 * base class will extend from.
 */

function makeWebComponentBaseClass(elementClass) {
    if (!elementClass) elementClass = HTMLElement;

    if (!hasHTMLElementPrototype(elementClass)) {
        throw new TypeError('The argument to makeWebComponentBaseClass must be a constructor that extends from or is HTMLElement.');
    }

    // if a base class that extends the given `elementClass` has already been
    // created, return it.
    if (classCache.has(elementClass)) return classCache.get(elementClass);

    // otherwise, create it.

    var WebComponent = function (_elementClass) {
        (0, _inherits3.default)(WebComponent, _elementClass);

        function WebComponent() {
            (0, _classCallCheck3.default)(this, WebComponent);

            var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(WebComponent).call(this));

            _this.createdCallback();return _this;
        }

        (0, _createClass3.default)(WebComponent, [{
            key: 'createdCallback',
            value: function createdCallback() {
                this._attached = false;
                this._initialized = false;

                //this.root....addEventListener('slotchange', function() {
                //let slot = ...
                //for (el in slot) {
                //el.slottedCallback(slot)
                //}
                //})
            }

            //slottedCallback(slot) {
            //}

        }, {
            key: 'connectedCallback',
            value: function connectedCallback() {
                this.attachedCallback();
            }
        }, {
            key: 'attachedCallback',
            value: function attachedCallback() {
                this._attached = true;

                if (!this._initialized) {
                    this._init();
                    this._initialized = true;
                }
            }
        }, {
            key: '_createStylesheet',
            value: function _createStylesheet() {

                if (!instanceCountByConstructor[this.constructor.name]) instanceCountByConstructor[this.constructor.name] = 0;

                instanceCountByConstructor[this.constructor.name] += 1;

                if (instanceCountByConstructor[this.constructor.name] === 1) {

                    // XXX create stylesheet inside animation frame?
                    stylesheets[this.constructor.name] = _jss2.default.createStyleSheet(this.getStyles()).attach();
                }
            }
        }, {
            key: 'disconnectedCallback',
            value: function disconnectedCallback() {
                this.detachedCallback();
            }
        }, {
            key: 'detachedCallback',
            value: function () {
                var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
                    return _regenerator2.default.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    this._attached = false;

                                    // XXX Deferr to the next tick before cleaning up in case the
                                    // element is actually being re-attached somewhere else within this
                                    // same tick (detaching and attaching is synchronous, so by
                                    // deferring to the next tick we'll be able to know if the element
                                    // was re-attached or not in order to clean up or not). Note that
                                    // appendChild can be used to move an element to another parent
                                    // element, in which case attachedCallback and detachedCallback
                                    // both get called, and in which case we don't necessarily want to
                                    // clean up. If the element gets re-attached before the next tick
                                    // (for example, gets moved), then we want to preserve the
                                    // associated stylesheet and other stuff that would be cleaned up
                                    // by an extending class' _cleanUp method by not running the
                                    // following this._deinit() call.
                                    _context.next = 3;
                                    return _promise2.default.resolve();

                                case 3:
                                    // deferr to the next tick.

                                    // As mentioned in the previous comment, if the element was not
                                    // re-attached in the last tick (for example, it was moved to
                                    // another element), then clean up.
                                    //
                                    // XXX (performance): Should we coordinate this._deinit() with the
                                    // animation loop to prevent jank?
                                    if (!this._attached && this._initialized) {
                                        this._deinit();
                                    }

                                case 4:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, this);
                }));

                function detachedCallback() {
                    return _ref.apply(this, arguments);
                }

                return detachedCallback;
            }()
        }, {
            key: '_destroyStylesheet',
            value: function _destroyStylesheet() {
                instanceCountByConstructor[this.constructor.name] -= 1;
                if (instanceCountByConstructor[this.constructor.name] === 0) {
                    stylesheets[this.constructor.name].detach();
                    delete stylesheets[this.constructor.name];
                    delete instanceCountByConstructor[this.constructor.name];
                }
            }

            /**
             * This method should be implemented by extending classes.
             * @abstract
             */

        }, {
            key: 'getStyles',
            value: function getStyles() {
                throw new Error('Your component must define a getStyles method, which returns the JSS-compatible JSON-formatted styling of your component.');
            }
        }, {
            key: '_init',
            value: function _init() {
                this._createStylesheet();
                this.classList.add(this.stylesheet.classes[this.constructor.name]);
                this.init();
            }
        }, {
            key: 'init',
            value: function init() {/* to be defined by child class */}
        }, {
            key: '_deinit',
            value: function _deinit() {
                // XXX: We can clean up the style after some time, for example like 1
                // minute, or something, instead of instantly.
                this._destroyStylesheet();
                this._initialized = false;
                this.deinit();
            }
        }, {
            key: 'deinit',
            value: function deinit() {/* to be defined by child class */}
        }, {
            key: 'stylesheet',
            get: function get() {
                return stylesheets[this.constructor.name];
            }
        }]);
        return WebComponent;
    }(elementClass);

    classCache.set(elementClass, WebComponent);
    return WebComponent;
}
//# sourceMappingURL=web-component.js.map