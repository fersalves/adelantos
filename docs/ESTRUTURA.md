# 📐 Estrutura do Projeto Adelantos

## 🗂️ Árvore de Arquivos

```
adelantos/
│
├── 📱 App.tsx                          # Ponto de entrada
│
├── 📦 package.json                     # Dependências
├── ⚙️ tsconfig.json                    # Config TypeScript
├── ⚙️ babel.config.js                  # Config Babel
├── ⚙️ metro.config.js                  # Config Metro bundler
├── ⚙️ app.json                         # Config Expo
│
├── 📖 README.md                        # Visão geral
├── 🚀 INICIO_RAPIDO.md                # Guia rápido
├── 📘 INSTRUCOES.md                   # Guia completo
│
├── 📁 src/
│   │
│   ├── 📱 screens/
│   │   └── OfertasScreen.tsx          # Tela de Ofertas
│   │
│   ├── 🧩 components/
│   │   ├── MoneyCard.tsx              # Cartão de valor
│   │   ├── IconButton.tsx             # Botão com ícone
│   │   │
│   │   └── icons/
│   │       ├── ChevronLeftIcon.tsx    # Ícone seta esquerda
│   │       ├── ChevronDownIcon.tsx    # Ícone seta baixo
│   │       ├── BellIcon.tsx           # Ícone sino
│   │       └── QuestionIcon.tsx       # Ícone ajuda
│   │
│   ├── 🧭 navigation/                 # (vazio - pronto para usar)
│   ├── 🔌 services/                   # (vazio - pronto para usar)
│   ├── 🛠️ utils/                      # (vazio - pronto para usar)
│   └── 🎨 assets/                     # (vazio - pronto para usar)
│
├── 📁 assets/
│   └── README.md                       # Info sobre assets
│
└── 📁 docs/
    ├── IMPLEMENTACAO.md                # Documentação técnica
    └── ESTRUTURA.md                    # Este arquivo
```

## 🏗️ Arquitetura de Componentes

```
App (NavigationContainer)
 │
 └─► Stack.Navigator
      │
      └─► OfertasScreen ───────────────────────────────┐
           │                                            │
           ├─► Header                                   │
           │    ├─► IconButton (Back)                  │
           │    │    └─► ChevronLeftIcon               │
           │    │                                       │
           │    └─► IconButton (Actions)               │
           │         ├─► BellIcon + Badge              │
           │         └─► QuestionIcon                  │
           │                                            │
           └─► Content                                  │
                ├─► Text (Greeting)                    │
                │                                       │
                └─► MoneyCard ─────────────────────────┤
                     ├─► Title                         │
                     ├─► Amount (Currency + Value)     │
                     └─► ChevronDownIcon               │
                                                        │
                                  [Todos interativos]  │
                                  [Prontos para uso]   │
```

## 📋 Fluxo de Dados

```
┌─────────────────────────────────────────────────────┐
│                    App.tsx                          │
│  (Configuração de navegação e providers)           │
└────────────────┬────────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────────┐
│              OfertasScreen                          │
│  - Gerencia estado local                           │
│  - Renderiza layout                                │
│  - Define callbacks                                │
└────────────────┬────────────────────────────────────┘
                 │
                 ├──► MoneyCard (props)
                 │     └─► onPress callback
                 │
                 └──► IconButtons (props)
                       └─► onPress callbacks
```

## 🎨 Sistema de Estilos

Cada componente possui seu próprio `StyleSheet`:

```
src/screens/OfertasScreen.tsx
  └─► StyleSheet com estilos da tela

src/components/MoneyCard.tsx
  └─► StyleSheet com estilos do cartão

src/components/IconButton.tsx
  └─► StyleSheet com estilos do botão
```

**Padrão de cores centralizado:**
```typescript
// Cores principais usadas
#f7f7f7  - Background geral
#FFFFFF  - Cards e superfícies
#EFEFEF  - Botões secundários
#F23D4F  - Ações e notificações
#252537  - Texto principal
#000000  - Ícones e elementos
```

## 🔄 Fluxo de Navegação (Planejado)

```
┌──────────────┐
│   Splash     │
└──────┬───────┘
       │
       ▼
┌──────────────┐     ┌──────────────┐
│    Login     │────►│     Home     │
└──────────────┘     └──────┬───────┘
                            │
                            ▼
                     ┌──────────────┐
                     │   Ofertas    │ ← Implementado
                     └──────┬───────┘
                            │
                            ├─► Detalhes
                            ├─► Histórico
                            └─► Perfil
```

## 📦 Dependências Principais

```json
{
  "react": "Framework UI",
  "react-native": "Framework mobile",
  "expo": "Toolchain e SDK",
  "@react-navigation": "Navegação",
  "react-native-svg": "Ícones SVG",
  "typescript": "Type safety"
}
```

## 🚀 Próximas Adições

### Fase 1 - Essenciais
- [ ] Estado global (Context API)
- [ ] Integração com API
- [ ] Novas telas (Login, Home, Perfil)
- [ ] Formulários e validação

### Fase 2 - Melhorias
- [ ] Animações
- [ ] Loading states
- [ ] Error handling
- [ ] Toast/Snackbar notifications

### Fase 3 - Avançado
- [ ] Offline first
- [ ] Push notifications
- [ ] Analytics
- [ ] Testes automatizados

## 📊 Métricas do Projeto

- **Telas**: 1 (Ofertas)
- **Componentes**: 6 (3 principais + 4 ícones)
- **Linhas de código**: ~500
- **Tempo de implementação**: Baseado em design do Figma
- **Plataformas**: iOS, Android, Web (via Expo)

## 🎯 Princípios de Design

1. **Componentização**: Tudo é um componente reutilizável
2. **Type Safety**: TypeScript em todo o código
3. **Performance**: StyleSheet e otimizações React Native
4. **Acessibilidade**: Preparado para WCAG
5. **Responsividade**: Layout flexível e adaptável

## 📱 Compatibilidade

- **iOS**: 12.0+
- **Android**: API 21+ (Android 5.0+)
- **Node**: 16+
- **npm**: 7+

---

**Última atualização**: Outubro 2025

