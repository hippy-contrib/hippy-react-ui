import PropTypes from 'prop-types';

export const tabPageProps = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);

export const titleProps = PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.element]);

export const tabsProps = PropTypes.arrayOf((PropTypes.shape({
	key: tabPageProps,
	title: titleProps,
})));

export const COLOR = {
	selectedTextColor: '#108ee9',
	textColor: '#afafaf',
	divider: '#ddd',
	backgroundColor: '#fff'
}
