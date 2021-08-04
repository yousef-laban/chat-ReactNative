import React from "react";
import { Text, StyleSheet } from "react-native";
import { Center, Spinner } from "native-base";

import { useSelector } from "react-redux";

import { TopStyling, Title, ImageBackground } from "../styles";

const Home = ({ navigation }) => {
  return (
    <>
      <TopStyling>
        <Title> chattie </Title>
      </TopStyling>

      <Text onPress={() => navigation.navigate("SignIn")} style={styles.Text2}>
        Sign IN
      </Text>

      <ImageBackground
        source={{
          uri: "https://www.shareicon.net/data/2015/08/10/83196_chat_1024x1024.png",
        }}
      />
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  Text2: {
    color: "#2f5d62",
    backgroundColor: "#EDF6E5",
    textAlign: "center",
    height: 50,
    borderRadius: 10,
    overflow: "hidden",
    width: "44%",
    marginLeft: "28%",
    padding: 10,
    fontSize: 20,
  },
});
