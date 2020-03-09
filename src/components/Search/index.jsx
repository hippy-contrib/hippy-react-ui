import React from 'react';
import { View, StyleSheet } from '@hippy/react';

import SearchIcon from './ios-search.png';

import Input from '../Input';
import Icon from '../Icons';
import Button from '../Button';

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#dddddd',
		height: 44,
		justifyContent: 'center',
		paddingHorizontal: 8,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
	body: {
		height: 28,
		flex: 1,
		display: 'flex',
		flexDirection: 'row',
		// justifyContent: 'space-around',
		alignItems: 'center',
		backgroundColor: '#ffffff',
		borderRadius: 4,
		overflow: 'hidden',
	},
	icon: {
		backgroundColor: 'transparent',
	},
	input: {
		flex: 1,
		marginLeft: 4,
		// backgroundColor: 'red',
		minHeight: 28,
	},
	rightButton: {
		backgroundColor: '#dddddd'
	}
})
export class Search extends React.Component {

	render () {
		return (
			<View style={styles.container}>
				<View style={styles.body}>
					<Icon iconStyle={styles.icon} source={SearchIcon}></Icon>
					<Input style={styles.input} />
				</View>
				<Button size="small" type='ghost' style={styles.rightButton}>取消</Button>
			</View>
		);
	}
}

export default Search;