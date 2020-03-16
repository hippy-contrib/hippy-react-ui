import React from 'react';
import { TextInput, StyleSheet } from '@hippy/react';

import { stopPropagation } from '../../utils/event';
import { setStyle, removeStyle } from '../../utils/css';
import { InputPropTypes, InputDefaultPropTypes } from './props';
import { flattenStyle, ISWEB } from '../../utils';
import { fontSizesMap } from '../../utils/fontSize';

import WebInput from './Input.web';

const InputComp = ISWEB ? WebInput : TextInput;
// import './index.css';
/**
 * hippy 当前版本需要给定width和height，否则会crash
 * hippy-react-web placeholderTextColor不生效
 * hippy-react value 不起作用，只有在初始化的时候有作用
 * hippy-react style 中 padding 不起作用
 * hippy-react style 中 fontWeight 是小数
 */

 // 禁止web input 默认样式
if (ISWEB) {
	setStyle('hy-comp-input', {
		'[data-hy-comp-id=input]': `outline: none; -webkit-appearance: none;` }
	);
}
export const getStyleId = id => `hy-comp-input-style-${id}`;
export const getInputId = id => `hy-comp-input-${id}`;

const styles = StyleSheet.create({
	container: {
		minHeight: 32,
		display: 'flex',
		fontSize: 14,
		textAlign: 'left',
		color: '#333333',
		borderWidth: 0,
	}
})
export class Input extends React.Component {
	
	static getDerivedStateFromProps(nextProps, prevState) {
		if (nextProps.hasOwnProperty('value') && nextProps.value !== prevState.value) {
			return { value: nextProps.value }
		}
    return null;
	}
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
		this.handleOnChange = this.handleOnChange.bind(this);
		this.handleOnEndEditing = this.handleOnEndEditing.bind(this);

		const { defaultValue, value } = props;
		this.state = {
			value: defaultValue || value || ''
		}
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
	handleOnEndEditing (event) {
		if (event.key === 'enter' || event.key === 'Enter') {
			// console.log('dddddd', this, this.inputRef.getWrappedInstance);
			console.log('dddddd', this.inputRef);
			this.inputRef && this.inputRef.blur();
			this.props.onEndEditing(event);
		}
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
		return flattenStyle(styleList);
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
		this.inputRef && this.inputRef.setValue &&  this.inputRef.setValue(this.state.value || '');
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
			maxLength,
			onFocus,
		} = this.props;
		const { value } = this.state;
		console.log('render', this.inputRef);
		return (
			<InputComp
				data-hy-comp-id="input"
				ref={ref => this.inputRef = ref}
				id={this.inputId}
				multiline={false}
				numberOfLines={1}
				maxLength={maxLength}
				style={this.getStyle()}
				autoFocus={autoFocus}
				onFocus={onFocus}
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
				onKeyPress={this.handleOnEndEditing}
				value={value}
			/>
		);
	}
}

Input.propTypes = InputPropTypes;
Input.defaultProps = InputDefaultPropTypes;

export default Input;
