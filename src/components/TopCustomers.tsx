import React from "react";

const customerLogos = [
  "/Logo on SAF website/1.png",
  "/Logo on SAF website/2.png",
  "/Logo on SAF website/3.png",
  "/Logo on SAF website/4.png",
  "/Logo on SAF website/5.png",
  "/Logo on SAF website/6.png",
  "/Logo on SAF website/7.png",
  "/Logo on SAF website/8.png",
];

// Create perfect loop by duplicating logos multiple times
const duplicatedLogos = [...customerLogos, ...customerLogos, ...customerLogos, ...customerLogos];

const TopCustomers: React.FC = () => {
  return (
    <section className="py-8 md:py-12">
      <div className="container px-4">
        <h2 className="text-center text-xs md:text-sm uppercase tracking-widest text-muted-foreground mb-4 md:mb-6">Our SAF Brand Collection</h2>
        <div className="relative overflow-hidden">
          <div className="flex gap-10 md:gap-16 animate-marquee will-change-transform" aria-hidden="true">
            {duplicatedLogos.map((src, idx) => (
              <div key={idx} className="shrink-0 flex items-center">
                <img
                  src={src}
                  alt="SAF logo"
                  className="h-10 md:h-16 w-auto opacity-90 grayscale hover:grayscale-0 hover:opacity-100 transition duration-300"
                  loading="lazy"
                  height={64}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopCustomers;


