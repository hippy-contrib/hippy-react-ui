import React from 'react';
import { View, StyleSheet } from '@hippy/react';

import Input from '../Input';
import Icon from '../Icon';
import Button from '../Button';

import { SearchProps, SearchDefaultProps } from './props';
import { stopPropagation } from '../../utils/event';


import SearchIcon from './ios-search.png';
import CancelIcon from './cancel.png';

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
	searchIcon: {
		backgroundColor: 'transparent',
		height: 18,
		width: 18,
	},
	cancelIconContainer: {
		padding: 4,
		backgroundColor: '#bbbbbb',
		marginRight: 4,
	},
	cancelIcon: {
		backgroundColor: '#bbbbbb',
		height: 12,
		width: 12,
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

	constructor(props) {
		super(props);

		this.handleOnCancelClick = this.handleOnCancelClick.bind(this);
		this.handleOnClearClick = this.handleOnClearClick.bind(this);
	}
	handleOnClearClick (event) {
		const { onChange, onClear } = this.props;
		console.log('handleOnClearClick', event);
		onChange('');
		onClear(event);
		return stopPropagation(event);
	}
	handleOnCancelClick (event) {
		this.props.onCancel(event);
		return stopPropagation(event);
	}
	getStyle () {

	}
	render () {
		const {
			value,
			defaultValue,
			disabled,
			onChange,
			maxLength,
			onFocus,
			onBlur,
			onSubmit,
			placeholder,
			cancelText,
			showCancelButton,
		} = this.props;
		return (
			<View style={styles.container}>
				<View style={styles.body}>
					<Icon
						iconStyle={styles.searchIcon}
						source={SearchIcon}
					/>
					<Input
						value={value}
						placeholder={placeholder}
						style={styles.input}
						editable={!disabled}
						defaultValue={defaultValue}
						onChange={onChange}
						maxLength={maxLength}
						onFocus={onFocus}
						onBlur={onBlur}
						onEndEditing={onSubmit}
					/>
					{
						value &&
							<Icon
								size='xxs'
								source={CancelIcon}
								containerStyle={styles.cancelIconContainer}
								iconStyle={styles.cancelIcon}
								onClick={this.handleOnClearClick}
							/>
					}
				</View>
				{
					showCancelButton && 
					<Button
						size="small"
						type='ghost'
						style={styles.rightButton}
						onClick={this.handleOnCancelClick}
					>
						{	cancelText }
					</Button>
				}
			</View>
		);
	}
}

Search.propTypes = SearchProps;
Search.defaultProps = SearchDefaultProps;

export default Search;