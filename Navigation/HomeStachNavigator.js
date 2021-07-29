import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";

// components
import Home from "../components/Home";
import SignIn from "../components/AuthComponent/SignIn";
import SignUp from "../components/AuthComponent/SignUp";
import TabsNavigator from "./TabsNavigator";
import Verify from "../components/AuthComponent/Verify";

const HomeStackNavigator = () => {
  const user = useSelector((state) => state.user.user);

  const { Screen, Navigator } = createStackNavigator();

  return (
    <Navigator
      screenOptions={{
        headerTransparent: true,
        cardStyle: {
          backgroundColor: "#2f5d62",
        },
      }}
    >
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUp" component={SignUp} />
      <Screen
        name="Verify"
        component={Verify}
        options={{ headerShown: false }}
      />

      <Screen
        name="TabsNavigator"
        component={TabsNavigator}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};

export default HomeStackNavigator;
