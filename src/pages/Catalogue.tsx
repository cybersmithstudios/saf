import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useState } from "react";
import CustomOrderForm from "@/components/catalogue/CustomOrderForm";

const Catalogue = () => {
  const [showCustomOrderForm, setShowCustomOrderForm] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/catalogue.pdf';
    link.download = 'SAF-Furniture-Catalogue.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="container px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">
              Explore Our Collection—Download the Catalogue Today
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Limited-Time Deals—Don't Miss Out on Big Savings!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" onClick={handleDownload}>
                Order Now and Save!
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => setShowCustomOrderForm(true)}
              >
                Custom Order
              </Button>
            </div>
          </motion.div>

          <div className="aspect-[3/4] w-full mb-8 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://drive.google.com/file/d/1jTMLqBJJ_Fj3c4kYbJQwjoWLuZrBLpNE/preview"
              width="100%"
              height="100%"
              allow="autoplay"
              className="border-0"
            ></iframe>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              onClick={handleDownload}
              className="gap-2"
            >
              <Download className="w-5 h-5" />
              Download Catalogue
            </Button>
          </div>
        </div>
      </div>

      <CustomOrderForm 
        open={showCustomOrderForm} 
        onClose={() => setShowCustomOrderForm(false)} 
      />
    </div>
  );
};

export default Catalogue;