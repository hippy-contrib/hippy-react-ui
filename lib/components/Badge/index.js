"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Badge = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@hippy/react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Text = _interopRequireDefault(require("../Text"));

var _types = require("../../types");

var _fontSize = require("../../utils/fontSize");

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
  container: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: 20,
    minWidth: 10,
    borderRadius: 10,
    backgroundColor: '#ff5b05',
    paddingLeft: 6,
    paddingRight: 6
  },
  badge: {
    color: '#ffffff',
    // backgroundColor: 'green',
    height: 18,
    lineHeight: 18,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  corner: {
    right: -8,
    top: -8 // position: 'absolute',
    // right: 0,
    // top: 0,

  },
  dot: {
    height: 8,
    width: 8,
    minWidth: 8,
    minHeight: 8,
    borderRadius: 4,
    padding: 0,
    paddingLeft: 0,
    paddingRight: 0
  },
  dotCorner: {
    right: -4,
    top: -4
  }
});

var Badge =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Badge, _React$Component);

  function Badge() {
    _classCallCheck(this, Badge);

    return _possibleConstructorReturn(this, _getPrototypeOf(Badge).apply(this, arguments));
  }

  _createClass(Badge, [{
    key: "getText",
    value: function getText() {
      var _this$props = this.props,
          text = _this$props.text,
          overflowCount = _this$props.overflowCount;
      if (!overflowCount || typeof text !== 'number') return text;
      return text > overflowCount ? "".concat(overflowCount, "+") : text;
    }
  }, {
    key: "getContainerStyle",
    value: function getContainerStyle() {
      var _this$props2 = this.props,
          dot = _this$props2.dot,
          corner = _this$props2.corner,
          style = _this$props2.style;
      var containerStyle = [styles.container];
      var cornerStyle = dot ? styles.dotCorner : styles.corner;
      dot && containerStyle.push(styles.dot);
      corner && containerStyle.push(cornerStyle);
      containerStyle.push(style);
      return containerStyle;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          dot = _this$props3.dot,
          fontStyle = _this$props3.fontStyle,
          fontSize = _this$props3.fontSize;
      var word = this.getText();
      return _react.default.createElement(_react2.View, {
        style: this.getContainerStyle()
      }, !dot && _react.default.createElement(_Text.default, {
        color: "#ffffff",
        size: (0, _fontSize.getFontSize)(fontSize),
        style: [styles.badge, (0, _utils.flattenStyle)(fontStyle)]
      }, word));
    }
  }]);

  return Badge;
}(_react.default.Component);

exports.Badge = Badge;
Badge.propTypes = {
  fontSize: _propTypes.default.oneOfType([_propTypes.default.oneOf(_fontSize.fontSizes), _propTypes.default.number]),
  text: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  corner: _propTypes.default.bool,
  dot: _propTypes.default.bool,
  overflowCount: _propTypes.default.number,
  style: _types.StyleProps,
  fontStyle: _types.StyleProps
};
Badge.defaultProps = {
  fontSize: 'xs',
  text: '',
  corner: true,
  dot: false,
  overflowCount: 99,
  style: {},
  fontStyle: {}
};
var _default = Badge;
exports.default = _default;