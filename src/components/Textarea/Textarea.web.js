import React from 'react';

export class WebTextArea extends React.Component {
	render () {
		const {
			onChangeText,
			contentInset,
			onKeyboardWillShow,
			onSelectionChange,
			editable,
			multiline,
			numberOfLines,
			keyboardType,
			returnKeyType,
			...otherProps
		} = this.props;
		let inputType = 'text';
		if (keyboardType) {
			if (keyboardType === 'numeric' || keyboardType === 'phone-pad') {
				inputType = 'tel';
			} else if (keyboardType === 'password') {
				inputType = 'password';
			} else if (keyboardType === 'email') {
				inputType = 'email';
			}
		}
		return (
			<textarea
				{ ...otherProps }
				readOnly={!editable}
				type={inputType}
				rows={numberOfLines}
				onChange={(event) => onChangeText(event.currentTarget.value)}
			/>
		)
	}
}


export default WebTextArea;
