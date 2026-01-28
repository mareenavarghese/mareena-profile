import myPhoto from "../../assets/me.png";
import { portfolioData as DATA } from "../../data/portfolioData";

const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <header>
     <div className="container header-inner">
  <div className="header-left">
    <img src={myPhoto} alt="Profile" className="header-photo" />
    <div>
      <h2 className="sub">{DATA.name}</h2>
      <p className="sub">{DATA.role}</p>
    </div>
  </div>

  <nav>
    {sections.map((s) => (
      <button key={s.id} onClick={() => scrollTo(s.id)}>
        {s.label}
      </button>
    ))}
  </nav>

  <a href="/resume.pdf" className="resume-btn" download>Resume</a>
</div>

    </header>
  );
}
