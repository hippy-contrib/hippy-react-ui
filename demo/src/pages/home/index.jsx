import React from "react";
import {ListView, View, StyleSheet} from "@hippy/react";
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import pages from '../../route';

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'red',
		justifyContent: 'flex-start',
		flexDirection: 'column',
	},
	listItem: {
		height: 56,
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
			dataSource: pages.map(({ name, path }) => ({ name, path })),
			route: 'home',
		}
	}
 	getRenderRow (index) {
		if (index < 0 || index >= this.state.dataSource.length) return null;
		const item = this.state.dataSource[index];

		const { history } = this.props;
		return (
			<View style={styles.listItem} onClick={() => { history.push(item.path) }}>
				{ index + 1 }. { item.name }
			</View>
		);
	}
	getRowKey = (index) => {
		return this.state.dataSource[index].path;
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
