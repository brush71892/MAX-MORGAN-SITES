# Vendored libraries for STEAL A MORGAN (`StealAMorgan.html`)

Everything the game needs is in this folder, so it runs from `file:///` with no internet at all.

| File | What | Version | License |
| --- | --- | --- | --- |
| `three.min.js` | three.js | r128 | MIT |
| `tailwind.css` | Tailwind CSS, prebuilt for the classes used in `StealAMorgan.html` | 3.4.17 | MIT |
| `fontawesome/` | Font Awesome Free (css + woff2 webfonts) | 6.4.0 | Icons CC BY 4.0, fonts SIL OFL 1.1, code MIT (see `fontawesome/LICENSE.txt`) |
| `fonts/` | Fredoka One + Outfit (latin subset, woff2) | @fontsource | SIL OFL 1.1 |

`tailwind.css` is generated, not hand-written. If you add new Tailwind utility classes to `StealAMorgan.html`,
rebuild it from the repo root (needs Node.js; the first run downloads the Tailwind CLI):

    npx tailwindcss@3.4.17 -c vendor/tailwind.config.cjs -i vendor/tailwind-input.css -o vendor/tailwind.css --minify
