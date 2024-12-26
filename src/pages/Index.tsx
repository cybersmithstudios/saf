import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedCollections from "@/components/FeaturedCollections";
import Newsletter from "@/components/Newsletter";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <FeaturedCollections />
      <Newsletter />
    </main>
  );
};

export default Index;