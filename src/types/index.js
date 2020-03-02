import stylePropType from 'react-style-proptype';
import PropTypes from 'prop-types';

export * from './event';
export * from './image';

export const StyleProps = PropTypes.oneOfType([PropTypes.arrayOf(stylePropType), stylePropType]);

export const DefaultStyleProps = { style: {} };

export const ellipsizeMode = ['head', 'middle', 'tail', 'clip'];

export const ChildrenProps = PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.element])