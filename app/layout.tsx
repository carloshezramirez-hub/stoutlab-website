import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "STOUTLAB | Inteligencia pública, data y estrategia digital",
  description:
    "Encuestas, analítica, narrativa, performance digital, automatización y comunicación multicanal para organizaciones que necesitan convertir datos en decisiones.",
  keywords: [
    "stoutlab",
    "inteligencia pública",
    "encuestas",
    "estrategia digital",
    "comunicación",
    "data",
    "Puebla",
    "México",
  ],
  openGraph: {
    title: "STOUTLAB | Inteligencia pública, data y estrategia digital",
    description:
      "Encuestas, analítica, narrativa, performance digital, automatización y comunicación multicanal para organizaciones que necesitan convertir datos en decisiones.",
    type: "website",
    locale: "es_MX",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
