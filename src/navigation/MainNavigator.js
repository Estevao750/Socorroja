import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from '../theme/theme';

import HomeScreen from '../screens/HomeScreen';
import FirstAidGuideScreen from '../screens/FirstAidGuideScreen';
import GuideDetailScreen from '../screens/GuideDetailScreen';
import EmergencyScreen from '../screens/EmergencyScreen';
import AboutUsScreen from '../screens/AboutUsScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const screenOptions = {
  headerShown: false,
};

function FirstAidStack() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="FirstAidGuidesHome" component={FirstAidGuideScreen} />
      <Stack.Screen name="GuideDetail" component={GuideDetailScreen} />
    </Stack.Navigator>
  );
}

function MainNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'FirstAidStack') {
            iconName = focused ? 'heart-pulse' : 'heart-outline';
          } else if (route.name === 'Emergency') {
            iconName = focused ? 'phone-alert' : 'phone-alert-outline';
          } else if (route.name === 'AboutUs') {
            iconName = focused ? 'information' : 'information-outline';
          }

          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.gray,
        tabBarStyle: {
          backgroundColor: Colors.white,
          borderTopColor: Colors.light,
          borderTopWidth: 1,
          elevation: 5,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 3.84,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginTop: 5,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Início' }}
      />
      <Tab.Screen
        name="FirstAidStack"
        component={FirstAidStack}
        options={{ title: 'Primeiros Socorros' }}
      />
      <Tab.Screen
        name="Emergency"
        component={EmergencyScreen}
        options={{ title: 'Emergência' }}
      />
      <Tab.Screen
        name="AboutUs"
        component={AboutUsScreen}
        options={{ title: 'Sobre' }}
      />
    </Tab.Navigator>
  );
}

export default MainNavigator;
