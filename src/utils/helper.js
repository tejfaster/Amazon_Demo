import {Dimensions} from 'react-native'

const myWp = Dimensions.get("window").width;
const myHp = Dimensions.get("window").height;
const standardWidth = 375.0;
const standardHeight = 667.0;

export function wp (dimension) {
    return (dimension / standardWidth) * myWp;
}

export function hp (dimension) {
    return (dimension / standardHeight) * myHp;
}