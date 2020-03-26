import React from 'react';
import { View } from '@hippy/react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import Modal, { Confirm, Popup } from '../../../../lib/components/Modal';
import Text from '../../../../src/components/Text';
import Button from '../../../../src/components/Button';


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
				visible: false,
			},
			popup: {
				visible: false,
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
		const { modal, confirm, popup } = this.state;
		return (
			<View style={{ flex: 1, padding: 12 }} onClick={() => history.goBack()}>
				<Button onClick={() => this.doAction('modal', true)}>open modal</Button>
				<Button style={{ marginTop: 24 }} onClick={() => this.doAction('confirm', true)}>open confirm</Button>
				<Button style={{ marginTop: 24 }} onClick={() => this.doAction('popup', true)}>open popup</Button>

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
				<Popup
					visible={popup.visible}
					transparent={false}
					darkStatusBarText={true}
					animated={true}
					animation={'fade'}
					animationDuration={300}
					onMaskClick={() => this.doAction('popup', false)}
					title={'popup'}
					okText={'ok'}
					cancelText={'cancel'}
					onOk={() => this.doAction('popup', false)}
					onCancel={() => this.doAction('popup', false)}
				>
					<Text>confirm</Text>
				</Popup>
			</View>
		);
	}
}

export default withRouter(ModalPage);
