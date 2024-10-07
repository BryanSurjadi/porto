import { Icon } from "@iconify/react";

const links = [
  "https://picsum.photos/id/417/384",
  "https://picsum.photos/id/117/384",
  "https://picsum.photos/id/7/384",
  "https://picsum.photos/id/75/384",
];

export default function ProjectPage() {
  return (
    <div
      className="min-h-screen  w-screen rounded-[100px] bg-secondary flex flex-col justify-start items-start"
      id="project"
    >
      <div className="ml-[6vw] flex flex-col mt-28 w-5/6 ">
        <h1 className="text-[140px] font-semibold ">Projects</h1>
      </div>

      <div className="min-w-[85vw] min-h-[50vh] ml-[6vw] mt-6 flex flex-col items-center justify-start bg-box pt-4 rounded-xl">
        <div className="w-full justify-center flex  border-b-4 pb-4 border-black">
          <div className=" flex items-start  justify-center mr-24">
            <Icon icon="material-symbols:arrow-back" className="size-10 " />
          </div>
          <div className=" items-center flex bg-secondary w-3/4 pl-4 font-medium">
            {" "}
            D: / Projects
          </div>
          <div className="bg-red-500 ml-32"></div>
        </div>

        <div className="text-3xl font-semibold w-full grid lg:grid-cols-4 items-center md:grid-cols-3 sm:grid-cols-2  pl-4 ">
          {links.map((link, index) => (
            <div key={index} className="relative items-center justify-center  lg:w-96 lg:h-72 md:w-72 sm:w-64 opacity-60 hover:opacity-100 hover:scale-105 transition-transform duration-300 ease-in-out  shadow-lg">
              <img className=" size-full" src={link} alt="" />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-2 opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                Project Title
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
