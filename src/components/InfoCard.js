import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { useContext } from 'react';
import { ThemeContext } from '../theme/themeContext';
import { Ionicons } from '@expo/vector-icons';

export default function InfoCard({ title, subtitle, onPress }) {
  const { colors, spacing, radius } = useContext(ThemeContext);
  return (
    <TouchableOpacity style={[styles.card, { backgroundColor: colors.white, borderRadius: radius.md, padding: spacing.md }]} onPress={onPress}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <View>
          <Text style={styles.title}>{title}</Text>
          {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
        </View>
        <Ionicons name="chevron-forward" size={22} color={colors.muted} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { marginVertical: 8 },
  title: { fontSize: 16, fontWeight: '700' },
  subtitle: { marginTop: 4, color: '#666' }
});
