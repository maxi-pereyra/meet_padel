import { Stack } from "expo-router";
export default function AuthStack () {

  return (
    <Stack>
      <Stack.Screen name="logIn" options={{title:"logIn"}}/>
      <Stack.Screen name="signIn" options={{title: "signIn"}}/>
    </Stack>
  );
};