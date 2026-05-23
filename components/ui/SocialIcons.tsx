// Standardized, immediately recognizable social SVGs.
// Yelp uses the burst logomark (four asymmetric points) — never a star.

type IconProps = {
  className?: string;
  size?: number;
};

export function FacebookIcon({ className = "", size = 22 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.49-3.91 3.78-3.91 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.91h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
    </svg>
  );
}

export function InstagramIcon({ className = "", size = 22 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

/**
 * Yelp burst logo — official mark approximation.
 * Four elongated asymmetric points + curved bottom band — NOT a generic star.
 */
export function YelpIcon({ className = "", size = 22 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      {/* Top-left elongated burst point */}
      <path d="M9.2 2.4c.7-.4 1.6.1 1.7.9l.5 6.4c.1.8-.8 1.4-1.5 1L4.6 7.6c-.6-.4-.7-1.2-.2-1.7L9.2 2.4Z" />
      {/* Top-right elongated burst point */}
      <path d="M19.2 7c.5.6.3 1.5-.4 1.8l-5 2.3c-.7.3-1.5-.3-1.4-1.1L13 3.7c.1-.8 1-1.2 1.6-.7L19.2 7Z" />
      {/* Right-middle burst point */}
      <path d="M20.7 13.4c.3.7-.2 1.5-1 1.6l-5.2.5c-.8.1-1.3-.8-.9-1.5l2.7-4.2c.4-.6 1.3-.7 1.7-.1l2.7 3.7Z" />
      {/* Bottom curved burst (mouth) */}
      <path d="M15.3 16.4c.7-.1 1.4.5 1.3 1.3l-.5 4.1c-.1.8-1 1.3-1.6.8l-4.3-3.6c-.6-.5-.4-1.5.3-1.7l4.8-.9Z" />
      {/* Left long burst point (signature elongated tail) */}
      <path d="M10.1 12.3c.6.2.9.9.7 1.5l-2.9 8c-.3.7-1.3.9-1.8.2l-3.4-4.6c-.5-.7-.3-1.7.5-2l6.9-3.1Z" />
    </svg>
  );
}

export function PhoneIcon({ className = "", size = 18 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

export function ArrowIcon({ className = "", size = 18 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="13 6 19 12 13 18" />
    </svg>
  );
}

export function MapPinIcon({ className = "", size = 18 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function ClockIcon({ className = "", size = 18 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export function StarIcon({ className = "", size = 16 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2l2.96 6.91L22 9.74l-5.46 4.73L18.18 22 12 18.27 5.82 22l1.64-7.53L2 9.74l7.04-.83L12 2z" />
    </svg>
  );
}
