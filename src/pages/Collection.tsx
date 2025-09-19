import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { categories } from "@/data/categories";
import ProductGrid from "@/components/collection/ProductGrid";
import { ChevronRight } from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { getDriveImageUrl } from "@/assets/driveImages";

type Img = { src: string; alt: string };
const collectionGalleries: Record<string, Img[]> = {
  outdoors: [
    { src: "/Outdoors/_TAP2022-2 - Copy.jpg", alt: "Outdoors" },
    { src: "/Outdoors/_TAP1690.jpg", alt: "Outdoors" },
    { src: "/Outdoors/WhatsApp Image 2025-08-28 at 14.56.40_48d5653e.jpg", alt: "Outdoors" },
    { src: "/Outdoors/WhatsApp Image 2023-05-17 at 08.53.11 (3).jpeg", alt: "Outdoors" },
    { src: "/Outdoors/WhatsApp Image 2023-05-17 at 08.53.10 (1).jpeg", alt: "Outdoors" },
    { src: "/Outdoors/WhatsApp Image 2023-05-17 at 08.53.09 (3).jpeg", alt: "Outdoors" },
    { src: "/Outdoors/SAVE_20230516_114454.jpg", alt: "Outdoors" },
    { src: "/Outdoors/SAVE_20230516_114347.jpg", alt: "Outdoors" },
    { src: "/Outdoors/IMG_2677.JPG", alt: "Outdoors" },
    { src: "/Outdoors/IMG_2674.JPG", alt: "Outdoors" },
    { src: "/Outdoors/IMG_2670.JPG", alt: "Outdoors" },
    { src: "/Outdoors/IMG_2643.JPG", alt: "Outdoors" },
    { src: "/Outdoors/IMG_2589.JPG", alt: "Outdoors" },
    { src: "/Outdoors/IMG_2586.JPG", alt: "Outdoors" },
    { src: "/Outdoors/IMG_2577.JPG", alt: "Outdoors" },
    { src: "/Outdoors/IMG_2569.JPG", alt: "Outdoors" },
    { src: "/Outdoors/IMG_2552.JPG", alt: "Outdoors" },
    { src: "/Outdoors/IMG_2548.JPG", alt: "Outdoors" },
    { src: "/Outdoors/IMG_2530.JPG", alt: "Outdoors" },
    { src: "/Outdoors/IMG_2513.JPG", alt: "Outdoors" },
    { src: "/Outdoors/IMG_2508.JPG", alt: "Outdoors" },
    { src: "/Outdoors/IMG_2498.JPG", alt: "Outdoors" },
    { src: "/Outdoors/IMG_2399.JPG", alt: "Outdoors" },
    { src: "/Outdoors/IMG_2382.JPG", alt: "Outdoors" },
    { src: "/Outdoors/DSCN4791.JPG", alt: "Outdoors" },
    { src: "/Outdoors/DSCN4789.JPG", alt: "Outdoors" },
  ],
  indoors: [
    { src: "/Indoors/_OP10947.jpg", alt: "Indoors" },
    { src: "/Indoors/_OP10942 - Copy.jpg", alt: "Indoors" },
    { src: "/Indoors/_OP10940.jpg", alt: "Indoors" },
    { src: "/Indoors/_OP10937.jpg", alt: "Indoors" },
    { src: "/Indoors/_OP10931.jpg", alt: "Indoors" },
    { src: "/Indoors/_OP10931 - Copy.jpg", alt: "Indoors" },
    { src: "/Indoors/_OP10903.jpg", alt: "Indoors" },
    { src: "/Indoors/_OP10901.jpg", alt: "Indoors" },
    { src: "/Indoors/_OP10884.jpg", alt: "Indoors" },
    { src: "/Indoors/_OP10873.jpg", alt: "Indoors" },
    { src: "/Indoors/IMG_20170518_121929.jpg", alt: "Indoors" },
    { src: "/Indoors/IMG_20170518_121929 - Copy.jpg", alt: "Indoors" },
    { src: "/Indoors/IMG_0243.jpg", alt: "Indoors" },
    { src: "/Indoors/DSCN5300.JPG", alt: "Indoors" },
    { src: "/Indoors/DSCN5299.JPG", alt: "Indoors" },
    { src: "/Indoors/DSCN5298.JPG", alt: "Indoors" },
    { src: "/Indoors/20180515_123754.jpg", alt: "Indoors" },
    { src: "/Indoors/20170331_082559.jpg", alt: "Indoors" },
  ],
  restaurants: [
    { src: "/Restaurants/IMG_2491.JPG", alt: "Restaurants" },
    { src: "/Restaurants/IMG_2467.JPG", alt: "Restaurants" },
    { src: "/Restaurants/IMG_2450.JPG", alt: "Restaurants" },
    { src: "/Restaurants/IMG-20160614-WA0005.jpg", alt: "Restaurants" },
    { src: "/Restaurants/IMG-20160614-WA0004.jpg", alt: "Restaurants" },
    { src: "/Restaurants/IMG-20160614-WA0003.jpg", alt: "Restaurants" },
    { src: "/Restaurants/IMG-20160614-WA0002.jpg", alt: "Restaurants" },
    { src: "/Restaurants/IMG-20160614-WA0001.jpg", alt: "Restaurants" },
    { src: "/Restaurants/DSCN4737.JPG", alt: "Restaurants" },
    { src: "/Restaurants/DSCN4420.JPG", alt: "Restaurants" },
    { src: "/Restaurants/DSCN4416.JPG", alt: "Restaurants" },
    { src: "/Restaurants/DSCN3581.JPG", alt: "Restaurants" },
    { src: "/Restaurants/DJI_0010.JPG", alt: "Restaurants" },
    { src: "/Restaurants/277703726_665898697965178_4367417183106033097_n.jpg", alt: "Restaurants" },
    { src: "/Restaurants/277701310_984410018872487_6686256742647854726_n.jpg", alt: "Restaurants" },
  ],
  hotels: [
    { src: "/Hotels/IMG_20190914_172506.jpg", alt: "Hotels" },
    { src: "/Hotels/IMG_20190914_172500.jpg", alt: "Hotels" },
    { src: "/Hotels/IMG_20190914_172450.jpg", alt: "Hotels" },
    { src: "/Hotels/20190826_122311.jpg", alt: "Hotels" },
    { src: "/Hotels/20190826_122259.jpg", alt: "Hotels" },
    { src: "/Hotels/20190826_122253.jpg", alt: "Hotels" },
    { src: "/Hotels/20170923_164240.jpg", alt: "Hotels" },
    { src: "/Hotels/20170923_164240 - Copy.jpg", alt: "Hotels" },
    { src: "/Hotels/20170923_164234.jpg", alt: "Hotels" },
    { src: "/Hotels/20170915_102432.jpg", alt: "Hotels" },
    { src: "/Hotels/20170915_102432 - Copy.jpg", alt: "Hotels" },
  ],
  commercial: [
    { src: getDriveImageUrl("commercial/WhatsApp Image 2025-08-28 at 14.56.43_8979c9e4.jpg"), alt: "Commercial" },
    { src: getDriveImageUrl("commercial/WhatsApp Image 2025-08-28 at 14.56.42_9ce5311d.jpg"), alt: "Commercial" },
    { src: getDriveImageUrl("commercial/WhatsApp Image 2025-08-28 at 14.56.42_07db464f.jpg"), alt: "Commercial" },
    { src: getDriveImageUrl("commercial/WhatsApp Image 2025-08-28 at 14.56.41_df7d8b12.jpg"), alt: "Commercial" },
    { src: getDriveImageUrl("commercial/IMG_3111.JPG"), alt: "Commercial" },
    { src: getDriveImageUrl("commercial/IMG_3084 (1).JPG"), alt: "Commercial" },
    { src: getDriveImageUrl("commercial/IMG_3051.JPG"), alt: "Commercial" },
    { src: getDriveImageUrl("commercial/IMG_3043.JPG"), alt: "Commercial" },
    { src: getDriveImageUrl("commercial/IMG_3014.JPG"), alt: "Commercial" },
    { src: getDriveImageUrl("commercial/IMG_20240130_105105.jpg"), alt: "Commercial" },
    { src: getDriveImageUrl("commercial/IMG-20171030-WA0036.jpg"), alt: "Commercial" },
    { src: getDriveImageUrl("commercial/IMG-20170330-WA0123.jpg"), alt: "Commercial" },
    { src: getDriveImageUrl("commercial/IMG-20170330-WA0121.jpg"), alt: "Commercial" },
    { src: getDriveImageUrl("commercial/20161031_112338.jpg"), alt: "Commercial" },
    { src: getDriveImageUrl("commercial/20161031_112320.jpg"), alt: "Commercial" },
  ],
  residential: [
    { src: "/Residential/_OP10913 - Copy.jpg", alt: "Residential" },
    { src: "/Residential/_OP10911.jpg", alt: "Residential" },
    { src: "/Residential/_OP10873.jpg", alt: "Residential" },
    { src: "/Residential/_OP10869.jpg", alt: "Residential" },
    { src: "/Residential/_OP10865.jpg", alt: "Residential" },
    { src: "/Residential/_OP10863.jpg", alt: "Residential" },
    { src: "/Residential/_OP10859.jpg", alt: "Residential" },
    { src: "/Residential/_OP10855.jpg", alt: "Residential" },
    { src: "/Residential/_OP10853.jpg", alt: "Residential" },
    { src: "/Residential/_OP10851.jpg", alt: "Residential" },
    { src: "/Residential/_OP10839.jpg", alt: "Residential" },
    { src: "/Residential/_OP10834.jpg", alt: "Residential" },
    { src: "/Residential/_OP10830.jpg", alt: "Residential" },
    { src: "/Residential/_OP10821.jpg", alt: "Residential" },
    { src: "/Residential/_OP10816.jpg", alt: "Residential" },
    { src: "/Residential/IMG_2311.jpg", alt: "Residential" },
    { src: "/Residential/IMG_2264.jpg", alt: "Residential" },
    { src: "/Residential/IMG_2264 (1).jpg", alt: "Residential" },
    { src: "/Residential/IMG_2142.jpg", alt: "Residential" },
    { src: "/Residential/IMG_2142 (4).jpg", alt: "Residential" },
    { src: "/Residential/IMG_2142 (3).jpg", alt: "Residential" },
    { src: "/Residential/IMG_2142 (2).jpg", alt: "Residential" },
    { src: "/Residential/IMG_2142 (1).jpg", alt: "Residential" },
  ],
  lounges: [],
  events: [
    { src: "/Events/WhatsApp Image 2025-08-28 at 14.56.53_f29dc60e.jpg", alt: "Events" },
    { src: "/Events/WhatsApp Image 2025-08-28 at 14.56.52_21167d2b.jpg", alt: "Events" },
    { src: "/Events/WhatsApp Image 2025-08-28 at 14.56.51_d2190696.jpg", alt: "Events" },
    { src: "/Events/WhatsApp Image 2025-08-28 at 14.56.50_8c2f466a.jpg", alt: "Events" },
    { src: "/Events/WhatsApp Image 2025-08-28 at 14.56.47_2717a3f5.jpg", alt: "Events" },
    { src: "/Events/WhatsApp Image 2025-08-28 at 14.56.42_c7af06f8.jpg", alt: "Events" },
    { src: "/Events/IMG_20230131_165112.jpg", alt: "Events" },
    { src: "/Events/DSCN4661.JPG", alt: "Events" },
    { src: "/Events/DSCN4613.JPG", alt: "Events" },
    { src: "/Events/DSCN4609.JPG", alt: "Events" },
    { src: "/Events/DSCN4237.JPG", alt: "Events" },
    { src: "/Events/DSCN4116.JPG", alt: "Events" },
    { src: "/Events/DSCN3687.JPG", alt: "Events" },
    { src: "/Events/DSCN3650.JPG", alt: "Events" },
    { src: "/Events/DSCN3624.JPG", alt: "Events" },
    { src: "/Events/DSCN3619.JPG", alt: "Events" },
    { src: "/Events/DSCN3616.JPG", alt: "Events" },
    { src: "/Events/DSCN3605.JPG", alt: "Events" },
    { src: "/Events/DSCN3603.JPG", alt: "Events" },
    { src: "/Events/DSCN3580.JPG", alt: "Events" },
    { src: "/Events/20191011_152555.jpg", alt: "Events" },
    { src: "/Events/20191011_151828.jpg", alt: "Events" },
    { src: "/Events/20191011_151828 (1).jpg", alt: "Events" },
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