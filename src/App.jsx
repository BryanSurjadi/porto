import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import SkillPage from "./SkillPage";
import ProjectPage from "./ProjectsPage";
import ProjectDetail from "./ProjectDetail";
import Contacts from "./Contacts";

function AppContent() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScroll = () => setIsScrolled(window.scrollY > 48);
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
  }, [pathname]);

  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");
    if (!window.IntersectionObserver) return;
    document.body.classList.add("motion-ready");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => {
      observer.disconnect();
      document.body.classList.remove("motion-ready");
    };
  }, [pathname]);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)").matches) return;
    const grid = document.querySelector(".page-grid-follower");
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;
    let frame = 0;
    const animate = () => {
      currentX += (targetX - currentX) * 0.14;
      currentY += (targetY - currentY) * 0.14;
      grid.style.setProperty("--grid-x", `${currentX}px`);
      grid.style.setProperty("--grid-y", `${currentY}px`);
      frame = Math.abs(targetX - currentX) + Math.abs(targetY - currentY) > 0.5
        ? requestAnimationFrame(animate)
        : 0;
    };
    const move = (event) => {
      if (event.pointerType !== "mouse") return;
      targetX = event.clientX;
      targetY = event.clientY;
      if (grid.style.opacity !== "1") {
        currentX = targetX;
        currentY = targetY;
      }
      grid.style.opacity = "1";
      if (!frame) frame = requestAnimationFrame(animate);
    };
    const hide = () => { grid.style.opacity = "0"; };
    window.addEventListener("pointermove", move);
    document.addEventListener("pointerleave", hide);
    window.addEventListener("blur", hide);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", hide);
      window.removeEventListener("blur", hide);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className={`glass-nav${isScrolled ? " is-scrolled" : ""}`} aria-label="Primary navigation">
        <div className="glass-nav-inner">
          <Link className="nav-brand" to="/#home" smooth>Bryan<span>.</span></Link>
          <button type="button" className="nav-toggle md:hidden" onClick={toggleMenu} aria-label={isOpen ? "Close menu" : "Open menu"} aria-expanded={isOpen} aria-controls="mobile-nav">
            {isOpen ? (
              <Icon icon="mdi:close" className="text-3xl" />
            ) : (
              <Icon icon="mdi:menu" className="text-3xl" />
            )}
          </button>

          <ul className="nav-links hidden md:flex">
            <li>
              <Link to="/#home" smooth>
                Home
              </Link>
            </li>
            <li>
              <Link to="/#about" smooth>
                About
              </Link>
            </li>
            <li>
              <Link to="/#skills" smooth>
                Skills
              </Link>
            </li>
            <li>
              <Link to="/#project" smooth>
                Portfolio
              </Link>
            </li>
          </ul>
        </div>

        <ul
          id="mobile-nav"
          className={`${isOpen ? "flex" : "hidden"} nav-mobile flex-col md:hidden`}
        >
          <li onClick={toggleMenu}>
            <Link to="/#home" smooth>
              Home
            </Link>
          </li>
          <li onClick={toggleMenu}>
            <Link to="/#about" smooth>
              About
            </Link>
          </li>
          <li onClick={toggleMenu}>
            <Link to="/#skills" smooth>
              Skills
            </Link>
          </li>
          <li onClick={toggleMenu}>
            <Link to="/#project" smooth>
              Portfolio
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<><HomePage /><AboutPage /><SkillPage /><ProjectPage /><Contacts /></>} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <div className="page-grid-follower" aria-hidden="true" />
    </>
  );
}

export default function App() {
  return <BrowserRouter><AppContent /></BrowserRouter>;
}
