import { motion } from "motion/react";
import { Play } from "lucide-react";
import { VIDEO_TESTIMONIALS } from "@/lib/data";

const VideoTestimonials = () => {
  return (
    <section className="py-20 md:py-24 px-5 md:px-8 lg:px-16" style={{ backgroundColor: "#FFF5F5" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">Real Stories</span>
          <h2 className="font-heading italic text-4xl lg:text-5xl text-navy leading-[1.1] mt-5">
            Real People, Real Results
          </h2>
          <p className="font-body text-text-muted text-sm mt-3 max-w-xl">
            Our experts break down your reports into simple, actionable steps.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          {VIDEO_TESTIMONIALS.map((v, i) => (
            <motion.button
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ scale: 1.02 }}
              className="relative rounded-3xl overflow-hidden h-64 group text-left"
            >
              <img src={v.image} alt={v.alt ?? v.title} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover bg-gray-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/30 to-transparent" />
              <span className="absolute top-3 left-3 glass-card rounded-full px-3 py-1 text-white font-label text-xs">
                {v.date}
              </span>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white/95 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="w-5 h-5 text-navy fill-navy ml-0.5" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="font-heading italic text-white text-sm leading-tight">{v.title}</p>
                <p className="font-body text-white/60 text-xs mt-1">Noida Dental Care</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;
