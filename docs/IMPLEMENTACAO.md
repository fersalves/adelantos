# Documentação de Implementação - Tela de Ofertas

## 📋 Visão Geral

Esta documentação descreve a implementação da tela de Ofertas baseada no design do Figma.

## 🎨 Design Original

A tela foi criada a partir do frame "Ofertas 146" do Figma e inclui:

- **Header** com botão de voltar e botões de ação (notificações e ajuda)
- **Saudação** ao usuário ("Hola, Santi")
- **Cartão de valor** mostrando o montante disponível para saque imediato

## 🏗️ Arquitetura

### Estrutura de Componentes

```
OfertasScreen (Tela principal)
├── IconButton (Botões do header)
│   ├── ChevronLeftIcon
│   ├── BellIcon (com badge de notificação)
│   └── QuestionIcon
└── MoneyCard (Cartão de valor)
    └── ChevronDownIcon
```

### Componentes Criados

#### 1. **OfertasScreen** (`src/screens/OfertasScreen.tsx`)
- Tela principal da aplicação
- Gerencia o layout geral e navegação
- Responsável pelo header e conteúdo principal

**Props**: Nenhuma (é uma tela raiz)

**Features**:
- SafeAreaView para lidar com notch/status bar
- Header com botões de navegação e ações
- Badge de notificação
- Área de conteúdo com saudação e cartão

#### 2. **MoneyCard** (`src/components/MoneyCard.tsx`)
- Componente reutilizável para exibir valores monetários
- Suporta interação (TouchableOpacity)

**Props**:
```typescript
interface MoneyCardProps {
  title: string;        // Título do cartão
  amount: string;       // Valor a ser exibido
  currency: string;     // Símbolo da moeda
  onPress: () => void;  // Callback de clique
}
```

**Design**:
- Fundo branco com shadow sutil
- Border radius de 16px
- Padding interno de 16px
- Layout flexível com ícone à direita

#### 3. **IconButton** (`src/components/IconButton.tsx`)
- Botão genérico para ícones
- Tamanho fixo de 40x40px
- Background cinza claro (#EFEFEF)

**Props**:
```typescript
interface IconButtonProps {
  children: React.ReactNode;  // Ícone a ser exibido
  onPress: () => void;        // Callback de clique
  style?: ViewStyle;          // Estilos opcionais
}
```

#### 4. **Ícones SVG**

Todos os ícones foram criados como componentes SVG usando `react-native-svg`:

- **ChevronLeftIcon**: Seta para voltar (24x24px)
- **BellIcon**: Sino de notificações (24x24px)
- **QuestionIcon**: Ícone de ajuda (24x24px)
- **ChevronDownIcon**: Seta para baixo no cartão (12x12px)

## 🎨 Sistema de Design

### Cores

```typescript
// Cores principais
backgroundColor: '#f7f7f7'      // Fundo da tela
cardBackground: '#FFFFFF'       // Fundo dos cartões
buttonBackground: '#EFEFEF'     // Fundo dos botões
notificationBadge: '#F23D4F'    // Badge de notificação
textPrimary: 'rgba(0,0,0,0.9)' // Texto principal
textSecondary: '#252537'        // Texto secundário
```

### Tipografia

```typescript
// Saudação
fontSize: 16
fontWeight: '400'
lineHeight: 20

// Título do cartão
fontSize: 16
fontWeight: '400'
lineHeight: 28

// Valor monetário
fontSize: 32
fontWeight: '600'
lineHeight: 40

// Moeda
fontSize: 12
fontWeight: '600'
lineHeight: 16
```

### Espaçamentos

```typescript
screenPadding: 16       // Padding lateral da tela
cardPadding: 16         // Padding interno dos cartões
cardBorderRadius: 16    // Border radius dos cartões
buttonBorderRadius: 12  // Border radius dos botões
headerGap: 8           // Espaçamento entre botões do header
contentGap: 4          // Espaçamento no conteúdo do cartão
```

## 🔄 Fluxo de Navegação

```
App.tsx
  └─> NavigationContainer
      └─> Stack.Navigator
          └─> OfertasScreen (tela inicial)
```

## 📱 Responsividade

- Uso de `SafeAreaView` para compatibilidade com diferentes dispositivos
- Layout flexível que se adapta a diferentes tamanhos de tela
- Componentes com dimensões fixas quando necessário (botões, ícones)
- Cards com largura flexível

## 🚀 Como Usar

### Executar o Projeto

```bash
# Instalar dependências
npm install

# Iniciar o projeto
npm start

# Executar no iOS
npm run ios

# Executar no Android
npm run android
```

### Modificar a Tela

#### Alterar o valor exibido:

```tsx
<MoneyCard
  title="Receba agora"
  amount="15.000"  // Altere o valor aqui
  currency="$"
  onPress={() => console.log('Pressed')}
/>
```

#### Alterar a saudação:

```tsx
<Text style={styles.greeting}>Hola, Maria</Text>
```

#### Adicionar lógica ao badge de notificação:

```tsx
{notificationCount > 0 && (
  <View style={styles.notificationBadge}>
    <Text style={styles.badgeText}>{notificationCount}</Text>
  </View>
)}
```

## 🎯 Próximos Passos

- [ ] Integrar com API real para buscar dados
- [ ] Adicionar estado global (Context API ou Redux)
- [ ] Implementar navegação para outras telas
- [ ] Adicionar animações de transição
- [ ] Implementar tratamento de erros
- [ ] Adicionar testes unitários
- [ ] Adicionar loading states
- [ ] Implementar pull-to-refresh
- [ ] Adicionar modo escuro (dark mode)
- [ ] Internacionalização (i18n)

## 📚 Dependências Principais

- `react-native`: Framework base
- `expo`: Plataforma de desenvolvimento
- `@react-navigation/native`: Navegação
- `react-native-svg`: Suporte para SVG
- `react-native-safe-area-context`: Safe areas

## 🐛 Problemas Conhecidos

Nenhum problema conhecido no momento.

## 📝 Notas

- O projeto foi configurado com TypeScript para melhor type safety
- Todos os componentes são funcionais (hooks)
- O código segue as convenções do React Native e Expo
- Os estilos usam StyleSheet para melhor performance


