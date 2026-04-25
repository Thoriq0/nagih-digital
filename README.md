# Nagih Digital

Landing page dan halaman login presentasional untuk produk **NagihClient**, aplikasi invoice dan reminder pembayaran untuk freelancer, UMKM, dan tim kecil di Indonesia.

## Overview

Project ini dibangun dengan Next.js App Router dan berfokus pada:

- landing page marketing dengan section hero, features, dashboard preview, pricing, testimonials, dan CTA
- halaman login UI-only untuk kebutuhan demo/presentasi
- visual gelap dengan glassmorphism, highlight gradient, dan interaksi ringan

## Stack

- Next.js 16
- React 19
- Tailwind CSS 4
- ESLint 9

## Getting Started

Install dependency:

```bash
npm install
```

Jalankan development server:

```bash
npm run dev
```

Buka `http://localhost:3000`.

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Project Structure

```text
src/
  app/
    page.js
    login/page.js
    layout.js
    globals.css
  components/
    landing/
```

## Notes

- Folder `DESIGN/` sengaja tidak ikut version control.
- Halaman `/login` hanya untuk tampilan UI dan belum terhubung ke autentikasi backend.

## License

MIT
