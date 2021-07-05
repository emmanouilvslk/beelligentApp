import React, { useEffect, useState } from "react";
import { Text, View, ActivityIndicator, FlatList } from "react-native";

type MeasurementsProps = {};

const Measurements: React.FC<MeasurementsProps> = ({}) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://theater1.dyndns.org/measurements")
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);
    return (
        <View style={{ flex: 1, padding: 24 }}>
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <FlatList
                    data={data}
                    keyExtractor={({ _id }) => _id}
                    renderItem={({ item }: { item: { value: string; _id: string } }) => (
                        <Text>
                            _id: {item._id} value: {item.value}
                        </Text>
                    )}
                />
            )}
        </View>
    );
};

export default Measurements;
