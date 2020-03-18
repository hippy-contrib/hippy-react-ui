import _defineProperty from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/defineProperty";
import _classCallCheck from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _assertThisInitialized from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/inherits";

/** 
 * 参考
 * https://github.com/react-component/m-picker/blob/master/src/NativePicker.android.tsx
 * 
 * @todo
 * web需要隐藏滚动条
*/
import * as React from 'react';
import { ScrollView, View, StyleSheet } from '@hippy/react';
import SelectWrapper from './SelectWrapper';
import { CascaderPickerPropTypes, CascaderPickerDefaultProps } from './props';
import Text from '../Text';
import { flattenStyle, hairlineWidth, ISWEB } from '../../utils';
var ITEMHEIGHT = 34;
var styles = StyleSheet.create({
  container: {
    height: ITEMHEIGHT * 7,
    display: 'block'
  },
  indicator: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: ITEMHEIGHT,
    top: ITEMHEIGHT * 3,
    borderColor: '#cccccc',
    borderTopWidth: hairlineWidth,
    borderBottomWidth: hairlineWidth,
    transform: [{
      scaleX: -50
    }]
  },
  scrollView: {
    paddingVertical: 34 * 3
  },
  selectedItemText: {
    fontSize: 16,
    color: '#000'
  },
  itemText: {
    fontSize: 16,
    color: '#aaa',
    flex: 1,
    height: ITEMHEIGHT,
    alignItems: 'center',
    textAlign: 'center',
    lineHeight: ITEMHEIGHT
  }
});
export var Picker =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Picker, _React$Component);

  function Picker(props) {
    var _this;

    _classCallCheck(this, Picker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Picker).call(this, props));

    _this.onItemLayout = function (e) {
      var _e$layout = e.layout,
          height = _e$layout.height,
          width = _e$layout.width;

      if (_this.itemHeight !== height || _this.itemWidth !== width) {
        _this.itemWidth = width;
      }

      if (_this.itemHeight !== height) {
        _this.itemHeight = height; // i do no know why!...

        setTimeout(function () {
          _this.props.select(_this.props.selectedValue, _this.itemHeight, _this.scrollTo);
        }, 0);
      }
    };

    _this.scrollTo = function (y) {
      if (_this.scrollerRef) {
        ISWEB ? _this.scrollerRef.scrollTo(0, y, true) : _this.scrollerRef.scrollTo({
          y: y,
          animated: false
        });
      }
    };

    _this.fireValueChange = function (selectedValue) {
      if (_this.props.onValueChange) {
        _this.props.select(selectedValue, _this.itemHeight, _this.scrollTo);

        _this.props.onValueChange(selectedValue);
      }
    };

    _this.onScroll = function (e) {
      var y = e.contentOffset.y;

      _this.clearScrollBuffer();

      _this.scrollBuffer = setTimeout(function () {
        _this.clearScrollBuffer();

        _this.props.doScrollingComplete(y, _this.itemHeight, _this.fireValueChange);
      }, 100);
    };

    _this.onScroll = _this.onScroll.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Picker, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.props.select(this.props.selectedValue, this.itemHeight, this.scrollTo);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.clearScrollBuffer();
    }
  }, {
    key: "clearScrollBuffer",
    value: function clearScrollBuffer() {
      if (this.scrollBuffer) {
        clearTimeout(this.scrollBuffer);
      }
    }
  }, {
    key: "renderItem",

    /**
     * @description 渲染每一个选型
     * @param {Object} item  item.lable, item.value
     * @param {Number} index 序号
     * 
     * @todo 优化，渲染上下3屏
     */
    value: function renderItem(item, index) {
      var _this2 = this;

      var _this$props = this.props,
          itemStyle = _this$props.itemStyle,
          selectedValue = _this$props.selectedValue;
      var totalStyle = [styles.itemText];

      if (selectedValue === item.props.value) {
        totalStyle.push(styles.selectedItemText);
      }

      totalStyle.push(itemStyle);
      return React.createElement(Text, {
        ref: function ref(el) {
          return _this2["item".concat(index)] = el;
        },
        style: totalStyle,
        numberOfLines: 1,
        onLayout: index === 0 ? this.onItemLayout : undefined,
        key: item.key
      }, item.props.label);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props2 = this.props,
          children = _this$props2.children,
          style = _this$props2.style,
          disabled = _this$props2.disabled;
      var items = React.Children.map(children, function (item, index) {
        return _this3.renderItem(item, index);
      }); // 兼容web和hippy，web没有onScrollEndDrag，所以只能在onScroll事件中做处理

      var funcName = ISWEB ? 'onScroll' : 'onScrollEndDrag';

      var onScrollProps = _defineProperty({}, funcName, this.onScroll); // scroll web scrollEnabled 需要做兼容


      return React.createElement(View, {
        style: [styles.container, flattenStyle(style)]
      }, React.createElement(View, {
        ref: function ref(el) {
          return _this3.indicatorRef = el;
        },
        style: styles.indicator
      }), React.createElement(ScrollView, Object.assign({
        style: {
          flex: 1,
          height: 7 * ITEMHEIGHT
        },
        contentContainerStyle: styles.scrollView,
        ref: function ref(el) {
          return _this3.scrollerRef = el;
        },
        showsVerticalScrollIndicator: false,
        overScrollMode: "never",
        scrollEnabled: !disabled
      }, onScrollProps), React.createElement(View, {
        style: {
          flex: 1
        },
        ref: function ref(el) {
          return _this3.contentRef = el;
        }
      }, items)));
    }
  }]);

  return Picker;
}(React.Component);

Picker.getInitValue = function (data) {
  if (Array.isArray(data) && data[0]) {
    return data[0].value || '';
  } else {
    return '';
  }
};

Picker.defaultProps = CascaderPickerDefaultProps;
export default SelectWrapper(Picker);