/**
 * GetApp Component
 * 
 * Call-to-action section promoting mobile app downloads.
 * Features:
 * - App store download buttons
 * - Phone mockup image
 * - Responsive layout (stacked on mobile, side-by-side on desktop)
 * 
 * Demonstrates:
 * - Reusable Button component usage
 * - Flexbox layout with responsive direction changes
 * - z-index layering for proper stacking
 * 
 * @component
 */

import React from 'react'
import Button from './Button'
import Image from 'next/image'
// ...existing code...

const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      {/* get-app: Custom CSS class defined in globals.css */}
      <div className="get-app">
        {/* Content section with z-20 to ensure it's above background */}
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">Get for free now!</h2>
          <p className="regular-16 text-gray-10">Available on iOS and Android</p>
          {/* Button container: stacks vertically on mobile, horizontally on xl screens */}
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            {/* App Store download button */}
            <Button 
              type="button"
              title="App Store"
              icon="/apple.svg"
              variant="btn_white"
              full // Makes button full width
            />
            {/* Play Store download button */}
            <Button 
              type="button"
              title="Play Store"
              icon="/android.svg"
              variant="btn_dark_green_outline"
              full
            />
          </div>
        </div>

        {/* Phone mockup image - positioned on the right side */}
        <div className="flex flex-1 items-center justify-end">
          <Image src="/phones.png" alt="phones" width={550} height={870} style={{ width: 'auto', height: 'auto' }} unoptimized />
        </div>
      </div>
    </section>
  )
}

export default GetApp