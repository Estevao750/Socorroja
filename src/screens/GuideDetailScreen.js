import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors, Sizes, FontSizes } from '../theme/theme';
import Header from '../components/Header';
import StepCard from '../components/StepCard';

const GuideDetailScreen = ({ route, navigation }) => {
  const { guide } = route.params;

  const categoryColor = guide.category === 'Crítico' ? Colors.danger : Colors.warning;

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={guide.title}
        leftIcon="arrow-left"
        onLeftPress={() => navigation.goBack()}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header Card */}
        <View style={styles.headerCard}>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons
              name={guide.icon}
              size={48}
              color={Colors.primary}
            />
          </View>

          <Text style={styles.title}>{guide.title}</Text>

          <View style={[styles.categoryBadge, { backgroundColor: categoryColor }]}>
            <Text style={styles.categoryText}>{guide.category}</Text>
          </View>

          <Text style={styles.description}>{guide.description}</Text>
        </View>

        {/* Steps Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Passos a Seguir</Text>
          {guide.steps.map((step) => (
            <StepCard key={step.number} step={step} />
          ))}
        </View>

        {/* Tips Section */}
        {guide.tips && guide.tips.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Dicas Importantes</Text>
            <View style={styles.tipsContainer}>
              {guide.tips.map((tip, index) => (
                <View key={index} style={styles.tipItem}>
                  <MaterialCommunityIcons
                    name="check-circle"
                    size={20}
                    color={Colors.success}
                  />
                  <Text style={styles.tipText}>{tip}</Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* Emergency Call Section */}
        <View style={styles.emergencySection}>
          <MaterialCommunityIcons
            name="alert-box"
            size={32}
            color={Colors.danger}
          />
          <Text style={styles.emergencyTitle}>Em Caso de Emergência</Text>
          <Text style={styles.emergencyText}>
            Ligue sempre para 192 (SAMU), 190 (Polícia) ou 193 (Bombeiros) se a situação for grave.
          </Text>
        </View>

        <View style={styles.spacer} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light,
  },
  headerCard: {
    backgroundColor: Colors.white,
    margin: Sizes.md,
    padding: Sizes.lg,
    borderRadius: 16,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.light,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Sizes.lg,
  },
  title: {
    fontSize: FontSizes.xl,
    fontWeight: 'bold',
    color: Colors.dark,
    textAlign: 'center',
    marginBottom: Sizes.md,
  },
  categoryBadge: {
    paddingHorizontal: Sizes.lg,
    paddingVertical: Sizes.sm,
    borderRadius: 20,
    marginBottom: Sizes.lg,
  },
  categoryText: {
    fontSize: FontSizes.sm,
    fontWeight: '700',
    color: Colors.white,
  },
  description: {
    fontSize: FontSizes.md,
    color: Colors.gray,
    textAlign: 'center',
    lineHeight: 22,
  },
  section: {
    paddingVertical: Sizes.lg,
    paddingHorizontal: Sizes.md,
  },
  sectionTitle: {
    fontSize: FontSizes.lg,
    fontWeight: '700',
    color: Colors.dark,
    marginBottom: Sizes.lg,
    marginHorizontal: Sizes.md,
  },
  tipsContainer: {
    backgroundColor: Colors.white,
    marginHorizontal: Sizes.md,
    padding: Sizes.lg,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2.84,
  },
  tipItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: Sizes.md,
  },
  tipItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: Sizes.md,
  },
  tipText: {
    fontSize: FontSizes.sm,
    color: Colors.dark,
    marginLeft: Sizes.md,
    flex: 1,
    lineHeight: 20,
  },
  emergencySection: {
    backgroundColor: '#FFE5E5',
    marginHorizontal: Sizes.md,
    marginVertical: Sizes.lg,
    padding: Sizes.lg,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: Colors.danger,
    alignItems: 'flex-start',
  },
  emergencyTitle: {
    fontSize: FontSizes.md,
    fontWeight: '700',
    color: Colors.danger,
    marginTop: Sizes.md,
    marginBottom: Sizes.sm,
  },
  emergencyText: {
    fontSize: FontSizes.sm,
    color: Colors.dark,
    lineHeight: 20,
  },
  spacer: {
    height: Sizes.xl,
  },
});

export default GuideDetailScreen;
