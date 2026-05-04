import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import AppHeader from '../components/AppHeader';
import InfoCard from '../components/InfoCard';
import { LEARN } from '../data/learnContents';
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { ThemeContext } from '../theme/themeContext';

export default function LearnScreen() {
  const navigation = useNavigation();
  const { spacing } = useContext(ThemeContext);

  return (
    <View style={[styles.container]}>
      <AppHeader title="Primeiros socorros" />
      <FlatList
        data={LEARN}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: spacing.md }}
        renderItem={({ item }) => (
          <InfoCard title={item.title} subtitle={item.content[0]} onPress={() => navigation.navigate('LearnDetail', { id: item.id })} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({ container: { flex: 1 } });
