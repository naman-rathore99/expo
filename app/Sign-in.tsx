import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import icons from "@/constants/icons";

const SignIn = () => {
  const handleLogin = () => {
    console.log("Pressed");
  };
  return (
    <SafeAreaView className="bg-accent-100 h-full">
      <ScrollView contentContainerClassName="h-full">
        <Image
          source={images.onboarding}
          className="w-full h-4/6 "
          resizeMode="contain"
        />
        <View className="px-10">
          <Text className="text-base text-center uppercase font-rubik text-black-200 ">
            Welcome to Real Estate
          </Text>
          <Text className="text-3xl text-center capitalize font-rubikBold text-black-300 mt-2 ">
            Lets get you close {"\n"}
            <Text className="text-primary-300 "> what you looking for</Text>
          </Text>
          <Text className="text-xl font-rubik text-center mt-10 ">
            {" "}
            Login to app
          </Text>

          <TouchableOpacity
            onPress={handleLogin}
            className="shadow-md shadow-zink-300 bg-accent-100 rounded-full w-full py-4  mt-5"
          >
            <View className="flex-row flex justify-center items-center mt-2 ">
              <Image
                source={icons.google}
                className="w-4 h-4"
                resizeMode="contain"
              />
              <Text className="text-base font-rubik text-black-200 ml-3">
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
