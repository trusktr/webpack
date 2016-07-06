'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Cube = undefined;

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

var _Transform = require('famous/src/core/Transform');

var _Transform2 = _interopRequireDefault(_Transform);

var _MouseSync = require('famous/src/inputs/MouseSync');

var _MouseSync2 = _interopRequireDefault(_MouseSync);

var _TouchSync = require('famous/src/inputs/TouchSync');

var _TouchSync2 = _interopRequireDefault(_TouchSync);

var _GenericSync = require('famous/src/inputs/GenericSync');

var _GenericSync2 = _interopRequireDefault(_GenericSync);

var _Molecule2 = require('./Molecule');

var _Molecule3 = _interopRequireDefault(_Molecule2);

var _Plane = require('./Plane');

var _Plane2 = _interopRequireDefault(_Plane);

var _forLength = require('army-knife/forLength');

var _forLength2 = _interopRequireDefault(_forLength);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A scenegraph tree that lays things out in a cube form. The leaf nodes of the
 * scenegraph (the cube sides) are Molecules. Add anything to the leaf nodes
 * that a [famous/src/core/RenderNode](#famous/src/core/RenderNode) would normally accept.
 *
 * @class Cube
 * @extends Molecule
 */

var Cube = exports.Cube = function (_Molecule) {
    (0, _inherits3.default)(Cube, _Molecule);


    /**
     * Create a new Cube.
     *
     * @constructor
     * @param {Number} cubeWidth The integer width of the cube.
     */

    function Cube(cubeWidth) {
        (0, _classCallCheck3.default)(this, Cube);

        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Cube).call(this, { size: cubeWidth }));

        _GenericSync2.default.register({
            mouse: _MouseSync2.default,
            touch: _TouchSync2.default
        });

        _this.cubeWidth = cubeWidth;

        _this.cubeSideNodes = [];
        _this.cubeSides = [];

        // TODO: v0.1.0: Put this in a function.
        (0, _forLength2.default)(6, _this._createCubeSide.bind(_this));
        return _this;
    }

    /**
     * Creates the 6 sides of the cube (the leafnodes of the scenegraph).
     *
     * TODO v0.1.0: Rename to CubeLayout.
     * TODO v0.1.0: Don't create Planes for each side, let the user specify their own content for each side using this.setChildren.
     *
     * @private
     * @param {Number} index The index (a integer between 0 and 5) that specifies which side to create.
     */


    (0, _createClass3.default)(Cube, [{
        key: '_createCubeSide',
        value: function _createCubeSide(index) {
            var T = _Transform2.default;
            var sideMol = new _Molecule3.default();
            var side = new _Plane2.default({
                size: [this.cubeWidth, this.cubeWidth],
                properties: {
                    background: 'pink',
                    backfaceVisibility: 'visible'
                }
            });
            var sync = new _GenericSync2.default(['mouse', 'touch']);

            this.cubeSides.push(side);

            side.pipe(sync);
            sync.pipe(this.options.handler);

            // rotate and place each side.
            if (index < 4) {
                // sides
                sideMol.modifier.transformFrom(T.multiply(T.rotate(0, Math.PI / 2 * index, 0), T.translate(0, 0, this.cubeWidth / 2)));
            } else {
                // top/bottom
                sideMol.modifier.transformFrom(T.multiply(T.rotate(Math.PI / 2 * (index % 2 ? -1 : 1), 0, 0), T.translate(0, 0, this.cubeWidth / 2)));
            }

            this.cubeSideNodes.push(this.node.add(sideMol.node));
            sideMol.node.add(side.node);
        }

        /**
         * Set the content for the sides of the cube.
         *
         * @param {Array} children An array containing anything that a
         * [famous/src/core/RenderNode](#famous/src/core/RenderNode) would accept in it's `add` method. Only the
         * first 6 items are used, the rest are ignored.
         */

    }, {
        key: 'setChildren',
        value: function setChildren(children) {
            (0, _forLength2.default)(6, function (index) {
                //this.cubeSideNodes[index].set(null); // TODO: how do we erase previous children?
                this.cubeSideNodes[index].add(children[index]);
            }.bind(this));
            return this;
        }
    }]);
    return Cube;
}(_Molecule3.default); /*
                        * LICENSE
                        *
                        * This Source Code Form is subject to the terms of the Mozilla Public
                        * License, v. 2.0. If a copy of the MPL was not distributed with this
                        * file, You can obtain one at http://mozilla.org/MPL/2.0/.
                        *
                        */

exports.default = Cube;
//# sourceMappingURL=Cube.js.map