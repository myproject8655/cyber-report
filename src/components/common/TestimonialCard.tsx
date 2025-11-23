import Image from "next/image";
import React from "react";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  image?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  content,
  image,
}) => {
  return (
    <div className="card-custom h-full flex flex-col">
      <div className="flex mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star key={star} className="w-4 h-4 text-secondary fill-current" />
        ))}
      </div>
      
      <blockquote className="flex-grow mb-6">
        <p className="text-lg text-muted-foreground italic leading-relaxed">&quot;{content}&quot;</p>
      </blockquote>

      <div className="flex items-center mt-auto border-t border-border pt-4">
        <div className="mr-4">
          {image ? (
            <Image
              src={image}
              alt={name}
              width={48}
              height={48}
              className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center ring-2 ring-primary/20 text-primary font-bold text-lg">
              {name.charAt(0)}
            </div>
          )}
        </div>
        <div>
          <h4 className="font-bold text-foreground">{name}</h4>
          <p className="text-sm text-muted-foreground font-medium">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
