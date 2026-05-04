import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppHeader from '../components/AppHeader';
import EmergencyButton from '../components/EmergencyButton';
import { EMERGENCIES } from '../data/emergencies';
import { useContext } from 'react';
import { ThemeContext } from '../theme/themeContext';

export default function EmergencySelectScreen() {
  const navigation = useNavigation();
  const { spacing } = useContext(ThemeContext);

  return (
    <View style={[styles.container]}>
      <AppHeader title="Escolha a situação" subtitle="Toque em uma emergência para ver o passo a passo" />
      <FlatList
        data={EMERGENCIES}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={{ padding: spacing.md }}
        renderItem={({ item }) => (
          <View style={{ flex: 1, padding: 8 }}>
            <EmergencyButton title={item.title} icon="warning" onPress={() => navigation.navigate('EmergencyDetail', { id: item.id })} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({ container: { flex: 1 } });
