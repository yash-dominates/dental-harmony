import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, CalendarDays, ChevronDown, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { HERO_DOCTORS, HERO_PILLS, IMAGES } from "@/lib/data";

const Hero = () => {
  const [doctorIdx, setDoctorIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setDoctorIdx((i) => (i + 1) % HERO_DOCTORS.length), 4000);
    return () => clearInterval(t);
  }, []);

  const doctor = HERO_DOCTORS[doctorIdx];

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-navy min-h-screen min-h-[100dvh] flex flex-col justify-between"
    >
      {/* BACKGROUND IMAGES (Mobile cropped vs Desktop widescreen) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {/* Mobile: Cropped photo of smiling patient and practitioner (Image 3) */}
        <img
          src={IMAGES.heroBgMobile}
          alt="Modern dental clinic consultation — Noida Dental Care"
          loading="eager"
          decoding="async"
          // @ts-expect-error - fetchpriority is a valid HTML attribute
          fetchpriority="high"
          className="md:hidden w-full h-full object-cover object-center"
        />

        {/* Desktop: Full wide dental clinic room (Image 5) */}
        <img
          src={IMAGES.heroBg}
          alt="Modern dental clinic room interior — Noida Dental Care"
          loading="eager"
          decoding="async"
          // @ts-expect-error - fetchpriority is a valid HTML attribute
          fetchpriority="high"
          className="hidden md:block w-full h-full object-cover object-center"
          style={{ filter: "contrast(1.04) saturate(1.1) brightness(0.9)" }}
        />
      </div>

      {/* Cinematic gradient overlays */}
      {/* Mobile: Soft top vignette for text readability, clear middle for patient face, gentle bottom tint */}
      <div
        aria-hidden="true"
        className="md:hidden absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            "linear-gradient(180deg, rgba(8, 12, 22, 0.72) 0%, rgba(8, 12, 22, 0.45) 32%, rgba(8, 12, 22, 0.04) 52%, rgba(8, 12, 22, 0.45) 100%)",
        }}
      />
      {/* Desktop: Soft left-shade */}
      <div aria-hidden="true" className="hidden md:block hero-left-shade z-[1]" />

      {/* HERO MAIN CONTENT */}
      {/* On Mobile: Text starts at top (pt-24), keeping all copy in upper portion so patient face is unobstructed */}
      {/* On Desktop: Centered vertically */}
      <div className="relative z-10 w-full flex-1 flex flex-col justify-start md:justify-center pt-24 sm:pt-28 md:pt-0">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT / MAIN TEXT COLUMN */}
          <div className="lg:col-span-7 max-w-2xl text-white relative z-20">
            {/* Eyebrow Label */}
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 font-label text-xs uppercase tracking-[0.16em] text-white/90"
            >
              <Star className="w-3.5 h-3.5 fill-teal text-teal" />
              <span>Advanced Dental Care</span>
            </motion.div>

            {/* Headline matching Image 2 */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="font-heading italic text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.08] tracking-[-0.02em] mt-3 sm:mt-4 md:mt-5"
              style={{
                textShadow: "0 2px 14px rgba(0,0,0,0.5), 0 1px 3px rgba(0,0,0,0.35)",
              }}
            >
              A brighter smile,<br />starts here.
            </motion.h1>

            {/* Subheading matching Image 2 */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="font-body font-normal text-white/90 text-sm sm:text-base md:text-lg max-w-xs sm:max-w-md md:max-w-lg mt-2.5 sm:mt-3.5 md:mt-4 leading-relaxed"
              style={{
                textShadow: "0 1px 8px rgba(0,0,0,0.45)",
              }}
            >
              Expert dental care for every age, delivered with comfort and confidence.
            </motion.p>

            {/* CTA Group: Book an appointment + Explore our services (stacked on mobile, inline on desktop) */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row sm:items-center items-start gap-3 sm:gap-6 mt-5 sm:mt-6 md:mt-7"
            >
              <a
                href="#book"
                className="btn-primary inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-label text-sm text-white shadow-lg shadow-teal/25 hover:shadow-teal/40 transition-all w-fit"
              >
                <CalendarDays className="w-4 h-4" />
                <span>Book an appointment</span>
              </a>

              <a
                href="#services"
                className="inline-flex items-center gap-1.5 font-label text-sm text-white/90 hover:text-white transition-all py-1 group w-fit"
              >
                <span>Explore our services</span>
                <ArrowRight className="w-4 h-4 text-teal transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>

            {/* Desktop Social Proof (Photographic avatars, displayed on md+) */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="hidden md:flex items-center gap-3.5 mt-8"
            >
              <div className="flex -space-x-2.5">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                  alt="Happy Patient"
                  className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-md"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                  alt="Happy Patient"
                  className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-md"
                />
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80"
                  alt="Happy Patient"
                  className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-md"
                />
              </div>

              <div className="h-7 w-px bg-white/20" />

              <div>
                <p className="font-label text-sm font-medium text-white">
                  10K+ Happy Patients
                </p>
                <p className="font-body text-xs text-white/80 flex items-center gap-1 mt-0.5">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span className="font-semibold text-white">4.9</span> Google Rating
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN — Refined Doctor Card (Desktop only) */}
          <div className="lg:col-span-5 hidden md:flex justify-end relative z-10">
            <motion.div
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.8 }}
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

      {/* MOBILE BOTTOM REVIEW SECTION (Image 2 - Exactly above scroll indicator, centered) */}
      <div className="md:hidden absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 whitespace-nowrap pointer-events-auto">
        <div className="flex -space-x-1.5">
          <span className="w-5 h-5 rounded-full bg-teal text-white flex items-center justify-center font-label text-[9px] font-semibold border border-white/80 shadow-sm">
            A
          </span>
          <span className="w-5 h-5 rounded-full bg-teal text-white flex items-center justify-center font-label text-[9px] font-semibold border border-white/80 shadow-sm">
            R
          </span>
          <span className="w-5 h-5 rounded-full bg-teal text-white flex items-center justify-center font-label text-[9px] font-semibold border border-white/80 shadow-sm">
            S
          </span>
        </div>
        <p
          className="font-body text-xs text-white/95 tracking-tight font-medium"
          style={{ textShadow: "0 1px 4px rgba(0,0,0,0.7)" }}
        >
          10K+ happy patients · 4.9<span className="text-amber-400">★</span> Google rating
        </p>
      </div>

      {/* DESKTOP LOWER-LEFT: Understated Popular Treatments Chips (Image 5) */}
      <div className="hidden md:flex absolute bottom-5 left-6 lg:left-12 z-20 flex-col gap-1.5 max-w-sm pointer-events-auto">
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

      {/* DEAD-CENTER HORIZONTAL SCROLL INDICATOR (100% Guaranteed Centered on ALL devices) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center pointer-events-auto">
        <a
          href="#services"
          className="flex flex-col items-center text-white/80 hover:text-white transition-colors cursor-pointer group"
          aria-label="Scroll to next section"
        >
          {/* Pill mouse with animated chevron inside (Image 2 style) */}
          <div className="w-5 h-8 rounded-full border border-white/60 flex items-center justify-center group-hover:border-teal transition-colors shadow-sm">
            <motion.div
              animate={{ y: [-3, 3, -3] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            >
              <ChevronDown className="w-3.5 h-3.5 text-white/85" />
            </motion.div>
          </div>
        </a>
      </div>

      {/* DESKTOP LOWER-RIGHT: Doctor slide counter (Image 5) */}
      <p className="hidden md:block absolute bottom-5 right-6 lg:right-12 z-20 font-label text-white/60 text-xs tracking-widest uppercase pointer-events-auto">
        ‹ 0{doctorIdx + 1} ──────── 0{HERO_DOCTORS.length} ›
      </p>
    </section>
  );
};

export default Hero;
