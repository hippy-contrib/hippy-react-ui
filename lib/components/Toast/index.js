"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Toast = void 0;

var _Toast = _interopRequireDefault(require("./Toast.hippy"));

var _Toast2 = _interopRequireDefault(require("./Toast.web"));

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Toast
 * hippy 使用modal组件来实现
 * web 使用portal组件来实现
 */
var Toast = _utils.ISWEB ? _Toast2.default : _Toast.default;
exports.Toast = Toast;
var _default = Toast;
exports.default = _default;