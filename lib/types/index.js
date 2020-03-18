import stylePropType from 'react-style-proptype';
import PropTypes from 'prop-types';
export * from './event';
export * from './image';
export var StyleProps = PropTypes.oneOfType([PropTypes.arrayOf(stylePropType), stylePropType]);
export var DefaultStyleProps = {
  style: {}
};
export var ellipsizeMode = ['head', 'middle', 'tail', 'clip'];
export var ChildrenProps = PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.element]);