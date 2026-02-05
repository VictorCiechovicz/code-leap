# 🚀 CodeLeap Network

<div align="center">

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-12.9-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)

**A modern social network for developers to share ideas and knowledge.**

[Demo](#demo) • [Features](#-features) • [Installation](#-installation) • [Technologies](#-technologies) • [Structure](#-project-structure)

</div>

---

## 📸 Demo

<div align="center">
  <img src="https://img.shields.io/badge/Status-Online-success?style=flat-square" alt="Status"/>
</div>

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🔐 **Authentication** | Login with Google or custom username |
| 📝 **Posts** | Create, edit and delete your publications |
| ❤️ **Likes** | Like posts from other users |
| 🔍 **Filters** | Filter by "all" or "my posts" |
| 📊 **Sorting** | Sort by newest or oldest |
| 📱 **Responsive** | Adaptable interface for all devices |
| ♾️ **Infinite Scroll** | Load more posts on demand |

---

## 🛠 Technologies

This project was developed with the following technologies:

### Frontend
- **[React 19](https://react.dev/)** - Library for building user interfaces
- **[TypeScript](https://www.typescriptlang.org/)** - JavaScript superset with static typing
- **[Vite](https://vitejs.dev/)** - Ultra-fast build tool

### Backend & Services
- **[Firebase Auth](https://firebase.google.com/)** - Google authentication
- **[CodeLeap API](https://dev.codeleap.co.uk/)** - REST API for post management

### Code Quality
- **[ESLint](https://eslint.org/)** - Linting to maintain code standards

---

## 🚀 Installation

### Prerequisites

- Node.js 18+
- npm or yarn

### Step by step

```bash
# Clone the repository
git clone https://github.com/your-username/codeleap.git

# Enter the directory
cd codeleap

# Install dependencies
npm install

# Configure environment variables (Firebase)
# Create a .env file with your Firebase credentials

# Start the development server
npm run dev
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Starts the development server |
| `npm run build` | Generates the production build |
| `npm run preview` | Preview the production build |
| `npm run lint` | Runs the linter |
| `npm run typecheck` | Checks TypeScript typing |

---

## 📁 Project Structure

```
src/
├── assets/           # Images and icons
├── components/       # React components
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
├── config/           # Configurations (Firebase)
├── contexts/         # React Context (Auth)
├── hooks/            # Custom Hooks
│   ├── useLikes.ts
│   └── usePosts.ts
├── services/         # API Services
├── types/            # TypeScript definitions
└── utils/            # Utility functions
```

---

## 🎯 Detailed Features

### 🔐 Authentication
- Integrated login with **Google** via Firebase
- Option to login with **custom username**
- Session persistence

### 📝 Post Management
- **Create**: Publish new posts with title and content
- **Edit**: Modify your own posts
- **Delete**: Remove posts with modal confirmation
- **View**: See posts from all users

### ❤️ Like System
- Like and unlike posts
- Real-time like count
- Instant visual feedback

### 🔍 Filters and Sorting
- Filter by "All posts" or "My posts"
- Sort by "Newest" or "Oldest"
- Total post counter

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the project
2. Create a branch for your feature (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is under the MIT license. See the [LICENSE](LICENSE) file for more details.

---

<div align="center">

Made with ❤️ by **Victor Ciechovicz**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/your-profile)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/your-username)

</div>
