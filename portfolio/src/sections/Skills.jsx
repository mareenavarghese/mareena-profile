import { portfolioData as DATA } from "../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-title"><h2>Skills</h2></div>
        <div className="grid">
          {DATA.skills.map((s) => (
            <div key={s} className="card">{s}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
