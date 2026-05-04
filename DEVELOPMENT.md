# Guia de Desenvolvimento - SocorroJá

## 📚 Entendendo a Estrutura

### 1. Ponto de Entrada: `App.js`
Configura os provedores (Theme, Navigation, SafeArea) e inicia o app.

```javascript
export default function App() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
```

### 2. Theme System: `src/theme/`
- **theme.js**: Define Colors, Sizes e FontSizes
- **themeContext.js**: Gerencia estado de tema

Use as constantes assim:
```javascript
import { Colors, Sizes, FontSizes } from '../theme/theme';

// Cores
backgroundColor: Colors.primary
paddingHorizontal: Sizes.md
fontSize: FontSizes.lg
```

### 3. Navigation: `src/navigation/MainNavigator.js`
Estrutura:
- Tab Navigator (4 abas)
  - Home (HomeScreen)
  - Primeiros Socorros (FirstAidStack)
    - FirstAidGuideScreen
    - GuideDetailScreen
  - Emergência (EmergencyScreen)
  - Sobre (AboutUsScreen)

### 4. Data: `src/data/`
Arquivos com dados estáticos (sem API):
- `firstAidGuides.js`: 7 guias com 5 passos cada
- `emergencyContacts.js`: Contatos de emergência
- `aboutUs.js`: Informações do app

## 🎨 Criando Novos Componentes

### Template Básico:
```javascript
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, Sizes, FontSizes } from '../theme/theme';

const MyComponent = ({ prop1, prop2 }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Conteúdo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    padding: Sizes.md,
    borderRadius: 12,
  },
  text: {
    fontSize: FontSizes.md,
    color: Colors.dark,
  },
});

export default MyComponent;
```

## 🖼️ Criando Novas Telas

### Template:
```javascript
import React from 'react';
import { View, ScrollView, SafeAreaView, StyleSheet } from 'react-native';
import { Colors, Sizes } from '../theme/theme';
import Header from '../components/Header';

const MyScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Meu Título" />
      
      <ScrollView>
        {/* Conteúdo aqui */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light,
  },
});

export default MyScreen;
```

## 📱 Navegação entre Telas

### De uma aba para outra:
```javascript
navigation.navigate('EmergencyScreen');
```

### No stack (Primeiros Socorros):
```javascript
// Ir para detalhes
navigation.navigate('GuideDetail', { guide: selectedGuide });

// Voltar
navigation.goBack();
```

## 🎨 Sistema de Cores

| Uso | Cor | Código |
|-----|-----|--------|
| Primária (Ações) | Vermelho | #E74C3C |
| Secundária | Azul | #3498DB |
| Sucesso | Verde | #27AE60 |
| Aviso | Laranja | #F39C12 |
| Perigo | Vermelho Escuro | #C0392B |
| Fundo | Cinza Claro | #ECF0F1 |
| Texto | Cinza Escuro | #2C3E50 |
| Branco | Branco | #FFFFFF |

## 📏 Sistema de Espaçamento

```
xs:  4px  (margem mínima)
sm:  8px  (pequeno)
md: 16px  (médio - padrão)
lg: 24px  (grande)
xl: 32px  (extra grande)
xxl:48px  (máximo)
```

## 🔤 Tamanhos de Fonte

```
xs:  12px
sm:  14px
md:  16px (corpo)
lg:  18px (subseção)
xl:  20px (seção)
xxl: 24px (título)
xxxl:32px (grande)
```

## 🧩 Componentes Disponíveis

### Header
```javascript
<Header 
  title="Meu Título"
  leftIcon="arrow-left"
  rightIcon="dots-vertical"
  onLeftPress={() => {}}
  onRightPress={() => {}}
/>
```

### GuideCard
```javascript
<GuideCard
  title="RCP"
  category="Crítico"
  icon="heart"
  onPress={() => navigation.navigate('GuideDetail', { guide })}
/>
```

### StepCard
```javascript
<StepCard 
  step={{
    number: 1,
    title: 'Verificar',
    description: 'Verifique...'
  }}
/>
```

### EmergencyContactCard
```javascript
<EmergencyContactCard
  name="SAMU"
  number="192"
  description="Ambulância"
/>
```

## 🔌 Integrar API (Futuro)

Para quando precisar conectar a uma API:

```javascript
// Em src/services/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'https://sua-api.com'
});

export const getGuides = () => API.get('/guides');
```

Usar em componentes:
```javascript
const [guides, setGuides] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  getGuides().then(res => {
    setGuides(res.data);
    setLoading(false);
  });
}, []);
```

## 🎯 Adicionar Novo Guia

1. Adicione em `src/data/firstAidGuides.js`:
```javascript
{
  id: '8',
  title: 'Seu Procedimento',
  category: 'Crítico', // ou 'Urgente'
  icon: 'your-icon-name',
  description: 'Descrição breve',
  steps: [
    {
      number: 1,
      title: 'Primeiro passo',
      description: 'Descrição detalhada...',
    },
    // ... até 5 passos
  ],
  tips: [
    'Dica 1',
    'Dica 2',
    'Dica 3',
  ],
}
```

2. A tela de listagem atualiza automaticamente!

## 🎯 Adicionar Novo Contato

Em `src/data/emergencyContacts.js`:
```javascript
{
  id: '7',
  name: 'Novo Serviço',
  number: 'XXX',
  description: 'Descrição',
  type: 'category',
}
```

## 🧪 Testando Mudanças

1. **Modificar código**
2. **Salvar arquivo** - Expo recarrega automaticamente
3. **Ver mudanças** no app em tempo real

Se não atualizar:
- Pressione `r` no terminal para recarregar
- Ou `c` para limpar cache

## 🚀 Build para Produção

### Android APK:
```bash
eas build --platform android
```

### iOS IPA:
```bash
eas build --platform ios
```

### Web:
```bash
expo export:web
```

## 📊 Estrutura de Dados Esperada

### FirstAidGuide
```javascript
{
  id: string,
  title: string,
  category: 'Crítico' | 'Urgente',
  icon: string,
  description: string,
  steps: [{
    number: number,
    title: string,
    description: string
  }],
  tips: string[]
}
```

### EmergencyContact
```javascript
{
  id: string,
  name: string,
  number: string,
  description: string,
  type: string
}
```

## 🐛 Debug

### Console Log
```javascript
console.log('Seu debug:', variavel);
```

Veja no terminal onde rodou `npx expo start`.

### React Native Debugger
1. `npx react-native start`
2. `npx react-native run-android` ou `run-ios`
3. Pressione `d` no terminal para abrir debugger

## 📚 Recursos Úteis

- **React Native Docs**: https://reactnative.dev
- **React Navigation**: https://reactnavigation.org
- **Expo Docs**: https://docs.expo.dev
- **MaterialCommunity Icons**: https://materialsecurity.io/icons

## 💡 Boas Práticas

1. **Use SafeAreaView** em todas as telas
2. **Importe Colors, Sizes, FontSizes** em vez de valores hardcoded
3. **Componentes pequenos** - divida quando ficar > 200 linhas
4. **Nomes descritivos** - use `onGuidePress` não `onPress`
5. **StyleSheet.create** - sempre para estilização
6. **FlatList** para listas grandes

## 🔄 Fluxo Típico de Desenvolvimento

1. Design a UI em papel ou Figma
2. Crie componentes reutilizáveis
3. Monte as telas com esses componentes
4. Conecte navegação
5. Passe dados via props ou navegação
6. Teste em simulador/device
7. Deploy com EAS Build

---

**Boa sorte desenvolvendo! 🚀**
