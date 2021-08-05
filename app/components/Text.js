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
    fontWeight: "600",
    fontSize: normalize(20, NORMALIZE_FONTS),
    letterSpacing: 0.15,
  },
  headline2: {
    fontWeight: "600",
    fontSize: normalize(18, NORMALIZE_FONTS),
    letterSpacing: 0.15,
  },
  subtitle: {
    fontSize: normalize(16, NORMALIZE_FONTS),
    letterSpacing: 0.15,
    lineHeight: normalize(18, NORMALIZE_FONTS),
  },
  body2: { fontSize: normalize(16, NORMALIZE_FONTS), letterSpacing: 0.5 },
  body1: { fontSize: normalize(14, NORMALIZE_FONTS), letterSpacing: 0.25 },
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
Text.Body2 = withDefaultStyle(styles.body2)(Text);
Text.Body1 = withDefaultStyle(styles.body1)(Text);

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
