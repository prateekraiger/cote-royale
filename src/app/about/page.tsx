import { Metadata } from "next";
import { Bounded } from "@/components/Bounded";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "About | Côte Royale Paris",
  description: "Discover the story behind Côte Royale Paris and our commitment to luxury fragrances.",
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
            Crafting exceptional fragrances that capture the essence of luxury and sophistication since our founding.
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
                Born from a passion for olfactory artistry, Côte Royale Paris represents the pinnacle of French perfumery tradition. Our journey began with a simple vision: to create fragrances that tell stories and evoke emotions.
              </p>
              <p>
                Each fragrance in our collection is meticulously crafted using the finest ingredients sourced from around the world. From the sun-drenched fields of Grasse to the exotic spice markets of the East, we seek only the most exceptional raw materials.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn className="relative">
            <div className="aspect-square bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-400">
                <div className="w-24 h-24 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🌹</span>
                </div>
                <p>Artisanal Craftsmanship</p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Values Section */}
        <FadeIn className="bg-white/5 rounded-lg p-8 md:p-12">
          <h2 className="font-display text-4xl md:text-5xl text-white text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="font-display text-2xl text-white">Excellence</h3>
              <p className="text-gray-300">
                We pursue perfection in every bottle, ensuring each fragrance meets our exacting standards.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="font-display text-2xl text-white">Sustainability</h3>
              <p className="text-gray-300">
                Committed to ethical sourcing and environmental responsibility in all our practices.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="font-display text-2xl text-white">Artistry</h3>
              <p className="text-gray-300">
                Each fragrance is a work of art, blending tradition with contemporary innovation.
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
              Three distinct fragrances, each representing a different facet of luxury and elegance.
            </p>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <FadeIn className="bg-white/5 rounded-lg p-6 space-y-4">
              <h3 className="font-display text-2xl text-white">Ignis</h3>
              <p className="text-gray-300">
                Bold and seductive, igniting passion with every note.
              </p>
            </FadeIn>
            
            <FadeIn className="bg-white/5 rounded-lg p-6 space-y-4">
              <h3 className="font-display text-2xl text-white">Aqua</h3>
              <p className="text-gray-300">
                Fresh and invigorating, like a breath of ocean air.
              </p>
            </FadeIn>
            
            <FadeIn className="bg-white/5 rounded-lg p-6 space-y-4">
              <h3 className="font-display text-2xl text-white">Terra</h3>
              <p className="text-gray-300">
                Grounded and sophisticated, rooted in natural elegance.
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </Bounded>
  );
}