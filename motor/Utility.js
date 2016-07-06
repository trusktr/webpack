'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.proxyMethods = exports.makeLowercaseSetterAliases = exports.animationFrame = exports.getBodySize = exports.applyCSSLabel = exports.epsilon = undefined;

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _defineProperty = require('babel-runtime/core-js/object/define-property');

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getOwnPropertyDescriptor = require('babel-runtime/core-js/object/get-own-property-descriptor');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _getOwnPropertyNames = require('babel-runtime/core-js/object/get-own-property-names');

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

/**
 * Get the dimensions of the body element.
 * @async
 * @return {Object} An object containing `width` and `height` properties.
 */

var getBodySize = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var body, width, height;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return (0, _windowLoaded2.default)();

                    case 2:
                        body = document.body;
                        width = window.parseInt(window.getComputedStyle(body).getPropertyValue('width'));
                        height = window.parseInt(window.getComputedStyle(body).getPropertyValue('height'));
                        return _context.abrupt('return', { width: width, height: height });

                    case 6:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function getBodySize() {
        return _ref.apply(this, arguments);
    };
}();

var _tween = require('tween.js');

var _tween2 = _interopRequireDefault(_tween);

var _windowLoaded = require('awaitbox/dom/windowLoaded');

var _windowLoaded2 = _interopRequireDefault(_windowLoaded);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function epsilon(value) {
    return Math.abs(value) < 0.000001 ? 0 : value;
}

function applyCSSLabel(value, label) {
    if (value === 0) {
        return '0px';
    } else if (label === '%') {
        return value * 100 + '%';
    } else if (label === 'px') {
        return value + 'px';
    }
}

function animationFrame() {
    var resolve = null;
    var promise = new _promise2.default(function (r) {
        return resolve = r;
    });
    window.requestAnimationFrame(resolve);
    return promise;
}

// Create lowercase versions of each setter property.
function makeLowercaseSetterAliases(object) {
    var props = (0, _getOwnPropertyNames2.default)(object);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = (0, _getIterator3.default)(props), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var prop = _step.value;

            var lowercaseProp = prop.toLowerCase();
            if (lowercaseProp != prop) {
                var descriptor = (0, _getOwnPropertyDescriptor2.default)(object, prop);
                if ((0, _getOwnPropertyNames2.default)(descriptor).indexOf('set') >= 0) {
                    // we care only about the setters.
                    (0, _defineProperty2.default)(object, lowercaseProp, descriptor);
                }
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}

// Node methods not to proxy (private underscored methods are also detected and
// ignored).
//
// XXX Should use a whitelist instead of a blacklist?
var methodProxyBlacklist = ['constructor', 'parent', 'children', // proxying this one would really break stuff (f.e. React)
'element', 'scene', 'addChild', 'addChildren', 'removeChild', 'removeChildren'];

// Creates setters/getters on the MotorHTMLNode which proxy to the
// setters/getters on Node.
function proxyMethods(SourceClass, TargetClass) {
    var props = (0, _getOwnPropertyNames2.default)(SourceClass.prototype);

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        var _loop = function _loop() {
            var prop = _step2.value;

            // skip the blacklisted properties
            if (methodProxyBlacklist.includes(prop)) return 'continue';

            // skip the private underscored properties
            if (prop.indexOf('_') == 0) return 'continue';

            var proxyDescriptor = {};
            var actualDescriptor = (0, _getOwnPropertyDescriptor2.default)(SourceClass.prototype, prop);

            // if the property has a setter
            if (actualDescriptor.set) {
                (0, _assign2.default)(proxyDescriptor, {
                    set: function set(value) {
                        this.node[prop] = value;
                    }
                });
            }

            // if the property has a getter
            if (actualDescriptor.get) {
                (0, _assign2.default)(proxyDescriptor, {
                    get: function get() {
                        return this.node[prop];
                    }
                });
            }

            (0, _defineProperty2.default)(TargetClass.prototype, prop, proxyDescriptor);
        };

        for (var _iterator2 = (0, _getIterator3.default)(props), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var _ret = _loop();

            if (_ret === 'continue') continue;
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }
}

exports.epsilon = epsilon;
exports.applyCSSLabel = applyCSSLabel;
exports.getBodySize = getBodySize;
exports.animationFrame = animationFrame;
exports.makeLowercaseSetterAliases = makeLowercaseSetterAliases;
exports.proxyMethods = proxyMethods;
//# sourceMappingURL=Utility.js.map