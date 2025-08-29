import { motion } from "framer-motion";

// Import images for the features
const selfImage = "/self.jpg";
const resistantImage = "/resistant.jpg";
const modularImage = "/modular.jpg";

const FeaturedCollections = () => {
  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-3">
      {/* Self Assembly Feature */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        className="relative group overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-transparent z-10" />
        <div className="absolute inset-x-0 bottom-0 h-1/4 z-10 pointer-events-none bg-gradient-to-t from-black/35 via-black/15 to-transparent backdrop-blur-[2px] sm:backdrop-blur opacity-0 group-hover:opacity-100 transition-opacity" />
        <img 
          src={selfImage} 
          alt="Self Assembly - Easy setup with comprehensive guides"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="relative z-20 h-full flex flex-col justify-end p-8 text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6">
            <span className="text-3xl">🔧</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-light mb-4">Self Assembly</h3>
          <p className="text-white/90 text-lg leading-relaxed max-w-xs">Easy setup with comprehensive guides for hassle-free installation.</p>
        </div>
      </motion.div>

      {/* Weather Resistant Feature */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="relative group overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-accent/20 to-transparent z-10" />
        <div className="absolute inset-x-0 bottom-0 h-1/4 z-10 pointer-events-none bg-gradient-to-t from-black/35 via-black/15 to-transparent backdrop-blur-[2px] sm:backdrop-blur opacity-0 group-hover:opacity-100 transition-opacity" />
        <img 
          src={resistantImage} 
          alt="Weather Resistant - Built for Nigerian climate conditions"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="relative z-20 h-full flex flex-col justify-end p-8 text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6">
            <span className="text-3xl">☀️</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-light mb-4">Weather Resistant</h3>
          <p className="text-white/90 text-lg leading-relaxed max-w-xs">Built for Nigerian climate conditions with premium materials.</p>
        </div>
      </motion.div>

      {/* Modular Design Feature */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="relative group overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent z-10" />
        <div className="absolute inset-x-0 bottom-0 h-1/4 z-10 pointer-events-none bg-gradient-to-t from-black/35 via-black/15 to-transparent backdrop-blur-[2px] sm:backdrop-blur opacity-0 group-hover:opacity-100 transition-opacity" />
        <img 
          src={modularImage} 
          alt="Modular Design - 1 to 10+ seater configurations"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="relative z-20 h-full flex flex-col justify-end p-8 text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6">
            <span className="text-3xl">✨</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-light mb-4">Modular Design</h3>
          <p className="text-white/90 text-lg leading-relaxed max-w-xs">1 to 10+ seater configurations for any space requirement.</p>
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturedCollections;