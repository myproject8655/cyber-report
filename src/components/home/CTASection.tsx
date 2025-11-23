import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { AlertTriangle, PhoneCall } from "lucide-react";

const CTASection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-900"></div>
      
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white/5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-60 h-60 rounded-full bg-secondary/20 blur-3xl"></div>

      <div className="container-custom relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
          Don't Let Fraudsters Win.
          <br />
          <span className="text-secondary">Take Action Today.</span>
        </h2>
        
        <p className="text-xl mb-10 max-w-2xl mx-auto text-blue-100 leading-relaxed">
          Every second counts in fraud recovery. Our team is standing by to review your case 
          and start the recovery process immediately.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/report">
            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 w-full sm:w-auto text-lg px-8 py-6 h-auto font-bold shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-xl">
              <AlertTriangle className="w-5 h-5 mr-2" />
              Start Your Recovery
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              variant="outline"
              className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary w-full sm:w-auto text-lg px-8 py-6 h-auto font-bold backdrop-blur-sm transition-all duration-300 rounded-xl"
            >
              <PhoneCall className="w-5 h-5 mr-2" />
              Talk to an Expert
            </Button>
          </Link>
        </div>
        
        <p className="mt-8 text-sm text-blue-200 opacity-80">
          Free Consultation • Confidential & Secure • No Upfront Recovery Fees
        </p>
      </div>
    </section>
  );
};

export default CTASection;
