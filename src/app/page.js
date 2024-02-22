import {bg} from "@/assets";
import Image from "next/image";
import JaiDeepSmoker from "@/component/smoke";
import { Open_Sans } from "next/font/google";

export default function Home() {
  return (
    <div className="relative w-screen h-screen flex items-center justify-center">
      <div className="absolute">
        <JaiDeepSmoker />
      </div>

      <h1 className="text-9xl z-10 font-sans font-extrabold uppercase">Sai Nayak</h1>

    </div>
  );
}
