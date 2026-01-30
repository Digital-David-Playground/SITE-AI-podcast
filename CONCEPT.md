# Tech Leaders Unplugged - Podcast Platform Concept

## Project Overview

A modern, state-of-the-art podcast platform showcasing conversations between three Tech and Consultancy Entrepreneurs:

- **Christian Culver** - CEO, ITPAG (https://www.itpag.com/)
- **Hubert Corr** - CEO, Itinera Projects & Experts (https://itinera-projects-experts.de/)
- **Stefan Rühle** - CEO, Digital Workforce Group (https://www.dwg.io), Talentschmiede, and Digital David (https://www.digitaldavid.io)

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Framer Motion (animations)
- **Video Hosting**: Wistia
- **Deployment**: Vercel (recommended)
- **No Database Required** - Static/SSG content with JSON data files

---

## Site Architecture

### Pages

```
/                       → Home (Hero + Featured Episode + Hosts)
/episodes               → All Episodes Grid with Filters
/episodes/[slug]        → Single Episode Page
/hosts                  → The Three Entrepreneurs (Detailed Profiles)
/hosts/[slug]           → Individual Host Profile
/about                  → About the Podcast
/live                   → Live Events (Future Feature)
/subscribe              → Newsletter + Podcast Platforms
```

### Data Structure

```
/data
  ├── episodes.json     → All episode metadata
  ├── hosts.json        → Host profiles & company info
  ├── topics.json       → Topic categories/tags
  └── events.json       → Upcoming live events
```

---

## Core Features

### 1. Homepage

**Hero Section**
- Full-width cinematic hero with video background (muted ambient loop)
- Bold tagline: "Three CEOs. One Conversation. Infinite Insights."
- Animated text reveal on scroll
- CTA: "Watch Latest Episode" + "Meet the Hosts"

**Featured Episode**
- Large Wistia embed of latest/featured episode
- Episode title, description, topics covered
- Timestamp chapters with direct jump links

**Host Preview**
- Three-column card layout
- Hover effects revealing company logos and brief bios
- Click to expand or navigate to full profile

**Episode Carousel**
- Horizontal scroll of recent episodes
- Thumbnail, title, duration, date
- Smooth scroll with drag interaction

### 2. Episodes Page

**Grid Layout**
- Responsive grid (1-2-3 columns based on viewport)
- Card design: Thumbnail, title, guests, duration, topics

**Filtering & Search**
- Filter by host (who appears)
- Filter by topic/category
- Search by keyword in title/description
- Sort by: Newest, Most Popular, Duration

**Infinite Scroll or Pagination**
- Load more episodes as user scrolls
- Skeleton loading states for smooth UX

### 3. Single Episode Page

**Video Player Section**
- Full Wistia player integration
- Custom-styled play button overlay
- Chapter markers synced with video

**Episode Details**
- Title, date published, duration
- Full description/show notes
- Topics/tags (clickable to filter)
- Guest hosts featured

**Chapter Navigation**
- Sidebar or accordion with timestamps
- Click to jump to section
- Visual indicator of current chapter

**Transcript (Optional)**
- Expandable transcript section
- Searchable within transcript
- Click timestamp to jump in video

**Related Episodes**
- "You might also enjoy" section
- Based on topics or featured hosts

**Social Sharing**
- Share to LinkedIn, Twitter/X, Email
- Copy link button
- Embed code for other sites

### 4. Hosts Page

**Three Entrepreneurs Showcase**
- Equal prominence, no hierarchy
- Professional photos + action shots
- Company affiliations with logos

**Individual Host Cards**
- Name, title, companies
- Brief elevator pitch
- "View Full Profile" CTA

### 5. Single Host Page

**Hero Profile**
- Large professional photo
- Name, title, company logos
- Social links (LinkedIn, Twitter, company website)

**Bio Section**
- Extended biography
- Career highlights
- Areas of expertise

**Company Spotlights**
- Card for each company they lead
- Logo, description, website link

**Episodes Featuring This Host**
- Filtered episode list
- Quick links to their appearances

### 6. Live Events Page (Future)

**Upcoming Events**
- Event cards with date, time, topic
- Registration/RSVP functionality
- Calendar integration (Add to Calendar)

**Past Events**
- Archive of previous live sessions
- Recordings (if available)

---

## Design System

### Visual Identity

**Color Palette**
```css
--primary: #0A0A0B       /* Rich Black - backgrounds */
--secondary: #1A1A1D     /* Dark Gray - cards */
--accent: #6366F1        /* Indigo - CTAs, highlights */
--accent-alt: #8B5CF6    /* Purple - gradients */
--text-primary: #FFFFFF  /* White - headings */
--text-secondary: #A1A1AA /* Gray - body text */
--border: #27272A        /* Subtle borders */
```

**Typography**
- Headings: Inter or Clash Display (modern, bold)
- Body: Inter (clean, readable)
- Monospace accents: JetBrains Mono (timestamps, technical)

**Visual Style**
- Dark theme (professional, cinematic)
- Subtle gradient accents
- Glassmorphism elements
- Smooth micro-animations
- High-contrast for accessibility

### UI Components

**Buttons**
- Primary: Filled with gradient
- Secondary: Outlined with hover fill
- Ghost: Text only with underline animation

**Cards**
- Rounded corners (lg)
- Subtle border
- Hover: lift shadow + border glow

**Navigation**
- Fixed header with blur background
- Logo left, nav center, CTA right
- Mobile: hamburger → full-screen overlay

---

## Wistia Integration

### Player Customization
- Custom colors matching brand
- Autoplay muted for hero backgrounds
- Chapters API for navigation
- Player events for analytics

### Implementation
```typescript
// Wistia embed component
interface WistiaPlayerProps {
  videoId: string;
  autoplay?: boolean;
  muted?: boolean;
  chapters?: Chapter[];
  onTimeUpdate?: (time: number) => void;
}
```

### Features to Leverage
- Turnstile (email gate before watching - optional)
- Heatmaps (engagement analytics)
- A/B thumbnail testing
- Chapters for navigation
- Captions/Transcripts

---

## Animations & Interactions

### Scroll Animations (Framer Motion)
- Fade up on scroll into view
- Staggered children animations
- Parallax on hero images

### Hover States
- Card lift with shadow
- Image zoom within container
- Button gradient shift

### Page Transitions
- Smooth fade between routes
- Skeleton loaders for content

### Video Interactions
- Play button pulse animation
- Progress bar styling
- Chapter marker highlights

---

## Performance Optimization

### Image Handling
- Next.js Image component
- WebP/AVIF formats
- Lazy loading below fold
- Blur placeholder on load

### Video Loading
- Thumbnail until interaction
- Progressive loading
- Responsive video quality

### Code Splitting
- Dynamic imports for heavy components
- Route-based code splitting
- Prefetch on hover

---

## SEO & Metadata

### Per Episode
- Open Graph images (auto-generated or custom)
- Twitter Cards
- JSON-LD structured data (PodcastEpisode schema)
- Canonical URLs

### Site-wide
- Sitemap generation
- robots.txt
- RSS feed for podcast directories

---

## Folder Structure

```
/app
  ├── layout.tsx
  ├── page.tsx                    # Homepage
  ├── episodes/
  │   ├── page.tsx                # Episodes listing
  │   └── [slug]/
  │       └── page.tsx            # Single episode
  ├── hosts/
  │   ├── page.tsx                # All hosts
  │   └── [slug]/
  │       └── page.tsx            # Single host
  ├── about/
  │   └── page.tsx
  ├── live/
  │   └── page.tsx
  └── subscribe/
      └── page.tsx

/components
  ├── layout/
  │   ├── Header.tsx
  │   ├── Footer.tsx
  │   └── Navigation.tsx
  ├── ui/
  │   ├── Button.tsx
  │   ├── Card.tsx
  │   ├── Badge.tsx
  │   └── ...
  ├── episodes/
  │   ├── EpisodeCard.tsx
  │   ├── EpisodeGrid.tsx
  │   ├── EpisodePlayer.tsx
  │   └── ChapterNav.tsx
  ├── hosts/
  │   ├── HostCard.tsx
  │   ├── HostProfile.tsx
  │   └── CompanyCard.tsx
  ├── home/
  │   ├── Hero.tsx
  │   ├── FeaturedEpisode.tsx
  │   └── HostsPreview.tsx
  └── wistia/
      ├── WistiaPlayer.tsx
      └── WistiaBackground.tsx

/data
  ├── episodes.json
  ├── hosts.json
  ├── topics.json
  └── events.json

/lib
  ├── wistia.ts                   # Wistia API helpers
  ├── utils.ts                    # General utilities
  └── types.ts                    # TypeScript definitions

/public
  ├── images/
  │   ├── hosts/
  │   └── logos/
  └── fonts/

/styles
  └── globals.css                 # Tailwind + custom styles
```

---

## Data Models

### Episode
```typescript
interface Episode {
  id: string;
  slug: string;
  title: string;
  description: string;
  wistiaId: string;
  thumbnail: string;
  duration: number;              // seconds
  publishedAt: string;           // ISO date
  hosts: string[];               // host IDs
  topics: string[];              // topic slugs
  chapters?: Chapter[];
  featured?: boolean;
}

interface Chapter {
  title: string;
  timestamp: number;             // seconds
}
```

### Host
```typescript
interface Host {
  id: string;
  slug: string;
  name: string;
  title: string;
  bio: string;
  shortBio: string;
  image: string;
  companies: Company[];
  social: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}

interface Company {
  name: string;
  role: string;
  logo: string;
  url: string;
  description: string;
}
```

### Event (Future)
```typescript
interface LiveEvent {
  id: string;
  title: string;
  description: string;
  date: string;                  // ISO date
  time: string;
  timezone: string;
  registrationUrl?: string;
  recordingWistiaId?: string;    // After event
  status: 'upcoming' | 'live' | 'past';
}
```

---

## Implementation Phases

### Phase 1: Foundation
- [ ] Project setup (Next.js, TypeScript, Tailwind)
- [ ] Design system components
- [ ] Layout (Header, Footer, Navigation)
- [ ] Homepage structure

### Phase 2: Core Pages
- [ ] Episodes listing page
- [ ] Single episode page with Wistia
- [ ] Hosts overview page
- [ ] Individual host profiles

### Phase 3: Polish
- [ ] Animations and transitions
- [ ] SEO optimization
- [ ] Performance tuning
- [ ] Mobile responsiveness

### Phase 4: Enhancements
- [ ] Search and filtering
- [ ] Chapter navigation
- [ ] Social sharing
- [ ] RSS feed

### Phase 5: Future Features
- [ ] Live events integration
- [ ] Newsletter signup
- [ ] Transcript support
- [ ] Analytics dashboard

---

## Key Differentiators

1. **Cinematic Experience** - Not just another podcast site; feels like a Netflix for business conversations

2. **Host-Centric** - Equal spotlight on all three entrepreneurs, their companies, and expertise

3. **Chapter Navigation** - Deep-dive into specific topics within episodes

4. **Modern Performance** - Fast, smooth, accessible on all devices

5. **Future-Ready** - Architecture supports live events and community features

---

## Sample Content Placeholders

### Taglines
- "Three CEOs. One Conversation. Infinite Insights."
- "Where Tech Leadership Meets Real Talk"
- "Unfiltered conversations from the front lines of tech consulting"

### Episode Title Examples
- "The AI Revolution: Hype vs. Reality in Enterprise"
- "Building Teams That Build Companies"
- "When Digital Transformation Goes Wrong"
- "The Future of IT Consulting"

---

## Notes

- **Talentschmiede info pending** - Will add to Stefan's company list when provided
- **Wistia setup required** - Need Wistia account and API access
- **Domain/hosting TBD** - Recommend Vercel for Next.js optimization
- **Content creation** - Episode metadata, bios, and images needed

---

*Concept created: January 2026*
*Ready for implementation*
