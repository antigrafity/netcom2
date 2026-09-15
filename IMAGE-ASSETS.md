# Image Assets — Generation Guide

All images go in the `assets/` folder. Filenames must match **exactly** (the site
already references them). Until you drop a file in, a branded gradient placeholder
shows in its place, so the layout never looks broken.

## Brand palette (use in every image)
- Primary red: `#911515`
- Deep navy: `#162E54`
- Accent teal (sparingly): `#5EEAD4`
- Dark / navy backgrounds with red accents. Clean, corporate, professional.

## CONTENT RULES (important — read before generating)
- ✅ **ALLOWED:** physical wireless gear — antennas, radios, antenna towers/masts,
  microwave dishes, repeaters, dispatch consoles, handheld/mobile radios, feeders/cabling
  that belongs to an antenna system, field technicians working on towers/antennas.
- ✅ **ALLOWED for "system" topics:** show the **software / dashboard / UI** — coverage
  maps, link-budget charts, monitoring dashboards, network maps on screens.
- ❌ **DO NOT generate:** server racks, network switches, routers, patch-panel cabling,
  data-center rooms, blinking equipment rack rooms.
- ❌ No people's faces in close-up, no logos, no readable text overlays, no military/weapon imagery.

Recommended: photorealistic OR clean 3D render, soft lighting, shallow depth of field,
negative space on one side for layout breathing room.

---

## 1. Homepage hero (3) — 1200×900 px (4:3), photo/3D

| File | Prompt |
|------|--------|
| `assets/hero-wireless-1.png` | Wireless communication engineers reviewing a coverage map on a large wall screen (software dashboard, no hardware racks), dark navy room with red accent lighting, cinematic, shallow depth of field, corporate |
| `assets/hero-wireless-2.png` | Microwave dish antenna and antenna array on a communication tower at dusk, navy sky with subtle red glow, sharp technical detail, professional photography |
| `assets/hero-wireless-3.png` | Operators at a dispatch console watching wireless network dashboards on screens (software only, no server racks), dark room, navy and red accent lighting, wide shot |

## 2. Homepage + Ecosystem thumbnails (6) — 640×400 px (16:10), photo

| File | Prompt |
|------|--------|
| `assets/eco-radio.jpg` | Professional two-way / trunked radio base-station unit and handheld radios on a clean studio surface, navy tones with red accent (no racks) |
| `assets/eco-microwave.jpg` | Point-to-point microwave link dish mounted on a communication tower, blue sky, crisp technical detail |
| `assets/eco-antenna.jpg` | Antenna tower / mast against a dusk sky, navy-to-red gradient sky, clean silhouette |
| `assets/eco-repeater.jpg` | Hilltop radio repeater with antennas on a mast, outdoor infrastructure, professional (antennas only, no server racks) |
| `assets/eco-dispatch.jpg` | Dispatch console workstation with headset and screens showing a communication dashboard, dark control room, navy-red accent (console + software, no racks) |
| `assets/eco-network.jpg` | Abstract communication network map — glowing nodes and links over a dark navy map, red accent connections (software visualization) |

## 3. Service detail — main feature image (7) — 800×600 px (4:3)

| File | Prompt |
|------|--------|
| `assets/svc-consulting.jpg` | Field engineer performing a wireless site survey outdoors with a tablet near an antenna mast, professional, navy-red mood |
| `assets/svc-design.jpg` | Wireless coverage heatmap and link-budget charts on a screen (software UI, dark theme, red-navy accents), no hardware |
| `assets/svc-implementation.jpg` | Technicians installing an antenna and radio unit on a mast/tower, professional field photo (antennas only, no server racks) |
| `assets/svc-installation.jpg` | Rigger installing an antenna on a tower with safety harness, wide shot, dusk sky, professional |
| `assets/svc-monitoring.jpg` | Wireless network monitoring dashboard on large screens (software only), dark NOC room, navy-red accent lighting |
| `assets/svc-maintenance.jpg` | Field technician servicing antenna/feeder equipment on a tower or mast, daylight, professional (no racks) |
| `assets/svc-managed.jpg` | Managed-services team at a dispatch console with SLA dashboards on screens (software + console, no server racks), navy-red |

## 4. Service detail — secondary image (7) — 900×600 px (3:2)

| File | Prompt |
|------|--------|
| `assets/svc-consulting-2.jpg` | Close-up of a wireless site survey in progress — tablet with signal readings held up toward an antenna mast, outdoor, navy-red mood |
| `assets/svc-design-2.jpg` | Wireless coverage map / propagation model on a widescreen display (software UI, dark theme, red-navy), no hardware |
| `assets/svc-implementation-2.jpg` | Antenna and radio system being mounted and connected on a mast, hands-on field work, professional (antennas only, no racks) |
| `assets/svc-installation-2.jpg` | Precise antenna dish alignment on a tower with a technician using a measurement tool, dusk sky, professional |
| `assets/svc-monitoring-2.jpg` | Live wireless network monitoring dashboard with charts and a coverage map on screen (software only), dark navy-red |
| `assets/svc-maintenance-2.jpg` | Technician performing preventive maintenance on antenna hardware atop a tower, safety harness, daylight (no racks) |
| `assets/svc-managed-2.jpg` | Managed operations dashboard showing SLA and network status on screens at a console (software + console, no racks) |

## 4b. Services page — category card thumbnails (21) — 480×300 px (16:10)

Small thumbnails on top of the 3 preview cards per category on the Services page.
Keep them simple and recognizable at small size.

| File | Prompt |
|------|--------|
| `assets/svc-thumb-consulting-1.jpg` | Wireless site survey — tablet with signal readings near an antenna mast, small clean thumbnail, navy-red |
| `assets/svc-thumb-consulting-2.jpg` | Coverage assessment — coverage heatmap on a screen (software), dark theme, red-navy |
| `assets/svc-thumb-consulting-3.jpg` | Wireless planning — planning charts / frequency plan on screen (software), navy-red |
| `assets/svc-thumb-design-1.jpg` | Wireless system design — system diagram / frequency plan on screen (software) |
| `assets/svc-thumb-design-2.jpg` | Link budget & coverage — link-budget chart and coverage map on screen (software) |
| `assets/svc-thumb-design-3.jpg` | Antenna & microwave design — antenna and microwave dish close-up, technical |
| `assets/svc-thumb-implementation-1.jpg` | Radio & infrastructure — radio base unit and antenna being installed (no racks) |
| `assets/svc-thumb-implementation-2.jpg` | Repeater & microwave — microwave dish / repeater antenna on a mast |
| `assets/svc-thumb-implementation-3.jpg` | System integration — network topology map on screen (software), navy-red |
| `assets/svc-thumb-installation-1.jpg` | Equipment & antenna installation — antenna being mounted on a tower |
| `assets/svc-thumb-installation-2.jpg` | Testing & measurement — antenna alignment with a measurement tool |
| `assets/svc-thumb-installation-3.jpg` | Commissioning & acceptance — checklist / acceptance report on a tablet, field |
| `assets/svc-thumb-monitoring-1.jpg` | Network monitoring — live network dashboard on screen (software), dark navy-red |
| `assets/svc-thumb-monitoring-2.jpg` | Spectrum & link monitoring — spectrum analyzer view on screen (software) |
| `assets/svc-thumb-monitoring-3.jpg` | Performance & reporting — performance charts / report on screen (software) |
| `assets/svc-thumb-maintenance-1.jpg` | Preventive maintenance — technician servicing antenna hardware on a tower |
| `assets/svc-thumb-maintenance-2.jpg` | Troubleshooting & repair — technician with a test instrument at an antenna site |
| `assets/svc-thumb-maintenance-3.jpg` | Optimization & upgrade — before/after coverage map on screen (software) |
| `assets/svc-thumb-managed-1.jpg` | Managed network — network status dashboard on screen (software) |
| `assets/svc-thumb-managed-2.jpg` | Remote monitoring & support — dispatch console with dashboards (console + software) |
| `assets/svc-thumb-managed-3.jpg` | SLA & reporting — SLA dashboard / report on screen (software), navy-red |

## 5. Projects / Case Studies (7) — 640×400 px (16:10)

| File | Prompt |
|------|--------|
| `assets/proj-network-design.jpg` | Multi-site wireless coverage map and frequency plan on a screen (software UI, dark theme, red-navy) |
| `assets/proj-microwave.jpg` | Microwave backhaul link between two antenna towers over terrain, path-profile concept, technical |
| `assets/proj-radio.jpg` | Radio communication rollout — base-station antenna and handheld radios in the field, professional (no racks) |
| `assets/proj-integration.jpg` | Communication network integration shown as a network map / topology on screen (software UI), dark navy-red — NOT server racks |
| `assets/proj-commissioning.jpg` | Antenna/tower installation and testing with a measurement instrument, professional field photo |
| `assets/proj-monitoring.jpg` | 24/7 wireless network monitoring dashboards on screens (software only), dark navy-red control room |
| `assets/proj-managed.jpg` | SLA managed operations — dashboards on screens at a dispatch console (software + console, no racks) |

## 6. About (1) — 800×600 px (4:3)

| File | Prompt |
|------|--------|
| `assets/about-team.jpg` | Wireless engineering team collaborating around a table with antenna/coverage plans and laptops, bright modern office, professional, welcoming |

## 7. Interior page-hero banners (6) — 1600×600 px (wide), dark & atmospheric

These sit **behind the page title** at ~55% opacity with a dark red-navy overlay on top,
so keep them **dark, wide, and not too busy** (detail lives on one side, empty space on the
other for the heading). The 7 service pages reuse their `svc-*.jpg` images automatically —
only these 6 top-level banners are needed.

| File | Prompt |
|------|--------|
| `assets/hero-about.jpg` | Wide atmospheric shot of an antenna tower / mast silhouette against a dark dusk sky, deep navy with subtle red glow, lots of negative space on the left, cinematic banner |
| `assets/hero-services.jpg` | Wide dark banner of multiple antennas and a microwave dish on a communication tower, moody navy sky, red accent light, negative space for text |
| `assets/hero-ecosystem.jpg` | Wide dark banner mixing antenna hardware with a faint communication network map overlay (software), navy-red, atmospheric, space for text |
| `assets/hero-industries.jpg` | Wide dark banner of an antenna tower over an industrial/energy site skyline at dusk, deep navy-red tones, cinematic, space for text |
| `assets/hero-projects.jpg` | Wide dark banner of two antenna towers connected by a microwave link over terrain at dusk, navy-red, atmospheric, space for text |
| `assets/hero-contact.jpg` | Wide dark banner of an antenna array against an evening sky with soft red glow, calm, minimal, plenty of negative space for text |

---

### Notes
- `.png` for hero, `.jpg` for photos. Keep files under ~300 KB where possible.
- Skipping any image is fine — a branded placeholder / fallback shows automatically.
- Fallbacks in place: hero → `team.jpg` / `dots.jpg` / `maintenance.jpg`; case-study cards →
  old asset images. So the site looks intact even before you add the new images.
