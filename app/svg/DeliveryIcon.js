// @flow

import React from "react";
import Svg, { Path } from "react-native-svg";
import { colors } from "@/themes";

type Props = {|
  color: string,
|};

export const DeliveryIcon = ({ color }: Props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="prefix__feather prefix__feather-check-circle">
    <Path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
    <Path d="M22 4L12 14.01l-3-3" />
  </Svg>
);

DeliveryIcon.defaultProps = { color: colors.alphaPrimary(0.1) };
