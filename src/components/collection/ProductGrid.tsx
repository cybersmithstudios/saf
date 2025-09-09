import { motion } from "framer-motion";
import { Expand, Eye } from "lucide-react";
import { useState } from "react";
import ProductModal from "./ProductModal";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";

interface ProductGridProps {
  category: string;
}

const ProductGrid = ({ category }: ProductGridProps) => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  

  const filteredProducts = category === "all" 
    ? products 
    : products.filter(product => product.categoryId === category);

  

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative"
          >
            <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
              <img
                src={product.images[0]}
                alt={product.name}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
                decoding="async"
              />
              <button
                onClick={() => setSelectedProduct(product.id)}
                className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
              >
                <Eye className="w-6 h-6 text-white" />
              </button>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-sm text-muted-foreground">{product.category}</p>
              </div>
              <Button
                size="icon"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedProduct(product.id);
                }}
                className="rounded-full"
                aria-label="Expand details"
                title="Expand details"
              >
                <Expand className="w-4 h-4" />
              </Button>
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