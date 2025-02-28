import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const collections = [
  {
    title: "Lugano Sofas",
    description: "Modern comfort meets timeless design",
    image: "/lovable-uploads/5seater-1.jpg",
    link: "/collection?category=lugano",
  },
  {
    title: "Malibu Chairs",
    description: "Modern seating solutions",
    image: "/lovable-uploads/malibu-1.jpeg",
    link: "/collection?category=armchairs",
  },
  {
    title: "Santorini Chairs",
    description: "Elegant seating solutions",
    image: "/lovable-uploads/eb87953d-ca38-4475-a9c4-7a4fa90acecb.png",
    link: "/collection?category=armchairs",
  },
];

const FeaturedCollections = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container px-4">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-primary/5 text-primary rounded-full"
          >
            Featured Collections
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Discover Our Latest Designs
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={collection.image || "/placeholder.svg"}
                  alt={collection.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{collection.title}</h3>
                <p className="text-sm text-gray-200 mb-4">
                  {collection.description}
                </p>
                <Link
                  to={collection.link}
                  className="inline-block w-fit px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all duration-300"
                >
                  View Collection
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;