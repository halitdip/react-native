import React from "react";
import RootNavigation from "./src/navigation/rootNavigation";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';


import { store, persistor } from "./src/redux/store";
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootNavigation />
      </PersistGate>
    </Provider>
  );
}

