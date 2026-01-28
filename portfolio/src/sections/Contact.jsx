import { Mail, Phone, MapPin, User } from "lucide-react";
import { portfolioData as DATA } from "../data/portfolioData";

const icons = {
  Email: Mail,
  Phone: Phone,
  Location: MapPin,
  "Professional Profiles": User,
};

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-h2">Contact</h2>

        <p className="contact-intro">
          I’m always open to discussing new opportunities, collaborations,
          and interesting projects. Feel free to reach out.
        </p>

        <div className="contact-cards">
          {DATA.contact.map((item, index) => {
            const Icon = icons[item.title] || User;

            return (
              <div className="contact-box" key={index}>
                <Icon className="contact-icon" size={22} />

                <h3>{item.title}</h3>

                {item.link ? (
                  <a href={item.link}>{item.value}</a>
                ) : (
                  <p>{item.value}</p>
                )}

                <ul className="contact-points">
                  {item.points.map((point, i) => {
                    if (point.startsWith("LinkedIn:")) {
                      const url = point.replace("LinkedIn:", "").trim();
                      return (
                        <li key={i}>
                          <a href={url} target="_blank" rel="noreferrer">
                            LinkedIn Profile
                          </a>
                        </li>
                      );
                    }

                    if (point.startsWith("GitHub:")) {
                      const url = point.replace("GitHub:", "").trim();
                      return (
                        <li key={i}>
                          <a href={url} target="_blank" rel="noreferrer">
                            GitHub Profile
                          </a>
                        </li>
                      );
                    }

                    if (point.startsWith("Resume:")) {
                      const url = point.replace("Resume:", "").trim();
                      return (
                        <li key={i}>
                          <a href={url} download>
                            Download Resume
                          </a>
                        </li>
                      );
                    }

                    return <li key={i}>{point}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
