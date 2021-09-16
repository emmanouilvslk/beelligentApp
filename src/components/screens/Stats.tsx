import React, { useEffect, useState } from "react";
import { Text, View, Dimensions } from "react-native";
import { scale, padding } from "styles/scaling";
import { LineChart } from "react-native-chart-kit";

type StatsProps = {};

const Stats: React.FC<StatsProps> = ({}) => {
    const tempArray = [30, 31.3, 26.5, 27.5, 28, 29, 23.5];

    return (
        <View style={{ flex: 1, position: "relative" }}>
            <View style={[{ flexDirection: "row", justifyContent: "center" }]}>
                <View style={{ flex: 1 }}>
                    <View style={{ justifyContent: "center", alignItems: "center", paddingTop: scale(15) }}>
                        <Text> Temperature </Text>
                    </View>
                    <View>
                        <LineChart
                            data={{
                                labels: ["1st", "10th", "20th", "30th"],
                                datasets: [
                                    {
                                        data: tempArray,
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
        </View>
    );
};

export default Stats;
