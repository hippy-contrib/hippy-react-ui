"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TabPanel = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@hippy/react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var TabPanel =
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
      return (
        /*#__PURE__*/
        _react.default.createElement(_react2.View, {
          style: {
            flex: 1
          },
          key: id
        }, hasRender && children)
      );
    }
  }]);

  return TabPanel;
}(_react.default.Component);

exports.TabPanel = TabPanel;
var _default = TabPanel;
exports.default = _default;