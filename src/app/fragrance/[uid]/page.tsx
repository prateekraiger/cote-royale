import { Metadata } from "next";
import { notFound } from "next/navigation";
import { asImageSrc, asText } from "@prismicio/client";
import { PrismicRichText, PrismicText } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { Bounded } from "@/components/Bounded";
import { PrismicNextImage } from "@prismicio/next";
import { FragranceAttributes } from "@/components/FragranceAttributes";
import { formatPrice } from "@/utils/formatters";
import { HiStar } from "react-icons/hi2";
import { OtherFragrances } from "../../../components/OtherFragrances";

type Params = { uid: string };

export default async function Page({ params }: { params: Promise<Params> }) {
  const { uid } = await params;
  const client = createClient();
  const page = await client.getByUID("fragnance", uid).catch(() => notFound());

  return (
    <Bounded className="py-10">
      <div className="grid grid-cols-1 items-center gap-10 pb-10 lg:grid-cols-2">
        <div className="relative mb-14 flex justify-center pb-10">
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
            className="relative"
            alt=""
          />
        </div>
        {/* Product info section */}

        <div className="text-white">
          <h1 className="font-display mb-4 border-b border-neutral-700 pb-2 text-4xl md:text-5xl">
            <PrismicText field={page.data.title} fallback="Fragrance" />
          </h1>

          <div className="space-y-6">
            <p className="text-md font-semibold">Eau de Parfum Spray</p>

            <PrismicRichText field={page.data.description} />

            <FragranceAttributes
              mood={page.data.mood}
              scentProfile={page.data.scent_profile}
            />
            <p className="mt-10 text-3xl font-light">
              {formatPrice(page.data.price)}
            </p>

            <button className="w-full bg-white py-3 font-medium text-black uppercase transition duration-200 hover:bg-neutral-200">
              Add to Bag
            </button>

            <div className="flex items-center gap-4 border-t border-neutral-700 pt-6">
              <a href="#" className="hover:text-neutral-300">
                763 total reviews
              </a>

              <div className="flex">
                {[...Array(4)].map((_, index) => (
                  <HiStar className="size-5 text-white" key={index} />
                ))}
                <HiStar className="size-5 text-white/50" />
              </div>
              <span>4.4/5</span>
            </div>

            {/* Product Information */}
            <div className="mt-8 space-y-6 border-t border-neutral-700 pt-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center mt-1">
                    <span className="text-green-400 text-sm">🚚</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Shipping</h4>
                    <p className="text-gray-300 text-sm">
                      Free Shipping on all prepaid orders pan India. ₹50 extra for Cash on Delivery
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center mt-1">
                    <span className="text-blue-400 text-sm">💳</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Payment</h4>
                    <p className="text-gray-300 text-sm">
                      Your payment information is processed securely. We do not store credit card details nor have access to your credit card information.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center mt-1">
                    <span className="text-purple-400 text-sm">🔒</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Security</h4>
                    <p className="text-gray-300 text-sm">
                      This website is encrypted. We take your security very seriously. All transactions are powered by Razorpay.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <OtherFragrances currentFragranceUid={uid} />
    </Bounded>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { uid } = await params;
  const client = createClient();
  const page = await client.getByUID("fragnance", uid).catch(() => notFound());

  const title = page.data.title ? asText(page.data.title) : "Fragrance";
  const metaImage = page.data.meta_image
    ? asImageSrc(page.data.meta_image)
    : null;

  return {
    title: `${title} | Côte Royale Paris`,
    description: `Discover ${title}, the newest fragrance from Côte Royale Paris.`,
    openGraph: {
      images: metaImage ? [{ url: metaImage }] : [],
    },
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("fragnance");

  return pages.map((page) => ({ uid: page.uid }));
}
