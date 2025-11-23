import React from "react";

import { ShieldCheck, FileSearch, Briefcase, Globe, Check } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PageHeader from "@/components/common/PageHeader";
import { data } from "@/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cyber Fraud Recovery Services | Expert Support & Legal Assistance",
  description: "Professional cyber fraud recovery services including online fraud resolution, banking fraud support, cybercrime investigation, and legal assistance. Expert guidance for fraud victims.",
  keywords: [
    "cyber fraud recovery services",
    "online fraud resolution",
    "banking fraud support",
    "cybercrime investigation",
    "fraud recovery assistance",
    "cyber law experts",
    "digital fraud support",
    "phishing recovery services",
    "identity theft recovery",
    "financial fraud assistance",
    "cyber crime reporting",
    "fraud victim support",
    "cyber security consulting",
    "digital forensics",
    "online scam recovery",
    "cyber fraud prevention",
    "legal cyber assistance",
    "fraud case management"
  ],
};

const Services: React.FC = () => {
  const services = [
    {
      id: "online-fraud",
      title: "Online Fraud Recovery & Resolution",
      icon: <Globe className="text-primary h-10 w-10" />,
      description:
        "Expert guidance and support for victims of online fraud, providing step-by-step assistance with documentation, platform reporting, and recovery procedures to maximize your chances of resolution.",
      features: [
        "E-commerce scam detection and recovery assistance",
        "Social media fraud investigation and reporting",
        "Phishing and identity theft protection guidance",
        "Direct coordination with platform security teams",
        "Comprehensive recovery strategy development",
      ],
    },
    {
      id: "banking-fraud",
      title: "Banking Fraud Recovery Support",
      icon: <ShieldCheck className="text-primary h-10 w-10" />,
      description:
        "Specialized assistance in navigating banking fraud recovery, from unauthorized transactions to account breaches, ensuring you follow the right procedures for maximum fund recovery.",
      features: [
        "Rapid unauthorized transaction reporting",
        "Comprehensive account breach documentation",
        "Direct liaison with banking institutions",
        "RBI compliance and regulatory guidance",
        "Persistent fund recovery advocacy",
      ],
    },
    {
      id: "cybercrime",
      title: "Cyber Crime Investigation Support",
      icon: <FileSearch className="text-primary h-10 w-10" />,
      description:
        "Professional guidance through the complete cybercrime reporting process, ensuring your case reaches the right authorities with proper documentation for effective investigation.",
      features: [
        "Professional police complaint documentation",
        "National Cyber Crime Portal expert submission",
        "Evidence collection and legal preservation",
        "Active case monitoring and status updates",
        "Direct coordination with cybercrime units",
      ],
    },
    {
      id: "legal",
      title: "Cyber Law Expert Network",
      icon: <Briefcase className="text-primary h-10 w-10" />,
      description:
        "Access our network of specialized cyber law attorneys who provide expert legal counsel and representation tailored to your specific cyber fraud situation.",
      features: [
        "Curated network of cyber law specialists",
        "Comprehensive legal rights assessment",
        "Case viability and strength analysis",
        "Legal documentation preparation and review",
        "Court representation and litigation support",
      ],
    },
  ];

  const faqs = [
    {
      question: "How quickly should I act after discovering a cyber fraud incident?",
      answer:
        "Time is critical in cyber fraud cases. We recommend immediate action within 24-48 hours of discovery. Early reporting significantly improves your chances of successful resolution and fund recovery, especially in financial fraud cases.",
    },
    {
      question: "What documentation should I prepare for my fraud case?",
      answer:
        "Essential documentation includes detailed transaction records, all communication with the fraudster, screenshots of relevant webpages or messages, compromised personal and banking information, and any additional evidence. Our team will guide you through organizing this information effectively.",
    },
    {
      question: `What are the costs for ${data.siteName}'s services?`,
      answer:
        `${data.siteName} provides complimentary initial consultations and basic guidance to all victims. For comprehensive case management and legal coordination, we offer transparent, competitive pricing that scales with your case complexity and required services.`,
    },
    {
      question: "What are my chances of recovering lost funds?",
      answer:
        "While no service can guarantee 100% fund recovery, our experienced team maintains an excellent success rate in helping clients recover their funds. Success depends on factors like reporting speed, evidence quality, and case complexity, but we fight aggressively for every client.",
    },
    {
      question: "Can I receive help without visiting your office?",
      answer:
        "Absolutely! We provide comprehensive remote assistance through phone, email, and video consultations. Our digital-first approach ensures you get expert help from anywhere. In-person meetings are only recommended for complex legal proceedings or when specifically requested.",
    },
  ];

  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="Expert guidance and support to help you fight back against cyber fraud, recover your losses, and protect your digital rights."
      />

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-custom">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`py-10 ${
                index !== services.length - 1 ? "border-b border-gray-200" : ""
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7">
                  <div className="flex items-center mb-6">
                    <div className="mr-4 bg-primary/10 p-3 rounded-full">
                      {service.icon}
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">
                      {service.title}
                    </h2>
                  </div>

                  <p className="text-gray-600 mb-6 text-lg">
                    {service.description}
                  </p>

                  <h3 className="text-xl font-semibold mb-4 text-gray-800">
                    Our Comprehensive Support:
                  </h3>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="text-secondary h-5 w-5 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-5 bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">
                    Our Proven Process
                  </h3>

                  <div className="space-y-4">
                    <div className="flex">
                      <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                        1
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">
                          Case Assessment
                        </h4>
                        <p className="text-gray-600 text-sm">
                          We thoroughly evaluate your situation and develop a strategic approach.
                        </p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                        2
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">
                          Evidence Compilation
                        </h4>
                        <p className="text-gray-600 text-sm">
                          We systematically collect and organize all critical evidence for your case.
                        </p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                        3
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">Strategic Reporting</h4>
                        <p className="text-gray-600 text-sm">
                          We facilitate proper reporting to all relevant authorities and platforms.
                        </p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">
                        4
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">
                          Ongoing Advocacy
                        </h4>
                        <p className="text-gray-600 text-sm">
                          We provide persistent support and advocacy until your case reaches resolution.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our services and cyber
              fraud reporting process.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-semibold text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Take Action Now</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Don&apos;t let cybercriminals win. Our expert team is standing by to help you fight back and recover what&apos;s yours.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="/report" className="btn-secondary text-black">
              Report an Incident
            </a>
            <a
              href="/contact"
              className="border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
