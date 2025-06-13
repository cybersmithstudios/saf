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
    <section className="py-16 bg-gray-50">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {promotions.map((promo, index) => (
            <motion.div
              key={promo.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm"
            >
              <div className="mb-4 p-3 bg-primary/5 rounded-full text-primary">
                {promo.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{promo.title}</h3>
              <p className="text-gray-600">{promo.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promotions;