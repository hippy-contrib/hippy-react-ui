import _objectSpread from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/objectSpread2";
import _classCallCheck from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _possibleConstructorReturn from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _assertThisInitialized from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/assertThisInitialized";
import _createClass from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/createClass";
import _inherits from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/inherits";

/**
 * hippy viewPager web版不支持 scrollEnabled，只是简单初始化swiper
 *  1. 需要添加参数 allowTouchMove: false 是否允许滑动
 * 	2. component卸载的时候，没有对应的事件绑定，容易引起内存泄漏
 * 
 */
import React from 'react';
import { View, StyleSheet, ViewPager } from '@hippy/react';
import TabBar from './TabBar';
import TabPanel from './TabPanel';
import { tabPageProps, tabsProps } from './props';
import { ISWEB } from '../../utils'; // import { StyleProps } from '../../types';

import { COLOR } from './props';
var styles = StyleSheet.create({
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
export var Tabs =
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
      ISWEB && this.setWebBehavior({
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
          tabBarDividerColor = _this$props3.tabBarDividerColor;
      var isBottom = tabBarPosition === 'bottom';
      var containerStyle = {
        flexDirection: isBottom ? 'column-reverse' : 'column'
      };
      var currentPage = this.state.currentPage;
      return React.createElement(View, {
        style: [styles.container, containerStyle]
      }, React.createElement(TabBar, {
        style: _objectSpread({}, styles.barContainer, {
          marginBottom: isBottom ? 0 : 8
        }),
        tabBarPosition: tabBarPosition,
        tabs: tabs,
        selected: currentPage,
        onClick: this.handleBarClick,
        showUnderLine: showUnderLine,
        color: tabBarColor,
        selectedColor: tabBarSelectedColor,
        dividerColor: tabBarDividerColor
      }), React.createElement(ViewPager, {
        ref: function ref(_ref4) {
          _this2.viewpager = _ref4;
        },
        style: styles.bodyContainer,
        initialPage: 0,
        keyboardDismissMode: "none",
        onPageSelected: this.onPageSelected,
        scrollEnabled: swipeable
      }, children.map(function (child) {
        return React.createElement(TabPanel, {
          key: child.key,
          id: child.key,
          selected: currentPage,
          isSelected: child.key === currentPage
        }, child);
      })));
    }
  }]);

  return Tabs;
}(React.Component);
Tabs.defaultProps = {
  tabs: [],
  tabBarPosition: 'top',
  onChange: function onChange() {
    return false;
  },
  onTabClick: function onTabClick() {
    return false;
  },
  animated: true,
  // 至于在终端有效
  swipeable: true,
  showUnderLine: true,
  tabBarColor: COLOR.textColor,
  tabBarSelectedColor: COLOR.selectedTextColor,
  tabBarDividerColor: COLOR.divider
};
export default Tabs;