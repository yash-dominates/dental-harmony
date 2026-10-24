

## Update Noida Dental Care — Images, Maps, WhatsApp Booking & SEO

### 1. Image replacements & performance
- Update image URLs in `src/lib/data.ts` (services, doctors, blog), `src/components/sections/Hero.tsx`, `ServicesPreview.tsx`, `About.tsx`, `Results.tsx`, `VideoTestimonials.tsx`, `Gallery.tsx` per the spec.
- Append `f_auto,q_auto` Cloudinary transform on every Cloudinary URL (inline, since data is hardcoded).
- Add `loading="lazy"` + `decoding="async"` to every `<img>` (hero bg uses `loading="eager"` + `fetchpriority="high"`).
- Add `bg-gray-100` placeholder background to image wrappers.
- Preload hero image in `index.html` via `<link rel="preload" as="image" href="...">`.
- Update `alt` text to the descriptive values provided.

### 2. Google Maps section (new)
- Create `src/components/sections/MapSection.tsx`:
  - Centered header block (`py-10 px-8`): "Find Us" badge + "We're Easy to Find" italic heading.
  - Full-width iframe wrapper, `h-72 md:h-96`, no border radius, embedded Sector 62 Noida map with proper title and lazy loading.
- Insert `<MapSection />` in `src/pages/Index.tsx` between `<Blog />` and `<Footer />`.

### 3. Multi-step appointment booking + WhatsApp
- Rewrite `src/components/sections/Appointment.tsx` to host a 3-step flow inside the right white card:
  - **Step indicator**: 3 dots connected by a line; teal for current/done, gray for upcoming.
  - **Step 1 — Treatment**: pill grid (2 cols) of 9 treatments; selected = `bg-teal text-white`; "Next" disabled until selection.
  - **Step 2 — Details**: First/Last name, Phone (req), Email (opt), Message, `<input type="date" min={today}>`, time `<select>` with the 9 listed slots; "← Back" + "Confirm →".
  - **Step 3 — Confirmation**: large teal check, "You're all set!", dynamic summary string, "Book via WhatsApp" button (MessageCircle icon, color `#25D366`), "← Start Over" link.
- Animate step transitions using `motion/react` `AnimatePresence` with x-slide (right→left forward, reverse on back).
- WhatsApp handler: build message string per spec, `encodeURIComponent`, open `https://wa.me/917982569724?text=...` via `window.open(..., '_blank')`.
- Left column of section unchanged (heading, feature glass cards, Call Now).

### 4. JSON-LD structured data (SEO)
- Add three `<script type="application/ld+json">` blocks in `index.html` `<head>`:
  1. `Dentist` + `LocalBusiness` (name, image, address, geo, hours, aggregateRating).
  2. `FAQPage` with the 6 FAQ items.
  3. `Dentist` with 2 individual `Review` entries (Rahul Sharma, Priya Verma).
- Also add hero `<link rel="preload" as="image" ...>` in the same head.

### Files touched
- `index.html` — preload + 3 JSON-LD scripts
- `src/lib/data.ts` — replace image URLs, add `f_auto,q_auto`, update alts
- `src/components/sections/Hero.tsx` — new bg URL, eager/high priority
- `src/components/sections/ServicesPreview.tsx` — replacement images + lazy/async/bg
- `src/components/sections/About.tsx` — new main image
- `src/components/sections/ServicesGrid.tsx` — uses updated data; ensure lazy/async/bg
- `src/components/sections/Results.tsx` — two new images
- `src/components/sections/VideoTestimonials.tsx` — two thumbnail updates
- `src/components/sections/Gallery.tsx` — three slot updates with new alts
- `src/components/sections/Blog.tsx` — middle card image swap
- `src/components/sections/Appointment.tsx` — full rewrite as 3-step + WhatsApp
- `src/components/sections/MapSection.tsx` — new
- `src/pages/Index.tsx` — insert `<MapSection />` before `<Footer />`

