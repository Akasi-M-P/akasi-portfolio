import Navbar from "./Components/Navbar/Navbar"
import "../src/css/Navbar.css"
import Hero from "./Components/Hero/Hero"
import "../src/css/Hero.css"
import "../src/css/TechStack.css"
import TechStackItems from "./Components/TechStack/TechStackItems"
import About from "./About/About";
import MajorProjects from "./Components/Projects/MajorProjects";
import MiniProjects from "./Components/Projects/MiniProjects";
const App = () => {
  return (
    <>
      <main>
        <div>
          <Navbar />
          <Hero />
          <TechStackItems />
          <About />
          <MajorProjects />
          <MiniProjects />
        </div>
      </main>
    </>
  );
};

export default App
