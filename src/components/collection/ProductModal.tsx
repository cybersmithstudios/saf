import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { products } from "@/data/products";
import { useEffect } from "react";
import ProductImageGallery from "./ProductImageGallery";
import ProductDetails from "./ProductDetails";

interface ProductModalProps {
  productId: string | null;
  onClose: () => void;
}

const ProductModal = ({ productId, onClose }: ProductModalProps) => {
  const product = products.find((p) => p.id === productId);

  useEffect(() => {
    if (productId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [productId]);

  if (!product) return null;

  const handleEnquiry = () => {
    onClose();
  };

  return (
    <Dialog open={!!productId} onOpenChange={() => onClose()}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{product.name}</DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProductImageGallery images={product.images} productName={product.name} />
          <ProductDetails product={product} onEnquiry={handleEnquiry} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;