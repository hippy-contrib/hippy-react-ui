import React from "react";
import {ListView, View, StyleSheet} from "@hippy/react";
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
	{ name: 'Icon', route: 'icon' },
	{ name: 'Avatar', route: 'avatar' },
	{ name: 'Divider', route: 'divider' },
];


const styles = StyleSheet.create({
	container: {
		// flex: 1,
		backgroundColor: 'red',
		justifyContent: 'flex-start',
		// alignItems: 'flex-start',
		flexDirection: 'column',
		// marginTop: 120,
	},
	listItem: {
		height: 56,
		// flex: 1,
		paddingLeft: 12,
		justifyContent: 'center',
		alignItems: 'flex-start',
		backgroundColor: "#ffffff",
		borderBottomWidth: 1,
		borderBottomColor: '#eeeeee',
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
			<View style={styles.listItem} onClick={() => {history.push(item.route)}}>
				{ item.name }
			</View>
		);
	}
	getRowKey = (index) => {
		return this.state.dataSource[index].route;
	}
	render () {
		const { dataSource = [] } = this.state;
		return (
			<ListView style={[styles.container]}
				numberOfRows={dataSource.length}
				renderRow={this.getRenderRow.bind(this)}
				getRowKey={this.getRowKey}
				getRowStyle={() => ({ flex: 1 })}
			/>
			
		);
	}
}

export default withRouter(Entry);
