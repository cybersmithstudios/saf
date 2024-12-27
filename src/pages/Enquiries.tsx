import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useEnquiryStore } from "@/store/useEnquiryStore";

const Enquiries = () => {
  const { toast } = useToast();
  const { items, removeItem, clearItems } = useEnquiryStore();

  const handleSubmitEnquiry = () => {
    toast({
      title: "Enquiry Submitted",
      description: "We'll get back to you shortly with more information.",
    });
    clearItems();
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="container px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8">Your Enquiries</h1>
          
          {items.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600 mb-4">
                Your enquiry list is empty
              </p>
              <Button asChild variant="default">
                <Link to="/collection">Browse Collections</Link>
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm"
                >
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div className="flex-grow">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.category}</p>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <Trash2 className="w-5 h-5 text-gray-500" />
                  </button>
                </motion.div>
              ))}
              
              <div className="flex justify-end gap-4 mt-8">
                <Button variant="outline" asChild>
                  <Link to="/collection">Add More Items</Link>
                </Button>
                <Button onClick={handleSubmitEnquiry}>
                  Submit Enquiry
                </Button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Enquiries;