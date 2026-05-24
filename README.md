# David Bowman - Personal Website

A lightweight static personal website for David Bowman, AI Engineer at Elixirr Digital.

The site is designed as a client-facing personal profile: it introduces David's current AI engineering work and interests, while preserving an archive of his previous mathematical writing, seminars, and workshops.

## Purpose

- Present current, controlled information about David Bowman for search engines and AI summaries.
- Give clients and potential clients a friendly, professional picture of David's work style and capabilities.
- Describe AI engineering interests in general terms without disclosing protected client or Elixirr Digital IP.
- Keep mathematical background visible under a clear "Past Life As A Mathematician" heading.

## Project Structure

```text
.
|-- index.html          # Static page structure, content, and metadata
|-- styles.css          # Responsive styling and visual system
|-- script.js           # Minimal progressive enhancement
|-- favicon.ico         # Site icon
|-- assets/
|   |-- corporate_me.png
|   |-- maths_me.png
|   `-- pdfs/           # Mathematical notes, syllabi, and reports
`-- branding/           # Reference branding material, not required at runtime
```

## Main Sections

- **Hero**: current role and professional introduction.
- **AI Engineering**: general areas of current work and interest.
- **How I Work**: communication, ownership, collaboration, and adaptability.
- **Past Life As A Mathematician**: publications, seminars, and workshop organisation.
- **Writing And Notes**: public PDFs and informal mathematical writing.
- **Conferences And Workshops**: selected mathematical events attended.
- **Contact**: email and public profile links.

## Running Locally

Open `index.html` directly in a browser, or serve the folder locally for the most realistic behaviour.

### Python 3

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

### Other Local Server Options

```bash
# Node.js, if npx is available
npx serve .

# PHP
php -S localhost:8000
```

## Editing Guidance

- Update visible content in `index.html`.
- Update styling in `styles.css`.
- Keep `script.js` minimal; the site should remain usable without JavaScript.
- Keep client and employer work general and non-confidential.
- Add new mathematical PDFs under `assets/pdfs/` and link them from the relevant section.

## SEO Notes

The homepage includes:

- A descriptive page title: `David Bowman | AI Engineer at Elixirr Digital`.
- A meta description with current role, AI engineering focus, and mathematical background.
- Open Graph metadata for link previews.
- JSON-LD `Person` schema for machine-readable profile information.

## Deployment

This repository is intended to remain a simple static site suitable for GitHub Pages. There is no build step, package manager, or framework dependency.
