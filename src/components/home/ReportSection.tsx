import React from "react";
import { Shield, Lock } from "lucide-react";
import ReportForm from "../forms/ReportForm";

const ReportSection = () => {
  return (
    <section id="file-report" className="section-padding bg-gradient-to-b from-white to-muted/30 relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-destructive/10 text-destructive font-medium text-sm mb-6 animate-pulse">
            <Shield className="h-4 w-4 mr-2" />
            Secure & Confidential Reporting
          </div>
          <h2 className="section-title">File Your Complaint Now</h2>
          <p className="section-subtitle mx-auto">
            Time is critical in cyber fraud cases. The sooner you report, the higher the chances of recovery. 
            Our encrypted platform ensures your data remains safe.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-card rounded-2xl shadow-2xl border border-border overflow-hidden relative">
            {/* Top Accent Line */}
            <div className="h-2 bg-gradient-to-r from-primary via-secondary to-primary"></div>
            
            <div className="p-6 md:p-8">
              <ReportForm />
            </div>
            
            <div className="bg-muted/50 p-4 text-center text-sm text-muted-foreground border-t border-border flex items-center justify-center">
              <Lock className="h-3 w-3 mr-2" />
              Your information is encrypted and transmitted securely using 256-bit SSL encryption.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReportSection;
