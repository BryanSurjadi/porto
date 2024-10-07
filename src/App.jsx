import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import SkillPage from "./SkillPage";
import ProjectPage from "./ProjectsPage";
// import Navbar from "./Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <nav className="w-1/3 h-10 fixed top-10 left-0 ml-[6vw]">
        <ul className="flex w-full h-full flex-row justify-between font-medium text-[25px]">
          <li className="hover:underline hover:text-orange-800 ">
            <Link to="#home" smooth>
              Home
            </Link>
          </li>
          <li className="hover:underline hover:text-orange-800">
            <Link to="#about" smooth>
              About
            </Link>
          </li>
          <li className="hover:underline hover:text-orange-800">
            <Link to="#skills" smooth>
              Skills
            </Link>
          </li>
          <li className="hover:underline hover:text-orange-800">
            <Link to="#about" smooth>
              Portfolio
            </Link>
          </li>
        </ul>
      </nav>

      <HomePage />
      <AboutPage />
      <SkillPage />
      <ProjectPage />
    </BrowserRouter>
  );
}
