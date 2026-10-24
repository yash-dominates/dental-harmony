import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight, Shield } from "lucide-react";
import { DOCTORS, IMAGES } from "@/lib/data";

const useCountUp = (target: number, start: boolean, duration = 1400) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start, duration]);
  return val;
};

const Stat = ({ value, suffix, label, start }: { value: number; suffix: string; label: string; start: boolean }) => {
  const v = useCountUp(value, start);
  return (
    <div>
      <p className="font-heading italic text-3xl md:text-4xl text-navy">
        {v}
        {suffix}
      </p>
      <p className="font-label text-text-muted text-xs uppercase tracking-wider mt-1">{label}</p>
    </div>
  );
};

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="bg-ivory py-20 md:py-24 px-5 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="bg-gray-100 rounded-3xl overflow-hidden">
            <img
              src={IMAGES.aboutClinic}
              alt="Noida Dental Care clinic treatment room"
              loading="lazy"
              decoding="async"
              className="w-full h-[420px] md:h-[520px] object-cover"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute -bottom-6 right-0 sm:-right-6 glass-card-light rounded-2xl p-5 w-48"
          >
            <p className="font-heading italic text-4xl text-teal-deep">98%</p>
            <p className="font-label text-navy/60 text-xs uppercase tracking-wider mt-1">Client Satisfaction</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute -top-4 left-0 sm:-left-6 glass-card-light rounded-full px-4 py-3 flex items-center gap-2"
          >
            <Shield className="w-4 h-4 text-teal-deep" />
            <span className="font-label text-navy text-xs font-medium">ISO 9001 Certified</span>
          </motion.div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-badge">/ About Dental</span>
          <h2 className="font-heading italic text-4xl lg:text-5xl text-navy leading-[1.1] mt-5">
            Excellence in Dentistry With Compassionate Care
          </h2>
          <p className="font-body text-text-muted text-sm leading-relaxed mt-5 max-w-xl">
            We believe that advanced dental care should be accessible. Our treatments combine modern techniques with cost-effective solutions, ensuring value without compromise. Under the guidance of Dr. Aakash Sharma and Dr. Priya Mehta, every smile we treat receives attention, accuracy, and a personalized approach.
          </p>

          <div className="grid grid-cols-3 gap-6 mt-10">
            <Stat value={15} suffix="+" label="Years Experience" start={inView} />
            <Stat value={10} suffix="K+" label="Happy Patients" start={inView} />
            <Stat value={5} suffix=".0★" label="Google Rating" start={inView} />
          </div>

          <a href="#book" className="btn-primary mt-10">
            Book Your Visit Today <ArrowRight className="w-4 h-4" />
          </a>

          <div className="flex flex-wrap gap-3 mt-8">
            {DOCTORS.slice(0, 2).map((d) => (
              <div key={d.name} className="glass-card-light rounded-full pl-1 pr-4 py-1 flex items-center gap-2">
                <img src={d.image} alt={d.name} className="w-9 h-9 rounded-full object-cover" />
                <div>
                  <p className="font-label text-xs text-navy font-medium leading-tight">{d.name}</p>
                  <p className="font-body text-[11px] text-text-muted leading-tight">{d.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
