// @flow

import React, { useEffect, useCallback, useLayoutEffect } from "react";
import { View, FlatList, ActivityIndicator, StyleSheet } from "react-native";
import { useNavigation } from "@/navigation";
import { colors } from "@/themes";
import { useDispatch, useSelector } from "react-redux";
import { DeliveriesActionCreator as deliveriesActionCreator } from "@/redux/Deliveries/ActionCreator";
import { FinishDeliveriesActionCreator as finishDeliveriesActionCreator } from "@/redux/FinishDeliveries/ActionCreator";
import { DeliveriesItem } from "./DeliveriesItem";

const _renderItem = ({ item, deliveredItem }) => {
  return <DeliveriesItem item={item} deliveredItem={deliveredItem} />;
};

export function HomeScreen() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Deliveries",
    });
  }, [navigation]);

  const dispatch = useDispatch();
  const { deliveries, loading } = useSelector(
    (state) => state.deliveriesReducer,
  );
  const { finishDeliveries } = useSelector(
    (state) => state.finishDeliveriesReducer,
  );

  useEffect(() => {
    dispatch(deliveriesActionCreator());
    dispatch(finishDeliveriesActionCreator());
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
});
