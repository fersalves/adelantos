# 🌐 Versão Web - Adelantos

## 🚀 Como Abrir

### Opção 1: Duplo Clique
Simplesmente dê duplo clique no arquivo `index.html`

### Opção 2: Arrastar para o navegador
Arraste o arquivo `index.html` para qualquer navegador (Chrome, Firefox, Safari, Edge)

### Opção 3: Terminal
```bash
open index.html
```

## ✨ Funcionalidades

Esta versão web é uma **demo interativa completa** da tela de Ofertas:

### 🎯 Elementos Implementados

✅ **Header Completo**
- Botão de voltar (com ícone)
- Botão de notificações (com badge "1")
- Botão de ajuda
- Todos clicáveis com feedback visual

✅ **Conteúdo Principal**
- Saudação personalizada ("Hola, Santi")
- Cartão de valor interativo
- Display de valor monetário ($9.800)
- Ícone de dropdown

✅ **Interações**
- Efeitos hover em todos os botões
- Animações de clique
- Notificações toast na parte inferior
- Feedback visual em tempo real

✅ **Design System**
- Cores fiéis ao Figma
- Tipografia Inter
- Espaçamentos corretos
- Border radius consistente
- Sombras sutis

## 🎨 Design Fiel ao Figma

```
Cores:
- Background: #f7f7f7
- Cards: #FFFFFF
- Botões: #EFEFEF
- Notificação: #F23D4F
- Texto: #252537 / rgba(0,0,0,0.9)

Tipografia:
- Fonte: Inter (com fallbacks)
- Tamanhos: 12px, 16px, 32px
- Pesos: 400, 600

Layout:
- Largura: 360px (simulador de celular)
- Altura: 780px
- Border radius: 24px (frame), 16px (cards), 12px (botões)
```

## 📱 Responsivo

A interface se adapta para:
- Desktop (mostra frame de celular)
- Tablet (mostra frame de celular)
- Mobile (preenche a tela toda)

## 🔧 Tecnologias

- **HTML5** - Estrutura
- **CSS3** - Estilos e animações
- **JavaScript Vanilla** - Interatividade
- **SVG Inline** - Ícones vetoriais

**Sem dependências externas!** 🎉

## 🎮 Testando as Interações

Clique em cada elemento para ver:

1. **Botão Voltar** → "🔙 Voltando para tela anterior..."
2. **Botão Notificação** → "🔔 Você tem 1 nova notificação!"
3. **Botão Ajuda** → "❓ Abrindo central de ajuda..."
4. **Cartão de Valor** → "💰 Abrindo detalhes da oferta de $9.800"

## 📝 Personalizações Fáceis

### Alterar o valor exibido:

Edite no `index.html` (linha ~214):
```html
<span class="amount">9.800</span>
<!-- Mude para o valor desejado -->
```

### Alterar a saudação:

Edite no `index.html` (linha ~210):
```html
<div class="greeting">Hola, Santi</div>
<!-- Mude o nome -->
```

### Alterar o número no badge:

Edite no `index.html` (linha ~177):
```html
<div class="notification-badge">1</div>
<!-- Mude o número -->
```

### Alterar cores:

Edite a seção `<style>` no topo do arquivo:
```css
background-color: #f7f7f7;  /* Cor de fundo */
background-color: #FFFFFF;   /* Cor dos cards */
background-color: #F23D4F;   /* Cor do badge */
```

## 🚀 Próximos Passos

Esta é uma versão estática. Para torná-la dinâmica:

1. **Conectar a uma API**
   - Buscar dados reais
   - Atualizar valores dinamicamente

2. **Adicionar Mais Telas**
   - Login
   - Home
   - Histórico
   - Perfil

3. **Estado Global**
   - LocalStorage para dados
   - Gerenciamento de sessão

4. **Animações Avançadas**
   - Transições entre telas
   - Loading states
   - Skeleton screens

## 💡 Vantagens desta Versão

✅ **Sem instalação** - Funciona imediatamente  
✅ **Sem dependências** - Apenas um arquivo HTML  
✅ **Leve** - ~15KB total  
✅ **Rápido** - Carrega instantaneamente  
✅ **Compatível** - Funciona em qualquer navegador moderno  
✅ **Compartilhável** - Envie o arquivo para qualquer pessoa  

## 🌟 Comparação com React Native

| Recurso | React Native | Web (HTML) |
|---------|-------------|------------|
| Instalação | Node.js + npm | Nenhuma |
| Tamanho | ~200MB | 15KB |
| Tempo de setup | ~10min | 0 segundos |
| Performance | Nativa | Excelente |
| Compartilhar | Compilar app | Enviar arquivo |
| Testar | Emulador/Device | Qualquer browser |

## 📧 Compartilhando

Para enviar para alguém:
1. Compacte o arquivo `index.html`
2. Envie por email/WhatsApp
3. A pessoa só precisa abrir no navegador!

---

**Versão**: 1.0  
**Última atualização**: Outubro 2025  
**Baseado em**: Design do Figma "Ofertas 146"

