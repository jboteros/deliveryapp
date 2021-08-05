// @flow

import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "@/components";
import { SafeAreaView } from "@/navigation";
import { colors } from "@/themes";
// import { useDispatch, useSelector } from "react-redux";
// import { DeliveriesActionCreator as deliveriesActionCreator } from "@/redux/Deliveries/ActionCreator";
// import { FinishDeliveriesActionCreator as finishDeliveriesActionCreator } from "@/redux/FinishDeliveries/ActionCreator";

export function SingleDelivery() {
  // const dispatch = useDispatch();
  // const { deliveries, loading } = useSelector(
  //   (state) => state.deliveriesReducer,
  // );

  // useEffect(() => {
  //   dispatch(
  //     deliveriesActionCreator(
  //       "https://61098931d71b67001763999c.mockapi.io/api/deliveries",
  //     ),
  //     finishDeliveriesActionCreator(
  //       "https://61098931d71b67001763999c.mockapi.io/api/finishDelivery/",
  //     ),
  //   );
  // }, [dispatch]);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <SafeAreaView edges={["right", "bottom", "left"]} />
        <View
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            paddingVertical: 10,
          }}>
          <Text.H1>SingleDeliveries</Text.H1>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundApp,
  },
  headerContainer: {
    flex: 0,
    paddingTop: 10,
    backgroundColor: colors.light,
    borderRadius: 10,
    paddingHorizontal: 20,
    marginBottom: 20,

    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
