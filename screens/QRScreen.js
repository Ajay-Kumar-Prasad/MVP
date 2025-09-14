import React from "react";
import { View, Text, StyleSheet } from "react-native";
import QRCode from "react-qr-code";

export default function QRScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tourist Digital ID</Text>
      <QRCode value="TouristID1234" size={180} />
      <Text style={{ marginTop: 20 }}>📲 Scan this QR to verify ID</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 20 },
});
