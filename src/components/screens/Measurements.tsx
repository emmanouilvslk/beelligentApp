import React from "react";
import { Text, View } from "react-native";

type MeasurementsProps = {};

const Measurements: React.FC<MeasurementsProps> = ({}) => {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Measurements</Text>
        </View>
    );
};

export default Measurements;
