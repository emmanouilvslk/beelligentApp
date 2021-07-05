import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

//Guideline sizes are based on standard ~5" screen mobile device

//based on https://github.com/nirsky/react-native-scaling-example/blob/master/README.md

const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

export const scale = (size: number) => {
    const scaledSize = (width / guidelineBaseWidth) * size;
    return scaledSize;
};

export const verticalScale = (size: number) => {
    const scaledSize = (height / guidelineBaseHeight) * size;
    return scaledSize;
};
