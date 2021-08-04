// @flow

import React, { useEffect, useCallback } from "react";
import { View, FlatList, ActivityIndicator, StyleSheet } from "react-native";
import { Text } from "@/components";
import { SafeAreaView } from "@/navigation";
import { colors } from "@/themes";
import { useDispatch, useSelector } from "react-redux";
import { DeliveriesActionCreator as deliveriesActionCreator } from "@/redux/Deliveries/ActionCreator";
import { FinishDeliveriesActionCreator as finishDeliveriesActionCreator } from "@/redux/FinishDeliveries/ActionCreator";
import { DeliveriesItem } from "./DeliveriesItem";

const _renderItem = ({ item, deliveredItem }) => {
  return <DeliveriesItem item={item} deliveredItem={deliveredItem} />;
};

export function HomeScreen() {
  const dispatch = useDispatch();
  const { deliveries, loading } = useSelector(
    (state) => state.deliveriesReducer,
  );
  const { finishDeliveries } = useSelector(
    (state) => state.finishDeliveriesReducer,
  );

  useEffect(() => {
    dispatch(
      deliveriesActionCreator(
        "https://60e84194673e350017c21844.mockapi.io/api/deliveries",
      ),
    );
  }, [dispatch]);

  useEffect(() => {
    dispatch(
      finishDeliveriesActionCreator(
        "https://60e84194673e350017c21844.mockapi.io/api/finishDelivery/",
      ),
    );
  }, [dispatch]);

  const renderItem = useCallback(
    ({ item }) => {
      const deliveredItem = finishDeliveries.find(
        ({ deliveryId }) => deliveryId === item.id,
      );

      return _renderItem({ item, deliveredItem });
    },
    [finishDeliveries],
  );

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
          <Text.H1>Deliveries</Text.H1>
        </View>
      </View>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={deliveries.filter(Boolean)}
          renderItem={renderItem}
          keyExtractor={(item, index) => item.id}
        />
      )}
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
