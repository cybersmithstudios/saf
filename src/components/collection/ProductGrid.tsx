import { motion } from "framer-motion";
import { Plus, Eye } from "lucide-react";
import { useState } from "react";
import ProductModal from "./ProductModal";
import { products } from "@/data/products";
import { useToast } from "@/components/ui/use-toast";
import { useEnquiryStore } from "@/store/useEnquiryStore";
import { Button } from "@/components/ui/button";

interface ProductGridProps {
  category: string;
}

const ProductGrid = ({ category }: ProductGridProps) => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const { toast } = useToast();
  const addItem = useEnquiryStore((state) => state.addItem);

  const filteredProducts = category === "all" 
    ? products 
    : products.filter(product => product.categoryId === category);

  const handleEnquiry = (product: typeof products[0]) => {
    addItem(product);
    toast({
      title: "Added to enquiry",
      description: `${product.name} has been added to your enquiry list.`,
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
            className="group"
          >
            <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
              <img
                src={product.images[0]}
                alt={product.name}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => setSelectedProduct(product.id)}
                  className="flex items-center gap-2"
                >
                  <Eye className="w-4 h-4" />
                  View Details
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEnquiry(product);
                  }}
                  className="flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Add to Enquiry
                </Button>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-sm text-muted-foreground">{product.category}</p>
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