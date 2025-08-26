const ECatalogue = () => {
  return (
    <div className="pt-24 container mx-auto px-4">
      <h1 className="text-3xl md:text-5xl font-bold text-black mb-6">E-Catalogue</h1>
      <p className="text-black mb-6">Browse or download our latest product catalogue.</p>
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <a
          href="/catalogue.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white px-6 py-3 rounded"
        >
          Open PDF
        </a>
        <a
          href="/catalogue.pdf"
          download
          className="border border-black text-black px-6 py-3 rounded"
        >
          Download
        </a>
      </div>
    </div>
  );
};

export default ECatalogue;


