import Navbar from "./Components/Navbar/Navbar"
import "../src/css/Navbar.css"
import Hero from "./Components/Hero/Hero"
import "../src/css/Hero.css"
import "../src/css/TechStack.css"
import TechStackItems from "./Components/TechStack/TechStackItems"
const App = () => {

  return (
    <>
      <main>
        <div>
          <Navbar />
          <Hero />
        
            <TechStackItems />

        </div>
      </main>
    </>
  );
}

export default App
