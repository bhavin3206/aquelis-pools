export interface BlogPost {
  slug: string;
  id: number;
  title: string;
  category: string;
  image: string;
  time: string;
  comments: string;
  date: string;
  author: string;
  authorRole: string;
  authorAvatar: string;
  excerpt: string;
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "they-save-you-money-seasonal-maintenance-guide",
    id: 1,
    title: "They Save You Money: The Ultimate Seasonal Maintenance Guide.",
    category: "Maintenance",
    image: "/images/24_blog_posts__rectangle_10.webp",
    time: "12 mins read",
    comments: "04",
    date: "01 Sep 2026",
    author: "M. Jennifer",
    authorRole: "Senior Pool Operations Director",
    authorAvatar: "/images/02_about_us__rectangle_7.webp",
    excerpt:
      "We specialize in providing top-notch pool service and maintenance to ensure your pool remains a safe, clean, and inviting space. Discover how routine preventative care saves up to $3,500 in major equipment replacements.",
    content: [
      "Maintaining an inground or indoor pool might feel like a straightforward chore until an unexpected pump failure, algae bloom, or heater scale build-up disrupts your season. In truth, consistent maintenance is the single most effective investment a luxury pool owner can make.",
      "By scheduling regular chemical checks and equipment inspections, homeowners avoid compounding damage that causes expensive component burnouts. In this guide, our engineering team breaks down the true financial and health value of preventative pool valet service.",
      "Water balancing is not simply about keeping water clear—it is about protecting the structural integrity of your plaster, quartz, and titanium heat exchanger coils. High acidity degrades concrete shell surfaces, while unmonitored hard water leads to calcium crusting across expensive ceramic tile lines.",
      "Our recommended checklist includes weekly skimmer purification, 100% digital photometric water testing, micro-filtration backwashing, and checking the differential pressure across your main variable-speed pump lines.",
    ],
  },
  {
    slug: "essential-seasonal-care-for-outdoor-pools",
    id: 2,
    title: "Essential Seasonal Care For Your Outdoor Pool.",
    category: "Maintenance",
    image: "/images/25_blog_posts__rectangle_11.webp",
    time: "08 mins read",
    comments: "02",
    date: "15 Aug 2026",
    author: "David Vance",
    authorRole: "Technical Field Specialist",
    authorAvatar: "/images/18_our_team_members__rectangle_11.webp",
    excerpt:
      "Simple preventive steps before summer and winter save thousands in equipment wear, freeze damage, and prolonged chemical balance corrections.",
    content: [
      "As seasons transition, your outdoor pool environment undergoes rapid swings in ambient temperature, UV exposure, and organic debris accumulation. Preparing in advance prevents cracked pipes, frozen manifold blocks, and staining.",
      "Winterization in the Northeast requires blowing out suction and return lines with high-volume low-pressure air, adding non-toxic antifreeze, and fitting heavy-duty safety covers that support snow loads without bowing.",
      "When reopening in spring, slow re-commissioning of the primary circulation pump and meticulous shock treatment safeguard your plaster finish against immediate copper or iron staining caused by tap water top-offs.",
    ],
  },
  {
    slug: "choosing-the-right-filtration-system",
    id: 3,
    title: "Choosing The Right Filtration System: Sand vs. Cartridge vs. Glass Media.",
    category: "Equipment",
    image: "/images/26_blog_posts__rectangle_12.webp",
    time: "15 mins read",
    comments: "06",
    date: "28 Jul 2026",
    author: "Sarah Connor",
    authorRole: "Aquatic Systems Engineer",
    authorAvatar: "/images/17_our_team_members__rectangle_14.webp",
    excerpt:
      "Compare cartridge, silica sand, and activated recycled glass media to discover which filtration mechanism achieves the purest 3-micron water clarity with minimum chlorine.",
    content: [
      "The heart of any pristine swimming pool is its filtration apparatus. While chlorination oxidizes contaminants, the physical filter traps inert particles, dead bacteria, and microscopic dust.",
      "Traditional silica sand traps debris down to roughly 20-30 microns. Modern activated glass media improves clarity down to an astonishing 3-5 microns, requiring 30% less water for backwashing and virtually eliminating bacteria-harboring biofilms.",
      "Cartridge systems remain the preferred choice for eco-conscious residential estates without dedicated municipal backwash drains. With over 400 square feet of pleated polyester, they produce crystal reflections with zero wasted water.",
    ],
  },
  {
    slug: "chemistry-of-crystal-clarity-ph-alkalinity",
    id: 4,
    title: "The Chemistry of Crystal Clarity: Mastering pH and Total Alkalinity.",
    category: "Water Chemistry",
    image: "/images/02_about_us__rectangle_7.webp",
    time: "10 mins read",
    comments: "08",
    date: "10 Jul 2026",
    author: "Anuradha Selvi",
    authorRole: "Chief Engineer, Aquelis",
    authorAvatar: "/images/17_our_team_members__rectangle_14.webp",
    excerpt:
      "Demystifying the saturation index. Learn why cloudiness, eye irritation, and plaster scaling are completely preventable with proper buffering.",
    content: [
      "Many pool owners mistakenly attribute burning eyes or strong chemical scents to 'too much chlorine.' In more than 90% of cases, the culprit is unbuffered pH swings or high levels of chloramines.",
      "Maintaining an optimal Langelier Saturation Index (LSI) between -0.3 and +0.3 ensures your water is neither aggressive (corroding metal parts and etching plaster) nor saturated (depositing rough calcium scale along surfaces).",
      "By regulating Total Alkalinity as a shock absorber for pH, your sanitizers perform at peak efficiency, creating silky, crystal-clear water that feels revitalizing to swim in.",
    ],
  },
  {
    slug: "5-architectural-trends-modern-pools",
    id: 5,
    title: "5 Breathtaking Architectural Trends Shaping Modern Inground Pools.",
    category: "Design Trends",
    image: "/images/21_designs__featured_pools__rectangle_10.webp",
    time: "07 mins read",
    comments: "05",
    date: "22 Jun 2026",
    author: "Daniel Carter",
    authorRole: "Senior Pool Architect",
    authorAvatar: "/images/18_our_team_members__rectangle_11.webp",
    excerpt:
      "From perimeter zero-edge slots and dark quartz finishes to integrated submerged tanning ledges, explore the luxury features redefining backyards.",
    content: [
      "The aesthetic of high-end outdoor living has shifted dramatically toward architectural minimalism and seamless indoor-outdoor transitions.",
      "Perimeter-overflow slots allow water to sit completely flush with surrounding natural stone coping, producing a breathtaking mirror reflection that visually multiplies patio space.",
      "Additionally, sun shelves equipped with built-in umbrellas and Baja ledges provide an idyllic shallow lounging platform for relaxation and entertaining during warm afternoons.",
    ],
  },
  {
    slug: "variable-speed-pumps-energy-savings",
    id: 6,
    title: "Why Variable-Speed Pumps Pay for Themselves Within Two Seasons.",
    category: "Equipment",
    image: "/images/15_why_choose_us__image__rectangle_10.webp",
    time: "09 mins read",
    comments: "03",
    date: "04 Jun 2026",
    author: "Miller Jones",
    authorRole: "Lead Maintenance Specialist",
    authorAvatar: "/images/19_our_team_members__rectangle_13.webp",
    excerpt:
      "Upgrading to an inverter-driven variable speed motor reduces electrical consumption by up to 70% while circulating filtration 24/7 in whisper-quiet operation.",
    content: [
      "Traditional single-speed pool pumps run flat-out at 3,450 RPM regardless of whether you are heating, running a water feature, or gently circulating overnight.",
      "According to Affinity Laws of fluid dynamics, cutting pump speed in half reduces energy draw by up to one-eighth. Running a variable-speed pump at low RPM for longer durations provides better filtration while slashing your electric bill.",
      "Modern smart pumps can also synchronize with your smartphone or home automation setup to automatically ramp up during solar heating cycles or quiet down during patio dinner parties.",
    ],
  },
];
