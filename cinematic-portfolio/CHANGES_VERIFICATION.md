# 🔍 Changes Verification Guide

## ✅ Changes Have Been Made

All your content updates are **saved in the files** and the dev server is **running fresh**.

---

## 🌐 How to See the Changes

### **Step 1: Clear Browser Cache**

Your browser might be showing the old cached version. Here's how to force refresh:

#### **Chrome / Edge:**
1. Open http://localhost:5173
2. Press **Ctrl+Shift+R** (Windows) or **Cmd+Shift+R** (Mac)
3. Or press **F12** → Right-click the refresh button → Select "Empty Cache and Hard Reload"

#### **Firefox:**
1. Open http://localhost:5173
2. Press **Ctrl+F5** (Windows) or **Cmd+Shift+R** (Mac)

#### **Safari:**
1. Open http://localhost:5173
2. Press **Cmd+Option+E** (clears cache)
3. Then press **Cmd+R** (refresh)

---

### **Step 2: Verify What You Should See**

After hard refresh, you should see:

✅ **Hero Section:**
- Name: "ANMOL PRADHAN"
- Tagline: "Engineering systems that ship with confidence." (NOT "Engineering systems that think.")

✅ **About Section (3 lines):**
- Line 1: "I build test systems—and AI systems—that don't break under pressure."
- Line 2: "SDET at Deutsche Telekom Digital Labs, owning backend validation for One Broadband microservices across RDK and legacy stacks."
- Line 3: "TEST AUTOMATION • BACKEND QUALITY • GENAI / ML VALIDATION"

✅ **Work Section (scroll down to projects):**
- Project 1: "Aurora AI — Device Test Agent"
- Project 2: "People AI Platform (Beta)"
- Project 3: "OneBB GPT — Knowledge Assistant"
- Project 4: "PDF Tools — Privacy-First Utility"

✅ **Experience Section:**
- 2025: Deutsche Telekom Digital Labs (with detailed highlights)
- 2023: Credgenics
- 2022: Rivigo / Mahindra Logistics
- 2021: Rivigo

---

## 🔧 If Changes Still Don't Appear

### **Option 1: Try a Different Browser**

Open in a browser you haven't used yet:
- If you used Chrome, try Firefox
- If you used Firefox, try Chrome
- Try Safari or Edge

### **Option 2: Incognito/Private Mode**

1. Open an **Incognito/Private window**
2. Go to http://localhost:5173
3. This bypasses all cache

**Chrome:** Ctrl+Shift+N (Windows) or Cmd+Shift+N (Mac)  
**Firefox:** Ctrl+Shift+P (Windows) or Cmd+Shift+P (Mac)  
**Safari:** Cmd+Shift+N

### **Option 3: Check Dev Server**

Verify the server is running:
```bash
# Check if port 5173 is in use
lsof -i :5173
```

Should show a node/vite process.

### **Option 4: Rebuild and Restart**

If nothing works, do a complete rebuild:

```bash
# Navigate to project
cd /Users/anmolpradhan/Documents/portfolio/pradhanmol.github.io/cinematic-portfolio

# Stop any running servers
pkill -f vite

# Clear any build cache
rm -rf node_modules/.vite

# Restart dev server
npm run dev
```

Then open http://localhost:5173 in **Incognito mode**.

---

## 📱 Test on Mobile View

1. Open Chrome DevTools (F12)
2. Click the device toolbar icon (or Ctrl+Shift+M)
3. Select "iPhone 12 Pro" or similar
4. Scroll through all sections

---

## ✅ Quick Checklist

Before assuming changes aren't visible:

- [ ] Did you hard refresh? (Ctrl+Shift+R / Cmd+Shift+R)
- [ ] Did you try Incognito/Private mode?
- [ ] Did you try a different browser?
- [ ] Is the dev server running? (check terminal)
- [ ] Are you at http://localhost:5173 (not :5174 or another port)?

---

## 🎯 What Changed (Quick Reference)

| Section | Old | New |
|---------|-----|-----|
| **Hero tagline** | "Engineering systems that think." | "Engineering systems that ship with confidence." |
| **About Line 1** | Generic statement | "I build test systems—and AI systems—that don't break under pressure." |
| **Project 1** | "AI-Powered HR Platform" | "Aurora AI — Device Test Agent" |
| **Project 3** | "Logistics Optimization" | "OneBB GPT — Knowledge Assistant" |
| **Experience** | Generic highlights | Detailed, metric-driven achievements |

---

## 🆘 Still Not Working?

Try this diagnostic:

1. **Check the actual file content:**
   ```bash
   # View the Hero component
   cat /Users/anmolpradhan/Documents/portfolio/pradhanmol.github.io/cinematic-portfolio/src/components/Hero.jsx | grep "Engineering"
   ```
   
   Should output: `Engineering systems that ship with confidence.`

2. **Check dev server terminal:**
   - Look for any errors in the terminal running `npm run dev`
   - Should say "ready in XXX ms"

3. **Check browser console:**
   - Press F12
   - Look at Console tab
   - Check for any red errors

---

## 💡 Most Common Issue: Browser Cache

**90% of the time, the issue is browser cache.**

**Quick fix:**
1. Close ALL browser tabs/windows
2. Reopen browser
3. Go to http://localhost:5173 in **Incognito mode**
4. Changes should now be visible

---

## 🎬 Current Server Status

- **Dev Server:** Running at http://localhost:5173
- **Files Updated:** ✅ Hero.jsx, About.jsx, Work.jsx, Experience.jsx, App.jsx
- **Build Status:** ✅ Production build successful (no errors)
- **Linter:** ✅ No errors

**Everything is ready. Just need to clear your browser cache!**

---

## 📞 Final Debugging Command

Run this to see current Hero tagline:

```bash
grep -A 2 "Engineering" /Users/anmolpradhan/Documents/portfolio/pradhanmol.github.io/cinematic-portfolio/src/components/Hero.jsx
```

Should show: `Engineering systems that ship with confidence.`

If it shows this, the changes ARE in the files—just clear your browser cache!
