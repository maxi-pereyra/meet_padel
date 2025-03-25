import { Slot } from "expo-router";
import { AuthenticatedUserProvider } from "@/providers";

export default function RootLayout() {
  return (
    <AuthenticatedUserProvider>
      <Slot />
    </AuthenticatedUserProvider>
  );
}