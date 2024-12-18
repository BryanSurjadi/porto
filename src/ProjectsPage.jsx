import { Icon } from "@iconify/react";
import { useState } from "react";
import Carousel from "./Carousel";

const projects = [
  {
    link: "assets/4.png",
    git: "https://github.com/WinterRide/MeowLife.git",
    name: "React Native E-commerce App",
    description:
      "This school project involved developing a specialized mobile application to facilitate secure and seamless transactions for buying and selling cats. As part of a collaborative team effort, I was responsible for creating the initial design concepts and contributing to the frontend development, which laid the groundwork for the entire app",
    technologies: "React Native, Redux, Firebase",
    features: [
      "Account Register",
      "Edit Profile",
      "Cat Listing",
      "Request Listing",
      "Market Filter",
      "View Order",
      "Middleware",
      "Add Featured Products (Admin only)",
      "View Request Listing (Admin only)",
    ],
    photos: ["assets/4.png"],
  },
  {
    link: "assets/bnbmokup.png",
    git: "https://github.com/BryanSurjadi/bnb-clone.git",
    name: "MERN Booking App",
    description:
      "This project involved creating a comprehensive React-based application that replicates key functionalities of the Airbnb platform, including property listings, booking management, and user interactions. I independently developed the app to closely mimic the real Airbnb experience.",
    technologies: "MongoDB, Express.js, React.js, Node.js,Tailwind CSS",
    features: [
      "Login & Register",
      "JWT Token Authentication",
      "BCrypt Password Hashing",
      "Create & View Listings",
      "Edit & Delete Listings",
      "View & Order Listings",
      "Reservation System",
      "Booking Calendar",
    ],
    photos: ["assets/b/1.png", "assets/b/2.png", "assets/b/3.png"],
  },
  {
    link: "assets/3.png",
    git: "https://github.com/BryanSurjadi/brine_chatapp.git",
    name: "Flutter Chat App",
    description:
      "This was my first individual mobile application, created to learn the fundamentals of mobile development. I built a chat app that mimics core functionalities like sending messages and user authentication, using Flutter and Firebase.",
    technologies: "Flutter, Firebase, Cloud Firestore,GetX(State Management)",
    features: [
      "Real-time Messaging",
      "User Authentication",
      "Profile Management",
    ],
    photos: ["assets/l/1.png", "assets/l/2.png", "assets/l/3.png"],
  },
  {
    link: "assets/Admin.png",
    git: "https://github.com/BryanSurjadi/MakeupFinalProject.git",
    name: "ASP.NET E-Commerce",
    description:
      "A complete e-commerce website built with ASP.NET Initially started as a school project , I built an e-commerce web application for managing makeup product transactions, with roles for both admins and users. The project included implementing cookies and session verification to enhance security and user experience. ",
    technologies: "ASP.NET Core, SQL Server Database, Entity Framework, C#",
    features: [
      "MVC Architecture",
      "Domain Driven Design",
      "Login & Register",
      "Middleware",
      "Admin Dashboard",
      "User Management",
      "Product Management",
      "Cart",
      "Featured Products",
      "Order Management",
      "Product Reviews",
    ],
    photos: ["assets/m/1.png", "assets/m/2.png", "assets/m/3.png"],
  },
  {
    link: "assets/AG.png",
    git: "https://github.com/BryanSurjadi/AllGadget.git",
    name: "Simple Landing Page Web",
    description:
      "This was my first project, a simple gallery landing page built using HTML, CSS, and JavaScript, inspired by the design of the iBox Indonesian retailer website.This project marked the beginning of my journey into web development, sparking my interest in creating more complex applications.I gained a foundational understanding of programming and learned how to build a basic desktop web application, which motivated me to explore and develop more advanced projects.",
    technologies: "HTML, CSS, JavaScript",
    features: ["Gallery Page", "Landing Page", "Cross-browser Compatibility"],
    photos: ["assets/ag/1.png", "assets/ag/2.png", "assets/ag/3.png"],
  },
];

export default function ProjectPage() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <div
      className="min-h-screen w-screen rounded-[75px] rounded-br-none rounded-bl bg-secondary flex flex-col justify-start items-start"
      id="project"
    >
      <div className="ml-[6vw] flex flex-col mt-28 w-5/6 ">
        <h1 className="xl:text-7xl lg:text-6xl md:text-6xl sm:text-6xl text-4xl font-semibold ">
          Projects
        </h1>
        <a
          href="https://drive.google.com/drive/folders/1VUHZ7ngz7fennvyKPFKT3AyXKKvz84cm"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-3xl font-semibold hover:text-orange-800"
        >
          Portfolio in PDF Format
        </a>
      </div>

      <div className="w-[85vw] min-h-[50vh] ml-[6vw] mt-6 flex flex-col items-center justify-start bg-box pt-4 rounded-xl mb-[10vh]">
        <div className="w-full justify-center flex border-b-4 pb-4 border-black">
          <div className="flex items-start justify-center mr-4 lg:mr-24">
            <Icon icon="material-symbols:arrow-back" className="size-10" />
          </div>
          <div className="items-center flex bg-secondary w-full pl-4 font-medium text-sm sm:text-base md:text-lg lg:text-xl">
            D: / Projects
          </div>
          <div className="bg-red-500 ml-4 lg:ml-32"></div>
        </div>

        <div className="text-3xl gap-4 font-semibold w-full grid lg:grid-cols-3 items-center md:grid-cols-2 sm:grid-cols-1 mt-1 p-4 ">
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-full h-full"
              onClick={() => setActiveProject(project)}
            >
              <div className="relative items-center justify-center w-full h-full aspect-[16/9] opacity-100 hover:opacity-50 transition-transform duration-300 ease-in-out shadow-lg group ">
                <img
                  className="size-full aspect-auto object-fill group-hover:blur-sm rounded-xl"
                  src={project.link}
                  alt={project.name}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black blur-0 text-white text-center p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                  {project.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {activeProject && (
        <div className="top-0 left-0 fixed w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-3/4 max-h-[80vh] overflow-y-auto mt-10">
            <h2 className="text-3xl font-semibold">{activeProject.name}</h2>
            <div className="flex w-7/8 mt-4 ">
              <Carousel>
                {activeProject.photos.map((photo, index) => (
                  <img key={index} src={photo}></img>
                ))}
              </Carousel>
            </div>
            <p className="mt-4">{activeProject.description}</p>
            <a
              href={activeProject.git}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="mdi:github" className="size-12 cursor-pointer" />
            </a>
            <p className="mt-4 font-semibold w-full rounded ">
              Technologies Used:
            </p>
            <p className="bg-tertiary rounded text-2xl w-fit p-2 text-orange-300 font-medium">
              {activeProject.technologies}
            </p>
            <p className="mt-4 font-semibold">Features:</p>
            <ul className="list-disc pl-5">
              {activeProject.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button
              className="mt-6 px-4 py-2 bg-tertiary text-white rounded"
              onClick={() => setActiveProject(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
