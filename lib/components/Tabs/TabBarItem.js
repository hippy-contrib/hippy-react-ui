import _objectSpread from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/objectSpread2";
import _classCallCheck from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/inherits";
import React from 'react';
import { View, StyleSheet } from '@hippy/react';
import { LayoutableProps, ClickableProps, DefaultLayoutableProps, DefaultClickableProps } from '../../types/event';
import { titleProps } from './props';
import { COLOR } from './props';
var styles = StyleSheet.create({
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: 36,
    lineHeight: 36
  }
});
export var TabBarItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TabBarItem, _React$Component);

  function TabBarItem() {
    _classCallCheck(this, TabBarItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(TabBarItem).apply(this, arguments));
  }

  _createClass(TabBarItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          color = _this$props.color,
          onClick = _this$props.onClick,
          onLayout = _this$props.onLayout,
          selected = _this$props.selected;
      var isComp = React.isValidElement(title);
      return React.createElement(View, {
        style: _objectSpread({}, styles.item, {
          color: color
        }),
        onClick: onClick,
        onLayout: onLayout
      }, isComp ? React.cloneElement(title, {
        selected: selected
      }) : title);
    }
  }]);

  return TabBarItem;
}(React.Component);
TabBarItem.defaultProps = _objectSpread({}, DefaultClickableProps, {}, DefaultLayoutableProps, {
  title: '',
  color: COLOR.textColor,
  selected: false
});
export default TabBarItem;