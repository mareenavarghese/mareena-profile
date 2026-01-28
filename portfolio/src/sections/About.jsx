import { portfolioData as DATA } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-title"><h2>About Me</h2></div>
        {DATA.about.map((p, i) => <p className="about-content" key={i}>{p}</p>)}
      </div>
    </section>
  );
}
