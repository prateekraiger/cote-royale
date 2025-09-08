import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import localFont from "next/font/local";

import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";
import { ViewTransitions } from "next-view-transitions";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  display: "swap",
});

const gambrino = localFont({
  src: "./gambrino.woff2",
  display: "swap",
  variable: "--font-gambrino",
});

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
    title: "Côte Royale Paris",
    description:
      "Discover the exquisite collection of luxury fragrances by Côte Royale Paris",
    openGraph: {
      images: ["/og-image.png"],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html
        lang="en"
        className={`${raleway.variable} ${gambrino.variable} antialiased`}
      >
        <body className="bg-neutral-900 text-white">
          <Navbar />
          <main className="pt-16 sm:pt-18 md:pt-20">{children}</main>
          <Footer />
          <PrismicPreview repositoryName={repositoryName} />
        </body>
      </html>
    </ViewTransitions>
  );
}
