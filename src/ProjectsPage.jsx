import { Link } from "react-router-dom";
import { projects } from "./projects";

export default function ProjectPage() {
  return (
    <section className="page-section projects-section" id="project">
      <div className="section-heading" data-reveal>
        <p className="section-eyebrow">SELECTED WORK</p>
        <h2>Projects</h2>
        <p>Recent work across software, AI tools, and digital growth.</p>
      </div>

      <div className="project-window" data-reveal>
        <div className="project-window-bar" aria-hidden="true">
          <span className="window-dots"><i /><i /><i /></span>
          <span>D: / Selected work</span>
          <span>{String(projects.length).padStart(2, "0")} items</span>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <Link className="project-card" key={project.slug} to={`/projects/${project.slug}`}>
              <div className={`project-art project-art--${project.slug}${project.cover ? " project-art--image" : ""}`} aria-hidden="true">
                <span className="project-art-index">{String(index + 1).padStart(2, "0")}</span>
                {project.cover ? <img src={project.cover} alt="" loading="lazy" /> : <><strong>{project.mark}</strong><span className="project-art-line" /></>}
              </div>
              <div className="project-card-info">
                <div>
                  <span>{project.category}</span>
                  <h3>{project.name}</h3>
                  <p>{project.summary}</p>
                  <ul className="project-tech">{project.tech.map((tech) => <li key={tech}>{tech}</li>)}</ul>
                </div>
                <span className="project-card-arrow" aria-hidden="true">↗</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
