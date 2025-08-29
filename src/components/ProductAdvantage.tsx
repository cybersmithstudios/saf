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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
            {product.title}
          </h2>
          
          {/* Highlights Section - Single Static Image */}
          <div className="mb-12">
            <h3 className="text-xl md:text-2xl font-semibold text-black mb-6 text-center">
              Product Highlights
            </h3>
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

          {/* Benefits Section - Below Highlights */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl md:text-2xl font-semibold text-black mb-6 text-center">
              Key Benefits
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {product.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-black/80 leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductAdvantage;
