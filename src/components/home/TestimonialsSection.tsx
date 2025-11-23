import React from "react";
import TestimonialCard from "../common/TestimonialCard";
import { data } from "@/data";
import { Quote } from "lucide-react";

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Recovered ₹2.5 Lakhs",
      content:
        `${data.siteName} was a lifesaver. I had lost hope after my UPI fraud, but their team guided me through the bank dispute process and got my money back within weeks. Professional and empathetic throughout.`,
    },
    {
      name: "Rajesh Kumar",
      role: "Business Email Compromise Victim",
      content:
        `Our company faced a severe BEC attack. The experts at ${data.siteName} not only helped us recover the funds but also conducted a security audit to prevent future breaches. Highly recommended for businesses.`,
    },
    {
      name: "Anita Desai",
      role: "Identity Theft Victim",
      content:
        "I was terrified when I found loans taken in my name. The legal team here handled everything - from police complaints to clearing my CIBIL score. They gave me my peace of mind back.",
    },
  ];

  return (
    <section className="section-padding bg-white relative">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16">
          <div className="max-w-2xl">
            <div className="text-primary font-bold tracking-wider uppercase mb-2">Success Stories</div>
            <h2 className="section-title mb-0">Voices of Relief</h2>
          </div>
          <div className="hidden md:block">
            <Quote className="h-16 w-16 text-primary/10" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              content={testimonial.content}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
