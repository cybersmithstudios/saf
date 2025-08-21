import { Link } from "react-router-dom";

type Tile = {
  title: string;
  image: string;
  href: string;
};

const tiles: Tile[] = [
  {
    title: "Sofas",
    image: "/lovable-uploads/5seater-2.jpg",
    href: "/collection?category=lugano",
  },
  {
    title: "Armchairs",
    image: "/lovable-uploads/malibu-2.jpeg",
    href: "/collection?category=armchairs",
  },
  {
    title: "Loungers",
    image: "/lovable-uploads/7seater-3.jpg".replace("7seater-3.jpg", "6seater-3.jpg"),
    href: "/collection?category=loungers",
  },
  {
    title: "Rattan",
    image: "/lovable-uploads/84a43ce2-bedb-4b1b-9767-076f4a67eeb4.png",
    href: "/collection?category=weaved-rattan",
  },
];

const ExploreProducts = () => {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Explore our products</h2>
          <p className="text-muted-foreground mt-2">
            Find the right design for enabling your people to do their best.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiles.map((tile) => (
            <Link
              key={tile.title}
              to={tile.href}
              className="group relative block overflow-hidden rounded-xl bg-white"
            >
              <div className="aspect-[3/4]">
                <img
                  src={tile.image}
                  alt={tile.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 flex items-end p-6">
                <span className="text-lg md:text-xl font-semibold text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
                  {tile.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreProducts;


