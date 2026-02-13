# Customization Guide

This guide will help you customize your cinematic portfolio to match your personal brand and preferences.

## 🎨 Colors & Theme

### Change Accent Color

Edit `tailwind.config.js`:

```js
colors: {
  'electric-blue': '#0066FF',  // Change to your preferred accent
  'deep-charcoal': '#0a0a0a',  // Change background color
}
```

**Popular alternatives:**
- Muted Gold: `#C5A572`
- Deep Purple: `#6B46C1`
- Crimson: `#DC143C`
- Emerald: `#047857`
- Silver: `#C0C0C0`

### Change Background

In `src/index.css`, modify:

```css
body {
  background: #0a0a0a;  /* Change this */
}
```

---

## ✍️ Typography

### Change Fonts

1. **Update Google Fonts in `index.html`:**

```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&family=Work+Sans:wght@200;300;400;500;600&display=swap" rel="stylesheet">
```

2. **Update `tailwind.config.js`:**

```js
fontFamily: {
  'serif': ['Playfair Display', 'serif'],
  'sans': ['Work Sans', 'sans-serif'],
}
```

**Recommended combinations:**

| Serif (Headings) | Sans-serif (Body) | Vibe |
|-----------------|-------------------|------|
| Cormorant Garamond | Inter | Elegant, Modern |
| Playfair Display | Work Sans | Classic, Professional |
| Fraunces | Space Grotesk | Editorial, Bold |
| Bodoni Moda | DM Sans | Fashion, Luxurious |
| Crimson Pro | Public Sans | Academic, Clean |

---

## 📝 Content

### Update Hero Section

Edit `src/components/Hero.jsx`:

```jsx
<h1>YOUR NAME</h1>
<p>Your custom tagline here.</p>
```

### Update About Section

Edit `src/components/About.jsx`:

```jsx
<p>Your introduction line 1</p>
<p>Your current role and company</p>
<p>Your specialties</p>
```

### Add/Remove Projects

Edit `src/components/Work.jsx`:

```jsx
const projects = [
  {
    id: 1,
    title: 'Project Name',
    subtitle: 'Tech Stack • Category',
    description: 'Brief description of what you built and why it matters.',
    color: '#0066FF'  // Unique color for each project
  },
  // Add more projects...
];
```

**Tips:**
- Keep descriptions under 30 words
- Use specific metrics when possible
- Alternate colors between projects
- Limit to 4-6 projects max

### Update Experience

Edit `src/components/Experience.jsx`:

```jsx
const experiences = [
  {
    year: '2025',
    company: 'Company Name',
    role: 'Your Role',
    location: 'City',
    highlights: [
      'Achievement 1',
      'Achievement 2',
      'Achievement 3'
    ]
  },
  // Add more...
];
```

### Update Contact Email

Edit `src/components/Contact.jsx`:

```jsx
<a href="mailto:your.email@example.com">
  your.email@example.com
</a>
```

### Update Social Links

Edit `src/App.jsx` footer:

```jsx
<a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
<a href="https://github.com/yourusername">GitHub</a>
<a href="https://twitter.com/yourhandle">Twitter</a>
```

---

## 🎬 Animations

### Adjust Animation Speed

In any component using `framer-motion`, modify the `duration`:

```jsx
<motion.div
  animate={{ opacity: 1 }}
  transition={{ duration: 1.2 }}  // Faster: 0.6, Slower: 2.0
>
```

### Disable Animations (Accessibility)

Add to `src/index.css`:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Change Scroll Indicator

Edit `src/components/Hero.jsx` to change the scroll indicator style or remove it:

```jsx
{/* Remove this entire block to disable scroll indicator */}
<motion.div className="absolute bottom-12...">
  ...
</motion.div>
```

---

## 🖼️ Background Options

### Option A: Grain Texture (Default)

Already implemented. Adjust opacity in `src/index.css`:

```css
.grain {
  opacity: 0.03;  /* Lower = more subtle, Higher = more visible */
}
```

### Option B: Solid Color

Remove grain from `src/components/Hero.jsx`:

```jsx
{/* Remove this line */}
<div className="grain" />
```

### Option C: Video Background

1. Add video to `public/` folder (e.g., `hero-bg.mp4`)

2. Update `src/components/Hero.jsx`:

```jsx
<section className="relative h-screen...">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover opacity-20"
  >
    <source src="/hero-bg.mp4" type="video/mp4" />
  </video>
  {/* Rest of content */}
</section>
```

### Option D: Image Background

```jsx
<section
  className="relative h-screen..."
  style={{
    backgroundImage: "url('/hero-bg.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}
>
```

---

## 📱 Responsive Adjustments

### Change Mobile Typography

In any component, adjust `clamp()` values:

```jsx
{/* Original */}
className="text-[clamp(3rem,12vw,10rem)]"

{/* Smaller on mobile */}
className="text-[clamp(2rem,10vw,10rem)]"

{/* Larger on mobile */}
className="text-[clamp(4rem,12vw,10rem)]"
```

**Format:** `clamp(min, preferred, max)`

---

## 🧭 Navigation

### Add More Nav Items

Edit `src/components/Navigation.jsx`:

```jsx
<motion.button onClick={() => scrollToSection('about')}>
  About
</motion.button>
```

Add corresponding section IDs in `src/App.jsx`:

```jsx
<div id="about">
  <About />
</div>
```

### Remove Navigation

Delete or comment out in `src/App.jsx`:

```jsx
{/* <Navigation /> */}
```

---

## 🎯 Advanced Customizations

### Add Skills Section

Create `src/components/Skills.jsx`:

```jsx
import { motion } from 'framer-motion';

const skills = ['React', 'Python', 'AWS', 'Docker', 'TypeScript'];

const Skills = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl">
        <h2 className="font-serif text-6xl mb-16">Skills</h2>
        <div className="flex flex-wrap gap-4">
          {skills.map((skill, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="px-6 py-3 border border-gray-800 font-sans text-sm tracking-wider"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
```

Add to `src/App.jsx`:

```jsx
import Skills from './components/Skills';
// ...
<Skills />
```

### Add Cursor Follow Effect

Install:
```bash
npm install @react-spring/web
```

Create `src/components/Cursor.jsx`:

```jsx
import { useSpring, animated } from '@react-spring/web';
import { useEffect } from 'react';

const Cursor = () => {
  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));

  useEffect(() => {
    const handleMove = (e) => {
      api.start({ x: e.clientX, y: e.clientY, immediate: true });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [api]);

  return (
    <animated.div
      style={{
        transform: x.to((x) => `translate(${x}px, ${y}px)`),
        position: 'fixed',
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        border: '1px solid white',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  );
};

export default Cursor;
```

---

## 🔧 Performance

### Optimize Images

Use WebP format and add in `public/images/`:

```jsx
<img src="/images/project.webp" alt="Project" loading="lazy" />
```

### Code Splitting

Already handled by Vite, but you can lazy load sections:

```jsx
import { lazy, Suspense } from 'react';

const Work = lazy(() => import('./components/Work'));

// In App.jsx:
<Suspense fallback={<div>Loading...</div>}>
  <Work />
</Suspense>
```

---

## 📊 Analytics

### Add Google Analytics

1. Get GA4 tracking ID

2. Add to `index.html` `<head>`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 💡 Tips

1. **Keep it minimal** - Don't add too many sections
2. **Test on mobile** - Most visitors will be on mobile
3. **Use high-quality images** - But optimize file size
4. **Test loading speed** - Use Lighthouse in Chrome DevTools
5. **Get feedback** - Ask 2-3 people to review before launching

---

## 🆘 Troubleshooting

**Build errors?**
```bash
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

**Animations not working?**
- Check Framer Motion is installed
- Check browser supports animations

**Fonts not loading?**
- Verify Google Fonts link in `index.html`
- Check network tab in DevTools

---

Need help? Check the README.md or reach out!
