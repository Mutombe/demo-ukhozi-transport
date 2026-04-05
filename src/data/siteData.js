export const designTokens = {
  heroStyle: "cinematic",
  typography: { heading: "Playfair Display", body: "DM Sans", display: "Playfair Display" },
  effects: { noise: true, glassmorphism: "none", floatingShapes: false, scrollProgress: true, meshGradient: false, gradientBorders: false, cursorGlow: false },
  animationPreset: "dramatic",
  serviceCardStyle: "overlay",
  projectGridStyle: "masonry",
  testimonialStyle: "carousel",
  statsStyle: "overlay",
  bgPattern: "none",
  homeSectionOrder: ["hero","marquee","services","portfolio","stats","about","whyChooseUs","testimonials","cta"],
};

const siteData = {
  business: {
    name: "Ukhozi Transport",
    legalName: "Ukhozi Transport",
    tagline: "Moving Zimbabwe Forward, One Load at a Time",
    description: "Ukhozi Transport provides reliable freight and logistics services across Zimbabwe and into neighbouring countries. GPS-tracked fleet, professional drivers, and a commitment to on-time delivery.",
    phone: "+263 77 100 0000",
    phoneRaw: "+263771000000",
    whatsappNumber: "263771000000",
    email: "ukhozitransport@gmail.com",
    address: "45V3+2X7, Mutare Rd, Harare, Zimbabwe",
    country: "Zimbabwe",
    city: "Harare",
    rating: 4.2,
    ratingRounded: 4,
    reviewCount: 20,
    established: "2016",
    yearsExperience: "9+",
    projectsCompleted: "5000+",
    employees: "30+",
    coordinates: { lat: -17.8292, lng: 31.0522 },
    hours: [
      { day: "Monday - Friday", time: "8:00 AM - 5:00 PM" },
      { day: "Saturday", time: "8:00 AM - 1:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.0522!3d-17.8292",
    cookieConsentKey: "ukhozi-transport-cookie-consent",
    socialLinks: { facebook: "", instagram: "#", linkedin: "#" },
  },

  navbar: { logoImage: null, logoLine1: "Ukhozi", logoLine2: "Transport" },

  hero: {
    badge: "Zimbabwe's Trusted Logistics Partner",
    titleParts: [
      { text: "WHERE CARGO " },
      { text: "MOVES", highlight: true },
      { text: " WITH PURPOSE." },
    ],
    subtitle: "5,000+ deliveries completed. 99% on-time rate. From Harare to Johannesburg, Beira to Lusaka -- Ukhozi moves what matters, when it matters.",
    ctaPrimary: "Get Started",
    ctaSecondary: "View Our Work",
    trustBadge: "5000+ Deliveries Completed",
    backgroundImages: [
      { url: "https://images.unsplash.com/photo-1570480548578-3d49ca005e67?w=1920&q=85", alt: "Dynamic hero image showcasing the business" },
      { url: "https://images.unsplash.com/photo-1494412574643-ff11b0a5eb95?w=1920&q=85", alt: "Professional work environment" },
      { url: "https://images.unsplash.com/photo-1570480548578-3d49ca005e67?w=1920&q=85", alt: "Quality results and satisfied clients" },
    ],
  },

  stats: [
    { number: "5000+", label: "Deliveries Completed" },
    { number: "8+", label: "Years Operating" },
    { number: "99%", label: "On-Time Rate" },
    { number: "5", label: "Countries Covered" },
  ],

  servicesPreview: [
    { title: "Freight Transport", desc: "Reliable road freight across Zimbabwe and into neighbouring countries. Temperature-controlled and general cargo options.", icon: "Buildings" },
    { title: "Express Delivery", desc: "Same-day and next-day delivery for time-sensitive shipments within Harare and major Zimbabwean cities.", icon: "Star" },
    { title: "Warehousing", desc: "Secure, modern warehousing facilities with inventory management systems and flexible storage terms.", icon: "Briefcase" },
    { title: "Cross-Border", desc: "Seamless cross-border logistics to South Africa, Botswana, Mozambique, and Zambia with full customs clearance.", icon: "Lightbulb" },
    { title: "Fleet Management", desc: "GPS-tracked fleet with real-time visibility. Dedicated vehicles for contract clients with predictable scheduling.", icon: "Heart" },
    { title: "Last-Mile Delivery", desc: "Efficient last-mile solutions for e-commerce, retail, and distribution clients. Proof of delivery and signature capture.", icon: "Leaf" },
  ],

  services: {
    heroTitle: "Our Services",
    heroSubtitle: "Comprehensive solutions delivered with precision and care.",
    items: [
      { title: "Freight Transport", slug: "freight-transport", desc: "Reliable road freight across Zimbabwe and into neighbouring countries. Temperature-controlled and general cargo options.", features: ["Full Truckload", "Partial Load", "Temperature Control", "Flatbed", "Hazardous Goods", "Tracking"], image: "https://images.unsplash.com/photo-1570480548578-3d49ca005e67?w=800&q=80" },
      { title: "Express Delivery", slug: "express-delivery", desc: "Same-day and next-day delivery for time-sensitive shipments within Harare and major Zimbabwean cities.", features: ["Same-Day", "Next-Day", "Timed Delivery", "Signature Required", "Insurance", "Tracking"], image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5eb95?w=800&q=80" },
      { title: "Warehousing", slug: "warehousing", desc: "Secure, modern warehousing facilities with inventory management systems and flexible storage terms.", features: ["Secure Storage", "Inventory Management", "Pick & Pack", "Cross-Docking", "Climate Control", "24/7 Access"], image: "https://images.unsplash.com/photo-1570480548578-3d49ca005e67?w=800&q=80" },
      { title: "Cross-Border", slug: "cross-border", desc: "Seamless cross-border logistics to South Africa, Botswana, Mozambique, and Zambia with full customs clearance.", features: ["Customs Clearance", "Documentation", "SA Routes", "Botswana Routes", "Mozambique", "Zambia"], image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5eb95?w=800&q=80" },
      { title: "Fleet Management", slug: "fleet-management", desc: "GPS-tracked fleet with real-time visibility. Dedicated vehicles for contract clients with predictable scheduling.", features: ["GPS Tracking", "Real-Time Updates", "Dedicated Vehicles", "Scheduling", "Reporting", "Maintenance"], image: "https://images.unsplash.com/photo-1570480548578-3d49ca005e67?w=800&q=80" },
      { title: "Last-Mile Delivery", slug: "last-mile-delivery", desc: "Efficient last-mile solutions for e-commerce, retail, and distribution clients. Proof of delivery and signature capture.", features: ["E-Commerce", "Retail", "Proof of Delivery", "Signature", "SMS Alerts", "Returns"], image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5eb95?w=800&q=80" },
    ],
  },

  projects: {
    heroTitle: "Our Portfolio",
    heroSubtitle: "A selection of our finest work across Harare and beyond.",
    items: [
      { title: "The Signature Project", slug: "the-signature-project", category: "Freight", location: "Harare, Zimbabwe", desc: "A showcase of our commitment to quality and client satisfaction.", client: "Private Client", services: ["Freight Transport", "Express Delivery"], image: "https://images.unsplash.com/photo-1570480548578-3d49ca005e67?w=800&q=80", images: ["https://images.unsplash.com/photo-1570480548578-3d49ca005e67?w=800&q=80", "https://images.unsplash.com/photo-1494412574643-ff11b0a5eb95?w=800&q=80"] },
      { title: "Heritage Collection", slug: "heritage-collection", category: "Express", location: "Harare, Zimbabwe", desc: "A showcase of our commitment to quality and client satisfaction.", client: "Private Client", services: ["Freight Transport", "Express Delivery"], image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5eb95?w=800&q=80", images: ["https://images.unsplash.com/photo-1494412574643-ff11b0a5eb95?w=800&q=80", "https://images.unsplash.com/photo-1570480548578-3d49ca005e67?w=800&q=80"] },
      { title: "Modern Edge", slug: "modern-edge", category: "Cross-Border", location: "Harare, Zimbabwe", desc: "A showcase of our commitment to quality and client satisfaction.", client: "Private Client", services: ["Freight Transport", "Express Delivery"], image: "https://images.unsplash.com/photo-1570480548578-3d49ca005e67?w=800&q=80", images: ["https://images.unsplash.com/photo-1570480548578-3d49ca005e67?w=800&q=80", "https://images.unsplash.com/photo-1494412574643-ff11b0a5eb95?w=800&q=80"] },
      { title: "The Milestone", slug: "the-milestone", category: "Warehousing", location: "Harare, Zimbabwe", desc: "A showcase of our commitment to quality and client satisfaction.", client: "Private Client", services: ["Freight Transport", "Express Delivery"], image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5eb95?w=800&q=80", images: ["https://images.unsplash.com/photo-1494412574643-ff11b0a5eb95?w=800&q=80", "https://images.unsplash.com/photo-1570480548578-3d49ca005e67?w=800&q=80"] },
      { title: "Precision Series", slug: "precision-series", category: "Freight", location: "Harare, Zimbabwe", desc: "A showcase of our commitment to quality and client satisfaction.", client: "Private Client", services: ["Freight Transport", "Express Delivery"], image: "https://images.unsplash.com/photo-1570480548578-3d49ca005e67?w=800&q=80", images: ["https://images.unsplash.com/photo-1570480548578-3d49ca005e67?w=800&q=80", "https://images.unsplash.com/photo-1494412574643-ff11b0a5eb95?w=800&q=80"] },
      { title: "The Showcase", slug: "the-showcase", category: "Express", location: "Harare, Zimbabwe", desc: "A showcase of our commitment to quality and client satisfaction.", client: "Private Client", services: ["Freight Transport", "Express Delivery"], image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5eb95?w=800&q=80", images: ["https://images.unsplash.com/photo-1494412574643-ff11b0a5eb95?w=800&q=80", "https://images.unsplash.com/photo-1570480548578-3d49ca005e67?w=800&q=80"] },
    ],
  },

  homeTestimonials: [
    { text: "They have handled our freight for five years. 99% on-time delivery -- you cannot argue with that record.", name: "Tendai Moyo", role: "Operations Manager", rating: 5, avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" },
    { text: "Our retail chain relies on their express delivery for stock replenishment. Absolutely dependable service.", name: "James Karonga", role: "Retail Chain Director", rating: 5, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" },
    { text: "Cross-border shipments to South Africa used to be a nightmare until we switched to them. Customs clearance handled perfectly.", name: "Grace Chikwanha", role: "Import/Export", rating: 5, avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80" },
    { text: "Their warehousing and distribution solved our inventory management challenges. The system is seamless.", name: "Robert Mugwagwa", role: "Warehouse Manager", rating: 5, avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80" },
  ],

  reviews: {
    heroTitle: "Client Voices",
    heroSubtitle: "Hear from the people who trust us with their most important projects.",
    items: [
      { text: "They have handled our freight for five years. 99% on-time delivery -- you cannot argue with that record.", name: "Tendai Moyo", role: "Operations Manager", rating: 5 },
      { text: "Our retail chain relies on their express delivery for stock replenishment. Absolutely dependable service.", name: "James Karonga", role: "Retail Chain Director", rating: 5 },
      { text: "Cross-border shipments to South Africa used to be a nightmare until we switched to them. Customs clearance handled perfectly.", name: "Grace Chikwanha", role: "Import/Export", rating: 5 },
      { text: "Their warehousing and distribution solved our inventory management challenges. The system is seamless.", name: "Robert Mugwagwa", role: "Warehouse Manager", rating: 5 },
      { text: "Same-day delivery for our e-commerce orders has transformed our customer satisfaction scores.", name: "Nyasha Karimanzira", role: "E-Commerce Founder", rating: 5 },
      { text: "The GPS tracking gives us complete visibility. We always know where our cargo is and when it will arrive.", name: "David Chigumira", role: "Manufacturing Director", rating: 5 },
    ],
  },

  about: {
    heroTitle: "Our Story",
    heroSubtitle: "Built on expertise. Driven by passion. Trusted by Harare.",
    story: [
      "Ukhozi Transport was founded in 2016 with a fleet of three trucks and a determination to bring reliability to Zimbabwe's logistics industry. The name Ukhozi -- meaning 'eagle' in Ndebele -- reflects our commitment to precision and vision.",
      "Today our GPS-tracked fleet handles everything from local deliveries to cross-border freight, serving clients who demand reliability, transparency, and professional service.",
    ],
    values: [
      { title: "Quality First", desc: "We never compromise on the quality of our work or materials." },
      { title: "Client Focused", desc: "Every decision starts with what is best for the client." },
      { title: "Professional Excellence", desc: "Our team brings expertise and dedication to every project." },
      { title: "Integrity Always", desc: "Transparent pricing, honest advice, and reliable service." },
    ],
    team: [
      { name: "The Founder", role: "Managing Director", bio: "With over a decade of industry experience, our founder built Ukhozi Transport on a foundation of quality and trust.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
      { name: "Operations Lead", role: "Head of Operations", bio: "Ensuring every project runs smoothly from start to finish with meticulous planning and execution.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
      { name: "Technical Director", role: "Lead Specialist", bio: "Deep technical expertise combined with creative problem-solving drives innovation across all projects.", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80" },
    ],
  },

  careers: {
    heroTitle: "Join Our Team",
    heroSubtitle: "We are always looking for talented people who share our passion for excellence.",
    positions: [
      { title: "Junior Specialist", department: "Operations", location: "Harare", type: "Full-time", desc: "Join our growing team and develop your skills under experienced mentors." },
    ],
  },

  contact: {
    heroTitle: "Get In Touch",
    heroSubtitle: "Ready to start? We would love to hear from you.",
    branches: [
      { name: "Harare Office", address: "45V3+2X7, Mutare Rd, Harare, Zimbabwe", phone: "+263 77 100 0000", email: "ukhozitransport@gmail.com" },
    ],
  },

  homeCta: {
    title: "MOVE YOUR\nCARGO",
    subtitle: "Every great project begins with a conversation. Tell us what you need, and let us show you what is possible.",
    ctaPrimary: "Get Started",
    ctaSecondary: "Chat on WhatsApp",
    whatsappText: "Hello Ukhozi Transport! I would like to discuss a project.",
    backgroundImage: "https://images.unsplash.com/photo-1570480548578-3d49ca005e67?w=1920&q=85",
  },

  footer: {
    description: "Ukhozi Transport provides reliable freight and logistics services across Zimbabwe and into neighbouring countries. GPS-t...",
    copyright: "Ukhozi Transport",
  },
};

export default siteData;
