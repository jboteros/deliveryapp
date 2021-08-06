// @flow

import React, { useCallback } from "react";
import { View, TouchableOpacity } from "react-native";
import { Text } from "@/components";
import { colors } from "@/themes";
import { DeliveryIcon } from "@/svg";
import { routes, useNavigation } from "@/navigation";
import { type DeliveriesProp } from "@/redux/Deliveries/ActionCreator";
import { type FinishDeliveriesProp } from "@/redux/FinishDeliveries/ActionCreator";

export const DeliveriesItem = ({
  item,
  deliveredItem,
}: {|
  item: DeliveriesProp,
  deliveredItem: FinishDeliveriesProp,
|}) => {
  const navigation = useNavigation();
  console.log(JSON.stringify({ item, deliveredItem }));
  const handleAddItem = useCallback(() => {
    navigation.navigate(routes.SINGLE_DELIVERY, { item });
  }, [item, navigation]);

  return (
    <TouchableOpacity
      onPress={handleAddItem}
      style={[
        {
          alignSelf: "stretch",
          backgroundColor: colors.light,
          paddingVertical: 20,
          paddingHorizontal: 10,
          marginHorizontal: 10,
          marginTop: 10,
          borderRadius: 10,
        },
      ]}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 5,
        }}>
        <Text.H1>{item.consumer}</Text.H1>
        <DeliveryIcon
          color={
            deliveredItem?.status === "delivered"
              ? colors.accentGreen
              : deliveredItem?.status === "undelivered"
              ? colors.accentRed
              : colors.alphaDark(0.1)
          }
        />
      </View>
      <View
        style={{
          alignSelf: "stretch",
          justifyContent: "space-between",
          marginTop: 5,
        }}>
        <Text.Body2
          style={{
            color: colors.accentBlue,
          }}>{`${item.address}, ${item.zipCode}`}</Text.Body2>
        <Text.H2
          style={{
            color: colors.accentBlue,
          }}>
          {item.city}
        </Text.H2>
      </View>
    </TouchableOpacity>
  );
};
