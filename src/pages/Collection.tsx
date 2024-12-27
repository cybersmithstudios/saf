import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductGrid from "@/components/collection/ProductGrid";
import { categories } from "@/data/categories";

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
            Find Your Perfect Fit
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Explore Our Range of Stylish and Functional Furniture
          </motion.p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-2 mb-8">
            <TabsTrigger value="all">All Collections</TabsTrigger>
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="mb-8">
            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <h2 className="text-2xl font-semibold mb-4">{category.name}</h2>
                <p className="text-muted-foreground mb-8">{category.description}</p>
              </TabsContent>
            ))}
          </div>

          <TabsContent value="all">
            <ProductGrid category="all" />
          </TabsContent>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <ProductGrid category={category.id} />
            </TabsContent>
          ))}
        </Tabs>
      </motion.div>
    </div>
  );
};

export default Collection;