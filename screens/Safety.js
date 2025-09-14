import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Switch, Alert, ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../styles/theme';

export default function Safety({ navigation }) {
  const [shareWithPolice, setShareWithPolice] = useState(false);
  const [shareWithFamily, setShareWithFamily] = useState(false);

  const simulateZoneEntry = () => {
    Alert.alert(
      "⚠️ Restricted Zone",
      "You are near a restricted zone. Confirm if you are entering?",
      [
        { text: "This is Incorrect", onPress: () => Alert.alert("✅ Feedback noted!") },
        { text: "Yes, Entering", onPress: () => Alert.alert("🚨 Police Notified!") },
      ]
    );
  };

  const panicAlert = () => {
    Alert.alert(
      "🚨 Panic Alert",
      `Emergency contacts notified!\nPolice: ${shareWithPolice ? "Enabled" : "Disabled"}\nFamily: ${shareWithFamily ? "Enabled" : "Disabled"}`
    );
  };

  const safetyFeatures = [
    {
      icon: 'shield',
      title: 'Share with Police',
      description: 'Allow police to access your location during emergencies',
      enabled: shareWithPolice,
      onToggle: setShareWithPolice,
      color: theme.colors.info,
    },
    {
      icon: 'people',
      title: 'Share with Family',
      description: 'Keep your family informed about your location',
      enabled: shareWithFamily,
      onToggle: setShareWithFamily,
      color: theme.colors.secondary,
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.title}>Safety Settings</Text>
        <Text style={styles.subtitle}>Configure your emergency preferences</Text>
      </View>

      {/* Safety Features */}
      <View style={styles.featuresContainer}>
        {safetyFeatures.map((feature, index) => (
          <View key={index} style={styles.featureCard}>
            <View style={styles.featureHeader}>
              <View style={[styles.featureIcon, { backgroundColor: feature.color + '15' }]}>
                <Ionicons name={feature.icon} size={24} color={feature.color} />
              </View>
              <View style={styles.featureContent}>
                <Text style={styles.featureTitle}>{feature.title}</Text>
                <Text style={styles.featureDescription}>{feature.description}</Text>
              </View>
              <Switch
                value={feature.enabled}
                onValueChange={feature.onToggle}
                trackColor={{ false: theme.colors.gray300, true: feature.color }}
                thumbColor={theme.colors.white}
              />
            </View>
          </View>
        ))}
      </View>

      {/* Emergency Actions */}
      <View style={styles.actionsContainer}>
        <Text style={styles.sectionTitle}>Emergency Actions</Text>
        
        {/* Panic Button */}
        <TouchableOpacity 
          style={styles.panicButton} 
          onPress={panicAlert}
          activeOpacity={0.8}
        >
          <View style={styles.panicButtonContent}>
            <View style={styles.panicIcon}>
              <Ionicons name="warning" size={32} color={theme.colors.white} />
            </View>
            <View style={styles.panicTextContainer}>
              <Text style={styles.panicTitle}>Panic Button</Text>
              <Text style={styles.panicDescription}>Tap in case of emergency</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* Zone Alert Button */}
        <TouchableOpacity 
          style={styles.zoneButton} 
          onPress={simulateZoneEntry}
          activeOpacity={0.8}
        >
          <View style={styles.zoneButtonContent}>
            <Ionicons name="location" size={24} color={theme.colors.white} />
            <Text style={styles.zoneText}>Test Zone Alert</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Status Card */}
      <View style={styles.statusCard}>
        <Text style={styles.statusTitle}>Current Status</Text>
        <View style={styles.statusItems}>
          <View style={styles.statusItem}>
            <Ionicons 
              name={shareWithPolice ? "checkmark-circle" : "close-circle"} 
              size={20} 
              color={shareWithPolice ? theme.colors.success : theme.colors.gray400} 
            />
            <Text style={styles.statusText}>Police Access: {shareWithPolice ? "Enabled" : "Disabled"}</Text>
          </View>
          <View style={styles.statusItem}>
            <Ionicons 
              name={shareWithFamily ? "checkmark-circle" : "close-circle"} 
              size={20} 
              color={shareWithFamily ? theme.colors.success : theme.colors.gray400} 
            />
            <Text style={styles.statusText}>Family Access: {shareWithFamily ? "Enabled" : "Disabled"}</Text>
          </View>
        </View>
      </View>

      {/* Back Button */}
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.navigate("SafetyScore")}
        activeOpacity={0.8}
      >
        <Ionicons name="arrow-back" size={20} color={theme.colors.primary} />
        <Text style={styles.backButtonText}>Back to Safety Score</Text>
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
  featuresContainer: {
    paddingHorizontal: theme.spacing.lg,
    marginBottom: theme.spacing.lg,
  },
  featureCard: {
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.lg,
    marginBottom: theme.spacing.md,
    ...theme.shadows.sm,
  },
  featureHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: theme.spacing.lg,
  },
  featureIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing.md,
  },
  featureContent: {
    flex: 1,
  },
  featureTitle: {
    ...theme.typography.h4,
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.xs,
  },
  featureDescription: {
    ...theme.typography.bodySmall,
    color: theme.colors.textSecondary,
  },
  actionsContainer: {
    paddingHorizontal: theme.spacing.lg,
    marginBottom: theme.spacing.lg,
  },
  sectionTitle: {
    ...theme.typography.h4,
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.md,
  },
  panicButton: {
    backgroundColor: theme.colors.danger,
    borderRadius: theme.borderRadius.lg,
    marginBottom: theme.spacing.md,
    ...theme.shadows.md,
  },
  panicButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: theme.spacing.lg,
  },
  panicIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing.md,
  },
  panicTextContainer: {
    flex: 1,
  },
  panicTitle: {
    ...theme.typography.h3,
    color: theme.colors.white,
    marginBottom: theme.spacing.xs,
  },
  panicDescription: {
    ...theme.typography.body,
    color: 'rgba(255, 255, 255, 0.9)',
  },
  zoneButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.lg,
    ...theme.shadows.sm,
  },
  zoneButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing.md,
  },
  zoneText: {
    ...theme.typography.h4,
    color: theme.colors.white,
    marginLeft: theme.spacing.sm,
  },
  statusCard: {
    backgroundColor: theme.colors.white,
    marginHorizontal: theme.spacing.lg,
    marginBottom: theme.spacing.lg,
    padding: theme.spacing.lg,
    borderRadius: theme.borderRadius.lg,
    ...theme.shadows.sm,
  },
  statusTitle: {
    ...theme.typography.h4,
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.md,
  },
  statusItems: {
    gap: theme.spacing.sm,
  },
  statusItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusText: {
    ...theme.typography.body,
    color: theme.colors.textPrimary,
    marginLeft: theme.spacing.sm,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: theme.spacing.lg,
    marginBottom: theme.spacing.xl,
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.lg,
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.full,
    ...theme.shadows.sm,
  },
  backButtonText: {
    ...theme.typography.body,
    color: theme.colors.primary,
    marginLeft: theme.spacing.sm,
    fontWeight: '600',
  },
});
