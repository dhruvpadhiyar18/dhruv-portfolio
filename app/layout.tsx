import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Dhruv - AI Developer & Software Engineer",
  description: "Dhruv is an AI Developer and Software Engineer who builds intelligent systems, AI-powered applications, and scalable SaaS products that solve real-world problems.",
  metadataBase: new URL("https://dhruv-portfolio.vercel.app"), // Replace with your deployment URL
  openGraph: {
    title: "Dhruv's Portfolio",
    description: "Dhruv is an AI Developer and Software Engineer who builds intelligent systems, AI-powered applications, and scalable SaaS products that solve real-world problems.",
    url: "https://your-domain.com", // Replace with your domain
    siteName: "Dhruv's Portfolio",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhruv's Portfolio",
    description: "Dhruv is an AI Developer and Software Engineer who builds intelligent systems, AI-powered applications, and scalable SaaS products that solve real-world problems.",
    creator: "@your_twitter_handle", // Replace with your Twitter handle
    images: ["/og-image.svg"], 
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-sans antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
