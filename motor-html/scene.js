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

require('document-register-element');

var _sceneStyle = require('./scene-style');

var _sceneStyle2 = _interopRequireDefault(_sceneStyle);

var _Scene = require('../motor/Scene');

var _Scene2 = _interopRequireDefault(_Scene);

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(' -- motor-scene module!');
//import 'webcomponents.js-v1/src/CustomElements/v1/native-shim'
//import 'webcomponents.js-v1/src/CustomElements/v1/CustomElements'

exports.default = document.registerElement('motor-scene', function (_MotorHTMLBase) {
    (0, _inherits3.default)(MotorHTMLScene, _MotorHTMLBase);

    function MotorHTMLScene() {
        (0, _classCallCheck3.default)(this, MotorHTMLScene);
        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(MotorHTMLScene).apply(this, arguments));
    }

    (0, _createClass3.default)(MotorHTMLScene, [{
        key: '_makeImperativeCounterpart',


        // this is called in attachedCallback, at which point this element has a
        // parentNode.
        value: function _makeImperativeCounterpart() {
            var scene = new _Scene2.default(this);

            // TODO: needs unmount cleanup.
            // TODO: move to attachedCallback.
            scene.mount(this.parentNode);

            return scene;
        }
    }, {
        key: 'getStyles',
        value: function getStyles() {
            return _sceneStyle2.default;
        }
    }, {
        key: 'attachedCallback',
        value: function attachedCallback() {
            (0, _get3.default)((0, _getPrototypeOf2.default)(MotorHTMLScene.prototype), 'attachedCallback', this).call(this);
        }

        //deinit() {
        //super.deinit()

        //// TODO: unmount the scene
        //}

    }]);
    return MotorHTMLScene;
}(_base2.default));
//# sourceMappingURL=scene.js.map