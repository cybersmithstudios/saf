import React from "react";

const customerLogos = [
  "/lovable-uploads/421e2a44-e815-41c1-82dd-1a469780dea3.png",
  "/lovable-uploads/723ae6f7-3704-4ff8-8721-dd5037b2f65a.png",
  "/lovable-uploads/447661366-5606-48de-80a9-adce1db50387.png".replace("447661366", "44661366"),
  "/lovable-uploads/915198ed-7d27-46dd-baad-0896ed48e4b8.png",
  "/lovable-uploads/b1103cfe-3142-451b-bbf9-ee6ff92bc496.png",
  "/lovable-uploads/84a43ce2-bedb-4b1b-9767-076f4a67eeb4.png",
  "/lovable-uploads/e235556c-31ed-453d-a06b-b26df833f6b6.png",
  "/lovable-uploads/c069bc9d-7488-49d1-8adf-e34274fed27e.png",
];

const duplicatedLogos = [...customerLogos, ...customerLogos];

const TopCustomers: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-center text-sm uppercase tracking-widest text-muted-foreground mb-6">Trusted by top customers</h2>
        <div className="relative overflow-hidden">
          <div className="flex gap-12 animate-marquee will-change-transform" aria-hidden="true">
            {duplicatedLogos.map((src, idx) => (
              <div key={idx} className="shrink-0 flex items-center">
                <img
                  src={src}
                  alt="Customer logo"
                  className="h-10 w-auto opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition duration-300"
                  loading="lazy"
                  height={40}
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


