# Modern Portfolio Template

A clean, modern portfolio template for designers and developers. Built with Next.js 14, TypeScript, and Tailwind CSS.

## What's Inside

### Design Stuff

- Dark and light mode that actually looks good
- Blue-to-pink gradient borders on hover (you can change this if it's not your thing)
- Custom cursor that follows your mouse around
- Some 3D floating objects in the background using Three.js
- Pinterest-style masonry grid for your work
- Smooth page transitions and animations

### Pages You Get

- Homepage with hero, work samples, about section, and contact
- Full portfolio page with filtering and sorting
- Individual case study pages for each project
- About page if you want to tell your story
- A back-to-top button (shows up when you scroll down)

### Tech Details

- Fast page loads with Next.js 14
- Works on phones, tablets, and desktops
- SEO-ready with proper meta tags
- Clean code that's easy to customize
- Reusable components throughout

## Getting Started

You'll need Node.js 18 or newer installed.

1. Download and unzip the template
2. Open terminal and navigate to the folder
3. Run `npm install` to install everything
4. Run `npm run dev` to start the dev server
5. Open http://localhost:3000 in your browser

That's it. You're running locally now.

## Making It Yours

The template comes with sample content (John Anderson from San Francisco). Here's what you need to change:

### Your Info

Open these files and update them with your details:

**components/Hero.tsx** - Your name and intro text  
**components/Contact.tsx** - Your email and social media links  
**app/layout.tsx** - Meta tags for SEO (page title, description)

```typescript
// In Contact.tsx, update this:
const socials = [
  { name: "Twitter", href: "https://x.com/yourhandle" },
  { name: "LinkedIn", href: "https://linkedin.com/in/yourprofile" },
  // ... etc
];
```

### Your Projects

All project data lives in `lib/projects.ts`. Each project looks like this:

```typescript
{
  slug: "project-name",              // shows up in the URL
  title: "Project Name",
  category: "Landing Page",          // for filtering
  summary: "Quick description...",
  role: "Product Designer",
  year: "2024",
  tags: ["UI Design", "Branding"],
  metrics: ["+40% conversion"],      // optional stats
  image: "https://your-image.jpg",
  problem: "What needed solving",
  process: "How you tackled it",
  solution: "What you built",
  outcome: "Results and impact"
}
```

The template includes 12 sample projects. Just replace them with your own work.

**Available categories:**

- Landing Page
- B2B SaaS Product
- Fintech Platform
- Product-Led Growth
- Design Infrastructure

Want different categories? Edit the list in `app/portfolio/page.tsx`.

### Images

Right now the template uses Unsplash placeholders. You should swap them out:

- Project thumbnails: Update `image` field in `lib/projects.ts`
- Case study headers: Update `caseStudyImage` in the same file
- Exploration images: Change URLs in `components/Skills.tsx`

Images work best at 1600x900px (16:9 ratio). JPG or PNG, high quality.

### Colors

Don't like the blue-purple-pink gradient? Easy to change.

Open `styles/globals.css` and you'll see:

```css
/* Light mode colors */
:root {
  --bg: #fafafa; /* page background */
  --surface: #ffffff; /* cards, panels */
  --text: #1a1a1a; /* main text */
  --muted: #888888; /* secondary text */
  --accent: #1a1a1a; /* accent color */
  --stroke: #ebebeb; /* borders */
}

/* Dark mode colors */
[data-theme="dark"] {
  --bg: #0a0a0a;
  --surface: #141414;
  --text: #f5f5f5;
  --muted: #888888;
  --accent: #f5f5f5;
  --stroke: #1f1f1f;
}
```

Change those hex values to your own colors.

For the gradient (blue-purple-pink on hover), search your project for `from-blue-600 via-purple-600 to-pink-600` and replace with your preferred gradient colors.

### Fonts

Current setup uses Inter for body text and Instrument Serif for accents.

To change fonts, edit `app/layout.tsx`:

```typescript
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });
```

Pick any font from Google Fonts and swap it in.

## What's Built With

- Next.js 14 with the App Router
- TypeScript
- Tailwind CSS for styling
- Framer Motion and GSAP for animations
- Three.js for the 3D stuff
- Inter and Instrument Serif fonts

## File Structure

```
app/
  page.tsx              → Homepage
  layout.tsx            → Root layout and metadata
  about/page.tsx        → About page
  portfolio/page.tsx    → Portfolio grid
  work/[slug]/page.tsx  → Individual case studies

components/
  Hero.tsx              → Homepage hero section
  Navbar.tsx            → Navigation bar
  Contact.tsx           → Contact section with socials
  ThemeToggle.tsx       → Dark/light mode switch
  CustomCursor.tsx      → That custom cursor
  BackToTop.tsx         → Scroll to top button
  ... (and more)

lib/
  projects.ts           → All your project data

public/
  projects/             → Project images
  explorations/         → Exploration images
  case-study/           → Case study headers

styles/
  globals.css           → Global styles and colors
```

## Building for Production

When you're ready to go live:

```bash
npm run build
```

This creates an optimized production build. To test it locally:

```bash
npm start
```

Before you deploy, make sure you:

- Updated all personal info
- Replaced placeholder images
- Added your real projects
- Tested dark mode
- Checked mobile view
- Verified all links work

## Deploying

### Vercel (easiest option)

1. Push your code to GitHub
2. Go to vercel.com and sign in
3. Click "New Project"
4. Import your repo
5. Click "Deploy"

Vercel detects Next.js automatically. No config needed.

### Netlify

Works too, but needs a few settings:

- Build command: `npm run build`
- Publish directory: `.next`

### Your Own Server

If you're hosting it yourself:

```bash
npm run build
pm2 start npm --name "portfolio" -- start
```

Or just run `node .next/standalone/server.js` if you don't use PM2.

## Performance

The template is built with performance in mind:

- Images are automatically optimized and lazy-loaded
- Code splits automatically (thanks Next.js)
- Fonts are optimized using next/font
- 3D components load lazily
- Animations are GPU-accelerated

Typical Lighthouse scores:

- Performance: 90-95
- Accessibility: 95-100
- Best Practices: 95-100
- SEO: 100

## Common Issues

**Port 3000 already in use?**

```bash
lsof -ti:3000 | xargs kill -9
# or run on a different port
npm run dev -- -p 3001
```

**Build errors?**

Try clearing everything:

```bash
rm -rf node_modules .next
npm install
npm run build
```

**Images not showing up?**

Make sure the URLs are accessible. For external images (like Unsplash), add the domain to `next.config.mjs`:

```javascript
images: {
  domains: ['images.unsplash.com'],
}
```

**Dark mode not saving?**

Check that `ThemeProvider` is wrapping your app in `app/layout.tsx`. If it is, try clearing your browser's localStorage.

## Adding Your Own Stuff

Want to add more sections or features? Here are some ideas:

**Blog section:** Create `app/blog/page.tsx` and blog post components

**Contact form:** The template has a contact section but no working form. Integrate Formspree, EmailJS, or build your own backend

**Analytics:** Add Vercel Analytics, Google Analytics, or Plausible

**Newsletter:** Hook up ConvertKit or Mailchimp

**CMS:** Connect Sanity or Contentful if you want to manage content there

The component structure makes it easy to add new stuff. Just copy an existing component and modify it.

## How the Design Works

The whole template uses one simple pattern: gradient borders on hover.

- Buttons, links, and cards have solid backgrounds
- When you hover, a gradient border appears
- It fades in over 500ms
- The gradient goes blue → purple → pink

Everything uses this pattern, which keeps the design consistent. You can change the gradient colors in one place and it updates everywhere.

## License

Thanks for purchasing! This template comes with a straightforward commercial license.

**You're free to:**

- Build your own portfolio with it
- Use it for client projects (unlimited!)
- Customize everything however you want
- Use it commercially without extra fees
- Keep or remove credits (your choice)

**Please don't:**

- Resell or give away the template files
- Create competing template products from it
- Share your purchase with others

One purchase = one person or team. Pretty simple!

Check the full LICENSE file for complete details.

## Support

Need help?

1. Read through this README first
2. Check the Common Issues section above
3. Look at the code comments (there are helpful notes throughout)
4. Reach out through UI8 support if you're still stuck

## What You're Getting

- Full Next.js 14 + TypeScript source code
- 12 sample projects with realistic data
- All page templates (home, portfolio, about, case studies)
- Dark/light theme system
- Custom cursor and loading screen
- All UI components you see in the demo
- This documentation
- Code comments throughout

## Version

**v1.0.0** - Initial release

Includes homepage, portfolio page, about page, case study templates, dark mode, custom cursor, and the gradient design system.

---

Built for designers and developers who want a solid starting point for their portfolio.

Questions? luttestudio28@gmail.com
