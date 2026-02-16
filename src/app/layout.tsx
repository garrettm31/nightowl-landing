import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "NightOwl — AI After-Hours Phone Receptionist",
  description:
    "Never miss another after-hours call. NightOwl answers your phone, books appointments, and texts you a summary. Set up in 5 minutes.",
  openGraph: {
    title: "NightOwl — AI After-Hours Phone Receptionist",
    description:
      "Never miss another after-hours call. NightOwl answers your phone, books appointments, and texts you a summary.",
    url: "https://trynightowl.com",
    siteName: "NightOwl",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-night-950">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
