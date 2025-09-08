import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { Bounded } from "@/components/Bounded";
import { FadeIn } from "@/components/FadeIn";
import { createClient } from "@/prismicio";
import { formatPrice } from "@/utils/formatters";
import { ButtonLink } from "@/components/ButtonLink";

/**
 * Props for `ProductFeature`.
 */
export type ProductFeatureProps =
  SliceComponentProps<Content.ProductFeatureSlice>;

/**
 * Component for "ProductFeature" Slices.
 */
const ProductFeature: FC<ProductFeatureProps> = async ({ slice }) => {
  const client = createClient();
  const fragrance = isFilled.contentRelationship(slice.primary.fragrance)
    ? await client.getByID<Content.FragnanceDocument>(
        slice.primary.fragrance.id,
      )
    : null;

  const formattedPrice = formatPrice(fragrance?.data.price);

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="overflow-hidden bg-black py-16 text-white md:py-24"
    >
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <FadeIn
          className="translate-y-16 opacity-0"
          vars={{ duration: 1.2 }}
        >
          <PrismicNextImage
            field={slice.primary.image}
            className="h-auto w-full object-cover rounded-lg"
            alt=""
          />
        </FadeIn>

        <div className="grid grid-rows-2 gap-8">
          <FadeIn 
            className="translate-y-16 opacity-0 space-y-6 self-start bg-white/10 p-8 sm:p-10 rounded-lg"
            vars={{ duration: 1, delay: 0.3 }}
          >
            <h2 className="text-3xl leading-tight font-semibold md:text-4xl">
              <PrismicText field={slice.primary.heading} />
            </h2>

            <div className="text-base max-w-lg text-gray-300">
              <PrismicRichText field={slice.primary.description} />
            </div>
          </FadeIn>

          <FadeIn
            className="opacity-0 relative translate-y-16 self-end bg-white/10 rounded-lg"
            vars={{ duration: 1.2, delay: 0.6 }}
          >
            <PrismicNextImage
              field={fragrance?.data.bottle_image}
              className="mx-auto w-1/2 -mt-16 sm:-mt-20 md:-mt-24 lg:-mt-32 -rotate-12"
              alt=""
            />
            <div className="flex justify-between items-end p-8 sm:p-10 pt-4">
              <div className="space-y-2">
                <h3 className="font-display text-3xl sm:text-4xl">
                  <PrismicText
                    field={fragrance?.data.title}
                    fallback="/Fragnance"
                  />
                </h3>

                <p className="text-gray-400">Eau De Perfume</p>

                <ButtonLink
                  href={fragrance ? `/fragrance/${fragrance.uid}` : "#"}
                  variant="Secondary"
                  className="mt-4"
                >
                  Shop Now
                </ButtonLink>
              </div>

              <p className="text-2xl sm:text-3xl font-medium text-gray-100" aria-label="Product Price">
                <span>{formattedPrice}</span>
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </Bounded>
  );
};

export default ProductFeature;
