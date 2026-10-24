import { motion } from "motion/react";
import { Star, User } from "lucide-react";
import { DOCTORS } from "@/lib/data";

const Doctors = () => {
  return (
    <section id="team" className="bg-white py-20 md:py-24 px-5 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">Our Team</span>
          <h2 className="font-heading italic text-4xl lg:text-5xl text-navy leading-[1.1] mt-5 max-w-md">
            Meet Your Care Team
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {DOCTORS.map((d, i) => (
            <motion.article
              key={d.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="glass-card-light rounded-3xl overflow-hidden"
            >
              <img src={d.image} alt={d.name} loading="lazy" className="w-full h-72 object-cover object-top" />
              <div className="px-6 py-5">
                <h3 className="font-heading italic text-navy text-xl">{d.name}</h3>
                <span className="section-badge mt-2 text-[10px]">{d.qual} · {d.specialty}</span>
                <div className="flex items-center gap-4 mt-4">
                  <span className="flex items-center gap-1.5 font-label text-xs text-text-muted">
                    <User className="w-3.5 h-3.5" /> {d.years} Years Exp.
                  </span>
                  <span className="flex items-center gap-1.5 font-label text-xs text-text-muted">
                    <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" /> {d.rating} Rating
                  </span>
                </div>
                <p className="font-body text-text-muted text-xs mt-3 leading-relaxed">{d.bio}</p>
                <a href="#book" className="inline-block mt-4 font-label text-teal-deep text-xs hover:underline">
                  View Profile →
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
