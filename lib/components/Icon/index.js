import _objectSpread from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/objectSpread2";
import _classCallCheck from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/inherits";

/**
 * hippy中的image标签支持svg格式，但是不支持svg标签
 * 可以从react-icons中抽离出svg文件
 */
import React from "react";
import { View, Image, StyleSheet } from "@hippy/react";
import PropTypes from 'prop-types';
import { ImageProps, DefaultImageProps } from '../../types/image';
import { StyleProps } from '../../types';
import { iconSizesMap, iconSizes } from '../../utils/iconSize';
var styles = StyleSheet.create({
  containerStyle: {
    height: iconSizesMap['xs'],
    width: iconSizesMap['xs'],
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  iconStyle: {
    height: iconSizesMap['xs'],
    width: iconSizesMap['xs'],
    backgroundColor: 'transparent'
  }
});
export var Icon =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Icon, _React$Component);

  function Icon() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Icon);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Icon)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.handleClick = function (event) {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          disabled = _this$props.disabled;
      onClick && !disabled && onClick(event);
    };

    return _this;
  }

  _createClass(Icon, [{
    key: "getIconSize",
    value: function getIconSize() {
      var size = this.props.size;
      var iconSize = iconSizesMap[size] || size;
      return iconSize;
    }
    /**
     * 计算container和Icon的style
     * 如果设置了size，则设置container的宽和高
     * style优先级
     * containerStyle > size > defaultContainerStyle
     */

  }, {
    key: "mergeStyle",
    value: function mergeStyle(style) {
      var rounded = this.props.rounded;
      var iconSize = this.getIconSize();
      if (!iconSize) return style;
      return _objectSpread({
        height: iconSize,
        width: iconSize,
        borderRadius: rounded ? Math.round(iconSize / 2) : 0
      }, style);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          source = _this$props2.source,
          disabled = _this$props2.disabled,
          _this$props2$containe = _this$props2.containerStyle,
          containerStyle = _this$props2$containe === void 0 ? {} : _this$props2$containe,
          _this$props2$disabled = _this$props2.disabledStyle,
          disabledStyle = _this$props2$disabled === void 0 ? {} : _this$props2$disabled,
          _this$props2$iconStyl = _this$props2.iconStyle,
          iconStyle = _this$props2$iconStyl === void 0 ? {} : _this$props2$iconStyl,
          resizeMode = _this$props2.resizeMode,
          onLayout = _this$props2.onLayout,
          onLoad = _this$props2.onLoad,
          onLoadStart = _this$props2.onLoadStart,
          onLoadEnd = _this$props2.onLoadEnd,
          onError = _this$props2.onError,
          onProgress = _this$props2.onProgress,
          style = _this$props2.style;
      var statusStyle = disabled ? disabledStyle : {};
      return React.createElement(View, {
        style: [styles.containerStyle, this.mergeStyle(containerStyle), statusStyle],
        onClick: this.handleClick
      }, React.createElement(Image, {
        style: [styles.iconStyle, this.mergeStyle(iconStyle), statusStyle, {
          resizeMode: resizeMode
        }, style],
        source: {
          uri: source && source.default ? source.default : source
        },
        onLayout: onLayout,
        onLoad: onLoad,
        onLoadStart: onLoadStart,
        onLoadEnd: onLoadEnd,
        onError: onError,
        onProgress: onProgress
      }));
    }
  }]);

  return Icon;
}(React.Component);
export var IconProps = _objectSpread({
  size: PropTypes.oneOfType([PropTypes.oneOf(iconSizes), PropTypes.number]),
  // icon尺寸
  containerStyle: StyleProps,
  onClick: PropTypes.func,
  style: StyleProps
}, ImageProps);
export var DefaultIconProps = _objectSpread({
  size: 'xs',
  containerStyle: {},
  onClick: function onClick() {}
}, DefaultImageProps, {
  style: {}
});
Icon.defaultProps = DefaultIconProps;
export default Icon;