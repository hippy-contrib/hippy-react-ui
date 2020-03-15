/** 
 * 参考
 * https://github.com/react-component/m-picker/blob/master/src/NativePicker.android.tsx
 * 
 * @todo
 * web需要隐藏滚动条
*/
import * as React from 'react';
import { ScrollView, View, StyleSheet } from '@hippy/react';

import SelectWrapper from './SelectWrapper';
import { CascaderPickerPropTypes, CascaderPickerDefaultProps } from './props';
import Text from '../Text';
import { flattenStyle, ISWEB, hairlineWidth } from '../../utils';

const ITEMHEIGHT = 34;

const styles = StyleSheet.create({
	container: {
		height: ITEMHEIGHT * 7,
		display: 'block',
	},
	indicator: {
		position: 'absolute',
		left: 0,
		right: 0,
		height: ITEMHEIGHT,
		top: ITEMHEIGHT * 3,
		borderColor: '#cccccc',
		borderTopWidth: hairlineWidth,
		borderBottomWidth: hairlineWidth,
		transform: [{ scaleX: -50 }],
	},
	scrollView: {
		paddingVertical: 34 * 3,
	},
	selectedItemText: {
		fontSize: 16,
		color: '#000',
	},
	itemText: {
		fontSize: 16,
		color: '#aaa',
		flex: 1,
		height: ITEMHEIGHT,
		alignItems: 'center',
		textAlign: 'center',
		lineHeight: ITEMHEIGHT,
	},
});


export class Picker extends React.Component {
	static itemHeight;
	static itemWidth;
	static scrollBuffer;
	static scrollerRef;
	static contentRef;
	static indicatorRef;

	static getInitValue = (data) => {
		if (Array.isArray(data) && data[0]) {
			return data[0].value || ''; 
		} else {
			return '';
		}
	}
	constructor(props) {
		super (props);

		this.onScroll = this.onScroll.bind(this);

	}
	onItemLayout = e => {
		const { height, width } = e.layout;
		if (this.itemHeight !== height || this.itemWidth !== width) {
			this.itemWidth = width;
		}
		if (this.itemHeight !== height) {
			this.itemHeight = height;
			// i do no know why!...
			setTimeout(() => {
				this.props.select(
					this.props.selectedValue,
					this.itemHeight,
					this.scrollTo,
				);
			}, 0);
		}
	}

	componentDidUpdate() {
		this.props.select(this.props.selectedValue, this.itemHeight, this.scrollTo);
	}

	componentWillUnmount() {
		this.clearScrollBuffer();
	}

	clearScrollBuffer() {
		if (this.scrollBuffer) {
			clearTimeout(this.scrollBuffer);
		}
	}

	scrollTo = y => {
		if (this.scrollerRef) {
			this.scrollerRef.scrollTo(0, y, false);
		}
	}

	fireValueChange = selectedValue => {
		if (
			this.props.selectedValue !== selectedValue &&
			this.props.onValueChange
		) {
			this.props.select(selectedValue);
			this.props.onValueChange(selectedValue);
		}
	}
	// web 需要优化，不需要每次都执行操作，看看速度是否为0
	onScroll = e => {
		const { y } = e.contentOffset;
		this.clearScrollBuffer();
		this.scrollBuffer = setTimeout(() => {
			this.clearScrollBuffer();
			this.props.doScrollingComplete(y, this.itemHeight, this.fireValueChange);
		}, 80);
	}
	/**
	 * @description 渲染每一个选型
	 * @param {Object} item  item.lable, item.value
	 * @param {Number} index 序号
	 * 
	 * @todo 优化，渲染上下3屏
	 */
	renderItem (item, index) {
		const { itemStyle, selectedValue } = this.props;
		const totalStyle = [styles.itemText];
			if (selectedValue === item.props.value) {
				totalStyle.push(styles.selectedItemText);
			}
			totalStyle.push(itemStyle);
			return (
				<Text
					ref={el => (this[`item${index}`] = el)}
					style={totalStyle}
					numberOfLines={1}
					onLayout={index === 0 ? this.onItemLayout : undefined}
					key={item.key}
				>
					{item.props.label}
				</Text>
			);
	}
	render() {
		const { children, style, disabled } = this.props;
		const items = React.Children.map(children, (item, index) => this.renderItem(item, index));

		// 兼容web和hippy，web没有onScrollEndDrag，所以只能在onScroll事件中做处理
		// const funcName = ISWEB ? 'onScroll' : 'onScrollEndDrag';
		const onScrollProps = { onScroll: this.onScroll}

		// scroll web scrollEnabled 需要做兼容
		return (
			<View style={[ styles.container, flattenStyle(style) ]}>
				<View ref={el => this.indicatorRef = el} style={styles.indicator}/>
				<ScrollView
					style={{ flex: 1, height: 7 * ITEMHEIGHT }}
					contentContainerStyle={styles.scrollView}
					ref={el => (this.scrollerRef = el)}
					showsVerticalScrollIndicator={false}
					overScrollMode="never"
					scrollEnabled={!disabled}
					{ ...onScrollProps }
				>
					<View style={{ flex: 1 }} ref={el => (this.contentRef = el)}>{items}</View>
				</ScrollView>

			</View>
		);
	}
}

Picker.propTypes = CascaderPickerPropTypes;
Picker.defaultProps = CascaderPickerDefaultProps;

export default SelectWrapper(Picker);
