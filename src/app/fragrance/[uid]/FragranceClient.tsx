'use client';

import { useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface FragranceClientProps {
  children: React.ReactNode;
  page: any;
  uid: string;
}

export const FragranceClient = ({ children, page }: FragranceClientProps) => {
  const container = useRef(null);

  useGSAP(
    () => {
      if (!page) return;
      
      gsap.fromTo(
        ".bottle-image",
        {
          scale: 0.8,
          opacity: 0,
          y: 100,
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          ease: "power3.out",
          duration: 1,
          scrollTrigger: {
            trigger: ".bottle-image",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        ".product-title",
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          ease: "power3.out",
          duration: 1,
          delay: 0.2,
          scrollTrigger: {
            trigger: ".product-title",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        ".product-description",
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          ease: "power3.out",
          duration: 1,
          delay: 0.4,
          scrollTrigger: {
            trigger: ".product-description",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );
    },
    { scope: container, dependencies: [page] },
  );

  return <div ref={container}>{children}</div>;
};