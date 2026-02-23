# 🚀 Personal Portfolio Website

<div align="center">
  <img src="https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/Vite-7.2.2-646CFF?style=for-the-badge&logo=vite" alt="Vite" />
  <img src="https://img.shields.io/badge/Bootstrap-5.3.8-7952B3?style=for-the-badge&logo=bootstrap" alt="Bootstrap" />
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript" alt="JavaScript" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3" alt="CSS3" />
</div>

<br />

<div align="center">
  <h3>✨ A Modern, Responsive Portfolio Built with React & Vite ✨</h3>
  <p>Showcasing cutting-edge web development skills with glassmorphism design, smooth animations, and interactive components</p>
</div>

---

## 🌟 **Live Demo**

🔗 **[View Portfolio](https://personal-portfilo-sooty.vercel.app/)**

## 📋 **Table of Contents**

- [🎯 Overview](#-overview)
- [✨ Features](#-features)
- [🛠️ Tech Stack](#%EF%B8%8F-tech-stack)
- [🚀 Getting Started](#-getting-started)
- [📁 Project Structure](#-project-structure)
- [🎨 Design Highlights](#-design-highlights)
- [📱 Responsive Design](#-responsive-design)
- [🔧 Scripts](#-scripts)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👨‍💻 Author](#-author)

---

## 🎯 **Overview**

This is a modern, single-page portfolio application built with React 19 and Vite, featuring a stunning glassmorphism design with dark/light theme switching. The portfolio showcases projects across HTML/CSS, JavaScript, and React technologies, with smooth scroll animations, interactive components, and a fully functional contact form.

The application demonstrates advanced frontend development skills including component architecture, state management, responsive design, and modern CSS techniques.

---

## ✨ **Features**

### 🎨 **Design & UI**

- **Glassmorphism Effects**: Modern frosted glass design with backdrop blur
- **Dark/Light Theme**: Seamless theme switching with localStorage persistence
- **Smooth Animations**: CSS transitions and Intersection Observer animations
- **Responsive Layout**: Mobile-first design that works on all devices
- **Modern Typography**: Gradient text effects and clean typography

### 🚀 **Functionality**

- **Single Page Application**: Fast navigation with React Router
- **Scroll Progress Bar**: Visual progress indicator at the top
- **Interactive Components**: Hover effects, ripple animations, and micro-interactions
- **Contact Form**: EmailJS integration with fallback mailto functionality
- **Project Showcase**: Categorized project display with live demos and GitHub links

### 📱 **User Experience**

- **Smooth Scrolling**: Anchor-based navigation with smooth scroll behavior
- **Loading States**: Elegant loading animations and transitions
- **Accessibility**: Semantic HTML and keyboard navigation support
- **Performance**: Optimized with Vite's fast build system

---

## 🛠️ **Tech Stack**

### **Frontend Framework**

- ![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat&logo=react&logoColor=white) **React 19** - Component-based UI library
- ![Vite](https://img.shields.io/badge/Vite-7.2.2-646CFF?style=flat&logo=vite&logoColor=white) **Vite** - Fast build tool and dev server

### **Styling & UI**

- ![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.8-7952B3?style=flat&logo=bootstrap&logoColor=white) **Bootstrap 5** - CSS framework with utilities
- ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) **CSS3** - Modern styling with custom properties
- ![Bootstrap Icons](https://img.shields.io/badge/Bootstrap_Icons-1.13.1-7952B3?style=flat) **Bootstrap Icons** - Icon library

### **JavaScript Features**

- **ES6+** - Modern JavaScript with arrow functions, destructuring, modules
- **Intersection Observer API** - Scroll-based animations
- **LocalStorage API** - Theme persistence
- **EmailJS** - Client-side email sending

### **Development Tools**

- **ESLint** - Code linting and formatting
- **Git** - Version control
- **npm** - Package management

---

## 🚀 **Getting Started**

### **Prerequisites**

- Node.js (v16 or higher)
- npm or yarn package manager
- Git

### **Installation**

1. **Clone the repository**

   ```bash
   git clone https://github.com/praveen-7050/Personal-portfilo.git
   cd Personal-portfilo
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173/
   ```

### **Build for Production**

```bash
npm run build
```

### **Preview Production Build**

```bash
npm run preview
```

---

## 📁 **Project Structure**

```
vite-project/
├── public/
│   ├── images/          # Project screenshots and assets
│   └── vite.svg         # Vite logo
├── src/
│   ├── assets/
│   │   └── Styles/      # CSS files for each component
│   │       ├── about.css
│   │       ├── contact.css
│   │       ├── footer.css
│   │       ├── hero.css
│   │       ├── navbar.css
│   │       ├── projects.css
│   │       ├── skills.css
│   │       └── theme.css
│   ├── Components/      # React components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── ScrollProgress.jsx
│   │   └── Skills.jsx
│   ├── App.css          # Global styles
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # App entry point
│   └── ThemeContext.jsx # Theme context provider
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
└── README.md           # Project documentation
```

---

## 🎨 **Design Highlights**

### **Glassmorphism Design**

- Backdrop blur effects with transparency
- Layered box shadows for depth
- Subtle border gradients

### **Theme System**

- Automatic theme detection
- Smooth transitions between themes
- Consistent color schemes

### **Animation System**

- Scroll-triggered reveals
- Hover micro-interactions
- Loading state animations

### **Typography**

- Gradient text effects
- Responsive font scaling
- Clean hierarchy

---

## 📱 **Responsive Design**

The portfolio is fully responsive and optimized for:

- 📱 **Mobile** (320px - 768px)
- 📟 **Tablet** (768px - 992px)
- 💻 **Desktop** (992px+)

Features include:

- Mobile-first approach
- Flexible grid layouts
- Touch-friendly interactions
- Optimized image loading

---

## 🔧 **Scripts**

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Build for production     |
| `npm run preview` | Preview production build |
| `npm run lint`    | Run ESLint               |

---

## 🤝 **Contributing**

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 **License**

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 **Author**

**Praveen N**

- 💼 Frontend Developer
- 📧 praveen.n7050@gmail.com
- 🔗 [LinkedIn](https://linkedin.com/in/praveen-n-7050)
- 💻 [GitHub](https://github.com/praveen-7050)

---

<div align="center">
  <p>⭐ If you found this project helpful, please give it a star!</p>
  <p>Made with ❤️ using React & Vite</p>
</div>
