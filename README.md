# Bavuke Foundation Website

## Project Overview

The Bavuke Foundation website is a responsive, modern web presence for a non-profit organization focused on raising stronger communities through education, health, and opportunity. The site is built with clean, semantic HTML, organized CSS, and vanilla JavaScript for interactivity.

**Organization:** Bavuke Foundation
**Location:** Johannesburg, South Africa
**Mission:** To improve lives by working collectively together so that others can rise and achieve their full potential.

---

## File Structure

```
bavuke-foundation/
├── index.html          # Main HTML file (semantic markup)
├── styles.css          # Stylesheet (responsive design, animations)
├── script.js           # JavaScript (interactivity, form handling)
├── uploads/
│   └── bavuke-hero-opt.jpg  # Hero section background image
└── README.md           # This file
```

---

## Files Explained

### 1. **index.html**

The main HTML file containing the complete website structure. Built with semantic HTML5 elements for accessibility and SEO.

#### Sections:

- **Navigation Bar** — Sticky header with logo, nav links (Home, About, Impact, Get Involved, Contact), and Donate button
- **Hero Section** — Full-screen banner with background image, dark overlay, headline, tagline, and two call-to-action buttons
- **Our Vision & Mission** — Two-column layout explaining the foundation's vision and mission with a highlighted Ubuntu philosophy box
- **Focus Areas** — Three-column card grid showcasing Education, Healthy Lifestyles, and Community Impact
- **Impact Statistics** — Three key metrics (500+ children served, 95% completion rate, $2.5M+ invested)
- **Stories of Change** — Three testimonials from beneficiaries, donors, and volunteers
- **Get Involved** — Three call-to-action cards for Donate, Volunteer, and Partner
- **Contact Section** — Two-column layout with contact information and a contact form
- **Footer** — Four-column footer with links, contact info, and copyright

#### Key Attributes:

- `id` attributes on major sections for smooth scrolling navigation
- Form with validation (name, email, message)
- Semantic HTML5 elements (nav, section, footer)
- Accessible link structure with proper `href` attributes

---

### 2. **styles.css**

Complete stylesheet with responsive design, color palette, typography, and interactive states.

#### Color Palette:

- **Primary Blue:** `#2c5aa0` — Headers, highlights, links
- **Dark Blue:** `#1a3a5c` — Section backgrounds, footer
- **Accent Yellow:** `#ffc107` — Accents, highlights, lines
- **Green:** `#4caf50` — Healthy Lifestyles accent
- **Orange:** `#ff9800` — Community Impact accent
- **Light Gray:** `#f5f5f5` — Section backgrounds
- **Text:** `#333` — Main text color
- **Light Text:** `#999` / `#555` — Secondary text

#### Typography:

- **Font Family:** 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif
- **Base Size:** 16px (body)
- **H1:** 48px, 700 weight
- **H2:** 42px, 700 weight
- **H3:** 22px, 700 weight
- **Line Height:** 1.6 (body), 1.8 (paragraphs)

#### Key Classes & Styles:

- `.container` — Max-width 1200px centered wrapper
- `.grid-3` / `.grid-2` — Three/two-column CSS Grid layouts
- `.card` — White card with shadow, hover lift effect
- `.hero` — Full-height section with background image and overlay
- `.bg-light` — Light gray background
- `.bg-blue` — Blue gradient background with white text
- `.yellow-line` — Decorative 4px yellow line (60px wide)
- `.btn-primary` / `.btn-secondary` — Button styles (yellow and outline)
- `.testimonial` — Left-bordered card styling
- `.cta-card` — Call-to-action cards with colored top borders
- `.stat` — Centered statistics block with large yellow numbers

#### Responsive Design:

- Mobile breakpoint: `max-width: 768px`
- Grid layouts collapse to single column
- Navigation stacks vertically on mobile
- Buttons expand to full width on mobile
- Hero section reduces to 500px height on mobile
- All padding/margin scales appropriately

#### Interactive States:

- `a:hover` — Text decoration underline
- `.card:hover` — Transform translateY(-8px), enhanced shadow
- `.donate-btn:hover` — Background color shift
- `input:focus` / `textarea:focus` — Blue border and shadow glow
- `.nav-links a.active` — Active page highlighting

---

### 3. **script.js**

Vanilla JavaScript file handling interactivity without external dependencies.

#### Features:

1. **Smooth Scrolling**
   - All anchor links with `href="#section"` smoothly scroll to target
   - Uses native `scrollIntoView({ behavior: 'smooth' })`

2. **Contact Form Handling**
   - Validates that all fields (name, email, message) are filled
   - Prevents form submission with `preventDefault()`
   - Logs form data to console
   - Shows success alert to user
   - Resets form after submission
   - Ready to integrate with backend service (email API, database, etc.)

3. **Scroll Animations**
   - Uses Intersection Observer API for performant scroll detection
   - Cards fade in and slide up from bottom as they enter viewport
   - Initial state: `opacity: 0; transform: translateY(20px)`
   - Animated state: `opacity: 1; transform: translateY(0)`
   - Transition: 0.6s ease

4. **Active Navigation Highlighting**
   - Detects current section based on scroll position
   - Highlights corresponding nav link with active styling
   - Blue color + bold font weight + yellow bottom border
   - Updates dynamically as user scrolls

#### Code Sections:

```javascript
// Smooth scrolling for all anchor links
// Intersection Observer for card animations on scroll
// Contact form validation and submission
// Active nav link tracking on scroll
// Dynamic style injection for active state
```

---

## Color Scheme

| Color | Hex Code | Usage |
|-------|----------|-------|
| Primary Blue | #2c5aa0 | Headers, links, accents |
| Dark Blue | #1a3a5c | Backgrounds, footer |
| Accent Yellow | #ffc107 | Decorative lines, highlights |
| Green | #4caf50 | Health/wellness accent |
| Orange | #ff9800 | Community accent |
| Light Gray | #f5f5f5 | Section backgrounds |
| Text Dark | #333 | Body text |
| Text Light | #999 | Secondary text |
| White | #ffffff | Card backgrounds, text on dark |

---

## Layout & Spacing

### Section Padding:
- Desktop: `80px 40px` (80px vertical, 40px horizontal)
- Mobile: `40px 20px`

### Grid Gaps:
- Default: `40px` (cards, columns)
- Contact section: `60px`
- Footer: `30px`

### Container:
- Max-width: `1200px`
- Centered with `margin: 0 auto`

---

## Typography Scale

```
H1: 48px (hero title)
H2: 42px (section titles)
H3: 22px (card titles)
H4: 16px (subsections)
Body: 16px (default)
Small: 13-14px (secondary text, testimonials)
Tiny: 12-13px (footer text)
```

---

## Components Breakdown

### Navigation Bar
- **Fixed Position:** `position: sticky; top: 0`
- **Height:** 70px
- **Background:** White with subtle shadow
- **Content:** Logo, nav links (flex gap: 40px), Donate button
- **Z-index:** 1000 (always on top)

### Hero Section
- **Height:** 700px (500px mobile)
- **Background:** Image + dark overlay gradient
- **Content:** Centered text and buttons
- **Text Color:** White with opacity variations
- **Buttons:** Primary (yellow) and Secondary (outline)

### Card Components
- **Default Style:** White background, rounded corners, shadow
- **Hover Effect:** Lift up 8px with enhanced shadow
- **Padding:** 40px
- **Variations:**
  - Testimonial: Left border yellow (6px)
  - CTA Cards: Top border colored (6px) — blue/green/orange
  - Contact Boxes: No hover effect

### Button States

**Primary Button:**
- Background: #ffc107 (yellow)
- Text: #1a3a5c (dark blue)
- Padding: 16px 45px
- Border-radius: 4px
- Hover: Background lighter, opacity 0.9

**Secondary Button:**
- Background: Transparent
- Border: 2px solid white
- Text: White
- Padding: 16px 45px
- Hover: Opacity 0.9

**Donate Button:**
- Background: #ffc107
- Text: #1a3a5c
- Padding: 12px 30px
- Smaller variant of primary

---

## Forms & Inputs

### Contact Form Fields:
1. Name (text input, required)
2. Email (email input, required)
3. Message (textarea 5 rows, required)
4. Submit Button

### Input Styling:
- Padding: 12px 16px
- Border: 2px solid #e0e0e0
- Border-radius: 4px
- Font-size: 14px
- Transition: border-color, box-shadow (0.3s)

### Focus State:
- Border-color: #2c5aa0 (blue)
- Box-shadow: 0 0 0 3px rgba(44,90,160,0.1) (blue glow)

### Submission:
- Validates all fields required
- Shows alert on success
- Logs data to console
- Ready for backend integration

---

## Responsive Breakpoints

### Mobile (max-width: 768px)
- Grid layouts: Single column
- Navigation: Stacked vertically
- Buttons: Full width
- Padding: Reduced (40px → 20px)
- Typography: Scaled down (H1: 48px → 32px)
- Hero height: 700px → 500px
- Gap spacing: Reduced

---

## Image Assets

### Hero Background Image
- **File:** `uploads/bavuke-hero-opt.jpg`
- **Dimensions:** 1920 × 800 px
- **Format:** JPEG (optimized for web)
- **Overlay:** Dark gradient `rgba(0,0,0,0.5)` applied on top
- **CSS:** `background: linear-gradient(...), url(...) center/cover`

**Note:** Adjust the image path in `index.html` hero section if the file location changes.

---

## Font Stack

```css
font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
```

Fallback order:
1. Segoe UI (Windows)
2. -apple-system (macOS/iOS)
3. BlinkMacSystemFont (macOS/iOS)
4. sans-serif (fallback)

All fonts are system fonts — no external font loading required.

---

## Contact Information

**Organization:** Bavuke Foundation

**Address:**
1707 Waterstone Park, Blackrock Road
Greenstone, Edenvale
Johannesburg, South Africa 1609

**Email:** mpillay@bavukefoundation.co.za

**Phone:** +27 83 301 6406

**Social Media:** (To be added based on actual profiles)

---

## Browser Compatibility

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

### Features Used:
- CSS Grid & Flexbox (IE 11 not supported)
- Intersection Observer API (modern browsers, IE 11 polyfill available)
- CSS Transitions & Transforms
- ES6+ JavaScript (const, arrow functions)

---

## SEO & Metadata

### Current Meta Tags:
- Character Set: UTF-8
- Viewport: Responsive design meta tag set

### Recommended Additions:
```html
<meta name="description" content="Bavuke Foundation...">
<meta name="keywords" content="education, health, community, nonprofit">
<meta property="og:title" content="Bavuke Foundation">
<meta property="og:description" content="...">
<meta property="og:image" content="...">
```

---

## Performance Considerations

1. **Image Optimization** — Hero image is JPEG at 1920×800px, ~100-150KB
2. **CSS-in-File** — All styles in single stylesheet (no external fonts)
3. **Vanilla JavaScript** — No frameworks or heavy libraries
4. **Intersection Observer** — Efficient scroll animations (no library needed)
5. **CSS Grid/Flexbox** — Modern, performant layout techniques
6. **Minimal Repaints** — Hardware-accelerated transforms (translate, opacity)

---

## Accessibility Features

- Semantic HTML5 elements (nav, section, footer, article)
- Proper heading hierarchy (H1 → H2 → H3)
- Color contrast meets WCAG standards
- Form labels and inputs properly associated
- Link text is descriptive (not "click here")
- Alt text for images (to be added to img tags)

---

## Customization Guide

### Changing Colors:

1. Open `styles.css`
2. Search for color hex codes:
   - `#2c5aa0` — Primary blue
   - `#1a3a5c` — Dark blue
   - `#ffc107` — Yellow accent
3. Replace with new colors
4. Test contrast ratios for accessibility

### Changing Fonts:

1. Open `styles.css`
2. Find `font-family` property
3. Replace 'Segoe UI' with new font name
4. Add `@font-face` rule if using custom fonts

### Adding New Sections:

1. Add new `<section>` in `index.html`
2. Give it an `id` attribute for nav linking
3. Create corresponding CSS class in `styles.css`
4. Add nav link in navbar

### Integrating Form Backend:

Replace form submission handling in `script.js`:
```javascript
// Replace fetch URL with your backend endpoint
fetch('https://your-api.com/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name, email, message })
})
```

---

## Deployment

### Static Hosting (Recommended):
- Netlify: Drag and drop files
- Vercel: Git-connected deployment
- GitHub Pages: Push to gh-pages branch

### Traditional Hosting:
- Upload all three files to web server
- Ensure `uploads/` folder is accessible
- Update image paths if needed
- Test responsive design on mobile devices

### Environment Setup:
- No build process required
- No dependencies to install
- No configuration files needed
- Works as-is on any web server

---

## Maintenance

### Regular Updates:
- Update copyright year in footer annually
- Review testimonials and impact statistics
- Update contact information as needed
- Test form submissions monthly

### Performance Monitoring:
- Use Google PageSpeed Insights
- Monitor Core Web Vitals
- Check mobile usability regularly
- Test on various devices/browsers

---

## Support & Contact

For questions or updates to the website, contact:
- **Email:** mpillay@bavukefoundation.co.za
- **Phone:** +27 83 301 6406

---

## License & Rights

© 2024 Bavuke Foundation. All rights reserved.

This website is designed for the Bavuke Foundation non-profit organization. Unauthorized use or reproduction is prohibited.

---

**Last Updated:** 2024
**Version:** 1.0
**Status:** Production Ready