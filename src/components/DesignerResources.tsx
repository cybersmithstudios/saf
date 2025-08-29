import { Link } from "react-router-dom";

type Resource = {
  title: string;
  description: string;
  image: string;
  href: string;
};

const resources: Resource[] = [
  {
    title: "Product models",
    description:
      "View furniture models and assembly details",
    image: "/lovable-uploads/product models.png",
    href: "/product-models",
  },
  {
    title: "Images",
    description:
      "Explore furniture in different settings",
    image: "/lovable-uploads/image-small-1693319172-7411.jpg",
    href: "/collection",
  },
  {
    title: "Materials",
    description:
      "See the leather, fabric, fiber, and ropes used",
    image: "/lovable-uploads/materials.png",
    href: "/collection",
  },
];

const DesignerResources = () => {
  return (
    <section className="py-12 md:py-20 bg-secondary text-black">
      <div className="container px-4">
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-extrabold">
            Tools and Resources
          </h2>
          <p className="text-sm md:text-base mt-2 md:mt-3">
            Transform your ideas into reality.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {resources.map((res) => (
            <Link
              to={res.href}
              key={res.title}
              className="group block overflow-hidden rounded-xl bg-white/90 hover:bg-white transition-colors"
            >
              <div className="aspect-[4/3] md:aspect-[3/2] overflow-hidden">
                <img
                  src={res.image}
                  alt={res.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4 md:p-5">
                <h3 className="font-semibold text-base md:text-lg">{res.title}</h3>
                <p className="text-xs md:text-sm text-gray-700 mt-1 md:mt-2">{res.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignerResources;


