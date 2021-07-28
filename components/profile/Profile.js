import React from "react";
import { Button } from "react-native";
import { Text, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { logout } from "../../store/actions/authActions";

import { TopStyling, Title, ImageBackground } from "../../styles";

const Home = ({ navigation }) => {
  const dispatch = useDispatch();

  const handelLogout = () => {
    dispatch(logout(navigation));
  };

  return (
    <>
      <TopStyling>
        <Title> yousef </Title>
      </TopStyling>

      <ImageBackground
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Yousef_Erakat_by_Adam_Hendershott.jpg/220px-Yousef_Erakat_by_Adam_Hendershott.jpg",
        }}
      />
      <Text onPress={handelLogout} style={styles.Text2}>
        Sign Out
      </Text>
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
