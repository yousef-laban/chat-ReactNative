import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Center, Spinner, Input, Icon, Avatar, ScrollView } from "native-base";
import { Feather } from "@expo/vector-icons";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import { TopStyling, Title, ImageBackground } from "../../styles";
import { flexDirection, style } from "styled-system";

// component
import Message from "./Message";
import SpinnerCom from "../Spinner";
import { creatMessage } from "../../store/actions/messageActions";

const ChatRoom = ({ navigation, route }) => {
  const dispatch = useDispatch();

  const { wanted } = route.params;

  const messages = useSelector((state) => state.messages.messages);
  const loading = useSelector((state) => state.messages.loading);
  const _user = useSelector((state) => state.user.user);
  const users = useSelector((state) => state.user.users);
  const [message, setMessage] = useState("");

  if (!wanted) return <></>;
  const groupId = wanted.id;

  if (loading) return <SpinnerCom />;

  const filteredMessages = messages
    .filter((message) => +message.groupId === +groupId)

    .map((message) => <Message style={styles.message} message={message} />);

  let name = "";
  let wantedUser = {};

  if (wanted.name) name = wanted.name;
  else {
    wanted.users.forEach((user) => {
      if (+user.userId !== +_user.id) {
        wantedUser = users.find((fuser) => +fuser.id === +user.userId);
        name = wantedUser.username;
      }
    });
  }

  const newMessage = {
    text: message,
    groupId: wanted.id,
    userId: _user.id,
  };

  const handelClick = () => {
    dispatch(creatMessage(newMessage));
    resertField();
  };

  const resertField = () => {
    setMessage({
      text: "",
    });
  };

  return (
    <>
      <View style={styles.top}>
        <Avatar
          style={styles.profile}
          size="lg"
          source={{
            uri: wanted.name ? wanted.image : wantedUser.profile.image,
          }}
        />
        <Text style={styles.name}>{name}</Text>
      </View>
      <ScrollView>
        <View style={styles.chat}>{filteredMessages}</View>
      </ScrollView>

      <View style={styles.footer}>
        <Input
          style={styles.input}
          variant="filled"
          placeholder="Pleas enter Your text"
          onChangeText={(text) => setMessage(text)}
          value={message.text}
        />
        <Feather
          onPress={handelClick}
          style={styles.send}
          name="send"
          size={35}
          color="black"
        />
      </View>
    </>
  );
};

export default ChatRoom;

const styles = StyleSheet.create({
  input: {
    borderRadius: 10,
    overflow: "hidden",
    width: "80%",
    fontSize: 20,
    margin: "2%",
    backgroundColor: "#EDF6E5",
  },

  send: {
    width: "20%",
    margin: "2.5%",
  },

  top: {
    height: "13%",
    backgroundColor: "#B5EAEA",
    flexDirection: "row",
    marginTop: "15%",
    borderBottomColor: "black",
    borderBottomWidth: 0.5,
  },

  chat: {
    height: "80%",
    marginTop: "2%",
  },

  footer: {
    flexDirection: "row",
    height: "8%",
  },

  profile: {
    margin: "3%",
  },

  name: {
    margin: "3%",
    fontSize: 18,
    fontWeight: "bold",
    width: "70%",
    textAlign: "left",
    marginTop: "8%",
    color: "black",
  },

  message: {
    alignItems: "flex-end",
  },
});
