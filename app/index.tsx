import React, { useState } from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CareerScreen() {
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const router = useRouter();

  function handleLogin() {
    // after login success, go to tabs/home
    router.replace("/(tabs)");
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#d9efffff" }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Sign In</Text>
          <Image
            source={require("../assets/images/logo.png")}
            style={styles.headerImg}
            alt="logo"
          />
          <Text style={styles.logoName}>SPACE</Text>
          <Text style={styles.systemName}>AI Career Guidance System</Text>
          <Text></Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.label}>Email: </Text>
          <TextInput placeholder="Enter your email" style={styles._textInput} />
          <Text style={styles.label}>Password: </Text>
          <TextInput
            placeholder="Enter your password"
            style={styles._textInput}
            onChangeText={setPassword}
            value={password}
            secureTextEntry={hidePassword}
          />
          <TouchableOpacity style={styles.btnLogin} onPress={handleLogin}>
            <Text style={styles.btnText}>Login</Text>
          </TouchableOpacity>
          <Text style={styles.forgotPswLabel}>Forgot Password ?</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
  },
  header: {
    marginVertical: 36,
  },
  headerImg: {
    height: 150,
    width: 150,
    alignSelf: "center",
    marginBottom: 36,
  },
  headerTitle: {
    color: "#8BA0FF",
    fontSize: 27,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 6,
  },
  logoName: {
    textAlign: "center",
    marginTop: -40,
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "serif",
  },
  systemName: {
    textAlign: "center",
    marginTop: 1,
    fontSize: 15,
    color: "#496affff",
    fontFamily: "serif",
  },

  box: {
    width: "100%",
    height: "50%",
    padding: 30,
    borderRadius: 12,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 4,
    marginTop: -25,
  },
  label: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1B457C",
  },
  forgotPswLabel: {
    fontSize: 15,
    textAlign: "right",
    color: "#4a60c0ff",
    marginTop: 30,
  },

  btnLogin: {
    padding: 10,
    borderWidth: 2,
    borderColor: "#7b9ef6ff",
    borderRadius: 30,
    width: "75%",
    alignSelf: "center",
    marginTop: 25,
    backgroundColor: "#e7eeffff",
  },

  btnText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
    color: "#1B457C",
  },

  _textInput: {
    marginBottom: 8,
    marginTop: 10,
    height: "17%",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#7b9ef6ff",
    fontSize: 16,
  },
});
