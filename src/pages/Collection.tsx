import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { categories } from "@/data/categories";
import ProductGrid from "@/components/collection/ProductGrid";
import { ChevronRight } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

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
            <TabsList className="flex w-max min-w-full justify-start gap-2 bg-transparent p-1">
              <TabsTrigger 
                value="all"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground whitespace-nowrap"
              >
                All Collections
              </TabsTrigger>
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground whitespace-nowrap"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </ScrollArea>

          <div className="mb-8">
            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold mb-2">{category.name}</h2>
                  <p className="text-muted-foreground mb-4">{category.description}</p>
                  <ScrollArea className="w-full pb-4">
                    <div className="flex w-max min-w-full gap-2">
                      {category.subcategories.map((subcategory) => (
                        <button
                          key={subcategory.id}
                          className="px-4 py-2 text-sm rounded-full bg-secondary/10 hover:bg-secondary/20 transition-colors whitespace-nowrap"
                        >
                          {subcategory.name}
                        </button>
                      ))}
                    </div>
                  </ScrollArea>
                </div>
                <ProductGrid category={category.id} />
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