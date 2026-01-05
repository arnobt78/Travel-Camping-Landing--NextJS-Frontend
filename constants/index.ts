/**
 * Constants File
 * 
 * Centralized data storage for the application.
 * This file follows the "Single Source of Truth" principle.
 * 
 * Benefits:
 * - Easy to update content without touching component code
 * - Consistent data structure across the app
 * - Better maintainability and scalability
 * - Can be easily replaced with API calls later
 * 
 * @fileoverview Application-wide constants and data
 */

// NAVIGATION LINKS
// Array of navigation items used in the Navbar component
// Each object contains href (route), key (unique identifier), and label (display text)
export const NAV_LINKS = [
  { href: '/', key: 'home', label: 'Home' },
  { href: '/', key: 'how_hilink_work', label: 'How Hilink Work?' },
  { href: '/', key: 'services', label: 'Services' },
  { href: '/', key: 'pricing ', label: 'Pricing ' },
  { href: '/', key: 'contact_us', label: 'Contact Us' },
];

// CAMP SECTION - PEOPLE AVATARS
// Array of image paths for community member avatars
// Used in Camp component to show "people joined" section
export const PEOPLE_URL = [
  '/person-1.png',
  '/person-2.png',
  '/person-3.png',
  '/person-4.png',
];

// FEATURES SECTION
// Array of feature objects displayed in the Features component
// Each feature has: title, icon path, variant (for styling), and description
export const FEATURES = [
  {
    title: 'Real maps can be offline',
    icon: '/map.svg',
    variant: 'green', // Color variant for styling
    description:
      'We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location',
  },
  {
    title: 'Set an adventure schedule',
    icon: '/calendar.svg',
    variant: 'green',
    description:
      "Schedule an adventure with friends. On holidays, there are many interesting offers from Hilink. That way, there's no more discussion",
  },
  {
    title: 'Technology using augment reality',
    icon: '/tech.svg',
    variant: 'green',
    description:
      'Technology uses augmented reality as a guide to your hiking trail in the forest to the top of the mountain. Already supported by the latest technology without an internet connection',
  },
  {
    title: 'Many new locations every month',
    icon: '/location.svg',
    variant: 'orange', // Different variant for visual distinction
    description:
      'Lots of new locations every month, because we have a worldwide community of climbers who share their best experiences with climbing',
  },
];

// FOOTER SECTION - LINK COLUMNS
// Array of footer link groups
// Each group has a title and array of link labels
// Used in Footer component to create organized link columns
export const FOOTER_LINKS = [
  {
    title: 'Learn More',
    links: [
      'About Hilink',
      'Press Releases',
      'Environment',
      'Jobs',
      'Privacy Policy',
      'Contact Us',
    ],
  },
  {
    title: 'Our Community',
    links: ['Climbing xixixi', 'Hiking hilink', 'Hilink kinthill'],
  },
];

// FOOTER CONTACT INFORMATION
// Object containing contact details
// Structure allows for multiple contact methods
export const FOOTER_CONTACT_INFO = {
  title: 'Contact Us',
  links: [
    { label: 'Admin Officer', value: '123-456-7890' },
    { label: 'Email Officer', value: 'arnob_t78@yahoo.com' },
  ],
};

// SOCIAL MEDIA LINKS
// Object containing social media icon paths
// Icons are displayed in the Footer component
export const SOCIALS = {
  title: 'Social',
  links: [
    '/facebook.svg',
    '/instagram.svg',
    '/twitter.svg',
    '/youtube.svg',
    '/wordpress.svg',
  ],
};
