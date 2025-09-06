'use client';

import { createClient } from "@/prismicio";
import { formatPrice } from "@/utils/formatters";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicText } from "@prismicio/react";
import Link from "next/link";
import { FadeIn } from "./FadeIn";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type OtherFragrancesProps = {
  currentFragranceUid: string;
};

export const OtherFragrances = ({ currentFragranceUid }: OtherFragrancesProps) => {
  const [otherFragrances, setOtherFragrances] = useState<any[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const client = createClient();
    client.getAllByType("fragnance").then((allFragrances) => {
      const filteredFragrances = allFragrances.filter(
        (fragrance) => fragrance.uid !== currentFragranceUid,
      );
      setOtherFragrances(filteredFragrances);
    });
  }, [currentFragranceUid]);

  useEffect(() => {
    if (otherFragrances.length > 0) {
      const animation = gsap.fromTo(
        ".fragrance-item",
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );

      return () => {
        animation.kill();
      };
    }
  }, [otherFragrances]);

  return (
    <div ref={containerRef} className="container mx-auto px-4">
      <FadeIn>
        <h2 className="font-display mb-8 text-3xl text-white md:text-4xl">
          You may also like
        </h2>
      </FadeIn>

      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {otherFragrances.map((fragrance) => (
          <li key={fragrance.id} className="fragrance-item opacity-0">
            <Link href={`/fragrance/${fragrance.uid}`} className="group">
              <div className="relative aspect-square w-full transition-transform duration-500 group-hover:scale-105">
                <PrismicNextImage
                  field={fragrance.data.bottle_image}
                  width={600}
                  height={600}
                  className="h-auto w-full"
                  alt=""
                />
              </div>

              <div className="mt-8 space-y-1 text-white">
                <h3 className="font-display text-2xl">
                  <PrismicText field={fragrance.data.title} />
                </h3>
                <p className="text-sm text-neutral-400">Eau de Parfum</p>
                <p className="text-base font-light">
                  {formatPrice(fragrance.data.price)}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};