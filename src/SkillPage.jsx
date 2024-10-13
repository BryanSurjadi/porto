// import html from "./src/assets/html.png";
// import css from "./src/assets/css.png";
// import js from "./src/assets/js.png";
// import react from "./src/assets/react.png";

const skills = [
  "/assets/html.png",
  "/assets/css.png",
  "/assets/js.png",
  "/assets/react.png",
  "/assets/express.png",
  "/assets/figma.png",
  "/assets/mongodb.png",
  "/assets/firebase.png",
  "/assets/java.png",
  "/assets/git.png",
];
export default function SkillPage() {
  return (
    <div
      className="min-h-screen  w-screen rounded-[100px] bg-primary flex flex-col-2 justify-start items-start"
      id="skills"
    >
      <div className="ml-[6vw] flex flex-col mt-28">
        <h1 className="xl:text-[140px] lg:text-8xl md:text-8xl sm:text-8xl text-6xl font-semibold ">
          Skills
        </h1>
        <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <div key={index}>
              <img
                src={skill}
                className="rounded-[50px] sm:w-48 sm:h-48 md:w-52 md:h-52 lg:w-80 lg:h-72 w-48 h-48 object-contain hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
