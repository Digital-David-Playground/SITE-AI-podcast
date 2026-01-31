import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/layout";
import { LanguageProvider } from "@/lib/i18n";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Tech Leaders Unplugged | Podcast",
    template: "%s | Tech Leaders Unplugged",
  },
  description:
    "Ungefilterte Gespräche von drei Tech-CEOs über digitale Transformation, KI und die Zukunft der Beratung.",
  keywords: [
    "podcast",
    "tech",
    "ceo",
    "digitale transformation",
    "ki",
    "beratung",
    "unternehmertum",
  ],
  authors: [
    { name: "Christian Culver" },
    { name: "Hubert Corr" },
    { name: "Stefan Rühle" },
  ],
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://techleadersunplugged.io",
    siteName: "Tech Leaders Unplugged",
    title: "Tech Leaders Unplugged",
    description:
      "Ungefilterte Gespräche von drei Tech-CEOs über digitale Transformation, KI und die Zukunft der Beratung.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Leaders Unplugged",
    description:
      "Ungefilterte Gespräche von drei Tech-CEOs über digitale Transformation, KI und die Zukunft der Beratung.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="dark">
      <body className={`${inter.variable} antialiased bg-zinc-950 text-white`}>
        <LanguageProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
