export default function Contacts() {
  return (
    <footer className="site-footer" id="contact">
      <div data-reveal>
        <p className="footer-eyebrow">GET IN TOUCH</p>
        <h2>Have something in mind?</h2>
        <a className="footer-email" href="mailto:bryansurjadi@gmail.com">bryansurjadi@gmail.com ↗</a>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Bryan Surjadi</span>
        <div className="footer-links">
          <a href="https://github.com/BryanSurjadi" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.instagram.com/bryansurjadi/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.linkedin.com/in/bryan-surjadi" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
