import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import ProductModal from "./ProductModal";
import { products } from "@/data/products";
import { useToast } from "@/components/ui/use-toast";

interface ProductGridProps {
  category: string;
}

const ProductGrid = ({ category }: ProductGridProps) => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const { toast } = useToast();

  const filteredProducts = category === "all" 
    ? products 
    : products.filter(product => product.categoryId === category);

  const handleEnquiry = (productName: string) => {
    toast({
      title: "Added to enquiry",
      description: `${productName} has been added to your enquiry list.`,
    });
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group cursor-pointer"
          >
            <div 
              className="relative aspect-square overflow-hidden rounded-lg bg-gray-100"
              onClick={() => setSelectedProduct(product.id)}
            >
              <img
                src={product.images[0]}
                alt={product.name}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-sm font-medium">View Details</span>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-sm text-muted-foreground">{product.category}</p>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleEnquiry(product.name);
                }}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <ProductModal
        productId={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
};

export default ProductGrid;