import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import * as Speech from "expo-speech";

export default function VoiceSupport() {
  const [text, setText] = React.useState("Welcome to the tourist safety app!");

  const speak = () => Speech.speak(text);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Voice Support</Text>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Enter text to speak"
      />
      <TouchableOpacity style={styles.button} onPress={speak}>
        <Text style={styles.buttonText}>Speak</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#3498db",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
