import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useContext } from 'react';
import { ThemeContext } from '../theme/themeContext';

export default function EmergencyButton({ icon = 'warning', title, onPress }) {
  const { colors, spacing, radius } = useContext(ThemeContext);
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: colors.white, borderRadius: radius.md, padding: spacing.md }]} onPress={onPress}>
      <View style={styles.row}>
        <Ionicons name={icon} size={28} color={colors.danger} style={{ marginRight: 12 }} />
        <Text style={[styles.text, { color: colors.text }]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 8,
    ...{
      shadowColor: '#000',
      shadowOpacity: 0.08,
      shadowRadius: 8,
      shadowOffset: { width: 0, height: 4 },
      elevation: 3
    }
  },
  row: { flexDirection: 'row', alignItems: 'center' },
  text: { fontSize: 18, fontWeight: '600' }
});
