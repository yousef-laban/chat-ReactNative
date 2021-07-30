import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, StyleSheet } from "react-native";

// components
import Profile from "../components/Profile/index";
import UpdateProfile from "../components/Profile/updateProfile";

const HomeStackNavigator = () => {
  const { Screen, Navigator } = createStackNavigator();

  return (
    <Navigator
      screenOptions={{
        headerTransparent: true,
        cardStyle: {
          backgroundColor: "white",
        },
      }}
    >
      <Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Screen name="UpdateProfile" component={UpdateProfile} />
    </Navigator>
  );
};

export default HomeStackNavigator;
