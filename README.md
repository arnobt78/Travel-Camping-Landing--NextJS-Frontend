# Travel & Camping Landing Page - Next.js, TailwindCSS Frontend Project

A modern, responsive, and feature-rich travel and camping web application built with Next.js 16, React 19, TypeScript, and Tailwind CSS. This project provides a beautiful UI/UX for exploring camping destinations, viewing features, and guiding users through an engaging journey experience.

**Live-Demo:** [https://travel-camping-ui.vercel.app/](https://travel-camping-ui.vercel.app/)

![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black)
![React](https://img.shields.io/badge/React-19.2.3-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.17-38bdf8)

![Screenshot 2025-08-05 at 00 25 23](https://github.com/user-attachments/assets/29d92a8d-1781-40e9-9a2f-b1b317de56e5)
![Screenshot 2025-08-05 at 00 25 41](https://github.com/user-attachments/assets/5a3cdf2a-3f4e-4506-9468-b90c726ec493)
![Screenshot 2025-08-05 at 00 26 04](https://github.com/user-attachments/assets/0d15d65b-87ff-4a84-921c-ccc295626d08)
![Screenshot 2025-08-05 at 00 26 24](https://github.com/user-attachments/assets/2cf440b6-1013-43f1-862f-4c29118b46b8)
![Screenshot 2025-08-05 at 00 26 48](https://github.com/user-attachments/assets/64356c84-c093-4b1e-bb4a-19274da0c38b)
![Screenshot 2025-08-05 at 00 27 03](https://github.com/user-attachments/assets/6d22696c-31f2-4936-a0d2-6e259d27ae7d)
![Screenshot 2025-08-05 at 00 27 35](https://github.com/user-attachments/assets/833553bb-081a-4ccc-99cc-61b222d34344)

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Components Documentation](#components-documentation)
- [How It Works](#how-it-works)
- [Reusing Components](#reusing-components)
- [Code Examples](#code-examples)
- [Styling Guide](#styling-guide)
- [Build & Deployment](#build--deployment)
- [Keywords](#keywords)
- [Conclusion](#conclusion)

---

## Project Overview

This project is a comprehensive landing page for **Hilink**, a camping and adventure companion app. The application showcases:

- **Camping Destinations**: Featured camping sites with community engagement
- **App Features**: Offline maps, AR navigation, adventure scheduling
- **User Guidance**: Helpful tips and navigation assistance
- **Call-to-Action**: App download promotion for iOS and Android

The project demonstrates modern web development best practices including:

- Component-based architecture
- TypeScript for type safety
- Responsive design with Tailwind CSS
- Next.js App Router for optimal performance
- Static site generation for fast loading
- SEO optimization with comprehensive metadata

---

## Features

### Core Features

- **Hero Section**: Eye-catching introduction with ratings and call-to-action buttons
- **Camp Section**: Highlights popular camping sites and community engagement
- **Guide Section**: Offers guidance and tips for safe and enjoyable adventures
- **Features Section**: Showcases app features like offline maps, AR navigation, and more
- **Get App Section**: Promotes app downloads for iOS and Android
- **Responsive Navbar**: Easy navigation with mobile menu support
- **Footer**: Contains links, contact info, and social icons

### Technical Features

- **Fully Responsive**: Works seamlessly on mobile, tablet, and desktop
- **TypeScript**: Full type safety throughout the codebase
- **Component Reusability**: Modular components that can be easily reused
- **Performance Optimized**: Next.js Image component for optimized image loading
- **SEO Friendly**: Comprehensive metadata for search engine optimization
- **Static Export**: Can be deployed to any static hosting service
- **Modern Stack**: Latest stable versions of Next.js, React, and TypeScript

---

## Tech Stack

### Core Technologies

- **Framework**: [Next.js 16.1.1](https://nextjs.org/) (App Router)
- **UI Library**: [React 19.2.3](https://react.dev/)
- **Language**: [TypeScript 5.7.2](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 3.4.17](https://tailwindcss.com/)
- **Build Tool**: Turbopack (included with Next.js 16)

### Development Tools

- **Package Manager**: npm
- **CSS Processing**: PostCSS 8.4.47
- **Autoprefixer**: 10.4.20
- **Type Definitions**: @types/node, @types/react, @types/react-dom

### Key Libraries & Features

- **Next.js Image**: Optimized image loading and rendering
- **Next.js Link**: Client-side navigation
- **Tailwind CSS**: Utility-first CSS framework
- **TypeScript**: Static type checking

---

## Project Structure

```bash
travel-camping/
├── app/                          # Next.js App Router directory
│   ├── favicon.ico              # Site favicon (auto-detected by Next.js 15+)
│   ├── globals.css              # Global styles and Tailwind directives
│   ├── layout.tsx               # Root layout with metadata and structure
│   └── page.tsx                 # Home page component
│
├── components/                   # React components
│   ├── Button.tsx               # Reusable button component
│   ├── Camp.tsx                 # Camp destinations section
│   ├── Features.tsx             # App features showcase
│   ├── Footer.tsx               # Site footer
│   ├── GetApp.tsx               # App download CTA section
│   ├── Guide.tsx                # User guidance section
│   ├── Hero.tsx                 # Hero/landing section
│   └── Navbar.tsx               # Navigation bar
│
├── constants/                    # Application constants
│   └── index.ts                 # Centralized data (links, features, etc.)
│
├── public/                       # Static assets
│   ├── *.svg                    # SVG icons and graphics
│   ├── *.png                    # Image assets
│   └── *.jpg                    # Image assets
│
├── next.config.mjs              # Next.js configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
├── postcss.config.js            # PostCSS configuration
├── package.json                 # Project dependencies and scripts
└── README.md                    # Project documentation
```

### Directory Explanations

- **`app/`**: Next.js 13+ App Router directory. Contains routes, layouts, and pages
- **`components/`**: Reusable React components organized by feature
- **`constants/`**: Centralized data storage following "Single Source of Truth" principle
- **`public/`**: Static files served at the root URL (images, icons, etc.)

---

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 18.17 or higher (recommended: 20.9+)
- **npm**: Version 9.0 or higher (comes with Node.js)
- **Git**: For version control

### Installation Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/travel-camping.git
   cd travel-camping
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

   This will install all required packages including:

   - Next.js 16.1.1
   - React 19.2.3
   - TypeScript 5.7.2
   - Tailwind CSS 3.4.17
   - And all other dependencies

3. **Run the development server**

   ```bash
   npm run dev
   ```

   The application will be available at [http://localhost:3000](http://localhost:3000)

4. **Open in browser**

   Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Available Scripts

- **`npm run dev`**: Starts the development server with hot-reload
- **`npm run build`**: Creates an optimized production build
- **`npm run start`**: Starts the production server (after build)
- **`npm run lint`**: Runs ESLint to check for code issues

---

## Environment Variables

### Important Note

This project is configured as a **static site** (`output: 'export'` in `next.config.mjs`), which means it generates static HTML files that can be deployed to any static hosting service. As such, **environment variables are not required** for basic functionality.

### When You Might Need Environment Variables

If you plan to extend this project with dynamic features, you may need environment variables for:

- API endpoints
- Third-party service keys
- Analytics tracking IDs
- Feature flags

### Setting Up Environment Variables (For Future Use)

1. **Create a `.env.local` file** in the root directory:

   ```bash
   touch .env.local
   ```

2. **Add your environment variables**:

   ```env
   # Example environment variables (not currently used)
   NEXT_PUBLIC_API_URL=https://api.example.com
   NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
   NEXT_PUBLIC_FEATURE_FLAG_ENABLED=true
   ```

3. **Important Notes**:

   - Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser
   - Variables without the prefix are server-only
   - `.env.local` is gitignored by default
   - Never commit sensitive keys to version control

4. **Access in code**:

   ```typescript
   // In your components
   const apiUrl = process.env.NEXT_PUBLIC_API_URL;
   ```

### Current Configuration

The project currently uses:

- **Static export mode**: No server-side rendering, no API routes
- **No environment variables required**: All data is in `constants/index.ts`
- **Public assets**: All images and icons are in the `public/` directory

---

## Components Documentation

### Button Component

**Location**: `components/Button.tsx`

A reusable button component with support for icons, variants, and full-width option.

**Props**:

```typescript
type ButtonProps = {
  type: "button" | "submit"; // HTML button type
  title: string; // Button text
  icon?: string; // Optional icon path
  variant: string; // CSS class variant
  full?: boolean; // Optional full-width
};
```

**Usage Example**:

```tsx
import Button from "@/components/Button";

<Button
  type="button"
  title="Download App"
  icon="/apple.svg"
  variant="btn_green"
  full
/>;
```

**Available Variants**:

- `btn_white`: White background with green text
- `btn_white_text`: White background with gray text
- `btn_green`: Green background with white text
- `btn_dark_green`: Dark green background with white text
- `btn_dark_green_outline`: Dark green outline style

---

### Navbar Component

**Location**: `components/Navbar.tsx`

Responsive navigation bar with logo, links, login button, and mobile menu icon.

**Features**:

- Desktop navigation links (hidden on mobile)
- Mobile menu icon (visible on mobile)
- Logo linking to home page
- Responsive visibility patterns

**Usage**:

```tsx
import Navbar from "@/components/Navbar";

// Automatically used in layout.tsx
<Navbar />;
```

**Customization**:

- Edit `constants/index.ts` → `NAV_LINKS` to modify navigation items

---

### Hero Component

**Location**: `components/Hero.tsx`

Main landing section (above-the-fold content) with title, description, ratings, and CTAs.

**Features**:

- Hero title and description
- Star ratings display (5 stars)
- Call-to-action buttons
- Location information card
- Background map pattern

**Usage**:

```tsx
import Hero from "@/components/Hero";

<Hero />;
```

---

### Camp Component

**Location**: `components/Camp.tsx`

Displays featured camping destinations with community engagement indicators.

**Features**:

- Horizontally scrollable camp site cards
- Dynamic background images
- Community member avatars
- Call-to-action overlay card

**Sub-components**:

- `CampSite`: Individual camp destination card

**Usage**:

```tsx
import Camp from "@/components/Camp";

<Camp />;
```

**Customization**:

- Modify camp sites in the component JSX
- Update background images in `tailwind.config.ts`

---

### Guide Component

**Location**: `components/Guide.tsx`

Section explaining the app's navigation and guidance features.

**Features**:

- Introduction text with decorative icon
- Large background image
- Overlay card with route information
- Absolute positioning for overlay

**Usage**:

```tsx
import Guide from "@/components/Guide";

<Guide />;
```

---

### Features Component

**Location**: `components/Features.tsx`

Showcases the app's key features in a two-column grid layout.

**Features**:

- Phone mockup image
- Feature grid (1 column mobile, 2 columns desktop)
- Feature icons and descriptions
- Data-driven from constants

**Sub-components**:

- `FeatureItem`: Individual feature card

**Usage**:

```tsx
import Features from "@/components/Features";

<Features />;
```

**Customization**:

- Edit `constants/index.ts` → `FEATURES` array to add/modify features

---

### GetApp Component

**Location**: `components/GetApp.tsx`

Call-to-action section promoting mobile app downloads.

**Features**:

- App store download buttons
- Phone mockup image
- Responsive layout (stacked on mobile, side-by-side on desktop)

**Usage**:

```tsx
import GetApp from "@/components/GetApp";

<GetApp />;
```

---

### Footer Component

**Location**: `components/Footer.tsx`

Site footer with links, contact information, and social media icons.

**Features**:

- Logo link
- Navigation link columns
- Contact information
- Social media icons
- Copyright notice

**Sub-components**:

- `FooterColumn`: Reusable footer column wrapper

**Usage**:

```tsx
import Footer from "@/components/Footer";

// Automatically used in layout.tsx
<Footer />;
```

**Customization**:

- Edit `constants/index.ts` → `FOOTER_LINKS`, `FOOTER_CONTACT_INFO`, `SOCIALS`

---

## How It Works

### Next.js App Router

This project uses Next.js 16's App Router, which provides:

- **File-based routing**: Files in `app/` directory become routes
- **Layouts**: `layout.tsx` wraps pages with shared UI
- **Metadata API**: SEO metadata defined in `layout.tsx`
- **Static generation**: Pages are pre-rendered at build time

### Component Composition

The home page (`app/page.tsx`) composes multiple components:

```tsx
export default function Home() {
  return (
    <>
      <Hero /> {/* Landing section */}
      <Camp /> {/* Camp destinations */}
      <Guide /> {/* Guidance section */}
      <Features /> {/* Features showcase */}
      <GetApp /> {/* App download CTA */}
    </>
  );
}
```

### Data Flow

1. **Constants**: Data stored in `constants/index.ts`
2. **Components**: Import and use constants
3. **Rendering**: Components map over arrays to render lists
4. **Styling**: Tailwind CSS classes applied for responsive design

### Image Optimization

All images use Next.js `Image` component:

```tsx
import Image from "next/image";

<Image
  src="/hero.png"
  alt="description"
  width={1200}
  height={630}
  unoptimized // Required for static export
/>;
```

**Note**: `unoptimized` prop is used because the project uses static export mode.

---

## Reusing Components

### Using Components in Other Projects

All components are designed to be reusable. Here's how to use them:

#### Step 1: Copy the Component File

Copy the component file (e.g., `Button.tsx`) to your project's components directory.

#### Step 2: Install Dependencies

Ensure you have the required dependencies:

```bash
npm install next react react-dom
npm install -D @types/react @types/react-dom typescript
```

#### Step 3: Update Import Paths

Update the import paths in the component:

```tsx
// Change from:
import { FEATURES } from "@/constants";

// To your project's path structure:
import { FEATURES } from "../constants";
// or
import { FEATURES } from "../../constants";
```

#### Step 4: Copy Required Assets

Copy any required images/icons from `public/` to your project's `public/` directory.

#### Step 5: Copy Constants (if needed)

If the component uses constants, copy the relevant data from `constants/index.ts`.

#### Step 6: Update Tailwind Classes

Ensure your `tailwind.config.ts` includes the custom classes used by the component, or update the classes to match your design system.

### Example: Reusing the Button Component

```tsx
// In your project
import Button from "./components/Button";

function MyPage() {
  return (
    <div>
      <Button type="button" title="Click Me" variant="btn_green" />
    </div>
  );
}
```

### Example: Reusing the Features Component

```tsx
// 1. Copy Features.tsx to your components folder
// 2. Copy constants/index.ts → FEATURES array
// 3. Copy required icons from public/

import Features from "./components/Features";

function MyPage() {
  return (
    <div>
      <Features />
    </div>
  );
}
```

---

## Code Examples

### Adding a New Feature

To add a new feature to the Features section, follow these steps:

1. **Edit `constants/index.ts`**:

```typescript
export const FEATURES = [
  // ... existing features
  {
    title: "Your New Feature",
    icon: "/your-icon.svg",
    variant: "green",
    description: "Description of your new feature goes here.",
  },
];
```

1. **Add the icon** to `public/your-icon.svg`

2. The feature will automatically appear in the Features section!

### Adding a Navigation Link

Follow these steps to add a navigation link:

1. **Edit `constants/index.ts`**:

```typescript
export const NAV_LINKS = [
  // ... existing links
  { href: "/new-page", key: "new_page", label: "New Page" },
];
```

1. The link will automatically appear in the Navbar!

### Creating a Custom Button Variant

To create a custom button variant:

1. **Add CSS class** in `app/globals.css`:

```css
@layer utilities {
  .btn_custom {
    @apply border-blue-500 bg-blue-500 px-8 py-3 text-white;
  }
}
```

1. **Use the variant**:

```tsx
<Button type="button" title="Custom Button" variant="btn_custom" />
```

### Modifying the Hero Section

Edit `components/Hero.tsx`:

```tsx
// Change the title
<h1 className="bold-52 lg:bold-88">Your New Title</h1>

// Change the description
<p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
  Your new description text here.
</p>
```

---

## Styling Guide

### Tailwind CSS Configuration

The project uses a custom Tailwind configuration with:

#### Custom Colors

```typescript
colors: {
  green: {
    50: '#30AF5B',  // Primary green
    90: '#292C27',  // Dark green
  },
  gray: {
    10: '#EEEEEE',
    20: '#A2A2A2',
    30: '#7B7B7B',
    50: '#585858',
    90: '#141414',
  },
  // ... more colors
}
```

#### Custom Background Images

```typescript
backgroundImage: {
  'bg-img-1': "url('/img-1.png')",
  'bg-img-2': "url('/img-2.png')",
  'feature-bg': "url('/feature-bg.png')",
  // ... more backgrounds
}
```

#### Custom Breakpoints

```typescript
screens: {
  xs: '400px',
  '3xl': '1680px',
  '4xl': '2200px',
}
```

### Utility Classes

The project defines custom utility classes in `app/globals.css`:

- **Layout**: `max-container`, `padding-container`, `flexCenter`, `flexBetween`
- **Buttons**: `btn_white`, `btn_green`, `btn_dark_green`, etc.
- **Typography**: `regular-16`, `bold-20`, `bold-40`, etc.
- **Components**: `hero-map`, `camp-quote`, `feature-phone`, `get-app`

### Responsive Design Patterns

The project uses Tailwind's responsive prefixes:

- **Mobile first**: Base styles apply to mobile
- **Breakpoints**: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`, `3xl:`
- **Example**:

```tsx
<div className="flex flex-col lg:flex-row">
  {/* Stacks vertically on mobile, horizontally on large screens */}
</div>
```

---

## Build & Deployment

### Building for Production

1. **Create production build**:

   ```bash
   npm run build
   ```

   This creates an `out/` directory with static HTML, CSS, and JavaScript files.

2. **Preview the build locally**:

   ```bash
   npm run start
   ```

### Deployment Options

#### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

#### Netlify

1. Build command: `npm run build`
2. Publish directory: `out`
3. Deploy to Netlify

#### GitHub Pages

1. Build the project: `npm run build`
2. Copy `out/` directory contents to `gh-pages` branch
3. Enable GitHub Pages in repository settings

#### Any Static Hosting

Since this is a static site, you can deploy the `out/` directory to:

- AWS S3 + CloudFront
- Cloudflare Pages
- Firebase Hosting
- Any web server

### Build Output

After running `npm run build`, you'll find:

- **`out/`**: Static files ready for deployment
- **`out/index.html`**: Main HTML file
- **`out/_next/`**: Optimized JavaScript and CSS bundles
- **`out/*.png`, `out/*.svg`**: Static assets

---

## Keywords

**Technologies**: Next.js, React, TypeScript, Tailwind CSS, App Router, Static Site Generation, Turbopack

**Concepts**: Component-based architecture, Responsive design, TypeScript interfaces, CSS-in-JS, Utility-first CSS, Client-side navigation, Image optimization, SEO optimization

**Features**: Camping app, Hiking app, Outdoor adventure, Offline maps, AR navigation, Adventure planning, Travel application, Landing page, UI/UX design

**Development**: Modern web development, Full-stack development, Frontend development, React patterns, Next.js best practices, TypeScript patterns, Component reusability, Code organization

---

## Conclusion

This project demonstrates modern web development practices using the latest stable versions of Next.js, React, and TypeScript. It showcases:

- **Component-based architecture** for maintainable code
- **TypeScript** for type safety and better developer experience
- **Responsive design** that works on all devices
- **Performance optimization** with Next.js Image component
- **SEO best practices** with comprehensive metadata
- **Code organization** with centralized constants
- **Reusability** through modular component design

The project serves as an excellent learning resource for:

- Understanding Next.js App Router
- Learning React component patterns
- Practicing TypeScript in React
- Mastering Tailwind CSS responsive design
- Building production-ready landing pages

Whether you're a beginner learning modern web development or an experienced developer looking for a reference implementation, this project provides valuable insights into building scalable, maintainable web applications.

---

## Happy Coding! 🎉

Feel free to use this project repository and extend this project further!

If you have any questions or want to share your work, reach out via GitHub or my portfolio at [https://arnob-mahmud.vercel.app/](https://arnob-mahmud.vercel.app/).

**Enjoy building and learning!** 🚀

Thank you! 😊

---
