import PropTypes from 'prop-types';

export const tabPageProps = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);

export const tabsProps = PropTypes.arrayOf((PropTypes.shape({
	key: tabPageProps,
	title: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.element]),
})));