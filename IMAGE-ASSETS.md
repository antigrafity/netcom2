# Image Assets — Generation Guide

All images go in the `assets/` folder. Filenames must match **exactly** (the site
already references them). Until you drop a file in, a branded gradient placeholder
shows in its place, so the layout never looks broken.

**Brand palette (use in every image):**
- Primary red: `#911515`
- Deep navy: `#162E54`
- Accent teal (sparingly): `#5EEAD4`
- Keep backgrounds dark/navy with red accents. Clean, corporate, professional.
- **No people's faces in close-up, no logos, no text overlays, no military/weapon imagery.**

Recommended generator settings: photorealistic OR clean 3D render, soft studio
lighting, shallow depth of field, negative space on one side for layout breathing room.

---

## 1. Homepage hero (3 images) — landscape, 1200×900 px (4:3), photo or 3D

| File | Prompt |
|------|--------|
| `assets/hero-wireless-1.png` | Modern wireless communication engineers reviewing a coverage plan on a large screen in a control room, dark navy environment with red accent lighting, professional, cinematic, shallow depth of field, corporate tech mood |
| `assets/hero-wireless-2.png` | Close-up of a microwave dish antenna and RF equipment on a telecom tower at dusk, navy-blue sky, subtle red accent glow, sharp technical detail, professional photography |
| `assets/hero-wireless-3.png` | Network operations center with monitors showing wireless network dashboards and maps, dark room, navy and red accent lighting, over-the-shoulder wide shot, corporate |

## 2. Homepage + Ecosystem thumbnails (6 images) — 640×400 px (16:10), photo

| File | Prompt |
|------|--------|
| `assets/eco-radio.jpg` | Professional two-way radio / trunked radio base station equipment rack, clean studio background, navy tones with red accent |
| `assets/eco-microwave.jpg` | Point-to-point microwave link dish mounted on a communication tower, blue sky, technical, crisp |
| `assets/eco-antenna.jpg` | Telecommunication antenna tower / mast against dusk sky, silhouette with navy-red gradient sky |
| `assets/eco-repeater.jpg` | Outdoor radio repeater cabinet / shelter at a hilltop site, professional infrastructure photo |
| `assets/eco-dispatch.jpg` | Dispatch console workstation with headset and multiple screens, dark control room, navy-red accent |
| `assets/eco-network.jpg` | Abstract communication network visualization, glowing nodes and links over a dark navy map, red accent connections |

## 3. Service detail feature images (7 images) — 800×600 px (4:3), photo or 3D

| File | Prompt |
|------|--------|
| `assets/svc-consulting.jpg` | Engineer performing a wireless site survey outdoors with a tablet and measurement gear, professional, navy-red mood |
| `assets/svc-design.jpg` | RF/wireless system design on screen — coverage heatmap and link budget charts, clean UI, dark theme, red-navy accents |
| `assets/svc-implementation.jpg` | Technicians installing radio and network equipment in an equipment shelter, professional infrastructure photo |
| `assets/svc-installation.jpg` | Rigger installing an antenna on a tower with safety harness, wide shot, dusk sky, professional |
| `assets/svc-monitoring.jpg` | Wireless network monitoring dashboard on large screens in a NOC, dark room, navy-red accent lighting |
| `assets/svc-maintenance.jpg` | Field technician performing maintenance on outdoor RF equipment cabinet, professional, daylight |
| `assets/svc-managed.jpg` | Managed services operations team at workstations with SLA dashboards, corporate control room, navy-red |

## 4. Projects / Case Studies (7 images) — 640×400 px (16:10), photo

| File | Prompt |
|------|--------|
| `assets/proj-network-design.jpg` | Multi-site wireless network coverage map and frequency plan on screen, dark theme, red-navy |
| `assets/proj-microwave.jpg` | Microwave backhaul link between two towers over terrain, path profile concept, technical |
| `assets/proj-radio.jpg` | Radio communication system rollout — base station and handheld radios, professional |
| `assets/proj-integration.jpg` | Network integration — server/comms racks with cabling, clean data-center aesthetic, navy-red |
| `assets/proj-commissioning.jpg` | Antenna/tower installation and testing with measurement instrument, professional field photo |
| `assets/proj-monitoring.jpg` | 24/7 network monitoring room, screens with live wireless network status, dark navy-red |
| `assets/proj-managed.jpg` | SLA-backed managed communication operations, dashboards and team, corporate |

## 5. About (1 image) — 800×600 px (4:3), photo

| File | Prompt |
|------|--------|
| `assets/about-team.jpg` | Wireless engineering team collaborating around a table with network plans and laptops, bright modern office, professional, welcoming |

---

### Notes
- `.png` for hero (crisper on gradients), `.jpg` for photos (smaller files).
- Keep each file under ~300 KB where possible for fast loading (compress after export).
- If you skip any image, the branded placeholder/fallback shows automatically — nothing breaks.
- Existing fallbacks: hero slides fall back to `team.jpg` / `dots.jpg` / `maintenance.jpg`;
  case-study cards fall back to the old asset images; so the site looks fine even mid-way.
