# Assets

Esta pasta contém os recursos estáticos da aplicação.

## Arquivos Necessários

Para executar a aplicação sem erros, você precisará adicionar os seguintes arquivos:

- `icon.png` - Ícone da aplicação (1024x1024px)
- `splash.png` - Tela de splash (2x size do ícone)
- `adaptive-icon.png` - Ícone adaptável para Android (1024x1024px)
- `favicon.png` - Favicon para web (48x48px)

## Como Gerar Assets

Você pode usar ferramentas online como:
- [makeappicon.com](https://makeappicon.com)
- [appicon.co](https://appicon.co)

Ou use o Expo Assets:
```bash
npx expo-optimize
```

## Temporário

Por enquanto, a aplicação pode rodar sem esses assets, mas você verá avisos no console.

