const Terms = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-64 flex items-center justify-center overflow-hidden bg-gradient-luxury">
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-4">
            Terms of Service
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90">
            Terms and conditions for your stay at Luxora Hotel
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <div className="text-sm text-muted-foreground mb-8">
              Last updated: December 2024
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="font-display text-3xl font-semibold text-luxury-navy mb-4">
                  Welcome to Luxora Hotel
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    These Terms of Service ("Terms") govern your use of Luxora Hotel's services, facilities, and website. By making a reservation, visiting our property, or using our services, you agree to be bound by these Terms.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-display text-3xl font-semibold text-luxury-navy mb-4">
                  Reservations and Bookings
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <h3 className="text-xl font-semibold text-luxury-navy">Booking Confirmation</h3>
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li>All reservations are subject to availability</li>
                    <li>A valid credit card is required to secure your booking</li>
                    <li>Confirmation emails will be sent within 24 hours</li>
                    <li>Special requests are noted but not guaranteed</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-luxury-navy mt-6">Payment Terms</h3>
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li>Full payment is required upon booking for certain rates</li>
                    <li>Prepaid bookings are non-refundable unless specified</li>
                    <li>Additional charges may apply for services and amenities</li>
                    <li>All prices are subject to applicable taxes and fees</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="font-display text-3xl font-semibold text-luxury-navy mb-4">
                  Check-in and Check-out
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li><strong>Check-in time:</strong> 3:00 PM</li>
                    <li><strong>Check-out time:</strong> 12:00 PM</li>
                    <li>Early check-in and late check-out are subject to availability and additional charges</li>
                    <li>Valid photo identification is required at check-in</li>
                    <li>Credit card authorization may be required for incidentals</li>
                    <li>Guests must be 18 years or older to check in</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="font-display text-3xl font-semibold text-luxury-navy mb-4">
                  Cancellation Policy
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <h3 className="text-xl font-semibold text-luxury-navy">Standard Reservations</h3>
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li>Free cancellation up to 24 hours before arrival</li>
                    <li>Cancellations within 24 hours will be charged one night's stay</li>
                    <li>No-shows will be charged the full stay amount</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-luxury-navy mt-6">Special Rates and Packages</h3>
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li>Non-refundable rates cannot be cancelled or modified</li>
                    <li>Group bookings may have different cancellation terms</li>
                    <li>Holiday and peak season bookings may have stricter policies</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="font-display text-3xl font-semibold text-luxury-navy mb-4">
                  Guest Conduct and Responsibilities
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <h3 className="text-xl font-semibold text-luxury-navy">Behavior Standards</h3>
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li>Guests must respect other guests and hotel staff</li>
                    <li>Disruptive behavior may result in eviction without refund</li>
                    <li>Smoking is prohibited in all rooms and designated areas only</li>
                    <li>Pets are welcome in designated pet-friendly rooms only</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-luxury-navy mt-6">Property Damage</h3>
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li>Guests are responsible for damage to hotel property</li>
                    <li>Additional cleaning fees may apply for excessive mess</li>
                    <li>Lost or damaged items will be charged at replacement cost</li>
                    <li>Security deposits may be required for certain room types</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="font-display text-3xl font-semibold text-luxury-navy mb-4">
                  Hotel Services and Amenities
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <h3 className="text-xl font-semibold text-luxury-navy">Service Hours</h3>
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li>Concierge services: 24/7</li>
                    <li>Room service: 24/7</li>
                    <li>Spa and wellness: 6:00 AM - 10:00 PM</li>
                    <li>Fitness center: 24/7</li>
                    <li>Pool and recreation: 6:00 AM - 10:00 PM</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-luxury-navy mt-6">Service Availability</h3>
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li>Services may be modified or suspended without notice</li>
                    <li>Seasonal services may have limited availability</li>
                    <li>Reservations are required for spa and dining services</li>
                    <li>Some amenities may require additional fees</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="font-display text-3xl font-semibold text-luxury-navy mb-4">
                  Privacy and Data Protection
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Your privacy is important to us. Please review our Privacy Policy for information about how we collect, use, and protect your personal information. By using our services, you consent to our data practices as described in our Privacy Policy.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-display text-3xl font-semibold text-luxury-navy mb-4">
                  Limitation of Liability
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    While we strive to provide exceptional service, Luxora Hotel's liability is limited to the amount paid for your stay. We are not responsible for:
                  </p>
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li>Loss or damage to personal property</li>
                    <li>Injuries sustained on the property (except due to negligence)</li>
                    <li>Inconvenience due to construction or maintenance</li>
                    <li>Weather-related service disruptions</li>
                    <li>Third-party service provider issues</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="font-display text-3xl font-semibold text-luxury-navy mb-4">
                  Force Majeure
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Luxora Hotel shall not be liable for any failure to perform due to circumstances beyond our reasonable control, including but not limited to natural disasters, government actions, pandemics, or other emergencies. In such cases, we will work with guests to reschedule or provide alternatives when possible.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-display text-3xl font-semibold text-luxury-navy mb-4">
                  Governing Law
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    These Terms are governed by the laws of California, United States. Any disputes will be resolved in the courts of Los Angeles County, California.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-display text-3xl font-semibold text-luxury-navy mb-4">
                  Contact Information
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    For questions regarding these Terms of Service, please contact us:
                  </p>
                  <div className="bg-secondary/30 p-6 rounded-lg">
                    <p><strong>Email:</strong> legal@luxora.com</p>
                    <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                    <p><strong>Address:</strong> 123 Luxury Avenue, Beverly Hills, CA 90210</p>
                    <p><strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM PST</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-display text-3xl font-semibold text-luxury-navy mb-4">
                  Changes to Terms
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Luxora Hotel reserves the right to modify these Terms at any time. Updated Terms will be posted on our website with the effective date. Continued use of our services after changes constitutes acceptance of the new Terms.
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

export default Terms;