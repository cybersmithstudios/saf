import React from "react";

type Product = {
  title: string;
  benefits: string[];
  image?: string;
  imageAlt?: string;
};

interface ProductAdvantageProps {
  product: Product;
}

const ProductAdvantage = ({ product }: ProductAdvantageProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {product.title ? (
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
              {product.title}
            </h2>
          ) : null}
          
          {/* Highlights Section - Single Static Image (header removed) */}
          <div className="mb-12">
            <div className="rounded-lg bg-gray-100">
              <div className="w-full">
                <img
                  src={product.image || "/lugano highlights/4.png"}
                  alt={product.imageAlt || "Product Highlight"}
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Benefits list intentionally removed; a general benefits section will be shown elsewhere */}
        </div>
      </div>
    </section>
  );
};

export default ProductAdvantage;
