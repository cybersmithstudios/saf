import { Toaster } from "@/components/ui/toaster";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Collection from "./pages/Collection";
import Distributors from "./pages/Distributors";
import ECatalogue from "./pages/ECatalogue";
import Offers from "./pages/Offers";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import SafAdvantage from "./pages/SafAdvantage";
import ProductModelsPage from "./pages/ProductModels";
import Outdoors from "./pages/collection/Outdoors";
import Indoors from "./pages/collection/Indoors";
import Commercial from "./pages/collection/Commercial";
import Events from "./pages/collection/Events";
import Hotels from "./pages/collection/Hotels";
import Lounges from "./pages/collection/Lounges";
import Residential from "./pages/collection/Residential";
import Restaurants from "./pages/collection/Restaurants";
import ScrollToTop from "./components/ScrollToTop";
import { useScrollToTop } from "./hooks/useScrollToTop";
import IntercomWidget from "./components/IntercomWidget";

const AppContent = () => {
  useScrollToTop();

  return (
    <div className="App">
            <Navigation />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
          
                <Route path="/collection" element={<Collection />} />
                <Route path="/distributors" element={<Distributors />} />
                <Route path="/e-catalogue" element={<ECatalogue />} />
                <Route path="/offers" element={<Offers />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/saf-advantage" element={<SafAdvantage />} />
          <Route path="/product-models" element={<ProductModelsPage />} />
          <Route path="/collection/outdoors" element={<Outdoors />} />
          <Route path="/collection/indoors" element={<Indoors />} />
          <Route path="/collection/commercial" element={<Commercial />} />
          <Route path="/collection/events" element={<Events />} />
          <Route path="/collection/hotels" element={<Hotels />} />
          <Route path="/collection/lounges" element={<Lounges />} />
          <Route path="/collection/residential" element={<Residential />} />
          <Route path="/collection/restaurants" element={<Restaurants />} />
              </Routes>
            </main>
            <Footer />
      <ScrollToTop />
      <Toaster />
      <IntercomWidget />
          </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;