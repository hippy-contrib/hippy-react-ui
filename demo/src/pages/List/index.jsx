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
			dataSource: Object.keys(Array.from({length: 100})).map((item, index) => {
        return {
					name: 'item' + index,
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
				backgroundColor: color,
				display: item.hide ? 'none' : 'block'
      }} ref={this.setRef.bind(this, index)}>
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
	scroll (event) {
		console.log(event)
	}
	render () {
		const { dataSource = [] } = this.state;
		return (
			<ListView style={[styles.container, {
				paddingTop: this.state.offsetTop
			}]}
				numberOfRows={dataSource.length}
				onScroll={this.scroll.bind(this)}
				renderRow={this.getRenderRow.bind(this)}
				getRowKey={this.getRowKey}
				getRowStyle={() => ({ flex: 1 })}
			/>
		);
	}
	componentDidMount () {
		this.toggleItem()
		window.onscroll = () => {
			this.timer && clearTimeout(this.timer)
			this.timer = setTimeout(() => {
				console.log('timout')
				this.toggleItem()
			}, 300);
		}
	}
	toggleItem () {
		let { height } = Dimensions.get('window');
		let dataSource = this.state.dataSource
		let offsetTop = this.state.offsetTop
		this.listItem.forEach((item, index) => {
			let node = item.parentNode
			let isHide = (node.getBoundingClientRect().top <= -height || node.getBoundingClientRect().top >= 2 * height)
			let isTopHide = node.getBoundingClientRect().top <= -height
			dataSource[index].hide = isHide
			console.log(node.clientHeight)
			offsetTop = offsetTop + (isTopHide ? node.clientHeight : 0)
		})
		console.log(offsetTop)
		this.setState({
			dataSource,
			offsetTop
		})
	}
}

export default withRouter(Entry);
