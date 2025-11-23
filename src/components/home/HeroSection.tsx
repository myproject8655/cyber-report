import React from "react";
import { Shield, AlertTriangle, Zap, Users, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { data } from "@/data";

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section relative text-white">
      <div className="container-custom py-20 md:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center justify-center lg:justify-start mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 animate-fadeIn">
              <Shield className="text-secondary h-5 w-5 mr-2" />
              <span className="text-sm md:text-base font-medium text-white/90 tracking-wide">
                {data.siteName} Protection
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
              Secure Your <br className="hidden lg:block" />
              <span className="text-secondary bg-clip-text text-transparent bg-gradient-to-r from-secondary to-amber-200">
                Digital Life
              </span>
            </h1>

            <p className="text-lg md:text-xl mb-8 text-white/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Fallen victim to cyber fraud? We provide <strong>rapid response</strong>, 
              <strong> expert legal recovery</strong>, and <strong>comprehensive support</strong> to get your assets back.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4 mb-10 text-sm font-medium">
              <div className="flex items-center text-white/90">
                <CheckCircle className="w-5 h-5 mr-2 text-secondary" />
                <span>98% Success Rate</span>
              </div>
              <div className="flex items-center text-white/90">
                <Users className="w-5 h-5 mr-2 text-secondary" />
                <span>5000+ Cases Won</span>
              </div>
              <div className="flex items-center text-white/90">
                <Zap className="w-5 h-5 mr-2 text-secondary" />
                <span>24/7 Rapid Response</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/#file-report" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-6 h-auto font-bold shadow-lg shadow-secondary/20 transition-all duration-300 hover:-translate-y-1 rounded-xl">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  Report Fraud Now
                </Button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary text-lg px-8 py-6 h-auto font-bold backdrop-blur-sm transition-all duration-300 rounded-xl"
                >
                  Get Expert Help
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative order-1 lg:order-2 hidden md:block">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Glow Effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/30 rounded-full blur-[100px] pointer-events-none"></div>
              
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 transform hover:scale-[1.02] transition-transform duration-500">
                <Image
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
                  alt="Cybersecurity Specialist Analysis"
                  width={600}
                  height={500}
                  className="object-cover w-full h-auto"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent mix-blend-multiply"></div>
              </div>
              
              {/* Floating Stats Cards */}
              <div className="absolute -top-6 -right-6 bg-white text-primary p-5 rounded-2xl shadow-xl z-20 animate-[bounce_3s_infinite]">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-xl leading-none">98%</p>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-1">Success Rate</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-secondary text-secondary-foreground p-5 rounded-2xl shadow-xl z-20">
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-xl leading-none">24/7</p>
                    <p className="text-xs font-semibold opacity-80 uppercase tracking-wider mt-1">Emergency Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-[calc(100%+1.3px)] h-[50px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-background"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
