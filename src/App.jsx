import Navbar from "./Components/Navbar/Navbar";
import "../src/css/Navbar.css";
import Hero from "./Components/Hero/Hero";
import "../src/css/Hero.css";
import "../src/css/TechStack.css";
import TechStackItems from "./Components/TechStack/TechStackItems";
import About from "./About/About";
import MajorProjects from "./Components/Projects/MajorProjects";
import MiniProjects from "./Components/Projects/MiniProjects";
import ContactMe from "./Components/ContactMe/ContactMe";
import { Element } from "react-scroll";

const App = () => {
  return (
    <main>
      <div>
        <Navbar />
        <Hero />
        <TechStackItems />
        <Element name="about-section">
          <About />
        </Element>
        <Element name="projects-section">
          <MajorProjects />
        </Element>
        <MiniProjects />
        <Element name="contact-section">
          <ContactMe />
        </Element>
      </div>
    </main>
  );
};

export default App;
