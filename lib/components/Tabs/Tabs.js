"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Tabs = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@hippy/react");

var _TabBar = _interopRequireDefault(require("./TabBar"));

var _TabPanel = _interopRequireDefault(require("./TabPanel"));

var _props = require("./props");

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styles = _react2.StyleSheet.create({
  container: {
    flex: 1
  },
  bodyContainer: {
    flex: 1 // backgroundColor: 'green',

  },
  barContainer: {
    alignSelf: 'stretch',
    height: 36 // left: 0,
    // right: 0,

  }
});

var Tabs =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Tabs, _React$Component);

  _createClass(Tabs, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var page = nextProps.page;
      var currentPage = prevState.currentPage;

      if (page && currentPage !== page) {
        return {
          currentPage: page
        };
      }

      return null;
    }
  }]);

  function Tabs(props) {
    var _this;

    _classCallCheck(this, Tabs);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Tabs).call(this, props));
    _this.handleBarClick = _this.handleBarClick.bind(_assertThisInitialized(_this));
    _this.onPageSelected = _this.onPageSelected.bind(_assertThisInitialized(_this));
    var initialPage = props.initialPage,
        page = props.page,
        tabs = props.tabs;
    var defaultCurrentPage = tabs && tabs[0] && tabs[0].key;
    _this.state = {
      currentPage: initialPage || page || defaultCurrentPage
    };
    return _this;
  }

  _createClass(Tabs, [{
    key: "handleBarClick",
    value: function handleBarClick(key) {
      var currentPage = this.state.currentPage;
      var onTabClick = this.props.onTabClick;
      onTabClick(key);
      key !== currentPage && this.slideTo(key); // 将触发 onPageSelected
    }
  }, {
    key: "slideTo",
    value: function slideTo(currentPage) {
      var animated = this.props.animated;

      if (this.viewpager) {
        animated ? this.viewpager.setPage(this.getSelectedIndex(currentPage)) : // 有动画
        this.viewpager.setPageWithoutAnimation(this.getSelectedIndex(currentPage)); // 没有动画
      }
    }
  }, {
    key: "getSelectedIndex",
    value: function getSelectedIndex() {
      var currentPage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.currentPage;
      var children = this.props.children;
      var index = children.findIndex(function (_ref) {
        var key = _ref.key;
        return key === currentPage;
      });
      return Math.max(index, 0);
    }
    /**
     * 页面选择回调
     * 更新state中的currentPage
     * 触发onChange
     * @param {*} param0 
     */

  }, {
    key: "onPageSelected",
    value: function onPageSelected(_ref2) {
      var index = _ref2.position;
      var _this$props = this.props,
          children = _this$props.children,
          onChange = _this$props.onChange;
      if (!children.length) return;
      var ind = index;
      if (index < 0 || index > children.length) ind = 0;
      onChange(children[ind].key);
      this.setState({
        currentPage: children[ind].key
      });
    }
  }, {
    key: "setWebBehavior",
    value: function setWebBehavior(_ref3) {
      var animated = _ref3.animated,
          swipeable = _ref3.swipeable;

      // 临时兼容方案，等@hippy/react-web发新版本，支持这两个属性，就可删除
      if (this.viewpager) {
        !swipeable && (this.viewpager.viewPagerSwiper.allowTouchMove = false);
        !animated && (this.viewpager.viewPagerSwiper.params.speed = 0);
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props2 = this.props,
          animated = _this$props2.animated,
          swipeable = _this$props2.swipeable;
      _utils.ISWEB && this.setWebBehavior({
        animated: animated,
        swipeable: swipeable
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          children = _this$props3.children,
          tabs = _this$props3.tabs,
          tabBarPosition = _this$props3.tabBarPosition,
          swipeable = _this$props3.swipeable,
          showUnderLine = _this$props3.showUnderLine,
          tabBarColor = _this$props3.tabBarColor,
          tabBarSelectedColor = _this$props3.tabBarSelectedColor,
          tabBarDividerColor = _this$props3.tabBarDividerColor,
          tabBarContainerStyle = _this$props3.tabBarContainerStyle,
          tabBarItemStyle = _this$props3.tabBarItemStyle;
      var isBottom = tabBarPosition === 'bottom';
      var containerStyle = {
        flexDirection: isBottom ? 'column-reverse' : 'column'
      };
      var currentPage = this.state.currentPage;
      return _react.default.createElement(_react2.View, {
        style: [styles.container, containerStyle]
      }, _react.default.createElement(_TabBar.default, {
        style: [_objectSpread({}, styles.barContainer, {
          marginBottom: isBottom ? 0 : 8
        }), (0, _utils.flattenStyle)(tabBarContainerStyle)],
        tabBarItemStyle: tabBarItemStyle,
        tabBarPosition: tabBarPosition,
        tabs: tabs,
        selected: currentPage,
        onClick: this.handleBarClick,
        showUnderLine: showUnderLine,
        color: tabBarColor,
        selectedColor: tabBarSelectedColor,
        dividerColor: tabBarDividerColor
      }), _react.default.createElement(_react2.ViewPager, {
        ref: function ref(_ref4) {
          _this2.viewpager = _ref4;
        },
        style: styles.bodyContainer,
        initialPage: 0,
        keyboardDismissMode: "none",
        onPageSelected: this.onPageSelected,
        scrollEnabled: swipeable
      }, children.map(function (child) {
        return _react.default.createElement(_TabPanel.default, {
          key: child.key,
          id: child.key,
          selected: currentPage,
          isSelected: child.key === currentPage
        }, child);
      })));
    }
  }]);

  return Tabs;
}(_react.default.Component);

exports.Tabs = Tabs;
Tabs.propTypes = _props.TabsPropTypes;
Tabs.defaultProps = _props.TabsDefaultProps;
var _default = Tabs;
exports.default = _default;