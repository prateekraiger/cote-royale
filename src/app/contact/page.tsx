import { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Contact | Côte Royale Paris",
  description:
    "Get in touch with Côte Royale Paris. We're here to help with your luxury fragrance needs.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white grid grid-cols-1 lg:grid-cols-2">
      {/* Contact Form Section */}
      <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
        <FadeIn>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl mb-8">
            Contact Us
          </h1>
          <p className="text-lg text-gray-300 mb-12 max-w-md">
            Have a question or a comment? Use the form below to send us a
            message.
          </p>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 bg-transparent border-b border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors duration-300"
                placeholder="Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 bg-transparent border-b border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors duration-300"
                placeholder="Email"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-3 bg-transparent border-b border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors duration-300 resize-none"
                placeholder="Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-white text-black font-bold py-4 px-6 hover:bg-gray-200 transition-colors duration-300 text-lg uppercase tracking-wider"
            >
              Send Message
            </button>
          </form>
        </FadeIn>
      </div>

      {/* Contact Info Section */}
      <div className="relative hidden lg:block">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/contact.png')" }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative flex flex-col justify-center h-full p-16">
          <FadeIn className="space-y-8">
            <div className="space-y-2">
              <h3 className="font-display text-3xl">Visit Us</h3>
              <p className="text-gray-300 text-lg">
                123 Rue de la Paix
                <br />
                75001 Paris, France
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-display text-3xl">Email Us</h3>
              <p className="text-gray-300 text-lg">
                prateekraiger098@gmail.com
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-display text-3xl">Call Us</h3>
              <p className="text-gray-300 text-lg">+91 9407 672 894</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
