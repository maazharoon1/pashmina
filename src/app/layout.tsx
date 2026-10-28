import type { Metadata } from "next";
import { site, personalize } from "@/config/site";
import "./globals.css";
import "./interaction.css";
import "./reference-red-accents.css";

export const metadata: Metadata = {
  title: `${site.name} | ${site.title}`,
  description: personalize(site.description),
  openGraph: { title: site.name, description: personalize(site.description), type: "website" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link href="https://fonts.googleapis.com/css2?family=Anton&family=Great+Vibes&family=Unbounded:wght@600;700;800&family=Space+Grotesk:wght@500;600;700&family=Sora:wght@600;700;800&family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  </head><body className="portfolio-ready portfolio-loaded">{children}</body></html>;
}
