'use strict';

import _Object$defineProperty from 'babel-runtime/core-js/object/define-property';
import _Object$keys from 'babel-runtime/core-js/object/keys';
Object.defineProperty(exports, "__esModule", {
  value: true
});

var _motor = require('./motor');

_Object$keys(_motor).forEach(function (key) {
  if (key === "default") return;

  _Object$defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _motor[key];
    }
  });
});

var _motorHtml = require('./motor-html');

_Object$keys(_motorHtml).forEach(function (key) {
  if (key === "default") return;

  _Object$defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _motorHtml[key];
    }
  });
});
//# sourceMappingURL=index.js.map