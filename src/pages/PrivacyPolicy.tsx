import { motion } from "framer-motion";
import { Shield, Eye, Lock, Users, FileText, Mail, Phone } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container px-4 py-12 max-w-4xl mx-auto"
      >
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Privacy Policy</h1>
          <p className="text-lg text-gray-600 mb-2">Your privacy matters to us</p>
          <p className="text-sm text-gray-500">Effective Date: December 26, 2024</p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
            </div>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Welcome to SAF Furniture ("we," "our," or "us"). We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and protect your information when you visit our website www.saf-furniture.com (the "Site"). By using our Site, you agree to the terms outlined in this Privacy Policy.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Eye className="w-5 h-5 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
            </div>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 mb-6">We collect the following types of information:</p>
              <div className="grid gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Personal Information</h4>
                  <p className="text-gray-700 text-sm">Name, email address, phone number, billing address, and shipping address provided during purchases or inquiries.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Payment Information</h4>
                  <p className="text-gray-700 text-sm">Credit card or payment details processed securely through third-party payment providers.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Browsing Data</h4>
                  <p className="text-gray-700 text-sm">IP address, browser type, pages visited, and time spent on the Site collected through cookies and tracking technologies.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Communication Data</h4>
                  <p className="text-gray-700 text-sm">Information shared with us via contact forms, emails, or social media interactions.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>
            </div>
            <div className="prose prose-gray max-w-none">
              <div className="grid gap-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">To process and fulfill your orders</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">To provide customer support and respond to inquiries</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">To send updates about your order status or promotional offers (if subscribed)</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">To improve our Site, products, and services based on user feedback</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">To comply with legal obligations</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <Lock className="w-5 h-5 text-orange-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Sharing Your Information</h2>
            </div>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 mb-6">We do not sell or rent your personal information. However, we may share your information with:</p>
              <div className="grid gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Service Providers</h4>
                  <p className="text-gray-700 text-sm">Third-party vendors who assist with payment processing, shipping, or marketing.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Legal Authorities</h4>
                  <p className="text-gray-700 text-sm">When required by law or to protect our rights.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Business Transfers</h4>
                  <p className="text-gray-700 text-sm">In the event of a merger, acquisition, or sale of assets, your information may be transferred.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-yellow-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Cookies and Tracking Technologies</h2>
            </div>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed">
                We use cookies to enhance your browsing experience, track site performance, and deliver relevant ads. You can manage your cookie preferences through your browser settings.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Data Security</h2>
            </div>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed">
                We implement security measures to protect your personal information from unauthorized access, disclosure, or misuse. However, no method of transmission over the internet is 100% secure.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-indigo-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Your Rights</h2>
            </div>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 mb-6">You have the right to:</p>
              <div className="grid gap-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Access, update, or delete your personal information</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Opt-out of receiving marketing communications</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Request details about how your data is used</p>
                </div>
              </div>
              <p className="text-gray-700 mt-6">To exercise these rights, contact us at info@saf-furniture.com.</p>
            </div>
          </section>

          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-teal-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Additional Information</h2>
            </div>
            <div className="prose prose-gray max-w-none">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Third-Party Links</h4>
                  <p className="text-gray-700 text-sm">Our Site may contain links to third-party websites. We are not responsible for their privacy practices. We encourage you to review their privacy policies before providing any information.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Children's Privacy</h4>
                  <p className="text-gray-700 text-sm">Our Site is not intended for individuals under the age of 18. We do not knowingly collect personal information from children.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Changes to This Policy</h4>
                  <p className="text-gray-700 text-sm">We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated effective date.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-primary/5 p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
            </div>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 mb-6">
                If you have any questions or concerns about this Privacy Policy, please contact us:
              </p>
              <div className="grid gap-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-gray-700">info@saf-furniture.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-gray-700">07 007 007 007</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-gray-700">+234 (0) 908 777 5777</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;