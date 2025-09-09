import { motion } from "framer-motion";
import { Tag, Truck, Package } from "lucide-react";

const promotions = [
  {
    icon: <Truck className="w-6 h-6" />,
    title: "Free Delivery in Lagos",
    description: "On orders over  ₦450,000",
  },
  {
    icon: <Tag className="w-6 h-6" />,
    title: "Bulk Order Discount",
    description: "Save 15% on bulk orders",
  },
  {
    icon: <Package className="w-6 h-6" />,
    title: "Solo Lounger Special",
    description: "Get a free shopping voucher",
  },
];

const Promotions = () => {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Order Now and Enjoy
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take advantage of our exclusive offers and special deals
          </p>
        </motion.div>

        {/* Promotional Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {promotions.map((promo, index) => (
            <motion.div
              key={promo.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col items-center text-center p-5 md:p-6 bg-white rounded-2xl shadow-sm"
            >
              <div className="mb-3 md:mb-4 p-2.5 md:p-3 bg-primary/5 rounded-full text-primary">
                {promo.icon}
              </div>
              <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2">{promo.title}</h3>
              <p className="text-sm md:text-base text-gray-600">{promo.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promotions;