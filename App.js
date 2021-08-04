// @flow

import React from "react";
import { Provider } from "react-redux";
import { Providers } from "@/navigation";
import { store } from "@/redux/Store";

export function App() {
  return (
    <Provider store={store}>
      <Providers />
    </Provider>
  );
}
