import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Dhruv - AI Developer & Software Engineer",
  description: "Dhruv is an AI Developer and Software Engineer who builds intelligent systems, AI-powered applications, and scalable SaaS products that solve real-world problems.",
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
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
          spaceGrotesk.variable
        )}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
