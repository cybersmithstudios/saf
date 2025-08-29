import { Link } from "react-router-dom";
import ProductAdvantage from "@/components/ProductAdvantage";

const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="container mx-auto px-4 py-12">
    <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-black">{title}</h2>
    <div className="prose prose-neutral max-w-none text-black">
      {children}
    </div>
  </section>
);

const AssemblyCard = ({ title, description, image, link }: { 
  title: string; 
  description: string; 
  image: string; 
  link: string; 
}) => (
  <Link 
    to={link}
    className="group block overflow-hidden rounded-xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
  >
    <div className="aspect-[4/3] overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
    </div>
    <div className="p-4">
      <h3 className="font-semibold text-lg text-black mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </Link>
);

const SafAdvantage = () => {
  const luganoProduct = {
    title: "BENEFITS/FEATURES OF LUGANO",
    benefits: [
      "Easy to transport",
      "Modular, can be assembled and disassembled",
      "Available in multiple colors",
      "Can be customized with different cushion colors",
      "Proudly made in Nigeria",
      "Durable in adverse weather, suitable for both indoor and outdoor use",
      "Stackable and easy to store for later use",
      "Can be extended into 2, 3, or more seaters"
    ],
    image: "/lugano highlights/4.png",
    imageAlt: "Lugano Highlight"
  };

  const malibuProduct = {
    title: "BENEFITS/FEATURES OF MALIBU",
    benefits: [
      "Easy to transport",
      "Available in multiple colors",
      "Can be customized with different cushion colors",
      "Proudly made in Nigeria",
      "Durable in adverse weather, suitable for both indoor and outdoor use",
      "Stackable and easy to store for later use"
    ],
    image: "/malibu highlights/2.png",
    imageAlt: "Malibu Highlight"
  };

  const santoriniProduct = {
    title: "BENEFITS/FEATURES OF SANTORINI",
    benefits: [
      "Easy to transport",
      "Modular, can be assembled and disassembled",
      "Available in multiple colors",
      "Can be customized with different cushion colors",
      "Proudly made in Nigeria",
      "Durable in adverse weather, suitable for both indoor and outdoor use"
    ],
    image: "/santorini highlights/1.png",
    imageAlt: "Santorini Highlight"
  };

  const soloLoungerProduct = {
    title: "BENEFITS/FEATURES OF SOLO LOUNGER",
    benefits: [
      "Easy to transport",
      "Available in multiple colors",
      "Proudly made in Nigeria",
      "Durable in adverse weather, suitable for both indoor and outdoor use",
      "Stackable and easy to store for later use"
    ],
    image: "/solo lounger highlights/5.png",
    imageAlt: "Solo Lounger Highlight"
  };

  const assemblyConfigurations = [
    {
      title: "2-Seater Lugano Setup",
      description: "Step-by-step assembly guide for 2-seater Lugano configuration",
      image: "/2seater-scematics/1.jpg",
      link: "/product-models#2seater-lugano"
    },
    {
      title: "Lugano Table Setup",
      description: "Complete setup instructions for Lugano table configuration",
      image: "/Lugano Table Setup/1.jpg",
      link: "/product-models#lugano-table"
    },
    {
      title: "Lugano Single Setup",
      description: "Assembly guide for single Lugano armchair",
      image: "/Lugano Single Setup/1.png",
      link: "/product-models#lugano-single"
    },
    {
      title: "Santorini Armchair Setup",
      description: "Setup instructions for Santorini armchair and table",
      image: "/Santorini Armchair Setup/1.jpg",
      link: "/product-models#santorini-armchair"
    }
  ];

  return (
    <div className="pt-24">
      <header className="relative bg-gray-50">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-black">SAF Advantage</h1>
          <p className="mt-4 text-black">Our story, product benefits, and why customers choose SAF.</p>
        </div>
      </header>

      <Section id="assemble" title="How to Assemble">
        <p className="text-center mb-8 text-gray-600">
          Click on any configuration below to view detailed step-by-step assembly instructions
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {assemblyConfigurations.map((config) => (
            <AssemblyCard
              key={config.title}
              title={config.title}
              description={config.description}
              image={config.image}
              link={config.link}
            />
          ))}
        </div>
      </Section>

      {/* Product-Specific Benefits and Highlights */}
      <ProductAdvantage product={luganoProduct} />
      <ProductAdvantage product={malibuProduct} />
      <ProductAdvantage product={santoriniProduct} />
      <ProductAdvantage product={soloLoungerProduct} />

      <Section id="about" title="About Us">
        <p>
          SAF crafts premium furniture solutions for outdoor and indoor environments, combining craftsmanship with scalable production.
        </p>
        <div className="mt-6">
          <Link to="/contact" className="inline-block bg-black text-white px-6 py-3 rounded-md">Contact Us</Link>
        </div>
      </Section>
    </div>
  );
};

export default SafAdvantage;


