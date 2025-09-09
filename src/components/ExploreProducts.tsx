import { Link } from "react-router-dom";

type Tile = {
  title: string;
  image: string;
  href: string;
};

const tiles: Tile[] = [
  { title: "Sofas", image: "/lovable-uploads/sofas.png", href: "#" },
  { title: "Armchairs", image: "/lovable-uploads/armchairs.png", href: "#" },
  { title: "Loungers", image: "/lovable-uploads/loungers1.png", href: "#" },
  { title: "Rattan", image: "/lovable-uploads/rattan1.png", href: "#" },
];

const ExploreProducts = () => {
  return (
    <section className="py-12 md:py-20 bg-muted/20">
      <div className="container px-4">
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-2xl md:text-4xl font-bold">Explore our products</h2>
          <p className="text-muted-foreground mt-2 text-sm md:text-base">
            Find the right design for enabling your people to do their best.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {tiles.map((tile) => (
            <div
              key={tile.title}
              className="group relative block overflow-hidden rounded-xl bg-white select-none pointer-events-none"
            >
              <div className="aspect-[4/5] md:aspect-[3/4]">
                <img
                  src={tile.image}
                  alt={tile.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 flex items-end p-4 md:p-6">
                <span className="text-base md:text-xl font-semibold text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
                  {tile.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreProducts;


