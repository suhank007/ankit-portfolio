import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { LoadingScreen } from "@/components/layout/loading-screen";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://ankit-portfolio-suhank007s-projects.vercel.app";
const title = "Ankit Parihar, Business Data & AI Consultant";
const description =
  "Ankit Parihar is a Paris-based Business Data and AI Consultant specializing in enterprise BI, PLM data strategy, and AI-enabled reporting for aviation, manufacturing, luxury retail, healthcare and financial services clients.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Ankit Parihar",
    "Business Intelligence Consultant",
    "Power BI Consultant",
    "PLM Data Strategy",
    "Data Strategy Consultant",
    "Business Data Consultant Paris",
    "AI Enabled Reporting",
  ],
  authors: [{ name: "Ankit Parihar" }],
  creator: "Ankit Parihar",
  openGraph: {
    title,
    description:
      "Enterprise BI, PLM data strategy and AI-enabled reporting for organizations that can't afford to guess.",
    type: "website",
    url: siteUrl,
    siteName: "Ankit Parihar",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description:
      "Enterprise BI, PLM data strategy and AI-enabled reporting for organizations that can't afford to guess.",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0c" },
  ],
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ankit Parihar",
  jobTitle: "Business Data & AI Consultant",
  url: siteUrl,
  image: `${siteUrl}/photo.jpg`,
  email: "mailto:parihara90@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Paris",
    addressCountry: "FR",
  },
  sameAs: ["https://www.linkedin.com/in/futureishere/", "https://github.com/suhank007"],
  knowsAbout: [
    "Business Intelligence",
    "Power BI",
    "PLM Data Strategy",
    "Data Strategy",
    "Enterprise Analytics",
    "AI-Enabled Reporting",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="antialiased selection:bg-accent">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <LoadingScreen />
          <div className="grain" />
          <SmoothScroll>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
