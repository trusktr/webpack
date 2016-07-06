'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

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

require('document-register-element');

var _webComponent = require('./web-component');

var _webComponent2 = _interopRequireDefault(_webComponent);

var _Node = require('../motor/Node');

var _Node2 = _interopRequireDefault(_Node);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(' --- motor-html-base module.');

var WebComponent = (0, _webComponent2.default)(window.HTMLElement);

var MotorHTMLBase = function (_WebComponent) {
    (0, _inherits3.default)(MotorHTMLBase, _WebComponent);

    function MotorHTMLBase() {
        (0, _classCallCheck3.default)(this, MotorHTMLBase);
        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(MotorHTMLBase).apply(this, arguments));
    }

    (0, _createClass3.default)(MotorHTMLBase, [{
        key: 'createdCallback',
        value: function createdCallback() {
            var _this2 = this;

            (0, _get3.default)((0, _getPrototypeOf2.default)(MotorHTMLBase.prototype), 'createdCallback', this).call(this);

            this.node = null; // to hold the imperative API Node instance.

            // XXX: "this.mountPromise" vs "this.ready":
            // "ready" seems to be more intuitive on the HTML side because
            // if the user has a reference to a motor-node or a motor-scene
            // and it exists in DOM, then it is already "mounted" from the
            // HTML API perspective. Maybe we can use "mountPromise" for
            // the imperative API, and "ready" for the HTML API. For example:
            //
            // await $('motor-scene')[0].ready // When using the HTML API
            // await node.mountPromise // When using the imperative API
            //
            // Or, maybe we can just use ".ready" in both APIs?...
            this._resolveReadyPromise = null;
            this.ready = new _promise2.default(function (r) {
                return _this2._resolveReadyPromise = r;
            });
        }
    }, {
        key: 'init',
        value: function init() {
            this._associateImperativeNode();
        }

        /**
         * This method creates the association between this MotorHTMLNode instance
         * and the imperative Node instance.
         *
         * This method may get called by this.init, but can also be called by
         * the Node class if Node is used imperatively. See Node#constructor.
         *
         * @private
         *
         * @param {Node} imperativeMotorNode The Node to associate with this
         * MotorHTMLNode. This parameter is only used in Node#constructor, and this
         * happens when using the imperative form infamous instead of the HTML
         * interface of infamous. When the HTML interface is used, this gets called
         * first without an imperativeMotorNode argument and the call to this in
         * Node#constructor will then be a noop. Basically, either this gets called
         * first by MotorHTMLNode, or first by Node, depending on which API is used
         * first.
         */

    }, {
        key: '_associateImperativeNode',
        value: function _associateImperativeNode(imperativeMotorNode) {
            // console.log(' -- associating imperative node')
            if (!this.node) {
                if (imperativeMotorNode && imperativeMotorNode instanceof _Node2.default) this.node = imperativeMotorNode;else this.node = this._makeImperativeCounterpart();

                this._signalWhenReady();
            }
        }

        // This method should be overriden by child classes. It should return the
        // imperative-side instance that the HTML-side class (this) corresponds to.

    }, {
        key: '_makeImperativeCounterpart',
        value: function _makeImperativeCounterpart() {
            throw new TypeError('This method should be implemented by class extening MotorHTMLBase.');
        }
    }, {
        key: '_signalWhenReady',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return this.node.mountPromise;

                            case 2:
                                this._resolveReadyPromise();

                            case 3:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function _signalWhenReady() {
                return _ref.apply(this, arguments);
            }

            return _signalWhenReady;
        }()
    }]);
    return MotorHTMLBase;
}(WebComponent);

exports.default = MotorHTMLBase;
//# sourceMappingURL=base.js.map