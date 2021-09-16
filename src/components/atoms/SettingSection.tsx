import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { scale, padding } from "styles/scaling";
import * as Colors from "styles/colors";
import TextField from "components/atoms/TextField";
import { useState } from "react";
import { useEffect } from "react";
import ToggleSwitch from "toggle-switch-react-native";

const style = StyleSheet.create({
    section: { backgroundColor: Colors.WHITE_CONTENT_FULL, elevation: 1.5, borderRadius: scale(10) },
    sectionContent: { flexDirection: "row", justifyContent: "space-around", padding: scale(15), alignItems: "center" },
    textField: { width: "auto", flex: 1, marginLeft: scale(25), marginRight: scale(25), textAlign: "center" },
});

type SettingSectionProps = {
    title: string;
    children?: React.ReactNode;
    toggleCallback?: () => void;
    isEnabled?: boolean;
    hasTextField?: boolean;
    callback?: (text: string) => void;
    byteString?: string;
    hasToggle?: boolean;
};

const SettingSection: React.FC<SettingSectionProps> = (props: SettingSectionProps) => {
    const [value, setValue] = useState<number | string>(0);

    useEffect(() => {
        props.callback;
    }, [value]);
    return (
        <View style={style.section}>
            <View style={style.sectionContent}>
                <Text>{props.title}</Text>
                {props.hasTextField ? (
                    <TextField
                        style={style.textField}
                        callback={(text) => {
                            let temp: number | string = parseInt(text, 10);
                            temp = temp.toString(16);
                            setValue(temp);
                            if (props.callback) {
                                props.callback(text);
                            }
                        }}
                        keyboardType="numeric"
                        defaultValue="0"
                    />
                ) : null}
                {props.hasToggle ? (
                    <ToggleSwitch
                        isOn={props.isEnabled}
                        onColor={Colors.YELLOW_SECONDARY}
                        offColor={Colors.GREY_CONTENT_SECONDARY}
                        size="large"
                        onToggle={props.toggleCallback}
                    />
                ) : null}
                {props.children}
            </View>
        </View>
    );
};

export default SettingSection;
