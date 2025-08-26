import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Intercom from "@intercom/messenger-js-sdk";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Collection from "./pages/Collection";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Catalogue from "./pages/Catalogue";
import SafAdvantage from "./pages/SafAdvantage";
import Distributors from "./pages/Distributors";
import ECatalogue from "./pages/ECatalogue";
import CategoryTemplate from "./pages/CategoryTemplate";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      Intercom({
        app_id: "dpxpg2ro",
      });
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Navigation />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/collection" element={<Collection />} />
                <Route path="/collection/:slug" element={<CategoryTemplate />} />
                <Route path="/saf-advantage" element={<SafAdvantage />} />
                <Route path="/distributors" element={<Distributors />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/catalogue" element={<Catalogue />} />
                <Route path="/e-catalogue" element={<ECatalogue />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;