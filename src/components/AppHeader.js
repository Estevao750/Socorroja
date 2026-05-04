import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useContext } from 'react';
import { ThemeContext } from '../theme/themeContext';

export default function AppHeader({ title, subtitle }) {
  const { colors, spacing, fontSizes } = useContext(ThemeContext);
  return (
    <View style={[styles.container, { padding: spacing.md }] }>
      <Text style={[styles.title, { color: colors.text, fontSize: fontSizes.xl }]}>{title}</Text>
      {subtitle ? <Text style={[styles.subtitle, { color: colors.muted }]}>{subtitle}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent'
  },
  title: {
    fontWeight: '700'
  },
  subtitle: {
    marginTop: 4,
    fontSize: 14
  }
});
