import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://travel-camping-ui.vercel.app"),
  title: {
    default:
      "Hilink - Your Ultimate Camping & Adventure Companion | Offline Maps & AR Navigation",
    template: "%s | Hilink - Camping & Adventure App",
  },
  description:
    "Discover amazing camping destinations, plan adventures with friends, and never get lost again with Hilink. Featuring offline maps, augmented reality navigation, adventure scheduling, and a global community of outdoor enthusiasts. Available on iOS and Android.",
  keywords: [
    "camping app",
    "hiking app",
    "outdoor adventure",
    "offline maps",
    "augmented reality navigation",
    "camping destinations",
    "hiking trails",
    "adventure planning",
    "outdoor activities",
    "nature exploration",
    "camping guide",
    "hiking guide",
    "travel app",
    "adventure companion",
    "mountain climbing",
    "wilderness exploration",
    "camping community",
    "outdoor navigation",
    "AR navigation",
    "offline GPS",
    "camping spots",
    "hiking routes",
    "adventure scheduling",
    "outdoor recreation",
    "nature travel",
    "camping tips",
    "hiking tips",
    "Next.js",
    "React",
    "Tailwind CSS",
    "TypeScript",
    "Arnob Mahmud",
  ],
  authors: [{ name: "Arnob Mahmud", url: "https://arnob-mahmud.vercel.app/" }],
  creator: "Arnob Mahmud",
  publisher: "Arnob Mahmud",
  applicationName: "Hilink",
  category: "Travel & Outdoor",
  classification: "Travel Application",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
    icon: [{ url: "/favicon.ico", sizes: "any" }],
    apple: [{ url: "/apple.svg", sizes: "180x180", type: "image/svg+xml" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://travel-camping-ui.vercel.app",
    siteName: "Hilink - Camping & Adventure App",
    title: "Hilink - Your Ultimate Camping & Adventure Companion",
    description:
      "Discover amazing camping destinations, plan adventures with friends, and never get lost again with Hilink. Featuring offline maps, augmented reality navigation, and a global community of outdoor enthusiasts.",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "Hilink - Camping and Adventure App Hero Image showing beautiful outdoor destinations",
        type: "image/png",
      },
      {
        url: "/phones.png",
        width: 1100,
        height: 1740,
        alt: "Hilink mobile app available on iOS and Android",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hilink - Your Ultimate Camping & Adventure Companion",
    description:
      "Discover amazing camping destinations, plan adventures with friends, and never get lost again with Hilink. Offline maps, AR navigation, and more!",
    images: ["/hero.png"],
    creator: "@arnob_mahmud",
    site: "@arnob_mahmud",
  },
  alternates: {
    canonical: "https://travel-camping-ui.vercel.app",
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Hilink",
    "mobile-web-app-capable": "yes",
    "theme-color": "#30AF5B",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
