import type { Metadata } from "next";
import { Geist } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Aurora from "@/components/animated/lightrays";
import ClickSpark from "@/components/ui/ClickSpark";
import Footer from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/next";

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
  title: "Ata Khatri | Web/App Developer",
  description: "Ata Khatri's personal portfolio website.",
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
          {/* Removed overflow-hidden to allow content scrolling, added relative and z-10 */}
          <main className="flex-grow relative z-20">
            {children}
            <Analytics />
          </main>
          <Footer />
        </ClickSpark>
      </body>
    </html>
  );
}
