import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollYRef = useRef<number>(0);
  const menuRef = useRef<HTMLDivElement>(null);
  

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      const isScrollingDown = currentY > lastScrollYRef.current;
      const beyondThreshold = currentY > 16;
      setIsHidden(isScrollingDown && beyondThreshold);
      lastScrollYRef.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed left-0 right-0 z-40 bg-white/80 backdrop-blur-md shadow-sm transition-transform duration-300 ${isHidden ? "-translate-y-full" : "translate-y-0"}`} style={{ top: 0 }}>
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
  const [openAdv, setOpenAdv] = useState(false);
  const [openCol, setOpenCol] = useState(false);
  const closeIfMobile = () => {
    if (mobile) setIsMenuOpen(false);
  };

  const baseClasses = "transition-colors hover:text-accent text-black";
  const mobileClasses = "block py-2";
  const desktopClasses = "inline-block";

  const advantageItems = [
    { name: "How to Assemble", path: "/saf-advantage#assemble" },
    { name: "General Benefits", path: "/saf-advantage#benefits" },
    { name: "About Us", path: "/saf-advantage#about" },
  ];

  const collectionItems = [
    { name: "Outdoors", path: "/collection/outdoors" },
    { name: "Indoors", path: "/collection/indoors" },
    { name: "Restaurants", path: "/collection/restaurants" },
    { name: "Hotels", path: "/collection/hotels" },
    { name: "Commercial", path: "/collection/commercial" },
    { name: "Residential", path: "/collection/residential" },
    { name: "Lounges", path: "/collection/lounges" },
    { name: "Events", path: "/collection/events" },
  ];

  if (mobile) {
    return (
      <div className="divide-y divide-gray-100">
        <Link to="/" onClick={closeIfMobile} className={`${baseClasses} ${mobileClasses}`}>Home</Link>

        <button
          onClick={() => setOpenAdv(!openAdv)}
          className={`w-full text-left ${baseClasses} ${mobileClasses} flex items-center justify-between`}
        >
          <span>SAF Advantage</span>
          <ChevronDown className={`w-4 h-4 transition-transform ${openAdv ? 'rotate-180' : ''}`} />
        </button>
        {openAdv && (
          <div className="pl-4 pb-2 space-y-1">
            {advantageItems.map((item) => (
              <Link key={item.name} to={item.path} onClick={closeIfMobile} className={`${baseClasses} block py-1`}>
                {item.name}
              </Link>
            ))}
          </div>
        )}

        <button
          onClick={() => setOpenCol(!openCol)}
          className={`w-full text-left ${baseClasses} ${mobileClasses} flex items-center justify-between`}
        >
          <span>Collection</span>
          <ChevronDown className={`w-4 h-4 transition-transform ${openCol ? 'rotate-180' : ''}`} />
        </button>
        {openCol && (
          <div className="pl-4 pb-2 grid grid-cols-1 gap-1">
            {collectionItems.map((item) => (
              <Link key={item.name} to={item.path} onClick={closeIfMobile} className={`${baseClasses} block py-1`}>
                {item.name}
              </Link>
            ))}
          </div>
        )}

        <Link to="/distributors" onClick={closeIfMobile} className={`${baseClasses} ${mobileClasses}`}>Distributors</Link>
        <Link to="/contact" onClick={closeIfMobile} className={`${baseClasses} ${mobileClasses}`}>Contact</Link>
        <Link to="/e-catalogue" onClick={closeIfMobile} className={`${baseClasses} ${mobileClasses}`}>E-Catalogue</Link>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-6">
      <Link to="/" className={`${baseClasses} ${desktopClasses}`}>Home</Link>

      <div className="relative group">
        <button type="button" className={`${baseClasses} ${desktopClasses} flex items-center gap-1 cursor-default`} aria-haspopup="menu" aria-expanded="false">
          SAF Advantage <ChevronDown className="w-4 h-4" />
        </button>
        <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity absolute top-full left-0 bg-white shadow-md rounded-md py-2 min-w-[220px] z-50">
          {advantageItems.map((item) => (
            <Link key={item.name} to={item.path} className="block px-4 py-2 hover:bg-gray-50 text-black" onClick={closeIfMobile}>
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      <Link to="/collection" className={`${baseClasses} ${desktopClasses}`}>Collection</Link>

      <Link to="/distributors" className={`${baseClasses} ${desktopClasses}`}>Distributors</Link>
      <Link to="/contact" className={`${baseClasses} ${desktopClasses}`}>Contact</Link>
      <Link to="/e-catalogue" className={`${baseClasses} ${desktopClasses}`}>E-Catalogue</Link>
    </div>
  );
};

export default Navigation;