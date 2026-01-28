import myPhoto from "../assets/me.png";
import { portfolioData as DATA } from "../data/portfolioData";
import { GraduationCap } from "lucide-react";


export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <h1 className="hero-title">
            Senior Full-Stack Developer <br />
            Cybersecurity Graduate <br />
            Researcher
          </h1>

          <p className="hero-edu">
            I started my career building full-stack applications at scale, and along the way developed a strong interest in how systems fail and how they can be protected. Today, I combine hands-on engineering experience with cybersecurity research to design software that is resilient, secure, and trustworthy.
          </p>
          <div className="hero-edu">
              <GraduationCap size={18} color="#4f9cf9" />
            <span>
               Master of Applied Cybersecurity — Federation University Australia
            </span>
          </div>
          <div className="hero-cta">
            <a href="#projects" className="btn primary">View Portfolio</a>
            <a href="#contact" className="btn primary">Contact</a>
          </div>
        </div>

      </div>
    </section>
  );
}
