import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem("cookieConsent");
    if (!hasAccepted) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsAccepted(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 500);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setIsAccepted(false);
    setTimeout(() => {
      setIsVisible(false);
    }, 500);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {/* Backdrop Blur */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
      />
      
      {/* Cookie Banner */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 30,
          duration: 0.6 
        }}
        className="fixed bottom-6 left-6 right-6 z-50 max-w-4xl mx-auto"
      >
        <div className="bg-white/95 backdrop-blur-lg border border-gray-200/50 rounded-2xl shadow-2xl p-6 relative overflow-hidden">
          
          {/* Cookie Icon */}
          <div className="absolute top-4 right-4">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <Cookie className="w-6 h-6 text-primary/60" />
            </motion.div>
          </div>

          <div className="relative z-10">
            <div className="mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  We Value Your Privacy
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
                  By continuing to use our site, you consent to our use of cookies in accordance with our privacy policy.
                </p>
              </div>
            </div>


            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={handleAccept}
                className="flex-1 bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <CheckCircle className="w-4 h-4 mr-2" />
                Accept All Cookies
              </Button>
              
              <Button
                onClick={handleDecline}
                variant="outline"
                className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold py-3 px-6 rounded-xl transition-all duration-300"
              >
                Essential Only
              </Button>
            </div>

            {/* Privacy Policy Link */}
            <div className="mt-4 text-center">
              <a 
                href="/privacy" 
                className="text-sm text-primary hover:text-accent transition-colors duration-200 underline"
              >
                Learn more about our privacy policy
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CookieConsent;
