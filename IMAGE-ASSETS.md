# Image Assets — Generation Guide

All images go in the `assets/` folder. Filenames must match **exactly** (the site
already references them). Until you drop a file in, a branded gradient placeholder
shows in its place, so the layout never looks broken.

## Brand palette (use in every image)
- Primary red: `#911515`
- Deep navy: `#162E54`
- Accent teal (sparingly): `#5EEAD4`
- Dark / navy backgrounds with red accents. Clean, corporate, professional.

## POSITIONING (read before generating)
The site is an **enterprise technology & systems integration** company (system integrator).
Imagery should feel corporate, clean, and abstract-technical — about integrated technology
environments, architecture, and professional collaboration.

## CONTENT RULES
- ✅ **ALLOWED:** abstract technology/network visualizations, connected-node diagrams,
  architecture/dashboard UI on screens, modern corporate settings, professional teams
  collaborating (mid/wide shots), clean office/technology environments.
- ✅ **For "system/software" topics:** show software / dashboards / architecture diagrams / network maps on screens.
- ❌ **DO NOT generate:** no logos, no readable text overlays, no people's faces in close-up,
  no military/weapon imagery, no proprietary product branding.
- Keep it commercial and vendor-neutral.

Recommended: photorealistic OR clean 3D render, soft lighting, shallow depth of field,
navy/red palette, negative space on one side for layout breathing room.

---

## 1. Homepage hero (3) — 1200×900 px (4:3), photo/3D

| File | Prompt |
|------|--------|
| `assets/hero-enterprise-1.png` | Abstract 3D visualization of an integrated enterprise technology environment — glowing connected nodes and layers linking infrastructure, platforms, and applications, dark navy background with red accent light, cinematic, corporate, negative space on the left |
| `assets/hero-enterprise-2.png` | A professional technology team collaborating around a large screen showing a solution architecture diagram (mid/wide shot, no readable text, no close-up faces), modern corporate room, navy tones with red accent lighting |
| `assets/hero-enterprise-3.png` | Clean abstract representation of reliable enterprise operations — interconnected systems and data flows forming one coherent environment over a dark navy canvas with subtle red accents, 3D render, corporate |

## 1b. Homepage partnership image (1) — 800×600 px (4:3)

| File | Prompt |
|------|--------|
| `assets/home-partnership.jpg` | Abstract technology ecosystem — multiple technology layers, platforms, and service nodes connected around one central architecture, dark navy with red accent connections, clean 3D render, corporate, no text |

## 2. Solution detail — feature images (5) — 800×600 px (4:3)

Used on each Solutions &amp; Services detail page (also reused as that page's hero banner).

| File | Prompt |
|------|--------|
| `assets/svc-infrastructure.jpg` | Abstract 3D visualization of enterprise digital infrastructure foundations — layered stacked platforms/blocks connected by glowing lines, dark navy with red accents, clean corporate render, no text |
| `assets/svc-software-platforms.jpg` | Abstract enterprise software platforms — application/dashboard UI panels floating and connected, dark theme with navy-red accents, clean 3D render, no readable text |
| `assets/svc-systems-integration.jpg` | Abstract systems-integration concept — many different technology nodes converging and interconnecting into one hub, dark navy with red accent connections, clean 3D render |
| `assets/svc-connectivity.jpg` | Abstract enterprise connectivity — connected location/network nodes linked across a dark map, glowing red-navy connection lines, clean corporate render, no text |
| `assets/svc-application-delivery.jpg` | Abstract application delivery — an application reaching multiple users/devices through connected layers, dark navy with red accents, clean 3D render, no text |

## 3. Interior page-hero banners — 1600×600 px (wide), dark &amp; atmospheric

Sit **behind the page title** at ~55% opacity with a dark red-navy overlay, so keep them
**dark, wide, and not too busy** with negative space on one side for the heading.
(Solution detail pages reuse their `svc-*.jpg` image as the hero automatically.)

| File | Prompt |
|------|--------|
| `assets/hero-about.jpg` | Wide dark abstract banner of an integrated technology environment — subtle connected nodes/architecture over deep navy with red glow, lots of negative space, cinematic |
| `assets/hero-solutions.jpg` | Wide dark banner showing five connected technology layers merging into one environment, abstract, navy-red accents, negative space for text |
| `assets/hero-approach.jpg` | Wide dark banner suggesting a structured process/pathway — connected stages flowing left to right, abstract, navy with red accents, negative space |
| `assets/hero-industries.jpg` | Wide dark banner of an abstract corporate skyline/sectors connected by a technology network overlay, deep navy-red, cinematic, space for text |
| `assets/hero-ecosystem.jpg` | Wide dark banner — many technology/service nodes arranged as an ecosystem around one architecture, navy-red accents, atmospheric |
| `assets/hero-contact.jpg` | Wide dark minimal banner — calm abstract network fading into deep navy with a soft red glow, plenty of negative space for text |

## 4. Supporting images — 800×600 px (4:3)

| File | Prompt |
|------|--------|
| `assets/home-partnership.jpg` | Abstract technology ecosystem — multiple technology layers, platforms, and service nodes connected around one central architecture, dark navy with red accent connections, clean 3D render, no text |
| `assets/about-integrator.jpg` | Abstract "bringing the environment together" — separate technology components merging into one connected whole, dark navy with red accents, clean 3D render, no text |
| `assets/ecosystem-main.jpg` | Abstract independent-integration concept — one central node coordinating many surrounding platforms/services, dark navy with red accent links, clean 3D render, no text |

---

### Notes
- `.png` for the homepage hero (crisper on gradients), `.jpg` for the rest. Keep files under ~300 KB where possible.
- Every image slot has a branded gradient placeholder + fallback, so the layout never breaks even before you add the images.
- All imagery is abstract/corporate and vendor-neutral — no logos, no readable text, no close-up faces, no military/weapon imagery.
