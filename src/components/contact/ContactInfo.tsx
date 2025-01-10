import { Mail, Phone, MapPin, Building2, Factory, Building } from "lucide-react";
import { motion } from "framer-motion";


const locations = [
  {
    title: "Warehouse",
    address: "359/361, Old Ojo Road, Badagry Expressway, Lagos.",
    icon: Building2,
  },
  {
    title: "Factory",
    address: "Km 12 Old Lagos Road, Aiyetoro, Ibadan.",
    icon: Factory,
  },
  {
    title: "Liaison Office",
    address: "11A Idejo Street, Off Adeola Odeku, Victoria Island, Lagos.",
    icon: Building,
  },
];

const phoneNumbers = [
  "07 007 007 007",
  "+234 (0) 908 777 5777",
  "+234 (0) 809 800 9800",
  "+234 (0) 908 777 2 777",
  "+234 (0) 908 777 1 777",
];

const emails = [
  "info@saf-furniture.com",
  "order@saf-furniture.com",
];

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <h2 className="text-2xl font-semibold">Contact Information</h2>
        
        {/* Phone Numbers */}
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <Phone className="w-5 h-5 text-accent mt-1" />
            <div>
              <p className="font-medium">Phone:</p>
              {phoneNumbers.map((number, index) => (
                <p key={index} className="text-gray-600">{number}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Email Addresses */}
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <Mail className="w-5 h-5 text-accent mt-1" />
            <div>
              <p className="font-medium">Email:</p>
              {emails.map((email, index) => (
                <p key={index} className="text-gray-600">{email}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Locations */}
        <div className="space-y-4">
          {locations.map((location) => (
            <div key={location.title} className="flex items-start space-x-4">
              <location.icon className="w-5 h-5 text-accent mt-1" />
              <div>
                <p className="font-medium">{location.title}:</p>
                <p className="text-gray-600">{location.address}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* QR Code Section */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Quick Connect</h3>
        <div className="flex items-center space-x-4">
          <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
            {/* Replace with actual QR code */}
            <img src='/qr.png' alt="qrcode" />
          </div>
          <p className="text-sm text-gray-600">
            Scan to connect with our sales team instantly
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;