import PropTypes from 'prop-types';
import { StyleProps } from '../../types';

export const Props = {
	style: StyleProps,
	selectedIndex: PropTypes.number,
	dots: PropTypes.bool,
}

export const DefaultProps = {
	style: {},
}