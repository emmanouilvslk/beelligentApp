import React from "react";
import { Button, Text, View } from "react-native";
import TextField from "components/atoms/TextField";
import { useState } from "react";
import * as Colors from "styles/colors";

type HomeProps = {};

const Home: React.FC<HomeProps> = ({}) => {
    const [value, onChangeText] = useState<string>("");

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <View style={{ flexDirection: "row" }}>
                <TextField
                    callback={(text) => {
                        onChangeText(text.replace(/\s+/g, " ").trim());
                    }}
                    placeHolder={"Identifier..."}
                />
                <Button
                    color={Colors.GREY_CONTENT_SECONDARY}
                    title="SEND "
                    onPress={() => {
                        console.log(value);
                    }}
                ></Button>
            </View>
        </View>
    );
};

export default Home;
