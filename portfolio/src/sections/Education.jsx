import { portfolioData as DATA } from "../data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-h2">Education</h2>

        <div className="experience-list">
          {DATA.education.map((edu, index) => (
            <div className="experience-item" key={index}>

              {/* LEFT COLUMN */}
              <div className="experience-time">
                <span>{edu.period}</span>
                <small>{edu.location}</small>
              </div>

              {/* RIGHT COLUMN */}
              <div className="experience-content">
                <h3>{edu.degree}</h3>
                <h4>{edu.school}</h4>

                <ul>
                  {edu.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
