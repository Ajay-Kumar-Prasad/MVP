import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../styles/theme';

export default function Profile() {
  const [dataDeleted, setDataDeleted] = useState(false);

  const handleDeleteData = () => {
    Alert.alert(
      "Delete All Data",
      "Are you sure you want to delete all your data? This action cannot be undone.",
      [
        { text: "Cancel", style: "cancel" },
        { 
          text: "Delete", 
          style: "destructive",
          onPress: () => setDataDeleted(true)
        },
      ]
    );
  };

  const profileData = [
    { icon: "card", label: "ID Proof", value: "Passport ****1234", color: theme.colors.primary },
    { icon: "call", label: "Emergency Contact", value: "+91 98765 43210", color: theme.colors.success },
    { icon: "map", label: "Itinerary", value: "Not shared", color: theme.colors.gray500 },
    { icon: "heart", label: "Health Info", value: "Not shared", color: theme.colors.gray500 },
  ];

  const quickActions = [
    { icon: "settings", title: "Settings", onPress: () => {} },
    { icon: "help-circle", title: "Help & Support", onPress: () => {} },
    { icon: "document-text", title: "Privacy Policy", onPress: () => {} },
    { icon: "shield-checkmark", title: "Terms of Service", onPress: () => {} },
  ];

  if (dataDeleted) {
    return (
      <View style={styles.container}>
        <View style={styles.deletedContainer}>
          <View style={styles.deletedIcon}>
            <Ionicons name="checkmark-circle" size={80} color={theme.colors.success} />
          </View>
          <Text style={styles.deletedTitle}>Data Deleted Successfully</Text>
          <Text style={styles.deletedDescription}>
            All your personal data has been permanently deleted in accordance with GDPR Right to Forget.
          </Text>
          <TouchableOpacity
            style={styles.restoreButton}
            onPress={() => setDataDeleted(false)}
          >
            <Text style={styles.restoreButtonText}>Restore Data</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <View style={styles.avatar}>
            <Ionicons name="person" size={40} color={theme.colors.primary} />
          </View>
        </View>
        <Text style={styles.title}>Tourist Profile</Text>
        <Text style={styles.subtitle}>Manage your personal information</Text>
      </View>

      {/* Profile Data */}
      <View style={styles.dataContainer}>
        <Text style={styles.sectionTitle}>Personal Information</Text>
        {profileData.map((item, index) => (
          <View key={index} style={styles.dataItem}>
            <View style={[styles.dataIcon, { backgroundColor: item.color + '15' }]}>
              <Ionicons name={item.icon} size={20} color={item.color} />
            </View>
            <View style={styles.dataContent}>
              <Text style={styles.dataLabel}>{item.label}</Text>
              <Text style={[styles.dataValue, { color: item.color === theme.colors.gray500 ? theme.colors.textSecondary : theme.colors.textPrimary }]}>
                {item.value}
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={16} color={theme.colors.gray400} />
          </View>
        ))}
      </View>

      {/* Quick Actions */}
      <View style={styles.actionsContainer}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        {quickActions.map((action, index) => (
          <TouchableOpacity key={index} style={styles.actionItem} onPress={action.onPress}>
            <View style={styles.actionIcon}>
              <Ionicons name={action.icon} size={20} color={theme.colors.primary} />
            </View>
            <Text style={styles.actionTitle}>{action.title}</Text>
            <Ionicons name="chevron-forward" size={16} color={theme.colors.gray400} />
          </TouchableOpacity>
        ))}
      </View>

      {/* Privacy Notice */}
      <View style={styles.privacyContainer}>
        <View style={styles.privacyHeader}>
          <Ionicons name="shield-checkmark" size={24} color={theme.colors.success} />
          <Text style={styles.privacyTitle}>Your Privacy is Protected</Text>
        </View>
        <Text style={styles.privacyDescription}>
          We use end-to-end encryption and follow GDPR guidelines to protect your personal information. 
          You have full control over your data.
        </Text>
      </View>

      {/* Delete Data Button */}
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={handleDeleteData}
        activeOpacity={0.8}
      >
        <Ionicons name="trash" size={20} color={theme.colors.danger} />
        <Text style={styles.deleteText}>Delete All My Data</Text>
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
    alignItems: 'center',
    paddingHorizontal: theme.spacing.lg,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.lg,
  },
  avatarContainer: {
    marginBottom: theme.spacing.lg,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: theme.colors.primary + '15',
    justifyContent: 'center',
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
  dataContainer: {
    marginHorizontal: theme.spacing.lg,
    marginBottom: theme.spacing.lg,
  },
  sectionTitle: {
    ...theme.typography.h4,
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.md,
  },
  dataItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.sm,
    borderRadius: theme.borderRadius.lg,
    ...theme.shadows.sm,
  },
  dataIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing.md,
  },
  dataContent: {
    flex: 1,
  },
  dataLabel: {
    ...theme.typography.bodySmall,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.xs,
  },
  dataValue: {
    ...theme.typography.body,
    fontWeight: '500',
  },
  actionsContainer: {
    marginHorizontal: theme.spacing.lg,
    marginBottom: theme.spacing.lg,
  },
  actionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.sm,
    borderRadius: theme.borderRadius.lg,
    ...theme.shadows.sm,
  },
  actionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: theme.colors.primary + '15',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing.md,
  },
  actionTitle: {
    ...theme.typography.body,
    color: theme.colors.textPrimary,
    flex: 1,
  },
  privacyContainer: {
    backgroundColor: theme.colors.white,
    marginHorizontal: theme.spacing.lg,
    marginBottom: theme.spacing.lg,
    padding: theme.spacing.lg,
    borderRadius: theme.borderRadius.lg,
    ...theme.shadows.sm,
  },
  privacyHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
  },
  privacyTitle: {
    ...theme.typography.h4,
    color: theme.colors.textPrimary,
    marginLeft: theme.spacing.sm,
  },
  privacyDescription: {
    ...theme.typography.bodySmall,
    color: theme.colors.textSecondary,
    lineHeight: 20,
  },
  deleteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.white,
    marginHorizontal: theme.spacing.lg,
    marginBottom: theme.spacing.xl,
    padding: theme.spacing.lg,
    borderRadius: theme.borderRadius.lg,
    borderWidth: 1,
    borderColor: theme.colors.danger,
    ...theme.shadows.sm,
  },
  deleteText: {
    ...theme.typography.body,
    color: theme.colors.danger,
    fontWeight: '600',
    marginLeft: theme.spacing.sm,
  },
  deletedContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.lg,
  },
  deletedIcon: {
    marginBottom: theme.spacing.xl,
  },
  deletedTitle: {
    ...theme.typography.h2,
    color: theme.colors.textPrimary,
    textAlign: 'center',
    marginBottom: theme.spacing.md,
  },
  deletedDescription: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: theme.spacing.xl,
  },
  restoreButton: {
    backgroundColor: theme.colors.primary,
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.xl,
    borderRadius: theme.borderRadius.full,
    ...theme.shadows.sm,
  },
  restoreButtonText: {
    ...theme.typography.h4,
    color: theme.colors.white,
  },
});
