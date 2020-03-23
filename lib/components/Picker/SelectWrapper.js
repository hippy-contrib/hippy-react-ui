"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var React = _interopRequireWildcard(require("react"));

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

// import { ItemProps } from './props';
var Item = function Item(_ref) {
  var value = _ref.value,
      label = _ref.label;
  return (
    /*#__PURE__*/
    React.createElement(React.Fragment, null)
  );
};

function _default(ComposedComponent) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(_class, _React$Component);

    function _class() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, _class);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_class)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "select", function (value, itemHeight, scrollTo) {
        var children = React.Children.toArray(_this.props.children);

        for (var i = 0, len = children.length; i < len; i++) {
          if (children[i].props.value === value) {
            _this.selectByIndex(i, itemHeight, scrollTo);

            return;
          }
        }

        _this.selectByIndex(0, itemHeight, scrollTo);
      });

      _defineProperty(_assertThisInitialized(_this), "doScrollingComplete", function (top, itemHeight, fireValueChange) {
        var children = React.Children.toArray(_this.props.children);

        var index = _this.computeChildIndex(top, itemHeight, children.length);

        var child = children[index];

        if (child) {
          fireValueChange(child.props.value);
        } else if (console.warn) {
          console.warn('child not found', index);
        }
      });

      return _this;
    }

    _createClass(_class, [{
      key: "selectByIndex",
      value: function selectByIndex(index, itemHeight, zscrollTo) {
        if (index < 0 || index >= React.Children.count(this.props.children) || !itemHeight) {
          return;
        }

        zscrollTo(index * itemHeight);
      }
    }, {
      key: "computeChildIndex",
      value: function computeChildIndex(top, itemHeight, childrenLength) {
        var index = Math.round(top / itemHeight);
        return Math.max(Math.min(index, childrenLength - 1), 0);
      }
    }, {
      key: "render",
      value: function render() {
        return (
          /*#__PURE__*/
          React.createElement(ComposedComponent, _extends({}, this.props, {
            doScrollingComplete: this.doScrollingComplete,
            computeChildIndex: this.computeChildIndex,
            select: this.select
          }))
        );
      }
    }]);

    return _class;
  }(React.Component), _defineProperty(_class, "Item", Item), _temp;
}