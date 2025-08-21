import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedCollections from "@/components/FeaturedCollections";
import Promotions from "@/components/Promotions";
import Newsletter from "@/components/Newsletter";
import TopCustomers from "@/components/TopCustomers";
import ExploreProducts from "@/components/ExploreProducts";
import DesignerResources from "@/components/DesignerResources";
import BrandStatement from "@/components/BrandStatement";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <TopCustomers />
      <ExploreProducts />
      <Promotions />
      <FeaturedCollections />
      <BrandStatement />
      <DesignerResources />
      <Newsletter />
    </main>
  );
};

export default Index;