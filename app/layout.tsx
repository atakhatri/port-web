import type { Metadata } from "next";
import { Geist } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Aurora from "@/components/animated/lightrays";
import ClickSpark from "@/components/ui/ClickSpark";
import Footer from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/next";
import PreloaderWrapper from "@/components/layout/PreloaderWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const abolition = localFont({
  src: "./fonts/Abolition-Regular.otf",
  variable: "--font-abolition",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ata Khatri | Portfolio",
    template: "%s | Ata Khatri", // Automatically appends your name to sub-page titles
  },
  description:
    "I'm Ata Khatri, a developer and creative showcasing my latest software projects, skills, and visual gallery.",
  keywords: [
    "Ata Khatri",
    "Ata",
    "Khatri",
    "Developer",
    "Portfolio",
    "Web Developer",
    "Software Engineer",
    "Next.js",
    "React",
    "Frontend Developer",
    "Portfolio",
    "Web Developer",
    "Software Engineer",
    "Next.js",
    "React",
    "Frontend Developer",
  ],
  verification: {
    google: "8UfbM8SAC0jlDLNos6kOYqjF75aXdeStlHRAzigs-a8", // Replace with your actual verification code
  },
  authors: [{ name: "Ata Khatri" }],
  creator: "Ata Khatri",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portify-amber.vercel.app/", // Replace with your domain
    title: "Ata Khatri | Portfolio",
    description:
      "Explore my latest software projects, skills, and visual gallery.",
    siteName: "Ata Khatri Portfolio",
    images: [
      {
        url: "https://portify-amber.vercel.app/pic.jpg", // Make sure you have an image here for link previews!
        width: 1200,
        height: 630,
        alt: "Ata Khatri - Portfolio Overview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ata Khatri | Portfolio",
    description:
      "Explore my latest software projects, skills, and visual gallery.",
    images: ["https://portify-amber.vercel.app/pic.jpg"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${abolition.variable} antialiased flex flex-col min-h-screen`}
      >
        <PreloaderWrapper>
          <ClickSpark
            sparkColor="#fff"
            sparkSize={10}
            sparkRadius={15}
            sparkCount={8}
            duration={400}
          >
            <Navbar />
            <Aurora
              colorStops={["#f5ebe0", "#ffb703", "#f5ebe0"]}
              blend={1}
              amplitude={1.5}
              speed={1}
            />
            <main className="flex-grow relative z-20">
              {children}
              <Analytics />
            </main>
            <Footer />
          </ClickSpark>
        </PreloaderWrapper>
      </body>
    </html>
  );
}
