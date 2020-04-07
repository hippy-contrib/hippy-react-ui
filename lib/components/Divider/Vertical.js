"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Divider = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@hippy/react");

var _reactStyleProptype = _interopRequireDefault(require("react-style-proptype"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styles = _react2.StyleSheet.create({
  divider: {
    alignSelf: 'stretch' // transform: [{ scaleX: 0.5 }],

  }
});

var Divider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Divider, _React$Component);

  function Divider() {
    _classCallCheck(this, Divider);

    return _possibleConstructorReturn(this, _getPrototypeOf(Divider).apply(this, arguments));
  }

  _createClass(Divider, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          width = _this$props.width,
          color = _this$props.color,
          _this$props$style = _this$props.style,
          style = _this$props$style === void 0 ? {} : _this$props$style;
      return (
        /*#__PURE__*/
        _react.default.createElement(_react2.View, {
          style: [styles.divider, {
            width: width,
            backgroundColor: color
          }, style]
        })
      );
    }
  }]);

  return Divider;
}(_react.default.Component);

exports.Divider = Divider;
Divider.propTypes = {
  color: _propTypes.default.string,
  width: _propTypes.default.number,
  style: _reactStyleProptype.default
};
Divider.defaultProps = {
  color: '#ddd',
  width: _utils.hairlineWidth,
  style: {}
};
var _default = Divider;
exports.default = _default;