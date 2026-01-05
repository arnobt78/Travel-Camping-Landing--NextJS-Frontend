/**
 * Guide Component
 * 
 * Section explaining the app's navigation and guidance features.
 * Features:
 * - Introduction text with decorative icon
 * - Large background image
 * - Overlay card with route information (absolute positioning)
 * 
 * Demonstrates:
 * - Absolute positioning for overlay elements
 * - Responsive positioning with breakpoint-based adjustments
 * - Flexbox for card internal layout
 * 
 * @component
 */

// ...existing code...
import React from 'react'
import Image from 'next/image'

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      {/* Introduction section */}
      <div className="padding-container max-container w-full pb-24">
        {/* Decorative camp icon */}
        <Image src="/camp.svg" alt="camp" width={50} height={50} style={{ width: 'auto', height: 'auto' }} unoptimized />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          We are here for you
        </p>
        {/* Responsive text layout: wraps on smaller screens, side-by-side on larger */}
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">Guide You to Easy Path</h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">Only with the hilink application you will no longer get lost and get lost again, because we already support offline maps when there is no internet connection in the field. Invite your friends, relatives and friends to have fun in the wilderness through the valley and reach the top of the mountain</p>
        </div>
      </div>

      {/* Image section with overlay card */}
      <div className="flexCenter max-container relative w-full">
        {/* Background image - full width with object-cover for responsive scaling */}
        <Image 
          src="/boat.png"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
          style={{ width: 'auto', height: 'auto' }}
          unoptimized
        />

        {/* Overlay card with route information */}
        {/* absolute: Positions card over the image */}
        {/* md:left-[5%] lg:top-20: Responsive positioning based on screen size */}
        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          {/* Distance meter icon */}
          <Image 
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
            style={{ width: 'auto', height: 'auto' }}
            unoptimized
          />
          {/* Route information layout */}
          <div className="flexBetween flex-col">
            {/* Destination section */}
            <div className='flex w-full flex-col'>
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Destination</p>
                <p className="bold-16 text-green-50">48 min</p>
              </div>
              <p className="bold-20 mt-2">Aguas Calientes</p>
            </div>

            {/* Start point section */}
            <div className='flex w-full flex-col'>
              <p className="regular-16 text-gray-20">Start track</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">Wonorejo Pasuruan</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide