import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors, Sizes, FontSizes } from '../theme/theme';
import Header from '../components/Header';

const HomeScreen = ({ navigation }) => {
  const mainActions = [
    {
      id: '1',
      title: 'Primeiros Socorros',
      icon: 'heart-pulse',
      color: Colors.primary,
      screen: 'FirstAidStack',
    },
    {
      id: '2',
      title: 'Emergência',
      icon: 'phone-alert',
      color: Colors.danger,
      screen: 'Emergency',
    },
    {
      id: '3',
      title: 'Saiba Mais',
      icon: 'information',
      color: Colors.secondary,
      screen: 'AboutUs',
    },
  ];

  const tips = [
    {
      id: '1',
      title: 'Mantenha contatos salvos',
      description: 'Salve números de emergência no seu telefone',
      icon: 'phone-lock',
    },
    {
      id: '2',
      title: 'Tenha um kit de primeiros socorros',
      description: 'Prepare um kit básico em casa e no carro',
      icon: 'briefcase-medical',
    },
    {
      id: '3',
      title: 'Aprenda RCP',
      description: 'Pode salvar vidas em situações críticas',
      icon: 'heart-handshake',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header title="SocorroJá" />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Welcome Banner */}
        <View style={styles.banner}>
          <MaterialCommunityIcons
            name="hospital-box"
            size={48}
            color={Colors.primary}
          />
          <Text style={styles.bannerTitle}>Bem-vindo ao SocorroJá!</Text>
          <Text style={styles.bannerDescription}>
            Sua fonte confiável de orientação em emergências médicas
          </Text>
        </View>

        {/* Main Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ações Rápidas</Text>
          <View style={styles.actionsGrid}>
            {mainActions.map((action) => (
              <TouchableOpacity
                key={action.id}
                style={styles.actionButton}
                onPress={() => navigation.navigate(action.screen)}
              >
                <View
                  style={[styles.actionIcon, { backgroundColor: action.color }]}
                >
                  <MaterialCommunityIcons
                    name={action.icon}
                    size={32}
                    color={Colors.white}
                  />
                </View>
                <Text style={styles.actionText}>{action.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Important Tips */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Dicas Importantes</Text>
          {tips.map((tip) => (
            <View key={tip.id} style={styles.tipCard}>
              <MaterialCommunityIcons
                name={tip.icon}
                size={24}
                color={Colors.primary}
              />
              <View style={styles.tipContent}>
                <Text style={styles.tipTitle}>{tip.title}</Text>
                <Text style={styles.tipDescription}>{tip.description}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Disclaimer */}
        <View style={styles.disclaimerSection}>
          <MaterialCommunityIcons
            name="alert-circle-outline"
            size={20}
            color={Colors.warning}
          />
          <Text style={styles.disclaimerText}>
            Este app é apenas para fins educacionais. Sempre ligue para
            emergência (192, 190, 193) em caso de urgência real.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light,
  },
  banner: {
    backgroundColor: Colors.white,
    paddingVertical: Sizes.xxl,
    alignItems: 'center',
    marginBottom: Sizes.lg,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2.84,
  },
  bannerTitle: {
    fontSize: FontSizes.xxl,
    fontWeight: 'bold',
    color: Colors.dark,
    marginTop: Sizes.md,
  },
  bannerDescription: {
    fontSize: FontSizes.md,
    color: Colors.gray,
    marginTop: Sizes.sm,
    textAlign: 'center',
    paddingHorizontal: Sizes.lg,
  },
  section: {
    marginBottom: Sizes.xxl,
  },
  sectionTitle: {
    fontSize: FontSizes.lg,
    fontWeight: '700',
    color: Colors.dark,
    marginLeft: Sizes.md,
    marginBottom: Sizes.lg,
  },
  actionsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: Sizes.md,
  },
  actionButton: {
    alignItems: 'center',
    flex: 1,
  },
  actionIcon: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Sizes.md,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  actionText: {
    fontSize: FontSizes.sm,
    fontWeight: '600',
    color: Colors.dark,
    textAlign: 'center',
  },
  tipCard: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    marginHorizontal: Sizes.md,
    marginVertical: Sizes.sm,
    padding: Sizes.md,
    borderRadius: 12,
    alignItems: 'flex-start',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2.84,
  },
  tipContent: {
    flex: 1,
    marginLeft: Sizes.md,
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
  disclaimerSection: {
    backgroundColor: '#FFF3CD',
    marginHorizontal: Sizes.md,
    marginBottom: Sizes.xxl,
    padding: Sizes.md,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  disclaimerText: {
    fontSize: FontSizes.sm,
    color: Colors.dark,
    marginLeft: Sizes.md,
    flex: 1,
    lineHeight: 20,
  },
});

export default HomeScreen;
