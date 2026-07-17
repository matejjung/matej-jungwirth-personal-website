# Your academic site

## What to personalize before publishing

1. **Your name** — search-and-replace `[Last Name]` in `index.html` (appears in the `<title>`, hero, and footer).
2. **Header photo** — open `style.css`, find `.hero-photo`, and replace the `background-image` gradient with:
   ```css
   background-image: url('images/header.jpg');
   ```
   Drop your photo in the `images/` folder as `header.jpg`. A wide, landscape photo (1920×1080 or larger) works best — a fieldwork photo, an archive, a landscape from Karelia or Ukraine would all fit the theme well. The dark gradient overlay is already tuned to keep your name readable over any photo.
3. **Email + links** — in the Contact section of `index.html`, replace `your-email@u.northwestern.edu` and the `#` placeholders for Twitter/X, Google Scholar, and GitHub.
4. **CV** — add your CV as `cv.pdf` in this same folder; the "Download CV" button already links to it.
5. **Publications** — the three entries reflect your current pipeline (APSR self-other paper, the Ukraine border paper, and the Armenia survey paper). Update titles/status as they move through review.
6. **Teaching** — currently shows INTL_ST 395. Add more courses by duplicating the `.teaching-card` block.

## Publishing for free on GitHub Pages

1. Create a new GitHub repository (e.g. `your-username.github.io`, or any name).
2. Push these three files (`index.html`, `style.css`, `script.js`) plus your `images/` folder and `cv.pdf` to the repo.
3. In the repo, go to **Settings → Pages**, set the source branch to `main` and folder to `/root`.
4. Your site will be live at `https://your-username.github.io/` (or `/repo-name/` if not using the special `username.github.io` repo name).

## Design notes

- Palette: deep ink navy, warm parchment paper, rust/gold/teal accents — evoking old maps and redrawn borders rather than a generic academic template.
- The dashed-to-solid line motif (hero background, scroll progress bar, case study icons) is a recurring visual metaphor for a border that moved.
- Fully responsive; mobile gets a collapsible nav menu.
