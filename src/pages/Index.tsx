import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedCollections from "@/components/FeaturedCollections";
import Promotions from "@/components/Promotions";
import SocialFeed from "@/components/SocialFeed";
import Newsletter from "@/components/Newsletter";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Promotions />
      <FeaturedCollections />
      <SocialFeed />
      <Newsletter />
    </main>
  );
};

export default Index;