import { useEffect } from "react";
import { X } from "lucide-react";

interface ImageLightboxProps {
  src: string;
  alt?: string;
  open: boolean;
  onClose: () => void;
}

const ImageLightbox = ({ src, alt = "Image", open, onClose }: ImageLightboxProps) => {
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center">
      <button
        aria-label="Close"
        className="absolute top-4 right-4 text-white/80 hover:text-white"
        onClick={onClose}
      >
        <X className="w-6 h-6" />
      </button>
      <div className="max-w-[95vw] max-h-[90vh]">
        <img
          src={src}
          alt={alt}
          className="w-auto h-auto max-w-[95vw] max-h-[90vh] object-contain"
        />
      </div>
    </div>
  );
};

export default ImageLightbox;
