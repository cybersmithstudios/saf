import { motion } from "framer-motion";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

const Contact = () => {
  return (
    <div className="min-h-screen pt-16 bg-background px-4 sm:px-6 lg:px-8"> {/* Added padding here */}
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto py-12 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
        <p className="text-xl text-muted-foreground">
          We're here to help with your furniture needs
        </p>
      </motion.div>

      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <ContactInfo />

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-card rounded-lg p-6 shadow-sm"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;