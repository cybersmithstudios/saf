import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const residentialImages = [
  { src: "/Residential/_OP10913 - Copy.jpg", alt: "Residential furniture setup 1" },
  { src: "/Residential/_OP10911.jpg", alt: "Residential furniture setup 2" },
  { src: "/Residential/_OP10873.jpg", alt: "Residential furniture setup 3" },
  { src: "/Residential/_OP10869.jpg", alt: "Residential furniture setup 4" },
  { src: "/Residential/_OP10865.jpg", alt: "Residential furniture setup 5" },
  { src: "/Residential/_OP10863.jpg", alt: "Residential furniture setup 6" },
  { src: "/Residential/_OP10859.jpg", alt: "Residential furniture setup 7" },
  { src: "/Residential/_OP10855.jpg", alt: "Residential furniture setup 8" },
  { src: "/Residential/_OP10853.jpg", alt: "Residential furniture setup 9" },
  { src: "/Residential/_OP10851.jpg", alt: "Residential furniture setup 10" },
  { src: "/Residential/_OP10839.jpg", alt: "Residential furniture setup 11" },
  { src: "/Residential/_OP10834.jpg", alt: "Residential furniture setup 12" },
  { src: "/Residential/_OP10830.jpg", alt: "Residential furniture setup 13" },
  { src: "/Residential/_OP10821.jpg", alt: "Residential furniture setup 14" },
  { src: "/Residential/_OP10816.jpg", alt: "Residential furniture setup 15" },
  { src: "/Residential/IMG_2311.JPG", alt: "Residential furniture setup 16" },
  { src: "/Residential/IMG_2264.JPG", alt: "Residential furniture setup 17" },
  { src: "/Residential/IMG_2264 (1).JPG", alt: "Residential furniture setup 18" },
  { src: "/Residential/IMG_2142.JPG", alt: "Residential furniture setup 19" },
  { src: "/Residential/IMG_2142 (4).JPG", alt: "Residential furniture setup 20" },
  { src: "/Residential/IMG_2142 (3).JPG", alt: "Residential furniture setup 21" },
  { src: "/Residential/IMG_2142 (2).JPG", alt: "Residential furniture setup 22" },
  { src: "/Residential/IMG_2142 (1).JPG", alt: "Residential furniture setup 23" },
];

const Residential = () => {
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
          <span className="text-foreground">Residential</span>
        </nav>

        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-black"
          >
            Residential Collections
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Discover our beautiful residential furniture solutions designed for homes, 
            apartments, and living spaces. Creating comfortable and stylish environments 
            that reflect your personal taste and lifestyle.
          </motion.p>
        </div>

        {/* Image Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
        >
          {residentialImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index }}
              className="group relative overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-lg transition-all duration-300"
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
            </motion.div>
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
            Ready to Transform Your Home?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our residential furniture solutions combine comfort, style, and quality to 
            create beautiful living spaces that you'll love coming home to.
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
    </div>
  );
};

export default Residential;
