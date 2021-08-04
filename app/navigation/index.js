// @flow

import React from "react";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Routes } from "./Routes";

export function Providers() {
  return (
    <SafeAreaProvider>
      <ActionSheetProvider>
        <Routes />
      </ActionSheetProvider>
    </SafeAreaProvider>
  );
}

export * as routes from "./routeNames";
export { createStackNavigator } from "@react-navigation/stack";
export { useNavigation, useFocusEffect } from "@react-navigation/native";
export type { RouteProp } from "@react-navigation/native";
export {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
