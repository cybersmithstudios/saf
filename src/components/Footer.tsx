import { Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/">
              <img 
                src="/lovable-uploads/ad77b95c-9490-4209-9bd0-f70577109f68.png" 
                alt="SAF Logo" 
                className="h-12 mb-4"
              />
            </Link>
            <p className="text-sm">
              Quality plastic rattan-style furniture since 1976.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-secondary transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-secondary transition-colors">About</Link></li>
              <li><Link to="/saf-advantage" className="hover:text-secondary transition-colors">SAF Advantage</Link></li>
              <li><Link to="/collection" className="hover:text-secondary transition-colors">Collection</Link></li>
              <li><Link to="/distributors" className="hover:text-secondary transition-colors">Distributors</Link></li>
              <li><Link to="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
              <li><Link to="/e-catalogue" className="hover:text-secondary transition-colors">E-Catalogue</Link></li>
              
              <li><Link to="/privacy-policy" className="hover:text-secondary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Collection Categories</h4>
            <ul className="space-y-2">
              <li><Link to="/collection/outdoors" className="hover:text-secondary transition-colors">Outdoors</Link></li>
              <li><Link to="/collection/indoors" className="hover:text-secondary transition-colors">Indoors</Link></li>
              <li><Link to="/collection/restaurants" className="hover:text-secondary transition-colors">Restaurants</Link></li>
              <li><Link to="/collection/hotels" className="hover:text-secondary transition-colors">Hotels</Link></li>
              <li><Link to="/collection/commercial" className="hover:text-secondary transition-colors">Commercial</Link></li>
              <li><Link to="/collection/residential" className="hover:text-secondary transition-colors">Residential</Link></li>
              <li><Link to="/collection/lounges" className="hover:text-secondary transition-colors">Lounges</Link></li>
              <li><Link to="/collection/events" className="hover:text-secondary transition-colors">Events</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Email: info@saf-furniture.com</li>
              <li>Phone: 07 007 007 007</li>
              <li>359/361, Old Ojo Road, Badagry Expressway, Lagos.</li>
            </ul>
            <div className="pt-4">
              <h5 className="font-semibold mb-2">Stay Connected</h5>
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/SAFFurnitures" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-secondary transition-colors"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.instagram.com/saf_furniture/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-secondary transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://wa.link/4jdvaq"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat on WhatsApp"
                  className="hover:text-secondary transition-colors"
                  title="Chat on WhatsApp"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 fill-current"
                    role="img"
                    aria-hidden="true"
                  >
                    <path d="M20.52 3.48A11.94 11.94 0 0012.06 0C5.46 0 .12 5.34.12 11.94c0 2.1.54 4.14 1.56 5.94L0 24l6.3-1.62c1.74.96 3.72 1.46 5.76 1.46h.06c6.6 0 11.94-5.34 11.94-11.94a11.9 11.9 0 00-3.54-8.46zM12.12 21.6h-.06a9.6 9.6 0 01-4.86-1.32l-.36-.18-3.72.96.99-3.63-.24-.36a9.57 9.57 0 01-1.53-5.13c0-5.28 4.29-9.57 9.57-9.57 2.55 0 4.95.99 6.75 2.79a9.53 9.53 0 012.82 6.78c0 5.28-4.29 9.57-9.57 9.57zm5.49-7.14c-.3-.15-1.77-.87-2.04-.96-.27-.09-.45-.15-.63.15-.18.3-.72.96-.9 1.14-.18.18-.33.21-.6.06-.3-.15-1.26-.45-2.4-1.47-.9-.81-1.5-1.8-1.68-2.1-.18-.3-.02-.45.13-.6.12-.12.3-.33.45-.51.15-.18.2-.3.3-.51.1-.21.05-.39-.02-.54-.06-.15-.63-1.53-.87-2.1-.24-.57-.48-.48-.66-.48h-.57c-.18 0-.48.06-.72.33-.24.27-.93.9-.93 2.19s.96 2.55 1.08 2.73c.12.18 1.89 2.88 4.59 4.05.64.27 1.14.42 1.53.54.64.2 1.23.17 1.69.1.51-.08 1.77-.72 2.01-1.41.24-.69.24-1.28.17-1.41-.06-.12-.24-.18-.54-.33z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Black Horse Plastics Ind. Ltd.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;