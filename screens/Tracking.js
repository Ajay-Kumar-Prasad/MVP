import React, { useState } from "react";
import { View, Text, Switch, StyleSheet, Image, Button } from "react-native";

export default function Tracking({ navigation }) {
  const [trackingEnabled, setTrackingEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Real-Time Tracking</Text>

      <View style={styles.toggleContainer}>
        <Text style={styles.label}>Enable Tracking:</Text>
        <Switch value={trackingEnabled} onValueChange={setTrackingEnabled} />
      </View>

      {trackingEnabled && (
        <View style={styles.locationContainer}>
          <Text style={styles.subtitle}>Current Location (Dummy):</Text>
          <Text>Latitude: 12.9716</Text>
          <Text>Longitude: 77.5946</Text>

          <Image
            source={{ uri: "https://i.ibb.co/ZVh01dm/static-map.png" }} // Dummy static map
            style={styles.map}
            resizeMode="cover"
          />
          <Text style={styles.mapLabel}>Map Marker (Static)</Text>
        </View>
      )}

      <View style={{ marginTop: 20 }}>
        <Button title="Back to Safety Score" onPress={() => navigation.navigate("SafetyScore")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f5f5f5" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  toggleContainer: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 20 },
  label: { fontSize: 16 },
  locationContainer: { marginTop: 20, alignItems: "center" },
  subtitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  map: { width: "100%", height: 200, borderRadius: 10, backgroundColor: "#ddd", marginTop: 10 },
  mapLabel: { fontSize: 14, color: "#555", marginTop: 5 },
});
