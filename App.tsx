import React, { useContext, useEffect, useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import AppContext from "context/appContext";
import Index from "./src/Index";

export default function App() {
    const [windowHeight, setWindowHeight] = useState(Dimensions.get("window").height);
    const [windowWidth, setWindowWidth] = useState(Dimensions.get("window").width);

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <AppContext.Provider value={{ windowHeight, windowWidth }}>
                    <Index />
                </AppContext.Provider>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}
