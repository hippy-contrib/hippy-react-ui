import PropTypes from 'prop-types';
import { StyleProps } from '../../types';
import { fontSizes } from '../../utils/fontSize';
export var Props = {
  style: StyleProps,
  fontStyle: StyleProps,
  selectedFontStyle: StyleProps,
  defaultValue: PropTypes.number,
  // 默认分数, int类型，Math.floor 取整
  maxValue: PropTypes.number,
  // 最大个数， int类型，Math.floor 取整
  editable: PropTypes.bool,
  // 是否可以编辑
  onChange: PropTypes.func,
  // 数值修改触发
  size: PropTypes.oneOfType([PropTypes.oneOf(fontSizes), PropTypes.number]),
  fontItem: PropTypes.string,
  // item的样式，文字表示
  selectedFontItem: PropTypes.string
};
export var DefaultProps = {
  style: {},
  fontStyle: {},
  selectedFontStyle: {},
  defaultValue: 3,
  maxValue: 5,
  editable: true,
  onChange: function onChange() {},
  size: 'md',
  fontItem: '☆',
  selectedFontItem: '★'
};