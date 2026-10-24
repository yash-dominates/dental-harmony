import { FormEvent, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Award, Check, Layers, MessageCircle, Phone, Users } from "lucide-react";
import { TIME_SLOTS, TREATMENTS, WHATSAPP_NUMBER } from "@/lib/data";
import { cn } from "@/lib/utils";

const features = [
  { icon: Award, title: "Expert Dentists", body: "15+ years of experience" },
  { icon: Layers, title: "Modern Technology", body: "State-of-the-art equipment" },
  { icon: Users, title: "10K+ Happy Patients", body: "5.0★ Google Rating" },
];

type FormState = {
  treatment: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
  date: string;
  time: string;
};

const EMPTY: FormState = {
  treatment: "",
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  message: "",
  date: "",
  time: TIME_SLOTS[0],
};

const Appointment = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [data, setData] = useState<FormState>(EMPTY);

  const today = new Date().toISOString().split("T")[0];

  const go = (next: 1 | 2 | 3, dir: 1 | -1) => {
    setDirection(dir);
    setStep(next);
  };

  const update = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    setData((d) => ({ ...d, [k]: v }));

  const buildWhatsApp = () => {
    const msg =
      `Hi Noida Dental Care! 🦷\n\n` +
      `Name: ${data.firstName} ${data.lastName}\n` +
      `Phone: ${data.phone}\n` +
      `Email: ${data.email || "—"}\n` +
      `Treatment: ${data.treatment}\n` +
      `Preferred Date: ${data.date || "—"}\n` +
      `Preferred Time: ${data.time}\n` +
      `Message: ${data.message || "—"}`;

    // Analytics: persist booking attempt + push gtag event
    try {
      const entry = {
        timestamp: new Date().toISOString(),
        treatment: data.treatment,
        date: data.date,
        time: data.time,
      };
      const key = "waClinics_bookings";
      const existing = JSON.parse(localStorage.getItem(key) || "[]");
      existing.push(entry);
      localStorage.setItem(key, JSON.stringify(existing));
      (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag?.(
        "event",
        "whatsapp_book",
        { treatment: data.treatment, date: data.date, time: data.time },
      );
    } catch {
      // ignore analytics failures
    }

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,
      "_blank",
    );
  };

  const onConfirm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    go(3, 1);
  };

  const reset = () => {
    setData(EMPTY);
    go(1, -1);
  };

  const slideVariants = {
    enter: (dir: 1 | -1) => ({ x: dir * 40, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: 1 | -1) => ({ x: dir * -40, opacity: 0 }),
  };

  return (
    <section id="book" className="py-20 md:py-24 px-5 md:px-8 lg:px-16 bg-gradient-purple text-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading italic text-4xl lg:text-5xl text-white leading-[1.1]">
            Start Your Dental Care Journey Today
          </h2>
          <p className="font-body text-white/75 text-sm mt-4 max-w-md">
            If you're experiencing discomfort or simply want a healthier smile, we are here to help.
          </p>

          <div className="flex flex-col gap-3 mt-8">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass-card rounded-2xl px-5 py-4 flex items-center gap-4"
              >
                <div className="w-11 h-11 rounded-full bg-white/15 flex items-center justify-center">
                  <f.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-label text-white text-sm font-semibold">{f.title}</p>
                  <p className="font-body text-white/65 text-xs">{f.body}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <a
            href="tel:+917982569724"
            className="inline-flex items-center gap-2 mt-8 bg-white text-navy rounded-full px-6 py-3 font-label font-medium text-sm hover:scale-105 transition-transform"
          >
            <Phone className="w-4 h-4" /> Call Now
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-7 md:p-8 shadow-card-hover overflow-hidden"
        >
          {/* Step indicator */}
          <div className="flex items-center justify-center gap-2 mb-6">
            {[1, 2, 3].map((n, i) => (
              <div key={n} className="flex items-center">
                <div
                  className={cn(
                    "w-3 h-3 rounded-full transition-colors",
                    step >= n ? "bg-teal" : "bg-gray-300",
                  )}
                />
                {i < 2 && (
                  <div
                    className={cn(
                      "w-10 h-px transition-colors",
                      step > n ? "bg-teal" : "bg-gray-300",
                    )}
                  />
                )}
              </div>
            ))}
          </div>

          <h3 className="font-heading italic text-navy text-2xl text-center mb-6">
            Book Appointment
          </h3>

          <div className="relative min-h-[360px]">
            <AnimatePresence mode="wait" custom={direction}>
              {step === 1 && (
                <motion.div
                  key="step1"
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                >
                  <p className="font-label text-navy text-sm font-medium text-center mb-4">
                    What do you need help with?
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {TREATMENTS.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => update("treatment", t)}
                        className={cn(
                          "rounded-full border px-4 py-2.5 font-label text-sm transition-all",
                          data.treatment === t
                            ? "bg-teal text-white border-teal"
                            : "border-teal/30 text-navy hover:bg-teal/10 hover:border-teal",
                        )}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                  <button
                    type="button"
                    disabled={!data.treatment}
                    onClick={() => go(2, 1)}
                    className="btn-primary w-full justify-center mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.form
                  key="step2"
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                  onSubmit={onConfirm}
                >
                  <div className="grid sm:grid-cols-2 gap-3">
                    <input
                      required
                      placeholder="First Name *"
                      value={data.firstName}
                      onChange={(e) => update("firstName", e.target.value)}
                      className="form-field"
                    />
                    <input
                      required
                      placeholder="Last Name *"
                      value={data.lastName}
                      onChange={(e) => update("lastName", e.target.value)}
                      className="form-field"
                    />
                    <input
                      required
                      type="tel"
                      placeholder="Phone *"
                      value={data.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      className="form-field"
                    />
                    <input
                      type="email"
                      placeholder="Email (optional)"
                      value={data.email}
                      onChange={(e) => update("email", e.target.value)}
                      className="form-field"
                    />
                    <input
                      required
                      type="date"
                      min={today}
                      value={data.date}
                      onChange={(e) => update("date", e.target.value)}
                      className="form-field"
                    />
                    <select
                      value={data.time}
                      onChange={(e) => update("time", e.target.value)}
                      className="form-field"
                    >
                      {TIME_SLOTS.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                  <textarea
                    rows={3}
                    placeholder="Your Message (optional)"
                    value={data.message}
                    onChange={(e) => update("message", e.target.value)}
                    className="form-field mt-3 w-full resize-none"
                  />
                  <div className="flex items-center justify-between mt-5 gap-4">
                    <button
                      type="button"
                      onClick={() => go(1, -1)}
                      className="font-label text-navy/70 text-sm hover:text-navy"
                    >
                      ← Back
                    </button>
                    <button type="submit" className="btn-primary">
                      Confirm <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.form>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                  className="text-center pt-2"
                >
                  <div className="w-16 h-16 rounded-full bg-teal/15 flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8 text-teal" strokeWidth={3} />
                  </div>
                  <h4 className="font-heading italic text-navy text-2xl mt-5">
                    You're all set!
                  </h4>
                  <p className="font-body text-text-muted text-sm mt-3 max-w-sm mx-auto">
                    We'll confirm your <span className="text-navy font-medium">{data.treatment}</span> appointment on{" "}
                    <span className="text-navy font-medium">{data.date || "your selected date"}</span> at{" "}
                    <span className="text-navy font-medium">{data.time}</span>. Expect a call at{" "}
                    <span className="text-navy font-medium">{data.phone}</span> soon.
                  </p>
                  <button
                    type="button"
                    onClick={buildWhatsApp}
                    className="inline-flex items-center gap-2 mt-6 rounded-full px-6 py-3 font-label font-medium text-sm text-white hover:scale-105 transition-transform"
                    style={{ backgroundColor: "#25D366" }}
                  >
                    <MessageCircle className="w-4 h-4" /> Book via WhatsApp
                  </button>
                  <div className="mt-4">
                    <button
                      type="button"
                      onClick={reset}
                      className="font-label text-navy/60 text-sm hover:text-navy"
                    >
                      ← Start Over
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <style>{`
            .form-field {
              width: 100%;
              background: white;
              border: 1px solid hsl(var(--border));
              border-radius: 14px;
              padding: 12px 16px;
              font-family: 'DM Sans', sans-serif;
              font-size: 14px;
              color: hsl(var(--navy));
              outline: none;
              transition: all 0.2s ease;
            }
            .form-field::placeholder { color: hsl(var(--text-light)); }
            .form-field:focus {
              border-color: hsl(var(--teal));
              box-shadow: 0 0 0 3px hsl(var(--teal) / 0.18);
            }
          `}</style>
        </motion.div>
      </div>
    </section>
  );
};

export default Appointment;
