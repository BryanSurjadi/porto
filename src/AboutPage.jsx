import resume from "/assets/resume.pdf";
export default function AboutPage() {
  return (
    <div
      className="min-h-screen  w-screen rounded-[100px] bg-secondary flex flex-col-2 justify-start items-start"
      id="about"
    >
      <div className="ml-[6vw] flex flex-col mt-28">
        <h1 className="text-[140px] font-semibold ">About Me</h1>
        <h3 className="text-[32px] italic -mt-6">
          "Driven by curiosity, strengthened by perseverance."
        </h3>

        <p className="text-[28px] mt-16 w-4/5 text-left">
          An undergraduate student at Binus University with a focus on becoming
          a skilled{" "}
          <span className="font-bold">web and software developer</span>. My
          expertise includes building innovative digital solutions using
          technologies like React.js, Flutter, Firebase, MongoDB, and more. I
          emphasize creating seamless user experiences in all my projects.
        </p>

        <p className="text-[28px] mt-8 w-9/12 text-left">
          Beyond development, I manage{" "}
          <span className="font-bold">social media and design</span> strategies,
          driving brand visibility for multiple businesses. I'm passionate about
          learning and applying technology to solve real-world problems.
        </p>

        <p className="text-[28px] mt-8 w-9/12 text-left">
          Looking to the future, my goal is to join a company where I can{" "}
          <span className="font-bold">
            collaborate with a team to make a meaningful impact
          </span>{" "}
          to others. I am eager to further explore sectors like cloud computing
          and artificial intelligence, areas that spark my curiosity and that I
          am excited to learn more about.
        </p>
        <a
          href={resume}
          download="Resume"
          className="text-[28px] mt-6 underline italic font-bold"
        >
          DOWNLOAD CV
        </a>
      </div>
    </div>
  );
}
