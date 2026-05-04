import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import AppHeader from '../components/AppHeader';
import QuickCallButton from '../components/QuickCallButton';
import InfoCard from '../components/InfoCard';
import { useContext } from 'react';
import { ThemeContext } from '../theme/themeContext';

export default function ContactScreen() {
  const { colors, spacing } = useContext(ThemeContext);
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <AppHeader title="Pedir socorro" />
      <ScrollView contentContainerStyle={{ padding: spacing.md }}>
        <QuickCallButton number="192" label="SAMU 192" style={{ marginBottom: 12 }} />
        <QuickCallButton number="193" label="Bombeiros 193" style={{ marginBottom: 12 }} />

        <InfoCard title="O que informar na ligação" subtitle="Endereço, tipo de emergência, estado da vítima, referência" />

        <View style={{ marginTop: 12 }}>
          <Text style={{ fontWeight: '700', marginBottom: 8 }}>Dicas rápidas</Text>
          <Text>- Tenha o endereço pronto</Text>
          <Text>- Mantenha a calma</Text>
          <Text>- Siga orientações do atendente</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({ container: { flex: 1 } });
