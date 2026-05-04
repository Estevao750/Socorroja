# SocorroJá - Guia Completo de Primeiros Socorros

Um aplicativo mobile educacional desenvolvido com **React Native** e **Expo** para fornecer orientações rápidas e confiáveis sobre primeiros socorros e emergências médicas no Brasil.

## 🎯 Funcionalidades

- **Guias de Primeiros Socorros**: Instruções passo a passo para RCP, engasgo, hemorragia, queimaduras, desmaio, envenenamento e fraturas
- **Números de Emergência**: Acesso rápido aos contatos principais (SAMU 192, Polícia 190, Bombeiros 193) com funcionalidade de ligar direto
- **Busca**: Procure por procedimentos específicos de primeiros socorros
- **Interface Intuitiva**: Design limpo e fácil de navegar em situações de urgência
- **Dicas Importantes**: Conselhos práticos para preparação e resposta em emergências
- **Informações Educacionais**: Seção "Sobre" com missão, visão e características do app

## 🚀 Instalação e Execução

### Pré-requisitos
- Node.js 14+ instalado
- npm ou yarn instalado
- Expo CLI (instale com `npm install -g expo-cli`)

### Passos

1. **Clone ou acesse o diretório do projeto:**
```bash
cd Socorroja
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Inicie o servidor Expo:**
```bash
npx expo start
```

4. **Execute no seu dispositivo:**
   - **Android**: Escaneia o código QR com o Expo Go app
   - **iOS**: Escaneia o código QR com a câmera nativa (requer Expo Go instalado)
   - **Web**: Pressione `w` no terminal para abrir no navegador

## 📁 Estrutura do Projeto

```
Socorroja/
├── App.js                          # Ponto de entrada do app
├── package.json                    # Dependências e scripts
├── README.md                       # Este arquivo
└── src/
    ├── components/                 # Componentes reutilizáveis
    │   ├── Header.js              # Cabeçalho padrão
    │   ├── GuideCard.js           # Card para exibir guias
    │   ├── StepCard.js            # Card para passos
    │   └── EmergencyContactCard.js # Card para contatos
    ├── screens/                    # Telas do app
    │   ├── HomeScreen.js          # Tela inicial
    │   ├── FirstAidGuideScreen.js # Lista de guias de primeiros socorros
    │   ├── GuideDetailScreen.js   # Detalhes de um guia específico
    │   ├── EmergencyScreen.js     # Números e dicas de emergência
    │   └── AboutUsScreen.js       # Sobre o app
    ├── navigation/
    │   └── MainNavigator.js       # Configuração de navegação
    ├── theme/
    │   ├── theme.js               # Cores e espaçamentos
    │   └── themeContext.js        # Contexto de tema
    ├── data/
    │   ├── firstAidGuides.js      # Dados dos guias de primeiros socorros
    │   ├── emergencyContacts.js   # Contatos de emergência
    │   └── aboutUs.js             # Informações do app
    └── assets/                    # (Pasta para imagens futura)
```

## 🎨 Tema e Cores

O app utiliza um sistema de cores bem definido:

- **Primária**: Vermelho (#E74C3C) - Para ações principais
- **Secundária**: Azul (#3498DB) - Para ações secundárias
- **Sucesso**: Verde (#27AE60) - Para confirmações
- **Aviso**: Laranja (#F39C12) - Para alertas
- **Perigo**: Vermelho Escuro (#C0392B) - Para emergências críticas

## 📱 Telas Principais

### 1. **Tela Inicial (Home)**
- Apresentação visual do app
- Botões rápidos de acesso às funcionalidades principais
- Dicas importantes para preparação

### 2. **Primeiros Socorros**
- Lista pesquisável de 7 guias essenciais:
  - Ressuscitação Cardiopulmonar (RCP)
  - Engasgo
  - Hemorragia
  - Queimaduras
  - Desmaio
  - Envenenamento/Intoxicação
  - Fratura/Luxação
- Cada guia contém:
  - Descrição do problema
  - Passos detalhados (5 passos cada)
  - Dicas importantes
  - Aviso sobre emergência

### 3. **Emergência**
- 6 números de emergência com funcionalidade de ligar
- Informações sobre cada serviço
- Dicas práticas para ligar para emergência
- Instruções de como informar localização e descrever o problema

### 4. **Sobre Nós**
- Missão do app
- Visão de futuro
- Principais características
- Aviso legal
- Números de emergência em destaque

## 🛠️ Tecnologias Utilizadas

- **React Native 0.71.8**: Framework para desenvolvimento mobile
- **Expo 48**: Plataforma para executar e testar React Native
- **React Navigation 6.1.6**: Navegação entre telas
- **@expo/vector-icons**: Ícones MaterialCommunity
- **StyleSheet**: Para estilização
- **Linking**: Para fazer chamadas telefônicas

## 📋 Componentes Principais

### Header
Cabeçalho reutilizável com título e ícones opcionais.

### GuideCard
Card que exibe um guia de primeiros socorros com ícone, título, categoria e indicador visual.

### StepCard
Card para exibir cada passo de um procedimento com número, título e descrição.

### EmergencyContactCard
Card para contatos de emergência com funcionalidade de ligar direto ao toque.

## 🔄 Fluxo de Navegação

```
Home
├── Primeiros Socorros
│   └── Detalhes do Guia
├── Emergência
└── Sobre
```

A navegação usa bottom tabs para acesso rápido às 4 seções principais.

## ⚠️ Aviso Legal

Este aplicativo é **apenas para fins educacionais**. Não substitui o atendimento médico profissional. Em caso de emergência real, sempre ligue para os números oficiais (192 SAMU, 190 Polícia, 193 Bombeiros).

## 🎓 Como Usar Este Projeto

1. **Para Aprender**: Estude a estrutura, componentes e como é feita a navegação
2. **Para Expandir**: Adicione mais guias, mude as cores, personalize conteúdo
3. **Para Distribuir**: Compile com EAS Build ou crie um APK com Expo

## 📝 Dados Inclusos

- 7 guias completos de primeiros socorros
- 6 números de emergência brasileiros
- 5 dicas importantes
- Interface completa com 5 telas

## 🤝 Contribuições

Este projeto é um template educacional. Sinta-se livre para:
- Melhorar a interface
- Adicionar mais guias
- Traduzir para outros idiomas
- Criar versão web

## 📞 Números de Emergência do Brasil

| Serviço | Número |
|---------|--------|
| SAMU (Ambulância) | 192 |
| Polícia Militar | 190 |
| Corpo de Bombeiros | 193 |
| Centro de Toxicologia | 0800 722 6001 |
| CVV (Apoio Emocional) | 188 |

---

**Desenvolvido com ❤️ para salvar vidas através da educação**
