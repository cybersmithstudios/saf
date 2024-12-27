import { motion } from "framer-motion";
import { Instagram, Facebook } from "lucide-react";

const socialPosts = [
  {
    platform: "instagram",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    caption: "Transform your space with our modern designs! 🪑✨",
    likes: 245,
  },
  {
    platform: "facebook",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    caption: "New collection alert! Check out our latest arrivals 🛋️",
    likes: 189,
  },
  {
    platform: "instagram",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    caption: "Perfect for any occasion - our versatile furniture collection 🏠",
    likes: 312,
  },
];

const SocialFeed = () => {
  return (
    <section className="py-16">
      <div className="container px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-4"
          >
            Stay Connected
          </motion.h2>
          <p className="text-gray-600">Follow us on social media for inspiration and updates</p>
          <div className="flex justify-center gap-4 mt-4">
            <a
              href="https://www.instagram.com/saf_furniture/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#E1306C]/10 rounded-full text-[#E1306C] hover:bg-[#E1306C]/20 transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://www.facebook.com/SAFFurnitures"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#1877F2]/10 rounded-full text-[#1877F2] hover:bg-[#1877F2]/20 transition-colors"
            >
              <Facebook className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {socialPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-sm mb-2">{post.caption}</p>
                <div className="flex items-center gap-2">
                  {post.platform === "instagram" ? (
                    <Instagram className="w-4 h-4" />
                  ) : (
                    <Facebook className="w-4 h-4" />
                  )}
                  <span className="text-sm">{post.likes} likes</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialFeed;