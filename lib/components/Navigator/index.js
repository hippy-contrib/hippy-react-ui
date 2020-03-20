import _classCallCheck from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/inherits";
import React from 'react';
import { StyleSheet, View } from '@hippy/react';
import Text from '../Text';
import StatusBarWrapper from './StatusBarWrapper';
import { NavigatorPropTypes, NavigatorDefaultProps } from './props';
import { flattenStyle } from '../../utils';
import Icon from '../Icon';
import { stopPropagation } from '../../utils/event';
import BlueBack from '../../../assets/ios-back-blue.png';
var navigatorHeight = 65;
var PADDINGTOP = 20;
var styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: navigatorHeight,
    position: 'relative',
    backgroundColor: '#ffffff',
    paddingTop: PADDINGTOP // backgroundColor: color.whitebackgroundColor,

  },
  leftContainer: {
    position: 'absolute',
    left: 22,
    bottom: 0,
    width: 100,
    height: navigatorHeight,
    alignItems: 'flex-start',
    paddingTop: PADDINGTOP,
    justifyContent: 'center'
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 22
  },
  rightContainer: {
    position: 'absolute',
    right: 22,
    bottom: 0,
    width: 100,
    height: navigatorHeight,
    alignItems: 'flex-end',
    paddingTop: PADDINGTOP,
    justifyContent: 'center'
  }
});
export var Navigator =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Navigator, _React$Component);

  function Navigator() {
    _classCallCheck(this, Navigator);

    return _possibleConstructorReturn(this, _getPrototypeOf(Navigator).apply(this, arguments));
  }

  _createClass(Navigator, [{
    key: "handleLeftClick",
    value: function handleLeftClick(event) {
      console.log('fuck');
      this.props.onLeftClick(event);
      return stopPropagation(event);
    }
  }, {
    key: "renderLeft",
    value: function renderLeft() {
      var _this = this;

      var _this$props = this.props,
          back = _this$props.back,
          leftContent = _this$props.leftContent;
      var backContent = React.createElement(Icon, {
        size: "xs",
        onClick: function onClick(event) {
          return _this.handleLeftClick(event);
        },
        source: BlueBack
      });
      var body = React.isValidElement(leftContent) ? leftContent : React.createElement(Text, {
        size: "sm"
      }, leftContent);
      return React.createElement(View, {
        style: styles.leftContainer
      }, back ? backContent : body);
    }
  }, {
    key: "renderRight",
    value: function renderRight() {
      var rightContent = this.props.rightContent;
      return React.createElement(View, {
        style: styles.rightContainer
      }, React.isValidElement(rightContent) ? rightContent : React.createElement(Text, {
        size: "sm"
      }, rightContent));
    }
  }, {
    key: "renderTitle",
    value: function renderTitle() {
      var _this$props2 = this.props,
          title = _this$props2.title,
          titleStyle = _this$props2.titleStyle;
      return React.createElement(View, {
        style: [styles.titleContainer, flattenStyle(titleStyle)]
      }, React.isValidElement(title) ? title : React.createElement(Text, {
        size: "md"
      }, title));
    }
  }, {
    key: "renderItem",
    value: function renderItem(pos, customContent) {
      var style = [styles["".concat(pos, "Container")], flattenStyle(this.props["".concat(pos, "Style")] || {})];
      var body = this.props[pos];
      return React.createElement(View, {
        style: style
      }, customContent || (!React.isValidElement(body) ? React.createElement(Text, {
        style: this.props["".concat(pos, "TextStyle")] || {}
      }, body) : body));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          containerStyle = _this$props3.containerStyle,
          transparent = _this$props3.transparent;
      return React.createElement(StatusBarWrapper, null, React.createElement(View, {
        style: [styles.container, transparent ? {
          backgroundColor: 'transparent'
        } : {}, flattenStyle(containerStyle)]
      }, this.renderTitle(), this.renderLeft(), this.renderRight()));
    }
  }]);

  return Navigator;
}(React.Component);
Navigator.defaultProps = NavigatorDefaultProps;
export default Navigator;