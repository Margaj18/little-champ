import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Little Champ School - Nurturing Young Minds",
  description: "A premier educational institution dedicated to nurturing young minds with love, care, and quality education. Offering programs from Pre-school to Senior KG.",
  keywords: ["school", "education", "pre-school", "nursery", "kindergarten", "children", "learning"],
  authors: [{ name: "Little Champ School" }],
  openGraph: {
    title: "Little Champ School - Nurturing Young Minds",
    description: "A premier educational institution dedicated to nurturing young minds with love, care, and quality education.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfairDisplay.variable} antialiased`}>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
