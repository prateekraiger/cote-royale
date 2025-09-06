import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { FadeIn } from "@/components/FadeIn";
import { RevealText } from "@/components/RevealText";
import { ButtonLink } from "@/components/ButtonLink";

/**
 * Props for `CallToAction`.
 */
export type CallToActionProps = SliceComponentProps<Content.CallToActionSlice>;

/**
 * Component for "CallToAction" Slices.
 */
const CallToAction: FC<CallToActionProps> = ({ slice }) => {
  return (
    <div
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-[url('/background.avif')] bg-cover bg-center text-gray-50"
    >
      <div className="relative z-10 mx-auto w-full max-w-4xl space-y-8 px-4 text-center">
        <FadeIn
          className="translate-y-2 text-sm font-light tracking-[.2em] uppercase"
          vars={{ duration: 0.8 }}
        >
          {slice.primary.eyebrow}
        </FadeIn>

        <RevealText
          id="cta-heading"
          field={slice.primary.heading}
          as="h2"
          className="font-display mx-auto max-w-3xl text-5xl text-balance sm:text-6xl md:text-7xl "
          align="center"
          staggerAmount={0.1}
          duration={0.8}
        />

        <FadeIn
          className="mx-auto max-w-xl translate-y-2 text-lg text-gray-300 "
          vars={{ duration: 0.8, delay: 0.4 }}
        >
          <PrismicRichText field={slice.primary.body} />
        </FadeIn>

        <div className="mt-10">
          {slice.primary.button.map((link) => (
            <FadeIn key={link.key}>
              <ButtonLink field={link} variant={link.variant} />
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CallToAction;