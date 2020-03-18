import _objectSpread from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/objectSpread2";
import _classCallCheck from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _assertThisInitialized from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/inherits";
import React from 'react';
import { StyleSheet, View, Animation } from '@hippy/react';
import { ISWEB } from '../../utils';
import { // StyleProps,
// DefaultStyleProps,
ClickableProps, DefaultClickableProps, LayoutableProps, DefaultLayoutableProps } from '../../types';
var CHECKEDBGCOLOR = '#4dd865';
var UNCHECKEDBGCOLOR = '#ffffff';
var ANDUNCHECKEDBGCOLOR = '#efefef';
var BORDERCOLOR = '#eeeeee';
var SIZE = {
  android: {
    container: 72,
    inner: 36
  },
  ios: {
    container: 52,
    inner: 32
  }
};
var iosStyles = StyleSheet.create({
  container: {
    height: 32,
    width: SIZE.ios.container,
    borderRadius: 16
  },
  circle: {
    height: 32,
    width: SIZE.ios.inner,
    borderRadius: 16,
    backgroundColor: '#fff',
    borderWidth: 1,
    left: Math.floor(SIZE.ios.container / 2),
    borderColor: BORDERCOLOR
  }
});
var andStyles = StyleSheet.create({
  container: {
    height: 24,
    width: SIZE.android.container,
    backgroundColor: ANDUNCHECKEDBGCOLOR,
    borderRadius: 2
  },
  circle: {
    height: 22,
    width: SIZE.android.inner,
    borderRadius: 2,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: BORDERCOLOR,
    left: Math.floor(SIZE.android.container / 2)
  }
});
var basicStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingLeft: 0,
    paddingRight: 0,
    position: 'relative'
  },
  checkedContainer: {
    // alignItems: 'flex-end',
    backgroundColor: CHECKEDBGCOLOR
  },
  unCheckedContainer: {
    // alignItems: 'flex-start',
    backgroundColor: UNCHECKEDBGCOLOR,
    borderWidth: 1,
    borderColor: BORDERCOLOR
  },
  disabled: {
    opacity: 0.5
  }
});
export var Switch =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Switch, _React$Component);

  function Switch(props) {
    var _this;

    _classCallCheck(this, Switch);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Switch).call(this, props));
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Switch, [{
    key: "getCheckedPosition",
    value: function getCheckedPosition() {
      var platform = this.props.platform;
      var size = platform === 'android' ? SIZE.android : SIZE.ios;
      return size.container - size.inner;
    }
  }, {
    key: "initAnimation",
    value: function initAnimation() {
      this.destroyAnimation();
      this.checkAnimation = new Animation({
        startValue: 0,
        toValue: this.getCheckedPosition(),
        duration: 240,
        //动画持续时长
        delay: 0,
        //至动画真正开始的延迟时间
        mode: "timing",
        //动画模式，现在只支持timing
        timingFunction: "ease_bezier" //动画缓动函数

      });
      this.unCheckAnimation = new Animation({
        startValue: this.getCheckedPosition(),
        toValue: 0,
        duration: 240,
        //动画持续时长
        delay: 0,
        //至动画真正开始的延迟时间
        mode: "timing",
        //动画模式，现在只支持timing
        timingFunction: "ease_bezier" //动画缓动函数

      });
      return {
        checkAnimation: this.checkAnimation,
        unCheckAnimation: this.unCheckAnimation
      };
    }
  }, {
    key: "destroyAnimation",
    value: function destroyAnimation() {
      this.checkAnimation && this.checkAnimation.destroy();
      this.unCheckAnimation && this.unCheckAnimation.destroy();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.destroyAnimation();
    }
    /**
     * 根据平台，样式，生成对应的style样式
     */

  }, {
    key: "getContainerStyle",
    value: function getContainerStyle() {
      var _this$props = this.props,
          platform = _this$props.platform,
          checked = _this$props.checked,
          color = _this$props.color,
          disabled = _this$props.disabled;
      var checkedContainer = basicStyles.checkedContainer,
          unCheckedContainer = basicStyles.unCheckedContainer;

      var _this$initAnimation = this.initAnimation(),
          checkAnimation = _this$initAnimation.checkAnimation,
          unCheckAnimation = _this$initAnimation.unCheckAnimation;

      var styles = platform === 'android' ? andStyles : iosStyles;
      var containerStyle = [styles.container, basicStyles.container];
      containerStyle.push(checked ? checkedContainer : unCheckedContainer); // 设置自定义背景颜色

      color && checked && containerStyle.push({
        backgroundColor: color
      });
      disabled && containerStyle.push(basicStyles.disabled); // 配置动画

      this.leftAnimation = checked ? checkAnimation : unCheckAnimation; // setTimeout(() => {
      // 	if (this.circleRef && ISWEB) this.leftAnimation.setRef(this.circleRef);
      // 	this.leftAnimation.start();
      // }, 0);

      return containerStyle;
    }
  }, {
    key: "handleClick",
    value: function handleClick(event) {
      event.preventDefault && event.preventDefault();
      event.stopPropagation && event.stopPropagation();
      var _this$props2 = this.props,
          onClick = _this$props2.onClick,
          onChange = _this$props2.onChange,
          checked = _this$props2.checked,
          disabled = _this$props2.disabled;
      if (disabled) return;
      onClick(event);
      onChange(!checked);
      return true;
    }
  }, {
    key: "animate",
    value: function animate() {
      if (this.circleRef && this.leftAnimation) {
        ISWEB && this.leftAnimation.setRef(this.circleRef);
        this.leftAnimation.start();
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.animate();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      // 如果我们 snapshot 有值，说明我们刚刚添加了新的 items，
      // 调整滚动位置使得这些新 items 不会将旧的 items 推出视图。
      //（这里的 snapshot 是 getSnapshotBeforeUpdate 的返回值）
      if (prevProps.checked !== this.props.checked) {
        this.animate();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var platform = this.props.platform;
      var styles = platform === 'android' ? andStyles : iosStyles;
      return React.createElement(View, {
        style: this.getContainerStyle(),
        onClick: this.handleClick
      }, React.createElement(View, {
        ref: function ref(_ref) {
          return _this2.circleRef = _ref;
        },
        style: [styles.circle, {
          left: this.leftAnimation
        }]
      }));
    }
  }]);

  return Switch;
}(React.Component);
Switch.defaultProps = _objectSpread({}, DefaultLayoutableProps, {}, DefaultClickableProps, {
  // ...DefaultStyleProps,
  checked: false,
  disabled: false,
  onChange: function onChange() {},
  color: CHECKEDBGCOLOR,
  platform: 'ios'
});
export default Switch;