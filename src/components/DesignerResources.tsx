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
      "Download models for your space-planning apps, including Revit and AutoCAD.",
    image: "/lovable-uploads/product models.png",
    href: "/collection",
  },
  {
    title: "Images",
    description:
      "Explore our image library and download the ones you need to use.",
    image: "/lovable-uploads/image-small-1693319172-7411.jpg",
    href: "/collection",
  },
  {
    title: "Materials",
    description:
      "Browse textiles, finishes, laminates, woods and veneers.",
    image: "/lovable-uploads/materials.png",
    href: "/collection",
  },
];

const DesignerResources = () => {
  return (
    <section className="py-20 bg-secondary text-black">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Architect and Designer Tools and Resources
          </h2>
          <p className="text-base mt-3">
            Transform your ideas into reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((res) => (
            <Link
              to={res.href}
              key={res.title}
              className="group block overflow-hidden rounded-xl bg-white/90 hover:bg-white transition-colors"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={res.image}
                  alt={res.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg">{res.title}</h3>
                <p className="text-sm text-gray-700 mt-2">{res.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignerResources;


