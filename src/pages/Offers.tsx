import { Link } from "react-router-dom";

const Offers = () => {
  return (
    <div className="pt-24">
      <header className="border-b bg-gray-50">
        <div className="container mx-auto px-4 py-10">
          <h1 className="text-3xl md:text-4xl font-bold text-black">Free Delivery & Setup + Bulk Discounts</h1>
          <p className="mt-3 text-black">Everything you need to know about eligibility, coverage, and savings.</p>
        </div>
      </header>

      <section className="container mx-auto px-4 py-10 space-y-10">
        <div>
          <h2 className="text-2xl font-semibold text-black">Free Delivery & Setup</h2>
          <ul className="mt-4 list-disc pl-5 text-black space-y-2">
            <li>Applies to orders of ₦450,000 and above.</li>
            <li>Includes doorstep delivery and standard on-site setup.</li>
            <li>Available within major service areas; remote locations may require scheduling.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-black">Bulk Order Discounts</h2>
          <p className="mt-4 text-black">Save up to 20% on large orders. Discount tiers depend on volume and mix.</p>
          <ul className="mt-3 list-disc pl-5 text-black space-y-2">
            <li>Ideal for hospitality, commercial, and residential developments.</li>
            <li>We’ll tailor quotes based on quantity, configuration, and timelines.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-black">How to Claim</h2>
          <ol className="mt-4 list-decimal pl-5 text-black space-y-2">
            <li>Browse our <Link to="/collection" className="underline">Collection</Link> and shortlist items.</li>
            <li>Contact us with your list and delivery location.</li>
            <li>We’ll confirm eligibility and provide a detailed quote.</li>
          </ol>
        </div>

        <div className="pt-2">
          <Link to="/contact" className="inline-block bg-black text-white px-6 py-3 rounded">Contact Us for a Quote</Link>
        </div>
      </section>
    </div>
  );
};

export default Offers;


