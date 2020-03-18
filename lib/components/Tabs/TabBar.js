import _objectSpread from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/objectSpread2";
import _toConsumableArray from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/toConsumableArray";
import _classCallCheck from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/inherits";
import React from 'react';
import { View, StyleSheet, Animation } from '@hippy/react';
import { tabPageProps, tabsProps } from './props';
import { StyleProps } from '../../types';
import { // StyleProps,
// DefaultStyleProps,
ClickableProps, DefaultClickableProps } from '../../types';
import { ISWEB } from '../../utils';
import { COLOR } from './props';
import TabBarItem from './TabBarItem';
var DIVIDERHEIGHT = 1;
var styles = StyleSheet.create({
  container: {
    position: 'relative'
  },
  tabContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    display: 'flex',
    borderBottomWidth: DIVIDERHEIGHT,
    backgroundColor: COLOR.backgroundColor
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
export var TabBar =
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
      this.cursorAnimation = new Animation({
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
        ISWEB && this.cursorAnimation.setRef(this.cursorRef); // web情况下需要绑定在ref上

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
      return React.createElement(View, {
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
          tabBarPosition = _this$props3.tabBarPosition;
      var propsStyle = Array.isArray(style) ? style : [style];
      var dividerStyle = tabBarPosition === 'bottom' ? {
        borderTopWidth: DIVIDERHEIGHT,
        borderBottomWidth: 0
      } : {};
      return React.createElement(View, {
        style: [styles.container].concat(_toConsumableArray(propsStyle)),
        onLayout: function onLayout() {
          return _this5.onLayout();
        }
      }, React.createElement(View, {
        style: [styles.tabContainer, {
          borderColor: dividerColor
        }, dividerStyle]
      }, tabs.map(function (item) {
        return React.createElement(TabBarItem, {
          key: item.key,
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
      })), this.renderUnderline());
    }
  }]);

  return TabBar;
}(React.Component);
TabBar.defaultProps = _objectSpread({}, DefaultClickableProps, {
  tabs: [],
  color: COLOR.textColor,
  selectedColor: COLOR.selectedTextColor,
  dividerColor: COLOR.divider,
  tabBarPosition: 'top',
  style: {},
  showUnderLine: true
});
export default TabBar;