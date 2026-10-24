import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { ArrowRight, CalendarDays, ChevronDown, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { HERO_DOCTORS, HERO_PILLS, IMAGES } from "@/lib/data";

const HEADLINE = ["A", "brighter", "smile,", "starts", "here."];

const TealSparkle = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
  </svg>
);

const Hero = () => {
  const [doctorIdx, setDoctorIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setDoctorIdx((i) => (i + 1) % HERO_DOCTORS.length), 4000);
    return () => clearInterval(t);
  }, []);

  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], [0, 75]);
  const trustOpacity = useTransform(scrollY, [0, 180], [1, 0]);

  const doctor = HERO_DOCTORS[doctorIdx];

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-navy min-h-[100vh] flex flex-col justify-between"
    >
      {/* Background image with subtle parallax & warm daylight lighting */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 w-full h-[115%] -top-[5%] pointer-events-none"
      >
        <img
          src={IMAGES.heroBg}
          alt="Modern dental clinic interior — Noida Dental Care"
          loading="eager"
          decoding="async"
          // @ts-expect-error - fetchpriority is a valid HTML attribute
          fetchpriority="high"
          className="w-full h-full object-cover object-[74%_center] md:object-center"
          style={{ filter: "contrast(1.05) saturate(1.1) brightness(0.88)" }}
        />
      </motion.div>

      {/* Cinematic gradient shade on the left for maximum text contrast */}
      <div aria-hidden="true" className="hero-left-shade" />

      {/* Main Hero Content */}
      <div
        className="relative z-10 flex items-center min-h-[100vh] pt-24 sm:pt-28 md:pt-24 pb-16 sm:pb-20 md:pb-20"
        style={{ contain: "layout", filter: "drop-shadow(0 1px 6px rgba(0,0,0,0.35))" }}
      >
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-7 max-w-2xl text-white relative z-20">
            {/* Eyebrow Label matching Image 3 & 5 */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 font-label text-xs uppercase tracking-[0.15em] text-white/90"
            >
              <TealSparkle className="w-3.5 h-3.5 text-teal" />
              <span>Advanced Dental Care</span>
            </motion.div>

            {/* Headline matching user requested image */}
            <h1
              className="font-heading italic text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.08] tracking-[-0.02em] mt-3 sm:mt-4 md:mt-5"
              style={{
                textShadow:
                  "0 2px 14px rgba(0,0,0,0.5), 0 1px 3px rgba(0,0,0,0.35)",
              }}
            >
              {HEADLINE.map((word, i) => (
                <motion.span
                  key={word + i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.08, ease: "easeOut" }}
                  className="inline-block mr-2.5 sm:mr-3"
                  style={{ willChange: "transform, opacity", transform: "translateZ(0)" }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            {/* Subheading matching Image 3 */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="font-body font-normal text-white/95 text-base sm:text-lg max-w-md sm:max-w-lg mt-3 sm:mt-4 leading-relaxed"
              style={{
                willChange: "opacity",
                transform: "translateZ(0)",
                textShadow: "0 1px 8px rgba(0,0,0,0.45)",
              }}
            >
              Expert dental care for every age, delivered with comfort, confidence, and trust.
            </motion.p>

            {/* CTA Group: Booking Button immediately visible + Explore Link */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap items-center gap-4 sm:gap-6 mt-6 sm:mt-7"
            >
              <a
                href="#book"
                className="btn-primary inline-flex items-center gap-2 rounded-full px-6 sm:px-7 py-3 font-label text-sm text-white shadow-lg shadow-teal/25 hover:shadow-teal/40 transition-all"
              >
                <CalendarDays className="w-4 h-4" />
                <span>Book Appointment</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center gap-1.5 font-label text-sm text-white/90 hover:text-white underline underline-offset-4 decoration-white/40 hover:decoration-teal transition-all py-1"
              >
                <span>Explore our services</span>
                <ArrowRight className="w-4 h-4 text-teal" />
              </a>
            </motion.div>

            {/* Social Proof: 3 real photographic patient portraits + Rating */}
            <motion.div
              style={{ opacity: trustOpacity }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="flex items-center gap-3.5 mt-7 sm:mt-8"
            >
              <div className="flex -space-x-2.5">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                  alt="Happy Patient"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-white shadow-md"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                  alt="Happy Patient"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-white shadow-md"
                />
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80"
                  alt="Happy Patient"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-white shadow-md"
                />
              </div>

              <div className="h-7 w-px bg-white/20 hidden sm:block" />

              <div>
                <p className="font-label text-xs sm:text-sm font-medium text-white">
                  10K+ Happy Patients
                </p>
                <p className="font-body text-xs text-white/80 flex items-center gap-1 mt-0.5">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span className="font-semibold text-white">4.9</span> Google Rating
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN — Refined Doctor Card (Desktop) */}
          <div className="lg:col-span-5 hidden md:flex justify-end relative z-10">
            <motion.div
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="bg-black/35 backdrop-blur-xl border border-white/15 rounded-2xl p-3.5 w-60 md:w-64 shadow-[0_16px_40px_rgba(0,0,0,0.35)]"
            >
              <div className="relative overflow-hidden rounded-xl bg-teal-950/40">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={doctor.img}
                    src={doctor.img}
                    alt={doctor.name}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-40 object-cover"
                  />
                </AnimatePresence>
                <button
                  onClick={() => setDoctorIdx((i) => (i - 1 + HERO_DOCTORS.length) % HERO_DOCTORS.length)}
                  className="absolute top-1/2 -translate-y-1/2 left-2 w-7 h-7 rounded-full bg-white/80 backdrop-blur-md text-navy flex items-center justify-center shadow-md hover:scale-110 hover:bg-white transition"
                  aria-label="Previous doctor"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setDoctorIdx((i) => (i + 1) % HERO_DOCTORS.length)}
                  className="absolute top-1/2 -translate-y-1/2 right-2 w-7 h-7 rounded-full bg-white/80 backdrop-blur-md text-navy flex items-center justify-center shadow-md hover:scale-110 hover:bg-white transition"
                  aria-label="Next doctor"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="mt-3 px-1">
                <p className="font-heading text-white text-base leading-tight font-medium">{doctor.name}</p>
                <p className="font-body text-white/70 text-xs mt-0.5">{doctor.title}</p>
                <div className="flex gap-2 mt-2.5">
                  <span className="bg-teal/35 text-white font-label text-[10px] px-2.5 py-0.5 rounded-full">
                    {doctor.years} Exp.
                  </span>
                  <span className="bg-white/10 text-white font-label text-[10px] px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" /> {doctor.rating}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Understated Treatment Chips (Desktop Only) + Center Scroll Indicator + Doctor Slide Count */}
      <div className="absolute bottom-3 md:bottom-4 left-5 sm:px-8 lg:left-12 right-5 sm:px-8 lg:right-12 flex justify-between items-end pointer-events-none z-10">
        {/* Left: Understated Popular Treatments Chips (Desktop Only, matching Image 5) */}
        <div className="hidden md:flex flex-col gap-1.5 max-w-md pointer-events-auto">
          <span className="font-label text-[10px] uppercase tracking-[0.16em] text-white/60 font-medium">
            Popular Treatments
          </span>
          <div className="flex flex-wrap gap-1.5">
            {HERO_PILLS.map((pill) => (
              <a
                key={pill}
                href="#services"
                className="bg-white/10 hover:bg-white/20 active:scale-95 transition-all backdrop-blur-md border border-white/15 text-white/90 hover:text-white rounded-full px-3 py-1 font-label text-[11px] whitespace-nowrap shadow-sm hover:border-teal/40"
              >
                {pill}
              </a>
            ))}
          </div>
        </div>

        {/* Center: Animated Minimalist Scroll Indicator (Unobstructed) */}
        <a
          href="#services"
          className="scroll-indicator pointer-events-auto"
          aria-label="Scroll to next section"
        >
          <span className="scroll-indicator__mouse" aria-hidden="true">
            <span className="scroll-indicator__dot" />
          </span>
          <span className="scroll-indicator__label text-[10px] tracking-widest text-white/70">Scroll</span>
          <ChevronDown className="w-3.5 h-3.5 text-white/70" />
        </a>

        {/* Right: Dynamic doctor pagination counter */}
        <p className="hidden md:block w-36 text-right font-label text-white/60 text-xs tracking-widest uppercase pointer-events-auto">
          ‹ 0{doctorIdx + 1} ──────── 0{HERO_DOCTORS.length} ›
        </p>
      </div>
    </section>
  );
};

export default Hero;
