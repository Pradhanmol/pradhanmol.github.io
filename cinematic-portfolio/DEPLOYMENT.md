# Deployment Guide

## GitHub Pages Deployment

### Option 1: Deploy to your existing repo (pradhanmol.github.io)

Since you already have a repository at `pradhanmol.github.io`, you can replace the old content with this new cinematic portfolio.

#### Steps:

1. **Build the production version:**
   ```bash
   cd cinematic-portfolio
   npm run build
   ```

2. **Copy built files to root:**
   ```bash
   # Go to your repo root
   cd ..
   
   # Backup old files (optional)
   mkdir old-portfolio-backup
   mv assets forms index.html old-portfolio-backup/
   
   # Copy new built files
   cp -r cinematic-portfolio/dist/* .
   ```

3. **Commit and push:**
   ```bash
   git add .
   git commit -m "feat: deploy cinematic portfolio website"
   git push origin main
   ```

4. **Wait a few minutes** for GitHub Pages to rebuild.

5. **Visit:** `https://pradhanmol.github.io`

---

### Option 2: Deploy as a subfolder (keep old site)

If you want to keep your old portfolio and deploy this as `/cinematic`:

1. **Update `vite.config.js` base path:**
   ```js
   export default defineConfig({
     plugins: [react()],
     base: '/cinematic/'  // Add subfolder name
   })
   ```

2. **Build:**
   ```bash
   npm run build
   ```

3. **Copy to subfolder:**
   ```bash
   cd ..
   mkdir -p cinematic
   cp -r cinematic-portfolio/dist/* cinematic/
   ```

4. **Commit and push:**
   ```bash
   git add cinematic/
   git commit -m "feat: add cinematic portfolio"
   git push origin main
   ```

5. **Visit:** `https://pradhanmol.github.io/cinematic`

---

### Option 3: Deploy to a new repo

1. **Create a new GitHub repository** (e.g., `portfolio-v2`)

2. **Update `vite.config.js` if needed:**
   ```js
   export default defineConfig({
     plugins: [react()],
     base: '/portfolio-v2/'  // Use your repo name
   })
   ```

3. **Initialize git in cinematic-portfolio folder:**
   ```bash
   cd cinematic-portfolio
   git init
   git add .
   git commit -m "Initial commit: Cinematic portfolio"
   ```

4. **Add remote and push:**
   ```bash
   git remote add origin https://github.com/Pradhanmol/portfolio-v2.git
   git branch -M main
   git push -u origin main
   ```

5. **Enable GitHub Pages:**
   - Go to your repo Settings
   - Navigate to "Pages"
   - Source: Deploy from a branch
   - Branch: `main` / `root` or use `gh-pages` (see below)

---

### Option 4: Using `gh-pages` branch (Recommended for React apps)

This is the cleanest approach:

1. **Install gh-pages package:**
   ```bash
   cd cinematic-portfolio
   npm install --save-dev gh-pages
   ```

2. **Update `package.json` with deploy scripts:**
   ```json
   {
     "scripts": {
       "dev": "vite",
       "build": "vite build",
       "preview": "vite preview",
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     },
     "homepage": "https://pradhanmol.github.io"
   }
   ```

3. **Deploy with one command:**
   ```bash
   npm run deploy
   ```

4. **Go to repo Settings > Pages:**
   - Source: `gh-pages` branch

5. **Visit:** `https://pradhanmol.github.io`

---

## Vercel Deployment (Alternative)

Vercel is even easier and faster:

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   cd cinematic-portfolio
   vercel
   ```

3. **Follow prompts:**
   - Login to Vercel
   - Set up project
   - Deploy!

4. **Custom domain (optional):**
   - Add your domain in Vercel dashboard
   - Update DNS records

---

## Netlify Deployment (Alternative)

1. **Install Netlify CLI:**
   ```bash
   npm i -g netlify-cli
   ```

2. **Build and deploy:**
   ```bash
   npm run build
   netlify deploy --prod --dir=dist
   ```

3. **Or use Netlify Dashboard:**
   - Drag and drop the `dist` folder
   - Done!

---

## Environment Variables (if needed)

If you add environment variables (e.g., for form submissions):

1. Create `.env` file:
   ```
   VITE_API_KEY=your_key_here
   ```

2. Access in code:
   ```js
   const apiKey = import.meta.env.VITE_API_KEY;
   ```

3. Add to `.gitignore` (already included)

4. Set in hosting platform:
   - GitHub Pages: Use GitHub Secrets + Actions
   - Vercel: Add in Settings > Environment Variables
   - Netlify: Add in Site Settings > Environment Variables

---

## Recommended: GitHub Pages with gh-pages

**For your use case, I recommend Option 4 (gh-pages branch)** because:
- ✅ Clean separation from source code
- ✅ One-command deployment
- ✅ Automatic builds
- ✅ Easy rollbacks
- ✅ Works perfectly with React/Vite

Just run:
```bash
npm run deploy
```

And your site goes live! 🚀
