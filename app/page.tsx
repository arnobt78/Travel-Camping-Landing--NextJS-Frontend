/**
 * Home Page Component
 * 
 * Main page component that composes all section components.
 * This is the entry point for the Next.js App Router.
 * 
 * Component Composition Pattern:
 * - Each section is a separate component for maintainability
 * - Components are imported and composed in order
 * - React Fragment (<>) is used to avoid extra DOM wrapper
 * 
 * @component
 * @returns {JSX.Element} Complete home page with all sections
 */

import Camp from "@/components/Camp";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      {/* Hero section - first thing users see (above the fold) */}
      <Hero />
      {/* Camp destinations showcase */}
      <Camp />
      {/* Guide section explaining app features */}
      <Guide />
      {/* Features grid with detailed descriptions */}
      <Features />
      {/* Call-to-action for app download */}
      <GetApp />
    </>
  )
}
