import Image from "next/image";
import {banner_lines} from "@/assets";
import { DM_Sans } from "next/font/google";
import Button from "@/components/button";

const dm_sans = DM_Sans({weights: [400, 500, 700], subsets: ['latin']});

const Hero = () => {
  return (
    <div className="relative flex items-center justify-center w-full h-full">
      <Image src={banner_lines} alt="banner lines" layout="fill" objectFit="cover" className="z-10" />
      <div className="z-20 flex flex-col items-center justify-center gap-12">
        <div className="flex flex-col items-center justify-center mx-2 gap-6">
          <h1 className="text-3xl font-bold text-center md:text-8xl text-[#F4C623]">Ui/Ux Designer <span>!</span></h1>
          <p className={`max-w-4xl text-sm text-center md:text-2xl ${dm_sans.className} pointer-events-auto`}>
            Embark on a design odyssey with Sai Kiran, a UI/UX virtuoso weaving visual allure and seamless functionality. Let&apos;s craft digital masterpieces, where innovation meets user satisfaction in every pixel
          </p>
        </div>
        <div className="flex pointer-events-auto gap-4">
          <Button content="Resume"/>
          <Button content="Get in touch"/>
          <Button content="Projects"/>
          <Button content="About"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
