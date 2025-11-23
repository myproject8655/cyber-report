import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldAlert, Lock, BookOpen } from "lucide-react";

const ResourcesSection: React.FC = () => {
  const resources = [
    {
      title: "Latest Cyber Threats",
      description: "Stay updated on emerging cyber threats, phishing scams, and fraud tactics targeting individuals and businesses.",
      icon: <ShieldAlert className="h-6 w-6" />,
      link: "/resources",
    },
    {
      title: "Safety Guidelines",
      description: "Practical tips, best practices, and step-by-step guides to protect your digital identity and financial data.",
      icon: <Lock className="h-6 w-6" />,
      link: "/resources",
    },
    {
      title: "Official Reporting Channels",
      description: "Directory of government portals, helpline numbers, and official channels for reporting cybercrime.",
      icon: <BookOpen className="h-6 w-6" />,
      link: "/resources",
    },
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="section-title">Cybersecurity Resources</h2>
            <p className="section-subtitle">
              Knowledge is your first line of defense. Stay informed about the latest threats and how to protect yourself.
            </p>
          </div>
          <Link href="/resources" className="hidden md:inline-flex items-center font-semibold text-primary hover:text-primary/80 transition-colors mt-4 md:mt-0">
            View All Resources <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div key={index} className="group bg-card hover:bg-primary/5 rounded-xl p-8 border border-border transition-all duration-300 hover:border-primary/20">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {resource.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{resource.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {resource.description}
              </p>
              <Link
                href={resource.link}
                className="inline-flex items-center text-primary font-semibold group-hover:translate-x-1 transition-transform duration-300"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link href="/resources" className="btn-outline inline-flex items-center">
            View All Resources <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;

