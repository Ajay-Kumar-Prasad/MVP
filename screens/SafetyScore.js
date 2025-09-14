import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../styles/theme';

const { width } = Dimensions.get('window');

// Circular Progress Component
const CircularProgress = ({ progress, size = 200, strokeWidth = 12, color = theme.colors.primary }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <View style={[styles.circularProgress, { width: size, height: size }]}>
      <View style={[styles.circle, { width: size, height: size, borderRadius: size / 2 }]}>
        <View style={[styles.progressRing, { 
          width: size - strokeWidth, 
          height: size - strokeWidth, 
          borderRadius: (size - strokeWidth) / 2,
          borderWidth: strokeWidth,
          borderColor: color,
          transform: [{ rotate: '-90deg' }]
        }]}>
          <View style={[styles.progressFill, {
            width: size - strokeWidth,
            height: size - strokeWidth,
            borderRadius: (size - strokeWidth) / 2,
            borderWidth: strokeWidth,
            borderColor: color,
            borderTopColor: 'transparent',
            borderRightColor: 'transparent',
            transform: [{ rotate: `${(progress / 100) * 360 - 90}deg` }]
          }]} />
        </View>
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreText}>{progress}</Text>
          <Text style={styles.scoreLabel}>Safety Score</Text>
        </View>
      </View>
    </View>
  );
};

export default function SafetyScore({ navigation }) {
  const score = 85; // dummy score
  const riskLevel = score >= 80 ? 'Low' : score >= 60 ? 'Medium' : 'High';
  const riskColor = score >= 80 ? theme.colors.success : score >= 60 ? theme.colors.warning : theme.colors.danger;

  const features = [
    { icon: 'location', title: 'Geo-Fencing Alerts', description: 'Stay informed about restricted areas', onPress: () => navigation.navigate("GeoAlerts") },
    { icon: 'warning', title: 'Panic Button', description: 'Emergency assistance at your fingertips', onPress: () => navigation.navigate("PanicButton") },
    { icon: 'navigate', title: 'Real-Time Tracking', description: 'Share your location with trusted contacts', onPress: () => navigation.navigate("Tracking") },
    { icon: 'apps', title: 'App Dashboard', description: 'Access all safety features', onPress: () => navigation.navigate("MainTabs") },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Safety Assessment</Text>
        <Text style={styles.subtitle}>Your current safety status</Text>
      </View>

      {/* Circular Progress */}
      <View style={styles.progressContainer}>
        <CircularProgress progress={score} />
        <View style={styles.riskIndicator}>
          <View style={[styles.riskDot, { backgroundColor: riskColor }]} />
          <Text style={[styles.riskText, { color: riskColor }]}>
            Area Risk: {riskLevel}
          </Text>
        </View>
      </View>

      {/* Safety Tips */}
      <View style={styles.tipsContainer}>
        <Text style={styles.tipsTitle}>Safety Tips</Text>
        <View style={styles.tip}>
          <Ionicons name="checkmark-circle" size={16} color={theme.colors.success} />
          <Text style={styles.tipText}>Keep emergency contacts updated</Text>
        </View>
        <View style={styles.tip}>
          <Ionicons name="checkmark-circle" size={16} color={theme.colors.success} />
          <Text style={styles.tipText}>Share your itinerary with trusted contacts</Text>
        </View>
        <View style={styles.tip}>
          <Ionicons name="checkmark-circle" size={16} color={theme.colors.success} />
          <Text style={styles.tipText}>Enable location sharing for emergencies</Text>
        </View>
      </View>

      {/* Feature Cards */}
      <View style={styles.featuresContainer}>
        {features.map((feature, index) => (
          <TouchableOpacity
            key={index}
            style={styles.featureCard}
            onPress={feature.onPress}
            activeOpacity={0.7}
          >
            <View style={styles.featureIcon}>
              <Ionicons name={feature.icon} size={24} color={theme.colors.primary} />
            </View>
            <View style={styles.featureContent}>
              <Text style={styles.featureTitle}>{feature.title}</Text>
              <Text style={styles.featureDescription}>{feature.description}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color={theme.colors.gray400} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
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
  progressContainer: {
    alignItems: 'center',
    marginVertical: theme.spacing.xl,
  },
  circularProgress: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  progressRing: {
    position: 'absolute',
    borderColor: theme.colors.gray200,
  },
  progressFill: {
    position: 'absolute',
    borderColor: theme.colors.primary,
  },
  scoreContainer: {
    alignItems: 'center',
  },
  scoreText: {
    ...theme.typography.h1,
    color: theme.colors.primary,
    fontSize: 48,
    fontWeight: 'bold',
  },
  scoreLabel: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
    marginTop: theme.spacing.xs,
  },
  riskIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: theme.spacing.lg,
    backgroundColor: theme.colors.white,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    borderRadius: theme.borderRadius.full,
    ...theme.shadows.sm,
  },
  riskDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: theme.spacing.sm,
  },
  riskText: {
    ...theme.typography.body,
    fontWeight: '600',
  },
  tipsContainer: {
    backgroundColor: theme.colors.white,
    marginHorizontal: theme.spacing.lg,
    marginBottom: theme.spacing.lg,
    padding: theme.spacing.lg,
    borderRadius: theme.borderRadius.lg,
    ...theme.shadows.sm,
  },
  tipsTitle: {
    ...theme.typography.h4,
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.md,
  },
  tip: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
  },
  tipText: {
    ...theme.typography.body,
    color: theme.colors.textPrimary,
    marginLeft: theme.spacing.sm,
    flex: 1,
  },
  featuresContainer: {
    paddingHorizontal: theme.spacing.lg,
    paddingBottom: theme.spacing.xl,
  },
  featureCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.md,
    borderRadius: theme.borderRadius.lg,
    ...theme.shadows.sm,
  },
  featureIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: theme.colors.primary + '10',
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
});
