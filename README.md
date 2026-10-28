# Pashmina — Video Editor Portfolio

A responsive Next.js portfolio with a burgundy theme, violet accents, looping video previews, a creative quiz and Illinois location artwork.

## Run locally

```sh
npm ci
npm run dev
```

Open http://localhost:3000. In Windows PowerShell, use `npm.cmd` if script execution is restricted.

```sh
npm run build
npm start
```

## Customize

- Name, metadata and Upwork profile: `src/config/site.ts`.
- Email and LinkedIn are disabled placeholders. All active external contact links currently use the supplied Upwork profile.
- Hero portrait: `public/hero.jpeg`, mapped in `src/config/media.ts`.
- Location artwork: `public/illinois-location-burgundy.webp`.
- Ten active videos: `public/videos/`, with their sources in `src/config/media.ts`.
- Section descriptions and video titles: `src/components/sections/`.
- Quiz questions and results: `src/config/quiz.ts`.
- Theme and layout: `src/app/globals.css` and `src/app/interaction.css`.
- Scoped violet accents: `src/app/reference-red-accents.css`.

## Cloudinary

Upload your videos through the Cloudinary dashboard, then replace a video's `source` in `src/config/media.ts` with its public delivery URL.

Alternatively, copy `.env.example` to `.env.local`, set `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`, and fill the video's `cloudinaryPublicId`. Restart or rebuild after changing environment variables. No API secret is needed in the website.

Videos autoplay muted when visible, loop inline, and pause offscreen or in a hidden tab. Only one video can play with sound at a time. Custom posters are optional; Cloudinary videos receive an automatic first-frame poster.

## Checks

```sh
npm run typecheck
npm run lint
npm run build
```

With the development server running, the browser checks use an installed Windows Chrome browser:

```sh
node scripts/verify.mjs
node scripts/verify-links.mjs
```

The link audit checks desktop navigation, mobile navigation, quiz-result links and the Upwork popup destination. Screenshots and reports are saved to the ignored `test-results/` folder.

## Stack

Next.js App Router, React, TypeScript, Tailwind CSS, Radix/shadcn-style components, Motion and Lucide. Install the locked dependency versions with `npm ci`.

Build files, dependencies, local environment files, reference downloads, unused media, and one-time asset-generation utilities are excluded from Git.
