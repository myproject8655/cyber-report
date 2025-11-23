import React from "react";

const StatsSection: React.FC = () => {
  const stats = [
    {
      value: "5,000+",
      label: "Cases Successfully Handled",
      description: "Trust earned through results"
    },
    {
      value: "98%",
      label: "Recovery Success Rate",
      description: "Industry leading performance"
    },
    {
      value: "₹50Cr+",
      label: "Funds Recovered",
      description: "For our valued clients"
    },
    {
      value: "24/7",
      label: "Rapid Response Team",
      description: "Always here when you need us"
    },
  ];

  return (
    <section className="relative py-16 bg-foreground text-background overflow-hidden">
      {/* Abstract Background Pattern */}
      <div className="absolute inset-0 opacity-5">
         <div className="absolute top-0 left-0 w-full h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#fff_10px,#fff_20px)]"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
          {stats.map((stat, index) => (
            <div key={index} className="px-4 py-4 md:py-0 flex flex-col items-center group">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-primary group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-lg font-semibold mb-1 text-white">{stat.label}</div>
              <div className="text-sm text-white/60">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
