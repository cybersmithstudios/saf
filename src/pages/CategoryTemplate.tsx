import { Link, useParams } from "react-router-dom";

const categoryMeta: Record<string, { title: string; hero?: string }> = {
  outdoors: { title: "Outdoors", hero: "/public/loungers1.png" },
  indoors: { title: "Indoors" },
  restaurants: { title: "Restaurants" },
  hotels: { title: "Hotels" },
  commercial: { title: "Commercial" },
  residential: { title: "Residential" },
  lounges: { title: "Lounges" },
  export: { title: "Export" },
};

const CategoryTemplate = () => {
  const { slug } = useParams();
  const meta = categoryMeta[String(slug || "")] || { title: "Collection" };

  return (
    <div className="pt-24">
      {/* Header Image (Hero) */}
      <div className="w-full h-64 md:h-96 bg-gray-100 flex items-center justify-center overflow-hidden">
        {meta.hero ? (
          <img src={meta.hero} alt={meta.title} className="w-full h-full object-cover" />
        ) : (
          <h1 className="text-3xl md:text-5xl font-bold text-black">{meta.title}</h1>
        )}
      </div>

      {/* Image Gallery / Slideshow (placeholder grid) */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-4 text-black">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="aspect-video bg-gray-100 rounded" />
          ))}
        </div>
      </section>

      {/* Writeup Section */}
      <section className="container mx-auto px-4 py-8">
        <h3 className="text-xl font-semibold mb-2 text-black">About {meta.title}</h3>
        <p className="text-black">
          Premium SAF solutions tailored for {meta.title.toLowerCase()} use cases. Combine durability, comfort, and modularity to suit your project requirements.
        </p>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 pb-16">
        <Link to="/contact" className="inline-block bg-black text-white px-6 py-3 rounded">Contact Us</Link>
      </section>
    </div>
  );
};

export default CategoryTemplate;


