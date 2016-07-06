'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jss = require('jss');

var _jss2 = _interopRequireDefault(_jss);

var _jssNested = require('jss-nested');

var _jssNested2 = _interopRequireDefault(_jssNested);

var _jssExtend = require('jss-extend');

var _jssExtend2 = _interopRequireDefault(_jssExtend);

var _jssPx = require('jss-px');

var _jssPx2 = _interopRequireDefault(_jssPx);

var _jssVendorPrefixer = require('jss-vendor-prefixer');

var _jssVendorPrefixer2 = _interopRequireDefault(_jssVendorPrefixer);

var _jssCamelCase = require('jss-camel-case');

var _jssCamelCase2 = _interopRequireDefault(_jssCamelCase);

var _jssPropsSort = require('jss-props-sort');

var _jssPropsSort2 = _interopRequireDefault(_jssPropsSort);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var jss = _jss2.default.create();

jss.use((0, _jssNested2.default)());
jss.use((0, _jssExtend2.default)());
jss.use((0, _jssPx2.default)());
jss.use((0, _jssVendorPrefixer2.default)());
jss.use((0, _jssCamelCase2.default)());
jss.use((0, _jssPropsSort2.default)());

exports.default = jss;
//# sourceMappingURL=index.js.map