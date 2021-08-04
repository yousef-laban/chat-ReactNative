import React from "react";
import { NativeBaseProvider } from "native-base";

//
import { NavigationContainer } from "@react-navigation/native";
import HomeStackNavigator from "./Navigation/HomeStachNavigator";

// Redux
import { Provider } from "react-redux";
import store from "./store/index";
import ChatRoom from "./components/Chat/ChatRoom";
import ChatList from "./components/Chat/ChatList";

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <HomeStackNavigator />
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}
