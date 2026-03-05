import type { Metadata } from "next";
import "./globals.css";
import MotionProvider from "@/src/components/MotionProvider";
import CustomCursor from "@/src/components/CustomCursor";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.phoenixglobaltrade.com"),
  title: "Phœnix | Global Sourcing Excellence",
  description:
    "L'ingénierie du sourcing de demain. Une passerelle stratégique entre l'excellence industrielle asiatique et les ambitions ouest-africaines.",
  icons: {
    icon: "/logo.jpeg",
    shortcut: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
  manifest: "/site.webmanifest",
  themeColor: "#e42c33",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Phœnix",
  },
  alternates: {
    canonical: "https://www.phoenixglobaltrade.com",
  },
  openGraph: {
    type: "website",
    url: "https://www.phoenixglobaltrade.com",
    title: "Phœnix | Global Sourcing Excellence",
    description:
      "L'ingénierie du sourcing de demain. Une passerelle stratégique entre l'excellence industrielle asiatique et les ambitions ouest-africaines.",
    siteName: "Phœnix Global Trade",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Phœnix | Global Sourcing Excellence",
    description:
      "Une passerelle stratégique entre l'excellence industrielle asiatique et les ambitions ouest-africaines.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Plus+Jakarta+Sans:wght@300;400;600;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#fdfbf7] text-[#0a1a31] font-body transition-colors duration-300">
        <CustomCursor />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
