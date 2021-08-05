// @flow

import React, { useCallback, useLayoutEffect } from "react";
import { View, TouchableOpacity, Alert, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import MapView, { Marker } from "react-native-maps";
import { useNavigation } from "@/navigation";
import { Text } from "@/components";
import { colors, metrics } from "@/themes";
import { DeliveryIcon } from "@/svg";
import { DeleteDeliveryActionCreator as deleteDeliveryActionCreator } from "@/redux/FinishDeliveries/ActionCreator";
import { AddDeliveryActionCreator as addDeliveryActionCreator } from "@/redux/FinishDeliveries/ActionCreator";
import { UpdateDeliveryActionCreator as updateDeliveryActionCreator } from "@/redux/FinishDeliveries/ActionCreator";

type Props = {|
  route: {|
    key: string,
    name: string,
    params: {| item: any |},
  |},
|};

export function SingleDelivery({ route }: Props) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const item = route.params.item;

  const latitude = parseFloat(item.latitude);
  const longitude = parseFloat(item.longitude);

  const { finishDeliveries } = useSelector(
    (state) => state.finishDeliveriesReducer,
  );
  const deliveredItem = finishDeliveries.find(
    ({ deliveryId }) => deliveryId === item.id,
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: item?.consumer,
    });
  }, [item, navigation]);

  const handledAddItem = useCallback(
    (status) => {
      Alert.alert(
        "Alert",
        `Do you what to update the status to ${
          status === "delivered" ? "Delivered" : "Not delivered"
        }`,
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          {
            text: "Confirm",
            onPress: () => {
              dispatch(addDeliveryActionCreator(item, status));
            },
          },
        ],
      );
    },
    [dispatch, item],
  );

  const handledUpdateItem = useCallback(
    (status) => {
      Alert.alert(
        "Alert",
        `Do you what to update the status to ${
          status === "delivered" ? "Delivered" : "Not delivered"
        }`,
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          {
            text: "Confirm",
            onPress: () => {
              dispatch(updateDeliveryActionCreator(deliveredItem, status));
            },
          },
        ],
      );
    },
    [deliveredItem, dispatch],
  );

  const handledDeleteItem = useCallback(() => {
    Alert.alert("Alert", "Do you what to remove this delivery register", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "Confirm",
        onPress: () => {
          dispatch(deleteDeliveryActionCreator(deliveredItem.id));
        },
      },
    ]);
  }, [dispatch, deliveredItem]);

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          region={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}>
          <Marker coordinate={{ latitude, longitude }} />
        </MapView>
      </View>

      <View
        style={[
          {
            alignSelf: "stretch",
            paddingVertical: 20,
            paddingHorizontal: 10,
            marginHorizontal: 10,
            marginTop: 10,
            borderRadius: metrics.borderRadius,
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
      </View>

      <View
        style={{
          alignSelf: "center",
          justifyContent: "center",
          marginVertical: 10,
        }}>
        <Text.H1>
          Status:{" "}
          {!deliveredItem
            ? "Pending"
            : deliveredItem.status === "delivered"
            ? "Delivered"
            : "Not delivered"}
        </Text.H1>
      </View>
      <View
        style={{
          marginHorizontal: 20,
          flexDirection: "row",
          borderRadius: metrics.borderRadius,
          overflow: "hidden",
          justifyContent: "space-between",
        }}>
        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 10,
            backgroundColor: colors.accentGreen,
          }}
          onPress={() =>
            deliveredItem
              ? handledUpdateItem("delivered")
              : handledAddItem("delivered")
          }>
          <Text.H2 style={{ color: colors.light }}>DELIVERED</Text.H2>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 10,
            backgroundColor: colors.accentRed,
          }}
          onPress={() =>
            deliveredItem
              ? handledUpdateItem("undelivered")
              : handledAddItem("undelivered")
          }>
          <Text.H2 style={{ color: colors.light }}>UNDELIVERED</Text.H2>
        </TouchableOpacity>
      </View>
      {deliveredItem && (
        <TouchableOpacity
          onPress={handledDeleteItem}
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 10,
            textDecorationLine: "underline",
          }}>
          <Text>DELETE</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundApp,
  },
  mapContainer: {
    height: metrics.deviceWidth,
    width: metrics.deviceWidth,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
