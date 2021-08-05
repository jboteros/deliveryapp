// @flow

import { Dimensions } from "react-native";

const deviceHeight: number = Dimensions.get("window").height;
const deviceWidth: number = Dimensions.get("window").width;
const borderRadius: number = 10;

export const metrics = {
  deviceWidth,
  deviceHeight,
  borderRadius,
};
