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
import EmergencyContactCard from '../components/EmergencyContactCard';
import { emergencyContacts, tips } from '../data/emergencyContacts';

const EmergencyScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Emergência" />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Alert Banner */}
        <View style={styles.alertBanner}>
          <MaterialCommunityIcons
            name="phone-alert"
            size={32}
            color={Colors.danger}
          />
          <View style={styles.alertContent}>
            <Text style={styles.alertTitle}>Números de Emergência</Text>
            <Text style={styles.alertDescription}>
              Toque para ligar imediatamente
            </Text>
          </View>
        </View>

        {/* Main Emergency Numbers */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contatos Principais</Text>
          {emergencyContacts.slice(0, 3).map((contact) => (
            <EmergencyContactCard
              key={contact.id}
              name={contact.name}
              number={contact.number}
              description={contact.description}
            />
          ))}
        </View>

        {/* Additional Contacts */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contatos Adicionais</Text>
          {emergencyContacts.slice(3).map((contact) => (
            <EmergencyContactCard
              key={contact.id}
              name={contact.name}
              number={contact.number}
              description={contact.description}
            />
          ))}
        </View>

        {/* Tips Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Dicas Importantes</Text>
          {tips.map((tip) => (
            <View key={tip.id} style={styles.tipCard}>
              <View style={styles.tipIcon}>
                <MaterialCommunityIcons
                  name="lightbulb-outline"
                  size={24}
                  color={Colors.primary}
                />
              </View>
              <View style={styles.tipContent}>
                <Text style={styles.tipTitle}>{tip.title}</Text>
                <Text style={styles.tipDescription}>{tip.description}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Information Card */}
        <View style={styles.infoCard}>
          <MaterialCommunityIcons
            name="information-outline"
            size={24}
            color={Colors.secondary}
          />
          <Text style={styles.infoTitle}>Ao Ligar para Emergência</Text>
          <Text style={styles.infoText}>
            • Informe sua localização exata{'\n'}
            • Descreva claramente o problema{'\n'}
            • Siga as instruções do atendente{'\n'}
            • Mantenha a linha aberta{'\n'}
            • Não desligue até ser informado
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
  alertBanner: {
    backgroundColor: Colors.danger,
    margin: Sizes.md,
    padding: Sizes.lg,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  alertContent: {
    marginLeft: Sizes.lg,
    flex: 1,
  },
  alertTitle: {
    fontSize: FontSizes.lg,
    fontWeight: 'bold',
    color: Colors.white,
  },
  alertDescription: {
    fontSize: FontSizes.sm,
    color: Colors.light,
    marginTop: Sizes.xs,
  },
  section: {
    marginVertical: Sizes.lg,
  },
  sectionTitle: {
    fontSize: FontSizes.lg,
    fontWeight: '700',
    color: Colors.dark,
    marginLeft: Sizes.md,
    marginBottom: Sizes.lg,
  },
  tipCard: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    marginHorizontal: Sizes.md,
    marginVertical: Sizes.sm,
    padding: Sizes.md,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2.84,
  },
  tipIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: Colors.light,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Sizes.md,
  },
  tipContent: {
    flex: 1,
  },
  tipTitle: {
    fontSize: FontSizes.md,
    fontWeight: '600',
    color: Colors.dark,
    marginBottom: Sizes.xs,
  },
  tipDescription: {
    fontSize: FontSizes.sm,
    color: Colors.gray,
  },
  infoCard: {
    backgroundColor: Colors.white,
    marginHorizontal: Sizes.md,
    marginVertical: Sizes.lg,
    padding: Sizes.lg,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: Colors.secondary,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  infoTitle: {
    fontSize: FontSizes.md,
    fontWeight: '700',
    color: Colors.dark,
    marginTop: Sizes.md,
    marginBottom: Sizes.md,
  },
  infoText: {
    fontSize: FontSizes.sm,
    color: Colors.dark,
    lineHeight: 22,
  },
  spacer: {
    height: Sizes.xl,
  },
});

export default EmergencyScreen;
