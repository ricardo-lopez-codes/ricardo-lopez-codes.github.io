# Dennis Snellenberg Multilingual Greeting Preloader Animation

A clean, standalone recreation of the iconic award-winning Dennis Snellenberg portfolio preloader with:
- **Multilingual Greetings Sequence**: Cycles through 15 languages, starting with **Tamil** (*வணக்கம்*) and ending on **Hello** (*English*).
- **Luminescent Glowing Indicator**: Center-aligned white dot with glowing drop-shadow.
- **SVG Quadratic Bézier Curve Curtain Transition**: Upward-lifting curved bottom exit animation.
- **Neue Montreal Typography**: Included `.otf` font assets.

---

## 📁 Folder Structure

```
Greeting animation/
├── index.html               <-- Standalone zero-dependency HTML/JS file (double-click to run in browser)
├── GreetingAnimation.tsx    <-- React / Next.js component (using framer-motion)
├── fonts/                   <-- Original Neue Montreal typeface files
│   ├── NeueMontreal-Regular.otf
│   ├── NeueMontreal-Bold.otf
│   └── NeueMontreal-Light.otf
└── README.md
```

---

## 🚀 How to Run

### Option 1: Standalone HTML (Immediate Browser Preview)
Just open `Greeting animation/index.html` directly in any web browser (Chrome, Edge, Safari, Firefox). No servers or dependencies required.

### Option 2: In a React / Next.js Project
1. Copy `GreetingAnimation.tsx` into your components folder.
2. Ensure `framer-motion` is installed:
   ```bash
   npm install framer-motion
   ```
3. Import and use the component:
   ```tsx
   import GreetingAnimation from "./GreetingAnimation";

   export default function Page() {
     return <GreetingAnimation />;
   }
   ```
