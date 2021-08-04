import * as React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

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
  HStack,
} from "native-base";

import { StyleSheet } from "react-native";
("react-nativ");
import SignUp from "./SignUp";
import { signin } from "../../store/actions/authActions";

export default function SignIn({ navigation }) {
  console.log("signin");
  const dispatch = useDispatch();

  const newUser = {
    username: "",
    password: "",
  };

  const resetForm = () => {
    setUser({
      username: "",
      password: "",
    });
  };

  const [user, setUser] = useState(newUser);

  const handelSubmit = () => {
    dispatch(signin(user, navigation));
  };

  return (
    <>
      <NativeBaseProvider>
        <Box marginTop="150px" flex={1} p={2} w="90%" mx="auto">
          <Heading size="lg" color="black">
            Welcome
          </Heading>
          <Heading color="grey" size="xs">
            Sign in to continue!
          </Heading>

          <VStack space={2} mt={5}>
            <FormControl>
              <FormControl.Label
                _text={{ color: "black", fontSize: "sm", fontWeight: 600 }}
              >
                User Name
              </FormControl.Label>
              <Input
                style={styles.input}
                color="black"
                autoCapitalize="none"
                onChangeText={(username) => setUser({ ...user, username })}
              />
            </FormControl>
            <FormControl mb={5}>
              <FormControl.Label
                _text={{ color: "black", fontSize: "sm", fontWeight: 600 }}
              >
                Password
              </FormControl.Label>
              <Input
                style={styles.input}
                color="black"
                type="password"
                onChangeText={(password) => setUser({ ...user, password })}
              />
            </FormControl>
            <VStack space={2}>
              <Button
                onPress={handelSubmit}
                colorScheme="emerald"
                _text={{ color: "white" }}
              >
                Login
              </Button>
            </VStack>
            <HStack justifyContent="center">
              <Text fontSize="sm" color="black" fontWeight={400}>
                new user?{" "}
              </Text>
              <Link
                _text={{ color: "emerald.500", bold: true, fontSize: "sm" }}
                onPress={() => navigation.navigate("SignUp")}
              >
                Sign Up
              </Link>
            </HStack>
          </VStack>
        </Box>
      </NativeBaseProvider>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: "black",
  },
});
