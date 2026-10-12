import { TypeAnimation } from "react-type-animation";
import { Icon } from "@iconify/react";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const hero = document.getElementById("home");
    const update = () => hero.style.setProperty("--portrait-scroll", `${Math.min(window.scrollY, hero.offsetHeight) * .16}px`);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      className="hero-section"
      id="home"
      onPointerMove={(event) => {
        if (event.pointerType !== "mouse") return;
        const bounds = event.currentTarget.getBoundingClientRect();
        event.currentTarget.style.setProperty("--portrait-x", `${Math.max(-24, Math.min(24, (event.clientX - bounds.left - bounds.width / 2) * .06))}px`);
        event.currentTarget.style.setProperty("--portrait-y", `${Math.max(-16, Math.min(16, (event.clientY - bounds.top - bounds.height / 2) * .04))}px`);
      }}
      onPointerLeave={(event) => {
        event.currentTarget.style.setProperty("--portrait-x", "0px");
        event.currentTarget.style.setProperty("--portrait-y", "0px");
      }}
    >
      <span className="hero-float-mark" aria-hidden="true">✦</span>
      <div className="hero-copy flex flex-col hero-copy-motion">
        <h1>
          <TypeAnimation
            sequence={["Bryan Surjadi", 1000]}
            wrapper="span"
            speed={10}
            className="hero-name font-semibold"
            repeat={Infinity}
          />
        </h1>
        <div className="xl:pt-2 lg:pt-1 md:pt-0 ">
          <TypeAnimation
            sequence={[
              "Software Developer",
              1000,
              "& a slice of social media",
              1000,
            ]}
            wrapper="span"
            speed={30}
            className="hero-role"
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
          className="hero-portrait hero-image-motion"
          src="/assets/pp-full.jpg"
          alt="Bryan Surjadi smiling at the camera"
        />
      </div>
    </div>
  );
}
