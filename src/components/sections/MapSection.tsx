import { motion } from "motion/react";
import { MapPin } from "lucide-react";

const MapSection = () => {
  return (
    <section id="location" className="bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center py-10 px-5 md:px-8"
      >
        <span className="section-badge inline-flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5" /> Find Us
        </span>
        <h2 className="font-heading italic text-3xl md:text-4xl text-navy mt-4">
          Visit Noida Dental Care — Sector 62, Noida
        </h2>
        <p className="font-body text-text-muted text-sm text-center max-w-xl mx-auto mt-2 mb-6">
          Find us at Sector 62, Noida, Uttar Pradesh — conveniently located near major landmarks. Our dental clinic serves patients across Noida, Greater Noida, and Delhi NCR. Address: Sector 62, Noida, UP 201309, India.
        </p>
      </motion.div>

      <div className="w-full h-72 md:h-96 bg-gray-100">
        <iframe
          src="https://maps.google.com/maps?q=Sector+62+Noida+Uttar+Pradesh+India&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Noida Dental Care location — Sector 62, Noida"
        />
      </div>
    </section>
  );
};

export default MapSection;
