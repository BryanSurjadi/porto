import { Icon } from "@iconify/react";

export default function ProjectPage() {
  return (
    <div
      className="min-h-screen  w-screen rounded-[100px] bg-secondary flex flex-col justify-start items-start"
      id="skills"
    >
      <div className="ml-[6vw] flex flex-col mt-28 w-5/6 ">
        <h1 className="text-[140px] font-semibold ">Projects</h1>
      </div>

      <div className="w-5/6 ml-[6vw] mt-6 flex flex-col items-center justify-center bg-box p-6 rounded-xl">
        <div className="w-full justify-center flex ">
          <div className=" flex items-start  justify-center mr-24">
            <Icon icon="material-symbols:arrow-back" className="size-10 " />
          </div>
          <div className=" items-center flex bg-secondary w-3/4 pl-4 font-medium">
            {" "}
            D: / Projects
          </div>
          <div className="bg-red-500 ml-32"></div>
        </div>
        <div className="w-[83.3vw] bg-black h-2 mt-4 "> </div>
      </div>
    </div>
  );
}
