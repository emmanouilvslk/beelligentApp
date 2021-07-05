import React, { useContext, useEffect, useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import AppContext from "context/appContext";

export default function App() {
    const [windowHeight, setWindowHeight] = useState(Dimensions.get("window").height);
    const [windowWidth, setWindowWidth] = useState(Dimensions.get("window").width);

    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <AppContext.Provider value={{ windowHeight, windowWidth }}>
                    <View>
                        <Text>And now it begins!</Text>
                    </View>
                </AppContext.Provider>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
