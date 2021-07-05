import React from "react";
import { Text, View } from "react-native";

type StatsProps = {};

const Stats: React.FC<StatsProps> = ({}) => {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Stats</Text>
        </View>
    );
};

export default Stats;
