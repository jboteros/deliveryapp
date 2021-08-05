// @flow

import React from "react";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import { Providers } from "@/navigation";
import { store } from "@/redux/Store";

export function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" />
      <Providers />
    </Provider>
  );
}
