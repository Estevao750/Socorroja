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
import { aboutUs } from '../data/aboutUs';

const AboutUsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Sobre Nós" />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* App Info */}
        <View style={styles.appInfoCard}>
          <MaterialCommunityIcons
            name="hospital-box"
            size={48}
            color={Colors.primary}
          />
          <Text style={styles.appName}>{aboutUs.title}</Text>
          <Text style={styles.version}>v{aboutUs.version}</Text>
        </View>

        {/* Mission */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <MaterialCommunityIcons
              name="target-variant"
              size={24}
              color={Colors.primary}
            />
            <Text style={styles.sectionTitle}>Missão</Text>
          </View>
          <Text style={styles.sectionContent}>{aboutUs.mission}</Text>
        </View>

        {/* Vision */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <MaterialCommunityIcons
              name="telescope"
              size={24}
              color={Colors.secondary}
            />
            <Text style={styles.sectionTitle}>Visão</Text>
          </View>
          <Text style={styles.sectionContent}>{aboutUs.vision}</Text>
        </View>

        {/* About */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <MaterialCommunityIcons
              name="information-outline"
              size={24}
              color={Colors.success}
            />
            <Text style={styles.sectionTitle}>Sobre</Text>
          </View>
          <Text style={styles.sectionContent}>{aboutUs.about}</Text>
        </View>

        {/* Features */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <MaterialCommunityIcons
              name="star-outline"
              size={24}
              color={Colors.warning}
            />
            <Text style={styles.sectionTitle}>Principais Características</Text>
          </View>
          <View style={styles.featuresList}>
            {aboutUs.features.map((feature, index) => (
              <View key={index} style={styles.featureItem}>
                <MaterialCommunityIcons
                  name="check-circle"
                  size={18}
                  color={Colors.success}
                />
                <Text style={styles.featureText}>{feature}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Credits */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <MaterialCommunityIcons
              name="heart-multiple-outline"
              size={24}
              color={Colors.danger}
            />
            <Text style={styles.sectionTitle}>Desenvolvido por</Text>
          </View>
          <Text style={styles.sectionContent}>{aboutUs.developedBy}</Text>
        </View>

        {/* Disclaimer */}
        <View style={styles.disclaimerCard}>
          <View style={styles.disclaimerHeader}>
            <MaterialCommunityIcons
              name="alert-circle"
              size={28}
              color={Colors.danger}
            />
            <Text style={styles.disclaimerTitle}>Aviso Legal</Text>
          </View>
          <Text style={styles.disclaimerText}>{aboutUs.disclaimer}</Text>
        </View>

        {/* Emergency Numbers */}
        <View style={styles.emergencyReminder}>
          <Text style={styles.emergencyTitle}>Números de Emergência Brasil</Text>
          <View style={styles.emergencyNumbers}>
            <View style={styles.numberItem}>
              <Text style={styles.numberLabel}>SAMU</Text>
              <Text style={styles.numberValue}>192</Text>
            </View>
            <View style={styles.numberItem}>
              <Text style={styles.numberLabel}>Polícia</Text>
              <Text style={styles.numberValue}>190</Text>
            </View>
            <View style={styles.numberItem}>
              <Text style={styles.numberLabel}>Bombeiros</Text>
              <Text style={styles.numberValue}>193</Text>
            </View>
          </View>
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
  appInfoCard: {
    backgroundColor: Colors.white,
    margin: Sizes.md,
    padding: Sizes.xxl,
    borderRadius: 16,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  appName: {
    fontSize: FontSizes.xxl,
    fontWeight: 'bold',
    color: Colors.dark,
    marginTop: Sizes.lg,
  },
  version: {
    fontSize: FontSizes.md,
    color: Colors.gray,
    marginTop: Sizes.xs,
  },
  section: {
    backgroundColor: Colors.white,
    marginHorizontal: Sizes.md,
    marginVertical: Sizes.md,
    padding: Sizes.lg,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2.84,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Sizes.md,
  },
  sectionTitle: {
    fontSize: FontSizes.lg,
    fontWeight: '700',
    color: Colors.dark,
    marginLeft: Sizes.md,
  },
  sectionContent: {
    fontSize: FontSizes.sm,
    color: Colors.dark,
    lineHeight: 22,
  },
  featuresList: {
    marginTop: Sizes.md,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: Sizes.md,
  },
  featureText: {
    fontSize: FontSizes.sm,
    color: Colors.dark,
    marginLeft: Sizes.md,
    flex: 1,
    lineHeight: 20,
  },
  disclaimerCard: {
    backgroundColor: '#FFE5E5',
    marginHorizontal: Sizes.md,
    marginVertical: Sizes.md,
    padding: Sizes.lg,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: Colors.danger,
  },
  disclaimerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Sizes.md,
  },
  disclaimerTitle: {
    fontSize: FontSizes.lg,
    fontWeight: '700',
    color: Colors.danger,
    marginLeft: Sizes.md,
  },
  disclaimerText: {
    fontSize: FontSizes.sm,
    color: Colors.dark,
    lineHeight: 20,
  },
  emergencyReminder: {
    backgroundColor: Colors.white,
    marginHorizontal: Sizes.md,
    marginVertical: Sizes.md,
    padding: Sizes.lg,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2.84,
  },
  emergencyTitle: {
    fontSize: FontSizes.md,
    fontWeight: '700',
    color: Colors.dark,
    marginBottom: Sizes.lg,
  },
  emergencyNumbers: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  numberItem: {
    alignItems: 'center',
  },
  numberLabel: {
    fontSize: FontSizes.sm,
    color: Colors.gray,
    marginBottom: Sizes.xs,
  },
  numberValue: {
    fontSize: FontSizes.lg,
    fontWeight: 'bold',
    color: Colors.danger,
  },
  spacer: {
    height: Sizes.xl,
  },
});

export default AboutUsScreen;
