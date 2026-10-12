const groups = [
  { title: "Languages", items: ["JavaScript", "TypeScript", "SQL"] },
  { title: "Backend", items: ["Node.js", "Express.js", "REST APIs", "JWT authentication", "Server-Sent Events"] },
  { title: "AI / Media", items: ["OpenAI API", "Embeddings & retrieval (RAG)", "ElevenLabs API", "faster-whisper", "FFmpeg"] },
  { title: "Data", items: ["PostgreSQL", "MySQL", "MongoDB", "Prisma", "Redis"] },
  { title: "Frontend", items: ["Next.js", "React", "HTML", "CSS", "EJS", "jQuery", "Bootstrap"] },
  { title: "Tools", items: ["Docker", "GitLab CI/CD", "Git", "k6"] },
  { title: "Spoken", items: ["Indonesian · native", "English · professional"] },
];

export default function SkillPage() {
  return (
    <section className="page-section skills-section" id="skills">
      <div className="section-heading" data-reveal>
        <p className="section-eyebrow">WHAT I USE</p>
        <h2>Skills</h2>
        <p>A compact view of the tools and disciplines behind the work.</p>
      </div>
      <div className="skill-groups" data-reveal>
        {groups.map((group) => (
          <div className="skill-group" key={group.title}>
            <h3>{group.title}</h3>
            <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        ))}
      </div>
    </section>
  );
}
