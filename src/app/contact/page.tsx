import { Metadata } from "next";
import { Bounded } from "@/components/Bounded";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Contact | Côte Royale Paris",
  description:
    "Get in touch with Côte Royale Paris. We're here to help with your luxury fragrance needs.",
};

export default function ContactPage() {
  return (
    <Bounded className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl space-y-16">
        {/* Hero Section */}
        <FadeIn className="text-center space-y-8">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We&apos;d love to hear from you. Reach out for any questions about our
            luxury fragrances or personalized recommendations.
          </p>
        </FadeIn>

        {/* Contact Form and Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <FadeIn className="bg-white/5 rounded-lg p-8 space-y-6">
            <h2 className="font-display text-3xl text-white mb-6">
              Send us a Message
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="product">Product Information</option>
                  <option value="order">Order Support</option>
                  <option value="partnership">Partnership</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent resize-none"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-white text-black font-medium py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                Send Message
              </button>
            </form>
          </FadeIn>

          {/* Contact Information */}
          <FadeIn className="space-y-8">
            <div>
              <h2 className="font-display text-3xl text-white mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Whether you&apos;re seeking the perfect fragrance or have questions
                about our collection, our team is here to assist you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 text-white mt-1 flex-shrink-0"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div>
                  <h3 className="font-medium text-white mb-1">Address</h3>
                  <p className="text-gray-300">
                    123 Rue de la Paix<br />
                    75001 Paris, France
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 text-white mt-1 flex-shrink-0"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <div>
                  <h3 className="font-medium text-white mb-1">Phone</h3>
                  <p className="text-gray-300">+33 1 42 86 87 88</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 text-white mt-1 flex-shrink-0"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <div>
                  <h3 className="font-medium text-white mb-1">Email</h3>
                  <p className="text-gray-300">contact@coteroyaleparis.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 text-white mt-1 flex-shrink-0"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12,6 12,12 16,14" />
                </svg>
                <div>
                  <h3 className="font-medium text-white mb-1">Business Hours</h3>
                  <p className="text-gray-300">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </Bounded>
  );
}
