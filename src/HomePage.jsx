import { TypeAnimation } from "react-type-animation";
import { Icon } from "@iconify/react";

export default function HomePage() {
  return (
    <div
      className="h-screen  w-screen rounded-[100px] bg-primary flex flex-row flex-row-2 justify-start items-center"
      id="home"
    >
      <div className="ml-[6vw] flex flex-col">
        <div>
          <TypeAnimation
            sequence={["Bryan Surjadi", 1000]}
            wrapper="span"
            speed={10}
            className="text-9xl font-semibold mb-[5vh]"
            repeat={Infinity}
          />
        </div>
        <div className="pt-2 pl-1">
          <TypeAnimation
            sequence={[
              "Junior Software Developer",
              1000,
              "& Also a Designer ",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
            ]}
            wrapper="span"
            speed={30}
            className="text-4xl "
            repeat={Infinity}
          />
        </div>
        <div className="flex flex-row mt-10 gap-6">
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
          className="w-[800px] h-auto absolute right-0 bottom-0  overflow-hidden "
          src="/src/assets/pp.png"
          alt=""
        />
      </div>
    </div>
  );
}
