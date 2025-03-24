import { Stack } from "expo-router";

export default function RootLayout () {
  
  return (
    <Stack>
          <Stack.Screen name="(AuthStack)" options={{ headerShown: false}}/>
    </Stack>
  );
};