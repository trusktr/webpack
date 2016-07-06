'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _map = require('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _documentReady = require('awaitbox/dom/documentReady');

var _documentReady2 = _interopRequireDefault(_documentReady);

require('./Utility');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var documentIsReady = false;

var Motor = function () {
    function Motor() {
        (0, _classCallCheck3.default)(this, Motor);

        this._inFrame = false; // true when inside a requested animation frame.
        this._rAF = null; // the current animation frame, or null.
        this._animationLoopStarted = false;
        this._allRenderTasks = [];
        this._nodesToBeRendered = new _map2.default();
    }

    /**
     * Starts an rAF loop and runs the render tasks in the _renderTasks stack.
     * As long as there are tasks in the stack, the loop continues. When the
     * stack becomes empty due to removal of tasks, the rAF stops and the app
     * sits there doing nothing -- silence, crickets.
     */


    (0, _createClass3.default)(Motor, [{
        key: '_startAnimationLoop',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
                var _this = this;

                var motorLoop;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (!this._animationLoopStarted) {
                                    _context.next = 2;
                                    break;
                                }

                                return _context.abrupt('return');

                            case 2:

                                this._animationLoopStarted = true;

                                if (documentIsReady) {
                                    _context.next = 7;
                                    break;
                                }

                                _context.next = 6;
                                return (0, _documentReady2.default)();

                            case 6:
                                documentIsReady = true;

                            case 7:

                                // DIRECT ANIMATION LOOP ///////////////////////////////////
                                // So now we can render after the scene is mounted.

                                motorLoop = function motorLoop(timestamp) {
                                    _this._inFrame = true;

                                    _this._runRenderTasks(timestamp);
                                    _this._renderNodes(timestamp);

                                    // If any tasks are left to run, continue the animation loop.
                                    if (_this._allRenderTasks.length) _this._rAF = requestAnimationFrame(motorLoop);else {
                                        _this._rAF = null;
                                        _this._animationLoopStarted = false;
                                    }

                                    _this._inFrame = false;
                                };

                                this._rAF = requestAnimationFrame(motorLoop);

                                // ANIMATION LOOP USING WHILE AND AWAIT ///////////////////////////////////
                                //this._rAF = true
                                //let timestamp = null
                                //while (this._rAF) {
                                //timestamp = await animationFrame()
                                //this._inFrame = true

                                //this._runRenderTasks(timestamp)
                                //this._renderNodes(timestamp)

                                //// If any tasks are left to run, continue the animation loop.
                                //if (!this._allRenderTasks.length) {
                                //this._rAF = null
                                //this._animationLoopStarted = false
                                //}

                                //this._inFrame = false
                                //}

                            case 9:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function _startAnimationLoop() {
                return _ref.apply(this, arguments);
            }

            return _startAnimationLoop;
        }()

        /**
         * When a render tasks is added a new rAF loop will be started if there
         * isn't one currently.
         *
         * A render task is simply a function that will be called over and over
         * again, in the Motor's animation loop. That's all, nothing special.
         * However, if a Node setter is used inside of a render task, then the Node
         * will tell Motor that it needs to be re-rendered, which will happen at
         * the end of the current frame. If a Node setter is used outside of a
         * render task (i.e. outside of the Motor's animation loop), then the Node
         * tells Motor to re-render the Node on the next animation loop tick.
         * Basically, regardless of where the Node's setters are used (inside or
         * outside of the Motor's animation loop), rendering always happens inside
         * the loop.
         *
         * @param {Function} fn The render task to add.
         * @return {Function} A reference to the render task. Useful for saving to
         * a variable so that it can later be passed to Motor.removeRenderTask().
         */

    }, {
        key: 'addRenderTask',
        value: function addRenderTask(fn) {
            if (typeof fn != 'function') throw new Error('Render task must be a function.');

            this._allRenderTasks.push(fn);

            // If the render loop isn't started, start it.
            if (!this._animationLoopStarted) this._startAnimationLoop();

            return fn;
        }
    }, {
        key: 'removeRenderTask',
        value: function removeRenderTask(fn) {
            this._allRenderTasks.splice(this._allRenderTasks.indexOf(fn), 1);
        }
    }, {
        key: '_runRenderTasks',
        value: function _runRenderTasks(timestamp) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = (0, _getIterator3.default)(this._allRenderTasks), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var task = _step.value;

                    task(timestamp);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }, {
        key: '_setNodeToBeRendered',
        value: function _setNodeToBeRendered(node) {
            if (!this._nodesToBeRendered.has(node)) this._nodesToBeRendered.set(node);
        }

        // currently unused, as the list is cleared after each frame.
        // TODO: prevent GC by clearing a linked list instead of Array, Set or Map?

    }, {
        key: '_unsetNodeToBeRendered',
        value: function _unsetNodeToBeRendered(node) {
            this._nodesToBeRendered.delete(node);
        }
    }, {
        key: '_renderNodes',
        value: function _renderNodes(timestamp) {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = (0, _getIterator3.default)(this._nodesToBeRendered), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var _step2$value = (0, _slicedToArray3.default)(_step2.value, 1);

                    var node = _step2$value[0];

                    node._render(timestamp);
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            this._nodesToBeRendered.clear();
        }
    }]);
    return Motor;
}();

// export a singleton instance rather than the class directly.


exports.default = new Motor();
//# sourceMappingURL=Motor.js.map