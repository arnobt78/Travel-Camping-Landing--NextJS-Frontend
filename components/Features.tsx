/**
 * Features Component
 * 
 * Showcases the app's key features in a two-column grid layout.
 * Demonstrates:
 * - Data-driven rendering from constants
 * - CSS Grid for responsive layouts
 * - Component composition with FeatureItem sub-component
 * - Absolute positioning for decorative elements
 * 
 * @component
 */

import { FEATURES } from '@/constants'
// ...existing code...
import React from 'react'
import Image from 'next/image'

const Features = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="max-container padding-container relative w-full flex justify-end">
        {/* Phone mockup image - positioned on the left side */}
        {/* lg:min-h-[900px]: Ensures consistent height on large screens */}
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src="/phone.png"
            alt="phone"
            width={440}
            height={1000}
            className="feature-phone"
            style={{ width: 'auto', height: 'auto' }}
            unoptimized
          />
        </div>

        {/* Features content section - takes 60% width on large screens */}
        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          {/* Section header with decorative icon */}
          <div className='relative'>
            {/* Absolutely positioned decorative camp icon */}
            <Image
              src="/camp.svg"
              alt="camp"
              width={50}
              height={50}
              className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]"
              style={{ width: 'auto', height: 'auto' }}
              unoptimized
            />
            <h2 className="bold-40 lg:bold-64">Our Features</h2>
          </div>
          {/* CSS Grid layout: 1 column on mobile, 2 columns on medium+ screens */}
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
            {/* Map over FEATURES array from constants to render each feature */}
            {/* key prop is required for React list rendering */}
            {FEATURES.map((feature) => (
              <FeatureItem 
                key={feature.title}
                title={feature.title} 
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

/**
 * FeatureItem Type Definition
 * 
 * TypeScript interface for individual feature item props.
 * Ensures type safety when passing feature data.
 */
type FeatureItem = {
  title: string; // Feature name
  icon: string; // Path to feature icon SVG
  description: string; // Feature description text
}

/**
 * FeatureItem Sub-Component
 * 
 * Renders a single feature card with:
 * - Icon in a circular background
 * - Title heading
 * - Description text
 * 
 * @param {FeatureItem} props - Destructured feature data
 * @returns {JSX.Element} Feature card list item
 */
const FeatureItem = ({ title, icon, description }: FeatureItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      {/* Icon container with circular background */}
      <div className="rounded-full p-4 lg:p-7 bg-green-50">
        <Image src={icon} alt="map" width={28} height={28} style={{ width: 'auto', height: 'auto' }} unoptimized />
      </div>
      {/* Feature title with responsive font sizes */}
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">
        {title}
      </h2>
      {/* Feature description with responsive styling */}
      {/* bg-white/80: Semi-transparent white background on mobile */}
      <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  )
}

export default Features