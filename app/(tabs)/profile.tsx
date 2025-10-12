import React, { useState } from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";

export default function Profilepage() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: "#C7D7FF", paddingTop: 50 }}>
      <KeyboardAvoidingView>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Profile</Text>
          </View>

          <Image
            source={require("../../assets/images/people.jpeg")}
            style={styles.headerImg}
          />

          <Text style={styles.profileName}>Lim Yoong How</Text>

          <View style={styles.box}>
            <Text style={styles.label}>Username:</Text>
            <TextInput
              placeholder="Enter your name"
              style={styles._textInput}
            />

            <Text style={styles.label}>Email:</Text>
            <TextInput
              placeholder="Enter your email"
              style={styles._textInput}
            />

            <Text style={styles.label}>Password:</Text>
            <TextInput
              placeholder="Enter your password"
              style={styles._textInput}
              secureTextEntry
            />

            <Text style={styles.label}>Confirm Password:</Text>
            <TextInput
              placeholder="Enter your password again"
              style={styles._textInput}
              secureTextEntry
            />

            <Text style={styles.label}>Confirm Password:</Text>
            <TextInput
              placeholder="Enter your password again"
              style={styles._textInput}
              secureTextEntry
            />

            <Text style={styles.label}>Confirm Password:</Text>
            <TextInput
              placeholder="Enter your password again"
              style={styles._textInput}
              secureTextEntry
            />
          </View>
          <TouchableOpacity
            style={styles.btnLogout}
            onPress={() => router.replace("/")}
          >
            <Text style={styles.btnText}>Sign out</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 40,
  },

  header: {
    marginVertical: 20,
  },

  headerTitle: {
    color: "#8c92aaff",
    fontSize: 27,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 6,
  },

  headerImg: {
    height: 110,
    width: 110,
    alignSelf: "center",
    marginBottom: 36,
    borderRadius: 100,
  },

  profileName: {
    textAlign: "center",
    marginTop: -25,
    marginBottom: 10,
    fontSize: 24,
    fontWeight: "bold",
    color: "#656e9eff",
  },

  box: {
    width: "100%",
    padding: 25,
    borderRadius: 30,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 4,
    marginTop: 10,
  },

  label: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1B457C",
    marginTop: 10,
  },

  _textInput: {
    marginBottom: 8,
    marginTop: 5,
    height: 50,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#7b9ef6ff",
    fontSize: 16,
    paddingHorizontal: 10,
  },

  btnLogout: {
    padding: 12,
    borderWidth: 2,
    borderColor: "#7b9ef6ff",
    borderRadius: 25,
    width: "75%",
    alignSelf: "center",
    marginTop: 25,
    backgroundColor: "#e7eeffff",
  },

  btnText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600",
    color: "#1B457C",
  },
});
