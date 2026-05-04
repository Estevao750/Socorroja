import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainNavigator from './src/navigation/MainNavigator';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from './src/theme/themeContext';

export default function App() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <MainNavigator />
          <StatusBar style="auto" />
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
