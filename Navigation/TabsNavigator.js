import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

// componenets
import ProfilrStackNavigator from "./ProfilrStackNavigator";
import ChatStackNavigator from "./ChatStackNavigator";

const Tab = createBottomTabNavigator();

export default function TabsNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "ProfilrStackNavigator")
            return <FontAwesome name="user-circle-o" size={30} color={color} />;
          if (route.name === "ChatStackNavigator")
            return <Ionicons name="chatbox-ellipses" size={30} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "blue",
        inactiveTintColor: "black",
        showLabel: false,
        style: {
          backgroundColor: "#DEEDF0",
        },
      }}
    >
      <Tab.Screen name="ChatStackNavigator" component={ChatStackNavigator} />
      <Tab.Screen
        name="ProfilrStackNavigator"
        component={ProfilrStackNavigator}
      />
    </Tab.Navigator>
  );
}
