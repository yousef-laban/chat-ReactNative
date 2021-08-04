import { Text, View, Card, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";

import { Box, Icon, Image, Avatar } from "native-base";

const Message = ({ navigation, message }) => {
  const users = useSelector((state) => state.user.users);
  const _user = useSelector((state) => state.user.user);
  const user = users.find((user) => +user.id === +message.userId);

  return (
    <View alignItems={_user.id === message.userId ? "flex-end" : "flex-start"}>
      <Box
        bg="#EDF6E5"
        shadow={9}
        rounded="lg"
        maxWidth="75%"
        height="50px"
        flexDirection={_user.id === message.userId ? "row-reverse" : "row"}
        margin={2}
      >
        <Avatar
          style={styles.profile}
          size="sm"
          source={{
            uri: user.profile.image,
          }}
        />

        <View padding={16}>
          <Text>{message.text}</Text>
        </View>
      </Box>
    </View>
  );
};
export default Message;

const styles = StyleSheet.create({
  profile: {
    margin: "3%",
  },
});
