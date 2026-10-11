import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { projects } from "./projects";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  const gallery = project?.images ?? Array(3).fill(null);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!project) {
    return <main className="detail-page"><Link className="detail-back" to="/#project">← Back to projects</Link><h1>Project not found</h1></main>;
  }

  return (
    <main className="detail-page">
      <Link className="detail-back" to="/#project" smooth>← Back to projects</Link>
      <div className="detail-heading">
        <p className="section-eyebrow">{project.category}</p>
        <h1>{project.name}</h1>
        <p>{project.summary}</p>
        <ul className="project-tech">{project.tech.map((tech) => <li key={tech}>{tech}</li>)}</ul>
        {(project.github || project.demo) && <div className="detail-links">
          {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer">View code on GitHub ↗</a>}
          {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer">Live demo ↗</a>}
        </div>}
      </div>
      {project.cover ? <img className="detail-cover" src={project.cover} alt={`${project.name} project preview`} /> :
        <div className={`detail-art project-art project-art--${project.slug}`} aria-label={`${project.name} visual placeholder`} role="img">
          <span className="project-art-index">PROJECT VISUAL / COMING SOON</span>
          <strong>{project.mark}</strong>
          <span className="project-art-line" />
        </div>}
      <div className="detail-body">
        <div>
          <p className="section-eyebrow">THE WORK</p>
          <h2>Overview</h2>
          <p>{project.overview}</p>
        </div>
        <div>
          <p className="section-eyebrow">FOCUS</p>
          <ul>{project.focus.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </div>
      <div className="detail-gallery" aria-label="Project screenshots">
        {gallery.map((image, index) => image ?
          <figure className="detail-shot" key={image.src}>
            <a href={image.src} target="_blank" rel="noopener noreferrer" aria-label={`Open full-size image: ${image.alt}`}>
              <img src={image.src} alt={image.alt} loading="lazy" />
            </a>
            <figcaption>{String(index + 1).padStart(2, "0")} / {image.alt}</figcaption>
          </figure> :
          <div className="detail-shot-placeholder" key={index}>
            {String(index + 1).padStart(2, "0")} <span>Project image coming soon</span>
          </div>) }
      </div>
      <Link className="detail-end-link" to="/#project" smooth>← All projects</Link>
    </main>
  );
}
