import React from "react";
import { View, StyleSheet, Button, Text } from "react-native";
import { Redirect } from "expo-router";

export default function HomeScreen ()  {
 const user = false

 if (!user) {
  return <Redirect href="/logIn" />;
}
  return (
    <View style={styles.container}>
      <Button title="Sign Out"  />
      <Text>HomeScreen </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});