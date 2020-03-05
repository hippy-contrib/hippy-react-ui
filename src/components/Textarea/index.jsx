import React from 'react';
import { TextInput, StyleSheet, View } from '@hippy/react';

import { stopPropagation } from '../../utils/event';
import { setStyle, removeStyle } from '../../utils/css';
import { TextareaPropTypes, TextareaDefaultPropTypes } from './props';
import { flattenStyle, ISWEB } from '../../utils';
import { fontSizesMap } from '../../utils/fontSize';
import WebTextArea from './Textarea.web';

// import './index.css';
/**
 * hippy 当前版本需要给定width和height，否则会crash
 * hippy-react-web
 * 	placeholderTextColor不生效
 * 	lineheight 需要用'23px',因为stylesheet没有做转换
 * 
 * line-height 不奏效
 * web中rows会自动撑开高度
 * hippy-react numberOfLines > 1是，returntype 不奏效
 * 所以做好设置textarea的高度，避免双端不一致
 * hippy-react numberOfLines不会自动撑开高度
 * 
 * 多行时，使用setValue会出现卡顿，因此摈弃props.value来设置input的值
 */

 // 禁止web input 默认样式
if (ISWEB) {
	setStyle('hy-comp-textarea', {
		'[data-hy-comp-id=textarea]': `outline: none; -webkit-appearance: none;` }
	);
}
export const getStyleId = id => `hy-comp-textarea-style-${id}`;
export const getInputId = id => `hy-comp-textarea-${id}`;



const TextareaInput = ISWEB ? WebTextArea : TextInput;

const styles = StyleSheet.create({
	container: {
		minHeight: 100,
		// lineHeight: 44,
		display: 'flex',
		textAlign: 'left',
		color: '#333333',
		borderWidth: 0,
	}
})
export class Textarea extends React.Component {
	
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
		this.handleOnChange = this.handleOnChange.bind(this);

		const { placeholderTextColor } = props;

		this.styleId = getStyleId(`${Math.random()}`.replace(/^0\./, ''));
		this.inputId = getInputId(`${Math.random()}`.replace(/^0\./, ''));

		
		this.setWebPlaceholderColor(placeholderTextColor);
	}
	handleClick (event) {
		return stopPropagation(event);
	}
	handleOnChange (value) {
		const { onChange } = this.props;
		onChange(value);
		this.setState({ value });
	}
	setWebPlaceholderColor (color) {
		const key = `#${this.inputId}::placeholder`;
		setStyle(this.styleId, { [key] : `color: ${color};` });
	}
	getStyle () {
		const { placeholderTextColor, style, size } = this.props;
		const styleList = [ styles.container, style ];
		
		styleList.push({
			placeholderTextColor,
			fontSize: fontSizesMap[size] || size || fontSizesMap['xs']
		});

		const result = flattenStyle(styleList);
		result.lineHeight && (result['line-height'] = result.lineHeight);
		return result;
	}
	componentDidMount () {
	}
	componentWillUnmount() {
		removeStyle(this.styleId);
	}
	shouldComponentUpdate (nextProps, nextState) {
		const { placeholderTextColor } = this.props;
		if (placeholderTextColor !== nextProps.placeholderTextColor) {
			this.setWebPlaceholderColor(nextProps.placeholderTextColor);
		}
		return true;
	}
	componentDidUpdate(prevProps, prevState, snapshot) {
		// hippy 动态设置value的值，用于兼容外部直接设置value
		// this.inputRef && this.inputRef.setValue &&  this.inputRef.setValue(this.state.value || '');
	}
	render () {
		const {
			keyboardType,
			returnKeyType,
			onBlur,
			autoFocus,
			editable,
			placeholder,
			onKeyboardWillShow,
			onSelectionChange,
			numberOfLines,
			defaultValue,
			maxLength,
		} = this.props;
		return (
			<View style={{ display: 'flex' }}>
				<TextareaInput
					data-hy-comp-id="textarea"
					ref={ref => this.inputRef = ref}
					id={this.inputId}
					defaultValue={defaultValue}
					multiline={true}
					numberOfLines={numberOfLines}
					rows={numberOfLines}
					maxLength={maxLength}
					style={this.getStyle()}
					autoFocus={autoFocus}
					placeholder={placeholder}
					editable={editable}
					readOnly={!editable}
					onChangeText={this.handleOnChange}
					keyboardType={keyboardType}
					onBlur={onBlur}
					onClick={this.handleClick}
					returnKeyType={returnKeyType}
					onKeyboardWillShow={onKeyboardWillShow}
					onSelectionChange={onSelectionChange}
					contentInset={0}
					// value={value}
				/>
			</View>
		);
	}
}

Textarea.propTypes = TextareaPropTypes;
Textarea.defaultProps = TextareaDefaultPropTypes;

export default Textarea;
