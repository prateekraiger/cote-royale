import { Metadata } from "next";
import { Bounded } from "@/components/Bounded";
import { FadeIn } from "@/components/FadeIn";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Côte Royale Paris",
  description:
    "Discover the story behind Côte Royale Paris and our commitment to luxury fragrances.",
};

export default function AboutPage() {
  return (
    <Bounded className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl space-y-16">
        {/* Hero Section */}
        <FadeIn className="text-center space-y-8">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white">
            About Côte Royale Paris
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Crafting exceptional fragrances that capture the essence of luxury
            and sophistication since our founding.
          </p>
        </FadeIn>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn className="space-y-6">
            <h2 className="font-display text-4xl md:text-5xl text-white">
              Our Story
            </h2>
            <div className="space-y-4 text-gray-300 text-lg">
              <p>
                Born from a passion for olfactory artistry, Côte Royale Paris
                represents the pinnacle of French perfumery tradition. Our
                journey began with a simple vision: to create fragrances that
                tell stories and evoke emotions.
              </p>
              <p>
                Each fragrance in our collection is meticulously crafted using
                the finest ingredients sourced from around the world. From the
                sun-drenched fields of Grasse to the exotic spice markets of the
                East, we seek only the most exceptional raw materials.
              </p>
            </div>
          </FadeIn>

          <FadeIn className="relative">
            <div className="aspect-square rounded-lg overflow-hidden">
              <Image
                src="/about_img.jpeg"
                alt="Côte Royale Paris Craftsmanship"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>

        {/* Why Côte Royale Section */}
        <FadeIn className="bg-white/5 rounded-lg p-8 md:p-12">
          <h2 className="font-display text-4xl md:text-5xl text-white text-center mb-12">
            Why Côte Royale?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-16 h-16 mb-4 text-white mx-auto"
              >
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <path d="M21 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
                <path d="M12 12V3" />
                <path d="M15 15L12 12" />
                <path d="M9 15L12 12" />
                <path d="M18 18L15 15" />
              </svg>
              <h3 className="font-display text-xl text-white uppercase tracking-wide">
                Cruelty Free
              </h3>
              <p className="text-gray-300 text-sm">
                Kindness in every bottle. Our commitment to cruelty-free
                products.
              </p>
            </div>

            <div className="text-center space-y-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-16 h-16 mb-4 text-white mx-auto"
              >
                <path d="M12 2a3 3 0 0 0-3 3v7c0 1.66 1.34 3 3 3s3-1.34 3-3V5a3 3 0 0 0-3-3z" />
                <path d="M2 13.5C2 17 6.5 21.5 12 21.5S22 17 22 13.5" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              <h3 className="font-display text-xl text-white uppercase tracking-wide">
                Fragrance Forward
              </h3>
              <p className="text-gray-300 text-sm">
                Luxurious & imported perfume oils in every product
              </p>
            </div>

            <div className="text-center space-y-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-16 h-16 mb-4 text-white mx-auto"
              >
                <path d="M20 6H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z" />
                <path d="M10 16a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2z" />
                <path d="M10 12V4" />
                <path d="M14 12V4" />
              </svg>
              <h3 className="font-display text-xl text-white uppercase tracking-wide">
                Affordable Luxury
              </h3>
              <p className="text-gray-300 text-sm">
                Offering Premium Quality and Elegance at a Reasonable Price
              </p>
            </div>

            <div className="text-center space-y-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-16 h-16 mb-4 text-white mx-auto"
              >
                <circle cx="12" cy="5" r="3" />
                <path d="M12 22V8" />
                <path d="M15 9l-3 3-3-3" />
                <line x1="12" y1="18" x2="12" y2="22" />
                <line x1="12" y1="12" x2="16" y2="16" />
                <line x1="12" y1="12" x2="8" y2="16" />
                <path d="M19 12h3" />
                <path d="M21 9v6" />
              </svg>
              <h3 className="font-display text-xl text-white uppercase tracking-wide">
                Gender Neutral
              </h3>
              <p className="text-gray-300 text-sm">
                Elevate your self-care routine with bath, body and personal care
                for all
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Collection Section */}
        <div className="text-center space-y-8">
          <FadeIn>
            <h2 className="font-display text-4xl md:text-5xl text-white">
              Our Collection
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Three distinct fragrances, each representing a different facet of
              luxury and elegance.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <FadeIn className="bg-white/5 rounded-lg p-6 space-y-4 group hover:bg-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/20 hover:-translate-y-2">
              <Link href="/fragrance/ignis" className="block">
                <div className="relative w-32 h-48 mx-auto mb-4 overflow-hidden">
                  <Image
                    src="/ignis-bottle.png"
                    alt="Ignis Fragrance Bottle"
                    fill
                    className="object-contain group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <h3 className="font-display text-2xl text-white group-hover:text-red-300 transition-colors duration-300 group-hover:scale-105 transform">
                  Ignis
                </h3>
                <p className="text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
                  Bold and seductive, igniting passion with every note.
                </p>
              </Link>
            </FadeIn>

            <FadeIn className="bg-white/5 rounded-lg p-6 space-y-4 group hover:bg-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2">
              <Link href="/fragrance/aqua" className="block">
                <div className="relative w-32 h-48 mx-auto mb-4 overflow-hidden">
                  <Image
                    src="/aqua-bottle.png"
                    alt="Aqua Fragrance Bottle"
                    fill
                    className="object-contain group-hover:scale-110 group-hover:-rotate-2 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <h3 className="font-display text-2xl text-white group-hover:text-blue-300 transition-colors duration-300 group-hover:scale-105 transform">
                  Aqua
                </h3>
                <p className="text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
                  Fresh and invigorating, like a breath of ocean air.
                </p>
              </Link>
            </FadeIn>

            <FadeIn className="bg-white/5 rounded-lg p-6 space-y-4 group hover:bg-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/20 hover:-translate-y-2">
              <Link href="/fragrance/terra" className="block">
                <div className="relative w-32 h-48 mx-auto mb-4 overflow-hidden">
                  <Image
                    src="/aqua-bottle.png"
                    alt="Terra Fragrance Bottle"
                    fill
                    className="object-contain group-hover:scale-110 group-hover:rotate-1 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <h3 className="font-display text-2xl text-white group-hover:text-green-300 transition-colors duration-300 group-hover:scale-105 transform">
                  Terra
                </h3>
                <p className="text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
                  Grounded and sophisticated, rooted in natural elegance.
                </p>
              </Link>
            </FadeIn>
          </div>
        </div>
      </div>
    </Bounded>
  );
}
