import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors, Sizes, FontSizes } from '../theme/theme';

const EmergencyContactCard = ({ name, number, description }) => {
  const handleCall = () => {
    Linking.openURL(`tel:${number}`);
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handleCall}>
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>

      <View style={styles.numberContainer}>
        <Text style={styles.number}>{number}</Text>
        <MaterialCommunityIcons
          name="phone-dial"
          size={28}
          color={Colors.success}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
    marginHorizontal: Sizes.md,
    marginVertical: Sizes.sm,
    paddingHorizontal: Sizes.md,
    paddingVertical: Sizes.lg,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: Colors.success,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  content: {
    flex: 1,
  },
  name: {
    fontSize: FontSizes.md,
    fontWeight: '700',
    color: Colors.dark,
    marginBottom: Sizes.xs,
  },
  description: {
    fontSize: FontSizes.sm,
    color: Colors.gray,
  },
  numberContainer: {
    alignItems: 'center',
  },
  number: {
    fontSize: FontSizes.lg,
    fontWeight: 'bold',
    color: Colors.success,
    marginBottom: Sizes.sm,
  },
});

export default EmergencyContactCard;
