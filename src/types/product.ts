export interface Product {
  id: string;
  name: string;
  category: string;
  categoryId: string;
  description: string;
  images: string[];
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  materials: string[];
  colors: string[];
  assembly: string;
}