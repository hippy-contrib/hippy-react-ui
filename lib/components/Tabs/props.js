import PropTypes from 'prop-types';
export var tabPageProps = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
export var titleProps = PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.element]);
export var tabsProps = PropTypes.arrayOf(PropTypes.shape({
  key: tabPageProps,
  title: titleProps
}));
export var COLOR = {
  selectedTextColor: '#108ee9',
  textColor: '#afafaf',
  divider: '#ddd',
  backgroundColor: '#fff'
};