import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata = {
  title: {
    default: "NagihClient",
    template: "%s | NagihClient",
  },
  description:
    "NagihClient membantu freelancer dan UMKM Indonesia mengirim invoice profesional, memantau pembayaran, dan menagih lebih konsisten.",
  applicationName: "NagihClient",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${spaceGrotesk.variable} min-h-full`}
    >
      <body className="min-h-full bg-background font-sans text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
