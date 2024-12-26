import { Building, Calendar, Users, Award, Heart } from "lucide-react";
import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 md:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Crafting Comfort Since 1976</h1>
          <p className="text-xl text-muted-foreground">A Legacy of Quality, Affordability, and Style</p>
        </motion.div>
      </section>

      {/* Company Overview */}
      <section className="py-12 px-4 md:px-6 lg:px-8 bg-secondary/10">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          >
            <div>
              <img 
                src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3"
                alt="Modern furniture showcase"
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Building className="w-6 h-6 text-accent mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Our Story</h3>
                  <p className="text-muted-foreground">
                    Self Assembly Furniture (SAF) is a proud subsidiary of Black Horse Plastics Ind. Ltd, 
                    dedicated to enhancing modern living through versatile, high-quality designs.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Calendar className="w-6 h-6 text-accent mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Legacy</h3>
                  <p className="text-muted-foreground">
                    Since 1976, we've been at the forefront of furniture innovation, 
                    combining traditional craftsmanship with modern technology.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Users className="w-6 h-6 text-accent mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Our Team</h3>
                  <p className="text-muted-foreground">
                    Our dedicated team of designers and craftsmen work tirelessly to create 
                    furniture that combines style, comfort, and practicality.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-12 px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              At SAF, we believe in redefining spaces with innovative, easy-to-assemble furniture 
              that blends elegance with practicality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 rounded-lg bg-card shadow-sm"
            >
              <Award className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality First</h3>
              <p className="text-muted-foreground">
                We maintain the highest standards in materials and craftsmanship to ensure 
                lasting quality in every piece.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-6 rounded-lg bg-card shadow-sm"
            >
              <Heart className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">Customer Focus</h3>
              <p className="text-muted-foreground">
                Your satisfaction drives us. We're committed to providing exceptional 
                service and support at every step.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="p-6 rounded-lg bg-card shadow-sm lg:col-span-1 md:col-span-2 lg:col-span-1"
            >
              <Building className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                We continuously innovate our designs and processes to bring you the best 
                in modern furniture solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-12 px-4 md:px-6 lg:px-8 bg-secondary/10">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Perfect for Every Setting</h2>
            <p className="text-xl text-muted-foreground">
              Our versatile furniture solutions adapt to any environment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Homes", description: "Create comfortable living spaces" },
              { title: "Offices", description: "Professional and ergonomic solutions" },
              { title: "Hotels", description: "Luxurious and durable furnishings" },
              { title: "Restaurants", description: "Stylish dining experiences" },
              { title: "Events", description: "Flexible and elegant setups" },
              { title: "Outdoor Spaces", description: "Weather-resistant comfort" }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-lg bg-background shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;