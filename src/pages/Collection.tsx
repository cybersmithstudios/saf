import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { categories } from "@/data/categories";
import ProductGrid from "@/components/collection/ProductGrid";
import { ChevronRight } from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

type Img = { src: string; alt: string };
const collectionGalleries: Record<string, Img[]> = {
  outdoors: [
    { src: "/Outdoors/IMG_2491.jpg", alt: "Outdoors 1" },
    { src: "/Outdoors/IMG_2467.jpg", alt: "Outdoors 2" },
    { src: "/Outdoors/IMG_2450.jpg", alt: "Outdoors 3" },
    { src: "/Outdoors/DSCN4737.jpg", alt: "Outdoors 4" },
  ],
  indoors: [
    { src: "/Indoors/_OP10873.jpg", alt: "Indoors 1" },
    { src: "/Indoors/_OP10869.jpg", alt: "Indoors 2" },
    { src: "/Indoors/_OP10865.jpg", alt: "Indoors 3" },
    { src: "/Indoors/IMG_2311.jpg", alt: "Indoors 4" },
  ],
  restaurants: [
    { src: "/Restaurants/IMG_2491.jpg", alt: "Restaurants 1" },
    { src: "/Restaurants/IMG_2467.jpg", alt: "Restaurants 2" },
    { src: "/Restaurants/IMG_2450.jpg", alt: "Restaurants 3" },
    { src: "/Restaurants/DSCN4737.jpg", alt: "Restaurants 4" },
  ],
  hotels: [
    { src: "/Hotels/IMG_20190914_172506.jpg", alt: "Hotels 1" },
    { src: "/Hotels/IMG_20190914_172500.jpg", alt: "Hotels 2" },
    { src: "/Hotels/IMG_20190914_172450.jpg", alt: "Hotels 3" },
    { src: "/Hotels/20190826_122311.jpg", alt: "Hotels 4" },
  ],
  commercial: [
    { src: "/Commercial/IMG_3111.JPG", alt: "Commercial 1" },
    { src: "/Commercial/IMG_3051.JPG", alt: "Commercial 2" },
    { src: "/Commercial/IMG_3043.JPG", alt: "Commercial 3" },
    { src: "/Commercial/IMG_3014.JPG", alt: "Commercial 4" },
  ],
  residential: [
    { src: "/Residential/_OP10873.jpg", alt: "Residential 1" },
    { src: "/Residential/_OP10869.jpg", alt: "Residential 2" },
    { src: "/Residential/_OP10865.jpg", alt: "Residential 3" },
    { src: "/Residential/IMG_2311.jpg", alt: "Residential 4" },
  ],
  lounges: [],
  events: [
    { src: "/Events/DSCN4661.JPG", alt: "Events 1" },
    { src: "/Events/DSCN4613.JPG", alt: "Events 2" },
    { src: "/Events/DSCN4609.JPG", alt: "Events 3" },
    { src: "/Events/IMG_20230131_165112.jpg", alt: "Events 4" },
  ],
};

const Collection = () => {
  return (
    <div className="min-h-screen pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container px-4 py-12"
      >
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Our Collections
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Discover Our Range of Premium Furniture
          </motion.p>
        </div>

        <nav className="flex mb-4 text-sm text-muted-foreground">
          <span>Home</span>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-foreground">Collections</span>
        </nav>

        <Tabs defaultValue="all" className="w-full">
          <ScrollArea className="w-full pb-4 mb-4">
            <TabsList className="inline-flex w-max h-auto p-1 bg-muted">
              <TabsTrigger 
                value="all"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2"
              >
                All Collections
              </TabsTrigger>
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>

          <div className="mb-8">
            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold mb-2">{category.name}</h2>
                  <p className="text-muted-foreground mb-4">{category.description}</p>
                </div>

                {collectionGalleries[category.id] && collectionGalleries[category.id].length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                    {collectionGalleries[category.id].map((image, idx) => (
                      <div key={idx} className="group relative overflow-hidden rounded-xl bg-white shadow-sm">
                        <div className="aspect-[4/3] overflow-hidden">
                          <img src={image.src} alt={image.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                        </div>
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                      </div>
                    ))}
                  </div>
                ) : (
                  <ProductGrid category={category.id} />
                )}
              </TabsContent>
            ))}
          </div>

          <TabsContent value="all">
            <ProductGrid category="all" />
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
};

export default Collection;