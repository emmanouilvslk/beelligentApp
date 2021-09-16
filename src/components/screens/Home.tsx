import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { scale, padding } from "styles/scaling";
import * as Colors from "styles/colors";
import TextField from "components/atoms/TextField";
import SettingSection from "components/atoms/SettingSection";
import { useState } from "react";
import { useEffect } from "react";
import ToggleSwitch from "toggle-switch-react-native";

const contentPadding = padding(50, 25, 5, 25);

type HomeProps = {};

const Home: React.FC<HomeProps> = ({}) => {
    const [saveMcMemory, setSaveMcMemory] = useState<boolean>(false);

    const [itemWeight, setItemWeight] = useState<string>("");

    useEffect(() => {}, [itemWeight, saveMcMemory]);

    return (
        <View style={{ flex: 1, position: "relative" }}>
            <View style={{ flexDirection: "row", justifyContent: "center", paddingTop: scale(20) }}>
                <Text>Settings</Text>
            </View>

            <View style={[contentPadding]}>
                <SettingSection title="Tare :">
                    <View>
                        <Button
                            color={Colors.YELLOW_SECONDARY}
                            onPress={async () => {
                                await fetch("http://theater1.dyndns.org/measurement/send", {
                                    method: "post",
                                    headers: {
                                        "Content-Type": "application/json",
                                    },
                                    body: JSON.stringify({
                                        settingByte: "t",
                                    }),
                                })
                                    .then((resp) => resp.toString())
                                    .then((data) => {
                                        () => console.log(data);
                                    })
                                    .catch((err) => {
                                        console.log(err);
                                    });
                            }}
                            title={"Tare Now"}
                        />
                    </View>
                </SettingSection>
            </View>
            <View style={contentPadding}>
                <SettingSection
                    title="Item weight :"
                    hasTextField={true}
                    callback={(text: string) => {
                        setItemWeight(text);
                    }}
                >
                    <Button
                        color={Colors.YELLOW_SECONDARY}
                        onPress={async () => {
                            await fetch("http://theater1.dyndns.org/measurement/send", {
                                method: "post",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify({
                                    settingByte: itemWeight,
                                }),
                            })
                                .then((resp) => resp.toString())
                                .then((data) => {
                                    () => console.log(data);
                                })
                                .catch((err) => {
                                    console.log(err);
                                });
                        }}
                        title={"Save"}
                    />
                </SettingSection>
            </View>
            <View style={contentPadding}>
                <SettingSection
                    title="EEPROM :"
                    hasToggle={true}
                    toggleCallback={() => {
                        {
                            saveMcMemory ? setSaveMcMemory(false) : setSaveMcMemory(true);
                        }
                    }}
                    isEnabled={saveMcMemory}
                >
                    <Button
                        color={Colors.YELLOW_SECONDARY}
                        onPress={async () => {
                            let settingByte: string;
                            if (saveMcMemory) {
                                settingByte = "y";
                            } else {
                                settingByte = "n";
                            }
                            await fetch("http://theater1.dyndns.org/measurement/send", {
                                method: "post",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify({
                                    settingByte: settingByte,
                                }),
                            })
                                .then((resp) => resp.toString())
                                .then((data) => {
                                    () => console.log(data);
                                })
                                .catch((err) => {
                                    console.log(err);
                                });
                        }}
                        title={"Save"}
                    />
                </SettingSection>
            </View>
        </View>
    );
};

export default Home;
