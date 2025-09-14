import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Switch, Alert } from "react-native";

export default function Safety() {
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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Safety Settings</Text>

      <View style={styles.toggle}>
        <Text>Share Location with Police</Text>
        <Switch value={shareWithPolice} onValueChange={setShareWithPolice} />
      </View>
      <View style={styles.toggle}>
        <Text>Share Location with Family</Text>
        <Switch value={shareWithFamily} onValueChange={setShareWithFamily} />
      </View>

      <TouchableOpacity style={styles.panicButton}>
        <Text style={styles.panicText}>🚨 Panic Button</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.zoneButton} onPress={simulateZoneEntry}>
        <Text style={styles.zoneText}>Simulate Restricted Zone Alert</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 15 },
  toggle: { flexDirection: "row", justifyContent: "space-between", marginBottom: 15 },
  panicButton: { backgroundColor: "red", padding: 20, borderRadius: 12, alignItems: "center", marginTop: 30 },
  panicText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  zoneButton: { backgroundColor: "#007AFF", padding: 15, borderRadius: 10, marginTop: 20 },
  zoneText: { color: "#fff", textAlign: "center", fontWeight: "bold" },
});
