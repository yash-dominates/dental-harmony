import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { IMAGES } from "@/lib/data";
import { cn } from "@/lib/utils";

const cards = [
  {
    title: "Teeth Cleaning",
    body: "Professional scaling and polishing for healthier gums and a brighter smile.",
    image: IMAGES.teethCleaningFeature,
    alt: "Professional teeth cleaning treatment",
    bg: "bg-teal/10 border-teal/20",
    btn: "bg-teal text-white",
  },
  {
    title: "Dental Checkups",
    body: "Comprehensive oral exam to detect issues early and keep your smile healthy.",
    image: IMAGES.treatment1,
    alt: "Dental checkup examination",
    bg: "bg-coral/10 border-coral/20",
    btn: "bg-coral text-white",
  },
  {
    title: "Dental Veneers",
    body: "Porcelain veneers for a flawless, natural-looking smile transformation.",
    image: IMAGES.veneersFeature,
    alt: "Dental veneers smile transformation",
    bg: "bg-navy/5 border-navy/10",
    btn: "bg-navy text-white",
  },
  {
    title: "Dental Implants",
    body: "Permanent tooth replacement that looks, feels, and functions like natural teeth.",
    image: IMAGES.implantFeature,
    alt: "Dental implant procedure close-up",
    bg: "bg-emerald-50 border-emerald-200",
    btn: "bg-emerald-500 text-white",
  },
];

const ServicesPreview = () => {
  return (
    <section id="services" className="bg-white py-20 md:py-24 px-5 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-12">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start"
        >
          <span className="section-badge">★ Our Features</span>
          <h2 className="font-heading italic text-4xl lg:text-5xl text-navy leading-[1.1] mt-5 max-w-sm">
            Discover Our Signature Dental Services
          </h2>
          <p className="font-body text-text-muted text-sm leading-relaxed mt-5 max-w-md">
            Experience modern dental care delivered with comfort, precision, and attention to detail.
          </p>

          <div className="flex items-center gap-4 mt-8">
            <div className="flex -space-x-2">
              {["A", "S", "P"].map((c, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full bg-teal border-2 border-white flex items-center justify-center font-label text-xs text-white"
                >
                  {c}
                </div>
              ))}
            </div>
            <p className="font-label text-navy text-sm font-medium">750+ Reviews</p>
          </div>

          <a
            href="#services"
            className="inline-flex items-center gap-1 mt-8 font-label text-teal-deep text-sm hover:underline"
          >
            View All Services →
          </a>
        </motion.div>

        {/* RIGHT 2x2 */}
        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
          {cards.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className={cn("rounded-3xl border overflow-hidden flex flex-col", c.bg)}
            >
              <div className="overflow-hidden h-44 bg-gray-100">
                <img src={c.image} alt={c.alt} loading="lazy" decoding="async" className="w-full h-full object-cover" />
              </div>
              <div className="px-5 py-5 flex-1 flex flex-col">
                <h3 className="font-heading text-navy text-lg">{c.title}</h3>
                <p className="font-body text-text-muted text-sm mt-2 flex-1">{c.body}</p>
                <div className="flex justify-end mt-4">
                  <button
                    aria-label={`Learn more about ${c.title}`}
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform",
                      c.btn,
                    )}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
