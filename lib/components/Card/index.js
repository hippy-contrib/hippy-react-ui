import _toConsumableArray from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/toConsumableArray";
import _objectWithoutProperties from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import { View, StyleSheet } from '@hippy/react';
import { hairlineWidth } from '../../utils';
var styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: '#fff',
    borderWidth: hairlineWidth,
    borderColor: '#dddddd',
    borderRadius: 4
  }
});
export var Card = function Card(props) {
  var _props$style = props.style,
      style = _props$style === void 0 ? {} : _props$style,
      otherProps = _objectWithoutProperties(props, ["style"]);

  var customStyle = Array.isArray(style) ? style : [style];
  return React.createElement(View, Object.assign({
    style: [styles.container].concat(_toConsumableArray(customStyle))
  }, otherProps));
};
export default Card;