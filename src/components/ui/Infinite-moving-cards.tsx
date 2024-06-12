"use client";

import { cn } from "@/utils/cn";
import { collections } from "@wix/stores";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type CatProps = {
  items: collections.Collection[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
};

export const InfiniteMovingCards = ({ items, direction = "left", speed = "fast", pauseOnHover = true, className }: CatProps) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "10s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div ref={containerRef} className={cn("bg-teal-500 scroller relative z-20  max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]", className)}>
      <ul ref={scrollerRef} className={cn("bg-rose-500 flex gap-3 flex-nowrap", start && "animate-scroll ", pauseOnHover && "hover:[animation-play-state:paused]")}>
        {items.map((category: collections.Collection) => (
          <Link
            key={category._id}
            href={`/list?cat=${category.slug}`}
            className="bg-n-8 backdrop-blur-md flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/5 p-1 border border-n-5 transition-colors duration-500 ease-in-out hover:border-logo overflow-hidden"
          >
            <div className="bg-sky-600 relative w-full h-96">
              <Image src={category.media?.mainMedia?.image?.url || "/category.png"} alt={category.name || "Category"} fill sizes="20vw" className="object-cover hover:scale-110 transition-all duration-500" />
            </div>
            <h1 className="mt-5 font-sans font-light text-clip tracking-wide">{category.name}</h1>
          </Link>
        ))}
      </ul>
    </div>
  );
};
