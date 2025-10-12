import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function EducationSetup() {
  const router = useRouter();
  const interests = [
    "Information Technology",
    "Infrastructure",
    "Innovation",
    "Investment",
    "Interior Design",
  ];

  const _16personality = [
    "INTJ",
    "INTP",
    "ENTJ",
    "ENTP",
    "INFJ",
    "INFP",
    "ENFJ",
    "ENFP",
    "ISTJ",
    "ISFJ",
    "ESTJ",
    "ESFJ",
    "ISTP",
    "ISFP",
    "ESTP",
    "ESFP",
  ];

  const [_interestInput, setInterestInput] = useState("");
  const [_personalityInput, setPersonalityInput] = useState("");
  const [showInterestSuggestions, setShowInterestSuggestions] = useState(false);
  const [showPersonalitySuggestions, setShowPersonalitySuggestions] =
    useState(false);

  //interest text input show card
  const filtered_interest = interests.filter((item) =>
    item.toLowerCase().includes(_interestInput.toLowerCase())
  );

  const handleSelectInterest = (item: string) => {
    setInterestInput(item);
    setShowInterestSuggestions(false);
  };

  //personality text input show card
  const filtered_personality = _16personality.filter((item) =>
    item.toLowerCase().includes(_personalityInput.toLowerCase())
  );

  const handleSelectPersonality = (item: string) => {
    setPersonalityInput(item);
    setShowPersonalitySuggestions(false);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#d9efffff" }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Let’s Get to Know You</Text>
        </View>

        {/* Content Box */}
        <View style={styles.box}>
          <Text style={styles.boxTitle}>Education</Text>
          <Text style={styles.label}>Education Level:</Text>

          {/* Input Field */}
          <View style={{ position: "relative" }}>
            <TextInput
              style={styles._textInput}
              placeholder="Enter your interest"
              value={_interestInput}
              onChangeText={(text) => {
                setInterestInput(text);
                setShowInterestSuggestions(true);
              }}
            />

            {/* Suggestion Dropdown */}
            {showInterestSuggestions && _interestInput.length > 0 && (
              <View style={styles.suggestionBox}>
                <FlatList
                  data={filtered_interest}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={styles.suggestion}
                      onPress={() => handleSelectInterest(item)}
                    >
                      <Text>{item}</Text>
                    </TouchableOpacity>
                  )}
                />
              </View>
            )}
          </View>

          <Text style={styles.label}>Field of study:</Text>

          {/* Input Field */}
          <View style={{ position: "relative" }}>
            <TextInput
              style={styles._textInput}
              placeholder="Enter your interest"
              value={_interestInput}
              onChangeText={(text) => {
                setInterestInput(text);
                setShowInterestSuggestions(true);
              }}
            />

            {/* Suggestion Dropdown */}
            {showInterestSuggestions && _interestInput.length > 0 && (
              <View style={styles.suggestionBox}>
                <FlatList
                  data={filtered_interest}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={styles.suggestion}
                      onPress={() => handleSelectInterest(item)}
                    >
                      <Text>{item}</Text>
                    </TouchableOpacity>
                  )}
                />
              </View>
            )}
          </View>
          <Text style={styles.label}>Academic Result:</Text>
          <View style={{ position: "relative" }}>
            <TextInput
              style={styles._textInput}
              placeholder="Enter your Mbti"
              value={_personalityInput}
              onChangeText={(text) => {
                setPersonalityInput(text);
                setShowPersonalitySuggestions(true);
              }}
            />

            {/* Suggestion Dropdown */}
            {showPersonalitySuggestions && _personalityInput.length > 0 && (
              <View style={styles.suggestionBox}>
                <FlatList
                  data={filtered_personality}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={styles.suggestion}
                      onPress={() => handleSelectPersonality(item)}
                    >
                      <Text>{item}</Text>
                    </TouchableOpacity>
                  )}
                />
              </View>
            )}
          </View>

          {/* Button */}
          <TouchableOpacity
            style={styles.btnNext}
            onPress={() => router.push("/careerProfile")}
          >
            <Text style={styles.btnText}>Next</Text>
          </TouchableOpacity>
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
    marginVertical: 30,
    marginTop: 70,
  },
  headerTitle: {
    color: "#8BA0FF",
    fontSize: 27,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 6,
  },

  boxTitle: {
    color: "#446cffff",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 6,
    paddingBottom: 10,
  },

  box: {
    width: "100%",
    height: "68%",
    padding: 20,
    borderRadius: 12,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 4,
    marginTop: -10,
  },
  label: {
    fontSize: 20,
    fontWeight: "600",
    color: "#1B457C",
  },
  backBtn: {
    position: "absolute",
    top: 40,
    left: 20,
    padding: 8,
  },
  btnNext: {
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
    height: 50,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#7b9ef6ff",
    fontSize: 16,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  suggestionBox: {
    position: "absolute",
    top: 55,
    width: "100%",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    zIndex: 10,
    maxHeight: 120,
    elevation: 6,
  },
  suggestion: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
});
