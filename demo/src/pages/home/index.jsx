import React from "react";
import {ListView, View, StyleSheet} from "hippy-react";
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

// interface ListItem {
// 	name: string,
// 	route: string,
// }

// interface InitialState {
// 	dataSource: ListItem[],
// }

const ComponentData = [
	{ name: 'icon1121', route: 'icon' },
];


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'red',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 120,
	},
	listItem: {
		height: 56,
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: "#afafaf",
	}
});

// class Entry extends React.Component<Object, InitialState> {
class Entry extends React.Component {
	static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };
	constructor(props) {
		super(props);
		this.state = {
			dataSource: [ ...ComponentData ],
			route: 'home',
		}
	}
 	getRenderRow (index) {
		if (index < 0 || index >= this.state.dataSource.length) return null;
		const item = this.state.dataSource[index];

		const { history } = this.props;
		return (
			<View style={styles.listItem} onClick={() => { console.log('onClick'); history.push(item.route)}}>
				{ item.name }
			</View>
		);
	}

	render () {
		console.log('props', this.props);
		const { dataSource = [] } = this.state;
		return (
			<ListView style={[styles.container]}
				numberOfRows={dataSource.length}
				renderRow={this.getRenderRow.bind(this)}
			/>
			
		);
	}
}

export default withRouter(Entry);
