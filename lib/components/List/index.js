"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@hippy/react");

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRouter = require("react-router");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = _react2.StyleSheet.create({
  container: {},
  listItem: {}
}); // class Entry extends React.Component<Object, InitialState> {


var List =
/*#__PURE__*/
function (_React$Component) {
  _inherits(List, _React$Component);

  function List(props) {
    var _this;

    _classCallCheck(this, List);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(List).call(this, props));
    _this.state = {
      route: 'home',
      offsetTop: 0,
      cacheNodeList: []
    };

    _this.setRef = function (index, element) {
      _this.listItem = _this.listItem || [];
      _this.listItem[index] = _reactDom.default.findDOMNode(element);
    };

    _this.listRef = _react.default.createRef();
    _this.toggleItem = _this.toggleItem.bind(_assertThisInitialized(_this));
    _this.throttle = _this.throttle.bind(_assertThisInitialized(_this));
    _this.getRenderRow = _this.getRenderRow.bind(_assertThisInitialized(_this));
    _this.setRef = _this.setRef.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(List, [{
    key: "getRenderRow",
    value: function getRenderRow(index) {
      if (index < 0 || index >= this.props.numberOfRows) return null;
      var cacheNode = this.state.cacheNodeList[index] || {};
      return cacheNode.hide ? null : _react.default.createElement(_react2.View, {
        ref: this.setRef.bind(this, index),
        style: styles.listItem
      }, this.props.renderRow(index));
    }
  }, {
    key: "getStyle",
    value: function getStyle() {}
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          location = _this$props.location,
          match = _this$props.match,
          history = _this$props.history,
          props = _objectWithoutProperties(_this$props, ["location", "match", "history"]);

      var stylePro = Array.isArray(props.style) ? props.style : [props.style];
      return _react.default.createElement(_react2.ListView, _extends({
        ref: this.listRef
      }, props, {
        renderRow: this.getRenderRow,
        style: [styles.container, {
          paddingTop: this.state.offsetTop
        }].concat(_toConsumableArray(stylePro)),
        getRowStyle: this.getStyle.bind(this)
      }));
    }
  }, {
    key: "initNodeCache",
    value: function initNodeCache() {
      var cacheNodeList = [];
      this.listItem && this.listItem.forEach(function (item, index) {
        var node = item.parentNode;
        var cacheNode = {};
        cacheNode.clientHeight = cacheNode.clientHeight || node.clientHeight;
        cacheNode.offsetTop = cacheNode.offsetTop || node.offsetTop;
        cacheNode.node = item;
        cacheNodeList[index] = cacheNode;
      });
      this.setState({
        cacheNodeList: cacheNodeList
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (_react2.Platform.OS === 'web') {
        this.initNodeCache();
        setTimeout(this.toggleItem, 0);
        this.scrollCb = this.throttle(this.toggleItem, 100);
        window.addEventListener('scroll', this.scrollCb);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (_react2.Platform.OS === 'web') {
        window.removeEventListener('scroll', this.scrollCb);
      }
    }
  }, {
    key: "toggleItem",
    value: function toggleItem() {
      if (_react2.Platform.OS === 'web') {
        var _Dimensions$get = _react2.Dimensions.get('window'),
            height = _Dimensions$get.height;

        var cacheNodeList = this.state.cacheNodeList;
        var dataSource = this.state.cacheNodeList;
        var offsetTop = 0;
        var scrollTop = document.documentElement.scrollTop;
        dataSource.forEach(function (item, index) {
          var top = cacheNodeList[index].offsetTop - scrollTop;
          var isHide = top <= -height || top >= 2 * height;
          var isTopHide = top <= -height;
          dataSource[index].hide = isHide;
          offsetTop = offsetTop + (isTopHide ? cacheNodeList[index].clientHeight : 0);
        });
        this.setState({
          dataSource: dataSource,
          offsetTop: offsetTop
        });
      }
    }
  }, {
    key: "throttle",
    value: function throttle(cb, time) {
      var _lastTime = null;
      return function () {
        var _nowTime = +new Date();

        if (_nowTime - _lastTime > time || !_lastTime) {
          cb();
          _lastTime = _nowTime;
        }
      };
    }
  }]);

  return List;
}(_react.default.Component);

_defineProperty(List, "propTypes", {
  match: _propTypes.default.object.isRequired,
  location: _propTypes.default.object.isRequired,
  history: _propTypes.default.object.isRequired
});

var _default = (0, _reactRouter.withRouter)(List);

exports.default = _default;