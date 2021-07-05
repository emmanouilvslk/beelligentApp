import React from "react";
import { Text, View } from "react-native";

type HomeProps = {};

const Home: React.FC<HomeProps> = ({}) => {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Home</Text>
        </View>
    );
};

export default Home;
