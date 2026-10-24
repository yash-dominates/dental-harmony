import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { IMAGES } from "@/lib/data";

const Results = () => {
  return (
    <section className="py-20 md:py-24 px-5 md:px-8 lg:px-16" style={{ backgroundColor: "#EDF7F6" }}>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-label text-text-muted text-xs tracking-[0.2em] uppercase">[ our work ]</p>
          <h2 className="font-heading italic text-4xl lg:text-5xl text-navy leading-[1.1] mt-3 max-w-md">
            Delivering Results That Speak for Themselves
          </h2>
          <p className="font-body text-text-muted text-sm leading-relaxed mt-5 max-w-md">
            Dental care is not limited to just cleaning your teeth; it is a complete healthcare system that helps maintain your oral health, overall well-being, and confidence.
          </p>
          <a href="#services" className="btn-primary mt-8">
            Explore Our Work <ArrowRight className="w-4 h-4" />
          </a>
          <div className="flex items-center gap-3 mt-8">
            <div className="flex -space-x-2">
              {["A", "B", "C"].map((c, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full bg-teal border-2 border-white flex items-center justify-center font-label text-xs text-white"
                >
                  {c}
                </div>
              ))}
            </div>
            <p className="font-body text-text-muted text-sm">10K+ happy patients</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-4"
        >
          <div>
            <div className="bg-gray-100 rounded-2xl overflow-hidden">
              <img
                src={IMAGES.resultsTeeth}
                alt="Teeth straightening before and after result"
                loading="lazy"
                decoding="async"
                className="w-full h-48 md:h-56 object-cover"
              />
            </div>
            <p className="font-label text-navy text-sm font-medium mt-3">Teeth Straightening</p>
          </div>
          <div className="mt-10">
            <div className="bg-gray-100 rounded-2xl overflow-hidden">
              <img
                src={IMAGES.resultsImplant}
                alt="Dental implant result"
                loading="lazy"
                decoding="async"
                className="w-full h-48 md:h-56 object-cover"
              />
            </div>
            <p className="font-label text-navy text-sm font-medium mt-3">Dental Implant</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Results;
