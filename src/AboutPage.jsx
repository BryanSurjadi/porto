import resume from "/assets/resume.pdf";
export default function AboutPage() {
  return (
    <div
      className="min-h-screen  w-screen rounded-[75px] bg-secondary flex flex-col-2 justify-start items-start"
      id="about"
    >
      <div className="ml-[6vw] flex flex-col mt-28">
        <h1 className="xl:text-7xl lg:text-6xl md:text-6xl sm:text-6xl text-4xl font-semibold ">
          About Me
        </h1>
        <h3 className="xl:text-[28px] lg:text-4xl md:text-3xl sm:text-2xl text-2xl italic mt-6">
          "Driven by curiosity, strengthened by perseverance."
        </h3>

        <p className="xl:text-[22px] lg:text-[18px] md:text-[16px] sm:text-[14px] text-[12px] xl:mt-12 mt-8 lg:w-4/5 w-full  text-left">
          An undergraduate student at Binus University with a focus on becoming
          a skilled{" "}
          <span className="font-bold">web and software developer</span>. My
          expertise includes building innovative digital solutions using
          technologies like React.js, Flutter, Firebase, MongoDB, and more. I
          emphasize creating seamless user experiences in all my projects.
        </p>

        <p className="xl:text-[22px] lg:text-[18px] md:text-[16px] sm:text-[14px] text-[12px] xl:mt-12 mt-8 lg:w-4/5 w-full  text-left">
          Beyond development, I manage{" "}
          <span className="font-bold">social media and design</span> strategies,
          driving brand visibility for multiple businesses. I'm passionate about
          learning and applying technology to solve real-world problems.
        </p>

        <p className="xl:text-[22px] lg:text-[18px] md:text-[16px] sm:text-[14px] text-[12px] xl:mt-12 mt-8 lg:w-4/5 w-full  text-left">
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
          className="xl:text-[28px] lg:text-[23px] md:text-[21px] sm:text-[19px] text-[17px] mt-10  underline italic font-bold"
        >
          DOWNLOAD CV
        </a>
      </div>
    </div>
  );
}
