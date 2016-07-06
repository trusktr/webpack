'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DoubleSidedPlane = undefined;

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

var _Molecule2 = require('./Molecule');

var _Molecule3 = _interopRequireDefault(_Molecule2);

var _Plane = require('./Plane');

var _Plane2 = _interopRequireDefault(_Plane);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A scenegraph tree who's two leaf nodes are [Plane](#Plane) instances facing
 * opposite directions. For the purposes of these docs, in a brand new app with
 * only a single `DoubleSidedPlane` added to the context, and having no
 * rotation, "plane1" faces you and "plane2" faces away.
 *
 * @class DoubleSidedPlane
 * @extends Molecule
 */

var DoubleSidedPlane = exports.DoubleSidedPlane = function (_Molecule) {
  (0, _inherits3.default)(DoubleSidedPlane, _Molecule);


  /**
   * Creates a new `DoubleSidedPlane` who's `initialOptions` get passed to
   * both [Plane](#Plane) instances, as well as this DoubleSidedPlane's parent
   * [Molecule](#Molecule) constructor.
   *
   * @constructor
   * @param {Object} initialOptions The options to initiate the `DoubleSidedPlane` with.
   */

  function DoubleSidedPlane(initialOptions) {
    (0, _classCallCheck3.default)(this, DoubleSidedPlane);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(DoubleSidedPlane).call(this, initialOptions));

    _this.children = [];
    _this.plane1 = new _Plane2.default(_this.options);
    _this.plane1.transform.set(_Transform2.default.rotate(0, 0, 0));
    _this.setOptions({ properties: { background: 'orange' } });
    _this.plane2 = new _Plane2.default(_this.options);
    _this.plane2.transform.set(_Transform2.default.rotate(0, Math.PI, 0));

    _this.children.push(_this.plane1);
    _this.children.push(_this.plane2);
    _this.node.add(_this.plane2.node);
    _this.node.add(_this.plane1.node);
    _this.plane1.pipe(_this.options.handler);
    _this.plane2.pipe(_this.options.handler);

    return _this;
  }

  /**
   * Get the content of the [famous/src/core/Surface](#famous/src/core/Surface) of each [Plane](#Plane).
   *
   * @returns {Array} An array containing two items, the content of each
   * `Plane`. The first item is from "plane1".
   */


  (0, _createClass3.default)(DoubleSidedPlane, [{
    key: 'getContent',
    value: function getContent() {
      return [this.plane1.getContent(), this.plane2.getContent()];
    }

    /**
     * Set the content of both [Plane](#Plane) instances.
     *
     * @param {Array} content An array of content, one item per `Plane`. The
     * first item is for "plane1".
     */

  }, {
    key: 'setContent',
    value: function setContent(content) {
      this.plane1.setContent(content[0]);
      this.plane2.setContent(content[1]);
    }
  }]);
  return DoubleSidedPlane;
}(_Molecule3.default); /*
                        * LICENSE
                        *
                        * This Source Code Form is subject to the terms of the Mozilla Public
                        * License, v. 2.0. If a copy of the MPL was not distributed with this
                        * file, You can obtain one at http://mozilla.org/MPL/2.0/.
                        *
                        */

exports.default = DoubleSidedPlane;
//# sourceMappingURL=DoubleSidedPlane.js.map