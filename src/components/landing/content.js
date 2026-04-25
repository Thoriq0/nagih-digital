export const navItems = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Track Payments", href: "#preview" },
  { label: "Testimonials", href: "#testimonials" },
];

export const stats = [
  { value: "50K+", label: "Invoice Terkirim", tone: "primary" },
  { value: "Rp 12T+", label: "Total Tagihan", tone: "secondary" },
  { value: "10K+", label: "UMKM Aktif", tone: "primary" },
  { value: "98%", label: "Paid on Time", tone: "secondary" },
];

export const featureCards = [
  {
    id: "invoice-generator",
    icon: "document",
    title: "Invoice Generator Ekspres",
    description:
      "Buat invoice profesional hanya dalam 30 detik. Isi detail, pilih template, dan kirim langsung ke email atau WhatsApp klien.",
    eyebrow: "Cepat dan presisi",
    tone: "primary",
    layout: "wide",
  },
  {
    id: "whatsapp-reminder",
    icon: "chat",
    title: "WhatsApp Reminder",
    description:
      "Sistem otomatis mengingatkan klien via WhatsApp saat jatuh tempo, jadi Anda tidak perlu merasa sungkan lagi.",
    eyebrow: "Automasi lokal",
    tone: "secondary",
    layout: "compact",
  },
  {
    id: "tracking-akurat",
    icon: "analytics",
    title: "Tracking Akurat",
    description:
      "Pantau cashflow secara real-time. Siapa yang sudah bayar, siapa yang menunggak, semuanya terlihat jelas dalam satu layar.",
    eyebrow: "Data yang jelas",
    tone: "primary",
    layout: "compact",
  },
  {
    id: "multi-payment",
    icon: "card",
    title: "Multi-Payment Gateway",
    description:
      "Terima pembayaran via QRIS, Virtual Account, hingga kartu kredit tanpa repot cek mutasi manual.",
    eyebrow: "Checkout fleksibel",
    tone: "tertiary",
    layout: "wide-alt",
  },
];

export const dashboardRows = [
  {
    initials: "AA",
    accent: "indigo",
    name: "Agus Ardiansyah",
    company: "Tech Solutions Ltd",
    amount: "Rp 4.500.000",
    dueDate: "24 Okt 2024",
    status: "Lunas",
    tone: "success",
  },
  {
    initials: "SM",
    accent: "teal",
    name: "Siska Mariani",
    company: "Creative Agency",
    amount: "Rp 7.200.000",
    dueDate: "05 Nov 2024",
    status: "Belum Bayar",
    tone: "warning",
  },
  {
    initials: "BP",
    accent: "violet",
    name: "Budi Prasetyo",
    company: "E-commerce Store",
    amount: "Rp 1.250.000",
    dueDate: "12 Nov 2024",
    status: "Overdue",
    tone: "danger",
  },
];

export const steps = [
  {
    number: "1",
    title: "Input Detail Klien",
    description:
      "Masukkan nama, nomor WhatsApp, dan layanan yang Anda berikan dalam form sederhana.",
    tone: "primary",
  },
  {
    number: "2",
    title: "Kirim & Terima",
    description:
      "Invoice terkirim otomatis dan klien bisa bayar lewat link aman yang Anda bagikan.",
    tone: "secondary",
  },
  {
    number: "3",
    title: "Cairkan Dana",
    description:
      "Pantau pembayaran masuk dan cairkan saldo ke rekening bank tanpa alur yang membingungkan.",
    tone: "tertiary",
  },
];

export const plans = [
  {
    name: "Starter",
    label: "STARTER",
    tone: "default",
    featured: false,
    ctaLabel: "Mulai Sekarang",
    ctaHref: "#cta",
    billing: {
      monthly: {
        price: "Gratis",
        suffix: "",
        description: "Untuk freelancer yang baru mulai.",
      },
      yearly: {
        price: "Gratis",
        suffix: "",
        description: "Tetap gratis untuk validasi workflow dan kirim invoice awal.",
      },
    },
    features: [
      { label: "5 Invoice / bulan", included: true },
      { label: "Manual Reminder", included: true },
      { label: "WhatsApp Otomatis", included: false },
      { label: "Custom Branding", included: false },
    ],
  },
  {
    name: "Professional",
    label: "PROFESSIONAL",
    tone: "primary",
    featured: true,
    badge: "TERPOPULER",
    ctaLabel: "Pilih Paket Pro",
    ctaHref: "#cta",
    billing: {
      monthly: {
        price: "99k",
        prefix: "Rp",
        suffix: "/bln",
        description: "Scale-up bisnismu lebih cepat.",
      },
      yearly: {
        price: "79k",
        prefix: "Rp",
        suffix: "/bln",
        description: "Ditagih tahunan untuk tim yang ingin hemat 20% sepanjang tahun.",
      },
    },
    features: [
      { label: "Unlimited Invoice", included: true },
      { label: "WhatsApp Reminder Otomatis", included: true },
      { label: "Dashboard Analytics", included: true },
      { label: "Link Bayar Custom", included: true },
    ],
  },
  {
    name: "Agency",
    label: "AGENCY",
    tone: "secondary",
    featured: false,
    ctaLabel: "Hubungi Kami",
    ctaHref: "#cta",
    billing: {
      monthly: {
        price: "249k",
        prefix: "Rp",
        suffix: "/bln",
        description: "Untuk tim dan agensi kreatif.",
      },
      yearly: {
        price: "199k",
        prefix: "Rp",
        suffix: "/bln",
        description: "Komitmen tahunan untuk agency yang ingin biaya operasional lebih efisien.",
      },
    },
    features: [
      { label: "Semua fitur PRO", included: true },
      { label: "Multi-user access (5 users)", included: true },
      { label: "Prioritas Customer Service", included: true },
      { label: "Export Laporan Pajak", included: true },
    ],
  },
];

export const testimonials = [
  {
    name: "Andra Ramadhan",
    role: "Logo Designer",
    initials: "AR",
    accent: "primary",
    quote:
      "NagihClient bener-bener nyelametin cashflow gue. Dulu sering sungkan nagih temen, sekarang sistem yang ingetin otomatis.",
  },
  {
    name: "Maya Pertiwi",
    role: "Content Creator",
    initials: "MP",
    accent: "secondary",
    quote:
      "Dashboard-nya clean banget kayak Notion. Gak pusing lihat datanya. Invoice yang dikirim ke klien juga terasa profesional.",
  },
  {
    name: "Reza Fahlevi",
    role: "Founder Kedai Digital",
    initials: "RF",
    accent: "tertiary",
    quote:
      "WhatsApp reminder jadi fitur paling berguna buat bisnis kami. Rasanya seperti punya asisten keuangan yang kerja terus.",
  },
  {
    name: "Nadia Kusuma",
    role: "Social Media Strategist",
    initials: "NK",
    accent: "primary",
    quote:
      "Sebelumnya follow-up invoice itu makan energi banget. Sekarang semua lebih rapi, dan klien juga lebih cepat respon karena formatnya jelas.",
  },
  {
    name: "Bima Saputra",
    role: "Freelance Developer",
    initials: "BS",
    accent: "secondary",
    quote:
      "Saya suka karena kelihatan profesional tanpa perlu setup ribet. Bahkan untuk project kecil pun invoice dan reminder-nya tetap terasa premium.",
  },
  {
    name: "Clara Wijaya",
    role: "Owner Studio Foto",
    initials: "CW",
    accent: "tertiary",
    quote:
      "Cashflow jadi lebih kebaca minggu ke minggu. Buat bisnis jasa seperti kami, visibility status bayar itu penting banget dan ini ngebantu.",
  },
];

export const footerLinks = [
  { label: "Privacy Policy", href: "#top" },
  { label: "Terms of Service", href: "#top" },
  { label: "WhatsApp Support", href: "#cta" },
  { label: "Contact Us", href: "#cta" },
];
