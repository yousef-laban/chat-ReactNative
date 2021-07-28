import React from "react";
import { Button } from "react-native";

import { TopStyling, Title, ImageBackground } from "../../styles";
// import { SHOP_LIST } from "./Navigation/types";

const Home = ({ navigation }) => {
  return (
    <>
      <TopStyling>
        <Title> yousef </Title>
      </TopStyling>

      {/* <Button
        onPress={() => navigation.navigate(SHOP_LIST)}
        title="Check Our Shops"
        color="#dfeeea"
      /> */}

      <ImageBackground
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Yousef_Erakat_by_Adam_Hendershott.jpg/220px-Yousef_Erakat_by_Adam_Hendershott.jpg",
        }}
      />
    </>
  );
};

export default Home;
