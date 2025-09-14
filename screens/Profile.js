import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Profile() {
  const [dataDeleted, setDataDeleted] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tourist Profile</Text>
      {dataDeleted ? (
        <Text style={{ color: "red" }}>❌ All data deleted (GDPR Right to Forget)</Text>
      ) : (
        <>
          <Text>🆔 ID Proof: Passport ****1234</Text>
          <Text>📞 Emergency Contact: +91 98765 43210</Text>
          <Text>🗺️ Itinerary: Not shared</Text>
          <Text>❤️ Health Info: Not shared</Text>

          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => setDataDeleted(true)}
          >
            <Text style={styles.deleteText}>Delete My Data</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 15 },
  deleteButton: { marginTop: 20, backgroundColor: "red", padding: 12, borderRadius: 10 },
  deleteText: { color: "#fff", fontWeight: "bold", textAlign: "center" },
});
