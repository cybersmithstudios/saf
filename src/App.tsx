import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Collection from "./pages/Collection";
import Enquiries from "./pages/Enquiries";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Catalogue from "./pages/Catalogue";

const queryClient = new QueryClient();

const App = () => (
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
              <Route path="/enquiries" element={<Enquiries />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/catalogue" element={<Catalogue />} />
            </Routes>
          </main>
          <Footer />
          <FloatingWhatsApp />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;