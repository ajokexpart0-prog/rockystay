export type LanguageCode = 'en' | 'yo' | 'ha' | 'ig' | 'fr';

export interface LanguageOption {
  code: LanguageCode;
  label: string;
  shortLabel: string;
}

export const LANGUAGES: LanguageOption[] = [
  { code: 'en', label: 'English', shortLabel: 'EN' },
  { code: 'yo', label: 'Yorùbá', shortLabel: 'YO' },
  { code: 'ha', label: 'Hausa', shortLabel: 'HA' },
  { code: 'ig', label: 'Igbo', shortLabel: 'IG' },
  { code: 'fr', label: 'Français', shortLabel: 'FR' },
];

export interface TranslationBundle {
  languageLabel: string;
  nav: {
    home: string;
    apartments: string;
    about: string;
    contact: string;
    bookWhatsapp: string;
    skipToContent: string;
  };
  hero: {
    kicker: string;
    headline: string;
    subtitle: string;
    exploreCta: string;
    whatsappCta: string;
    priceFrom: string;
    locationsSummary: string;
    arrival: string;
    departure: string;
    guests: string;
    guestSingular: string;
    guestPlural: string;
    checkApartments: string;
    departureError: string;
  };
  why: {
    heading: string;
    subheading: string;
    readPromise: string;
    items: { title: string; detail: string }[];
  };
  homeSections: {
    featuredHeading: string;
    featuredSubheading: string;
    viewAll: string;
    showcaseHeading: string;
    showcaseSubheading: string;
    poolHeading: string;
    poolSubheadingPrefix: string;
    andText: string;
    reviewsHeading: string;
    reviewsSubheading: string;
    faqHeading: string;
    faqSubheading: string;
    seeAllFaqs: string;
    ctaHeading: string;
    ctaSubheading: string;
    browseAll: string;
    messageWhatsapp: string;
  };
  card: {
    bedroom: string;
    bedrooms: string;
    upTo: string;
    guests: string;
    includesPool: string;
    perNight: string;
    viewDetails: string;
  };
  apartmentsPage: {
    kicker: string;
    heading: string;
    subtitle: string;
    filterTitle: string;
    showing: string;
    of: string;
    apartmentsLabel: string;
    clearFilters: string;
    locationLabel: string;
    allLocations: string;
    maxPriceLabel: string;
    minGuestsLabel: string;
    datesCarried: string;
    toText: string;
    flexible: string;
    noMatchTitle: string;
    noMatchBody: string;
  };
  detailsPage: {
    backToAll: string;
    maxLabel: string;
    minStayLabel: string;
    nights: string;
    expandPhoto: string;
    aboutSuite: string;
    checkinLabel: string;
    checkinValue: string;
    checkoutLabel: string;
    checkoutValue: string;
    rulesLabel: string;
    rulesValue: string;
    amenitiesTitle: string;
    formTitle: string;
    formSubtitle: string;
    calcTitle: string;
    arrivalLabel: string;
    departureLabel: string;
    guestsLabel: string;
    nightsCount: string;
    roomCost: string;
    cleaningFee: string;
    serviceCharge: string;
    estimatedTotal: string;
    cautionTitle: string;
    cautionNote: string;
    enquireWhatsapp: string;
    enterValidDates: string;
    whatsappDisclaimer: string;
  };
  aboutPage: {
    kicker: string;
    heading: string;
    intro: string;
    promiseTitle: string;
    promiseP1: string;
    promiseP2: string;
    powerTitle: string;
    powerDetail: string;
    securityTitle: string;
    securityDetail: string;
    amenitiesTitle: string;
    amenitiesSubtitle: string;
    pickupTitle: string;
    pickupP1: string;
    pickupP2: string;
    viewAllBtn: string;
    contactBtn: string;
    poolCourtTitle: string;
    poolCourtDesc: string;
  };
  contactPage: {
    kicker: string;
    heading: string;
    subtitle: string;
    speakTitle: string;
    speakDesc: string;
    chatWhatsapp: string;
    tapToCall: string;
    emailLabel: string;
    locationLabel: string;
    formTitle: string;
    formSubtitle: string;
  };
  form: {
    fullName: string;
    phone: string;
    email: string;
    apartment: string;
    arrival: string;
    departure: string;
    guests: string;
    estimatedTotal: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
    submittingBtn: string;
    missingContact: string;
  };
  footer: {
    quickLinks: string;
    ourSuites: string;
    contactDesk: string;
    rights: string;
    policies: string;
  };
}

export const TRANSLATIONS: Record<LanguageCode, TranslationBundle> = {
  en: {
    languageLabel: 'Language',
    nav: {
      home: 'Home',
      apartments: 'Apartments',
      about: 'About',
      contact: 'Contact',
      bookWhatsapp: 'Book on WhatsApp',
      skipToContent: 'Skip to main content',
    },
    hero: {
      kicker: 'Tanke, Ilorin · Your home away from home in Ilorin.',
      headline: 'Comfortable, secure stays in Tanke, Ilorin',
      subtitle:
        'Modern 1 to 6 bedroom serviced apartments for travellers, families, and visiting professionals—backed by 24/7 security, steady power, clean water, and transparent Naira pricing.',
      exploreCta: 'Explore Apartments',
      whatsappCta: 'Chat on WhatsApp',
      priceFrom: 'From ₦50,000 / night',
      locationsSummary:
        'Six private residences across Tanke Main Road, Tanke Garden Close & Tanke Pool Court',
      arrival: 'Arrival Date',
      departure: 'Departure Date',
      guests: 'Guests',
      guestSingular: 'Guest',
      guestPlural: 'Guests',
      checkApartments: 'Check Apartments',
      departureError: 'Departure must be after your arrival date.',
    },
    why: {
      heading: 'Why RockyStay Suites',
      subheading:
        'Thoughtful essentials that make short and extended stays in Ilorin effortless.',
      readPromise: 'Read our promise & amenities',
      items: [
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
      ],
    },
    homeSections: {
      featuredHeading: 'Featured Suites in Tanke',
      featuredSubheading:
        'From cosy one-bedroom retreats to poolside six-bedroom villas, pick the space that fits your visit.',
      viewAll: 'View all 6 apartments',
      showcaseHeading: 'Inside Our Tanke Residences',
      showcaseSubheading:
        'Step inside sunlit living lounges, bright kitchens, private terraces, and our gated duplex compound in Tanke, Ilorin.',
      poolHeading: 'Tanke Pool Court Gallery',
      poolSubheadingPrefix: 'Private swimming pool access is included exclusively with our',
      andText: 'and',
      reviewsHeading: 'Words from Our Guests',
      reviewsSubheading:
        'Verified stays from travellers, families, and visiting professionals in Tanke, Ilorin.',
      faqHeading: 'Common Questions',
      faqSubheading: 'Everything you need to know before sending your booking enquiry.',
      seeAllFaqs: 'See all 9 FAQs',
      ctaHeading: 'Ready for a calm, comfortable stay in Ilorin?',
      ctaSubheading:
        'Calculate your exact stay cost online and confirm availability directly with our Tanke hospitality team on WhatsApp or via enquiry form.',
      browseAll: 'Browse All Apartments',
      messageWhatsapp: 'Message Us on WhatsApp',
    },
    card: {
      bedroom: 'bedroom',
      bedrooms: 'bedrooms',
      upTo: 'Up to',
      guests: 'guests',
      includesPool: 'Includes swimming pool',
      perNight: '/ night',
      viewDetails: 'View details',
    },
    apartmentsPage: {
      kicker: 'Tanke, Ilorin · Six Serviced Residences',
      heading: 'Find Your Apartment in Tanke',
      subtitle:
        'Filter by Tanke location, nightly budget in Naira, and guest capacity. Every residence includes steady power backup, water supply, 24/7 security, and Wi-Fi.',
      filterTitle: 'Filter Apartments',
      showing: 'Showing',
      of: 'of',
      apartmentsLabel: 'apartments',
      clearFilters: 'Clear filters',
      locationLabel: 'Location in Tanke',
      allLocations: 'All Locations',
      maxPriceLabel: 'Max Price per Night',
      minGuestsLabel: 'Minimum Guests Needed',
      datesCarried: 'Selected travel dates',
      toText: 'to',
      flexible: 'flexible',
      noMatchTitle: 'No Matching Apartments',
      noMatchBody:
        'No apartments match your filters. Try a higher price, fewer guests, or clear the filters to see all six apartments.',
    },
    detailsPage: {
      backToAll: 'Back to all apartments',
      maxLabel: 'Max',
      minStayLabel: 'Minimum stay:',
      nights: 'nights',
      expandPhoto: 'Expand photo',
      aboutSuite: 'About This Suite',
      checkinLabel: 'Check-in',
      checkinValue: 'From 2:00 PM',
      checkoutLabel: 'Check-out',
      checkoutValue: 'By 12:00 Noon',
      rulesLabel: 'House Rules',
      rulesValue: 'No smoking · No fighting',
      amenitiesTitle: 'Included Amenities',
      formTitle: 'Send a Booking Enquiry by Form',
      formSubtitle:
        'Prefer email or form submission? Your selected apartment, dates, guests, and calculated cost are filled in below.',
      calcTitle: 'Stay Cost Calculator',
      arrivalLabel: 'Arrival Date',
      departureLabel: 'Departure Date',
      guestsLabel: 'Number of Guests',
      nightsCount: 'Number of nights',
      roomCost: 'Room cost',
      cleaningFee: 'Cleaning fee',
      serviceCharge: 'Service charge (5% on room cost)',
      estimatedTotal: 'Estimated Total',
      cautionTitle: 'Refundable Caution Deposit',
      cautionNote:
        'Shown separately and not added to your stay total above. Refunded after check-out inspection.',
      enquireWhatsapp: 'Enquire on WhatsApp',
      enterValidDates: 'Enter valid dates & guests to enquire',
      whatsappDisclaimer:
        'This is an enquiry, not a confirmed booking. We will confirm availability on WhatsApp and share payment details.',
    },
    aboutPage: {
      kicker: 'About RockyStay Suites · Your home away from home in Ilorin.',
      heading: 'Years of Welcoming Guests to Tanke, Ilorin',
      intro:
        'RockyStay Suites has years of experience hosting travellers, visiting professionals, and families in Ilorin. Our promise is simple: clean, secure, comfortable stays with power and water you can rely on.',
      promiseTitle: 'Our Promise to Every Guest',
      promiseP1:
        'Whether you are visiting Ilorin for a work assignment, an academic conference, a family celebration, or a quiet weekend getaway, you deserve a residence that feels effortlessly welcoming from the moment you arrive.',
      promiseP2:
        'Across Tanke Main Road, Tanke Garden Close, and Tanke Pool Court, our dedicated team prepares every suite with crisp linens, spotless bathrooms, reliable electricity backup, clean running water, and attentive round-the-clock security.',
      powerTitle: 'Steady Power & Water',
      powerDetail:
        'Dependable backup power and continuous clean water supply across all six residences.',
      securityTitle: '24/7 Security',
      securityDetail:
        'Gated compounds with on-site security and private parking in calm Tanke neighbourhoods.',
      amenitiesTitle: 'Standard Amenities in Every Apartment',
      amenitiesSubtitle:
        'Every RockyStay Suites residence comes fully equipped so you can settle in comfortably from day one:',
      pickupTitle: 'Airport & Bus Pickup Service',
      pickupP1:
        'Arriving at Ilorin International Airport or a major intercity bus terminal? We arrange trusted, punctual airport and bus pickup on request so you reach your Tanke apartment smoothly—especially helpful for late-evening arrivals and first-time visitors.',
      pickupP2: 'Simply mention pickup in your WhatsApp or booking enquiry message.',
      viewAllBtn: 'View All Apartments',
      contactBtn: 'Contact Us',
      poolCourtTitle: 'Tanke Pool Court',
      poolCourtDesc:
        'Guests staying in our Premier Five-Bedroom Villa or Royal Six-Bedroom Villa enjoy private poolside relaxation right within Tanke Pool Court.',
    },
    contactPage: {
      kicker: 'Direct Hospitality Desk · Tanke, Ilorin',
      heading: 'Contact & Booking Enquiries',
      subtitle:
        'Reach us directly on WhatsApp, by phone, or by email—or submit your stay details below and we will confirm availability shortly.',
      speakTitle: 'Speak With Our Desk',
      speakDesc:
        'For the fastest availability confirmation and payment details, message us on WhatsApp or call us directly.',
      chatWhatsapp: 'Chat on WhatsApp',
      tapToCall: 'Tap to call',
      emailLabel: 'Email',
      locationLabel: 'Location',
      formTitle: 'Booking Enquiry Form',
      formSubtitle:
        'Select your preferred apartment and dates to see your estimated stay total and send your enquiry.',
    },
    form: {
      fullName: 'Full Name',
      phone: 'Phone / WhatsApp Number',
      email: 'Email Address',
      apartment: 'Apartment',
      arrival: 'Arrival Date',
      departure: 'Departure Date',
      guests: 'Guests',
      estimatedTotal: 'Estimated Total (excluding refundable caution deposit)',
      messageLabel: 'Message or Special Requests (e.g. airport/bus pickup)',
      messagePlaceholder:
        'Let us know your estimated arrival time or if you need airport/bus pickup...',
      submitBtn: 'Send Booking Enquiry',
      submittingBtn: 'Sending Enquiry...',
      missingContact: 'Please fill in your name, email address, and phone number.',
    },
    footer: {
      quickLinks: 'Quick Links',
      ourSuites: 'Our Suites',
      contactDesk: 'Contact Desk',
      rights: 'All rights reserved.',
      policies: 'Check-in: 2:00 PM · Check-out: 12:00 Noon · Minimum stay: 2 nights',
    },
  },

  yo: {
    languageLabel: 'Èdè',
    nav: {
      home: 'Ilé',
      apartments: 'Àwọn Ilé',
      about: 'Nípa Wa',
      contact: 'Kàn Sí Wa',
      bookWhatsapp: 'Ṣe Ìbéèrè lórí WhatsApp',
      skipToContent: 'Fò sí àkóónú pàtàkì',
    },
    hero: {
      kicker: 'Tanke, Ìlọrin · Ilé rẹ lẹ́yìn ilé ní Ìlọrin.',
      headline: 'Ìsinmi tó rọrùn tí ó sì ní ààbò ní Tanke, Ìlọrin',
      subtitle:
        'Àwọn ilé ìgbàlódé oní-yàrá kan sí mẹ́fà fún àwọn arìnrìn-àjò, ẹbí, àti àwọn òṣìṣẹ́—pẹ̀lú ààbò wákàtí 24/7, iná mànàmáná tó dúró ṣinṣin, omi tó mọ́, àti iye owó tó hàn gbangba.',
      exploreCta: 'Wo Àwọn Ilé Wa',
      whatsappCta: 'Sọ̀rọ̀ lórí WhatsApp',
      priceFrom: 'Láti ₦50,000 / òru',
      locationsSummary:
        'Ilé mẹ́fà ní Tanke Main Road, Tanke Garden Close àti Tanke Pool Court',
      arrival: 'Ọjọ́ Ìwọlé',
      departure: 'Ọjọ́ Ìjáde',
      guests: 'Àlejò',
      guestSingular: 'Àlejò',
      guestPlural: 'Àwọn Àlejò',
      checkApartments: 'Ṣàyẹ̀wò Àwọn Ilé',
      departureError: 'Ọjọ́ ìjáde gbọ́dọ̀ jẹ́ lẹ́yìn ọjọ́ ìwọlé rẹ.',
    },
    why: {
      heading: 'Kí ló dé tó yẹ kó o yan RockyStay Suites',
      subheading: 'Àwọn ohun èlò tó mú kí ìsinmi rẹ ní Ìlọrin rọrùn pátápátá.',
      readPromise: 'Ka ìlérí àti ohun èlò wa',
      items: [
        {
          title: 'Ipò Pàtàkì ní Tanke',
          detail: 'Àdúgbò tó dákẹ́ tó sì sún mọ́ Unilorin, ilé oúnjẹ, àti àárín gbùngbùn Ìlọrin.',
        },
        {
          title: 'Iye Owó Tó Tọ́',
          detail: 'Iye owó òru ní Naira pẹ̀lú owó ìmọ́tótó tó hàn gbangba láìsí àṣírí.',
        },
        {
          title: 'Ìmọ́tótó Pípé',
          detail: 'Aṣọ ìbùsùn tó mọ́ gaara, balùwẹ̀ tó mọ́ tónítóní, àti ìtọ́jú ilé déédéé.',
        },
        {
          title: 'Ààbò Wákàtí 24/7',
          detail: 'Ọgbà tó ní géètì, iná ààbò, àti àwọn olùṣọ́ tọ̀sán-tòru.',
        },
        {
          title: 'Iná Àtìlẹ́yìn Tó Dúró',
          detail: 'Jẹ́nẹ́rétọ̀ àti ìnfaàtà tó ṣeé gbẹ́kẹ̀lé pẹ̀lú omi tútù lọ́sàn àti lóru.',
        },
      ],
    },
    homeSections: {
      featuredHeading: 'Àwọn Ilé Pàtàkì ní Tanke',
      featuredSubheading:
        'Láti ilé oní-yàrá kan sí villa oní-yàrá mẹ́fà pẹ̀lú adágún omi, yan èyí tó bá ìrìnàjò rẹ mu.',
      viewAll: 'Wo gbogbo ilé 6',
      showcaseHeading: 'Nínú Àwọn Ilé Wa ní Tanke',
      showcaseSubheading:
        'Wo yàrá ìgbàlejò tó mọ́lẹ̀, ilé ìdáná ìgbàlódé, báńkọ́nì ìtura, àti ilé aláwọ̀ funfun àti òfeefee wa ní Tanke.',
      poolHeading: 'Àwòrán Adágún Omi Tanke Pool Court',
      poolSubheadingPrefix: 'Ìwọlé adágún omi àdáni wà fún àwọn àlejò nínú',
      andText: 'àti',
      reviewsHeading: 'Ọ̀rọ̀ Láti Ọ̀dọ̀ Àwọn Àlejò Wa',
      reviewsSubheading: 'Ìrírí àwọn àlejò tó ti sinmi pẹ̀lú wa ní Tanke, Ìlọrin.',
      faqHeading: 'Àwọn Ìbéèrè Tó Wọ́pọ̀',
      faqSubheading: 'Ohun gbogbo tó yẹ kó o mọ̀ kí o tó fi ìbéèrè rẹ ránṣẹ́.',
      seeAllFaqs: 'Wo gbogbo ìbéèrè 9',
      ctaHeading: 'Ṣé o ti ṣetán fún ìsinmi tó tutù ní Ìlọrin?',
      ctaSubheading:
        'Ṣírò iye owó ìsinmi rẹ lórí ayélujára kí o sì bá wa sọ̀rọ̀ lórí WhatsApp tàbí fọ́ọ̀mù ìbéèrè.',
      browseAll: 'Wo Gbogbo Àwọn Ilé',
      messageWhatsapp: 'Kọ̀wé sí Wa lórí WhatsApp',
    },
    card: {
      bedroom: 'yàrá ìsùn',
      bedrooms: 'yàrá ìsùn',
      upTo: 'Títí di',
      guests: 'àlejò',
      includesPool: 'Pẹ̀lú adágún omi',
      perNight: '/ òru',
      viewDetails: 'Wo ẹ̀kúnrẹ́rẹ́',
    },
    apartmentsPage: {
      kicker: 'Tanke, Ìlọrin · Ilé Mẹ́fà Tó Pẹ̀lú Ìtọ́jú',
      heading: 'Wá Ilé Rẹ ní Tanke',
      subtitle:
        'Yan agbègbè ní Tanke, iye owó òru tó bá ọ mu, àti iye àlejò. Gbogbo ilé ni iná àtìlẹ́yìn, omi, ààbò 24/7, àti Wi-Fi.',
      filterTitle: 'Ṣàyẹ̀wò Àwọn Ilé',
      showing: 'Ń fi hàn',
      of: 'nínú',
      apartmentsLabel: 'ilé',
      clearFilters: 'Pa àyẹ̀wò rẹ́',
      locationLabel: 'Agbègbè ní Tanke',
      allLocations: 'Gbogbo Agbègbè',
      maxPriceLabel: 'Iye Owó Tó Pọ̀ Jù lóru',
      minGuestsLabel: 'Iye Àlejò Tó Kéré Jù',
      datesCarried: 'Àwọn ọjọ́ tí o yàn',
      toText: 'sí',
      flexible: 'lè yípadà',
      noMatchTitle: 'Kò Sí Ilé Tó Bá Mu',
      noMatchBody:
        'Kò sí ilé tó bá àyẹ̀wò rẹ mu. Gbìyànjú iye owó tó ga díẹ̀, àlejò tó kéré sí i, tàbí pa àyẹ̀wò rẹ́.',
    },
    detailsPage: {
      backToAll: 'Padà sí gbogbo ilé',
      maxLabel: 'Àlejò pọ̀ jù',
      minStayLabel: 'Ọjọ́ tó kéré jù:',
      nights: 'òru',
      expandPhoto: 'Fẹ̀ àwòrán',
      aboutSuite: 'Nípa Ilé Yìí',
      checkinLabel: 'Ìwọlé',
      checkinValue: 'Láti 2:00 Ọ̀sán',
      checkoutLabel: 'Ìjáde',
      checkoutValue: 'Kí ó tó di 12:00 Ọ̀sán',
      rulesLabel: 'Òfin Ilé',
      rulesValue: 'Kò sí sìgá mímu · Kò sí ìjà',
      amenitiesTitle: 'Àwọn Ohun Èlò Tó Wà Nínú Rẹ̀',
      formTitle: 'Fi Ìbéèrè Ránṣẹ́ Pẹ̀lú Fọ́ọ̀mù',
      formSubtitle:
        'O fẹ́ fi í-meèlì tàbí fọ́ọ̀mù ránṣẹ́? A ti kọ ilé, ọjọ́, àti iye owó rẹ sí ìsàlẹ̀.',
      calcTitle: 'Ìṣírò Owó Ìsinmi',
      arrivalLabel: 'Ọjọ́ Ìwọlé',
      departureLabel: 'Ọjọ́ Ìjáde',
      guestsLabel: 'Iye Àlejò',
      nightsCount: 'Iye òru',
      roomCost: 'Owó yàrá',
      cleaningFee: 'Owó ìmọ́tótó',
      serviceCharge: 'Owó iṣẹ́ (5% lórí owó yàrá)',
      estimatedTotal: 'Àpapọ̀ Owó Tó Ṣeéṣe',
      cautionTitle: 'Owó Ààbò Tí A Ń Dá Padà',
      cautionNote:
        'A fi hàn lọ́tọ̀, kò sí lára àpapọ̀ owó lókè. A máa ń dá a padà lẹ́yìn àyẹ̀wò ìjáde.',
      enquireWhatsapp: 'Béèrè lórí WhatsApp',
      enterValidDates: 'Tẹ ọjọ́ àti iye àlejò tó péye láti béèrè',
      whatsappDisclaimer:
        'Èyí jẹ́ ìbéèrè, kì í ṣe ìfìdí-múlẹ̀ ìforúkọsílẹ̀. A ó fìdí ààyè múlẹ̀ lórí WhatsApp.',
    },
    aboutPage: {
      kicker: 'Nípa RockyStay Suites · Ilé rẹ lẹ́yìn ilé ní Ìlọrin.',
      heading: 'Ọ̀pọ̀ Ọdún Tí A Ti Ń Gbàlejò ní Tanke, Ìlọrin',
      intro:
        'RockyStay Suites ní ìrírí ọ̀pọ̀ ọdún láti máa gbàlejò ní Ìlọrin. Ìlérí wa rọrùn: ilé tó mọ́, tó ní ààbò, tó sì rọrùn pẹ̀lú iná àti omi tó ṣeé gbẹ́kẹ̀lé.',
      promiseTitle: 'Ìlérí Wa Fún Gbogbo Àlejò',
      promiseP1:
        'Yálà o wá sí Ìlọrin fún iṣẹ́, àpérò ilé-ẹ̀kọ́, ayẹyẹ ẹbí, tàbí ìsinmi ìparí ọ̀sẹ̀, o tọ́ sí ilé tó mú kí ara rẹ balẹ̀.',
      promiseP2:
        'Ní Tanke Main Road, Tanke Garden Close, àti Tanke Pool Court, ẹgbẹ́ wa máa ń pèsè aṣọ ìbùsùn tó mọ́, balùwẹ̀ ìgbàlódé, iná àtìlẹ́yìn, àti ààbò wákàtí 24/7.',
      powerTitle: 'Iná & Omi Tó Dúró',
      powerDetail: 'Iná àtìlẹ́yìn tó ṣeé gbẹ́kẹ̀lé àti omi tútù ní gbogbo ilé mẹ́fà.',
      securityTitle: 'Ààbò Wákàtí 24/7',
      securityDetail: 'Ọgbà tó ní géètì, olùṣọ́, àti ibi ìgbọ́kọ̀sí ní Tanke.',
      amenitiesTitle: 'Àwọn Ohun Èlò Nínú Gbogbo Ilé',
      amenitiesSubtitle: 'Gbogbo ilé RockyStay Suites ti ṣetán fún ìtura rẹ láti ọjọ́ àkọ́kọ́:',
      pickupTitle: 'Ìgbàlejò Láti Pápákọ̀ Òfurufú & Ibùdó Bọ́ọ̀sì',
      pickupP1:
        'Ǹjẹ́ o ń bọ̀ láti Pápákọ̀ Òfurufú Ìlọrin tàbí ibùdó bọ́ọ̀sì? A lè ṣètò ọkọ̀ tó máa gbé ọ wá sí ilé rẹ ní Tanke nígbà tí o bá béèrè.',
      pickupP2: 'Kan sọ fún wa nínú ìfiranṣẹ́ WhatsApp tàbí fọ́ọ̀mù ìbéèrè rẹ.',
      viewAllBtn: 'Wo Gbogbo Ilé',
      contactBtn: 'Kàn Sí Wa',
      poolCourtTitle: 'Tanke Pool Court',
      poolCourtDesc:
        'Àwọn àlejò nínú Premier Five-Bedroom Villa tàbí Royal Six-Bedroom Villa ní àǹfààní adágún omi àdáni.',
    },
    contactPage: {
      kicker: 'Ibùdó Ìbánisọ̀rọ̀ · Tanke, Ìlọrin',
      heading: 'Ìbánisọ̀rọ̀ & Ìbéèrè Ìforúkọsílẹ̀',
      subtitle:
        'Kàn sí wa lórí WhatsApp, tẹlifóònù, tàbí í-meèlì—tàbí kọ̀wé nínú fọ́ọ̀mù ìsàlẹ̀.',
      speakTitle: 'Bá Wa Sọ̀rọ̀ Tààrà',
      speakDesc:
        'Fún ìdáhùn kíákíá lórí ààyè àti sísan owó, kọ̀wé sí wa lórí WhatsApp tàbí pè wá.',
      chatWhatsapp: 'Sọ̀rọ̀ lórí WhatsApp',
      tapToCall: 'Tẹ̀ láti pè',
      emailLabel: 'Í-meèlì',
      locationLabel: 'Ibùdó',
      formTitle: 'Fọ́ọ̀mù Ìbéèrè Ìforúkọsílẹ̀',
      formSubtitle: 'Yan ilé àti ọjọ́ tí o fẹ́ láti rí àpapọ̀ owó kí o sì fi ìbéèrè ránṣẹ́.',
    },
    form: {
      fullName: 'Orúkọ Rẹ Kíkún',
      phone: 'Nọ́ńbà Fóònù / WhatsApp',
      email: 'Àdírẹ́ẹ̀sì Í-meèlì',
      apartment: 'Ilé Tí O Yàn',
      arrival: 'Ọjọ́ Ìwọlé',
      departure: 'Ọjọ́ Ìjáde',
      guests: 'Àlejò',
      estimatedTotal: 'Àpapọ̀ Owó (láìka owó ààbò tí a ń dá padà)',
      messageLabel: 'Ọ̀rọ̀ tàbí Ìbéèrè Pàtàkì (bíi ìgbàlejò pápákọ̀)',
      messagePlaceholder: 'Sọ àkókò ìwọlé rẹ fún wa tàbí bí o ṣe nílò ọkọ̀ ìgbàlejò...',
      submitBtn: 'Fi Ìbéèrè Ránṣẹ́',
      submittingBtn: 'Ń fi ránṣẹ́...',
      missingContact: 'Jọ̀wọ́ kọ orúkọ, í-meèlì, àti nọ́ńbà fóònù rẹ.',
    },
    footer: {
      quickLinks: 'Àwọn Ọ̀nà Kíákíá',
      ourSuites: 'Àwọn Ilé Wa',
      contactDesk: 'Ibùdó Ìbánisọ̀rọ̀',
      rights: 'Gbogbo ẹ̀tọ́ wà ní ìpamọ́.',
      policies: 'Ìwọlé: 2:00 Ọ̀sán · Ìjáde: 12:00 Ọ̀sán · Ọjọ́ tó kéré jù: òru 2',
    },
  },

  ha: {
    languageLabel: 'Harshe',
    nav: {
      home: 'Gida',
      apartments: 'Gidaje',
      about: 'Game da Mu',
      contact: 'Tuntube Mu',
      bookWhatsapp: 'Yi Tambaya a WhatsApp',
      skipToContent: 'Tsallaka zuwa ainihin bayani',
    },
    hero: {
      kicker: 'Tanke, Ilorin · Gidanku na nesa da gida a Ilorin.',
      headline: 'Kwanciyar hankali da tsaro a gidajen Tanke, Ilorin',
      subtitle:
        'Gidajen haya na zamani masu ɗakuna 1 zuwa 6 ga matafiya, iyalai, da baƙi—tare da tsaro awa 24/7, wutar lantarki mai ɗorewa, ruwa mai tsafta, da farashi a bayyane.',
      exploreCta: 'Duba Gidajenmu',
      whatsappCta: 'Yi Magana a WhatsApp',
      priceFrom: 'Daga ₦50,000 / dare',
      locationsSummary:
        'Gidaje shida a Tanke Main Road, Tanke Garden Close da Tanke Pool Court',
      arrival: 'Ranar Zuwa',
      departure: 'Ranar Tashi',
      guests: 'Baƙi',
      guestSingular: 'Baƙo',
      guestPlural: 'Baƙi',
      checkApartments: 'Duba Gidaje',
      departureError: 'Ranar tashi dole ne ta kasance bayan ranar zuwa.',
    },
    why: {
      heading: 'Me yasa RockyStay Suites',
      subheading: 'Abubuwan jin daɗi da ke sa zamanku a Ilorin ya zama mai sauƙi.',
      readPromise: 'Karanta alƙawarinmu da kayayyaki',
      items: [
        {
          title: 'Wuri Mai Kyau a Tanke',
          detail: 'Unguwa mai natsuwa kusa da Unilorin, wuraren cin abinci, da tsakiyar Ilorin.',
        },
        {
          title: 'Farashi Mai Sauƙi',
          detail: 'Farashin dare a bayyane cikin Naira tare da kuɗin tsafta babu ƙarin ɓoye.',
        },
        {
          title: 'Tsafta Mai Inganci',
          detail: 'Zannuwan gado masu tsafta, bandakuna masu ƙyalli, da tsaftacewa akai-akai.',
        },
        {
          title: 'Tsaro Awa 24/7',
          detail: 'Gida mai ƙofa da hasken tsaro da masu gadi dare da rana.',
        },
        {
          title: 'Wutar Lantarki Kullum',
          detail: 'Injin janareta da inverter masu ƙarfi tare da ruwa mai gudana koyaushe.',
        },
      ],
    },
    homeSections: {
      featuredHeading: 'Zaɓaɓɓun Gidaje a Tanke',
      featuredSubheading:
        'Daga gida mai ɗaki ɗaya zuwa babban gida mai ɗakuna shida da wurin wanka, zaɓi wanda ya dace da ku.',
      viewAll: 'Duba duka gidaje 6',
      showcaseHeading: 'Cikin Gidajenmu na Tanke',
      showcaseSubheading:
        'Kalli falon zama mai haske, kicin na zamani, baranda mai iska, da gininmu mai tsaro a Tanke, Ilorin.',
      poolHeading: 'Hotunan Wurin Wanka na Tanke Pool Court',
      poolSubheadingPrefix: 'Ana samun wurin wanka na musamman ga baƙin',
      andText: 'da',
      reviewsHeading: 'Maganar Baƙinmu',
      reviewsSubheading: 'Ra’ayoyin baƙi da suka zauna tare da mu a Tanke, Ilorin.',
      faqHeading: 'Tambayoyin da Aka Fi Yi',
      faqSubheading: 'Duk abin da kuke buƙatar sani kafin aika tambayar kama gida.',
      seeAllFaqs: 'Duba duka tambayoyi 9',
      ctaHeading: 'Kun shirya don hutawa cikin kwanciyar hankali a Ilorin?',
      ctaSubheading:
        'Lissafa jimillar kuɗin zamanku a nan ku kuma tuntube mu kai tsaye a WhatsApp ko ta fom.',
      browseAll: 'Duba Duka Gidaje',
      messageWhatsapp: 'Tura Saƙo a WhatsApp',
    },
    card: {
      bedroom: 'ɗaki',
      bedrooms: 'ɗakuna',
      upTo: 'Har zuwa',
      guests: 'baƙi',
      includesPool: 'Tare da wurin wanka',
      perNight: '/ dare',
      viewDetails: 'Duba cikakken bayani',
    },
    apartmentsPage: {
      kicker: 'Tanke, Ilorin · Gidaje Shida Masu Kula',
      heading: 'Nemo Gidanku a Tanke',
      subtitle:
        'Zaɓi yanki a Tanke, iyakar kuɗin dare, da adadin baƙi. Kowanne gida yana da wutar lantarki, ruwa, tsaro 24/7, da Wi-Fi.',
      filterTitle: 'Tace Gidaje',
      showing: 'Ana nuna',
      of: 'cikin',
      apartmentsLabel: 'gidaje',
      clearFilters: 'Share tacewa',
      locationLabel: 'Wuri a Tanke',
      allLocations: 'Duka Wurare',
      maxPriceLabel: 'Mafi Yawancin Kuɗin Dare',
      minGuestsLabel: 'Mafi Ƙarancin Baƙi',
      datesCarried: 'Ranekun da aka zaɓa',
      toText: 'zuwa',
      flexible: 'ana iya canzawa',
      noMatchTitle: 'Babu Gidan da Ya Dace',
      noMatchBody:
        'Babu gidan da ya dace da zaɓinku. Ku gwada ƙara farashi, rage baƙi, ko share tacewa.',
    },
    detailsPage: {
      backToAll: 'Koma zuwa duka gidaje',
      maxLabel: 'Iyakar baƙi',
      minStayLabel: 'Mafi ƙarancin zama:',
      nights: 'dare',
      expandPhoto: 'Faɗaɗa hoto',
      aboutSuite: 'Game da Wannan Gida',
      checkinLabel: 'Shiga',
      checkinValue: 'Daga 2:00 PM',
      checkoutLabel: 'Fita',
      checkoutValue: 'Kafin 12:00 Noon',
      rulesLabel: 'Dokokin Gida',
      rulesValue: 'Babu shan taba · Babu faɗa',
      amenitiesTitle: 'Abubuwan Jin Daɗi da Ke Ciki',
      formTitle: 'Aika Tambaya ta Fom',
      formSubtitle:
        'Kuna son amfani da fom? An riga an cika gida, raneku, da jimillar kuɗin ku a ƙasa.',
      calcTitle: 'Lissafin Kuɗin Zama',
      arrivalLabel: 'Ranar Zuwa',
      departureLabel: 'Ranar Tashi',
      guestsLabel: 'Adadin Baƙi',
      nightsCount: 'Adadin dare',
      roomCost: 'Kuɗin ɗaki',
      cleaningFee: 'Kuɗin tsafta',
      serviceCharge: 'Kuɗin hidima (5% na kuɗin ɗaki)',
      estimatedTotal: 'Jimillar Kuɗi',
      cautionTitle: 'Kuɗin Ajiya na Tsaro (Ana Mayarwa)',
      cautionNote:
        'An nuna shi daban kuma ba a haɗa da jimillar da ke sama ba. Ana mayarwa bayan dubawa.',
      enquireWhatsapp: 'Yi Tambaya a WhatsApp',
      enterValidDates: 'Shigar da raneku da baƙi masu inganci',
      whatsappDisclaimer:
        'Wannan tambaya ce kawai, ba tabbacin kama gida ba. Za mu tabbatar da samuwa a WhatsApp.',
    },
    aboutPage: {
      kicker: 'Game da RockyStay Suites · Gidanku na nesa da gida a Ilorin.',
      heading: 'Shekaru na Karɓar Baƙi a Tanke, Ilorin',
      intro:
        'RockyStay Suites tana da gogewa ta shekaru wajen karɓar matafiya, ma’aikata, da iyalai a Ilorin. Alƙawarinmu shi ne zama mai tsafta, tsaro, da kwanciyar hankali tare da wuta da ruwa.',
      promiseTitle: 'Alƙawarinmu ga Kowanne Baƙo',
      promiseP1:
        'Ko kun zo Ilorin don aiki, taron karatu, bikin iyali, ko hutu, kun cancanci gida mai kwanciyar hankali.',
      promiseP2:
        'A Tanke Main Road, Tanke Garden Close, da Tanke Pool Court, ma’aikatanmu suna shirya kowane gida da tsafta da tsaro awa 24/7.',
      powerTitle: 'Wuta da Ruwa Kullum',
      powerDetail: 'Ingantaccen tsarin wutar lantarki da ruwa mai tsafta a duka gidaje shida.',
      securityTitle: 'Tsaro Awa 24/7',
      securityDetail: 'Unguwa mai ƙofa da masu gadi tare da wurin ajiye motoci.',
      amenitiesTitle: 'Kayayyakin Jin Daɗi a Kowanne Gida',
      amenitiesSubtitle: 'Kowanne gida na RockyStay Suites yana cike da kayayyaki tun ranar farko:',
      pickupTitle: 'Ɗauka Daga Filin Jirgin Sama & Tashar Mota',
      pickupP1:
        'Kuna sauka a Filin Jirgin Sama na Ilorin ko tashar mota? Muna shirya mota ta musamman don ɗauko ku zuwa Tanke idan kun buƙata.',
      pickupP2: 'Ku ambaci hakan a cikin saƙon WhatsApp ko fom ɗin tambaya.',
      viewAllBtn: 'Duba Duka Gidaje',
      contactBtn: 'Tuntube Mu',
      poolCourtTitle: 'Tanke Pool Court',
      poolCourtDesc:
        'Baƙin Premier Five-Bedroom Villa da Royal Six-Bedroom Villa suna jin daɗin wurin wanka na musamman.',
    },
    contactPage: {
      kicker: 'Ofishin Karɓar Baƙi · Tanke, Ilorin',
      heading: 'Tuntuba & Tambayar Kama Gida',
      subtitle:
        'Ku tuntube mu ta WhatsApp, waya, ko imel—ko ku cika fom ɗin da ke ƙasa don tabbatarwa.',
      speakTitle: 'Yi Magana da Mu Kai Tsaye',
      speakDesc:
        'Don samun amsa cikin sauri game da samuwar gida da biyan kuɗi, ku yi mana magana a WhatsApp ko ku kira mu.',
      chatWhatsapp: 'Yi Magana a WhatsApp',
      tapToCall: 'Taɓa don kira',
      emailLabel: 'Imel',
      locationLabel: 'Wuri',
      formTitle: 'Fom ɗin Tambayar Kama Gida',
      formSubtitle: 'Zaɓi gida da ranekun da kuke so don ganin jimillar kuɗi ku aika tambaya.',
    },
    form: {
      fullName: 'Cikakken Suna',
      phone: 'Lambar Waya / WhatsApp',
      email: 'Adireshin Imel',
      apartment: 'Gida',
      arrival: 'Ranar Zuwa',
      departure: 'Ranar Tashi',
      guests: 'Baƙi',
      estimatedTotal: 'Jimillar Kuɗi (banda kuɗin ajiya na tsaro)',
      messageLabel: 'Saƙo ko Buƙata ta Musamman (misali ɗauka daga filin jirgi)',
      messagePlaceholder: 'Faɗa mana lokacin zuwanku ko idan kuna buƙatar motar ɗauka...',
      submitBtn: 'Aika Tambaya',
      submittingBtn: 'Ana aikawa...',
      missingContact: 'Da fatan za a cika suna, imel, da lambar waya.',
    },
    footer: {
      quickLinks: 'Hanyoyi Masu Sauri',
      ourSuites: 'Gidajenmu',
      contactDesk: 'Ofishin Tuntuba',
      rights: 'Duka haƙƙoƙi suna nan a kiyaye.',
      policies: 'Shiga: 2:00 PM · Fita: 12:00 Noon · Mafi ƙarancin zama: dare 2',
    },
  },

  ig: {
    languageLabel: 'Asụsụ',
    nav: {
      home: 'Ụlọ',
      apartments: 'Ụlọ Obibi',
      about: 'Banyere Anyị',
      contact: 'Kpọtụrụ Anyị',
      bookWhatsapp: 'Jụọ na WhatsApp',
      skipToContent: 'Gaa na isi ọdịnaya',
    },
    hero: {
      kicker: 'Tanke, Ilorin · Ụlọ gị na-abụghị n’ụlọ gị na Ilorin.',
      headline: 'Ọnọdụ dị mma ma dị nchebe na Tanke, Ilorin',
      subtitle:
        'Ụlọ ọhụrụ nwere ime ụlọ 1 ruo 6 maka ndị njem, ezinụlọ, na ndị ọrụ—nwere nche awa 24/7, ọkụ latrik kwụsiri ike, mmiri dị ọcha, na ọnụ ahịa doro anya.',
      exploreCta: 'Lee Ụlọ Obibi Anyị',
      whatsappCta: 'Kpaa n’ụlọ WhatsApp',
      priceFrom: 'Malite na ₦50,000 / abalị',
      locationsSummary:
        'Ụlọ isii na Tanke Main Road, Tanke Garden Close na Tanke Pool Court',
      arrival: 'Ụbọchị Mbata',
      departure: 'Ụbọchị Ọpụpụ',
      guests: 'Ndị Ọbịa',
      guestSingular: 'Onye Ọbịa',
      guestPlural: 'Ndị Ọbịa',
      checkApartments: 'Lelee Ụlọ',
      departureError: 'Ụbọchị ọpụpụ ga-abụrịrị mgbe ụbọchị mbata gị gasịrị.',
    },
    why: {
      heading: 'Ihe Mere RockyStay Suites Ji Pụọ Iche',
      subheading: 'Ihe niile dị mkpa na-eme ka ịnọ na Ilorin dị mfe ma dị jụụ.',
      readPromise: 'Gụọ nkwa na akụrụngwa anyị',
      items: [
        {
          title: 'Ebe Dị Mma na Tanke',
          detail: 'Ebe dị jụụ dị nso na Unilorin, ebe iri nri, na etiti Ilorin.',
        },
        {
          title: 'Ọnụ Ahịa Ziri Ezi',
          detail: 'Ọnụ ahịa abalị na Naira nwere ego nhicha doro anya n’enweghị mgbagwoju anya.',
        },
        {
          title: 'Ịdị Ọcha Zuru Oke',
          detail: 'Ákwà àkwà dị ọcha, ụlọ ịsa ahụ dị ọcha, na nhicha mgbe niile.',
        },
        {
          title: 'Nche Awa 24/7',
          detail: 'Ogige nwere ọnụ ụzọ ámá, ọkụ nche, na ndị nche ehihie na abalị.',
        },
        {
          title: 'Ọkụ Latrik Kwụsiri Ike',
          detail: 'Genereeto na invata kwụsiri ike tinyere mmiri dị ọcha mgbe niile.',
        },
      ],
    },
    homeSections: {
      featuredHeading: 'Ụlọ Pụrụ Iche na Tanke',
      featuredSubheading:
        'Site na ụlọ otu ime ụlọ ruo na villa ime ụlọ isii nwere ọdọ mmiri, họrọ nke dabara na njem gị.',
      viewAll: 'Lee ụlọ niile 6',
      showcaseHeading: 'N’ime Ụlọ Anyị na Tanke',
      showcaseSubheading:
        'Lelee ebe obibi na-egbuke egbuke, kichin ọgbara ọhụrụ, mbara ihu ikuku, na ụlọ duplex anyị na Tanke.',
      poolHeading: 'Foto Ọdọ Mmiri Tanke Pool Court',
      poolSubheadingPrefix: 'Ọdọ mmiri pụrụ iche dị naanị maka ndị bi na',
      andText: 'na',
      reviewsHeading: 'Ihe Ndị Ọbịa Anyị Kwuru',
      reviewsSubheading: 'Ahụmahụ ndị ọbịa bi na RockyStay Suites na Tanke, Ilorin.',
      faqHeading: 'Ajụjụ Ndị A Na-ajụkarị',
      faqSubheading: 'Ihe niile ị kwesịrị ịma tupu izipu ajụjụ ụlọ.',
      seeAllFaqs: 'Lee ajụjụ niile 9',
      ctaHeading: 'Ị dịla njikere maka izu ike dị jụụ na Ilorin?',
      ctaSubheading:
        'Gbakọọ ego ọnọdụ gị n’ịntanetị ma kwado na WhatsApp ma ọ bụ site na fọm ajụjụ.',
      browseAll: 'Lee Ụlọ Niile',
      messageWhatsapp: 'Zitere Anyị Ozi na WhatsApp',
    },
    card: {
      bedroom: 'ime ụlọ',
      bedrooms: 'ime ụlọ',
      upTo: 'Ruo',
      guests: 'ndị ọbịa',
      includesPool: 'Gụnyere ọdọ mmiri',
      perNight: '/ abalị',
      viewDetails: 'Lee nkọwa',
    },
    apartmentsPage: {
      kicker: 'Tanke, Ilorin · Ụlọ Isii Nwere Nlekọta',
      heading: 'Chọta Ụlọ Gị na Tanke',
      subtitle:
        'Họrọ mpaghara Tanke, ọnụ ahịa abalị na Naira, na ọnụ ọgụgụ ndị ọbịa. Ụlọ ọ bụla nwere ọkụ, mmiri, nche 24/7, na Wi-Fi.',
      filterTitle: 'Họrọ Ụlọ',
      showing: 'Na-egosi',
      of: 'n’ime',
      apartmentsLabel: 'ụlọ',
      clearFilters: 'Kpochapụ nhọrọ',
      locationLabel: 'Ebe na Tanke',
      allLocations: 'Ebe Niile',
      maxPriceLabel: 'Ọnụ Ahịa Kachasị kwa Abalị',
      minGuestsLabel: 'Ndị Ọbịa Kachasị Nta',
      datesCarried: 'Ụbọchị ndị ahọpụtara',
      toText: 'ruo',
      flexible: 'nwere ike ịgbanwe',
      noMatchTitle: 'Enweghị Ụlọ Dabara',
      noMatchBody:
        'Enweghị ụlọ dabara na nhọrọ gị. Nwaa ọnụ ahịa dị elu, belata ndị ọbịa, ma ọ bụ kpochapụ nhọrọ.',
    },
    detailsPage: {
      backToAll: 'Laghachi na ụlọ niile',
      maxLabel: 'Kachasị',
      minStayLabel: 'Ọnọdụ kacha nta:',
      nights: 'abalị',
      expandPhoto: 'Mepee foto',
      aboutSuite: 'Banyere Ụlọ A',
      checkinLabel: 'Mbata',
      checkinValue: 'Malite na 2:00 PM',
      checkoutLabel: 'Ọpụpụ',
      checkoutValue: 'Tupu 12:00 Noon',
      rulesLabel: 'Iwu Ụlọ',
      rulesValue: 'Enyela anwụrụ · Enweghị ọgụ',
      amenitiesTitle: 'Akụrụngwa Dị N’ime Ya',
      formTitle: 'Zipu Ajụjụ Site na Fọm',
      formSubtitle:
        'Ị chọrọ izipu site na fọm? Ejupụtala ụlọ, ụbọchị, na ego gị n’okpuru.',
      calcTitle: 'Ngụkọta Ego Ọnọdụ',
      arrivalLabel: 'Ụbọchị Mbata',
      departureLabel: 'Ụbọchị Ọpụpụ',
      guestsLabel: 'Ọnụ Ọgụgụ Ndị Ọbịa',
      nightsCount: 'Ọnụ ọgụgụ abalị',
      roomCost: 'Ego ụlọ',
      cleaningFee: 'Ego nhicha',
      serviceCharge: 'Ego ọrụ (5% nke ego ụlọ)',
      estimatedTotal: 'Ngụkọta Ego Niile',
      cautionTitle: 'Ego Nchedo A Na-akwụghachi',
      cautionNote:
        'E gosipụtara ya iche, agụnyeghị ya n’elu. A na-akwụghachi ya mgbe nyocha gasịrị.',
      enquireWhatsapp: 'Jụọ na WhatsApp',
      enterValidDates: 'Tinye ụbọchị na ndị ọbịa ziri ezi',
      whatsappDisclaimer:
        'Nke a bụ ajụjụ, ọ bụghị nkwenye ikpeazụ. Anyị ga-akwado ohere na WhatsApp.',
    },
    aboutPage: {
      kicker: 'Banyere RockyStay Suites · Ụlọ gị na-abụghị n’ụlọ gị na Ilorin.',
      heading: 'Afọ Ndị Anyị Nọ Na-anabata Ndị Ọbịa na Tanke, Ilorin',
      intro:
        'RockyStay Suites nwere ahụmahụ ọtụtụ afọ na-anabata ndị njem, ndị ọrụ, na ezinụlọ na Ilorin. Nkwa anyị dị mfe: ọnọdụ dị ọcha, nchebe, na ntụsara ahụ nwere ọkụ na mmiri.',
      promiseTitle: 'Nkwa Anyị Nye Onye Ọbịa Ọ Bụla',
      promiseP1:
        'Ma ị bịara Ilorin maka ọrụ, ọgbakọ, emume ezinụlọ, ma ọ bụ ezumike dị jụụ, ị kwesịrị ebe obibi na-enye udo.',
      promiseP2:
        'Na Tanke Main Road, Tanke Garden Close, na Tanke Pool Court, ndị ọrụ anyị na-akwadebe ụlọ niile nke ọma na nche 24/7.',
      powerTitle: 'Ọkụ & Mmiri Mgbe Niile',
      powerDetail: 'Ọkụ nkwado kwụsiri ike na mmiri dị ọcha n’ụlọ isii niile.',
      securityTitle: 'Nche Awa 24/7',
      securityDetail: 'Ogige nwere ọnụ ụzọ ámá, ndị nche, na ebe ndọba ụgbọala.',
      amenitiesTitle: 'Akụrụngwa Dị N’ime Ụlọ Ọ Bụla',
      amenitiesSubtitle: 'Ụlọ RockyStay Suites ọ bụla dị njikere maka ntụsara ahụ gị:',
      pickupTitle: 'Mbupu Site n’Ọdụ Ụgbọ Elu & Bọs',
      pickupP1:
        'Ị na-abata n’Ọdụ Ụgbọ Elu Ilorin ma ọ bụ ọdụ bọs? Anyị nwere ike ịhazi ụgbọala ga-eburu gị gaa Tanke mgbe ị rịọrọ.',
      pickupP2: 'Kwuo ya na ozi WhatsApp ma ọ bụ fọm ajụjụ gị.',
      viewAllBtn: 'Lee Ụlọ Niile',
      contactBtn: 'Kpọtụrụ Anyị',
      poolCourtTitle: 'Tanke Pool Court',
      poolCourtDesc:
        'Ndị ọbịa bi na Premier Five-Bedroom Villa ma ọ bụ Royal Six-Bedroom Villa nwere ọdọ mmiri pụrụ iche.',
    },
    contactPage: {
      kicker: 'Ọfịs Nnabata · Tanke, Ilorin',
      heading: 'Kọntaktị & Ajụjụ Ụlọ',
      subtitle:
        'Kpọtụrụ anyị na WhatsApp, ekwentị, ma ọ bụ email—ma ọ bụ zipu nkọwa gị n’okpuru.',
      speakTitle: 'Gwa Anyị Okwu Ozugbo',
      speakDesc:
        'Maka nzaghachi ngwa ngwa gbasara ọnọdụ ụlọ na ịkwụ ụgwọ, zitere anyị ozi na WhatsApp ma ọ bụ kpọọ anyị.',
      chatWhatsapp: 'Kpaa na WhatsApp',
      tapToCall: 'Pịa ka ị kpọọ',
      emailLabel: 'Email',
      locationLabel: 'Ebe',
      formTitle: 'Fọm Ajụjụ Ụlọ',
      formSubtitle: 'Họrọ ụlọ na ụbọchị ị chọrọ ka ị hụ ngụkọta ego ma zipu ajụjụ.',
    },
    form: {
      fullName: 'Aha Gị Zuru Ezu',
      phone: 'Nọmba Ekwentị / WhatsApp',
      email: 'Adreesị Email',
      apartment: 'Ụlọ',
      arrival: 'Ụbọchị Mbata',
      departure: 'Ụbọchị Ọpụpụ',
      guests: 'Ndị Ọbịa',
      estimatedTotal: 'Ngụkọta Ego (ewezuga ego nchedo)',
      messageLabel: 'Ozi ma ọ bụ Arịrịọ Pụrụ Iche (dịka mbupu ọdụ ụgbọ elu)',
      messagePlaceholder: 'Gwa anyị oge mbata gị ma ọ bụ ma ị chọrọ ụgbọala mbupu...',
      submitBtn: 'Zipu Ajụjụ',
      submittingBtn: 'Na-ezipu...',
      missingContact: 'Biko tinye aha gị, email, na nọmba ekwentị gị.',
    },
    footer: {
      quickLinks: 'Njikọ Ngwa Ngwa',
      ourSuites: 'Ụlọ Anyị',
      contactDesk: 'Ọfịs Kọntaktị',
      rights: 'Ikike niile echekwabara.',
      policies: 'Mbata: 2:00 PM · Ọpụpụ: 12:00 Noon · Ọnọdụ kacha nta: abalị 2',
    },
  },

  fr: {
    languageLabel: 'Langue',
    nav: {
      home: 'Accueil',
      apartments: 'Appartements',
      about: 'À propos',
      contact: 'Contact',
      bookWhatsapp: 'Réserver sur WhatsApp',
      skipToContent: 'Aller au contenu principal',
    },
    hero: {
      kicker: 'Tanke, Ilorin · Votre chez-vous loin de chez vous à Ilorin.',
      headline: 'Séjours confortables et sécurisés à Tanke, Ilorin',
      subtitle:
        'Appartements meublés modernes de 1 à 6 chambres pour voyageurs, familles et professionnels—avec sécurité 24h/24, électricité continue, eau potable et tarifs transparents en Naira.',
      exploreCta: 'Découvrir les suites',
      whatsappCta: 'Discuter sur WhatsApp',
      priceFrom: 'À partir de ₦50,000 / nuit',
      locationsSummary:
        'Six résidences privées à Tanke Main Road, Tanke Garden Close & Tanke Pool Court',
      arrival: 'Arrivée',
      departure: 'Départ',
      guests: 'Voyageurs',
      guestSingular: 'Voyageur',
      guestPlural: 'Voyageurs',
      checkApartments: 'Voir les disponibilités',
      departureError: 'La date de départ doit être postérieure à la date d’arrivée.',
    },
    why: {
      heading: 'Pourquoi choisir RockyStay Suites',
      subheading:
        'Des essentiels fiables pour un séjour serein et sans souci à Ilorin.',
      readPromise: 'Découvrir notre promesse et équipements',
      items: [
        {
          title: 'Emplacement idéal à Tanke',
          detail: 'Quartiers calmes et accessibles près d’Unilorin et du centre d’Ilorin.',
        },
        {
          title: 'Tarifs justes et clairs',
          detail: 'Prix par nuit transparents en Naira avec frais affichés d’avance.',
        },
        {
          title: 'Propreté irréprochable',
          detail: 'Linge de qualité hôtelière, salles de bain soignées et ménage dédié.',
        },
        {
          title: 'Sécurité 24h/24 et 7j/7',
          detail: 'Résidences clôturées avec éclairage et gardiennage permanent.',
        },
        {
          title: 'Électricité et eau continues',
          detail: 'Groupe électrogène, onduleur fiable et eau courante jour et nuit.',
        },
      ],
    },
    homeSections: {
      featuredHeading: 'Suites en vedette à Tanke',
      featuredSubheading:
        'Du studio cosy à la villa six chambres avec piscine, trouvez l’espace adapté à votre séjour.',
      viewAll: 'Voir les 6 appartements',
      showcaseHeading: 'À l’intérieur de nos résidences',
      showcaseSubheading:
        'Découvrez nos salons lumineux, cuisines équipées, terrasses ensoleillées et notre duplex sécurisé à Tanke.',
      poolHeading: 'Galerie Tanke Pool Court',
      poolSubheadingPrefix: 'L’accès exclusif à la piscine est inclus avec notre',
      andText: 'et',
      reviewsHeading: 'Avis de nos voyageurs',
      reviewsSubheading:
        'Témoignages vérifiés de voyageurs, familles et professionnels à Tanke, Ilorin.',
      faqHeading: 'Questions fréquentes',
      faqSubheading: 'Tout ce qu’il faut savoir avant d’envoyer votre demande.',
      seeAllFaqs: 'Voir les 9 questions',
      ctaHeading: 'Prêt pour un séjour paisible à Ilorin ?',
      ctaSubheading:
        'Calculez le coût exact de votre séjour en ligne et confirmez la disponibilité via WhatsApp ou formulaire.',
      browseAll: 'Parcourir tous les appartements',
      messageWhatsapp: 'Écrire sur WhatsApp',
    },
    card: {
      bedroom: 'chambre',
      bedrooms: 'chambres',
      upTo: 'Jusqu’à',
      guests: 'voyageurs',
      includesPool: 'Piscine incluse',
      perNight: '/ nuit',
      viewDetails: 'Voir les détails',
    },
    apartmentsPage: {
      kicker: 'Tanke, Ilorin · Six Résidences Meublées',
      heading: 'Trouvez votre appartement à Tanke',
      subtitle:
        'Filtrez par quartier à Tanke, budget par nuit en Naira et capacité d’accueil. Chaque suite inclut électricité de secours, eau, sécurité 24h/24 et Wi-Fi.',
      filterTitle: 'Filtrer les appartements',
      showing: 'Affichage de',
      of: 'sur',
      apartmentsLabel: 'appartements',
      clearFilters: 'Réinitialiser',
      locationLabel: 'Quartier à Tanke',
      allLocations: 'Tous les quartiers',
      maxPriceLabel: 'Prix max par nuit',
      minGuestsLabel: 'Nombre minimum de voyageurs',
      datesCarried: 'Dates sélectionnées',
      toText: 'au',
      flexible: 'flexible',
      noMatchTitle: 'Aucun appartement correspondant',
      noMatchBody:
        'Aucun appartement ne correspond à vos filtres. Essayez un budget plus élevé, moins de voyageurs ou réinitialisez les filtres.',
    },
    detailsPage: {
      backToAll: 'Retour aux appartements',
      maxLabel: 'Max',
      minStayLabel: 'Séjour minimum :',
      nights: 'nuits',
      expandPhoto: 'Agrandir',
      aboutSuite: 'À propos de cette suite',
      checkinLabel: 'Arrivée',
      checkinValue: 'À partir de 14h00',
      checkoutLabel: 'Départ',
      checkoutValue: 'Avant 12h00',
      rulesLabel: 'Règlement',
      rulesValue: 'Non-fumeur · Calme respecté',
      amenitiesTitle: 'Équipements inclus',
      formTitle: 'Envoyer une demande par formulaire',
      formSubtitle:
        'Vous préférez le formulaire ? Votre appartement, vos dates et le montant estimé sont pré-remplis.',
      calcTitle: 'Calculateur de séjour',
      arrivalLabel: 'Date d’arrivée',
      departureLabel: 'Date de départ',
      guestsLabel: 'Nombre de voyageurs',
      nightsCount: 'Nombre de nuits',
      roomCost: 'Coût du séjour',
      cleaningFee: 'Frais de ménage',
      serviceCharge: 'Frais de service (5% sur le séjour)',
      estimatedTotal: 'Total estimé',
      cautionTitle: 'Caution remboursable',
      cautionNote:
        'Affichée séparément et non incluse dans le total ci-dessus. Remboursée après état des lieux.',
      enquireWhatsapp: 'Demander sur WhatsApp',
      enterValidDates: 'Choisissez des dates et voyageurs valides',
      whatsappDisclaimer:
        'Ceci est une demande, pas une réservation confirmée. Nous confirmerons la disponibilité sur WhatsApp.',
    },
    aboutPage: {
      kicker: 'À propos de RockyStay Suites · Votre chez-vous à Ilorin.',
      heading: 'Des années d’accueil chaleureux à Tanke, Ilorin',
      intro:
        'RockyStay Suites accueille voyageurs, familles et professionnels à Ilorin depuis des années. Notre promesse : des séjours propres, sécurisés et confortables avec électricité et eau fiables.',
      promiseTitle: 'Notre engagement envers chaque client',
      promiseP1:
        'Que vous veniez à Ilorin pour affaires, conférence, visite familiale ou détente, vous méritez un logement accueillant dès votre arrivée.',
      promiseP2:
        'À Tanke Main Road, Tanke Garden Close et Tanke Pool Court, notre équipe prépare chaque suite avec soin, sécurité 24h/24 et énergie continue.',
      powerTitle: 'Électricité & Eau fiables',
      powerDetail:
        'Alimentation de secours fiable et eau courante propre dans les six résidences.',
      securityTitle: 'Sécurité 24h/24',
      securityDetail: 'Résidences clôturées avec gardiennage et parking privé à Tanke.',
      amenitiesTitle: 'Équipements inclus dans chaque appartement',
      amenitiesSubtitle: 'Chaque résidence RockyStay Suites est prête pour votre confort dès le premier jour :',
      pickupTitle: 'Transfert Aéroport & Gare Routière',
      pickupP1:
        'Vous arrivez à l’aéroport international d’Ilorin ou à une gare routière ? Nous organisons un accueil ponctuel sur demande.',
      pickupP2: 'Mentionnez simplement le transfert dans votre message WhatsApp ou formulaire.',
      viewAllBtn: 'Voir tous les appartements',
      contactBtn: 'Nous contacter',
      poolCourtTitle: 'Tanke Pool Court',
      poolCourtDesc:
        'Les résidents des villas 5 et 6 chambres profitent d’une piscine privée à Tanke Pool Court.',
    },
    contactPage: {
      kicker: 'Accueil Direct · Tanke, Ilorin',
      heading: 'Contact & Demandes de réservation',
      subtitle:
        'Contactez-nous par WhatsApp, téléphone ou e-mail—ou envoyez votre demande via le formulaire ci-dessous.',
      speakTitle: 'Parler à notre équipe',
      speakDesc:
        'Pour une confirmation rapide des disponibilités et du paiement, écrivez-nous sur WhatsApp ou appelez-nous.',
      chatWhatsapp: 'Discuter sur WhatsApp',
      tapToCall: 'Appeler directement',
      emailLabel: 'E-mail',
      locationLabel: 'Adresse',
      formTitle: 'Formulaire de demande',
      formSubtitle: 'Sélectionnez un appartement et vos dates pour calculer le total et envoyer votre demande.',
    },
    form: {
      fullName: 'Nom complet',
      phone: 'Téléphone / WhatsApp',
      email: 'Adresse e-mail',
      apartment: 'Appartement',
      arrival: 'Arrivée',
      departure: 'Départ',
      guests: 'Voyageurs',
      estimatedTotal: 'Total estimé (hors caution remboursable)',
      messageLabel: 'Message ou demandes particulières (ex. transfert aéroport)',
      messagePlaceholder: 'Indiquez votre heure d’arrivée ou si vous souhaitez un transfert...',
      submitBtn: 'Envoyer la demande',
      submittingBtn: 'Envoi en cours...',
      missingContact: 'Veuillez renseigner votre nom, votre e-mail et votre téléphone.',
    },
    footer: {
      quickLinks: 'Liens rapides',
      ourSuites: 'Nos suites',
      contactDesk: 'Contact',
      rights: 'Tous droits réservés.',
      policies: 'Arrivée : 14h00 · Départ : 12h00 · Séjour minimum : 2 nuits',
    },
  },
};
