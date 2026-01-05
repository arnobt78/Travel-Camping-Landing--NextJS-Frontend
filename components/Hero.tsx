/**
 * Hero Component
 * 
 * Main landing section (above-the-fold content).
 * Features:
 * - Hero title and description
 * - Star ratings display
 * - Call-to-action buttons
 * - Location information card
 * - Background map pattern
 * 
 * Demonstrates:
 * - Responsive layout (stacked on mobile, side-by-side on desktop)
 * - Array methods for rendering repeated elements
 * - Absolute positioning for decorative elements
 * - Component reusability (Button component)
 * 
 * @component
 */

// ...existing code...
import Button from './Button'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      {/* Background map pattern - defined in globals.css */}
      <div className="hero-map" />

      {/* Main content section - takes 50% width on xl screens */}
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        {/* Decorative camp icon - absolutely positioned outside container */}
        <Image 
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
          style={{ width: 'auto', height: 'auto' }}
          unoptimized
        />
        {/* Hero heading with responsive font sizes */}
        <h1 className="bold-52 lg:bold-88">Putuk Truno Camp Area</h1>
        {/* Hero description with max-width constraint on larger screens */}
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app
        </p>

        {/* Ratings section */}
        <div className="my-11 flex flex-wrap gap-5">
          {/* Star ratings: Array(5).fill(1) creates array of 5 elements */}
          {/* .map() renders each star as an Image component */}
          <div className="flex items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image 
                src="/star.svg"
                key={index} // React key for list items
                alt="star"
                width={24}
                height={24}
                style={{ width: 'auto', height: 'auto' }}
                unoptimized
              />
            ))}
          </div>

          {/* Review count text */}
          <p className="bold-16 lg:bold-20 text-blue-70">
            198k
            <span className="regular-16 lg:regular-20 ml-1">Excellent Reviews</span>
          </p>
        </div>

        {/* Call-to-action buttons */}
        {/* Stacks vertically on mobile, horizontally on sm+ screens */}
        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button 
            type="button" 
            title="Download App" 
            variant="btn_green" 
          />
          <Button 
            type="button" 
            title="How we work?" 
            icon="/play.svg"
            variant="btn_white_text" 
          />
        </div>
      </div>

      {/* Location information card - positioned on the right side */}
      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">

           {/* Location section */}
           <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Location</p>
              {/* Close icon - could be made interactive for closing the card */}
              <Image src="/close.svg" alt="close" width={24} height={24} style={{ width: 'auto', height: 'auto' }} unoptimized />
            </div>
            <p className="bold-20 text-white">Aguas Calientes</p>
          </div>

          {/* Distance and elevation information */}
          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Distance</p>
              <p className="bold-20 text-white">173.28 mi</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Elevation</p>
              <p className="bold-20 text-white">2.040 km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero