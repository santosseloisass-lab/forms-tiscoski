# Tiscoski Fit Form

Formulário de cadastro de vestimentas para a Tiscoski Distribuidora

## 📋 Descrição

Formulário interno para a equipe informar seus tamanhos de camiseta, calça e calçado. Desenvolvido com React, Vite e Tailwind CSS.

## 🚀 Deploy no Vercel (5 minutos)

### Passo 1: Clonar ou fazer upload para GitHub

```bash
# Se estiver no terminal local
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/seu-usuario/tiscoski-fit-form.git
git branch -M main
git push -u origin main
```

Ou faça upload dos arquivos direto na interface do GitHub.

### Passo 2: Conectar ao Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Clique em **"New Project"**
3. Selecione seu repositório GitHub
4. Vercel detectará automaticamente como projeto Vite
5. Clique em **Deploy**

**Pronto!** Seu formulário estará online em 1-2 minutos 🎉

## 🛠️ Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Rodar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm preview
```

## 📝 Editar a lista de nomes

A lista de nomes está em `src/App.jsx`, no array `nomes`. Para adicionar/remover nomes:

```javascript
const nomes = [
  'NOME1',
  'NOME2',
  // adicione aqui
];
```

Depois faça commit e push. Vercel atualiza automaticamente! ⚡

## 📦 Estrutura do Projeto

```
├── src/
│   ├── App.jsx           # Componente principal
│   ├── main.jsx          # Entry point
│   └── index.css         # Estilos globais
├── index.html            # HTML principal
├── package.json          # Dependências
├── vite.config.js        # Configuração Vite
├── tailwind.config.js    # Configuração Tailwind
└── README.md             # Este arquivo
```

## 🎨 Customizações

- **Cores:** Edite `tailwind.config.js`
- **Fontes:** Edite `src/index.css`
- **Layout:** Edite `src/App.jsx`

## 📱 Features

✅ Seletor de nomes (43 pessoas)
✅ Seletores de tamanho (camiseta, calça, calçado)
✅ Campo de observações
✅ Validação de campos obrigatórios
✅ Mensagem de sucesso
✅ Responsivo para mobile/desktop

## 🔗 Integração com banco de dados (opcional)

Atualmente o formulário loga os dados no console. Para salvar em banco de dados (Supabase, Firebase, etc), edite a função `handleSubmit` em `src/App.jsx`.

## 📧 Suporte

Qualquer dúvida com o deploy ou edição, me chama!
