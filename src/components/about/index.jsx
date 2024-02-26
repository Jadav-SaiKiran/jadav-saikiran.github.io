import {sai} from "@/assets";
import {DM_Sans} from "next/font/google";
import Image from "next/image";

const dm_sans = DM_Sans({weights: [400, 500, 700], subsets: ['latin']});

const About = () => {
  return (
    <div className="bg-[#323232] w-full flex items-center justify-center">
      <div className={`flex flex-col mx-4 md:flex-row items-center justify-center max-w-6xl py-48 gap-10 ${dm_sans.className}`}>
        <Image src={sai} className="object-cover w-[250px] h-[350px] md:w-[400px] shadow-lg md:h-[550px] rounded-3xl shadow-black" />

        <div className="flex flex-col p-8 shadow-lg rounded-xl gap-3 shadow-black bg-[#252525]">
          <h1 className="text-lg font-bold text-center md:text-xl">Sai Kiran - Crafting Digital Experiences with a Vision 👁️✨</h1>
          <div className="flex flex-col text-sm font-medium text-center md:text-left md:text-lg gap-4 md:leading-5">
            <p>
      Hey there! I'm Jadhav Sai Kiran, a passionate computer science engineering student at the National Institute of Technology, Srinagar. 🚀 As a dedicated UI/UX designer, I embark on a journey to blend creativity with functionality, crafting digital experiences that resonate with users on a profound level. 💡
            </p>
            <p>
      With an insatiable curiosity for the ever-evolving world of technology, I am committed to staying at the forefront of design trends and user-centered methodologies. My goal is to not just create visually stunning interfaces but to ensure that every click, swipe, and interaction tells a seamless and intuitive story. 🌐
            </p>
            <p>
      Driven by a fervent enthusiasm for problem-solving and innovation, I find joy in the intricate dance between aesthetics and usability. Beyond the code and pixels, I believe in the power of empathy and understanding the end user's perspective, a principle that shapes the core of my design philosophy. 🤝💻
            </p>
            <p>Join me in this exhilarating journey as we transform ideas into visually captivating and user-friendly digital landscapes. Let's create a future where every click is a delightful experience! 🎨🚀
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
