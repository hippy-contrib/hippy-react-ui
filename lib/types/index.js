"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  StyleProps: true,
  DefaultStyleProps: true,
  ellipsizeMode: true,
  ChildrenProps: true
};
exports.ChildrenProps = exports.ellipsizeMode = exports.DefaultStyleProps = exports.StyleProps = void 0;

var _reactStyleProptype = _interopRequireDefault(require("react-style-proptype"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _event = require("./event");

Object.keys(_event).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _event[key];
    }
  });
});

var _image = require("./image");

Object.keys(_image).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _image[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyleProps = _propTypes.default.oneOfType([_propTypes.default.arrayOf(_reactStyleProptype.default), _reactStyleProptype.default]);

exports.StyleProps = StyleProps;
var DefaultStyleProps = {
  style: {}
};
exports.DefaultStyleProps = DefaultStyleProps;
var ellipsizeMode = ['head', 'middle', 'tail', 'clip'];
exports.ellipsizeMode = ellipsizeMode;

var ChildrenProps = _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string, _propTypes.default.element]);

exports.ChildrenProps = ChildrenProps;