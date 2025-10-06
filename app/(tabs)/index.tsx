// app/tabs/index.tsx
import { View, Text, StyleSheet } from "react-native";

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏠 Home Page</Text>
      <Text style={styles.subtitle}>Welcome! You are logged in.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "gray",
  },
});
