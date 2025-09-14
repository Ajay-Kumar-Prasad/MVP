import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function TouristHome({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tourist Home</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("QRCodeScreen")}
      >
        <Text style={styles.buttonText}>Scan QR Code</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#f39c12" }]}
        onPress={() => navigation.navigate("Safety")}
      >
        <Text style={styles.buttonText}>Safety Features</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 30 },
  button: {
    backgroundColor: "#3498db",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
