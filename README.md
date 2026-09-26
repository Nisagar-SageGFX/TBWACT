# TBWACT Website

Website for **Tambaram Builders Welfare and Charitable Trust (TBWACT)**, Reg. No. 166/2024.

React 18 + Vite + React Router. No CSS framework, no UI library, no icon package — one
stylesheet and inline SVG, so the whole production bundle is about 75 kB gzipped.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
npm run preview
```

---

## Deployment (Hostinger / Apache)

> **Turn on SSL for the domain in Hostinger *before* uploading.** The `.htaccess` redirects
> every visitor to `https://`; with no certificate active the whole site becomes
> unreachable. (At the time of the last audit the domain was still a Hostinger parked page
> with no certificate, and its `robots.txt` read `Disallow: /`.)

Upload the **contents** of `dist/` to `public_html/`, including the `.htaccess` that ships
in `public/`. It handles: the HTTPS redirect, SPA routing so `/about` and
`/board-of-trustees` survive a hard refresh, **a genuine HTTP 404 for unknown URLs**,
cache headers, and the security headers (HSTS, CSP, `nosniff`, referrer policy, frame
protection).

**Keep two lists in step.** The route whitelist in `.htaccess` must match `src/App.jsx`. A
route missing from the whitelist still displays for visitors, but is answered with a 404
status, so search engines will not index it. The Content-Security-Policy names every
third party the site loads (Google Fonts, YouTube, Google Maps); a new embed or analytics
tag is silently blocked by the browser until it is added there.

**Verify on the live server** — this could only be tested against an emulation of the
rules, never against Apache itself:

```bash
curl -sI https://www.tbwctrust.com/this-page-does-not-exist | head -1   # expect: 404
curl -sI https://www.tbwctrust.com/about | head -1                      # expect: 200
curl -sI https://www.tbwctrust.com/ | grep -i "strict-transport\|content-security"
curl -s  https://www.tbwctrust.com/robots.txt                           # expect: Allow: /
```

If the site is served from a subdirectory, set `base` in `vite.config.js` and `RewriteBase`
in `.htaccess` to match.

---

## Where the content comes from

Everything on the site is taken from the ELARA 2026 brochure, the trust banner and the
supplied logo. Nothing is invented. Where the trust has not supplied something, the site
shows a visible placeholder rather than filler text:

| Missing | Where it shows |
| --- | --- |
| Hero render image | Removed — the hero is now video plus a single text column. `trust-building.jpg` is still the video's poster frame and is still used on `/`, `/our-vision`, `/programs` and the gallery |
| Trustee bios other than the founder's | `/board-of-trustees` — the card hides the field until it is filled |
| Designations for three trustees | `/board-of-trustees` — `[Designation to be added]` on G. Dineshkumar, K. Kandasamy and S. Rajasekar, who were supplied as photographs only |
| Social media profiles | `site.social` is an empty array; footer renders nothing |

Programme status is preserved exactly as the trust describes it. All five programmes are
labelled **Planned** or **Under development** — no completed-work or beneficiary claims
appear anywhere.

The bank account number printed on brochure page 8 is deliberately **not** in this
codebase. Publishing an account number on a live page invites lookalike-donation fraud.
Add it to `src/data/site.js` and surface it on the contact page if the trust decides
otherwise.

**Note:** the line telling visitors that *"banking details for contributions are shared on
request"* lived in the Get involved section of `/contact`, which has been removed. Nothing
on the site now tells a would-be contributor how to give. The contact form's enquiry types
still include sponsoring and volunteering, so the route exists — it is just no longer
signposted.

---

## Editing content

All copy that changes lives in `src/data/`. No component needs touching.

| File | Holds |
| --- | --- |
| `site.js` | Name, address, phone, email, registration number, standing paragraphs |
| `trustees.js` | Trustee array + the founder object |
| `programs.js` | The five programmes, their lists and outcomes |
| `vision.js` | The five vision pillars |
| `technical.js` | The four technical awareness topics shown on the home page, with their card images |
| `events.js` | Events. `sponsorshipTiers` and `sponsorshipNote` are still here but **no longer published** — see the comment above them |
| `gallery.js` | Gallery images and categories |
| `navigation.js` | Header menu and the About dropdown children |
| `seo.js` | Per-page title, description, OG image |
| `youtube.js` | Video ID, title, description. `id` is the bare ID (`09RGLUWPYSA`), not the URL — clear it and the section falls back to the local testimonial MP4 |

**Adding a trustee:** append an object to `trustees` in `src/data/trustees.js`. Drop the
photo in `public/assets/trustees/` and set `image: '/assets/trustees/name.webp'`. The card
component is untouched.

Photos are cropped with `object-fit: cover` at **5:4**, which matches the landscape
portraits the trust supplied — a portrait frame would have cut half the width off each
one. If a face sits off-centre and the crop clips it, set `focus` on that trustee rather
than editing the stylesheet: it maps straight onto `object-position`, so `'top'`,
`'50% 30%'` and the like all work. Leave it empty for centred.

Filenames are kebab-case and lower-case on purpose. The production host is case-sensitive,
and the originals arrived with spaces and mixed capitals (`Wilson raj.webp`), which break
silently once deployed.

**A trustee without a stated role:** leave `designation` as an empty string. The card shows
`[Designation to be added]` in muted italic so it reads as an unfilled field rather than a
title. Filling the string in is the only change needed.

**The photo cards** (`.impact-grid` / `.impact-card`) are used in two places: "A
celebration with a purpose" on `/news-events`, defined inline in that page, and the four
pillars on `/our-vision`, which read theirs from `src/data/vision.js`. Both share the four
images in `public/assets/impact/` rather than duplicating them, and both are two-up above
600px and single-column below. The home page keeps its own icon-based `.pillar` cards for
the same four pillars — only `/our-vision` shows photographs.

Only `/our-vision` passes a link, which `.impact-card__link` pushes to the bottom of the
card so links stay aligned across a row however uneven the descriptions are.

The frame is 4:3 via `aspect-ratio`, which both keeps the image area identical across all
four cards and reserves the space before the image loads, so nothing shifts.

4:3 was chosen by measurement, not taste. The four sources range from 1.00 to 1.73 in
aspect, and `object-fit: cover` discards whatever does not fit: against 4:3 the worst case
loses 25% of one dimension, where 3:2 would lose 33% and 16:9 would take 44% off the square
education image. If a face or subject still gets clipped, set `focus` on that card — it
maps straight onto `object-position`, the same escape hatch the trustee cards use.

The two pages treat `alt` differently, on purpose. On `/news-events` it is empty: each
image sits directly above a heading and paragraph that already state what it represents,
so alt text would make a screen reader read the same thing twice. On `/our-vision` the
pillars carry real alt text in `vision.js`, because those images are also indexable
content in their own right.

**Those four alt strings were written from the filenames and card topics, not from looking
at the photographs. Check each one actually describes its image.**

A fifth pillar, Healthcare, is commented out in both `vision.js` and the `/news-events`
card array.

**The home page technical cards** read from `src/data/technical.js` and use the same
`.impact-card` grid. They replaced the five programme cards that used to sit there — the
programmes themselves are unchanged on `/programs`, which the section now links to.

> **The four images in `public/assets/technical/` total 9.2 MB and must be compressed
> before launch.** `industry-standards.jpg` is 4500×3000 and `technical-knowledge.jpg` is
> 7500×5000, for cards that render around 540px wide; the two `.png` files are
> photographs saved in a lossless format. Resized to 1200px and saved as WebP they should
> come to roughly 300 KB in total.

**Adding a gallery image:** drop it in `public/assets/gallery/`, add an entry with `alt`
text and a `category`. New categories appear in the filter row automatically.

Thumbnails default to a 3:4 portrait frame, which suits the brochure scans. A landscape
photograph in that frame loses more than half its width, so an item can set `ratio` to
override it — give it the image's own aspect ratio and nothing is cropped at all. The grid
uses `align-items: start`, so mixed shapes sit at their natural height rather than being
stretched. The `tbwact-banner` item is still on the default frame and is cropped hard
(it is 4.35 wide); setting `ratio` on it would fix that.

**Five images (`f-1` … `f-5`) are wired in but not described.** Their `caption` and `alt`
are `[Caption to be added]` / `[Description to be added]`, and their category is the
placeholder `Trust Activities`. Caption text is visible on the page and alt text is read
aloud, so all three need replacing before launch.

**Adding an event:** add to the top of the `events` array with `status: 'upcoming'` or
`'past'`. Past events collect into their own section.

---

## Design notes

The brief fixed the palette, so the distinctiveness had to come from elsewhere.

**Colour** — orange carries every action, teal carries institutional weight: banners,
footers, headings, card spines. They never compete for the same job.

The orange is split by contrast, not taste. `#F07D00` is the brand colour but reaches only
2.75:1 on white, so it is limited to decoration (list markers, rules, card spines) and to
dark ground. Anything that carries a label — button fills, orange text, the active-nav
underline — uses `--orange-dark` `#A85400` (5.34:1 on white, 4.82:1 on the warm tint), with
`--orange-darker` for hover. Focus rings use `--focus`: teal-deep on light surfaces, brand
orange inside the dark bands. A measured audit of 637 text elements found no failures
other than the decorative `/` in breadcrumbs.

**Type** — Archivo for structure (headings, nav, buttons, lists) and Source Serif 4 for
narrative paragraphs. A trust website has two voices — an institution stating facts and a
person explaining why it matters — and the two families separate them.

**Motif** — the vertical fluting on the page banners and trustee monograms is taken from
the tower forms in the TBWACT logo, and the same logic gives cards a solid left or top
spine instead of a generic drop shadow. It reads as construction without a single hard-hat
illustration.

**Restraint** — no scroll-triggered animation anywhere. Motion only answers a click:
opening the dropdown, opening the lightbox, loading the video. `prefers-reduced-motion` is
respected globally.

---

## Accessibility and performance

- Skip link, visible focus rings, semantic landmarks, one `h1` per page
- About dropdown works on hover, click, and keyboard (Enter opens, Tab moves through,
  Escape closes and returns focus to the trigger). It is a disclosure, not an ARIA menu:
  no `role="menu"`, because arrow-key traversal is not implemented. The mobile menu also
  closes on Escape
- Every image has alt text; decorative images use `alt=""`. **None of the images on the
  `/our-vision` cards, the `/news-events` impact cards or the home technical cards shows the
  trust's own work — they are stock illustrations, a 3D render and stock photos. Their alt
  text says what is actually pictured; do not reword it to imply otherwise.** Only the
  five `f-*` gallery photos are of real events, and their alt text describes what is
  visible without naming the occasion
- Lightbox traps Tab inside the dialog, closes on Escape, restores scroll and returns
  focus to the thumbnail that opened it
- After a client-side route change, focus moves to `<main>`; hash links are left alone
- Form errors are announced (`role="alert"`) and required fields are marked
- `scroll-padding-top` keeps hash targets and keyboard focus clear of the sticky header
- Footer headings are `<h2>`, so no page skips a heading level
- WebP with JPEG fallback via `<Picture>`; everything below the fold lazy-loads
- Video loads a poster image only — the iframe or MP4 is fetched on click, never before
- The `/news-events` testimonial (`TestimonialVideo.jsx`) starts from an
  IntersectionObserver rather than an `autoplay` attribute. It is 13 MB for 112 seconds and
  sits well below the fold, so unconditional autoplay would bill every visitor for it
  whether they scrolled that far or not. It also pauses when scrolled out of view, which
  matters once the visitor has unmuted — otherwise audio keeps playing with no visible
  source. Mute is toggled on the element (`video.muted = !video.muted`), so nothing
  reloads, nothing restarts, and `currentTime` is never touched.
- That section has a play/pause control as well as mute/unmute. Auto-starting content
  longer than five seconds needs a pause mechanism (WCAG 2.2.2); a 112-second video the
  visitor cannot stop is a real problem, not a theoretical one.
- On the home page the header is `position: fixed` and floats over the hero video, which starts at the very top of the page. It is transparent (a measured gradient: white nav text needs 0.65 opacity against a white video frame) until the page scrolls or the mobile menu opens, then turns solid. Header.jsx publishes its measured height as `--header-h` so the hero pads its content clear of it. Other pages keep the normal sticky header.
- The hero video now plays at every screen size, phones included. It is withheld only under `prefers-reduced-motion` or a Save-Data / 2G / 3G connection, where a still of the building is shown instead. On mobile that is still an ~18 MB download; compressing the file is the real fix.
- The hero background video was originally opt-in per visitor, not unconditional. `useBackgroundVideo`
  in `src/components/Hero.jsx` withholds it under `prefers-reduced-motion`, below 768px,
  and on a connection the browser reports as metered or 2G/3G (`navigator.connection`).
  When it is withheld the hero falls back to its solid teal-deep ground — the design that
  shipped before it existed — so nothing looks broken. Autoplay rejection is caught and
  ignored; the poster frame stays up. The video is `aria-hidden`, `tabIndex={-1}` and
  `pointer-events: none`, so it takes no clicks and no tab stops.
- The hero scrim darkens only where text sits rather than dimming the whole frame. Every
  value is measured against the worst case — a pure-white video frame. All hero text is
  pure white, which is what buys the headroom: at 0.78 white clears 5.5:1, so the gradient
  holds 0.82→0.78 across the 52% the text column can occupy, then falls to nothing, leaving
  the right ~15% of the video completely unobscured. Dropping the reg badge from sand
  `#FFD9AC` to white was the unlock — sand needed 0.82 to clear 4.5:1 and would have held
  the whole overlay up. Between 768 and 899px the grid is single-column, so text spans the
  full width and the scrim is flat at 0.80; below 768px the video is withheld and the scrim
  is removed entirely.
- White-on-dark control borders are `rgba(255,255,255,0.7)`, not `0.55`. Over the lightened
  hero scrim, 0.55 fell to 2.84:1 against the 3:1 minimum for a control boundary.
- Checked for horizontal overflow at 320, 375, 390, 414, 768, 820, 1024, 1280, 1440
  and 1920 px: none

## SEO

Per-page title, meta description, canonical, Open Graph and Twitter tags are applied by
`src/components/SEO.jsx` from `src/data/seo.js`. Organisation JSON-LD is in `index.html`;
Event JSON-LD is on `/news-events`. `robots.txt` and `sitemap.xml` are in `public/` — update
the domain in both, plus `site.domain` and the three absolute URLs in `index.html`, if the
live domain differs from `https://www.tbwctrust.com`.

`index.html` also carries **static** title, description and Open Graph tags matching the
home entry in `seo.js`. WhatsApp, Facebook and LinkedIn read only the raw HTML and never
run JavaScript, so without them a shared link shows no preview. It deliberately has no
`canonical` or `og:url`, which differ per page. A consequence: **every shared link, whatever
the page, previews as the home page.** Per-page previews need prerendering or static site
generation, which this build does not do. The noindex 404 page emits no canonical.

The share image is the square logo, so the Twitter card is `summary`, not
`summary_large_image`. A 1200×630 image would allow the large card.

## Contact form

Submits by opening the visitor's mail client, pre-filled, addressed to the trust — no
backend. **That is a real limitation:** it does nothing for visitors without a configured
mail app (webmail, many phones), nothing reaches the trust unless the visitor then sends
the email, and the site cannot confirm receipt. The form keeps the visitor's message after
submitting, and tells them plainly to email the address directly if their mail app did not
open. To route through EmailJS or a form service instead, replace `handleSubmit` in
`src/components/ContactForm.jsx`; the field names map straight onto template variables.

## Before launch

Visible on the public pages right now and needing the trust's input:

- `[Caption to be added]` on five gallery photos (`src/data/gallery.js`)
- `[Designation to be added]` on three trustee cards (`src/data/trustees.js`)
- **Image licensing.** `impact/professional-growth.jpg` carries a visible Shutterstock
  watermark and ID and is a 368×280 preview-size file; `impact/education.jpg` carries a
  baked-in "designed by freepik.com" credit. Both need a licensed or original replacement,
  or confirmation the licence permits use.
- **ELARA 2026.** The copy, hero button, sponsor CTA and Event structured data all treat
  the event as upcoming, but the event date (19 July 2026) has passed and the YouTube
  section is a highlights video.
- `/privacy-policy` exists but was written from how the site is built, not by the trust. It states only verified facts (no cookies or tracking, the mailto form, Google Fonts, Google Maps, YouTube) and makes no legal claims. Have the trust review it, and update it whenever analytics, cookies, a form backend or a new embed are added.
