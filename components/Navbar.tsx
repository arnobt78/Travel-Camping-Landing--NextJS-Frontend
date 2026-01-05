/**
 * Navbar Component
 * 
 * Site navigation header with:
 * - Logo (links to home)
 * - Navigation links (hidden on mobile, visible on desktop)
 * - Login button (hidden on mobile, visible on desktop)
 * - Mobile menu icon (visible on mobile, hidden on desktop)
 * 
 * Demonstrates:
 * - Responsive visibility patterns (hidden/lg:flex)
 * - Next.js Link component for client-side navigation
 * - Array mapping for dynamic link generation
 * - Conditional rendering based on screen size
 * 
 * @component
 */

import { NAV_LINKS } from "@/constants"
// ...existing code...
import Link from "next/link"
import Button from "./Button"
import Image from "next/image"

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      {/* Logo - wrapped in Link for navigation to home page */}
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} style={{ width: 'auto', height: 'auto' }} unoptimized />
      </Link>

      {/* Desktop navigation links */}
      {/* hidden: Hidden on mobile, lg:flex: Visible on large screens and up */}
      <ul className="hidden h-full gap-12 lg:flex">
        {/* Map over NAV_LINKS constant to generate navigation items */}
        {NAV_LINKS.map((link) => (
          <Link 
            href={link.href} 
            key={link.key} 
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      {/* Login button - hidden on mobile, visible on desktop */}
      <div className="lg:flexCenter hidden">
        <Button 
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      {/* Mobile menu icon - visible on mobile, hidden on desktop */}
      {/* lg:hidden: Hidden on large screens and up */}
      <Image 
        src="/menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        style={{ width: 'auto', height: 'auto' }}
        unoptimized
      />
    </nav>
  )
}

export default Navbar