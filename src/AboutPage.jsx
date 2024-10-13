import resume from "/assets/resume.pdf";
export default function AboutPage() {
  return (
    <div
      className="min-h-screen  w-screen rounded-[100px] bg-secondary flex flex-col-2 justify-start items-start"
      id="about"
    >
      <div className="ml-[6vw] flex flex-col mt-28">
        <h1 className="xl:text-[140px] lg:text-8xl md:text-8xl sm:text-8xl text-6xl font-semibold ">
          About Me
        </h1>
        <h3 className="xl:text-[32px] lg:text-5xl md:text-4xl sm:text-3xl text-3xl italic mt-6">
          "Driven by curiosity, strengthened by perseverance."
        </h3>

        <p className="xl:text-[24px] lg:text-[20px] md:text-[18px] sm:text-[16px] text-[13px] xl:mt-12 mt-8 lg:w-4/5 w-full  text-left">
          An undergraduate student at Binus University with a focus on becoming
          a skilled{" "}
          <span className="font-bold">web and software developer</span>. My
          expertise includes building innovative digital solutions using
          technologies like React.js, Flutter, Firebase, MongoDB, and more. I
          emphasize creating seamless user experiences in all my projects.
        </p>

        <p className="xl:text-[24px] lg:text-[20px] md:text-[18px] sm:text-[16px] text-[13px] xl:mt-8 mt-6 lg:w-9/12 w-full  text-left">
          Beyond development, I manage{" "}
          <span className="font-bold">social media and design</span> strategies,
          driving brand visibility for multiple businesses. I'm passionate about
          learning and applying technology to solve real-world problems.
        </p>

        <p className="xl:text-[24px] lg:text-[20px] md:text-[18px] sm:text-[16px] text-[13px] xl:mt-8 mt-6 lg:w-9/12 w-full  text-left">
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
          className="xl:text-[28px] lg:text-[23px] md:text-[21px] sm:text-[19px] text-[17px] mt-6  underline italic font-bold"
        >
          DOWNLOAD CV
        </a>
      </div>
    </div>
  );
}
