// @flow

import { Dimensions } from "react-native";

const deviceHeight: number = Dimensions.get("window").height;
const deviceWidth: number = Dimensions.get("window").width;
const contentWidth = deviceWidth * 0.95;

const aspectRatio = deviceHeight / deviceWidth;

const baseDeviceWidth: number = 375;

const textFieldWidth = deviceWidth - 60;

const balanceFontSize = 70;
const headerFontSize = 32;
const largerFontSize = 29;
const largeFontSize = 24;
const mediumFontSize = 20;
const biggerFontSize = 18;
const defaultFontSize = 16;
const smallFontSize = 14;
const smallestFontSize = 12;

const iconSize = 34;

const spacing = {
  extraLarge: 50,
  large: 20,
  medium: 15,
  standard: 10,
  small: 5,
};

const headerHeight = 50;

const borderRadius = {
  default: 6,
  small: 3,
  large: 10,
  big: 100,
};

const questionSpacing = 30;
const timerFillSpacing = 2;

const buttonBorderWidth = 2;
const buttonHorizontalPadding = 30;
const buttonYGradientStart = 0;
const buttonYGradientEnd = 1;

export const metrics = {
  aspectRatio,
  balanceFontSize,
  biggerFontSize,
  buttonBorderWidth,
  buttonFontSize: 17,

  buttonHorizontalPadding,

  buttonYGradientEnd,
  buttonYGradientStart,
  borderRadius,
  defaultFontSize,
  defaultTopSpacing: 95,
  deviceHeight,
  deviceWidth,
  contentWidth,

  fullScreenButton: deviceWidth - 180,
  fullScreenLogoHeight: 93,
  fullScreenLogoWidth: 310,
  headerFontSize,
  headerHeight,
  iconSize,
  inputFontSize: defaultFontSize,
  spacing,
  largeFontSize,
  largerFontSize,

  mediumFontSize,

  smallFontSize,
  smallestFontSize,

  textFieldWidth,
  questionSpacing,
  timerFillSpacing,
  timerFillWidth: deviceWidth - (questionSpacing * 4.4 - timerFillSpacing * 2),
  wideButtonWidth: textFieldWidth,
  baseDeviceWidth,
};
