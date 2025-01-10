import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedCollections from "@/components/FeaturedCollections";
import Promotions from "@/components/Promotions";
import Newsletter from "@/components/Newsletter";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Promotions />
      <FeaturedCollections />
      <Newsletter />
    </main>
  );
};

export default Index;