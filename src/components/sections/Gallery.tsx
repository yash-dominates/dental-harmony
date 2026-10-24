import { motion } from "motion/react";
import { IMAGES, sized } from "@/lib/data";

const row1 = [
  { src: IMAGES.heroBg, alt: "Modern dental clinic interior — Noida Dental Care" },
  { src: IMAGES.teethCleaningFeature, alt: "Professional teeth cleaning treatment" },
  { src: IMAGES.veneersFeature, alt: "Dental veneers smile transformation" },
  { src: IMAGES.implantFeature, alt: "Dental implant procedure close-up" },
  { src: IMAGES.aboutClinic, alt: "Noida Dental Care clinic treatment room" },
  { src: IMAGES.bracesService, alt: "Dental braces and clear aligners" },
  { src: IMAGES.smileDesign, alt: "Smile design cosmetic dentistry" },
];

const row2 = [
  { src: IMAGES.scalingService, alt: "Dental scaling and cleaning procedure" },
  { src: IMAGES.resultsTeeth, alt: "Teeth straightening before and after result" },
  { src: IMAGES.resultsImplant, alt: "Dental implant result" },
  { src: IMAGES.smileMakeover, alt: "Patient smile makeover result" },
  { src: IMAGES.galleryEquipment, alt: "Sterile dental equipment" },
  { src: IMAGES.galleryLounge, alt: "Comfortable patient lounge at Noida Dental Care" },
  { src: IMAGES.gallerySmileResult, alt: "Patient smile result after dental treatment" },
];

const Gallery = () => {
  return (
    <section id="work" className="bg-white py-20 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="section-badge">Our Clinic</span>
          <h2 className="font-heading italic text-4xl lg:text-5xl text-navy leading-[1.1] mt-5">
            Inside Our Dental Clinic
          </h2>
          <p className="font-body text-text-muted text-sm mt-3 max-w-xl mx-auto">
            Take a closer look at our clinic setup, treatment areas, and patient-friendly environment.
          </p>
        </motion.div>
      </div>

      {/* Dual marquee */}
      <div className="mt-12 space-y-4">
        <div className="overflow-hidden w-full">
          <div className="flex gap-4 animate-marquee-left w-max">
            {[...row1, ...row1].map((img, i) => (
              <div
                key={`r1-${i}`}
                className="relative h-48 md:h-56 w-72 md:w-80 flex-shrink-0 rounded-2xl overflow-hidden bg-gray-100"
              >
                <img
                  src={sized(img.src, 500)}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden w-full">
          <div className="flex gap-4 animate-marquee-right w-max">
            {[...row2, ...row2].map((img, i) => (
              <div
                key={`r2-${i}`}
                className="relative h-48 md:h-56 w-72 md:w-80 flex-shrink-0 rounded-2xl overflow-hidden bg-gray-100"
              >
                <img
                  src={sized(img.src, 500)}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
