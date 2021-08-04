// @flow

import React from "react";
import { View } from "react-native";
import { Text } from "@/components";
import { type DeliveriesProp } from "@/redux/Deliveries/ActionCreator";
import { type FinishDeliveriesProp } from "@/redux/FinishDeliveries/ActionCreator";

export const DeliveriesItem = ({
  item,
  deliveredItem,
}: {|
  item: DeliveriesProp,
  deliveredItem: FinishDeliveriesProp,
|}) => {
  return (
    <View
      style={[
        {
          alignSelf: "stretch",
          backgroundColor: "red",
          paddingVertical: 10,
          paddingHorizontal: 10,
          marginHorizontal: 10,
          marginBottom: 10,
        },
        deliveredItem &&
          deliveredItem?.status === "delivered" && { backgroundColor: "green" },
      ]}>
      <Text>{item.address}</Text>
      <Text>{item.zipCode}</Text>
      <Text>{item.city}</Text>
    </View>
  );
};
