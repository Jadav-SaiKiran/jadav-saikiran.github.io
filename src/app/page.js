'use client';

import JaiDeepSmoker from "@/components/smoke";
import Hero from "@/components/hero";
import { useEffect, useRef, useState } from "react";
import About from "@/components/about";

export function useIsVisible(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting)
    } 
    );

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}

export default function Home() {

  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);

  return (
    <div className="relative flex items-center justify-center w-screen h-screen">
      <div className="absolute">
        <JaiDeepSmoker />
      </div>

      <div className="z-10 w-full h-full pointer-events-none">
        <Hero />
        <div ref={ref1} className={`flex flex-row items-center justify-center transition-opacity gap-10 ease-in duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"} w-screen h-screen`} >
          <About />
        </div>
      </div>
    </div>
  );
}
