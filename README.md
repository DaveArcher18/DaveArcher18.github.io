# David Bowman - Personal Website

A faithful recreation of David Bowman's personal website featuring a dual persona setup showcasing both mathematical research interests and AI/software development work.

## Features

### 🎭 Dual Persona System
- **Math Persona**: Showcases academic work in Stable Homotopy Theory, Algebraic Geometry, and Chromatic Homotopy Theory
- **Corporate Persona**: Highlights work at omvi.ai and AI tool development

### 📱 Modern Web Experience
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Mathematical Background**: Dynamic SVG background with mathematical equations
- **Smooth Animations**: Page transitions, hover effects, and persona switching
- **Keyboard Navigation**: Alt + number keys for quick navigation
- **Touch Gestures**: Swipe navigation on mobile devices

### 📄 Content Sections
- **Home**: Dynamic introduction based on current persona
- **Writing**: Academic publications and research notes
- **Organization**: Seminars and workshops organized
- **Workshops**: Academic workshops attended
- **Tools**: Software development projects (LecToNotes)

## Project Structure

```
SimpleWebsite/
├── index.html          # Main HTML structure
├── styles.css          # Styling and animations
├── script.js           # JavaScript functionality
├── assets/
│   ├── pdfs/          # Academic papers and syllabi
│   ├── maths_me.png   # Math persona photo
│   └── corporate_me.png # Corporate persona photo
└── README.md          # This file
```

## Setup Instructions

1. **Clone or download** the project files
2. **Ensure assets are in place**: Make sure your PDFs and images are in the `assets/` directory
3. **Open index.html** in a web browser
4. **Or serve locally**: Use a local server for best experience

### Local Server Options:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (if you have npx)
npx serve .

# PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

## Navigation

### Mouse/Touch
- Click navigation links to switch pages
- Click "Switch to Corporate Dave" / "Switch to Maths Dave" to toggle personas
- Swipe left/right on mobile to navigate between pages

### Keyboard Shortcuts
- `Alt + 1`: Home
- `Alt + 2`: Writing
- `Alt + 3`: Organization
- `Alt + 4`: Workshops
- `Alt + 5`: Tools
- `Alt + P`: Toggle persona

## Persona Behavior

### Math Persona (Default)
- Shows all navigation items
- Displays academic content
- Mathematical background is more prominent
- Purple/blue color scheme

### Corporate Persona
- Hides academic-specific pages (Writing, Organization, Workshops)
- Shows Tools page prominently
- Warmer color scheme (orange/red accents)
- Reduced mathematical background opacity

## Customization

### Adding Content
1. **New publications**: Edit the `publications` array in `index.html`
2. **New notes**: Add to the `notes` section in the Writing page
3. **New tools**: Add to the Tools section
4. **New workshops**: Update the workshop list

### Styling Changes
- **Colors**: Modify CSS custom properties in `styles.css`
- **Fonts**: Change the font-family in the body selector
- **Layout**: Adjust grid and flexbox properties
- **Animations**: Modify transition and animation properties

### Adding New Pages
1. Add a new `<section>` with appropriate `id` in `index.html`
2. Add a navigation link with `data-page` attribute
3. Update the pages array in `script.js`

## Technical Details

### CSS Features
- **CSS Grid & Flexbox**: Modern layout techniques
- **Backdrop Filter**: Glassmorphism effects
- **Custom Properties**: Easy theming
- **Media Queries**: Responsive breakpoints
- **Smooth Transitions**: 60fps animations

### JavaScript Features
- **ES6+ Syntax**: Modern JavaScript
- **URL State Management**: Shareable URLs with state
- **Intersection Observer**: Scroll-based animations
- **Touch Events**: Mobile gesture support
- **History API**: Proper browser navigation

## Browser Support

- **Chrome/Chromium**: Full support
- **Firefox**: Full support
- **Safari**: Full support
- **Edge**: Full support
- **Mobile browsers**: Full support

## File Dependencies

The website requires these asset files to be present:
- `assets/pdfs/A_Story_about_Schemes.pdf`
- `assets/pdfs/Stable_categories_and_t_structures_notes.pdf`
- `assets/pdfs/shimura_varieties_syllabus.pdf`
- `assets/pdfs/ambidexterity_syllabus_to_christmas.pdf`
- `assets/pdfs/KleineAGMarch2025Report.pdf`
- `assets/maths_me.png` (optional)
- `assets/corporate_me.png` (optional)

## Performance

- **Lightweight**: No external dependencies
- **Fast Loading**: Optimized CSS and JavaScript
- **Efficient Animations**: Hardware-accelerated transforms
- **Small Bundle**: Under 50KB total

## Accessibility

- **Semantic HTML**: Proper heading hierarchy
- **Keyboard Navigation**: Full keyboard support
- **Color Contrast**: WCAG compliant colors
- **Screen Reader Friendly**: Proper ARIA labels
- **Reduced Motion**: Respects user preferences

---

Built with vanilla HTML, CSS, and JavaScript for maximum performance and maintainability. 