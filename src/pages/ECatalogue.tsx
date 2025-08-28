import { Download, ExternalLink } from "lucide-react";

const ECatalogue = () => {
  return (
    <div className="pt-24 container mx-auto px-4">
      <div className="max-w-5xl mx-auto">
        <header className="mb-6 md:mb-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-black">E‑Catalogue</h1>
          <p className="text-sm md:text-base text-black/70 mt-2">
            Browse our latest catalogue or download a copy for offline viewing.
          </p>
        </header>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6">
          <a
            href="/catalogue.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-black text-white px-5 py-3 rounded-lg hover:bg-black/90 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Open in new tab</span>
          </a>
          <a
            href="/catalogue.pdf"
            download
            className="inline-flex items-center justify-center gap-2 border border-black text-black px-5 py-3 rounded-lg hover:bg-black hover:text-white transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF</span>
          </a>
        </div>

        <div className="rounded-xl overflow-hidden border bg-white shadow-sm">
          <div className="bg-black/5 px-4 py-2 text-xs text-black/60">
            Preview
          </div>
          <div className="w-full h-[70vh] md:h-[80vh] bg-gray-100">
            <object
              data="/catalogue.pdf"
              type="application/pdf"
              className="w-full h-full"
            >
              <iframe
                title="Catalogue PDF"
                src="/catalogue.pdf"
                className="w-full h-full"
              />
              <div className="p-6 text-center text-sm text-black/70">
                Your browser doesn’t support inline PDFs. Please
                <a href="/catalogue.pdf" target="_blank" rel="noopener noreferrer" className="text-black underline ml-1">open it in a new tab</a>
                or
                <a href="/catalogue.pdf" download className="text-black underline ml-1">download it</a>.
              </div>
            </object>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ECatalogue;


