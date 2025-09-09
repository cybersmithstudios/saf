import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import ImageLightbox from "@/components/ImageLightbox";

const outdoorsImages = [
  { src: "/Outdoors/IMG_2491.jpg", alt: "Outdoor furniture IMG_2491" },
  { src: "/Outdoors/IMG_2467.jpg", alt: "Outdoor furniture IMG_2467" },
  { src: "/Outdoors/IMG_2450.jpg", alt: "Outdoor furniture IMG_2450" },
  { src: "/Outdoors/IMG-20160614-WA0005.jpg", alt: "Outdoor furniture WA0005" },
  { src: "/Outdoors/IMG-20160614-WA0004.jpg", alt: "Outdoor furniture WA0004" },
  { src: "/Outdoors/IMG-20160614-WA0003.jpg", alt: "Outdoor furniture WA0003" },
  { src: "/Outdoors/IMG-20160614-WA0002.jpg", alt: "Outdoor furniture WA0002" },
  { src: "/Outdoors/IMG-20160614-WA0001.jpg", alt: "Outdoor furniture WA0001" },
  { src: "/Outdoors/DSCN4737.jpg", alt: "Outdoor furniture DSCN4737" },
  { src: "/Outdoors/DSCN4420.jpg", alt: "Outdoor furniture DSCN4420" },
  { src: "/Outdoors/DSCN4416.jpg", alt: "Outdoor furniture DSCN4416" },
  { src: "/Outdoors/DSCN3581.jpg", alt: "Outdoor furniture DSCN3581" },
  { src: "/Outdoors/DJI_0010.jpg", alt: "Outdoor furniture DJI_0010" },
  { src: "/Outdoors/277703726_665898697965178_4367417183106033097_n.jpg", alt: "Outdoor furniture 277703726" },
  { src: "/Outdoors/277701310_984410018872487_6686256742647854726_n.jpg", alt: "Outdoor furniture 277701310" },
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
