# Executive Career Storefront


A premium Next.js website showcasing executive leadership experience, projects, and thought leadership. Built for C-level / Director-level positioning in Quality Engineering and AI-first transformation.

## Tech Stack

- **Next.js 14+** (App Router)
- **TypeScript**
- **TailwindCSS**
- **Framer Motion** (subtle animations)
- **Lucide React** (icons)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Copy environment variables:
```bash
cp .env.example .env.local
```

3. Update `.env.local` with your configuration (optional):
```env
NEXT_PUBLIC_CHAT_ENDPOINT=https://your-rag-endpoint-url
NEXT_PUBLIC_CHAT_TITLE="Ask about Ignacio"
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Build for production:

```bash
npm run build
```

Start production server:

```bash
npm start
```

## Content Management

### Single Source of Truth

All content is managed in **`src/content/profile.ts`**. This is the canonical file for:
- Personal information (name, title, location)
- Executive summary
- Impact cards
- Work experience
- Parallel projects
- Thought leadership / POV
- Skills
- Contact information
- Photos references
- Chat agent configuration

### Editing Content

1. Open `src/content/profile.ts`
2. Update the `profile` object with your information
3. Use explicit placeholders like `"(Add metric)"` or `"https://(add-link)"` for missing data
4. Never invent jobs, dates, companies, metrics, or achievements

### Adding Resume PDF

1. Add your resume PDF file to `public/` directory as `resume.pdf`
2. The "Download Resume" button in the Hero section will automatically link to it
3. Alternatively, update the link in `components/sections/Hero.tsx` if you use a different filename or location

### Adding Photos

1. Add photo files to `public/photos/` directory
2. Update the `photos` array in `src/content/profile.ts`:
```typescript
photos: [
  { src: "/photos/photo-1.jpg", alt: "Description of photo" },
  // ... more photos
]
```

3. Supported formats: JPG, PNG, WebP
4. Recommended: Optimize images before adding (use tools like ImageOptim or Squoosh)

## Chat Widget (RAG Integration)

### Using Mock API (Default)

The site includes a mock chat API at `/app/api/chat/route.ts` that returns canned responses. This works out of the box for testing.

### Connecting to Real RAG Endpoint

1. Set `NEXT_PUBLIC_CHAT_ENDPOINT` in `.env.local`:
```env
NEXT_PUBLIC_CHAT_ENDPOINT=https://your-rag-endpoint-url
```

2. Ensure your endpoint accepts POST requests with this format:
```json
{
  "message": "user message here",
  "context": {
    "page": "home"
  }
}
```

3. Your endpoint should return JSON in this format:
```json
{
  "response": "AI assistant response here"
}
```
or
```json
{
  "message": "AI assistant response here"
}
```

4. The chat widget will automatically use your endpoint if `NEXT_PUBLIC_CHAT_ENDPOINT` is set.

### Replacing Mock Route

If you want to completely replace the mock route:

1. Delete or modify `/app/api/chat/route.ts`
2. Update it to proxy requests to your RAG endpoint
3. Handle authentication headers if needed
4. Implement streaming if your endpoint supports it

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

Make sure to:
- Set environment variables
- Configure build command: `npm run build`
- Set output directory: `.next`

## SEO & Metadata

The site includes:
- Dynamic metadata (title, description, keywords)
- OpenGraph tags
- Twitter Card tags
- JSON-LD structured data (Person schema)
- Sitemap (`/sitemap.xml`)
- Robots.txt (`/robots.txt`)

**Important:** Update placeholder URLs in:
- `app/layout.tsx` (OpenGraph URL, JSON-LD URL)
- `app/sitemap.ts` (baseUrl)
- `app/robots.ts` (sitemap URL)

## Accessibility

The site includes:
- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- Focus styles
- Screen reader friendly structure

## Sections

1. **Hero** - Name, title, positioning statement, proof points, CTAs
2. **Executive Summary** - 2-4 paragraph executive bio
3. **Executive Impact** - Impact cards with metrics/outcomes
4. **Experience Timeline** - Leadership roles with achievements
5. **Parallel Projects** - Venture studio / side projects
6. **Thought Leadership** - Point of view / principles
7. **Skills & Stack** - Grouped skills display
8. **Photos Gallery** - Image gallery with lightbox
9. **Contact** - Contact form and information
10. **Chat Widget** - Floating RAG-powered chat bubble

## Project Structure

```
├── app/
│   ├── api/
│   │   ├── chat/route.ts       # Mock chat API (replace with RAG endpoint)
│   │   └── contact/route.ts    # Contact form API
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout with SEO
│   ├── page.tsx                 # Main page
│   ├── robots.ts                # Robots.txt
│   └── sitemap.ts               # Sitemap generation
├── components/
│   ├── chat/
│   │   └── ChatWidget.tsx      # RAG chat widget
│   └── sections/
│       ├── Contact.tsx
│       ├── ExecutiveImpact.tsx
│       ├── ExecutiveSummary.tsx
│       ├── ExperienceTimeline.tsx
│       ├── Hero.tsx
│       ├── ParallelProjects.tsx
│       ├── PhotosGallery.tsx
│       ├── SkillsStack.tsx
│       └── ThoughtLeadership.tsx
├── public/
│   └── photos/                  # Add your photos here
├── src/
│   └── content/
│       └── profile.ts           # Single source of truth for all content
└── package.json
```

## Customization

### Design System

Edit `app/globals.css` and `tailwind.config.ts` to customize:
- Colors
- Typography
- Spacing
- Animations

### Components

All section components are in `components/sections/`. Each component:
- Uses Framer Motion for subtle animations
- Is fully responsive
- Supports dark mode
- Is accessible

## License

Private - All rights reserved

## Support

For questions or issues, refer to the content in `src/content/profile.ts` or check the component files for implementation details.

