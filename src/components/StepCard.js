import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors, Sizes, FontSizes } from '../theme/theme';

const StepCard = ({ step }) => {
  return (
    <View style={styles.container}>
      <View style={styles.stepNumberContainer}>
        <Text style={styles.stepNumber}>{step.number}</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>{step.title}</Text>
        <Text style={styles.description}>{step.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: Sizes.md,
    marginVertical: Sizes.md,
    backgroundColor: Colors.white,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2.84,
  },
  stepNumberContainer: {
    backgroundColor: Colors.primary,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepNumber: {
    fontSize: FontSizes.xl,
    fontWeight: 'bold',
    color: Colors.white,
  },
  content: {
    flex: 1,
    padding: Sizes.md,
  },
  title: {
    fontSize: FontSizes.md,
    fontWeight: '600',
    color: Colors.dark,
    marginBottom: Sizes.sm,
  },
  description: {
    fontSize: FontSizes.sm,
    color: Colors.gray,
    lineHeight: 20,
  },
});

export default StepCard;
