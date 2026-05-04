# 🚀 GUIA RÁPIDO DE INÍCIO - SocorroJá

## ⏱️ Tempo Estimado: 5-10 minutos

### Pré-requisitos
- Node.js 14+ instalado
- npm (vem com Node.js)
- Um smartphone com Expo Go instalado (Android/iOS)

---

## 📋 Passo 1: Abra o Terminal/PowerShell

### Windows:
1. Clique com direito na pasta `Socorroja`
2. Selecione "Abrir PowerShell aqui" (ou Terminal)

### macOS/Linux:
```bash
cd caminho/para/Socorroja
```

---

## 🔧 Passo 2: Instale as Dependências

Digite no terminal:
```bash
npm install
```

⏳ Isso pode levar 2-5 minutos na primeira vez.

Se vir erros, tente:
```bash
npm install --legacy-peer-deps
```

---

## ▶️ Passo 3: Inicie o Servidor

Após a instalação completar, digite:
```bash
npx expo start
```

Você verá algo como:
```
Expo DevTools is running at http://localhost:19002
Opening DevTools in the browser...
› Press 'a' to open Android emulator.
› Press 'i' to open iOS simulator.
› Press 'w' to open web.
› Press 'r' to reload app.
› Press 'q' to quit.
```

---

## 📱 Passo 4: Escolha Seu Dispositivo

### Opção A: Smartphone Real (Recomendado)

1. **Instale Expo Go**
   - Android: Google Play Store
   - iOS: App Store

2. **Escaneie o QR Code**
   - No terminal, verá um QR code
   - Abra a câmera do seu smartphone e aponte para o QR
   - Uma notificação abrirá o Expo Go automaticamente

3. **Aguarde Carregar**
   - A app carregará em 10-20 segundos
   - Pronto! 🎉

### Opção B: Simulador Android

Pressione `a` no terminal (requer Android Studio instalado)

### Opção C: Simulador iOS

Pressione `i` no terminal (requer Xcode instalado, macOS only)

### Opção D: Navegador Web

Pressione `w` no terminal
- App abrirá em http://localhost:19000

---

## 🎮 Usando o App

### Tela Inicial
- Clique em **Primeiros Socorros** para ver guias
- Clique em **Emergência** para números
- Clique em **Sobre** para informações

### Primeiros Socorros
- Veja lista de 7 procedimentos
- Use a busca para filtrar
- Clique em um para ver detalhes com 5 passos cada

### Emergência
- Clique em um número para **LIGAR** direto
- Veja dicas práticas

### Sobre
- Informações do app
- Aviso legal importante

---

## 🔄 Atualizando Seu Código

Qualquer mudança que você fizer será **recarregada automaticamente**!

Para forçar recarga:
- Pressione `r` no terminal

Para limpar cache:
- Pressione `c` no terminal

---

## 🧪 Testando Diferentes Telas

Você pode navegar entre abas clicando nos ícones no fundo da tela:
- 🏠 Início
- ❤️ Primeiros Socorros
- 📞 Emergência
- ℹ️ Sobre

---

## 📝 Adicionando Seu Próprio Guia

1. Abra `src/data/firstAidGuides.js`
2. Adicione um novo objeto no array:

```javascript
{
  id: '8',
  title: 'Meu Novo Procedimento',
  category: 'Crítico', // ou 'Urgente'
  icon: 'heart', // Mude o ícone
  description: 'Descrição breve',
  steps: [
    {
      number: 1,
      title: 'Primeiro Passo',
      description: 'O que fazer...',
    },
    // ... adicione até 5 passos
  ],
  tips: [
    'Dica importante 1',
    'Dica importante 2',
  ],
},
```

3. Salve o arquivo
4. App atualiza automaticamente! 🎉

---

## 🎨 Mudando as Cores

1. Abra `src/theme/theme.js`
2. Altere o objeto `Colors`:

```javascript
export const Colors = {
  primary: '#E74C3C',        // Vermelho principal
  secondary: '#3498DB',      // Azul
  success: '#27AE60',        // Verde
  warning: '#F39C12',        // Laranja
  danger: '#C0392B',         // Vermelho escuro
  light: '#ECF0F1',          // Cinza claro
  dark: '#2C3E50',           // Cinza escuro
  white: '#FFFFFF',          // Branco
  gray: '#95A5A6',           // Cinza
  lightGray: '#BDC3C7',      // Cinza claro
};
```

3. App atualiza com novas cores! 🎨

---

## 🚫 Problemas Comuns

### Erro: "expo command not found"
```bash
npm install -g expo-cli
npx expo start
```

### App não atualiza após mudança
Pressione `r` no terminal para recarregar

### Erro de permissão ao ligar
- A funcionalidade de ligar só funciona em dispositivos reais
- Web não consegue fazer chamadas

### Erro "Cannot find module"
```bash
rm -rf node_modules
npm install
```

---

## 📦 Deployando para Produção

### Build Android (APK):
```bash
eas build --platform android
```

### Build iOS:
```bash
eas build --platform ios
```

Você precisará de conta na Expo (grátis em https://expo.dev)

---

## 📚 Arquivos Importantes

```
Socorroja/
├── App.js                    ← Ponto de entrada
├── README.md                 ← Documentação
├── DEVELOPMENT.md            ← Guia de desenvolvimento
├── package.json              ← Dependências
└── src/
    ├── screens/              ← Telas do app
    ├── components/           ← Componentes reutilizáveis
    ├── data/                 ← Dados (guias, contatos)
    ├── theme/                ← Cores e espaçamento
    └── navigation/           ← Navegação
```

---

## ✨ Próximas Ações

- [ ] Instalar Node.js (se não tiver)
- [ ] Abrir terminal na pasta
- [ ] Rodar `npm install`
- [ ] Rodar `npx expo start`
- [ ] Escanear QR com Expo Go
- [ ] Explorar o app! 🎉

---

## 💬 Dúvidas?

1. **Consulte**: DEVELOPMENT.md (guia técnico detalhado)
2. **Consulte**: README.md (documentação geral)
3. **Recursos**: https://docs.expo.dev

---

## 🎉 Parabéns!

Você agora tem um app de primeiros socorros funcionando! 🚀

**Desenvolvido com ❤️ para salvar vidas**
