import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import { data } from "@/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: data.siteName,
    template: `%s | ${data.siteName}`,
  },
  description:
    "Your Trusted Partner Against Cyber Fraud. We help individuals and organizations report, resolve, and recover from cyber fraud incidents with expert guidance and support.",
  keywords: [
    "cyber fraud recovery",
    "cybercrime reporting",
    "online fraud assistance",
    "banking fraud support",
    "cyber security help",
    "fraud victim support",
    "cyber law experts",
    "digital security",
    "phishing protection",
    "identity theft recovery",
    "cyber crime investigation",
    "online scam recovery",
    "financial fraud assistance",
    "cyber security consulting",
    "digital forensics",
    "cyber fraud prevention",
    "online safety",
    "cyber crime victim support",
    "fraud reporting portal",
    "cyber security awareness"
  ],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TooltipProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </TooltipProvider>
      </body>
    </html>
  );
}
