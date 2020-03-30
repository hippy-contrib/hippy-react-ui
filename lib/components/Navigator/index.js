"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Navigator = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@hippy/react");

var _Text = _interopRequireDefault(require("../Text"));

var _StatusBarWrapper = _interopRequireDefault(require("./StatusBarWrapper"));

var _props = require("./props");

var _utils = require("../../utils");

var _Icon = _interopRequireDefault(require("../Icon"));

var _event = require("../../utils/event");

var _iosBackBlue = _interopRequireDefault(require("../../../assets/ios-back-blue.png"));

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

var navigatorHeight = 65;
var PADDINGTOP = 20;

var styles = _react2.StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: navigatorHeight,
    position: 'relative',
    backgroundColor: '#ffffff',
    paddingTop: PADDINGTOP // backgroundColor: color.whitebackgroundColor,

  },
  leftContainer: {
    position: 'absolute',
    left: 22,
    bottom: 0,
    width: 100,
    height: navigatorHeight,
    alignItems: 'flex-start',
    paddingTop: PADDINGTOP,
    justifyContent: 'center'
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 22
  },
  rightContainer: {
    position: 'absolute',
    right: 22,
    bottom: 0,
    width: 100,
    height: navigatorHeight,
    alignItems: 'flex-end',
    paddingTop: PADDINGTOP,
    justifyContent: 'center'
  }
});

var Navigator =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Navigator, _React$Component);

  function Navigator() {
    _classCallCheck(this, Navigator);

    return _possibleConstructorReturn(this, _getPrototypeOf(Navigator).apply(this, arguments));
  }

  _createClass(Navigator, [{
    key: "handleLeftClick",
    value: function handleLeftClick(event) {
      console.log('fuck');
      this.props.onLeftClick(event);
      return (0, _event.stopPropagation)(event);
    }
  }, {
    key: "renderLeft",
    value: function renderLeft() {
      var _this = this;

      var _this$props = this.props,
          back = _this$props.back,
          leftContent = _this$props.leftContent;

      var backContent = _react.default.createElement(_Icon.default, {
        size: "xs",
        onClick: function onClick(event) {
          return _this.handleLeftClick(event);
        },
        source: _iosBackBlue.default
      });

      var body = _react.default.isValidElement(leftContent) ? leftContent : _react.default.createElement(_Text.default, {
        size: "sm"
      }, leftContent);
      return _react.default.createElement(_react2.View, {
        style: styles.leftContainer
      }, back ? backContent : body);
    }
  }, {
    key: "renderRight",
    value: function renderRight() {
      var rightContent = this.props.rightContent;
      return _react.default.createElement(_react2.View, {
        style: styles.rightContainer
      }, _react.default.isValidElement(rightContent) ? rightContent : _react.default.createElement(_Text.default, {
        size: "sm"
      }, rightContent));
    }
  }, {
    key: "renderTitle",
    value: function renderTitle() {
      var _this$props2 = this.props,
          title = _this$props2.title,
          titleStyle = _this$props2.titleStyle,
          titleTextStyle = _this$props2.titleTextStyle;
      return _react.default.createElement(_react2.View, {
        style: [styles.titleContainer, (0, _utils.flattenStyle)(titleStyle)]
      }, _react.default.isValidElement(title) ? title : _react.default.createElement(_Text.default, {
        size: "md",
        style: titleTextStyle
      }, title));
    }
  }, {
    key: "renderItem",
    value: function renderItem(pos, customContent) {
      var style = [styles["".concat(pos, "Container")], (0, _utils.flattenStyle)(this.props["".concat(pos, "Style")] || {})];
      var body = this.props[pos];
      return _react.default.createElement(_react2.View, {
        style: style
      }, customContent || (!_react.default.isValidElement(body) ? _react.default.createElement(_Text.default, {
        style: this.props["".concat(pos, "TextStyle")] || {}
      }, body) : body));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          containerStyle = _this$props3.containerStyle,
          transparent = _this$props3.transparent;
      return _react.default.createElement(_StatusBarWrapper.default, null, _react.default.createElement(_react2.View, {
        style: [styles.container, transparent ? {
          backgroundColor: 'transparent'
        } : {}, (0, _utils.flattenStyle)(containerStyle)]
      }, this.renderTitle(), this.renderLeft(), this.renderRight()));
    }
  }]);

  return Navigator;
}(_react.default.Component);

exports.Navigator = Navigator;
Navigator.propTypes = _props.NavigatorPropTypes;
Navigator.defaultProps = _props.NavigatorDefaultProps;
var _default = Navigator;
exports.default = _default;