import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Transparency() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transparency Dashboard</Text>
      <Text style={styles.log}>✔️ Police accessed your ID at 7:45 PM</Text>
      <Text style={styles.log}>✔️ Hotel check-in verified at 3:20 PM</Text>
      <Text style={styles.log}>✔️ Family viewing your live location at 8:10 PM</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 15 },
  log: { marginBottom: 10, fontSize: 16 },
});
