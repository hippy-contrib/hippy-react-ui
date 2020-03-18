import _slicedToArray from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/slicedToArray";
import _regeneratorRuntime from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/regenerator";
import _asyncToGenerator from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/asyncToGenerator";
import _classCallCheck from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/inherits";

/**
 * 跑马灯自动播放组件
 */
import React from 'react';
import { ScrollView, StyleSheet, Animation, UIManagerModule } from '@hippy/react';
import { MarqueeProps, MarqueeDefaultProps } from './props';
import Text from '../Text';
import { ISWEB } from '../../utils';
var styles = StyleSheet.create({
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

export var Marquee =
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
      _regeneratorRuntime.mark(function _callee() {
        var result;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                result = ISWEB ? this.getWebWidth() : this.getHippyWidth();
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
          UIManagerModule.measureInWindow(ref, function (_ref) {
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
        ISWEB && this.scrollAnimation.setRef(this.textref); // web情况下需要绑定在ref上

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
      _regeneratorRuntime.mark(function _callee2() {
        var _this2 = this;

        var _this$props, leading, trailing, speed, loop, _ref2, _ref3, containerWidth, textWidth, duration;

        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
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
                this.scrollAnimation = new Animation({
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
      if (!ISWEB || !this.scrollref) return;
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
      return React.createElement(ScrollView, {
        ref: function ref(_ref5) {
          return _this3.scrollref = _ref5;
        },
        horizontal: true,
        scrollEnabled: false,
        contentContainerStyle: styles.body,
        showsHorizontalScrollIndicator: false // 对web无效，需要兼容

      }, React.createElement(Text, {
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
      }, children));
    }
  }]);

  return Marquee;
}(React.Component);
Marquee.defaultProps = MarqueeDefaultProps;
export default Marquee;