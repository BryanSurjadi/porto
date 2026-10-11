import resume from "/assets/resume.pdf";
import { Icon } from "@iconify/react";
export default function AboutPage() {
  return (
    <div
      className="page-section bg-white"
      id="about"
    >
      <div className="about-content flex flex-col" data-reveal>
        <h2 className="xl:text-7xl lg:text-6xl md:text-6xl sm:text-6xl text-4xl font-semibold ">
          About Me
        </h2>
        <p className="section-paragraph">
          I&apos;m a software developer most at home with backend and full-stack
          work. At <strong>Polytron Indonesia</strong>, I&apos;ve worked with the APIs,
          databases, and workflows that keep web products running. Outside of
          work, I build tools that use AI and automation to take repetitive
          steps out of creative and administrative tasks.
        </p>

        <p className="section-paragraph">
          I also handle social media for a brand: planning content, producing
          visuals and copy, and running Meta Ads campaigns. It gives me another
          view of how people find a product, respond to it, and use it.
        </p>

        <p className="section-paragraph">
          I co-authored a paper accepted at ICIMTECH that compares GraphQL and
          REST APIs across performance, resource use, and ease of implementation.
        </p>
        <a
          href={resume}
          download="Bryan-Surjadi-CV.pdf"
          className="cv-download"
        >
          <Icon icon="mdi:download" aria-hidden="true" />
          Download CV
        </a>
      </div>
    </div>
  );
}
