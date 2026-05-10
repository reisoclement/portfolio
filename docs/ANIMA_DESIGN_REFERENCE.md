# Anima (animaapp.com) — Design Reference

_Captured 2026-05-08 from https://www.animaapp.com/ as a reference spec for selective adoption in this portfolio site._

> ⚠️ **This is a study reference, not a clone target.** Anima's product copy, logo, brand-logo bar, and testimonial carousels are theirs and don't fit this portfolio's content. Use the **layout system, spacing rhythm, component patterns, and motion vocabulary** below — not the literal pixels.

---

## 1. Layout structure

| Region | Pattern |
|--------|---------|
| Header | Full-width, non-sticky. Logo left, dropdown nav center (Product groups), auth buttons right (Login text + Signup solid). Mobile: hamburger collapse. |
| Hero | Center-aligned. Eyebrow / large headline / sub-headline / dual CTA row / template-card carousel below the fold of the CTAs. |
| Body sections | Modular card-based, alternating text-left/visual-right then mirrored. Generous vertical rhythm. |
| Social proof | Brand-logo strip + repeating testimonial carousels woven between feature sections. |
| Footer | 4-column link grid: Product, Use Cases, Resources, Company. Copyright + socials beneath. |

Container max-width feels around **1200–1280px**, with horizontal gutters scaling on mobile.

---

## 2. Color palette

| Role | Approx. value | Notes |
|------|---------------|-------|
| Background (primary) | `#FFFFFF` | Clean white throughout |
| Background (subtle section) | `#F6F7F9` / very light gray | Used to break vertical rhythm |
| Background (dark accent section) | Deep navy / near-black | Used for testimonial spotlight blocks |
| Text primary | `#0A0A0A` / charcoal | High-contrast on white |
| Text secondary | `#4A4F57` mid-gray | Body copy and supporting text |
| Accent (signature) | Bright **cyan/teal** (~`#00E0CA` / `#1FE0C2`) | Buttons, link hovers, icon fills |
| Accent (secondary) | Soft pastel pinks / purples in product imagery | Decorative, not structural |
| Border / divider | `#E5E7EB` very light gray | Card outlines, hairlines |

**Signature move:** Restrained palette — only one strong accent (the cyan), everything else is grayscale.

---

## 3. Typography

- **Display / heading font:** Custom sans-serif, geometric, slightly tight letter-spacing. Reads as a Söhne / Inter / GT Walsheim family. Weight 700–800 for hero, 600–700 for section headings.
- **Body:** Same sans-serif at 400–500. Line-height ~1.5.
- **Scale (approx):**

| Use | Size | Weight | Line-height |
|-----|------|--------|-------------|
| Hero headline | 56–72px | 800 | 1.05 |
| Section heading H2 | 36–48px | 700 | 1.1 |
| Sub-heading H3 | 22–24px | 600 | 1.25 |
| Body | 16–17px | 400 | 1.55 |
| Small / caption | 13–14px | 500 | 1.4 |

No serif. No mixed families. Strong hierarchy comes from size + weight contrast, not from font swaps.

---

## 4. Spacing rhythm

- **Section vertical padding:** ~96–120px desktop, ~64px mobile.
- **Inter-card gap:** 24–32px.
- **Card internal padding:** 24–32px.
- **Page horizontal gutter:** 24px mobile → 48–64px desktop.

Whitespace is the headline feature. Sections never feel crowded; one thought per band.

---

## 5. Hero specifics

- Centered text block, ~700px max-width.
- Eyebrow word ("New" / similar) absent — they go straight to the headline.
- Headline has a **rotating word** in the accent cyan (the kind of "AI with an Eye for [Design / Code / UX]"-style swap).
- Sub-headline 18–20px, gray-600, ~580px max-width.
- Dual CTAs side-by-side: primary (solid black or solid cyan) + secondary (outlined).
- Below CTAs: a row of 3–4 **template cards** with hover lift, showing real product output.

---

## 6. Navigation

- Non-sticky, transparent until scroll then white bg with hairline border.
- Three dropdown categories with caret. Hover opens a **mega-menu panel** with grouped links and small product icons.
- Right-side auth: "Login" text-only, "Sign up" solid black or solid cyan pill.

---

## 7. Component patterns

### Buttons

| Variant | Style |
|---------|-------|
| Primary | Solid background (black or cyan), white text, 8–12px radius, 12–14px vertical padding, medium weight, no shadow. |
| Secondary | Transparent or white bg, 1px border in text color, same shape as primary. |
| Icon button | SVG + text, gap 8px. |

### Cards

- White background, **1px border** in `#E5E7EB`, radius **12–16px**, no/very subtle shadow.
- Hover: shadow grows + slight `translateY(-2px)`.
- Title bottom-left or top-left, supporting line in muted gray.

### Pills / badges

- Pill-shaped (`border-radius: 999px`), small text (12–13px), light gray bg or accent-tinted bg, used for "New", "Beta", category tags.

### Testimonial card

- Avatar (circle, 40–48px) + name + verified-checkmark + handle row.
- Quote in normal body weight, 2–4 lines.
- Source-platform badge (Twitter/X, Product Hunt, Capterra) in the corner.

---

## 8. Visual motifs

- **Product screenshots dominate** — the hero and feature sections are illustrated by real UI screenshots framed in soft cards, not by abstract illustration.
- **Subtle gradient washes** behind certain sections (cool blue → soft pink) for depth, never busy.
- **No mascot, no custom illustration.** Brand identity comes from the cyan accent + screenshot-forward storytelling.
- Brand-logo bar uses grayscale logos at uniform height (~24px).

---

## 9. Animations & micro-interactions

- **Card hover lift:** ~150ms ease, `translateY(-2px)` + shadow growth.
- **Button hover:** background-darken or accent-shift, 120ms.
- **Headline word rotator:** type-in/type-out swap, ~2.5s per word.
- **Testimonial carousel:** auto-advance with manual dots, smooth slide.
- **Mega-menu open:** fade + slight slide-down, ~180ms.
- **Scroll reveals:** mild — fade + 8px upward slide on section entry.

No parallax, no heavy scroll-jacking. Motion is functional and quiet.

---

## 10. Signature design moves to consider stealing

1. **One bold accent color**, used sparingly — earns its weight.
2. **Screenshot-forward storytelling**: every feature claim sits next to a real visual.
3. **Modular card rhythm** as the default section layout.
4. **Generous vertical whitespace** — a section is one idea, not three.
5. **Hover lift on cards** as a consistent, low-cost interactive language.

---

## What to adopt vs. skip for this portfolio

| Keep this site's identity | Borrow from Anima |
|---------------------------|-------------------|
| Notebook palette (cream `#FAF7F2`, copper accent, Fraunces serif headings) — it's the brand | Layout grid: hero + alternating feature sections + card grid |
| Quiet, editorial tone | Card hover lift, hairline borders, 12–16px radii |
| Locale-aware content | Generous vertical section padding (96–120px) |
| Animation-first content (each page features a Remotion video) | Screenshot-forward feature blocks (your "screenshots" = animation posters/MP4s) |
| | Strong size/weight typography hierarchy |
| | Pill badges for tags |
| | Subtle scroll-reveal (fade + 8px) |

**Skip:**
- Cyan accent (clashes with copper)
- Sans-serif body (Fraunces is the brand)
- Brand-logo bar / testimonial carousels (not appropriate for a personal portfolio)
- Mega-menu nav (over-engineered for a 5-page site)
- Dual-product CTAs (you have one product: the work itself)

---

## Source

Captured from animaapp.com home page on 2026-05-08. Re-fetch to verify if applying changes more than 6 months later — Anima iterates fast.
