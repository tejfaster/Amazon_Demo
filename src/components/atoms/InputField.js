import React from 'react'
import { TextInput, View, StyleSheet } from 'react-native'

const InputField = (props) => {
    return (
        <TextInput
            onChangeText={props.onChangeText}
            value={props.value}
            placeholder={props.placeholder}
            keyboardType={props.keyboardType}
            multiline={props.multiline}
            numberOfLines={props.numberOfLines}
            style={props.style}
            allowFontScaling={props.allowFontScaling}
            autoCapitalize={props.autoCapitalize}
            autoComplete={props.autoComplete}
            autoCorrect={props.autoCorrect}
            autoFocus={props.autoFocus}
            blurOnSubmit={props.blurOnSubmit}
            caretHidden={props.caretHidden}
            clearButtonMode={props.clearButtonMode}
            clearTextOnFocus={props.clearTextOnFocus}
            contextMenuHidden={props.contextMenuHidden}
            dataDetectorTypes={props.dataDetectorTypes}
            defaultValue={props.defaultValue}
            disableFullscreenUI={props.disableFullscreenUI}
            editable={props.editable}
            enablesReturnKeyAutomatically={props.enablesReturnKeyAutomatically}
            importantForAutofill={props.importantForAutofill}
            inlineImageLeft={props.inlineImageLeft}
            inlineImagePadding={props.inlineImagePadding}
            inputAccessoryViewID={props.inputAccessoryViewID}
            keyboardAppearance={props.keyboardAppearance}
            maxLength={props.maxLength}
            onBlur={props.onBlur}
            onFocus={props.onFocus}
            onKeyPress={props.onKeyPress}
            placeholderTextColor="black"
            returnKeyType={props.returnKeyType}
            scrollEnabled={props.scrollEnabled}
            secureTextEntry={props.secureTextEntry}
        />
    )
}

export default InputField