import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { LEARN } from '../data/learnContents';
import AppHeader from '../components/AppHeader';
import { useContext } from 'react';
import { ThemeContext } from '../theme/themeContext';

export default function LearnDetailScreen() {
  const route = useRoute();
  const { id } = route.params || { id: 'how-to-call' };
  const item = LEARN.find((l) => l.id === id);
  const { spacing } = useContext(ThemeContext);

  return (
    <View style={[styles.container]}>
      <AppHeader title={item.title} />
      <ScrollView contentContainerStyle={{ padding: spacing.md }}>
        {item.content.map((c, i) => (
          <View key={i} style={{ marginBottom: 8 }}>
            <Text style={{ fontWeight: '700' }}>{i + 1}. </Text>
            <Text>{c}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({ container: { flex: 1 } });
