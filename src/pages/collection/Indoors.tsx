import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import ImageLightbox from "@/components/ImageLightbox";

const indoorsImages = [
  { src: "/Indoors/_OP10947.jpg", alt: "Indoor furniture setup 1" },
  { src: "/Indoors/_OP10942 - Copy.jpg", alt: "Indoor furniture setup 2" },
  { src: "/Indoors/_OP10940.jpg", alt: "Indoor furniture setup 3" },
  { src: "/Indoors/_OP10937.jpg", alt: "Indoor furniture setup 4" },
  { src: "/Indoors/_OP10931.jpg", alt: "Indoor furniture setup 5" },
  { src: "/Indoors/_OP10931 - Copy.jpg", alt: "Indoor furniture setup 6" },
  { src: "/Indoors/_OP10903.jpg", alt: "Indoor furniture setup 7" },
  { src: "/Indoors/_OP10901.jpg", alt: "Indoor furniture setup 8" },
  { src: "/Indoors/_OP10884.jpg", alt: "Indoor furniture setup 9" },
  { src: "/Indoors/_OP10873.jpg", alt: "Indoor furniture setup 10" },
  { src: "/Indoors/IMG_20170518_121929.jpg", alt: "Indoor furniture setup 11" },
  { src: "/Indoors/IMG_20170518_121929 - Copy.jpg", alt: "Indoor furniture setup 12" },
  { src: "/Indoors/IMG_0243.jpg", alt: "Indoor furniture setup 13" },
  { src: "/Indoors/DSCN5300.JPG", alt: "Indoor furniture setup 14" },
  { src: "/Indoors/DSCN5299.JPG", alt: "Indoor furniture setup 15" },
  { src: "/Indoors/DSCN5298.JPG", alt: "Indoor furniture setup 16" },
  { src: "/Indoors/20180515_123754.jpg", alt: "Indoor furniture setup 17" },
  { src: "/Indoors/20170331_082559.jpg", alt: "Indoor furniture setup 18" },
];

const Indoors = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImage, setActiveImage] = useState<{ src: string; alt: string } | null>(null);

  const openLightbox = (image: { src: string; alt: string }) => {
    setActiveImage(image);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container px-4 py-12"
      >
        {/* Breadcrumb Navigation */}
        <nav className="flex mb-6 text-sm text-muted-foreground">
          <span>Home</span>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span>Collections</span>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-foreground">Indoors</span>
        </nav>

        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-black"
          >
            Indoor Collections
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Explore our elegant indoor furniture solutions designed for homes, offices, 
            and commercial spaces. Combining comfort, style, and functionality to create 
            beautiful interior environments.
          </motion.p>
        </div>

        {/* Image Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
        >
          {indoorsImages.map((image, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index }}
              className="group relative overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 text-left"
              onClick={() => openLightbox(image)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              
              {/* Image number indicator */}
              <div className="absolute top-3 right-3 bg-white/90 text-black text-xs font-medium px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                {index + 1}
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-semibold mb-4 text-black">
            Ready to Transform Your Indoor Space?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our indoor furniture combines elegance, comfort, and durability to create 
            inviting spaces that reflect your style and meet your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-black text-white px-8 py-3 rounded-lg hover:bg-black/90 transition-colors font-medium"
            >
              Get a Quote
            </a>
            <a
              href="/catalogue"
              className="inline-block border border-black text-black px-8 py-3 rounded-lg hover:bg-black hover:text-white transition-colors font-medium"
            >
              Download Catalogue
            </a>
          </div>
        </motion.div>
      </motion.div>

      {activeImage && (
        <ImageLightbox
          src={activeImage.src}
          alt={activeImage.alt}
          open={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </div>
  );
};

export default Indoors;
