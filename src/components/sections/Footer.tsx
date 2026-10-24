import { ArrowRight, ExternalLink, Facebook, Instagram, Mail, MapPin, Phone, Smile, Twitter, Youtube } from "lucide-react";

const quickLinks = ["Home", "About Us", "Our Services", "Gallery", "Contact Us"];
const services = [
  "Dental Implants",
  "Implants for Missing Teeth",
  "Tooth Fillings for Cavities",
  "Smile Designing & Cosmetic Dentistry",
  "Root Canal Treatment",
  "Braces & Aligners",
];
const socials = [Facebook, Instagram, Twitter, Youtube, ExternalLink];

const Footer = () => {
  return (
    <footer className="bg-navy py-16 px-5 md:px-8 lg:px-16 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <Smile className="w-7 h-7 text-teal-light" />
              <span className="font-heading text-white text-xl">Noida Dental Care</span>
            </div>
            <p className="font-label text-white/40 text-xs mt-2 uppercase tracking-wider">
              ISO 9001:2015 Certified
            </p>
            <p className="font-body text-white/55 text-xs mt-4 leading-relaxed">
              Searching for a reliable dental clinic in Noida? We offer advanced treatments including Dental Implants, RCT, Dentures, Fillings, Scaling, and Dental Caps with a focus on patient comfort and long-term results.
            </p>
            <a href="#book" className="btn-outline-light mt-5 text-xs px-5 py-2">
              Book Appointment <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-label text-white/40 text-xs uppercase tracking-widest mb-5">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l}>
                  <a href="#" className="font-body text-white/65 text-sm hover:text-teal-light transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-label text-white/40 text-xs uppercase tracking-widest mb-5">Services</h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s}>
                  <a href="#services" className="font-body text-white/65 text-sm hover:text-teal-light transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-label text-white/40 text-xs uppercase tracking-widest mb-5">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-teal-light flex-shrink-0 mt-0.5" />
                <a href="tel:+917982569724" className="font-body text-white/75 text-sm hover:text-teal-light">
                  +91 79825 69724
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-teal-light flex-shrink-0 mt-0.5" />
                <a href="mailto:info@noidadentalcare.in" className="font-body text-white/75 text-sm hover:text-teal-light">
                  info@noidadentalcare.in
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-teal-light flex-shrink-0 mt-0.5" />
                <span className="font-body text-white/75 text-sm">Sector 62, Noida, UP, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-body text-white/35 text-xs">
            © 2026 Noida Dental Care. All rights reserved.
          </p>
          <div className="flex gap-2">
            {socials.map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/45 hover:bg-teal/20 hover:text-teal-light transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
