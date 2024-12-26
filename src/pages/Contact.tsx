import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";
import {
  Mail,
  Phone,
  MapPin,
  QrCode,
  Factory,
  Building2,
  Building,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  whatsapp: z.string().min(10, "Valid WhatsApp number is required"),
  email: z.string().email("Valid email is required"),
  enquiryType: z.string().min(1, "Please select an enquiry type"),
  additionalInfo: z.string(),
});

const Contact = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      whatsapp: "",
      email: "",
      enquiryType: "",
      additionalInfo: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
    toast({
      title: "Message sent!",
      description: "We'll get back to you soon.",
    });
    form.reset();
  };

  const locations = [
    {
      title: "Factory",
      address: "123 Manufacturing Zone, Industrial Area",
      icon: Factory,
    },
    {
      title: "Warehouse",
      address: "456 Storage Complex, Distribution Center",
      icon: Building2,
    },
    {
      title: "Liaison Office",
      address: "789 Business District, Corporate Hub",
      icon: Building,
    },
  ];

  return (
    <div className="min-h-screen pt-16 bg-background">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4 py-12 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
        <p className="text-xl text-muted-foreground">
          We're here to help with your furniture needs
        </p>
      </motion.div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Contact Information</h2>
              
              {/* Phone Numbers */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Phone className="w-5 h-5 text-accent" />
                  <div>
                    <p className="font-medium">Sales:</p>
                    <p>+234 123 456 7890</p>
                    <p>+234 098 765 4321</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-5 h-5 text-accent" />
                  <div>
                    <p className="font-medium">Support:</p>
                    <p>+234 111 222 3333</p>
                  </div>
                </div>
              </div>

              {/* Email Addresses */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="w-5 h-5 text-accent" />
                  <div>
                    <p className="font-medium">General Inquiries:</p>
                    <p>info@saf.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-5 h-5 text-accent" />
                  <div>
                    <p className="font-medium">Orders:</p>
                    <p>orders@saf.com</p>
                  </div>
                </div>
              </div>

              {/* Locations */}
              <div className="space-y-4">
                {locations.map((location) => (
                  <div key={location.title} className="flex items-center space-x-4">
                    <location.icon className="w-5 h-5 text-accent" />
                    <div>
                      <p className="font-medium">{location.title}:</p>
                      <p>{location.address}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* QR Code Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Quick Connect</h3>
              <div className="flex items-center space-x-4">
                <QrCode className="w-32 h-32" />
                <p className="text-sm text-muted-foreground">
                  Scan to connect with our sales team instantly
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-card rounded-lg p-6 shadow-sm"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="+234..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="whatsapp"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>WhatsApp</FormLabel>
                        <FormControl>
                          <Input placeholder="+234..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="your@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="enquiryType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Enquiry Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select enquiry type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="order">Make an order</SelectItem>
                          <SelectItem value="assembly">Assembly/Disassembly</SelectItem>
                          <SelectItem value="rental">Rental Quote</SelectItem>
                          <SelectItem value="distributor">Distributor Inquiry</SelectItem>
                          <SelectItem value="maintenance">Furniture Maintenance</SelectItem>
                          <SelectItem value="complaints">Complaints</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="additionalInfo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Information</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us more about your inquiry..."
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                  Send Message
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;