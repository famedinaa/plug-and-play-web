import type { Metadata } from "next";
import { Geist, Geist_Mono, Bricolage_Grotesque, Comfortaa } from "next/font/google";
import "./globals.css";
import { brandAccent, brandTheme } from "@/lib/content";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

/** Tipografía del logo ("plug and play" en minúsculas). */
const comfortaa = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["latin"],
  weight: ["300", "400"],
});

export const metadata: Metadata = {
  title: "Plug and Play — Reparación de PCs, celulares y software a medida en Federal",
  description:
    "Reparación de PCs y celulares, venta de tecnología y sistemas de gestión propios para negocios. Federal, Entre Ríos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      data-accent={brandAccent}
      data-theme={brandTheme}
      className={`${geistSans.variable} ${geistMono.variable} ${bricolage.variable} ${comfortaa.variable} h-full antialiased scroll-smooth`}
    >
      <body className="flex min-h-full flex-col bg-paper font-sans text-ink">{children}</body>
    </html>
  );
}
