# Content Submission Guide

This guide documents all the information needed when adding new content to the Tech Leaders Unplugged website.

---

## Adding a New Episode

When submitting a new episode, please provide:

### Required Information

| Field | Description | Example |
|-------|-------------|---------|
| **Wistia ID** | The video ID from Wistia | `abc123xyz` |
| **Title (DE)** | German title | `Die KI-Revolution im Mittelstand` |
| **Title (EN)** | English title | `The AI Revolution in SMEs` |
| **Description (DE)** | German description (2-3 sentences) | `In dieser Episode...` |
| **Description (EN)** | English description (2-3 sentences) | `In this episode...` |
| **Hosts** | Which hosts appear | `Christian, Hubert, Stefan` or specific IDs |
| **Topics** | Relevant topic slugs | `ai-ml`, `digital-transformation` |
| **Duration** | Video length in seconds | `3600` (for 1 hour) |
| **Publish Date** | When to publish | `2025-02-15` |

### Optional Information

| Field | Description | Example |
|-------|-------------|---------|
| **Thumbnail** | Custom thumbnail URL (otherwise uses Wistia default) | `/media/episodes/ep4-thumb.jpg` |
| **Chapters** | Timestamp markers with titles | See format below |

### Chapter Format

```
0:00 - Einführung / Introduction
3:00 - Thema 1 / Topic 1
12:00 - Thema 2 / Topic 2
...
```

### Available Topics

Current topics in the system:
- `ai-ml` - KI & Machine Learning
- `digital-transformation` - Digitale Transformation
- `leadership` - Leadership & Kultur
- `cloud-infrastructure` - Cloud & Infrastruktur
- `security` - Cybersecurity
- `innovation` - Innovation & Startups

*Need a new topic? Let me know and I'll add it.*

---

## Adding a New Host

When adding a new host, please provide:

### Required Information

| Field | Description |
|-------|-------------|
| **Name** | Full name |
| **Photo** | High-quality portrait photo (ideally square or 3:4 ratio) |
| **Title (DE/EN)** | Job title in both languages |
| **Short Bio (DE/EN)** | 1-2 sentences for card previews |
| **Full Bio (DE/EN)** | 2-3 paragraphs for detail page |
| **LinkedIn URL** | LinkedIn profile link |

### Company Information (for each company)

| Field | Description |
|-------|-------------|
| **Company Name** | Official company name |
| **Company Logo** | Logo image (SVG or PNG with transparency preferred) |
| **Company URL** | Website URL |
| **Role (DE/EN)** | Role at this company |
| **Company Description (DE/EN)** | Brief company description |

### Optional Information

| Field | Description |
|-------|-------------|
| **Twitter/X URL** | Twitter profile |
| **Website URL** | Personal website |

---

## Adding a New Live Event

When announcing a new live event, please provide:

### Required Information

| Field | Description | Example |
|-------|-------------|---------|
| **Title (DE)** | German event title | `Live Q&A: Cloud-Strategien` |
| **Title (EN)** | English event title | `Live Q&A: Cloud Strategies` |
| **Description (DE)** | German description | `Stellen Sie Ihre Fragen...` |
| **Description (EN)** | English description | `Ask your questions...` |
| **Date** | Event date | `2025-03-15` |
| **Time** | Start time | `18:00` |
| **Timezone** | Timezone | `CET` |

### Optional Information

| Field | Description |
|-------|-------------|
| **Registration URL** | Link to registration page |
| **Wistia ID** | For recording after event (converts to past event) |

---

## File Naming Conventions

### Images
- Episode thumbnails: `/public/media/episodes/[slug]-thumb.jpg`
- Host photos: `/public/media/[firstname]_[lastname]_full.jpg`
- Company logos: `/public/media/logos/[company-name].svg`

### Slugs
Slugs are URL-friendly identifiers:
- Use lowercase
- Replace spaces with hyphens
- Remove special characters
- Example: "Die KI-Revolution" → `die-ki-revolution`

---

## Quick Submission Template

Copy and fill out for new episodes:

```
NEW EPISODE SUBMISSION
======================

Wistia ID:
Publish Date:

Title (DE):
Title (EN):

Description (DE):


Description (EN):


Hosts:
Topics:
Duration (seconds):

Chapters (optional):
0:00 -
...

Thumbnail: [default / custom file attached]
```

---

## Questions?

If you're unsure about any field or need a new topic/category added, just ask!
