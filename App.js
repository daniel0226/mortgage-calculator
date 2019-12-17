import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { StyleSheet } from "react-native";
import mainReducer from "./app/reducers/index.js";
import Application from "./app/index.js";
import { Text, View } from "react-native";

const store = createStore(mainReducer);

const App = () => (
  <Provider store={store}>
    <Application />
  </Provider>
);

export default App;
