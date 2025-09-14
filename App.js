// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Onboarding from "./screens/Onboarding";
import ConsentDashboard from "./screens/ConsentDashboard";
import Profile from "./screens/Profile";
import Safety from "./screens/Safety";
import Transparency from "./screens/Transparency";
import QRScreen from "./screens/QRScreen";
import SafetyScore from "./screens/SafetyScore";
import GeoAlerts from "./screens/GeoAlerts";
import Tracking from "./screens/Tracking";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          let iconName;
          if (route.name === "Profile") iconName = focused ? "person" : "person-outline";
          else if (route.name === "Safety") iconName = focused ? "shield" : "shield-outline";
          else if (route.name === "Transparency") iconName = focused ? "document-text" : "document-text-outline";
          else if (route.name === "Tourist ID") iconName = focused ? "qr-code" : "qr-code-outline";
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#6366F1',
        tabBarInactiveTintColor: '#9CA3AF',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 1,
          borderTopColor: '#E5E7EB',
          paddingTop: 8,
          paddingBottom: 8,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
          marginTop: 4,
        },
        headerStyle: {
          backgroundColor: '#6366F1',
        },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      })}
    >
      <Tab.Screen 
        name="Profile" 
        component={Profile}
        options={{ title: "Profile" }}
      />
      <Tab.Screen 
        name="Safety" 
        component={Safety}
        options={{ title: "Safety" }}
      />
      <Tab.Screen 
        name="Transparency" 
        component={Transparency}
        options={{ title: "Transparency" }}
      />
      <Tab.Screen 
        name="Tourist ID" 
        component={QRScreen}
        options={{ title: "Tourist ID" }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Onboarding"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#6366F1',
          },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 18,
          },
          headerBackTitleVisible: false,
        }}
      >
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ConsentDashboard"
          component={ConsentDashboard}
          options={{ 
            title: "Consent Dashboard",
            headerBackTitle: "Back"
          }}
        />
        <Stack.Screen
          name="SafetyScore"
          component={SafetyScore}
          options={{ 
            title: "Safety Assessment",
            headerBackTitle: "Back"
          }}
        />
        <Stack.Screen
          name="GeoAlerts"
          component={GeoAlerts}
          options={{ 
            title: "Geo-Fencing Alerts",
            headerBackTitle: "Back"
          }}
        />
        <Stack.Screen
          name="PanicButton"
          component={Safety} // Using Safety.js as Panic Button
          options={{ 
            title: "Safety Settings",
            headerBackTitle: "Back"
          }}
        />
        <Stack.Screen
          name="Tracking"
          component={Tracking}
          options={{ 
            title: "Real-Time Tracking",
            headerBackTitle: "Back"
          }}
        />
        <Stack.Screen
          name="MainTabs"
          component={MainTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
