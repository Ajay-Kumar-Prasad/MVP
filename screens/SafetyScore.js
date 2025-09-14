import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function SafetyScore({ navigation }) {
  const score = 85; // dummy score

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tourist Safety Score</Text>
      <Text style={styles.score}>{score}/100</Text>
      <Text style={styles.label}>Area Risk: Medium</Text>

      <View style={styles.buttonContainer}>
        <Button title="Go to Geo-Fencing Alerts" onPress={() => navigation.navigate("GeoAlerts")} />
        <View style={{ height: 10 }} />
        <Button title="Go to Panic Button" onPress={() => navigation.navigate("PanicButton")} />
        <View style={{ height: 10 }} />
        <Button title="Go to Real-Time Tracking" onPress={() => navigation.navigate("Tracking")} />
        <View style={{ height: 10 }} />
        <Button title="Go to App Tabs" onPress={() => navigation.navigate("MainTabs")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", padding: 20, backgroundColor: "#f5f5f5" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  score: { fontSize: 48, fontWeight: "bold", color: "green" },
  label: { fontSize: 18, marginTop: 10, marginBottom: 30 },
  buttonContainer: { width: "80%" },
});
