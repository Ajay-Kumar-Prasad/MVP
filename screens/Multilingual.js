import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import i18n from "i18n-js"; // ✅ default import
import * as Localization from "expo-localization";

// Initialize i18n
i18n.fallbacks = true;
i18n.translations = {
  en: { greeting: "Hello!" },
  fr: { greeting: "Bonjour!" },
  es: { greeting: "¡Hola!" },
};
i18n.locale = Localization.locale || "en";

export default function Multilingual() {
  const [lang, setLang] = useState(i18n.locale);

  const changeLanguage = (language) => {
    i18n.locale = language;
    setLang(language);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Current Language: {lang}</Text>
      <TouchableOpacity style={styles.button} onPress={() => changeLanguage("en")}>
        <Text>English</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => changeLanguage("fr")}>
        <Text>French</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => changeLanguage("es")}>
        <Text>Spanish</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  title: { fontSize: 20, marginBottom: 20 },
  button: {
    backgroundColor: "#ddd",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    width: 120,
    alignItems: "center",
  },
});
