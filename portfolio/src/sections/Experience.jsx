import { portfolioData as DATA } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2>Experience</h2>
       
      </div>
      <div class="grid">
        <div class="card">
           <div className="experience-list">
          {DATA.experience.map((job, index) => (
            <div className="experience-item" key={index}>

              {/* LEFT: Time */}
              <div className="experience-time">
                <span>{job.period}</span>
              </div>

              {/* RIGHT: Content */}
              <div className="experience-content">
                <h3>{job.role}</h3>
                <h4>{job.company}{','}{job.location}</h4>

                <ul>
                  {job.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>
        </div>

      </div>
    </section>
  );
}
