import { motion } from "motion/react";
import { Check } from "lucide-react";
import { SERVICES } from "@/lib/data";
import { cn } from "@/lib/utils";

const ACCENT_BAR: Record<string, string> = {
  teal: "bg-teal",
  coral: "bg-coral",
  purple: "bg-purple-500",
  amber: "bg-amber-500",
  emerald: "bg-emerald-500",
  pink: "bg-pink-500",
  blue: "bg-blue-500",
  orange: "bg-orange-500",
};

const ServicesGrid = () => {
  return (
    <section id="treatments" className="bg-gradient-section py-20 md:py-24 px-5 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="section-badge">Full Treatment Menu</span>
          <h2 className="font-heading italic text-4xl lg:text-5xl text-navy leading-[1.1] mt-5">
            Comprehensive Dental Services Under One Roof
          </h2>
          <p className="font-body text-text-muted text-sm mt-4">
            We provide a wide range of treatments to address every dental concern.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {SERVICES.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow flex flex-col"
            >
              <div className="overflow-hidden h-44 bg-gray-100">
                <img src={s.image} alt={(s as { alt?: string }).alt ?? s.title} loading="lazy" decoding="async" className="w-full h-full object-cover" />
              </div>
              <div className={cn("h-1.5", ACCENT_BAR[s.accent])} />
              <div className="px-5 py-5 flex flex-col flex-1">
                <h3 className="font-heading text-navy text-base font-semibold">{s.title}</h3>
                <p className="font-label text-text-muted text-[11px] uppercase tracking-wider mt-1">{s.tagline}</p>
                <ul className="mt-3 space-y-1.5 flex-1">
                  {s.bullets.map((b) => (
                    <li key={b} className="font-body text-text-muted text-xs flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-teal-deep mt-0.5 flex-shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <a href="#book" className="font-label text-teal-deep text-xs hover:underline mt-4">
                  Read More →
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
