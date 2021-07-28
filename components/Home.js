import React from "react";
import { Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import { TopStyling, Title, ImageBackground } from "../styles";

const Home = ({ navigation }) => {
  const user = useSelector((state) => state.user.user);

  if (user) navigation.navigate("TabsNavigator");

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
