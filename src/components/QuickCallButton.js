import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useContext } from 'react';
import { ThemeContext } from '../theme/themeContext';
import * as Linking from 'expo-linking';

export default function QuickCallButton({ number = '192', label = 'Ligar', style }) {
  const { colors, spacing, radius } = useContext(ThemeContext);
  const handleCall = () => {
    Linking.openURL(`tel:${number}`);
  };
  return (
    <TouchableOpacity style={[styles.container, { backgroundColor: colors.danger, borderRadius: radius.md, padding: spacing.sm }, style]} onPress={handleCall}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Ionicons name="call" size={18} color={colors.white} style={{ marginRight: 8 }} />
        <Text style={[styles.text, { color: colors.white }]}>{label} {number}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: { fontSize: 16, fontWeight: '700' }
});
