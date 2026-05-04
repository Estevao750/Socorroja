import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors, Sizes, FontSizes } from '../theme/theme';

const GuideCard = ({ title, category, icon, onPress }) => {
  const categoryColor = category === 'Crítico' ? Colors.danger : Colors.warning;

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons name={icon} size={32} color={Colors.primary} />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <View style={[styles.categoryBadge, { backgroundColor: categoryColor }]}>
          <Text style={styles.categoryText}>{category}</Text>
        </View>
      </View>

      <MaterialCommunityIcons
        name="chevron-right"
        size={24}
        color={Colors.gray}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    marginHorizontal: Sizes.md,
    marginVertical: Sizes.sm,
    paddingHorizontal: Sizes.md,
    paddingVertical: Sizes.lg,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.light,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Sizes.md,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: FontSizes.md,
    fontWeight: '600',
    color: Colors.dark,
    marginBottom: Sizes.sm,
  },
  categoryBadge: {
    paddingHorizontal: Sizes.md,
    paddingVertical: Sizes.xs,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  categoryText: {
    fontSize: FontSizes.xs,
    color: Colors.white,
    fontWeight: '600',
  },
});

export default GuideCard;
