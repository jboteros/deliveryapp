// @flow

import React from "react";
import { View } from "react-native";
import { Text } from "@/components";
import { type DeliveriesProp } from "@/redux/Deliveries/ActionCreator";
export const DeliveriesItem = ({ item }: DeliveriesProp) => {
  return (
    <View
      style={{
        alignSelf: "stretch",
        backgroundColor: "red",
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginHorizontal: 10,
        marginBottom: 10,
      }}>
      <Text>{item.address}</Text>
      <Text>{item.zipCode}</Text>
      <Text>{item.city}</Text>
    </View>
  );
};
