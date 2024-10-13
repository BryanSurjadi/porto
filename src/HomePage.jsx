import { TypeAnimation } from "react-type-animation";
import { Icon } from "@iconify/react";

export default function HomePage() {
  return (
    <div
      className="min-h-screen  w-screen rounded-[100px] bg-primary flex flex-row flex-row-2 justify-start items-center"
      id="home"
    >
      <div className="ml-[6vw] flex flex-col">
        <div>
          <TypeAnimation
            sequence={["Bryan Surjadi", 1000]}
            wrapper="span"
            speed={10}
            className="xl:text-9xl lg:text-8xl md:text-8xl sm:text-8xl text-6xl font-semibold mb-[5vh]"
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
            className="xl:text-4xl lg:text-3xl md:text-2xl sm:text-2xl text-3xl"
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
          className="xl:w-[800px] lg:w-[600px] md:w-[500px] w-[300px] h-auto absolute right-0 bottom-0  overflow-hidden rounded-[100px]"
          src="/assets/pp.png"
          alt=""
        />
      </div>
    </div>
  );
}
