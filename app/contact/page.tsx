"use client"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <main>
      <Navigation />
      <div className="pt-20">
        {/* Header */}
        <section className="bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-2">Contact Us</h1>
            <p className="text-lg opacity-90">Get in touch to start planning your African adventure</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="font-serif text-2xl font-bold mb-6">Contact Information</h2>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-primary-foreground">
                    <Phone className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-muted-foreground">+94 11 234 5678</p>
                  <p className="text-sm text-muted-foreground">Mon-Fri: 9:00 AM - 6:00 PM IST</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent text-accent-foreground">
                    <Mail className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-muted-foreground">info@safariadventures.lk</p>
                  <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-secondary text-secondary-foreground">
                    <MapPin className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Headquarters</h3>
                  <p className="text-muted-foreground">123 Galle Road</p>
                  <p className="text-muted-foreground">Colombo 03, Sri Lanka</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/80 text-primary-foreground">
                    <Clock className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Business Hours</h3>
                  <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-muted-foreground">Saturday: 10:00 AM - 4:00 PM</p>
                  <p className="text-muted-foreground">Sunday: Closed</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4 border-t border-border">
                <h3 className="font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
                    aria-label="Facebook"
                  >
                    f
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
                    aria-label="Instagram"
                  >
                    ig
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
                    aria-label="Twitter"
                  >
                    x
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
                    aria-label="LinkedIn"
                  >
                    in
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-8 text-center">Find Us on the Map</h2>
            <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.798467128354!2d79.84759731477394!3d6.914744995009841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259698e5c1d0d%3A0x7a4e0f0e0e0e0e0e!2sGalle%20Road%2C%20Colombo%2003%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1234567890"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <details className="bg-card p-4 rounded-lg border border-border group">
                <summary className="cursor-pointer font-semibold flex justify-between items-center">
                  How far in advance should I book my safari?
                  <span className="text-primary group-open:rotate-180 transition-transform">↓</span>
                </summary>
                <p className="text-muted-foreground mt-3 text-sm">
                  We recommend booking 2-3 months in advance, especially for peak seasons. However, we can accommodate
                  last-minute bookings subject to availability. Contact us for special requests.
                </p>
              </details>

              <details className="bg-card p-4 rounded-lg border border-border group">
                <summary className="cursor-pointer font-semibold flex justify-between items-center">
                  What is included in the safari package?
                  <span className="text-primary group-open:rotate-180 transition-transform">↓</span>
                </summary>
                <p className="text-muted-foreground mt-3 text-sm">
                  Packages include accommodation, meals, transportation, game drives with expert guides, and park
                  entrance fees. International flights and travel insurance are not included but can be arranged.
                </p>
              </details>

              <details className="bg-card p-4 rounded-lg border border-border group">
                <summary className="cursor-pointer font-semibold flex justify-between items-center">
                  Do you offer group discounts?
                  <span className="text-primary group-open:rotate-180 transition-transform">↓</span>
                </summary>
                <p className="text-muted-foreground mt-3 text-sm">
                  Yes! Groups of 6 or more receive a 10-15% discount. Larger groups may qualify for additional
                  discounts. Please contact our sales team for a custom quote.
                </p>
              </details>

              <details className="bg-card p-4 rounded-lg border border-border group">
                <summary className="cursor-pointer font-semibold flex justify-between items-center">
                  What is your cancellation policy?
                  <span className="text-primary group-open:rotate-180 transition-transform">↓</span>
                </summary>
                <p className="text-muted-foreground mt-3 text-sm">
                  Cancellations made 30+ days before departure receive a full refund. Cancellations 15-29 days prior
                  incur a 25% fee. Less than 15 days: 50% fee. No refunds within 7 days of departure.
                </p>
              </details>

              <details className="bg-card p-4 rounded-lg border border-border group">
                <summary className="cursor-pointer font-semibold flex justify-between items-center">
                  Are meals and activities included?
                  <span className="text-primary group-open:rotate-180 transition-transform">↓</span>
                </summary>
                <p className="text-muted-foreground mt-3 text-sm">
                  All meals at the lodge and game drives are included. Optional activities like hot air balloon rides or
                  cultural visits are available at additional cost.
                </p>
              </details>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
