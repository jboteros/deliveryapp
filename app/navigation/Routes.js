// @flow
import React, { useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { routes } from "@/navigation";
import { colors } from "@/themes";
import { HomeScreen } from "@/screens/HomeScreen";
import { SingleDelivery } from "@/screens/SingleDelivery";
import { createStackNavigator } from "@react-navigation/stack";

const RootStack = createStackNavigator();

const headerStyle = {
  backgroundColor: colors.primary,
  borderBottomWidth: 0,
  elevation: 0,
  shadowOpacity: 0,
  shadowOffset: {
    height: 0,
  },
  shadowRadius: 0,
};

export function Routes() {
  const navigationRef = useRef();

  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator
        screenOptions={{
          headerTitleAlign: "center",
          headerTintColor: "#fff",
          headerBackTitle: "Back",
          headerTruncatedBackTitle: "",
          headerStyle: headerStyle,
          headerTitleStyle: {
            fontSize: 17,
            fontWeight: "bold",
          },
        }}>
        <RootStack.Screen name={routes.HOME} component={HomeScreen} />
        <RootStack.Screen
          name={routes.SINGLE_DELIVERY}
          component={SingleDelivery}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
