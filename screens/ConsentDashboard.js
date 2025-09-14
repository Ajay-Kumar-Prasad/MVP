import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Switch } from "react-native";

export default function ConsentDashboard({ navigation }) {
  const [itinerary, setItinerary] = useState(false);
  const [health, setHealth] = useState(false);
  const [consent, setConsent] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Consent Dashboard</Text>

      <View style={styles.card}>
        <Text style={styles.header}>📌 What Data is Collected?</Text>
        <Text>✔️ ID Proof (mandatory)</Text>
        <Text>✔️ Emergency Contact (mandatory)</Text>
        <View style={styles.toggle}>
          <Text>🗺️ Itinerary (optional)</Text>
          <Switch value={itinerary} onValueChange={setItinerary} />
        </View>
        <View style={styles.toggle}>
          <Text>❤️ Health Info (optional)</Text>
          <Switch value={health} onValueChange={setHealth} />
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.header}>🔒 Why We Collect?</Text>
        <Text>• Identity verification</Text>
        <Text>• Safety during emergencies</Text>
        <Text>• Optional data helps in risk coverage</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.header}>👀 Who Can Access?</Text>
        <Text>• Police (in emergencies)</Text>
        <Text>• Hotels (check-in verification)</Text>
        <Text>• Tourism authorities (analytics)</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.header}>⏳ Data Duration</Text>
        <Text>• Auto-deleted after trip ends</Text>
        <Text>• Can request deletion anytime</Text>
      </View>

      <View style={styles.toggle}>
        <Text>✅ I Agree & Give Consent</Text>
        <Switch value={consent} onValueChange={setConsent} />
      </View>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: consent ? "#007AFF" : "gray" }]}
        disabled={!consent}
        onPress={() => navigation.replace("MainTabs")}
      >
        <Text style={styles.buttonText}>Accept & Proceed</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  card: { backgroundColor: "#f5f5f5", padding: 15, marginBottom: 15, borderRadius: 10 },
  header: { fontSize: 16, fontWeight: "bold", marginBottom: 5 },
  button: { padding: 15, borderRadius: 10, marginTop: 20 },
  buttonText: { color: "#fff", fontSize: 16, textAlign: "center" },
  toggle: { flexDirection: "row", justifyContent: "space-between", marginVertical: 10 },
});
