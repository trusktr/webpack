'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Grid = undefined;

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

var _Modifier = require('famous/src/core/Modifier');

var _Modifier2 = _interopRequireDefault(_Modifier);

var _Transform = require('famous/src/core/Transform');

var _Transform2 = _interopRequireDefault(_Transform);

var _Molecule2 = require('./Molecule');

var _Molecule3 = _interopRequireDefault(_Molecule2);

var _forLength = require('army-knife/forLength');

var _forLength2 = _interopRequireDefault(_forLength);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A scenegraph tree with a variable number of leaf node Modifiers (the grid
 * cells) that are arranged in a grid. Add any [famous/src/core/RenderNode](#famous/src/core/RenderNode)-compatible
 * item to each leafnode of the grid.
 *
 * TODO: Use Molecule instead of Modifier for the grid cells.
 * TODO: Add an options parameter, that the Molecule constructor will handle.
 *
 * @class Grid
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

var Grid = exports.Grid = function (_Molecule) {
    (0, _inherits3.default)(Grid, _Molecule);


    /**
     * Creates a new Grid having the specified number of columns, number of rows,
     * and famo.us-style size.
     *
     * @constructor
     * @param {Number} columns The integer number of columns.
     * @param {Number} rows The integer number of rows.
     * @param {Array} size A famo.us-style width/height size array.
     */

    function Grid(columns, rows, size) {
        (0, _classCallCheck3.default)(this, Grid);

        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Grid).call(this, { size: size }));

        _this.columns = columns;
        _this.rows = rows;
        _this.cellNodes = [];

        if (typeof _this.options.size === 'undefined') {
            _this.setOptions({ size: [undefined, undefined] });
        }

        (0, _forLength2.default)(_this.columns * _this.rows, _this._createGridCell.bind(_this));
        return _this;
    }

    /**
     * Creates a grid cell at the given index.
     *
     * @private
     * @param {Number} index The integer index of the grid cell.
     */


    (0, _createClass3.default)(Grid, [{
        key: '_createGridCell',
        value: function _createGridCell(index) {
            var column = index % this.columns;
            var row = Math.floor(index / this.columns);

            var cellSize = null;
            if (typeof this.options.size[0] != 'undefined' && typeof this.options.size[1] != 'undefined') {
                cellSize = [];
                cellSize[0] = this.options.size[0] / this.columns;
                cellSize[1] = this.options.size[1] / this.rows;
            }

            var mod = new _Modifier2.default({
                align: [0, 0],
                origin: [0, 0],
                size: cellSize ? [cellSize[0], cellSize[1]] : [undefined, undefined],
                transform: _Transform2.default.translate(column * cellSize[0], row * cellSize[1], 0)
            });
            var mod2 = new _Modifier2.default({
                //transform: Transform.rotateY(Math.PI/10),
                align: [0.5, 0.5],
                origin: [0.5, 0.5]
            });
            // FIXME: ^^^ Why do I need an extra Modifier to align stuff in the middle of the grid cells?????
            // ^ I think this is a Famous 0.3 bug.
            this.cellNodes.push(this.node.add(mod).add(mod2));
        }

        /**
         * Sets the items to be layed out in the grid.
         *
         * @param {Array} children An array of [famous/src/core/RenderNode](#famous/src/core/RenderNode)-compatible items.
         */

    }, {
        key: 'setChildren',
        value: function setChildren(children) {
            (0, _forLength2.default)(this.columns * this.rows, function (index) {
                //this.cellNodes[index].set(null); // TODO: how do we erase previous children?
                this.cellNodes[index].add(children[index]);
            }.bind(this));
            return this;
        }
    }]);
    return Grid;
}(_Molecule3.default);

exports.default = Grid;
//# sourceMappingURL=Grid.js.map