import { motion } from "framer-motion";
import { Instagram, Facebook } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const socialPosts = [
  {
    platform: "instagram",
    image: "/lovable-uploads/dac2d1ac-1b10-4ea9-8c80-3b12eeb7357a.png",
    caption: "Santorini Collection - Perfect for indoor and outdoor settings ✨",
    likes: 245,
  },
  {
    platform: "facebook",
    image: "/lovable-uploads/c8c7f657-3088-4bcf-9ff1-ba6a49cc4f36.png",
    caption: "Malibu Series - Comfort meets style in our latest collection 🪑",
    likes: 189,
  },
  {
    platform: "instagram",
    image: "/lovable-uploads/8107ab09-d54f-4800-9217-64f7400dae22.png",
    caption: "Versatile designs for every space 🏠",
    likes: 312,
  },
  {
    platform: "instagram",
    image: "/lovable-uploads/82830cc7-5424-4b30-bde9-c253a3e16469.png",
    caption: "Perfect for events and gatherings 🎉",
    likes: 278,
  },
  {
    platform: "facebook",
    image: "/lovable-uploads/e235556c-31ed-453d-a06b-b26df833f6b6.png",
    caption: "Transform your outdoor spaces 🌿",
    likes: 156,
  },
  {
    platform: "instagram",
    image: "/lovable-uploads/84748e81-dd42-4ddb-a94d-3fbbe7ca0f41.png",
    caption: "Relax in style with our outdoor collection 🌳",
    likes: 423,
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

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {socialPosts.map((post, index) => (
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
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
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default SocialFeed;