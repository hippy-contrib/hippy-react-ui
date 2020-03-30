import React from "react";
import {View, StyleSheet, Dimensions, Platform} from "@hippy/react";
import ListView from '../../../../src/components/List'
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

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
		alignItems: 'center',
		borderBottomWidth: 1,
		borderBottomColor: '#eee',
		flexShrink: 0
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
			dataSource: Object.keys(Array.from({length: 100})).map((item, index) => {
        return {
					name: 'item' + index,
					color: this.getRandomColor(),
					hide: false
        }
      }),
			route: 'home',
			cacheNodeList: []
		}
		this.getRenderRow = this.getRenderRow.bind(this)
	}
 	getRenderRow (index) {
		if (index < 0 || index >= this.state.dataSource.length) return null;
		const item = this.state.dataSource[index];
		return (
			<View style={{
        ...styles.listItem,
				backgroundColor: item.color
      }}>
				{ item.name }
			</View>
		);
  }
  getRandomColor = function () {
    return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).substr(-6)
  }
	getRowKey = (index) => {
		return this.state.dataSource[index].name;
	}
	render () {
		const { dataSource = [] } = this.state;
		return (
			<ListView style={styles.container}
				showScrollIndicator={false}
				numberOfRows={dataSource.length}
				renderRow={this.getRenderRow}
				getRowKey={this.getRowKey}
				getRowStyle={() => ({ flex: 1 })}
			/>
		);
	}
}

export default withRouter(Entry);
