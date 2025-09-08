import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { Bounded } from "@/components/Bounded";
import { FadeIn } from "@/components/FadeIn";
import { RevealText } from "@/components/RevealText";
import { ButtonLink } from "@/components/ButtonLink";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero: FC<HeroProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative min-h-screen overflow-hidden bg-neutral-950"
    >
      <FadeIn
        vars={{ scale: 1, opacity: 0.5 }}
        className="absolute inset-0 motion-safe:scale-125 opacity-0"
      >
        <PrismicNextImage
          field={slice.primary.image}
          alt=""
          priority
          fill
          className="object-cover motion-reduce opacity-50"
        />
      </FadeIn>

      <div className="flex relative h-screen flex-col justify-center px-4 sm:px-6">
        <RevealText
          field={slice.primary.heading}
          id="hero-heading"
          className="max-w-xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight sm:leading-none text-neutral-50 font-display"
          staggerAmount={0.2}
          duration={1.6}
          as="h1"
        ></RevealText>

        <FadeIn
          className="mt-4 sm:mt-6 max-w-sm sm:max-w-md text-base sm:text-lg text-neutral-100 tranlate-y-8"
          vars={{ delay: 1, duration: 1.3 }}
        >
          <PrismicRichText field={slice.primary.body} />
        </FadeIn>

        <FadeIn
          className="mt-6 sm:mt-8 translate-y-5"
          vars={{ delay: 1.5, duration: 1.1 }}
        >
          {slice.primary.button.map((link) => (
            <ButtonLink
              key={link.key}
              field={link}
              className="w-full sm:w-fit"
              variant="Secondary"
            />

            // <PrismicNextLink
            //
            //   className={clsx(
            //     "inline-flex items-center justify-center px-12 py-4 text-center font-extrabold tracking-wider uppercase transition-colors duration-300",
            //     link.variant === "Secondary"
            //       ? "border border-white text-white hover:bg-white/20"
            //       : "bg-white text-black hover:bg-white/80",
            //     "w-fit",
            //   )}
            // />
          ))}
        </FadeIn>
      </div>
    </Bounded>
  );
};

export default Hero;
