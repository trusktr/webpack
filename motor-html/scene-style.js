'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _nodeStyle = require('./node-style');

var _nodeStyle2 = _interopRequireDefault(_nodeStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    'motor-scene': (0, _assign2.default)({}, _nodeStyle2.default['motor-node'], {
        //display:   'block',
        //boxSizing: 'border-box',
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        height: '100%',

        // Constant perspective for now.
        // TODO: make settable. issue #32
        perspective: 1000

    })
};
//# sourceMappingURL=scene-style.js.map