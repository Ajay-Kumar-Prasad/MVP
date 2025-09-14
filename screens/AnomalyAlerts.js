import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";

const alerts = [
  { id: "1", message: "Crowd detected near landmark" },
  { id: "2", message: "Heavy traffic on main road" },
  { id: "3", message: "Weather alert: Rain expected" },
];

export default function AnomalyAlerts({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Anomaly Alerts</Text>
      <FlatList
        data={alerts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardText}>{item.message}</Text>
          </View>
        )}
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Transparency")}>
        <Text style={styles.buttonText}>Transparency</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  card: {
    backgroundColor: "#ecf0f1",
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
  },
  cardText: { fontSize: 16 },
  button: {
    backgroundColor: "#3498db",
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
