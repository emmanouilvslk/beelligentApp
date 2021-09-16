import React, { useEffect, useState } from "react";
import { Text, View, Dimensions } from "react-native";
import { scale, padding } from "styles/scaling";
import { LineChart } from "react-native-chart-kit";

type StatsProps = {};
type Measurementitem = {
    weight: number;
    temperature: number;
    humidity: number;
    time: Date;
};
const contentPadding = padding(50, 25, 5, 25);

const Stats: React.FC<StatsProps> = ({}) => {
    const [isLoading, setLoading] = useState<boolean>(true);
    const [data1, setData] = useState([]);
    const [temperature, setTemperature] = useState([]);

    const getMeasurements = async () => {
        try {
            const response = await fetch("http://theater1.dyndns.org/measurements");
            const json = await response.json();
            setData(json);
            getTemperature();
        } catch (e) {
            console.log(e);
        }
    };

    const getTemperature = () => {
        const temperatureArray: any = data1.map((item: any) => {
            return item.measurement.temperature;
        });
        setTemperature(temperatureArray);
    };

    useEffect(() => {
        getMeasurements();
    }, []);

    return (
        <View style={{ flex: 1, position: "relative" }}>
            <View style={[{ flexDirection: "row", justifyContent: "center" }]}>
                <View style={{ flex: 1 }}>
                    <View style={{ justifyContent: "center", alignItems: "center", paddingTop: scale(15) }}>
                        <Text> Temperature </Text>
                    </View>

                    <LineChart
                        data={{
                            labels: [],
                            datasets: [
                                {
                                    data: temperature,
                                },
                            ],
                        }}
                        width={Dimensions.get("window").width} // from react-native
                        height={Dimensions.get("window").height / 4}
                        yAxisLabel=""
                        yAxisSuffix="°C"
                        yAxisInterval={1} // optional, defaults to 1
                        chartConfig={{
                            backgroundColor: "white",
                            backgroundGradientFrom: "rgb(254,229,37)",
                            backgroundGradientTo: "gray",
                            decimalPlaces: 2, // optional, defaults to 2dp
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            style: {
                                borderRadius: 16,
                            },
                            propsForDots: {
                                r: "6",
                                strokeWidth: "2",
                                stroke: "gray",
                            },
                        }}
                        bezier
                        style={{
                            borderRadius: scale(16),
                            marginRight: scale(35),
                            padding: scale(25),
                        }}
                    />
                </View>
            </View>
        </View>
    );
};

export default Stats;
