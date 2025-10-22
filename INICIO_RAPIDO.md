# 🚀 Início Rápido - Adelantos

## ⚡ Para começar AGORA (2 minutos)

### 1️⃣ Instale as dependências

```bash
npm install
```

### 2️⃣ Inicie a aplicação

```bash
npm start
```

### 3️⃣ Abra no seu celular

1. Instale o app **Expo Go**:
   - iPhone: [App Store](https://apps.apple.com/app/expo-go/id982107779)
   - Android: [Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)

2. Escaneie o QR Code que apareceu no terminal

🎉 **Pronto!** A tela de Ofertas deve aparecer no seu celular.

---

## 📱 O que foi criado?

Baseado no design do Figma, foi implementado:

### ✅ Tela de Ofertas
- Header com botão de voltar
- Botões de notificação e ajuda
- Badge de notificação (com número)
- Saudação personalizada
- Cartão interativo com valor monetário

### ✅ Componentes Reutilizáveis
- `MoneyCard` - Cartão para exibir valores
- `IconButton` - Botão genérico para ícones
- Ícones SVG (Chevron, Bell, Question, etc.)

### ✅ Estrutura Completa
```
✓ React Native + Expo
✓ TypeScript
✓ React Navigation
✓ Componentes modulares
✓ Design system básico
✓ Documentação completa
```

---

## 🎨 Personalizações Rápidas

### Alterar o valor exibido

Edite: `src/screens/OfertasScreen.tsx`

```tsx
<MoneyCard
  title="Receba agora"
  amount="9.800"  // ← Mude aqui
  currency="$"
  onPress={() => console.log('Clicked')}
/>
```

### Alterar a saudação

```tsx
<Text style={styles.greeting}>Hola, Santi</Text>
                              // ↑ Mude aqui
```

### Alterar cores

Edite os arquivos em `src/screens/` e `src/components/`

```tsx
backgroundColor: '#f7f7f7'  // Cor de fundo
cardBackground: '#FFFFFF'   // Cor dos cartões
```

---

## 📚 Documentação

- **[INSTRUCOES.md](./INSTRUCOES.md)** - Guia completo de instalação
- **[docs/IMPLEMENTACAO.md](./docs/IMPLEMENTACAO.md)** - Detalhes técnicos
- **[README.md](./README.md)** - Visão geral do projeto

---

## 🐛 Problemas?

### Erro ao instalar dependências

```bash
rm -rf node_modules
npm install
```

### App não abre no celular

```bash
npm start -- --clear
```

### Porta 8081 já em uso

```bash
lsof -ti:8081 | xargs kill -9
npm start
```

---

## 📞 Ajuda

Consulte o arquivo [INSTRUCOES.md](./INSTRUCOES.md) para solução de problemas detalhada.

---

**Tempo total de setup**: ~2 minutos ⚡

Feito com ❤️ baseado no design do Figma

