AUREA Dental Clinic — v6

Premium multi-page demo website.

Pages:
- index.html — home
- about.html — clinic + FAQ
- services.html — directions + prices
- doctors.html — team
- contacts.html — contacts + booking
- service-*.html — dedicated service pages
- doctor-*.html — dedicated doctor pages

All medical data, prices, contacts and reviews are demo content for a concept project.
No form data is transmitted.

Recommended next deployment:
1. Upload to GitHub
2. Import repository into Vercel
3. Replace demo contacts/content with client data
4. Connect a real form/CRM and analytics


AUREA DENTAL v7
================
Adaptive image system:
- responsive WebP variants at multiple widths
- srcset + sizes for browser-side source selection
- object-fit/object-position for stable composition
- 16:9 service/hero media and 4:5 doctor portraits
- mobile-specific media rules
- original JPG files retained as fallbacks
- hero converted from CSS background images to responsive <img> elements
This lets the browser choose an appropriate image size for the client's screen and device pixel density instead of forcing one large image everywhere.
