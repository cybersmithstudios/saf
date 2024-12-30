import { Button } from "@/components/ui/button";

interface ProductDetailsProps {
  product: {
    name: string;
    description: string;
    dimensions: {
      width: number;
      height: number;
      depth: number;
    };
    materials: string[];
    colors: string[];
  };
  onEnquiry: () => void;
}

const ProductDetails = ({ product, onEnquiry }: ProductDetailsProps) => {
  return (
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

      <Button onClick={onEnquiry} className="w-full">
        Add to Enquiry
      </Button>
    </div>
  );
};

export default ProductDetails;