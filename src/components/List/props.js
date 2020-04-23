import PropTypes from 'prop-types';

import { StyleProps } from '../../types';

export const ListPropTypes = {
	match: PropTypes.object.isRequired,
	location: PropTypes.object.isRequired,
	history: PropTypes.object.isRequired,
	style: StyleProps
}

export const ListDefaultPropTypes = {
}
