import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SenseiCripto - Secretos para Invertir en Criptomonedas",
  description: "Descubre las estrategias y secretos que necesitas para invertir exitosamente en criptomonedas. Aprende de los expertos y toma decisiones informadas.",
  metadataBase: new URL('https://senseicripto-web.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "SenseiCripto - Secretos para Invertir en Criptomonedas",
    description: "Descubre las estrategias y secretos que necesitas para invertir exitosamente en criptomonedas. Aprende de los expertos y toma decisiones informadas.",
    url: 'https://senseicripto-web.vercel.app',
    type: "website",
    locale: "es_ES",
    siteName: "SenseiCripto",
    images: [
      {
        url: '/logo.png',
        width: 240,
        height: 240,
        alt: 'SenseiCripto Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "SenseiCripto - Secretos para Invertir en Criptomonedas",
    description: "Descubre las estrategias y secretos que necesitas para invertir exitosamente en criptomonedas.",
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    other: {
      'facebook-domain-verification': '',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
