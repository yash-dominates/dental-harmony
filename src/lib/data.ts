import heroClinicImg from "@/assets/hero-clinic.jpg";

// Cloudinary base helper — auto format & quality
const C = (path: string) =>
  `https://res.cloudinary.com/dahbztfej/image/upload/w_900,c_limit,f_auto,q_auto/${path}`;

/** Resize any Cloudinary URL from this helper to a max width */
export const sized = (url: string, w: number) =>
  url.replace(/w_\d+,c_limit/, `w_${w},c_limit`);

export const IMAGES = {
  // New Cloudinary assets
  heroBg: heroClinicImg,
  aboutClinic: C("v1776827301/A_bright__clinical_202604220822_xywmzd.jpg"),
  teethCleaningFeature: C("v1776827227/teeth_cleaning_bdlqws.jpg"),
  veneersFeature: C("v1776827008/feature_veenerners_owezrz.jpg"),
  implantFeature: C("v1776831054/pexels-karola-g-6627318_facizx.jpg"),
  implantService: C("v1776827403/5_grwfbw.jpg"),
  bracesService: C("v1776827433/dental_implants_vdgttn.jpg"),
  smileDesign: C("v1776827484/pexels-nadezhda-moryak-7800560_prcxkh.jpg"),
  whiteningService: C("v1776831054/pexels-karola-g-6627318_facizx.jpg"),
  scalingService: C("v1776827636/pexels-karola-g-6627479_t2fv01.jpg"),
  resultsTeeth: C("v1776827789/pexels-arvind-philomin-187831830-12148417_wie3ak.jpg"),
  resultsImplant: C("v1776827755/dental_implants_qqsdgu.jpg"),
  smileMakeover: C("v1776827797/pexels-iamluisao-12917374_mhirc4.jpg"),
  galleryEquipment: C("v1776828062/Sterile_equipment_sgt5z5.jpg"),
  galleryLounge: C("v1776828411/patient_launge_g8ypfc.jpg"),
  gallerySmileResult: C("v1776832108/smile_result_cuyy0s.jpg"),

  // Existing Unsplash placeholders kept for unspecified slots
  doctor1: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80",
  doctor2: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80",
  doctor3: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=600&q=80",
  treatment1: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=800&q=80",
  treatment2: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&q=80",
  clinic: "https://images.unsplash.com/photo-1629909614088-a5a74bfac6c9?w=800&q=80",
  patient: "https://images.unsplash.com/photo-1587606725418-acf3dc9c2e45?w=800&q=80",
  rct: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=800&q=80",
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#location" },
];

export const HERO_DOCTORS = [
  { name: "Dr. Aakash Sharma", title: "BDS, MDS · Implantologist", years: "12 Years", rating: "4.9", img: IMAGES.doctor1 },
  { name: "Dr. Priya Mehta", title: "BDS · Cosmetic Dentistry", years: "8 Years", rating: "4.9", img: IMAGES.doctor2 },
  { name: "Dr. Rahul Verma", title: "MDS · Orthodontist", years: "10 Years", rating: "5.0", img: IMAGES.doctor3 },
];

export const HERO_PILLS = [
  "Dental Checkups",
  "Teeth Cleaning",
  "Tooth Filling",
  "Gum Treatment",
  "Retainers",
  "Root Canal",
];

export const SERVICES = [
  {
    title: "Dental Implants",
    tagline: "Designed for Strength & Natural Comfort",
    bullets: ["Permanent titanium post", "Crown that looks natural", "Best for missing teeth"],
    image: IMAGES.implantService,
    alt: "Dental implant procedure",
    accent: "teal",
  },
  {
    title: "Comfortable Dentures",
    tagline: "Natural-Looking Smile Restoration",
    bullets: ["Full & partial options", "Custom-fit comfort", "Improved speech & eating"],
    image: IMAGES.treatment2,
    alt: "Comfortable dentures fitting",
    accent: "coral",
  },
  {
    title: "Root Canal (RCT)",
    tagline: "Pain-Relieving, Tooth-Saving",
    bullets: ["Removes infection", "Preserves natural tooth", "Painless modern technique"],
    image: IMAGES.rct,
    alt: "Root canal treatment",
    accent: "purple",
  },
  {
    title: "Tooth Fillings",
    tagline: "Quick Cavity Repair",
    bullets: ["Tooth-coloured composite", "Durable, long-lasting", "Stops decay spread"],
    image: IMAGES.treatment1,
    alt: "Tooth filling procedure",
    accent: "amber",
  },
  {
    title: "Braces & Aligners",
    tagline: "Alignment Correction",
    bullets: ["Metal braces & invisible aligners", "Teens & adults", "Personalised plan"],
    image: IMAGES.bracesService,
    alt: "Dental braces and clear aligners",
    accent: "emerald",
  },
  {
    title: "Smile Design",
    tagline: "Cosmetic Dentistry Redefined",
    bullets: ["Veneers & whitening", "Gum contouring", "Total smile makeover"],
    image: IMAGES.smileDesign,
    alt: "Smile design cosmetic dentistry",
    accent: "pink",
  },
  {
    title: "Teeth Whitening",
    tagline: "Brighter Smiles in 1 Visit",
    bullets: ["Professional-grade", "Safe & gentle", "Instant visible results"],
    image: IMAGES.whiteningService,
    alt: "Professional teeth whitening treatment",
    accent: "blue",
  },
  {
    title: "Scaling & Cleaning",
    tagline: "Gum Health Maintenance",
    bullets: ["Removes plaque & tartar", "Prevents gum disease", "Bright, healthy smile"],
    image: IMAGES.scalingService,
    alt: "Dental scaling and cleaning procedure",
    accent: "orange",
  },
];

export const DOCTORS = [
  {
    name: "Dr. Aakash Sharma",
    specialty: "Implantologist",
    qual: "BDS, MDS",
    years: "12",
    rating: "4.9",
    bio: "Specialist in advanced dental implants and full-mouth rehabilitation with over a decade of experience.",
    image: IMAGES.doctor1,
  },
  {
    name: "Dr. Priya Mehta",
    specialty: "Cosmetic Dentistry",
    qual: "BDS",
    years: "8",
    rating: "4.9",
    bio: "Smile-design expert known for porcelain veneers and minimally-invasive aesthetic transformations.",
    image: IMAGES.doctor2,
  },
  {
    name: "Dr. Rahul Verma",
    specialty: "Orthodontist",
    qual: "MDS",
    years: "10",
    rating: "5.0",
    bio: "Certified orthodontist treating teens and adults with modern braces and clear aligner systems.",
    image: IMAGES.doctor3,
  },
];

export const REVIEWS = [
  {
    name: "Ankit Jain",
    initial: "A",
    stars: 4,
    title: "Clean Clinic & Advanced Technology",
    text: "The clinic is well-equipped with modern technology and maintains high hygiene standards. The treatment was quick and completely painless.",
  },
  {
    name: "Rahul Sharma",
    initial: "R",
    stars: 5,
    title: "Excellent Dental Experience",
    text: "I had a great experience. The doctor explained everything clearly and the treatment was completely painless. Highly recommended.",
  },
  {
    name: "Priya Verma",
    initial: "P",
    stars: 5,
    title: "Professional & Caring Staff",
    text: "The clinic is very clean and the staff is very supportive. My root canal treatment was smooth and comfortable.",
  },
  {
    name: "Sneha Kapoor",
    initial: "S",
    stars: 5,
    title: "Best Dentist in Noida",
    text: "From the moment I walked in I felt at ease. Dr. Priya designed a smile makeover that exceeded my expectations.",
  },
];

export const FAQS = [
  { q: "Is RCT a painful procedure?", a: "Modern techniques ensure the procedure is comfortable and manageable. Most patients experience minimal discomfort." },
  { q: "When should I go for scaling?", a: "Every 6 months for healthy gums. More frequently if you have gum disease or heavy tartar buildup." },
  { q: "How durable are dental implants?", a: "With proper care, implants can last a lifetime. They're made of biocompatible titanium that fuses with the bone." },
  { q: "Are treatments expensive?", a: "We offer transparent pricing with EMI options. Most treatments are covered under insurance. Call us for a free estimate." },
  { q: "What age is right for braces?", a: "Orthodontic treatment works at any age. Teenage years are ideal, but adults achieve great results too." },
  { q: "How long does teeth whitening last?", a: "Professional whitening lasts 1–2 years with proper care. Touch-up sessions help maintain results." },
];

export const BLOG_POSTS = [
  {
    title: "Dental Implants vs Dentures",
    excerpt: "Learn the differences between implants and dentures to choose the best solution for replacing missing teeth.",
    date: "March 24, 2026",
    image: IMAGES.implantService,
    alt: "Dental implants vs dentures comparison",
    dark: false,
  },
  {
    title: "Tips to Prevent Tooth Decay",
    excerpt: "Limit sugary foods, brush regularly, and visit your dentist for checkups to prevent cavities.",
    date: "March 19, 2026",
    image: IMAGES.resultsTeeth,
    alt: "Healthy teeth and dental care tips",
    dark: true,
  },
  {
    title: "Why Gum Health is Important",
    excerpt: "Healthy gums are the foundation of strong teeth. Early care can prevent bleeding, infections, and tooth loss.",
    date: "March 17, 2026",
    image: IMAGES.scalingService,
    alt: "Healthy gums and teeth",
    dark: false,
  },
];

export const VIDEO_TESTIMONIALS = [
  { title: "Full Mouth Implant: Before & After", date: "Mar 12", image: IMAGES.implantService, alt: "Full mouth implant before and after" },
  { title: "Root Canal — No Pain With Modern Tech", date: "Mar 08", image: IMAGES.rct, alt: "Root canal pain-free treatment" },
  { title: "Smile Makeover in 5 Days", date: "Feb 26", image: IMAGES.smileMakeover, alt: "Patient smile makeover result" },
  { title: "Patient Shares Honest Review", date: "Feb 19", image: IMAGES.smileMakeover, alt: "Happy dental patient review" },
];

export const GALLERY = [
  { src: IMAGES.galleryEquipment, w: "15%", caption: "Sterile equipment", alt: "Sterile dental equipment" },
  { src: IMAGES.galleryLounge, w: "25%", caption: "Patient lounge", alt: "Comfortable patient lounge at Noida Dental Care" },
  { src: IMAGES.treatment1, w: "25%", caption: "Treatment room", alt: "Treatment room in progress" },
  { src: IMAGES.doctor1, w: "20%", caption: "Doctor consult", alt: "Doctor consulting with patient" },
  { src: IMAGES.gallerySmileResult, w: "15%", caption: "Smile result", alt: "Patient smile result after dental treatment" },
];

export const TREATMENTS = [
  "Teeth Cleaning",
  "Root Canal",
  "Dental Implants",
  "Braces & Aligners",
  "Teeth Whitening",
  "Smile Design",
  "Scaling",
  "Dental Checkup",
  "Other",
];

export const TIME_SLOTS = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
];

export const WHATSAPP_NUMBER = "917982569724";
