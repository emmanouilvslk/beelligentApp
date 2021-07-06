import React, { useState, useRef } from "react";
import { TextInput, StyleSheet, Keyboard } from "react-native";
import * as Colors from "styles/colors";
import { scale, padding } from "styles/scaling";

const textFieldPadding = padding(4, 15, 0, 15);

const textInputStyle = StyleSheet.create({
    textField: {
        height: scale(30),
        width: "50%",
        borderRadius: scale(10),
        backgroundColor: Colors.WHITE_CONTENT_TRANSPARENT,
        elevation: 1.5,
        color: Colors.GREY_CONTENT_PRIMARY,
    },
});

type TextField = {
    defaultValue?: string;
    callback: (text: string) => void;
    placeHolder: string;
    style?: object;
    keyboardType?: "phone-pad";
    multiline?: boolean;
};

const TextField = (props: TextField) => {
    const [value, onTextChange] = useState<string>();
    const textInputRef = useRef<TextInput>(null);

    Keyboard.addListener("keyboardDidHide", () => {
        if (textInputRef !== null && textInputRef.current !== null) {
            textInputRef.current.blur();
        }
    });

    return (
        <TextInput
            ref={textInputRef}
            style={[textInputStyle.textField, textFieldPadding, props.style]}
            value={value}
            defaultValue={props.defaultValue}
            keyboardType={props.keyboardType}
            placeholderTextColor={Colors.GREY_CONTENT_SECONDARY}
            placeholder={props.placeHolder}
            textAlignVertical="top"
            blurOnSubmit={true}
            multiline={props.multiline ? true : false}
            onChangeText={(text) => {
                onTextChange(text);
                props.callback(text);
            }}
            onEndEditing={() => {
                if (value) {
                    props.callback(value);
                }
            }}
        />
    );
};

export default TextField;
