/**
 * Camp Component
 *
 * Displays featured camping destinations with community engagement indicators.
 * This component demonstrates:
 * - Component composition (CampSite sub-component)
 * - Dynamic background images via Tailwind classes
 * - Array mapping for rendering lists
 * - Responsive design patterns
 *
 * @component
 */

import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

// TypeScript interface for type-safe props
// Defines the structure of data passed to CampSite component
interface CampProps {
  backgroundImage: string; // Tailwind class name for background image
  title: string; // Camp location name
  subtitle: string; // Location details
  peopleJoined: string; // Community engagement text (e.g., "50+ Joined")
}

/**
 * CampSite Sub-Component
 *
 * Renders a single camping destination card with:
 * - Dynamic background image (via Tailwind class interpolation)
 * - Location information
 * - Community member avatars in overlapping style
 *
 * @param {CampProps} props - Destructured props for camp site data
 * @returns {JSX.Element} Camp site card component
 */
const CampSite = ({
  backgroundImage,
  title,
  subtitle,
  peopleJoined,
}: CampProps) => {
  return (
    <div
      // Template literal with dynamic className for background image
      // min-w-[1100px] ensures horizontal scroll on smaller screens
      className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}
    >
      {/* Flexbox layout with space-between for top and bottom content */}
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        {/* Top section: Map icon and location info */}
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-50 p-4">
            <Image
              src="/folded-map.svg"
              alt="map"
              width={28}
              height={28}
              unoptimized
            />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>

        {/* Bottom section: Community avatars and join count */}
        <div className="flexCenter gap-6">
          {/* Overlapping avatars using negative margin (-space-x-4) */}
          <span className="flex -space-x-4 overflow-hidden">
            {/* Array.map() to render multiple avatar images */}
            {/* Each person image from PEOPLE_URL constant */}
            {PEOPLE_URL.map((url) => (
              <Image
                className="inline-block h-10 w-10 rounded-full"
                src={url}
                key={url} // React key for list rendering optimization
                alt="person"
                width={52}
                height={52}
                unoptimized
              />
            ))}
          </span>
          <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
};

/**
 * Main Camp Component
 *
 * Container component that:
 * - Creates a horizontally scrollable gallery of camp sites
 * - Displays a call-to-action card with negative margin overlay
 * - Demonstrates responsive design with breakpoint-based styling
 */
const Camp = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      {/* Horizontal scrollable container for camp sites */}
      {/* hide-scrollbar: Custom CSS class to hide scrollbar while maintaining scroll functionality */}
      {/* overflow-x-auto: Enables horizontal scrolling on smaller screens */}
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        {/* Multiple CampSite components with different props */}
        {/* Each represents a different camping destination */}
        <CampSite
          backgroundImage="bg-bg-img-1"
          title="Putuk Truno Camp"
          subtitle="Prigen, Pasuruan"
          peopleJoined="50+ Joined"
        />
        <CampSite
          backgroundImage="bg-bg-img-2"
          title="Mountain View Camp"
          subtitle="Somewhere in the Wilderness"
          peopleJoined="50+ Joined"
        />
      </div>

      {/* Call-to-action card with negative margin overlay technique */}
      {/* lg:-mt-60: Negative margin pulls card up over the camp sites on large screens */}
      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Feeling Lost</strong> And Not Knowing The Way?
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            Starting from the anxiety of the climbers when visiting a new
            climbing location, the possibility of getting lost is very large.
            That's why we are here for those of you who want to start an
            adventure
          </p>
          {/* Decorative quote SVG positioned absolutely via CSS class */}
          <Image
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
};

export default Camp;
