import React, { useEffect, useState } from "react";
import { View, StyleSheet, Button, Text, Pressable } from "react-native";
import { useRouter } from "expo-router";

export default function SignInScreen ()  {
 
  const router = useRouter()
  const [user,setUser] = useState(false)
  const handlersign = () => {
    setUser(true)
  }

  useEffect(()=>{
    if(user){
      router.replace('/(Appstack)')
    }
  },[user])
  return (
    <View style={styles.container}>
        <Pressable onPress={handlersign}>
          <Text>Sign In {user}</Text>
        </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});