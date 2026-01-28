import { portfolioData as DATA } from "../../data/portfolioData";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        © {new Date().getFullYear()} {DATA.name}. Built with React.
      </div>
    </footer>
  );
}
