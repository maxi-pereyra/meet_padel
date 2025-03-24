import { Stack } from "expo-router";
import { Text, View } from "react-native";
import SignInScreen from "./signIn";
export default function AuthStack () {

  return (
    <Stack>
      <Stack.Screen name="logIn" options={{title:"logIn"}}/>
      <Stack.Screen name="signIn" options={{title: "signIn"}}/>
    </Stack>
  );
};