'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import clsx from 'clsx';

gsap.registerPlugin(ScrollTrigger);

type FadeInProps = {
  children: React.ReactNode;
  vars?: gsap.TweenVars;
  start?: string;
  className?: string;
};

export const FadeIn = ({
  children,
  start = 'top 80%',
  vars = {},
  className,
}: FadeInProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animation = gsap.fromTo(
      containerRef.current,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start,
          toggleActions: 'play none none none',
        },
        ...vars,
      }
    );

    return () => {
      animation.kill();
    };
  }, [start, vars]);

  return (
    <div ref={containerRef} className={clsx('opacity-0', className)}>
      {children}
    </div>
  );
};