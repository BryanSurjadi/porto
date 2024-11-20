import { TypeAnimation } from "react-type-animation";
import { Icon } from "@iconify/react";

export default function HomePage() {
  return (
    <div
      className="min-h-screen  w-screen rounded-[75px] bg-primary flex flex-row flex-row-2 justify-start items-center"
      id="home"
    >
      <div className="ml-[6vw] flex flex-col">
        <div>
          <TypeAnimation
            sequence={["Bryan Surjadi", 1000]}
            wrapper="span"
            speed={10}
            className="xl:text-7xl lg:text-6xl md:text-6xl sm:text-6xl text-4xl font-semibold mb-[5vh]"
            repeat={Infinity}
          />
        </div>
        <div className="xl:pt-2 lg:pt-1 md:pt-0 ">
          <TypeAnimation
            sequence={[
              "Junior Software Developer",
              1000,
              "& a Designer ",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
            ]}
            wrapper="span"
            speed={30}
            className="xl:text-2xl lg:text-2xl md:text-xl sm:text-xl text-3xl"
            repeat={Infinity}
          />
        </div>
        <div className="flex flex-row mt-10 gap-6 z-10">
          <a
            href="https://github.com/BryanSurjadi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="mdi:github" className="size-12 cursor-pointer" />
          </a>
          <a
            href="https://www.instagram.com/bryansurjadi/?utm_source=ig_web_button_share_sheet"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="ri:instagram-fill" className="size-12 cursor-pointer" />
          </a>
          <a
            href="https://www.linkedin.com/in/bryan-surjadi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="mdi:linkedin" className="size-12 cursor-pointer" />
          </a>
        </div>
      </div>
      <div>
        <img
          className="xl:w-[800px] lg:w-[600px] md:w-[500px] w-[300px] h-auto absolute lg:right-0 md:right-0 sm:right-0 lg:bottom-0 md:bottom-0 sm:bottom-0 -bottom-3 right-0 overflow-hidden rounded-[75px]"
          src="/assets/pp.png"
          alt=""
        />
      </div>
    </div>
  );
}
