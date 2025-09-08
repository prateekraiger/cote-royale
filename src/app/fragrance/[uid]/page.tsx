import { notFound } from "next/navigation";
import { PrismicRichText, PrismicText } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { Bounded } from "@/components/Bounded";
import { PrismicNextImage } from "@prismicio/next";
import { FragranceAttributes } from "@/components/FragranceAttributes";
import { formatPrice } from "@/utils/formatters";
import { HiStar } from "react-icons/hi2";
import { OtherFragrances } from "../../../components/OtherFragrances";
import { FadeIn } from "@/components/FadeIn";
export default async function Page({ params }: { params: Promise<{ uid: string }> }) {
  const { uid } = await params;
  const client = createClient();
  const page = await client.getByUID("fragnance", uid).catch(() => notFound());

  return (
      <Bounded className="py-6 sm:py-8 md:py-10">
        <div className="grid grid-cols-1 items-start gap-6 sm:gap-8 md:gap-10 pb-6 sm:pb-8 md:pb-10 lg:grid-cols-2 lg:items-center">
          <div className="relative mb-8 sm:mb-12 md:mb-14 flex justify-center pb-6 sm:pb-8 md:pb-10 order-1 lg:order-none">
            <PrismicNextImage
              field={page.data.bottle_image}
              width={600}
              height={600}
              priority
              className="absolute top-[90%] -scale-y-100 [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0)_70%,rgba(0,0,0,.15)_100%)]"
              alt=""
            />
            <PrismicNextImage
              field={page.data.bottle_image}
              width={600}
              height={600}
              priority
              className="relative max-w-[280px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] w-full h-auto"
              alt=""
            />
          </div>
          {/* Product info section */}

          <div className="text-white order-2 lg:order-none">
            <h1 className="font-display mb-3 sm:mb-4 border-b border-neutral-700 pb-2 sm:pb-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
              <PrismicText field={page.data.title} fallback="Fragrance" />
            </h1>

            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              <p className="text-sm sm:text-base font-semibold">Eau de Parfum Spray</p>

              <div className="text-sm sm:text-base">
                <PrismicRichText field={page.data.description} />
              </div>

              <FragranceAttributes
                mood={page.data.mood}
                scentProfile={page.data.scent_profile}
              />
              <p className="mt-6 sm:mt-8 md:mt-10 text-2xl sm:text-3xl font-light">
                {formatPrice(page.data.price)}
              </p>

              <button className="w-full bg-white py-3 sm:py-4 font-medium text-black uppercase transition duration-200 hover:bg-neutral-200 text-sm sm:text-base">
                Add to Bag
              </button>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 border-t border-neutral-700 pt-4 sm:pt-6 text-sm sm:text-base">
                <a href="#" className="hover:text-neutral-300 order-2 sm:order-1">
                  763 total reviews
                </a>

                <div className="flex items-center gap-2 order-1 sm:order-2">
                  <div className="flex">
                    {[...Array(4)].map((_, index) => (
                      <HiStar className="size-4 sm:size-5 text-white" key={index} />
                    ))}
                    <HiStar className="size-4 sm:size-5 text-white/50" />
                  </div>
                  <span>4.4/5</span>
                </div>
              </div>

              {/* Product Information */}
              <FadeIn className="mt-6 sm:mt-8 space-y-4 sm:space-y-6 border-t border-neutral-700 pt-4 sm:pt-6">
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-500/20 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <span className="text-green-400 text-xs sm:text-sm">🚚</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">
                        Shipping
                      </h4>
                      <p className="text-gray-300 text-xs sm:text-sm">
                        Free Shipping on all prepaid orders pan India. ₹50 extra
                        for Cash on Delivery
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-500/20 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <span className="text-blue-400 text-xs sm:text-sm">💳</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">
                        Payment
                      </h4>
                      <p className="text-gray-300 text-xs sm:text-sm">
                        Your payment information is processed securely. We do
                        not store credit card details nor have access to your
                        credit card information.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-purple-500/20 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <span className="text-purple-400 text-xs sm:text-sm">🔒</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">
                        Security
                      </h4>
                      <p className="text-gray-300 text-xs sm:text-sm">
                        This website is encrypted. We take your security very
                        seriously. All transactions are powered by Razorpay.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>

        <OtherFragrances currentFragranceUid={uid} />
      </Bounded>
  );
}
