# 🚀 OTHNIEL's Official Portfolio Website

A modern, responsive portfolio website showcasing AI/ML projects, software development work, and professional experience. Built with cutting-edge technologies and featuring interactive components, animations, and a sleek design.

![Portfolio Preview](./public/assets/preview.png)

## ✨ Features

### 🎨 Modern Design
- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark Theme**: Elegant dark theme with gradient accents
- **Smooth Animations**: Lottie animations and CSS transitions
- **Interactive Components**: Hover effects and dynamic interactions

### 🤖 AI/ML Showcase
- **AI Projects Section**: Interactive showcase of machine learning projects
- **Project Metrics**: Real-time display of model performance and statistics
- **Technology Tags**: Clear categorization of technologies used
- **Visual Elements**: Robot animations and AI-themed graphics

### 📱 Core Sections
- **Hero Section**: Eye-catching landing with animated elements
- **About**: Personal introduction and background
- **Programming Languages**: Skills visualization
- **Projects Carousel**: Interactive project showcase
- **Terminal Section**: Interactive terminal experience
- **Resume Banner**: Professional resume generation
- **Contact & Socials**: Multiple ways to connect

### 🛠 Technical Features
- **PDF Generation**: Dynamic resume PDF creation
- **Routing**: Multi-page navigation with React Router
- **State Management**: Modern React hooks and context
- **Component Library**: Reusable UI components with shadcn/ui
- **Type Safety**: Full TypeScript implementation
- **Back to Top Navigation**: Smooth scroll-to-top functionality on all pages

## 🏗 Tech Stack

### Frontend Framework
- **React 18.3.1** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible component library
- **Radix UI** - Primitive components for accessibility
- **Lucide React** - Beautiful icon library

### Animations & Interactions
- **Lottie React** - High-quality animations
- **@lottiefiles/dotlottie-react** - Optimized Lottie files
- **Tailwind Animate** - CSS animations

### Routing & Data
- **React Router DOM** - Client-side routing
- **TanStack Query** - Server state management
- **React Hook Form** - Form handling with validation

### Development Tools
- **TypeScript** - Static type checking and enhanced developer experience
- **ESLint** - Code linting and formatting with TypeScript support
- **PostCSS** - CSS processing
- **Bun** - Fast package manager and runtime

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ or Bun
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/Official-Dev-Niel-porfolio-website.git
   cd Official-Dev-Niel-porfolio-website
   ```

2. **Install dependencies**
   ```bash
   # Using Bun (recommended)
   bun install
   
   # Or using npm
   npm install
   
   # Or using yarn
   yarn install
   ```

3. **Start development server**
   ```bash
   # Using Bun
   bun dev
   
   # Or using npm
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:8080
   ```

## 📁 Project Structure

```
src/
├── components/           # Reusable components
│   ├── ui/              # shadcn/ui components
│   ├── AIProjectsSection.tsx
│   ├── Hero.tsx
│   ├── Header.tsx
│   └── ...
├── pages/               # Route components
│   ├── Index.tsx        # Home page
│   ├── Projects.tsx     # Projects page
│   ├── Resume.tsx       # Resume page
│   └── ...
├── data/                # Static data
│   └── projectsData.ts
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
└── App.tsx              # Main app component

public/
├── assets/              # Static assets
│   ├── ai.webp         # AI robot image
│   ├── robot-arms-lottie.json
│   └── ...
└── uploads/             # User uploads
```

## 🔧 Available Scripts

```bash
# Development
bun dev              # Start development server
bun build            # Build for production
bun build:dev        # Build for development
bun preview          # Preview production build
bun lint             # Run ESLint

# Alternative with npm
npm run dev
npm run build
npm run lint
npm run preview
```

## 🌟 Key Components

### AIProjectsSection
Interactive AI/ML projects showcase with:
- Project cards with hover animations
- Metrics display with real-time data
- Technology tag visualization
- Responsive grid layout

### Hero Section
Dynamic landing page featuring:
- Gradient text animations
- Lottie robot arm animations
- Responsive typography scaling
- Call-to-action buttons

### Terminal Section
Interactive terminal experience with:
- Command simulation
- Typing animations
- Syntax highlighting
- Multiple command scenarios

## 🎨 Customization

### Colors & Theming
The project uses Tailwind CSS custom color palette defined in `tailwind.config.ts`:
- Primary: Emerald/Cyan gradients
- Secondary: Purple/Violet gradients
- Accent: Orange/Pink gradients

### Assets
Replace images in the `public/assets/` directory:
- `ai.webp` - AI robot image
- `robot-arms-lottie.json` - Lottie animation file
- Add your own project screenshots

### Content
Update project data in `src/data/projectsData.ts`:
```typescript
export const projects = [
  {
    title: "Your Project",
    description: "Project description",
    technologies: ["React", "TypeScript"],
    // ...
  }
];
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px - 1440px
- **Large Desktop**: 1440px+

### Mobile Optimizations
- **Centered Hero Section**: Text content is perfectly centered on mobile devices
- **Optimized Carousel**: Project cards show full content with proper text truncation
- **Touch-Friendly Navigation**: Larger touch targets for buttons and navigation
- **Improved Typography**: Responsive font sizes for better readability
- **Back to Top Button**: Always accessible navigation back to the top of any page

## 🔍 SEO & Performance

- **Semantic HTML**: Proper heading structure and landmarks
- **Meta Tags**: Configured for social sharing
- **Image Optimization**: WebP format and responsive images
- **Code Splitting**: Automatic with Vite
- **Tree Shaking**: Optimized bundle size

## 🚀 Deployment

### Build for Production
```bash
bun build
```

### Deploy to Netlify
1. Connect your GitHub repository
2. Set build command: `bun build`
3. Set publish directory: `dist`

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

**Note**: The project includes a `vercel.json` file that configures URL rewrites for client-side routing. This ensures that routes like `/projects` and `/resume` work correctly in production.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**OTHNIEL**
- GitHub: [@yourusername](https://github.com/Niel07-cyber)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/othniel-aryee-9501a0239)
- Email: aryeeothniel@gmail.com

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful component library
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Lottie](https://lottiefiles.com/) for amazing animations
- [Lucide](https://lucide.dev/) for the icon library

---

⭐ **Star this repository if you found it helpful!**