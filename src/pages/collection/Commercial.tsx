import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import ImageLightbox from "@/components/ImageLightbox";

const commercialImages = [
  { src: "/Commercial/WhatsApp Image 2025-08-28 at 14.56.43_8979c9e4.jpg", alt: "Commercial furniture setup 1" },
  { src: "/Commercial/WhatsApp Image 2025-08-28 at 14.56.42_9ce5311d.jpg", alt: "Commercial furniture setup 2" },
  { src: "/Commercial/WhatsApp Image 2025-08-28 at 14.56.42_07db464f.jpg", alt: "Commercial furniture setup 3" },
  { src: "/Commercial/WhatsApp Image 2025-08-28 at 14.56.41_df7d8b12.jpg", alt: "Commercial furniture setup 4" },
  { src: "/Commercial/IMG_3111.JPG", alt: "Commercial furniture setup 5" },
  { src: "/Commercial/IMG_3084 (1).JPG", alt: "Commercial furniture setup 6" },
  { src: "/Commercial/IMG_3051.JPG", alt: "Commercial furniture setup 7" },
  { src: "/Commercial/IMG_3043.JPG", alt: "Commercial furniture setup 8" },
  { src: "/Commercial/IMG_3014.JPG", alt: "Commercial furniture setup 9" },
  { src: "/Commercial/IMG_20240130_105105.jpg", alt: "Commercial furniture setup 10" },
  { src: "/Commercial/IMG-20171030-WA0036.jpg", alt: "Commercial furniture setup 11" },
  { src: "/Commercial/IMG-20170330-WA0123.jpg", alt: "Commercial furniture setup 12" },
  { src: "/Commercial/IMG-20170330-WA0121.jpg", alt: "Commercial furniture setup 13" },
  { src: "/Commercial/20161031_112338.jpg", alt: "Commercial furniture setup 14" },
  { src: "/Commercial/20161031_112320.jpg", alt: "Commercial furniture setup 15" },
];

const Commercial = () => {
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
          <span className="text-foreground">Commercial</span>
        </nav>

        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-black"
          >
            Commercial Collections
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Discover our professional commercial furniture solutions designed for offices, 
            retail spaces, and business environments. Combining functionality, durability, 
            and modern design to enhance your commercial spaces.
          </motion.p>
        </div>

        {/* Image Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
        >
          {commercialImages.map((image, index) => (
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
            Ready to Upgrade Your Commercial Space?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our commercial furniture solutions are designed to meet the demands of 
            modern business environments while maintaining style and comfort.
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

export default Commercial;
