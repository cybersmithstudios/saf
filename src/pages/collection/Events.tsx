import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import ImageLightbox from "@/components/ImageLightbox";

const eventsImages = [
  { src: "/Events/WhatsApp Image 2025-08-28 at 14.56.53_f29dc60e.jpg", alt: "Event furniture setup 1" },
  { src: "/Events/WhatsApp Image 2025-08-28 at 14.56.52_21167d2b.jpg", alt: "Event furniture setup 2" },
  { src: "/Events/WhatsApp Image 2025-08-28 at 14.56.51_d2190696.jpg", alt: "Event furniture setup 3" },
  { src: "/Events/WhatsApp Image 2025-08-28 at 14.56.50_8c2f466a.jpg", alt: "Event furniture setup 4" },
  { src: "/Events/WhatsApp Image 2025-08-28 at 14.56.47_2717a3f5.jpg", alt: "Event furniture setup 5" },
  { src: "/Events/WhatsApp Image 2025-08-28 at 14.56.42_c7af06f8.jpg", alt: "Event furniture setup 6" },
  { src: "/Events/IMG_20230131_165112.jpg", alt: "Event furniture setup 7" },
  { src: "/Events/DSCN4661.JPG", alt: "Event furniture setup 8" },
  { src: "/Events/DSCN4613.JPG", alt: "Event furniture setup 9" },
  { src: "/Events/DSCN4609.JPG", alt: "Event furniture setup 10" },
  { src: "/Events/DSCN4237.JPG", alt: "Event furniture setup 11" },
  { src: "/Events/DSCN4116.JPG", alt: "Event furniture setup 12" },
  { src: "/Events/DSCN3687.JPG", alt: "Event furniture setup 13" },
  { src: "/Events/DSCN3650.JPG", alt: "Event furniture setup 14" },
  { src: "/Events/DSCN3624.JPG", alt: "Event furniture setup 15" },
  { src: "/Events/DSCN3619.JPG", alt: "Event furniture setup 16" },
  { src: "/Events/DSCN3616.JPG", alt: "Event furniture setup 17" },
  { src: "/Events/DSCN3605.JPG", alt: "Event furniture setup 18" },
  { src: "/Events/DSCN3603.JPG", alt: "Event furniture setup 19" },
  { src: "/Events/DSCN3580.JPG", alt: "Event furniture setup 20" },
  { src: "/Events/20191011_152555.jpg", alt: "Event furniture setup 21" },
  { src: "/Events/20191011_151828.jpg", alt: "Event furniture setup 22" },
  { src: "/Events/20191011_151828 (1).jpg", alt: "Event furniture setup 23" },
];

const Events = () => {
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
          <span className="text-foreground">Events</span>
        </nav>

        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-black"
          >
            Event Collections
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Discover our versatile event furniture solutions designed for functions, 
            celebrations, and special occasions. Creating memorable experiences with 
            comfortable and stylish seating arrangements.
          </motion.p>
        </div>

        {/* Image Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
        >
          {eventsImages.map((image, index) => (
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
            Ready to Create Unforgettable Events?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our event furniture solutions ensure your guests are comfortable while 
            maintaining the aesthetic appeal of your special occasions.
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

export default Events;
