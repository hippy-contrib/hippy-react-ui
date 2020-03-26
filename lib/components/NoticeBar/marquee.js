"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Marquee = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@hippy/react");

var _props = require("./props");

var _Text = _interopRequireDefault(require("../Text"));

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styles = _react2.StyleSheet.create({
  body: {
    height: 34,
    lineHeight: 34,
    // flex: 1,
    display: 'block' // overflow: 'scroll',

  }
});
/**
 * loop: true,
	leading: 500,
	trailing: 800,
	fps: 40,
	style: {},
 */


var Marquee =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Marquee, _React$Component);

  function Marquee(props) {
    var _this;

    _classCallCheck(this, Marquee);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Marquee).call(this, props));
    _this.state = {
      containerWidth: 0,
      textWidth: 0,
      textMarginLeft: 0
    };
    return _this;
  }

  _createClass(Marquee, [{
    key: "getWidth",
    value: function () {
      var _getWidth = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                result = _utils.ISWEB ? this.getWebWidth() : this.getHippyWidth();
                _context.next = 3;
                return result;

              case 3:
                return _context.abrupt("return", result);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getWidth() {
        return _getWidth.apply(this, arguments);
      }

      return getWidth;
    }()
  }, {
    key: "getWebWidth",
    value: function getWebWidth() {
      return Promise.resolve([this.scrollref.instance.clientWidth, this.scrollref.instance.scrollWidth]);
    }
  }, {
    key: "getHippyWidth",
    value: function getHippyWidth() {
      var getSize = function getSize(ref) {
        return new Promise(function (resolve, reject) {
          _react2.UIManagerModule.measureInWindow(ref, function (_ref) {
            var width = _ref.width;
            return resolve(width);
          });
        });
      };

      return Promise.all([getSize(this.scrollref), getSize(this.textref)]);
    }
  }, {
    key: "destroyAnimation",
    value: function destroyAnimation() {
      this.scrollAnimation && this.scrollAnimation.destroy();
    }
  }, {
    key: "startAnimate",
    value: function startAnimate() {
      if (this.textref && this.scrollAnimation) {
        _utils.ISWEB && this.scrollAnimation.setRef(this.textref); // web情况下需要绑定在ref上

        this.scrollAnimation.start();
      }
    }
    /**
     * 充值初始化状态
     * 使用destroy，或者setState 都没法奏效, 没有触发renderStyleAttribute
     * 另外updateAnimation 对值的判断是if (startValue) 导致了无法将数值更新为0，可以考虑 用字符串 `0`，已经提pr
     */

  }, {
    key: "resetAnimation",
    value: function resetAnimation() {
      this.scrollAnimation.updateAnimation({
        startValue: '0'
      }); // if (ISWEB) {
      // 	this.scrollAnimation.renderStyleAttribute(0); // web生效
      // } else {
      // 	this.setState({ textMarginLeft: 0 }); // hippy 生效
      // }
    }
    /**
     * @description 启动动画
     */

  }, {
    key: "rollUp",
    value: function () {
      var _rollUp = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var _this2 = this;

        var _this$props, leading, trailing, speed, loop, _ref2, _ref3, containerWidth, textWidth, duration;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.destroyAnimation();
                _this$props = this.props, leading = _this$props.leading, trailing = _this$props.trailing, speed = _this$props.speed, loop = _this$props.loop;
                _context2.next = 4;
                return this.getWidth();

              case 4:
                _ref2 = _context2.sent;
                _ref3 = _slicedToArray(_ref2, 2);
                containerWidth = _ref3[0];
                textWidth = _ref3[1];

                if (!(containerWidth >= textWidth)) {
                  _context2.next = 10;
                  break;
                }

                return _context2.abrupt("return");

              case 10:
                duration = Math.floor((textWidth - containerWidth) / speed) * 1000;
                this.scrollAnimation = new _react2.Animation({
                  duration: duration,
                  //动画持续时长
                  startValue: 0,
                  toValue: containerWidth - textWidth,
                  delay: leading,
                  //至动画真正开始的延迟时间
                  mode: "timing",
                  //动画模式，现在只支持timing
                  timingFunction: "linear" //动画缓动函数
                  // repeatCount: 'loop',

                });
                /**
                 * 监听动画结束时间，如果循环播放，则等待trailing之后，播放动画
                 * 如果不循环，则返回到文本头部
                 */

                this.scrollAnimation.onAnimationEnd(function () {
                  _this2.timeout && clearTimeout(_this2.timeout);
                  _this2.timeout = setTimeout(function () {
                    if (!loop) return _this2.resetAnimation();else _this2.startAnimate();
                  }, trailing);
                });
                this.setState({
                  textMarginLeft: this.scrollAnimation
                }, function () {
                  return _this2.startAnimate();
                });

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function rollUp() {
        return _rollUp.apply(this, arguments);
      }

      return rollUp;
    }()
    /**
     * 禁止手动触发滑动
     */

  }, {
    key: "preventWebScroll",
    value: function preventWebScroll() {
      if (!_utils.ISWEB || !this.scrollref) return;
      this.scrollref.instance.addEventListener('touchmove', function (e) {
        e.preventDefault();
      }, false);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.preventWebScroll();
      this.rollUp();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var children = this.props.children;
      var textMarginLeft = this.state.textMarginLeft;
      return (
        /*#__PURE__*/
        _react.default.createElement(_react2.ScrollView, {
          ref: function ref(_ref5) {
            return _this3.scrollref = _ref5;
          },
          horizontal: true,
          scrollEnabled: false,
          contentContainerStyle: styles.body,
          showsHorizontalScrollIndicator: false // 对web无效，需要兼容

        },
        /*#__PURE__*/
        _react.default.createElement(_Text.default, {
          ref: function ref(_ref4) {
            return _this3.textref = _ref4;
          },
          height: 34,
          lineHeight: 34,
          color: "#f76a24",
          style: {
            left: textMarginLeft
          },
          numberOfLines: 1,
          ellipsizeMode: 'clip'
        }, children))
      );
    }
  }]);

  return Marquee;
}(_react.default.Component);

exports.Marquee = Marquee;
Marquee.propTypes = _props.MarqueeProps;
Marquee.defaultProps = _props.MarqueeDefaultProps;
var _default = Marquee;
exports.default = _default;