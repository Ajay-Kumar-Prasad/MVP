import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Switch, Alert, Button } from "react-native";

export default function Safety({ navigation }) {
  const [shareWithPolice, setShareWithPolice] = useState(false);
  const [shareWithFamily, setShareWithFamily] = useState(false);

  const simulateZoneEntry = () => {
    Alert.alert(
      "⚠️ Restricted Zone",
      "You are near a restricted zone. Confirm if you are entering?",
      [
        { text: "This is Incorrect", onPress: () => Alert.alert("✅ Feedback noted!") },
        { text: "Yes, Entering", onPress: () => Alert.alert("🚨 Police Notified!") },
      ]
    );
  };

  const panicAlert = () => {
    Alert.alert(
      "🚨 Panic Alert",
      `Emergency contacts notified!\nPolice: ${shareWithPolice ? "Enabled" : "Disabled"}\nFamily: ${shareWithFamily ? "Enabled" : "Disabled"}`
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Safety Settings</Text>

      <View style={styles.toggle}>
        <Text style={styles.toggleText}>Share Location with Police</Text>
        <Switch value={shareWithPolice} onValueChange={setShareWithPolice} />
      </View>

      <View style={styles.toggle}>
        <Text style={styles.toggleText}>Share Location with Family</Text>
        <Switch value={shareWithFamily} onValueChange={setShareWithFamily} />
      </View>

      <TouchableOpacity style={styles.panicButton} onPress={panicAlert}>
        <Text style={styles.panicText}>🚨 Panic Button</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.zoneButton} onPress={simulateZoneEntry}>
        <Text style={styles.zoneText}>Simulate Restricted Zone Alert</Text>
      </TouchableOpacity>

      {/* Button to go back to SafetyScore */}
      <View style={{ marginTop: 20 }}>
        <Button title="Back to Safety Score" onPress={() => navigation.navigate("SafetyScore")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f5f5f5" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 25, textAlign: "center" },
  toggle: { flexDirection: "row", justifyContent: "space-between", marginBottom: 20, paddingHorizontal: 10 },
  toggleText: { fontSize: 16 },
  panicButton: { backgroundColor: "red", padding: 20, borderRadius: 12, alignItems: "center", marginTop: 30 },
  panicText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  zoneButton: { backgroundColor: "#007AFF", padding: 15, borderRadius: 10, marginTop: 20 },
  zoneText: { color: "#fff", textAlign: "center", fontWeight: "bold" },
});
