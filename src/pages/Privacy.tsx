const Privacy = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-64 flex items-center justify-center overflow-hidden bg-gradient-luxury">
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90">
            Your privacy and data protection are our priority
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <div className="text-sm text-muted-foreground mb-8">
              Last updated: December 2024
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="font-display text-3xl font-semibold text-luxury-navy mb-4">
                  Information We Collect
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    At Luxora Hotel, we collect information to provide you with exceptional service and personalized experiences. This includes:
                  </p>
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li>Personal information provided during booking (name, contact details, preferences)</li>
                    <li>Payment information for reservations and services</li>
                    <li>Communication records and special requests</li>
                    <li>Website usage data and cookies for improved user experience</li>
                    <li>Location data when using our mobile services</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="font-display text-3xl font-semibold text-luxury-navy mb-4">
                  How We Use Your Information
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    We use your information to:
                  </p>
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li>Process reservations and provide hotel services</li>
                    <li>Communicate about your stay and respond to inquiries</li>
                    <li>Personalize your experience and fulfill special requests</li>
                    <li>Send promotional materials and special offers (with your consent)</li>
                    <li>Improve our services and website functionality</li>
                    <li>Comply with legal obligations and ensure security</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="font-display text-3xl font-semibold text-luxury-navy mb-4">
                  Information Sharing
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    We do not sell your personal information. We may share your information with:
                  </p>
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li>Service providers who assist in hotel operations</li>
                    <li>Payment processors for secure transaction handling</li>
                    <li>Emergency contacts when necessary for your safety</li>
                    <li>Legal authorities when required by law</li>
                    <li>Business partners for joint services (with your consent)</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="font-display text-3xl font-semibold text-luxury-navy mb-4">
                  Data Security
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    We implement comprehensive security measures to protect your information:
                  </p>
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li>SSL encryption for all data transmission</li>
                    <li>Secure servers with restricted access</li>
                    <li>Regular security audits and updates</li>
                    <li>Staff training on data protection protocols</li>
                    <li>Incident response procedures for any security breaches</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="font-display text-3xl font-semibold text-luxury-navy mb-4">
                  Your Rights
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    You have the right to:
                  </p>
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li>Access and review your personal information</li>
                    <li>Request corrections to inaccurate data</li>
                    <li>Delete your personal information (subject to legal requirements)</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Request data portability</li>
                    <li>File a complaint with data protection authorities</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="font-display text-3xl font-semibold text-luxury-navy mb-4">
                  Cookies and Tracking
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Our website uses cookies to enhance your experience. These include:
                  </p>
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li>Essential cookies for website functionality</li>
                    <li>Analytics cookies to improve our services</li>
                    <li>Marketing cookies for personalized content</li>
                    <li>Third-party cookies from trusted partners</li>
                  </ul>
                  <p>
                    You can manage cookie preferences through your browser settings.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-display text-3xl font-semibold text-luxury-navy mb-4">
                  Data Retention
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    We retain your information for as long as necessary to:
                  </p>
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li>Fulfill the purposes outlined in this policy</li>
                    <li>Comply with legal and regulatory requirements</li>
                    <li>Resolve disputes and enforce agreements</li>
                    <li>Provide ongoing customer service</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="font-display text-3xl font-semibold text-luxury-navy mb-4">
                  Contact Us
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
                  </p>
                  <div className="bg-secondary/30 p-6 rounded-lg">
                    <p><strong>Email:</strong> privacy@luxora.com</p>
                    <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                    <p><strong>Address:</strong> 123 Luxury Avenue, Beverly Hills, CA 90210</p>
                    <p><strong>Data Protection Officer:</strong> dpo@luxora.com</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-display text-3xl font-semibold text-luxury-navy mb-4">
                  Policy Updates
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify you of significant changes through email or website notifications. Your continued use of our services after such changes constitutes acceptance of the updated policy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;