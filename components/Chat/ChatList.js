import React from "react";
import { ScrollView } from "native-base";
import { View, Text, StyleSheet, Alert, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { Title } from "../../styles";
import { fetchAllMessages } from "../../store/actions/messageActions";

//component
import ChatCard from "./ChatCard";
import SpinnerCom from "../Spinner";

const ChatList = ({ navigation }) => {
  const dispatch = useDispatch();

  const _user = useSelector((state) => state.user.user);
  const users = useSelector((state) => state.user.users);
  const loading = useSelector((state) => state.user.loading);
  const groups = useSelector((state) => state.groups.groups);
  const loading2 = useSelector((state) => state.groups.loading);
  const user = users.find((user) => +_user.id === +user.id);

  const [wanted, setWanted] = useState(null);

  const MINUTE_MS = 2000;

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(fetchAllMessages());
    }, MINUTE_MS);

    return () => clearInterval(interval);
  }, []);

  if (loading || loading2) return <SpinnerCom />;

  const filteredList = groups
    .filter((group) => {
      let keep = false;
      group.users.forEach((user) => {
        if (user.userId === _user.id) keep = true;
      });
      return keep;
    })
    .map((group) => (
      <TouchableOpacity
        onPress={() => {
          setWanted(group);
          navigation.navigate("ChatRoom", { wanted: group });
        }}
      >
        <ChatCard group={group} user={user} />
      </TouchableOpacity>
    ));

  return (
    <>
      <Title> Chats </Title>
      <ScrollView>
        <View flexDirection="column">{filteredList}</View>
      </ScrollView>
    </>
  );
};

export default ChatList;
