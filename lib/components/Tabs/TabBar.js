"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TabBar = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@hippy/react");

var _props = require("./props");

var _utils = require("../../utils");

var _TabBarItem = _interopRequireDefault(require("./TabBarItem"));

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

var DIVIDERHEIGHT = 1;

var styles = _react2.StyleSheet.create({
  container: {
    borderBottomWidth: DIVIDERHEIGHT,
    backgroundColor: _props.COLOR.backgroundColor
  },
  tabContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    display: 'flex'
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: 36,
    lineHeight: 36
  },
  cursorContainer: {
    height: 2,
    alignSelf: 'stretch',
    position: 'relative'
  },
  cursor: {
    height: 2,
    position: 'absolute',
    bottom: 0,
    left: 0
  }
});

var TabBar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TabBar, _React$Component);

  function TabBar(props) {
    var _this;

    _classCallCheck(this, TabBar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TabBar).call(this, props));
    _this.tabLayouts = {};
    _this.state = {
      cursor: {
        left: 0,
        width: 0
      }
    };
    return _this;
  }

  _createClass(TabBar, [{
    key: "onClick",
    value: function onClick(event, _ref) {
      var key = _ref.key;
      event.preventDefault && event.preventDefault();
      event.stopPropagation && event.stopPropagation();
      this.props.onClick(key);
      return true;
    }
  }, {
    key: "handleTabItemLayout",
    value: function handleTabItemLayout(_ref2, _ref3) {
      var layout = _ref2.layout;
      var key = _ref3.key;
      this.tabLayouts[key] = layout;
    }
  }, {
    key: "scrollTo",
    value: function scrollTo(x) {
      if (this.scrollerRef) {
        _utils.ISWEB ? this.scrollerRef.scrollTo(x, 0, true) : this.scrollerRef.scrollTo({
          x: x,
          animated: true
        });
      }
    }
  }, {
    key: "getCursorPosition",
    value: function getCursorPosition() {
      var _this2 = this;

      var _this$props = this.props,
          selected = _this$props.selected,
          tabs = _this$props.tabs;
      var cursor = this.state.cursor;
      var layout = this.tabLayouts[selected];
      if (!layout) return {
        left: 0,
        width: 0
      };
      var left = 0;

      for (var index = 0; index < tabs.length && tabs[index].key !== selected; ++index) {
        left += this.tabLayouts[tabs[index].key].width;
      }

      this.destroyAnimation();
      this.cursorAnimation = new _react2.Animation({
        startValue: cursor.left,
        toValue: left,
        duration: 200,
        //动画持续时长
        delay: 0,
        //至动画真正开始的延迟时间
        mode: "timing",
        //动画模式，现在只支持timing
        timingFunction: "ease_bezier" //动画缓动函数

      });
      this.scrollTo(left);
      this.setState({
        cursor: {
          left: left,
          width: layout.width
        }
      }, function () {
        _this2.startAnimate();
      });
    }
  }, {
    key: "startAnimate",
    value: function startAnimate() {
      if (this.cursorRef && this.cursorAnimation) {
        _utils.ISWEB && this.cursorAnimation.setRef(this.cursorRef); // web情况下需要绑定在ref上

        this.cursorAnimation.start();
      }
    }
  }, {
    key: "destroyAnimation",
    value: function destroyAnimation() {
      this.cursorAnimation && this.cursorAnimation.destroy();
    }
  }, {
    key: "onLayout",
    value: function onLayout() {
      var _this3 = this;

      setTimeout(function () {
        return _this3.getCursorPosition();
      }, 0);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      this.props.selected !== prevProps.selected && this.getCursorPosition();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // 删除动画
      this.destroyAnimation();
    }
  }, {
    key: "renderUnderline",
    value: function renderUnderline() {
      var _this4 = this;

      var _this$props2 = this.props,
          showUnderLine = _this$props2.showUnderLine,
          selectedColor = _this$props2.selectedColor;
      var width = this.state.cursor.width;
      if (!showUnderLine) return null;
      return _react.default.createElement(_react2.View, {
        ref: function ref(_ref4) {
          return _this4.cursorRef = _ref4;
        },
        style: [styles.cursor, {
          left: this.cursorAnimation,
          width: width,
          backgroundColor: selectedColor
        }]
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var _this$props3 = this.props,
          tabs = _this$props3.tabs,
          selected = _this$props3.selected,
          dividerColor = _this$props3.dividerColor,
          color = _this$props3.color,
          selectedColor = _this$props3.selectedColor,
          style = _this$props3.style,
          tabBarPosition = _this$props3.tabBarPosition,
          tabBarItemStyle = _this$props3.tabBarItemStyle;
      var dividerStyle = tabBarPosition === 'bottom' ? {
        borderTopWidth: DIVIDERHEIGHT,
        borderBottomWidth: 0
      } : {};
      return _react.default.createElement(_react2.View, {
        style: [{
          borderColor: dividerColor,
          height: 44
        }, styles.container, dividerStyle, (0, _utils.flattenStyle)(style)]
      }, _react.default.createElement(_react2.ScrollView, {
        ref: function ref(_ref5) {
          return _this5.scrollerRef = _ref5;
        },
        horizontal: true,
        style: {},
        contentContainerStyle: {},
        onLayout: function onLayout() {
          return _this5.onLayout();
        },
        showsHorizontalScrollIndicator: false,
        showsVerticalScrollIndicator: false
      }, tabs.map(function (item) {
        return _react.default.createElement(_TabBarItem.default, {
          key: item.key,
          style: tabBarItemStyle,
          color: selected === item.key ? selectedColor : color,
          selected: selected === item.key,
          title: item.title,
          onClick: function onClick(event) {
            return _this5.onClick(event, item);
          },
          onLayout: function onLayout(event) {
            return _this5.handleTabItemLayout(event, item);
          }
        });
      }), this.renderUnderline()));
    }
  }]);

  return TabBar;
}(_react.default.Component);

exports.TabBar = TabBar;
TabBar.propTypes = _props.TabBarPropTypes;
TabBar.defaultProps = _props.TabBarDefaultProps;
var _default = TabBar;
exports.default = _default;