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
            {/*Education */}
            <Text style={styles.subheader}>Education</Text>
            <View
              style={{
                height: 2,
                backgroundColor: "#ccc",
                width: "100%",
                marginVertical: 12,
              }}
            />
            <Text style={styles.label}>Education Level:</Text>
            <Text style={styles.profileData}>
              Diploma in Information technology
            </Text>
            <Text style={styles.label}>Field of study:</Text>
            <Text style={styles.profileData}>Information Technology</Text>
            <Text style={styles.label}>Academic Result:</Text>
            <Text style={styles.profileData}>CGPA 3.27</Text>

            {/*Career Profile */}
            <Text style={styles.subheader}>Skill</Text>
            <View
              style={{
                height: 2,
                backgroundColor: "#ccc",
                width: "100%",
                marginVertical: 12,
              }}
            />
            <View style={styles.skillContainer}>
              <Text style={styles.skillData}>Python AI programming</Text>
              <Text style={styles.skillData}>PHP Programming</Text>
              <Text style={styles.skillData}>AWS Cloud Service</Text>
              <Text style={styles.skillData}>React Native</Text>
              <Text style={styles.skillData}>Machine Learning</Text>
            </View>

            {/*Career History */}
            <Text style={styles.subheader}>Career History</Text>
            <View
              style={{
                height: 2,
                backgroundColor: "#ccc",
                width: "100%",
                marginVertical: 12,
              }}
            />
            <View style={styles.careerHisotryContainer}>
              <View style={styles.careerHistoryBox}>
                <Text style={styles.careerData}>
                  Computer Technician Intern
                </Text>
                <Text style={styles.careerData}>C.T. Technology Sdn.Bhd</Text>
                <Text style={styles.careerData}>Nov 2023 - Jan 2024</Text>
              </View>
              <View style={styles.careerHistoryBox}>
                <Text style={styles.careerData}>
                  Software Engineering Intern
                </Text>
                <Text style={styles.careerData}>ABC Wtt Sdn. sBhd</Text>
                <Text style={styles.careerData}>Nov 2023 - Jan 2024</Text>
              </View>
            </View>

            {/*Language */}
            <Text style={styles.subheader}>Languages</Text>
            <View
              style={{
                height: 2,
                backgroundColor: "#ccc",
                width: "100%",
                marginVertical: 12,
              }}
            />
            <View style={styles.languageContainer}>
              <Text style={styles.language}>Bahasa Malaysia</Text>
              <Text style={styles.language}>English</Text>
              <Text style={styles.language}>Chinese - Mandarin</Text>
            </View>
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
  // Profile data
  subheader: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#003bb1ff",
    marginTop: 12,
    textAlign: "center",
  },

  label: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1B457C",
    marginTop: 10,
  },

  profileData: {
    fontSize: 18,
    fontWeight: "500",
    color: "#868686ff",
    marginTop: 10,
  },

  //Skill Profile

  skillContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 10,
  },

  skillData: {
    backgroundColor: "#E7EEFF",
    color: "#1B457C",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    fontSize: 17,
    fontWeight: "500",
  },

  //Career History Box

  careerHisotryContainer: {
    flexDirection: "column",
    gap: 15,
    marginTop: 10,
  },

  careerHistoryBox: {
    borderWidth: 2,
    backgroundColor: "#f5f8ffff",
    paddingVertical: 7,
    paddingHorizontal: 13,
    borderRadius: 20,
    borderColor: "#a5cafeff",
  },

  careerData: {
    padding: 1,
    fontSize: 18,
    fontWeight: "500",
    color: "#1B457C",
  },

  //Language containers
  languageContainer: {
    flexDirection: "column",
    gap: 10,
    marginTop: 10,
  },

  language: {
    padding: 1,
    fontSize: 18,
    fontWeight: "500",
    color: "#1B457C",
    backgroundColor: "#E7EEFF",
    paddingVertical: 7,
    paddingHorizontal: 13,
    borderRadius: 20,
  },

  // Button Logout
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
