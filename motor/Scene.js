'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

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

var _get2 = require('babel-runtime/helpers/get');

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _Node2 = require('./Node');

var _Node3 = _interopRequireDefault(_Node2);

var _documentReady = require('awaitbox/dom/documentReady');

var _documentReady2 = _interopRequireDefault(_documentReady);

var _scene = require('../motor-html/scene');

var _scene2 = _interopRequireDefault(_scene);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(' --- Scene module!', _Node3.default);

var Scene = function (_Node) {
    (0, _inherits3.default)(Scene, _Node);

    function Scene(_motorHtmlScene) {
        (0, _classCallCheck3.default)(this, Scene);

        console.log(' --- Scene constructor');

        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Scene).call(this, {}, _motorHtmlScene));

        _this._scene = _this;
        _this._resolveScenePromise(_this);

        // For now, Scenes are always proportionally sized by default.
        _this._properties.sizeMode = { x: 'proportional', y: 'proportional', z: 'proportional' };
        return _this;
    }

    (0, _createClass3.default)(Scene, [{
        key: '_init',
        value: function _init() {
            (0, _get3.default)((0, _getPrototypeOf2.default)(Scene.prototype), '_init', this).call(this);
        }
    }, {
        key: '_makeElement',
        value: function _makeElement() {
            return new _scene2.default();
        }

        /**
         * Mount the scene into the given target.
         * Resolves the Scene's mountPromise, which can be use to do something once
         * the scene is mounted.
         *
         * @param {string|HTMLElement} [mountPoint=document.body] If a string selector is provided,
         * the mount point will be selected from the DOM. If an HTMLElement is
         * provided, that will be the mount point. If no mount point is provided,
         * the scene will be mounted into document.body.
         */

    }, {
        key: 'mount',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(mountPoint) {
                var selector;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return (0, _documentReady2.default)();

                            case 2:

                                // if no mountPoint was provided, just mount onto the <body> element.
                                // XXX: Maybe we should just not mount the scene if no mountPoint is
                                // provided, and expose a mount method.
                                if (!mountPoint) {
                                    mountPoint = document.body;
                                }

                                // if the user supplied a selector, mount there.
                                else if (typeof mountPoint === 'string') {
                                        selector = mountPoint;

                                        mountPoint = document.querySelector(selector);
                                    }

                                // if we have an actual mount point (the user may have supplied one)

                                if (!(mountPoint instanceof window.HTMLElement)) {
                                    _context.next = 8;
                                    break;
                                }

                                if (mountPoint !== this._el.element.parentNode) mountPoint.appendChild(this._el.element);

                                this._mounted = true;
                                _context.next = 9;
                                break;

                            case 8:
                                throw new Error('Invalid mount point specified in Scene.mount() call. Specify a selector, or pass an actual HTMLElement.');

                            case 9:

                                this._resolveMountPromise(this._mounted);

                            case 10:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function mount(_x) {
                return _ref.apply(this, arguments);
            }

            return mount;
        }()

        /**
         * Unmount the scene from it's mount point. Resets the Scene's
         * mountPromise.
         */

    }, {
        key: 'unmount',
        value: function unmount() {
            var _this2 = this;

            this._el.element.parentNode.removeChild(this._el.element);
            this._mounted = false;

            // a new promise to be resolved on the next mount.
            this._mountPromise = new _promise2.default(function (r) {
                return _this2._resolveMountPromise = r;
            });
        }
    }]);
    return Scene;
}(_Node3.default);

exports.default = Scene;
//# sourceMappingURL=Scene.js.map