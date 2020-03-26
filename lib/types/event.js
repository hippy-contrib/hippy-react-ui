"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventProps = exports.DefaultEventProps = exports.DefaultTouchableProps = exports.TouchableProps = exports.DefaultClickableProps = exports.ClickableProps = exports.DefaultLayoutableProps = exports.LayoutableProps = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LayoutableProps = {
  /**
    * Invoked on mount and layout changes with:
    *
    * `{nativeEvent: { layout: {x, y, width, height}}}`
    *
    * This event is fired immediately once the layout has been calculated,
    * but the new layout may not yet be reflected on the screen
    * at the time the event is received, especially if a layout animation is in progress.
    *
    * @param {Object} evt - Layout event data
    * @param {number} evt.nativeEvent.x - The position X of component
    * @param {number} evt.nativeEvent.y - The position Y of component
    * @param {number} evt.nativeEvent.width - The width of component
    * @param {number} evt.nativeEvent.hegiht - The height of component
    */
  onLayout: _propTypes.default.func
};
exports.LayoutableProps = LayoutableProps;
var DefaultLayoutableProps = {
  onLayout: function onLayout() {
    return false;
  }
};
exports.DefaultLayoutableProps = DefaultLayoutableProps;
var ClickableProps = {
  /**
   * Called when the touch is released.
   */
  onClick: _propTypes.default.func,

  /**
   * Called when the touch with longer than about 1s is released.
   */
  onLongClick: _propTypes.default.func
};
exports.ClickableProps = ClickableProps;
var DefaultClickableProps = {
  onClick: function onClick() {
    return false;
  },
  // 默认支持冒泡
  onLongClick: function onLongClick() {
    return false;
  } // 默认支持冒泡

};
exports.DefaultClickableProps = DefaultClickableProps;
var TouchableProps = {
  /**
   * The touchdown event occurs when the user touches an component.
   *
   * @param {Object} evt - Touch event data
   * @param {number} evt.page_x - Touch coordinate X
   * @param {number} evt.page_y = Touch coordinate Y
   */
  onTouchDown: _propTypes.default.func,

  /**
   * The touchmove event occurs when the user moves the finger across the screen.
   *
   * @param {Object} evt - Touch event data
   * @param {number} evt.page_x - Touch coordinate X
   * @param {number} evt.page_y = Touch coordinate Y
   */
  onTouchMove: _propTypes.default.func,

  /**
   * The touchend event occurs when the user removes the finger from an component.
   *
   * @param {Object} evt - Touch event data
   * @param {number} evt.page_x - Touch coordinate X
   * @param {number} evt.page_y = Touch coordinate Y
   */
  onTouchEnd: _propTypes.default.func,

  /**
   * The touchcancel event occurs when the touch event gets interrupted.
   *
   * @param {Object} evt - Touch event data
   * @param {number} evt.page_x - Touch coordinate X
   * @param {number} evt.page_y = Touch coordinate Y
   */
  onTouchCancel: _propTypes.default.func
}; // 默认支持冒泡

exports.TouchableProps = TouchableProps;
var DefaultTouchableProps = {
  onTouchDown: function onTouchDown() {
    return false;
  },
  onTouchMove: function onTouchMove() {
    return false;
  },
  onTouchEnd: function onTouchEnd() {
    return false;
  },
  onTouchCancel: function onTouchCancel() {
    return false;
  }
};
exports.DefaultTouchableProps = DefaultTouchableProps;

var DefaultEventProps = _objectSpread({}, DefaultClickableProps, {}, DefaultLayoutableProps, {}, DefaultTouchableProps);

exports.DefaultEventProps = DefaultEventProps;

var EventProps = _objectSpread({}, ClickableProps, {}, LayoutableProps, {}, TouchableProps);

exports.EventProps = EventProps;