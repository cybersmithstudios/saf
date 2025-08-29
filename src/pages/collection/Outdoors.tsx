import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import ImageLightbox from "@/components/ImageLightbox";

const outdoorsImages = [
  { src: "/Outdoors/_TAP2022-2 - Copy.jpg", alt: "Outdoor furniture setup 1" },
  { src: "/Outdoors/_TAP1690.jpg", alt: "Outdoor furniture setup 2" },
  { src: "/Outdoors/WhatsApp Image 2025-08-28 at 14.56.40_48d5653e.jpg", alt: "Outdoor furniture setup 3" },
  { src: "/Outdoors/WhatsApp Image 2023-05-17 at 08.53.11 (3).jpeg", alt: "Outdoor furniture setup 4" },
  { src: "/Outdoors/WhatsApp Image 2023-05-17 at 08.53.10 (1).jpeg", alt: "Outdoor furniture setup 5" },
  { src: "/Outdoors/WhatsApp Image 2023-05-17 at 08.53.09 (3).jpeg", alt: "Outdoor furniture setup 6" },
  { src: "/Outdoors/SAVE_20230516_114454.jpg", alt: "Outdoor furniture setup 7" },
  { src: "/Outdoors/SAVE_20230516_114347.jpg", alt: "Outdoor furniture setup 8" },
  { src: "/Outdoors/IMG_2677.JPG", alt: "Outdoor furniture setup 9" },
  { src: "/Outdoors/IMG_2674.JPG", alt: "Outdoor furniture setup 10" },
  { src: "/Outdoors/IMG_2670.JPG", alt: "Outdoor furniture setup 11" },
  { src: "/Outdoors/IMG_2643.JPG", alt: "Outdoor furniture setup 12" },
  { src: "/Outdoors/IMG_2589.JPG", alt: "Outdoor furniture setup 13" },
  { src: "/Outdoors/IMG_2586.JPG", alt: "Outdoor furniture setup 14" },
  { src: "/Outdoors/IMG_2577.JPG", alt: "Outdoor furniture setup 15" },
  { src: "/Outdoors/IMG_2569.JPG", alt: "Outdoor furniture setup 16" },
  { src: "/Outdoors/IMG_2552.JPG", alt: "Outdoor furniture setup 17" },
  { src: "/Outdoors/IMG_2548.JPG", alt: "Outdoor furniture setup 18" },
  { src: "/Outdoors/IMG_2530.JPG", alt: "Outdoor furniture setup 19" },
  { src: "/Outdoors/IMG_2513.JPG", alt: "Outdoor furniture setup 20" },
  { src: "/Outdoors/IMG_2508.JPG", alt: "Outdoor furniture setup 21" },
  { src: "/Outdoors/IMG_2498.JPG", alt: "Outdoor furniture setup 22" },
  { src: "/Outdoors/IMG_2399.JPG", alt: "Outdoor furniture setup 23" },
  { src: "/Outdoors/IMG_2382.JPG", alt: "Outdoor furniture setup 24" },
  { src: "/Outdoors/DSCN4791.JPG", alt: "Outdoor furniture setup 25" },
  { src: "/Outdoors/DSCN4789.JPG", alt: "Outdoor furniture setup 26" },
];

const Outdoors = () => {
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
          <span className="text-foreground">Outdoors</span>
        </nav>

        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-black"
          >
            Outdoor Collections
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Discover our premium outdoor furniture solutions designed for gardens, patios, 
            terraces, and outdoor commercial spaces. Built to withstand the elements while 
            maintaining style and comfort.
          </motion.p>
        </div>

        {/* Image Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
        >
          {outdoorsImages.map((image, index) => (
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
            Ready to Transform Your Outdoor Space?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our outdoor furniture combines durability, style, and comfort to create 
            inviting outdoor environments that last.
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

export default Outdoors;
