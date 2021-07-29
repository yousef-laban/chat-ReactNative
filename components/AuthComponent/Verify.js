import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import Toast from "react-native-toast-message";

import {
  NativeBaseProvider,
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  useToast,
  Center,
} from "native-base";
import { verify } from "../../store/actions/authActions";

export default function Verify({ navigation }) {
  const toast = useToast();

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const handelVerify = () => {
    dispatch(verify(user));
    toast.show({
      title: "Check Your Email ",
      status: "info",
    });
  };

  return (
    <>
      <NativeBaseProvider>
        <Box marginTop="150px" flex={1} p={2} w="90%" mx="auto">
          <Heading size="lg" color="#DFEEEA">
            Pleas Verify Your E-mail{" "}
          </Heading>

          <VStack space={2}>
            <Button
              onPress={handelVerify}
              colorScheme="emerald"
              _text={{ color: "white" }}
            >
              Verify
            </Button>
          </VStack>
        </Box>
      </NativeBaseProvider>
    </>
  );
}
