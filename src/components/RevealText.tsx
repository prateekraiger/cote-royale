"use client";

import { useGSAP } from "@gsap/react";
import { asText, RichTextField } from "@prismicio/client";
import clsx from "clsx";
import { useRef } from "react";
import { gsap } from "gsap";

gsap.registerPlugin(useGSAP);

type RevealTextProps = {
  field: RichTextField;
  id: String;
  className?: String;
  staggerAmount?: number;
  as?: React.ElementType;
  duration?: number;
  align?: "center" | "start" | "end";
};

export const RevealText = ({
  field,
  id,
  className,
  staggerAmount = 0.1,
  as: Component = "div",
  duration = 0.8,
  align = "start",
}: RevealTextProps) => {
  const ComponentRef = useRef<HTMLDivElement>(null);

  const words = asText(field).split(" ");

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.to(".reveal-text-word", {
          y: 0,
          stagger: staggerAmount,
          duration,
          ease: "power3.out",
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.to(".reveal-text-word", {
          y: 0,
          opacity: 1,
          stagger: 0,
          duration: 0.5,
          ease: "none",
        });
      });
    },
    { scope: ComponentRef },
  );

  return (
    <Component
      className={clsx(
        "reveal-text text-balance",
        align === "center" && "text-center",
        align === "end" && "text-right",
        align === "start" && "text-left",
        className,
      )}
      ref={ComponentRef}
    >
      {words.map((word, index) => (
        <span
          key={`${word}-${index}-${id}`}
          className="mb-0 inline-block overflow-hidden pb-4"
        >
          <span className="reveal-text-word mt-0 inline-block translate-y-[120%] will-change-transform">
            {word}
            {index < words.length - 1 ? <span>&nbsp;</span> : null}
          </span>
        </span>
      ))}
    </Component>
  );
};
