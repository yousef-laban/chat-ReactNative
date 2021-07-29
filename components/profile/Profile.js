import React from "react";
import { Center, Spinner } from "native-base";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/actions/authActions";

import { TopStyling, Title, ImageBackground } from "../../styles";

const Home = ({ navigation }) => {
  console.log("profile");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const profiles = useSelector((state) => state.profiles.profiles);
  const loading = useSelector((state) => state.profiles.loading);

  if (loading)
    return (
      <Center flex={1}>
        <Spinner color="blue" />
      </Center>
    );

  if (!user) return <></>;

  const wantedProfile = profiles.find((p) => +p.userId === user.id);

  const handelLogout = () => {
    dispatch(logout(navigation));
  };

  return (
    <>
      <View flex="4" style={styles.container}>
        <View style={styles.header}></View>
        <Image style={styles.avatar} source={{ uri: wantedProfile.image }} />
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.name}>Full Name :{wantedProfile.fullName}</Text>
            <Text style={styles.info}>Gender : {wantedProfile.gender}</Text>
            <Text style={styles.info}>Phone Num. :{user.phoneNum}</Text>
            <Text style={styles.info}>E-mail : {user.email}</Text>
          </View>
        </View>
      </View>

      <View flex="1">
        <Text
          onPress={() => navigation.navigate("UpdateProfile")}
          style={styles.Text2}
        >
          Edit Profile
        </Text>
        <Text onPress={handelLogout} style={styles.Text2}>
          Sign Out
        </Text>
      </View>
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
    marginBottom: "5%",
    padding: 10,
    fontSize: 20,
  },
  header: {
    backgroundColor: "#00BFFF",
    height: 200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    marginTop: 130,
  },
  name: {
    fontSize: 22,
    color: "#000000",
    fontWeight: "600",
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    alignItems: "center",
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: "#000000",
    fontWeight: "600",
  },
  info: {
    fontSize: 16,
    color: "#000000",
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: "#696969",
    marginTop: 10,
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: "#00BFFF",
  },

  Text3: {
    color: "#2f5d62",
    backgroundColor: "#DFEEEA",
    textAlign: "center",
    height: 50,
    borderRadius: 10,
    overflow: "hidden",
    width: "44%",
    padding: 10,
    fontSize: 20,
    // position: "absolute",
    // right: 12,
  },
});
