# HiON — Landing Page

Landing page untuk **HiON**, personal AI ecosystem yang selalu ON.  
Dibangun dengan HTML, CSS, dan JavaScript murni — tanpa framework, tanpa build tool.

---

## Tentang HiON

**HiON** = *Hi* (sapaan) + *ON* (aktif/menyala/always ready)

> "Human Intelligence ON" — ekosistem AI personal yang mengenal hidupmu, membantu kamu berkembang, dan menjaga privasimu.

### Modul

| Modul | Deskripsi |
|---|---|
| **Finance** | Pemasukan, pengeluaran, goals tabungan, manajemen hutang & cicilan |
| **Habit** | Tracker kebiasaan harian, siklus mens, deteksi pola buruk & streak |
| **Life Inventory** | Restock barang, jadwal kebersihan rumah, pengingat cerdas |
| **Lumi** | AI mental companion — chat empati, jurnal mingguan, badge mood |

---

## Struktur Proyek

```
LandingPage-Hion/
├── index.html          # Home — hero, overview modul, testimoni, CTA
├── features.html       # Detail fitur 4 modul + section privasi
├── about.html          # Cerita, nilai, cara kerja, roadmap, FAQ
├── waitlist.html       # Form early access / waitlist
├── assets/
│   ├── css/
│   │   └── styles.css  # Design system & shared styles
│   ├── js/
│   │   └── main.js     # Lucide init, mobile nav, scroll reveal, forms
│   └── images/         # OG image & aset visual (placeholder)
└── .gitignore
```

---

## Teknologi

- **HTML5** semantik — `<main>`, `<nav>`, `<footer>`, `<section>`
- **CSS3** — custom properties, grid, flexbox, `clamp()`, `backdrop-filter`
- **JavaScript** — vanilla, tanpa dependency
- **[Lucide Icons](https://lucide.dev)** — icon library via CDN
- **Google Fonts** — Inter + Space Grotesk

---

## Halaman

### `index.html` — Home
Hero section dengan dashboard preview, social proof strip, overview 4 modul, stats, testimoni beta user, dan quick waitlist form.

### `features.html` — Fitur
Detail setiap modul lengkap dengan sticky tab navigation, mockup UI interaktif, checklist fitur, dan section privasi.

### `about.html` — Tentang
Cerita di balik HiON, 3 nilai utama, alur cara kerja (4 langkah), roadmap Q1 2026 → 2027, dan FAQ accordion.

### `waitlist.html` — Early Access
Split-layout form pendaftaran dengan pitch di kiri dan form di kanan. Menampilkan slot counter, perk list, dan social proof avatar.

---

## Cara Menjalankan

Tidak ada build step. Buka langsung di browser:

```bash
# Clone repo
git clone https://github.com/casworks/LandingPage-Hion.git
cd LandingPage-Hion

# Buka di browser (salah satu cara)
open index.html                        # macOS
start index.html                       # Windows
python -m http.server 3000             # via Python (recommended)
npx serve .                            # via Node.js
```

> **Catatan:** Lucide Icons dimuat via CDN — butuh koneksi internet saat development.

---

## SEO

Setiap halaman dilengkapi:

- `<meta name="description">` spesifik per halaman
- `<link rel="canonical">`
- Open Graph (`og:title`, `og:description`, `og:image`, `og:url`)
- Twitter Card (`summary_large_image`)
- `lang="id"` pada `<html>`

---

## Design System

Variabel CSS utama di `assets/css/styles.css`:

```css
--bg:       #000000   /* background utama */
--surface:  #0a0a0a   /* surface card */
--card:     #111111   /* card background */
--border:   #1e1e1e   /* border subtle */
--text:     #efefef   /* teks utama */
--muted:    #606060   /* teks sekunder */
--green:    #4ade80   /* Finance */
--purple:   #a78bfa   /* Habit */
--cyan:     #22d3ee   /* Life Inventory */
--pink:     #f472b6   /* Lumi */
```

Font: **Space Grotesk** (heading) + **Inter** (body)

---

## Roadmap Produk

| Periode | Status | Milestone |
|---|---|---|
| Q1 2026 | ✅ Selesai | Core architecture & design system |
| Q2 2026 | ✅ Selesai | Finance & Habit module |
| Q3 2026 | 🔄 Berjalan | Life Inventory + Lumi beta, closed beta |
| Q4 2026 | 📅 Planned | Public launch |
| 2027 | 📅 Planned | Mobile app (iOS & Android), integrasi bank |

---

## Kontribusi

Proyek ini saat ini dikembangkan secara internal. Feedback dan saran tetap disambut melalui [waitlist](https://hion.app/waitlist).

---

© 2026 HiON · Dibuat dengan ♥ di Indonesia
