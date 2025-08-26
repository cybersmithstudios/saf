import { Link } from "react-router-dom";

const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="container mx-auto px-4 py-12">
    <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-black">{title}</h2>
    <div className="prose prose-neutral max-w-none text-black">
      {children}
    </div>
  </section>
);

const SafAdvantage = () => {
  return (
    <div className="pt-24">
      <header className="relative bg-gray-50">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-black">SAF Advantage</h1>
          <p className="mt-4 text-black">Our story, product benefits, and why customers choose SAF.</p>
        </div>
      </header>

      <Section id="assemble" title="How to Assemble">
        <p>
          Quick modular assembly with minimal tools. Lightweight components slot together securely, enabling efficient on-site setup and reconfiguration.
        </p>
      </Section>

      <Section id="benefits" title="Benefits / Features of SAF">
        <ul>
          <li>Durable, weather-resistant materials suited for intensive use</li>
          <li>Modular designs for flexible layouts</li>
          <li>Easy maintenance and replacement</li>
          <li>Ergonomic comfort and timeless aesthetics</li>
        </ul>
      </Section>

      <Section id="highlights" title="Highlights">
        <p>
          Explore standout projects and best-selling configurations across hospitality, residential, and commercial spaces.
        </p>
      </Section>

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


