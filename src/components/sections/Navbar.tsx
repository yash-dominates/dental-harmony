import { useEffect, useState } from "react";
import { ArrowRight, Menu, Phone } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { NAV_LINKS } from "@/lib/data";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const ToothLogoIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path
      d="M7 3C4.5 3 3 5 3 8C3 11.5 4 15 5.5 18.5C6.5 20.8 8.5 21 9.5 18C10.5 15 11 13 12 13C13 13 13.5 15 14.5 18C15.5 21 17.5 20.8 18.5 18.5C20 15 21 11.5 21 8C21 5 19.5 3 17 3C14.5 3 13.5 4.5 12 4.5C10.5 4.5 9.5 3 7 3Z"
      className="fill-teal/15 stroke-teal"
    />
    <path d="M9 10C9.8 11.2 10.8 11.8 12 11.8C13.2 11.8 14.2 11.2 15 10" className="stroke-teal" />
  </svg>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.querySelector(l.href)).filter(Boolean) as Element[];
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-navy/85 backdrop-blur-xl border-b border-white/10 shadow-lg py-3 sm:py-3.5"
          : "bg-transparent py-5 sm:py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <ToothLogoIcon className="w-7 h-7 sm:w-8 sm:h-8 text-teal transition-transform group-hover:scale-105" />
          <span className="font-heading text-xl sm:text-2xl tracking-tight text-white font-medium">
            Dental Clinic
          </span>
        </a>

        {/* Center Nav Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "relative font-label text-sm font-medium transition-colors py-1",
                active === link.href ? "text-teal-light font-semibold" : "text-white/90 hover:text-white"
              )}
            >
              {link.label}
              {active === link.href && (
                <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-teal rounded-full" />
              )}
            </a>
          ))}
        </nav>

        {/* Right Action Group */}
        <div className="flex items-center gap-4 sm:gap-6">
          <a
            href="tel:+917982569724"
            className="hidden md:flex items-center gap-2 font-body text-sm text-white/90 hover:text-white transition-colors"
          >
            <Phone className="w-4 h-4 text-teal" />
            <span>+91 79825 69724</span>
          </a>

          <a
            href="#book"
            className="btn-primary hidden sm:inline-flex text-white font-label text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-lg shadow-teal/20 hover:shadow-teal/40 transition-all"
          >
            Book a Call <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1.5" />
          </a>

          {/* Clean White Hamburger Menu for Mobile / Tablet */}
          <Sheet>
            <SheetTrigger asChild>
              <button
                aria-label="Open menu"
                className="lg:hidden p-1.5 text-white hover:text-teal transition-colors"
              >
                <Menu className="w-7 h-7" strokeWidth={1.8} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-navy/95 backdrop-blur-2xl border-white/10 w-[85vw] sm:w-96 p-0 text-white">
              <div className="flex flex-col h-full p-8">
                <div className="flex items-center justify-between mb-10">
                  <div className="flex items-center gap-2.5">
                    <ToothLogoIcon className="w-7 h-7 text-teal" />
                    <span className="font-heading text-xl text-white">Dental Clinic</span>
                  </div>
                </div>
                <nav className="flex flex-col gap-6 flex-1">
                  {NAV_LINKS.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <a
                        href={link.href}
                        className="font-heading text-2xl text-white/90 hover:text-teal transition-colors"
                      >
                        {link.label}
                      </a>
                    </SheetClose>
                  ))}
                </nav>
                <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
                  <a
                    href="tel:+917982569724"
                    className="flex items-center gap-2 text-white/80 font-body text-sm"
                  >
                    <Phone className="w-4 h-4 text-teal" />
                    <span>+91 79825 69724</span>
                  </a>
                  <SheetClose asChild>
                    <a href="#book" className="btn-primary w-full justify-center text-white py-3">
                      Book Appointment <ArrowRight className="w-4 h-4 ml-1.5" />
                    </a>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
