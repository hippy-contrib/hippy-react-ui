"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Picker = void 0;

var React = _interopRequireWildcard(require("react"));

var _react2 = require("@hippy/react");

var _SelectWrapper = _interopRequireDefault(require("./SelectWrapper"));

var _props = require("./props");

var _Text = _interopRequireDefault(require("../Text"));

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ITEMHEIGHT = 34;

var styles = _react2.StyleSheet.create({
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
    borderTopWidth: _utils.hairlineWidth,
    borderBottomWidth: _utils.hairlineWidth,
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

var Picker =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Picker, _React$Component);

  function Picker(props) {
    var _this;

    _classCallCheck(this, Picker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Picker).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onItemLayout", function (e) {
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
    });

    _defineProperty(_assertThisInitialized(_this), "scrollTo", function (y) {
      if (_this.scrollerRef) {
        _utils.ISWEB ? _this.scrollerRef.scrollTo(0, y, true) : _this.scrollerRef.scrollTo({
          y: y,
          animated: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "fireValueChange", function (selectedValue) {
      if (_this.props.onValueChange) {
        _this.props.select(selectedValue, _this.itemHeight, _this.scrollTo);

        _this.props.onValueChange(selectedValue);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onScroll", function (e) {
      var y = e.contentOffset.y;

      _this.clearScrollBuffer();

      _this.scrollBuffer = setTimeout(function () {
        _this.clearScrollBuffer();

        _this.props.doScrollingComplete(y, _this.itemHeight, _this.fireValueChange);
      }, 100);
    });

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
      return React.createElement(_Text.default, {
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

      var funcName = _utils.ISWEB ? 'onScroll' : 'onScrollEndDrag';

      var onScrollProps = _defineProperty({}, funcName, this.onScroll); // scroll web scrollEnabled 需要做兼容


      return React.createElement(_react2.View, {
        style: [styles.container, (0, _utils.flattenStyle)(style)]
      }, React.createElement(_react2.View, {
        ref: function ref(el) {
          return _this3.indicatorRef = el;
        },
        style: styles.indicator
      }), React.createElement(_react2.ScrollView, _extends({
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
      }, onScrollProps), React.createElement(_react2.View, {
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

exports.Picker = Picker;

_defineProperty(Picker, "itemHeight", void 0);

_defineProperty(Picker, "itemWidth", void 0);

_defineProperty(Picker, "scrollBuffer", void 0);

_defineProperty(Picker, "scrollerRef", void 0);

_defineProperty(Picker, "contentRef", void 0);

_defineProperty(Picker, "indicatorRef", void 0);

_defineProperty(Picker, "getInitValue", function (data) {
  if (Array.isArray(data) && data[0]) {
    return data[0].value || '';
  } else {
    return '';
  }
});

Picker.propTypes = _props.CascaderPickerPropTypes;
Picker.defaultProps = _props.CascaderPickerDefaultProps;

var _default = (0, _SelectWrapper.default)(Picker);

exports.default = _default;