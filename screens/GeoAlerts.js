import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Alert, Button } from "react-native";

export default function GeoAlerts({ navigation }) {
  const highRiskZones = [
    "Zone A - Downtown Market",
    "Zone B - Riverside Bridge",
    "Zone C - Old Town Area",
  ];

  const alertZone = (zone) => {
    Alert.alert("⚠️ High-Risk Zone", `You are near ${zone}. Stay alert!`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Geo-Fencing Alerts</Text>

      <View style={styles.mapContainer}>
        {/* Replace with a static map image for PPT */}
        <Image
          source={{ uri: "https://i.ibb.co/ZVh01dm/static-map.png" }}
          style={styles.map}
          resizeMode="cover"
        />
        <Text style={styles.mapLabel}>High-Risk Zones Marked</Text>
      </View>

      <Text style={styles.subtitle}>High-Risk Zones:</Text>
      {highRiskZones.map((zone, index) => (
        <TouchableOpacity key={index} style={styles.zoneButton} onPress={() => alertZone(zone)}>
          <Text style={styles.zoneText}>{zone}</Text>
        </TouchableOpacity>
      ))}

      {/* Button to go back to SafetyScore */}
      <View style={{ marginTop: 20 }}>
        <Button title="Back to Safety Score" onPress={() => navigation.navigate("SafetyScore")} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#f5f5f5", flexGrow: 1 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  mapContainer: { marginBottom: 20, alignItems: "center" },
  map: { width: "100%", height: 200, borderRadius: 10, backgroundColor: "#ddd" },
  mapLabel: { marginTop: 8, fontSize: 14, color: "#555" },
  subtitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  zoneButton: { backgroundColor: "#FF9500", padding: 15, borderRadius: 10, marginBottom: 10 },
  zoneText: { color: "#fff", fontWeight: "bold", textAlign: "center" },
});
