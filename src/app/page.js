import JaiDeepSmoker from "@/components/smoke";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div className="relative flex items-center justify-center w-screen h-screen">
      <div className="absolute">
        <JaiDeepSmoker />
      </div>

      <div className="z-10 w-full h-full pointer-events-none">
        <Hero />
      </div>

    </div>
  );
}
