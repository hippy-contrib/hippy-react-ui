import React from 'react';
import { View, Platform } from '@hippy/react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import Modal, { Confirm } from '../../../../src/components/Modal';
import Text from '../../../../src/components/Text';

const Item = (props) => <Text color={props.selected ? 'red' : 'green'}>2lksd</Text>;

class ModalPage extends React.Component {
	static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
	};
	constructor(props) {
		super(props);
		
		this.state = {
			modal: {
				visible: false,
			},
			confirm: {
				visible: true,
			}
		};
	}
	doAction (type, open) {
		const state = this.state[type];
		this.setState({ [type]: { ...state, visible: !!open } });
		return false;
	}
	render () {
		const { history } = this.props;
		const { modal, confirm } = this.state;
		return (
			<View style={{ flex: 1, padding: 12 }}>
				<View onClick={() => this.doAction('modal', true)}>open modal</View>
				<View onClick={() => this.doAction('confirm', true)}>open confirm</View>

				<Modal
					visible={modal.visible}
					transparent={true}
					darkStatusBarText={true}
					animated={true}
					animation={'fade'}
					animationDuration={300}
					onMaskClick={() => this.doAction('modal', false)}
				>
					<View style={{ backgroundColor: 'red' }}>
						<Text>shshsh</Text>
					</View>
				</Modal>
				<Confirm
					visible={confirm.visible}
					transparent={false}
					darkStatusBarText={true}
					animated={true}
					animation={'fade'}
					animationDuration={300}
					onMaskClick={() => this.doAction('confirm', false)}
					title={'confirm'}
					okText={'ok'}
					cancelText={'cancel'}
					onOk={() => this.doAction('confirm', false)}
					onCancel={() => this.doAction('confirm', false)}
				>
					<Text>confirm</Text>
				</Confirm>
			</View>
		);
	}
}

export default withRouter(ModalPage);
