# Welcome to Your Miaoda Project
Miaoda Application Link URL
    URL:https://medo.dev/projects/app-88at4zfeaqrm

# Portfolio Website - Alex Morgan

A modern, interactive portfolio website featuring an immersive multi-stage intro sequence with device scanning effects, followed by a comprehensive portfolio showcase.

## ✨ Features

- **Multi-Stage Animated Intro**: Immersive loading sequence with:
  - **Disclaimer**: Fade in/out message suggesting fullscreen mode (F11)
  - **Device Scanning**: Green barcode scanner effect with animated grid overlay
  - **Profile Creation**: Loading animation with progress bar
  - **Line Animation**: Neon line sweep across the screen
- **Hero Section**: Eye-catching introduction with animated name letters and floating gradient backgrounds
- **Project Showcase**: Interactive project cards with detailed modal dialogs featuring:
  - Project images and descriptions
  - Technology stack badges
  - Problem/solution statements
  - Key highlights and learnings
  - Live demo and repository links
- **Skills Display**: Organized skill badges grouped by category (Frontend, Backend, Tools & DevOps)
- **Future Learning**: Timeline view of ongoing and planned learning goals with status indicators
- **Smooth Animations**: Powered by Framer Motion for fluid transitions and interactions
- **Neon Theme**: Dark theme with electric cyan and magenta accents
- **Fully Responsive**: Optimized for all screen sizes from mobile to desktop
- **Accessible**: Keyboard navigable with proper ARIA labels

## 🚀 Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Code Quality**: Biome (linting & formatting)

## 📁 Project Structure

```
├── src/
│   ├── components/          # React components
│   │   ├── ui/             # shadcn/ui components
│   │   ├── Hero.tsx        # Hero section with animated name
│   │   ├── Projects.tsx    # Projects grid
│   │   ├── ProjectDialog.tsx # Project detail modal
│   │   ├── Skills.tsx      # Skills section
│   │   ├── FutureLearning.tsx # Learning timeline
│   │   └── Footer.tsx      # Footer component
│   ├── content/            # Content data files
│   │   ├── site.ts         # Site configuration
│   │   ├── projects.ts     # Project data (6 sample projects)
│   │   ├── skills.ts       # Skills data
│   │   └── learning.ts     # Learning items
│   ├── index.css           # Global styles & design system
│   ├── App.tsx             # Main app with line animation
│   └── main.tsx            # Entry point
├── public/
│   ├── resume.pdf          # Resume file
│   └── favicon.png         # Site icon
└── index.html              # HTML template
```

## 🎨 Design System

The portfolio uses a custom neon-themed design system with:

- **Primary Color**: Electric Cyan (`hsl(180 100% 50%)`)
- **Secondary Color**: Neon Magenta (`hsl(320 100% 50%)`)
- **Background**: Dark Navy (`hsl(222 47% 5%)`)
- **Custom Utilities**: Neon glow effects, gradient text, smooth transitions

## 🛠️ Development

### Prerequisites

- Node.js ≥ 20
- npm ≥ 10

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev -- --host 127.0.0.1
```

### Build for Production

```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

### Code Quality

```bash
# Run linting and type checking
npm run lint
```

## 📝 Customization

### Update Personal Information

Edit `src/content/site.ts`:

```typescript
export const siteConfig = {
  name: "Your Name",
  role: "Your Role",
  bio: "Your bio",
  email: "your.email@example.com",
  resumeUrl: "/resume.pdf",
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
  },
};
```

### Add or Modify Projects

Edit `src/content/projects.ts`. Each project includes:
- Title, description, and year
- Cover image and gallery images
- Technology stack
- Links (live demo, repository)
- Problem/solution statements
- Key highlights and learnings

### Update Skills

Edit `src/content/skills.ts` to organize your skills by category.

### Modify Learning Goals

Edit `src/content/learning.ts` to track your learning journey with status indicators:
- `exploring`: Currently exploring
- `in-progress`: Actively learning
- `queued`: Planned for future

### Change Theme Colors

Update the CSS variables in `src/index.css`:

```css
:root {
  --primary: 180 100% 50%;      /* Cyan */
  --secondary: 320 100% 50%;    /* Magenta */
  --background: 222 47% 5%;     /* Dark Navy */
  /* ... other colors */
}
```

### Adjust Animation Timing

Edit `src/App.tsx` to change the intro sequence timing:

```typescript
// Stage durations (in milliseconds)
setTimeout(() => setStage("scanning"), 5000);    // Disclaimer: 5s
setTimeout(() => setStage("creating"), 11000);   // Scanning: 6s
setTimeout(() => setStage("line"), 16000);       // Creating: 5s
setTimeout(() => setStage("portfolio"), 20000);  // Line: 4s
```

You can also modify individual animation durations within each stage component.

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy with default settings

### Netlify

1. Push your code to GitHub
2. Import the project in Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Other Platforms

Build the project and deploy the `dist` folder to any static hosting service.

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🙏 Acknowledgments

- Built with [shadcn/ui](https://ui.shadcn.com/)
- Animations by [Framer Motion](https://www.framer.com/motion/)
- Icons from [Lucide](https://lucide.dev/)

---

2025 Alex Morgan
