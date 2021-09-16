import React, { useEffect, useState } from "react";
import { Text, View, ActivityIndicator, FlatList } from "react-native";
import * as Colors from "styles/colors";
import { scale } from "styles/scaling";

type MeasurementsProps = {};

type Measurementitem = {
    weight: number;
    temperature: number;
    humidity: number;
    time: Date;
};

const Measurements: React.FC<MeasurementsProps> = ({}) => {
    const [isLoading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://theater1.dyndns.org/measurements")
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, [data]);
    return (
        <View style={{ flex: 1, paddingBottom: scale(65) }}>
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <FlatList
                    data={data}
                    keyExtractor={({ _id }) => _id}
                    renderItem={({ item }: { item: { _id: string; measurement: Measurementitem } }) => (
                        <View style={{ backgroundColor: Colors.YELLOW_SECONDARY }}>
                            <View style={{ margin: scale(10), backgroundColor: "white", padding: scale(10) }}>
                                <Text>_id: {item._id} </Text>
                                <Text>weight: {item.measurement.weight}</Text>
                                <Text>temperature: {item.measurement.temperature}</Text>
                                <Text>humidity: {item.measurement.humidity}</Text>
                                <Text>time: {item.measurement.time}</Text>
                            </View>
                        </View>
                    )}
                />
            )}
        </View>
    );
};

export default Measurements;
