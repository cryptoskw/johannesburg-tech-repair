# Johannesburg Tech Repair — GitHub Pages Static Rebuild

This package replaces the broken Next.js/source upload with a clean static HTML/CSS/JS website for GitHub Pages.

## Important
Upload the CONTENTS of this folder to the root of the GitHub repository, not the folder itself.

The repository root should contain:

- `index.html`
- `CNAME`
- `.nojekyll`
- `assets/`
- `services/`
- `areas/`
- `contact/`
- `blog/`
- `sitemap.xml`
- `robots.txt`

## Correct contact details

Phone: 075 046 1725
Email: info@fixmygadget.co.za

## Contact form

The form uses FormSubmit because GitHub Pages cannot run PHP. The endpoint is:

`https://formsubmit.co/info@fixmygadget.co.za`

After uploading, submit the form once and click the activation email sent to `info@fixmygadget.co.za`.

## SEO preservation

Core existing URLs are preserved:

- `/`
- `/services/laptop-repair/`
- `/services/computer-repair/`
- `/services/virus-removal/`
- `/areas/sandton/`
- `/areas/rosebank/`
- `/areas/fourways/`
- `/about/`
- `/contact/`
- `/blog/`
- `/privacy/`
- `/terms/`

Sitemap: `https://www.johannesburgtechrepair.online/sitemap.xml`

## Optional custom email

If you later create `info@johannesburgtechrepair.online` in Cloudflare Email Routing and forward it to `info@fixmygadget.co.za`, the form endpoint can be changed to that address. For now, this version sends directly to `info@fixmygadget.co.za`.
