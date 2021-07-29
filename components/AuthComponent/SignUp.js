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
import { SIGN_IN } from "../../Navigation/types";
import SignIn from "./SignIn";
import { signup } from "../../store/actions/authActions";

export default function SignUp({ navigation }) {
  const dispatch = useDispatch();

  const newUser = {
    username: "",
    password: "",
    email: "",
    phoneNum: "",
  };

  const [user, setUser] = useState(newUser);

  const resetForm = () => {
    setUser({
      username: "",
      password: "",
      email: "",
      phoneNum: "",
    });
  };

  const handelSubmit = () => {
    dispatch(signup(user, navigation));
    resetForm();
  };

  return (
    <>
      <NativeBaseProvider>
        <Box marginTop="75px" flex={1} p={2} w="90%" mx="auto">
          <Heading size="lg" color="#DFEEEA">
            Welcome
          </Heading>
          <Heading color="#A7C4BC" size="xs">
            Sign Up to continue!
          </Heading>

          <VStack space={2} mt={5}>
            <FormControl>
              <FormControl.Label
                _text={{ color: "#DFEEEA", fontSize: "sm", fontWeight: 600 }}
              >
                User Name :{" "}
              </FormControl.Label>
              <Input
                autoCapitalize="none"
                onChangeText={(username) => setUser({ ...user, username })}
              />
            </FormControl>
            <FormControl>
              <FormControl.Label
                _text={{ color: "#DFEEEA", fontSize: "sm", fontWeight: 600 }}
              >
                Password
              </FormControl.Label>
              <Input
                type="password"
                onChangeText={(password) => setUser({ ...user, password })}
              />
            </FormControl>

            <FormControl>
              <FormControl.Label
                _text={{ color: "#DFEEEA", fontSize: "sm", fontWeight: 600 }}
              >
                E-mail
              </FormControl.Label>
              <Input
                autoCapitalize="none"
                onChangeText={(email) => setUser({ ...user, email })}
              />
            </FormControl>
            <FormControl>
              <FormControl.Label
                _text={{ color: "#DFEEEA", fontSize: "sm", fontWeight: 600 }}
              >
                Phone Num. :
              </FormControl.Label>
              <Input
                autoCapitalize="none"
                onChangeText={(phoneNum) => setUser({ ...user, phoneNum })}
              />
            </FormControl>

            <VStack space={2}>
              <Button
                onPress={handelSubmit}
                colorScheme="emerald"
                _text={{ color: "white" }}
              >
                Sign Up
              </Button>
            </VStack>
            <HStack justifyContent="center">
              <Text fontSize="sm" color="#DFEEEA" fontWeight={400}>
                Already A User .
              </Text>
              <Link
                _text={{ color: "emerald.500", bold: true, fontSize: "sm" }}
                onPress={() => navigation.navigate(SignIn)}
              >
                Sign In
              </Link>
            </HStack>
          </VStack>
        </Box>
      </NativeBaseProvider>
    </>
  );
}
