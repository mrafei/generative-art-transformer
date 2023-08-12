import Image from "next/image";
import SignupButton from "@/components/Home/SignupButton";
import type { FC } from "react";

const HomeSection1: FC = () => {
  return (
    <div className="flex flex-col gap-5 w-full lg:flex-row">
      <div className="flex flex-col w-full relative h-[30rem] gap-3 justify-center items-center md:flex-row ">
        <div className="relative h-full w-full">
          <Image
            fill
            objectFit="cover"
            src="/images/section1/real.jpg"
            className="w-full h-full top-0 left-0 object-cover rounded-2xl"
            alt="landscape image"
          />
        </div>
        <div className="relative h-full w-full">
          <Image
            fill
            objectFit="cover"
            className="w-full h-full top-0 left-0 object-cover rounded-2xl"
            src="/images/section1/converted.jpg"
            alt="artistic landscape image"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <div className="text-secondary text-3xl font-bold">
          Art Transformer
        </div>
        <div>by mrafei</div>
        <SignupButton />
        <p className="text-center mb-2">
          Transform your personal photos into stunning masterpieces
        </p>
        <ul className="pl-3">
          {[
            "Experience the magic of famous artists through AI-powered paintings",
            "Unleash your creativity with our generative AI tool",
            "Turn ordinary images into extraordinary works of art",
            "Elevate your visual storytelling with our innovative painting conversion tool",
          ].map((item, index) => (
            <li key={index} className="list-disc mt-1">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomeSection1;
