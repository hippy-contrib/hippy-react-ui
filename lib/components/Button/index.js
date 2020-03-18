import _objectSpread from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/objectSpread2";
import _classCallCheck from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _assertThisInitialized from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/inherits";
import React from 'react';
import { View, StyleSheet } from '@hippy/react';
import { StyleProps, ChildrenProps } from '../../types';
import { stopPropagation } from '../../utils/event';
import { fontSizesMap } from '../../utils/fontSize';
import Text from '../Text';
import { // StyleProps,
// DefaultStyleProps,
ClickableProps, DefaultClickableProps, LayoutableProps, DefaultLayoutableProps } from '../../types';
export var COLOR = {
  selectedTextColor: '#108ee9',
  textColor: '#afafaf',
  divider: '#ddd',
  backgroundColor: '#fff'
};
var styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 44,
    paddingHorizontal: 12,
    borderRadius: 4
  },
  primaryContainer: {
    color: '#fff',
    backgroundColor: '#108ee9'
  },
  primaryText: {
    color: '#fff'
  },
  ghostContainer: {
    backgroundColor: '#fff',
    color: '#108ee9',
    borderWidth: 1,
    borderColor: '#dddddd'
  },
  ghostText: {
    color: '#108ee9'
  },
  activating: {
    opacity: 0.7
  },
  disabled: {
    opacity: 0.6
  },
  large: {
    fontSize: fontSizesMap['md']
  },
  small: {
    height: 30,
    fontSize: fontSizesMap['xs']
  }
});
export var Button =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button(props) {
    var _this;

    _classCallCheck(this, Button);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Button).call(this, props));

    _this.handleClick = function (event) {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          disabled = _this$props.disabled;
      !disabled && onClick(event);
      return stopPropagation(event);
    };

    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    _this.state = {
      isActive: false
    };
    return _this;
  }

  _createClass(Button, [{
    key: "getStyle",
    value: function getStyle() {
      var _this$props2 = this.props,
          style = _this$props2.style,
          disabled = _this$props2.disabled,
          size = _this$props2.size,
          activeStyle = _this$props2.activeStyle,
          type = _this$props2.type;
      var isActive = this.state.isActive;
      var large = styles.large,
          small = styles.small,
          activating = styles.activating;
      var containerStyle = [styles.container, size === 'small' ? small : large, styles["".concat(type, "Container")] || styles['primaryContainer'], style];
      disabled && containerStyle.push(styles.disabled);
      isActive && containerStyle.push(activating, activeStyle);
      return containerStyle;
    }
  }, {
    key: "setStatus",
    value: function setStatus(isActive) {
      var disabled = this.props.disabled;
      !disabled && this.setState({
        isActive: isActive
      });
    }
  }, {
    key: "renderChildren",
    value: function renderChildren() {
      var _this$props3 = this.props,
          title = _this$props3.title,
          children = _this$props3.children,
          type = _this$props3.type,
          size = _this$props3.size,
          titleStyle = _this$props3.titleStyle;
      return React.createElement(Text, {
        style: [styles["".concat(type, "Text")] || styles['primaryText'], titleStyle],
        size: size === 'large' ? 'md' : 'xs'
      }, children || title);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(View, {
        onClick: this.handleClick,
        style: this.getStyle(),
        onTouchDown: function onTouchDown() {
          return _this2.setStatus(true);
        },
        onTouchStart: function onTouchStart() {
          return _this2.setStatus(true);
        },
        onTouchEnd: function onTouchEnd() {
          return _this2.setStatus(false);
        }
      }, this.renderChildren());
    }
  }]);

  return Button;
}(React.Component);
Button.defaultProps = _objectSpread({}, DefaultClickableProps, {}, DefaultLayoutableProps, {
  disabled: false,
  type: 'primary',
  size: 'large',
  activeStyle: {},
  titleStyle: {},
  style: {},
  title: ''
});
export default Button;