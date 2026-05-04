import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  SafeAreaView,
  FlatList,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors, Sizes, FontSizes } from '../theme/theme';
import Header from '../components/Header';
import GuideCard from '../components/GuideCard';
import { firstAidGuides } from '../data/firstAidGuides';

const FirstAidGuideScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredGuides = firstAidGuides.filter((guide) =>
    guide.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleGuidePress = (guide) => {
    navigation.navigate('GuideDetail', { guide });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Primeiros Socorros" />

      <View style={styles.content}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <MaterialCommunityIcons
            name="magnify"
            size={24}
            color={Colors.gray}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar guia..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholderTextColor={Colors.lightGray}
          />
          {searchQuery.length > 0 && (
            <MaterialCommunityIcons
              name="close"
              size={20}
              color={Colors.gray}
              onPress={() => setSearchQuery('')}
            />
          )}
        </View>

        {/* Guides List */}
        {filteredGuides.length > 0 ? (
          <FlatList
            data={filteredGuides}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <GuideCard
                title={item.title}
                category={item.category}
                icon={item.icon}
                onPress={() => handleGuidePress(item)}
              />
            )}
            scrollEnabled={false}
            contentContainerStyle={styles.listContainer}
          />
        ) : (
          <View style={styles.emptyContainer}>
            <MaterialCommunityIcons
              name="magnify-close"
              size={48}
              color={Colors.gray}
            />
            <Text style={styles.emptyText}>Nenhum guia encontrado</Text>
            <Text style={styles.emptySubtext}>Tente outra busca</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light,
  },
  content: {
    flex: 1,
    paddingTop: Sizes.md,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    marginHorizontal: Sizes.md,
    marginBottom: Sizes.lg,
    paddingHorizontal: Sizes.md,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  searchInput: {
    flex: 1,
    paddingVertical: Sizes.md,
    paddingHorizontal: Sizes.sm,
    fontSize: FontSizes.md,
    color: Colors.dark,
  },
  listContainer: {
    paddingBottom: Sizes.xl,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: FontSizes.lg,
    fontWeight: '600',
    color: Colors.dark,
    marginTop: Sizes.md,
  },
  emptySubtext: {
    fontSize: FontSizes.md,
    color: Colors.gray,
    marginTop: Sizes.sm,
  },
});

export default FirstAidGuideScreen;
