import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";

// components
import ChatList from "../components/Chat/ChatList";
import ChatRoom from "../components/Chat/ChatRoom";

const ChatStackNavigator = () => {
  const user = useSelector((state) => state.user.user);

  const { Screen, Navigator } = createStackNavigator();

  return (
    <Navigator
      screenOptions={{
        headerTransparent: true,
        showLabel: false,

        cardStyle: {
          backgroundColor: "#B5EAEA",
        },
      }}
    >
      <Screen
        name="ChatList"
        component={ChatList}
        options={{ headerShown: false }}
      />
      <Screen name="ChatRoom" component={ChatRoom} />
    </Navigator>
  );
};

export default ChatStackNavigator;
