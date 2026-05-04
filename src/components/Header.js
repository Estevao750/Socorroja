import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors, Sizes, FontSizes } from '../theme/theme';

const Header = ({ title, leftIcon, rightIcon, onLeftPress, onRightPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={onLeftPress}
          disabled={!leftIcon}
        >
          {leftIcon && (
            <MaterialCommunityIcons
              name={leftIcon}
              size={24}
              color={Colors.white}
            />
          )}
        </TouchableOpacity>

        <Text style={styles.title}>{title}</Text>

        <TouchableOpacity
          style={styles.iconButton}
          onPress={onRightPress}
          disabled={!rightIcon}
        >
          {rightIcon && (
            <MaterialCommunityIcons
              name={rightIcon}
              size={24}
              color={Colors.white}
            />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    paddingTop: Sizes.md,
    paddingBottom: Sizes.md,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Sizes.md,
  },
  title: {
    fontSize: FontSizes.lg,
    fontWeight: 'bold',
    color: Colors.white,
    flex: 1,
    textAlign: 'center',
  },
  iconButton: {
    padding: Sizes.sm,
    minWidth: 44,
    minHeight: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Header;
