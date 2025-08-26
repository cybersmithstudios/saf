import { Link } from "react-router-dom";

const items = [
  { name: "Outdoors", slug: "outdoors" },
  { name: "Indoors", slug: "indoors" },
  { name: "Restaurants", slug: "restaurants" },
  { name: "Hotels", slug: "hotels" },
  { name: "Commercial", slug: "commercial" },
  { name: "Residential", slug: "residential" },
  { name: "Lounges", slug: "lounges" },
  { name: "Export", slug: "export" },
];

const ForUseIn = () => {
  const spanClasses = [
    "lg:col-span-3 lg:row-span-2",
    "lg:col-span-3 lg:row-span-1",
    "lg:col-span-2 lg:row-span-1",
    "lg:col-span-1 lg:row-span-1",
    "lg:col-span-2 lg:row-span-1",
    "lg:col-span-2 lg:row-span-1",
    "lg:col-span-2 lg:row-span-1",
    "lg:col-span-2 lg:row-span-1",
  ];

  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <div className="flex items-end justify-between mb-4 md:mb-6">
        <h2 className="text-xl md:text-3xl font-semibold text-black">For Use In:</h2>
        <p className="hidden md:block text-sm text-muted-foreground">Explore use cases and spaces</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 auto-rows-[150px] md:auto-rows-[220px] lg:auto-rows-[160px] gap-3 md:gap-6">
        {items.map((item, idx) => (
          <Link
            key={item.slug}
            to={`/collection/${item.slug}`}
            className={`group relative block rounded-xl overflow-hidden border border-gray-200/60 bg-white ${spanClasses[idx % spanClasses.length]}`}
          >
            <div className="absolute inset-0">
              <img
                src="/placeholder.svg"
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            </div>

            <div className="relative z-10 h-full flex flex-col justify-end p-4">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-medium text-gray-900 ring-1 ring-black/5">
                  Collection
                </span>
              </div>
              <h3 className="mt-2 text-white text-lg md:text-xl font-semibold drop-shadow-sm">{item.name}</h3>
              <span className="mt-1 inline-flex w-max items-center text-xs text-white/80 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                View {item.name}
              </span>
            </div>

            <div className="absolute inset-0 ring-1 ring-black/5 rounded-xl" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_10px_40px_-10px_rgba(0,0,0,0.4)]" />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ForUseIn;


