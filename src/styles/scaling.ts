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

export const scaleFont = (size: number) => {
    const scaledFont = (width / guidelineBaseWidth) * size;
    return scaledFont;
};

function dimensions(top: number, right = top, bottom = top, left = right, property: string) {
    let styles: any = {};

    styles[`${property}Top`] = top;
    styles[`${property}Right`] = right;
    styles[`${property}Bottom`] = bottom;
    styles[`${property}Left`] = left;

    return styles;
}

export function margin(top: number, right: number, bottom: number, left: number) {
    return dimensions(scale(top), scale(right), scale(bottom), scale(left), "margin");
}

export function padding(top: number, right: number, bottom: number, left: number) {
    return dimensions(scale(top), scale(right), scale(bottom), scale(left), "padding");
}
