const Distributors = () => {
  return (
    <div className="pt-24 container mx-auto px-4">
      <h1 className="text-3xl md:text-5xl font-bold text-black mb-6">Distributors</h1>
      <p className="text-black mb-8">Partner with SAF. Fill out the form below and our team will contact you.</p>
      <div className="bg-gray-50 p-6 rounded-lg">
        <form className="grid gap-4">
          <input className="border rounded px-4 py-3 text-black" placeholder="Company Name" />
          <input className="border rounded px-4 py-3 text-black" placeholder="Contact Person" />
          <input className="border rounded px-4 py-3 text-black" placeholder="Email" type="email" />
          <input className="border rounded px-4 py-3 text-black" placeholder="Phone" />
          <textarea className="border rounded px-4 py-3 text-black" rows={4} placeholder="Message" />
          <button type="submit" className="bg-black text-white px-6 py-3 rounded">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Distributors;


