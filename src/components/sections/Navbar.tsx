import { useEffect, useState } from "react";
import { ArrowRight, Menu, Phone, Smile, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { NAV_LINKS } from "@/lib/data";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
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
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      )}
    >
      <div
        className={cn(
          "flex items-center justify-between mx-6 mt-4 px-6 py-2 rounded-full transition-all duration-300",
          "bg-black/80 backdrop-blur-md",
          scrolled && "shadow-card",
        )}
      >
        <a href="#home" className="flex items-center gap-2">
          <Smile className="w-7 h-7 text-teal" strokeWidth={2.2} />
            <span className="font-heading text-xl tracking-tight text-white">
              Dental Clinic
            </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "font-label text-sm font-medium transition-colors text-white",
                active === link.href ? "text-teal-light" : "hover:text-teal-light",
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <div className="hidden md:flex items-center gap-2 font-body text-sm text-white">
            <Phone className="w-4 h-4" />
            <span>+91 79825 69724</span>
          </div>
          <a href="#book" className="btn-primary hidden sm:inline-flex text-white">
            Book a Call <ArrowRight className="w-4 h-4" />
          </a>

          <Sheet>
            <SheetTrigger asChild>
              <button
                aria-label="Open menu"
                className="lg:hidden p-2 rounded-full text-white hover:bg-white/10 transition-colors"
              >
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white border-none w-[85vw] sm:w-96 p-0">
              <div className="flex flex-col h-full p-8">
                <div className="flex items-center gap-2 mb-12">
                  <Smile className="w-7 h-7 text-teal" />
                  <span className="font-heading text-xl text-navy">Dental Clinic</span>
                </div>
                <nav className="flex flex-col gap-5 flex-1">
                  {NAV_LINKS.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <a
                        href={link.href}
                        className="font-heading text-2xl text-navy hover:text-teal transition-colors"
                      >
                        {link.label}
                      </a>
                    </SheetClose>
                  ))}
                </nav>
                <SheetClose asChild>
                  <a href="#book" className="btn-primary w-full justify-center">
                    Book a Call <ArrowRight className="w-4 h-4" />
                  </a>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
