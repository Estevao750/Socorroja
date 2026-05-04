import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { STEPS } from '../data/emergencySteps';
import AppHeader from '../components/AppHeader';
import StepCard from '../components/StepCard';
import QuickCallButton from '../components/QuickCallButton';
import { useContext } from 'react';
import { ThemeContext } from '../theme/themeContext';

export default function EmergencyDetailScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { id } = route.params || { id: 'engasgo' };
  const data = STEPS[id];
  const { colors } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }] }>
      <AppHeader title={data.title} subtitle={data.description} />
      <ScrollView style={{ padding: 16 }}>
        <View style={styles.illustration}>
          <Text style={{ fontSize: 48 }}>🩺</Text>
        </View>

        {data.steps.map((s, i) => (
          <StepCard key={i} stepNumber={i + 1} text={s} />
        ))}

        {data.dont ? (
          <View style={{ marginTop: 12 }}>
            <Text style={{ fontWeight: '700', marginBottom: 6 }}>O que não fazer</Text>
            <Text>{data.dont.join('\n')}</Text>
          </View>
        ) : null}

        <View style={{ height: 120 }} />
      </ScrollView>

      <View style={styles.footer}>
        <QuickCallButton number="192" label="Ligar para ajuda" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  illustration: { alignItems: 'center', justifyContent: 'center', height: 140, backgroundColor: '#fff', borderRadius: 12, marginBottom: 16, ...{
    shadowColor: '#000', shadowOpacity: 0.06, shadowRadius: 8, shadowOffset: { width: 0, height: 4 }, elevation: 3
  } },
  footer: { position: 'absolute', left: 16, right: 16, bottom: 20 }
});
