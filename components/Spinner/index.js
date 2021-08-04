import React from "react";

import { Center, Spinner } from "native-base";

const SpinnerCom = ({ navigation }) => {
  return (
    <Center flex={1}>
      <Spinner color="blue" />
    </Center>
  );
};

export default SpinnerCom;
