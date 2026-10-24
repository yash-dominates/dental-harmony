import { useRef } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { REVIEWS } from "@/lib/data";

const Reviews = () => {
  const scroller = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    if (!scroller.current) return;
    scroller.current.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <section id="testimonials" className="py-20 md:py-24 px-5 md:px-8 lg:px-16" style={{ backgroundColor: "#EEE8FF" }}>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-4"
        >
          <span className="section-badge">Reviews</span>
          <h2 className="font-heading italic text-4xl lg:text-5xl text-navy leading-[1.1] mt-5">
            What Our Clients Say
          </h2>
          <p className="font-body text-text-muted text-sm mt-4 max-w-sm">
            Team carefully evaluates results to provide actionable insights for improving your oral health.
          </p>
          <div className="flex gap-3 mt-8">
            <button
              onClick={() => scroll(-1)}
              className="w-11 h-11 rounded-full border border-navy/20 text-navy hover:bg-navy hover:text-white transition flex items-center justify-center"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll(1)}
              className="w-11 h-11 rounded-full border border-navy/20 text-navy hover:bg-navy hover:text-white transition flex items-center justify-center"
              aria-label="Next review"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        <div className="lg:col-span-8 overflow-hidden">
          <div
            ref={scroller}
            className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none"
            style={{ scrollbarWidth: "none" }}
          >
            {REVIEWS.map((r, i) => (
              <motion.article
                key={r.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white rounded-3xl p-7 shadow-card flex-shrink-0 w-[290px] snap-start"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-teal flex items-center justify-center font-label text-sm text-white">
                    {r.initial}
                  </div>
                  <div>
                    <p className="font-heading text-navy text-base leading-tight">{r.name}</p>
                    <div className="flex gap-0.5 mt-1">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <Star
                          key={idx}
                          className={`w-3.5 h-3.5 ${idx < r.stars ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <h3 className="font-heading italic text-navy text-base mt-4">{r.title}</h3>
                <p className="font-body text-text-muted text-sm italic mt-2 leading-relaxed">"{r.text}"</p>
                <div className="border-t border-gray-100 mt-5 pt-3">
                  <p className="font-label text-text-muted text-xs">via Google</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
