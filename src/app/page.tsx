import CTASection from "@/components/home/CTASection";
import HeroSection from "@/components/home/HeroSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import ReportSection from "@/components/home/ReportSection";
import ResourcesSection from "@/components/home/ResourcesSection";
import ServicesSection from "@/components/home/ServicesSection";
import StatsSection from "@/components/home/StatsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cyber Fraud Recovery & Legal Support | Expert Victim Assistance",
  description: "Professional cyber fraud recovery services. We help victims of online scams, banking fraud, and identity theft recover lost funds and secure their digital presence.",
  keywords: [
    "cyber fraud recovery",
    "online scam legal help",
    "banking fraud investigation",
    "cybercrime victim support",
    "fraud recovery attorneys",
    "online fraud resolution",
    "cyber security consultation",
    "digital forensics",
    "phishing scam recovery",
    "identity theft protection",
    "financial fraud advocacy",
    "cyber crime reporting portal",
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <HowItWorksSection />
      <ReportSection />
      <TestimonialsSection />
      <ResourcesSection />
      <CTASection />
    </main>
  );
}
