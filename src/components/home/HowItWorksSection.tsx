import React from "react";
import { FileSearch, Shield, ShieldCheck, ArrowRight } from "lucide-react";

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      id: "01",
      title: "Report the Incident",
      description:
        "Submit your case details securely through our encrypted platform. The more details you provide, the stronger your case becomes.",
      icon: <FileSearch className="h-8 w-8" />,
    },
    {
      id: "02",
      title: "Expert Analysis",
      description:
        "Our cyber fraud specialists analyze your case, trace the digital footprint, and formulate a strategic recovery plan tailored to your situation.",
      icon: <Shield className="h-8 w-8" />,
    },
    {
      id: "03",
      title: "Action & Recovery",
      description:
        "We coordinate with financial institutions and law enforcement to freeze assets and recover your lost funds while providing you legal support.",
      icon: <ShieldCheck className="h-8 w-8" />,
    },
  ];

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/30 skew-x-12 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="section-title">How We Help You Recover</h2>
          <p className="section-subtitle mx-auto">
            Our streamlined, three-step process ensures you get the professional support 
            you need quickly and efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-border to-transparent z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 group">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300 relative">
                  {step.icon}
                  <div className="absolute -top-3 -right-3 bg-secondary text-secondary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-sm border-2 border-white">
                    {step.id}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                
                <div className="mt-auto pt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="h-6 w-6 text-primary mx-auto" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

