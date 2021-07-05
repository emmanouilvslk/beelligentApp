import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "components/organisms/Tabs";

type IndexProps = {};

const Index: React.FC<IndexProps> = ({}) => {
    return (
        <NavigationContainer>
            <Tabs />
        </NavigationContainer>
    );
};
export default Index;
