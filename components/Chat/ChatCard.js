import { Text, View, Card, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";

import { Box, Icon, Image, Avatar } from "native-base";

const ChatCard = ({ navigation, group, user }) => {
  const users = useSelector((state) => state.user.users);
  const _user = useSelector((state) => state.user.user);

  let name = "";

  if (group.name) name = group.name;
  else {
    group.users.forEach((user) => {
      if (+user.userId !== +_user.id) {
        const wanted = users.find((fuser) => +fuser.id === +user.userId);
        name = wanted.username;
      }
    });
  }

  const user1 = users.find((user) => name === user.username);

  return (
    <Box
      bg="#EEEEEE"
      shadow={9}
      rounded="lg"
      maxWidth="100%"
      height="100px"
      flexDirection="row"
      margin={1}
    >
      <Avatar
        style={styles.profile}
        size="lg"
        source={{
          uri: `${group.name ? group.image : user1.profile.image}`,
        }}
      />

      <View>
        <Text style={styles.text}>{name}</Text>
      </View>
    </Box>
  );
};
export default ChatCard;

const styles = StyleSheet.create({
  profile: {
    margin: "5%",
  },
  text: {
    padding: "10%",
    fontSize: 20,
  },
});
