import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { motion } from "framer-motion";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-8 left-8 z-50 w-12 h-12 bg-black text-white rounded-full shadow-lg hover:bg-black/90 transition-all duration-300 flex items-center justify-center group"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
        </motion.button>
      )}
    </>
  );
};

export default ScrollToTop;
