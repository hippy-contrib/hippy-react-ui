import _objectSpread from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/objectSpread2";
import React from 'react';
import { Dimensions } from '@hippy/react';
import { flattenStyle } from '../../utils';
var WINDOWSIZE = Dimensions.get('window');
var STATUSBARHEIGHT = WINDOWSIZE.statusBarHeight;
export var StatusBarWrapper = function StatusBarWrapper(_ref) {
  var props = _ref.props,
      children = _ref.children;

  if (!React.Children.only(children)) {
    console.warn('StatusBarWrapper only has one child');
    return children;
  }

  var style = flattenStyle(children.props.style || {});
  var wrapperStyle = {
    paddingTop: (style.paddingTop || 0) + STATUSBARHEIGHT
  };
  style.height && (wrapperStyle.height = STATUSBARHEIGHT + style.height);
  return React.createElement(children.type, Object.assign({}, children.props, props, {
    style: _objectSpread({}, style, {}, wrapperStyle)
  }));
};
export default StatusBarWrapper;