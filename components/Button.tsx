/**
 * Button Component
 * 
 * A reusable button component with support for icons, variants, and full-width option.
 * This component demonstrates React component composition and prop-based styling.
 * 
 * @component
 * @example
 * <Button 
 *   type="button" 
 *   title="Download App" 
 *   icon="/apple.svg"
 *   variant="btn_green" 
 *   full 
 * />
 */

import Image from 'next/image'

// TypeScript interface defining the props structure for type safety
// The '?' makes icon and full optional props
type ButtonProps = {
  type: 'button' | 'submit'; // HTML button type - restricts to valid button types
  title: string; // Button text label
  icon?: string; // Optional icon path - shown before the title if provided
  variant: string; // CSS class variant for styling (e.g., 'btn_green', 'btn_white')
  full?: boolean; // Optional prop to make button full width
}

/**
 * Button Component Function
 * 
 * Uses destructuring to extract props from the ButtonProps object.
 * Conditional rendering for icon and dynamic className construction.
 */
const Button = ({ type, title, icon, variant, full }: ButtonProps) => {
  return (
    <button
    // Template literal for dynamic className construction
    // Combines base classes with variant and conditionally adds 'w-full' if full is true
    className={`flexCenter gap-3 rounded-full border ${variant} ${full && 'w-full'}`}
      type={type}
    >
      {/* Conditional rendering: only shows Image if icon prop is provided */}
      {/* Next.js Image component for optimized image loading */}
      {icon && <Image src={icon} alt={title} width={24} height={24} unoptimized />}
      {/* Label element styled to look like button text */}
      <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
    </button>
  )
}

export default Button