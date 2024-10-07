import resume from "./assets/resume.pdf";

// import html from "./src/assets/html.png";
// import css from "./src/assets/css.png";
// import js from "./src/assets/js.png";
// import react from "./src/assets/react.png";

const skills = [
  "/src/assets/html.png",
  "/src/assets/css.png",
  "/src/assets/js.png",
  "/src/assets/react.png",
  "/src/assets/express.png",
  "/src/assets/figma.png",
  "/src/assets/mongodb.png",
  "/src/assets/firebase.png",
  "/src/assets/java.png",
  "/src/assets/git.png",
];
export default function SkillPage() {
  return (
    <div
      className="h-screen  w-screen rounded-[100px] bg-primary flex flex-col-2 justify-start items-start"
      id="skills"
    >
      <div className="ml-[6vw] flex flex-col mt-28">
        <h1 className="text-[140px] font-semibold ">Skills</h1>
        <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skills.map((skill, index) => (
            <div key={index}>
              <img
                src={skill}
                className="rounded-[50px] w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 lg:w-80 lg:h-72 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
