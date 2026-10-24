import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "@/lib/data";
import { cn } from "@/lib/utils";

const Faq = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-24 px-5 md:px-8 lg:px-16" style={{ backgroundColor: "#F0F9F8" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="section-badge">❓ FAQ</span>
          <h2 className="font-heading italic text-4xl lg:text-5xl text-navy leading-[1.1] mt-5">
            Common Questions About Dental Treatments
          </h2>
          <p className="font-body text-text-muted text-sm mt-3">
            Find answers to common questions about our dental services.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 mt-10">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 2) * 0.08 }}
                className={cn(
                  "rounded-2xl px-5 py-4 shadow-card transition-colors",
                  isOpen ? "bg-amber-50 border border-amber-200" : "bg-white",
                )}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex justify-between items-center gap-4 text-left"
                >
                  <span className="font-label text-navy text-sm font-medium">{item.q}</span>
                  <motion.span animate={{ rotate: isOpen ? 180 : 0 }} className="text-teal-deep">
                    <ChevronDown className="w-4 h-4" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="font-body text-text-muted text-sm pt-3 leading-relaxed">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 rounded-3xl p-10 text-center bg-gradient-purple"
        >
          <h3 className="font-heading italic text-white text-2xl md:text-3xl">Still have questions?</h3>
          <a
            href="#book"
            className="inline-block mt-6 bg-white text-navy rounded-full px-8 py-3 font-label font-medium text-sm hover:scale-105 transition-transform"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Faq;
