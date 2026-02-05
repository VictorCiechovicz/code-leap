# 🚀 CodeLeap Network

<div align="center">

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-12.9-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)

**Uma rede social moderna para desenvolvedores compartilharem ideias e conhecimento.**

[Demo](#demo) • [Features](#-features) • [Instalação](#-instalação) • [Tecnologias](#-tecnologias) • [Estrutura](#-estrutura-do-projeto)

</div>

---

## 📸 Demo

<div align="center">
  <img src="https://img.shields.io/badge/Status-Online-success?style=flat-square" alt="Status"/>
</div>

---

## ✨ Features

| Feature | Descrição |
|---------|-----------|
| 🔐 **Autenticação** | Login com Google ou username personalizado |
| 📝 **Posts** | Crie, edite e delete suas publicações |
| ❤️ **Likes** | Curta posts de outros usuários |
| 🔍 **Filtros** | Filtre por "todos" ou "meus posts" |
| 📊 **Ordenação** | Ordene por mais recentes ou mais antigos |
| 📱 **Responsivo** | Interface adaptável para todos os dispositivos |
| ♾️ **Infinite Scroll** | Carregue mais posts sob demanda |

---

## 🛠 Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

### Frontend
- **[React 19](https://react.dev/)** - Biblioteca para construção de interfaces
- **[TypeScript](https://www.typescriptlang.org/)** - Superset JavaScript com tipagem estática
- **[Vite](https://vitejs.dev/)** - Build tool ultrarrápida

### Backend & Serviços
- **[Firebase Auth](https://firebase.google.com/)** - Autenticação com Google
- **[CodeLeap API](https://dev.codeleap.co.uk/)** - API REST para gerenciamento de posts

### Qualidade de Código
- **[ESLint](https://eslint.org/)** - Linting para manter padrões de código

---

## 🚀 Instalação

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Passo a passo

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/codeleap.git

# Entre no diretório
cd codeleap

# Instale as dependências
npm install

# Configure as variáveis de ambiente (Firebase)
# Crie um arquivo .env com suas credenciais Firebase

# Inicie o servidor de desenvolvimento
npm run dev
```

### Scripts disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a build de produção |
| `npm run preview` | Visualiza a build de produção |
| `npm run lint` | Executa o linter |
| `npm run typecheck` | Verifica tipagem TypeScript |

---

## 📁 Estrutura do Projeto

```
src/
├── assets/           # Imagens e ícones
├── components/       # Componentes React
│   ├── CreatePostForm.tsx
│   ├── DeleteModal.tsx
│   ├── EditModal.tsx
│   ├── EmptyState.tsx
│   ├── ErrorToast.tsx
│   ├── FilterBar.tsx
│   ├── Header.tsx
│   ├── LoadingSpinner.tsx
│   ├── LoadMoreButton.tsx
│   ├── PostCard.tsx
│   ├── PostList.tsx
│   └── SignupModal.tsx
├── config/           # Configurações (Firebase)
├── contexts/         # React Context (Auth)
├── hooks/            # Custom Hooks
│   ├── useLikes.ts
│   └── usePosts.ts
├── services/         # Serviços de API
├── types/            # Definições TypeScript
└── utils/            # Funções utilitárias
```

---

## 🎯 Funcionalidades Detalhadas

### 🔐 Autenticação
- Login integrado com **Google** via Firebase
- Opção de login com **username** personalizado
- Persistência de sessão

### 📝 Gerenciamento de Posts
- **Criar**: Publique novos posts com título e conteúdo
- **Editar**: Modifique seus próprios posts
- **Deletar**: Remova posts com confirmação via modal
- **Visualizar**: Veja posts de todos os usuários

### ❤️ Sistema de Likes
- Curta e descurta posts
- Contagem de likes em tempo real
- Feedback visual instantâneo

### 🔍 Filtros e Ordenação
- Filtrar por "Todos os posts" ou "Meus posts"
- Ordenar por "Mais recentes" ou "Mais antigos"
- Contador total de posts

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um Fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">

Feito com ❤️ por **Victor Ciechovicz**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/seu-perfil)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/seu-usuario)

</div>
