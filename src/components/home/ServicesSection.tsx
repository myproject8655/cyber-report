import React from "react";
import { ShieldCheck, FileSearch, Globe, Smartphone } from "lucide-react";
import ServiceCard from "../common/ServiceCard";

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "Online Fraud Recovery",
      description:
        "Specialized assistance for e-commerce scams, investment fraud, and digital payment disputes. We help trace and recover lost funds.",
      icon: <Globe className="text-primary h-8 w-8" />,
      link: "/services#online-fraud",
    },
    {
      title: "Banking & UPI Fraud",
      description:
        "Immediate support for unauthorized transactions, phishing attacks, and UPI scams. We coordinate directly with banks to freeze assets.",
      icon: <Smartphone className="text-primary h-8 w-8" />,
      link: "/services#banking-fraud",
    },
    {
      title: "Cyber Crime Reporting",
      description:
        "Professional drafting and filing of FIRs and cyber crime complaints with relevant authorities to ensure your case is taken seriously.",
      icon: <FileSearch className="text-primary h-8 w-8" />,
      link: "/services#cybercrime",
    },
    {
      title: "Identity Theft Protection",
      description:
        "Comprehensive support to restore your digital identity, secure compromised accounts, and prevent further misuse of your personal data.",
      icon: <ShieldCheck className="text-primary h-8 w-8" />,
      link: "/services#identity-theft",
    },
  ];

  return (
    <section className="section-padding bg-muted/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Comprehensive Cyber Protection</h2>
          <p className="section-subtitle mx-auto">
            We provide end-to-end assistance to help you navigate through complex
            cyber fraud incidents and ensure your rights are protected at every step.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
