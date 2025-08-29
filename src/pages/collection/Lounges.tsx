import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const loungesImages = [
  { src: "/Lounges/IMG_3000.JPG", alt: "Lounge furniture setup 1" },
  { src: "/Lounges/IMG_2717.JPG", alt: "Lounge furniture setup 2" },
  { src: "/Lounges/IMG-20160923-WA0011.jpg", alt: "Lounge furniture setup 3" },
  { src: "/Lounges/IMG-20160923-WA0010.jpg", alt: "Lounge furniture setup 4" },
  { src: "/Lounges/IMG-20160921-WA0013.jpg", alt: "Lounge furniture setup 5" },
  { src: "/Lounges/IMG-20160921-WA0012.jpg", alt: "Lounge furniture setup 6" },
  { src: "/Lounges/IMG-20160921-WA0011.jpg", alt: "Lounge furniture setup 7" },
  { src: "/Lounges/IMG-20160921-WA0010.jpg", alt: "Lounge furniture setup 8" },
  { src: "/Lounges/IMG-20160921-WA0010 (1).jpg", alt: "Lounge furniture setup 9" },
  { src: "/Lounges/IMG-20160303-WA0011.jpg", alt: "Lounge furniture setup 10" },
  { src: "/Lounges/IMG-20160303-WA0009.jpg", alt: "Lounge furniture setup 11" },
  { src: "/Lounges/IMG-20160303-WA0008.jpg", alt: "Lounge furniture setup 12" },
  { src: "/Lounges/IMG-20160224-WA0014.jpg", alt: "Lounge furniture setup 13" },
  { src: "/Lounges/IMG-20160224-WA0013.jpg", alt: "Lounge furniture setup 14" },
  { src: "/Lounges/20161018_165250.jpg", alt: "Lounge furniture setup 15" },
];

const Lounges = () => {
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
          <span className="text-foreground">Lounges</span>
        </nav>

        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-black"
          >
            Lounge Collections
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Discover our stylish lounge furniture solutions designed for bars, clubs, 
            and entertainment venues. Creating comfortable and inviting spaces where 
            guests can relax and socialize.
          </motion.p>
        </div>

        {/* Image Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
        >
          {loungesImages.map((image, index) => (
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
            Ready to Create the Perfect Lounge Atmosphere?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our lounge furniture solutions combine style, comfort, and durability to 
            create memorable experiences for your guests and enhance your venue's appeal.
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

export default Lounges;
