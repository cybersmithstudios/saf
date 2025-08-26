import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

const MESSAGES: { text: string; href: string }[] = [
  {
    text:
      "Free delivery & setup on orders over ₦450,000. Plus, enjoy up to 20% off bulk purchases.",
    href: "/offers",
  },
  {
    text:
      "Spend ₦450,000+ and get free delivery & setup. Bulk orders save up to 20%.",
    href: "/offers",
  },
  {
    text:
      "Orders above ₦450,000 come with free delivery & setup. Bulk discounts up to 20%.",
    href: "/offers",
  },
  {
    text:
      "Shop big, save big: Free delivery & setup on ₦450,000+ orders, plus bulk discounts up to 20%.",
    href: "/offers",
  },
];

const ROTATION_MS = 5000;

const TopBanner = () => {
  const [index, setIndex] = useState(0);
  const [hidden, setHidden] = useState(false);
  const active = useMemo(() => MESSAGES[index], [index]);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % MESSAGES.length);
    }, ROTATION_MS);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const shouldHide = window.scrollY > 16;
      setHidden(shouldHide);
      const root = document.documentElement;
      root.style.setProperty("--banner-height", shouldHide ? "0px" : "40px");
    };
    // initialize
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 w-full bg-white/90 backdrop-blur supports-backdrop-blur:backdrop-blur border-b border-gray-200 transition-transform duration-300 ${hidden ? "-translate-y-full" : "translate-y-0"}`}>
      <div className="container mx-auto px-4">
        <div className="flex h-10 items-center justify-center gap-2 text-center text-xs sm:text-sm text-gray-900">
          <span className="line-clamp-1">
            {active.text}
          </span>
          <Link
            to={active.href}
            className="inline-flex items-center whitespace-nowrap font-medium text-black underline underline-offset-4 hover:opacity-80"
          >
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;


