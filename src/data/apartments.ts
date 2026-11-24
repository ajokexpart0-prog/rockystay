export interface ApartmentPhoto {
  src: string;
  alt: string;
  category: 'bedroom' | 'exterior' | 'interior' | 'pool';
}

export interface Apartment {
  id: string;
  unitNumber: number;
  name: string;
  bedrooms: number;
  location: string;
  pricePerNight: number;
  maxGuests: number;
  cleaningFee: number;
  cautionDeposit: number;
  hasPool: boolean;
  amenities: string[];
  description: string;
  photos: ApartmentPhoto[];
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  text: string;
  context: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const SITE_CONFIG = {
  brandName: 'RockyStay Suites',
  tagline: 'Your home away from home in Ilorin.',
  phoneDisplay: '09161959398',
  phoneHref: 'tel:+2349161959398',
  whatsappNumber: '2349161959398',
  whatsappBaseUrl: 'https://wa.me/2349161959398',
  email: 'ajokexpart0@gmail.com',
  location: 'Tanke, Ilorin, Kwara State, Nigeria',
  minStayNights: 2,
  serviceChargeRate: 0.05,
};

export const COMMON_AMENITIES = [
  'Power backup',
  'Water supply',
  '24/7 security',
  'Fast Wi-Fi',
  'Parking',
  'Airport or bus pickup',
  'Cleaning service',
  'Equipped kitchen',
  'Air conditioning',
];

// Segmented media library combining the Tanke property photographs and sunlit Blue-White-Golden interior scenes
export const PHOTO_ASSETS = {
  // Bedrooms
  bedroomWarmLed: {
    src: '/assets/aistudio/5f74a805461346b7561c9b3c3b59e039_d33a0d59.jpg',
    alt: 'Master bedroom with sculpted brown upholstered headboard, warm recessed LED ceiling strips, split AC, and patterned rug',
    category: 'bedroom' as const,
  },
  bedroomYellowSlat: {
    src: '/assets/aistudio/3ae806adabba1d1a50d320c3e83672f0_b8c9ff92.jpg',
    alt: 'Modern bedroom with crisp white bedding, yellow accent pillows, wood-slat accent wall, and cushioned bed bench',
    category: 'bedroom' as const,
  },
  bedroomAllWhite: {
    src: '/assets/aistudio/5ac1039bd03b53c80eba8ee1020a53d3_6b021ef3.jpg',
    alt: 'All-white luxury suite featuring a tall tufted headboard, plush seating area, glossy tiled floor, and warm ceiling lights',
    category: 'bedroom' as const,
  },

  // Exteriors
  exteriorPeachBlock: {
    src: '/assets/aistudio/236578fe6b1db2649ab47b02688986b3_05964c9a.jpg',
    alt: 'Peach three-storey apartment building with natural stone cladding, gated balconies, and paved parking area',
    category: 'exterior' as const,
  },
  exteriorYellowDuplex: {
    src: '/assets/aistudio/a96f91c7fa7581c12bb9cc1fa4836865_edebcd0d.jpg',
    alt: 'Gated contemporary duplex residence at RockyStay Suites in Tanke with glass-railed balconies and striped paved driveway',
    category: 'exterior' as const,
  },
  exteriorGreyAc: {
    src: '/assets/aistudio/bb3092e02bd0151d7119ed1e0e8a8e94_2e9e4836.jpg',
    alt: 'Grey apartment building elevation with multiple split air conditioning units and clean paved perimeter walkway',
    category: 'exterior' as const,
  },

  // Interiors
  interiorBlueGoldLiving: {
    src: '/src/assets/images/suite_living_blue_gold_1795547023772.jpg',
    alt: 'Sunlit white living lounge with royal blue velvet sofa, golden accent cushions, brass chandelier, and marble floor',
    category: 'interior' as const,
  },
  interiorDiningKitchen: {
    src: '/src/assets/images/suite_dining_kitchen_1795547023771.jpg',
    alt: 'Bright white open kitchen and dining area with royal blue chairs, golden pendant lights, and quartz island',
    category: 'interior' as const,
  },
  interiorTerraceLounge: {
    src: '/src/assets/images/suite_terrace_lounge_1795547023642.jpg',
    alt: 'Sunlit private balcony terrace overlooking tropical palms with crisp white walls and blue-and-gold seating',
    category: 'interior' as const,
  },
  interiorGoldLobby: {
    src: '/assets/aistudio/download__1__594048eb.png',
    alt: 'Luxury gold feature-wall lobby with sculpted botanical leaf artwork, warm curved LED lighting, and marble floor',
    category: 'interior' as const,
  },
  interiorCarpetHall: {
    src: '/assets/aistudio/5841666be7be79dcefdcffa23b24b2ff_ab95744b.jpg',
    alt: 'Quiet carpeted apartment hallway with warm wall lighting and secure room entry doors',
    category: 'interior' as const,
  },
  interiorBeigeHall: {
    src: '/assets/aistudio/d1f6ea8e26c6ccd1f3030812ba815412_cdfaa27d.jpg',
    alt: 'Warm cream and timber-trimmed residential corridor with soft architectural wall sconces',
    category: 'interior' as const,
  },
  interiorLivingCozy: {
    src: '/assets/aistudio/c86652722abc23193b16f99b66f5cbc8_be224455.jpg',
    alt: 'Homely living room with comfortable cream-and-charcoal sofa, smart TV entertainment console, and plush area rug',
    category: 'interior' as const,
  },
  interiorLivingTufted: {
    src: '/assets/aistudio/86bc943a0ee50cc5d09366a45b01f44f_d5346580.jpg',
    alt: 'Modern apartment lounge with grey tufted Chesterfield sofas, marble floor, and recessed ambient ceiling lighting',
    category: 'interior' as const,
  },
  interiorLivingPalm: {
    src: '/assets/aistudio/51f5732889aba0c867cb07567fca49ca_09392c51.jpg',
    alt: 'Bright double-level residence lounge with grey fabric sofas, indoor palm plant, coffee tables, and marble staircase',
    category: 'interior' as const,
  },
  interiorKitchenModern: {
    src: '/assets/aistudio/76082dc24256ee19cdb1beb474160f80_76959ff3.jpg',
    alt: 'Equipped modern kitchen with built-in gas hob, microwave oven, cookware, and natural daylight window',
    category: 'interior' as const,
  },
  interiorKitchenCooker: {
    src: '/assets/aistudio/a3b20612f65fc08dc24b233c312c6b1f_78cd0611.jpg',
    alt: 'Clean equipped kitchen featuring a stainless four-burner gas cooker, oven, and mosaic tile backsplash',
    category: 'interior' as const,
  },
  interiorBathroom: {
    src: '/assets/aistudio/d9bd853d7f0593d917c17c50148925f3_32ac5edd.jpg',
    alt: 'Spotless modern bathroom with grey porcelain wall tiles, frameless glass walk-in rain shower, and fresh white towels',
    category: 'interior' as const,
  },

  // Pools (Reserved exclusively for Apartments 5 & 6 and the Pool Gallery)
  poolLadder: {
    src: '/assets/aistudio/ac186b0a55199e87383392c536ec32e5_509505f2.jpg',
    alt: 'Sunlit outdoor swimming pool with stainless steel entry ladder and private walled courtyard',
    category: 'pool' as const,
  },
  poolOval: {
    src: '/assets/aistudio/f993041cdaeccd69d8dfcbb481deec29_a6758303.jpg',
    alt: 'Private oval swimming pool surrounded by warm interlocking pavers, lawn, and patio lounge chairs',
    category: 'pool' as const,
  },
  poolSpaDeck: {
    src: '/assets/aistudio/12a60eb11d77a809839a1b82b97672ba_50fe8fff.jpg',
    alt: 'Spacious rectangular villa swimming pool with integrated hydro-spa section and sun loungers',
    category: 'pool' as const,
  },
  poolGuestsFun: {
    src: '/assets/aistudio/afd694ebc85bb83060ea2c723100b863_059879c7.jpg',
    alt: 'Guests enjoying an afternoon swim in the secure private pool at Tanke Pool Court',
    category: 'pool' as const,
  },
  poolDeckFriends: {
    src: '/assets/aistudio/57e121bb1f6cd57c6da61595da371753_fdf0e967.jpg',
    alt: 'Group of friends relaxing on the stone poolside terrace beside crystal-clear pool water',
    category: 'pool' as const,
  },
};

export const POOL_GALLERY: ApartmentPhoto[] = [
  PHOTO_ASSETS.poolSpaDeck,
  PHOTO_ASSETS.poolLadder,
  PHOTO_ASSETS.poolOval,
  PHOTO_ASSETS.poolGuestsFun,
  PHOTO_ASSETS.poolDeckFriends,
];

export const RESIDENCE_SHOWCASE: ApartmentPhoto[] = [
  PHOTO_ASSETS.exteriorYellowDuplex,
  PHOTO_ASSETS.interiorBlueGoldLiving,
  PHOTO_ASSETS.interiorDiningKitchen,
  PHOTO_ASSETS.interiorTerraceLounge,
  PHOTO_ASSETS.interiorGoldLobby,
  PHOTO_ASSETS.interiorBathroom,
];

/**
 * Editable master apartment catalogue.
 * All six RockyStay Suites units live in this single object for straightforward updates.
 */
export const APARTMENTS: Record<string, Apartment> = {
  'cozy-one-bedroom-retreat': {
    id: 'cozy-one-bedroom-retreat',
    unitNumber: 1,
    name: 'Cozy One-Bedroom Retreat',
    bedrooms: 1,
    location: 'Tanke Main Road',
    pricePerNight: 50000,
    maxGuests: 2,
    cleaningFee: 10000,
    cautionDeposit: 30000,
    hasPool: false,
    amenities: [...COMMON_AMENITIES],
    description:
      'Tucked inside our stone-clad Tanke Main Road block, this intimate one-bedroom apartment welcomes solo professionals and couples with a plush brown-headboard suite lit by warm recessed LED strips, a quiet carpeted corridor, a cozy TV lounge, and an equipped kitchen for effortless home-cooked meals.',
    photos: [
      PHOTO_ASSETS.bedroomWarmLed,
      PHOTO_ASSETS.exteriorPeachBlock,
      PHOTO_ASSETS.interiorCarpetHall,
      PHOTO_ASSETS.interiorLivingCozy,
      PHOTO_ASSETS.interiorKitchenCooker,
      PHOTO_ASSETS.interiorBathroom,
    ],
  },

  'comfort-two-bedroom-suite': {
    id: 'comfort-two-bedroom-suite',
    unitNumber: 2,
    name: 'Comfort Two-Bedroom Suite',
    bedrooms: 2,
    location: 'Tanke Main Road',
    pricePerNight: 100000,
    maxGuests: 4,
    cleaningFee: 15000,
    cautionDeposit: 30000,
    hasPool: false,
    amenities: [...COMMON_AMENITIES],
    description:
      'Designed for colleagues, small families, and longer stays along Tanke Main Road, this bright two-bedroom suite features wood-slat accent walls with warm yellow pillows, multi-zone split air conditioning, an airy sunlit lounge, a well-stocked modern kitchen, and a walk-in glass rain shower.',
    photos: [
      PHOTO_ASSETS.bedroomYellowSlat,
      PHOTO_ASSETS.exteriorGreyAc,
      PHOTO_ASSETS.interiorBeigeHall,
      PHOTO_ASSETS.interiorBlueGoldLiving,
      PHOTO_ASSETS.interiorKitchenModern,
      PHOTO_ASSETS.interiorBathroom,
    ],
  },

  'executive-three-bedroom-apartment': {
    id: 'executive-three-bedroom-apartment',
    unitNumber: 3,
    name: 'Executive Three-Bedroom Apartment',
    bedrooms: 3,
    location: 'Tanke Garden Close',
    pricePerNight: 150000,
    maxGuests: 6,
    cleaningFee: 20000,
    cautionDeposit: 50000,
    hasPool: false,
    amenities: [...COMMON_AMENITIES],
    description:
      'Located in serene Tanke Garden Close inside our three-storey stone-accented residence, this executive three-bedroom apartment greets guests with a sculpted gold feature-wall lobby, an all-white luxury master bedroom, a sunlit marble lounge and dining room, and dependable power and Wi-Fi.',
    photos: [
      PHOTO_ASSETS.bedroomAllWhite,
      PHOTO_ASSETS.exteriorPeachBlock,
      PHOTO_ASSETS.interiorGoldLobby,
      PHOTO_ASSETS.interiorBlueGoldLiving,
      PHOTO_ASSETS.interiorDiningKitchen,
      PHOTO_ASSETS.interiorBathroom,
    ],
  },

  'grand-four-bedroom-residence': {
    id: 'grand-four-bedroom-residence',
    unitNumber: 4,
    name: 'Grand Four-Bedroom Residence',
    bedrooms: 4,
    location: 'Tanke Garden Close',
    pricePerNight: 200000,
    maxGuests: 8,
    cleaningFee: 25000,
    cautionDeposit: 50000,
    hasPool: false,
    amenities: [...COMMON_AMENITIES],
    description:
      'Set within our gated yellow-and-white duplex compound with a wide paved driveway in Tanke Garden Close, this four-bedroom residence blends privacy and generous living space—complete with wood-slat bedrooms, a double-height staircase lounge, private balcony terrace, and secure parking.',
    photos: [
      PHOTO_ASSETS.bedroomYellowSlat,
      PHOTO_ASSETS.exteriorYellowDuplex,
      PHOTO_ASSETS.interiorLivingPalm,
      PHOTO_ASSETS.interiorTerraceLounge,
      PHOTO_ASSETS.interiorDiningKitchen,
      PHOTO_ASSETS.interiorBathroom,
    ],
  },

  'premier-five-bedroom-villa': {
    id: 'premier-five-bedroom-villa',
    unitNumber: 5,
    name: 'Premier Five-Bedroom Villa',
    bedrooms: 5,
    location: 'Tanke Pool Court',
    pricePerNight: 300000,
    maxGuests: 10,
    cleaningFee: 35000,
    cautionDeposit: 100000,
    hasPool: true,
    amenities: [...COMMON_AMENITIES, 'Swimming pool'],
    description:
      'Ideal for visiting families, executive teams, and milestone gatherings at Tanke Pool Court, this five-bedroom duplex villa pairs warm LED-lit bedrooms, a gold feature-wall foyer, a bright dining lounge, and direct access to a crystal-clear walled swimming pool and patio deck.',
    photos: [
      PHOTO_ASSETS.bedroomWarmLed,
      PHOTO_ASSETS.exteriorYellowDuplex,
      PHOTO_ASSETS.interiorGoldLobby,
      PHOTO_ASSETS.poolLadder,
      PHOTO_ASSETS.poolOval,
      PHOTO_ASSETS.interiorTerraceLounge,
    ],
  },

  'royal-six-bedroom-villa': {
    id: 'royal-six-bedroom-villa',
    unitNumber: 6,
    name: 'Royal Six-Bedroom Villa',
    bedrooms: 6,
    location: 'Tanke Pool Court',
    pricePerNight: 400000,
    maxGuests: 12,
    cleaningFee: 45000,
    cautionDeposit: 100000,
    hasPool: true,
    amenities: [...COMMON_AMENITIES, 'Swimming pool'],
    description:
      'Our flagship six-bedroom estate at Tanke Pool Court offers unmatched space for up to 12 guests. Enjoy the all-white luxury suite, the grand gold-leaf reception lobby, a bright blue-and-gold living room, and private resort-style poolside lounging with a spa-section swimming pool.',
    photos: [
      PHOTO_ASSETS.bedroomAllWhite,
      PHOTO_ASSETS.exteriorYellowDuplex,
      PHOTO_ASSETS.interiorGoldLobby,
      PHOTO_ASSETS.poolSpaDeck,
      PHOTO_ASSETS.poolGuestsFun,
      PHOTO_ASSETS.poolDeckFriends,
    ],
  },
};

export const APARTMENT_LIST: Apartment[] = Object.values(APARTMENTS);

export const LOCATIONS: string[] = [
  'All Locations',
  'Tanke Main Road',
  'Tanke Garden Close',
  'Tanke Pool Court',
];

export function getApartmentById(idOrNumber: string | null): Apartment | undefined {
  if (!idOrNumber) return undefined;
  const trimmed = idOrNumber.trim();
  if (APARTMENTS[trimmed]) return APARTMENTS[trimmed];
  return APARTMENT_LIST.find(
    (apt) => String(apt.unitNumber) === trimmed || apt.id === trimmed
  );
}

export const WHY_ROCKYSTAY = [
  {
    title: 'Prime Tanke Location',
    detail: 'Quiet, accessible closes minutes from Unilorin, dining spots, and central Ilorin.',
  },
  {
    title: 'Fair, Transparent Prices',
    detail: 'Clear nightly rates in Naira with upfront cleaning and service fees—no surprises.',
  },
  {
    title: 'Spotless Cleanliness',
    detail: 'Hotel-grade linens, sanitized bathrooms, and dedicated housekeeping between stays.',
  },
  {
    title: '24/7 Security',
    detail: 'Gated compounds, perimeter lighting, and round-the-clock security personnel.',
  },
  {
    title: 'Steady Power Backup',
    detail: 'Reliable generator and inverter backup plus clean running water day and night.',
  },
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'amara',
    author: 'Amara',
    rating: 5,
    context: 'Verified Guest · Tanke, Ilorin',
    text: 'I had a wonderful stay at RockyStay Suites! The apartment was clean, comfortable, and beautifully arranged. I truly enjoyed my experience and would definitely book again!',
  },
  {
    id: 'tolu',
    author: 'Tolu',
    rating: 5,
    context: 'Verified Guest · Tanke, Ilorin',
    text: 'RockyStay Suites made my trip so enjoyable. The environment was peaceful, the accommodation was comfortable, and the service was excellent. Highly recommended!',
  },
  {
    id: 'grace',
    author: 'Grace',
    rating: 5,
    context: 'Verified Guest · Tanke, Ilorin',
    text: "Amazing experience! The suite was neat, spacious, and welcoming. It felt like a home away from home. I'll definitely be returning!",
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 'checkin-checkout',
    question: 'What are your check-in and check-out times?',
    answer: 'Check-in is from 2:00 PM and check-out is by 12:00 noon.',
  },
  {
    id: 'minimum-stay',
    question: 'Is there a minimum stay?',
    answer: 'Yes, 2 nights.',
  },
  {
    id: 'fees',
    question: 'What fees apply?',
    answer:
      'Cleaning fee, service charge and a refundable caution deposit, all shown in the calculator.',
  },
  {
    id: 'house-rules',
    question: 'What are your house rules?',
    answer: 'No smoking and no fighting.',
  },
  {
    id: 'cancellation',
    question: 'What is your cancellation policy?',
    answer:
      'Free cancellation up to 48 hours before check-in; 50% refund between 24 and 48 hours before; no refund within 24 hours.',
  },
  {
    id: 'payment',
    question: 'How do I make payment?',
    answer:
      'Message us on WhatsApp for payment details after we confirm availability.',
  },
  {
    id: 'power-water',
    question: 'Do you have power backup and water?',
    answer: 'Yes, steady power backup and water supply.',
  },
  {
    id: 'security-parking',
    question: 'Is there security and parking?',
    answer: 'Yes, 24/7 security and parking.',
  },
  {
    id: 'pickup',
    question: 'Do you offer airport or bus pickup?',
    answer: 'Yes, on request. Ask when you enquire.',
  },
];
