import React from "react";
import { Text, StyleSheet } from "react-native";
import { Center, Spinner } from "native-base";

import { useSelector } from "react-redux";

import { TopStyling, Title, ImageBackground } from "../styles";

const Home = ({ navigation }) => {
  const user = useSelector((state) => state.user.user);
  console.log("Home");
  console.log(user);

  if (user) {
    if (user.verify === false) navigation.navigate("Verify");
    else navigation.navigate("TabsNavigator");
  }

  return (
    <>
      <TopStyling>
        <Title> chattie </Title>
      </TopStyling>

      <Text onPress={() => navigation.navigate("SignIn")} style={styles.Text2}>
        Sign IN
      </Text>

      <ImageBackground source={require("../pic/logo.png")} />
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  Text2: {
    color: "#2f5d62",
    backgroundColor: "#DFEEEA",
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
