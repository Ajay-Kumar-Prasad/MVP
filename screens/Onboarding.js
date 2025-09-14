import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../styles/theme';

const { width, height } = Dimensions.get('window');

export default function Onboarding({ navigation }) {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[theme.colors.primary, theme.colors.primaryDark]}
        style={styles.gradient}
      >
        <View style={styles.content}>
          {/* Hero Icon */}
          <View style={styles.iconContainer}>
            <Ionicons name="shield-checkmark" size={80} color={theme.colors.white} />
          </View>
          
          {/* Main Content */}
          <View style={styles.textContainer}>
            <Text style={styles.title}>Welcome to</Text>
            <Text style={styles.appName}>Tourist Safety</Text>
            <Text style={styles.subtitle}>
              Your privacy-first safety companion for secure and worry-free travels
            </Text>
          </View>
          
          {/* Features */}
          <View style={styles.featuresContainer}>
            <View style={styles.feature}>
              <Ionicons name="lock-closed" size={20} color={theme.colors.white} />
              <Text style={styles.featureText}>Privacy Protected</Text>
            </View>
            <View style={styles.feature}>
              <Ionicons name="location" size={20} color={theme.colors.white} />
              <Text style={styles.featureText}>Real-time Tracking</Text>
            </View>
            <View style={styles.feature}>
              <Ionicons name="alert-circle" size={20} color={theme.colors.white} />
              <Text style={styles.featureText}>Emergency Alerts</Text>
            </View>
          </View>
          
          {/* CTA Button */}
          <TouchableOpacity
            style={styles.ctaButton}
            onPress={() => navigation.navigate("ConsentDashboard")}
            activeOpacity={0.8}
          >
            <Text style={styles.ctaText}>Get Started</Text>
            <Ionicons name="arrow-forward" size={20} color={theme.colors.primary} />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.lg,
  },
  iconContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing.xl,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: theme.spacing.xxl,
  },
  title: {
    ...theme.typography.h3,
    color: theme.colors.white,
    textAlign: 'center',
    marginBottom: theme.spacing.xs,
  },
  appName: {
    ...theme.typography.h1,
    color: theme.colors.white,
    textAlign: 'center',
    marginBottom: theme.spacing.md,
  },
  subtitle: {
    ...theme.typography.body,
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
    lineHeight: 24,
    maxWidth: width * 0.8,
  },
  featuresContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: theme.spacing.xxl,
  },
  feature: {
    alignItems: 'center',
    flex: 1,
  },
  featureText: {
    ...theme.typography.bodySmall,
    color: 'rgba(255, 255, 255, 0.9)',
    marginTop: theme.spacing.sm,
    textAlign: 'center',
  },
  ctaButton: {
    backgroundColor: theme.colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.xl,
    borderRadius: theme.borderRadius.full,
    ...theme.shadows.lg,
    minWidth: 200,
  },
  ctaText: {
    ...theme.typography.h4,
    color: theme.colors.primary,
    marginRight: theme.spacing.sm,
  },
});
