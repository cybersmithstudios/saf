import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
}

const ProductImageGallery = ({ images, productName }: ProductImageGalleryProps) => {
  return (
    <Tabs defaultValue={images[0]} className="w-full">
      <div className="aspect-square mb-4 rounded-lg overflow-hidden">
        {images.map((image) => (
          <TabsContent key={image} value={image}>
            <img
              src={image}
              alt={productName}
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </TabsContent>
        ))}
      </div>
      <TabsList className="flex justify-start gap-2 flex-wrap">
        {images.map((image) => (
          <TabsTrigger
            key={image}
            value={image}
            className="w-16 h-16 p-0 overflow-hidden"
          >
            <img
              src={image}
              alt={`${productName} thumbnail`}
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};

export default ProductImageGallery;