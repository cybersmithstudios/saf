import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { products } from "@/data/products";
import { useToast } from "@/components/ui/use-toast";
import { useEnquiryStore } from "@/store/useEnquiryStore";
import { X } from "lucide-react";
import { useEffect } from "react";

interface ProductModalProps {
  productId: string | null;
  onClose: () => void;
}

const ProductModal = ({ productId, onClose }: ProductModalProps) => {
  const { toast } = useToast();
  const addItem = useEnquiryStore((state) => state.addItem);
  const product = products.find((p) => p.id === productId);

  // Prevent background scrolling when modal is open
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
    addItem(product);
    toast({
      title: "Added to enquiry",
      description: `${product.name} has been added to your enquiry list.`,
    });
    onClose();
  };

  return (
    <Dialog open={!!productId} onOpenChange={() => onClose()}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="relative">
          <DialogTitle>{product.name}</DialogTitle>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Tabs defaultValue={product.images[0]} className="w-full">
              <div className="aspect-square mb-4 rounded-lg overflow-hidden">
                {product.images.map((image) => (
                  <TabsContent key={image} value={image}>
                    <img
                      src={image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </TabsContent>
                ))}
              </div>
              <TabsList className="flex justify-start gap-2 flex-wrap">
                {product.images.map((image) => (
                  <TabsTrigger
                    key={image}
                    value={image}
                    className="w-16 h-16 p-0 overflow-hidden"
                  >
                    <img
                      src={image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Description</h3>
              <p className="text-muted-foreground">{product.description}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Dimensions</h3>
              <ul className="space-y-1 text-muted-foreground">
                <li>Width: {product.dimensions.width}cm</li>
                <li>Height: {product.dimensions.height}cm</li>
                <li>Depth: {product.dimensions.depth}cm</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Materials</h3>
              <ul className="space-y-1 text-muted-foreground">
                {product.materials.map((material) => (
                  <li key={material}>{material}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Available Colors</h3>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <div
                    key={color}
                    className="w-6 h-6 rounded-full border"
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>
            </div>

            <Button onClick={handleEnquiry} className="w-full">
              Add to Enquiry
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;