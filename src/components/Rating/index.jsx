import React from 'react';
import { StyleSheet, View } from '@hippy/react';

import { Props, DefaultProps } from './props'
import Text from '../Text';
import { getFontSize } from '../../utils/fontSize';
import { stopPropagation } from '../../utils/event';
import { flattenStyle } from '../../utils';

const styles = StyleSheet.create({
	container: {
		// backgroundColor: '#fefcec',
		// height: 34,
		// lineHeight: 34,
		// justifyContent: 'center',
		// alignItems: 'center',
		// position: 'relative',
		paddingLeft: 12,
		paddingRight: 12,
		flexDirection: 'row',
		justifyContent: 'space-between',
		// display: 'flex',
	},
	item: {
		color: '#888888',
		marginHorizontal: 2,
	},
	selectedItem: {
		color: '#ffb400',
		// backgroundColor: 'red'
	}
})
export class NoticeBar extends React.Component {

	constructor(props) {
		super(props);

		const { maxValue, defaultValue } = props;
		const length = Math.max(maxValue | 0, 1);

		this.state = {
			length,
			value: this.getValue(defaultValue, length),
		}

		this.handleOnClick = this.handleOnClick.bind(this);
	}
	getValue (value, maxValue = this.state.length) {
		return Math.max(0, Math.min(maxValue, value | 0));
	}
	handleOnClick (event, value) {
		if (value !== this.state.value) this.props.onChange(value);
		this.setState({ value });
		return stopPropagation(event);
	}
	renderItem (index) {
		const { fontItem, selectedFontItem, size, fontStyle, selectedFontStyle } = this.props;
		const { value } = this.state;
		const isSelected = index < value;
		return (
			<Text
				key={`rate_${index}`}
				size={getFontSize(size)}
				onClick={event => this.handleOnClick(event, index + 1)}
				style={[ styles.item, flattenStyle(fontStyle), isSelected ? { ...styles.selectedItem, ...flattenStyle(selectedFontStyle) } : {} ]}
			>
				{ isSelected ? selectedFontItem : fontItem }
			</Text>
		);
	}
	render () {
		const { length } = this.state;
		const { style } = this.props;
		return (
			<View style={[styles.container, style]} >
				{
					Array.from(Array(length)).map((item, index) => this.renderItem(index))
				}
			</View>
		)
	}
}


NoticeBar.propTypes = Props;
NoticeBar.defaultProps = DefaultProps;

export default NoticeBar;
