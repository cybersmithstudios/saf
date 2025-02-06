import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useEnquiryStore } from "@/store/useEnquiryStore";
import { Badge } from "@/components/ui/badge";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { items } = useEnquiryStore();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24 sm:h-16">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/ad77b95c-9490-4209-9bd0-f70577109f68.png" 
                alt="SAF Logo" 
                className="h-10 sm:h-16 md:h-12 max-w-full transition-all duration-200" 
              />
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <NavLinks />
              <Link 
                to="/enquiries" 
                className="relative p-2 hover:bg-gray-100 hover:text-black rounded-full transition-colors text-black"
                aria-label="View Enquiries"
              >
                <ShoppingBag className="w-6 h-6" />
                {items.length > 0 && (
                  <Badge 
                    variant="secondary" 
                    className="absolute -top-1 -right-1 min-w-[20px] h-[20px] flex items-center justify-center p-0 text-xs"
                  >
                    {items.length}
                  </Badge>
                )}
              </Link>
            </div>

            <button
              className="md:hidden p-2 hover:bg-gray-100 hover:text-black rounded-full transition-colors text-black"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4 md:hidden animate-fade-in"
          >
            <div className="flex flex-col space-y-4">
              <NavLinks mobile={true} setIsMenuOpen={setIsMenuOpen} />
              <Link 
                to="/enquiries"
                className="flex items-center space-x-2 py-2 text-black"
                onClick={() => setIsMenuOpen(false)}
              >
                <ShoppingBag className="w-6 h-6" />
                <span>Enquiries</span>
                {items.length > 0 && (
                  <Badge variant="secondary">{items.length}</Badge>
                )}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLinks = ({ 
  mobile = false, 
  setIsMenuOpen = () => {}
}: { 
  mobile?: boolean;
  setIsMenuOpen?: (value: boolean) => void;
}) => {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Collection", path: "/collection" },
    { name: "Distributors", path: "/distributors" },
    { name: "Contact", path: "/contact" },
    { name: "Catalogue", path: "/catalogue" },
  ];

  const handleClick = () => {
    if (mobile) {
      setIsMenuOpen(false);
    }
  };

  const baseClasses = "transition-colors hover:text-accent text-black";
  const mobileClasses = "block py-2";
  const desktopClasses = "inline-block";

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.name}
          to={link.path}
          onClick={handleClick}
          className={`${baseClasses} ${
            mobile ? mobileClasses : desktopClasses
          }`}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
};

export default Navigation;