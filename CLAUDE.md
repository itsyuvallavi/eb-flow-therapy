# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a React-based marriage therapy website for EB & Flow Marriage Therapy, built with modern web technologies and deployed via GitHub Pages.

## Plan & Review

### Before starting work
•⁠  ⁠Always in plan mode to make a plan
•⁠  ⁠After get the plan, make sure you Write the plan to .claude/tasks/TASK_NAME.md.
•⁠  ⁠The plan should be a detailed implementation plan and the reasoning behind them, as well as tasks broken down.
•⁠  ⁠If the task require external knowledge or certain package, also research to get latest knowledge (Use Task tool for research)
•⁠  ⁠Don't over plan it, always think MVP.
•⁠  ⁠Once you write the plan, firstly ask me to review it. Do not continue until I approve the plan.

### While implementing
•⁠  ⁠You should update the plan as you work.
•⁠  ⁠After you complete tasks in the plan, you should update and append detailed descriptions of the changes you made, so following tasks can be easily hand over to other engineers.
•⁠  ⁠After you complete the task, you should update the plan to mark the task as completed.


## Technology Stack

- **React 18.3** with JSX
- **Vite** - Build tool and dev server
- **TailwindCSS** - Utility-first CSS framework with custom color scheme
- **React Router v7** - Client-side routing
- **EmailJS** - Contact form email service
- **Lucide React** - Icon library
- **ESLint** - Code linting

## Development Commands

```bash
npm run dev        # Start Vite development server (localhost:5173)
npm run build      # Build for production (outputs to dist/)
npm run preview    # Preview production build locally
npm run lint       # Run ESLint linting
npm run deploy     # Build and deploy to GitHub Pages (gh-pages)
```

## Architecture Overview

### Routing Structure
The application uses a single-page application (SPA) architecture with React Router:

- `/` - Home page with hero, services overview, and contact section
- `/our-team` - Team member profiles and information
- `/services` - Detailed services information
- `/contact` - Contact form and practice information
- `/media` - Media appearances and articles
- `/therapists/:id` - Dynamic therapist profile pages

### Component Organization

**Core Layout Components:**
- `MainLayout.jsx` - Primary router and layout wrapper with ScrollToTop functionality
- `NavBar.jsx` - Navigation header
- `Footer.jsx` - Site footer
- `PageLayout.jsx` - Shared page wrapper with animations

**Page Components:**
- `HomePage/_HomeLayout.jsx` - Landing page layout
- `Contact.jsx` - Contact form with EmailJS integration
- `Services.jsx` - Service offerings page
- `OurTeam.jsx` - Team overview page
- `TherapistProfile.jsx` - Individual therapist details

**Utility Components:**
- `ErrorBoundary.jsx` - Error handling wrapper
- `LazyBackground.jsx` - Performance-optimized background images
- `useIntersectionObserver.jsx` - Custom hook for scroll animations

### Data Management

- `src/data/therapists.json` - Therapist profiles, credentials, and specializations
- Dynamic therapist routing using URL parameters (`/therapists/:id`)

### Email Service Integration

The contact form uses EmailJS with environment variables:
- `VITE_EMAILJS_PUBLIC_KEY`
- `VITE_EMAILJS_SERVICE_ID` 
- `VITE_EMAILJS_TEMPLATE_ID`

EmailJS service configured to send to `elinorlmft@gmail.com`

## Custom Styling

TailwindCSS extended with custom color palette:
- **Mountain theme:** terra, dusk, fog, peak, shadow, forest
- **Sage theme:** light, default, dark

Colors designed for therapeutic/wellness branding with earth tones.

## Deployment

- **Production:** GitHub Pages via `gh-pages` package
- **Staging:** Netlify (netlify.toml configured for SPA routing)
- **Build output:** `dist/` directory
- **Public path:** Configured for GitHub Pages subdirectory deployment

## Code Standards

- ESLint configuration includes React, React Hooks, and React Refresh plugins
- React 18.3 with JSX runtime
- ES modules with Vite
- Functional components with hooks
- PropTypes for component validation

## Environment Configuration

Development uses Vite's environment variable system (`import.meta.env`) for:
- EmailJS credentials (required for contact form)
- Development-specific logging and debugging