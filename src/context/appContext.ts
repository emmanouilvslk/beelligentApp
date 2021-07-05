import { createContext } from "react";
import { Dimensions } from "react-native";

const AppContext = createContext({
    windowHeight: Dimensions.get("window").height,
    windowWidth: Dimensions.get("window").width,
});

export default AppContext;
