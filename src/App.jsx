import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { useState } from "react";
import { Icon } from "@iconify/react";

import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import SkillPage from "./SkillPage";
import ProjectPage from "./ProjectsPage";
import Contacts from "./Contacts";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <BrowserRouter>
      <nav className="fixed top-10 left-0 w-full z-10">
        <div className="ml-[6vw] flex justify-between items-center">
          {/* Brand or Logo */}

          {/* Hamburger icon for small screens */}
          <div className="md:hidden" onClick={toggleMenu}>
            {isOpen ? (
              <Icon icon="mdi:close" className="text-3xl cursor-pointer" />
            ) : (
              <Icon icon="mdi:menu" className="text-3xl cursor-pointer" />
            )}
          </div>

          {/* Links for medium to large screens */}
          <ul className="hidden md:flex w-1/3 flex-row justify-between font-medium text-[25px]">
            <li className="hover:underline hover:text-orange-800">
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
              <Link to="#project" smooth>
                Portfolio
              </Link>
            </li>
          </ul>
        </div>

        {/* Links for small screens */}
        <ul
          className={`${
            isOpen ? "flex" : "hidden"
          } flex-col items-center md:hidden bg-primary mt-4 space-y-4 text-2xl`}
        >
          <li onClick={toggleMenu}>
            <Link to="#home" smooth>
              Home
            </Link>
          </li>
          <li onClick={toggleMenu}>
            <Link to="#about" smooth>
              About
            </Link>
          </li>
          <li onClick={toggleMenu}>
            <Link to="#skills" smooth>
              Skills
            </Link>
          </li>
          <li onClick={toggleMenu}>
            <Link to="#project" smooth>
              Portfolio
            </Link>
          </li>
        </ul>
      </nav>

      <HomePage />
      <AboutPage />
      <SkillPage />
      <ProjectPage />
      <Contacts />
    </BrowserRouter>
  );
}
