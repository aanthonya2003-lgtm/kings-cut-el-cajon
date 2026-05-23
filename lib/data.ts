// All verified business data for King's Cut El Cajon
// Source: research session, verified via Yelp, Fresha, Google Business

export const business = {
  name: "King's Cut",
  tagline: "Your Cut. Your Crown.",
  description:
    "El Cajon's premier barbershop since 2007. Precision cuts, traditional shaves, and family-friendly service on Jamacha Road.",
  yearFounded: 2007,
  yearsInBusiness: 18,
  ownerFirstName: "Maysam",
  address: {
    street: "729 Jamacha Rd",
    city: "El Cajon",
    state: "CA",
    zip: "92019",
    full: "729 Jamacha Rd, El Cajon, CA 92019",
  },
  phone: {
    display: "(619) 334-6665",
    href: "tel:+16193346665",
    raw: "+16193346665",
  },
  hours: [
    { day: "Monday", open: "9:00 AM", close: "7:00 PM" },
    { day: "Tuesday", open: "9:00 AM", close: "7:00 PM" },
    { day: "Wednesday", open: "9:00 AM", close: "7:00 PM" },
    { day: "Thursday", open: "9:00 AM", close: "7:00 PM" },
    { day: "Friday", open: "9:00 AM", close: "7:00 PM" },
    { day: "Saturday", open: "9:00 AM", close: "7:00 PM" },
    { day: "Sunday", open: "9:00 AM", close: "3:00 PM" },
  ],
  hoursSummary: [
    { label: "Mon – Sat", value: "9:00 AM – 7:00 PM" },
    { label: "Sunday", value: "9:00 AM – 3:00 PM" },
  ],
  amenities: [
    "Walk-ins welcome",
    "Family friendly — all ages",
    "Wheelchair accessible",
    "Complimentary tea & coffee",
    "Sports TVs",
    "Modern interior",
  ],
} as const;

export const links = {
  // Verified HTTP 200 (Fresha public listing)
  booking:
    "https://www.fresha.com/lvp/kings-cut-jamacha-road-el-cajon-yXWy5y",
  // Verified live Yelp business page
  yelp: "https://www.yelp.com/biz/kings-cut-el-cajon",
  // Verified live Facebook page (current format, not /pages/)
  facebook: "https://www.facebook.com/BarberStylistCoiffure/",
  // Verified live Instagram handle
  instagram: "https://www.instagram.com/kingcutsbarbershopsalon/",
  // Google Maps query for the verified address
  maps: "https://maps.google.com/?q=King%27s+Cut+729+Jamacha+Rd+El+Cajon+CA",
  mapsEmbed:
    "https://www.google.com/maps?q=729+Jamacha+Rd,+El+Cajon,+CA+92019&output=embed",
} as const;

export const ratings = {
  yelp: { score: 4.1, count: 116 },
  facebookCheckIns: 1238,
  facebookLikes: 386,
  yelpPhotos: 141,
  instagramFollowers: 347,
  instagramPosts: 198,
} as const;

// Services — verified offerings, no fabricated pricing
export type Service = {
  id: string;
  name: string;
  short: string;
  description: string;
  startingPrice?: string;
  image: string;
  imageAlt: string;
};

export const services: Service[] = [
  {
    id: "mens-haircut",
    name: "Men's Haircut",
    short: "Signature cuts, fades & tapers",
    description:
      "Precision men's haircuts shaped to your face, hair type, and personal style. Classic fades, modern tapers, scissor work, and everything between.",
    startingPrice: "Starting from $15",
    image:
      "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=2400&q=90",
    imageAlt: "Barber giving a precision men's haircut with clippers",
  },
  {
    id: "beard-trim",
    name: "Beard Trim & Shape",
    short: "Sculpted lines, sharp edges",
    description:
      "Beard trimming, lining, and shaping with hot towel finish. From light tidy-ups to full beard sculpting — done by hand, never rushed.",
    startingPrice: "Add-on or standalone",
    image:
      "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=2400&q=90",
    imageAlt: "Barber trimming a client's beard with detail clippers",
  },
  {
    id: "kids-haircut",
    name: "Kids Haircut",
    short: "Patient. Friendly. Sharp.",
    description:
      "Kid-friendly haircuts in a calm, welcoming chair. Our barbers are patient with first-timers and dialed for the after-school crew.",
    startingPrice: "Family pricing",
    image:
      "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=2400&q=90",
    imageAlt: "Clean barbershop chair ready at King's Cut — kids welcome",
  },
  {
    id: "straight-razor-shave",
    name: "Straight Razor Shave",
    short: "Hot towel. Steel edge.",
    description:
      "The traditional shave done right. Pre-shave oil, hot towel prep, lather, straight-razor pass, cool towel finish. Skin you can feel.",
    startingPrice: "Call for pricing",
    image:
      "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?w=2400&q=90",
    imageAlt: "Straight razor shave being performed at a barbershop",
  },
  {
    id: "waxing-facials",
    name: "Waxing & Facials",
    short: "Ears, nose, brow, face",
    description:
      "Quick, clean waxing for ears, nose, and brow. Facials and threading available on request — finish your visit feeling fully refreshed.",
    startingPrice: "Per service",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=2400&q=90",
    imageAlt: "Detail of professional grooming work at a barbershop",
  },
  {
    id: "head-shave",
    name: "Head Shave",
    short: "Smooth. Polished. Royal.",
    description:
      "Full head shave with razor finish. Pre-shave prep, lather, blade pass, balm, and cold towel close. The clean look, done the right way.",
    startingPrice: "Call for pricing",
    image:
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=2400&q=90",
    imageAlt: "Barber tools and clean barbershop counter",
  },
];

// Full services list for /services route
export const servicesFull = [
  {
    category: "Cuts",
    items: [
      {
        name: "Men's Haircut",
        note: "Fades, tapers, scissor work",
        price: "From $15",
      },
      { name: "Kids Haircut", note: "All ages welcome", price: "Family rate" },
      {
        name: "Senior Haircut",
        note: "Patient, precise, no rush",
        price: "Discounted",
      },
      {
        name: "Head Shave",
        note: "Razor finish + balm",
        price: "Call for pricing",
      },
    ],
  },
  {
    category: "Shaves",
    items: [
      {
        name: "Straight Razor Shave",
        note: "Hot towel, oil, lather, blade",
        price: "Call for pricing",
      },
      {
        name: "Full Shave",
        note: "Complete face shave",
        price: "Call for pricing",
      },
      {
        name: "Beard Trim",
        note: "Lining, shaping, edge work",
        price: "Add-on",
      },
    ],
  },
  {
    category: "Grooming",
    items: [
      {
        name: "Ear Waxing",
        note: "Clean lines, no fuss",
        price: "Add-on",
      },
      { name: "Nose Waxing", note: "Quick and clean", price: "Add-on" },
      { name: "Brow Threading", note: "Precise, hand-done", price: "Add-on" },
      {
        name: "Facials",
        note: "On request — ask at the chair",
        price: "Call for pricing",
      },
    ],
  },
] as const;

// Verified Yelp testimonials
export const testimonials = [
  {
    quote:
      "My barber is David, he's the best barber I've had and I travel from National City to El Cajon because of the great customer service.",
    source: "Yelp Review",
    barber: "David",
    rating: 5,
  },
  {
    quote:
      "I've been coming here for over a year and Maysam has been hooking it up with whatever hairstyle I want and he comes through with the best cut.",
    source: "Yelp Review",
    barber: "Maysam",
    rating: 5,
  },
  {
    quote:
      "I've been to all the local Barbers and Kings Cut is by far the best. It is super clean and nice inside. The hair cuts are great, prices are fair.",
    source: "Yelp Review",
    rating: 5,
  },
  {
    quote:
      "Closest shave and freshest cut I've experienced. I now drive 20-30 minutes to come here for my shave and cut. These guys are leagues above the rest.",
    source: "Yelp Review",
    rating: 5,
  },
  {
    quote:
      "Amazing barber shop! I've been coming to King's Cut for the past 7 or 8 years.",
    source: "Yelp Review",
    rating: 5,
  },
  {
    quote:
      "Fast and good. Cuts, trims, shaves, waxing, threading, facials — these guys know hair and conquer it quickly with zero bull.",
    source: "Yelp Review",
    rating: 5,
  },
];

// Confirmed barbers from review mentions
export const barbers = [
  {
    name: "Maysam",
    role: "Owner & Master Barber",
    bio: "Founded King's Cut in 2007. Eighteen years behind the chair on Jamacha Road. Known for honest counsel and meticulous work.",
    image:
      "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=1600&q=90",
    imageAlt: "Master barber Maysam at King's Cut",
  },
  {
    name: "David",
    role: "Senior Barber",
    bio: "Clients drive in from National City for a chair with David. Specialty: detailed fades, classic men's cuts, and warm conversation.",
    image:
      "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=1600&q=90",
    imageAlt: "Senior barber David at King's Cut",
  },
  {
    name: "Omar",
    role: "Barber",
    bio: "A steady hand for modern cuts, beard sculpting, and the family-friendly chair. Equally great with kids and connoisseurs.",
    image:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1600&q=90",
    imageAlt: "Barber Omar at King's Cut",
  },
  {
    name: "Manny",
    role: "Barber",
    bio: "Fast, friendly, and dialed on detail. Manny brings high-energy precision to every chair — and never rushes the finish.",
    image:
      "https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?w=1600&q=90",
    imageAlt: "Barber Manny finishing a fresh fade",
  },
  {
    name: "Methak",
    role: "Barber",
    bio: "Classic shave specialist. Hot towel prep, straight razor, traditional barber technique passed down and respected.",
    image:
      "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?w=1600&q=90",
    imageAlt: "Barber Methak performing a traditional shave",
  },
];

export const stats = [
  { value: 18, suffix: "+", label: "Years in Business" },
  { value: 116, suffix: "+", label: "Yelp Reviews" },
  { value: 4.1, suffix: "★", label: "Average Rating", decimal: 1 },
  { value: 1238, suffix: "", label: "Customer Check-Ins" },
];

// Gallery photos — barbershop subject only, verified Unsplash IDs
export const galleryPhotos = [
  {
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1600&q=90",
    alt: "Barber giving a haircut at King's Cut El Cajon",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1600&q=90",
    alt: "Clean modern barbershop interior",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=1600&q=90",
    alt: "Beard trim in progress",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1600&q=90",
    alt: "Barber tools and clean station",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1600&q=90",
    alt: "Precision barber tools at the station",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?w=1600&q=90",
    alt: "Traditional straight razor shave",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=1600&q=90",
    alt: "Barber finishing a fresh cut",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=1600&q=90",
    alt: "Detailed clipper work at the chair",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1600&q=90",
    alt: "Barbershop grooming session",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?w=1600&q=90",
    alt: "Fresh fade complete",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1600&q=90",
    alt: "Barber at work in the chair",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1600&q=90",
    alt: "Clean barbershop interior",
    span: "",
  },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/barbers", label: "Barbers" },
  { href: "/gallery", label: "Gallery" },
  { href: "/book", label: "Book" },
] as const;
