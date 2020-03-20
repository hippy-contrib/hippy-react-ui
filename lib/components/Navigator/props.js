import PropTypes from 'prop-types';
import { StyleProps } from '../../types';
export var NavigatorPropTypes = {
  containerStyle: StyleProps,
  titleTextStyle: StyleProps,
  titleStyle: StyleProps,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  leftContent: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  // 如果是back类型，显示返回箭头
  rightContent: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  onLeftClick: PropTypes.func,
  // 点击返回按钮触发事件
  transparent: PropTypes.bool,
  // 是否透明
  back: PropTypes.bool // 是否显示返回，优先级高于left

};
export var NavigatorDefaultProps = {
  containerStyle: {},
  titleStyle: {},
  titleTextStyle: {},
  transparent: false,
  title: '',
  leftContent: '',
  rightContent: '',
  back: false,
  onLeftClick: function onLeftClick() {}
};