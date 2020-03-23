"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Modal = _interopRequireDefault(require("./Modal.web"));

var _Modal2 = _interopRequireDefault(require("./Modal.hippy"));

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 抹平hippy和web功能
 * 
 * 1. 弹框container动作
 * 2. 蒙层
 * 3. 全屏
 */
var Modal = _utils.ISWEB ? _Modal.default : _Modal2.default;
var _default = Modal;
exports.default = _default;