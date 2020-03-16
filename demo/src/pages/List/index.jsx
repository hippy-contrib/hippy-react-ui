import React from "react";
import {ListView, View, StyleSheet, Dimensions} from "@hippy/react";
import ReactDOM from 'react-dom';
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
			dataSource: Object.keys(Array.from({length: 100})).map((item, index) => {
        return {
					name: 'item' + index,
					color: this.getRandomColor(),
					hide: false
        }
      }),
			route: 'home',
			offsetTop: 0
		}
		this.setRef = (index, element) => {
			this.listItem = this.listItem || []
			this.listItem[index] = ReactDOM.findDOMNode(element);
		};
		this.toggleItem = this.toggleItem.bind(this)
		this.getRenderRow = this.getRenderRow.bind(this)
		this.setRef = this.setRef.bind(this)
	}
 	getRenderRow (index) {
		if (index < 0 || index >= this.state.dataSource.length) return null;
		const item = this.state.dataSource[index];
		const color = this.getRandomColor()
		console.log('getrenderrow')
		return (
			// item.hide ? '' : (
			// <View style={{
      //   ...styles.listItem,
			// 	backgroundColor: color
      // }} ref={this.setRef.bind(this, index)}>
			// 	{ item.name }
			// </View>)
			<View style={{
        ...styles.listItem,
				backgroundColor: item.color,
				display: item.hide ? 'none' : 'flex'
      }} ref={this.setRef.bind(this, index)} key={item.name}>
				{ item.name }
			</View>
		);
  }
  getRandomColor = function () {
    return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).substr(-6)
  }
	getRowKey = (index) => {
		return this.state.dataSource[index].path;
	}
	render () {
		const { dataSource = [] } = this.state;
		return (
			<ListView style={[styles.container, {
				paddingTop: this.state.offsetTop
			}]}
				showScrollIndicator={false}
				numberOfRows={dataSource.length}
				renderRow={this.getRenderRow}
				getRowKey={this.getRowKey}
				getRowStyle={() => ({ flex: 1 })}
			/>
		);
	}
	componentDidMount () {
		this.toggleItem()
		window.onscroll = this.throttle(this.toggleItem, 100)
	}
	toggleItem () {
		let { height } = Dimensions.get('window');
		let dataSource = this.state.dataSource
		let offsetTop = 0
		this.listItem.forEach((item, index) => {
			let node = item.parentNode
			this.state.dataSource[index].clientHeight = this.state.dataSource[index].clientHeight || node.clientHeight
			let isHide = (node.getBoundingClientRect().top <= -height || node.getBoundingClientRect().top >= 2 * height)
			let isTopHide = node.getBoundingClientRect().top <= -height
			dataSource[index].hide = isHide
			offsetTop = offsetTop + (isTopHide ? this.state.dataSource[index].clientHeight : 0)
		})
		this.setState({
			dataSource,
			offsetTop
		})
	}
	throttle (cb, time) {
		let _lastTime = null;
		return function () {
			let _nowTime = +new Date()
			if (_nowTime - _lastTime > time || !_lastTime) {
				cb();
				_lastTime = _nowTime
			}
		}
	}
}

export default withRouter(Entry);
