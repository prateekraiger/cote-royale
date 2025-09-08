import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Bounded } from "../../components/Bounded";
import { PrismicRichText } from "@prismicio/react";
import { RevealText } from "@/components/RevealText";
import { FadeIn } from "@/components/FadeIn";
import { FragranceDisplay } from "./FragranceDisplay";

/**
 * Props for `FragnanceList`.
 */
export type FragnanceListProps =
  SliceComponentProps<Content.FragnanceListSlice>;

/**
 * Component for "FragnanceList" Slices.
 */
const FragnanceList: FC<FragnanceListProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="space-y-6 sm:space-y-8 bg-black py-12 sm:py-16 md:py-24 text-center text-white"
    >
      <div className="mx-auto space-y-6 sm:space-y-8">
        <FadeIn className="translate-y-8 opacity-0" vars={{ duration: 0.8 }}>
          <p className="text-xs sm:text-sm font-light tracking-[0.15em] sm:tracking-[0.2em] uppercase">
            {slice.primary.eyebrow}{" "}
          </p>
        </FadeIn>

        <RevealText
          field={slice.primary.heading}
          as="h2"
          id={`fragrance-list-heading-${slice.id}`}
          align="center"
          duration={1.5}
          staggerAmount={0.3}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-display uppercase leading-tight"
        />

        <FadeIn className="translate-y-8 opacity-0" vars={{ duration: 1, delay: 0.5 }}>
          <div className="mx-auto max-w-sm sm:max-w-lg md:max-w-2xl text-base sm:text-lg text-balance text-grey-300 px-4">
            <PrismicRichText field={slice.primary.body} />
          </div>
        </FadeIn>

        <div className="grid mt-8 sm:mt-12 grid-cols-1 gap-8 sm:gap-12">
          {slice.primary.fragrances.map((item) => {
            if (isFilled.contentRelationship(item.fragrance)) {
              return (
                <FragranceDisplay
                  key={item.fragrance.id}
                  id={item.fragrance.id}
                />
              );
            }
          })}
        </div>
      </div>
    </Bounded>
  );
};

export default FragnanceList;
