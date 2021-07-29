import * as React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SelectDropdown from "react-native-select-dropdown";
import * as ImagePicker from "expo-image-picker";

import { updateProfile } from "../../store/actions/profileActions";

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
import { Image, View, Platform } from "react-native";

export default function UpdateProfile({ navigation }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const profiles = useSelector((state) => state.profiles.profiles);
  const profile = profiles.filter((p) => +p.userId === +user.id);

  const newProfile = {
    fullName: "",
    image: "",
    gender: "",
    userId: user.id,
  };

  const [_profile, setProfile] = useState(newProfile);

  const resetForm = () => {
    setProfile({
      fullName: "",
      image: "",
      gender: "",
      userId: user.id,
    });
  };

  const handelSubmit = (event) => {
    dispatch(updateProfile(_profile, navigation));

    resetForm();
  };

  const pickImage = async ({ navigation }) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      // ImagePicker saves the taken photo to disk and returns a local URI to it
      let localUri = result.uri;
      let filename = localUri.split("/").pop();

      // Infer the type of the image
      let match = /\.(\w+)$/.exec(filename);
      let type = match ? `image/${match[1]}` : `image`;

      setProfile({
        ..._profile,
        image: { uri: localUri, name: filename, type },
      });
    }
  };

  console.log(_profile);

  return (
    <>
      <NativeBaseProvider>
        <Box marginTop="150px" flex={1} p={2} w="90%" mx="auto">
          <Heading size="lg" color="black">
            Edit Profilr :
          </Heading>

          <VStack space={2} mt={5}>
            <FormControl>
              <FormControl.Label
                _text={{ color: "black", fontSize: "sm", fontWeight: 600 }}
              >
                Full Name :
              </FormControl.Label>
              <Input
                autoCapitalize="none"
                onChangeText={(fullName) =>
                  setProfile({ ..._profile, fullName })
                }
              />
            </FormControl>

            <FormControl>
              <FormControl.Label
                _text={{ color: "black", fontSize: "sm", fontWeight: 600 }}
              >
                Gender :
              </FormControl.Label>
              <SelectDropdown
                data={["Male", "Female", "Its complecated"]}
                onSelect={(gender) => setProfile({ ..._profile, gender })}
                buttonTextAfterSelection={(selectedItem) => {
                  return selectedItem;
                }}
                rowTextForSelection={(item) => {
                  return item;
                }}
              />
            </FormControl>

            <FormControl>
              <FormControl.Label
                _text={{ color: "black", fontSize: "sm", fontWeight: 600 }}
              >
                Image :
              </FormControl.Label>
              <Button
                onPress={pickImage}
                colorScheme="gray"
                _text={{ color: "white" }}
                width={"60%"}
              >
                Pick an image
              </Button>

              {_profile.image && (
                <Image
                  source={{ uri: _profile.image }}
                  style={{ width: 200, height: 200 }}
                />
              )}
            </FormControl>

            <VStack space={2}>
              <Button
                onPress={handelSubmit}
                colorScheme="emerald"
                _text={{ color: "white" }}
              >
                Update
              </Button>
            </VStack>
          </VStack>
        </Box>
      </NativeBaseProvider>
    </>
  );
}
