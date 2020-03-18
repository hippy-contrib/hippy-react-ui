import _toConsumableArray from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/toConsumableArray";
import _objectWithoutProperties from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties";
import _objectSpread from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/objectSpread2";
import _classCallCheck from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/inherits";

/**
 * rn Text不支持嵌套
 * 	1. 不支持children中混合 (数字/字符串) 和 <Text></Text> 组件，@hippy/react 会提取出数字或者字符串，导致重复渲染
 * 	2. 需要验证android上的嵌套表现
 * 
 * TODO
 * 	1. 强制规避 数字/字符串 跟 Text组件在同一级，同级全部转化为组件
 */
import React from 'react';
import { Text as HyText } from '@hippy/react';
import PropTypes from 'prop-types';
import { LayoutableProps, ClickableProps, DefaultLayoutableProps, DefaultClickableProps } from '../../types/event';
import { StyleProps, ellipsizeMode } from '../../types';
import { fontSizesMap, fontSizes } from '../../utils/fontSize';
import { ISWEB } from '../../utils';
/**
 * 解决react-web中Text的嵌套问题
 * 当父节点有Text组件时，使用的是span标签，不换行
 * 否则使用的div标签，换行
 */

var TextContext = React.createContext({
  isInAParentText: false,
  textDepth: 0,
  parentStyle: {}
}); // hippy-react-web 中 Text组件使用了getChildContext，却没有声明childContextTypes

if (ISWEB) {
  HyText.childContextTypes = {
    isInAParentText: PropTypes.bool
  };
  HyText.contextType = TextContext;
}

export var Text =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Text, _React$Component);

  function Text() {
    _classCallCheck(this, Text);

    return _possibleConstructorReturn(this, _getPrototypeOf(Text).apply(this, arguments));
  }

  _createClass(Text, [{
    key: "getStyle",
    value: function getStyle() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var size = props.size,
          height = props.height,
          opacity = props.opacity,
          lineHeight = props.lineHeight,
          color = props.color;
      var style = {
        isInAParentText: true
      };
      size && (style = _objectSpread({}, style, {
        fontSize: fontSizesMap[size] || size || fontSizesMap['sm']
      }));
      height && (style = _objectSpread({}, style, {
        height: height
      }));
      lineHeight && (style = _objectSpread({}, style, {
        lineHeight: lineHeight
      }));
      color && (style = _objectSpread({}, style, {
        color: color
      }));
      opacity && (style = _objectSpread({}, style, {
        opacity: opacity
      }));
      return style;
    }
    /**
     * 解决text嵌套问题
     * 如果子节点不是数组，且不是组件，则直接渲染
     * 如果子节点是组件，则直接渲染
     * 如果子节点是数组，则遍历每个节点
     * 	若是组件，直接渲染
     * 	否认递归使用Text组件
     * 		样式进行传递
     */

  }, {
    key: "renderChildren",
    value: function renderChildren() {
      var _this$props = this.props,
          children = _this$props.children,
          otherProps = _objectWithoutProperties(_this$props, ["children"]);

      if (!Array.isArray(children)) return children;
      return children.map(function (child, index) {
        if (React.isValidElement(child)) {
          return React.createElement(child.type, Object.assign({
            key: "".concat(child.type, "_").concat(index)
          }, child.props));
        } else {
          return React.createElement(Text, Object.assign({
            key: "".concat(child.type, "_").concat(index)
          }, otherProps), child);
        }
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log('Text componentDidMount');
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          onLayout = _this$props2.onLayout,
          onClick = _this$props2.onClick,
          _this$props2$style = _this$props2.style,
          style = _this$props2$style === void 0 ? {} : _this$props2$style,
          _this$props2$opacity = _this$props2.opacity,
          opacity = _this$props2$opacity === void 0 ? 1 : _this$props2$opacity,
          numberOfLines = _this$props2.numberOfLines,
          _this$props2$ellipsiz = _this$props2.ellipsizeMode,
          ellipsizeMode = _this$props2$ellipsiz === void 0 ? 'head' : _this$props2$ellipsiz;
      var _this$context = this.context,
          textDepth = _this$context.textDepth,
          parentStyle = _this$context.parentStyle;
      var customStyle = !Array.isArray(style) ? [style] : style;
      var pStyle = Array.isArray(parentStyle) ? parentStyle : [parentStyle];
      customStyle = [].concat(_toConsumableArray(pStyle), [this.getStyle()], _toConsumableArray(customStyle));
      return React.createElement(TextContext.Provider, {
        value: {
          textDepth: textDepth + 1,
          isInAParentText: textDepth > 0,
          parentStyle: customStyle
        }
      }, React.createElement(HyText, {
        onLayout: onLayout,
        onClick: onClick,
        opacity: opacity,
        style: customStyle,
        numberOfLines: numberOfLines,
        ellipsizeMode: ellipsizeMode
      }, this.renderChildren()));
    }
  }]);

  return Text;
}(React.Component);
Text.contextType = TextContext;

/**
 * 去除默认的props，用于嵌套使用组件
 */
Text.defaultProps = _objectSpread({}, DefaultLayoutableProps, {}, DefaultClickableProps);
export default Text;