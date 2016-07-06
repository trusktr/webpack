'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Plane = undefined;

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

var _Surface = require('famous/src/core/Surface');

var _Surface2 = _interopRequireDefault(_Surface);

var _Molecule2 = require('./Molecule');

var _Molecule3 = _interopRequireDefault(_Molecule2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Planes have the properties of [Molecules](#Molecule), plus they contain a
 * [famous/src/core/Surface](#famous/src/core/Surface) so that they ultimately render
 * onto the screen. A Surface's events are automatically piped to it's
 * [famous/src/core/EventHandler](#famous/src/core/EventHandler), inherited from
 * `Molecule`.
 *
 * @class Plane
 * @extends Molecule
 */
/*
 * LICENSE
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 */

var Plane = exports.Plane = function (_Molecule) {
  (0, _inherits3.default)(Plane, _Molecule);


  /**
   * Creates a new `Plane`. Properties from the `initialOptions` parameter
   * are applied to this Plane's [famous/src/core/Surface](#famous/src/core/Surface) as well as to
   * to this Plane's [famous/src/core/Modifier](#famous/src/core/Modifier), hence the API of a Plane
   * is currently the combination of the Famo.us `Modifier` and `Surface` APIs.
   *
   * @constructor
   * @param {Object} initialOptions Options for the new Plane.
   */

  function Plane(initialOptions) {
    (0, _classCallCheck3.default)(this, Plane);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Plane).call(this, initialOptions));

    _this.surface = new _Surface2.default(_this.options);
    _this.node.add(_this.surface);
    _this.surface.pipe(_this.options.handler);
    return _this;
  }

  /**
   * Get the content of this Plane's [famous/src/core/Surface](#famous/src/core/Surface).
   * See [famous/src/core/Surface.getContent](#famous/src/core/Surface.getContent).
   */


  (0, _createClass3.default)(Plane, [{
    key: 'getContent',
    value: function getContent() {
      var args = Array.prototype.splice.call(arguments, 0);
      return this.surface.getContent.apply(this.surface, args);
    }

    /**
     * Set the content of this Plane's [famous/src/core/Surface](#famous/src/core/Surface).
     * See [famous/src/core/Surface.setContent](#famous/src/core/Surface.setContent).
     */

  }, {
    key: 'setContent',
    value: function setContent() {
      var args = Array.prototype.splice.call(arguments, 0);
      return this.surface.setContent.apply(this.surface, args);
    }
  }]);
  return Plane;
}(_Molecule3.default);

exports.default = Plane;
//# sourceMappingURL=Plane.js.map