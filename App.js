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
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Profile") iconName = "person";
          else if (route.name === "Safety") iconName = "alert-circle";
          else if (route.name === "Transparency") iconName = "list";
          else if (route.name === "Tourist ID") iconName = "qr-code";
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Safety" component={Safety} />
      <Tab.Screen name="Transparency" component={Transparency} />
      <Tab.Screen name="Tourist ID" component={QRScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ConsentDashboard"
          component={ConsentDashboard}
          options={{ title: "Consent Dashboard" }}
        />
        <Stack.Screen
          name="SafetyScore"
          component={SafetyScore}
          options={{ title: "Tourist Safety Score" }}
        />
        <Stack.Screen
          name="GeoAlerts"
          component={GeoAlerts}
          options={{ title: "Geo-Fencing Alerts" }}
        />
        <Stack.Screen
          name="PanicButton"
          component={Safety} // Using Safety.js as Panic Button
          options={{ title: "Panic Button" }}
        />
        <Stack.Screen
          name="Tracking"
          component={Tracking}
          options={{ title: "Real-Time Tracking" }}
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
