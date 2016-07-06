'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

require('document-register-element');

var _nodeStyle = require('./node-style');

var _nodeStyle2 = _interopRequireDefault(_nodeStyle);

var _Node = require('../motor/Node');

var _Node2 = _interopRequireDefault(_Node);

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

var _scene = require('./scene');

var _scene2 = _interopRequireDefault(_scene);

var _Utility = require('../motor/Utility');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(' -- motor-node module!');
//import 'webcomponents.js-v1/src/CustomElements/v1/native-shim'
//import 'webcomponents.js-v1/src/CustomElements/v1/CustomElements'

var MotorHTMLNode = function (_MotorHTMLBase) {
    (0, _inherits3.default)(MotorHTMLNode, _MotorHTMLBase);

    function MotorHTMLNode() {
        (0, _classCallCheck3.default)(this, MotorHTMLNode);
        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(MotorHTMLNode).apply(this, arguments));
    }

    (0, _createClass3.default)(MotorHTMLNode, [{
        key: 'createdCallback',


        // Use constructor() in v1 Custom Elements instead of createdCallback.
        //constructor() {

        value: function createdCallback() {
            (0, _get3.default)((0, _getPrototypeOf2.default)(MotorHTMLNode.prototype), 'createdCallback', this).call(this);

            // true if motor-node is mounted improperly (not mounted in motor-node or motor-scene)
            this._attachError = false;
        }
    }, {
        key: 'attachedCallback',
        value: function attachedCallback() {

            // Check that motor-nodes are mounted to motor-scenes or
            // motor-nodes. Scene can be mounted to any element. In the future
            // we could inspect the scene mount point, and advise about posisble
            // styling issues (f.e. making the scene container have a height).
            //
            // XXX: different check needed when using is="" attributes. For now,
            // we'll discourage use of the awkward is="" attribute.
            if (!(this instanceof _scene2.default)) {
                if (!(this.parentNode instanceof MotorHTMLNode || this.parentNode instanceof _scene2.default) || this.parentNode._attachError // TODO, #40
                ) {

                        this._attachError = true;
                        throw new Error('<motor-node> elements must be appended only to <motor-scene> or other <motor-node> elements.');
                    }
            }

            (0, _get3.default)((0, _getPrototypeOf2.default)(MotorHTMLNode.prototype), 'attachedCallback', this).call(this);
        }
    }, {
        key: 'getStyles',
        value: function getStyles() {
            return _nodeStyle2.default;
        }
    }, {
        key: 'init',
        value: function init() {
            (0, _get3.default)((0, _getPrototypeOf2.default)(MotorHTMLNode.prototype), 'init', this).call(this);

            // Attach this motor-node's Node to the parent motor-node's
            // Node (doesn't apply to motor-scene, which doesn't have a
            // parent to attach to).
            //
            // TODO: prevent this call if attachedCallback happened to call to
            // addChild on the imperative side.
            if (!(this instanceof _scene2.default)) this.parentNode.node.addChild(this.node);
        }

        // this is called in attachedCallback, at which point this element hasa
        // parentNode.
        // @override

    }, {
        key: '_makeImperativeCounterpart',
        value: function _makeImperativeCounterpart() {
            return new _Node2.default({}, this);
        }

        // TODO XXX: remove corresponding imperative Node from it's parent.

    }, {
        key: 'detachedCallback',
        value: function detachedCallback() {
            if (!(this instanceof _scene2.default) && this._attachError) {
                this._attachError = false;
                return;
            }

            (0, _get3.default)((0, _getPrototypeOf2.default)(MotorHTMLNode.prototype), 'detachedCallback', this).call(this);
        }
    }, {
        key: 'attributeChangedCallback',
        value: function attributeChangedCallback(attribute, oldValue, newValue) {
            this._updateNodeProperty(attribute, oldValue, newValue);
        }
    }, {
        key: '_updateNodeProperty',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(attribute, oldValue, newValue) {
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                // TODO: Handle actual values (not just string property values as
                                // follows) for performance; especially when DOMMatrix is supported
                                // by browsers.

                                console.log('motor-node not ready yet.');
                                // if not initialized yet, wait.

                                if (this.node) {
                                    _context.next = 4;
                                    break;
                                }

                                _context.next = 4;
                                return this.ready;

                            case 4:
                                console.log('motor-node ready!');

                                // attributes on our HTML elements are the same name as those on
                                // the Node class (the setters).
                                // TODO: make a list of the properties (or get them dynamically) then
                                // assign them dynamically.
                                if (newValue !== oldValue) {
                                    if (attribute.match(/opacity/i)) this.node[attribute] = window.parseFloat(newValue);else if (attribute.match(/sizeMode/i)) this.node[attribute] = parseStringArray(newValue);else if (attribute.match(/rotation/i) || attribute.match(/scale/i) // scale is TODO on imperative side.
                                    || attribute.match(/position/i) || attribute.match(/absoluteSize/i) || attribute.match(/proportionalSize/i) || attribute.match(/align/i) || attribute.match(/mountPoint/i) || attribute.match(/origin/i) // origin is TODO on imperative side.
                                    || attribute.match(/skew/i) // skew is TODO on imperative side.
                                    ) {
                                            this.node[attribute] = parseNumberArray(newValue);
                                        } else {
                                        /* nothing, ignore other attributes */
                                    }
                                }

                            case 6:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function _updateNodeProperty(_x, _x2, _x3) {
                return _ref.apply(this, arguments);
            }

            return _updateNodeProperty;
        }()
    }]);
    return MotorHTMLNode;
}(_base2.default);

(0, _Utility.proxyMethods)(_Node2.default, MotorHTMLNode);

// XXX we'll export the class directly for v1 Custom Elements, and encourage
// end users to define the name of the element as they see fit. We won't
// define the name ourselves like we do here.
exports.default = document.registerElement('motor-node', MotorHTMLNode);

// for use by MotorHTML, convenient since HTMLElement attributes are all
// converted to lowercase by default, so if we don't do this then we won't be
// able to map attributes to Node setters as easily.

(0, _Utility.makeLowercaseSetterAliases)(_Node2.default.prototype);

function parseNumberArray(str) {
    checkIsNumberArrayString(str);
    var numbers = str.split(',');
    return {
        x: window.parseFloat(numbers[0]),
        y: window.parseFloat(numbers[1]),
        z: window.parseFloat(numbers[2])
    };
}

function parseStringArray(str) {
    checkIsSizeArrayString(str);
    var strings = str.split(',');
    return {
        x: strings[0].trim(),
        y: strings[1].trim(),
        z: strings[2].trim()
    };
}

function checkIsNumberArrayString(str) {
    if (!str.match(/^\s*(-?((\d+\.\d+)|(\d+))(\s*,\s*)?){3}\s*$/g)) throw new Error('Invalid array. Must be an array of numbers of length 3, for example "1, 2.5,3" without brackets. Yours was ' + str + '.');
}

function checkIsSizeArrayString(str) {
    // TODO: throw error if str is not a valid array of size mode strings.
    return;
}
//# sourceMappingURL=node.js.map