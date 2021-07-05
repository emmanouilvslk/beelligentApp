import React from "react";
import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHome, faChartLine, faTemperatureHigh } from "@fortawesome/free-solid-svg-icons";
import * as Colors from "styles/colors";
import { scale } from "styles/scaling";
import Home from "components/screens/Home";
import Stats from "components/screens/Stats";
import Measurements from "components/screens/Measurements";

type TabsProps = {};

type AppScreensParamList = {
    Home: undefined;
    Stats: undefined;
    Measurements: undefined;
};

const Tab = createBottomTabNavigator<AppScreensParamList>();

const Tabs: React.FC<TabsProps> = ({}) => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: Colors.YELLOW_LIGHT,
                inactiveTintColor: Colors.GREY_CONTENT_PRIMARY,
                showLabel: true,
                style: {
                    position: "absolute",
                    bottom: scale(15),
                    left: scale(10),
                    right: scale(10),
                    elevation: 0,
                    borderRadius: scale(15),
                    height: scale(50),
                },
            }}
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color }) => {
                    switch (route.name) {
                        case "Home": {
                            return <FontAwesomeIcon icon={faHome} color={color} size={scale(25)} />;
                        }
                        case "Stats": {
                            return <FontAwesomeIcon icon={faChartLine} color={color} size={scale(25)} />;
                        }
                        case "Measurements": {
                            return <FontAwesomeIcon icon={faTemperatureHigh} color={color} size={scale(25)} />;
                        }
                    }
                },
            })}
        >
            <Tab.Screen name="Stats" component={Stats} />
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Measurements" component={Measurements} />
        </Tab.Navigator>
    );
};
export default Tabs;
