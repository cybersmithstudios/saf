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
              <li><Link to="/collection" className="hover:text-secondary transition-colors">Collection</Link></li>
              <li><Link to="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
              <li><Link to="/catalogue" className="hover:text-secondary transition-colors">Catalogue</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-secondary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Email: info@saf-furniture.com</li>
              <li>Phone: 07 007 007 007</li>
              <li>11A Idejo Street, Off Adeola Odeku, Victoria Island, Lagos</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Stay Connected</h4>
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