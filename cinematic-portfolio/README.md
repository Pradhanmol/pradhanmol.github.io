# Cinematic Portfolio - Anmol Pradhan

A minimal, dramatic, and artistic portfolio website built with React, Tailwind CSS, and Framer Motion.

## Features

- **Cinematic Hero**: Full-screen hero with animated typography and grain texture
- **Scroll-based Storytelling**: Each section occupies full viewport height with smooth transitions
- **Fullscreen Project Panels**: Hover-reveal project details with elegant animations
- **Horizontal Timeline**: Experience section with horizontal scroll effect
- **Minimalist Contact**: Clean, almost-empty contact page with inline form
- **Zero Template Vibes**: No cards, no boxes, no typical portfolio sections

## Design Philosophy

- Minimal. Dramatic. Editorial.
- High fashion meets tech
- Oversized serif + modern sans-serif typography
- Extreme negative space
- Slow, intentional animations
- Deep charcoal background with electric blue accents

## Tech Stack

- **React 19** - Modern React with hooks
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth, performant animations
- **Custom Fonts**: Cormorant Garamond (serif) + Inter (sans-serif)

## Getting Started

### Install Dependencies

```bash
npm install --legacy-peer-deps
```

### Run Development Server

```bash
npm run dev
```

Server will start at `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
cinematic-portfolio/
├── src/
│   ├── components/
│   │   ├── Hero.jsx         # Opening hero section
│   │   ├── About.jsx        # 3-line powerful introduction
│   │   ├── Work.jsx         # Fullscreen project panels
│   │   ├── Experience.jsx   # Horizontal timeline
│   │   ├── Contact.jsx      # Minimalist contact form
│   │   └── Navigation.jsx   # Subtle navigation
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # React entry point
│   └── index.css            # Global styles + Tailwind
├── index.html               # HTML template
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind configuration
└── package.json             # Dependencies
```

## Customization

### Colors

Edit `tailwind.config.js` to change accent colors:

```js
colors: {
  'electric-blue': '#0066FF',  // Change accent color
  'deep-charcoal': '#0a0a0a',  // Change background
}
```

### Typography

Modify font imports in `index.html` and update `tailwind.config.js`:

```js
fontFamily: {
  'serif': ['Cormorant Garamond', 'serif'],
  'sans': ['Inter', 'sans-serif'],
}
```

### Projects

Edit the `projects` array in `src/components/Work.jsx`:

```js
const projects = [
  {
    id: 1,
    title: 'Project Name',
    subtitle: 'Tech Stack',
    description: 'Description',
    color: '#0066FF'
  },
  // Add more projects...
];
```

### Experience

Edit the `experiences` array in `src/components/Experience.jsx`

## Performance

- Optimized animations with Framer Motion
- Lazy loading of components
- Minimal JavaScript bundle
- GPU-accelerated transitions
- Smooth 60fps animations

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

© 2026 Anmol Pradhan. All rights reserved.

## Contact

- Email: pradhanmol30@gmail.com
- LinkedIn: [pradhanmol](https://www.linkedin.com/in/pradhanmol/)
- GitHub: [Pradhanmol](https://github.com/Pradhanmol)
