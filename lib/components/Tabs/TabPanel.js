import _classCallCheck from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _possibleConstructorReturn from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _createClass from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/createClass";
import _inherits from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/inherits";

/**
 * TabPanel
 * 作用： tab内容的wrapper
 * 用于控制是否展示，是否渲染，是否初始化，缓存逻辑管理
 * 
 */
import React from 'react';
import { View } from '@hippy/react';
export var TabPanel =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TabPanel, _React$Component);

  _createClass(TabPanel, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var isSelected = nextProps.isSelected;

      if (!prevState.hasRender && isSelected) {
        return {
          hasRender: true
        };
      }

      return null;
    }
  }]);

  function TabPanel(props) {
    var _this;

    _classCallCheck(this, TabPanel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TabPanel).call(this, props));
    var isSelected = props.isSelected;
    _this.state = {
      hasRender: isSelected
    };
    return _this;
  }

  _createClass(TabPanel, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          id = _this$props.id;
      var hasRender = this.state.hasRender;
      return React.createElement(View, {
        style: {
          flex: 1
        },
        key: id
      }, hasRender && children);
    }
  }]);

  return TabPanel;
}(React.Component);
export default TabPanel;