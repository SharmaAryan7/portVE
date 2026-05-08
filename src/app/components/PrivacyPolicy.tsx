import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      <section className="py-12 px-8">
        <div className="max-w-[900px] mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[#B8B8B8] hover:text-[#FF6B00] transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>

          <h1 style={{ fontSize: '48px', lineHeight: '1.2' }} className="text-white mb-6">
            Privacy Policy
          </h1>

          <p className="text-[#B8B8B8] text-sm mb-12">
            Last Updated: May 4, 2026
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-white text-2xl mb-4">1. Introduction</h2>
              <p className="text-[#B8B8B8] leading-relaxed">
                Welcome to our Privacy Policy. Your privacy is critically important to us. This
                Privacy Policy document contains types of information that is collected and
                recorded by our website and how we use it.
              </p>
            </section>

            <section>
              <h2 className="text-white text-2xl mb-4">2. Information We Collect</h2>
              <p className="text-[#B8B8B8] leading-relaxed mb-4">
                We collect several different types of information for various purposes to provide
                and improve our service to you:
              </p>
              <ul className="space-y-2 text-[#B8B8B8] leading-relaxed pl-6">
                <li className="list-disc">Personal identification information (Name, email address, phone number, etc.)</li>
                <li className="list-disc">Project details and requirements you share with us</li>
                <li className="list-disc">Usage data and analytics</li>
                <li className="list-disc">Cookies and tracking technologies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-white text-2xl mb-4">3. How We Use Your Information</h2>
              <p className="text-[#B8B8B8] leading-relaxed mb-4">
                We use the collected data for various purposes:
              </p>
              <ul className="space-y-2 text-[#B8B8B8] leading-relaxed pl-6">
                <li className="list-disc">To provide and maintain our service</li>
                <li className="list-disc">To notify you about changes to our service</li>
                <li className="list-disc">To provide customer support</li>
                <li className="list-disc">To gather analysis or valuable information to improve our service</li>
                <li className="list-disc">To monitor the usage of our service</li>
                <li className="list-disc">To detect, prevent and address technical issues</li>
              </ul>
            </section>

            <section>
              <h2 className="text-white text-2xl mb-4">4. Data Storage and Security</h2>
              <p className="text-[#B8B8B8] leading-relaxed">
                The security of your data is important to us. We strive to use commercially
                acceptable means to protect your Personal Information, but remember that no method
                of transmission over the Internet, or method of electronic storage is 100% secure.
                We implement appropriate technical and organizational security measures to protect
                your information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-white text-2xl mb-4">5. Data Sharing and Disclosure</h2>
              <p className="text-[#B8B8B8] leading-relaxed mb-4">
                We do not sell, trade, or rent your personal identification information to others.
                We may share generic aggregated demographic information not linked to any personal
                identification information with our business partners and trusted affiliates.
              </p>
            </section>

            <section>
              <h2 className="text-white text-2xl mb-4">6. Cookies</h2>
              <p className="text-[#B8B8B8] leading-relaxed">
                Our website uses cookies to enhance user experience. You can choose to set your web
                browser to refuse cookies, or to alert you when cookies are being sent. If you do
                so, note that some parts of the website may not function properly.
              </p>
            </section>

            <section>
              <h2 className="text-white text-2xl mb-4">7. Third-Party Services</h2>
              <p className="text-[#B8B8B8] leading-relaxed">
                We may employ third-party companies and individuals to facilitate our service, to
                provide the service on our behalf, to perform service-related services, or to assist
                us in analyzing how our service is used. These third parties have access to your
                Personal Information only to perform these tasks on our behalf and are obligated not
                to disclose or use it for any other purpose.
              </p>
            </section>

            <section>
              <h2 className="text-white text-2xl mb-4">8. Your Data Rights</h2>
              <p className="text-[#B8B8B8] leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="space-y-2 text-[#B8B8B8] leading-relaxed pl-6">
                <li className="list-disc">Access the personal information we hold about you</li>
                <li className="list-disc">Request correction of inaccurate data</li>
                <li className="list-disc">Request deletion of your personal data</li>
                <li className="list-disc">Object to processing of your personal data</li>
                <li className="list-disc">Request restriction of processing your personal data</li>
                <li className="list-disc">Request transfer of your personal data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-white text-2xl mb-4">9. Children's Privacy</h2>
              <p className="text-[#B8B8B8] leading-relaxed">
                Our service does not address anyone under the age of 13. We do not knowingly collect
                personally identifiable information from children under 13. If you are a parent or
                guardian and you are aware that your child has provided us with personal information,
                please contact us so that we can take necessary actions.
              </p>
            </section>

            <section>
              <h2 className="text-white text-2xl mb-4">10. Changes to This Privacy Policy</h2>
              <p className="text-[#B8B8B8] leading-relaxed">
                We may update our Privacy Policy from time to time. We will notify you of any changes
                by posting the new Privacy Policy on this page and updating the "Last Updated" date
                at the top of this Privacy Policy. You are advised to review this Privacy Policy
                periodically for any changes.
              </p>
            </section>

            <section>
              <h2 className="text-white text-2xl mb-4">11. Contact Us</h2>
              <p className="text-[#B8B8B8] leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <ul className="space-y-2 text-[#B8B8B8] leading-relaxed pl-6">
                <li className="list-disc">By email: hello@example.com</li>
                <li className="list-disc">
                  By visiting our{" "}
                  <Link to="/contact" className="text-[#FF6B00] hover:text-[#E6C07B] transition-colors">
                    contact page
                  </Link>
                </li>
              </ul>
            </section>

            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-[#B8B8B8] text-sm">
                By using our website, you hereby consent to our Privacy Policy and agree to its terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-8 bg-[#1A1A1A]">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 style={{ fontSize: '40px', lineHeight: '1.2' }} className="text-white mb-6">
            Have Questions?
          </h2>
          <p className="text-[#B8B8B8] text-lg mb-8">
            If you have any concerns about how we handle your data, we're here to help
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#FF6B00] to-[#E6C07B] text-white rounded-full hover:shadow-[0_0_30px_rgba(255,107,0,0.6)] transition-all"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
