import React from 'react';
import { View } from 'hippy-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import Icon from '../../../../src/components/Icons';

class IconPage extends React.Component {
	static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };
	render () {
		const { history } = this.props;
		console.log(<Link component={View}/>)
		return (
			<View style={{ marginTop: 120, width: 200, height: 56 }} onClick={() => history.push('/')}>
				<Icon />
				<Link component={View} to={'/'}>dasf;sadlf</Link>
			</View>
		);
	}
}

export default withRouter(IconPage);
