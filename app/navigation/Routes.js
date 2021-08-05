// @flow
import React, { useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { routes } from "@/navigation";
import { HomeScreen } from "@/screens/HomeScreen";
import { SingleDelivery } from "@/screens/SingleDelivery";
import { createStackNavigator } from "@react-navigation/stack";

const RootStack = createStackNavigator();

export function Routes() {
  const navigationRef = useRef();

  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator>
        <RootStack.Screen
          name={routes.HOME}
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name={routes.SINGLE_DELIVERY}
          component={SingleDelivery}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
