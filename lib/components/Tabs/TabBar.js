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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

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
    _this.tabLayouts = {}; // 每个tabItem的位置信息

    _this.containerLayout = {}; // 可视窗口位置信息

    _this.scrollLayout = {}; // 滚动条位置信息

    _this.state = {
      cursor: {
        left: 0,
        width: 0
      }
    };
    _this.handleOnScroll = _this.handleOnScroll.bind(_assertThisInitialized(_this));
    _this.onLayout = _this.onLayout.bind(_assertThisInitialized(_this));
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
    /**
     * @description 滑动scrollview，使选择的item处于可视窗口中
     * @param {*} param0 
     */

  }, {
    key: "setVisibleView",
    value: function setVisibleView(_ref4) {
      var left = _ref4.left,
          width = _ref4.width;
      var containerLayout = this.containerLayout,
          scrollLayout = this.scrollLayout;
      var visibleSize = {
        left: scrollLayout.x,
        right: scrollLayout.x + containerLayout.width
      }; // 当前处于可视窗口内，直接返回

      if (left >= visibleSize.left && left + width <= visibleSize.right) {
        return;
      }

      var targetX = left + width / 2 - containerLayout.width / 2;
      this.scrollTo(Math.min(scrollLayout.width - containerLayout.width, Math.max(targetX, 0)));
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
      this.setVisibleView({
        left: left,
        width: layout.width
      });
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
    key: "handleOnScroll",
    value: function handleOnScroll(layout) {
      var contentOffset = layout.contentOffset,
          layoutMeasurement = layout.layoutMeasurement,
          contentSize = layout.contentSize; // hippy 中可以获取到scrollWidth，web通过instance获取

      var width = layout.hasOwnProperty('contentSize') ? contentSize.width : this.scrollerRef.instance.scrollWidth;
      this.scrollLayout = _objectSpread({}, contentOffset, {}, layoutMeasurement, {
        width: width
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
    value: function onLayout(_ref5) {
      var _this3 = this;

      var layout = _ref5.layout;
      this.containerLayout = layout;
      setTimeout(function () {
        return _this3.getCursorPosition();
      }, 0);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.scrollTo(1);
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
        ref: function ref(_ref6) {
          return _this4.cursorRef = _ref6;
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
        onLayout: this.onLayout,
        style: [{
          borderColor: dividerColor,
          height: 44
        }, styles.container, dividerStyle, (0, _utils.flattenStyle)(style)]
      }, _react.default.createElement(_react2.ScrollView, {
        ref: function ref(_ref7) {
          return _this5.scrollerRef = _ref7;
        },
        horizontal: true,
        style: {},
        onScroll: this.handleOnScroll,
        contentContainerStyle: {},
        showsHorizontalScrollIndicator: false,
        showsVerticalScrollIndicator: false,
        scrollEventThrottle: 160
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