import React from "react";
import { Button } from "react-native";

import { TopStyling, Title, ImageBackground } from "../styles";
// import { SHOP_LIST } from "./Navigation/types";

const Home = ({ navigation }) => {
  return (
    <>
      <TopStyling>
        <Title> chattie </Title>
      </TopStyling>

      {/* <Button
        onPress={() => navigation.navigate(SHOP_LIST)}
        title="Check Our Shops"
        color="#dfeeea"
      /> */}

      <ImageBackground source={require("../pic/logo.png")} />
    </>
  );
};

export default Home;
