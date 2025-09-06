"use client";
import { FadeIn } from "@/components/FadeIn";
import { createClient } from "@/prismicio";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, PrismicText } from "@prismicio/react";
import { ButtonLink } from "@/components/ButtonLink";
import { HiPlus } from "react-icons/hi2";
import { FragranceAttributes } from "@/components/FragranceAttributes";
import { useEffect, useState } from "react";

type FragranceDisplayProps = {
  id: string;
};

export const FragranceDisplay = ({ id }: FragranceDisplayProps) => {
  const [fragrance, setFragrance] = useState<Content.FragnanceDocument | null>(null);

  useEffect(() => {
    const fetchFragrance = async () => {
      const client = createClient();
      const data = await client.getByID<Content.FragnanceDocument>(id);
      setFragrance(data);
    };
    fetchFragrance();
  }, [id]);

  if (!fragrance) return <div>Loading...</div>;

  return (
    <FadeIn
      className="relative z-10 grid min-h-[95vh] w-full translate-y-16 items-center justify-items-start border border-white/10 p-4 text-left md:p-14 lg:p-20"
      vars={{ duration: 1.5 }}
      start="top 70%"
    >
      <div className="absolute inset-0 z-0">
        <PrismicNextImage
          field={fragrance.data.feature_image}
          className="object-cover opacity-40 md:opacity-100"
          fill
          width={1150}
          quality={90}
          alt=""
        />
      </div>
      <div className="relative z-10 max-w-2xl">
        <h3 className="font-display mb-3 text-5xl md:text-6xl lg:text-7xl">
          <PrismicText field={fragrance.data.title} />
        </h3>

        <p className="mb-8 text-base font-semibold text-grey-300">
          Eau De Parfum
        </p>

        <div className="mb-10 max-w-md text-lg text-grey-300">
          <PrismicRichText field={fragrance.data.description} />
        </div>

        <FragranceAttributes
          scentProfile={fragrance.data.scent_profile}
          mood={fragrance.data.mood}
          className="mb-10"
        />

        <div className="flex flex-wrap gap-4">
          <ButtonLink href={`/fragrance/${fragrance.uid}`} variant="Secondary">
            Discover
          </ButtonLink>

          <ButtonLink href="#" variant="Primary">
            <HiPlus className="mr-2" />
            <span>Add To Bag</span>
          </ButtonLink>
        </div>
      </div>
    </FadeIn>
  );
};
