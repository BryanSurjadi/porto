export default function ProjectPage() {
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
