import { Skill, Service, Project, Experience, Certification, Testimonial } from "./types";

export const skillsData: Skill[] = [
  {
    name: "Digital Marketing",
    category: "Marketing",
    level: 95,
    iconName: "Megaphone",
    description: "Paid social campaigns, full-funnel strategy, customer journey design, and conversion optimization."
  },
  {
    name: "SEO Optimization",
    category: "Strategy & Analytics",
    level: 92,
    iconName: "Search",
    description: "On-page, technical auditing, search ranking strategies, and structural keyword research."
  },
  {
    name: "Website Design",
    category: "Design & Tech",
    level: 90,
    iconName: "Layout",
    description: "High-performance, elegant custom websites with visual transitions and layout flows."
  },
  {
    name: "WordPress Development",
    category: "Design & Tech",
    level: 88,
    iconName: "Globe",
    description: "Building responsive, flexible business sites, portfolio hubs, and custom Gutenberg blocks."
  },
  {
    name: "Shopify Storefronts",
    category: "Design & Tech",
    level: 85,
    iconName: "ShoppingBag",
    description: "Bespoke e-commerce setup, conversions optimization, and custom liquid sections."
  },
  {
    name: "Google Analytics 4 (GA4)",
    category: "Strategy & Analytics",
    level: 88,
    iconName: "BarChart3",
    description: "Advanced custom goal event logs, user journey setups, and ROI tracking dashboards."
  },
  {
    name: "Social Media Marketing",
    category: "Marketing",
    level: 91,
    iconName: "Share2",
    description: "Organic community building, viral visual hooks, and interactive engagement loops."
  },
  {
    name: "Influencer Marketing",
    category: "Marketing",
    level: 86,
    iconName: "Users",
    description: "KOL selection, campaign co-ordination, and ROI attribution modeling."
  },
  {
    name: "Graphic Design (Figma & PS)",
    category: "Design & Tech",
    level: 82,
    iconName: "Palette",
    description: "Elegant typography pairings, custom branding visual elements, and modern layout design."
  },
  {
    name: "Creative Content Writing",
    category: "Marketing",
    level: 89,
    iconName: "PenTool",
    description: "Persuasive copywriting, conversion landing pages, and long-form SEO articles."
  },
  {
    name: "Meta & Google Ads",
    category: "Strategy & Analytics",
    level: 86,
    iconName: "Target",
    description: "Targeted audience segments setup, custom/lookalike pools, and A/B ad creative tests."
  },
  {
    name: "E-Commerce Management",
    category: "Strategy & Analytics",
    level: 87,
    iconName: "TrendingUp",
    description: "Cart optimization, upsells, cart retrieval automation, and customer experience scaling."
  }
];

export const servicesData: Service[] = [
  {
    id: "web-design",
    title: "Premium Website Design",
    description: "Crafting beautiful website layouts on WordPress and Shopify with high-performance responsive styling, outstanding layout flows, and clean typography designed to convert your target visitors.",
    iconName: "Cpu",
    features: ["Responsive Desktop & Mobile Layouts", "WordPress Custom Site Building", "Shopify Store Setup & Conversions Design", "SEO-ready code architecture"],
    deliverables: ["Full live website", "Admin training session", "Performance speed score optimizer", "30 days support & maintenance"]
  },
  {
    id: "seo-growth",
    title: "Search Engine Optimization (SEO)",
    description: "Propelling your website to Page #1 of Google to generate high-intent organic traffic that drives leads and phone queries. Full technical, on-page, and keyword architecture restructuring.",
    iconName: "LineChart",
    features: ["Deep Competitor Crawl Analysis", "Technical Core Web Vitals Auditing", "Custom Keyword Strategy Mapping", "On-page optimization & content mapping"],
    deliverables: ["Comprehensive SEO Audit Report", "Keyword Strategy Plan", "Optimized Page Titles & H1 Schema", "Monthly Performance Tracking Report"]
  },
  {
    id: "social-media",
    title: "Social Media Strategy & SMM",
    description: "Unlocking organic growth and establishing brand authority on Instagram and LinkedIn. Crafting visually stunning posts and content writing designed to spark real engagement.",
    iconName: "Sparkles",
    features: ["LinkedIn & Instagram Organic Funneling", "Visual Aesthetic Grid Styling", "High-conversion Copywriting & Hooks", "Monthly Content Calendar Scheduling"],
    deliverables: ["Interactive Visual Grid Layout", "Scheduled High-Quality Posts", "Active Stories & Reel Hooks Plan", "Monthly Engagement Analytics Insights"]
  },
  {
    id: "ecommerce-strategy",
    title: "E-Commerce Scaling & Operations",
    description: "Re-engineering store checkout sequences, implementing post-purchase upsells, active cart recovery flows, and organizing strategic customer campaigns that elevate average order value (AOV).",
    iconName: "ShoppingBag",
    features: ["Shopify Frictionless UX Audits", "Automated Klaviyo/Email Marketing retention", "Conversion Rate Optimization (CRO)", "Product Page copy revisions"],
    deliverables: ["Store UX Audit Blueprint", "Custom Email Automation setups", "A/B Testing Outline for product pages", "Sales funnel analysis scorecard"]
  }
];

export const projectsData: Project[] = [
  {
    id: "proj-1",
    category: "E-commerce",
    title: "LuxApparel Shopify Transformation",
    description: "A complete visual and functional redesign of a premium fashion retailer, focus on frictionless checkout and catalog discovery.",
    longDescription: "LuxApparel's desktop to mobile user experience felt heavily fragmented, leading to a massive 76% cart abandonment rate. I completely reconfigured their homepage structure, product description flow, added visual size guide triggers, fast payment routes, and dynamic bundle packages.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
    tools: ["Shopify Admin", "Custom CSS", "Figma Design", "Klaviyo Flows"],
    role: "Lead E-Commerce Developer & CRO Specialist",
    results: [
      "Cart abandonment rate slashed by 34%",
      "E-commerce conversion rate went from 1.4% to 3.2% in 45 days",
      "Average Order Value (AOV) increased by 18% with smart bundling"
    ],
    link: "https://shopify.com",
    featured: true
  },
  {
    id: "proj-2",
    category: "SEO",
    title: "Organic Scale-up: HyperGrowth SaaS",
    description: "An intensive on-page and semantic keyword optimization sprint that unlocked a massive surge in Google clicks for an emerging client-onboarding tool.",
    longDescription: "The brand struggled with low visibility across high-intent queries. I carried out a complete crawl diagnostics audit, fixed broken canonical paths, mapped out 15 high-value structural content outline hubs, and rewrote metadata with programmatic targeted hooks.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    tools: ["Google Search Console", "Ahrefs", "Google Analytics", "Screaming Frog"],
    role: "SEO Strategist & Auditor",
    results: [
      "320% jump in organic monthly visits in 90 days",
      "Secured #1 Spot for 18 highly competitive commercial keywords",
      "Technical Core Web Vitals overall health score boosted to 98/100"
    ],
    link: "https://google.com/search",
    featured: true
  },
  {
    id: "proj-3",
    category: "Social Media",
    title: "The Urban Roast: Viral Cafe Drive",
    description: "Curated a cohesive lifestyle visual grid and deployed high-converting localized influencer briefs resulting in fully-booked weekends.",
    longDescription: "Urban Roast sought to target young urban coffee connoisseurs. I planned an aesthetic feed relaunch, co-ordinated direct collaborations with 12 local food micro-influencers, designed custom coffee story challenges, and established continuous localized social media tagging sweeps.",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800",
    tools: ["Instagram Creator Tools", "Canva Pro", "CapCut Editor", "Buffer Scheduler"],
    role: "SMM & Influencer Coordinator",
    results: [
      "Organic Instagram followers counts expanded by 4,200+ in 4 weeks",
      "Cafe weekend walk-ins grew by 48% with direct campaign-attribution codes",
      "Achieved a top 9.8% viral social engagement rate benchmark on launch Reels"
    ],
    link: "https://instagram.com",
    featured: true
  },
  {
    id: "proj-4",
    category: "Web Design",
    title: "AlphaConsult - WordPress Agency Redesign",
    description: "Engineered a high-speed corporate agency website with custom-styled dynamic case study blocks and streamlined lead capture forms.",
    longDescription: "AlphaConsult in India needed a visual identity that radiated high trust and absolute competence. I engineered their new layout using custom Gutenberg components, prioritizing lightning-fast loading speed and extremely smooth typography hierarchies.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    tools: ["WordPress", "Elementor Pro", "Custom JavaScript", "WP Rocket"],
    role: "UI/UX Designer & Web Developer",
    results: [
      "Page load time reduced from 5.4 seconds to 1.3 seconds",
      "Direct inbound consultation requests increased by 65% on booking pages",
      "Fully responsive and mobile friendly cross-browser optimization verified"
    ],
    link: "https://wordpress.org",
    featured: false
  },
  {
    id: "proj-5",
    category: "Branding",
    title: "Brand Strategy: Zero-Waste Soap Co.",
    description: "Designed the market positioning handbook, voice style guides, and package copywriting for an eco-friendly D2C bodycare start-up.",
    longDescription: "Zero-Waste Soap Co. had high-quality organic items but struggled to stand out in a saturated marketplace. I designed an interactive competitor positioning map, established a friendly yet deeply eco-conscious tone-of-voice standard, and crafted highly memorable packaging microcopy.",
    image: "https://images.unsplash.com/photo-1546554137-f86b9593a222?auto=format&fit=crop&q=80&w=800",
    tools: ["Figma Branding", "Copywriting", "Competitor Matrix Systems", "Brand Persona Deck"],
    role: "Branding & Copywriting Partner",
    results: [
      "Successfully launched the brand identity across digital marketplaces",
      "Cohesive brand tone cited in 4 key e-commerce product reviews",
      "Product landing page click-to-cart rate scaled by 22% due to improved copy trust"
    ],
    link: "#",
    featured: false
  }
];

export const experienceData: Experience[] = [
  {
    id: "exp-1",
    role: "Digital Marketing & SEO Associate",
    company: "GrowthPioneers Digital Agency",
    period: "Nov 2025 - Present",
    type: "Internship",
    location: "Mumbai, India",
    description: [
      "Formulated and implemented structured SEO strategy roadmaps for high-growth local business portals.",
      "Audited technical schema markups and indexed over 1,500+ dormant high-value search terms.",
      "Conducted detailed monthly performance audits for 8 active clients using GA4 and Google Search Console.",
      "Assisted senior project leads in drafting custom brief guidelines for localized Instagram micro-influencer outreach."
    ],
    skillsAquired: ["Technical SEO Schema", "GA4 Configuration", "Competitor Backlink Audits", "Client Communication"]
  },
  {
    id: "exp-2",
    role: "Independent Website Designer & Marketer",
    company: "Freelance Creative Solutions",
    period: "Mar 2024 - Oct 2025",
    type: "Freelance",
    location: "Remote / Hybrid",
    description: [
      "Engineered high-converting Shopify single-product pages and styled multi-category WordPress sites.",
      "Configured customized pixels tracking, Facebook custom audience pools, and e-commerce cart abandonment retrieval flows.",
      "Authored 30+ fully researched, rank-optimized, SEO blog posts and service catalog copy.",
      "Delivered customized analytics setups enabling business founders to easily track direct user referral networks."
    ],
    skillsAquired: ["Shopify Customizations", "WordPress Mastery", "E-commerce Conversions Designing", "Conversion Copywriting"]
  },
  {
    id: "exp-3",
    role: "Media Strategist & Campaign Partner",
    company: "Student Engagement Chapter - B.Com Digital Business",
    period: "Jul 2024 - Mar 2025",
    type: "Leadership",
    location: "Mumbai, India",
    description: [
      "Spearheaded complete digital outreach and organic promotion schedules for major digital business events.",
      "Created eye-catching interactive story templates and coordinated micro-promos on YouTube Reels.",
      "Managed digital campaign logistics, scaling student-body event attendance figures to historical records of 800+ participants."
    ],
    skillsAquired: ["Organic Campaign Outlines", "Video Editing Basics", "Event Marketing Strategies", "Project Timeline Planning"]
  }
];

export const certificationsData: Certification[] = [
  {
    id: "cert-1",
    title: "Comprehensive Digital Marketing Program Certified",
    issuer: "IIDE — Indian Institute of Digital Education",
    date: "Aug 2025",
    skillsVerified: ["SEO/SEM", "Content Strategy", "E-commerce Management", "Meta Ads Manager", "SMM Funnels"],
    badgeColor: "border-blue-500/20 bg-blue-50/50 text-blue-700"
  },
  {
    id: "cert-2",
    title: "Google Analytics 4 (GA4) Individual Qualification",
    issuer: "Google",
    date: "Sep 2025",
    skillsVerified: ["Audience Segments Design", "Custom Conversion Events", "User Flow Diagnostics", "Tag Manager Triggering"],
    badgeColor: "border-amber-500/20 bg-amber-50/50 text-amber-700"
  },
  {
    id: "cert-3",
    title: "Google Search Ads Professional Certification",
    issuer: "Google",
    date: "Oct 2025",
    skillsVerified: ["Paid Campaign ROI Optimization", "Bidding Automation Strategies", "Negative Keywords Auditing"],
    badgeColor: "border-emerald-500/20 bg-emerald-50/50 text-emerald-700"
  },
  {
    id: "cert-4",
    title: "Shopify Foundations Specialist Certified",
    issuer: "Shopify Academy",
    date: "Jun 2025",
    skillsVerified: ["Store Layout Configurations", "Checkout Conversions Mechanics", "E-commerce App Systems Setup"],
    badgeColor: "border-green-500/20 bg-green-50/50 text-green-700"
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: "test-1",
    name: "Devansh Shah",
    designation: "Founder",
    company: "AttireCo Private Ltd.",
    feedback: "Sahil completely transformed our brand's storefront. He analyzed our product checkout bottleneck, re-arranged the cart flow, and rewrote the product bullet highlights. Our direct storefront conversion rate rose from 1.2% to 3.4% in less than 30 days. He has fantastic communication and structural knowledge of e-commerce strategy.",
    avatarSeed: "ds"
  },
  {
    id: "test-2",
    name: "Priya Mehta",
    designation: "Marketing Coordinator",
    company: "HealthRoute Wellness",
    feedback: "His SEO and ranking process is outstanding. Instead of giving us vague metrics, Sahil mapped out clear visual charts, executed systematic technical crawling diagnostics, and mapped the correct target keywords. Within three months, our Google clicks surged exponentially. Highly recommended for any marketing or internship role!",
    avatarSeed: "pm"
  },
  {
    id: "test-3",
    name: "Amit Sharma",
    designation: "Founder & Chief Brewer",
    company: "CozyCafe Roasters",
    feedback: "Having worked with Sahil for our micro-influencer drive, we were astonished by his drive and planning. He created structured visual briefs, located influencers matching our demographic exactly, and managed communication. Absolute superstar who understands young marketing and content creation.",
    avatarSeed: "as"
  }
];
