import { Slot } from "expo-router";
import { AuthenticatedUserProvider } from "@/context/AppUserContext";

export default function RootLayout() {
  return (
    <AuthenticatedUserProvider>
      <Slot />
    </AuthenticatedUserProvider>
  );
}