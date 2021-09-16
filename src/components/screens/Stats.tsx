import React from "react";
import { Text, View } from "react-native";
import { scale } from "styles/scaling";

type StatsProps = {};

const Stats: React.FC<StatsProps> = ({}) => {
    return (
        <View style={{ flex: 1, position: "relative" }}>
            <View style={{ flexDirection: "row", justifyContent: "center", paddingTop: scale(20) }}>
                <Text>Charts</Text>
            </View>
        </View>
    );
};

export default Stats;
