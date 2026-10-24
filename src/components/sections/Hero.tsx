import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, CalendarDays, ChevronDown, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { HERO_DOCTORS, HERO_PILLS, IMAGES } from "@/lib/data";

const HEADLINE = ["Brighten", "your", "smile", "with", "expert", "dental", "care."];

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
      className="relative w-full overflow-hidden bg-navy min-h-[100vh]"
    >
      {/* Background image */}
      <img
        src={IMAGES.heroBg}
        alt="Modern dental clinic interior — Noida Dental Care"
        loading="eager"
        decoding="async"
        // @ts-expect-error - fetchpriority is a valid HTML attribute
        fetchpriority="high"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "contrast(1.1) saturate(1.1) brightness(0.72)" }}
      />

      {/* Soft dark shade on the left, behind the text */}
      <div aria-hidden="true" className="hero-left-shade" />

      <div
        className="relative z-10 flex items-center min-h-[100vh] pt-24 sm:pt-28 md:pt-24 pb-16 sm:pb-20 md:pb-16"
        style={{ contain: "layout", filter: "drop-shadow(0 1px 6px rgba(0,0,0,0.35))" }}
      >
        <div className="w-full px-5 md:px-8 lg:px-16 grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* LEFT */}
          <div className="lg:col-span-7 max-w-2xl text-white relative z-20">
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/25 text-white rounded-full px-4 py-1.5 font-label text-xs uppercase tracking-[0.08em] shadow-sm transition-colors"
              style={{
                willChange: "transform, opacity",
                transform: "translateZ(0)",
              }}
            >
              <Star className="w-3.5 h-3.5 fill-teal text-teal" />
              <span>Advanced Dental Care</span>
            </motion.div>

            {/* Headline */}
            <h1
              className="font-heading italic text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.08] tracking-[-0.02em] mt-4 md:mt-5"
              style={{
                textShadow:
                  "0 2px 14px rgba(0,0,0,0.5), 0 1px 3px rgba(0,0,0,0.35)",
              }}
            >
              {HEADLINE.map((word, i) => (
                <motion.span
                  key={word + i}
                  initial={{ filter: "blur(12px)", opacity: 0 }}
                  animate={{ filter: "blur(0px)", opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.15 + i * 0.08, ease: "easeOut" }}
                  className="inline-block mr-2.5 sm:mr-3"
                  style={{ willChange: "filter, opacity", transform: "translateZ(0)" }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="font-body font-normal text-white/95 text-base md:text-lg max-w-lg mt-3 md:mt-4 leading-relaxed"
              style={{
                willChange: "opacity",
                transform: "translateZ(0)",
                textShadow:
                  "0 1px 8px rgba(0,0,0,0.45)",
              }}
            >
              Expert dental care for healthy, confident smiles at every age — delivered with comfort, precision, and trust.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-wrap items-center gap-3 mt-5 md:mt-6"
              style={{ willChange: "opacity", transform: "translateZ(0)" }}
            >
              <a href="#book" className="btn-primary shadow-lg shadow-teal/25">
                <CalendarDays className="w-4 h-4" /> Book Appointment
              </a>
              <a
                href="#services"
                className="hero-glass-btn inline-flex items-center gap-2 rounded-full px-6 py-3 font-label text-sm"
              >
                Our Services <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="flex items-center gap-3 mt-4 md:mt-5 w-fit bg-black/25 backdrop-blur-md border border-white/15 rounded-full px-3.5 py-1.5 shadow-sm"
              style={{ willChange: "opacity", transform: "translateZ(0)" }}
            >
              <div className="flex -space-x-2">
                {["A", "P", "R"].map((initial, i) => (
                  <div
                    key={i}
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-teal border-2 border-navy flex items-center justify-center font-label text-xs text-white shadow-sm"
                  >
                    {initial}
                  </div>
                ))}
              </div>
              <p className="font-body text-xs sm:text-sm text-white/95">
                10K+ Happy Patients · <span className="text-amber-300 font-semibold">4.9★</span> Google Rating
              </p>
            </motion.div>

            {/* Popular Treatments Tags - relocated here for comfortable reading and zero collision */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="mt-4 md:mt-5 pt-3.5 border-t border-white/15 max-w-xl"
            >
              <p className="font-label text-[11px] uppercase tracking-wider text-white/70 font-medium mb-2.5">
                Popular Treatments
              </p>
              <div className="flex flex-wrap gap-2">
                {HERO_PILLS.map((pill, i) => (
                  <motion.a
                    key={pill}
                    href="#services"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.22)" }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="inline-flex items-center bg-white/10 hover:bg-white/20 active:bg-white/25 backdrop-blur-md border border-white/20 hover:border-teal/50 text-white rounded-full px-3.5 py-1.5 font-label text-xs transition-all duration-200 shadow-sm cursor-pointer"
                  >
                    {pill}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT — floating doctor card */}
          <div className="lg:col-span-5 hidden md:flex justify-end relative z-10">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.2 }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-4 w-64 md:w-72 shadow-[0_8px_32px_rgba(0,0,0,0.25)]"
            >
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={doctor.img}
                    src={doctor.img}
                    alt={doctor.name}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="rounded-2xl w-full h-44 object-cover"
                  />
                </AnimatePresence>
                <button
                  onClick={() => setDoctorIdx((i) => (i - 1 + HERO_DOCTORS.length) % HERO_DOCTORS.length)}
                  className="absolute top-1/2 -translate-y-1/2 -left-3 w-8 h-8 rounded-full bg-white/90 text-navy flex items-center justify-center shadow-md hover:scale-110 transition"
                  aria-label="Previous doctor"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setDoctorIdx((i) => (i + 1) % HERO_DOCTORS.length)}
                  className="absolute top-1/2 -translate-y-1/2 -right-3 w-8 h-8 rounded-full bg-white/90 text-navy flex items-center justify-center shadow-md hover:scale-110 transition"
                  aria-label="Next doctor"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              <div className="mt-4 px-1">
                <p className="font-heading text-white text-lg leading-tight">{doctor.name}</p>
                <p className="font-body text-white/70 text-xs mt-1">{doctor.title}</p>
                <div className="hidden md:flex gap-2 mt-3">
                  <span className="bg-teal/40 text-white font-label text-[10px] px-2.5 py-1 rounded-full">
                    {doctor.years} Exp.
                  </span>
                  <span className="bg-white/15 text-white font-label text-[10px] px-2.5 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" /> {doctor.rating}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Cleanly separated with Carousel Indicator on right and Centered Scroll Indicator */}
      <div className="absolute bottom-3 md:bottom-4 left-5 md:left-8 lg:left-16 right-5 md:right-8 lg:right-16 flex justify-between items-end pointer-events-none z-10">
        <div className="hidden md:block w-36" />

        {/* Animated scroll indicator - perfectly unobstructed in center */}
        <a
          href="#services"
          className="scroll-indicator hidden md:inline-flex pointer-events-auto"
          aria-label="Scroll to next section"
        >
          <span className="scroll-indicator__mouse" aria-hidden="true">
            <span className="scroll-indicator__dot" />
          </span>
          <span className="scroll-indicator__label">Scroll</span>
          <ChevronDown className="w-3.5 h-3.5" aria-hidden="true" />
        </a>

        {/* Dynamic doctor pagination counter on the right */}
        <p className="hidden md:block w-36 text-right font-label text-white/70 text-xs tracking-widest uppercase pointer-events-auto">
          ‹ 0{doctorIdx + 1} ──────── 0{HERO_DOCTORS.length} ›
        </p>
      </div>
    </section>
  );
};

export default Hero;
