"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {};
exports.default = void 0;

var _Modal = _interopRequireDefault(require("./Modal"));

var _Confirm = require("./Confirm");

Object.keys(_Confirm).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Confirm[key];
    }
  });
});

var _Popup = require("./Popup");

Object.keys(_Popup).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Popup[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Modal 动画
 * 分为两步
 * 	1. container 动画
 * 	2. modal主体动画   
 * hippy的动画都是container动画， modal主体需要添加动画？
 * webModal中 container动画是固定的fade，modal主体动画
 * 
 * 添加蒙层，蒙层统一使用fade
 * 动画是Modal主体
 */
var _default = _Modal.default;
exports.default = _default;