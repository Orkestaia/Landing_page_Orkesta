import type { Metadata } from "next";
import { Space_Grotesk, Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Orkesta IA — Automatización con Agentes de IA y Workflows",
  description:
    "Orkesta Automation OS: agentes de voz, workflows inteligentes e integraciones que hacen que tu operación se ejecute sola. Solicita tu auditoría de automatización.",
  keywords: [
    "automatización",
    "IA",
    "agentes de voz",
    "workflows",
    "n8n",
    "orkesta",
  ],
  openGraph: {
    title: "Orkesta IA — Automatización Inteligente",
    description:
      "Agentes de IA y workflows que automatizan tu operación en semanas, no meses.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${firaCode.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
