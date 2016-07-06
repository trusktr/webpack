'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Calendar = undefined;

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

var _Transitionable = require('famous/src/transitions/Transitionable');

var _Transitionable2 = _interopRequireDefault(_Transitionable);

var _Easing = require('famous/src/transitions/Easing');

var _Easing2 = _interopRequireDefault(_Easing);

var _Molecule2 = require('./Molecule');

var _Molecule3 = _interopRequireDefault(_Molecule2);

var _Grid = require('./Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _DoubleSidedPlane = require('./DoubleSidedPlane');

var _DoubleSidedPlane2 = _interopRequireDefault(_DoubleSidedPlane);

var _forLength = require('army-knife/forLength');

var _forLength2 = _interopRequireDefault(_forLength);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A calendar widget for selecting a date (WIP).
 *
 * @class Calendar
 * @extends Molecule
 */

var Calendar = exports.Calendar = function (_Molecule) {
    (0, _inherits3.default)(Calendar, _Molecule);


    /**
     * Create a new `Calendar` with the given Famo.us-style size array and
     * transition. The transition is the type of animation used when switching
     * between months.
     *
     * @constructor
     * @param {Array} calendarSize A Famo.us-style width/height size array.
     * @param {String} transition The name of the animation transition to use when switching months.
     */

    function Calendar(calendarSize, transition) {
        (0, _classCallCheck3.default)(this, Calendar);

        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Calendar).call(this, { size: calendarSize }));

        _this.transition = transition;
        _this.flipSide = 0; // 0 means the initial front faces are showing, 1 means the initial back faces are showing.
        _this.columnsRows = [7, 6];
        _this.planes = [];

        _this._initializeTransitions();
        _this._createGrid();

        setTimeout(function () {
            this.transitions[this.transition]();
            setInterval(this.transitions[this.transition], 2000);
        }.bind(_this), 800);
        return _this;
    }

    /**
     * Creates the grid used for the layout of the day cells.
     *
     * @private
     */


    (0, _createClass3.default)(Calendar, [{
        key: '_createGrid',
        value: function _createGrid() {
            var grid = new _Grid2.default(this.columnsRows[0], this.columnsRows[1], this.options.size);

            (0, _forLength2.default)(this.columnsRows[0] * this.columnsRows[1], function (i) {
                var plane = new _DoubleSidedPlane2.default({
                    properties: {
                        background: 'teal'
                    }
                });
                this.planes.push(plane);
            }.bind(this));

            grid.setChildren(this.planes);
            this.node.add(grid);
        }

        /**
         * Set up `this.transitions`, containing the available month-to-month
         * transitions.
         *
         * @private
         */

    }, {
        key: '_initializeTransitions',
        value: function _initializeTransitions() {
            this.transitions = {
                flipDiagonal: function () {
                    this.flipSide = +!this.flipSide;
                    // determine which dimension of the grid is shorter and which is longer.
                    var shortest = 0;
                    var longest;
                    this.columnsRows.forEach(function (item, index) {
                        if (item < this.columnsRows[shortest]) shortest = index;
                    }.bind(this));
                    longest = +!shortest;

                    // for each diagonal of the grid, flip those cells.
                    (0, _forLength2.default)(this.columnsRows[0] + this.columnsRows[1] - 1, function (column) {
                        (0, _forLength2.default)(this.columnsRows[shortest], function (row) {
                            if (column - row >= 0 && column - row < this.columnsRows[longest]) {
                                var plane = this.planes[column - row + this.columnsRows[longest] * row];
                                flipOne(plane, column);
                            }
                        }.bind(this));
                    }.bind(this));

                    function flipOne(item, column) {
                        if (typeof item.__targetRotation == 'undefined') {
                            item.__targetRotation = new _Transitionable2.default(0);
                        }
                        var rotation = new _Transitionable2.default(item.__targetRotation.get());
                        item.__targetRotation.set(item.__targetRotation.get() + Math.PI);

                        //item.get().transformFrom(function() {
                        //return Transform.rotateY(rotation.get());
                        //});
                        item.children[0].get().transformFrom(function () {
                            return _Transform2.default.rotateY(rotation.get());
                        });
                        item.children[1].get().transformFrom(function () {
                            return _Transform2.default.rotateY(rotation.get() + Math.PI);
                        });

                        setTimeout(function () {
                            rotation.set(item.__targetRotation.get(), { duration: 2000, curve: _Easing2.default.outExpo });
                        }, 0 + 50 * column);
                    }
                }.bind(this)
            };
        }
    }]);
    return Calendar;
}(_Molecule3.default); /*
                        * LICENSE
                        *
                        * This Source Code Form is subject to the terms of the Mozilla Public
                        * License, v. 2.0. If a copy of the MPL was not distributed with this
                        * file, You can obtain one at http://mozilla.org/MPL/2.0/.
                        *
                        */

exports.default = Calendar;
//# sourceMappingURL=Calendar.js.map