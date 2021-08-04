// @flow

import React, { type ElementConfig } from "react";
import { Text as RNText, StyleSheet, Platform, PixelRatio } from "react-native";
import { colors, metrics } from "@/themes";

const NORMALIZE_FONTS = true;
const SCALE = metrics.deviceWidth / 414;

type Props = ElementConfig<typeof RNText>;

const styles = StyleSheet.create({
  text: {
    color: colors.dark,
  },
  headline1: {
    fontSize: normalize(44, NORMALIZE_FONTS),
    fontWeight: "bold",
  },
  headline2: {
    fontWeight: "600",
    fontSize: normalize(32, NORMALIZE_FONTS),
    letterSpacing: 0.25,
  },
  headline3: {
    fontWeight: "bold",
    fontSize: normalize(26, NORMALIZE_FONTS),
  },
  headline4: {
    fontWeight: "600",
    fontSize: normalize(20, NORMALIZE_FONTS),
    letterSpacing: 0.15,
  },
  headline5: {
    fontWeight: "600",
    fontSize: normalize(18, NORMALIZE_FONTS),
    letterSpacing: 0.15,
  },
  subtitle: {
    fontSize: normalize(16, NORMALIZE_FONTS),
    letterSpacing: 0.15,
    lineHeight: normalize(18, NORMALIZE_FONTS),
  },
});

export function Text({ style, ...props }: Props): React$Element<any> {
  return <RNText style={[styles.text, style]} {...props} />;
}

export const withDefaultStyle =
  (defaultStyle: any) =>
  (Component: any) =>
  ({ style, ...props }: Props) =>
    <Component style={[defaultStyle, style]} {...props} />;

Text.H1 = withDefaultStyle(styles.headline1)(Text);
Text.H2 = withDefaultStyle(styles.headline2)(Text);
Text.H3 = withDefaultStyle(styles.headline3)(Text);
Text.H4 = withDefaultStyle(styles.headline4)(Text);
Text.H5 = withDefaultStyle(styles.headline5)(Text);

Text.Subtitle = withDefaultStyle(styles.subtitle)(Text);

export function normalize(size: number, normalize: boolean) {
  if (normalize) {
    const newSize = size * SCALE;
    if (Platform.OS === "ios") {
      return Math.round(PixelRatio.roundToNearestPixel(newSize));
    } else {
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
    }
  } else {
    return size;
  }
}
