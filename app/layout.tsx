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
  openGraph: {
    title: "SenseiCripto - Secretos para Invertir en Criptomonedas",
    description: "Descubre las estrategias y secretos que necesitas para invertir exitosamente en criptomonedas. Aprende de los expertos y toma decisiones informadas.",
    type: "website",
    locale: "es_ES",
    siteName: "SenseiCripto",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
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
