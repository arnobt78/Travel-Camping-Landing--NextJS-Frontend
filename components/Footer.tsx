/**
 * Footer Component
 * 
 * Site footer with:
 * - Logo
 * - Navigation links organized in columns
 * - Contact information
 * - Social media icons
 * - Copyright notice
 * 
 * Demonstrates:
 * - Nested array mapping
 * - Component composition (FooterColumn)
 * - Responsive flexbox layouts
 * - Next.js Link component for client-side navigation
 * 
 * @component
 */

import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants'
// ...existing code...
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="flexCenter mb-24">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        {/* Main footer content: logo and link columns */}
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          {/* Logo link - wraps Image in Next.js Link for navigation */}
          <Link href="/" className="mb-10">
            <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} style={{ width: 'auto', height: 'auto' }} unoptimized />
          </Link>

          {/* Footer links container - flex-wrap allows wrapping on smaller screens */}
          <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
            {/* Map over FOOTER_LINKS array to create link columns */}
            {FOOTER_LINKS.map((columns, idx) => (
              <FooterColumn title={columns.title} key={columns.title + '-' + idx}>
                {/* Nested map: render links within each column */}
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  {columns.links.map((link, linkIdx) => (
                    <Link href="/" key={link + '-' + linkIdx}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            {/* Contact information column */}
            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title} key="footer-contact-info">
                {/* Map over contact info links */}
                {FOOTER_CONTACT_INFO.links.map((link, idx) => (
                  <Link
                    href="/"
                    key={link.label + '-' + idx}
                    className="flex gap-4 md:flex-col lg:flex-row"
                  >
                    <p className="whitespace-nowrap">
                      {link.label}:
                    </p>
                    <p className="medium-14 whitespace-nowrap text-blue-70">
                      {link.value}
                    </p>
                  </Link>
                ))}
              </FooterColumn>
            </div>

            {/* Social media icons column */}
            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title} key="footer-socials">
                <ul className="regular-14 flex gap-4 text-gray-30">
                  {/* Map over social media icon paths */}
                  {SOCIALS.links.map((link, idx) => (
                    <Link href="/" key={link + '-' + idx}
                    >
                      <Image src={link} alt="logo" width={24} height={24} style={{ width: 'auto', height: 'auto' }} unoptimized />
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        {/* Footer divider and copyright */}
        <div className="border bg-gray-20" />
        <p className="regular-14 w-full text-center text-gray-30">2025 Hilink | All rights reserved</p>
      </div>
    </footer>
  )
}

/**
 * FooterColumn Type Definition
 * 
 * TypeScript interface for footer column component props.
 * Uses React.ReactNode for flexible children content.
 */
type FooterColumnProps = {
  title: string; // Column heading
  children: React.ReactNode; // Flexible content (can be any valid React element)
}

/**
 * FooterColumn Sub-Component
 * 
 * Reusable component for footer link columns.
 * Demonstrates the children prop pattern for component composition.
 * 
 * @param {FooterColumnProps} props - Column title and children content
 * @returns {JSX.Element} Footer column wrapper
 */
const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {/* children prop allows any content to be passed in */}
      {children}
    </div>
  )
}

export default Footer