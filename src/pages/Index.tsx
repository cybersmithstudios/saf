import Hero from "@/components/Hero";
import FeaturedCollections from "@/components/FeaturedCollections";
import Promotions from "@/components/Promotions";
import Newsletter from "@/components/Newsletter";
import TopCustomers from "@/components/TopCustomers";
import ExploreProducts from "@/components/ExploreProducts";
import DesignerResources from "@/components/DesignerResources";
import BrandStatement from "@/components/BrandStatement";
import ForUseIn from "@/components/ForUseIn";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      
      <ExploreProducts />
      <TopCustomers />
      <Promotions />
      <DesignerResources />
      <ForUseIn />
      <FeaturedCollections />
      <BrandStatement />
      <Newsletter />
    </main>
  );
};

export default Index;