import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Switch } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../styles/theme';

export default function ConsentDashboard({ navigation }) {
  const [itinerary, setItinerary] = useState(false);
  const [health, setHealth] = useState(false);
  const [consent, setConsent] = useState(false);

  const dataItems = [
    { icon: "card", text: "ID Proof", required: true, description: "For identity verification" },
    { icon: "call", text: "Emergency Contact", required: true, description: "For emergency situations" },
    { icon: "map", text: "Itinerary", required: false, description: "For better safety coverage", value: itinerary, onToggle: setItinerary },
    { icon: "heart", text: "Health Info", required: false, description: "For medical emergencies", value: health, onToggle: setHealth },
  ];

  const purposeItems = [
    { icon: "shield-checkmark", text: "Identity verification" },
    { icon: "warning", text: "Safety during emergencies" },
    { icon: "analytics", text: "Risk assessment & coverage" },
  ];

  const accessItems = [
    { icon: "shield", text: "Police (emergencies only)" },
    { icon: "business", text: "Hotels (check-in verification)" },
    { icon: "people", text: "Tourism authorities (analytics)" },
  ];

  const durationItems = [
    { icon: "time", text: "Auto-deleted after trip ends" },
    { icon: "trash", text: "Can request deletion anytime" },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.title}>Consent Dashboard</Text>
        <Text style={styles.subtitle}>Your privacy, your control</Text>
      </View>

      {/* Data Collection Card */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Ionicons name="document-text" size={24} color={theme.colors.primary} />
          <Text style={styles.cardTitle}>What Data is Collected?</Text>
        </View>
        {dataItems.map((item, index) => (
          <View key={index} style={styles.dataItem}>
            <View style={styles.dataItemLeft}>
              <Ionicons 
                name={item.icon} 
                size={20} 
                color={item.required ? theme.colors.success : theme.colors.gray500} 
              />
              <View style={styles.dataItemText}>
                <Text style={styles.dataItemTitle}>
                  {item.text} {item.required ? "(mandatory)" : "(optional)"}
                </Text>
                <Text style={styles.dataItemDescription}>{item.description}</Text>
              </View>
            </View>
            {!item.required && (
              <Switch
                value={item.value}
                onValueChange={item.onToggle}
                trackColor={{ false: theme.colors.gray300, true: theme.colors.primary }}
                thumbColor={theme.colors.white}
              />
            )}
          </View>
        ))}
      </View>

      {/* Purpose Card */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Ionicons name="lock-closed" size={24} color={theme.colors.primary} />
          <Text style={styles.cardTitle}>Why We Collect?</Text>
        </View>
        {purposeItems.map((item, index) => (
          <View key={index} style={styles.listItem}>
            <Ionicons name={item.icon} size={16} color={theme.colors.primary} />
            <Text style={styles.listText}>{item.text}</Text>
          </View>
        ))}
      </View>

      {/* Access Card */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Ionicons name="eye" size={24} color={theme.colors.primary} />
          <Text style={styles.cardTitle}>Who Can Access?</Text>
        </View>
        {accessItems.map((item, index) => (
          <View key={index} style={styles.listItem}>
            <Ionicons name={item.icon} size={16} color={theme.colors.primary} />
            <Text style={styles.listText}>{item.text}</Text>
          </View>
        ))}
      </View>

      {/* Duration Card */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Ionicons name="time" size={24} color={theme.colors.primary} />
          <Text style={styles.cardTitle}>Data Duration</Text>
        </View>
        {durationItems.map((item, index) => (
          <View key={index} style={styles.listItem}>
            <Ionicons name={item.icon} size={16} color={theme.colors.primary} />
            <Text style={styles.listText}>{item.text}</Text>
          </View>
        ))}
      </View>

      {/* Consent Toggle */}
      <View style={styles.consentContainer}>
        <View style={styles.consentToggle}>
          <View style={styles.consentLeft}>
            <Ionicons name="checkmark-circle" size={24} color={consent ? theme.colors.success : theme.colors.gray400} />
            <Text style={[styles.consentText, { color: consent ? theme.colors.textPrimary : theme.colors.gray500 }]}>
              I Agree & Give Consent
            </Text>
          </View>
          <Switch
            value={consent}
            onValueChange={setConsent}
            trackColor={{ false: theme.colors.gray300, true: theme.colors.success }}
            thumbColor={theme.colors.white}
          />
        </View>
      </View>

      {/* CTA Button */}
      <TouchableOpacity
        style={[
          styles.ctaButton,
          { 
            backgroundColor: consent ? theme.colors.primary : theme.colors.gray300,
            ...theme.shadows.md
          }
        ]}
        disabled={!consent}
        onPress={() => navigation.replace("SafetyScore")}
        activeOpacity={0.8}
      >
        <Text style={[styles.ctaText, { color: consent ? theme.colors.white : theme.colors.gray500 }]}>
          Accept & Proceed
        </Text>
        <Ionicons 
          name="arrow-forward" 
          size={20} 
          color={consent ? theme.colors.white : theme.colors.gray500} 
        />
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.backgroundSecondary,
  },
  header: {
    paddingHorizontal: theme.spacing.lg,
    paddingTop: theme.spacing.lg,
    paddingBottom: theme.spacing.md,
    alignItems: 'center',
  },
  title: {
    ...theme.typography.h2,
    color: theme.colors.textPrimary,
    textAlign: 'center',
    marginBottom: theme.spacing.sm,
  },
  subtitle: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
    textAlign: 'center',
  },
  card: {
    backgroundColor: theme.colors.white,
    marginHorizontal: theme.spacing.lg,
    marginBottom: theme.spacing.md,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    ...theme.shadows.sm,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  cardTitle: {
    ...theme.typography.h4,
    color: theme.colors.textPrimary,
    marginLeft: theme.spacing.sm,
  },
  dataItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: theme.spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.gray100,
  },
  dataItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  dataItemText: {
    marginLeft: theme.spacing.sm,
    flex: 1,
  },
  dataItemTitle: {
    ...theme.typography.body,
    color: theme.colors.textPrimary,
    fontWeight: '500',
  },
  dataItemDescription: {
    ...theme.typography.bodySmall,
    color: theme.colors.textSecondary,
    marginTop: 2,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: theme.spacing.xs,
  },
  listText: {
    ...theme.typography.body,
    color: theme.colors.textPrimary,
    marginLeft: theme.spacing.sm,
  },
  consentContainer: {
    marginHorizontal: theme.spacing.lg,
    marginVertical: theme.spacing.lg,
  },
  consentToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.white,
    padding: theme.spacing.lg,
    borderRadius: theme.borderRadius.lg,
    ...theme.shadows.sm,
  },
  consentLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  consentText: {
    ...theme.typography.h4,
    marginLeft: theme.spacing.sm,
  },
  ctaButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: theme.spacing.lg,
    marginBottom: theme.spacing.xl,
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.xl,
    borderRadius: theme.borderRadius.full,
  },
  ctaText: {
    ...theme.typography.h4,
    marginRight: theme.spacing.sm,
  },
});
