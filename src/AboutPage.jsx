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
          I&apos;m a software developer drawn to backend and full-stack work.
          During a year-long internship at <strong>Polytron Indonesia</strong>, I helped
          build and improve internal systems, from APIs and data-heavy workflows
          to the interfaces people use every day. Lately, I&apos;ve been building
          AI-assisted tools that make creative and administrative work less repetitive.
        </p>

        <p className="section-paragraph">
          Outside of coding, I help a local brand with its online presence. I
          plan and create social content, and run Meta Ads campaigns. That work
          has made me think more about how people discover and connect with a product.
        </p>

        <p className="section-paragraph">
          I also co-authored a paper accepted at ICIMTECH 2026 comparing GraphQL
          and REST APIs across performance, resource use, and implementation effort.
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
