import { portfolioData as DATA } from "../data/portfolioData";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-title"><h2>Projects</h2></div>
      <div class="grid">
        <div class="card">
           <div className="experience-list">
          {DATA.projects.map((project, index) => (
            <div className="experience-item" key={index}>

              {/* LEFT: Time */}
              <div className="experience-time">
                <span>{project.period}</span>
                <small>{project.stack}</small>
              </div>

              {/* RIGHT: Content */}
              <div className="experience-content">
                 <h3>{project.title}</h3>

                <ul>
                  {project.bullets.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>
        </div>

      </div>
      </div>
    </section>
  );
}
