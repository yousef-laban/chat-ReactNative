import React from "react";
import { NativeBaseProvider } from "native-base";

//
import { NavigationContainer } from "@react-navigation/native";
import HomeStackNavigator from "./Navigation/HomeStachNavigator";

// Redux
import { Provider } from "react-redux";
import store from "./store/index";
import UpdateProfile from "./components/profile/updateProfile";

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <HomeStackNavigator />
          {/* <UpdateProfile /> */}
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}
