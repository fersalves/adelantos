# 🚀 Instruções de Instalação e Execução

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 16 ou superior)
  - Download: https://nodejs.org/
  - Verifique: `node --version`

- **npm** (geralmente vem com Node.js)
  - Verifique: `npm --version`

- **Git** (opcional, para controle de versão)
  - Download: https://git-scm.com/

### Para iOS (apenas macOS)

- **Xcode** (versão mais recente)
  - Instale pela App Store
  - Instale as Command Line Tools: `xcode-select --install`

- **CocoaPods**
  - Instale: `sudo gem install cocoapods`

### Para Android

- **Android Studio** com:
  - Android SDK
  - Android SDK Platform
  - Android Virtual Device (AVD)
  - Configure as variáveis de ambiente `ANDROID_HOME` e `ANDROID_SDK_ROOT`

## 📦 Instalação

### 1. Navegue até a pasta do projeto

```bash
cd adelantos
```

### 2. Instale as dependências

```bash
npm install
```

Isso pode levar alguns minutos...

## ▶️ Executando a Aplicação

### Opção 1: Usando Expo Go (Mais Fácil)

1. Instale o app **Expo Go** no seu celular:
   - iOS: https://apps.apple.com/app/expo-go/id982107779
   - Android: https://play.google.com/store/apps/details?id=host.exp.exponent

2. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```

3. Escaneie o QR Code que aparece no terminal ou navegador:
   - **iOS**: Use o app Camera nativo
   - **Android**: Use o app Expo Go

### Opção 2: Emulador/Simulador

#### iOS (apenas macOS)

```bash
npm run ios
```

Isso irá:
1. Abrir o Xcode Simulator
2. Compilar e executar a aplicação

#### Android

1. Abra o Android Studio e inicie um emulador (AVD)

2. Execute:
   ```bash
   npm run android
   ```

### Opção 3: Web (para desenvolvimento rápido)

```bash
npm run web
```

A aplicação abrirá no seu navegador padrão.

## 🔧 Comandos Úteis

### Limpar cache

```bash
# Limpar cache do Expo
npx expo start -c

# Limpar cache do Metro bundler
npx react-native start --reset-cache
```

### Verificar dependências

```bash
npm outdated
```

### Atualizar dependências

```bash
npm update
```

## 📱 Testando no Dispositivo Físico

### iOS (via USB)

1. Conecte seu iPhone ao Mac via USB
2. Confie no computador no iPhone
3. Execute: `npm run ios --device`

### Android (via USB)

1. Ative o **Modo Desenvolvedor** no Android:
   - Vá em Configurações > Sobre o telefone
   - Toque 7 vezes em "Número da versão"

2. Ative **Depuração USB**:
   - Configurações > Opções do desenvolvedor > Depuração USB

3. Conecte o dispositivo via USB

4. Verifique se foi detectado:
   ```bash
   adb devices
   ```

5. Execute:
   ```bash
   npm run android
   ```

## ❓ Solução de Problemas

### Erro: "Metro bundler não está rodando"

```bash
npx expo start --clear
```

### Erro: "Unable to resolve module"

```bash
rm -rf node_modules
npm install
npm start -- --reset-cache
```

### Erro no iOS: "Command PhaseScriptExecution failed"

```bash
cd ios
pod install
cd ..
npm run ios
```

### Erro no Android: "SDK location not found"

1. Crie o arquivo `android/local.properties`
2. Adicione: `sdk.dir=/Users/SEUUSUARIO/Library/Android/sdk`

### Porta já em uso

```bash
# Matar processo na porta 8081
lsof -ti:8081 | xargs kill -9

# Ou use uma porta diferente
npm start -- --port 8082
```

## 📚 Recursos Úteis

- [Documentação Expo](https://docs.expo.dev/)
- [Documentação React Native](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)
- [Expo Community](https://forums.expo.dev/)

## 🆘 Precisa de Ajuda?

1. Verifique a [documentação do Expo](https://docs.expo.dev/)
2. Consulte os [issues no GitHub](https://github.com/expo/expo/issues)
3. Pergunte na comunidade Expo

## ✅ Checklist de Verificação

Antes de reportar um problema, verifique:

- [ ] Node.js está instalado (versão 16+)
- [ ] npm install foi executado com sucesso
- [ ] Não há erros no terminal
- [ ] O cache foi limpo (`npm start -- -c`)
- [ ] As dependências estão atualizadas
- [ ] O emulador/simulador está rodando (se aplicável)

---

**Última atualização**: Outubro 2025

