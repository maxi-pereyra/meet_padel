import { useEffect, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";
//import { useAuth } from "@/context/AppUserContext"; // Contexto de autenticación
import { useRouter } from "expo-router";

export default function IndexScreen() {
  const [ user,setUser]  = useState(true);
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Marca que el componente ya está montado
  }, []);

  useEffect(() => {
    if (!isMounted) return; // Evita redirección prematura

    if (user !== undefined) {
      router.replace(user ? "/(Appstack)" : "/(AuthStack)/logIn");
    }
  }, [user, isMounted]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" color="#0000ff" />
      <Text>Verificando sesión...</Text>
    </View>
  );
}
