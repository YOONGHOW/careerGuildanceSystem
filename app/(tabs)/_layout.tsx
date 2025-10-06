import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="career" options={{ title: "Career" }} />
      <Tabs.Screen name="course" options={{ title: "Course" }} />
      <Tabs.Screen name="mock_interview" options={{ title: "Interview" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}
