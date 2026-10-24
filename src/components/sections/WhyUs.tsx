import { motion } from "motion/react";
import { BarChart3, Shield, Sparkles, Zap } from "lucide-react";

const items = [
  { icon: Zap, title: "Days, Not Months", body: "From consultation to confident smile. Our streamlined process gets you results fast, without shortcuts." },
  { icon: Sparkles, title: "Obsessively Clean Clinic", body: "Hospital-grade sterilization. ISO certified. Every instrument, every surface, every visit." },
  { icon: BarChart3, title: "Built to Convert Smiles", body: "Data-backed treatment plans, not guesswork. Every procedure has measurable, lasting outcomes." },
  { icon: Shield, title: "Affordable Excellence", body: "Premium care at transparent prices. EMI options, insurance accepted, no hidden costs." },
];

const WhyUs = () => {
  return (
    <section className="bg-navy py-20 md:py-24 px-5 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="section-badge-light">Why Us</span>
          <h2 className="font-heading italic text-4xl lg:text-5xl text-white leading-[1.1] mt-5 max-w-2xl mx-auto">
            The Difference Is Everything.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-7"
            >
              <div className="w-12 h-12 rounded-full bg-teal/30 flex items-center justify-center text-teal-light">
                <it.icon className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-white text-xl mt-5">{it.title}</h3>
              <p className="font-body text-white/65 text-sm mt-2 leading-relaxed">{it.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
