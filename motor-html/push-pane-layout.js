'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _node = require('./node');

var _node2 = _interopRequireDefault(_node);

var _PushPaneLayout = require('../motor/PushPaneLayout');

var _PushPaneLayout2 = _interopRequireDefault(_PushPaneLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(' --- push-pane-layout module.');

var MotorHTMLPushPaneLayout = function (_MotorHTMLNode) {
    (0, _inherits3.default)(MotorHTMLPushPaneLayout, _MotorHTMLNode);

    function MotorHTMLPushPaneLayout() {
        (0, _classCallCheck3.default)(this, MotorHTMLPushPaneLayout);
        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(MotorHTMLPushPaneLayout).apply(this, arguments));
    }

    (0, _createClass3.default)(MotorHTMLPushPaneLayout, [{
        key: 'createdCallback',
        value: function createdCallback() {
            console.log(' -- MotorHTMLPushPaneLayout created');
            (0, _get3.default)((0, _getPrototypeOf2.default)(MotorHTMLPushPaneLayout.prototype), 'createdCallback', this).call(this);
        }

        // @override

    }, {
        key: '_makeImperativeCounterpart',
        value: function _makeImperativeCounterpart() {
            return new _PushPaneLayout2.default({}, this);
        }
    }]);
    return MotorHTMLPushPaneLayout;
}(_node2.default);

exports.default = document.registerElement('motor-push-pane-layout', MotorHTMLPushPaneLayout);
//# sourceMappingURL=push-pane-layout.js.map