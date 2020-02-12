import React from "react";
import {ListView, View, StyleSheet, Text} from "hippy-react"

import IconPage from '../Icon';
import Icon from "../../../../src/components/Icons";

// interface ListItem {
// 	name: string,
// 	route: string,
// }

// interface InitialState {
// 	dataSource: ListItem[],
// }

const ComponentData = [
	{ name: 'icon', route: 'icon' },
];


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
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

	constructor(props) {
		super(props);
		this.state = {
			dataSource: [ ...ComponentData ],
			route: 'home',
		}
		this.setState({ dataSource: ComponentData });
	}
 	getRenderRow (index) {
		if (index < 0 || index >= this.state.dataSource.length) return null;
		const item = this.state.dataSource[index];
		return (<View style={styles.listItem} onClick={() => this.setState({ route: item.route })}>
			{ item.name }
		</View>)
	}

	render () {
		const { dataSource = [], route } = this.state;
		if (route !== 'home') return <IconPage />
		return (
			<ListView style={[styles.container]}
				numberOfRows={dataSource.length}
				renderRow={this.getRenderRow.bind(this)}
			/>
		);
	}
}

export default Entry;
