import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sahana Marigoudra | MCA Student & Aspiring Software Developer",
  description: "Portfolio of Sahana Marigoudra, an MCA student focused on software development, web applications, and database management.",
  openGraph: {
    title: "Sahana Marigoudra | Portfolio",
    description: "Portfolio of Sahana Marigoudra, an MCA student focused on software development.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahana Marigoudra | Portfolio",
    description: "Portfolio of Sahana Marigoudra, an MCA student focused on software development.",
  }
};

import GlowEffect from "@/components/ui/GlowEffect";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} antialiased selection:bg-accent selection:text-foreground`}
      >
        <GlowEffect />
        {children}
      </body>
    </html>
  );
}

