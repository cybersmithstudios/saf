import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container px-4 py-12 max-w-4xl"
      >
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-8">Effective Date: 12/26/2024</p>

        <section className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="mb-6">
            Welcome to SAF Furniture ("we," "our," or "us"). We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and protect your information when you visit our website www.saf-furniture.com (the "Site"). By using our Site, you agree to the terms outlined in this Privacy Policy.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          <p className="mb-4">We collect the following types of information:</p>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">Personal Information: Name, email address, phone number, billing address, and shipping address provided during purchases or inquiries.</li>
            <li className="mb-2">Payment Information: Credit card or payment details processed securely through third-party payment providers.</li>
            <li className="mb-2">Browsing Data: IP address, browser type, pages visited, and time spent on the Site collected through cookies and tracking technologies.</li>
            <li className="mb-2">Communication Data: Information shared with us via contact forms, emails, or social media interactions.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">To process and fulfill your orders.</li>
            <li className="mb-2">To provide customer support and respond to inquiries.</li>
            <li className="mb-2">To send updates about your order status or promotional offers (if subscribed).</li>
            <li className="mb-2">To improve our Site, products, and services based on user feedback.</li>
            <li className="mb-2">To comply with legal obligations.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Sharing Your Information</h2>
          <p className="mb-4">We do not sell or rent your personal information. However, we may share your information with:</p>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">Service Providers: Third-party vendors who assist with payment processing, shipping, or marketing.</li>
            <li className="mb-2">Legal Authorities: When required by law or to protect our rights.</li>
            <li className="mb-2">Business Transfers: In the event of a merger, acquisition, or sale of assets, your information may be transferred.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Cookies and Tracking Technologies</h2>
          <p className="mb-6">
            We use cookies to enhance your browsing experience, track site performance, and deliver relevant ads. You can manage your cookie preferences through your browser settings.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
          <p className="mb-6">
            We implement security measures to protect your personal information from unauthorized access, disclosure, or misuse. However, no method of transmission over the internet is 100% secure.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
          <p className="mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">Access, update, or delete your personal information.</li>
            <li className="mb-2">Opt-out of receiving marketing communications.</li>
            <li className="mb-2">Request details about how your data is used.</li>
          </ul>
          <p className="mb-6">To exercise these rights, contact us at info@saf-furniture.com.</p>

          <h2 className="text-2xl font-semibold mb-4">Third-Party Links</h2>
          <p className="mb-6">
            Our Site may contain links to third-party websites. We are not responsible for their privacy practices. We encourage you to review their privacy policies before providing any information.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
          <p className="mb-6">
            Our Site is not intended for individuals under the age of 18. We do not knowingly collect personal information from children.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
          <p className="mb-6">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated effective date.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-6">
            If you have any questions or concerns about this Privacy Policy, please contact us at:
          </p>
          <div className="mb-8">
            <p>SAF Furniture</p>
            <p>info@saf-furniture.com</p>
            <p>07 007 007 007</p>
            <p>11A Idejo Street, Off Adeola Odeku, Victoria Island, Lagos</p>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;