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
        className="relative z-10 flex items-center min-h-[100vh] pt-32 sm:pt-36 md:pt-28 pb-40 sm:pb-44 md:pb-32 lg:pb-24"
        style={{ contain: "layout", filter: "drop-shadow(0 1px 6px rgba(0,0,0,0.35))" }}
      >
        <div className="w-full px-5 md:px-8 lg:px-16 grid lg:grid-cols-12 gap-10 items-center">
          {/* LEFT */}
          <div className="lg:col-span-7 max-w-2xl text-white relative z-20">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/25 text-white rounded-full px-3.5 py-1.5 font-label text-xs uppercase tracking-[0.06em]"
              style={{
                willChange: "transform, opacity",
                transform: "translateZ(0)",
              }}
            >
              <Star className="w-3.5 h-3.5 fill-white" /> Noida's Most Trusted Clinic
            </motion.div>

            <h1
              className="font-heading italic text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] tracking-[-0.02em] mt-6 max-w-[260px] md:max-w-none"
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
                  className="inline-block mr-3"
                  style={{ willChange: "filter, opacity", transform: "translateZ(0)" }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="font-body font-normal text-white text-base md:text-lg max-w-md mt-5"
              style={{
                willChange: "opacity",
                transform: "translateZ(0)",
                textShadow:
                  "0 1px 8px rgba(0,0,0,0.45)",
              }}
            >
              Expert dental care for healthy, confident smiles at every age — delivered with comfort, precision, and trust.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-wrap gap-3 mt-8"
              style={{ willChange: "opacity", transform: "translateZ(0)" }}
            >
              <a href="#book" className="btn-primary">
                <CalendarDays className="w-4 h-4" /> Book Appointment
              </a>
              <a
                href="#services"
                className="hero-glass-btn inline-flex items-center gap-2 rounded-full px-7 py-3 font-label text-sm"
              >
                Our Services <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex items-center gap-3 mt-8 w-fit bg-white/10 backdrop-blur-sm rounded-full px-3 py-1"
              style={{ willChange: "opacity", transform: "translateZ(0)" }}
            >
              <div className="flex -space-x-2">
                {["A", "P", "R"].map((initial, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-teal border-2 border-navy flex items-center justify-center font-label text-xs text-white"
                  >
                    {initial}
                  </div>
                ))}
              </div>
              <p className="font-body text-sm text-white/90">
                10K+ Happy Patients · 4.9★ Google Rating
              </p>
            </motion.div>
          </div>

          {/* RIGHT — floating doctor card */}
          <div className="lg:col-span-5 hidden md:flex justify-end relative z-10">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.2 }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-4 w-36 md:w-72 shadow-[0_8px_32px_rgba(0,0,0,0.25)]"
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

      {/* Bottom service pills */}
      <div className="absolute bottom-6 left-5 md:left-8 lg:left-16 right-5 md:right-8 lg:right-16 flex justify-between items-end gap-4 z-10">
        <div className="flex flex-wrap gap-2">
          {HERO_PILLS.map((pill, i) => (
            <motion.span
              key={pill}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 1.4 + i * 0.08 }}
              className={`bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full px-4 py-2 font-label text-xs whitespace-nowrap ${
                i >= HERO_PILLS.length - 2 ? "hidden md:inline-block" : ""
              }`}
              style={{ willChange: "opacity", transform: "translateZ(0)" }}
            >
              {pill}
            </motion.span>
          ))}
        </div>
        <p className="hidden md:block font-label text-white/70 text-sm whitespace-nowrap">
          ‹ 01 ──────── 05 ›
        </p>
      </div>

      {/* Animated scroll indicator */}
      <a
        href="#services"
        className="scroll-indicator hidden md:inline-flex"
        aria-label="Scroll to next section"
      >
        <span className="scroll-indicator__mouse" aria-hidden="true">
          <span className="scroll-indicator__dot" />
        </span>
        <span className="scroll-indicator__label">Scroll</span>
        <ChevronDown className="w-3.5 h-3.5" aria-hidden="true" />
      </a>
    </section>
  );
};

export default Hero;
