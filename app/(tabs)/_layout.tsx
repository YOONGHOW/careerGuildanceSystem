import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Login page (default) */}
      <Stack.Screen name="index" />

      {/* Tabs group */}
      <Stack.Screen name="tabs" />
    </Stack>
  );
}
